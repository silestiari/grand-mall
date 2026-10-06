import type { Metadata } from "next";
import { getCopy } from "./server";
import { routing } from "./routing";
export async function localizedMetadata(locale: string, pathname: string, title: string, description?: string): Promise<Metadata> {
  const t = await getCopy(locale);
  description ??= "Shopping, dining and entertainment at Grand Mall Batumi.";
  const base = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://grandmall.com.ge");
  const url = (language: string) => new URL(`/${language}${pathname === "/" ? "" : pathname}`, base).toString();
  return { title: t(title), description: description ? t(description) : undefined, metadataBase: base, alternates: { canonical: url(locale), languages: { ...Object.fromEntries(routing.locales.map(language => [language, url(language)])), "x-default": url("en") } }, openGraph: { title: t(title), description: description ? t(description) : undefined, url: url(locale), locale: locale === "ka" ? "ka_GE" : locale === "ru" ? "ru_RU" : "en_GB", siteName: "Grand Mall Batumi", type: "website", images: [{ url: "/images/grand-mall-share.png", width: 1200, height: 630, alt: "Grand Mall Batumi" }], alternateLocale: routing.locales.filter(language => language !== locale).map(language => language === "ka" ? "ka_GE" : language === "ru" ? "ru_RU" : "en_GB") } };
}
