import siteData from "@/content/site.json"

export type SiteData = typeof siteData
export type Service = SiteData["services"][number]
export type SecondaryService = SiteData["secondaryServices"][number]
export type Testimonial = SiteData["testimonials"][number]
export type FAQ = SiteData["faqs"][number]
export type ProcessStep = SiteData["processSteps"][number]
export type TrustBarItem = SiteData["trustBar"][number]
export type Photo = SiteData["photos"][keyof SiteData["photos"]]
export type PhotoKey = keyof SiteData["photos"]
