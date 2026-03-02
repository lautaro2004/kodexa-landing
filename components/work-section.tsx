"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"

gsap.registerPlugin(ScrollTrigger)

const featuredProject = {
  title: "Sistema de Turnos Online",
  category: "Sistema Web",
  description: "Reserva con pagos integrados y gestion automatizada de disponibilidad.",
  image: "/images/project-turnos.jpg",
}

const secondaryProjects = [
  {
    title: "Web Corporativa B2B",
    category: "Sitio Institucional",
    description: "Optimizada para generacion de leads y conversion empresarial.",
    image: "/images/project-b2b.jpg",
  },
  {
    title: "Dashboard Administrativo",
    category: "Plataforma",
    description: "Gestion interna con metricas en tiempo real y visualizacion de datos.",
    image: "/images/project-dashboard.jpg",
  },
  {
    title: "Landing de Campaña",
    category: "Landing Page",
    description: "Optimizada para conversion con tracking avanzado.",
    image: "/images/project-landing.jpg",
  },
]

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      if (featuredRef.current) {
        gsap.fromTo(
          featuredRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll("[data-project-card]")
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
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
    <section ref={sectionRef} id="work" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">02 / Portfolio</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">SELECTED WORK</h2>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          Proyectos reales construidos con tecnologia moderna y enfoque en resultados.
        </p>
      </div>

      {/* Featured project */}
      <div ref={featuredRef} className="group relative mb-8 cursor-pointer overflow-hidden border border-border/40 hover:border-accent/50 transition-colors duration-500">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
          <Image
            src={featuredProject.image}
            alt={featuredProject.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 group-hover:via-background/50 group-hover:to-background/10 transition-all duration-500" />

          {/* Content on top of image */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
              {featuredProject.category}
            </span>
            <h3 className="font-[var(--font-bebas)] text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
              {featuredProject.title}
            </h3>
            <p className="mt-3 max-w-md font-mono text-xs text-muted-foreground leading-relaxed">
              {featuredProject.description}
            </p>
            <div className="mt-6">
              <span className="group/btn inline-flex items-center gap-3 border border-foreground/20 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200">
                <ScrambleTextOnHover text="View Project" as="span" duration={0.5} />
                <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover/btn:rotate-45" />
              </span>
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
          </div>

          {/* Featured tag */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
              Featured
            </span>
          </div>
        </div>
      </div>

      {/* Secondary projects grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {secondaryProjects.map((project, index) => (
          <div
            key={index}
            data-project-card
            className="group relative cursor-pointer border border-border/40 hover:border-accent/50 transition-colors duration-500 overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent group-hover:via-background/30 transition-all duration-500" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
                <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
              </div>
            </div>

            {/* Text content */}
            <div className="p-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {project.category}
              </span>
              <h3 className={cn(
                "mt-2 font-[var(--font-bebas)] text-xl md:text-2xl tracking-tight transition-colors duration-300",
                "group-hover:text-accent"
              )}>
                {project.title}
              </h3>
              <p className="mt-2 font-mono text-xs text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Index marker */}
            <span className="absolute bottom-4 right-4 font-mono text-[10px] text-muted-foreground/30 group-hover:text-accent/50 transition-colors duration-300">
              {String(index + 2).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
