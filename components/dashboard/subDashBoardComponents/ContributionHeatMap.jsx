"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { chunkWeeks, getContributionLevel } from "@/utils/githubUtils";

export default function ContributionHeatmap({ contributions, year}) {
  // 🔹 memoize everything expensive
  const { weeks, monthLabels, total, today } = useMemo(() => {
    if (!contributions?.length) {
      return {
        weeks: [],
        monthLabels: [],
        total: 0,
        today: null,
      };
    }

    const weeks = chunkWeeks(contributions);

    const monthLabels = weeks.map((week, i) => {
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
    };
  }, [contributions]);

  if (!weeks.length) return null;

  return (
    <div className="p-4 sm:p-5">
      <h3 className="text-sm font-semibold text-white mb-4 tracking-tight">
        Contribution Activity · {year}
      </h3>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center text-xs text-gray-400 mb-4">
        <Stat label="Total" value={total} />
        <Stat label="Current Year" value={year} />
        <Stat
          label="Days Active"
          value={contributions.filter((d) => d.count > 0).length}
        />
      </div>

      {/* Heatmap */}
      <div className="overflow-x-auto pb-2 hide-scrollbar">
        <TooltipProvider>
          {/* Month labels */}
          <div className="hidden md:flex ml-1 mb-1">
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
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.08 }}
                          className={`w-2.5 h-2.5 rounded-[2px] border
                            ${isToday ? "border-white/80" : "border-black/20"}
                            ${intensity}`}
                        />
                      </TooltipTrigger>

                      <TooltipContent className="px-3 py-1.5  bg-[#111] border border-white/10 text-white text-xs">
                        <p className="font-medium">
                          {day.count === 0
                            ? "No contributions"
                            : `${day.count} contributions`}
                        </p>
                        <p className="text-[10px] text-gray-400">{day.date}</p>
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


function Stat({ label, value }) {
  return (
    <div className="px-3 py-2 bg-[#0f0f0f] border border-white/10 rounded-md">
      <p className="text-white font-semibold text-sm">{value}</p>
      <p className="text-[10px] mt-1">{label}</p>
    </div>
  );
}
