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

  // Total yearly contributions
  const total = useMemo(
    () => contributions.reduce((s, d) => s + d.count, 0),
    [contributions]
  );

  // Month labels (first week of each month)
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
    <div className="p-5 bg-[#0d0d0d] border border-[#1a1a1a] shadow-[0_0_25px_-12px_rgba(255,255,255,0.05)] sm:p-5">
      <h3 className="text-lg font-semibold text-white mb-4 tracking-tight sm:text-lg">
        Contribution Activity
      </h3>

      {/* SUMMARY SECTION */}
      <div className="text-xs text-gray-400 mb-4 sm:text-xs text-[10px]">
        <span className="text-white font-medium">{total}</span> contributions in
        the last year •{" "}
        <span className="text-white">{streaks.currentStreak} day streak</span>{" "}
        (Longest: {streaks.longestStreak})
      </div>

      <div className="flex gap-5 sm:gap-5">
        {/* WEEKDAY LABELS */}
        <div className="flex flex-col justify-between text-gray-500 py-1 pr-1 leading-tight sm:text-[10px] text-[8px]">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* GRAPH */}
        <div className="overflow-x-auto pb-4 sm:pb-4">
          <TooltipProvider>
            <div className="flex gap-1 sm:gap-1">
              {/* MONTH LABELS */}
              <div className="flex gap-1 mb-1 sm:ml-7 ml-5">
                {monthLabels.map((m, i) => (
                  <div
                    key={i}
                    className="text-[10px] text-gray-500 text-left sm:w-3.5 w-3"
                  >
                    {i === 0 || m !== monthLabels[i - 1] ? m : ""}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-1 sm:gap-1">
              {weeks.map((week, wIdx) => (
                <div
                  key={wIdx}
                  className="grid grid-rows-7 sm:gap-1 gap-[2px]"
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
                      <motion.div
                        key={day.date + dIdx}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.12 }}
                      >
                        <Tooltip>
                          <TooltipTrigger>
                            <div
                              className={`h-3 w-3 sm:h-3 sm:w-3 rounded-[2px] border ${
                                isToday ? "border-white/80" : "border-black/20"
                              } ${intensity}`}
                            ></div>
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
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </TooltipProvider>

          {/* STREAK LINE */}
          {streaks.currentStreak > 0 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: streaks.currentStreak * 4 }}
              transition={{ duration: 0.3 }}
              className="h-[2px] bg-white/50 rounded-full sm:mt-3 mt-2"
            ></motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
