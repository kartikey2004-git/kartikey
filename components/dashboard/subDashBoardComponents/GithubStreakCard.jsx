"use client";

import React from "react";
import CountUp from "react-countup";
import { computeStreaks } from "@/utils/githubUtils";

export default function GithubStreakCard({ data }) {
  const { contributions, user } = data;
  const streaks = computeStreaks(contributions);

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-base font-semibold text-white tracking-tight">
          Contribution Streaks
        </h3>
      </div>

      <div className="flex flex-col gap-4 text-left">
        <div className="flex items-center gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              <CountUp start={0} end={user.totalContribution} duration={1.4} />
            </p>
            <p className="text-[11px] text-gray-400">Total Contributions</p>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div className="flex items-center gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              <CountUp start={0} end={streaks.currentStreak} duration={1.4} />
            </p>
            <p className="text-[11px] text-gray-400">Current Streak</p>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div className="flex items-center gap-2">
          <div>
            <p className="text-xl font-semibold text-white">
              <CountUp start={0} end={streaks.longestStreak} duration={1.4} />
            </p>
            <p className="text-[11px] text-gray-400">Longest Streak</p>
          </div>
        </div>
      </div>
    </div>
  );
}
