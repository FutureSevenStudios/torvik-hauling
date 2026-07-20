import Image from "next/image"
import Link from "next/link"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import { HeroQuoteForm } from "@/components/forms/HeroQuoteForm"

export function Hero() {
  const ownerPhoto = site.photos.owner
  return (
    <section className="relative overflow-hidden pt-6 md:pt-10 pb-16 md:pb-20 paper-texture">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: photo on top, copy below */}
          <div className="lg:col-span-7">
            <figure className="relative">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-[color:var(--color-brand-border)] shadow-[var(--shadow-lifted)]">
                <Image
                  src={ownerPhoto.src}
                  alt={ownerPhoto.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand-primary)]/25 via-transparent to-transparent" />

                {/* Review badge, top right */}
                <div className="absolute top-4 right-4 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-[var(--shadow-lifted)]">
                  <Icon name="star" size={16} className="text-[color:var(--color-brand-primary)]" />
                  <span className="text-sm font-semibold text-[color:var(--color-brand-text)]">
                    5.0 &middot; 47 Google reviews
                  </span>
                </div>

                {/* Trust badge, bottom left */}
                <figcaption className="absolute bottom-4 left-4 right-4 sm:right-auto flex items-center gap-2 rounded-xl bg-white/95 px-4 py-3 shadow-[var(--shadow-lifted)]">
                  <span className="w-9 h-9 rounded-full bg-[color:var(--color-brand-primary)]/10 text-[color:var(--color-brand-primary)] flex items-center justify-center shrink-0">
                    <Icon name="shield" size={16} />
                  </span>
                  <span className="text-sm leading-tight text-[color:var(--color-brand-text)]">
                    <span className="block font-semibold">Licensed &amp; insured</span>
                    <span className="text-[color:var(--color-brand-muted)]">
                      Family owned and operated.
                    </span>
                  </span>
                </figcaption>
              </div>
            </figure>

            <div className="mt-8">
              <p className="eyebrow mb-4">Serving Lake County &amp; Northwest Cook County</p>

              <h1 className="font-display text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.04] tracking-tight text-[color:var(--color-brand-text)] mb-5">
                Junk removal and cleanouts,
                <span className="text-[color:var(--color-brand-primary)]"> done right.</span>
              </h1>

              <p className="text-lg text-[color:var(--color-brand-muted)] leading-relaxed max-w-2xl mb-6">
                Family-owned junk removal, property cleanouts, and light demolition.
                From a single couch to a full estate cleanout, we handle the whole
                job, including the heavy and awkward pieces other crews leave behind.
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[color:var(--color-brand-muted)]">
                <span className="inline-flex items-center gap-2">
                  <Icon name="check" size={14} className="text-[color:var(--color-brand-secondary)]" />
                  Answers in 1 to 2 hours
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="check" size={14} className="text-[color:var(--color-brand-secondary)]" />
                  Free estimates from $125
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="check" size={14} className="text-[color:var(--color-brand-secondary)]" />
                  Open 24/7
                </span>
              </div>
            </div>
          </div>

          {/* Right: inquiry form */}
          <div className="lg:col-span-5">
            <div
              id="quote"
              className="lg:sticky lg:top-24 bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-6 md:p-7 shadow-[var(--shadow-lifted)]"
            >
              <div className="mb-5">
                <h2 className="font-display text-2xl text-[color:var(--color-brand-text)] mb-1">
                  Get a free estimate
                </h2>
                <p className="text-sm text-[color:var(--color-brand-muted)]">
                  Tell us about the job. We answer in 1 to 2 hours, any time.
                </p>
              </div>
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
