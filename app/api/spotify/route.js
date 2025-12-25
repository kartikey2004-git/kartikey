import { NextResponse } from "next/server";
import qs from "qs";

export async function GET() {
  try {
    const tokenReq = await fetch("https://accounts.spotify.com/api/token", {
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

    const { access_token } = await tokenReq.json();

    const nowReq = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    if (nowReq.status === 204) {
      return NextResponse.json({ playing: false });
    }

    const now = await nowReq.json();
    const item = now?.item;

    return NextResponse.json({
      playing: true,
      song: item?.name,
      artist: item?.artists?.map((a) => a.name).join(", "),
      albumImage: item?.album?.images[0]?.url,
      link: item?.external_urls?.spotify,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
