import { getBlogs } from "@/lib/blogs";

export async function GET() {
  const data = await getBlogs();
  return Response.json(data);
}
