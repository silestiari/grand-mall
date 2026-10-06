import { Geist, Geist_Mono, Noto_Sans, Noto_Sans_Georgian } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { localizedMetadata } from "@/i18n/metadata";
import "../globals.css";
import "../i18n.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const russian = Noto_Sans({ variable: "--font-russian", subsets: ["cyrillic", "latin"], weight: ["400", "500", "600"], display: "swap" });
const georgian = Noto_Sans_Georgian({ variable: "--font-georgian", subsets: ["georgian"], weight: ["400", "500", "600"], display: "swap" });
export function generateStaticParams() { return routing.locales.map(locale => ({ locale })); }
export async function generateMetadata({ params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  return localizedMetadata(locale, "/", "Grand Mall Batumi — Batumi Starts Here", "Discover shopping, dining and entertainment at Grand Mall Batumi. International fashion and everyday essentials on Georgia’s Black Sea coast.");
}
export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} ${russian.variable} ${georgian.variable} h-full antialiased`}><body className="min-h-full flex flex-col"><NextIntlClientProvider>{children}</NextIntlClientProvider></body></html>;
}
