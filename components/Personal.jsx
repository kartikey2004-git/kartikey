"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useClickSound } from "@/hooks/useClickSound";

export default function PersonalSection() {
  const playNavigateSound = useClickSound("navigate");

  const personalItems = [
    {
      title: "Movies",
      description: "Sci-fi, engineering & systems thinking",
      href: "/watchlist",
    },
    {
      title: "Gears",
      description: "Desk setup, keyboard & development tools",
      href: "/gears",
    },
    {
      title: "Music",
      description: "Coding playlists and favorite tracks",
      href: "/listen",
    },
  ];

  return (
    <section className="py-12 sm:py-16 -mt-8">
      <div className="mx-auto max-w-4xl px-8 sm:px-10 lg:px-12">
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold tracking-tight">
          Personal
        </h2>

        <div className="divide-y divide-border">
          {personalItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={playNavigateSound}
              className="group flex items-center justify-between py-6 transition-colors"
            >
              <div>
                <h3 className="text-base sm:text-lg font-medium transition-colors group-hover:text-foreground">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>

              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}