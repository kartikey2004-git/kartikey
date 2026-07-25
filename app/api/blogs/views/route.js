import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getBlogs } from "@/lib/blogs";
import { blogVisitorsKey } from "@/lib/visitor";

export async function GET() {
  const blogs = await getBlogs();
  if (!blogs.length) return NextResponse.json({});

  const pipeline = redis.pipeline();
  blogs.forEach((blog) => pipeline.scard(blogVisitorsKey(blog.slug)));
  const counts = await pipeline.exec();

  const uniqueVisitors = {};
  blogs.forEach((blog, i) => {
    uniqueVisitors[blog.slug] = counts[i] ?? 0;
  });

  return NextResponse.json(uniqueVisitors);
}
