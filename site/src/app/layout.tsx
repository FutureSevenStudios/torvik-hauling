import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { site } from "@/lib/content"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getLocalBusinessSchema } from "@/lib/schema"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || site.seo.siteUrl

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.seo.defaultTitle,
    template: `%s | ${site.identity.businessName}`,
  },
  description: site.seo.defaultDescription,
  applicationName: site.identity.businessName,
  keywords: [
    "junk removal",
    "light demolition",
    "property cleanouts",
    "Lake Zurich",
    "Hawthorn Woods",
    "NW Chicago",
    "Lake County IL",
  ],
  authors: [{ name: site.identity.businessName }],
  creator: site.identity.businessName,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.identity.businessName,
    title: site.seo.defaultTitle,
    description: site.seo.defaultDescription,
    images: [
      {
        url: "/photos/hero.jpeg",
        width: 1200,
        height: 630,
        alt: `${site.identity.businessName} — ${site.identity.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.defaultTitle,
    description: site.seo.defaultDescription,
  },
  robots: { index: true, follow: true },
  // NOTE: do not set `alternates.canonical` here. App Router metadata inherits
  // down the tree, so a canonical on the root layout is emitted verbatim on
  // every page that doesn't override it — which told Google all 12 inner pages
  // were duplicates of the homepage. Each page declares its own canonical.
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2E5B",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = getLocalBusinessSchema()
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
