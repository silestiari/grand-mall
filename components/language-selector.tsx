"use client";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { useCopy } from "@/i18n/copy";
import { localeHref } from "@/i18n/navigation";
import { subscribeToUrl } from "@/lib/url-query";
const languages = [{ locale: "ka", label: "GE", name: "ქართული" }, { locale: "en", label: "EN", name: "English" }, { locale: "ru", label: "RU", name: "Русский" }];
const snapshot = () => window.location.search + window.location.hash;
export function LanguageSelector({ footer = false }: { footer?: boolean }) {
  const locale = useLocale(), pathname = usePathname(), t = useCopy();
  const suffix = useSyncExternalStore(subscribeToUrl, snapshot, () => "");
  return <nav className={footer ? "footer-languages" : "languages"} aria-label={t(footer ? "Website language" : "Header language")}>
    {footer && <h2 className="eyebrow">{t("Language")}</h2>}
    {languages.map((language, index) => {
      const label = footer ? language.name : language.label;
      const link = <a href={localeHref(pathname, language.locale) + suffix} lang={language.locale} hrefLang={language.locale} aria-current={locale === language.locale ? "true" : undefined} className={locale === language.locale ? "current" : undefined} aria-label={t("Switch language to {value0}", { value0: language.name })}>{label}</a>;
      return footer ? <span key={language.locale} className="footer-language-option">{link}</span> : <span key={language.locale} className="language-option">{index > 0 && <span aria-hidden="true">/</span>}{link}</span>;
    })}
  </nav>;
}
