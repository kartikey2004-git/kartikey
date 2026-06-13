"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  const isExternal = (href) => href.startsWith("http");

  return (
    <footer className="w-full border-t border-border bg-background p-2">
      <div className="mx-auto max-w-4xl px-4 sm:px-5 lg:px-8 py-8 sm:py-14 lg:py-16">
        {/* TOP GRID */}
        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2">
          {/* LEFT (Brand + CTA) */}
          <div className="sm:col-span-2 flex flex-col justify-between -mb-4">
            <div>
              <h1 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight">
                Kartikey
              </h1>

              <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
                Building reliable, scalable systems with clean architecture and
                performance in mind.
              </p>
            </div>

            <div className="flex mt-4 -mb-6 gap-3">
              <TooltipProvider delayDuration={100}>
                {data.socialLinks.map(({ icon: Icon, label, href }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <Button
                        key={label}
                        size="icon"
                        variant="ghost"
                        asChild
                        className="h-8 w-8 sm:h-8 sm:w-8 rounded-sm"
                      >
                        <Link
                          href={href}
                          target={isExternal(href) ? "_blank" : "_self"}
                          rel={isExternal(href) ? "noopener noreferrer" : ""}
                        >
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>

            <div className="mt-10 rounded-sm">
              <p className="text-sm sm:text-xl">
                <span className="font-medium">Status :</span> Available for work
              </p>
              <p className="text-xs sm:text-lg text-muted-foreground mt-1">
                Usually replies within 24 hours
              </p>
            </div>
          </div>

          {/* RIGHT NAV */}
          <div className="sm:col-span-2 grid grid-cols-3 gap-6 sm:gap-8">
            {["sections", "company", "social"].map((section) => (
              <div key={section}>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3 sm:mb-4">
                  {section === "sections"
                    ? "Navigation"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>

                <ul className="space-y-2">
                  {data.navigation[section].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        target={isExternal(item.href) ? "_blank" : "_self"}
                        rel={isExternal(item.href) ? "noopener noreferrer" : ""}
                        className="group flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition"
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
        <div className="mt-8 sm:mt-16 border-t border-border pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
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
