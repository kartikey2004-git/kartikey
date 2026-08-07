"use client";

import { useEffect, useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function CopyCodeButton({ code, className }) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    const ok = await copy(code);
    if (ok) setCopied(true);
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied to clipboard" : "Copy code"}
          className={cn(
            "inline-flex items-center justify-center rounded-md border border-border/50 bg-background/80 p-1.5 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground hover:border-border",
            className
          )}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </TooltipTrigger>
      <TooltipContent>{copied ? "Copied!" : "Copy"}</TooltipContent>
    </Tooltip>
  );
}
