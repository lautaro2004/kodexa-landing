import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kodexa.ar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://kodexa.ar/#services",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://kodexa.ar/#work",
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}