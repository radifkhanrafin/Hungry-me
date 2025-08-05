import Hero from "@/components/hero"
import FeaturedMenu from "@/components/featured-menu"
import About from "@/components/about"
import Contact from "@/components/contact"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedMenu />
      <About />
      <Contact />
      <Newsletter />
    </main>
  )
}
