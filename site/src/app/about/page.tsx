import type { Metadata } from "next"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { TextBlock } from "@/components/sections/TextBlock"
import { ValuesGrid } from "@/components/sections/ValuesGrid"
import { TrustBar } from "@/components/sections/TrustBar"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTABand } from "@/components/sections/CTABand"
import { site } from "@/lib/content"

export const metadata: Metadata = {
  title: "About — Family-Owned Junk Removal in Lake Zurich",
  description:
    "Torvik Hauling is a family-owned junk removal & demolition company serving NW Chicago suburbs. Our story, our approach, and why we do this work.",
  alternates: { canonical: "/about" },
}

// TODO: confirm owner name with client (likely "Matt" — confirm with Jaron before
// adding "Meet [Name]" or first-person attribution on this page). Until confirmed,
// keep About copy first-person without naming.
export default function AboutPage() {
  return (
    <>
      <HeroCompact
        eyebrow="Our story"
        headline="Family Owned. Community Focused."
        subheadline="We're not a franchise. We're a local family-owned hauling company working one neighborhood at a time."
        imageKey="owner"
      />
      <TextBlock
        headline="Why we do this work"
        body={site.aboutStory}
        imageKey="action"
        imageSide="right"
      />
      <ValuesGrid />
      <TrustBar />
      <Testimonials
        eyebrow="What neighbors say"
        headline="5-star service, 3 real stories."
      />
      <CTABand headline="Let's get your space back." imageKey="trailer" />
    </>
  )
}
