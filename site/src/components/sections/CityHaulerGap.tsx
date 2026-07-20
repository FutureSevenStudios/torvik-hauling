import { Container } from "@/components/ui/Container"
import type { City } from "@/content/cities"

/**
 * The section that makes each city page worth indexing: what that town's own
 * hauler will and will not take, and where that leaves a homeowner.
 *
 * Every string rendered here is hand-written per city in cities.ts. This
 * component only lays it out.
 */
export function CityHaulerGap({ city }: { city: City }) {
  return (
    <section className="section-rhythm bg-[color:var(--color-brand-surface)] border-y border-[color:var(--color-brand-border)]">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-brand-secondary)]">
            {city.name} curbside rules
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 text-[color:var(--color-brand-text)]">
            What {city.hauler.name} will take, and what it won&rsquo;t
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-[color:var(--color-brand-border)] p-6 bg-[color:var(--color-brand-background)]">
              <h3 className="font-display text-xl font-semibold text-[color:var(--color-brand-text)]">
                The village program
              </h3>
              <p className="mt-3 leading-relaxed text-[color:var(--color-brand-text)]">
                {city.hauler.bulkRule}
              </p>
              <p className="mt-4 text-sm text-[color:var(--color-brand-muted)]">
                {city.hauler.name}: {city.hauler.phone}
              </p>
            </div>

            <div className="rounded-lg border-2 border-[color:var(--color-brand-primary)] p-6 bg-[color:var(--color-brand-background)]">
              <h3 className="font-display text-xl font-semibold text-[color:var(--color-brand-text)]">
                Where that leaves you
              </h3>
              <p className="mt-3 leading-relaxed text-[color:var(--color-brand-text)]">
                {city.hauler.gap}
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-[color:var(--color-brand-muted)]">
            Rules current as of{" "}
            {new Date(city.hauler.verified).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
            . Municipal contracts change, so confirm details with{" "}
            <a
              href={city.hauler.sourceUrl}
              rel="nofollow noopener"
              target="_blank"
              className="underline text-[color:var(--color-brand-secondary)]"
            >
              the {city.name} waste page
            </a>{" "}
            before you rely on them.
          </p>
        </div>
      </Container>
    </section>
  )
}
