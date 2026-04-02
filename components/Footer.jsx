"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaXTwitter,
  IoLogoGithub,
  FaLinkedinIn,
  GoArrowDownLeft,
  FaDiscord,
} from "@/lib/icons";

export const data = {
  navigation: {
    sections: [
      { name: "Home", href: "#hero" },
      { name: "Projects", href: "#projects" },
      { name: "How I Build", href: "#how-i-build" },
      { name: "GitHub", href: "#github" },
    ],
    company: [
      { name: "About", href: "#how-i-build" },
      { name: "Blog", href: "/blog" },
      {
        name: "Community",
        href: "https://discord.com/channels/781467057807032323/781485182254972948",
      },
      { name: "Contact", href: "#hero" },
    ],
    social: [
      { name: "Twitter", href: "https://x.com/kartikeybuilds" },
      { name: "GitHub", href: "https://github.com/kartikey2004-git" },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
      },
      {
        name: "Discord",
        href: "https://discord.com/channels/781467057807032323/781485182254972948",
      },
    ],
  },

  socialLinks: [
    {
      icon: FaXTwitter,
      label: "Twitter",
      href: "https://x.com/kartikeybuilds",
    },
    {
      icon: IoLogoGithub,
      label: "GitHub",
      href: "https://github.com/kartikey2004-git",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
    },
    {
      icon: FaDiscord,
      label: "Discord",
      href: "https://discord.com/channels/781467057807032323/781485182254972948",
    },
  ],

  bottomLinks: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
};

export default function FooterStandard() {
  const currentYear = new Date().getFullYear();

  // ✅ helper (cleaner)
  const isExternal = (href) => href.startsWith("http");

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto py-16">
        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* LEFT (Brand + CTA) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
                Kartikey
              </h1>

              <p className="mt-4 text-muted-foreground max-w-md">
                Building reliable, scalable systems with clean architecture and
                performance in mind.
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {data.socialLinks.map(({ icon: Icon, label, href }) => (
                <Button
                  key={label}
                  size="icon"
                  variant="ghost"
                  asChild
                  className="h-10 w-10 border border-border hover:bg-accent transition"
                >
                  <Link
                    href={href}
                    target={isExternal(href) ? "_blank" : "_self"}
                    rel={isExternal(href) ? "noopener noreferrer" : ""}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>

            {/* Status */}
            <div className="mt-8 border border-border p-4">
              <p className="text-sm">
                <span className="font-medium">Status:</span> Available for work
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Usually replies within 24 hours
              </p>
            </div>
          </div>

          {/* RIGHT NAV */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-10">
            {["sections", "company", "social"].map((section) => (
              <div key={section}>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  {section === "sections"
                    ? "Navigation"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>

                <ul className="space-y-3">
                  {data.navigation[section].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        target={isExternal(item.href) ? "_blank" : "_self"}
                        rel={isExternal(item.href) ? "noopener noreferrer" : ""}
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
                      >
                        <GoArrowDownLeft className="opacity-30 group-hover:opacity-100 transition" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p>© {currentYear} Kartikey. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
