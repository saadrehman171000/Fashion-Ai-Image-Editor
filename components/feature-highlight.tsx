import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureHighlightProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureHighlight({ icon, title, description }: FeatureHighlightProps) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
