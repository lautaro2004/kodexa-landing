import type React from "react";
import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { PortfolioSchema } from "@/components/portfolio-schema";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kodexa.ar"),

  title: {
    default: "Kodexa | Desarrollo Web",
    template: "%s | Kodexa",
  },

  description:
    "Kodexa es un estudio de desarrollo web especializado en sitios rápidos, modernos y bien estructurados. Creamos landings, webs corporativas y sistemas web escalables.",

  keywords: [
    "desarrollo web",
    "agencia desarrollo web",
    "desarrollador web freelance",
    "landing pages profesionales",
    "desarrollo frontend",
    "next.js development",
    "astro development",
    "desarrollo web argentina",
  ],

  authors: [{ name: "Lautaro Aquino", url: "https://kodexa.ar" }],

  creator: "Kodexa",
  publisher: "Kodexa",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Kodexa — Desarrollo Web Moderno",
    description:
      "Desarrollo de sitios web modernos, rápidos y escalables para empresas que buscan una presencia digital sólida.",
    url: "https://kodexa.ar",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kodexa Web Development",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kodexa — Desarrollo Web Moderno",
    description:
      "Sitios web modernos, rápidos y bien estructurados para empresas que quieren crecer online.",
    images: ["/og-image2.png"],
  },

  themeColor: "#ff6a00",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark bg-background">
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />

        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppFloat />
        <StructuredData />
        <PortfolioSchema />
        <Analytics />
      </body>
    </html>
  );
}
