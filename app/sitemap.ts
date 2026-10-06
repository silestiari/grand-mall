import type { MetadataRoute } from "next";
import { stores } from "@/data/stores";
import { diningVenues } from "@/data/dining";
import { entertainmentVenues } from "@/data/entertainment";
import { getPublishedEvents } from "@/data/events";
import { routing } from "@/i18n/routing";
import { languageAlternates, localizedUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/stores", "/dining", "/entertainment", "/map", "/visit", "/events", "/offers",
    ...stores.map(store => `/stores/${store.slug}`),
    ...diningVenues.map(venue => `/dining/${venue.slug}`),
    ...entertainmentVenues.map(venue => `/entertainment/${venue.slug}`),
    ...getPublishedEvents().map(event => `/events/${event.slug}`),
  ];

  return paths.flatMap(pathname => routing.locales.map(locale => ({
    url: localizedUrl(locale, pathname),
    alternates: { languages: languageAlternates(pathname) },
  })));
}
