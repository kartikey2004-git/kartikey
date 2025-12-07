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
    <div className="flex flex-col">
      {/* Overview */}
      <div className="">
        <div className="w-full overflow-x-auto">
          <OverviewPanel data={data} />
        </div>
      </div>

      {/* Analytics */}
      <div className="">
        <div className="w-full overflow-x-auto">
          <GithubAnalyticsPanel data={data} />
        </div>
      </div>

      {/* Heatmap + Streak */}
      <div className="grid grid-cols-1">
        <div className="bg-[#0c0c0c]">
          <div className="w-full overflow-x-auto">
            {/* <GithubStreakCard data={data} /> */}
          </div>
        </div>

        <div className="">
          <div className="w-full overflow-x-auto">
            <ContributionHeatmap data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
