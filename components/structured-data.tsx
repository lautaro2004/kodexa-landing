export function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Lautaro Aquino",
      url: "https://kodexa.ar",
      jobTitle: "Web Developer",
      worksFor: {
        "@type": "Organization",
        name: "Kodexa"
      },
      sameAs: [
        "https://www.linkedin.com/in/lautaro-aquino-007a1625b/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Kodexa",
      url: "https://kodexa.ar",
      founder: {
        "@type": "Person",
        name: "Lautaro Aquino"
      },
      serviceType: [
        "Landing Page Development",
        "Corporate Websites",
        "Dynamic Web Platforms"
      ],
      areaServed: "Worldwide"
    }
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  )
}