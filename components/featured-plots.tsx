"use client"

import Link from "next/link"
import { allPlots } from "@/lib/plot-data"
import PlotCard from "./plot-card"
import { ArrowRight } from "lucide-react"

export default function FeaturedPlots() {
  const featuredPlots = allPlots.filter((plot) => plot.featured)

  return (
    <section id="featured" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Featured Properties</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium plots offering exceptional investment potential and prime locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPlots.map((plot, index) => (
            <div key={plot.id} className="animate-stagger-1" style={{ animationDelay: `${index * 0.1}s` }}>
              <PlotCard plot={plot} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <Link
            href="/plots"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all hover-scale"
          >
            View All Properties
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
