"use client";

import { useMemo } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function GithubAnalyticsPanel({ contributions, year }) {
  const last30Days = useMemo(() => {
    if (!contributions?.length) return [];
    return contributions.slice(-180);
  }, [contributions]);

  const chartData = useMemo(() => {
    return last30Days.map((d) => {
      const date = new Date(d.date);
      return {
        label: date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
        }),
        value: d.count,
      };
    });
  }, [last30Days]);

  if (!chartData.length) return null;

  return (
    <div className="p-5">
      <h3 className="text-sm font-semibold text-white mb-4 tracking-tight">
        Analytics · Last 180 Days ({year})
      </h3>

      <div className="w-full h-28">
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid
              stroke="#1b1b1b"
              strokeWidth={1}
              vertical
              horizontal
              opacity={0.5}
            />

            <XAxis dataKey="label" hide interval={5} />

            <YAxis hide domain={[0, "dataMax + 1"]} tickCount={90} />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#333", strokeWidth: 1 }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#ffffff"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-md bg-[#111] border border-white/10 px-3 py-2 text-xs text-white">
      <p className="font-medium">{payload[0].payload.label}</p>
      <p className="text-gray-400">{payload[0].value} contributions</p>
    </div>
  );
}
