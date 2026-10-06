import { visitorInformation as visitorData, visitorFields } from "@/data/visitor-info";
// CMS-ready content. Drafts are never published just to fill a layout.
// Verified sources and practical data: 2026-10-04.
import { officialMedia } from "./official-media";
export const completionMedia = {
  eventGathering: officialMedia.exterior,
  eventStyle: officialMedia.mango,
  eventEvening: officialMedia.cafe,
  offerTailoring: officialMedia.zara,
  offerDetails: officialMedia.massimo,
  batumi: { src: "/images/batumi-coast.jpg", alt: "A contemporary seaside promenade beside the Black Sea in Batumi" },
  socialFashion: officialMedia.massimo,
  socialFood: officialMedia.restaurant,
  socialArchitecture: officialMedia.exterior,
  socialCity: { src: "/images/lifestyle-batumi.jpg", alt: "People walking beside the Black Sea on a Batumi promenade" },
};

type Story = {
  id: string;
  title: string;
  description: string;
  category: string;
  startsAt: string | null;
  status: "draft" | "published" | "editorial";
  verified: boolean;
  source: string | null;
  href: string;
  image: keyof typeof completionMedia;
};

// Evergreen stories used until independently verified event announcements arrive.
export const eventStories: Story[] = [
  { id: "together", title: "Meet here. Make a day of it.", description: "Style, shared tables and time together. Follow Grand Mall for event dates and announcements.", category: "AT GRAND MALL", startsAt: null, status: "editorial", verified: false, source: null, href: "https://www.facebook.com/grandmallbatumi", image: "eventGathering" },
  { id: "style", title: "Find your next favourite.", description: "Take a closer look at the brands.", category: "STYLE", startsAt: null, status: "editorial", verified: false, source: null, href: "#brands", image: "eventStyle" },
  { id: "evening", title: "Stay for the conversation.", description: "Make time for a table together.", category: "GOOD COMPANY", startsAt: null, status: "editorial", verified: false, source: null, href: "#dining", image: "eventEvening" },
];

// Editorial brand introductions, not unverified promotions or product availability.
export const brandEdits = [
  { id: "zara-edit", brand: "ZARA", headline: "The everyday edit.", image: "offerTailoring", href: "https://grandmall.com.ge/en/brands/zara", date: null, kind: "editorial" },
  { id: "massimo-edit", brand: "Massimo Dutti", headline: "It’s in the details.", image: "offerDetails", href: "https://grandmall.com.ge/en/brands/massimo-duti", date: null, kind: "editorial" },
] as const;

export const visitorInformation = { ...visitorData, fields: visitorFields };

// Retail levels 1–4 are shown by https://map.grandmall.com.ge/.
// Parking on the minus level is confirmed by the official about/services pages.
export const mallLevels = [
  { id: "-1", title: "Parking", description: [visitorData.parking?.spaces ? `${visitorData.parking.spaces} spaces` : undefined, visitorData.parking?.hours ? `Daily ${visitorData.parking.hours}` : undefined].filter(Boolean).join(" · ") },
  { id: "1", title: "Retail level", description: "Find store locations on the live mall map." },
  { id: "2", title: "Retail level", description: "Find store locations on the live mall map." },
  { id: "3", title: "Retail level", description: "Find store locations on the live mall map." },
  { id: "4", title: "Retail level", description: "Find store locations on the live mall map." },
];

export const socialImages = [
  { id: "fashion", image: "socialFashion", caption: "STYLE / IN MOTION" },
  { id: "table", image: "socialFood", caption: "AT THE TABLE" },
  { id: "architecture", image: "socialArchitecture", caption: "LIGHT / SPACE" },
  { id: "city", image: "socialCity", caption: "BATUMI / EVERY DAY" },
] as const;

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/grandmallbatumi" },
  { label: "Facebook", href: "https://www.facebook.com/grandmallbatumi" },
];

export const footerNavigation = [
  { label: "Stores", href: "/stores" }, { label: "Dining", href: "/dining" },
  { label: "Entertainment", href: "/entertainment" }, { label: "Events", href: "/events" },
  { label: "Offers", href: "/offers" }, { label: "Mall Map", href: "/map" },
  { label: "Visit", href: "/visit" },
];
export const footerInformation = [
  { label: "About", href: "https://grandmall.com.ge/about" },
  { label: "Contact", href: "/visit#contact" },
  { label: "Leasing", href: "https://grandmall.com.ge/leasing_request" },
  { label: "Gift Card", href: `mailto:${visitorData.email}?subject=Gift%20card%20enquiry` },
];
export const legalLinks = [
  { label: "Privacy", href: "https://grandmall.com.ge/privacy-policy" },
  { label: "Terms", href: "https://grandmall.com.ge/terms" },
];
