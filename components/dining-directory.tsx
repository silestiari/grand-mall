"use client";
import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { diningVenues, diningCategories, type DiningCategory } from "@/data/dining";
const normalise = (value: string) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
export function DiningDirectory() {
    const t = useCopy();
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<DiningCategory>("All");
    const filtered = diningVenues.filter(venue => normalise(venue.name).includes(normalise(query.trim())) && (category === "All" || venue.categories.includes(category)));
    const reset = () => { setQuery(""); setCategory("All"); };
    return <section className="dining-directory-page" id="dining-directory" aria-labelledby="dining-directory-title">
    <div className="section-topline"><p className="eyebrow">{t("THE DINING DIRECTORY")}</p><span className="eyebrow">{t("YOUR NEXT STOP")}</span></div>
    <h2 id="dining-directory-title">{t("FIND YOUR")}<br />{t("TABLE")}<span className="accent">.</span></h2>
    <div className="directory-search"><label className="eyebrow" htmlFor="dining-search">{t("SEARCH CAF\u00C9S & RESTAURANTS")}</label><div><input id="dining-search" type="search" placeholder={t("Search dining...")} value={query} onChange={event => setQuery(event.target.value)}/></div></div>
    <div className="directory-categories" role="group" aria-label={t("Filter dining by category")}>{diningCategories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{t(item)}</button>)}</div>
    <div className="dining-result-bar"><p className="eyebrow" role="status">{filtered.length} {t.count("place", filtered.length)}</p><button className="directory-reset eyebrow" onClick={reset}>{t("CLEAR FILTERS ")}<span aria-hidden="true">↺</span></button></div>
    <div className="directory-column-labels eyebrow" aria-hidden="true"><span>{t("VENUE / A\u2013Z")}</span><span>{t("CATEGORY")}</span><span>{t("FLOOR")}</span><span>{t("EXPLORE")}</span></div>
    {filtered.length ? <ul className="directory-list">{[...filtered].sort((a, b) => a.name.localeCompare(b.name, "en")).map(venue => <li key={venue.slug}><Link href={`/dining/${venue.slug}`} prefetch={false} className="directory-row"><span className="directory-name">{venue.name}</span><span className="directory-category">{category === "All" ? t(venue.category) : t(category)}</span>{venue.floor && <span className="directory-level"><small>{t("Floor")}</small> {venue.floor}</span>}<span className="directory-arrow" aria-hidden="true">↗</span></Link></li>)}</ul> : <div className="directory-empty"><h3>{t("No dining places found.")}</h3><p>{t("Try another name or category.")}</p><button className="experience-link" onClick={reset}>{t("CLEAR FILTERS ")}<span aria-hidden="true">→</span></button></div>}
    <div className="directory-bottom"><p>{t("Find your way to the table.")}</p><Link className="experience-link" href="/map">{t("OPEN MALL MAP ")}<span aria-hidden="true">↗</span></Link></div>
  </section>;
}
