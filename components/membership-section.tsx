"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    title: "PLAN START",
    features: [
      "10 horas mensuales",
      "Soporte técnico",
      "Pequeñas mejoras",
      "Optimización continua",
    ],
    price: "USD 180 / mes",
  },
  {
    title: "PLAN GROWTH",
    features: [
      "20 horas mensuales",
      "Desarrollo continuo",
      "Nuevas funcionalidades",
      "Optimización avanzada",
    ],
    price: "USD 320 / mes",
  },
]

export function MembershipSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

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

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
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
    <section
      ref={sectionRef}
      id="membership"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / IT Team</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-8xl tracking-tight leading-none">
          {"YOUR EXTERNAL"}
          <br />
          <span className="text-accent">IT TEAM</span>
        </h2>
        <p className="mt-8 max-w-xl font-mono text-sm text-muted-foreground leading-relaxed">
          Servicio mensual para empresas que necesitan evolucion constante, mejoras estrategicas y soporte tecnico especializado.
        </p>
      </div>

      {/* Plans grid */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              "group relative border border-border/40 p-8 flex flex-col transition-all duration-500",
              "hover:border-accent/60",
            )}
          >
            {/* Background layer */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Plan number */}
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                No. {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="mt-4 font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight group-hover:text-accent transition-colors duration-300">
                {plan.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-px bg-accent/60 my-6 group-hover:w-full transition-all duration-500" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="font-mono text-xs text-foreground/70 flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">{"/"}</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="pt-6 border-t border-border/30">
                <span className="font-[var(--font-bebas)] text-2xl text-accent tracking-tight">{plan.price}</span>
              </div>
            </div>

            {/* Corner line */}
            <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
              <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
            </div>
          </div>
        ))}
      </div>

      {/* Extra hours note */}
      <p className="mt-8 font-mono text-xs text-muted-foreground">
        Horas adicionales: <span className="text-foreground">USD 12 / hora</span>
      </p>

      {/* CTA */}
      <div ref={ctaRef} className="mt-12">
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
        >
          <ScrambleTextOnHover text="Consultar Disponibilidad" as="span" duration={0.6} />
          <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
        </a>
      </div>
    </section>
  )
}
