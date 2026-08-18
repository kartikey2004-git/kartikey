"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ReadingExperienceProvider, useReadingExperience } from "@/components/blog/ReadingExperienceContext";
import { cn } from "@/lib/utils";
import {
  TYPOGRAPHY_PREFS_KEY,
  DEFAULT_TYPOGRAPHY_PREFS,
  WIDTH_CLASS,
  FOCUS_MODE_KEY,
} from "@/lib/reading-storage";

// Mirrors AppShell's own focus-mode pathname check so this inner wrapper
// widens in lockstep with the outer shell instead of clamping back down to
// max-w-3xl while the shell is at max-w-5xl.
const BLOG_POST_PATTERN = /^\/blogs\/[^/]+$/;

// Client wrapper for the blog-post page's outer content container. Needed
// because the page itself is an async Server Component (generateStaticParams/
// generateMetadata) and can't call useLocalStorage/usePathname directly.
export function BlogPostWidthWrapper({ children }) {
  const pathname = usePathname();
  const [focusMode] = useLocalStorage(FOCUS_MODE_KEY, false, { initializeWithValue: false });
  const isFocusedBlogPost = BLOG_POST_PATTERN.test(pathname) && focusMode;

  return (
    <div
      className={cn(
        "mx-auto px-3 sm:px-5 lg:px-8 py-16 transition-[max-width] duration-300",
        isFocusedBlogPost ? "max-w-5xl" : "max-w-3xl"
      )}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}

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
