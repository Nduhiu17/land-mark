import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageSlider from "@/components/ui/image-slider"
import PlotDetails from "@/components/plot-details"
import PlotMap from "@/components/plot-map"
import InquiryForm from "@/components/inquiry-form"
import RelatedPlots from "@/components/related-plots"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { allPlots } from "@/lib/plot-data"

export default async function PlotDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const plot = allPlots.find((p) => p.id === id) || allPlots[0]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/plots" className="flex items-center gap-2 text-primary hover:underline font-medium">
            <ChevronLeft size={18} />
            Back to Plots
          </Link>
        </div>
      </div>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery */}
          <ImageSlider images={plot.images} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <PlotDetails plot={plot} />
              <PlotMap plot={plot} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <InquiryForm plot={plot} />
            </div>
          </div>

          {/* Related Plots */}
          <RelatedPlots currentPlotId={plot.id} currentType={plot.type} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
