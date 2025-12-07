import { NextResponse } from "next/server";
import qs from "qs";

export async function GET() {
  try {
    // 1. Exchange refresh token → access token
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
      body: qs.stringify({
        grant_type: "refresh_token",
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
      }),
    });

    const { access_token } = await tokenRes.json();

    // 2. Fetch LAST PLAYED SONG
    const recentRes = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const recent = await recentRes.json();
    const item = recent?.items?.[0]?.track;

    return NextResponse.json({
      song: item?.name,
      artist: item?.artists?.map((a) => a.name).join(", "),
      albumImage: item?.album?.images?.[0]?.url,
      link: item?.external_urls?.spotify,
      trackId: item?.id, // ADD THIS
      playedAt: recent?.items?.[0]?.played_at,
    });

  } catch (e) {
    return NextResponse.json({ error: e.message });
  }
}
