"use client";

import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { READING_STREAK_KEY } from "@/lib/reading-storage";

function dateKey(date) {
  return date.toISOString().slice(0, 10);
}

// Anonymous, localStorage-only reading streak: increments once per calendar
// day an article is read, resets to 1 if a day was skipped.
export function useReadingStreak() {
  const [streak, setStreak] = useLocalStorage(
    READING_STREAK_KEY,
    { lastReadDate: null, count: 0 },
    { initializeWithValue: false }
  );

  useEffect(() => {
    const today = dateKey(new Date());

    setStreak((prev) => {
      if (prev.lastReadDate === today) return prev;

      const yesterday = dateKey(new Date(Date.now() - 24 * 60 * 60 * 1000));
      const count = prev.lastReadDate === yesterday ? prev.count + 1 : 1;

      return { lastReadDate: today, count };
    });
    // Runs once per mount (per article view) — recording "read today" is
    // idempotent thanks to the lastReadDate === today check above.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return streak;
}
