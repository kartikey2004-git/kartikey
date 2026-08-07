import { Badge } from "@/components/ui/badge";

// Keywords are auto-extracted from content (no tags/category field on the
// CMS) and, per spec, clicking one opens a ChatGPT search in a new tab.
export function KeywordPills({ keywords }) {
  if (!keywords?.length) return null;

  return (
    <div className="flex flex-wrap gap-1.5" aria-label="Keywords">
      {keywords.map((keyword) => (
        <Badge key={keyword} asChild variant="outline" className={"border-none"}>
          <a
            href={`https://chatgpt.com/?q=${encodeURIComponent(keyword)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {keyword}
          </a>
        </Badge>
      ))}
    </div>
  );
}
