import Image from "next/image"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import type { PhotoKey } from "@/types/site"

export function TextBlock({
  headline,
  body,
  imageKey,
  imageSide = "left",
}: {
  headline?: string
  body: string
  imageKey?: PhotoKey
  imageSide?: "left" | "right"
}) {
  const photo = imageKey ? site.photos[imageKey] : null

  return (
    <section className="section-rhythm">
      <Container>
        <div className={photo ? "grid lg:grid-cols-12 gap-10 lg:gap-16 items-center" : "max-w-3xl"}>
          {photo && imageSide === "left" && (
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[color:var(--color-brand-border)] shadow-[var(--shadow-lifted)]">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          )}
          <div className={photo ? "lg:col-span-7" : ""}>
            {headline && (
              <h2 className="font-display text-3xl md:text-[40px] font-bold text-[color:var(--color-brand-text)] leading-tight mb-6">
                {headline}
              </h2>
            )}
            <div className="prose-custom space-y-5 text-lg text-[color:var(--color-brand-text)] leading-relaxed whitespace-pre-line">
              {body}
            </div>
          </div>
          {photo && imageSide === "right" && (
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[color:var(--color-brand-border)] shadow-[var(--shadow-lifted)]">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
