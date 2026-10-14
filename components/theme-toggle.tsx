"use client";
import { useEffect, useSyncExternalStore } from "react";
import { useCopy } from "@/i18n/copy";

// The inline script in app/[locale]/layout.tsx sets data-theme before paint (saved choice or system).
const THEME_EVENT = "grandmall:theme";
const subscribe = (callback: () => void) => {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
};
const isDark = () => document.documentElement.dataset.theme === "dark";
const storedTheme = () => { try { return localStorage.getItem("theme"); } catch { return null; } };

export function ThemeToggle({ withLabel = false }: { withLabel?: boolean }) {
  const t = useCopy();
  const dark = useSyncExternalStore(subscribe, isDark, () => false);
  // 404 pages re-render <html> on the client after the inline script ran, dropping data-theme.
  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.theme) return;
    const saved = storedTheme();
    root.dataset.theme = saved === "dark" || saved === "light" ? saved : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);
  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* storage can be blocked; the choice then lasts this page view */ }
    window.dispatchEvent(new Event(THEME_EVENT));
  };
  return <button type="button" className="theme-toggle" aria-pressed={dark} aria-label={withLabel ? undefined : t("Dark theme")} onClick={toggle}>
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {dark
        ? <><circle cx="12" cy="12" r="4.5" /><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" /></>
        : <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />}
    </svg>
    {withLabel && <span>{t("Dark theme")}</span>}
  </button>;
}
