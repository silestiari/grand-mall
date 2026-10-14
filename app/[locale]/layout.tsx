import { Geist, Noto_Sans, Noto_Sans_Georgian } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import Script from "next/script";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import "../globals.css";
import "../i18n.css";
import "../theme.css";
// Runs before hydration (beforeInteractive is injected into the initial HTML of every page, 404s included)
// so a saved or system dark preference does not flash the light theme.
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// Locale fonts load on demand via app/i18n.css; preloading them on every locale cost ~120 KB on /en.
const russian = Noto_Sans({ variable: "--font-russian", subsets: ["cyrillic", "latin"], weight: ["400", "500", "600"], display: "swap", preload: false });
const georgian = Noto_Sans_Georgian({ variable: "--font-georgian", subsets: ["georgian"], weight: ["400", "500", "600"], display: "swap", preload: false });
export function generateStaticParams() { return routing.locales.map(locale => ({ locale })); }
// Page-specific canonical/alternates live in each page; 404s inherit only these defaults.
export const metadata: Metadata = { metadataBase: siteUrl, title: "Grand Mall Batumi" };
export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  // suppressHydrationWarning: the theme script sets data-theme on <html> before React hydrates.
  return <html lang={locale} suppressHydrationWarning className={`${geistSans.variable} ${russian.variable} ${georgian.variable} h-full antialiased`}><body className="min-h-full flex flex-col"><Script id="theme" strategy="beforeInteractive">{themeScript}</Script><NextIntlClientProvider>{children}</NextIntlClientProvider></body></html>;
}
