import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"

export function TagCloud() {
  return (
    <section className="py-16 md:py-20 bg-[color:var(--color-brand-primary)]/3 border-y border-[color:var(--color-brand-border)]">
      <Container>
        <div className="max-w-2xl mb-8">
          <p className="eyebrow mb-3">Also available</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[color:var(--color-brand-text)]">
            Common specific asks
          </h2>
          <p className="mt-3 text-[color:var(--color-brand-muted)]">
            These fall under the services above, call or text if you&rsquo;re not sure which one fits.
          </p>
        </div>
        <ul className="flex flex-wrap gap-2.5">
          {site.secondaryServices.map((s) => (
            <li key={s.slug}>
              <a
                href={`/services/${s.parentSlug}`}
                className="inline-block bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-full px-4 py-2 text-sm text-[color:var(--color-brand-text)] hover:border-[color:var(--color-brand-secondary)] hover:text-[color:var(--color-brand-primary)] transition-colors"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
