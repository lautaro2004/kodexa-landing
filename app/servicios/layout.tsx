import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Equipo de desarrollo web | Kodexa",
  description:
    "Conocé el equipo detrás de Kodexa. Especialistas en desarrollo web, optimización y crecimiento de productos digitales.",

  keywords: [
    "equipo desarrollo web",
    "agencia desarrollo web argentina",
    "desarrolladores web profesionales",
    "equipo tecnico web",
  ],

  openGraph: {
    title: "Equipo Kodexa",
    description:
      "El equipo técnico detrás de Kodexa que desarrolla y mejora productos digitales.",
    url: "https://kodexa.ar/equipo",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-team.png",
        width: 1200,
        height: 630,
        alt: "Equipo Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Equipo Kodexa",
    description:
      "Equipo técnico especializado en desarrollo web y productos digitales.",
    images: ["/og-team.png"],
  },
};

export default function EquipoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}