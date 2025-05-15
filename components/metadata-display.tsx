import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MetadataDisplayProps {
  metadata: {
    category: string
    subcategory: string
    dominantColors: string[]
    fit: string
    texture: string
    season: string
    occasion: string
    targetAudience: string
    [key: string]: any
  }
}

export default function MetadataDisplay({ metadata }: MetadataDisplayProps) {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Fashion Metadata</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Category</h4>
            <p className="font-medium">
              {metadata.category} - {metadata.subcategory}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Dominant Colors</h4>
            <div className="flex gap-2 flex-wrap">
              {Array.isArray(metadata.dominantColors) && metadata.dominantColors.length > 0 ? (
                metadata.dominantColors.map((color, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: color }}></div>
                    <span className="text-sm">{color}</span>
                  </div>
                ))
              ) : (
                <span className="text-sm text-gray-400">No dominant colors</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Fit</h4>
              <p>{metadata.fit}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Texture</h4>
              <p>{metadata.texture}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Season</h4>
              <p>{metadata.season}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Occasion</h4>
              <p>{metadata.occasion}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Target Audience</h4>
            <p>{metadata.targetAudience}</p>
          </div>

          <div className="pt-2">
            <h4 className="text-sm font-medium text-gray-500 mb-2">JSON Data</h4>
            <pre className="bg-gray-100 p-3 rounded-md text-xs overflow-auto max-h-40">
              {JSON.stringify(metadata, null, 2)}
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
