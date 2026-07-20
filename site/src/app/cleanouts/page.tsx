import type { Metadata } from "next"
import Link from "next/link"
import { cleanouts } from "@/content/cleanouts"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { TrustBar } from "@/components/sections/TrustBar"
import { Container } from "@/components/ui/Container"
import { CTABand } from "@/components/sections/CTABand"

export const metadata: Metadata = {
  title: "Cleanouts — Estate, Foreclosure, Garage, Basement & Commercial",
  description:
    "Estate, foreclosure, hoarding, rental turnover, garage, basement, storage unit, and commercial cleanouts across Lake County and NW Cook County, Illinois.",
  alternates: { canonical: "/cleanouts" },
}

export default function CleanoutsIndexPage() {
  return (
    <>
      <HeroCompact
        eyebrow="Cleanouts"
        headline="Every cleanout is a different kind of day."
        subheadline="An executor settling an estate and a landlord turning a unit need different things from us. Pick the one that matches your situation."
        imageKey="action"
      />
      <TrustBar />

      <section className="section-rhythm">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2">
            {cleanouts.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/cleanouts/${c.slug}`}
                  className="block h-full rounded-lg border border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-surface)] p-6 hover:border-[color:var(--color-brand-primary)] transition-colors"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-brand-secondary)]">
                    {c.customer}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-[color:var(--color-brand-text)]">
                    {c.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-brand-muted)]">
                    {c.intro}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand
        headline="Not sure which one you need?"
        subheadline="Call and describe it. We will tell you what the job actually is."
        imageKey="trailer"
      />
    </>
  )
}
