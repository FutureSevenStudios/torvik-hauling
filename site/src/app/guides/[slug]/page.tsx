import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { guides, getGuide } from "@/content/guides"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { FAQ } from "@/components/sections/FAQ"
import { CTABand } from "@/components/sections/CTABand"

type RouteParams = { slug: string }

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}

  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: `${guide.title} | Torvik Hauling`,
      description: guide.metaDescription,
      url: `${site.seo.siteUrl}/guides/${guide.slug}`,
    },
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<RouteParams>
}) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const others = guides.filter((g) => g.slug !== guide.slug)

  return (
    <>
      <HeroCompact eyebrow="Guide" headline={guide.headline} subheadline={guide.intro} />

      <section className="section-rhythm">
        <Container>
          <div className="max-w-3xl space-y-10">
            {guide.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-[color:var(--color-brand-text)]">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-[color:var(--color-brand-text)]">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ
        items={guide.faqs}
        eyebrow="Common questions"
        headline={`${guide.title}: quick answers`}
      />

      <section className="section-rhythm bg-[color:var(--color-brand-surface)] border-y border-[color:var(--color-brand-border)]">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-[color:var(--color-brand-text)]">
            More guides
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {others.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="inline-block rounded-full border border-[color:var(--color-brand-border)] px-4 py-2 text-sm hover:border-[color:var(--color-brand-primary)] transition-colors"
                >
                  {g.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/guides/bulk-pickup-rules"
                className="inline-block rounded-full border border-[color:var(--color-brand-primary)] px-4 py-2 text-sm font-medium text-[color:var(--color-brand-primary)]"
              >
                Bulk pickup rules by village
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      <CTABand
        headline="Ready when you are."
        subheadline="Send a photo for a firm price in 1 to 2 hours."
        imageKey="trailer"
      />
    </>
  )
}
