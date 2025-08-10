"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/navLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-neutral-900 shadow-md block md:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-neutral-800 dark:text-neutral-100"></div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
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
          {navLinks.map((link) => (
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
              <div className="w-5 h-5">
                {" "}
                {/* Fixed icon container size */}
                {link.icon}
              </div>
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
