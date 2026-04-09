"use client";

import { useState, useRef } from "react";
import gsap from "gsap";

const services = [
  {
    title: "Desarrollo continuo",
    desc: "No hacemos tareas sueltas. Evolucionamos tu producto constantemente.",
    extra:
      "Cada funcionalidad tiene un objetivo claro: mejorar conversión, retención o escalabilidad.",
  },
  {
    title: "Performance y escalabilidad",
    desc: "Optimizamos velocidad, estructura y crecimiento técnico.",
    extra:
      "Mejoramos tiempos de carga, arquitectura y SEO técnico para soportar crecimiento real.",
  },
  {
    title: "Resolución de problemas",
    desc: "Detectamos y solucionamos antes de que impacten.",
    extra:
      "Monitoreamos errores y comportamiento para actuar antes de afectar usuarios.",
  },
  {
    title: "Decisiones técnicas",
    desc: "Nos hacemos cargo del rumbo técnico de tu producto.",
    extra: "Definimos stack, arquitectura y prioridades alineadas a negocio.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);
  const refs = useRef<any[]>([]);

  const toggle = (i: number) => {
    const current = refs.current[i];

    if (active === i) {
      // cerrar
      gsap.to(current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      setActive(null);
    } else {
      // cerrar el anterior
      if (active !== null && refs.current[active]) {
        gsap.to(refs.current[active], {
          height: 0,
          opacity: 0,
          duration: 0.3,
        });
      }

      setActive(i);

      // abrir nuevo (delay para que renderice)
      setTimeout(() => {
        gsap.fromTo(
          current,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          },
        );
      }, 50);
    }
  };

  return (
    <div className="mt-32 max-w-5xl mx-auto px-6">
      <div className="space-y-4">
        {services.map((item, i) => {
          const isOpen = active === i;

          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              className={`border rounded-xl p-6 cursor-pointer transition-all duration-300 group
              ${isOpen ? "bg-black text-white" : "hover:bg-gray-50"}`}
            >
              {/* HEADER */}
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p
                    className={`text-sm mt-1 ${
                      isOpen ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                <span
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  →
                </span>
              </div>

              {/* CONTENIDO EXPANDIDO */}
              <div
                ref={(el) => {
                  refs.current[i] = el;
                }}
                style={{ height: 0, overflow: "hidden", opacity: 0 }}
              >
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                  {item.extra}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
