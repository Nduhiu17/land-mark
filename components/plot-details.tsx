"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { CheckCircle, MapPin, Zap } from "lucide-react"

interface Plot {
  id: string
  title: string
  type: "commercial" | "residential"
  price: number
  area: number
  location: string
  description: string
  amenities: string[]
  features: string[]
  possession: string
  approved: boolean
}

export default function PlotDetails({ plot }: { plot: Plot }) {
  const formatPrice = (price: number) => {
    if (price >= 1000000) return `Ksh${(price / 1000000).toFixed(1)}M`
    if (price >= 1000) return `Ksh${(price / 1000).toFixed(1)}K`
    return `Ksh${price}`
  }

  const pricePerSqft = Math.round(plot.price / plot.area)

  return (
    <div className="space-y-8">
      {/* Title and Price */}
      <div>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">{plot.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={20} />
              <span className="text-lg">{plot.location}</span>
            </div>
          </div>
          <Badge
            className={
              plot.type === "commercial" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
            }
          >
            {plot.type === "commercial" ? "Commercial" : "Residential"}
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <p className="text-muted-foreground text-sm mb-2">Total Price</p>
          <p className="text-2xl font-bold text-primary">{formatPrice(plot.price)}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-muted-foreground text-sm mb-2">Area</p>
          <p className="text-2xl font-bold text-foreground">{plot.area.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">sqft</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-muted-foreground text-sm mb-2">Price/Sqft</p>
          <p className="text-2xl font-bold text-accent">Ksh{pricePerSqft}</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-muted-foreground text-sm mb-2">Possession</p>
          <p className="text-2xl font-bold text-foreground">{plot.possession}</p>
        </Card>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">About This Property</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{plot.description}</p>
      </div>

      {/* Approval Status */}
      {plot.approved && (
        <Card className="p-6 bg-accent/10 border-accent/30">
          <div className="flex items-center gap-3">
            <CheckCircle size={24} className="text-accent" />
            <div>
              <p className="font-bold text-foreground">Plot Approved</p>
              <p className="text-sm text-muted-foreground">This plot has government approval and clear title</p>
            </div>
          </div>
        </Card>
      )}

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Zap size={24} className="text-primary" />
          Key Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {plot.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-secondary p-4 rounded-lg">
              <CheckCircle size={20} className="text-primary flex-shrink-0" />
              <span className="font-medium text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Amenities & Facilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {plot.amenities.map((amenity, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-secondary p-4 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span className="font-medium text-foreground">{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Highlights */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="text-xl font-bold text-foreground mb-4">Investment Highlights</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">✓</span>
            <span className="text-muted-foreground">
              Strategically located in a high-growth area with excellent appreciation potential
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">✓</span>
            <span className="text-muted-foreground">Easy bank loan approval due to government approved layout</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">✓</span>
            <span className="text-muted-foreground">Strong demand in the area with increasing rental yields</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">✓</span>
            <span className="text-muted-foreground">All modern amenities and infrastructure in place</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
