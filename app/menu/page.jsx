import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const menuCategories = {
  starters: [
    {
      name: "Bruschetta Classica",
      description: "Toasted bread with fresh tomatoes, basil, and garlic",
      price: "$12",
      image: "/classic-bruschetta.png",
      tags: ["Vegetarian", "Popular"],
    },
    {
      name: "Antipasto Platter",
      description: "Selection of cured meats, cheeses, and marinated vegetables",
      price: "$18",
      image: "/antipasto-platter.png",
      tags: ["Sharing"],
    },
    {
      name: "Calamari Fritti",
      description: "Crispy fried squid rings with marinara sauce",
      price: "$16",
      image: "/calamari-fritti.png",
      tags: ["Seafood"],
    },
  ],
  mains: [
    {
      name: "Spaghetti Carbonara",
      description: "Classic Roman pasta with eggs, pancetta, and pecorino cheese",
      price: "$22",
      image: "/spaghetti-carbonara.png",
      tags: ["Popular"],
    },
    {
      name: "Osso Buco",
      description: "Braised veal shanks with vegetables and white wine",
      price: "$32",
      image: "/osso-buco.png",
      tags: ["Chef's Special"],
    },
    {
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, and basil",
      price: "$18",
      image: "/margherita-pizza.png",
      tags: ["Vegetarian", "Popular"],
    },
    {
      name: "Branzino al Sale",
      description: "Mediterranean sea bass baked in sea salt crust",
      price: "$28",
      image: "/branzino-al-sale.png",
      tags: ["Seafood", "Gluten-Free"],
    },
  ],
  desserts: [
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers",
      price: "$12",
      image: "/classic-tiramisu.png",
      tags: ["Popular"],
    },
    {
      name: "Panna Cotta",
      description: "Silky vanilla custard with berry compote",
      price: "$10",
      image: "/creamy-panna-cotta.png",
      tags: ["Gluten-Free"],
    },
    {
      name: "Cannoli Siciliani",
      description: "Crispy shells filled with sweet ricotta and chocolate chips",
      price: "$14",
      image: "/cannoli-siciliani.png",
      tags: ["Traditional"],
    },
  ],
  drinks: [
    {
      name: "Chianti Classico",
      description: "Full-bodied red wine from Tuscany",
      price: "$45",
      image: "/chianti-wine-bottle.png",
      tags: ["Wine"],
    },
    {
      name: "Aperol Spritz",
      description: "Italian aperitif with Aperol, Prosecco, and soda",
      price: "$12",
      image: "/aperol-spritz.png",
      tags: ["Cocktail"],
    },
    {
      name: "Espresso",
      description: "Traditional Italian coffee",
      price: "$4",
      image: "/espresso-cup.png",
      tags: ["Coffee"],
    },
  ],
}

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our authentic Italian dishes, crafted with the finest ingredients and traditional recipes
        </p>
      </div>

      <Tabs defaultValue="starters" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="starters">Starters</TabsTrigger>
          <TabsTrigger value="mains">Main Courses</TabsTrigger>
          <TabsTrigger value="desserts">Desserts</TabsTrigger>
          <TabsTrigger value="drinks">Drinks</TabsTrigger>
        </TabsList>

        {Object.entries(menuCategories).map(([category, items]) => (
          <TabsContent key={category} value={category}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <span className="text-lg font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
