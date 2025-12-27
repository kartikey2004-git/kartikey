"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  chunkWeeks,
  getContributionLevel,
  computeStreaks,
} from "@/utils/githubUtils";

export default function ContributionHeatmap({ data }) {
  const { contributions } = data;

  const weeks = chunkWeeks(contributions);
  const streaks = computeStreaks(contributions);

  const total = contributions.reduce((s, d) => s + d.count, 0);
  const today = contributions[contributions.length - 1].date;

  const monthLabels = weeks.map((week, i) => {
    const firstValid = week.find((d) => !d.pad);
    if (!firstValid) return "";
    return new Date(firstValid.date).toLocaleString("en-US", {
      month: "short",
    });
  });

  return (
    <div className="p-4 sm:p-5">
      <h3 className="text-lg font-semibold text-white mb-4">
        Contribution Activity
      </h3>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center text-xs text-gray-400 mb-4">
        <div className="px-3 py-2 bg-[#111] border border-[#1f1f1f]">
          <p className="text-white font-semibold text-base">{total}</p>
          <p className="text-[10px] mt-1 -ml-2 sm:ml-0">Total Contributions</p>
        </div>

        <div className="px-3 py-2 bg-[#111] border border-[#1f1f1f]">
          <p className="text-white font-semibold text-base">
            {streaks.currentStreak}
          </p>
          <p className="text-[10px] mt-1">Current Streak</p>
        </div>

        <div className="px-3 py-2 bg-[#111] border border-[#1f1f1f]">
          <p className="text-white font-semibold text-base">
            {streaks.longestStreak}
          </p>
          <p className="text-[10px] mt-1">Longest Streak</p>
        </div>
      </div>

      {/* Heatmap */}
      <div className="overflow-x-auto pb-2 hide-scrollbar">
        <TooltipProvider>
          {/* Month labels */}
          <div className="md:flex hidden ml-1 mb-1">
            {monthLabels.map((m, i) => (
              <div key={i} className="text-[10px] text-gray-500 w-3 mr-0.5">
                {i === 0 || m !== monthLabels[i - 1] ? m : ""}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex gap-0.75">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="grid grid-rows-7 gap-0.75">
                {week.map((day, dIdx) => {
                  if (day.pad) {
                    return <div key={dIdx} className="w-2.5 h-2.5" />;
                  }

                  const intensity = getContributionLevel(day.count);
                  const isToday = day.date === today;

                  return (
                    <Tooltip key={dIdx}>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.12 }}
                          className={`w-2.5 h-2.5 rounded-[2px] border
                            ${isToday ? "border-white/80" : "border-black/20"}
                            ${intensity}`}
                        />
                      </TooltipTrigger>

                      <TooltipContent className="px-3 py-1.5 rounded-md bg-white text-black text-xs">
                        <p className="font-semibold">
                          {day.count === 0
                            ? "No contributions"
                            : `${day.count} contributions`}
                        </p>
                        <p className="text-[10px] opacity-70">{day.date}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
}
