import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/json-ld";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zafrir Dotan | Full-Stack & MLOps Engineer",
  description:
    "Senior Full-Stack Developer with 9 years of experience in React, Angular, Node.js, and MLOps. Building scalable AI-driven applications with expertise in Docker, PostgreSQL, and cloud technologies.",
  keywords: [
    "Full-Stack Developer",
    "MLOps Engineer",
    "React",
    "Angular",
    "Node.js",
    "Python",
    "AI Integration",
    "Docker",
    "PostgreSQL",
    "Software Engineer",
  ],
  authors: [{ name: "Zafrir Dotan" }],
  creator: "Zafrir Dotan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zafrir-dotan.vercel.app",
    siteName: "Zafrir Dotan Portfolio",
    title: "Zafrir Dotan | Full-Stack & MLOps Engineer",
    description:
      "Senior Full-Stack Developer specializing in React, Node.js, and MLOps. Building scalable AI-driven applications.",
    images: [
      {
        url: "https://zafrir-dotan.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zafrir Dotan - Full-Stack & MLOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zafrir Dotan | Full-Stack & MLOps Engineer",
    description:
      "Senior Full-Stack Developer specializing in React, Node.js, and MLOps",
    images: ["https://zafrir-dotan.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
