import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";
export const { Link, usePathname, useRouter, redirect, getPathname } = createNavigation(routing);
export function localeHref(href: string, locale: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  return `/${locale}${href === "/" ? "" : href.replace(/^\/(en|ru|ka)(?=\/|\?|#|$)/, "")}`;
}
