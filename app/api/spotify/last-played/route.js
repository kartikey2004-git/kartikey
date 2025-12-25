import { NextResponse } from "next/server";
import qs from "qs";

export async function GET() {
  try {
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
      cache: "no-store",
    });

    const tJSON = await tokenRes.json();
    const access_token = tJSON.access_token;

    if (!access_token) {
      return NextResponse.json(
        { error: "Failed to refresh token" },
        { status: 500 }
      );
    }

    const recentRes = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        cache: "no-store",
      }
    );

    const recent = await recentRes.json();
    const itemWrapper = recent?.items?.[0];
    const item = itemWrapper?.track;

    if (!item) {
      return NextResponse.json({
        song: null,
        message: "No recently played track found",
      });
    }

    const playedFrom = itemWrapper?.context?.type || "unknown";

    return NextResponse.json({
      song: item?.name,
      artist: item?.artists?.map((a) => a.name).join(", "),
      albumImage: item?.album?.images?.[0]?.url,
      link: item?.external_urls?.spotify,
      trackId: item?.id,
      previewUrl: item?.preview_url,
      playedAt: itemWrapper?.played_at,
      playedFrom, // <-- added
    });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
