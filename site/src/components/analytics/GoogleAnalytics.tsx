import Script from "next/script"

/**
 * Google Analytics 4.
 *
 * Renders nothing until NEXT_PUBLIC_GA_ID is set (a G-XXXXXXXXXX measurement
 * ID), so builds and previews without it stay completely clean. Set the var in
 * Vercel (Production) and redeploy to switch tracking on. The ID is public by
 * design — it ships in the page HTML — so it is safe as a plain env var.
 *
 * Lead conversions are fired from the quote forms via trackLead() in
 * lib/analytics.ts.
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}
