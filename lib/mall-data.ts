// Facts: https://grandmall.com.ge/en and https://grandmall.com.ge/about
// Brands: https://grandmall.com.ge/app/GetShops.php?Type=1&Cats=
// Verified 2026-10-04. Published approximate count, not the curated preview count.
export const mallFacts = [
  {
    value: "≈100",
    label: "Branded stores",
    note: "Around 100 branded stores.",
  },
  {
    value: "5",
    label: "Floors",
    note: "Four retail floors. One parking level.",
  },
  {
    value: "24K+",
    label: "m² of leasable space",
    note: "More than 24,000 m² of leasable area.",
  },
];
export const categories = [
  "All",
  "Fashion",
  "Beauty",
  "Sport",
  "Kids",
  "Shoes & Bags",
  "Accessories",
  "Home",
  "Electronics",
  "Services",
] as const;
export type Category = (typeof categories)[number];
export const stores: { name: string; category: Category; slug: string }[] = [
  { name: "ZARA", category: "Fashion", slug: "zara" },
  { name: "Massimo Dutti", category: "Fashion", slug: "massimo-duti" },
  { name: "MANGO", category: "Fashion", slug: "mango" },
  { name: "Calvin Klein", category: "Fashion", slug: "calvin-klein" },
  { name: "LACOSTE", category: "Fashion", slug: "lacoste" },
  { name: "KIKO MILANO", category: "Beauty", slug: "kiko-milano" },
  { name: "Yves Rocher", category: "Beauty", slug: "yves-rocher" },
  { name: "TOPSPORT", category: "Sport", slug: "topsport" },
  { name: "Okaïdi", category: "Kids", slug: "okaidi" },
  { name: "Jacadi", category: "Kids", slug: "jacadi" },
  { name: "CHARLES & KEITH", category: "Shoes & Bags", slug: "charles-keith" },
  { name: "ALDO", category: "Shoes & Bags", slug: "aldo" },
  { name: "PANDORA", category: "Accessories", slug: "pandora" },
  { name: "Samsonite", category: "Shoes & Bags", slug: "samsonite" },
  { name: "English Home", category: "Home", slug: "english-home" },
  { name: "MINISO", category: "Kids", slug: "miniso" },
  { name: "Zoommer", category: "Electronics", slug: "zoomer" },
  { name: "iTechnics", category: "Electronics", slug: "itechnics" },
];
