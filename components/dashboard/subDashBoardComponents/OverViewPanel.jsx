"use client";

import React from "react";

export default function OverviewPanel({ data }) {
  const { profile, user } = data;

  return (
    <div className="p-5 rounded-xl bg-[#0d0d0d] border border-[#1a1a1a]">
      <div className="flex items-center gap-5">
        <img
          src={profile.avatarUrl}
          alt="avatar"
          className="w-16 h-16 rounded-full object-cover border border-white/10"
        />

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-white tracking-tight">
            {profile.name}
          </h2>

          <p className="text-sm text-gray-400 mt-0.5 line-clamp-2">
            {profile.bio}
          </p>

          <div className="flex gap-4 mt-3 text-xs text-gray-300">
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
              Repos: {profile.totalRepos}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
              Followers: {profile.followers}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
