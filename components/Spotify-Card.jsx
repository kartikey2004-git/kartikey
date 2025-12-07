"use client";

import { useEffect, useState } from "react";

export default function SpotifyCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!data)
    return (
      <div className="p-4 bg-black/50 rounded-xl text-white">
        Loading Spotify…
      </div>
    );

  if (!data.playing)
    return (
      <div className="flex items-center gap-3 bg-[#111] p-4 rounded-xl text-white w-fit">
        <div className="w-12 h-12 bg-gray-700 rounded-md opacity-40" />
        <div>
          <p className="text-sm opacity-60">Nothing playing</p>
        </div>
      </div>
    );

  return (
    <a
      href={data.link}
      target="_blank"
      className="flex items-center gap-3 bg-[#111] hover:bg-[#181818] transition p-4 rounded-xl text-white w-fit"
    >
      <img
        src={data.albumImage}
        className="w-12 h-12 rounded-md shadow-md"
        alt="Album"
      />

      <div>
        <p className="text-sm opacity-60">Last played</p>
        <p className="font-semibold leading-tight">{data.song}</p>
        <p className="text-sm opacity-70">{data.artist}</p>
      </div>
    </a>
  );
}
