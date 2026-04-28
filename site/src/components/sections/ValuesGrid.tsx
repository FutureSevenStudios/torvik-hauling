import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"

export function ValuesGrid() {
  return (
    <section className="section-rhythm bg-[color:var(--color-brand-primary)]/3">
      <Container>
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="eyebrow mb-3">How we work</p>
          <h2 className="font-display text-3xl md:text-[44px] font-bold text-[color:var(--color-brand-text)] leading-tight">
            The Torvik way.
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 gap-5">
          {site.values.map((v, i) => (
            <li
              key={v.title}
              className="bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-6 md:p-8"
            >
              <span className="font-display text-[color:var(--color-brand-accent)] text-3xl font-bold">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-[color:var(--color-brand-text)] mt-3 mb-2">
                {v.title}
              </h3>
              <p className="text-[color:var(--color-brand-muted)] leading-relaxed">{v.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
