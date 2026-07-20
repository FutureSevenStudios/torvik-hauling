import type { Metadata } from "next"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { GalleryGrid } from "@/components/sections/GalleryGrid"
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTABand } from "@/components/sections/CTABand"

export const metadata: Metadata = {
  title: "Gallery | Junk Removal & Demo Jobs",
  description:
    "Photos of Torvik Hauling's work across the Northwest Chicago suburbs, junk removal, cleanouts, demolition, and eco-friendly disposal.",
  alternates: { canonical: "/gallery" },
}

export default function GalleryPage() {
  return (
    <>
      <HeroCompact
        eyebrow="The work"
        headline="Real jobs, real trucks, real results."
        subheadline="A look at what a Torvik Hauling job actually looks like, from the curb to the disposal facility."
      />
      <GalleryGrid />
      <BeforeAfterSection background="surface" />
      <Testimonials showGoogleLink />
      <CTABand headline="Could be your space next." imageKey="action" />
    </>
  )
}
