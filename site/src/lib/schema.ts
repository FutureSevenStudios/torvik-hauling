import { site } from "./content"
import type { Service, FAQ } from "@/types/site"
import type { City } from "@/content/cities"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || site.seo.siteUrl

export function getLocalBusinessSchema() {
  const lb = site.seo.localBusiness
  return {
    "@context": "https://schema.org",
    "@type": lb.schemaType,
    "@id": `${SITE_URL}/#business`,
    name: lb.name,
    description: site.identity.description,
    url: SITE_URL,
    telephone: lb.telephone,
    email: lb.email,
    priceRange: lb.priceRange,
    image: `${SITE_URL}/logos/Torvik_Hauling_Logo_Exact_Torvik_Hauling_Solo.png`,
    logo: `${SITE_URL}/logos/Torvik_Hauling_Logo_Exact-01.png`,
    address: {
      "@type": "PostalAddress",
      ...lb.address,
    },
    areaServed: site.serviceAreas.full.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Illinois" },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: lb.aggregateRating.ratingValue,
      reviewCount: lb.aggregateRating.reviewCount,
    },
    sameAs: lb.sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.shortDescription,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  }
}

export function getServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.fullDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: site.serviceAreas.full,
    serviceType: service.name,
  }
}

/**
 * Service schema scoped to a single city, so each city page describes the
 * specific place it serves rather than repeating the sitewide area list.
 */
export function getCityServiceSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Junk Removal in ${city.name}, IL`,
    description: city.intro,
    url: `${SITE_URL}/junk-removal/${city.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    serviceType: "Junk Removal",
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${city.county} County, Illinois`,
      },
    },
  }
}

export function getFAQSchema(faqs: readonly FAQ[] | FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}
