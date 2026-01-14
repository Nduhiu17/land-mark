import { Award, Shield, MapPin, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: Award,
    title: "Prime Locations",
    description: "Strategically chosen plots in high-growth areas with excellent connectivity and infrastructure.",
  },
  {
    icon: Shield,
    title: "Legal Security",
    description: "Complete transparency with verified documents and hassle-free legal compliance assistance.",
  },
  {
    icon: MapPin,
    title: "Investment Potential",
    description: "Properties in emerging markets with strong appreciation potential and rental yields.",
  },
  {
    icon: Zap,
    title: "Expert Support",
    description: "Dedicated investment advisors to guide you through every step of the buying process.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Landmark Estates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide more than just plots—we offer peace of mind and investment security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
