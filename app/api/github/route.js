import { Octokit } from "octokit";
import { NextResponse } from "next/server";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

function getYearRange(year) {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;
  return { from, to };
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const yearParam = searchParams.get("year"); // optional

  if (!username) {
    return NextResponse.json(
      { error: "Username is required" },
      { status: 400 }
    );
  }

  try {
    const baseQuery = `
      query($username: String!) {
        user(login: $username) {
          avatarUrl
          name
          bio
          login
          followers { totalCount }
          following { totalCount }
          starredRepositories { totalCount }
          repositories(first: 100, ownerAffiliations: OWNER) {
            totalCount
            nodes {
              languages(first: 10) {
                edges {
                  size
                  node {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `;

    const baseRes = await octokit.graphql(baseQuery, { username });
    const user = baseRes.user;

    // 2️⃣ Language aggregation (unchanged but optimized)
    const langStats = {};

    user.repositories.nodes.forEach((repo) => {
      repo.languages?.edges.forEach((edge) => {
        const lang = edge.node.name;
        langStats[lang] ??= { name: lang, size: 0, color: edge.node.color };
        langStats[lang].size += edge.size;
      });
    });

    const languages = Object.values(langStats)
      .sort((a, b) => b.size - a.size)
      .slice(0, 5);

    // 3️⃣ Decide years
    const currentYear = new Date().getFullYear();
    const years =
      yearParam === "all"
        ? Array.from({ length: 5 }, (_, i) => currentYear - i)
        : yearParam
        ? [Number(yearParam)]
        : [currentYear];

    // 4️⃣ Fetch contributions YEAR-WISE
    const contributionsByYear = {};

    for (const year of years) {
      const { from, to } = getYearRange(year);

      const contribQuery = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

      const contribRes = await octokit.graphql(contribQuery, {
        username,
        from,
        to,
      });

      const calendar =
        contribRes.user.contributionsCollection.contributionCalendar;

      contributionsByYear[year] = {
        totalContributions: calendar.totalContributions,
        contributions: calendar.weeks.flatMap((week) =>
          week.contributionDays.map((day) => ({
            date: day.date,
            count: day.contributionCount,
          }))
        ),
      };
    }

    // 5️⃣ Final response (frontend-friendly)
    return NextResponse.json({
      profile: {
        username: user.login,
        name: user.name,
        avatarUrl: user.avatarUrl,
        bio: user.bio,
        followers: user.followers.totalCount,
        following: user.following.totalCount,
        stars: user.starredRepositories.totalCount,
        totalRepos: user.repositories.totalCount,
      },
      languages,
      contributionsByYear,
    });
  } catch (error) {
    console.error("GITHUB API ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
