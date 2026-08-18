"use client";

import { toast } from "sonner";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

export default function CopyDmLink({
  href,
  external,
  label,
  description,
  dmText,
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={() => {
        navigator.clipboard
          .writeText(dmText)
          .then(() => toast("Message copied — paste it in the DM!"))
          .catch(() => {});
      }}
      className="group relative flex items-center gap-3 overflow-hidden px-1 py-4 transition-all duration-300 sm:gap-4 sm:px-2 md:hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {/* Hover accent */}
      <span className="absolute inset-y-0 left-0 w-px origin-bottom scale-y-0 bg-foreground transition-transform duration-300 group-hover:scale-y-100" />

      {/* Icon */}
      <span className="flex h-9 w-9 shrink-0 items-center justify-center text-foreground/70 transition-all duration-300 group-hover:scale-105 group-hover:border-foreground/50 group-hover:text-foreground sm:h-10 sm:w-10">
        <FaXTwitter className="h-4 w-4" />
      </span>

      {/* Content */}
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-foreground transition-colors duration-200 sm:text-base">
          {label}
        </span>

        <span className="block truncate text-xs text-muted-foreground transition-colors duration-200 sm:text-sm group-hover:text-foreground/80">
          {description}
        </span>
      </span>

      {/* Arrow */}
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}
