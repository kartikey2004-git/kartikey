"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useEffect } from "react";

const maxLevel = 4;

const GithubDashboard = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [availableYears, setAvailableYears] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch("/api/github");
        const contributions = await response.json();

        // Extract available years from the data
        const years = [
          ...new Set(contributions.map((item) => item.date.split("-")[0])),
        ].sort((a, b) => b - a); // Sort descending (most recent first)

        setAvailableYears(years);
        setAllData(contributions);

        // Filter to show selected year's contributions
        const yearData = contributions.filter((item) =>
          item.date.startsWith(selectedYear.toString()),
        );

        setData(yearData);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  useEffect(() => {
    if (allData.length > 0) {
      // Filter data when year changes
      const yearData = allData.filter((item) =>
        item.date.startsWith(selectedYear.toString()),
      );
      setData(yearData);
    }
  }, [selectedYear, allData]);

  if (loading) {
    return <div className="p-4">Loading contributions...</div>;
  }

  if (data.length === 0) {
    return <div className="p-4">No contribution data available</div>;
  }

  return (
    <div className="space-y-4 w-full min-w-0">
      {/* Year Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground">
          GitHub Contributions
        </h3>
        <Select
          value={selectedYear.toString()}
          onValueChange={(value) => setSelectedYear(parseInt(value))}
        >
          <SelectTrigger className="w-full sm:w-[120px]">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            {availableYears.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Contribution Graph */}
      <TooltipProvider>
        <div className="min-w-5xl overflow-x-auto thin-scrollbar">
          <ContributionGraph data={data}>
            <ContributionGraphCalendar>
              {({ activity, dayIndex, weekIndex }) => (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <g>
                      <ContributionGraphBlock
                        activity={activity}
                        className={cn(
                          'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                          'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                          'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                          'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                          'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]',
                        )}
                        dayIndex={dayIndex}
                        weekIndex={weekIndex}
                      />
                    </g>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-semibold">{activity.date}</p>
                    <p>{activity.count} contributions</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </ContributionGraphCalendar>
            <ContributionGraphFooter>
              <ContributionGraphTotalCount />
              <ContributionGraphLegend />
            </ContributionGraphFooter>
          </ContributionGraph>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default GithubDashboard;
