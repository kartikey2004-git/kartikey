import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const secret = request.headers.get("x-revalidate-secret");

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("blogs");
  revalidatePath("/blogs");
  revalidatePath("/blogs/[slug]", "page");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
