import { NextResponse } from "next/server";

export async function GET() {
  const scope = "user-read-currently-playing user-read-recently-played";
  const redirect = process.env.SPOTIFY_REDIRECT_URI;

  const query = new URLSearchParams({
    client_id: process.env.SPOTIFY_CLIENT_ID,
    response_type: "code",
    redirect_uri: redirect,
    scope,
  });

  const url = `https://accounts.spotify.com/authorize?${query}`;

  return NextResponse.redirect(url);
}
