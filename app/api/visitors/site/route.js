import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redis } from "@/lib/redis";
import {
  SITE_VISITORS_KEY,
  VISITOR_COOKIE,
  getClientIp,
  hashFallbackId,
} from "@/lib/visitor";

export async function GET() {
  const uniqueVisitors = await redis.scard(SITE_VISITORS_KEY);
  return NextResponse.json({ uniqueVisitors });
}

export async function POST(request) {
  const cookieStore = await cookies();

  let visitorId = cookieStore.get(VISITOR_COOKIE)?.value;
  if (!visitorId) {
    const ip = getClientIp(request.headers);
    const userAgent = request.headers.get("user-agent") || "unknown";
    visitorId = await hashFallbackId(ip, userAgent);
  }

  await redis.sadd(SITE_VISITORS_KEY, visitorId);
  const uniqueVisitors = await redis.scard(SITE_VISITORS_KEY);

  return NextResponse.json({ uniqueVisitors });
}
