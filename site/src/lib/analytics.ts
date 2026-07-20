/**
 * Client-side analytics helpers.
 *
 * These no-op safely when GA has not loaded (env var unset, ad blocker, SSR),
 * so callers never need to guard. Once NEXT_PUBLIC_GA_ID is set, window.gtag
 * exists and the events flow to GA4.
 */

type GtagArgs = [string, string, Record<string, unknown>?]

declare global {
  interface Window {
    gtag?: (...args: GtagArgs) => void
  }
}

/**
 * Fire a lead conversion when someone submits a quote form.
 * `source` distinguishes the hero quick-quote from the full contact form.
 */
export function trackLead(source: "hero" | "contact") {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", "generate_lead", {
    form_source: source,
    // A value lets GA4 and Google Ads treat this as a conversion worth counting.
    // Placeholder that matches the typical starting job; adjust if desired.
    value: 125,
    currency: "USD",
  })
}
