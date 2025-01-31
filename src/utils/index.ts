import { DUMMY_TAGS } from "@constants/index";

export const tagGenerator = (index: number) =>
  index === 0 ? DUMMY_TAGS : [DUMMY_TAGS[Math.round(Math.random())]];

export const lastUpdatedFromUpdatedAt = (updatedAt: string) => {
  const date = new Date(updatedAt);
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const inputDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const diffInDays = Math.floor(
    (today.getTime() - inputDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays === 2) return "2 days ago";

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay()); 

  const lastWeekStart = new Date(startOfWeek);
  lastWeekStart.setDate(startOfWeek.getDate() - 7);

  if (inputDate >= startOfWeek) return "This week";
  if (inputDate >= lastWeekStart) return "Last week";

  return "Older than last week";
};
