"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

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
            },
          }
        );
      }

      if (leftColRef.current) {
        const blocks = leftColRef.current.querySelectorAll("[data-fade]");

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
            },
          }
        );
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll("[data-card]");

        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="founders"
      className="relative py-32 md:py-40 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* HEADER */}

      <div ref={headerRef} className="mb-24 md:mb-28">
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

      {/* GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24 items-start">

        {/* LEFT */}

        <div ref={leftColRef} className="space-y-12">

          <p
            data-fade
            className="max-w-[650px] font-mono text-sm text-foreground/80 leading-relaxed"
          >
            Kodexa nace con una idea clara: construir soluciones web modernas,
            bien estructuradas y preparadas para crecer desde el primer día.
          </p>

          <div data-fade className="max-w-[650px] space-y-6">

            <p className="font-mono text-sm text-foreground/80 leading-relaxed">
              Soy Lautaro Aquino, desarrollador web full stack con más de 3 años
              de experiencia construyendo productos digitales reales: desde
              landing pages orientadas a conversión hasta sistemas web
              personalizados.
            </p>

            <p className="font-mono text-sm text-foreground/80 leading-relaxed">
              No solo desarrollo sitios. Construyo bases sólidas para que los
              negocios puedan escalar con claridad y estabilidad.
            </p>

          </div>

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

          <p
            data-fade
            className="max-w-[650px] font-mono text-sm text-foreground/70 leading-relaxed"
          >
            Kodexa no es solo un estudio web. Es el comienzo de una startup
            enfocada en crear soluciones digitales bien hechas, con visión a
            largo plazo.
          </p>

        </div>

        {/* RIGHT */}

        <div
          ref={cardsRef}
          className="flex flex-col gap-10"
        >

          <FounderCard
            name="Lautaro Aquino"
            role="Co-Founder & Web Developer"
            bio1="Full stack developer especializado en sitios, landings y sistemas web escalables."
            bio2="Enfoque en estructura, rendimiento y claridad técnica."
            linkedin="https://www.linkedin.com/in/lautaro-aquino-007a1625b/"
            portfolio="https://lautaroaquino.com/"
          />

          <FounderCard
            name="Franco Carchedi"
            role="Co-Founder & Web Developer"
            bio1="Desarrollador web enfocado en frontend moderno y experiencias web bien diseñadas."
            bio2="Especializado en interfaces limpias, animaciones y productos digitales bien ejecutados."
            linkedin="https://www.linkedin.com/in/francocarchedi/"
            portfolio="https://www.francocarchedi.com/"
          />

        </div>

      </div>
    </section>
  );
}

function FounderCard({
  name,
  role,
  bio1,
  bio2,
  linkedin,
  portfolio,
}: any) {
  return (
    <div
      data-card
      className="relative border border-accent/20 bg-[oklch(0.1_0_0)] p-8 md:p-10 group hover:border-accent/50 hover:shadow-[0_0_30px_-10px_oklch(0.7_0.2_45/0.15)] transition-all duration-500"
    >

      <div className="absolute top-0 left-0 w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/60" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-accent/60" />
      </div>

      <div className="mb-8">

        <h3 className="font-[var(--font-bebas)] text-3xl tracking-tight">
          {name}
        </h3>

        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mt-1 block">
          {role}
        </span>

      </div>

      <div className="w-10 h-px bg-accent/40 mb-8 group-hover:w-24 transition-all duration-500" />

      <p className="font-mono text-xs text-foreground/60 leading-relaxed">
        {bio1}
      </p>

      <p className="mt-3 font-mono text-xs text-foreground/60 leading-relaxed">
        {bio2}
      </p>

      <div className="mt-10 flex items-center gap-6">

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent"
        >
          LinkedIn
        </a>

        <a
          href={portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent"
        >
          Portfolio
        </a>

      </div>

      <div className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-accent" />
      </div>

    </div>
  );
}