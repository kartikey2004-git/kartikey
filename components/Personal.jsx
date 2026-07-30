"use client";

import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useClickSound } from "@/hooks/useClickSound";

const personalItems = [
  {
    title: "Movies",
    description:
      "A curated watchlist of sci-fi and engineering stories, films that think about systems, problem-solving, and consequences the same way I do.",
    href: "/watchlist",
  },
  {
    title: "Gears",
    description:
      "The desk setup, keyboard, editors, and everyday development tools I actually use tuned for speed, focus, and shipping without friction.",
    href: "/gears",
  },
  {
    title: "Music",
    description:
      "The playlists that get me through long debugging sessions and late-night builds  coding tracks and favorites I keep coming back to.",
    href: "/listen",
  },
];

export default function PersonalSection() {
  const playNavigateSound = useClickSound("navigate");

  return (
    <section className="py-8 p-2">
      <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-8">
        <h2 className="mb-4 sm:mb-8 text-lg font-semibold rounded-sm sm:text-3xl">
          Personal
        </h2>

        <div className="space-y-2 md:-ml-5 -ml-3">
          {personalItems.map((item, index) => (
            <Card
              key={item.href}
              className={`bg-transparent border-none shadow-none p-3 sm:p-5 lg:p-6 ${
                index !== personalItems.length - 1
                  ? "border-b border-border/50"
                  : ""
              }`}
            >
              <Link
                href={item.href}
                onClick={playNavigateSound}
                className="group flex items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-base font-semibold text-foreground sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
