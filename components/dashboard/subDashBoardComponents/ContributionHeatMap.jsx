"use client";

import React, { useMemo } from "react";
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

  const total = useMemo(
    () => contributions.reduce((s, d) => s + d.count, 0),
    [contributions]
  );

  const monthLabels = useMemo(() => {
    return weeks.map((week, i) => {
      const firstValid = week.find((d) => !d.pad);
      if (!firstValid) return "";

      const date = new Date(firstValid.date);
      const month = date.toLocaleString("en-US", { month: "short" });
      return month;
    });
  }, [weeks]);

  const today = contributions[contributions.length - 1].date;

  return (
    <div className="p-5">
      <h3 className="text-lg font-semibold text-white mb-4 tracking-tight sm:text-lg">
        Contribution Activity
      </h3>

      <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-400 mb-4 sm:text-sm">
        <div className="px-3 py-2 bg-[#111] border border-[#1f1f1f]">
          <p className="text-white font-semibold text-base">{total}</p>
          <p className="text-[10px] mt-1">Total Contributions</p>
        </div>

        <div className="px-3 py-2 bg-[#111] border border-[#1f1f1f]">
          <p className="text-white font-semibold text-base">
            {streaks.currentStreak}
          </p>
          <p className="text-[10px] mt-1">Current Streak (Days)</p>
        </div>

        <div className="px-3 py-2 bg-[#111] border border-[#1f1f1f]">
          <p className="text-white font-semibold text-base">
            {streaks.longestStreak}
          </p>
          <p className="text-[10px] mt-1">Longest Streak (Days)</p>
        </div>
      </div>

      <div className="flex gap-3 sm:gap-3">
        <div className="overflow-x-auto pb-2 sm:pb-2 hide-scrollbar">
          <TooltipProvider>
            <div className="flex ml-1 mb-1">
              {monthLabels.map((m, i) => (
                <div
                  key={i}
                  className="text-[10px] text-gray-500 text-left sm:w-4 w-3 mx-px"
                >
                  {i === 0 || m !== monthLabels[i - 1] ? m : ""}
                </div>
              ))}
            </div>

            <div className="flex gap-0.5 sm:gap-0.75">
              {weeks.map((week, wIdx) => (
                <div
                  key={wIdx}
                  className="grid grid-rows-7 gap-0.5 sm:gap-0.75"
                >
                  {week.map((day, dIdx) => {
                    if (day.pad) {
                      return (
                        <div
                          key={day.date + dIdx}
                          className="h-3 sm:h-3 sm:w-3 w-2.5"
                        ></div>
                      );
                    }

                    const intensity = getContributionLevel(day.count);
                    const isToday = day.date === today;

                    return (
                      <Tooltip key={day.date + dIdx}>
                        <TooltipTrigger asChild>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.12 }}
                            className={`h-3 w-3 sm:h-3 sm:w-3 rounded-[2px] border ${
                              isToday ? "border-white/80" : "border-black/20"
                            } ${intensity}`}
                          />
                        </TooltipTrigger>

                        <TooltipContent className="px-3 py-1.5 rounded-md bg-white text-black text-xs shadow-lg">
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

            {streaks.currentStreak > 0 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: streaks.currentStreak * 4 }}
                transition={{ duration: 0.3 }}
                className="h-0.5 bg-white/50 rounded-full sm:mt-3 mt-2"
              />
            )}
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
