"use client";

import { FaXTwitter } from "react-icons/fa6";

export default function GetInTouch() {
  return (
    <section className="w-full overflow-x-hidden bg-background py-8 p-2">
      <div className="mx-auto max-w-3xl px-4 sm:px-5 lg:px-8">
        <div className="relative border border-border bg-card px-3 py-2.5 sm:px-4 sm:py-3 lg:px-5 lg:py-4">
          <span className="absolute left-0 top-0 h-full w-1 bg-foreground/60" />

          <div className="space-y-3 pl-3">
            <h4 className="text-lg font-semibold text-foreground sm:text-xl">
              Let&apos;s Talk
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Got an opportunity, an idea worth discussing, or just want to
              talk? Whether it&apos;s work, a collab, or just saying hi
              as a fellow builder, drop a DM, I read all of them.
            </p>
            <a
              href="https://x.com/kartikeybuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-foreground md:hover:text-muted-foreground transition-colors"
            >
              <FaXTwitter className="h-3.5 w-3.5" />
              DM me on X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
