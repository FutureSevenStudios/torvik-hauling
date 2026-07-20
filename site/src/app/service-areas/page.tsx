import type { Metadata } from "next"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap"
import { CityCards } from "@/components/sections/CityCards"
import { CityList } from "@/components/sections/CityList"
import { Container } from "@/components/ui/Container"
import { CTABand } from "@/components/sections/CTABand"

export const metadata: Metadata = {
  title: "Service Areas — Lake County & NW Cook County",
  description:
    "Torvik Hauling serves 30+ Northwest Chicago suburbs including Lake Zurich, Hawthorn Woods, Barrington, Palatine, Libertyville, Arlington Heights and more.",
  alternates: { canonical: "/service-areas" },
}

export default function ServiceAreasPage() {
  return (
    <>
      <HeroCompact
        eyebrow="Where we work"
        headline="Serving Lake County & Northwest Cook County."
        subheadline="Based in Hawthorn Woods. 30+ communities covered across the Northwest Chicago suburbs."
      />
      <section className="py-16 md:py-20">
        <Container>
          <ServiceAreaMap />
        </Container>
      </section>
      <CityCards />
      <CityList />
      <CTABand
        headline="Near one of these? We're 1–2 hours away."
        subheadline="Free estimate, no pressure."
        imageKey="hero"
      />
    </>
  )
}
