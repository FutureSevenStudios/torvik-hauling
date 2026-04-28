import { NextResponse } from "next/server"
import { Resend } from "resend"
import { quoteSchema } from "@/lib/forms"
import { site } from "@/lib/content"

export const runtime = "nodejs"

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const bodyObj = body as Record<string, unknown>
  const source = typeof bodyObj.source === "string" ? bodyObj.source : "unknown"

  // Honeypot: if filled, silently succeed
  if (typeof bodyObj.website === "string" && bodyObj.website.trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  const parsed = quoteSchema.safeParse(bodyObj)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 }
    )
  }
  const data = parsed.data

  const apiKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.NOTIFY_EMAIL || site.identity.email

  if (!apiKey) {
    console.warn("[quote] RESEND_API_KEY not set — submission received but not emailed", {
      source,
      data: { ...data, website: undefined },
    })
    // In dev without key, still return success so the form flow is testable
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ ok: true, dev: true })
    }
    return NextResponse.json(
      { error: "Server is not configured to send email. Please call (224) 456-6607." },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    const html = `
      <div style="font-family:Inter,system-ui,sans-serif;color:#1A2033;max-width:600px;margin:0 auto;">
        <h2 style="color:#0B2E5B;margin:0 0 8px;">New Torvik Hauling lead — ${data.service}</h2>
        <p style="color:#5B6470;margin:0 0 20px;">Submitted via <strong>${source}</strong> at ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT</p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#5B6470;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${escape(data.name)}</td></tr>
          <tr><td style="padding:8px 0;color:#5B6470;">Phone</td><td style="padding:8px 0;font-weight:600;"><a href="tel:${escape(data.phone)}">${escape(data.phone)}</a></td></tr>
          ${data.email ? `<tr><td style="padding:8px 0;color:#5B6470;">Email</td><td style="padding:8px 0;"><a href="mailto:${escape(data.email)}">${escape(data.email)}</a></td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#5B6470;">Service</td><td style="padding:8px 0;font-weight:600;">${escape(data.service)}</td></tr>
          <tr><td style="padding:8px 0;color:#5B6470;">City</td><td style="padding:8px 0;">${escape(data.city)}</td></tr>
          ${data.preferredDate ? `<tr><td style="padding:8px 0;color:#5B6470;">Preferred date</td><td style="padding:8px 0;">${escape(data.preferredDate)}</td></tr>` : ""}
        </table>
        <div style="margin-top:20px;padding:16px;background:#F7F5F0;border-left:3px solid #6FA8DC;border-radius:4px;">
          <div style="color:#5B6470;font-size:13px;margin-bottom:6px;">Job description</div>
          <div style="white-space:pre-wrap;">${escape(data.description)}</div>
        </div>
        <p style="margin-top:24px;color:#5B6470;font-size:13px;">Reminder: client expects 1–2 hour response during business hours.</p>
      </div>
    `

    await resend.emails.send({
      from: "Torvik Hauling <onboarding@resend.dev>",
      to: [notifyEmail],
      replyTo: data.email || undefined,
      subject: `New lead — ${data.service} in ${data.city} (${data.name})`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("[quote] email send failed", e)
    return NextResponse.json(
      { error: "We couldn't send your request. Please call (224) 456-6607." },
      { status: 500 }
    )
  }
}

function escape(s: string) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)
}
