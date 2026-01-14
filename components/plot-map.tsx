"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface Plot {
  title: string
  location: string
  coordinates: { lat: number; lng: number }
}

declare global {
  interface Window {
    google: any
  }
}

export default function PlotMap({ plot }: { plot: Plot }) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Initialize map when component mounts
    if (!mapRef.current || mapInstanceRef.current) return

    // Create a simple map implementation without requiring API key
    const initializeMap = () => {
      if (!mapRef.current) return

      mapRef.current.innerHTML = ""

      // Create a visual map container with placeholder
      const mapContainer = document.createElement("div")
      mapContainer.className =
        "w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center relative overflow-hidden"

      // Add a simple representation
      const mapContent = document.createElement("div")
      mapContent.className = "text-center z-10"
      mapContent.innerHTML = `
        <div class="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div class="flex items-center justify-center gap-2 mb-4 text-blue-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span class="font-bold text-lg">Map Location</span>
          </div>
          <p class="text-gray-700 font-medium">${plot.location}</p>
          <p class="text-gray-500 text-sm mt-2">Coordinates: ${plot.coordinates.lat.toFixed(4)}, ${plot.coordinates.lng.toFixed(4)}</p>
          <button class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm" onclick="window.open('https://www.google.com/maps/search/${plot.coordinates.lat},${plot.coordinates.lng}', '_blank')">
            Open in Google Maps
          </button>
        </div>
      `
      mapContainer.appendChild(mapContent)
      mapRef.current.appendChild(mapContainer)
    }

    initializeMap()
  }, [plot])

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
        <MapPin size={24} className="text-primary" />
        Location
      </h2>
      <Card className="p-6">
        <div ref={mapRef} className="w-full" />
        <div className="mt-6 p-4 bg-secondary rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Address</p>
          <p className="font-bold text-foreground text-lg">{plot.location}</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Latitude</p>
              <p className="font-mono font-bold text-foreground">{plot.coordinates.lat.toFixed(4)}°</p>
            </div>
            <div>
              <p className="text-muted-foreground">Longitude</p>
              <p className="font-mono font-bold text-foreground">{plot.coordinates.lng.toFixed(4)}°</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
