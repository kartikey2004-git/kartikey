"use client";

import React from "react";

export default function OverviewPanel({ data }) {
  const { profile, user } = data;

  return (
    <div className="p-5  bg-[#0d0d0d] border border-[#1a1a1a]">
      <div className="w-full overflow-x-auto">
        <div className="flex items-center gap-5 min-w-max">
          <img
            src={profile.avatarUrl}
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover border border-white/10"
          />

          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-white tracking-tight">
              {profile.name}
            </h2>

            <p className="text-[10px] md:text-sm text-gray-400 mt-0.5 line-clamp-none md:line-clamp-2">
              {profile.bio}
            </p>

            <div className="flex flex-col sm:flex-row md:gap-4 sm:gap-2 mt-3 text-xs text-gray-300">
              <span className="px-2 py-0.5 rounded-md md:bg-white/5 md:border md:border-white/10">
                Repos: {profile.totalRepos}
              </span>

              <span className="px-2 py-0.5 rounded-md md:bg-white/5 md:border md:border-white/10">
                Followers: {profile.followers}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
