import Image from "next/image"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import type { PhotoKey } from "@/types/site"

export function FeatureSplit({
  eyebrow,
  headline,
  body,
  imageKey,
  imageSide = "right",
  bullets,
}: {
  eyebrow?: string
  headline: string
  body: string
  imageKey: PhotoKey
  imageSide?: "left" | "right"
  bullets?: string[]
}) {
  const photo = site.photos[imageKey]
  const leftFirst = imageSide === "left"

  return (
    <section className="section-rhythm">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className={leftFirst ? "lg:order-2" : ""}>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <h2 className="font-display text-3xl md:text-[44px] font-bold text-[color:var(--color-brand-text)] leading-tight mb-5">
              {headline}
            </h2>
            <p className="text-lg text-[color:var(--color-brand-muted)] leading-relaxed whitespace-pre-line">
              {body}
            </p>
            {bullets && (
              <ul className="mt-6 space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[color:var(--color-brand-accent)]/20 flex items-center justify-center text-[color:var(--color-brand-primary)] mt-0.5 shrink-0">
                      <Icon name="check" size={12} />
                    </span>
                    <span className="text-[color:var(--color-brand-text)]">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={leftFirst ? "lg:order-1" : ""}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[color:var(--color-brand-border)] shadow-[var(--shadow-lifted)]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
