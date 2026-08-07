import { stripMarkdown, extractHeadings } from "@/lib/search";

const STOPWORDS = new Set([
  "the", "and", "for", "with", "this", "that", "from", "into", "have",
  "your", "will", "when", "what", "how", "why", "are", "was", "were",
  "can", "use", "using", "used", "one", "two", "also", "more", "than",
  "then", "they", "them", "its", "of", "to", "in", "on", "at", "by",
  "is", "be", "as", "or", "but", "not", "you", "we", "our", "all",
  "about", "which", "their", "there", "here", "such", "some", "any",
  "these", "those", "just", "like", "make", "made", "get", "gets",
]);

function stripFencedCode(content) {
  return content.replace(/```[\s\S]*?```/g, " ");
}

function tokenize(text = "") {
  return text
    .split(/[^a-zA-Z0-9+#.]+/)
    .map((token) => token.replace(/^\.+|\.+$/g, ""))
    .filter(
      (token) =>
        token.length >= 3 &&
        !/^\d+$/.test(token) &&
        !STOPWORDS.has(token.toLowerCase())
    );
}

function addTokens(map, text, weight) {
  for (const token of tokenize(text)) {
    const key = token.toLowerCase();
    const existing = map.get(key);
    if (existing) {
      existing.weight += weight;
    } else {
      map.set(key, { weight, display: token });
    }
  }
}

// Auto-derives keywords since the CMS has no tags/category field. Weighted
// frequency across title, headings, and emphasized/code terms — good enough
// to power clickable keyword pills and related-post matching without a
// backend change.
export function extractKeywords(content = "", title = "", { limit = 8 } = {}) {
  const map = new Map();

  addTokens(map, title, 3);

  for (const heading of extractHeadings(content)) {
    if (heading.level <= 3) addTokens(map, heading.text, 2);
  }

  const withoutFences = stripFencedCode(content);

  const boldMatches = withoutFences.match(/(\*\*|__)(.+?)\1/g) || [];
  for (const match of boldMatches) {
    addTokens(map, match.replace(/^\*\*|\*\*$|^__|__$/g, ""), 1.5);
  }

  const inlineCodeMatches = withoutFences.match(/`([^`]+)`/g) || [];
  for (const match of inlineCodeMatches) {
    addTokens(map, match.replace(/`/g, ""), 1.5);
  }

  return [...map.entries()]
    .sort((a, b) => b[1].weight - a[1].weight)
    .slice(0, limit)
    .map(([, value]) => value.display);
}

export function countWords(content = "") {
  return stripMarkdown(content).split(/\s+/).filter(Boolean).length;
}

function countParagraphs(content = "") {
  const withoutFences = content.replace(/```[\s\S]*?```/g, "\n\n");
  return withoutFences
    .split(/\n\s*\n/)
    .filter((block) => {
      const trimmed = block.trim();
      if (!trimmed) return false;
      if (/^#{1,6}\s/.test(trimmed)) return false;
      if (/^[-*+]\s/.test(trimmed)) return false;
      if (/^\d+\.\s/.test(trimmed)) return false;
      if (/^>/.test(trimmed)) return false;
      if (/^\|/.test(trimmed)) return false;
      return true;
    }).length;
}

export function computeReadingStats(content = "", cmsReadTime) {
  const plain = stripMarkdown(content);
  const wordCount = plain.split(/\s+/).filter(Boolean).length;
  const charCount = plain.length;
  const imageCount = (content.match(/!\[[^\]]*\]\([^)]*\)/g) || []).length;
  const codeBlockCount = (content.match(/```[\s\S]*?```/g) || []).length;
  const paragraphCount = countParagraphs(content);
  const readingTimeMinutes = cmsReadTime || Math.max(1, Math.ceil(wordCount / 200));

  return { readingTimeMinutes, wordCount, charCount, paragraphCount, imageCount, codeBlockCount };
}

// Ranks by overlap of auto-extracted keywords; falls back to latest posts
// when nothing overlaps (CMS has no tags/category to match on directly).
export function rankRelatedPosts(currentBlog, allBlogs = [], { limit = 3 } = {}) {
  const currentKeywords = new Set(
    extractKeywords(currentBlog.content, currentBlog.title, { limit: 12 }).map((k) => k.toLowerCase())
  );

  const candidates = allBlogs.filter((blog) => blog.slug !== currentBlog.slug);

  const scored = candidates.map((blog) => {
    const keywords = extractKeywords(blog.content, blog.title, { limit: 12 }).map((k) => k.toLowerCase());
    const score = keywords.filter((k) => currentKeywords.has(k)).length;
    return { blog, score };
  });

  const hasOverlap = scored.some((entry) => entry.score > 0);

  const sorted = hasOverlap
    ? scored.sort(
        (a, b) => b.score - a.score || new Date(b.blog.createdAt) - new Date(a.blog.createdAt)
      )
    : scored.sort((a, b) => new Date(b.blog.createdAt) - new Date(a.blog.createdAt));

  return sorted.slice(0, limit).map(({ blog }) => ({
    slug: blog.slug,
    title: blog.title,
    description: blog.description,
    coverImage: blog.coverImage ?? null,
    readTime: blog.readTime ?? null,
    createdAt: blog.createdAt,
  }));
}
