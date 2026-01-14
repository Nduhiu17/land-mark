import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedPlots from "@/components/featured-plots"
import WhyChooseUs from "@/components/why-choose-us"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedPlots />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  )
}
