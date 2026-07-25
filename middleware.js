import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import {
  VISITOR_COOKIE,
  SITE_SEEN_COOKIE,
  VISITOR_COOKIE_MAX_AGE,
  SITE_VISITORS_KEY,
  generateVisitorId,
} from "@/lib/visitor";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
};

export function middleware(request, event) {
  const response = NextResponse.next();

  let visitorId = request.cookies.get(VISITOR_COOKIE)?.value;
  if (!visitorId) {
    visitorId = generateVisitorId();
    response.cookies.set(VISITOR_COOKIE, visitorId, {
      ...cookieOptions,
      maxAge: VISITOR_COOKIE_MAX_AGE,
    });
  }

  // Session-scoped cookie so we SADD at most once per browser session
  // instead of on every page navigation (SADD is idempotent, but this
  // skips the redundant round trip for repeat views).
  if (!request.cookies.has(SITE_SEEN_COOKIE)) {
    response.cookies.set(SITE_SEEN_COOKIE, "1", cookieOptions);
    event.waitUntil(redis.sadd(SITE_VISITORS_KEY, visitorId));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
