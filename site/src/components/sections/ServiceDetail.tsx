import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import type { Service } from "@/types/site"

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <section className="section-rhythm">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-[40px] font-bold text-[color:var(--color-brand-text)] leading-tight mb-6">
              What&rsquo;s included
            </h2>
            <p className="text-lg text-[color:var(--color-brand-text)] leading-relaxed mb-8">
              {service.fullDescription}
            </p>
            <ul className="space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[color:var(--color-brand-accent)]/20 flex items-center justify-center text-[color:var(--color-brand-primary)] shrink-0 mt-0.5">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="text-[color:var(--color-brand-text)]">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-6 md:p-7 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-xl font-semibold text-[color:var(--color-brand-text)] mb-4">
                Why homeowners pick Torvik
              </h3>
              <ul className="space-y-3 mb-6">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-[color:var(--color-brand-text)]">
                    <Icon name="check" size={14} className="text-[color:var(--color-brand-secondary)] mt-1 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact#quote" className="btn-primary w-full justify-center text-sm">
                Get Free Estimate
                <Icon name="arrow-right" size={16} />
              </a>
              <a href="tel:+12244566607" className="btn-secondary w-full justify-center text-sm mt-2">
                <Icon name="phone" size={14} />
                (224) 456-6607
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
