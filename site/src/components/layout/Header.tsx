"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { site } from "@/lib/content"
import { Icon } from "@/components/ui/Icon"

type NavChild = { href: string; label: string }
type NavItem = { href: string; label: string; children?: NavChild[] }

/**
 * Top-level nav is deliberately short. Adding the removal and cleanout hubs as
 * their own top-level items pushed the bar to seven links, which wrapped onto
 * two lines. Everything service-related now lives under one Services menu.
 */
const navLinks: NavItem[] = [
  {
    href: "/services",
    label: "Services",
    children: [
      ...site.services.map((s) => ({
        href: `/services/${s.slug}`,
        label: s.name,
      })),
      { href: "/removal", label: "What We Remove" },
      { href: "/cleanouts", label: "Cleanouts" },
    ],
  },
  { href: "/service-areas", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

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

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!openMenu) return
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null)
    }
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [openMenu])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[color:var(--color-brand-bg)]/95 backdrop-blur border-b border-[color:var(--color-brand-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label={`${site.identity.businessName}, home`}
        >
          <Image
            src={site.brand.logo.primary}
            alt={`${site.identity.businessName} logo`}
            width={180}
            height={56}
            priority
            className="h-[58px] w-auto lg:h-[64px] xl:h-[76px]"
          />
        </Link>

        <nav
          ref={navRef}
          className="hidden lg:flex items-center gap-5 xl:gap-7"
          aria-label="Main"
        >
          {navLinks.map((l) =>
            l.children ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(l.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu((v) => (v === l.label ? null : l.label))
                  }
                  aria-expanded={openMenu === l.label}
                  aria-haspopup="true"
                  className="flex items-center gap-1 whitespace-nowrap text-[15px] xl:text-base text-[color:var(--color-brand-text)] hover:text-[color:var(--color-brand-secondary)] font-medium transition-colors"
                >
                  {l.label}
                  <Icon
                    name="chevron-down"
                    size={14}
                    className={`transition-transform ${
                      openMenu === l.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Always rendered, toggled with CSS. Conditionally mounting
                    this would keep the service, removal, and cleanout links out
                    of the server-rendered HTML, so crawlers would never see
                    them and those hubs would be orphaned again. `invisible`
                    also removes them from the tab order while closed. */}
                <div
                  className={`absolute left-0 top-full pt-3 transition-opacity ${
                    openMenu === l.label
                      ? "visible opacity-100"
                      : "invisible opacity-0 pointer-events-none"
                  }`}
                >
                  <ul className="min-w-[260px] rounded-xl border border-[color:var(--color-brand-border)] bg-[color:var(--color-brand-surface)] p-2 shadow-[var(--shadow-lifted)]">
                      {l.children.map((c, i) => (
                        <li key={c.href}>
                          {/* Separator before the two hub links. */}
                          {i === l.children!.length - 2 && (
                            <div className="my-2 border-t border-[color:var(--color-brand-border)]" />
                          )}
                          <Link
                            href={c.href}
                            onClick={() => setOpenMenu(null)}
                            className="block rounded-lg px-3 py-2 text-sm text-[color:var(--color-brand-text)] hover:bg-[color:var(--color-brand-primary)]/6 hover:text-[color:var(--color-brand-primary)] transition-colors"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href={l.href}
                          onClick={() => setOpenMenu(null)}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-[color:var(--color-brand-secondary)] hover:bg-[color:var(--color-brand-primary)]/6"
                        >
                          All services
                        </Link>
                      </li>
                    </ul>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="whitespace-nowrap text-[15px] xl:text-base text-[color:var(--color-brand-text)] hover:text-[color:var(--color-brand-secondary)] font-medium transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={site.identity.phoneHref}
            className="btn-ghost text-sm whitespace-nowrap hidden xl:inline-flex"
          >
            <Icon name="phone" size={16} />
            {site.identity.phone}
          </a>
          <Link
            href="/contact#quote"
            className="btn-primary text-sm whitespace-nowrap"
          >
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
            {navLinks.map((l) =>
              l.children ? (
                <div
                  key={l.href}
                  className="border-b border-[color:var(--color-brand-border)]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSection((v) => (v === l.label ? null : l.label))
                    }
                    aria-expanded={mobileSection === l.label}
                    className="w-full flex items-center justify-between py-4 text-xl font-display text-[color:var(--color-brand-text)]"
                  >
                    {l.label}
                    <Icon
                      name="chevron-down"
                      size={20}
                      className={`transition-transform ${
                        mobileSection === l.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSection === l.label && (
                    <ul className="pb-3 pl-1 space-y-1">
                      {l.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-base text-[color:var(--color-brand-muted)]"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-base font-semibold text-[color:var(--color-brand-secondary)]"
                        >
                          All services
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-4 text-xl font-display text-[color:var(--color-brand-text)] border-b border-[color:var(--color-brand-border)]"
                >
                  {l.label}
                </Link>
              )
            )}

            <div className="flex flex-col gap-3 mt-8">
              <a
                href={site.identity.phoneHref}
                className="btn-secondary justify-center"
              >
                <Icon name="phone" size={16} />
                {site.identity.phone}
              </a>
              <Link
                href="/contact#quote"
                onClick={() => setOpen(false)}
                className="btn-primary justify-center"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
