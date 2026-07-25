export const VISITOR_COOKIE = "vid";
export const VISITOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export const SITE_VISITORS_KEY = "visitors:site";

export function blogVisitorsKey(slug) {
  return `visitors:blog:${slug}`;
}

export function generateVisitorId() {
  return crypto.randomUUID();
}

export function getClientIp(headersLike) {
  const forwardedFor = headersLike.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return headersLike.get("x-real-ip") || "unknown";
}

// Used only when a request arrives without the vid cookie (e.g. cookies
// blocked). Not persisted client-side, so it's a best-effort per-request
// identity rather than a durable one.
export async function hashFallbackId(ip, userAgent) {
  const data = new TextEncoder().encode(`${ip}:${userAgent}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
