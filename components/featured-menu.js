import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const featuredDishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil, and olive oil",
    price: "$18",
    image: "/margherita-pizza.png",
    tags: ["Vegetarian", "Popular"],
  },
  {
    id: 2,
    name: "Osso Buco",
    description: "Braised veal shanks with vegetables, white wine and broth",
    price: "$32",
    image: "/osso-buco.png",
    tags: ["Chef's Special"],
  },
  {
    id: 3,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers",
    price: "$12",
    image: "/classic-tiramisu.png",
    tags: ["Dessert", "Popular"],
  },
]

export default function FeaturedMenu() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Dishes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved dishes, crafted with passion and the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredDishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <span className="text-lg font-bold text-primary">{dish.price}</span>
                </div>
                <p className="text-muted-foreground mb-4">{dish.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dish.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
