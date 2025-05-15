import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight, Check, ImageIcon, Database, Palette } from 'lucide-react'
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-rose-50 to-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                  Transform Your <span className="text-rose-500">Fashion Images</span> Instantly
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Upload clothing images to automatically remove backgrounds and extract detailed fashion metadata with
                  our AI-powered platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/upload">
                    <Button
                      size="lg"
                      className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full w-full sm:w-auto"
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/how-it-works">
                    <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full w-full sm:w-auto">
                      How It Works
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-rose-200 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Fashion image processing example"
                    width={600}
                    height={500}
                    className="rounded-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Background removed in 2.3s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Fashion Professionals</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform offers everything you need to streamline your fashion image processing workflow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                    <ImageIcon className="h-7 w-7 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Background Removal</h3>
                  <p className="text-gray-600">
                    Automatically remove backgrounds from fashion images with precision, creating clean, professional
                    product shots.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Transparent backgrounds (PNG)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Edge detection technology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Batch processing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Database className="h-7 w-7 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Metadata Extraction</h3>
                  <p className="text-gray-600">
                    Extract detailed fashion metadata from your images using advanced AI recognition technology.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Clothing categories & subcategories</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Fabric type & texture analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Season & occasion detection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Palette className="h-7 w-7 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Color Analysis</h3>
                  <p className="text-gray-600">
                    Identify and extract dominant colors from fashion items for better categorization and matching.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Dominant color extraction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Color palette generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Color code formats (HEX, RGB)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform makes fashion image processing simple and efficient in just a few steps.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-rose-500">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Upload Your Image</h3>
                <p className="text-gray-600">
                  Upload your fashion images through our easy-to-use interface. Drag and drop or browse your files.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-rose-500">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Automatic Processing</h3>
                <p className="text-gray-600">
                  Our AI algorithms automatically remove backgrounds and extract detailed fashion metadata.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-rose-500">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Get Results</h3>
                <p className="text-gray-600">
                  Download your processed images with transparent backgrounds and view the extracted metadata.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/how-it-works">
                <Button variant="outline" className="gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of fashion professionals who trust our platform for their image processing needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="This tool has revolutionized our product photography workflow. We've cut our image processing time by 75%!"
                author="Sarah Johnson"
                role="E-commerce Manager"
                avatar="/placeholder.svg?height=80&width=80"
              />
              <TestimonialCard
                quote="The metadata extraction is incredibly accurate. It's helped us organize our catalog more efficiently than ever before."
                author="Michael Chen"
                role="Fashion Photographer"
                avatar="/placeholder.svg?height=80&width=80"
              />
              <TestimonialCard
                quote="We've integrated this into our fashion app and our users love the detailed information they get about each item."
                author="Emma Rodriguez"
                role="App Developer"
                avatar="/placeholder.svg?height=80&width=80"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-rose-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Fashion Images?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of fashion professionals who are already using our platform to streamline their workflow.
            </p>
            <Link href="/upload">
              <Button
                size="lg"
                className="bg-white text-rose-500 hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
              >
                Try It Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
