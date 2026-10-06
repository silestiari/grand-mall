export function normaliseCopy(value: string) {
  return value.replace(/&apos;/g, "'").replace(/[’‘]/g, "'").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
export function copyKey(source: string) {
  let hash = 2166136261;
  for (const character of normaliseCopy(source)) { hash ^= character.codePointAt(0)!; hash = Math.imul(hash, 16777619); }
  return `m${(hash >>> 0).toString(16)}`;
}
export type CopyMessages = { copy: Record<string, string>; counts: { store: string[]; place: string[] } };
export function createCopy(locale: string, messages: CopyMessages) {
  const copy = (source: string, values?: Record<string, string | number>) => {
    const decoded = source.replace(/&apos;/g, "'").replace(/&amp;/g, "&");
    let value = locale === "en" ? decoded : messages.copy[copyKey(source)] ?? decoded.trim();
    const casing = decoded.replace(/\{\w+\}/g, "").trim();
    if (locale !== "en" && /[A-Z]/.test(casing) && casing === casing.toUpperCase()) value = value.toLocaleUpperCase(locale);
    if (values) value = value.replace(/\{(\w+)\}/g, (match, key) => String(values[key] ?? match));
    return (locale !== "en" && /^\s/.test(decoded) ? " " : "") + value + (locale !== "en" && /\s$/.test(decoded) ? " " : "");
  };
  const count = (kind: "store" | "place", quantity: number) => {
    const plural = new Intl.PluralRules(locale).select(quantity);
    return messages.counts[kind][plural === "one" ? 0 : plural === "few" ? 1 : 2].toLocaleUpperCase(locale);
  };
  return Object.assign(copy, { locale, count });
}
