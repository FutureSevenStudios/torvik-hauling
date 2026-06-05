"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import Link from "next/link"
import { quoteSchema, type QuoteInput, serviceOptions } from "@/lib/forms"
import { TextField, TextareaField, SelectField } from "./FormField"
import { Icon } from "@/components/ui/Icon"

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState<string>("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteInput>({ resolver: zodResolver(quoteSchema) })

  const onSubmit = async (data: QuoteInput) => {
    setStatus("submitting")
    setErrorMsg("")
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "contact-page" }),
      })
      if (!res.ok) throw new Error((await res.json()).error || "Submission failed")
      setStatus("success")
      reset()
    } catch (e) {
      setStatus("error")
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-8 md:p-10">
        <span className="w-12 h-12 rounded-full bg-[color:var(--color-brand-accent)]/20 text-[color:var(--color-brand-primary)] flex items-center justify-center mb-5">
          <Icon name="check" size={26} />
        </span>
        <h3 className="font-display text-2xl text-[color:var(--color-brand-text)] mb-3">Got it — we&rsquo;ll be in touch.</h3>
        <p className="text-[color:var(--color-brand-muted)] leading-relaxed mb-4">
          We&rsquo;ll respond within 1&ndash;2 hours during business hours with a firm quote.
          For fastest response, feel free to call or text us directly.
        </p>
        <a href="tel:+12244566607" className="btn-secondary">
          <Icon name="phone" size={16} />
          (224) 456-6607
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[color:var(--color-brand-surface)] border border-[color:var(--color-brand-border)] rounded-2xl p-6 md:p-8 shadow-[var(--shadow-soft)]"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <TextField
          id="q-name"
          label="Your name"
          required
          autoComplete="name"
          error={errors.name?.message}
          {...register("name")}
        />
        <TextField
          id="q-phone"
          label="Phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(224) 555-0123"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>
      <div className="mb-4">
        <TextField
          id="q-email"
          label="Email (optional)"
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <SelectField
          id="q-service"
          label="Service needed"
          required
          options={serviceOptions}
          error={errors.service?.message}
          {...register("service")}
        />
        <TextField
          id="q-city"
          label="City / area"
          required
          placeholder="e.g. Lake Zurich, Palatine"
          error={errors.city?.message}
          {...register("city")}
        />
      </div>
      <div className="mb-4">
        <TextareaField
          id="q-description"
          label="Describe the job"
          required
          placeholder="Rough idea of what needs to go, any access concerns, preferred timing…"
          error={errors.description?.message}
          {...register("description")}
        />
      </div>
      <div className="mb-6">
        <TextField
          id="q-preferred-date"
          label="Preferred pickup date (optional)"
          type="date"
          error={errors.preferredDate?.message}
          {...register("preferredDate")}
        />
      </div>

      <input
        type="text"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden
        style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", opacity: 0 }}
        {...register("website")}
      />

      <div className="mb-4">
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
        className="btn-primary w-full justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Get My Estimate"}
        {status !== "submitting" && <Icon name="arrow-right" size={18} />}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600 mt-3">{errorMsg || "Couldn't send. Please call (224) 456-6607."}</p>
      )}

      <p className="text-xs text-[color:var(--color-brand-muted)] text-center mt-4">
        We respond in 1&ndash;2 hours during business hours. Free estimate, no pressure.
      </p>
    </form>
  )
}
