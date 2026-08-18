"use client";

import { useReadingStreak } from "@/hooks/useReadingStreak";

export function ReadingStreakBadge() {
  const { count } = useReadingStreak();

  if (count < 2) return null;

  return (
    <span className="inline-flex items-center gap-1" suppressHydrationWarning>
      {count} day streak
    </span>
  );
}
