"use client";
import { useCopy } from "@/i18n/copy";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import { searchDirectory } from "@/lib/directory";
import { LanguageSelector } from "./language-selector";
import { ThemeToggle } from "./theme-toggle";
import { visitorInformation } from "@/data/visitor-info";
const navigation = [
    "Stores",
    "Dining",
    "Entertainment",
    "Offers",
    "Events",
    "Visit",
];
const navigationTargets: Record<string, string> = {
    Stores: "/stores",
    Dining: "/dining",
    Entertainment: "/entertainment",
    Offers: "/offers",
    Events: "/events",
    Visit: "/visit",
};
function NavItems({ onNavigate, home = true }: {
    onNavigate?: () => void;
    home?: boolean;
}) {
    const t = useCopy();
    const pathname = usePathname();
    return navigation.map((label) => (<Link href={!home && navigationTargets[label].startsWith("#") ? `/${navigationTargets[label]}` : navigationTargets[label]} aria-current={navigationTargets[label].startsWith("/") && (pathname === navigationTargets[label] || pathname.startsWith(`${navigationTargets[label]}/`)) ? "page" : undefined} onClick={onNavigate} key={label}>
        {t(label)}
      </Link>));
}
function Languages() { return <LanguageSelector />; }
export function Header({ variant = "hero" }: {
    variant?: "hero" | "light";
}) {
    const t = useCopy();
    const home = variant === "hero";
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState("");
    const search = useRef<HTMLDialogElement>(null);
    const searchInput = useRef<HTMLInputElement>(null);
    const menu = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        const update = () => setScrolled(window.scrollY > 36);
        update();
        window.addEventListener("scroll", update, { passive: true });
        const resize = () => {
            if (window.innerWidth > 1100)
                menu.current?.close();
        };
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", resize);
        };
    }, []);
    const results = searchDirectory(query, t);
    const openSearch = () => {
        menu.current?.close();
        search.current?.showModal();
        searchInput.current?.focus();
    };
    return (<>
      <header className={`header ${scrolled || !home ? "header-scrolled" : ""}`}>
        <Link href={home ? "#main" : "/"} className="wordmark" aria-label={t("Grand Mall Batumi home")}>
          <span>GRAND MALL</span>
          <small>BATUMI</small>
        </Link>
        <nav className="desktop-nav" aria-label={t("Main navigation")}>
          <NavItems home={home}/>
        </nav>
        <div className="header-tools">
          <button className="search-trigger" aria-label={t("Search Grand Mall")} onClick={openSearch}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5"/>
              <path d="m16 16 5 5"/>
            </svg>
            <span>{t("Search")}</span>
          </button>
          <Link className="map-link" href="/map">{t("Mall Map")}<span aria-hidden="true">↗</span>
          </Link>
          <Languages />
          <ThemeToggle />
        </div>
        <button className="menu-trigger" aria-label={t("Open navigation menu")} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => {
            menu.current?.showModal();
            setMenuOpen(true);
        }}>
          <span />
          <span />
        </button>
      </header>
      <dialog className="mobile-menu" id="mobile-menu" ref={menu} onClose={() => setMenuOpen(false)} aria-label={t("Navigation menu")}>
        <div className="dialog-top">
          <Link className="wordmark" href={home ? "#main" : "/"} onClick={() => menu.current?.close()}>
            <span>GRAND MALL</span>
            <small>BATUMI</small>
          </Link>
          <button className="close-button" aria-label={t("Close navigation menu")} onClick={() => menu.current?.close()}>
            ✕
          </button>
        </div>
        <p className="eyebrow menu-eyebrow">{t("Your day starts here")}</p>
        <nav className="mobile-nav" aria-label={t("Mobile navigation")}>
          <NavItems home={home} onNavigate={() => menu.current?.close()}/>
        </nav>
        <div className="mobile-menu-bottom">
          <button onClick={openSearch}>{t("Search Grand Mall \u2197")}</button>
          <Link href="/map" onClick={() => menu.current?.close()}>{t("Mall Map \u2197")}</Link>
          <Languages />
          <ThemeToggle withLabel />
          <Link href={`mailto:${visitorInformation.email}`}>{visitorInformation.email}</Link>
        </div>
      </dialog>
      <dialog className="search-dialog" ref={search} onKeyDownCapture={(event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                search.current?.close();
            }
        }} aria-labelledby="search-title" onClick={(event) => {
            if (event.target === event.currentTarget)
                search.current?.close();
        }}>
        <div className="search-panel">
          <div className="dialog-top">
            <span className="eyebrow">{t("Grand Mall / discover")}</span>
            <button className="close-button" aria-label={t("Close search")} onClick={() => search.current?.close()}>
              ✕
            </button>
          </div>
          <h2 id="search-title">{t("Find your favourite.")}</h2>
          <label className="eyebrow" htmlFor="store-search">{t("Search Grand Mall")}</label>
          <input ref={searchInput} id="store-search" type="search" aria-controls="search-results" aria-describedby="search-help" placeholder={t("A name, a category\u2026")} value={query} onChange={(event) => setQuery(event.target.value)}/>
          <p className="search-status" role="status" aria-atomic="true">{t("Results found: {value0}", { value0: results.length })}</p>
          <div className="search-results" id="search-results">
            {results.length ? (results.map((place) => (<Link key={place.id} href={place.detailUrl} onClick={() => {
                search.current?.close();
            }}>
                  <span>{place.name}</span>
                  <small>{t(place.group)} / {t(place.category)}{place.floor ? t(" / Floor {value0}", { value0: place.floor }) : ""}</small>
                  <span aria-hidden="true">↗</span>
                </Link>))) : (<div className="search-empty"><p>{t("No places found. Try another name or category.")}</p><button className="experience-link" onClick={() => { setQuery(""); searchInput.current?.focus(); }}>{t("Clear search ")}<span aria-hidden="true">→</span></button></div>)}
          </div>
          <p className="selection-note" id="search-help">{t("Use Tab to browse results and Escape to close search.")}</p>
        </div>
      </dialog>
    </>);
}
