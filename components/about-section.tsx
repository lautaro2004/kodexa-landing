"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

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

      if (leftColRef.current) {
        const blocks = leftColRef.current.querySelectorAll("[data-fade]")
        gsap.fromTo(
          blocks,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 90%",
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
      className="relative py-32 md:py-40 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-20 md:mb-28">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          05 / Behind the Studio
        </span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl tracking-tight">
          THE VISION BEHIND KODEXA
        </h2>
        <p className="mt-3 font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">
          Building a modern web studio from the ground up.
        </p>
      </div>

      {/* 2-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20">

        {/* Left column — text content */}
        <div ref={leftColRef} className="space-y-12">

          {/* Block 1 — Intro */}
          <p data-fade className="max-w-[650px] font-mono text-sm text-foreground/80 leading-relaxed">
            Kodexa nace con una idea clara: construir soluciones web modernas, bien estructuradas y preparadas para crecer desde el primer dia.
          </p>

          {/* Block 2 — Strategic */}
          <div data-fade className="max-w-[650px] space-y-6">
            <p className="font-mono text-sm text-foreground/80 leading-relaxed">
              {"Soy Lautaro Aquino, desarrollador web full stack con mas de 3 años de experiencia construyendo productos digitales reales: desde landing pages orientadas a conversion hasta sistemas web personalizados."}
            </p>
            <p className="font-mono text-sm text-foreground/80 leading-relaxed">
              No solo desarrollo sitios. Construyo bases solidas para que los negocios puedan escalar con claridad y estabilidad.
            </p>
          </div>

          {/* Block 3 — Principles */}
          <div data-fade className="max-w-[650px] py-4 space-y-5">
            <p className="font-[var(--font-bebas)] text-xl md:text-2xl text-foreground/40 tracking-[0.15em]">
              STRUCTURE BEFORE IMPROVISATION
            </p>
            <p className="font-[var(--font-bebas)] text-xl md:text-2xl text-foreground/40 tracking-[0.15em]">
              PERFORMANCE OVER EXCESS
            </p>
            <p className="font-[var(--font-bebas)] text-xl md:text-2xl text-foreground/40 tracking-[0.15em]">
              BUILT TO EVOLVE
            </p>
          </div>

          {/* Block 4 — Closing */}
          <p data-fade className="max-w-[650px] font-mono text-sm text-foreground/70 leading-relaxed">
            Kodexa no es solo un estudio web. Es el comienzo de una startup enfocada en crear soluciones digitales bien hechas, con vision a largo plazo.
          </p>
        </div>

        {/* Right column — Profile card */}
        <div className="lg:pt-20">
          <div
            ref={cardRef}
            className="relative border border-accent/20 bg-[oklch(0.1_0_0)] p-8 md:p-10 group hover:border-accent/50 hover:shadow-[0_0_30px_-10px_oklch(0.7_0.2_45/0.15)] transition-all duration-500"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/60" />
              <div className="absolute top-0 left-0 w-[1px] h-full bg-accent/60" />
            </div>

            {/* Name and role */}
            <div className="mb-8">
              <h3 className="font-[var(--font-bebas)] text-3xl tracking-tight">
                Lautaro Aquino
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mt-1 block">
                Founder & Web Developer
              </span>
            </div>

            {/* Divider */}
            <div className="w-10 h-px bg-accent/40 mb-8 group-hover:w-24 transition-all duration-500" />

            {/* Bio */}
            <p className="font-mono text-xs text-foreground/60 leading-relaxed">
              Full stack developer especializado en sitios, landings y sistemas web escalables.
            </p>
            <p className="mt-3 font-mono text-xs text-foreground/60 leading-relaxed">
              Enfoque en estructura, rendimiento y claridad tecnica.
            </p>

            {/* Links */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/lautaro-aquino-007a1625b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://lautaroaquino.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Portfolio
              </a>
            </div>

            {/* Bottom corner accent */}
            <div className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-accent" />
              <div className="absolute bottom-0 right-0 w-[1px] h-full bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
