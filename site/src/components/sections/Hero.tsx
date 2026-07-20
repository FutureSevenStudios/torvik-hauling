import Image from "next/image"
import Link from "next/link"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import { HeroQuoteForm } from "@/components/forms/HeroQuoteForm"

export function Hero() {
  const heroPhoto = site.photos.hero
  return (
    <section className="relative overflow-hidden pt-8 md:pt-16 pb-20 md:pb-28 paper-texture">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Lake Zurich &amp; Northwest Chicago Suburbs</p>

            {/* Proof first, per the copy rules: a real result before any claim. */}
            <p className="flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand-primary)] mb-4">
              <Icon name="star" size={16} />
              5.0 from 47 Google reviews
            </p>

            <h1 className="font-display text-[clamp(42px,7vw,83px)] font-bold leading-[1.02] tracking-tight text-[color:var(--color-brand-text)] mb-6">
              We take the jobs
              <br />
              <span className="text-[color:var(--color-brand-primary)]">others turn down.</span>
            </h1>
            <p className="text-lg md:text-xl text-[color:var(--color-brand-muted)] leading-relaxed max-w-2xl mb-6">
              Family-owned junk removal, cleanouts, and light demolition across Lake
              County and Northwest Cook County.
            </p>
            <p className="text-lg text-[color:var(--color-brand-text)] leading-relaxed max-w-2xl mb-8">
              Send a photo of what needs to go. You get a firm price in 1 to 2 hours,
              and most jobs start around $125.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <Link href="#quote" className="btn-primary text-base">
                Get Free Estimate
                <Icon name="arrow-right" size={18} />
              </Link>
              <a href={site.identity.phoneHref} className="btn-secondary text-base">
                <Icon name="phone" size={18} />
                {site.identity.phone}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[color:var(--color-brand-muted)]">
              <span className="inline-flex items-center gap-2">
                <Icon name="check" size={14} className="text-[color:var(--color-brand-secondary)]" />
                Answers in 1 to 2 hours
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" size={14} className="text-[color:var(--color-brand-secondary)]" />
                Licensed &amp; Insured
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" size={14} className="text-[color:var(--color-brand-secondary)]" />
                Family owned
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div id="quote" className="bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-6 md:p-7 shadow-[var(--shadow-lifted)]">
              <div className="mb-4">
                <h2 className="font-display text-2xl text-[color:var(--color-brand-text)] mb-1">Get a free estimate</h2>
                <p className="text-sm text-[color:var(--color-brand-muted)]">We answer in 1 to 2 hours, any time.</p>
              </div>
              <HeroQuoteForm />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] border border-[color:var(--color-brand-border)] shadow-[var(--shadow-lifted)]">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand-primary)]/25 via-transparent to-transparent" />
        </div>
      </Container>
    </section>
  )
}
