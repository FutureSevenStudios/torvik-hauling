import { Container } from "@/components/ui/Container"
import { BeforeAfter } from "@/components/ui/BeforeAfter"

type Pair = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  caption: string
  aspect?: string
}

const pairs: Pair[] = [
  {
    beforeSrc: "/photos/before-after/ba1-before.jpeg",
    afterSrc: "/photos/before-after/ba1-after.jpeg",
    beforeAlt: "Old toilet and construction debris piled against the side of a house",
    afterAlt: "The same side-yard, cleared and clean after Torvik Hauling's cleanout",
    caption: "Side-Yard Cleanout, Toilet & Debris Removed",
    aspect: "aspect-[3/4]",
  },
  {
    beforeSrc: "/photos/before-after/ba2-before.jpeg",
    afterSrc: "/photos/before-after/ba2-after.jpeg",
    beforeAlt: "Pile of household junk, cooler, boxes, fan, and bagged debris stacked against a brick wall",
    afterAlt: "Same brick exterior, fully cleared after the cleanout",
    caption: "Garage Cleanout, Furniture, Boxes & Yard Debris",
    aspect: "aspect-[3/4]",
  },
  {
    beforeSrc: "/photos/before-after/ba3-before.jpeg",
    afterSrc: "/photos/before-after/ba3-after.jpeg",
    beforeAlt: "Construction tile boxes, packaging, and renovation debris stacked in a small drywalled room",
    afterAlt: "Same room emptied, swept, and ready for the next phase",
    caption: "Renovation Cleanout, Tile, Boxes & Construction Materials",
    aspect: "aspect-[3/4]",
  },
  {
    beforeSrc: "/photos/before-after/ba5-before.jpeg",
    afterSrc: "/photos/before-after/ba5-after.jpeg",
    beforeAlt: "Basement full of bookshelves, boxes, and household clutter",
    afterAlt: "Same basement after Torvik cleared every shelf and bin",
    caption: "Estate Cleanout, Books, Shelving & Storage Cleared",
    aspect: "aspect-[3/4]",
  },
  {
    beforeSrc: "/photos/before-after/ba4-before.jpeg",
    afterSrc: "/photos/before-after/ba4-after.jpeg",
    beforeAlt: "Cluttered basement living area with sofa, totes, and household items",
    afterAlt: "Same basement, fully cleared and swept clean",
    caption: "Basement Cleanout, Living Area Reclaimed",
    aspect: "aspect-[3/4]",
  },
]

export function BeforeAfterSection({
  eyebrow = "Real results",
  headline = "Before & After",
  subheadline = "Drag the slider to see the transformation. Every job leaves the space completely clear.",
  background = "default",
}: {
  eyebrow?: string
  headline?: string
  subheadline?: string
  background?: "default" | "surface"
}) {
  const sectionBg =
    background === "surface"
      ? "bg-[color:var(--color-brand-surface)] border-y border-[color:var(--color-brand-border)]"
      : ""

  return (
    <section className={`section-rhythm ${sectionBg}`}>
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="font-display text-3xl md:text-[44px] font-bold text-[color:var(--color-brand-text)] leading-tight">
            {headline}
          </h2>
          <p className="mt-4 text-lg text-[color:var(--color-brand-muted)] leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pairs.map((p) => (
            <BeforeAfter key={p.beforeSrc} {...p} />
          ))}
        </div>
      </Container>
    </section>
  )
}
