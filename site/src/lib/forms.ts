import { z } from "zod"

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.union([z.string().email(), z.literal("")]).optional(),
  service: z.string().min(1, "Please select a service"),
  city: z.string().min(2, "Please tell us your city or area"),
  description: z.string().min(10, "Please describe the job briefly"),
  preferredDate: z.string().optional(),
  smsConsent: z.literal(true, { message: "You must agree to receive SMS messages to continue" }),
  website: z.string().optional(), // honeypot
})

export const heroQuoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  city: z.string().min(2, "Please tell us your city"),
  smsConsent: z.literal(true, { message: "You must agree to receive SMS messages to continue" }),
  website: z.string().optional(), // honeypot
})

export type QuoteInput = z.infer<typeof quoteSchema>
export type HeroQuoteInput = z.infer<typeof heroQuoteSchema>

export const serviceOptions = [
  "Junk Removal",
  "Property Cleanout",
  "Light Demolition",
  "Garage/Basement/Attic Cleanout",
  "Yard Cleanup",
  "Construction Debris",
  "Not sure — need advice",
]
