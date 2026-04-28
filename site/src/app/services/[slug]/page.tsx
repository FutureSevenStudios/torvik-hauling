import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { site, getService, getTestimonialsForService } from "@/lib/content"
import { ServiceHero } from "@/components/sections/ServiceHero"
import { ServiceDetail } from "@/components/sections/ServiceDetail"
import { TrustBar } from "@/components/sections/TrustBar"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { FAQ } from "@/components/sections/FAQ"
import { Testimonials } from "@/components/sections/Testimonials"
import { CTABand } from "@/components/sections/CTABand"
import { getServiceSchema } from "@/lib/schema"

type RouteParams = { slug: string }

export async function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: `${service.name} in Lake Zurich & NW Chicago`,
    description: `${service.shortDescription} Licensed & insured, 1-2 hour response, free estimates.`,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<RouteParams>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const serviceTestimonials = getTestimonialsForService(slug, 2)
  const hasRelevant = serviceTestimonials.length > 0

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema(service)) }}
      />
      <ServiceHero service={service} />
      <TrustBar />
      <ServiceDetail service={service} />
      <HowItWorks compact />
      <FAQ items={service.faqs} headline={`Questions about ${service.name.toLowerCase()}`} />
      {hasRelevant && (
        <Testimonials
          items={serviceTestimonials}
          eyebrow="What customers say"
          headline={`Real ${service.name.toLowerCase()} reviews`}
          showGoogleLink={false}
        />
      )}
      <CTABand
        headline="Ready to clear it out?"
        subheadline="Free estimate in minutes, pickup as soon as today."
        imageKey="trailer"
      />
    </>
  )
}
