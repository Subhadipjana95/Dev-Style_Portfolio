import { NextResponse } from "next/server"
import { Resend } from "resend"

// Use Edge Runtime for faster response
export const runtime = "edge"

export async function POST(req: Request) {
  try {
    // Validate environment variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const SENDER_EMAIL = process.env.SENDER_EMAIL       // verified Resend domain address
    const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL // personal inbox to receive inquiries

    if (!RESEND_API_KEY || !SENDER_EMAIL || !NOTIFICATION_EMAIL) {
      console.error("Missing environment variables:", {
        hasResendApiKey: !!RESEND_API_KEY,
        hasSenderEmail: !!SENDER_EMAIL,
        hasNotificationEmail: !!NOTIFICATION_EMAIL,
      })
      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error. Please DM me directly on WhatsApp.",
        },
        { status: 500 }
      )
    }

    const resend = new Resend(RESEND_API_KEY)

    const body = await req.json()
    const { name, email, service, budget, description } = body

    // Validation
    if (!name || !email || !description || !service) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      )
    }

    // Send notification email to you
    const { error: notificationError } = await resend.emails.send({
      from: `Portfolio Contact Form <${SENDER_EMAIL}>`,
      to: [NOTIFICATION_EMAIL],
      subject: `🚀 New Project Inquiry from ${name}`,
      replyTo: `${name} <${email}>`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8FC47B 0%, #b56b36 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #8FC47B; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Collaboration Request</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">💼 Service Requested:</div>
                <div class="value">${service}</div>
              </div>
              <div class="field">
                <div class="label">💰 Budget:</div>
                <div class="value">${budget || "Not specified"}</div>
              </div>
              <div class="field">
                <div class="label">📝 Project Description:</div>
                <div class="value">${description.replace(/\n/g, "<br>")}</div>
              </div>
              <div class="footer">
                <p>This email was sent from your portfolio contact form at a063.xyz</p>
                <p>Reply directly to this email to contact ${name}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (notificationError) {
      console.error("Resend notification error:", notificationError)
      throw new Error("Failed to send notification email")
    }

    // Send auto-reply to the user
    const { error: autoReplyError } = await resend.emails.send({
      from: `Subhadip Jana (a063) <${SENDER_EMAIL}>`,
      to: [email],
      subject: "Thanks for reaching out! 🚀",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #8FC47B 0%, #b56b36 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .summary { background: white; padding: 15px; border-left: 3px solid #8FC47B; margin: 20px 0; }
            .cta { text-align: center; margin: 30px 0; }
            .button { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #8FC47B 0%, #b56b36 100%); color: white; text-decoration: none; border-radius: 5px; font-weight: bold; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">Thanks for reaching out!</h1>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              <p>Thank you for your interest in working together! I've received your project inquiry and I'm excited to learn more about it.</p>
              
              <div class="summary">
                <strong>Your Request Summary:</strong><br><br>
                <strong>Service:</strong> ${service}<br>
                <strong>Budget:</strong> ${budget || "Not specified"}<br>
                <strong>Description:</strong> ${description.substring(0, 100)}${description.length > 100 ? "..." : ""}
              </div>

              <p>I'll review your request and get back to you within <strong>24-48 hours</strong>. In the meantime, feel free to check out my work or connect with me on social media.</p>

              <div class="cta">
                <a href="https://a063.xyz" class="button">Visit My Portfolio</a>
              </div>

              <p>Looking forward to potentially working together!</p>
              <p>Best regards,<br><strong>Subhadip Jana (a063)</strong><br>UI/UX Designer &amp; Frontend Developer</p>

              <div class="footer">
                <p>🌐 <a href="https://a063.xyz">a063.xyz</a> | 💼 <a href="https://linkedin.com/in/subhadipjana095">LinkedIn</a> | 💻 <a href="https://github.com/Subhadipjana95">GitHub</a></p>
                <p style="margin-top: 10px; color: #999;">This is an automated response. Please do not reply to this email.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (autoReplyError) {
      // Log but don't fail the request if auto-reply fails
      console.error("Resend auto-reply error:", autoReplyError)
    }

    return NextResponse.json({
      success: true,
      message: "Your request has been sent successfully!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send your request. Please try again or contact me directly on WhatsApp.",
      },
      { status: 500 }
    )
  }
}
