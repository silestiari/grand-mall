import { useCopy } from "@/i18n/copy";
import { mapHref } from "@/lib/directory";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/reveal";
import type { EntertainmentVenue } from "@/data/entertainment";
export function EntertainmentDetail({ venue }: {
    venue: EntertainmentVenue;
}) {
    const t = useCopy();
    return <article className="ent-detail">
    <nav className="ent-breadcrumb eyebrow" aria-label={t("Breadcrumb")}><Link href="/entertainment">{t("ENTERTAINMENT")}</Link><span aria-hidden="true">/</span><span aria-current="page">{venue.name}</span></nav>
    <Reveal className="ent-detail-heading"><p className="eyebrow">{t("GRAND MALL / ")}{t(venue.category.toUpperCase())}</p><h1>{venue.name}<span>.</span></h1></Reveal>
    {venue.image && <Reveal className="ent-visual ent-detail-visual"><Image src={venue.image.src} alt={t(venue.image.alt)} fill sizes="(max-width: 700px) 100vw, 90vw" preload/></Reveal>}
    <div className="ent-detail-layout"><div>{venue.shortDescription && <p className="ent-detail-description">{t(venue.shortDescription)}</p>}<Link href="/entertainment" className="experience-link">{t("ALL ENTERTAINMENT ")}<span aria-hidden="true">←</span></Link></div><div className="ent-detail-information"><dl><div><dt className="eyebrow">{t("CATEGORY")}</dt><dd>{t(venue.category)}</dd></div>{venue.floor && <div><dt className="eyebrow">{t("FLOOR")}</dt><dd>{venue.floor}</dd></div>}{venue.openingHours && <div><dt className="eyebrow">{t("OPENING HOURS")}</dt><dd>{venue.openingHours}</dd></div>}{venue.phone && <div><dt className="eyebrow">{t("PHONE")}</dt><dd><Link href={`tel:${venue.phone.replace(/[^+\d]/g, "")}`}>{venue.phone}</Link></dd></div>}</dl><div className="ent-detail-actions"><Link href={mapHref("entertainment", venue.slug)} className="experience-link">{t("FIND ON MAP ")}<span aria-hidden="true">↗</span></Link>{venue.website && <Link href={venue.website} className="experience-link" target="_blank" rel="noopener noreferrer">{t("VISIT WEBSITE ")}<span aria-hidden="true">↗</span></Link>}</div><p className="ent-map-note">{t("Open the floor overview with {value0} selected.", {value0: venue.name})}</p></div></div>
  </article>;
}
