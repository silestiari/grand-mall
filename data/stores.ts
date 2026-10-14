import { categories as homepageCategories, type Category } from "@/lib/mall-data";

export const storeCategories = [...homepageCategories, "Books"] as const;
export type StoreCategory = Category | "Books";
export type StoreFloor = "-1" | "1" | "2" | "3" | "4";
export const storeFloors: StoreFloor[] = ["-1", "1", "2", "3", "4"];
export type Store = {
  name: string; slug: string; category: StoreCategory; categories: StoreCategory[];
  floor?: StoreFloor; logo?: { src: string; alt: string }; image?: { src: string; alt: string };
  shortDescription?: string; website?: string; phone?: string; openingHours?: string;
  source: string; officialPage?: string;
};

// Official retail catalogue snapshot, verified 2026-10-04. Includes all retail records,
// excludes the food venue Luca Polare. Legacy upstream slugs are preserved.
// Floors and hours come from each shop record, not inferred from a brand name.
// The repeated phone is the mall contact, so it is not presented as a shop phone.
export const stores: Store[] = [
  {
    "name": "ZARA",
    "slug": "zara",
    "category": "Fashion",
    "categories": [
      "Fashion",
      "Kids"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://www.zara.com/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=61",
    "officialPage": "https://grandmall.com.ge/en/brands/zara",
    "image": {
      "src": "/images/stores/zara.webp",
      "alt": "ZARA fashion image supplied by the official Grand Mall brand page"
    },
    "shortDescription": "Explore ZARA for women, men, children."
  },
  {
    "name": "Massimo Dutti",
    "slug": "massimo-duti",
    "category": "Fashion",
    "categories": [
      "Fashion",
      "Shoes & Bags"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://www.massimodutti.com/ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=62",
    "officialPage": "https://grandmall.com.ge/en/brands/massimo-duti",
    "image": {
      "src": "/images/stores/massimo-duti.webp",
      "alt": "Massimo Dutti fashion image supplied by the official Grand Mall brand page"
    },
    "shortDescription": "Explore Massimo Dutti for women, men."
  },
  {
    "name": "MANGO",
    "slug": "mango",
    "category": "Fashion",
    "categories": [
      "Fashion",
      "Kids"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://shop.mango.com/gb/en/h/women",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=63",
    "officialPage": "https://grandmall.com.ge/en/brands/mango",
    "image": {
      "src": "/images/stores/mango.webp",
      "alt": "MANGO fashion image supplied by the official Grand Mall brand page"
    },
    "shortDescription": "Explore MANGO for women, men, children."
  },
  {
    "name": "CALVIN KLEIN",
    "slug": "calvin-klein",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/en/brand/44-calvin-klein?srsltid=AfmBOoqYs23myBs1NfmyMGmrAvOvZQuzQnTuOJOa9DON2dwQ4rSBTb1I",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=48",
    "officialPage": "https://grandmall.com.ge/en/brands/calvin-klein",
    "image": {
      "src": "/images/stores/calvin-klein.webp",
      "alt": "CALVIN KLEIN fashion image supplied by the official Grand Mall brand page"
    },
    "shortDescription": "CALVIN KLEIN fashion at Grand Mall Batumi."
  },
  {
    "name": "LACOSTE",
    "slug": "lacoste",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/en/brand/73-lacoste?srsltid=AfmBOopwUDg3dyS6_-kT6GlZ8OHzS2t_4q1zsmnSH7NA3CA_nJKnVqq6",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=6",
    "officialPage": "https://grandmall.com.ge/en/brands/lacoste",
    "image": {
      "src": "/images/stores/lacoste.webp",
      "alt": "LACOSTE brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "GUESS",
    "slug": "guess",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/en/brand/83-guess?srsltid=AfmBOoqR-7gKt9ib4V4YFbr2EOu_oPSgwdGgR1yYMQgpbkPgyPpIB5zG",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=12",
    "officialPage": "https://grandmall.com.ge/en/brands/guess",
    "image": {
      "src": "/images/stores/guess.webp",
      "alt": "GUESS brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "CHARLES & KEITH",
    "slug": "charles-keith",
    "category": "Fashion",
    "categories": [
      "Fashion",
      "Shoes & Bags",
      "Accessories",
      "Kids"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://www.charleskeith.com/catalog",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=53",
    "officialPage": "https://grandmall.com.ge/en/brands/charles-keith",
    "image": {
      "src": "/images/stores/charles-keith.webp",
      "alt": "CHARLES & KEITH brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "LC WAIKIKI",
    "slug": "lc-waikiki",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://www.lcwaikiki.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=10",
    "officialPage": "https://grandmall.com.ge/en/brands/lc-waikiki",
    "image": {
      "src": "/images/stores/lc-waikiki.webp",
      "alt": "LC WAIKIKI brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "GANT",
    "slug": "gant",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/ka/brand/96-gant?srsltid=AfmBOop_4HvTxzVltnur1OVCarqgAtLrEuxUPqWhD0cSY0Vv5qX30XkF",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=8",
    "officialPage": "https://grandmall.com.ge/en/brands/gant",
    "image": {
      "src": "/images/stores/gant.webp",
      "alt": "GANT brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "STRADIVARIUS",
    "slug": "stradivarius",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://www.stradivarius.com/ge/?srsltid=AfmBOoq5yly_T2mWhvvo1UEiENxJZzCwbHS1W80sbcZ6ea_WAH5Ka8eh",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=64",
    "officialPage": "https://grandmall.com.ge/en/brands/stradivarius",
    "image": {
      "src": "/images/stores/stradivarius.webp",
      "alt": "STRADIVARIUS brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "ARMANI EXCHANGE",
    "slug": "armani-exchange",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://www.armani.com/en/armani-exchange/experience/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=88",
    "officialPage": "https://grandmall.com.ge/en/brands/armani-exchange",
    "image": {
      "src": "/images/stores/armani-exchange.webp",
      "alt": "ARMANI EXCHANGE brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "PEPELA",
    "slug": "pepela",
    "category": "Kids",
    "categories": [
      "Kids"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://biblusi.ge/products?category=474&page=1",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=3",
    "officialPage": "https://grandmall.com.ge/en/brands/pepela",
    "image": {
      "src": "/images/stores/pepela.webp",
      "alt": "PEPELA brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "SAMSONITE",
    "slug": "samsonite",
    "category": "Shoes & Bags",
    "categories": [
      "Shoes & Bags"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/en/brand/176-samsonite?srsltid=AfmBOoooSc3dc78E-rc7tyYBU7jEYDtoBootVWFDCutUfVwVnywkSnVO",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=4",
    "officialPage": "https://grandmall.com.ge/en/brands/samsonite",
    "image": {
      "src": "/images/stores/samsonite.webp",
      "alt": "SAMSONITE brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "ETAM",
    "slug": "etam",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/en/brand/117-etam?srsltid=AfmBOorE45xsd0LtrOc_qq04OYwVyE1mTtSFOeuIs3ReLkM8CFa5jRbg",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=5",
    "officialPage": "https://grandmall.com.ge/en/brands/etam",
    "image": {
      "src": "/images/stores/etam.webp",
      "alt": "ETAM brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "LEVI'S",
    "slug": "levis",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/en/brand/5-levis?srsltid=AfmBOoovmXlaBY5KfuOephLL8tcnfr9iK33J4hH-37AsAuU3SDueWQyU",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=11",
    "officialPage": "https://grandmall.com.ge/en/brands/levis",
    "image": {
      "src": "/images/stores/levis.webp",
      "alt": "LEVI'S brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "TOMMY HILFIGER",
    "slug": "tommy-hilfiger",
    "category": "Fashion",
    "categories": [
      "Fashion",
      "Kids"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/en/brand/101-tommy-hilfiger?srsltid=AfmBOooR5mh3JnyWEY37izUWrB8Qgf-AXGJL6S1VUOGXo6RyOgJWvnTz",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=13",
    "officialPage": "https://grandmall.com.ge/en/brands/tommy-hilfiger",
    "image": {
      "src": "/images/stores/tommy-hilfiger.webp",
      "alt": "TOMMY HILFIGER brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "KENARI",
    "slug": "kenari",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://kenari.ge/ka",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=14",
    "officialPage": "https://grandmall.com.ge/en/brands/kenari",
    "image": {
      "src": "/images/stores/kenari.webp",
      "alt": "KENARI brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "JACK & JONES",
    "slug": "jack-jones",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/en/brand/110-jackjones?srsltid=AfmBOooS_YAYTSPuLSBDYaQugcaHingGh0-QPK_K50yIQ0Oyte8ESCQd",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=15",
    "officialPage": "https://grandmall.com.ge/en/brands/jack-jones",
    "image": {
      "src": "/images/stores/jack-jones.webp",
      "alt": "JACK & JONES brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Calvin Klein Underwear",
    "slug": "ck-underwear",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/en/brand/498-calvin-klein-underwear?srsltid=AfmBOorEEnLTHnT9fLXB-kCxW-gInmvxHnyze34xsEOPIVdbcq8rKdzv",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=16",
    "officialPage": "https://grandmall.com.ge/en/brands/ck-underwear",
    "image": {
      "src": "/images/stores/ck-underwear.webp",
      "alt": "Calvin Klein Underwear brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "LEE WRANGLER",
    "slug": "lee-wrangler",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://www.lee.com/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=17",
    "officialPage": "https://grandmall.com.ge/en/brands/lee-wrangler",
    "image": {
      "src": "/images/stores/lee-wrangler.webp",
      "alt": "LEE WRANGLER brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "FACTORY",
    "slug": "factory",
    "category": "Shoes & Bags",
    "categories": [
      "Shoes & Bags"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/ka/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=18",
    "officialPage": "https://grandmall.com.ge/en/brands/factory",
    "image": {
      "src": "/images/stores/factory.webp",
      "alt": "FACTORY brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Adidas",
    "slug": "adidas",
    "category": "Sport",
    "categories": [
      "Sport",
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://topsport.ge/en/brand/adidas?srsltid=AfmBOor0HUs5elbAiIXpOB05-L3UiDQixd92w9Ma-342BANRvTWpBTZO",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=19",
    "officialPage": "https://grandmall.com.ge/en/brands/giordano",
    "image": {
      "src": "/images/stores/adidas.webp",
      "alt": "Adidas brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "TOPSPORT",
    "slug": "topsport",
    "category": "Sport",
    "categories": [
      "Sport",
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://topsport.ge/?srsltid=AfmBOopy1iaChpQVUFDSYShm9r_40IU-ElIeoF42apZ6dzLMVCDuwQN1",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=20",
    "officialPage": "https://grandmall.com.ge/en/brands/topsport",
    "image": {
      "src": "/images/stores/topsport.webp",
      "alt": "TOPSPORT brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "ARTTIME",
    "slug": "arttime",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "website": "https://arttime.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=21",
    "officialPage": "https://grandmall.com.ge/en/brands/arttime",
    "image": {
      "src": "/images/stores/arttime.webp",
      "alt": "ARTTIME brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "RONIKO",
    "slug": "roniko",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://roniko.ge/?srsltid=AfmBOoqMdeChKXQADFBTMGtWIIyiIas0-qKG9UW3IiRDWWvqFGJMa0DS",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=22",
    "officialPage": "https://grandmall.com.ge/en/brands/roniko",
    "image": {
      "src": "/images/stores/roniko.webp",
      "alt": "RONIKO brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Zoommer",
    "slug": "zoomer",
    "category": "Electronics",
    "categories": [
      "Electronics"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://zoommer.ge/?srsltid=AfmBOorz3h69gt-4fXO_PKp_26W20koGfHys5fWWZz5oA8cogY1f5qiQ",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=23",
    "officialPage": "https://grandmall.com.ge/en/brands/zoomer",
    "image": {
      "src": "/images/stores/zoomer.webp",
      "alt": "Zoommer brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "MINISO",
    "slug": "miniso",
    "category": "Kids",
    "categories": [
      "Kids"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://www.miniso.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=24",
    "officialPage": "https://grandmall.com.ge/en/brands/miniso",
    "image": {
      "src": "/images/stores/miniso.webp",
      "alt": "MINISO brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Okaïdi",
    "slug": "okaidi",
    "category": "Kids",
    "categories": [
      "Kids",
      "Fashion"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://okaidi.ge/?",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=25",
    "officialPage": "https://grandmall.com.ge/en/brands/okaidi",
    "image": {
      "src": "/images/stores/okaidi.webp",
      "alt": "Okaïdi brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "KIDS GALLERY",
    "slug": "kids-gallery",
    "category": "Kids",
    "categories": [
      "Kids",
      "Fashion"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://www.facebook.com/KidsGallery.ge/?locale=ka_GE",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=26",
    "officialPage": "https://grandmall.com.ge/en/brands/kids-gallery",
    "image": {
      "src": "/images/stores/kids-gallery.webp",
      "alt": "KIDS GALLERY brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "MANAMO",
    "slug": "manamo",
    "category": "Home",
    "categories": [
      "Home"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://manamohome.com/ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=27",
    "officialPage": "https://grandmall.com.ge/en/brands/manamo",
    "image": {
      "src": "/images/stores/manamo.webp",
      "alt": "MANAMO brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "HOME",
    "slug": "home",
    "category": "Home",
    "categories": [
      "Home"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://hstore.ge/ka",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=28",
    "officialPage": "https://grandmall.com.ge/en/brands/home",
    "image": {
      "src": "/images/stores/home.webp",
      "alt": "HOME brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "SEASON",
    "slug": "season",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=29",
    "officialPage": "https://grandmall.com.ge/en/brands/season"
  },
  {
    "name": "SUPER",
    "slug": "super",
    "category": "Home",
    "categories": [
      "Home"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://superstore.ge/?srsltid=AfmBOorPxOcVbUJxRxbTvDs-x0rH90_LcVxAJXWlwdyj-POAEh03nMxm",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=30",
    "officialPage": "https://grandmall.com.ge/en/brands/super",
    "image": {
      "src": "/images/stores/super.webp",
      "alt": "SUPER brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "iTechnics",
    "slug": "itechnics",
    "category": "Electronics",
    "categories": [
      "Electronics"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://itechnics.ge/en/?utm_source=google&utm_medium=paid&utm_campaign=search&utm_term=competitors&utm_source=google&utm_medium=cpc&utm_campaign=search_campaign&utm_adgroup={adgroup}&utm_content=813537248549&gad_source=1&gad_campaignid=23957842049&gbraid=0AAAAADAnT2pWumfI5Gvf2_GkrfpRDzw8u&gclid=Cj0KCQjw2OnUBhC2ARIsACKyfaGStajL1Lbdl_qmEE0Z9iWsEF7Xd3PS9-crTLXrqr4kZhJ_JFv9yc0aAqycEALw_wcB",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=31",
    "officialPage": "https://grandmall.com.ge/en/brands/itechnics",
    "image": {
      "src": "/images/stores/itechnics.webp",
      "alt": "iTechnics brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "SAREV",
    "slug": "sarev",
    "category": "Home",
    "categories": [
      "Home"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://www.sarev.com.tr/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=32",
    "officialPage": "https://grandmall.com.ge/en/brands/sarev",
    "image": {
      "src": "/images/stores/sarev.webp",
      "alt": "SAREV brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "PANCHO",
    "slug": "pancho",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=33",
    "officialPage": "https://grandmall.com.ge/en/brands/pancho"
  },
  {
    "name": "Jacadi",
    "slug": "jacadi",
    "category": "Kids",
    "categories": [
      "Kids",
      "Fashion"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://www.facebook.com/JacadiGeorgia/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=34",
    "officialPage": "https://grandmall.com.ge/en/brands/jacadi",
    "image": {
      "src": "/images/stores/jacadi.webp",
      "alt": "Jacadi brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "B&G STORE",
    "slug": "bg-store",
    "category": "Kids",
    "categories": [
      "Kids",
      "Fashion"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://bgstore.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=35",
    "officialPage": "https://grandmall.com.ge/en/brands/bg-store",
    "image": {
      "src": "/images/stores/bg-store.webp",
      "alt": "B&G STORE brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "MiStore",
    "slug": "xiaomi",
    "category": "Electronics",
    "categories": [
      "Electronics"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://mstore.ge/?srsltid=AfmBOoql4vMBQ45th0OqM6jBGFlKtXNrdUtczndUvekBe_9eS_2i0Osy",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=36",
    "officialPage": "https://grandmall.com.ge/en/brands/xiaomi",
    "image": {
      "src": "/images/stores/xiaomi.webp",
      "alt": "MiStore brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "MOBILUX",
    "slug": "mobilux",
    "category": "Electronics",
    "categories": [
      "Electronics"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://www.mobilux.ge/ka",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=42",
    "officialPage": "https://grandmall.com.ge/en/brands/mobilux",
    "image": {
      "src": "/images/stores/mobilux.webp",
      "alt": "MOBILUX brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Studio by shoes gallery",
    "slug": "studio-by-shoes-gallery",
    "category": "Shoes & Bags",
    "categories": [
      "Shoes & Bags"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://icrshop.ge/catalog?shop=shop_studio-shoes-gallery&srsltid=AfmBOooNBLikhKNe8uBHSsvcHaaY_8vmt1wc1VIMFwbavRFujHAvuM7i",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=43",
    "officialPage": "https://grandmall.com.ge/en/brands/studio-by-shoes-gallery",
    "image": {
      "src": "/images/stores/studio-by-shoes-gallery.webp",
      "alt": "Studio by shoes gallery brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "YVES ROCHER",
    "slug": "yves-rocher",
    "category": "Beauty",
    "categories": [
      "Beauty"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://www.yves-rocher.ge/ka",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=44",
    "officialPage": "https://grandmall.com.ge/en/brands/yves-rocher",
    "image": {
      "src": "/images/stores/yves-rocher.webp",
      "alt": "YVES ROCHER brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "LUTECIA",
    "slug": "lutecia",
    "category": "Beauty",
    "categories": [
      "Beauty"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://www.lutecia.ge/ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=45",
    "officialPage": "https://grandmall.com.ge/en/brands/lutecia",
    "image": {
      "src": "/images/stores/lutecia.webp",
      "alt": "LUTECIA brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "SIRIUS JEWELERY",
    "slug": "sirius-jewelery",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=46",
    "officialPage": "https://grandmall.com.ge/en/brands/sirius-jewelery",
    "image": {
      "src": "/images/stores/sirius-jewelery.webp",
      "alt": "SIRIUS JEWELERY brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "GOLDEN JEWELLERY",
    "slug": "golden",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://www.facebook.com/mygolden.ge/?locale=ka_GE",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=50",
    "officialPage": "https://grandmall.com.ge/en/brands/golden",
    "image": {
      "src": "/images/stores/golden.webp",
      "alt": "GOLDEN JEWELLERY brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "GARFIELD",
    "slug": "garfield",
    "category": "Kids",
    "categories": [
      "Kids",
      "Fashion"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://www.facebook.com/garfieldclothing",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=52",
    "officialPage": "https://grandmall.com.ge/en/brands/garfield",
    "image": {
      "src": "/images/stores/garfield.webp",
      "alt": "GARFIELD brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "ALDO",
    "slug": "aldo",
    "category": "Shoes & Bags",
    "categories": [
      "Shoes & Bags"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://www.aldoshoes.com/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=55",
    "officialPage": "https://grandmall.com.ge/en/brands/aldo",
    "image": {
      "src": "/images/stores/aldo.webp",
      "alt": "ALDO brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "PARFOIS",
    "slug": "parfois",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://www.parfois.com/en/ge/home/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=56",
    "officialPage": "https://grandmall.com.ge/en/brands/parfois",
    "image": {
      "src": "/images/stores/parfois.webp",
      "alt": "PARFOIS brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "PENTI",
    "slug": "penti",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://www.facebook.com/pentigeorgia/?locale=ka_GE",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=57",
    "officialPage": "https://grandmall.com.ge/en/brands/penti",
    "image": {
      "src": "/images/stores/penti.webp",
      "alt": "PENTI brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "OVS KIDS",
    "slug": "ovs-kids",
    "category": "Kids",
    "categories": [
      "Kids",
      "Fashion"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://www.ovsfashion.com/en/es/stores/georgia",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=58",
    "officialPage": "https://grandmall.com.ge/en/brands/ovs-kids",
    "image": {
      "src": "/images/stores/ovs-kids.webp",
      "alt": "OVS KIDS brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "YATAS BEDDING",
    "slug": "yatas-bedding",
    "category": "Home",
    "categories": [
      "Home"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://www.yatasbedding.com/en-EN/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=59",
    "officialPage": "https://grandmall.com.ge/en/brands/yatas-bedding",
    "image": {
      "src": "/images/stores/yatas-bedding.webp",
      "alt": "YATAS BEDDING brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "ENGLISH HOME",
    "slug": "english-home",
    "category": "Home",
    "categories": [
      "Home"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=60",
    "officialPage": "https://grandmall.com.ge/en/brands/english-home",
    "image": {
      "src": "/images/stores/english-home.webp",
      "alt": "ENGLISH HOME brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "OYSHO",
    "slug": "oysho",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://www.oysho.com/ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=65",
    "officialPage": "https://grandmall.com.ge/en/brands/oysho",
    "image": {
      "src": "/images/stores/oysho.webp",
      "alt": "OYSHO brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "KIKO MILANO",
    "slug": "kiko-milano",
    "category": "Beauty",
    "categories": [
      "Beauty"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://kikocosmetics.com.ge/?srsltid=AfmBOoqs0efmr349dYtaaUyc-0MalJYOcMZkpg9ZSI0vkRj3dZWpKSKX",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=66",
    "officialPage": "https://grandmall.com.ge/en/brands/kiko-milano",
    "image": {
      "src": "/images/stores/kiko-milano.webp",
      "alt": "KIKO MILANO brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "SUNGLASS Hut",
    "slug": "sunglass-hut",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://time.ge/?srsltid=AfmBOorOIrrRUmXRdThk0jOp9AfgGpq_QK8w7egsp8amVklrKBFtBbqL",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=67",
    "officialPage": "https://grandmall.com.ge/en/brands/sunglass-hut",
    "image": {
      "src": "/images/stores/sunglass-hut.webp",
      "alt": "SUNGLASS Hut brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Icity",
    "slug": "apple-city",
    "category": "Electronics",
    "categories": [
      "Electronics"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://icity.ge/shop/?min_price=11580&max_price=15440&post_type=product&filter_color=gray",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=68",
    "officialPage": "https://grandmall.com.ge/en/brands/apple-city",
    "image": {
      "src": "/images/stores/apple-city.webp",
      "alt": "Icity brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "BergHOFF",
    "slug": "berghoff",
    "category": "Home",
    "categories": [
      "Home"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://berghoffshop.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=72",
    "officialPage": "https://grandmall.com.ge/en/brands/berghoff",
    "image": {
      "src": "/images/stores/berghoff.webp",
      "alt": "BergHOFF brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "TIME",
    "slug": "time",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://time.ge/?srsltid=AfmBOorOIrrRUmXRdThk0jOp9AfgGpq_QK8w7egsp8amVklrKBFtBbqL",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=73",
    "officialPage": "https://grandmall.com.ge/en/brands/time",
    "image": {
      "src": "/images/stores/time.webp",
      "alt": "TIME brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "CARTERS",
    "slug": "carters",
    "category": "Kids",
    "categories": [
      "Kids",
      "Fashion"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://carters.ge/?srsltid=AfmBOoo8yj-LlUvuuOAJUo3neBCI5p_FuktNLxtkIuF7wExsvQw1Tqvt",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=77",
    "officialPage": "https://grandmall.com.ge/en/brands/carters",
    "image": {
      "src": "/images/stores/carters.webp",
      "alt": "CARTERS brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Shavdia",
    "slug": "shavdia",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://shavdia.store/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=78",
    "officialPage": "https://grandmall.com.ge/en/brands/tefal",
    "image": {
      "src": "/images/stores/shavdia.webp",
      "alt": "Shavdia brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "CARPISA",
    "slug": "carpisa",
    "category": "Shoes & Bags",
    "categories": [
      "Shoes & Bags"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://www.facebook.com/CarpisaOfficial",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=79",
    "officialPage": "https://grandmall.com.ge/en/brands/carpisa",
    "image": {
      "src": "/images/stores/carpisa.webp",
      "alt": "CARPISA brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "BIBLUSI",
    "slug": "biblusi",
    "category": "Books",
    "categories": [
      "Books"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://biblusi.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=87",
    "officialPage": "https://grandmall.com.ge/en/brands/biblusi",
    "image": {
      "src": "/images/stores/biblusi.webp",
      "alt": "BIBLUSI brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "COLE HAAN",
    "slug": "cole-haan",
    "category": "Shoes & Bags",
    "categories": [
      "Shoes & Bags"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://colehaan.ge/pages/women",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=89",
    "officialPage": "https://grandmall.com.ge/en/brands/cole-haan",
    "image": {
      "src": "/images/stores/cole-haan.webp",
      "alt": "COLE HAAN brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "G-STAR RAW",
    "slug": "g-star-raw",
    "category": "Fashion",
    "categories": [
      "Fashion"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://dressup.ge/ka/brand/392-g-star-raw?srsltid=AfmBOopdnSD7t_lmmfxKxDQ3R40XfP39kSFOcUm5ci_Tw2O2fsLAeQeo",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=90",
    "officialPage": "https://grandmall.com.ge/en/brands/g-star-raw",
    "image": {
      "src": "/images/stores/g-star-raw.webp",
      "alt": "G-STAR RAW brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "AFFLELOU Paris",
    "slug": "afflelou-paris",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "website": "https://afflelouparis.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=94",
    "officialPage": "https://grandmall.com.ge/en/brands/afflelou-paris",
    "image": {
      "src": "/images/stores/afflelou-paris.webp",
      "alt": "AFFLELOU Paris brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "JPC PHARMACY",
    "slug": "jpc-pharmacy",
    "category": "Services",
    "categories": [
      "Services",
      "Beauty"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://gpc.ge/ka",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=95",
    "officialPage": "https://grandmall.com.ge/en/brands/jpc-pharmacy",
    "image": {
      "src": "/images/stores/jpc-pharmacy.webp",
      "alt": "JPC PHARMACY brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "XS TOYS",
    "slug": "xs-toys",
    "category": "Kids",
    "categories": [
      "Kids"
    ],
    "floor": "3",
    "openingHours": "10:00–22:00",
    "website": "https://biblusi.ge/products?category=456&page=1",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=97",
    "officialPage": "https://grandmall.com.ge/en/brands/xs-toys",
    "image": {
      "src": "/images/stores/xs-toys.webp",
      "alt": "XS TOYS brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "TERENZI BOUTIQUE",
    "slug": "terenzi-boutique",
    "category": "Beauty",
    "categories": [
      "Beauty"
    ],
    "floor": "1",
    "openingHours": "10:00–22:00",
    "website": "https://terenziboutique.com/en/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=98",
    "officialPage": "https://grandmall.com.ge/en/brands/terenzi-boutique",
    "image": {
      "src": "/images/stores/terenzi-boutique.webp",
      "alt": "TERENZI BOUTIQUE brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Pandora",
    "slug": "pandora",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "1",
    "website": "https://pandorageorgia.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=102",
    "officialPage": "https://grandmall.com.ge/en/brands/pandora",
    "image": {
      "src": "/images/stores/pandora.webp",
      "alt": "Pandora brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Dyson",
    "slug": "dyson",
    "category": "Electronics",
    "categories": [
      "Electronics"
    ],
    "floor": "1",
    "website": "https://www.dyson.com/en",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=103",
    "officialPage": "https://grandmall.com.ge/en/brands/dyson",
    "image": {
      "src": "/images/stores/dyson.webp",
      "alt": "Dyson brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "M110Beauty",
    "slug": "m110beauty",
    "category": "Beauty",
    "categories": [
      "Beauty"
    ],
    "floor": "1",
    "website": "https://www.facebook.com/M11Beauty",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=104",
    "officialPage": "https://grandmall.com.ge/en/brands/m110beauty",
    "image": {
      "src": "/images/stores/m110beauty.webp",
      "alt": "M110Beauty brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Nuki Cosmetics",
    "slug": "nuki-cosmetics",
    "category": "Beauty",
    "categories": [
      "Beauty"
    ],
    "floor": "1",
    "website": "https://nukicosmetics.com/shop",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=105",
    "officialPage": "https://grandmall.com.ge/en/brands/nuki-cosmetics",
    "image": {
      "src": "/images/stores/nuki-cosmetics.webp",
      "alt": "Nuki Cosmetics brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Piel Naturals",
    "slug": "piel-naturalsi",
    "category": "Beauty",
    "categories": [
      "Beauty"
    ],
    "floor": "1",
    "website": "https://www.piel.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=106",
    "officialPage": "https://grandmall.com.ge/en/brands/piel-naturalsi",
    "image": {
      "src": "/images/stores/piel-naturalsi.webp",
      "alt": "Piel Naturals brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Jungle Fever",
    "slug": "jungle-fever",
    "category": "Beauty",
    "categories": [
      "Beauty"
    ],
    "floor": "1",
    "website": "https://jfgeorgia.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=107",
    "officialPage": "https://grandmall.com.ge/en/brands/jungle-fever",
    "image": {
      "src": "/images/stores/jungle-fever.webp",
      "alt": "Jungle Fever brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "More Beauty",
    "slug": "more-beauty",
    "category": "Beauty",
    "categories": [
      "Beauty"
    ],
    "floor": "1",
    "website": "https://morebeauty.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=108",
    "officialPage": "https://grandmall.com.ge/en/brands/more-beauty",
    "image": {
      "src": "/images/stores/more-beauty.webp",
      "alt": "More Beauty brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Redberry",
    "slug": "redberi",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "website": "https://myredberry.ge/?srsltid=AfmBOoq2DSlfEYPkA64Onaopd9d3X21admxrF6z7n6P0XiJLu32kB2fe",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=109",
    "officialPage": "https://grandmall.com.ge/en/brands/redberi",
    "image": {
      "src": "/images/stores/redberi.webp",
      "alt": "Redberry brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Baccarat Jewelry",
    "slug": "baccarat-jewelery",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "website": "https://shop.bakara.ge/en/baccarat",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=110",
    "officialPage": "https://grandmall.com.ge/en/brands/baccarat-jewelery",
    "image": {
      "src": "/images/stores/baccarat-jewelery.webp",
      "alt": "Baccarat Jewelry brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "Tresor",
    "slug": "tresori",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "website": "https://www.tresor.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=111",
    "officialPage": "https://grandmall.com.ge/en/brands/tresori",
    "image": {
      "src": "/images/stores/tresori.webp",
      "alt": "Tresor brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "GMT",
    "slug": "jiemti",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "website": "https://gmt4.ge/",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=112",
    "officialPage": "https://grandmall.com.ge/en/brands/jiemti",
    "image": {
      "src": "/images/stores/jiemti.webp",
      "alt": "GMT brand image supplied by the official Grand Mall brand page"
    }
  },
  {
    "name": "MODI",
    "slug": "modi",
    "category": "Accessories",
    "categories": [
      "Accessories"
    ],
    "floor": "2",
    "openingHours": "10:00–22:00",
    "source": "https://grandmall.com.ge/app/GetShopData.php?id=115",
    "image": {
      "src": "/images/stores/modi.webp",
      "alt": "MODI brand image supplied by the official Grand Mall brand page"
    }
  }
];

export function getStore(slug: string) { return stores.find(store => store.slug === slug); }
