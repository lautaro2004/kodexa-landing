"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServicesSection } from "@/components/services-section";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <div className="relative px-6 md:px-28 min-h-screen flex items-center">
        <div className="absolute right-0 w-[600px] h-[600px] bg-accent/20 blur-[140px]" />

        <div className="max-w-[1100px]">
          <p className="text-xs text-gray-400 mb-6">01 / Servicios</p>

          <h1 className="text-[52px] md:text-[110px] leading-[0.9] font-[var(--font-bebas)]">
            No hacemos webs.
            <br />
            Construimos crecimiento.
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-[600px]">
            Diseñamos y desarrollamos soluciones digitales pensadas para
            convertir, escalar y acompañar el crecimiento real de tu negocio.
          </p>
        </div>
      </div>

      {/* SERVICIOS DETALLE */}
      <div className="mt-32 max-w-6xl mx-auto px-6 space-y-40">
        {/* LANDINGS */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-[var(--font-bebas)]">
              Landing Pages
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Diseñadas para generar resultados. No son solo páginas: son
              herramientas pensadas para captar clientes y convertir tráfico en
              oportunidades reales.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-gray-500">
              <li>✔ Estructura enfocada en conversión</li>
              <li>✔ Velocidad optimizada</li>
              <li>✔ Integración con formularios, analytics y campañas</li>
              <li>✔ Deploy listo para producción</li>
            </ul>

            <div className="mt-10 flex gap-4">
              <a
                href="#pricing"
                className="bg-accent text-black px-6 py-3 text-xs uppercase hover:scale-105 transition"
              >
                Ver pricing
              </a>
            </div>
          </div>

          <div className="reveal border border-white/10 rounded-xl p-10 bg-white/[0.02] backdrop-blur-sm">
            <p className="text-sm text-gray-400">Ideal si...</p>
            <p className="mt-3 text-xl">
              Querés validar una idea, generar leads o escalar tu adquisición de
              clientes.
            </p>
          </div>
        </div>

        {/* INSTITUCIONALES */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal border border-white/10 rounded-xl p-10 bg-white/[0.02] backdrop-blur-sm">
            <p className="text-sm text-gray-400">Ideal si...</p>
            <p className="mt-3 text-xl">
              Necesitás posicionar tu marca y transmitir confianza desde el
              primer contacto.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-[var(--font-bebas)]">
              Sitios institucionales
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Diseñados para comunicar tu propuesta de valor con claridad,
              estructura y profesionalismo. Una base sólida para tu presencia
              digital.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-gray-500">
              <li>✔ Arquitectura clara y escalable</li>
              <li>✔ Diseño adaptable a todos los dispositivos</li>
              <li>✔ SEO técnico desde el inicio</li>
              <li>✔ Integraciones con herramientas clave</li>
            </ul>

            <div className="mt-10 flex gap-4">
              <a
                href="#pricing"
                className="bg-accent text-black px-6 py-3 text-xs uppercase hover:scale-105 transition"
              >
                Ver pricing
              </a>
            </div>
          </div>
        </div>

        {/* DINÁMICOS */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-[var(--font-bebas)]">
              Sitios dinámicos
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Webs que evolucionan con tu negocio. Gestioná contenido, actualizá
              secciones y mantené tu sitio activo sin depender constantemente de
              desarrollo.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-gray-500">
              <li>✔ Panel de gestión personalizado</li>
              <li>✔ Contenido editable (blog, servicios, productos)</li>
              <li>✔ Arquitectura preparada para crecer</li>
              <li>✔ Integraciones futuras</li>
            </ul>

            <div className="mt-10 flex gap-4">
              <a
                href="#pricing"
                className="bg-accent text-black px-6 py-3 text-xs uppercase hover:scale-105 transition"
              >
                Ver pricing
              </a>
            </div>
          </div>

          <div className="reveal border border-white/10 rounded-xl p-10 bg-white/[0.02] backdrop-blur-sm">
            <p className="text-sm text-gray-400">Ideal si...</p>
            <p className="mt-3 text-xl">
              Necesitás actualizar contenido, gestionar información y hacer
              crecer tu web en el tiempo.
            </p>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" className="mt-40 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold reveal">
            Soluciones pensadas para crecer
          </h2>

          <p className="mt-6 text-gray-500 reveal">
            Cada servicio está diseñado para resolver una etapa distinta del
            negocio. Podés empezar simple y escalar a medida que creces.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Landing Pages",
              desc: "Para captar clientes y validar tu producto rápidamente.",
              features: [
                "Estructura enfocada en conversión",
                "Optimización de performance",
                "Integraciones básicas",
                "Deploy listo",
              ],
              price: "Desde USD 250",
              msg: "Hola! Me interesa una Landing Page",
            },
            {
              number: "02",
              title: "Sitios institucionales",
              desc: "Para posicionar tu marca y transmitir confianza.",
              features: [
                "Arquitectura clara",
                "Diseño adaptable",
                "SEO técnico",
                "Integraciones",
              ],
              price: "Desde USD 500",
              msg: "Hola! Me interesa un sitio institucional",
            },
            {
              number: "03",
              title: "Sitios dinámicos",
              desc: "Para gestionar contenido y hacer crecer tu web con el tiempo.",
              features: [
                "Panel de gestión personalizado",
                "Contenido editable",
                "Arquitectura escalable",
                "Preparado para integraciones",
              ],
              price: "Desde USD 900",
              msg: "Hola! Me interesa un sitio dinámico con panel de gestión",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative border border-white/10 rounded-xl p-8
        bg-gradient-to-b from-white/[0.04] to-white/[0.01]
        backdrop-blur-sm
        hover:border-accent/40
        hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]
        transition-all duration-300"
            >
              {/* NUM */}
              <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground">
                NO. {item.number}
              </span>

              {/* TITLE */}
              <h3 className="mt-6 font-[var(--font-bebas)] text-3xl tracking-tight group-hover:text-accent transition">
                {item.title}
              </h3>

              {/* LINE */}
              <div className="w-12 h-px bg-accent/60 mt-4 mb-6 group-hover:w-full transition-all duration-500" />

              {/* DESC */}
              <p className="text-sm text-gray-400 mb-6">{item.desc}</p>

              {/* FEATURES */}
              <ul className="space-y-2 text-sm text-gray-500 mb-8">
                {item.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-accent">/</span> {f}
                  </li>
                ))}
              </ul>

              {/* PRICE */}
              <p className="font-[var(--font-bebas)] text-2xl text-accent mb-6">
                {item.price}
              </p>

              {/* CTA */}
              <a
                href={`https://wa.me/5491167470473?text=${encodeURIComponent(item.msg)}`}
                target="_blank"
                className="inline-flex justify-center items-center border border-accent/40 px-4 py-3 text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition w-full"
              >
                Consultar por WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* DESARROLLO A MEDIDA */}
      <div className="mt-40 py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-[var(--font-bebas)] tracking-tight">
            Desarrollo a medida
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Cuando tu negocio necesita más que una web, desarrollamos sistemas
            digitales adaptados a tu operación.
          </p>

          {/* BLOQUES */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Gestión interna",
                desc: "Sistemas para manejar clientes, turnos, ventas o procesos internos.",
              },
              {
                title: "Automatización",
                desc: "Reducí tareas manuales y optimizá tu operación con flujos automatizados.",
              },
              {
                title: "Escalabilidad real",
                desc: "Desarrollos preparados para crecer, integrar y evolucionar con tu negocio.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl p-6 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 transition"
              >
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CARD PREMIUM */}
          <div className="mt-16 max-w-xl mx-auto border border-accent/40 rounded-xl p-8 bg-gradient-to-b from-accent/10 to-transparent">
            <p className="text-xs text-accent tracking-widest uppercase">
              Solución avanzada
            </p>

            <h3 className="mt-4 font-[var(--font-bebas)] text-3xl">
              Sistemas web a medida
            </h3>

            <p className="mt-4 text-gray-400 text-sm">
              Desarrollo completo de plataformas adaptadas a tu negocio:
              dashboards, CRM, sistemas de gestión o herramientas internas.
            </p>

            <p className="mt-6 text-2xl font-[var(--font-bebas)] text-accent">
              Desde USD 1800+
            </p>

            <a
              href="https://wa.me/5491167470473"
              target="_blank"
              className="mt-6 inline-block w-full text-center bg-accent text-black px-6 py-3 text-xs uppercase tracking-widest hover:scale-[1.02] transition"
            >
              Consultar proyecto
            </a>
          </div>

          <p className="mt-12 text-gray-300 max-w-2xl mx-auto">
            No se trata solo de tener presencia digital. Se trata de construir
            herramientas que acompañen el crecimiento real de tu empresa.
          </p>
        </div>
      </div>

      {/* PROCESO */}
      <div className="mt-40 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold reveal">
            Cómo trabajamos
          </h2>

          <p className="mt-6 text-gray-500 reveal">
            Un proceso claro, enfocado en generar impacto real desde el inicio.
          </p>
        </div>

        {/* STEPS */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {[
            {
              step: "01",
              title: "Entendemos tu negocio",
              desc: "Analizamos tu situación actual, cómo funciona tu producto y qué está frenando tu crecimiento.",
            },
            {
              step: "02",
              title: "Detectamos oportunidades",
              desc: "Identificamos mejoras concretas en conversión, performance o procesos internos.",
            },
            {
              step: "03",
              title: "Diseñamos la solución",
              desc: "Definimos una estructura clara y escalable alineada a tus objetivos.",
            },
            {
              step: "04",
              title: "Desarrollamos y optimizamos",
              desc: "Ejecutamos, iteramos y mejoramos constantemente para generar resultados reales.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative border border-white/10 rounded-xl p-6 md:p-8 
        bg-white/[0.02] backdrop-blur-sm
        hover:border-accent/40
        hover:bg-white/[0.04]
        transition-all duration-300"
            >
              {/* NUMERO */}
              <span className="text-3xl font-[var(--font-bebas)] text-accent">
                {item.step}
              </span>

              {/* CONTENIDO */}
              <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>

              <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-300 transition">
                {item.desc}
              </p>

              {/* LINEA HOVER */}
              <div className="mt-6 h-[1px] w-8 bg-accent/40 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* FRASE FINAL */}
        <div className="mt-16 text-center max-w-xl mx-auto reveal">
          <p className="text-gray-400">
            No es solo desarrollo. Es un proceso pensado para que tu producto
            avance sin fricciones.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-40 pb-24 text-center px-6">
        <h3 className="text-4xl font-semibold reveal">
          Tu producto puede crecer más
        </h3>

        <p className="mt-6 text-gray-500">
          La diferencia está en cómo está construido.
        </p>

        <a
          href="https://wa.me/5491167470473"
          target="_blank"
          className="mt-10 inline-block bg-accent text-black px-8 py-4 uppercase text-sm"
        >
          Empezar proyecto
        </a>
      </div>
    </section>
  );
}
