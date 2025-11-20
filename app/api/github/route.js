import { Octokit } from "octokit";
import { NextResponse } from "next/server";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is Required" },
      { status: 401 }
    );
  }

  try {
    // GraphQL: Fetch avatar, followers, following, repos, stars, languages, contributions
    const query = `
      query($username: String!) {
        user(login: $username) {
          avatarUrl
          name
          bio
          login
          followers { totalCount }
          following { totalCount }
          starredRepositories { totalCount }
          repositories(first: 100, orderBy: { field: UPDATED_AT, direction: DESC }) {
            totalCount
            nodes {
              primaryLanguage {
                name
                color
              }
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
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response = await octokit.graphql(query, { username });
    const user = response.user;

    // Flatten contribution days
    const calendar = user.contributionsCollection.contributionCalendar;
    const contributions = calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        count: day.contributionCount,
        date: day.date,
      }))
    );

    // Calculate top languages
    let langStats = {};

    user.repositories.nodes.forEach((repo) => {
      if (!repo.languages) return;

      repo.languages.edges.forEach((edge) => {
        const lang = edge.node.name;
        const size = edge.size;

        if (!langStats[lang]) {
          langStats[lang] = { name: lang, size, color: edge.node.color };
        } else {
          langStats[lang].size += size;
        }
      });
    });

    const languages = Object.values(langStats)
      .sort((a, b) => b.size - a.size)
      .slice(0, 5);

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
        languages,
      },
      contributions,
      user: {
        totalContribution: calendar.totalContributions,
      },
    });

  } catch (error) {
    console.error("GITHUB API ERROR", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub Data" },
      { status: 500 }
    );
  }
}
