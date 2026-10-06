"use client";
import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { DirectoryCard, DirectoryCardList } from "./directory-card";
import { stores, storeCategories, storeFloors, type StoreCategory, type StoreFloor } from "@/data/stores";
export function StoreDirectory() {
    const t = useCopy();
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<StoreCategory>("All");
    const [floor, setFloor] = useState<StoreFloor | "all">("all");
    const normalise = (value: string) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
    const filtered = stores.filter(store => normalise(store.name).includes(normalise(query.trim())) && (category === "All" || store.categories.includes(category)) && (floor === "all" || store.floor === floor));
    const reset = () => { setQuery(""); setCategory("All"); setFloor("all"); };
    return (<section className="store-directory" aria-label={t("Store directory")}>
      <div className="directory-search">
        <label className="eyebrow" htmlFor="directory-search">{t("FIND YOUR FAVOURITE")}</label>
        <div><input id="directory-search" type="search" placeholder={t("Search stores...")} value={query} onChange={event => setQuery(event.target.value)}/></div>
      </div>
      <div className="directory-categories" role="group" aria-label={t("Filter stores by category")}>
        {storeCategories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{t(item)}</button>)}
      </div>
      <div className="directory-floor-bar">
        <div className="directory-floor"><label htmlFor="directory-floor" className="eyebrow">{t("LEVEL")}</label><select id="directory-floor" value={floor} onChange={event => setFloor(event.target.value as StoreFloor | "all")}><option value="all">{t("All Floors")}</option>{storeFloors.map(level => <option key={level} value={level}>{t("Floor ")}{level === "-1" ? "−1" : level}</option>)}</select></div>
        <p className="eyebrow directory-count" role="status">{filtered.length} {t.count("store", filtered.length)}</p>
        <button className="directory-reset eyebrow" onClick={reset}>{t("CLEAR FILTERS ")}<span aria-hidden="true">↺</span></button>
      </div>
      {filtered.length ? <DirectoryCardList>{[...filtered].sort((a, b) => a.name.localeCompare(b.name, "en")).map(store => <DirectoryCard key={store.slug} name={store.name} href={`/stores/${store.slug}`} category={category === "All" ? t(store.category) : t(category)} floor={store.floor} image={store.image} tone="retail" />)}</DirectoryCardList> : <div className="directory-empty"><h2>{t("No stores found.")}</h2><p>{t("Try another name, category or floor.")}</p><button className="experience-link" onClick={reset}>{t("CLEAR FILTERS ")}<span aria-hidden="true">→</span></button></div>}
      <div className="directory-bottom"><p>{t("Looking for the way there?")}</p><Link className="experience-link" href="/map">{t("OPEN MALL MAP ")}<span aria-hidden="true">↗</span></Link></div>
    </section>);
}
