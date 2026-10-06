// Verified 2026-10-04 against https://grandmall.com.ge/app/GetShops.php?Type=3&Cats=
// Each source points to its official venue record. Categories follow the descriptions.
// Published phone numbers repeat the mall number; individual phones are omitted.
// Bowling's link points to Wonderland, and Wonderland's link is a Facebook search.
// Neither is asserted to be a verified individual venue website.
export type EntertainmentVenue = {
  name: string; slug: string; category: string;
  floor?: string; image?: { src: string; alt: string }; shortDescription?: string;
  phone?: string; website?: string; openingHours?: string;
  source: string; officialPage: string;
};

export const entertainmentVenues: EntertainmentVenue[] = [
  {
    name: "CAVEA", slug: "cavea", category: "Cinema", floor: "4",
    shortDescription: "A cinema at Grand Mall Batumi.", openingHours: "10:00–22:00",
    website: "https://cavea.ge/",
    image: { src: "/images/entertainment/cinema.webp", alt: "Rows of charcoal cinema seats with warm aisle lighting" },
    source: "https://grandmall.com.ge/app/GetShopData.php?id=92", officialPage: "https://grandmall.com.ge/en/brands/cavea",
  },
  {
    name: "Bowling", slug: "bowling", category: "Bowling", floor: "4",
    shortDescription: "Bowling with friends and family at Grand Mall.", openingHours: "10:00–22:00",
    image: { src: "/images/entertainment/bowling.webp", alt: "A visitor holding a bowling ball beside the lanes" },
    source: "https://grandmall.com.ge/app/GetShopData.php?id=47", officialPage: "https://grandmall.com.ge/en/brands/bowling",
  },
  {
    name: "Oktopus Fitness", slug: "oktopus-fitness", category: "Fitness", floor: "3",
    shortDescription: "Fitness and training at Oktopus Fitness Club.", website: "https://oktopus.ge/",
    image: { src: "/images/entertainment/fitness.webp", alt: "Modern training equipment in a spacious fitness interior" },
    source: "https://grandmall.com.ge/app/GetShopData.php?id=74", officialPage: "https://grandmall.com.ge/en/brands/oktopus",
  },
  {
    name: "Wonderland", slug: "wonderland", category: "Kids entertainment", floor: "4",
    shortDescription: "Kids entertainment at Grand Mall.", openingHours: "10:00–22:00",
    image: { src: "/images/entertainment/wonderland.webp", alt: "Children playing among timber structures in a softly lit family play space" },
    source: "https://grandmall.com.ge/app/GetShopData.php?id=38", officialPage: "https://grandmall.com.ge/en/brands/wonderland",
  },
];

export function getEntertainmentVenue(slug: string) { return entertainmentVenues.find(venue => venue.slug === slug); }
