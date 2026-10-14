"use client";
import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { DirectoryCard, DirectoryCardList } from "./directory-card";
import { diningVenues, diningCategories, type DiningCategory } from "@/data/dining";
const normalise = (value: string) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
export function DiningDirectory() {
    const t = useCopy();
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<DiningCategory>("All");
    const filtered = diningVenues.filter(venue => normalise(venue.name).includes(normalise(query.trim())) && (category === "All" || venue.categories.includes(category)));
    const reset = () => { setQuery(""); setCategory("All"); };
    return <section className="dining-directory-page" id="dining-directory" aria-labelledby="dining-directory-title">
    <div className="section-topline"><p className="eyebrow">{t("The dining directory")}</p><span className="eyebrow">{t("Your next stop")}</span></div>
    <h2 id="dining-directory-title">{t("FIND YOUR")}<br />{t("TABLE")}<span className="accent">.</span></h2>
    <div className="directory-search"><label className="eyebrow" htmlFor="dining-search">{t("Search caf\u00e9s & restaurants")}</label><div><input id="dining-search" type="search" placeholder={t("Search dining...")} value={query} onChange={event => setQuery(event.target.value)}/></div></div>
    <div className="directory-categories" role="group" aria-label={t("Filter dining by category")}>{diningCategories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{t(item)}</button>)}</div>
    <div className="dining-result-bar"><p className="eyebrow" role="status">{filtered.length} {t.count("place", filtered.length)}</p><button className="directory-reset eyebrow" onClick={reset}>{t("Clear filters ")}<span aria-hidden="true">↺</span></button></div>
    {filtered.length ? <DirectoryCardList>{[...filtered].sort((a, b) => a.name.localeCompare(b.name, "en")).map(venue => <DirectoryCard key={venue.slug} name={venue.name} href={`/dining/${venue.slug}`} category={category === "All" ? t(venue.category) : t(category)} floor={venue.floor} image={venue.image} tone="dining" />)}</DirectoryCardList> : <div className="directory-empty"><h3>{t("No dining places found.")}</h3><p>{t("Try another name or category.")}</p><button className="experience-link" onClick={reset}>{t("Clear filters ")}<span aria-hidden="true">→</span></button></div>}
    <div className="directory-bottom"><p>{t("Find your way to the table.")}</p><Link className="experience-link" href="/map">{t("Open mall map ")}<span aria-hidden="true">↗</span></Link></div>
  </section>;
}
