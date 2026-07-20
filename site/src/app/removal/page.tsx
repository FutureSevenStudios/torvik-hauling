import type { Metadata } from "next"
import Link from "next/link"
import { items } from "@/content/items"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { TrustBar } from "@/components/sections/TrustBar"
import { Container } from "@/components/ui/Container"
import { CTABand } from "@/components/sections/CTABand"

export const metadata: Metadata = {
  title: "What We Remove | Hot Tubs, Appliances, Furniture & More",
  description:
    "Hot tubs, appliances, mattresses, sheds, decks, fences, playsets, pools, pianos, and e-waste. What each item costs, where it ends up, and when your village will take it free.",
  alternates: { canonical: "/removal" },
}

export default function RemovalIndexPage() {
  return (
    <>
      <HeroCompact
        eyebrow="Single-item removal"
        headline="What we remove."
        subheadline="Each of these is a different job with a different disposal path. Pick yours to see what drives the price and where it actually ends up."
        imageKey="action"
      />
      <TrustBar />

      <section className="section-rhythm">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/removal/${item.slug}`}
                  className="block h-full rounded-lg border border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-surface)] p-6 hover:border-[color:var(--color-brand-primary)] transition-colors"
                >
                  <h2 className="font-display text-xl font-semibold text-[color:var(--color-brand-text)]">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-brand-muted)]">
                    {item.intro}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[color:var(--color-brand-muted)]">
            Not listed? We take almost anything non-hazardous. We cannot take
            liquid paint, chemicals, propane tanks, or asbestos, and we will point
            you to who can.
          </p>
        </Container>
      </section>

      <CTABand
        headline="Know what you need gone?"
        subheadline="Send a photo and we will quote it. We answer in 1 to 2 hours."
        imageKey="trailer"
      />
    </>
  )
}
