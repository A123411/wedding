"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = "", id }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-20 sm:py-28 px-4 sm:px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
    >
      {children}
    </section>
  )
}

interface SectionTitleProps {
  children: ReactNode
  subtitle?: string
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="h-px w-12 bg-gradient-to-l from-primary to-transparent" />
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
      </div>
    </div>
  )
}
