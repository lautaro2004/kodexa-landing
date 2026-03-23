"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BitmapChevron } from "@/components/bitmap-chevron";

gsap.registerPlugin(ScrollTrigger);

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Estrategia",
      description:
        "Entendemos tu negocio y definimos una base sólida antes de diseñar o desarrollar.",
      bullets: [
        "Objetivos claros",
        "Análisis de competencia",
        "Definición de estructura",
      ],
    },
    {
      number: "02",
      title: "Diseño",
      description:
        "Diseñamos interfaces enfocadas en conversión, claridad y experiencia.",
      bullets: [
        "UX/UI centrado en usuario",
        "Diseño moderno",
        "Optimización de conversión",
      ],
    },
    {
      number: "03",
      title: "Desarrollo",
      description:
        "Construimos soluciones rápidas, escalables y preparadas para crecer.",
      bullets: [
        "Código optimizado",
        "APIs e integraciones",
        "Arquitectura escalable",
      ],
    },
    {
      number: "04",
      title: "Optimización",
      description:
        "Mejoramos continuamente para maximizar rendimiento y resultados.",
      bullets: ["Performance", "SEO", "Mejora continua"],
    },
  ];

  useEffect(() => {
    const items = Array.from(
      itemsRef.current?.querySelectorAll(".process-item") || [],
    );

    // entrada
    gsap.fromTo(
      items,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top 85%",
        },
      },
    );

    // línea progresiva
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );
    }

    // step activo
    items.forEach((item) => {
      const title = item.querySelector("h3");

      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(title, { color: "#ff6a00", duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(title, { color: "#ffffff", duration: 0.3 });
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12"
    >
      {/* HEADER */}
      <div className="mb-20 max-w-3xl">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">
          03 / Proceso
        </span>

        <h2 className="mt-4 text-5xl md:text-7xl font-[var(--font-bebas)]">
          CÓMO TRABAJAMOS
        </h2>

        <p className="mt-6 text-base text-muted-foreground font-mono">
          Un proceso claro y enfocado en resultados reales: más clientes, mejor
          rendimiento y crecimiento sostenido.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-4xl">
        {/* línea base */}
        <div className="absolute left-2 md:left-4 top-0 bottom-0 w-[1px] bg-border/40" />

        {/* línea animada */}
        <div
          ref={lineRef}
          className="absolute left-2 md:left-4 top-0 w-[2px] bg-accent"
        />

        <div ref={itemsRef} className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-item relative pl-12 md:pl-16 group"
            >
              {/* número */}
              <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center border border-accent text-[10px] font-mono text-accent bg-background">
                {step.number}
              </div>

              {/* contenido */}
              <h3 className="text-3xl md:text-4xl font-semibold transition-colors">
                {step.title}
              </h3>

              <p className="mt-3 text-base text-muted-foreground max-w-lg leading-relaxed">
                {step.description}
              </p>

              <div className="mt-4 text-sm text-muted-foreground font-mono space-y-1">
                {step.bullets.map((b, i) => (
                  <p key={i}>• {b}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 border border-border/40 p-10 text-center">
        <h3 className="text-3xl">
          ¿Querés un proyecto que realmente genere resultados?
        </h3>

        <p className="text-sm text-muted-foreground mt-3">
          Diseñamos y desarrollamos soluciones enfocadas en conversión,
          performance y escalabilidad.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-3 border border-accent px-6 py-3 text-sm uppercase text-accent hover:bg-accent hover:text-black transition"
        >
          Hablemos
          <BitmapChevron />
        </a>
      </div>
    </section>
  );
}
