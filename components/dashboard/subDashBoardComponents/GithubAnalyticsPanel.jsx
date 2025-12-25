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
  const { contributions } = data;

  const last30 = contributions.slice(-180);

  const chartData = useMemo(() => {
    return last30.map((d) => {
      const date = new Date(d.date);
      const formatted = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      });

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
    <div className="p-5">
      <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">
        Analytics Overview
      </h3>

      <div className="space-y-6">
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
                <CartesianGrid
                  stroke="#1b1b1b"
                  strokeWidth={1}
                  strokeDasharray="0"
                  vertical={true}
                  horizontal={true}
                  opacity={0.52}
                />

                <XAxis dataKey="date" hide interval={5} />

                <YAxis
                  hide
                  domain={["dataMin - 1", "dataMax + 1"]}
                  tickCount={90} 
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
      </div>
    </div>
  );
}
