"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";

import OverviewPanel from "./subDashBoardComponents/OverViewPanel";
import GithubStreakCard from "./subDashBoardComponents/GithubStreakCard";
import GithubAnalyticsPanel from "./subDashBoardComponents/GithubAnalyticsPanel";
import ContributionHeatmap from "./subDashBoardComponents/ContributionHeatMap";

export default function GithubDashboard({ username = "kartikey2004-git" }) {
  const [data, setData] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    let mounted = true;

    fetch(`/api/github?username=${username}&year=all`)
      .then((r) => r.json())
      .then((json) => {
        if (!mounted) return;

        const years = Object.keys(json.contributionsByYear)
          .map(Number)
          .sort((a, b) => b - a);

        setSelectedYear(years[0]);
        setData(json);
      });

    return () => {
      mounted = false;
    };
  }, [username]);

  const yearData = useMemo(() => {
    if (!data || !selectedYear) return null;
    return data.contributionsByYear[selectedYear];
  }, [data, selectedYear]);

  if (!data || !yearData) {
    return (
      <div className="w-full max-w-5xl mx-auto mt-8 rounded-xl bg-[#111] p-6 text-white flex items-center gap-3">
        <Loader2 className="animate-spin" size={18} />
        Fetching GitHub data…
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
      <div className="flex gap-2 flex-wrap">
        {Object.keys(data.contributionsByYear)
          .sort((a, b) => b - a)
          .map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(Number(year))}
              className={`px-3 py-1 rounded-sm text-sm transition
                ${
                  selectedYear === Number(year)
                    ? "bg-white text-black"
                    : "bg-[#0f0f0f] text-zinc-300 hover:bg-zinc-950"
                }`}
            >
              {year}
            </button>
          ))}
      </div>

      <div className="bg-[#111]  rounded-lg">
        <OverviewPanel
          profile={data.profile}
          year={selectedYear}
          totalContributions={yearData.totalContributions}
        />

        <GithubStreakCard
          contributions={yearData.contributions}
          year={selectedYear}
        />

        <GithubAnalyticsPanel
          contributions={yearData.contributions}
          year={selectedYear}
        />

        <ContributionHeatmap
          contributions={yearData.contributions}
          year={selectedYear}
        />
      </div>
    </div>
  );
}
