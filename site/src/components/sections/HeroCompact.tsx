import Image from "next/image"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import type { PhotoKey } from "@/types/site"

export function HeroCompact({
  eyebrow,
  headline,
  subheadline,
  imageKey,
}: {
  eyebrow?: string
  headline: string
  subheadline?: string
  imageKey?: PhotoKey
}) {
  const photo = imageKey ? site.photos[imageKey] : null

  return (
    <section className="relative pt-12 md:pt-20 pb-12 md:pb-16 paper-texture border-b border-[color:var(--color-brand-border)]">
      <Container>
        <div className={photo ? "grid lg:grid-cols-12 gap-10 items-center" : ""}>
          <div className={photo ? "lg:col-span-7" : "max-w-3xl"}>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="font-display text-[clamp(36px,5.5vw,64px)] font-bold text-[color:var(--color-brand-text)] leading-tight mb-4">
              {headline}
            </h1>
            {subheadline && (
              <p className="text-lg md:text-xl text-[color:var(--color-brand-muted)] leading-relaxed max-w-2xl">
                {subheadline}
              </p>
            )}
          </div>
          {photo && (
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[color:var(--color-brand-border)] shadow-[var(--shadow-lifted)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
