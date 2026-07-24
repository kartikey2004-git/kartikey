import { unstable_cache } from "next/cache";

const BLOGS_API = "https://markstack-app.vercel.app/api/public/blogs";

async function fetchBlogs() {
  try {
    const res = await fetch(BLOGS_API, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return data.map(({ htmlContent, ...blog }) => blog);
  } catch {
    return [];
  }
}

export const getBlogs = unstable_cache(fetchBlogs, ["public-blogs"], {
  revalidate: 3600,
});

export async function getBlogBySlug(slug) {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog.slug === slug) ?? null;
}
