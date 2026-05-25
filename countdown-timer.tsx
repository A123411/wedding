"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) return null

  const timeUnits = [
    { value: timeLeft.days, label: "يوم" },
    { value: timeLeft.hours, label: "ساعة" },
    { value: timeLeft.minutes, label: "دقيقة" },
    { value: timeLeft.seconds, label: "ثانية" },
  ]

  return (
    <div className="flex justify-center gap-3 sm:gap-4 direction-rtl">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="group relative"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-card/80 backdrop-blur-sm px-4 py-4 sm:px-6 sm:py-5 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span className="block text-3xl sm:text-4xl font-bold text-primary tabular-nums">
              {unit.value.toString().padStart(2, "0")}
            </span>
            <span className="block text-xs sm:text-sm text-muted-foreground mt-1 font-medium">
              {unit.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
