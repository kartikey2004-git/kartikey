import Link from "next/link";
import { Clock } from "lucide-react";

export function RelatedPosts({ posts }) {
  if (!posts?.length) return null;

  return (
    <section className="mt-12 border-t border-border/50 pt-8" aria-label="Related posts">
      <h2 className="heading-sm">Next recommended read</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-md border border-border/50 transition-colors hover:border-border"
          >
            <div className="flex flex-1 flex-col gap-1.5 p-3">
              <h3 className="line-clamp-2 text-sm font-medium text-foreground">{post.title}</h3>
              <p className="line-clamp-2 text-xs text-muted-foreground">{post.description}</p>
              {post.readTime ? (
                <span className="mt-auto inline-flex items-center gap-1 pt-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {post.readTime} min read
                </span>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
