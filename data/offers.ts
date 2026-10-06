export type MallOffer = {
  brand: string;
  slug: string;
  title: string;
  image?: { src: string; alt: string };
  shortDescription?: string;
  startDate?: string;
  endDate?: string;
  link?: string;
  status: "draft" | "published";
  verified: boolean;
  source?: string;
};

// Homepage brand edits are editorial introductions, not promotions.
// No confirmed offers have been supplied. Do not infer discounts from brands.
export const offers: MallOffer[] = [];
export function getPublishedOffers(now = new Date()) {
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tbilisi", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
  return offers.filter(offer => offer.status === "published" && offer.verified && offer.source && (!offer.startDate || offer.startDate.slice(0,10) <= today) && (!offer.endDate || offer.endDate.slice(0,10) >= today));
}
