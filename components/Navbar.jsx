"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  IconHome,
  IconWorldWww,
  IconArticle,
  IconMail,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandGithub,
  IconDownload,
} from "@tabler/icons-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <IconWorldWww className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Blogs",
      icon: (
        <IconArticle className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blogs",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto: kartikeybhatnagar247@gmail.com",
      external: true,
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
      external: true,
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Bh20291Kartikey",
      external: true,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/kartikey2004-git",
      external: true,
    },
    {
      title: "Download",
      icon: (
        <IconDownload className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resume.pdf",
      external: true,
      download: true,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-neutral-900 shadow-md block md:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-neutral-800 dark:text-neutral-100"></div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(link.download ? { download: true } : {})}
                className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-blue-500 transition-colors"
              >
                {link.icon}
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 px-4 py-4 space-y-3 shadow-lg">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...(link.download ? { download: true } : {})}
              className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
