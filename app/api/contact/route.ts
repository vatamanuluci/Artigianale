import { NextResponse } from "next/server"

// HTML sanitization — escape dangerous characters
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

// Simple in-memory rate limiter (per IP, 5 requests per 15 min)
const rateMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW = 15 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return false
  }
  entry.count++
  return entry.count > RATE_LIMIT
}

async function sendEmail(to: string, subject: string, html: string, replyTo?: string) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error("Missing RESEND_API_KEY env var")

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "ARTIGIANALE <onboarding@resend.dev>",
      to: [to],
      subject,
      html,
      reply_to: replyTo,
    }),
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(`Resend error: ${JSON.stringify(data)}`)
  }
  return data
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded?.split(",")[0]?.trim() || "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Prea multe cereri. Încearcă din nou mai târziu." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, date, guests, eventType, message } = body

    // Honeypot — if filled, it's a bot
    if (body.fax_number) {
      console.log("[contact] Honeypot triggered, skipping email")
      return NextResponse.json({ success: true, honeypot: true })
    }

    // Validate required fields
    if (!name || !email || !phone || !eventType) {
      return NextResponse.json(
        { error: "Câmpurile obligatorii lipsesc." },
        { status: 400 }
      )
    }

    // Validate email format server-side
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Adresa de email nu este validă." },
        { status: 400 }
      )
    }

    // Sanitize all inputs
    const s = {
      name: esc(name),
      email: esc(email),
      phone: esc(phone),
      date: esc(date || ""),
      guests: esc(guests || ""),
      eventType: esc(eventType),
      message: esc(message || ""),
    }

    const recipient = process.env.GMAIL_USER || "lucivatamanu@gmail.com"

    // Send notification email to business
    const notif = await sendEmail(
      recipient,
      `Cerere nouă de ofertă — ${s.name}`,
      `
        <h2>Cerere nouă de pe site</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Nume</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${s.name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${s.email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Telefon</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${s.phone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Data eveniment</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${s.date || "Nespecificată"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Nr. invitați</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${s.guests || "Nespecificat"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Tip eveniment</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${s.eventType}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Mesaj</td><td style="padding: 8px;">${s.message || "—"}</td></tr>
        </table>
      `,
      email,
    )
    console.log("[contact] Notification sent:", notif)

    // Send confirmation email to customer (best-effort, may fail on free Resend plan)
    try {
      const confirm = await sendEmail(
        email,
        "Am primit cererea ta — ARTIGIANALE",
        `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2C2825;">
            <div style="border-bottom: 1px solid #E6DDD0; padding-bottom: 24px; margin-bottom: 24px;">
              <h1 style="font-size: 24px; margin: 0;">ARTIGIANALE</h1>
            </div>
            <p style="font-size: 16px; line-height: 1.6;">Bună ${s.name},</p>
            <p style="font-size: 16px; line-height: 1.6;">
              Mulțumim pentru interesul acordat! Am primit cererea ta și revenim cu o ofertă personalizată 
              în <strong>maximum 24 de ore</strong>.
            </p>
            <p style="font-size: 16px; line-height: 1.6;">Detaliile trimise de tine:</p>
            <table style="border-collapse: collapse; width: 100%; margin: 16px 0;">
              <tr><td style="padding: 8px 0; color: #7A6D5D; width: 140px;">Tip eveniment</td><td style="padding: 8px 0;">${s.eventType}</td></tr>
              ${s.date ? `<tr><td style="padding: 8px 0; color: #7A6D5D;">Data</td><td style="padding: 8px 0;">${s.date}</td></tr>` : ""}
              ${s.guests ? `<tr><td style="padding: 8px 0; color: #7A6D5D;">Nr. invitați</td><td style="padding: 8px 0;">${s.guests}</td></tr>` : ""}
            </table>
            <p style="font-size: 16px; line-height: 1.6;">
              Între timp, ne poți contacta direct pe WhatsApp la 
              <a href="https://wa.me/40732116589" style="color: #C4A97D;">0732 116 589</a>.
            </p>
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #E6DDD0; color: #7A6D5D; font-size: 13px;">
              <p style="margin: 0;">Cu drag, echipa ARTIGIANALE</p>
              <p style="margin: 4px 0 0;">Pizza artizanală la evenimentul tău</p>
            </div>
          </div>
        `,
      )
      console.log("[contact] Confirmation sent:", confirm)
    } catch (e) {
      console.warn("[contact] Confirmation email skipped (free plan):", e)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    const errMsg = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      { error: "A apărut o eroare. Încercați din nou.", debug: errMsg },
      { status: 500 }
    )
  }
}
