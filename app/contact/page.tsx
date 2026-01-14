"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 4000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-down">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our plots? Our expert team is here to help you make the right investment decision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow hover-float animate-stagger-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 hover-scale">
                <Phone size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Mon-Fri, 9AM-6PM IST</p>
              <a href="tel:+911234567890" className="text-primary font-bold hover:underline hover-scale-sm">
                +91 1234-567-890
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow hover-float animate-stagger-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 hover-scale">
                <Mail size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">We respond within 24 hours</p>
              <a href="mailto:info@landmarkestates.com" className="text-accent font-bold hover:underline hover-scale-sm">
                info@landmarkestates.com
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow hover-float animate-stagger-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 hover-scale">
                <MapPin size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">Our main office</p>
              <p className="text-primary font-bold">Premium Tower, Metro City</p>
            </Card>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8 animate-fade-in-left">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

              {submitted ? (
                <div className="text-center py-12 animate-bounce-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <Send size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for contacting us. Our team will reach out to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="animate-stagger-1">
                      <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all hover-scale-sm"
                        placeholder="John"
                      />
                    </div>
                    <div className="animate-stagger-2">
                      <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all hover-scale-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="animate-stagger-3">
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all hover-scale-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="animate-stagger-4">
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all hover-scale-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="animate-stagger-5">
                    <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all hover-scale-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="plot_inquiry">Plot Inquiry</option>
                      <option value="loan_assistance">Loan Assistance</option>
                      <option value="site_visit">Schedule Site Visit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="animate-stagger-6">
                    <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none hover-scale-sm"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-lg hover-float animate-stagger-6"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </Card>

            {/* Info Section */}
            <div className="space-y-8 animate-fade-in-right">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 animate-stagger-1">
                    <span className="text-primary font-bold mt-1 flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-foreground">Expert Consultation</p>
                      <p className="text-muted-foreground text-sm">
                        Our team has over 15 years of experience in real estate
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1 flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-foreground">Transparent Process</p>
                      <p className="text-muted-foreground text-sm">No hidden charges, complete transparency</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1 flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-foreground">Legal Support</p>
                      <p className="text-muted-foreground text-sm">Complete legal documentation assistance</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1 flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-foreground">Fast Processing</p>
                      <p className="text-muted-foreground text-sm">Quick approvals and hassle-free transactions</p>
                    </div>
                  </li>
                </ul>
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday to Friday: 9:00 AM - 6:00 PM IST
                      <br />
                      Saturday: 10:00 AM - 4:00 PM IST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
