"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";

export default function LastPlayedCard() {
  const [data, setData] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    fetch("/api/spotify/last-played")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!data)
    return (
      <div className="w-full max-w-4xl mx-auto p-4 bg-[#121212] rounded-xl text-white mt-8">
        Loading…
      </div>
    );

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 bg-[#111] rounded-xl p-4 shadow border border-white/5">
      {/* Top Row */}
      <div className="flex items-center gap-4">
        {/* Album */}
        <img
          src={data.albumImage}
          className="w-16 h-16 rounded-md object-cover"
        />

        {/* Text */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
              className="w-4 h-4 opacity-80"
            />
            <span className="text-xs text-white/60">Last played</span>
          </div>

          <p className="text-white font-semibold truncate">{data.song}</p>
          <p className="text-white/50 text-sm truncate">by {data.artist}</p>
        </div>

        {/* Play button triggers internal player */}
        <button
          onClick={() => setShowPlayer(!showPlayer)}
          className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 transition border border-white/10"
        >
          <Play size={18} className="text-white" />
        </button>
      </div>

      {/* Hidden Spotify Player — appears inside the card */}
      {showPlayer && (
        <div className="mt-4 overflow-hidden rounded-lg">
          <iframe
            src={`https://open.spotify.com/embed/track/${data.trackId}`}
            width="100%"
            height="80"
            allow="encrypted-media"
            className="rounded-lg border-none"
          ></iframe>
        </div>
      )}
    </div>
  );
}
