import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redis } from "@/lib/redis";
import {
  VISITOR_COOKIE,
  blogVisitorsKey,
  getClientIp,
  hashFallbackId,
} from "@/lib/visitor";

export async function GET(_request, { params }) {
  const { slug } = await params;
  const uniqueVisitors = await redis.scard(blogVisitorsKey(slug));
  return NextResponse.json({ slug, uniqueVisitors });
}

export async function POST(request, { params }) {
  const { slug } = await params;
  const cookieStore = await cookies();

  let visitorId = cookieStore.get(VISITOR_COOKIE)?.value;
  if (!visitorId) {
    const ip = getClientIp(request.headers);
    const userAgent = request.headers.get("user-agent") || "unknown";
    visitorId = await hashFallbackId(ip, userAgent);
  }

  await redis.sadd(blogVisitorsKey(slug), visitorId);
  const uniqueVisitors = await redis.scard(blogVisitorsKey(slug));

  return NextResponse.json({ slug, uniqueVisitors });
}
