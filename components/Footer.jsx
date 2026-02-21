"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowDownLeft,
  MessageCircle,
} from "lucide-react";

const data = () => ({
  navigation: {
    sections: [
      { name: "Home", href: "#hero" },
      { name: "Projects", href: "#projects" },
      { name: "How I Build", href: "#how-i-build" },
      { name: "Testimonials", href: "#testimonials" },
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
      { name: "Twitter", href: "https://x.com/Bh20291Kartikey" },
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
    { icon: Twitter, label: "Twitter", href: "https://x.com/Bh20291Kartikey" },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kartikey2004-git",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
    },
    {
      icon: MessageCircle,
      label: "Discord",
      href: "https://discord.com/channels/781467057807032323/781485182254972948",
    },
  ],
  bottomLinks: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
});

export default function FooterStandard() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  if (!mounted) return null;

  return (
    <footer className="mt-20 w-full bg-black/60 px-4 sm:px-8 lg:px-16 overflow-x-hidden">
      <div className="animate-energy-flow via-primary h-px w-full bg-gradient-to-r from-transparent to-transparent" />
      <div className="relative w-full px-3 sm:px-5">
        {/* Top Section */}
        <div className="container m-auto grid grid-cols-1 gap-8 py-12 sm:gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="text-xl font-semibold">Let's connect</span>
            </Link>
            <p className="text-muted-foreground max-w-full text-sm sm:text-base">
              Got an interesting project? Need someone who ships code that
              doesn't break? Drop a message.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex gap-3">
                {data().socialLinks.map(({ icon: Icon, label, href }) => (
                  <Button
                    key={label}
                    size="icon"
                    variant="outline"
                    asChild
                    className="w-10 h-10 rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 hover:text-white hover:scale-105 transition-all duration-300 shadow-none"
                  >
                    <Link
                      href={href}
                      target={href.startsWith("http") ? "_blank" : "_self"}
                      rel={href.startsWith("http") ? "noopener noreferrer" : ""}
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 sm:mt-8 bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4">
              <p className="text-sm text-gray-300">
                <span className="text-white font-semibold">Status:</span>{" "}
                Available for hire
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Usually reply within 24 hours.
              </p>
            </div>
            <h1 className="from-muted-foreground/15 bg-gradient-to-b bg-clip-text text-4xl sm:text-5xl lg:text-7xl font-semibold text-transparent">
              Kartikey
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-3 items-start justify-between gap-6 sm:gap-8 px-3 sm:px-5 lg:col-span-3">
            {["sections", "company", "social"].map((section) => (
              <div key={section} className="w-full">
                <h3 className="border-primary mb-3 sm:mb-4 -ml-3 sm:-ml-5 border-l-2 pl-3 sm:pl-5 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                  {section === "sections"
                    ? "Navigate"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {data().navigation[section].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                        className="group text-muted-foreground hover:text-foreground decoration-primary -ml-3 sm:-ml-5 inline-flex items-center gap-2 underline-offset-8 transition-all duration-500 hover:pl-3 sm:hover:pl-5 hover:underline text-xs sm:text-sm"
                      >
                        <ArrowDownLeft className="text-primary rotate-[225deg] opacity-30 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100 sm:group-hover:rotate-[225deg] md:rotate-0" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="animate-rotate-3d via-primary h-px w-full bg-gradient-to-r from-transparent to-transparent" />
        <div className="text-muted-foreground container m-auto flex flex-col items-center justify-between gap-4 p-3 sm:p-4 text-xs md:flex-row md:px-0 md:text-sm">
          <p className="text-center md:text-left">
            &copy; {currentYear} Mvpblocks | All rights reserved
          </p>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center"></div>
        </div>
        <span className="from-primary/20 absolute inset-x-0 bottom-0 left-0 -z-10 h-1/3 w-full bg-gradient-to-t" />
      </div>

      {/* Animations */}
      <style jsx>{`
        /* ===== Animation Presets ===== */
        .animate-rotate-3d {
          animation: rotate3d 8s linear infinite;
        }

        .animate-energy-flow {
          animation: energy-flow 4s linear infinite;
          background-size: 200% 100%;
        }

        /* ===== Keyframes ===== */
        @keyframes rotate3d {
          0% {
            transform: rotateY(0);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        @keyframes energy-flow {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
      `}</style>
    </footer>
  );
}
