import { useCopy } from "@/i18n/copy";
import { mapHref } from "@/lib/directory";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Store } from "@/data/stores";
import { visitorInformation } from "@/lib/homepage-content";
export function StoreDetail({ store }: {
    store: Store;
}) {
    const t = useCopy();
    return <article className="store-detail">
    <nav className="store-breadcrumb eyebrow" aria-label={t("Breadcrumb")}><Link href="/stores">{t("STORES & BRANDS")}</Link><span aria-hidden="true">/</span><span aria-current="page">{store.name}</span></nav>
    <div className="store-detail-heading"><p className="eyebrow">{t("GRAND MALL / ")}{t(store.category.toUpperCase())}</p><h1>{store.name}<span className="accent">.</span></h1></div>
    <div className={store.image ? "store-detail-layout" : "store-detail-layout store-detail-text"}>
      {store.image && <div className="store-detail-image"><Image src={store.image.src} alt={t(store.image.alt)} fill sizes="(max-width: 700px) 100vw, 60vw" preload/></div>}
      <div className="store-detail-information">
        {store.shortDescription && <p className="store-description">{t(store.shortDescription)}</p>}
        <dl><div><dt className="eyebrow">{t("CATEGORY")}</dt><dd>{store.categories.map(category => t(category)).join(" / ")}</dd></div>{store.floor && <div><dt className="eyebrow">{t("FLOOR")}</dt><dd>{store.floor === "-1" ? "−1" : store.floor}</dd></div>}{store.openingHours && <div><dt className="eyebrow">{t("OPENING HOURS")}</dt><dd>{store.openingHours}</dd></div>}{store.phone && <div><dt className="eyebrow">{t("PHONE")}</dt><dd><Link href={`tel:${store.phone.replace(/[^+\d]/g, "")}`}>{store.phone}</Link></dd></div>}</dl>
        <div className="store-detail-actions"><Link className="experience-link" href={mapHref("store", store.slug)}>{t("FIND ON MAP ")}<span aria-hidden="true">↗</span></Link>{store.website && <Link className="experience-link" href={store.website} target="_blank" rel="noopener noreferrer">{t("VISIT WEBSITE ")}<span aria-hidden="true">↗</span></Link>}</div>
        <p className="store-map-note">{t("Open the floor overview with {value0} selected.", {value0: store.name})}</p>
      </div>
    </div>
    <div className="store-detail-bottom"><Link href="/stores" className="experience-link">{t("ALL STORES ")}<span aria-hidden="true">←</span></Link><p>{t("Need a hand? ")}<Link href={`mailto:${visitorInformation.email}`}>{t("Contact the Grand Mall team \u2197")}</Link></p></div>
  </article>;
}
