"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import Link from "next/link"
import { heroQuoteSchema, type HeroQuoteInput, serviceOptions } from "@/lib/forms"
import { TextField, SelectField } from "./FormField"
import { Icon } from "@/components/ui/Icon"
import { trackLead } from "@/lib/analytics"

export function HeroQuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState<string>("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HeroQuoteInput>({ resolver: zodResolver(heroQuoteSchema) })

  const onSubmit = async (data: HeroQuoteInput) => {
    setStatus("submitting")
    setErrorMsg("")
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "hero",
          description: "(from hero quick-quote form, customer will describe job on follow-up call)",
        }),
      })
      if (!res.ok) throw new Error((await res.json()).error || "Submission failed")
      trackLead("hero")
      setStatus("success")
      reset()
    } catch (e) {
      setStatus("error")
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 py-4">
        <span className="w-10 h-10 rounded-full bg-[color:var(--color-brand-accent)]/20 text-[color:var(--color-brand-primary)] flex items-center justify-center">
          <Icon name="check" size={22} />
        </span>
        <h3 className="font-display text-xl text-[color:var(--color-brand-text)]">Got it, talk soon.</h3>
        <p className="text-sm text-[color:var(--color-brand-muted)]">
          We&rsquo;ll respond within 1 to 2 hours. For fastest service, call or text{" "}
          <a href="tel:+12244566607" className="font-semibold text-[color:var(--color-brand-primary)]">(224) 456-6607</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <TextField
        id="hero-name"
        label="Your name"
        required
        autoComplete="name"
        error={errors.name?.message}
        {...register("name")}
      />
      <TextField
        id="hero-phone"
        label="Phone"
        type="tel"
        required
        autoComplete="tel"
        placeholder="(224) 555-0123"
        error={errors.phone?.message}
        {...register("phone")}
      />
      <SelectField
        id="hero-service"
        label="Service needed"
        required
        options={serviceOptions}
        error={errors.service?.message}
        {...register("service")}
      />
      <TextField
        id="hero-city"
        label="City / area"
        required
        placeholder="e.g. Lake Zurich"
        error={errors.city?.message}
        {...register("city")}
      />
      <input
        type="text"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden
        style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", opacity: 0 }}
        {...register("website")}
      />

      <div>
        <label className="flex gap-3 items-start cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-[color:var(--color-brand-border)] accent-[color:var(--color-brand-primary)]"
            {...register("smsConsent")}
          />
          <span className="text-xs text-[color:var(--color-brand-muted)] leading-relaxed">
            I agree to receive SMS messages from Torvik Hauling regarding my inquiry, appointments, estimates,
            and service updates. Message and data rates may apply. Reply STOP to opt out.{" "}
            <Link href="/privacy" className="underline hover:text-[color:var(--color-brand-primary)]">
              Privacy Policy
            </Link>
          </span>
        </label>
        {errors.smsConsent && (
          <p className="mt-1.5 text-xs text-red-600">{errors.smsConsent.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Get My Estimate"}
        {status !== "submitting" && <Icon name="arrow-right" size={18} />}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg || "Couldn't send. Please call (224) 456-6607."}</p>
      )}

      <p className="text-xs text-[color:var(--color-brand-muted)] text-center">
        No spam, no pressure. 1 to 2 hour response.
      </p>
    </form>
  )
}
