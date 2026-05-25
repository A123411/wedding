"use client"

import { CountdownTimer } from "@/components/countdown-timer"
import { LoveTimeline } from "@/components/love-timeline"
import { FloatingHearts } from "@/components/floating-hearts"
import { VenueCard } from "@/components/venue-card"
import { Section, SectionTitle } from "@/components/section"
import { Heart } from "lucide-react"

export default function WeddingInvitation() {
  const weddingDate = new Date("September 1, 2026 18:00:00")

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorations */}
      <FloatingHearts />
      
      {/* Gradient overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 animate-fade-in-up">
            <span className="animate-pulse">✨</span>
            <span>دعوة زفاف</span>
            <span className="animate-pulse">✨</span>
          </div>

          {/* Names */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-primary mb-6 animate-fade-in-up [animation-delay:200ms] text-balance">
            محمد & مريم
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up [animation-delay:400ms]">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-primary to-transparent" />
            <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-primary to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 animate-fade-in-up [animation-delay:600ms] max-w-xl mx-auto leading-relaxed text-balance">
            ليلة واحدة… لكنها بداية عمر كامل من الحكاية
          </p>

          {/* Date */}
          <p className="text-primary font-bold text-lg mb-10 animate-fade-in-up [animation-delay:800ms]">
            ١ سبتمبر ٢٠٢٦ — ٦:٠٠ مساءً
          </p>

          {/* Countdown */}
          <div className="animate-fade-in-up [animation-delay:1000ms]">
            <CountdownTimer targetDate={weddingDate} />
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-scroll" />
            </div>
          </div>
        </div>
      </section>

      {/* Love Journey Section */}
      <Section id="journey" className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="قصة حبنا من البداية إلى الأبد">
            رحلة الحب
          </SectionTitle>
          <LoveTimeline />
        </div>
      </Section>

      {/* Venue Section */}
      <Section id="venue" className="relative z-10">
        <SectionTitle subtitle="نتشرف بحضوركم في هذا المكان المميز">
          مكان الحفل
        </SectionTitle>
        <VenueCard />
      </Section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 bg-foreground/95 text-background text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-background/30" />
          <Heart className="w-4 h-4 fill-current animate-pulse" />
          <div className="h-px w-8 bg-background/30" />
        </div>
        <p className="font-serif text-xl mb-2">محمد & مريم</p>
        <p className="text-background/60 text-sm">٢٠٢٦ ✨ نتشرف بحضوركم</p>
      </footer>

      {/* Global animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scroll {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(4px);
            opacity: 0.5;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease forwards;
          opacity: 0;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
