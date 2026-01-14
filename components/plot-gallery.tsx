"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PlotGalleryProps {
  images: string[]
  title: string
}

export default function PlotGallery({ images, title }: PlotGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  if (!images || images.length === 0) {
    return <div className="w-full h-96 bg-muted rounded-lg" />
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden group">
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500"
      />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}
