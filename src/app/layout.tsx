import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "CodeItP | Secure Systems Dev & Automation Portfolio",
  description:
    "Showcasing expertise in secure systems, AI, mobile, QA, and full-stack automation. Built with Next.js, Tailwind, Framer Motion, and neon energy.",
  keywords: [
    "secure systems developer",
    "automation engineer",
    "mobile app developer",
    "full-stack developer",
    "infosec engineer",
    "AI automation portfolio",
    "QA engineer",
    "software engineer",
  ],
  authors: [{ name: "Patroba", url: "https://github.com/codeitp" }],
  creator: "Patroba",
  themeColor: "#00ff88",
  openGraph: {
    title: "Patroba | Secure Systems Developer & Automation Engineer",
    description:
      "Portfolio of Patroba — showcasing secure systems development, AI automation, mobile app engineering, and QA expertise. Built with Next.js, Tailwind, and Framer Motion.",
    url: siteUrl,
    siteName: "Patroba Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Patroba Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patroba | Secure Systems Dev Portfolio",
    description:
      "Explore Patroba’s work in infosec, automation, QA, and mobile — uniquely styled with Next.js and neon energy.",
    creator: "@Patroba",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
