"use client";

import { useEffect, useState } from "react";
import ContributionHeatmap from "./subDashBoardComponents/ContributionHeatMap";
import GithubAnalyticsPanel from "./subDashBoardComponents/GithubAnalyticsPanel";
import GithubStreakCard from "./subDashBoardComponents/GithubStreakCard";
import OverviewPanel from "./subDashBoardComponents/OverViewPanel";

export default function GithubDashboard({ username = "kartikey2004-git" }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/github?username=${username}`)
      .then((r) => r.json())
      .then((json) => {
        json.contributions = json.contributions.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setData(json);
      });
  }, []);

  if (!data) {
    return (
      <div className="text-gray-400 text-sm tracking-tight">
        Loading GitHub data…
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Overview */}
      <div className="rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] p-4">
        <OverviewPanel data={data} />
      </div>

      {/* Analytics */}
      <div className="rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] p-4">
        <GithubAnalyticsPanel data={data} />
      </div>

      {/* Heatmap + Streak */}
      <div className="grid grid-cols-1 gap-4">
        <div className="rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] p-4">
          <GithubStreakCard data={data} />
        </div>

        <div className="rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] p-4">
          <ContributionHeatmap data={data} />
        </div>
      </div>
    </div>
  );
}
