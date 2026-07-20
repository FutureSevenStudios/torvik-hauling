import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { items, getItem } from "@/content/items"
import { cities } from "@/content/cities"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { TrustBar } from "@/components/sections/TrustBar"
import { FAQ } from "@/components/sections/FAQ"
import { CTABand } from "@/components/sections/CTABand"
import { getItemServiceSchema } from "@/lib/schema"

type RouteParams = { item: string }

export function generateStaticParams() {
  return items.map((i) => ({ item: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>
}): Promise<Metadata> {
  const { item: slug } = await params
  const item = getItem(slug)
  if (!item) return {}

  return {
    title: item.headline,
    description: item.metaDescription,
    alternates: { canonical: `/removal/${item.slug}` },
    openGraph: {
      title: `${item.name} | Torvik Hauling`,
      description: item.metaDescription,
      url: `${site.seo.siteUrl}/removal/${item.slug}`,
    },
  }
}

function Panel({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-lg border border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-surface)] p-6">
      <h2 className="font-display text-xl font-semibold text-[color:var(--color-brand-text)]">
        {title}
      </h2>
      <div className="mt-3 leading-relaxed text-[color:var(--color-brand-text)]">
        {children}
      </div>
    </div>
  )
}

export default async function ItemRemovalPage({
  params,
}: {
  params: Promise<RouteParams>
}) {
  const { item: slug } = await params
  const item = getItem(slug)
  if (!item) notFound()

  const others = items.filter((i) => i.slug !== item.slug).slice(0, 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getItemServiceSchema(item)),
        }}
      />

      <HeroCompact
        eyebrow="Single-item removal"
        headline={item.headline}
        subheadline={item.intro}
        imageKey="action"
      />
      <TrustBar />

      <section className="section-rhythm">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Panel title="Why this one is harder than it looks">
              <p>{item.whyHard}</p>
            </Panel>

            <Panel title="Where it actually ends up">
              <p>{item.disposalPath}</p>
            </Panel>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Panel title="How we do it">
              <ol className="space-y-2 list-decimal list-inside">
                {item.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </Panel>

            <Panel title="What drives the price">
              <ul className="space-y-2">
                {item.pricingFactors.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span aria-hidden className="text-[color:var(--color-brand-secondary)]">
                      &bull;
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[color:var(--color-brand-muted)]">
                {site.identity.estimatesPolicy}
              </p>
            </Panel>
          </div>
        </Container>
      </section>

      <section className="section-rhythm bg-[color:var(--color-brand-surface)] border-y border-[color:var(--color-brand-border)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-brand-secondary)]">
              Before you call us
            </p>
            <h2 className="font-display text-3xl font-semibold mt-2 text-[color:var(--color-brand-text)]">
              Can your village take it instead?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-brand-text)]">
              {item.curbsideReality}
            </p>
            <Link
              href="/service-areas"
              className="inline-block mt-5 underline text-[color:var(--color-brand-secondary)]"
            >
              See the rules for your town
            </Link>
          </div>
        </Container>
      </section>

      {item.proof && (
        <section className="section-rhythm">
          <Container>
            <figure className="max-w-3xl">
              <blockquote className="font-display text-2xl md:text-3xl leading-snug text-[color:var(--color-brand-text)]">
                &ldquo;{item.proof.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[color:var(--color-brand-muted)]">
                {item.proof.author}, Google review
              </figcaption>
            </figure>
          </Container>
        </section>
      )}

      <FAQ
        items={item.faqs}
        eyebrow={`${item.name} questions`}
        headline={`${item.name}, answered`}
      />

      <section className="section-rhythm bg-[color:var(--color-brand-surface)] border-y border-[color:var(--color-brand-border)]">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-[color:var(--color-brand-text)]">
            We also remove
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {others.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/removal/${i.slug}`}
                  className="inline-block rounded-full border border-[color:var(--color-brand-border)] px-4 py-2 text-sm hover:border-[color:var(--color-brand-primary)] transition-colors"
                >
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 text-[color:var(--color-brand-text)]">
            {item.name} near you
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {cities.slice(0, 6).map((c) => (
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
        headline={`Need it gone?`}
        subheadline="Send a photo and we will quote it. We answer in 1 to 2 hours."
        imageKey="trailer"
      />
    </>
  )
}
