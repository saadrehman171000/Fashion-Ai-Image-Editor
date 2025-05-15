import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const imageId = searchParams.get('imageId');

    if (!imageId) {
      return NextResponse.json(
        { error: 'Image ID is required' },
        { status: 400 }
      );
    }

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    const imagePath = path.join(uploadsDir, imageId);

    if (!fs.existsSync(imagePath)) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      );
    }

    // Get image metadata
    const stats = fs.statSync(imagePath);
    const imageBuffer = fs.readFileSync(imagePath);
    const metadata = await sharp(imageBuffer).metadata();

    return NextResponse.json({
      imageUrl: `/uploads/${imageId}`,
      metadata: {
        size: stats.size,
        format: metadata.format,
        width: metadata.width,
        height: metadata.height,
        createdAt: stats.birthtime,
      }
    });

  } catch (error) {
    console.error('Error fetching results:', error);
    return NextResponse.json(
      { error: 'Error fetching results' },
      { status: 500 }
    );
  }
}
