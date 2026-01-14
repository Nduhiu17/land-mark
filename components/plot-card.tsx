"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MapPin, Square, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"

interface Plot {
  id: string
  title: string
  type: "commercial" | "residential"
  price: number
  area: number
  location: string
  images: string[]
  featured?: boolean
}

export default function PlotCard({ plot }: { plot: Plot }) {
  const [currentImage, setCurrentImage] = useState(0)

  const formatPrice = (price: number) => {
    if (price >= 1000000) return `Ksh${(price / 1000000).toFixed(1)}M`
    if (price >= 1000) return `Ksh${(price / 1000).toFixed(1)}K`
    return `Ksh${price}`
  }

  const pricePerSqft = Math.round(plot.price / plot.area)

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage((prev) => (prev === 0 ? plot.images.length - 1 : prev - 1))
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage((prev) => (prev === plot.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group hover-float animate-scale-in">
      {/* Image Container with Slider */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <Link href={`/plots/${plot.id}`} className="absolute inset-0 z-10">
          <span className="sr-only">View details for {plot.title}</span>
        </Link>
        <img
          src={plot.images[currentImage] || "/placeholder.svg"}
          alt={plot.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
        <Badge
          className={`absolute top-3 right-3 z-20 ${
            plot.type === "commercial" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
          } animate-fade-in-right`}
        >
          {plot.type === "commercial" ? "Commercial" : "Residential"}
        </Badge>

        {/* Slider Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-2 z-20">
          <button
            onClick={handlePrevImage}
            className="bg-black/40 text-white p-1.5 rounded-full hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNextImage}
            className="bg-black/40 text-white p-1.5 rounded-full hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {plot.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${currentImage === index ? "bg-white scale-125" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/plots/${plot.id}`} className="hover:underline">
            {plot.title}
          </Link>
        </h3>

        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin size={16} />
          <span className="text-sm">{plot.location}</span>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 py-3 border-y border-border mb-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Area</p>
            <div className="flex items-center gap-1">
              <Square size={14} className="text-primary" />
              <span className="font-semibold text-foreground text-sm">{plot.area.toLocaleString()} sqft</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Price/Sqft</p>
            <div className="flex items-center gap-1">
              <TrendingUp size={14} className="text-accent" />
              <span className="font-semibold text-foreground text-sm">Ksh{pricePerSqft}/sqft</span>
            </div>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="space-y-3 mt-auto">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Total Price</p>
            <p className="font-bold text-primary text-2xl">{formatPrice(plot.price)}</p>
          </div>
          <Link href={`/plots/${plot.id}`} className="w-full">
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm hover-scale">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
