"use client";

import { useEffect, useState } from "react";
import { Play, Loader2 } from "lucide-react";

export default function LastPlayedCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/spotify/last-played")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-5 bg-[#111] rounded-xl text-white mt-8 flex items-center gap-3">
        <Loader2 className="animate-spin" size={20} />
        Fetching last played song…
      </div>
    );
  }

  if (!data?.song) {
    return (
      <div className="w-full max-w-4xl mx-auto p-5 bg-[#111] rounded-xl text-white mt-8 text-center">
        No recently played song found.
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 bg-[#111] rounded-md p-4 shadow border border-white/5 transition">
      <div className="flex items-center gap-4">
        {/* Album Image */}
        <img
          src={data.albumImage}
          className="w-16 h-16 rounded-md object-cover"
        />

        {/* Song Info */}
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

        {/* Play button → REDIRECT TO SPOTIFY */}
        <button
          onClick={() => {
            if (data.link) {
              window.open(data.link, "_blank");
            }
          }}
          className="w-10 h-10 rounded-md flex items-center justify-center 
          bg-white/5 hover:bg-white/10 transition border border-white/10"
        >
          <Play size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}
