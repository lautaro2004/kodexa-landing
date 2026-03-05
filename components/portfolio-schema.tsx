export function PortfolioSchema() {
  const projects = [
    {
      name: "Peabody Argentina",
      description:
        "Plataforma institucional multi-país con gestión dinámica de productos y arquitectura escalable.",
      url: "https://peabody.com.ar",
    },
    {
      name: "Mega Promociones",
      description:
        "Sistema de generación de landings para campañas con gestión de banners, tokens y configuración por ciudad.",
      url: "https://mega-promociones.com.mx/duo-lk-2024-1730143280783",
    },
    {
      name: "Freschi",
      description:
        "Sitio institucional multi-idioma con soporte i18n y arquitectura preparada para distintos mercados.",
      url: "https://andresfreschi.com",
    },
    {
      name: "Bigsur Energy",
      description:
        "Landing page orientada a conversión y generación de leads para campañas digitales.",
      url: "https://bigsur.energy",
    },
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lautaro Aquino",
    url: "https://kodexa.ar",
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
      description: project.description,
      url: project.url,
      creator: {
        "@type": "Person",
        name: "Lautaro Aquino",
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}