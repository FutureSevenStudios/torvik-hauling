import type { Metadata } from "next"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { TrustBar } from "@/components/sections/TrustBar"
import { TagCloud } from "@/components/sections/TagCloud"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTABand } from "@/components/sections/CTABand"

export const metadata: Metadata = {
  title: "Services — Junk Removal, Cleanouts & Light Demolition",
  description:
    "Junk removal, property cleanouts, light demolition, garage/basement/attic cleanouts, yard cleanup, and construction debris hauling across NW Chicago suburbs.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <>
      <HeroCompact
        eyebrow="What we do"
        headline="Our Services"
        subheadline="Six core services under one family-owned roof. From a single-item pickup to a full shed demo, we handle the jobs others split between three vendors."
        imageKey="trailer"
      />
      <TrustBar />
      <ServicesGrid showFeatures showCTA={false} />
      <TagCloud />
      <Testimonials />
      <CTABand headline="Not sure which service fits?" subheadline="Call or text and we'll sort it out in 5 minutes." imageKey="action" />
    </>
  )
}
