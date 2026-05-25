"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Navigation } from "lucide-react"

export function VenueCard() {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
          {/* Image */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop"
              alt="قاعة الحفل"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Venue name overlay */}
            <div className="absolute bottom-6 right-6 text-white text-right">
              <h3 className="text-2xl sm:text-3xl font-bold mb-1">قاعة النجوم</h3>
              <p className="text-white/80 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                الرياض، المملكة العربية السعودية
              </p>
            </div>
          </div>

          {/* Info section */}
          <div className="p-6 sm:p-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
              <div className="text-center">
                <span className="text-muted-foreground text-sm">التاريخ</span>
                <p className="text-foreground font-bold">١ سبتمبر ٢٠٢٦</p>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="text-center">
                <span className="text-muted-foreground text-sm">الوقت</span>
                <p className="text-foreground font-bold">٦:٠٠ مساءً</p>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-l from-primary to-accent text-primary-foreground font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group/btn"
            >
              <Navigation className="w-5 h-5 transition-transform group-hover/btn:-rotate-45" />
              <span>الموقع على الخريطة</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
