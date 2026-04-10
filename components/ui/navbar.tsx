"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-white font-semibold text-lg">
          Kodexa
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <Link href="/#servicios" className="hover:text-white transition">
            Servicios
          </Link>
          <Link href="/#proyectos" className="hover:text-white transition">
            Trabajos
          </Link>
          <Link href="/#equipo-it" className="hover:text-white transition">
            Sumar equipo IT
          </Link>
          <Link href="/#contact" className="hover:text-white transition">
            Contacto
          </Link>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/5491167470473"
          target="_blank"
          className="hidden md:inline-block bg-orange-500 text-black px-5 py-2 text-xs uppercase hover:scale-105 transition"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}