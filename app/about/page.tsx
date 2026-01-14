import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  About Landmark Estates
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Your trusted partner in premium real estate investments since 2015
                </p>
              </div>
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about-us.jpg"
                  alt="Landmark Estates - About Us"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are committed to providing high-quality, strategically located plots that serve as excellent investments for our clients. Our mission is to make premium real estate accessible to everyone while maintaining the highest standards of transparency and customer service.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the leading real estate platform trusted by thousands of investors nationwide. We envision a future where quality land investments are transparent, accessible, and profitable for all our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Highlights */}
        <section className="bg-muted py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Premium Plots</h3>
                <p className="text-muted-foreground">
                  Handpicked properties across prime locations
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Happy Clients</h3>
                <p className="text-muted-foreground">
                  Thousands of satisfied customers who have invested with us
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="text-4xl font-bold text-primary mb-2">10+ Years</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Experience</h3>
                <p className="text-muted-foreground">
                  Trusted expertise in real estate investment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in complete transparency in all our dealings. Every property listing includes detailed information, verified documentation, and honest assessments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in every aspect of our business, from property selection to customer service.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Integrity</h3>
                <p className="text-muted-foreground">
                  Our word is our bond. We ensure all transactions are legal, verified, and conducted with complete honesty.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Your success is our success. We provide personalized support and guidance throughout your investment journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-20 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary-foreground">
              Ready to Invest?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Explore our premium plots and find your perfect investment opportunity today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/plots">
                <Button variant="secondary" size="lg">
                  Browse Plots
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
