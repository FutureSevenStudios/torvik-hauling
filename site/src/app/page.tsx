import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { GalleryPreview } from "@/components/sections/GalleryPreview"
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { FeatureSplit } from "@/components/sections/FeatureSplit"
import { Testimonials } from "@/components/sections/Testimonials"
import { ServiceAreasPreview } from "@/components/sections/ServiceAreasPreview"
import { FAQ } from "@/components/sections/FAQ"
import { CTABand } from "@/components/sections/CTABand"
import { site } from "@/lib/content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Social proof sits immediately after the hook, before any selling. */}
      <Testimonials />
      <BeforeAfterSection background="surface" />

      <ServicesGrid
        eyebrow="What we do"
        headline="Six ways we get your space back."
        subheadline="One couch or a whole estate. One team, one call, one price agreed before we load anything."
      />

      <FeatureSplit
        eyebrow="Who we work with"
        headline="Homeowners, landlords, and the people settling estates."
        body="We work across Lake County and Northwest Cook County for people who need something gone and do not want to rent a dumpster, borrow a truck, or spend a Saturday on it. That means homeowners clearing a garage, landlords turning a unit between tenants, realtors getting a listing photo-ready, and executors settling a parent's house. If your village hauler already takes it for free, we will tell you to use them."
        imageKey="owner"
        imageSide="left"
        bullets={[
          "Homeowners clearing garages, basements, and yards",
          "Landlords and property managers on turnover deadlines",
          "Realtors and executors working to a closing date",
        ]}
      />

      <HowItWorks />

      <FeatureSplit
        eyebrow="Eco-friendly disposal"
        headline="Less landfill. More donation and recycling."
        body="Before anything heads to disposal, we sort for donation and recycling. Usable furniture and household goods go to local donation centers. Scrap metal and e-waste are routed to recyclers. What cannot be saved goes to a licensed disposal facility. Nothing goes to a curb, a ditch, or a vacant lot."
        imageKey="eco"
        imageSide="right"
        bullets={[
          "Donation routing for usable furniture and household goods",
          "Scrap metal and e-waste to certified recyclers",
          "Licensed disposal facility for the rest, never dumped",
        ]}
      />

      <GalleryPreview />
      <ServiceAreasPreview />
      <FAQ items={site.faqs} />
      <CTABand imageKey="trailer" />
    </>
  )
}
