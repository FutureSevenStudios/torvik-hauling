import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cleanouts, getCleanout } from "@/content/cleanouts"
import { cities } from "@/content/cities"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { TrustBar } from "@/components/sections/TrustBar"
import { FAQ } from "@/components/sections/FAQ"
import { CTABand } from "@/components/sections/CTABand"
import { getCleanoutServiceSchema } from "@/lib/schema"

type RouteParams = { type: string }

export function generateStaticParams() {
  return cleanouts.map((c) => ({ type: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>
}): Promise<Metadata> {
  const { type } = await params
  const cleanout = getCleanout(type)
  if (!cleanout) return {}

  return {
    title: cleanout.headline,
    description: cleanout.metaDescription,
    alternates: { canonical: `/cleanouts/${cleanout.slug}` },
    openGraph: {
      title: `${cleanout.name} | Torvik Hauling`,
      description: cleanout.metaDescription,
      url: `${site.seo.siteUrl}/cleanouts/${cleanout.slug}`,
    },
  }
}

export default async function CleanoutPage({
  params,
}: {
  params: Promise<RouteParams>
}) {
  const { type } = await params
  const cleanout = getCleanout(type)
  if (!cleanout) notFound()

  const others = cleanouts.filter((c) => c.slug !== cleanout.slug)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getCleanoutServiceSchema(cleanout)),
        }}
      />

      <HeroCompact
        eyebrow={cleanout.customer}
        headline={cleanout.headline}
        subheadline={cleanout.intro}
        imageKey="action"
      />
      <TrustBar />

      <section className="section-rhythm">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[color:var(--color-brand-text)]">
              What makes this one hard
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-brand-text)]">
              {cleanout.theHardPart}
            </p>
          </div>
        </Container>
      </section>

      <section className="section-rhythm bg-[color:var(--color-brand-surface)] border-y border-[color:var(--color-brand-border)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-[color:var(--color-brand-text)]">
                How we work
              </h2>
              <ol className="mt-5 space-y-3">
                {cleanout.process.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[color:var(--color-brand-primary)]/10 text-[color:var(--color-brand-primary)] text-sm font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed text-[color:var(--color-brand-text)]">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-[color:var(--color-brand-text)]">
                How long it takes
              </h2>
              <p className="mt-5 leading-relaxed text-[color:var(--color-brand-text)]">
                {cleanout.timeline}
              </p>
              <p className="mt-4 text-sm text-[color:var(--color-brand-muted)]">
                {site.identity.estimatesPolicy}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-rhythm">
        <Container>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[color:var(--color-brand-text)]">
            What people ask us before they book
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {cleanout.concerns.map((c) => (
              <div
                key={c.concern}
                className="rounded-lg border border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-surface)] p-6"
              >
                <p className="font-display text-lg font-semibold text-[color:var(--color-brand-text)]">
                  &ldquo;{c.concern}&rdquo;
                </p>
                <p className="mt-3 leading-relaxed text-[color:var(--color-brand-text)]">
                  {c.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ
        items={cleanout.faqs}
        eyebrow={`${cleanout.name} questions`}
        headline={`${cleanout.name}, answered`}
      />

      <section className="section-rhythm bg-[color:var(--color-brand-surface)] border-y border-[color:var(--color-brand-border)]">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-[color:var(--color-brand-text)]">
            Other cleanouts we handle
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {others.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/cleanouts/${c.slug}`}
                  className="inline-block rounded-full border border-[color:var(--color-brand-border)] px-4 py-2 text-sm hover:border-[color:var(--color-brand-primary)] transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 text-[color:var(--color-brand-text)]">
            Where we work
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/junk-removal/${c.slug}`}
                  className="inline-block rounded-full border border-[color:var(--color-brand-border)] px-4 py-2 text-sm hover:border-[color:var(--color-brand-primary)] transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand
        headline="Start with a walkthrough, not a commitment."
        subheadline="Free on-site estimate. We answer in 1 to 2 hours."
        imageKey="hero"
      />
    </>
  )
}
