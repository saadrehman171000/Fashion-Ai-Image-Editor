import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
}

export default function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="mb-4 text-rose-400">
          <Quote className="h-8 w-8" />
        </div>
        <p className="text-gray-700 mb-6">{quote}</p>
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={avatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold">{author}</h4>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
