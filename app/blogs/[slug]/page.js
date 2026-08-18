import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { getBlogBySlug, getBlogs } from "@/lib/blogs";
import { extractHeadings } from "@/lib/search";
import { countWords, computeReadingStats, extractKeywords, rankRelatedPosts } from "@/lib/blog-reading";
import PathnameDisplay from "@/components/PathnameDisplay";
import BlogContent from "@/components/BlogContent";
import BlogViewTracker from "@/components/BlogViewTracker";
import { ReadingExperience, ArticleScrollBoundary, BlogPostWidthWrapper } from "@/components/blog/ReadingExperience";
import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar";
import { WordsLeftCounter } from "@/components/blog/WordsLeftCounter";
import { MilestoneToasts } from "@/components/blog/MilestoneToasts";
import { KeywordPills } from "@/components/blog/KeywordPills";
import { KeyboardShortcuts } from "@/components/blog/KeyboardShortcuts";
import { FocusModeToggle } from "@/components/blog/FocusModeToggle";
import { TypographyControls } from "@/components/blog/TypographyControls";
import { ReadingStreakBadge } from "@/components/blog/ReadingStreakBadge";
import { HighlightToolbar } from "@/components/blog/HighlightToolbar";
import { SavedHighlightsPanel } from "@/components/blog/SavedHighlightsPanel";
import { ResumePrompt } from "@/components/blog/ResumePrompt";
import { ReadingStatsPanel } from "@/components/blog/ReadingStatsPanel";
import { RelatedPosts } from "@/components/blog/RelatedPosts";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: "Blog not found" };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://kartikey.dev/blogs/${blog.slug}`,
      type: "article",
    },
  };
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const [blog, blogs] = await Promise.all([getBlogBySlug(slug), getBlogs()]);

  if (!blog) notFound();

  const wordCount = countWords(blog.content);
  const readingStats = computeReadingStats(blog.content, blog.readTime);
  const keywords = extractKeywords(blog.content, blog.title);
  let headings = extractHeadings(blog.content).filter((heading) => heading.level === 2);
  if (headings.length === 0) {
    headings = extractHeadings(blog.content).filter((heading) => heading.level === 3);
  }
  const relatedPosts = rankRelatedPosts(blog, blogs, { limit: 3 });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlogPostWidthWrapper>
        <PathnameDisplay />

        <ReadingExperience key={blog.slug} slug={blog.slug} totalWords={wordCount} headings={headings}>
          <ReadingProgressBar />

          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to blogs
          </Link>

          <article>
            <header className="mb-10">
              <h1 className="text-2xl font-semibold sm:text-3xl text-foreground">{blog.title}</h1>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{blog.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <time>{formatDate(blog.publishedAt || blog.createdAt)}</time>
                {blog.readTime ? (
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {blog.readTime} min read
                  </span>
                ) : null}
                <BlogViewTracker slug={blog.slug} />
                <ReadingStreakBadge />
                <FocusModeToggle />
              </div>

              <div className="mt-4">
                <TypographyControls />
              </div>
            </header>

            <ArticleScrollBoundary>
              <BlogContent content={blog.content} />
            </ArticleScrollBoundary>

            <SavedHighlightsPanel />
            <RelatedPosts posts={relatedPosts} />
          </article>

          <WordsLeftCounter />
          <MilestoneToasts />
          <KeyboardShortcuts />
          <HighlightToolbar />
          <ResumePrompt />
        </ReadingExperience>
      </BlogPostWidthWrapper>
    </div>
  );
}
