"use client";

import { useMemo } from "react";
import CountUp from "react-countup";
import { computeStreaks } from "@/utils/githubUtils";

export default function GithubStreakCard({ contributions, year }) {
  const { total, currentStreak, longestStreak } = useMemo(() => {
    if (!contributions?.length) {
      return { total: 0, currentStreak: 0, longestStreak: 0 };
    }

    const total = contributions.reduce((sum, d) => sum + d.count, 0);

    const streaks = computeStreaks(contributions);

    return {
      total,
      currentStreak: streaks.currentStreak,
      longestStreak: streaks.longestStreak,
    };
  }, [contributions]);

  return (
    <div className="p-4  border-b-white/10">
      <h3 className="text-sm font-semibold text-white tracking-tight mb-3 mr-8 text-center">
        Contribution Streaks · {year}
      </h3>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center text-xs text-gray-400 mb-4">
        <Stat label="Total Contributions" value={total} />

        <Stat label="Current Streak" value={currentStreak} />

        <Stat label="Longest Streak" value={longestStreak} />
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="px-3 py-2 bg-[#0f0f0f] border border-white/10 rounded-md">
      <p className="text-xl font-semibold text-white tabular-nums">
        <CountUp start={0} end={value} duration={1.2} preserveValue />
      </p>
      <p className="text-[11px] text-gray-400">{label}</p>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-white/10" />;
}
