"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { site } from "@/lib/content"
import { Icon } from "@/components/ui/Icon"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-[color:var(--color-brand-bg)]/95 backdrop-blur border-b border-[color:var(--color-brand-border)]" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.identity.businessName} — home`}>
          <Image
            src={site.brand.logo.primary}
            alt={`${site.identity.businessName} logo`}
            width={180}
            height={56}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[color:var(--color-brand-text)] hover:text-[color:var(--color-brand-secondary)] font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={site.identity.phoneHref} className="btn-ghost text-sm md:text-base">
            <Icon name="phone" size={16} />
            {site.identity.phone}
          </a>
          <Link href="/contact#quote" className="btn-primary text-sm">
            Get Free Estimate
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-[color:var(--color-brand-primary)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "x" : "menu"} size={28} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-[color:var(--color-brand-bg)] z-40 overflow-y-auto">
          <div className="container-page py-8 flex flex-col gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 text-xl font-display text-[color:var(--color-brand-text)] border-b border-[color:var(--color-brand-border)]"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-8">
              <a href={site.identity.phoneHref} className="btn-secondary justify-center">
                <Icon name="phone" size={16} />
                {site.identity.phone}
              </a>
              <Link href="/contact#quote" onClick={() => setOpen(false)} className="btn-primary justify-center">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
