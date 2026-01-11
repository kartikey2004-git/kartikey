export const GITHUB_PALETTE = [
  "bg-[#161b22]", // 0
  "bg-[#0e4429]", // 1–2
  "bg-[#006d32]", // 3–5
  "bg-[#26a641]", // 6–9
  "bg-[#39d353]", // 10+
];

export function getContributionLevel(count = 0) {
  if (count <= 0) return GITHUB_PALETTE[0];
  if (count <= 2) return GITHUB_PALETTE[1];
  if (count <= 5) return GITHUB_PALETTE[2];
  if (count <= 9) return GITHUB_PALETTE[3];
  return GITHUB_PALETTE[4];
}

export function chunkWeeks(days = []) {
  if (!days.length) return [];

  // assume days are already sorted by date asc
  const result = [];
  const firstDate = new Date(days[0].date);
  const startOffset = firstDate.getDay(); // 0 = Sunday

  let week = [];

  // leading padding
  for (let i = 0; i < startOffset; i++) {
    week.push({
      date: null,
      count: 0,
      pad: true,
    });
  }

  for (const day of days) {
    week.push({ ...day, pad: false });

    if (week.length === 7) {
      result.push(week);
      week = [];
    }
  }

  // trailing padding
  if (week.length) {
    while (week.length < 7) {
      week.push({
        date: null,
        count: 0,
        pad: true,
      });
    }
    result.push(week);
  }

  return result;
}

export function computeStreaks(days = []) {
  if (!days.length) {
    return {
      currentStreak: 0,
      currentStreakStart: null,
      longestStreak: 0,
      longestStart: null,
      longestEnd: null,
    };
  }

  // filter padding safely
  const validDays = days.filter((d) => !d.pad);

  let longestLen = 0;
  let longestStart = null;
  let longestEnd = null;

  let curLen = 0;
  let curStart = null;

  for (let i = 0; i < validDays.length; i++) {
    const day = validDays[i];

    if (day.count > 0) {
      if (curLen === 0) curStart = day.date;
      curLen++;
    } else {
      if (curLen > longestLen) {
        longestLen = curLen;
        longestStart = curStart;
        longestEnd = validDays[i - 1]?.date ?? null;
      }
      curLen = 0;
      curStart = null;
    }
  }

  // tail case
  if (curLen > longestLen) {
    longestLen = curLen;
    longestStart = curStart;
    longestEnd = validDays[validDays.length - 1].date;
  }

  // current streak (from end)
  let currentStreak = 0;
  let currentStreakStart = null;

  for (let i = validDays.length - 1; i >= 0; i--) {
    if (validDays[i].count > 0) {
      currentStreak++;
      currentStreakStart = validDays[i].date;
    } else {
      break;
    }
  }

  return {
    currentStreak,
    currentStreakStart,
    longestStreak: longestLen,
    longestStart,
    longestEnd,
  };
}

