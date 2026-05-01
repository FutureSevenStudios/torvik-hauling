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

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid
        eyebrow="What we do"
        headline="Six ways we get your space back."
        subheadline="From a single couch to a full estate cleanout to a shed demo — one team, one call."
      />
      <GalleryPreview />
      <BeforeAfterSection background="surface" />
      <HowItWorks />
      <FeatureSplit
        eyebrow="Eco-friendly disposal"
        headline="Less landfill. More donation and recycling."
        body="Before anything heads to disposal, we sort for donation and recycling. Usable furniture and household goods go to local donation centers. Scrap metal and e-waste are routed to recyclers. What can't be saved goes to a licensed disposal facility — never to a curb, a ditch, or a vacant lot."
        imageKey="eco"
        imageSide="right"
        bullets={[
          "Donation routing for usable furniture and household goods",
          "Scrap metal and e-waste to certified recyclers",
          "Licensed disposal facility for the rest — never dumped",
        ]}
      />
      <Testimonials />
      <ServiceAreasPreview />
      <FAQ items={site.faqs} />
      <CTABand imageKey="trailer" />
    </>
  )
}
