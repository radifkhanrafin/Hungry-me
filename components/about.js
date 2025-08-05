import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 1985 by the Rossi family, Bella Vista has been serving authentic Italian cuisine for over three
              decades. Our passion for traditional recipes, combined with the finest imported ingredients, creates an
              unforgettable dining experience.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From our wood-fired pizzas to our handmade pasta, every dish tells a story of Italian heritage and
              culinary excellence. We believe that great food brings people together, creating memories that last a
              lifetime.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">38+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/italian-chef-cooking.png"
              alt="Chef cooking"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
