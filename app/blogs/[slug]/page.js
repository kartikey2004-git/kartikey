import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { getBlogBySlug, getBlogs } from "@/lib/blogs";
import PathnameDisplay from "@/components/PathnameDisplay";
import BlogContent from "@/components/BlogContent";
import BlogViewTracker from "@/components/BlogViewTracker";

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
  const blog = await getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-3 sm:px-5 lg:px-8 py-16">
        <PathnameDisplay />

        <Link
          href="/blogs"
          className="mb-8 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to blogs
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="text-2xl font-semibold sm:text-3xl text-foreground">
              {blog.title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {blog.description}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <time>{formatDate(blog.publishedAt || blog.createdAt)}</time>
              {blog.readTime ? (
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {blog.readTime} min read
                </span>
              ) : null}
              <BlogViewTracker slug={blog.slug} />
            </div>
          </header>

          <BlogContent content={blog.content} />
        </article>
      </div>
    </div>
  );
}
