import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">Ready to Make Your Investment?</h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Connect with our expert team to find the perfect plot that matches your vision and budget.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <button className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg group hover-float">
            Schedule Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary-foreground/30 transition-all font-semibold border border-primary-foreground/30 text-lg hover-float">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  )
}
