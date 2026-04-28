import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"

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
          {site.serviceAreas.primary.map((city) => (
            <li
              key={city}
              className="bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-5 md:p-6"
            >
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
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
