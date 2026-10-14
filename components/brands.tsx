"use client";
import { useCopy } from "@/i18n/copy";
import { visitorInformation } from "@/data/visitor-info";
import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { categories, stores, type Category } from "@/lib/mall-data";
import { Reveal } from "./reveal";
import { homepageMedia } from "@/lib/homepage-media";
export function Brands() {
    const t = useCopy();
    const [category, setCategory] = useState<Category>("All");
    const filtered = stores.filter((store) => category === "All" || store.category === category);
    const shown = filtered.slice(0, 4);
    return (<section className="brands section-padding" id="brands" aria-labelledby="brands-title">
      <Reveal>
        <div className="section-topline">
          <p className="eyebrow">{t("FIND YOUR FAVOURITES")}</p>
          <span className="eyebrow">{t("STYLE, IN EVERY DIRECTION")}</span>
        </div>
        <div className="brands-intro">
          <h2 id="brands-title">{t("DISCOVER")}<br />{t("THE BRANDS")}<span className="accent">.</span>
          </h2>
          <p>{t("From international fashion")}<br />{t("to everyday essentials.")}</p>
        </div>
        <div className="category-list" role="group" aria-label={t("Filter featured stores by category")}>
          {categories.map((item) => (<button key={item} className={category === item ? "category active" : "category"} aria-pressed={category === item} onClick={() => {
                setCategory(item);
            }}>
              {t(item)}
            </button>))}
        </div>
        <div className="brands-editorial">
          <figure className="brands-image">
            <div className="brands-photo">
              <Image src={homepageMedia.brands.src} alt={t(homepageMedia.brands.alt)} fill sizes="(max-width: 700px) 100vw, 55vw"/>
            </div>
            <figcaption>
              <span>{t("FASHION / A NEW PERSPECTIVE")}</span>
            </figcaption>
          </figure>
          <div className="brand-selection">
            <div className="brand-selection-label">
              <span className="eyebrow">
                {category === "All"
        ? t("A FEW FAMILIAR NAMES") : t(category.toUpperCase())}
              </span>
              <Link className="brand-selection-link" href="/stores" aria-label={t("View all stores")}>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="brand-names" aria-live="polite">
              {shown.length ? (shown.map((store) => (<div className="brand-name" key={store.slug}>
                    {store.name}
                  </div>))) : (<p className="empty-selection">{t("Discover mall services through the information team.")}<br />
                  <Link href={`mailto:${visitorInformation.email}`}>
                    {visitorInformation.email} ↗
                  </Link>
                </p>)}
            </div>
            <div className="brand-selection-bottom">
              <p>{t("Find something that feels like you.")}</p>
              <Link className="text-link" href="/stores">{t("EXPLORE ALL STORES")}<span aria-hidden="true">→</span>
              </Link>
              <span className="selection-note">{t("A curated introduction to our stores.")}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>);
}
