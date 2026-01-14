"use client"

import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=aerial%20view%20of%20prime%20plots%20with%20green%20land)",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-accent animate-fade-in-down">
            <MapPin size={20} />
            <span className="text-sm font-semibold">Premium Locations Nationwide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight text-balance animate-fade-in-up">
            Your Dream Investment Awaits
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover premium commercial and residential plots in the most sought-after locations. Build your legacy with
            Landmark Estates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/plots"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg group hover-float"
            >
              Explore Plots
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all font-semibold border border-white/30 text-lg hover-float">
              Schedule Tour
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 pt-12 border-t border-white/20">
            <div className="text-center animate-stagger-1">
              <p className="text-3xl font-bold text-accent">500+</p>
              <p className="text-gray-300 text-sm">Plots Available</p>
            </div>
            <div className="text-center animate-stagger-2">
              <p className="text-3xl font-bold text-accent">25+</p>
              <p className="text-gray-300 text-sm">Locations</p>
            </div>
            <div className="text-center animate-stagger-3">
              <p className="text-3xl font-bold text-accent">10K+</p>
              <p className="text-gray-300 text-sm">Happy Investors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
