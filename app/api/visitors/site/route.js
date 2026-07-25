import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { SITE_VISITORS_KEY } from "@/lib/visitor";

export async function GET() {
  const uniqueVisitors = await redis.scard(SITE_VISITORS_KEY);
  return NextResponse.json({ uniqueVisitors });
}
