import Image from "next/image"
import { Card } from "@/components/ui/card"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Main dining room",
    category: "Interior",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Wood-fired pizza oven",
    category: "Kitchen",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Fresh pasta preparation",
    category: "Food",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Wine cellar",
    category: "Interior",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Chef plating pasta",
    category: "Kitchen",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Romantic table setting",
    category: "Interior",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Fresh ingredients",
    category: "Food",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Outdoor patio",
    category: "Interior",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Tiramisu dessert",
    category: "Food",
  },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Take a visual journey through Bella Vista - from our elegant dining spaces to our delicious dishes and
          passionate team at work.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 text-black px-2 py-1 rounded text-sm font-medium">{image.category}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Follow Us on Instagram</h2>
        <p className="text-muted-foreground mb-6">Stay updated with our latest dishes and behind-the-scenes moments</p>
        <div className="inline-flex items-center space-x-2 text-primary">
          <span>@bellavistarestaurant</span>
        </div>
      </div>
    </div>
  )
}
