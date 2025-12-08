"use client";

import { useEffect, useState } from "react";
import ContributionHeatmap from "./subDashBoardComponents/ContributionHeatMap";
import GithubAnalyticsPanel from "./subDashBoardComponents/GithubAnalyticsPanel";
import GithubStreakCard from "./subDashBoardComponents/GithubStreakCard";
import OverviewPanel from "./subDashBoardComponents/OverViewPanel";
import { Loader2 } from "lucide-react";

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
      <div className="w-full max-w-4xl mx-auto p-5 bg-[#111] rounded-xl text-white mt-8 flex items-center gap-3">
        <Loader2 className="animate-spin" size={20} />
        Fetching Github data…
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
