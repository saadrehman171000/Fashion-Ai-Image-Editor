import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Upload, Cpu, Zap, Check } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-rose-50 to-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How FashionAI Works</h1>
              <p className="text-xl text-gray-600">
                Our advanced AI technology makes fashion image processing simple, fast, and accurate.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <div>
                  <div className="inline-block bg-rose-100 text-rose-500 font-medium px-4 py-1 rounded-full mb-4">
                    Step 1
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Upload Your Fashion Image</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Start by uploading your fashion image through our intuitive interface. You can drag and drop your
                    file or browse your computer to select it.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    We support all common image formats including JPEG, PNG, and WebP, with a maximum file size of 10MB.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Simple drag-and-drop interface</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Support for all major image formats</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Instant preview before processing</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-rose-200 rounded-full filter blur-3xl opacity-30"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Upload interface"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-xl relative"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <div className="order-2 md:order-1 relative">
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="AI processing"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-xl relative"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block bg-blue-100 text-blue-500 font-medium px-4 py-1 rounded-full mb-4">
                    Step 2
                  </div>
                  <h2 className="text-3xl font-bold mb-6">AI-Powered Processing</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Once your image is uploaded, our advanced AI algorithms go to work. First, we analyze the image to
                    identify the clothing item and separate it from the background.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Simultaneously, our AI extracts detailed metadata about the fashion item, including category,
                    subcategory, dominant colors, fit, texture, season, and more.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Advanced edge detection technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Fashion-specific AI training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Processing in seconds, not minutes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-block bg-green-100 text-green-500 font-medium px-4 py-1 rounded-full mb-4">
                    Step 3
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Get Your Results</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Within seconds, you'll receive your processed image with the background removed, ready to download
                    in PNG format with transparency.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    You'll also get comprehensive metadata about your fashion item, presented in an easy-to-understand
                    format. This data can be exported as JSON for integration with your systems.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>High-quality transparent PNG</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Detailed fashion metadata</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>JSON export for easy integration</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-64 h-64 bg-green-200 rounded-full filter blur-3xl opacity-30"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Results display"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-xl relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
              <p className="text-xl text-gray-600">
                Powered by cutting-edge AI and machine learning specifically trained on fashion imagery.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                    <Upload className="h-7 w-7 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Computer Vision</h3>
                  <p className="text-gray-600">
                    Our advanced computer vision algorithms can identify clothing items with exceptional accuracy, even
                    in complex images with multiple elements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Cpu className="h-7 w-7 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Deep Learning</h3>
                  <p className="text-gray-600">
                    Trained on millions of fashion images, our deep learning models understand the nuances of different
                    clothing types, styles, and textures.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Zap className="h-7 w-7 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cloud Processing</h3>
                  <p className="text-gray-600">
                    Our cloud infrastructure ensures fast processing times and scalability, handling thousands of images
                    simultaneously without compromising quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Popular Use Cases</h2>
              <p className="text-xl text-gray-600">
                See how businesses across the fashion industry are using our platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">E-commerce Product Photography</h3>
                  <p className="text-gray-600 mb-4">
                    Online retailers use our platform to quickly process product images for their websites, ensuring
                    consistent presentation across their catalog.
                  </p>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="E-commerce use case"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">Fashion Marketplaces</h3>
                  <p className="text-gray-600 mb-4">
                    Marketplaces use our metadata extraction to automatically categorize and tag user-uploaded product
                    images, improving searchability.
                  </p>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Marketplace use case"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">Fashion Apps</h3>
                  <p className="text-gray-600 mb-4">
                    Mobile apps integrate our API to offer users features like virtual try-on, style matching, and
                    wardrobe organization.
                  </p>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Fashion app use case"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">Fashion Magazines & Media</h3>
                  <p className="text-gray-600 mb-4">
                    Publications use our background removal to create clean, professional layouts for both print and
                    digital content.
                  </p>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Media use case"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Get answers to common questions about our platform.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How accurate is the background removal?",
                  answer:
                    "Our AI achieves over 98% accuracy in identifying and removing backgrounds from fashion images, even with complex items like lace or transparent fabrics.",
                },
                {
                  question: "What image formats do you support?",
                  answer:
                    "We support all major image formats including JPEG, PNG, WebP, and TIFF. The output is provided as a PNG with transparency.",
                },
                {
                  question: "How long does processing take?",
                  answer:
                    "Most images are processed within 2-5 seconds, depending on the complexity and size of the image.",
                },
                {
                  question: "Can I integrate this with my existing systems?",
                  answer:
                    "Yes, we offer a comprehensive API that allows you to integrate our image processing capabilities directly into your applications, websites, or workflows.",
                },
                {
                  question: "Is there a limit to how many images I can process?",
                  answer:
                    "The number of images you can process depends on your subscription plan. Our plans range from 50 images per month to unlimited processing for enterprise customers.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-rose-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Try It Yourself?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Experience the power of our fashion image processing technology firsthand.
            </p>
            <Link href="/upload">
              <Button size="lg" className="bg-white text-rose-500 hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
                Process an Image
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
