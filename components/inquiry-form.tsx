"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageSquare } from "lucide-react"

interface Plot {
  title: string
  price: number
  area: number
}

export default function InquiryForm({ plot }: { plot: Plot }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const formatPrice = (price: number) => {
    if (price >= 1000000) return `Ksh${(price / 1000000).toFixed(1)}M`
    if (price >= 1000) return `Ksh${(price / 1000).toFixed(1)}K`
    return `Ksh${price}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  return (
    <Card className="p-6 sticky top-24">
      <h3 className="text-2xl font-bold text-foreground mb-6">Interested in This Plot?</h3>

      {submitted ? (
        <div className="text-center py-8 bg-accent/10 rounded-lg border border-accent/20">
          <div className="text-4xl mb-3">✓</div>
          <p className="font-bold text-foreground mb-2">Thank You!</p>
          <p className="text-sm text-muted-foreground">We'll contact you shortly with more details.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder="Tell us more about your interest..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 font-semibold hover:bg-primary/90"
          >
            Send Inquiry
          </Button>
        </form>
      )}

      {/* Contact Info */}
      <div className="mt-8 space-y-4 pt-8 border-t border-border">
        <h4 className="font-bold text-foreground">Need Help?</h4>

        <a
          href="tel:+911234567890"
          className="flex items-center gap-3 p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-foreground font-medium"
        >
          <Phone size={20} className="text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Call Us</p>
            <span>+91 1234-567-890</span>
          </div>
        </a>

        <a
          href="mailto:info@landmarkestates.com"
          className="flex items-center gap-3 p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-foreground font-medium"
        >
          <Mail size={20} className="text-accent" />
          <div>
            <p className="text-xs text-muted-foreground">Email Us</p>
            <span className="truncate">info@landmarkestates.com</span>
          </div>
        </a>

        <button className="flex items-center gap-3 p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-foreground font-medium w-full">
          <MessageSquare size={20} className="text-primary" />
          <div className="text-left">
            <p className="text-xs text-muted-foreground">Chat with us</p>
            <span>Live Support</span>
          </div>
        </button>
      </div>

      {/* Price Summary */}
      <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <p className="text-xs text-muted-foreground mb-2">Property Price</p>
        <p className="text-2xl font-bold text-primary mb-1">{formatPrice(plot.price)}</p>
        <p className="text-xs text-muted-foreground">{plot.area.toLocaleString()} sqft</p>
      </div>
    </Card>
  )
}
