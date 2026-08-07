"use client";

import { useReadingExperience } from "@/components/blog/ReadingExperienceContext";

export function WordsLeftCounter() {
  const { percent, totalWords } = useReadingExperience();

  if (!totalWords || percent >= 98) return null;

  const wordsLeft = Math.max(0, Math.round(totalWords * (1 - percent / 100)));

  return (
    <div
      className="fixed bottom-4 right-4 z-40 rounded-full border border-border/50 bg-background/80 px-3 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur-sm sm:bottom-6 sm:right-6"
      aria-live="polite"
    >
      {wordsLeft.toLocaleString()} words left
    </div>
  );
}
