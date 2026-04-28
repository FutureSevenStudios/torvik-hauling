import Link from "next/link"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import { ServiceAreaMap } from "./ServiceAreaMap"

export function ServiceAreasPreview() {
  return (
    <section className="section-rhythm">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="eyebrow mb-3">Where we serve</p>
            <h2 className="font-display text-3xl md:text-[44px] font-bold text-[color:var(--color-brand-text)] leading-tight mb-5">
              Lake County &amp; Northwest Cook County, Illinois
            </h2>
            <p className="text-lg text-[color:var(--color-brand-muted)] leading-relaxed mb-8">
              Headquartered in Hawthorn Woods. 30+ communities covered. If you&rsquo;re near Lake Zurich, we&rsquo;re nearby.
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {site.serviceAreas.primary.map((city) => (
                <li key={city} className="flex items-center gap-2 text-[color:var(--color-brand-text)]">
                  <Icon name="map-pin" size={14} className="text-[color:var(--color-brand-secondary)]" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
            <Link href="/service-areas" className="btn-ghost">
              See full service area
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
          <div>
            <ServiceAreaMap />
          </div>
        </div>
      </Container>
    </section>
  )
}
