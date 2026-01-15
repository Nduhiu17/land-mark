"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function FloatingWhatsAppButton() {
  const [isHovering, setIsHovering] = useState(false)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in learning more about Landmark Estates and your available properties."
    )
    const whatsappURL = `https://wa.me/25472143825?text=${message}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <div className="fixed bottom-8 right-8 z-50" style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 50 }}>
      {/* Chat bubble message - shows on hover */}
      {isHovering && (
        <div style={{ position: 'absolute', bottom: '80px', right: '0', marginBottom: '12px', background: 'black', color: 'white', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
          Chat with us!
          <div style={{ position: 'absolute', bottom: '-6px', right: '12px', width: '12px', height: '12px', background: 'black', transform: 'rotate(45deg)' }}></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          position: 'relative',
          width: '64px',
          height: '64px',
          background: 'linear-gradient(to bottom right, rgb(74, 222, 128), rgb(22, 163, 74))',
          borderRadius: '9999px',
          border: 'none',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 300ms',
          outline: 'none',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(34, 197, 94, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          e.currentTarget.style.transform = 'scale(1.1)'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          e.currentTarget.style.transform = 'scale(1)'
        }}
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <MessageCircle size={28} color="white" strokeWidth={1.5} />

        {/* Floating indicator dot */}
        <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '16px', height: '16px', background: '#ef4444', borderRadius: '9999px', border: '2px solid white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
      </button>
    </div>
  )
}
