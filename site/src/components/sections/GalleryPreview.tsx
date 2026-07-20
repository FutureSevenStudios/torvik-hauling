import Image from "next/image"
import Link from "next/link"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import type { PhotoKey } from "@/types/site"

export function GalleryPreview() {
  const order: PhotoKey[] = ["hero", "action", "trailer", "eco"]
  return (
    <section className="section-rhythm bg-[color:var(--color-brand-surface)] border-y border-[color:var(--color-brand-border)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">On the job</p>
            <h2 className="font-display text-3xl md:text-[44px] font-bold text-[color:var(--color-brand-text)] leading-tight">
              The work, not the promises.
            </h2>
            <p className="mt-4 text-lg text-[color:var(--color-brand-muted)] leading-relaxed">
              Real photos of real Torvik jobs, from the suburbs to the disposal facility.
            </p>
          </div>
          <Link href="/gallery" className="btn-ghost shrink-0">
            See the full gallery
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {order.map((key, i) => {
            const p = site.photos[key]
            return (
              <div
                key={key}
                className={`relative rounded-xl overflow-hidden border border-[color:var(--color-brand-border)] ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square lg:aspect-[4/5]" : "aspect-square"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                  className="object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
