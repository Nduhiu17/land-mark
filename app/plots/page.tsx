"use client"

import { useState, useMemo } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PlotFilters, { type FilterState } from "@/components/plot-filters"
import PlotCard from "@/components/plot-card"
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react"
import { allPlots, type Plot } from "@/lib/plot-data"

export default function PlotsPage() {
  const [filters, setFilters] = useState<FilterState>({
    type: "all",
    priceRange: [0, 10000000],
    areaRange: [0, 5000],
    location: "",
  })
  const [sortBy, setSortBy] = useState<"price-low" | "price-high" | "area">("price-low")
  const [currentPage, setCurrentPage] = useState(1)
  const [plotsPerPage, setPlotsPerPage] = useState(6)

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

  // Pagination calculations
  const totalPages = Math.ceil(filteredPlots.length / plotsPerPage)
  const startIndex = (currentPage - 1) * plotsPerPage
  const endIndex = startIndex + plotsPerPage
  const currentPlots = filteredPlots.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  const handleSortChange = (newSort: typeof sortBy) => {
    setSortBy(newSort)
    setCurrentPage(1)
  }

  const handlePlotsPerPageChange = (newValue: number) => {
    setPlotsPerPage(newValue)
    setCurrentPage(1)
  }

  const generatePageNumbers = () => {
    const pages: (number | string)[] = []
    const maxPagesToShow = 5
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push("...")
      
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i)
      }
      
      if (currentPage < totalPages - 2) pages.push("...")
      pages.push(totalPages)
    }
    
    return pages
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 animate-fade-in-down">
            <h1 className="text-4xl font-bold text-foreground mb-2">Browse Our Properties</h1>
            <p className="text-lg text-muted-foreground">
              Discover {filteredPlots.length} premium plots matching your criteria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1 animate-fade-in-left">
              <PlotFilters filters={filters} onFiltersChange={handleFilterChange} locations={locations} />
            </div>

            {/* Plots Grid */}
            <div className="lg:col-span-3 animate-fade-in-right">
              {/* Sort & Pagination Options */}
              <div className="mb-8 space-y-4 sm:flex sm:justify-between sm:items-center sm:gap-4 animate-fade-in-up">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="flex items-center gap-2">
                    <ArrowUpDown size={18} className="text-muted-foreground flex-shrink-0" />
                    <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value as typeof sortBy)}
                      className="px-4 py-2 rounded-lg bg-secondary border border-border text-foreground font-medium hover-scale-sm transition-all text-sm sm:text-base"
                    >
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="area">Largest Area</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <label htmlFor="plots-per-page" className="text-sm text-muted-foreground whitespace-nowrap">
                      Per page:
                    </label>
                    <select
                      id="plots-per-page"
                      value={plotsPerPage}
                      onChange={(e) => handlePlotsPerPageChange(Number(e.target.value))}
                      className="px-3 py-2 rounded-lg bg-secondary border border-border text-foreground font-medium hover-scale-sm transition-all text-sm"
                    >
                      <option value={3}>3</option>
                      <option value={6}>6</option>
                      <option value={9}>9</option>
                      <option value={12}>12</option>
                    </select>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground font-medium">
                  {filteredPlots.length === 0 ? "0" : startIndex + 1}–{Math.min(endIndex, filteredPlots.length)} of {filteredPlots.length}
                </p>
              </div>

              {/* Plots Grid */}
              {filteredPlots.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-12">
                    {currentPlots.map((plot, index) => (
                      <div key={plot.id} className="animate-stagger-1" style={{ animationDelay: `${(index % 6) * 0.08}s` }}>
                        <PlotCard plot={plot} />
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 animate-fade-in-up">
                      {/* Mobile-friendly info */}
                      <div className="text-center sm:text-left text-sm text-muted-foreground">
                        <p className="font-medium">Page {currentPage} of {totalPages}</p>
                      </div>

                      {/* Pagination Controls */}
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
                        {/* Previous Button */}
                        <button
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-secondary border border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:bg-secondary/80 transition-all text-sm font-medium hover-scale-sm"
                        >
                          <ChevronLeft size={18} />
                          <span className="hidden sm:inline">Prev</span>
                        </button>

                        {/* Page Numbers */}
                        {generatePageNumbers().map((page, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              if (typeof page === "number") {
                                setCurrentPage(page)
                              }
                            }}
                            disabled={page === "..."}
                            className={`
                              px-3 py-2 rounded-lg border font-medium text-sm transition-all hover-scale-sm
                              ${
                                page === currentPage
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : page === "..."
                                    ? "bg-transparent border-transparent text-muted-foreground cursor-default"
                                    : "bg-secondary border-border text-foreground hover:bg-secondary/80"
                              }
                            `}
                          >
                            {page}
                          </button>
                        ))}

                        {/* Next Button */}
                        <button
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-secondary border border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:bg-secondary/80 transition-all text-sm font-medium hover-scale-sm"
                        >
                          <span className="hidden sm:inline">Next</span>
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16 animate-bounce-in">
                  <p className="text-xl text-muted-foreground font-medium">No plots found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setFilters({
                        type: "all",
                        priceRange: [0, 10000000],
                        areaRange: [0, 5000],
                        location: "",
                      })
                      setCurrentPage(1)
                    }}
                    className="mt-4 text-primary font-semibold hover:underline hover-scale-sm"
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
