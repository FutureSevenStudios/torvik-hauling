import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon, type IconName } from "@/components/ui/Icon"

export function HowItWorks({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "py-16 md:py-20" : "section-rhythm"}>
      <Container>
        {!compact && (
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="font-display text-3xl md:text-[44px] font-bold text-[color:var(--color-brand-text)] leading-tight">
              Simple, fast, swept clean.
            </h2>
          </div>
        )}
        {compact && (
          <h2 className="font-display text-2xl md:text-3xl text-[color:var(--color-brand-text)] mb-8">
            How it works
          </h2>
        )}

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {site.processSteps.map((step, i) => (
            <li
              key={step.step}
              className="relative bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-6 md:p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-4xl font-bold text-[color:var(--color-brand-accent)] leading-none">
                  0{step.step}
                </span>
                <span className="w-11 h-11 rounded-xl bg-[color:var(--color-brand-primary)] text-white flex items-center justify-center">
                  <Icon name={step.icon as IconName} size={20} />
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-[color:var(--color-brand-text)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[color:var(--color-brand-muted)] leading-relaxed">
                {step.description}
              </p>
              {i < site.processSteps.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[color:var(--color-brand-border)]" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
