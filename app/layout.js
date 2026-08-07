import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Navbar } from "@/components/Navbar";
import { AppShell } from "@/components/AppShell";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import SiteVisitorTracker from "@/components/SiteVisitorTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Kartikey | Developer",
    template: "%s | Kartikey",
  },
  description:
    "Full Stack Web Developer building modern web experiences with clean, fast and production-ready interfaces with solid backend logic.",
  keywords: [
    "full stack developer",
    "web developer",
    "react",
    "next.js",
    "javascript",
    "typescript",
    "node.js",
    "portfolio",
  ],
  authors: [{ name: "Kartikey" }],
  creator: "Kartikey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kartikcodes.vercel.app",
    title: "Kartikey - Full Stack Web Developer",
    description:
      "Full Stack Web Developer building modern web experiences with clean, fast and production-ready interfaces with solid backend logic.",
    siteName: "Kartikey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartikey - Full Stack Web Developer",
    description:
      "Full Stack Web Developer building modern web experiences with clean, fast and production-ready interfaces with solid backend logic.",
    creator: "@kartikeybuilds",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <Analytics />
        <SiteVisitorTracker />
        <Providers>
          <Toaster />
          <Navbar />
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
