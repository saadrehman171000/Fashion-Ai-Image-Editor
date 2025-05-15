"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MetadataDisplay from "@/components/metadata-display"
import { ArrowLeft, Download } from "lucide-react"

export default function ResultsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const processedImage = searchParams.get("processedImage")
  const metadataParam = searchParams.get("metadata")
  const [metadata, setMetadata] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (processedImage && metadataParam) {
      try {
        setMetadata(JSON.parse(decodeURIComponent(metadataParam)))
      } catch {
        setMetadata({ note: "Could not parse metadata." })
      }
      setLoading(false)
    } else {
      router.push("/")
    }
  }, [processedImage, metadataParam, router])

  const handleNewUpload = () => {
    router.push("/")
  }

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement("a")
      link.href = processedImage
      link.download = "processed-fashion-image.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Button variant="ghost" onClick={handleNewUpload} className="mb-6 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Upload New Image
          </Button>

          <h1 className="text-3xl font-bold text-gray-900 mb-8">Processing Results</h1>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-rose-500 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Processing your image...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0 relative">
                  <div className="bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat h-full w-full absolute"></div>
                  {processedImage && (
                    <div className="relative aspect-square max-h-[600px] flex items-center justify-center p-4">
                      <Image
                        src={processedImage || "/placeholder.svg"}
                        alt="Processed fashion image with background removed"
                        width={400}
                        height={600}
                        className="max-h-full object-contain"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              <div>
                <Button
                  onClick={handleDownload}
                  className="mb-6 bg-rose-500 hover:bg-rose-600 text-white flex items-center gap-2"
                >
                  <Download className="h-4 w-4" /> Download Image
                </Button>

                {metadata && <MetadataDisplay metadata={metadata} />}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
