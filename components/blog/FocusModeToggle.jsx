"use client";

import { useLocalStorage } from "usehooks-ts";
import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FOCUS_MODE_KEY } from "@/lib/reading-storage";

export function FocusModeToggle() {
  const [focusMode, setFocusMode] = useLocalStorage(FOCUS_MODE_KEY, false, {
    initializeWithValue: false,
  });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={focusMode ? "Exit focus mode" : "Enter focus mode"}
          aria-pressed={focusMode}
          onClick={() => setFocusMode((prev) => !prev)}
        >
          {focusMode ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{focusMode ? "Exit focus mode (F)" : "Focus mode (F)"}</TooltipContent>
    </Tooltip>
  );
}
