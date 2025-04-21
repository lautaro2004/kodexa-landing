"use client";

import { useEffect, useRef, ReactNode  } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Code, Globe, Layout, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import KodexaLogo from "@/components/kodexa-logo";
import KodexaNetwork from "@/components/hero-animation";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-black bg-[#DFFE00]">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight">
              <KodexaLogo />
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#servicios"
              className="font-medium hover:underline underline-offset-4"
            >
              Servicios
            </Link>
            <Link
              href="#planes"
              className="font-medium hover:underline underline-offset-4"
            >
              Planes
            </Link>
            <Link
              href="#testimonios"
              className="font-medium hover:underline underline-offset-4"
            >
              Testimonios
            </Link>
            <Link
              href="#contacto"
              className="font-medium hover:underline underline-offset-4"
            >
              Contacto
            </Link>
          </nav>
          <div>
            <Button className="bg-black text-white hover:bg-black/80">
              Contactar
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#DFFE00] h-[100vh]">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                  Soluciones web accesibles y personalizadas para tu negocio.
                </h1>
                <p className="text-xl md:text-2xl">
                  Sitios, landings, eCommerce y software a medida para pymes y
                  emprendedores.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-black text-white hover:bg-black/80 text-lg px-8 py-6 h-auto">
                    ¡Comenzá tu proyecto!
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center"
              >
                <KodexaNetwork />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                Nuestros Servicios
              </h2>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <AnimatedCard delay={0.1}>
                <div className="flex flex-col items-center text-center p-6 h-full">
                  <div className="bg-[#DFFE00] p-4 rounded-full mb-4">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Desarrollo web personalizado
                  </h3>
                  <p className="text-gray-600">
                    Sitios web a medida que reflejan la identidad de tu marca y
                    cumplen tus objetivos de negocio.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="flex flex-col items-center text-center p-6 h-full">
                  <div className="bg-[#DFFE00] p-4 rounded-full mb-4">
                    <Layout className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Landing pages de alto impacto
                  </h3>
                  <p className="text-gray-600">
                    Páginas optimizadas para convertir visitantes en clientes
                    con diseños atractivos y persuasivos.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="flex flex-col items-center text-center p-6 h-full">
                  <div className="bg-[#DFFE00] p-4 rounded-full mb-4">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    E-commerce base y personalizado
                  </h3>
                  <p className="text-gray-600">
                    Tiendas online funcionales y atractivas que impulsan tus
                    ventas y mejoran la experiencia de compra.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.4}>
                <div className="flex flex-col items-center text-center p-6 h-full">
                  <div className="bg-[#DFFE00] p-4 rounded-full mb-4">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Software web a medida
                  </h3>
                  <p className="text-gray-600">
                    Soluciones personalizadas que automatizan procesos y
                    resuelven necesidades específicas de tu negocio.
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="planes" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
                Planes y Precios
              </h2>
              <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
                Soluciones adaptadas a tus necesidades y presupuesto
              </p>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <AnimatedCard delay={0.1}>
                <Card className="min-h-[500px] flex flex-col justify-between border-2 hover:border-[#DFFE00] transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">PLAN WEB BÁSICO</CardTitle>
                    <CardDescription>
                      Sitio institucional simple
                    </CardDescription>
                    <div className="mt-4 text-3xl font-bold">$180</div>
                    <div className="text-sm text-gray-500">pago único</div>
                  </CardHeader>
                  <CardContent className="space-y-2 flex-1">
                    {/* Items */}
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Sitio con hasta 5 secciones</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Hosting incluido</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Formulario de contacto</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>SEO básico</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Integración con redes sociales</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-black text-white hover:bg-black/80">
                      Elegir plan
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <Card className="min-h-[500px] flex flex-col justify-between border-2 hover:border-[#DFFE00] transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">PLAN LANDING PRO</CardTitle>
                    <CardDescription>Landing de alto impacto</CardDescription>
                    <div className="mt-4 text-3xl font-bold">$120</div>
                    <div className="text-sm text-gray-500">pago único</div>
                  </CardHeader>
                  <CardContent className="space-y-2 flex-1">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Landing de 1 página adaptable al rubro</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Hosting incluido</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Formulario o botón de acción</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Diseño optimizado para conversión</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Edición de contenido posterior ($20)</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-black text-white hover:bg-black/80">
                      Elegir plan
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <Card className="min-h-[500px] flex flex-col justify-between border-2 hover:border-[#DFFE00] transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      PLAN ECOMMERCE BASE
                    </CardTitle>
                    <CardDescription>Tienda online funcional</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      $59<span className="text-base font-normal">/mes</span>
                    </div>
                    <div className="text-sm text-gray-500">+ setup $150</div>
                  </CardHeader>
                  <CardContent className="space-y-2 flex-1">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Tienda online funcional con backend propio</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Gestión de productos</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Integración de pagos</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Dominio incluido</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Soporte técnico</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-black text-white hover:bg-black/80">
                      Elegir plan
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.4}>
                <Card className="min-h-[500px] flex flex-col justify-between border-2 hover:border-[#DFFE00] transition-all duration-300">
                  <div className="absolute top-0 right-0 bg-[#DFFE00] text-black font-bold py-1 px-4 text-sm">
                    POPULAR
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      ECOMMERCE PERSONALIZADO
                    </CardTitle>
                    <CardDescription>Tienda 100% a medida</CardDescription>
                    <div className="mt-4 text-3xl font-bold">
                      $99<span className="text-base font-normal">/mes</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      + setup desde $250
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 flex-1">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Incluye todo el plan base</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Diseño 100% personalizado</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Alineado a tu marca</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Funcionalidades extra disponibles</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Opciones multidioma y APIs externas</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-black text-white hover:bg-black/80">
                      Elegir plan
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            </div>

            <AnimatedSection delay={0.5}>
              <div className="mt-16 bg-white p-8 rounded-lg border-2 border-[#DFFE00]">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-[#DFFE00] p-4 rounded-full">
                    <Code className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">
                      SOFTWARE A MEDIDA
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Desarrollo full stack a medida, escalable y con
                      infraestructura dedicada. Incluye diseño, documentación y
                      soporte.
                    </p>
                    <div className="text-2xl font-bold">
                      Desde $700{" "}
                      <span className="text-base font-normal">
                        (pago único)
                      </span>
                    </div>
                  </div>
                  <Button className="bg-black text-white hover:bg-black/80 px-8">
                    Consultar
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                Lo que dicen nuestros clientes
              </h2>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-3">
              <AnimatedCard delay={0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <CardTitle className="text-xl">Increíble trabajo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "Kodexa transformó nuestra presencia online. El sitio web
                      que desarrollaron no solo es visualmente atractivo, sino
                      que también ha aumentado significativamente nuestras
                      conversiones."
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="font-bold">ML</span>
                    </div>
                    <div>
                      <div className="font-medium">María López</div>
                      <div className="text-sm text-gray-500">
                        Boutique Elegance
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <CardTitle className="text-xl">
                      Excelente servicio
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "La landing page que crearon para nuestro lanzamiento
                      superó todas nuestras expectativas. El diseño es moderno y
                      llamativo, y la tasa de conversión ha sido excepcional."
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="font-bold">JR</span>
                    </div>
                    <div>
                      <div className="font-medium">Juan Rodríguez</div>
                      <div className="text-sm text-gray-500">TechStart SRL</div>
                    </div>
                  </CardFooter>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <CardTitle className="text-xl">
                      Profesionales y eficientes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "Nuestro e-commerce ha crecido un 200% desde que Kodexa lo
                      rediseñó. La plataforma es intuitiva, rápida y nuestros
                      clientes adoran la experiencia de compra."
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="font-bold">CP</span>
                    </div>
                    <div>
                      <div className="font-medium">Carolina Pérez</div>
                      <div className="text-sm text-gray-500">Moda Express</div>
                    </div>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#DFFE00]">
          <div className="container">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  ¿Listo para impulsar tu negocio?
                </h2>
                <p className="text-xl mb-8">
                  Contactanos hoy mismo y comienza a transformar tu presencia
                  digital.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-black text-white hover:bg-black/80 text-lg px-8 py-6 h-auto">
                    ¡Comenzá tu proyecto!
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="bg-black text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold mb-4">KODEXA</h3>
              <p className="text-gray-400 mb-4">
                Soluciones web accesibles y personalizadas para pymes y
                emprendedores.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-[#DFFE00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-[#DFFE00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-[#DFFE00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-[#DFFE00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@kodexa.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+54 11 1234-5678</span>
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Buenos Aires, Argentina</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#servicios"
                    className="text-gray-400 hover:text-[#DFFE00]"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#planes"
                    className="text-gray-400 hover:text-[#DFFE00]"
                  >
                    Planes y Precios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonios"
                    className="text-gray-400 hover:text-[#DFFE00]"
                  >
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#DFFE00]">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#DFFE00]">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Kodexa. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Animated Section Component
function AnimatedSection({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Animated Card Component
function AnimatedCard({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 1 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.4,
            delay,
          },
        },
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
}
