import Image from "next/image"
import Link from "next/link"
import { site } from "@/lib/content"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import type { Service } from "@/types/site"

export function ServiceHero({ service }: { service: Service }) {
  const photo = site.photos[service.heroImage as keyof typeof site.photos] ?? site.photos.hero

  return (
    <section className="relative pt-12 md:pt-20 pb-12 md:pb-20 paper-texture border-b border-[color:var(--color-brand-border)]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-brand-muted)] hover:text-[color:var(--color-brand-primary)] mb-4">
              <Icon name="arrow-right" size={14} className="rotate-180" />
              All services
            </Link>
            <p className="eyebrow mb-4">Serving Lake Zurich &amp; NW Chicago</p>
            <h1 className="font-display text-[clamp(36px,6vw,72px)] font-bold text-[color:var(--color-brand-text)] leading-tight mb-5">
              {service.name} <span className="text-[color:var(--color-brand-primary)]">in Lake Zurich &amp; Northwest Chicago</span>
            </h1>
            <p className="text-lg md:text-xl text-[color:var(--color-brand-muted)] leading-relaxed mb-7 max-w-2xl">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#quote" className="btn-primary">
                Get Free Estimate
                <Icon name="arrow-right" size={18} />
              </Link>
              <a href={site.identity.phoneHref} className="btn-secondary">
                <Icon name="phone" size={18} />
                {site.identity.phone}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[color:var(--color-brand-border)] shadow-[var(--shadow-lifted)]">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
