import Link from "next/link"
import { site } from "@/lib/content"
import { cities } from "@/content/cities"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"

/** Cities that have a dedicated page, keyed by display name. */
const cityPageByName = new Map(cities.map((c) => [c.name, c.slug]))

export function CityCards() {
  return (
    <section className="section-rhythm">
      <Container>
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="eyebrow mb-3">Core service area</p>
          <h2 className="font-display text-3xl md:text-[40px] font-bold text-[color:var(--color-brand-text)] leading-tight">
            Where we work most often
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {site.serviceAreas.primary.map((city) => {
            const slug = cityPageByName.get(city)
            const body = (
              <>
                <div className="flex items-center gap-2 text-[color:var(--color-brand-secondary)] mb-3">
                  <Icon name="map-pin" size={16} />
                  <span className="text-xs font-semibold uppercase tracking-wider">Lake / NW Cook County</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-[color:var(--color-brand-text)] mb-2">
                  {city}
                </h3>
                <p className="text-sm text-[color:var(--color-brand-muted)] leading-relaxed">
                  {site.cityBlurbs[city as keyof typeof site.cityBlurbs]}
                </p>
                {slug && (
                  <span className="inline-block mt-3 text-sm font-medium text-[color:var(--color-brand-secondary)]">
                    Junk removal in {city} &rarr;
                  </span>
                )}
              </>
            )

            return (
              <li key={city} className="h-full">
                {slug ? (
                  <Link
                    href={`/junk-removal/${slug}`}
                    className="block h-full bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-5 md:p-6 hover:border-[color:var(--color-brand-primary)] transition-colors"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="h-full bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-5 md:p-6">
                    {body}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
