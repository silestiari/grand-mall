import { useCopy } from "@/i18n/copy";
import { mapHref } from "@/lib/directory";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { DiningVenue } from "@/data/dining";
import { Reveal } from "@/components/reveal";
export function DiningDetail({ venue }: {
    venue: DiningVenue;
}) {
    const t = useCopy();
    return <article className="dining-detail">
    <nav className="store-breadcrumb eyebrow" aria-label={t("Breadcrumb")}><Link href="/dining">{t("DINING")}</Link><span aria-hidden="true">/</span><span aria-current="page">{venue.name}</span></nav>
    <Reveal className="store-detail-heading"><p className="eyebrow">{t("GRAND MALL / ")}{t(venue.category.toUpperCase())}</p><h1>{venue.name}<span className="accent">.</span></h1></Reveal>
    {venue.image && <Reveal className="dining-photo dining-detail-hero"><Image src={venue.image.src} alt={t(venue.image.alt)} fill sizes="(max-width: 700px) 100vw, 90vw" preload/></Reveal>}
    <div className="dining-detail-practical"><div>{venue.shortDescription && <p className="dining-detail-description">{t(venue.shortDescription)}</p>}<Link href="/dining" className="experience-link">{t("ALL DINING ")}<span aria-hidden="true">←</span></Link></div><div className="store-detail-information"><dl><div><dt className="eyebrow">{t("CATEGORY")}</dt><dd>{venue.categories.map(category => t(category)).join(" / ")}</dd></div>{venue.floor && <div><dt className="eyebrow">{t("FLOOR")}</dt><dd>{venue.floor}</dd></div>}{venue.openingHours && <div><dt className="eyebrow">{t("OPENING HOURS")}</dt><dd>{venue.openingHours}</dd></div>}{venue.phone && <div><dt className="eyebrow">{t("PHONE")}</dt><dd><Link href={`tel:${venue.phone.replace(/[^+\d]/g, "")}`}>{venue.phone}</Link></dd></div>}</dl><div className="store-detail-actions"><Link className="experience-link" href={mapHref("dining", venue.slug)}>{t("FIND ON MAP ")}<span aria-hidden="true">↗</span></Link>{venue.website && <Link className="experience-link" href={venue.website} target="_blank" rel="noopener noreferrer">{t("VISIT WEBSITE ")}<span aria-hidden="true">↗</span></Link>}</div><p className="store-map-note">{t("Open the floor overview with {value0} selected.", {value0: venue.name})}</p></div></div>
  </article>;
}
