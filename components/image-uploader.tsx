"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface ImageUploaderProps {
  setIsUploading: (isUploading: boolean) => void
}

export default function ImageUploader({ setIsUploading }: ImageUploaderProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }, [])

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
    if (!file) return

    setIsUploading(true)

    try {
      // In a real app, we would upload the file to the server here
      // and get back an ID for the processed image

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Navigate to results page with the image ID
      // In a real app, this would be the ID returned from the server
      const mockImageId = "img_" + Math.random().toString(36).substring(2, 15)
      router.push(`/results?id=${mockImageId}`)
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error processing your image. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleCancel = () => {
    setFile(null)
    setPreview(null)
  }

  return (
    <div className="w-full">
      {!preview ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            dragActive ? "border-rose-500 bg-rose-50" : "border-gray-300"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center py-4">
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">Drag and drop your image</h3>
            <p className="text-sm text-gray-500 mb-4">or click to browse from your computer</p>

            <input id="file-upload" type="file" className="hidden" accept="image/*" onChange={handleChange} />
            <label htmlFor="file-upload">
              <Button variant="outline" className="cursor-pointer" type="button">
                Select Image
              </Button>
            </label>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative aspect-square max-h-[400px] flex items-center justify-center border rounded-lg overflow-hidden">
            <img src={preview || "/placeholder.svg"} alt="Preview" className="max-h-full max-w-full object-contain" />
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>

            <Button onClick={handleSubmit} className="bg-rose-500 hover:bg-rose-600 text-white">
              Process Image
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
