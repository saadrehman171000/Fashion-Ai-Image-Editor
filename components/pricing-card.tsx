import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  notIncluded?: string[]
  buttonText: string
  buttonLink: string
  highlighted?: boolean
}

export default function PricingCard({
  title,
  price,
  period = "per month",
  description,
  features,
  notIncluded = [],
  buttonText,
  buttonLink,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card
      className={`border-0 ${
        highlighted ? "shadow-xl ring-2 ring-rose-500 relative" : "shadow-lg hover:shadow-xl transition-shadow"
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader className={`pb-0 pt-8 ${highlighted ? "bg-rose-50" : ""}`}>
        <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
        <div className="text-center mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-gray-500 ml-1">{period}</span>}
        </div>
        <p className="text-gray-600 text-center mb-6">{description}</p>
      </CardHeader>
      <CardContent className={`p-6 ${highlighted ? "bg-rose-50" : ""}`}>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
          {notIncluded.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-400">
              <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={buttonLink}>
          <Button
            className={`w-full ${
              highlighted ? "bg-rose-500 hover:bg-rose-600 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"
            }`}
          >
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
