"use client"
import PlotCard from "./plot-card"
import { allPlots } from "@/lib/plot-data"

export default function RelatedPlots({ currentPlotId, currentType }: { currentPlotId: string; currentType: string }) {
  const relatedPlots = allPlots.filter((plot) => plot.type === currentType && plot.id !== currentPlotId).slice(0, 3)

  if (relatedPlots.length === 0) return null

  return (
    <div className="mt-20 pt-20 border-t border-border">
      <h2 className="text-3xl font-bold text-foreground mb-8">Similar Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPlots.map((plot) => (
          <PlotCard key={plot.id} plot={plot} />
        ))}
      </div>
    </div>
  )
}
