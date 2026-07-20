import Link from "next/link"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import type { Testimonial } from "@/types/site"

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[color:var(--color-brand-accent)]">
      {Array.from({ length: rating }).map((_, i) => (
        <Icon key={i} name="star" size={16} />
      ))}
    </div>
  )
}

export function Testimonials({
  eyebrow = "What neighbors are saying",
  headline = "47 reviews. Every one of them five stars.",
  items,
  showGoogleLink = true,
}: {
  eyebrow?: string
  headline?: string
  items?: Testimonial[]
  showGoogleLink?: boolean
}) {
  const list = items ?? site.testimonials
  if (list.length === 0) return null

  return (
    <section className="section-rhythm bg-[color:var(--color-brand-primary)]/3">
      <Container>
        <div className="max-w-2xl mb-12 md:mb-14">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 className="font-display text-3xl md:text-[44px] font-bold text-[color:var(--color-brand-text)] leading-tight">
            {headline}
          </h2>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((t, i) => (
            <li
              key={i}
              className="bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-6 md:p-7 flex flex-col"
            >
              <Stars rating={t.rating} />
              <blockquote className="mt-4 text-[color:var(--color-brand-text)] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-5 pt-4 border-t border-[color:var(--color-brand-border)] text-sm">
                <p className="font-semibold text-[color:var(--color-brand-text)]">{t.author}</p>
                <p className="text-[color:var(--color-brand-muted)] text-xs mt-0.5">via {t.source}</p>
              </footer>
            </li>
          ))}
        </ul>

        {showGoogleLink && (
          <div className="mt-10 text-center">
            <a
              href={site.identity.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Read more Google reviews
              <Icon name="arrow-right" size={16} />
            </a>
          </div>
        )}
      </Container>
    </section>
  )
}
