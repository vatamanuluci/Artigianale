import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, date, guests, eventType, message } = body

    // Validate required fields
    if (!name || !email || !phone || !eventType) {
      return NextResponse.json(
        { error: "Câmpurile obligatorii lipsesc." },
        { status: 400 }
      )
    }

    // Send notification email to business
    await transporter.sendMail({
      from: `ARTIGIANALE Website <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Cerere nouă de ofertă — ${name}`,
      html: `
        <h2>Cerere nouă de pe site</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Nume</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Telefon</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Data eveniment</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${date || "Nespecificată"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Nr. invitați</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${guests || "Nespecificat"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Tip eveniment</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${eventType}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Mesaj</td><td style="padding: 8px;">${message || "—"}</td></tr>
        </table>
      `,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `ARTIGIANALE <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Am primit cererea ta — ARTIGIANALE",
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2C2825;">
          <div style="border-bottom: 1px solid #E6DDD0; padding-bottom: 24px; margin-bottom: 24px;">
            <h1 style="font-size: 24px; margin: 0;">ARTIGIANALE</h1>
          </div>
          <p style="font-size: 16px; line-height: 1.6;">Bună ${name},</p>
          <p style="font-size: 16px; line-height: 1.6;">
            Mulțumim pentru interesul acordat! Am primit cererea ta și revenim cu o ofertă personalizată 
            în <strong>maximum 24 de ore</strong>.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">Detaliile trimise de tine:</p>
          <table style="border-collapse: collapse; width: 100%; margin: 16px 0;">
            <tr><td style="padding: 8px 0; color: #7A6D5D; width: 140px;">Tip eveniment</td><td style="padding: 8px 0;">${eventType}</td></tr>
            ${date ? `<tr><td style="padding: 8px 0; color: #7A6D5D;">Data</td><td style="padding: 8px 0;">${date}</td></tr>` : ""}
            ${guests ? `<tr><td style="padding: 8px 0; color: #7A6D5D;">Nr. invitați</td><td style="padding: 8px 0;">${guests}</td></tr>` : ""}
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
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "A apărut o eroare. Încercați din nou." },
      { status: 500 }
    )
  }
}
