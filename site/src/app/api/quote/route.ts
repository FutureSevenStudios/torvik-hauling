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

  const apiKey =
    process.env.Torvik_RESEND_API_KEY ||
    process.env.TORVIK_RESEND_API_KEY ||
    process.env.RESEND_API_KEY
  const notifyEmail = process.env.TORVIK_NOTIFY_EMAIL || site.identity.email

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
  const fromAddress = process.env.QUOTE_FROM_EMAIL || "Torvik Hauling <quotes@futuresevenstudios.com>"
  const submittedAt = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })

  const internalHtml = `
    <div style="font-family:Inter,system-ui,sans-serif;color:#1A2033;max-width:600px;margin:0 auto;">
      <h2 style="color:#0B2E5B;margin:0 0 8px;">New Torvik Hauling lead — ${escape(data.service)}</h2>
      <p style="color:#5B6470;margin:0 0 20px;">Submitted via <strong>${escape(source)}</strong> at ${submittedAt} CT</p>
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
      <p style="margin-top:24px;color:#5B6470;font-size:13px;">Reminder: client expects 1 to 2 hour response during business hours.</p>
    </div>
  `

  const customerHtml = `
    <div style="font-family:Inter,system-ui,sans-serif;color:#1A2033;max-width:600px;margin:0 auto;background:#F7F5F0;padding:32px 24px;">
      <div style="background:#FFFFFF;border:1px solid #E4E4DD;border-radius:16px;padding:32px;">
        <h1 style="font-family:Georgia,serif;color:#0B2E5B;margin:0 0 8px;font-size:24px;line-height:1.2;">Thanks, ${escape(data.name.split(" ")[0] || data.name)} — we got it.</h1>
        <p style="color:#5B6470;margin:0 0 24px;line-height:1.6;">Your request is in. A member of the Torvik Hauling team will reach out within <strong style="color:#0B2E5B;">1 to 2 hours during business hours</strong> with a free estimate. If you need us sooner, call or text <a href="tel:+12244566607" style="color:#0B2E5B;font-weight:600;">(224) 456-6607</a>.</p>

        <div style="border-top:1px solid #E4E4DD;border-bottom:1px solid #E4E4DD;padding:20px 0;margin:20px 0;">
          <div style="color:#3E7CB1;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;font-weight:700;margin-bottom:12px;">Your request</div>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:6px 0;color:#5B6470;width:120px;">Service</td><td style="padding:6px 0;font-weight:600;">${escape(data.service)}</td></tr>
            <tr><td style="padding:6px 0;color:#5B6470;">Location</td><td style="padding:6px 0;">${escape(data.city)}</td></tr>
            ${data.preferredDate ? `<tr><td style="padding:6px 0;color:#5B6470;">Preferred date</td><td style="padding:6px 0;">${escape(data.preferredDate)}</td></tr>` : ""}
            <tr><td style="padding:6px 0;color:#5B6470;">Phone</td><td style="padding:6px 0;">${escape(data.phone)}</td></tr>
          </table>
          <div style="margin-top:14px;padding:14px;background:#F7F5F0;border-radius:8px;">
            <div style="color:#5B6470;font-size:12px;margin-bottom:4px;">Job description</div>
            <div style="white-space:pre-wrap;font-size:14px;">${escape(data.description)}</div>
          </div>
        </div>

        <div style="color:#3E7CB1;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;font-weight:700;margin-bottom:10px;">What happens next</div>
        <ol style="margin:0 0 20px;padding-left:20px;color:#1A2033;line-height:1.6;font-size:14px;">
          <li style="margin-bottom:6px;">We review your request and put together a quick estimate.</li>
          <li style="margin-bottom:6px;">We reach out by phone, text, or email to confirm the details and lock in a time.</li>
          <li>Crew shows up on time, hauls it away, and leaves the space swept clean.</li>
        </ol>

        <div style="text-align:center;margin:28px 0 4px;">
          <a href="tel:+12244566607" style="display:inline-block;background:#0B2E5B;color:#FFFFFF;text-decoration:none;font-weight:600;padding:12px 28px;border-radius:8px;font-size:15px;">Call (224) 456-6607</a>
        </div>
      </div>

      <div style="text-align:center;color:#5B6470;font-size:12px;line-height:1.6;margin-top:24px;">
        <strong style="color:#1A2033;">Torvik Hauling</strong> &middot; Junk Removal &amp; Light Demolition<br>
        Lake Zurich &amp; Northwest Chicago Suburbs &middot; Licensed &amp; Insured<br>
        <a href="https://torvikhauling.com" style="color:#3E7CB1;text-decoration:none;">torvikhauling.com</a>
      </div>
    </div>
  `

  type SendArgs = Parameters<typeof resend.emails.send>[0]
  const sendOrThrow = async (args: SendArgs, label: string) => {
    const { data: sent, error } = await resend.emails.send(args)
    if (error) {
      console.error(`[quote] ${label} send error`, error)
      throw new Error(`${label}: ${error.name || "send failed"} — ${error.message || JSON.stringify(error)}`)
    }
    return sent
  }

  try {
    const sends: Promise<unknown>[] = [
      sendOrThrow({
        from: fromAddress,
        to: [notifyEmail],
        replyTo: data.email || undefined,
        subject: `New lead — ${data.service} in ${data.city} (${data.name})`,
        html: internalHtml,
      }, "internal"),
    ]

    if (data.email) {
      sends.push(
        sendOrThrow({
          from: fromAddress,
          to: [data.email],
          replyTo: notifyEmail,
          subject: `We got your request — Torvik Hauling`,
          html: customerHtml,
        }, "customer")
      )
    }

    const results = await Promise.allSettled(sends)
    const failures = results.filter((r) => r.status === "rejected")
    if (failures.length === results.length) {
      throw (failures[0] as PromiseRejectedResult).reason
    }
    failures.forEach((f) => console.warn("[quote] partial email failure", (f as PromiseRejectedResult).reason))

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
