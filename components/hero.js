import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image src="/elegant-restaurant-interior.png" alt="Restaurant interior" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Bella Vista</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Authentic Italian Taste in the Heart of the City</p>
        <p className="text-lg mb-8 opacity-90">
          Experience the finest Italian cuisine with fresh ingredients, traditional recipes, and warm hospitality
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/menu">View Our Menu</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/reservations">Book a Table</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
