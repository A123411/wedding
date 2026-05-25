"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Sparkles, Star, PartyPopper } from "lucide-react"

const timelineEvents = [
  {
    icon: Sparkles,
    title: "البداية",
    description: "لقاء غيّر كل شيء وبدأت الحكاية",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Heart,
    title: "التعارف",
    description: "ضحك وحديث وأيام قرّبت القلوب",
    color: "from-rose-500 to-red-500",
  },
  {
    icon: Star,
    title: "الخطوبة",
    description: "خطوة نحو مستقبل مشترك جميل",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: PartyPopper,
    title: "الزفاف",
    description: "نكتب معاً النهاية السعيدة",
    color: "from-primary to-accent",
  },
]

export function LoveTimeline() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting && !visibleCards.includes(index)) {
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {timelineEvents.map((event, index) => {
        const Icon = event.icon
        const isVisible = visibleCards.includes(index)

        return (
          <div
            key={event.title}
            ref={(el) => { cardsRef.current[index] = el }}
            data-index={index}
            className={`relative group transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Glow effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            />

            {/* Card */}
            <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-6 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-l ${event.color}`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {event.description}
              </p>

              {/* Step number */}
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-xs font-bold text-secondary-foreground">
                  {index + 1}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
