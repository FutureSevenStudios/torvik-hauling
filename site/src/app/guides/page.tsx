import type { Metadata } from "next"
import Link from "next/link"
import { guides } from "@/content/guides"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { Container } from "@/components/ui/Container"
import { CTABand } from "@/components/sections/CTABand"

export const metadata: Metadata = {
  title: "Guides — Junk Removal Costs, Permits & Local Waste Rules",
  description:
    "Straight answers on junk removal costs, what haulers can and can't take, demolition permits, dumpster rental, and every village's bulk-pickup rules in Lake and NW Cook County.",
  alternates: { canonical: "/guides" },
}

// The bulk-pickup-rules directory is a bespoke page, listed first here by hand.
const featured = {
  slug: "bulk-pickup-rules",
  title: "Bulk pickup rules by village",
  intro:
    "What every town in Lake and NW Cook County takes at the curb, and what it won't. Hauler, limits, and source for all 30 villages.",
}

export default function GuidesIndexPage() {
  return (
    <>
      <HeroCompact
        eyebrow="Guides"
        headline="Straight answers before you book."
        subheadline="Costs, permits, what we can take, and how your own village's rules work. No fluff, no sales pitch."
        imageKey="trailer"
      />

      <section className="section-rhythm">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2">
            <li className="sm:col-span-2">
              <Link
                href={`/guides/${featured.slug}`}
                className="block h-full rounded-lg border-2 border-[color:var(--color-brand-primary)] bg-[color:var(--color-brand-surface)] p-6 hover:bg-[color:var(--color-brand-primary)]/5 transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-brand-secondary)]">
                  Most useful
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-[color:var(--color-brand-text)]">
                  {featured.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-brand-muted)]">
                  {featured.intro}
                </p>
              </Link>
            </li>

            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="block h-full rounded-lg border border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-surface)] p-6 hover:border-[color:var(--color-brand-primary)] transition-colors"
                >
                  <h2 className="font-display text-xl font-semibold text-[color:var(--color-brand-text)]">
                    {g.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-brand-muted)]">
                    {g.intro}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand
        headline="Still have a question?"
        subheadline="Call or text (224) 456-6607. We answer in 1 to 2 hours."
        imageKey="hero"
      />
    </>
  )
}
