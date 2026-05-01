import Link from "next/link"
import Image from "next/image"
import { site } from "@/lib/content"
import { Icon } from "@/components/ui/Icon"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[color:var(--color-brand-primary)] text-white">
      <div className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <Image
              src={site.brand.logo.onDark}
              alt={`${site.identity.businessName} logo`}
              width={200}
              height={64}
              className="h-14 w-auto mb-5"
            />
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              {site.identity.tagline}
              <br />
              Licensed &amp; insured.
              <br />
              Serving NW Suburbs of Chicago.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {site.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/80 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={site.identity.phoneHref} className="flex items-center gap-2 text-white/80 hover:text-white">
                  <Icon name="phone" size={14} />
                  {site.identity.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.identity.email}`} className="flex items-center gap-2 text-white/80 hover:text-white break-all">
                  <Icon name="mail" size={14} />
                  {site.identity.email}
                </a>
              </li>
              <li className="text-white/80 flex items-start gap-2">
                <Icon name="map-pin" size={14} className="mt-1 shrink-0" />
                <span>
                  {site.identity.address.formatted}
                  <br />
                  <span className="text-white/60 text-xs">Service-area only — no storefront</span>
                </span>
              </li>
              <li>
                <Link href="/contact#quote" className="inline-flex items-center gap-1 text-[color:var(--color-brand-accent)] hover:text-white font-semibold mt-2">
                  Get a free estimate
                  <Icon name="arrow-right" size={14} />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Follow</h3>
            {/* TODO: replace social URLs with canonical (non-share-link) URLs before publish.
                Current values are share-links with tracking params from spec.identity.social. */}
            <div className="flex gap-3 mb-6">
              <a href={site.identity.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon name="facebook" size={18} />
              </a>
              <a href={site.identity.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon name="instagram" size={18} />
              </a>
              <a href={site.identity.social.google} target="_blank" rel="noopener noreferrer" aria-label="Google Reviews" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon name="google" size={18} />
              </a>
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/80 hover:text-white">About</Link></li>
              <li><Link href="/service-areas" className="text-white/80 hover:text-white">Service Areas</Link></li>
              <li><Link href="/gallery" className="text-white/80 hover:text-white">Gallery</Link></li>
              <li><Link href="/privacy" className="text-white/80 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-white/60 text-xs">
          <p>© {year} {site.identity.businessName}. All rights reserved.</p>
          <p>
            Serving Lake Zurich, Hawthorn Woods, Barrington, Libertyville, Palatine &amp; the NW Chicago suburbs.
          </p>
        </div>
      </div>
    </footer>
  )
}
