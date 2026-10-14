"use client";
import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchDirectory, directoryGroups, directoryFloors, getDirectoryPlace, mapHref, type DirectoryGroup, type DirectoryPlace } from "@/lib/directory";
import { localeHref } from "@/i18n/navigation";
import { verifiedFloorPlans } from "@/lib/map-data";
function FloorOverview({ floor, place }: {
    floor: string;
    place?: DirectoryPlace;
}) {
    const t = useCopy();
    const plan = verifiedFloorPlans[floor];
    const position = place?.coordinates?.floor === floor ? place.coordinates : undefined;
    // Abstract paths below are decorative, never real room boundaries or brand locations.
    // Approved plans and source-verified coordinates replace this fallback via lib/map-data.ts.
    return <svg className="map-floor-graphic" viewBox={plan ? plan.viewBox.join(" ") : "0 0 760 560"} role="img" aria-labelledby="floor-graphic-title floor-graphic-description">
    <title id="floor-graphic-title">{t("Floor {value0} {value1}", { value0: floor, value1: plan ? t("floor plan") : t("overview") })}</title><desc id="floor-graphic-description">{`${plan ? t("Approved floor plan.") : t("Illustrative architectural overview. Exact venue positions are not shown.")}${place?.floor === floor ? t(" {value0} is on floor {value1}.", { value0: place.name, value1: floor }) : ""}`}</desc>
    {plan ? <image href={plan.src} x={plan.viewBox[0]} y={plan.viewBox[1]} width={plan.viewBox[2]} height={plan.viewBox[3]}/> : <g aria-hidden="true"><path className="map-outline" d="M100 75H660V485H100Z"/><path className="map-walkway" d="M140 245H620V315H140Z"/>{[0, 1, 2, 3].map(i => <g key={i}><rect className="map-room" x={140 + i * 122} y={115} width="105" height={i % 2 ? 96 : 108}/><rect className="map-room" x={140 + i * 122} y={340} width="105" height={i % 2 ? 102 : 108}/></g>)}<rect className="map-open-space" x="288" y="215" width="184" height="130"/><path className="map-grid-line" d="M100 75 76 51M660 75 684 51M660 485 684 509M100 485 76 509"/></g>}
    {position ? <g className="map-selected-marker" transform={`translate(${position.x} ${position.y})`}><circle r="18"/><circle className="map-marker-inner" r="5"/></g> : !plan && place ? <g aria-hidden="true"><rect className="map-selected-zone" x="288" y="215" width="184" height="130"/><text className="map-zone-label" x="380" y="288" textAnchor="middle">{floor}</text></g> : <text className="map-floor-number" x="380" y="291" textAnchor="middle" aria-hidden="true">{floor}</text>}
  </svg>;
}
export function MapWorkspace({ initial }: {
    initial?: DirectoryPlace;
}) {
    const t = useCopy();
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<DirectoryGroup | "All">("All");
    const [{ floor, selected }, setLocation] = useState<{
        floor: string;
        selected?: DirectoryPlace;
    }>({ floor: initial?.floor ?? directoryFloors[0], selected: initial });
    const [floorOnly, setFloorOnly] = useState(false);
    const selectedId = selected?.id;
    const selectionPanel = useRef<HTMLDivElement>(null);
    const [selectionRequest, setSelectionRequest] = useState(0);
    const [resultsOpen, setResultsOpen] = useState(false);
    useEffect(() => {
        if (!selectedId)
            return;
        const frame = requestAnimationFrame(() => {
            const panel = selectionPanel.current;
            if (!panel)
                return;
            const bounds = panel.getBoundingClientRect();
            const headerBottom = document.querySelector(".header")?.getBoundingClientRect().bottom ?? 0;
            if (bounds.top < headerBottom + 16 || bounds.bottom > window.innerHeight - 16) {
                panel.scrollIntoView({ block: "nearest", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
            }
        });
        return () => cancelAnimationFrame(frame);
    }, [selectedId, selectionRequest]);
    const filtered = searchDirectory(query, t).filter(place => (category === "All" || place.group === category) && (!floorOnly || place.floor === floor));
    const clearSelection = () => setLocation(current => ({ floor: current.floor }));
    const choose = (place: DirectoryPlace) => { setLocation(current => ({ floor: place.floor ?? current.floor, selected: place })); setSelectionRequest(current => current + 1); setResultsOpen(true); };
    // Preserve a typed selection in the history entry we return to from details.
    // onNavigate only runs for same-tab navigation, leaving modified clicks alone.
    const rememberPlace = (place: DirectoryPlace) => window.history.replaceState(null, "", localeHref(mapHref(place.type, place.slug), t.locale));
    const changeFloor = (level: string) => { setLocation(current => ({ floor: level, selected: current.selected?.floor === level ? current.selected : undefined })); setFloorOnly(true); setResultsOpen(true); };
    const clear = () => { setQuery(""); setCategory("All"); setFloorOnly(false); setResultsOpen(false); };
    return <div className="map-workspace">
    <aside className="map-sidebar" aria-label={t("Mall directory")}>
      <div className="map-side-heading"><p className="eyebrow">{t("Grand Mall / directory")}</p><h1>{t("FIND")}<br />{t("YOUR WAY")}<span className="accent">.</span></h1><p>{t("Search stores, dining")}<br />{t("and entertainment.")}</p></div>
      <div className="map-directory-search"><label htmlFor="mall-directory-search" className="eyebrow">{t("Search the mall")}</label><input id="mall-directory-search" type="search" value={query} onChange={event => { setQuery(event.target.value); setResultsOpen(!!event.target.value); }} placeholder={t("Search stores, dining, services...")}/></div>
      <div className="map-directory-categories" role="group" aria-label={t("Filter places by category")}>{["All", ...directoryGroups].map(group => <button key={group} aria-pressed={category === group} onClick={() => { setCategory(group as DirectoryGroup | "All"); clearSelection(); setResultsOpen(true); }}>{t(group)}</button>)}</div>
      <section className={`map-results ${resultsOpen ? "map-results-expanded" : ""}`} aria-labelledby="map-results-label"><div className="map-results-top"><p id="map-results-label" className="eyebrow" role="status">{filtered.length} {t.count("place", filtered.length)} / {floorOnly ? t("FLOOR {value0}", { value0: floor }) : t("All floors")}</p><button className="map-results-toggle" aria-expanded={resultsOpen} aria-controls="map-result-list" onClick={() => setResultsOpen(!resultsOpen)}>{t("Browse ")}<span aria-hidden="true">↓</span></button></div><div id="map-result-list" className="map-result-list">{filtered.length ? <ul>{filtered.map(place => <li key={place.id} className={selectedId === place.id ? "map-result-selected" : undefined}><button aria-pressed={selectedId === place.id} onClick={() => choose(place)}><span className="map-result-name">{place.name}<small>{t(place.category)}{place.floor ? t(" / Floor {value0}", { value0: place.floor }) : ""}</small></span></button><Link className="map-result-arrow" href={place.detailUrl} onNavigate={() => rememberPlace(place)} aria-label={t("View {value0} details", { value0: place.name })}><span aria-hidden="true">→</span></Link></li>)}</ul> : <div className="map-no-results"><h2>{t("No places found.")}</h2><button className="experience-link" onClick={clear}>{t("Clear search ")}<span aria-hidden="true">→</span></button></div>}</div>{floorOnly && <button className="map-all-floors" onClick={() => setFloorOnly(false)}>{t("Search all floors ")}<span aria-hidden="true">↗</span></button>}</section>
    </aside>
    <section className="map-right" aria-label={t("Floor overview and selected place")}>
      <div className="map-floor-controls"><p className="eyebrow">{t("Choose a floor")}</p><div role="group" aria-label={t("Choose a floor")}>{directoryFloors.map(level => <button aria-pressed={floor === level} key={level} onClick={() => changeFloor(level)}> {level} </button>)}</div></div>
      <div className="map-canvas"><div className="map-canvas-top"><p className="eyebrow">{t("Floor ")}{floor}</p><span className="eyebrow">{verifiedFloorPlans[floor] ? t("Floor plan") : t("Floor overview")}</span></div><FloorOverview floor={floor} place={selected}/><div className="map-canvas-note"><span aria-hidden="true"/><p>{verifiedFloorPlans[floor] ? t("Select a place to see its information.") : t("Illustrative layout. Exact venue positions are not shown.")}</p></div></div>
      <div className="map-selection" ref={selectionPanel} aria-live="polite">{selected ? <section aria-labelledby="selected-place-title"><div className="map-selection-top"><p className="eyebrow">{t("Your selected place")}</p><button onClick={() => clearSelection()} aria-label={t("Close selected place")}>{t("CLOSE ")}<span aria-hidden="true">×</span></button></div><h2 id="selected-place-title">{selected.name}</h2><p>{t(selected.category)}{selected.floor ? t(" / Floor {value0}", { value0: selected.floor }) : ""}</p><Link href={selected.detailUrl} onNavigate={() => rememberPlace(selected)} className="experience-link">{t("VIEW DETAILS ")}<span aria-hidden="true">→</span></Link></section> : <div className="map-selection-empty"><p className="eyebrow">{t("Your next stop")}</p><p>{t("Select a name to see its floor and details.")}</p></div>}</div>
    </section>
  </div>;
}
export function MapExplorer() {
    const params = useSearchParams();
    return <MapWorkspace key={params.toString()} initial={getDirectoryPlace(params.get("type"), params.get("slug"))}/>;
}
