"use client";

export default function OverviewPanel({ profile, year, totalContributions }) {
  if (!profile) return null;

  return (
    <div className="p-4 sm:p-5  border-b-white/10">
      <div className="flex items-start gap-4 sm:gap-5 min-w-0">
        {/* Avatar */}
        <img
          src={profile.avatarUrl}
          alt={`${profile.username} avatar`}
          className="
            w-12 h-12
            sm:w-14 sm:h-14
            rounded-full
            object-cover
            border border-white/10
            shrink-0
          "
        />

        {/* Info */}
        <div className="flex flex-col gap-1 min-w-0">
          <h2 className="text-base sm:text-lg font-semibold text-white truncate">
            {profile.name || profile.username}
          </h2>

          {profile.bio && (
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
              {profile.bio}
            </p>
          )}

          {/* Stats */}
          <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-300">
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">
              Repos: {profile.totalRepos}
            </span>

            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">
              Followers: {profile.followers}
            </span>

            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">
              {year}: {totalContributions} contributions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
