"use client";

import { useEffect } from "react";
import { useLocalStorage, useDebounceCallback } from "usehooks-ts";
import { useReadingExperience } from "@/components/blog/ReadingExperienceContext";
import { resumeKey } from "@/lib/reading-storage";

// Debounced autosave of scroll position, gated by `enabled` so it doesn't
// overwrite a saved resume point before <ResumePrompt> has had a chance to
// read and offer it.
export function ResumeReadingTracker({ enabled }) {
  const { slug, percent } = useReadingExperience();
  const [, setResume] = useLocalStorage(resumeKey(slug), null, { initializeWithValue: false });
  const save = useDebounceCallback((value) => setResume(value), 1500);

  useEffect(() => {
    if (!enabled || percent <= 0) return;
    save({ scrollPercentage: percent, timestamp: Date.now() });
  }, [enabled, percent, save]);

  return null;
}
