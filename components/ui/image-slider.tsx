"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageSliderProps {
  images: string[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg group">
      <img
        src={images[currentImage] || "/placeholder.svg"}
        alt="Plot image"
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {/* Slider Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={handlePrevImage}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white opacity-0 group-hover:opacity-100 duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNextImage}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white opacity-0 group-hover:opacity-100 duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentImage === index ? "bg-white scale-110" : "bg-white/60"}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  )
}
