"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "LANDING PAGES",
    description: "Sitios enfocados en conversion, optimizados para velocidad y estructura clara.",
    features: [
      "Diseño personalizado",
      "Optimización para conversión",
      "Velocidad de carga rápida",
      "Deploy incluido",
    ],
    price: "Desde USD 250",
  },
  {
    title: "SITIOS INSTITUCIONALES",
    description: "Webs profesionales para empresas que necesitan presencia sólida y bien diseñada.",
    features: [
      "Hasta 6 secciones",
      "Formularios e integraciones",
      "Diseño responsive",
      "SEO técnico incluido",
    ],
    price: "Desde USD 500",
  },
  {
    title: "SITIOS DINAMICOS",
    description: "Plataformas administrables con panel de gestión y capacidad de crecimiento.",
    features: [
      "Panel de gestión",
      "Contenido editable",
      "Funcionalidades a medida",
      "Preparado para crecer",
    ],
    price: "Desde USD 900",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
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

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
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
    <section id="services" ref={sectionRef} className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / Services</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">WHAT WE BUILD</h2>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={cardsRef}
        className="flex gap-8 overflow-x-auto pb-8 pr-12 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* CTA Block */}
      <div
        ref={ctaRef}
        className="mt-16 border border-border/40 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div>
          <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight">
            {"¿Necesitás algo específico para "}
            <span className="text-accent">tu negocio</span>
            {"?"}
          </h3>
          <p className="mt-2 font-mono text-xs text-muted-foreground leading-relaxed">
            Cada proyecto puede adaptarse a tus necesidades.
          </p>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200 shrink-0"
        >
          <ScrambleTextOnHover text="Solicitar Propuesta" as="span" duration={0.6} />
          <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
        </a>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: { title: string; description: string; features: string[]; price: string }
  index: number
}) {
  return (
    <article
      className={cn(
        "group relative flex-shrink-0 w-80 md:w-96",
        "transition-transform duration-500 ease-out",
        "hover:-translate-y-2",
      )}
    >
      <div className="relative bg-card border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 p-8 h-full flex flex-col">
        {/* Top edge effect */}
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        {/* Issue number */}
        <div className="flex items-baseline justify-between mb-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            No. {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>

        {/* Divider line */}
        <div className="w-12 h-px bg-accent/60 mb-6 group-hover:w-full transition-all duration-500" />

        {/* Description */}
        <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-6">{service.description}</p>

        {/* Features list */}
        <ul className="flex-1 space-y-2 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className="font-mono text-xs text-foreground/70 flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">{"/"}</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="mt-auto pt-6 border-t border-border/30">
          <span className="font-[var(--font-bebas)] text-2xl text-accent tracking-tight">{service.price}</span>
        </div>

        {/* Bottom right corner fold effect */}
        <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-background rotate-45 translate-x-4 translate-y-4 border-t border-l border-border/30" />
        </div>
      </div>

      {/* Shadow/depth layer */}
      <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  )
}
