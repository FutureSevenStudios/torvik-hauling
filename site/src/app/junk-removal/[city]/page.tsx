import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cities, getCity } from "@/content/cities"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { TrustBar } from "@/components/sections/TrustBar"
import { CityHaulerGap } from "@/components/sections/CityHaulerGap"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { FAQ } from "@/components/sections/FAQ"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTABand } from "@/components/sections/CTABand"
import { getCityServiceSchema } from "@/lib/schema"

type RouteParams = { city: string }

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>
}): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCity(slug)
  if (!city) return {}

  return {
    title: `Junk Removal in ${city.name}, IL | Same-Week Pickup`,
    description: `${city.hauler.name} takes limited bulk items in ${city.name}. Torvik Hauling takes the rest. Licensed, insured, 1-2 hour response, free estimates from $125.`,
    alternates: { canonical: `/junk-removal/${city.slug}` },
    openGraph: {
      title: `Junk Removal in ${city.name}, IL | Torvik Hauling`,
      description: `Fast junk removal and cleanouts in ${city.name}. Free estimates, 1-2 hour response.`,
      url: `${site.seo.siteUrl}/junk-removal/${city.slug}`,
    },
  }
}

export default async function CityJunkRemovalPage({
  params,
}: {
  params: Promise<RouteParams>
}) {
  const { city: slug } = await params
  const city = getCity(slug)
  if (!city) notFound()

  const relatedServices = city.priorityServices
    .map((s) => site.services.find((svc) => svc.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  const nearby = cities.filter((c) => c.slug !== city.slug).slice(0, 4)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getCityServiceSchema(city)),
        }}
      />

      <HeroCompact
        eyebrow={`${city.name}, Illinois`}
        headline={`Junk removal in ${city.name}.`}
        subheadline={city.driveTime}
        imageKey="trailer"
      />
      <TrustBar />

      <section className="section-rhythm">
        <Container>
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-[color:var(--color-brand-text)]">
            <p>{city.intro}</p>
            <p>{city.localContext}</p>
          </div>
        </Container>
      </section>

      <CityHaulerGap city={city} />

      <section className="section-rhythm">
        <Container>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[color:var(--color-brand-text)]">
            What we get called for most in {city.name}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {relatedServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="block rounded-lg border border-[color:var(--color-brand-border)] p-6 bg-[color:var(--color-brand-surface)] hover:border-[color:var(--color-brand-primary)] transition-colors"
              >
                <h3 className="font-display text-xl font-semibold text-[color:var(--color-brand-text)]">
                  {svc.name}
                </h3>
                <p className="mt-2 text-[color:var(--color-brand-muted)] leading-relaxed">
                  {svc.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <HowItWorks compact />

      <FAQ
        items={city.faqs}
        eyebrow={`${city.name} questions`}
        headline={`Junk removal in ${city.name}, answered`}
      />

      <Testimonials
        eyebrow="What neighbors say"
        headline="Reviews from around Lake County"
        showGoogleLink
      />

      <section className="section-rhythm bg-[color:var(--color-brand-surface)] border-y border-[color:var(--color-brand-border)]">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-[color:var(--color-brand-text)]">
            We also serve
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {nearby.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/junk-removal/${c.slug}`}
                  className="inline-block rounded-full border border-[color:var(--color-brand-border)] px-4 py-2 text-sm hover:border-[color:var(--color-brand-primary)] transition-colors"
                >
                  Junk removal in {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/service-areas"
                className="inline-block rounded-full border border-[color:var(--color-brand-primary)] px-4 py-2 text-sm font-medium text-[color:var(--color-brand-primary)]"
              >
                All service areas
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      <CTABand
        headline={`Need it gone in ${city.name}?`}
        subheadline="Call or text for a free estimate. We answer in 1 to 2 hours."
        imageKey="hero"
      />
    </>
  )
}
