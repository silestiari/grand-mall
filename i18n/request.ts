import { locale as rootLocale } from "next/root-params";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./routing";
import english from "@/messages/en.json";
export default getRequestConfig(async ({ locale }) => {
  const selected = locale ?? await rootLocale();
  if (!hasLocale(routing.locales, selected)) notFound();
  const messages = (await import(`../messages/${selected}.json`)).default;
  return { locale: selected, timeZone: "Asia/Tbilisi", messages: { ...messages, copy: { ...english.copy, ...messages.copy } } };
});
