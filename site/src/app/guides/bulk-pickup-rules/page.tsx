import type { Metadata } from "next"
import Link from "next/link"
import { cities } from "@/content/cities"
import { site } from "@/lib/content"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { Container } from "@/components/ui/Container"
import { CTABand } from "@/components/sections/CTABand"

export const metadata: Metadata = {
  title: "Bulk Pickup Rules by Village | Lake & NW Cook County, IL",
  description:
    "What your village actually takes at the curb. Bulk item limits, weight caps, and haulers for Lake Zurich, Barrington, Palatine, Arlington Heights, Buffalo Grove, Libertyville, Long Grove and Hawthorn Woods.",
  alternates: { canonical: "/guides/bulk-pickup-rules" },
}

/**
 * Reference page, built from the same verified data as the city pages.
 *
 * This is written to be genuinely useful whether or not the reader ever calls
 * us, including telling people to use their free village program when that is
 * the right answer. That is the point: a page worth linking to earns links.
 */
export default function BulkPickupRulesPage() {
  const sorted = [...cities].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
      <HeroCompact
        eyebrow="Reference"
        headline="Bulk pickup rules, village by village"
        subheadline="Every town in Lake and NW Cook County has a different hauler and a different set of limits. Here is what yours actually takes at the curb, and what it will not."
        imageKey="trailer"
      />

      <section className="section-rhythm">
        <Container>
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-[color:var(--color-brand-text)]">
            <p>
              Most people assume bulk pickup works the same everywhere. It does
              not. Lake Zurich caps a free bulk item at 50 pounds and 4 feet.
              Palatine draws its line at 60 pounds. Long Grove requires that a
              single collector be able to lift the item alone. Arlington Heights
              runs bulk on a bi-weekly schedule with a fee rather than weekly.
            </p>
            <p>
              We put this together because we kept answering the same question on
              the phone. If your village already takes what you have, use the
              program you are paying for through your taxes and your hauler bill.
              Call us for the things it will not take.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="overflow-x-auto rounded-lg border border-[color:var(--color-brand-border)]">
            <table className="w-full text-left text-sm min-w-[720px]">
              <caption className="sr-only">
                Bulk pickup rules and contracted haulers by village
              </caption>
              <thead className="bg-[color:var(--color-brand-surface)] border-b border-[color:var(--color-brand-border)]">
                <tr>
                  <th scope="col" className="p-4 font-semibold">Village</th>
                  <th scope="col" className="p-4 font-semibold">Hauler</th>
                  <th scope="col" className="p-4 font-semibold">The rule</th>
                  <th scope="col" className="p-4 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((c) => (
                  <tr
                    key={c.slug}
                    className="border-b border-[color:var(--color-brand-border)] last:border-0 align-top"
                  >
                    <th scope="row" className="p-4 font-semibold whitespace-nowrap">
                      <Link
                        href={`/junk-removal/${c.slug}`}
                        className="text-[color:var(--color-brand-secondary)] underline underline-offset-2"
                      >
                        {c.name}
                      </Link>
                    </th>
                    <td className="p-4 whitespace-nowrap">
                      {c.hauler.name}
                      <br />
                      <span className="text-[color:var(--color-brand-muted)] text-xs">
                        {c.hauler.phone}
                      </span>
                    </td>
                    <td className="p-4 leading-relaxed">{c.hauler.bulkRule}</td>
                    <td className="p-4 whitespace-nowrap">
                      <a
                        href={c.hauler.sourceUrl}
                        target="_blank"
                        rel="nofollow noopener"
                        className="text-[color:var(--color-brand-secondary)] underline"
                      >
                        Village page
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-[color:var(--color-brand-muted)] max-w-3xl">
            Rules verified July 2026 against official village and hauler pages.
            Municipal waste contracts change when they are renewed, so confirm
            with your village before relying on any of this. If you spot
            something out of date, call us at {site.identity.phone} and we will
            correct it.
          </p>

          <div className="mt-12 max-w-3xl">
            <h2 className="font-display text-2xl font-semibold text-[color:var(--color-brand-text)]">
              What no village will take
            </h2>
            <p className="mt-3 leading-relaxed text-[color:var(--color-brand-text)]">
              A few categories are excluded everywhere in our service area,
              regardless of which hauler your town uses. Hot tubs, above-ground
              pools, sheds, decks, and fences are structures rather than bulk
              items. Construction and renovation debris is excluded from most
              residential programs outright. Anything hazardous, meaning liquid
              paint, fuel, pesticides, and propane, needs Lake County household
              chemical waste collection, and we cannot legally take it either.
            </p>
            <p className="mt-3 leading-relaxed text-[color:var(--color-brand-text)]">
              Electronics are their own case. Illinois bars covered electronic
              devices from landfills, so televisions and computers have to go to
              a registered recycler. Some villages run their own e-waste
              programs, and where they exist they are free and worth using.
            </p>
            <Link
              href="/removal"
              className="inline-block mt-5 underline text-[color:var(--color-brand-secondary)]"
            >
              See how we handle each of those
            </Link>
          </div>
        </Container>
      </section>

      <CTABand
        headline="Got something your village will not take?"
        subheadline="Send a photo. We will quote it in 1 to 2 hours."
        imageKey="hero"
      />
    </>
  )
}
