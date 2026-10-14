import { useCopy } from "@/i18n/copy";
import { completionMedia, brandEdits as offers } from "@/lib/homepage-content";
import { Link } from "@/i18n/navigation";
import { ImmersiveImage } from "./immersive-image";
import { Reveal } from "./reveal";
export function Offers() {
    const t = useCopy();
    return (<section id="offers" className="offers-section section-padding" aria-labelledby="offers-title">
      <Reveal><div className="section-topline"><p className="eyebrow">{t("A CLOSER LOOK")}</p><span className="eyebrow">{t("THE BRAND EDIT")}</span></div><h2 id="offers-title" className="finish-title">{t("WHAT\u2019S NEW")}<br />{t("BRAND EDIT")}<span className="accent">.</span></h2></Reveal>
      <div className="offers-editorial">
        {offers.map((offer, index) => <Reveal className={`offer-story offer-story-${index}`} key={offer.id}>
          <Link href={offer.href} target="_blank" rel="noopener noreferrer" className="story-image-link" aria-label={t("Explore {value0}", { value0: offer.brand })}><ImmersiveImage {...completionMedia[offer.image]} className="offer-image" sizes="(max-width: 700px) 100vw, 48vw"/></Link>
          <div className="story-meta eyebrow"><span>{offer.brand}</span><span>{t("BRAND EDIT")}</span></div>
          <h3><Link href={offer.href} target="_blank" rel="noopener noreferrer">{t(offer.headline)}<span aria-hidden="true">↗</span></Link></h3>
        </Reveal>)}
      </div>
      <div className="offers-bottom"><p>{t("Explore the brands. Find what speaks to you.")}</p><Link className="experience-link" href="/offers">{t("DISCOVER MORE ")}<span aria-hidden="true">→</span></Link></div>
    </section>);
}
