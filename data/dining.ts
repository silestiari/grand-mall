// Verified 2026-10-04. Sources are stored per venue.
// Type=2 includes a fashion record (Gloria Jeans), excluded here.
// Luca Polare is published under Type=1 with the official food category.
// Category facets group the food described by official records; not official taxonomy.
// Published phones match the mall number; no individual venue phone is claimed.
// Big Chefs' upstream website points to Wendy's, so it is omitted.
export const diningCategories = ["All", "Restaurants", "Cafés", "Fast Food", "Desserts"] as const;
export type DiningCategory = typeof diningCategories[number];
export type DiningVenue = {
  name: string; slug: string; category: Exclude<DiningCategory, "All">;
  categories: Exclude<DiningCategory, "All">[];
  floor?: string; image?: { src: string; alt: string }; shortDescription?: string;
  phone?: string; website?: string; openingHours?: string; source: string; officialPage: string;
};

export const diningVenues: DiningVenue[] = [
  {
    "name": "M.O.K",
    "slug": "mok",
    "category": "Cafés",
    "categories": [
      "Cafés",
      "Desserts"
    ],
    "shortDescription": "Coffee, waffles and milkshakes.",
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://mokcoffee.ofoodo.com/ka/groups",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=91",
    "officialPage": "https://grandmall.com.ge/en/brands/mok",
    "image": {
      "src": "/images/dining/mok.webp",
      "alt": "Dining image supplied by the official M.O.K page"
    }
  },
  {
    "name": "Big Chefs",
    "slug": "big-chefs",
    "category": "Restaurants",
    "categories": [
      "Restaurants"
    ],
    "shortDescription": "Turkish, Mediterranean and European dishes, from breakfast to dinner.",
    "floor": "4",
    "openingHours": "10:00–00:00",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=37",
    "officialPage": "https://grandmall.com.ge/en/brands/big-chefs",
    "image": {
      "src": "/images/dining/big-chefs.webp",
      "alt": "A breakfast spread with eggs, cheese, vegetables and bread"
    }
  },
  {
    "name": "Wendy’s",
    "slug": "wendys",
    "category": "Fast Food",
    "categories": [
      "Fast Food"
    ],
    "shortDescription": "Burgers, fries and chicken sandwiches.",
    "floor": "4",
    "openingHours": "10:00–22:00",
    "website": "https://wendys.ge/en/%E1%83%9B%E1%83%94%E1%83%9C%E1%83%98%E1%83%A3/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=39",
    "officialPage": "https://grandmall.com.ge/en/brands/wendys",
    "image": {
      "src": "/images/dining/wendys.webp",
      "alt": "Dining image supplied by the official Wendy’s page"
    }
  },
  {
    "name": "Dunkin",
    "slug": "dunkin",
    "category": "Cafés",
    "categories": [
      "Cafés",
      "Desserts"
    ],
    "shortDescription": "Coffee, donuts and refreshing drinks.",
    "floor": "4",
    "openingHours": "10:00–22:00",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=40",
    "officialPage": "https://grandmall.com.ge/en/brands/dunkin",
    "image": {
      "src": "/images/dining/dunkin.webp",
      "alt": "Two iced Dunkin drinks held across a café table"
    }
  },
  {
    "name": "Pizza Capri",
    "slug": "pizza-capri",
    "category": "Fast Food",
    "categories": [
      "Fast Food"
    ],
    "shortDescription": "Classic and signature pizzas inspired by Italian flavours.",
    "floor": "4",
    "openingHours": "10:00–22:00",
    "website": "https://www.facebook.com/capripizz/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=41",
    "officialPage": "https://grandmall.com.ge/en/brands/pizza-capri",
    "image": {
      "src": "/images/dining/pizza-capri.webp",
      "alt": "Dining image supplied by the official Pizza Capri page"
    }
  },
  {
    "name": "McDonald’s",
    "slug": "mc-donalds",
    "category": "Fast Food",
    "categories": [
      "Fast Food"
    ],
    "shortDescription": "Burgers, nuggets, fries and refreshing drinks.",
    "floor": "4",
    "website": "https://mcdonalds.ge/ge/home",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=69",
    "officialPage": "https://grandmall.com.ge/en/brands/mc-donalds",
    "image": {
      "src": "/images/dining/mc-donalds.webp",
      "alt": "Dining image supplied by the official McDonald’s page"
    }
  },
  {
    "name": "Oliva Café",
    "slug": "oliva-caf",
    "category": "Cafés",
    "categories": [
      "Cafés",
      "Desserts"
    ],
    "shortDescription": "Coffee, desserts and light meals.",
    "floor": "4",
    "openingHours": "10:00–22:00",
    "website": "https://www.facebook.com/oliva.batumi?mibextid=wwXIfr&rdid=a7H1bACtmfWAySXH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19RRBnEosv%2F%3Fmibextid%3DwwXIfr#",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=70",
    "officialPage": "https://grandmall.com.ge/en/brands/oliva-caf",
    "image": {
      "src": "/images/dining/oliva-dessert.webp",
      "alt": "A yellow glazed dessert decorated with white pearls on a café table"
    }
  },
  {
    "name": "Tokyo House",
    "slug": "tokyo-house",
    "category": "Restaurants",
    "categories": [
      "Restaurants"
    ],
    "shortDescription": "Sushi, ramen and Japanese dishes.",
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://tokyohouse.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=71",
    "officialPage": "https://grandmall.com.ge/en/brands/tokyo-house",
    "image": {
      "src": "/images/dining/tokyo-house.webp",
      "alt": "Dining image supplied by the official Tokyo House page"
    }
  },
  {
    "name": "KFC",
    "slug": "kfc",
    "category": "Fast Food",
    "categories": [
      "Fast Food"
    ],
    "shortDescription": "Fried chicken, sandwiches and sides.",
    "floor": "4",
    "openingHours": "10:00–22:00",
    "website": "https://www.kfc.com.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=75",
    "officialPage": "https://grandmall.com.ge/en/brands/kfc",
    "image": {
      "src": "/images/dining/kfc.webp",
      "alt": "Dining image supplied by the official KFC page"
    }
  },
  {
    "name": "SUBWAY",
    "slug": "subway",
    "category": "Fast Food",
    "categories": [
      "Fast Food"
    ],
    "shortDescription": "Made-to-order sandwiches, salads and wraps.",
    "floor": "4",
    "openingHours": "10:00–22:00",
    "website": "https://subway.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=80",
    "officialPage": "https://grandmall.com.ge/en/brands/subway",
    "image": {
      "src": "/images/dining/subway.webp",
      "alt": "Dining image supplied by the official SUBWAY page"
    }
  },
  {
    "name": "Pizza Hut",
    "slug": "pizza-hut",
    "category": "Fast Food",
    "categories": [
      "Fast Food"
    ],
    "shortDescription": "Classic and signature pizzas, salads and desserts.",
    "floor": "4",
    "openingHours": "10:00–22:00",
    "website": "https://www.facebook.com/profile.php?id=61551897867194",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=81",
    "officialPage": "https://grandmall.com.ge/en/brands/pizza-hut",
    "image": {
      "src": "/images/dining/pizza-hut.webp",
      "alt": "Dining image supplied by the official Pizza Hut page"
    }
  },
  {
    "name": "Tolia",
    "slug": "the-khachapuri",
    "category": "Desserts",
    "categories": [
      "Desserts",
      "Cafés"
    ],
    "shortDescription": "Ice cream, coffee and desserts.",
    "floor": "4",
    "openingHours": "10:00–22:00",
    "website": "https://tolia.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=93",
    "officialPage": "https://grandmall.com.ge/en/brands/the-khachapuri",
    "image": {
      "src": "/images/dining/the-khachapuri.webp",
      "alt": "Dining image supplied by the official Tolia page"
    }
  },
  {
    "name": "Pirosmani Express",
    "slug": "pirosmani-express",
    "category": "Restaurants",
    "categories": [
      "Restaurants"
    ],
    "shortDescription": "Traditional Georgian dishes with modern interpretations.",
    "floor": "4",
    "website": "https://pirosmaniexpress.ofoodo.com/ka/catalog/2d98d62c-78ac-0166-e1b4-fd9e72142283?parentId=2d98d62c-78ac-0166-e1b4-fd9e72142283",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=100",
    "officialPage": "https://grandmall.com.ge/en/brands/pirosmani-express",
    "image": {
      "src": "/images/dining/pirosmani-express.webp",
      "alt": "Dining image supplied by the official Pirosmani Express page"
    }
  },
  {
    "name": "Usta Dönerci",
    "slug": "usta-doneri",
    "category": "Fast Food",
    "categories": [
      "Fast Food"
    ],
    "shortDescription": "Turkish döner in bread or lavash, with sauces and vegetables.",
    "floor": "4",
    "openingHours": "10:00–22:00",
    "website": "https://www.ustadonerci.com/tr/urunler/et-doner-cesitleri/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=101",
    "officialPage": "https://grandmall.com.ge/en/brands/usta-doneri",
    "image": {
      "src": "/images/dining/usta-doneri.webp",
      "alt": "Dining image supplied by the official Usta Dönerci page"
    }
  },
  {
    "name": "Luca Polare",
    "slug": "luca-polare",
    "category": "Desserts",
    "categories": [
      "Desserts",
      "Cafés"
    ],
    "shortDescription": "Gelato and coffee.",
    "floor": "4",
    "website": "https://www.lucapolare.com/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=114",
    "officialPage": "https://grandmall.com.ge/en/brands/luca-polare",
    "image": {
      "src": "/images/dining/luca-polare.webp",
      "alt": "Dining image supplied by the official Luca Polare page"
    }
  }
];

export function getDiningVenue(slug: string) { return diningVenues.find(venue => venue.slug === slug); }
