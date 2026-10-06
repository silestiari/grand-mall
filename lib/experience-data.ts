// Verified 2026-10-04 against Grand Mall's public catalogue:
// https://grandmall.com.ge/app/GetShops.php?Type=2&Cats=
// https://grandmall.com.ge/app/GetShops.php?Type=3&Cats=
// These are introductions, not a complete directory or opening-hours listing.
export const diningVenues = [
  { name: "Big Chefs", slug: "big-chefs" },
  { name: "Oliva Café", slug: "oliva-caf" },
  { name: "Dunkin", slug: "dunkin" },
];

export const entertainmentVenues = [
  { name: "CAVEA", slug: "cavea", category: "CINEMA", heading: "A different kind of escape.", description: "Take your seat. Let the everyday wait.", image: "cinema" },
  { name: "Bowling", slug: "bowling", category: "BOWLING", heading: "Make it a friendly competition.", description: "A few frames. Good company. Your next evening together.", image: "bowling" },
  { name: "Oktopus Fitness", slug: "oktopus-fitness", category: "FITNESS", heading: "Find your own rhythm.", description: "Make movement part of your day.", image: "fitness" },
] as const;

export const officialMall = {
  dining: "https://grandmall.com.ge/dine",
  entertainment: "https://grandmall.com.ge/entertaiment",
  venue: (slug: string) => `https://grandmall.com.ge/en/brands/${slug}`,
};
