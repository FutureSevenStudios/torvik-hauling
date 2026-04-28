import Image from "next/image"
import Link from "next/link"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import type { PhotoKey } from "@/types/site"

export function CTABand({
  headline = "Ready to take back your space?",
  subheadline = "Free estimate in minutes, pickup as soon as today.",
  imageKey,
}: {
  headline?: string
  subheadline?: string
  imageKey?: PhotoKey
}) {
  const photo = imageKey ? site.photos[imageKey] : null

  return (
    <section className="relative py-16 md:py-24 bg-[color:var(--color-brand-primary)] text-white overflow-hidden">
      {photo && (
        <>
          <Image
            src={photo.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-brand-primary)] via-[color:var(--color-brand-primary)]/90 to-[color:var(--color-brand-primary)]/70" />
        </>
      )}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-[48px] font-bold leading-tight mb-4">
            {headline}
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/contact#quote"
              className="inline-flex items-center justify-center gap-2 bg-[color:var(--color-brand-accent)] text-[color:var(--color-brand-primary)] font-semibold px-6 py-4 rounded-lg hover:bg-white transition-colors"
            >
              Get Free Estimate
              <Icon name="arrow-right" size={18} />
            </Link>
            <a
              href={site.identity.phoneHref}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Icon name="phone" size={18} />
              {site.identity.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
