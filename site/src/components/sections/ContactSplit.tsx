import Image from "next/image"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import { QuoteForm } from "@/components/forms/QuoteForm"

export function ContactSplit() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div id="quote" className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <figure className="bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src={site.photos.daughter.src}
                  alt={site.photos.daughter.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-[color:var(--color-brand-muted)] leading-relaxed">
                <span className="block font-display text-base font-semibold text-[color:var(--color-brand-text)] mb-0.5">
                  Family owned. Community focused.
                </span>
                When you call Torvik Hauling, you're calling a real family in the NW Chicago suburbs, not a national chain.
              </figcaption>
            </figure>

            <div className="bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-[color:var(--color-brand-text)] mb-5">
                Other ways to reach us
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-lg bg-[color:var(--color-brand-primary)]/8 text-[color:var(--color-brand-primary)] flex items-center justify-center shrink-0">
                    <Icon name="phone" size={18} />
                  </span>
                  <div>
                    <div className="text-[color:var(--color-brand-muted)] text-xs uppercase tracking-wider font-semibold">Call or text</div>
                    <a href={site.identity.phoneHref} className="font-semibold text-[color:var(--color-brand-text)] text-base">
                      {site.identity.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-lg bg-[color:var(--color-brand-primary)]/8 text-[color:var(--color-brand-primary)] flex items-center justify-center shrink-0">
                    <Icon name="mail" size={18} />
                  </span>
                  <div>
                    <div className="text-[color:var(--color-brand-muted)] text-xs uppercase tracking-wider font-semibold">Email</div>
                    <a href={`mailto:${site.identity.email}`} className="font-semibold text-[color:var(--color-brand-text)] break-all">
                      {site.identity.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-lg bg-[color:var(--color-brand-primary)]/8 text-[color:var(--color-brand-primary)] flex items-center justify-center shrink-0">
                    <Icon name="clock" size={18} />
                  </span>
                  <div>
                    <div className="text-[color:var(--color-brand-muted)] text-xs uppercase tracking-wider font-semibold">Hours</div>
                    <div className="text-[color:var(--color-brand-text)]">Open 24 hours, 7 days a week</div>
                    <div className="text-[color:var(--color-brand-muted)] text-xs mt-0.5">Call or text any time. We answer in 1 to 2 hours.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-lg bg-[color:var(--color-brand-primary)]/8 text-[color:var(--color-brand-primary)] flex items-center justify-center shrink-0">
                    <Icon name="map-pin" size={18} />
                  </span>
                  <div>
                    <div className="text-[color:var(--color-brand-muted)] text-xs uppercase tracking-wider font-semibold">Service area</div>
                    <div className="text-[color:var(--color-brand-text)]">{site.identity.primaryRegion}</div>
                    <div className="text-[color:var(--color-brand-muted)] text-xs mt-0.5">Based in Hawthorn Woods, service-area only, no storefront</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-lg bg-[color:var(--color-brand-primary)]/8 text-[color:var(--color-brand-primary)] flex items-center justify-center shrink-0">
                    <Icon name="star" size={18} />
                  </span>
                  <div>
                    <div className="text-[color:var(--color-brand-muted)] text-xs uppercase tracking-wider font-semibold">Response time</div>
                    <div className="text-[color:var(--color-brand-text)]">1 to 2 hours, any time</div>
                  </div>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-[color:var(--color-brand-border)]">
                <a
                  href={site.identity.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-sm"
                >
                  <Icon name="google" size={16} />
                  Read our Google reviews
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
