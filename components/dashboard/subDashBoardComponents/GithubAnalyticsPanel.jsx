"use client";

import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Progress } from "@/components/ui/progress";

export default function GithubAnalyticsPanel({ data }) {
  const { profile, contributions } = data;

  // Last 30 days contributions
  const last30 = contributions.slice(-180);

  // Convert data for Recharts
  const chartData = useMemo(() => {
    return last30.map((d) => {
      const date = new Date(d.date);
      const formatted = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      }); // "20 Nov"

      return {
        date: formatted,
        value: d.count,
      };
    });
  }, [last30]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || payload.length === 0) return null;

    return (
      <div className="bg-[#111] border border-[#333] px-3 py-2 rounded text-white text-xs">
        <p className="font-semibold">{payload[0].payload.date}</p>
        <p className="text-gray-300">{payload[0].value} commits</p>
      </div>
    );
  };

  return (
    <div className="p-5 bg-[#0d0d0d] border border-[#1a1a1a]">
      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">
        Analytics Overview
      </h3>

      <div className="space-y-6">
        {/* Sparkline */}
        <div>
          <p className="text-sm text-gray-400 mb-2">
            Contributions (Last 30 Days)
          </p>

          <div className="w-full h-24">
            <ResponsiveContainer>
              <LineChart
                data={chartData}
                margin={{ left: 0, right: 0, top: 10, bottom: 0 }}
              >
                {/* Subtle box grid */}
                <CartesianGrid
                  stroke="#1b1b1b"
                  strokeWidth={1}
                  strokeDasharray="0"
                  vertical={true}
                  horizontal={true}
                  opacity={0.52} // soft, gentle
                />

                {/* Moderate number of boxes */}
                <XAxis
                  dataKey="date"
                  hide
                  interval={3} // less vertical boxes
                />

                <YAxis
                  hide
                  domain={["dataMin - 1", "dataMax + 1"]}
                  tickCount={100} // fewer horizontal lines
                />

                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ stroke: "#333", strokeWidth: 1 }}
                />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#fff"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Languages */}
        <div>
          <p className="text-sm text-gray-400 mb-3">Top Languages</p>

          <div className="space-y-4">
            {profile.languages.map((lang) => {
              const totalSize = profile.languages.reduce(
                (sum, l) => sum + l.size,
                0
              );

              const percent = (lang.size / totalSize) * 100;

              return (
                <div key={lang.name} className="space-y-1.5">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3.5 h-3.5 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-white text-sm">{lang.name}</span>
                    </div>

                    <span className="text-xs text-gray-400">
                      {percent.toFixed(1)}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <Progress
                    value={percent}
                    className="h-2 bg-white/10"
                    indicatorClassName="bg-white"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
