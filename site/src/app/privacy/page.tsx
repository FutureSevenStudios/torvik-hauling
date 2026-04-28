import type { Metadata } from "next"
import { HeroCompact } from "@/components/sections/HeroCompact"
import { Container } from "@/components/ui/Container"
import { site } from "@/lib/content"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Torvik Hauling handles your information.",
}

export default function PrivacyPage() {
  return (
    <>
      <HeroCompact eyebrow="Legal" headline="Privacy Policy" />
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="max-w-3xl prose prose-lg space-y-6 text-[color:var(--color-brand-text)] leading-relaxed">
            <p className="text-[color:var(--color-brand-muted)] text-sm">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>

            <h2 className="font-display text-2xl font-semibold">What we collect</h2>
            <p>
              When you submit a quote or contact form on this site, we collect the information you provide —
              typically your name, phone number, email (optional), city, service needed, and a description of
              the job. This information is sent to us by email and used only to respond to your request.
            </p>

            <h2 className="font-display text-2xl font-semibold">How we use it</h2>
            <p>
              We use your information to provide a quote, schedule service, and follow up on the job. We do
              not sell, rent, or share your information with third parties for marketing purposes. If you
              email or text us, we keep that correspondence in our phone or email records for normal business
              operations.
            </p>

            <h2 className="font-display text-2xl font-semibold">Analytics</h2>
            <p>
              We may use Google Analytics and similar tools to understand how visitors use this site. These
              tools collect anonymous usage data (pages viewed, time on site, general location) to help us
              improve the site. No personally identifiable information is collected via analytics.
            </p>

            <h2 className="font-display text-2xl font-semibold">Cookies</h2>
            <p>
              This site uses essential cookies to function properly and may use analytics cookies to measure
              site traffic. You can disable cookies in your browser settings.
            </p>

            <h2 className="font-display text-2xl font-semibold">Your rights</h2>
            <p>
              You can request deletion of any personal information we hold about you at any time. Call{" "}
              <a href={site.identity.phoneHref} className="text-[color:var(--color-brand-primary)] underline">
                {site.identity.phone}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${site.identity.email}`} className="text-[color:var(--color-brand-primary)] underline">
                {site.identity.email}
              </a>.
            </p>

            <h2 className="font-display text-2xl font-semibold">Contact</h2>
            <p>
              Questions about this policy? Reach out at{" "}
              <a href={site.identity.phoneHref} className="text-[color:var(--color-brand-primary)] underline">
                {site.identity.phone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${site.identity.email}`} className="text-[color:var(--color-brand-primary)] underline">
                {site.identity.email}
              </a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
