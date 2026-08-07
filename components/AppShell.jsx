"use client";

import { usePathname } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { FOCUS_MODE_KEY } from "@/lib/reading-storage";

const BLOG_POST_PATTERN = /^\/blogs\/[^/]+$/;

// Replaces the plain wrapper div that used to live inline in app/layout.js.
// Focus mode (blog reading feature) needs to widen this outer container,
// which lives outside the blog route's own subtree, so the width logic has
// to sit here rather than in the blog page itself.
export function AppShell({ children }) {
  const pathname = usePathname();
  const [focusMode] = useLocalStorage(FOCUS_MODE_KEY, false, { initializeWithValue: false });
  const isFocusedBlogPost = BLOG_POST_PATTERN.test(pathname) && focusMode;

  return (
    <div
      className={cn(
        "mx-auto flex min-h-[calc(100dvh-4rem)] w-full flex-col overflow-x-hidden transition-[max-width] duration-300",
        isFocusedBlogPost ? "max-w-5xl" : "max-w-3xl"
      )}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
