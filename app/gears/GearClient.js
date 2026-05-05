"use client";

import { gear, gearMeta } from "@/app/data/index.js";

export default function GearClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-3 sm:px-5 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="space-y-2">
            {/* Identity */}
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {gearMeta.identity.join(" / ")}
            </div>

            {/* Headline */}
            <h1 className="text-lg font-semibold rounded-sm sm:text-3xl">
              {gearMeta.headline}
            </h1>

            {/* Subtext */}
            <p className="mt-2 text-md text-muted-foreground">
              {gearMeta.subtext}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {gearMeta.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gear List */}
        {/* ───────── TOOLS ───────── */}
        <div className="space-y-8 mb-12">
          {gear.tools.map((section, index) => (
            <div key={section.category}>
              {index > 0 && <div className="border-t border-border mb-8" />}

              <h2 className="mb-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {section.category}
              </h2>

              <div className="text-sm text-foreground/80 flex flex-wrap gap-x-2 gap-y-1">
                {section.items.map((item, i) => (
                  <span key={item} className="hover:text-foreground transition">
                    {item}
                    {i !== section.items.length - 1 && (
                      <span className="text-muted-foreground/40 px-1">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 mb-12">
          <h2 className="mb-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            system
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
            {Object.entries(gear.system).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-4">
                <span className="text-muted-foreground capitalize">
                  {key.replace("_", " ")}
                </span>
                <span className="text-foreground/80 text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ───────── MOBILE ───────── */}
        <div className="border-t border-border pt-8 mb-12">
          <h2 className="mb-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {gear.mobile.name}
          </h2>

          <div className="mb-3 text-xs text-muted-foreground">
            {gear.mobile.ui}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
            {Object.entries(gear.mobile)
              .filter(([key]) => key !== "name" && key !== "ui")
              .map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4">
                  <span className="text-muted-foreground capitalize">
                    {key}
                  </span>
                  <span className="text-foreground/80 text-right">{value}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Footer Quote */}
        <div className="border-t border-border pt-8">
          <blockquote className="text-sm text-muted-foreground italic">
            {gearMeta.quote}
          </blockquote>
        </div>
      </div>
    </div>
  );
}
