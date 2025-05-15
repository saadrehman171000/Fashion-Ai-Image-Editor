"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Upload, ImageIcon, FileText, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function UploadPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match("image.*")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive",
      })
      return
    }

    // Check file size (limit to 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB",
        variant: "destructive",
      })
      return
    }

    setFile(file)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async () => {
    if (!file) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/process-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to process image');
      }

      const result = await response.json();

      // Navigate to results page with the processed image URL and metadata
      router.push(`/results?processedImage=${encodeURIComponent(result.processedImage)}&metadata=${encodeURIComponent(JSON.stringify(result.metadata))}`);
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error processing your image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancel = () => {
    setFile(null)
    setPreview(null)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Upload Your Fashion Image</h1>
            <p className="text-xl text-gray-600">
              Upload your clothing image to remove the background and extract detailed fashion metadata.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-3">
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  {!preview ? (
                    <div
                      className={`border-2 border-dashed rounded-lg p-8 text-center h-full flex flex-col items-center justify-center ${
                        dragActive ? "border-rose-500 bg-rose-50" : "border-gray-300"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <div className="flex flex-col items-center justify-center py-4">
                        <Upload className="h-16 w-16 text-gray-400 mb-4" />
                        <h3 className="text-xl font-medium text-gray-900 mb-2">Drag and drop your image</h3>
                        <p className="text-gray-500 mb-6">or click to browse from your computer</p>

                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={e => { console.log('File input changed'); handleChange(e); }}
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded inline-block text-lg"
                        >
                          Select Image
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="relative aspect-square max-h-[400px] flex items-center justify-center border rounded-lg overflow-hidden">
                        <img
                          src={preview || "/placeholder.svg"}
                          alt="Preview"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline" onClick={handleCancel}>
                          Cancel
                        </Button>

                        <Button
                          onClick={handleSubmit}
                          className="bg-rose-500 hover:bg-rose-600 text-white"
                          disabled={isUploading}
                        >
                          {isUploading ? (
                            <>
                              <div className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Processing...
                            </>
                          ) : (
                            "Process Image"
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">What You'll Get</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <ImageIcon className="h-5 w-5 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Background Removal</h4>
                        <p className="text-sm text-gray-600">Your image with the background automatically removed</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FileText className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Detailed Metadata</h4>
                        <p className="text-sm text-gray-600">Category, subcategory, colors, fit, texture, and more</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Instant Results</h4>
                        <p className="text-sm text-gray-600">Get your processed image and data in seconds</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-medium mb-2">Supported Formats</h4>
                    <p className="text-sm text-gray-600">JPEG, PNG, WebP</p>

                    <h4 className="font-medium mt-4 mb-2">Maximum File Size</h4>
                    <p className="text-sm text-gray-600">10MB</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold mb-2 text-blue-800">Pro Tip</h3>
            <p className="text-blue-700">
              For best results, use images with good lighting and a clear view of the clothing item. The more visible
              the details, the better our AI can analyze your fashion item.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
