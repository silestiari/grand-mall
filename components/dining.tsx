import { useCopy } from "@/i18n/copy";
import { diningVenues } from "@/lib/experience-data";
import { experienceMedia } from "@/lib/experience-media";
import { ImmersiveImage } from "./immersive-image";
import { Reveal } from "./reveal";
import { Link } from "@/i18n/navigation";
export function Dining() {
    const t = useCopy();
    return (<section id="dining" className="dining-section section-padding" aria-labelledby="dining-title">
      <Reveal>
        <div className="section-topline">
          <p className="eyebrow">{t("At the table")}</p>
          <span className="eyebrow">{t("Good company. Time well spent.")}</span>
        </div>
        <h2 id="dining-title" className="dining-title">{t("TAKE A BREAK.")}<br />{t("STAY A LITTLE")}<br className="dining-mobile-break"/>{t(" LONGER")}<span className="accent">.</span></h2>
      </Reveal>
      <div className="dining-editorial">
        <ImmersiveImage {...experienceMedia.restaurant} className="dining-main-image" sizes="(max-width: 1100px) 100vh, 58vw"/>
        <div className="dining-side">
          <Reveal className="dining-copy">
            <p>{t("A coffee before you start.")}<br />{t("Lunch with someone you missed.")}<br />{t("A table you don\u2019t need to rush.")}</p>
            <p className="eyebrow dining-selection-label">{t("Pull up a chair")}</p>
            <ul className="dining-venues">
              {diningVenues.map((venue) => (<li key={venue.slug}><Link href={`/dining/${venue.slug}`}>{venue.name}<span aria-hidden="true">↗</span></Link></li>))}
            </ul>
          </Reveal>
          <ImmersiveImage {...experienceMedia.coffee} className="dining-detail-image" sizes="(max-width: 700px) 65vw, 25vw"/>
        </div>
        <div className="dining-bottom">
          <p className="eyebrow">{t("From the first coffee to the last conversation.")}</p>
          <Link className="experience-link" href="/dining">{t("Explore dining ")}<span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>);
}
