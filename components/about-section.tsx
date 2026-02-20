"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const founders = [
  {
    name: "Lautaro Aquino",
    role: "Co-Founder & Frontend Engineer",
    description: [
      "Desarrollador web con mas de 3 años de experiencia profesional trabajando como freelance y colaborando de forma continua con una empresa.",
      "Especializado en frontend moderno con foco en rendimiento, experiencia de usuario y estructuras escalables. Trabajo con tecnologias como Astro, Next.js y arquitecturas optimizadas para performance y crecimiento.",
      "Enfoque en claridad tecnica, estructura y sistemas bien diseñados.",
    ],
    links: {
      linkedin: "#",
      portfolio: "#",
    },
    initials: "LA",
  },
  {
    name: "Franco Carchedi",
    role: "Co-Founder & Backend Engineer",
    description: [
      "Desarrollador enfocado en backend y arquitectura de sistemas. Especializado en diseño de estructuras robustas, bases de datos y logica de negocio escalable.",
      "Experiencia en construccion de APIs, sistemas administrables y arquitecturas pensadas para soportar crecimiento y evolucion constante.",
      "Enfoque en solidez tecnica, eficiencia y escalabilidad a largo plazo.",
    ],
    links: {
      linkedin: "#",
      portfolio: "#",
    },
    initials: "FC",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(":scope > div")
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">06 / Team</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">FOUNDING TEAM</h2>
        <p className="mt-4 font-mono text-xs text-muted-foreground uppercase tracking-widest">
          Two engineers building structured digital systems.
        </p>
        <p className="mt-6 max-w-2xl font-mono text-sm text-muted-foreground leading-relaxed">
          Kodexa esta liderada por dos desarrolladores con perfiles complementarios. Combinamos experiencia en frontend moderno, backend robusto y arquitectura escalable para construir productos digitales pensados para crecer.
        </p>
      </div>

      {/* Founder cards */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {founders.map((founder, index) => (
          <div
            key={index}
            className={cn(
              "group relative border border-border/40 p-8 flex flex-col transition-all duration-500",
              "hover:border-accent/60",
            )}
          >
            {/* Hover background */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Avatar placeholder */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border border-border/60 flex items-center justify-center group-hover:border-accent/40 transition-colors duration-300">
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-accent transition-colors duration-300">
                    {founder.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-[var(--font-bebas)] text-2xl tracking-tight group-hover:text-accent transition-colors duration-300">
                    {founder.name}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/80">
                    {founder.role}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-accent/60 mb-6 group-hover:w-full transition-all duration-500" />

              {/* Description */}
              <div className="space-y-4 flex-1 mb-8">
                {founder.description.map((paragraph, i) => (
                  <p key={i} className="font-mono text-xs text-foreground/60 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/30">
                <a
                  href={founder.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-2"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <span className="text-border">{"/"}</span>
                <a
                  href={founder.links.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-2"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>Portfolio</span>
                </a>
              </div>
            </div>

            {/* Corner accent line */}
            <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
              <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
