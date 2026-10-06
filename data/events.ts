export type MallEvent = {
  title: string;
  slug: string;
  image?: { src: string; alt: string };
  startDate?: string;
  endDate?: string;
  shortDescription?: string;
  description?: string;
  location?: string;
  featured?: boolean;
  status: "draft" | "published";
  verified: boolean;
  source?: string;
};

// No confirmed event announcements have been supplied to the project.
// Add source-backed records here; drafts never appear on public pages.
export const events: MallEvent[] = [];
export const getPublishedEvents = () => events.filter(event => event.status === "published" && event.verified && event.source);
export const getEvent = (slug: string) => getPublishedEvents().find(event => event.slug === slug);
export function getUpcomingEvents(now = new Date()) {
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tbilisi", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
  return getPublishedEvents().filter(event => {
    const lastDate = event.endDate ?? event.startDate;
    return !lastDate || lastDate.slice(0, 10) >= today;
  }).sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || (a.startDate ?? "9999").localeCompare(b.startDate ?? "9999"));
}
