import type { MetadataRoute } from "next"
import { site } from "@/lib/content"
import { cities } from "@/content/cities"
import { items } from "@/content/items"
import { cleanouts } from "@/content/cleanouts"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || site.seo.siteUrl
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/removal`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/cleanouts`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/guides/bulk-pickup-rules`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = site.services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }))

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/junk-removal/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const itemPages: MetadataRoute.Sitemap = items.map((i) => ({
    url: `${base}/removal/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }))

  const cleanoutPages: MetadataRoute.Sitemap = cleanouts.map((c) => ({
    url: `${base}/cleanouts/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...itemPages,
    ...cleanoutPages,
  ]
}
