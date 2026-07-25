import { NextResponse } from "next/server";
import { VISITOR_COOKIE, VISITOR_COOKIE_MAX_AGE, generateVisitorId } from "@/lib/visitor";

export function middleware(request) {
  const response = NextResponse.next();

  if (!request.cookies.has(VISITOR_COOKIE)) {
    response.cookies.set(VISITOR_COOKIE, generateVisitorId(), {
      maxAge: VISITOR_COOKIE_MAX_AGE,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
