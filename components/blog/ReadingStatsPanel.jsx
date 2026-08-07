import { Clock, Type, Hash, AlignLeft, Image as ImageIcon, Code2 } from "lucide-react";

const STATS = [
  { key: "readingTimeMinutes", label: "Reading time", icon: Clock, format: (v) => `${v} min` },
  { key: "wordCount", label: "Words", icon: Type, format: (v) => v.toLocaleString() },
  { key: "charCount", label: "Characters", icon: Hash, format: (v) => v.toLocaleString() },
  { key: "paragraphCount", label: "Paragraphs", icon: AlignLeft, format: (v) => v.toLocaleString() },
  { key: "imageCount", label: "Images", icon: ImageIcon, format: (v) => v.toLocaleString() },
  { key: "codeBlockCount", label: "Code blocks", icon: Code2, format: (v) => v.toLocaleString() },
];

export function ReadingStatsPanel({ stats }) {
  if (!stats) return null;

  return (
    <section
      className="mt-10 grid grid-cols-2 gap-3 border-t border-border/50 pt-6 sm:grid-cols-3"
      aria-label="Reading stats"
    >
      {STATS.map(({ key, label, icon: Icon, format }) => (
        <div key={key} className="flex items-center gap-2 rounded-md border border-border/50 bg-muted/30 p-3">
          <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <div>
            <div className="text-sm font-semibold text-foreground">{format(stats[key])}</div>
            <div className="text-xs text-muted-foreground">{label}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
