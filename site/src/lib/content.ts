import siteData from "@/content/site.json"

export const site = siteData

export function getService(slug: string) {
  return site.services.find((s) => s.slug === slug)
}

export function getTestimonialsForService(slug: string, max = 3) {
  return site.testimonials
    .filter((t) => !slug || t.serviceContext === slug || slug === "all")
    .slice(0, max)
}

export function photoFor(key: keyof typeof site.photos) {
  return site.photos[key]
}
