"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useReadingExperience } from "@/components/blog/ReadingExperienceContext";
import { ResumeReadingTracker } from "@/components/blog/ResumeReadingTracker";
import { resumeKey } from "@/lib/reading-storage";

const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

export function ResumePrompt() {
  const { slug, articleRef } = useReadingExperience();
  const [resume, setResume] = useLocalStorage(resumeKey(slug), null, { initializeWithValue: false });
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  // Runs once on mount, before the debounced tracker (gated by `checked`)
  // gets a chance to overwrite the saved resume point.
  useEffect(() => {
    const isValid =
      resume &&
      resume.scrollPercentage > 5 &&
      resume.scrollPercentage < 95 &&
      Date.now() - resume.timestamp < MAX_AGE_MS;

    if (isValid) setOpen(true);
    setChecked(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleContinue() {
    setOpen(false);
    const el = articleRef.current;
    if (el && resume) {
      const articleTop = el.getBoundingClientRect().top + window.scrollY;
      const target = articleTop + (el.offsetHeight * resume.scrollPercentage) / 100 - window.innerHeight * 0.2;
      window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
    }
  }

  function handleStartOver() {
    setOpen(false);
    setResume(null);
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Resume where you left off?</DialogTitle>
            <DialogDescription>
              You were {resume?.scrollPercentage ?? 0}% through this article.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleStartOver}>
              Start over
            </Button>
            <Button type="button" onClick={handleContinue}>
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ResumeReadingTracker enabled={checked} />
    </>
  );
}
