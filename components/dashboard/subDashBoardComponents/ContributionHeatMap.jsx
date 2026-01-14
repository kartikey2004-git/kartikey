"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  chunkWeeks,
  computeStreaks,
  getContributionLevel,
} from "@/utils/githubUtils";

export default function ContributionHeatmap({ contributions, year }) {
  const { weeks, monthLabels, total, today, currentStreak, longestStreak } =
    useMemo(() => {
      if (!contributions?.length) {
        return {
          weeks: [],
          monthLabels: [],
          total: 0,
          today: null,
          currentStreak: 0,
          longestStreak: 0,
        };
      }

      const weeks = chunkWeeks(contributions);
      const streaks = computeStreaks(contributions);

      const monthLabels = weeks.map((week) => {
        const firstValid = week.find((d) => !d.pad);
        if (!firstValid) return "";
        return new Date(firstValid.date).toLocaleString("en-US", {
          month: "short",
        });
      });

      return {
        weeks,
        monthLabels,
        total: contributions.reduce((s, d) => s + d.count, 0),
        today: contributions[contributions.length - 1].date,
        currentStreak: streaks.currentStreak,
        longestStreak: streaks.longestStreak,
      };
    }, [contributions]);

  if (!weeks.length) return null;

  return (
    <div className="w-full">
      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-5 tracking-tight">
          Contribution Activity · {year}
        </h3>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center mb-6">
          <Stat label="Total Contributions" value={total} />
          <Stat label="Year" value={year} />
      
          <Stat label="Longest Streak" value={longestStreak} />
          <Stat
            label="Days Active"
            value={contributions.filter((d) => d.count > 0).length}
          />
        </div>

        {/* ================= HEATMAP ================= */}
        <div className="relative w-full overflow-x-auto pb-3 hide-scrollbar">
          <TooltipProvider delayDuration={50}>
            {/* Month labels */}
            <div className="hidden md:flex ml-1 mb-2">
              {monthLabels.map((m, i) => (
                <div
                  key={i}
                  className="text-xs sm:text-sm text-gray-400 w-4 mr-1"
                >
                  {i === 0 || m !== monthLabels[i - 1] ? m : ""}
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="min-w-full">
              <div className="flex gap-1 w-max">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="grid grid-rows-7 gap-1">
                    {week.map((day, dIdx) => {
                      if (day.pad) {
                        return (
                          <div
                            key={dIdx}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                          />
                        );
                      }

                      const intensity = getContributionLevel(day.count);
                      const isToday = day.date === today;

                      return (
                        <Tooltip key={dIdx}>
                          <TooltipTrigger asChild className="font-extralight">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.08 }}
                              className={`
                                w-3.5 h-3.5 sm:w-4 sm:h-4
                                rounded-[3px]
                                border
                                ${
                                  isToday
                                    ? "border-white/80"
                                    : "border-white/5"
                                }
                                ${intensity}
                              `}
                            />
                          </TooltipTrigger>

                          <TooltipContent className="px-3 py-1.5 bg-[#111] border border-white/10 text-white text-xs">
                            <p className="font-medium">
                              {day.count === 0
                                ? "No contributions"
                                : `${day.count} contributions`}
                            </p>
                            <p className="text-[11px] text-gray-400">
                              {day.date}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="px-3 py-3 bg-[#0f0f0f] border border-white/10 rounded-md">
      <p className="text-white font-semibold text-base sm:text-lg">{value}</p>
      <p className="text-xs sm:text-sm mt-1 text-gray-400">{label}</p>
    </div>
  );
}
