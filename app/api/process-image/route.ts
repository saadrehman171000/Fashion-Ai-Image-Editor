import { NextRequest, NextResponse } from 'next/server';
import { RemoveBgError, removeBackgroundFromImageFile } from 'remove.bg';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

// Hardcoded config
const REMOVE_BG_API_KEY = "2QSJxgXRdq5iwpB6WBDLRGsL";
const MAX_FILE_SIZE = 10485760;
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function POST(req: NextRequest) {
  try {
    console.log('POST /api/process-image called');
    console.log('process.cwd():', process.cwd());

    // Ensure uploads directory exists
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    try {
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
        console.log('Created uploads directory:', uploadsDir);
      } else {
        console.log('Uploads directory already exists:', uploadsDir);
      }
    } catch (dirErr) {
      console.error('Error creating uploads directory:', dirErr);
      return NextResponse.json({ error: 'Failed to create uploads directory' }, { status: 500 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds limit' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type' },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Generate unique filename
    const timestamp = Date.now();
    const originalFilename = `original-${timestamp}.${file.type.split('/')[1]}`;
    const processedFilename = `processed-${timestamp}.png`;

    // Save original image
    const originalPath = path.join(uploadsDir, originalFilename);
    fs.writeFileSync(originalPath, buffer);

    // Create a temporary file for background removal
    const tempFilePath = path.join(os.tmpdir(), `temp-${timestamp}.${file.type.split('/')[1]}`);
    fs.writeFileSync(tempFilePath, buffer);

    // Remove background
    const outputFile = await removeBackgroundFromImageFile({
      path: tempFilePath,
      apiKey: REMOVE_BG_API_KEY,
      size: 'regular',
      type: 'auto',
    });
    fs.unlinkSync(tempFilePath);

    // Save processed image as PNG
    const base64Data = outputFile.base64img;
    if (!base64Data) {
      console.error('No base64img property returned from Remove.bg:', outputFile);
      return NextResponse.json({ error: 'Background removal failed' }, { status: 500 });
    }
    const processedBuffer = Buffer.from(base64Data, 'base64');
    const processedPath = path.join(uploadsDir, processedFilename);
    fs.writeFileSync(processedPath, processedBuffer);

    return NextResponse.json({
      originalImage: `/uploads/${originalFilename}`,
      processedImage: `/uploads/${processedFilename}`
    });

  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json(
      { error: 'Error processing image' },
      { status: 500 }
    );
  }
}