import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const teamMembers = [
  {
    name: "Marco Rossi",
    role: "Head Chef & Owner",
    image: "/italian-chef-portrait.png",
    description:
      "With over 20 years of experience in Italian cuisine, Marco brings authentic flavors from his hometown in Tuscany.",
  },
  {
    name: "Sofia Bianchi",
    role: "Sous Chef",
    image: "/female-chef-portrait.png",
    description: "Sofia specializes in traditional pasta making and has trained in some of Italy's finest restaurants.",
  },
  {
    name: "Giuseppe Romano",
    role: "Pizza Master",
    image: "/placeholder-gvizq.png",
    description:
      "Giuseppe is our certified Neapolitan pizza master, trained in Naples and passionate about authentic wood-fired pizzas.",
  },
]

const values = [
  {
    title: "Authenticity",
    description: "We stay true to traditional Italian recipes and cooking methods passed down through generations.",
  },
  {
    title: "Quality Ingredients",
    description: "We source the finest ingredients, many imported directly from Italy, to ensure exceptional taste.",
  },
  {
    title: "Family Tradition",
    description: "Our restaurant is built on family values, treating every guest as part of our extended family.",
  },
  {
    title: "Sustainability",
    description:
      "We're committed to sustainable practices, supporting local farmers and reducing our environmental impact.",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bella Vista</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A family-owned Italian restaurant bringing authentic flavors and warm hospitality to the heart of the city
          since 1985.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Bella Vista was born from a simple dream: to share the authentic taste of Italy with our community.
              Founded by the Rossi family in 1985, our restaurant has been a cornerstone of Italian dining for nearly
              four decades.
            </p>
            <p>
              What started as a small family business has grown into a beloved local institution, but we've never
              forgotten our roots. Every dish is prepared with the same passion and attention to detail that Nonna Rossi
              brought to her kitchen in Tuscany.
            </p>
            <p>
              From our handmade pasta to our wood-fired pizzas, we believe that great food is about more than just
              ingredients—it's about love, tradition, and bringing people together around the table.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Rossi family vintage photo"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <Badge variant="secondary" className="mb-3">
                  {member.role}
                </Badge>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-muted/50 rounded-lg p-8 mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">38+</div>
            <div className="text-sm text-muted-foreground">Years of Excellence</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50k+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Authentic Recipes</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">15</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Awards & Recognition</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-semibold mb-2">Best Italian Restaurant</h3>
              <p className="text-sm text-muted-foreground">City Food Awards 2023</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl mb-2">⭐</div>
              <h3 className="font-semibold mb-2">Excellence in Service</h3>
              <p className="text-sm text-muted-foreground">Restaurant Association 2022</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl mb-2">🍕</div>
              <h3 className="font-semibold mb-2">Best Pizza</h3>
              <p className="text-sm text-muted-foreground">Local Food Critics 2023</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
