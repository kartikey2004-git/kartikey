"use client";

export default function OverviewPanel({ profile, year, totalContributions }) {
  if (!profile) return null;

  return (
    <div className="p-4 sm:p-6 border-b border-white/10">
      <div className="flex items-start gap-4 sm:gap-5 min-w-0">
        {/* Avatar */}
        <img
          src={profile.avatarUrl}
          alt={`${profile.username} avatar`}
          className="
            w-14 h-14
            sm:w-16 sm:h-16
            rounded-full
            object-cover
            border border-white/10
            shrink-0
          "
        />

        {/* Info */}
        <div className="flex flex-col gap-1.5 min-w-0">
          {/* Name */}
          <h2 className="text-lg sm:text-xl font-semibold text-white truncate">
            {profile.name || profile.username}
          </h2>

          {/* Bio */}
          {profile.bio && (
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed line-clamp-2">
              {profile.bio}
            </p>
          )}

          {/* Stats */}
          <div className="flex flex-wrap gap-2.5 mt-3 text-sm text-gray-300">
            <span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
              Repos: {profile.totalRepos}
            </span>

            <span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
              Followers: {profile.followers}
            </span>

            <span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
              {year}: {totalContributions} contributions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
