import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">LE</span>
              </div>
              <span className="font-bold text-xl">Landmark Estates</span>
            </div>
            <p className="text-sm leading-relaxed">
              Premium real estate solutions for discerning investors seeking value and growth potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/plots" className="hover:text-accent transition-colors">
                  Browse Plots
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span>+91 1234-567-8900</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span>info@landmarkestates.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Premium Tower, Metro City</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-accent/20 rounded-full hover:bg-accent/30 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-accent/20 rounded-full hover:bg-accent/30 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 bg-accent/20 rounded-full hover:bg-accent/30 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2026 Landmark Estates. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
