"use client"

import type React from "react"
import FloatingWhatsAppButton from "@/components/floating-whatsapp"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FloatingWhatsAppButton />
    </>
  )
}
