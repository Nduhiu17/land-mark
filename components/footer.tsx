import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover-scale">
                <span className="text-primary font-bold text-lg">LE</span>
              </div>
              <span className="font-bold text-xl">Landmark Estates</span>
            </div>
            <p className="text-sm leading-relaxed">
              Premium real estate solutions for discerning investors seeking value and growth potential.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-stagger-1">
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/plots" className="hover:text-accent transition-colors hover-scale-sm">
                  Browse Plots
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors hover-scale-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors hover-scale-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors hover-scale-sm">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-stagger-2">
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span>+254 721 438 253</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span>info@landmarkestates.com</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Premium Tower, Kikuyu Town</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="animate-stagger-3">
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-accent/20 rounded-full hover:bg-accent/30 transition-colors hover-float hover-scale"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-accent/20 rounded-full hover:bg-accent/30 transition-colors hover-float hover-scale"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-accent/20 rounded-full hover:bg-accent/30 transition-colors hover-float hover-scale"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm animate-fade-in-up">
          <p>&copy; 2026 Landmark Estates. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors hover-scale-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors hover-scale-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

