import { unstable_cache } from "next/cache";
const username = "kartikey2004-git";

async function fetchContributions() {
  const url = `https://github-contributions-api.jogruber.de/v4/${username}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // 3600 means 1 hour instead of 6 hours
  });

  const data = await res.json();
  return data.contributions;
}

export const getCachedContributions = unstable_cache(
  fetchContributions,
  ["github-contributions"],
  { revalidate: 3600 },
);
