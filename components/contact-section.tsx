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
            },
          }
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
            },
          }
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
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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

      if (error) throw new Error();

      window.location.href = "/gracias";
    } catch {
      setError("Ocurrió un error. Intentá nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6 md:px-12 border-t border-border/30"
    >
      {/* HEADER */}
      <div
        ref={headerRef}
        className="flex flex-col items-center text-center mb-20"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
          06 / Contacto
        </span>

        <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl tracking-tight">
          CONSTRUYAMOS <span className="text-accent">ALGO</span>
          <br />
          SÓLIDO.
        </h2>

        <p className="mt-8 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          Contame qué estás buscando y vemos cómo hacerlo realidad.
        </p>
      </div>

      {/* FORM CARD */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative max-w-4xl mx-auto p-8 md:p-10 rounded-2xl
        bg-background/40 backdrop-blur-xl
        border border-border/50
        shadow-[0_0_40px_rgba(0,0,0,0.6)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* NOMBRE */}
          <div className="space-y-2">
            <label className="label">Nombre</label>
            <input
              type="text"
              name="fi-sender-fullName"
              required
              value={formData["fi-sender-fullName"]}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="input"
            />
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <label className="label">Email</label>
            <input
              type="email"
              name="fi-sender-email"
              required
              value={formData["fi-sender-email"]}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="input"
            />
          </div>

          {/* TIPO */}
          <div className="space-y-2">
            <label className="label">Tipo de proyecto</label>
            <select
              name="fi-select-projectType"
              required
              value={formData["fi-select-projectType"]}
              onChange={handleChange}
              className={cn(
                "input cursor-pointer",
                !formData["fi-select-projectType"] &&
                  "text-muted-foreground/40"
              )}
            >
              <option value="" disabled>
                Seleccionar
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type} className="bg-card">
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* ETAPA */}
          <div className="space-y-2">
            <label className="label">
              ¿En qué etapa está tu proyecto?
            </label>
            <select
              name="fi-select-projectStage"
              required
              value={formData["fi-select-projectStage"]}
              onChange={handleChange}
              className={cn(
                "input cursor-pointer",
                !formData["fi-select-projectStage"] &&
                  "text-muted-foreground/40"
              )}
            >
              <option value="" disabled>
                Seleccionar
              </option>
              {projectStages.map((stage) => (
                <option key={stage} value={stage} className="bg-card">
                  {stage}
                </option>
              ))}
            </select>
          </div>

          {/* MENSAJE */}
          <div className="space-y-2 md:col-span-2">
            <label className="label">Mensaje</label>
            <textarea
              name="fi-text-message"
              required
              rows={5}
              value={formData["fi-text-message"]}
              onChange={handleChange}
              placeholder="Contame sobre tu proyecto..."
              className="input min-h-[140px] resize-none"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="md:col-span-2 w-full
            bg-accent text-black
            py-4 font-mono text-xs uppercase tracking-widest
            rounded-md
            shadow-[0_0_20px_rgba(255,115,0,0.3)]
            hover:shadow-[0_0_30px_rgba(255,115,0,0.5)]
            hover:scale-[1.01]
            transition-all duration-200
            disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Iniciar Proyecto"}
          </button>

          {/* ERROR */}
          {error && (
            <p className="md:col-span-2 text-center text-red-500 text-xs font-mono uppercase">
              {error}
            </p>
          )}

          {/* FOOTER */}
          <p
            ref={footerRef}
            className="md:col-span-2 text-center text-muted-foreground text-xs font-mono uppercase"
          >
            Te respondo dentro de 24 hs.
          </p>
        </div>
      </form>
    </section>
  );
}