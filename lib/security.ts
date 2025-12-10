/**
 * Security utilities for contact form validation and sanitization
 */

// Sanitize input to prevent XSS and injection attacks
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove < and > to prevent HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers like onclick=
    .substring(0, 5000); // Limit length to prevent abuse
}

// Escape HTML entities for safe display in HTML emails
export function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Check for suspicious patterns in the input
export function hasSuspiciousPatterns(text: string): boolean {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /<iframe/i,
    /eval\(/i,
    /<img/i,
    /<object/i,
    /<embed/i,
  ];

  return suspiciousPatterns.some((pattern) => pattern.test(text));
}

// Check for dangerous file extensions
export function hasDangerousFileExtensions(text: string): boolean {
  const dangerousExtensions =
    /[\w-]+\.(exe|zip|rar|bat|cmd|scr|vbs|jar|apk|dmg|pkg|deb|msi|dll|pif|application|gadget|msp|hta|cpl|msc|vb|wsf|wsh|ps1|sh|action|bin|command|workflow)(\s|$|\/|\?|"|')/i;
  return dangerousExtensions.test(text);
}

// Detect URLs in text and filter out trusted ones
export function detectSuspiciousUrls(text: string): string[] {
  const urlPattern =
    /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9-]+\.[a-zA-Z]{2,}[^\s]*)/gi;
  const foundUrls = text.match(urlPattern) || [];

  // Trusted domains that don't need warnings
  const trustedDomains = [
    "linkedin.com",
    "facebook.com",
    "github.com",
    "npmjs.com",
    "npm.im",
    "twitter.com",
    "x.com",
    "instagram.com",
    "youtube.com",
    "medium.com",
    "dev.to",
    "stackoverflow.com",
    "gitlab.com",
    "bitbucket.org",
  ];

  // Common technology/framework names that look like URLs but aren't
  const techKeywords = [
    "react.js",
    "node.js",
    "next.js",
    "vue.js",
    "angular.js",
    "express.js",
    "nest.js",
    "d3.js",
    "three.js",
    "chart.js",
    "moment.js",
    "lodash.js",
    "jquery.js",
  ];

  // Filter out trusted URLs, email addresses, and tech keywords
  return foundUrls.filter((url) => {
    // Skip email addresses
    if (/@/.test(url)) return false;

    // Skip technology/framework names
    const lowerUrl = url.toLowerCase();
    if (
      techKeywords.some(
        (tech) => lowerUrl === tech || lowerUrl === tech.replace(".js", "")
      )
    ) {
      return false;
    }

    // Check if URL contains any trusted domain
    return !trustedDomains.some((domain) => lowerUrl.includes(domain));
  });
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate contact form input
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateContactInput(
  name: string,
  email: string,
  message: string
): ValidationResult {
  // Check required fields
  if (!name || !email || !message) {
    return { isValid: false, error: "All fields are required" };
  }

  // Check for suspicious patterns before sanitization
  const combinedText = `${name} ${email} ${message}`;
  if (hasSuspiciousPatterns(combinedText)) {
    return { isValid: false, error: "Invalid input detected" };
  }

  // Check for dangerous file extensions
  if (hasDangerousFileExtensions(message)) {
    return {
      isValid: false,
      error: "Message contains suspicious file extensions or links",
    };
  }

  // Length validation (after sanitization would be done)
  if (name.length > 100) {
    return { isValid: false, error: "Name is too long" };
  }

  if (message.length < 10) {
    return {
      isValid: false,
      error: "Message is too short (minimum 10 characters)",
    };
  }

  // Email validation
  if (!isValidEmail(email)) {
    return { isValid: false, error: "Invalid email address" };
  }

  return { isValid: true };
}

// Generate warning banner HTML for suspicious links
export function generateLinkWarningHtml(urls: string[]): string {
  if (urls.length === 0) return "";

  return `
    <div style="background-color: #fff3cd; border: 2px solid #ffc107; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
      <strong style="color: #856404;">⚠️ WARNING: This message contains links!</strong>
      <p style="color: #856404; margin: 5px 0;">Please verify these links before clicking:</p>
      <ul style="color: #856404;">
        ${urls.map((url) => `<li>${escapeHtml(url)}</li>`).join("")}
      </ul>
    </div>
  `;
}
