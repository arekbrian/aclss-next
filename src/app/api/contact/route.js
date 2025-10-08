// src/app/api/contact/route.js
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

// Small HTML-escape helper for safe insertion into email HTML
function escapeHtml(unsafe = "") {
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body || {}

    // ✅ Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(String(email).toLowerCase())) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    if (message.length > 10000) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 })
    }

    // ✅ SMTP config from .env.local
    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 465)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const adminEmail = process.env.ADMIN_EMAIL // Where messages are delivered
    const fromEmail = process.env.FROM_EMAIL || user

    if (!host || !port || !user || !pass || !adminEmail) {
      console.error("❌ SMTP env vars missing")
      return NextResponse.json(
        { error: "Mail server not configured. Check environment variables." },
        { status: 500 }
      )
    }

    // ✅ Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465 (SSL), false for 587 (TLS)
      auth: { user, pass },
    })

    // ✅ Test SMTP connection
    try {
      await transporter.verify()
      console.log("✅ SMTP server is ready to take messages")
    } catch (verifyErr) {
      console.error("❌ SMTP connection failed:", verifyErr)
      return NextResponse.json({ error: "SMTP connection failed" }, { status: 500 })
    }

    // ✅ Styled Admin Notification
    const adminSubject = `📩 Contact Form: ${name} — ACL Smart Solutions`
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; color:#333; max-width:600px; margin:auto;">
        <h2 style="color:#1976d2;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Message:</strong></p>
        <div style="border-left:4px solid #1976d2; padding:12px; background:#f4f8ff; border-radius:6px;">
          ${escapeHtml(message).replace(/\n/g, "<br/>")}
        </div>
        <hr style="margin:20px 0;"/>
        <p style="font-size:12px; color:#777;">📅 Received on ${new Date().toLocaleString()}</p>
      </div>
    `

    await transporter.sendMail({
      from: `"ACL Smart Solutions Website" <${fromEmail}>`,
      to: adminEmail,
      replyTo: email, // ✅ direct replies go to the user
      subject: adminSubject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: adminHtml,
    })

    // ✅ Optional confirmation to user
    if (process.env.SEND_CONFIRMATION === "true") {
      const userHtml = `
        <div style="font-family: Arial, sans-serif; color:#333; max-width:600px; margin:auto;">
          <h2 style="color:#1976d2;">Thank You for Contacting Us</h2>
          <p>Hi <strong>${escapeHtml(name)}</strong>,</p>
          <p>We’ve received your message and will reply as soon as possible.</p>
          <p style="margin-top:20px;">Best regards,<br/><strong>ACL Smart Solutions Team</strong></p>
          <hr style="margin:20px 0;"/>
          <p style="font-size:12px; color:#777;">This is an automated confirmation from ACL Smart Solutions.</p>
        </div>
      `
      await transporter.sendMail({
        from: adminEmail,
        to: email,
        subject: `We’ve received your message - ACL Smart Solutions`,
        text: `Hi ${name},\n\nWe received your message and will get back to you soon.\n\n— ACL Smart Solutions`,
        html: userHtml,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("❌ Error in /api/contact:", err)
    return NextResponse.json({ error: "Error sending message" }, { status: 500 })
  }
}
