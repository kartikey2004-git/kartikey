"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useClickSound } from "@/hooks/useClickSound";

export default function PersonalSection() {
  const playNavigateSound = useClickSound('navigate');

  const personalItems = [
    {
      title: "Movies",
      description: "Sci-fi, engineering, and systems thinking",
      href: "/watchlist",
      icon: "🎬"
    },
    {
      title: "Gears & Tools",
      description: "Development tools and setup",
      href: "/gears",
      icon: "⚙️"
    },
    {
      title: "Listen",
      description: "Music playlist for coding sessions",
      href: "/listen",
      icon: "🎵"
    }
  ];

  return (
    <section className="py-8 sm:py-14 lg:py-16 p-2">
      <div className="mx-auto max-w-4xl px-3 sm:px-5 lg:px-8">
        <h2 className="mb-4 sm:mb-8 text-lg font-semibold rounded-sm sm:text-3xl">Personal</h2>

        <div className="md:-ml-5 -ml-3">
          {personalItems.map((item) => (
            <Card
              key={item.href}
              className="bg-transparent p-4 sm:p-6 border-0"
            >
              <Link
                href={item.href}
                onClick={playNavigateSound}
                className="block h-full"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-semibold text-foreground sm:text-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="ml-4 flex items-center">
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
