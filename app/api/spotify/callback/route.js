import { NextResponse } from "next/server";
import qs from "qs";

export async function GET(req) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  const body = qs.stringify({
    grant_type: "authorization_code",
    code,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
  });

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  const tokens = await tokenRes.json();

  return NextResponse.json({
    message: "Refresh token generated. Check your terminal!",
    refresh_token: tokens.refresh_token,
  });
}
