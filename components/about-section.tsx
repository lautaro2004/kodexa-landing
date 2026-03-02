"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
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

      if (bodyRef.current) {
        const paragraphs = bodyRef.current.querySelectorAll("[data-fade]")
        gsap.fromTo(
          paragraphs,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bodyRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
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
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          05 / Behind the Studio
        </span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl tracking-tight">
          THE VISION BEHIND KODEXA
        </h2>
      </div>

      {/* Editorial body */}
      <div ref={bodyRef} className="max-w-2xl space-y-8">
        <p data-fade className="font-mono text-sm text-foreground/80 leading-relaxed">
          Kodexa nace como una iniciativa independiente con una idea clara: construir soluciones web modernas, bien estructuradas y pensadas para crecer desde el primer dia.
        </p>

        <p data-fade className="font-mono text-sm text-foreground/80 leading-relaxed">
          {"Soy Lautaro Aquino, desarrollador web full stack con mas de 3 años de experiencia profesional trabajando como freelance y colaborando de forma continua con una empresa. Durante este tiempo he participado en el desarrollo de landings, sitios institucionales y sistemas web, entendiendo no solo como se construyen, sino como deben funcionar para generar resultados reales."}
        </p>

        <p data-fade className="font-mono text-sm text-foreground/80 leading-relaxed">
          Mi enfoque combina estructura tecnica, claridad visual y vision de producto. No se trata solo de que un sitio se vea bien, sino de que este bien construido: rapido, escalable y preparado para evolucionar junto al negocio.
        </p>

        <div data-fade className="py-4">
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            Kodexa representa esa forma de trabajar.
          </p>
          <div className="mt-4 pl-6 border-l border-accent/50 space-y-1">
            <p className="font-mono text-xs text-foreground/60 uppercase tracking-widest">
              Estructura antes que improvisacion.
            </p>
            <p className="font-mono text-xs text-foreground/60 uppercase tracking-widest">
              Rendimiento antes que exceso.
            </p>
            <p className="font-mono text-xs text-foreground/60 uppercase tracking-widest">
              Soluciones pensadas para el largo plazo.
            </p>
          </div>
        </div>

        <p data-fade className="font-mono text-sm text-foreground/80 leading-relaxed">
          {"Hoy lidero cada proyecto de forma directa, desde la arquitectura hasta los ultimos detalles, asegurando calidad, comunicacion clara y una ejecucion solida."}
        </p>

        <p data-fade className="font-mono text-sm text-foreground/70 leading-relaxed italic">
          Kodexa no es solo un estudio web: es el comienzo de una startup enfocada en crear soluciones digitales bien hechas.
        </p>
      </div>

      {/* Founder card */}
      <div ref={cardRef} className="mt-24 max-w-md">
        <div className="relative border border-accent/30 bg-secondary/30 p-8 group hover:border-accent/60 transition-all duration-500">
          {/* Corner accent */}
          <div className="absolute top-0 left-0 w-10 h-10">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/60" />
            <div className="absolute top-0 left-0 w-[1px] h-full bg-accent/60" />
          </div>

          {/* Name and role */}
          <div className="mb-6">
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-tight">
              Lautaro Aquino
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Founder & Web Developer
            </span>
          </div>

          {/* Divider */}
          <div className="w-10 h-px bg-accent/40 mb-6 group-hover:w-20 transition-all duration-500" />

          {/* Bio */}
          <p className="font-mono text-xs text-foreground/70 leading-relaxed">
            {"Desarrollador web full stack con mas de 3 años de experiencia construyendo soluciones digitales: desde landing pages orientadas a conversion hasta sistemas web personalizados."}
          </p>
          <p className="mt-3 font-mono text-xs text-foreground/70 leading-relaxed">
            Enfoque en estructura, rendimiento y escalabilidad.
          </p>

          {/* Links */}
          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://linkedin.com"
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
              href="https://portfolio.dev"
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
          <div className="absolute bottom-0 right-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-accent" />
            <div className="absolute bottom-0 right-0 w-[1px] h-full bg-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
