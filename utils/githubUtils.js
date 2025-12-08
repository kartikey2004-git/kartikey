export const GITHUB_PALETTE = [
  "bg-[#161b22]", // empty
  "bg-[#0e4429]", // level 1
  "bg-[#006d32]", // level 2
  "bg-[#26a641]", // level 3
  "bg-[#39d353]", // level 4
];

export const getContributionLevel = (count) => {
  if (count <= 0) return GITHUB_PALETTE[0];
  if (count === 1) return GITHUB_PALETTE[1];
  if (count === 2) return GITHUB_PALETTE[2];
  if (count === 3) return GITHUB_PALETTE[3];
  return GITHUB_PALETTE[4];
};

export const chunkWeeks = (days = []) => {
  if (!days.length) return [];

  const items = [...days];
  const first = new Date(items[0].date);
  const pad = first.getDay(); // 0 = Sunday

  for (let i = 0; i < pad; i++) {
    items.unshift({ date: "pad-" + i, count: 0, pad: true });
  }

  const weeks = [];
  for (let i = 0; i < items.length; i += 7) {
    weeks.push(items.slice(i, i + 7));
  }

  return weeks;
};

export const computeStreaks = (days = []) => {
  let longest = { len: 0, start: null, end: null };
  let cur = 0,
    curStart = null;

  for (let i = 0; i < days.length; i++) {
    const d = days[i];
    if (d.count > 0) {
      if (cur === 0) curStart = d.date;
      cur++;
    } else {
      if (cur > longest.len) {
        longest = { len: cur, start: curStart, end: days[i - 1].date };
      }
      cur = 0;
      curStart = null;
    }
  }

  if (cur > longest.len) {
    longest = { len: cur, start: curStart, end: days[days.length - 1].date };
  }

  let currentStreak = 0,
    streakStart = null;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) {
      currentStreak++;
      streakStart = days[i].date;
    } else break;
  }

  return {
    currentStreak,
    currentStreakStart: streakStart,
    longestStreak: longest.len,
    longestStart: longest.start,
    longestEnd: longest.end,
  };
};
