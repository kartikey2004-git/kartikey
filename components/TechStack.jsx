"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Badge } from "@/components/ui/badge";

import { technologies, techCategories, highlightsData } from "@/app/data";

export default function AboutMeSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="how-i-build"
      className="w-full overflow-x-hidden bg-background py-12 sm:py-14 lg:py-16 p-2"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-5 lg:px-8">
        <div className="space-y-8 mb-6">
          <h2 className="text-xl font-semibold rounded-sm sm:text-3xl">
            Tech Stack
          </h2>
        </div>

        <div className="space-y-12">
          {/* Skills Section */}
          <div className="space-y-6 w-full">
            {techCategories.map((category) => {
              const categoryTech = technologies.filter(
                (skill) => skill.category === category
              );

              if (categoryTech.length === 0) return null;

              return (
                <div key={category} className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground/60">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {categoryTech.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-dashed border-2 bg-transparent px-4 py-2 text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={
                              mounted &&
                                resolvedTheme === "light" &&
                                skill.iconLight
                                ? skill.iconLight
                                : skill.icon
                            }
                            alt={skill.iconname}
                            className="h-4 w-4"
                          />

                          <span className="hidden sm:inline font-mono">
                            {skill.iconname}
                          </span>
                        </div>
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Who Am I Section */}
          <div className="w-full space-y-5 border-t border-border/50 pt-8 sm:pt-10">
            <div className="space-y-1">
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground/60">
                Who Am I
              </p>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h4 className="text-xl font-semibold text-foreground sm:text-2xl">
                  Kartikey Bhatnagar
                </h4>
              </div>
            </div>

            <div className="space-y-5 border-l-2 border-foreground/30 pl-4 sm:pl-6">
              {highlightsData[0].paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? "text-sm leading-relaxed text-foreground/90 sm:text-base"
                      : "text-sm leading-relaxed text-muted-foreground sm:text-base"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
