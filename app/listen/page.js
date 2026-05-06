"use client";

import { useState } from "react";
import { listen, listenMeta } from "@/app/data";
import { SiSpotify } from "react-icons/si";
import { Play, Music2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import PathnameDisplay from "@/components/PathnameDisplay";

function getTrackId(url) {
  return url.split("/track/")[1]?.split("?")[0];
}

export default function Listen() {
  const [currentTrack, setCurrentTrack] = useState(listen[0]);

  const hour = new Date().getHours();
  const persona = listenMeta.persona[hour % listenMeta.persona.length];

  const dynamicTags = [...listenMeta.tags];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-3 sm:px-5 lg:px-8 py-16">
        <header className="mb-12">
          <PathnameDisplay />
          <h1 className="text-lg font-semibold rounded-sm sm:text-3xl">
            {listenMeta.headline}
          </h1>
          <p className="mt-2 text-md text-muted-foreground">
            {listenMeta.subtext}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-mono uppercase tracking-[0.15em]">
            {/* persona (primary) */}
            <span className="px-2.5 py-1 rounded-sm bg-foreground text-background">
              {persona}
            </span>

            {/* divider */}
            <span className="text-muted-foreground/30">/</span>

            {/* identity (secondary) */}
            <span className="text-muted-foreground/60">
              {listenMeta.identity.join(" · ")}
            </span>

            {/* divider */}
            <span className="text-muted-foreground/20">/</span>

            {/* tags (tertiary group) */}
            <div className="flex flex-wrap items-center gap-1.5">
              {dynamicTags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-sm border border-border/30 text-muted-foreground/60 hover:text-foreground hover:border-border transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <Card className="bg-transparent border-none shadow-sm rounded-md mb-8">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-muted-foreground">
                  now playing
                </span>
              </div>
              <SiSpotify size={14} className="text-green-500/70" />
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground sm:text-xl">
                {currentTrack.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {currentTrack.artist}
              </p>
            </div>

            <div className="hidden lg:block"></div>

            <div className="mt-4">
              <div className="relative w-full overflow-hidden rounded-xl border border-border/40 bg-muted/20">
                <iframe
                  src={`https://open.spotify.com/embed/track/${getTrackId(currentTrack.url)}?theme=0`}
                  className="w-full block h-[80px] sm:h-[152px]"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-4 md:-ml-5 -ml-3">
          {listen.map((track, index) => {
            const isActive = currentTrack.id === track.id;

            return (
              <Card
                key={track.id}
                className={`bg-transparent border-none p-3 sm:p-5 lg:p-6 shadow-sm rounded-md cursor-pointer transition-all duration-150 group ${
                  isActive ? "bg-muted/30" : "hover:bg-muted/10"
                }`}
                onClick={() => setCurrentTrack(track)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* index / play icon */}
                    <div className="relative w-5 h-4 flex items-center justify-center flex-shrink-0">
                      {isActive ? (
                        <span className="flex items-end gap-[2px] h-3">
                          {[1, 2, 3].map((i) => (
                            <span
                              key={i}
                              className="w-[2px] bg-green-500 rounded-full"
                              style={{
                                height: `${[8, 12, 6][i - 1]}px`,
                                animation: `wave ${1 + i * 0.2}s ease-in-out infinite`,
                                animationDelay: `${i * 0.1}s`,
                              }}
                            />
                          ))}
                        </span>
                      ) : (
                        <>
                          <span className="absolute text-[11px] font-mono text-muted-foreground/50 group-hover:opacity-0 transition-opacity">
                            {index + 1}
                          </span>
                          <Play
                            size={11}
                            className="absolute opacity-0 group-hover:opacity-70 transition-opacity fill-current"
                          />
                        </>
                      )}
                    </div>

                    {/* title + artist */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-base font-semibold text-foreground sm:text-xl truncate ${isActive ? "" : "group-hover:text-primary transition-colors"}`}
                      >
                        {track.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed truncate">
                        {track.artist}
                      </p>
                    </div>

                    {/* spotify dot */}
                    <SiSpotify
                      size={14}
                      className={`transition-colors flex-shrink-0 ${isActive ? "text-green-500" : "text-muted-foreground/20 group-hover:text-green-500/60"}`}
                    />
                  </div>

                  {/* duration */}
                  <span className="text-[10px] text-muted-foreground sm:text-sm ml-4 flex-shrink-0">
                    {track.duration}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* ───── QUOTE ───── */}
        <footer clCardame="mt-20 pt-8 border-t border-border/20">
          <p className="text-sm italic text-muted-foreground/60 leading-relaxed">
            &ldquo;{listenMeta.quote.split(" — ")[0]}&rdquo;
          </p>
          <p className="text-[10px] font-mono text-muted-foreground/30 mt-2 tracking-wider">
            — {listenMeta.quote.split(" — ")[1]}
          </p>
        </footer>
      </div>
    </div>
  );
}
