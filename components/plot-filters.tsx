"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"

export interface FilterState {
  type: "all" | "commercial" | "residential"
  priceRange: [number, number]
  areaRange: [number, number]
  location: string
}

interface PlotFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  locations: string[]
}

export default function PlotFilters({ filters, onFiltersChange, locations }: PlotFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleReset = () => {
    onFiltersChange({
      type: "all",
      priceRange: [0, 10000000],
      areaRange: [0, 5000],
      location: "",
    })
  }

  const formatPrice = (price: number) => {
    if (price >= 1000000) return `Ksh${(price / 1000000).toFixed(0)}M`
    if (price >= 1000) return `Ksh${(price / 1000).toFixed(0)}K`
    return `Ksh${price}`
  }

  return (
    <div className="space-y-6">
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="md:hidden w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold"
      >
        {isExpanded ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Filters Container */}
      <div className={`${isExpanded ? "block" : "hidden"} md:block space-y-6 bg-secondary p-6 rounded-lg`}>
        {/* Plot Type */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Plot Type</label>
          <div className="flex gap-2 flex-wrap">
            {(["all", "commercial", "residential"] as const).map((type) => (
              <button
                key={type}
                onClick={() =>
                  onFiltersChange({
                    ...filters,
                    type: type,
                  })
                }
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filters.type === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {type === "all" ? "All Types" : type === "commercial" ? "Commercial" : "Residential"}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Location</label>
          <Select value={filters.location} onValueChange={(value) => onFiltersChange({ ...filters, location: value })}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Price Range: {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
          </label>
          <Slider
            min={0}
            max={10000000}
            step={100000}
            value={filters.priceRange}
            onValueChange={(value) =>
              onFiltersChange({
                ...filters,
                priceRange: [value[0], value[1]],
              })
            }
            className="w-full"
          />
        </div>

        {/* Area Range */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Area Range: {filters.areaRange[0].toLocaleString()} - {filters.areaRange[1].toLocaleString()} sqft
          </label>
          <Slider
            min={0}
            max={5000}
            step={100}
            value={filters.areaRange}
            onValueChange={(value) =>
              onFiltersChange({
                ...filters,
                areaRange: [value[0], value[1]],
              })
            }
            className="w-full"
          />
        </div>

        {/* Reset Button */}
        <Button onClick={handleReset} variant="outline" className="w-full bg-transparent">
          <X size={16} className="mr-2" />
          Reset Filters
        </Button>
      </div>
    </div>
  )
}
