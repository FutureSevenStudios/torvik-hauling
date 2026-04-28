import Link from "next/link"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon, type IconName } from "@/components/ui/Icon"

export function ServicesGrid({
  eyebrow,
  headline,
  subheadline,
  showFeatures = false,
  showCTA = true,
}: {
  eyebrow?: string
  headline?: string
  subheadline?: string
  showFeatures?: boolean
  showCTA?: boolean
}) {
  return (
    <section className="section-rhythm">
      <Container>
        {(eyebrow || headline || subheadline) && (
          <div className="max-w-2xl mb-12 md:mb-16">
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {headline && (
              <h2 className="font-display text-3xl md:text-[44px] font-bold text-[color:var(--color-brand-text)] leading-tight mb-4">
                {headline}
              </h2>
            )}
            {subheadline && (
              <p className="text-lg text-[color:var(--color-brand-muted)] leading-relaxed">
                {subheadline}
              </p>
            )}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {site.services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-6 md:p-7 hover:border-[color:var(--color-brand-secondary)] hover:shadow-[var(--shadow-lifted)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[color:var(--color-brand-primary)]/8 flex items-center justify-center text-[color:var(--color-brand-primary)] mb-5 group-hover:bg-[color:var(--color-brand-primary)] group-hover:text-white transition-colors">
                <Icon name={s.icon as IconName} size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-[color:var(--color-brand-text)] mb-2">
                {s.name}
              </h3>
              <p className="text-sm text-[color:var(--color-brand-muted)] leading-relaxed mb-4">
                {s.shortDescription}
              </p>
              {showFeatures && (
                <ul className="text-sm text-[color:var(--color-brand-muted)] space-y-1.5 mb-4">
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Icon name="check" size={14} className="text-[color:var(--color-brand-secondary)] mt-1 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
              <span className="btn-ghost text-sm">
                Learn more
                <Icon name="arrow-right" size={14} />
              </span>
            </Link>
          ))}
        </div>

        {showCTA && (
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-ghost">
              See all services
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        )}
      </Container>
    </section>
  )
}
