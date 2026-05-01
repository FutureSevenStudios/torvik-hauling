import Image from "next/image"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import type { PhotoKey } from "@/types/site"

type Cell = { key: PhotoKey; classes: string }

// Mobile order intentionally alternates between trailer-focused and
// non-trailer / different-angle photos so similar-looking shots don't stack.
const cells: Cell[] = [
  { key: "hero",             classes: "md:col-span-8 aspect-[16/9]" },
  { key: "cleanout",         classes: "md:col-span-4 aspect-square" },
  { key: "trailer",          classes: "md:col-span-6 aspect-[4/3]" },
  { key: "action",           classes: "md:col-span-6 aspect-[4/3]" },
  { key: "owner",            classes: "md:col-span-4 aspect-[4/5]" },
  { key: "truckTrailer",     classes: "md:col-span-4 aspect-[4/5]" },
  { key: "eco",              classes: "md:col-span-4 aspect-[4/5]" },
  { key: "trailerDriveway",  classes: "md:col-span-12 aspect-[16/6]" },
]

export function GalleryGrid() {
  return (
    <section className="section-rhythm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {cells.map(({ key, classes }) => {
            const p = site.photos[key]
            return (
              <figure
                key={key}
                className={`relative rounded-2xl overflow-hidden border border-[color:var(--color-brand-border)] ${classes}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </figure>
            )
          })}
        </div>
        <p className="mt-8 text-center text-sm text-[color:var(--color-brand-muted)]">
          More jobs coming soon. Want to see what a Torvik job at your place would look like?{" "}
          <a href="/contact#quote" className="text-[color:var(--color-brand-primary)] underline font-medium">
            Get a free estimate.
          </a>
        </p>
      </Container>
    </section>
  )
}
