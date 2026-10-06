"use client";
import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { mallLevels } from "@/lib/homepage-content";
import { searchDirectory, mapHref } from "@/lib/directory";
import { Reveal } from "./reveal";

export function MallMapPreview() {
    const t = useCopy();
    const [level, setLevel] = useState("1");
    const [query, setQuery] = useState("");
    const current = mallLevels.find(item => item.id === level)!;
    const searchTerm = query.trim().toLowerCase();
    const matches = searchTerm ? searchDirectory(query, t) : [];
    return (<section id="mall-map" className="mall-map-section section-padding" aria-labelledby="mall-map-title">
      <div className="section-topline"><p className="eyebrow">{t("10 / GET YOUR BEARINGS")}</p><span className="eyebrow">{t("FIVE LEVELS. ONE GRAND MALL.")}</span></div>
      <div className="mall-map-layout">
        <Reveal className="mall-map-copy">
          <h2 id="mall-map-title" className="finish-title">{t("FIND")}<br />{t("YOUR WAY")}<span className="accent">.</span></h2>
          <label className="eyebrow map-search-label" htmlFor="map-search">{t("FIND A NAME")}</label>
          <div className="map-search-field"><input id="map-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={t("Search stores, dining, services...")} aria-describedby="map-search-hint"/></div>
          <p id="map-search-hint" className="map-explanation">{t("Search the mall directory. Explore floors and place details on the map.")}</p>
          {searchTerm && <div className="map-search-results" aria-live="polite"><p className="eyebrow">{t("MATCHES ACROSS THE MALL")}</p>{matches.length ? <ul>{matches.map(item => <li key={item.id}><Link href={mapHref(item.type, item.slug)}><span>{item.name}<small>{t(item.category)}</small></span><span aria-hidden="true">↗</span></Link></li>)}</ul> : <p>{t("No names found. Try a brand or category, or contact our team.")}</p>}</div>}
          <p className="eyebrow map-level-label">{t("EXPLORE THE LEVELS")}</p>
          <div className="floor-selector" role="group" aria-label={t("Choose a mall level")}>{mallLevels.map(item => <button key={item.id} onClick={() => setLevel(item.id)} aria-pressed={item.id === level}>{item.id === "-1" ? "−1" : item.id}</button>)}</div>
          <Link className="experience-link" href="/map">{t("OPEN MALL MAP ")}<span aria-hidden="true">→</span></Link>
        </Reveal>
        <div className="mall-level-display" aria-live="polite">
          <div className="level-display-top eyebrow"><span>{t("LEVEL OVERVIEW")}</span><span>{t("BATUMI")}</span></div>
          <div className="level-stack" aria-hidden="true">{[...mallLevels].reverse().map(item => <div className={item.id === level ? "level-layer selected" : "level-layer"} key={item.id}><span>{item.id === "-1" ? "−1" : item.id}</span><i /></div>)}</div>
          <div className="level-display-bottom"><p className="eyebrow">{t("LEVEL ")}{level === "-1" ? "−1" : `0${level}`}</p><h3>{t(current.title)}</h3><p>{t(current.description)}</p></div>
        </div>
      </div>
    </section>);
}
