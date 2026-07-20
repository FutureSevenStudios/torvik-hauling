import { site } from "./content"
import type { Service, FAQ } from "@/types/site"
import type { City } from "@/content/cities"
import type { Item } from "@/content/items"
import type { Cleanout } from "@/content/cleanouts"

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
    // Mirrors the Google Business Profile, which lists Open 24 hours. Keep the
    // two in sync; inconsistent hours between a site and its GBP is a trust
    // signal problem and sends customers away when they think you are closed.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
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

/** Service schema for a single-item removal page. */
export function getItemServiceSchema(item: Item) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.name,
    description: item.intro,
    url: `${SITE_URL}/removal/${item.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    serviceType: item.name,
    areaServed: site.serviceAreas.full.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Illinois" },
    })),
  }
}

/** Service schema for a cleanout-type page. */
export function getCleanoutServiceSchema(cleanout: Cleanout) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cleanout.name,
    description: cleanout.intro,
    url: `${SITE_URL}/cleanouts/${cleanout.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    serviceType: cleanout.name,
    audience: { "@type": "Audience", audienceType: cleanout.customer },
    areaServed: site.serviceAreas.full.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Illinois" },
    })),
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
