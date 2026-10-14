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
    <Reveal className="store-detail-heading"><p className="eyebrow">{t("Grand Mall / ")}{t(venue.category.toUpperCase())}</p><h1>{venue.name}<span className="accent">.</span></h1></Reveal>
    {venue.image && <Reveal className="dining-photo dining-detail-hero"><Image src={venue.image.src} alt={t(venue.image.alt)} fill sizes="(max-width: 700px) 100vw, 90vw" preload/></Reveal>}
    <div className="dining-detail-practical"><div>{venue.shortDescription && <p className="dining-detail-description">{t(venue.shortDescription)}</p>}<Link href="/dining" className="experience-link">{t("All dining ")}<span aria-hidden="true">←</span></Link></div><div className="store-detail-information"><dl><div><dt className="eyebrow">{t("Category")}</dt><dd>{venue.categories.map(category => t(category)).join(" / ")}</dd></div>{venue.floor && <div><dt className="eyebrow">{t("Floor")}</dt><dd>{venue.floor}</dd></div>}{venue.openingHours && <div><dt className="eyebrow">{t("Opening hours")}</dt><dd>{venue.openingHours}</dd></div>}{venue.phone && <div><dt className="eyebrow">{t("Phone")}</dt><dd><Link href={`tel:${venue.phone.replace(/[^+\d]/g, "")}`}>{venue.phone}</Link></dd></div>}</dl><div className="store-detail-actions"><Link className="experience-link" href={mapHref("dining", venue.slug)}>{t("Find on map ")}<span aria-hidden="true">↗</span></Link>{venue.website && <Link className="experience-link" href={venue.website} target="_blank" rel="noopener noreferrer">{t("Visit website ")}<span aria-hidden="true">↗</span></Link>}</div><p className="store-map-note">{t("Open the floor overview with {value0} selected.", {value0: venue.name})}</p></div></div>
  </article>;
}
