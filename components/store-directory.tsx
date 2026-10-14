"use client";
import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { setQueryParams, useQueryParam } from "@/lib/url-query";
import { DirectoryCard, DirectoryCardList } from "./directory-card";
import { stores, storeCategories, storeFloors, type StoreCategory, type StoreFloor } from "@/data/stores";
export function StoreDirectory() {
    const t = useCopy();
    const query = useQueryParam("q");
    const category = (useQueryParam("category", storeCategories) || "All") as StoreCategory;
    const floor = (useQueryParam("floor", storeFloors) || "all") as StoreFloor | "all";
    const setQuery = (value: string) => setQueryParams({ q: value });
    const setCategory = (value: StoreCategory) => setQueryParams({ category: value === "All" ? "" : value });
    const setFloor = (value: StoreFloor | "all") => setQueryParams({ floor: value === "all" ? "" : value });
    const normalise = (value: string) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
    const filtered = stores.filter(store => normalise(store.name).includes(normalise(query.trim())) && (category === "All" || store.categories.includes(category)) && (floor === "all" || store.floor === floor));
    const reset = () => setQueryParams({ q: "", category: "", floor: "" });
    return (<section className="store-directory" aria-label={t("Store directory")}>
      <div className="directory-search">
        <label className="eyebrow" htmlFor="directory-search">{t("Find your favourite")}</label>
        <div><input id="directory-search" type="search" placeholder={t("Search stores...")} value={query} onChange={event => setQuery(event.target.value)}/></div>
      </div>
      <div className="directory-categories" role="group" aria-label={t("Filter stores by category")}>
        {storeCategories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{t(item)}</button>)}
      </div>
      <div className="directory-floor-bar">
        <div className="directory-floor"><label htmlFor="directory-floor" className="eyebrow">{t("Level")}</label><select id="directory-floor" value={floor} onChange={event => setFloor(event.target.value as StoreFloor | "all")}><option value="all">{t("All Floors")}</option>{storeFloors.map(level => <option key={level} value={level}>{t("Floor ")}{level === "-1" ? "−1" : level}</option>)}</select></div>
        <p className="eyebrow directory-count" role="status">{filtered.length} {t.count("store", filtered.length)}</p>
        <button className="directory-reset eyebrow" onClick={reset}>{t("Clear filters ")}<span aria-hidden="true">↺</span></button>
      </div>
      {filtered.length ? <DirectoryCardList>{[...filtered].sort((a, b) => a.name.localeCompare(b.name, "en")).map(store => <DirectoryCard key={store.slug} name={store.name} href={`/stores/${store.slug}`} category={category === "All" ? t(store.category) : t(category)} floor={store.floor} image={store.image} tone="retail" />)}</DirectoryCardList> : <div className="directory-empty"><h2>{t("No stores found.")}</h2><p>{t("Try another name, category or floor.")}</p><button className="experience-link" onClick={reset}>{t("Clear filters ")}<span aria-hidden="true">→</span></button></div>}
      <div className="directory-bottom"><p>{t("Looking for the way there?")}</p><Link className="experience-link" href="/map">{t("Open mall map ")}<span aria-hidden="true">↗</span></Link></div>
    </section>);
}
