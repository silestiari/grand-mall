import { routing } from "@/i18n/routing";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://grand-mall-three.vercel.app",
);

export function localizedUrl(locale: string, pathname: string) {
  return new URL(`/${locale}${pathname === "/" ? "" : pathname}`, siteUrl).toString();
}

export function languageAlternates(pathname: string) {
  return {
    ...Object.fromEntries(routing.locales.map(locale => [locale, localizedUrl(locale, pathname)])),
    "x-default": localizedUrl(routing.defaultLocale, pathname),
  };
}
