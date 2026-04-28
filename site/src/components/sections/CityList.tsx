import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"

export function CityList() {
  return (
    <section className="py-16 md:py-20 bg-[color:var(--color-brand-primary)]/3 border-y border-[color:var(--color-brand-border)]">
      <Container>
        <div className="max-w-2xl mb-8">
          <p className="eyebrow mb-3">Full service area</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[color:var(--color-brand-text)]">
            All {site.serviceAreas.full.length} communities we serve
          </h2>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2.5">
          {site.serviceAreas.full.map((city) => (
            <li key={city} className="flex items-center gap-2 text-[color:var(--color-brand-text)]">
              <Icon name="map-pin" size={12} className="text-[color:var(--color-brand-secondary)] shrink-0" />
              <span>{city}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-[color:var(--color-brand-muted)]">
          Not on the list? We may still be able to help — give us a call.
        </p>
      </Container>
    </section>
  )
}
