"use client";

import { useCallback, useMemo, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { useReadingExperience } from "@/components/blog/ReadingExperienceContext";
import { ShortcutsDialog } from "@/components/blog/ShortcutsDialog";
import { FOCUS_MODE_KEY } from "@/lib/reading-storage";

const NAVBAR_OFFSET = 80;

export function KeyboardShortcuts() {
  const { headings } = useReadingExperience();
  const [open, setOpen] = useState(false);
  const [, setFocusMode] = useLocalStorage(FOCUS_MODE_KEY, false, { initializeWithValue: false });

  const jumpToHeading = useCallback(
    (direction) => {
      if (!headings?.length) return;

      const positions = headings
        .map((heading) => {
          const el = document.getElementById(heading.id);
          return el ? { id: heading.id, top: el.getBoundingClientRect().top + window.scrollY } : null;
        })
        .filter(Boolean);

      if (!positions.length) return;

      const scrollPos = window.scrollY + NAVBAR_OFFSET;
      const target =
        direction === "next"
          ? positions.find((pos) => pos.top > scrollPos + 1)
          : [...positions].reverse().find((pos) => pos.top < scrollPos - 1);

      if (target) {
        document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [headings]
  );

  const handlers = useMemo(
    () => ({
      j: () => jumpToHeading("next"),
      k: () => jumpToHeading("prev"),
      t: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      f: () => setFocusMode((prev) => !prev),
      "?": () => setOpen(true),
    }),
    [jumpToHeading, setFocusMode]
  );

  useKeyboardShortcuts(handlers);

  return <ShortcutsDialog open={open} onOpenChange={setOpen} />;
}
