"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useReadingExperience } from "@/components/blog/ReadingExperienceContext";

const MILESTONES = [
  { at: 25, message: "You're getting into it" },
  { at: 50, message: "Halfway there." },
  { at: 75, message: "Almost finished." },
  { at: 100, message: "You made it" },
];

// Fires each milestone toast at most once per article view (the fired-set
// resets naturally since <ReadingExperience> remounts with key={slug}).
export function MilestoneToasts() {
  const { percent } = useReadingExperience();
  const firedRef = useRef(new Set());

  useEffect(() => {
    for (const milestone of MILESTONES) {
      if (percent >= milestone.at && !firedRef.current.has(milestone.at)) {
        firedRef.current.add(milestone.at);
        toast(milestone.message, { duration: 3000 });
      }
    }
  }, [percent]);

  return null;
}
