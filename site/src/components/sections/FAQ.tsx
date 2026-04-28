"use client"

import { useState } from "react"
import { Container } from "@/components/ui/Container"
import { Icon } from "@/components/ui/Icon"
import { getFAQSchema } from "@/lib/schema"
import type { FAQ as FAQItem } from "@/types/site"

export function FAQ({
  eyebrow = "Quick answers",
  headline = "Frequently asked",
  items,
  embedSchema = true,
}: {
  eyebrow?: string
  headline?: string
  items: FAQItem[]
  embedSchema?: boolean
}) {
  const [open, setOpen] = useState<number | null>(0)

  if (!items?.length) return null

  return (
    <section className="section-rhythm">
      {embedSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(items)) }}
        />
      )}
      <Container>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">{eyebrow}</p>
            <h2 className="font-display text-3xl md:text-[44px] font-bold text-[color:var(--color-brand-text)] leading-tight">
              {headline}
            </h2>
            <p className="mt-5 text-[color:var(--color-brand-muted)]">
              Still have a question? Give us a call — we pick up.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-[color:var(--color-brand-border)] border-y border-[color:var(--color-brand-border)]">
              {items.map((f, i) => {
                const isOpen = open === i
                return (
                  <li key={f.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-start gap-4 text-left py-5 md:py-6 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="flex-1 font-display text-lg md:text-xl font-semibold text-[color:var(--color-brand-text)]">
                        {f.q}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full bg-[color:var(--color-brand-primary)]/8 text-[color:var(--color-brand-primary)] flex items-center justify-center transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <Icon name="chevron-down" size={16} />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-6 pr-12 text-[color:var(--color-brand-muted)] leading-relaxed">
                        {f.a}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
