"use client";

import { useLocalStorage } from "usehooks-ts";
import { Minus, Plus, RotateCcw, AlignJustify, MoveHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  TYPOGRAPHY_PREFS_KEY,
  DEFAULT_TYPOGRAPHY_PREFS,
  FONT_SCALE_MIN,
  FONT_SCALE_MAX,
  FONT_SCALE_STEP,
  LINE_HEIGHT_MIN,
  LINE_HEIGHT_MAX,
  LINE_HEIGHT_STEP,
  WIDTH_OPTIONS,
} from "@/lib/reading-storage";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function TypographyControls() {
  const [prefs, setPrefs] = useLocalStorage(TYPOGRAPHY_PREFS_KEY, DEFAULT_TYPOGRAPHY_PREFS, {
    initializeWithValue: false,
  });

  function adjustFontScale(delta) {
    setPrefs((prev) => ({
      ...prev,
      fontScale: Number(clamp(prev.fontScale + delta, FONT_SCALE_MIN, FONT_SCALE_MAX).toFixed(2)),
    }));
  }

  function adjustLineHeight(delta) {
    setPrefs((prev) => ({
      ...prev,
      lineHeight: Number(clamp(prev.lineHeight + delta, LINE_HEIGHT_MIN, LINE_HEIGHT_MAX).toFixed(2)),
    }));
  }

  function cycleWidth() {
    setPrefs((prev) => {
      const nextIndex = (WIDTH_OPTIONS.indexOf(prev.width) + 1) % WIDTH_OPTIONS.length;
      return { ...prev, width: WIDTH_OPTIONS[nextIndex] };
    });
  }

  function reset() {
    setPrefs(DEFAULT_TYPOGRAPHY_PREFS);
  }

  return (
    <div
      className="flex flex-wrap items-center gap-1 rounded-md p-1"
      role="group"
      aria-label="Typography controls"
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Decrease font size"
            onClick={() => adjustFontScale(-FONT_SCALE_STEP)}
          >
            <Minus className="h-3.5 w-3.5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Decrease font size</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Increase font size"
            onClick={() => adjustFontScale(FONT_SCALE_STEP)}
          >
            <Plus className="h-3.5 w-3.5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Increase font size</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Decrease line height"
            onClick={() => adjustLineHeight(-LINE_HEIGHT_STEP)}
          >
            <AlignJustify className="h-3.5 w-3.5 scale-y-75" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Decrease line height</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label="Increase line height"
            onClick={() => adjustLineHeight(LINE_HEIGHT_STEP)}
          >
            <AlignJustify className="h-3.5 w-3.5 scale-y-125" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Increase line height</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={`Content width: ${prefs.width}`}
            onClick={cycleWidth}
          >
            <MoveHorizontal className="h-3.5 w-3.5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Content width: {prefs.width}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button type="button" variant="ghost" size="icon-sm" aria-label="Reset typography" onClick={reset}>
            <RotateCcw className="h-3.5 w-3.5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Reset</TooltipContent>
      </Tooltip>
    </div>
  );
}
