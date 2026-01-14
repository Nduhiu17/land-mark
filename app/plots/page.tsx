"use client"

import { useState, useMemo } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PlotFilters, { type FilterState } from "@/components/plot-filters"
import PlotCard from "@/components/plot-card"
import { ArrowUpDown } from "lucide-react"
import { allPlots, type Plot } from "@/lib/plot-data"

export default function PlotsPage() {
  const [filters, setFilters] = useState<FilterState>({
    type: "all",
    priceRange: [0, 10000000],
    areaRange: [0, 5000],
    location: "",
  })
  const [sortBy, setSortBy] = useState<"price-low" | "price-high" | "area">("price-low")

  const locations = Array.from(new Set(allPlots.map((p) => p.location)))

  const filteredPlots = useMemo(() => {
    const result = allPlots.filter((plot) => {
      if (filters.type !== "all" && plot.type !== filters.type) return false
      if (plot.price < filters.priceRange[0] || plot.price > filters.priceRange[1]) return false
      if (plot.area < filters.areaRange[0] || plot.area > filters.areaRange[1]) return false
      if (filters.location && plot.location !== filters.location) return false
      return true
    })

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === "area") {
      result.sort((a, b) => b.area - a.area)
    }

    return result
  }, [filters, sortBy])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Browse Our Properties</h1>
            <p className="text-lg text-muted-foreground">
              Discover {filteredPlots.length} premium plots matching your criteria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <PlotFilters filters={filters} onFiltersChange={setFilters} locations={locations} />
            </div>

            {/* Plots Grid */}
            <div className="lg:col-span-3">
              {/* Sort Options */}
              <div className="mb-8 flex justify-between items-center">
                <p className="text-muted-foreground font-medium">Showing {filteredPlots.length} results</p>
                <div className="flex items-center gap-2">
                  <ArrowUpDown size={18} className="text-muted-foreground" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="px-4 py-2 rounded-lg bg-secondary border border-border text-foreground font-medium"
                  >
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="area">Largest Area</option>
                  </select>
                </div>
              </div>

              {/* Plots Grid */}
              {filteredPlots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPlots.map((plot) => (
                    <PlotCard key={plot.id} plot={plot} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground font-medium">No plots found matching your criteria.</p>
                  <button
                    onClick={() =>
                      setFilters({
                        type: "all",
                        priceRange: [0, 10000000],
                        areaRange: [0, 5000],
                        location: "",
                      })
                    }
                    className="mt-4 text-primary font-semibold hover:underline"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
