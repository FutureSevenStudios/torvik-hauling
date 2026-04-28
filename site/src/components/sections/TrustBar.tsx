import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon, type IconName } from "@/components/ui/Icon"

export function TrustBar() {
  return (
    <section className="bg-[color:var(--color-brand-surface)] border-y border-[color:var(--color-brand-border)]">
      <Container>
        <ul className="flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-4 py-5">
          {site.trustBar.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 text-sm md:text-base font-medium text-[color:var(--color-brand-text)]"
            >
              <span className="w-8 h-8 rounded-full bg-[color:var(--color-brand-primary)]/8 flex items-center justify-center text-[color:var(--color-brand-primary)]">
                <Icon name={item.icon as IconName} size={16} />
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
