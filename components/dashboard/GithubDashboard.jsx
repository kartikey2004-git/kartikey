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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useEffect } from "react";

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
    return (
      <div className="p-4 text-sm text-muted-foreground rounded-md">
        Loading contributions...
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="border border-border bg-card p-4 text-sm text-muted-foreground rounded-md">
        No contribution data available
      </div>
    );
  }

  return (
    <div className="w-full min-w-0 space-y-3 bg-transparent">
      {/* Year Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10">
        <h3 className="text-base font-semibold text-foreground sm:text-xl">
          GitHub Contributions
        </h3>
        <Select
          value={selectedYear.toString()}
          onValueChange={(value) => setSelectedYear(parseInt(value))}
        >
          <SelectTrigger className="w-full sm:w-28 border border-border rounded-sm text-xs">
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
        <div className="w-full overflow-hidden">
          <ContributionGraph
            data={data}
            blockSize={10}
            blockMargin={2}
            style={{
              '--block-size': '10px',
              '--block-margin': '2px'
            }}
            className="
              [--block-size:10px] [--block-margin:2px] 
              xs:[--block-size:11px] xs:[--block-margin:2.2px] 
              sm:[--block-size:13px] sm:[--block-margin:2.5px] 
              md:[--block-size:15px] md:[--block-margin:3px] 
              lg:[--block-size:17px] lg:[--block-margin:3.5px] 
              xl:[--block-size:19px] xl:[--block-margin:4px]
              2xl:[--block-size:21px] 2xl:[--block-margin:4.5px]
            "
          >
            <ContributionGraphCalendar>
              {({ activity, dayIndex, weekIndex }) => (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <g>
                      <ContributionGraphBlock
                        activity={activity}
                        className="dark:data-[level='0']:fill-[#161b22] dark:data-[level='1']:fill-[#0e4429] dark:data-[level='2']:fill-[#006d32] dark:data-[level='3']:fill-[#26a641] dark:data-[level='4']:fill-[#39d353] data-[level='0']:fill-[#ebedf0] data-[level='1']:fill-[#9be9a8] data-[level='2']:fill-[#40c463] data-[level='3']:fill-[#30a14e] data-[level='4']:fill-[#216e39]"
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
