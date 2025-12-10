import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  validateContactInput,
  sanitizeInput,
  escapeHtml,
  detectSuspiciousUrls,
  generateLinkWarningHtml,
} from "@/lib/security";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { name, email, message } = body;

    // Validate input using security utilities
    const validation = validateContactInput(name, email, message);
    if (!validation.isValid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // Sanitize inputs
    name = sanitizeInput(name);
    email = sanitizeInput(email);
    message = sanitizeInput(message);

    // Escape HTML for safe email display
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    // Detect suspicious URLs and generate warning
    const suspiciousUrls = detectSuspiciousUrls(message);
    const hasLinks = suspiciousUrls.length > 0;
    const linkWarning = generateLinkWarningHtml(suspiciousUrls);

    // Send email to yourself
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zafrir.dotan@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact from ${safeName}${
        hasLinks ? " ⚠️ [Contains Links]" : ""
      }`,
      html: `
        <h2>New Contact Message from your Portfolio</h2>
        ${linkWarning}
        <p><strong>From:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
