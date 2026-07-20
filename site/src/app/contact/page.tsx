import type { Metadata } from "next"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { ContactSplit } from "@/components/sections/ContactSplit"
import { TrustBar } from "@/components/sections/TrustBar"

export const metadata: Metadata = {
  title: "Contact — Get a Free Estimate",
  description:
    "Get a free estimate for junk removal, cleanouts, or light demolition. Call or text (224) 456-6607. 1–2 hour response across the NW Chicago suburbs.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <HeroCompact
        eyebrow="Free estimates"
        headline="Get a Free Estimate"
        subheadline="Tell us about the job. We'll respond in 1–2 hours with a firm quote — no hidden fees, typically starting around $125."
      />
      <ContactSplit />
      <TrustBar />
    </>
  )
}
