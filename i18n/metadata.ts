import type { Metadata } from "next";
import { getCopy } from "./server";
import { routing } from "./routing";
import { languageAlternates, localizedUrl, siteUrl } from "@/lib/site-url";
// Missing pages get a title only: no canonical, alternates or share URL for a 404.
export async function notFoundMetadata(locale: string, title = "Page not found — Grand Mall Batumi"): Promise<Metadata> {
  const t = await getCopy(locale);
  return { title: t(title), robots: { index: false, follow: true } };
}
export async function localizedMetadata(locale: string, pathname: string, title: string, description?: string): Promise<Metadata> {
  const t = await getCopy(locale);
  description ??= "Shopping, dining and entertainment at Grand Mall Batumi.";
  const localizedTitle = t(title);
  const localizedDescription = t(description);
  const image = {
    url: "/images/grand-mall-share.png",
    width: 1200,
    height: 630,
    alt: "Grand Mall Batumi",
  };
  return {
    title: localizedTitle,
    description: localizedDescription,
    metadataBase: siteUrl,
    alternates: {
      canonical: localizedUrl(locale, pathname),
      languages: languageAlternates(pathname),
    },
    openGraph: {
      title: localizedTitle,
      description: localizedDescription,
      url: localizedUrl(locale, pathname),
      locale: locale === "ka" ? "ka_GE" : locale === "ru" ? "ru_RU" : "en_GB",
      siteName: "Grand Mall Batumi",
      type: "website",
      images: [image],
      alternateLocale: routing.locales.filter(language => language !== locale).map(language => language === "ka" ? "ka_GE" : language === "ru" ? "ru_RU" : "en_GB"),
    },
    twitter: {
      card: "summary_large_image",
      title: localizedTitle,
      description: localizedDescription,
      images: [image],
    },
  };
}
