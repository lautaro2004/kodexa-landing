"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Forminit } from "forminit";

const forminit = new Forminit({
  proxyUrl: "/api/forminit",
});

gsap.registerPlugin(ScrollTrigger);

const projectTypes = [
  "Landing Page",
  "Sitio Institucional",
  "Sistema Web",
  "Soporte Mensual",
];

const projectStages = [
  "Tengo una idea inicial",
  "Ya tengo diseño",
  "Ya tengo una web y quiero mejorarla",
  "Necesito soporte continuo",
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
  "fi-sender-fullName": "",
  "fi-sender-email": "",
  "fi-select-projectType": "",
  "fi-select-projectStage": "",
  "fi-text-message": "",
});

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      setIsSubmitting(true);

      const { error } = await forminit.submit("920afmph8yf", formData);

      if (error) {
        throw new Error("Error enviando formulario");
      }

      window.location.href = "/gracias";
    } catch (err) {
      setError("Ocurrió un error. Intentá nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="flex flex-col items-center text-center mb-16"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
          06 / Contacto
        </span>

        <h2 className="font-[var(--font-bebas)] text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none">
          {"LET'S "}
          <span className="text-accent">BUILD</span>
          <br />
          {"SOMETHING SOLID"}
        </h2>

        <p className="mt-8 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          Contame qué estás buscando y vemos cómo hacerlo realidad.
        </p>
      </div>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-6"
      >
        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="fi-sender-fullName"
            required
            value={formData["fi-sender-fullName"]}
            onChange={handleChange}
            className="w-full bg-transparent border border-border/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors duration-200"
            placeholder="Tu nombre"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="fi-sender-email"
            required
            value={formData["fi-sender-email"]}
            onChange={handleChange}
            className="w-full bg-transparent border border-border/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors duration-200"
            placeholder="tu@email.com"
          />
        </div>

        {/* Project Type */}
        <div className="space-y-2">
          <label
            htmlFor="projectType"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Tipo de proyecto
          </label>
          <div className="relative">
            <select
              id="projectType"
              name="fi-select-projectType"
              required
              value={formData["fi-select-projectType"]}
              onChange={handleChange}
              className={cn(
                "w-full bg-transparent border border-border/50 px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors duration-200 appearance-none cursor-pointer",
                formData["fi-select-projectType"]
                  ? "text-foreground"
                  : "text-muted-foreground/40",
              )}
            >
              <option
                value=""
                disabled
                className="bg-card text-muted-foreground"
              >
                Seleccionar
              </option>
              {projectTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                  className="bg-card text-foreground"
                >
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className="text-muted-foreground"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Project Stage */}
        <div className="space-y-2">
          <label
            htmlFor="projectStage"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            {"¿En qué etapa está tu proyecto?"}
          </label>
          <div className="relative">
            <select
              id="projectStage"
              name="fi-select-projectStage"
              required
              value={formData["fi-select-projectStage"]}
              onChange={handleChange}
              className={cn(
                "w-full bg-transparent border border-border/50 px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors duration-200 appearance-none cursor-pointer",
                formData["fi-select-projectStage"]
                  ? "text-foreground"
                  : "text-muted-foreground/40",
              )}
            >
              <option
                value=""
                disabled
                className="bg-card text-muted-foreground"
              >
                Seleccionar
              </option>
              {projectStages.map((stage) => (
                <option
                  key={stage}
                  value={stage}
                  className="bg-card text-foreground"
                >
                  {stage}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className="text-muted-foreground"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="fi-text-message"
            required
            rows={5}
            value={formData["fi-text-message"]}
            onChange={handleChange}
            className="w-full bg-transparent border border-border/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
            placeholder="Contame sobre tu proyecto..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-accent-foreground py-4 font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-opacity duration-200 disabled:opacity-50"
        >
          {isSubmitting ? "Enviando..." : "Iniciar Proyecto"}
        </button>

        {error && (
          <p className="text-center font-mono text-[10px] text-red-500 uppercase tracking-widest">
            {error}
          </p>
        )}

        <p className="text-center font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          Te respondo dentro de 24 hs.
        </p>
      </form>

      {/* Bottom copyright */}
      <div
        ref={footerRef}
        className="mt-32 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          {"© 2026 Kodexa. All rights reserved."}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          Modern web development, built right.
        </p>
      </div>
    </section>
  );
}
