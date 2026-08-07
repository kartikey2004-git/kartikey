"use client";

import { useRef } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ReadingExperienceProvider, useReadingExperience } from "@/components/blog/ReadingExperienceContext";
import { cn } from "@/lib/utils";
import {
  TYPOGRAPHY_PREFS_KEY,
  DEFAULT_TYPOGRAPHY_PREFS,
  WIDTH_CLASS,
} from "@/lib/reading-storage";

// Owns the single rAF-throttled scroll listener shared by the progress bar,
// words-left counter, milestone toasts, and resume-reading autosave, and
// provides it (plus slug/headings/totalWords) to client descendants via
// context so a server-rendered page can still compose them together.
export function ReadingExperience({ slug, totalWords, headings, children }) {
  const articleRef = useRef(null);
  const percent = useScrollProgress(articleRef);

  return (
    <ReadingExperienceProvider value={{ slug, percent, totalWords, headings, articleRef }}>
      {children}
    </ReadingExperienceProvider>
  );
}

// Wraps the rendered article body: attaches the scroll-progress ref and
// applies the persisted font-size/line-height/width reading prefs as CSS
// custom properties that cascade into BlogContent's markdown styling.
export function ArticleScrollBoundary({ children }) {
  const { articleRef } = useReadingExperience();
  const [prefs] = useLocalStorage(TYPOGRAPHY_PREFS_KEY, DEFAULT_TYPOGRAPHY_PREFS, {
    initializeWithValue: false,
  });

  return (
    <div
      ref={articleRef}
      className={cn("transition-[max-width] duration-300", WIDTH_CLASS[prefs.width] ?? WIDTH_CLASS.normal)}
      style={{
        "--reading-font-scale": prefs.fontScale,
        "--reading-line-height": prefs.lineHeight,
      }}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
