import GithubSlugger from "github-slugger";

function stripInline(text = "") {
  return text
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function stripMarkdown(markdown = "") {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_~>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Headings get an id via the same slugger algorithm rehype-slug uses when
// rendering the post, so a matched heading can deep-link straight to it.
export function extractHeadings(markdown = "") {
  const slugger = new GithubSlugger();
  const headingLine = /^ {0,3}(#{1,6})\s+(.*)$/;
  return markdown
    .split(/\r?\n/)
    .map((line) => headingLine.exec(line.trim()))
    .filter(Boolean)
    .map((match) => {
      const text = stripInline(match[2]);
      return { level: match[1].length, text, id: slugger.slug(text) };
    })
    .filter((heading) => heading.text.length > 0);
}

export function getSnippet(text, query, radius = 60) {
  if (!text || !query) return null;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return null;

  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + query.length + radius);
  const snippet = text.slice(start, end).trim();

  return `${start > 0 ? "…" : ""}${snippet}${end < text.length ? "…" : ""}`;
}

// Prepares a blog for searching: precompute once when blogs are loaded, not per keystroke.
export function prepareBlogForSearch(blog) {
  const content = blog.content || "";
  return {
    ...blog,
    plainContent: stripMarkdown(content),
    headings: extractHeadings(content),
  };
}

function tokenize(query) {
  return query.trim().toLowerCase().split(/\s+/).filter(Boolean);
}

// Splits `text` on whitespace and checks each word for a case-insensitive
// substring match against any query token (e.g. token "in" matches "Interfaces").
// Returns null when nothing matched, otherwise a list of {text, match} parts
// for rendering with the matched slice highlighted.
export function highlightWords(text, tokens) {
  if (!text || !tokens?.length) return null;

  const segments = text.split(/(\s+)/);
  const parts = [];
  let matched = false;

  for (const segment of segments) {
    if (segment === "" || /^\s+$/.test(segment)) {
      parts.push({ text: segment, match: false });
      continue;
    }

    const lower = segment.toLowerCase();
    let hit = null;
    for (const token of tokens) {
      const idx = lower.indexOf(token);
      if (idx !== -1) {
        hit = { idx, len: token.length };
        break;
      }
    }

    if (hit) {
      matched = true;
      if (hit.idx > 0) parts.push({ text: segment.slice(0, hit.idx), match: false });
      parts.push({ text: segment.slice(hit.idx, hit.idx + hit.len), match: true });
      if (hit.idx + hit.len < segment.length) {
        parts.push({ text: segment.slice(hit.idx + hit.len), match: false });
      }
    } else {
      parts.push({ text: segment, match: false });
    }
  }

  return matched ? parts : null;
}

// Ranks matches per blog: title > description > headings (# / ##) >
// subheadings (###+) > body content, then groups the matched lines under
// their parent blog so a single result can surface several matching headings.
export function searchBlogsGrouped(blogs, query, { maxLinesPerBlog = 6 } = {}) {
  const tokens = tokenize(query);
  if (!tokens.length) return [];

  const RANK = { title: 0, description: 1, heading: 2, subheading: 3, content: 4 };
  const groups = [];

  for (const blog of blogs) {
    const lines = [];

    const titleParts = highlightWords(blog.title, tokens);
    if (titleParts) lines.push({ kind: "title", prefix: null, parts: titleParts, anchor: null });

    const descriptionParts = highlightWords(blog.description, tokens);
    if (descriptionParts) {
      lines.push({ kind: "description", prefix: null, parts: descriptionParts, anchor: null });
    }

    for (const heading of blog.headings ?? []) {
      if (lines.length >= maxLinesPerBlog) break;
      const parts = highlightWords(heading.text, tokens);
      if (parts) {
        lines.push({
          kind: heading.level <= 2 ? "heading" : "subheading",
          prefix: heading.level <= 2 ? "#" : null,
          parts,
          anchor: heading.id,
        });
      }
    }

    if (lines.length === 0) {
      const snippet = getSnippet(blog.plainContent, tokens[0]);
      if (snippet) {
        lines.push({
          kind: "content",
          prefix: null,
          parts: highlightWords(snippet, tokens) ?? [{ text: snippet, match: false }],
          anchor: null,
        });
      }
    }

    if (lines.length > 0) {
      groups.push({
        slug: blog.slug,
        title: blog.title,
        rank: RANK[lines[0].kind],
        lines: lines.slice(0, maxLinesPerBlog),
      });
    }
  }

  return groups.sort((a, b) => a.rank - b.rank);
}

// Flat ranked list (one row per blog) for simpler list UIs like the /blogs page.
export function searchBlogs(blogs, query) {
  const q = query.trim().toLowerCase();
  if (!q) return blogs.map((blog) => ({ ...blog, snippet: null }));

  return blogs
    .map((blog) => {
      const title = blog.title?.toLowerCase() ?? "";
      const description = blog.description?.toLowerCase() ?? "";
      const headings = blog.headings ?? [];
      const plainContent = blog.plainContent ?? "";

      const titleMatch = title.includes(q);
      const descriptionMatch = !titleMatch && description.includes(q);

      const matchedHeading =
        !titleMatch && !descriptionMatch
          ? headings.find((h) => h.level <= 2 && h.text.toLowerCase().includes(q))
          : null;

      const matchedSubheading =
        !titleMatch && !descriptionMatch && !matchedHeading
          ? headings.find((h) => h.level > 2 && h.text.toLowerCase().includes(q))
          : null;

      const contentMatch =
        !titleMatch &&
        !descriptionMatch &&
        !matchedHeading &&
        !matchedSubheading &&
        plainContent.toLowerCase().includes(q);

      if (
        !titleMatch &&
        !descriptionMatch &&
        !matchedHeading &&
        !matchedSubheading &&
        !contentMatch
      ) {
        return null;
      }

      const rank = titleMatch
        ? 0
        : descriptionMatch
          ? 1
          : matchedHeading
            ? 2
            : matchedSubheading
              ? 3
              : 4;

      const snippet =
        matchedHeading?.text ??
        matchedSubheading?.text ??
        (contentMatch ? getSnippet(plainContent, q) : null);

      return { ...blog, rank, snippet };
    })
    .filter(Boolean)
    .sort((a, b) => a.rank - b.rank);
}
