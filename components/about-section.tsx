"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      if (contentRef.current) {
        const blocks = contentRef.current.querySelectorAll(":scope > div")
        gsap.fromTo(
          blocks,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="founder"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">06 / Founder</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          FOUNDER <span className="text-accent">&</span> LEAD DEVELOPER
        </h2>
        <p className="mt-4 font-mono text-xs text-muted-foreground uppercase tracking-widest">
          The mind behind Kodexa
        </p>
      </div>

      {/* Content */}
      <div ref={contentRef} className="max-w-2xl space-y-8">
        <div className="border-l-2 border-accent/40 pl-6">
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Soy desarrollador web con mas de 3 anos de experiencia profesional, trabajando como freelance y colaborando de forma continua con una empresa.
          </p>
        </div>

        <div className="border-l-2 border-border/40 pl-6">
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Funde Kodexa con la vision de construir sistemas digitales bien estructurados, escalables y pensados para crecer a largo plazo.
          </p>
        </div>

        <div className="border-l-2 border-border/40 pl-6">
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            Trabajo con tecnologias modernas como Astro, Next.js y arquitecturas backend robustas. Mi enfoque esta en rendimiento, claridad tecnica y evolucion constante.
          </p>
        </div>
      </div>
    </section>
  )
}
