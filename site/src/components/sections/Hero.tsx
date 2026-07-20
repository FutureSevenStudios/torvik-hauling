import Image from "next/image"
import Link from "next/link"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import { HeroQuoteForm } from "@/components/forms/HeroQuoteForm"

export function Hero() {
  const ownerPhoto = site.photos.owner
  return (
    <section className="relative overflow-hidden pt-8 md:pt-14 pb-16 md:pb-24 paper-texture">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <p className="eyebrow mb-5">Lake Zurich &amp; Northwest Chicago Suburbs</p>

            {/* Proof first, per the copy rules: a real result before any claim. */}
            <p className="flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand-primary)] mb-4">
              <Icon name="star" size={16} />
              5.0 from 47 Google reviews
            </p>

            <h1 className="font-display text-[clamp(40px,6vw,72px)] font-bold leading-[1.03] tracking-tight text-[color:var(--color-brand-text)] mb-6">
              Junk removal and cleanouts,
              <span className="text-[color:var(--color-brand-primary)]"> done right.</span>
            </h1>

            <p className="text-lg md:text-xl text-[color:var(--color-brand-muted)] leading-relaxed max-w-2xl mb-5">
              Family-owned junk removal, property cleanouts, and light demolition
              across Lake County and Northwest Cook County.
            </p>
            <p className="text-lg text-[color:var(--color-brand-text)] leading-relaxed max-w-2xl mb-8">
              From a single couch to a full estate cleanout, we handle the whole
              job, including the heavy and awkward pieces other crews leave behind.
              Send a photo and get a firm price in 1 to 2 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <Link href="#quote" className="btn-primary text-base">
                Get a Free Estimate
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

          {/* Owner photo, on the first fold */}
          <div className="lg:col-span-6">
            <figure className="relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-[color:var(--color-brand-border)] shadow-[var(--shadow-lifted)]">
                <Image
                  src={ownerPhoto.src}
                  alt={ownerPhoto.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand-primary)]/30 via-transparent to-transparent" />
              </div>
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-xl bg-white/95 px-4 py-3 shadow-[var(--shadow-lifted)]">
                <span className="w-9 h-9 rounded-full bg-[color:var(--color-brand-primary)]/10 text-[color:var(--color-brand-primary)] flex items-center justify-center shrink-0">
                  <Icon name="home" size={16} />
                </span>
                <span className="text-sm leading-tight text-[color:var(--color-brand-text)]">
                  <span className="block font-semibold">Family owned and operated</span>
                  <span className="text-[color:var(--color-brand-muted)]">
                    You deal with the owner, not a call center.
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Quote form, directly below the fold and anchored to the hero CTA */}
        <div
          id="quote"
          className="mt-14 md:mt-20 mx-auto max-w-3xl bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-6 md:p-8 shadow-[var(--shadow-lifted)]"
        >
          <div className="mb-5 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-[color:var(--color-brand-text)] mb-1">
              Get a free estimate
            </h2>
            <p className="text-sm text-[color:var(--color-brand-muted)]">
              Tell us about the job. We answer in 1 to 2 hours, any time.
            </p>
          </div>
          <HeroQuoteForm />
        </div>
      </Container>
    </section>
  )
}
