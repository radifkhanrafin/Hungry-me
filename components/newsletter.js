import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Newsletter() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our newsletter for special offers, new menu items, and exclusive events
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input type="email" placeholder="Enter your email" className="bg-background text-foreground" />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
