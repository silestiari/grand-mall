import { useCopy } from "@/i18n/copy";
import { entertainmentVenues } from "@/lib/experience-data";
import { Link } from "@/i18n/navigation";
import { experienceMedia } from "@/lib/experience-media";
import { ImmersiveImage } from "./immersive-image";
import { Reveal } from "./reveal";
export function Entertainment() {
    const t = useCopy();
    return (<section id="entertainment" className="entertainment-section section-padding" aria-labelledby="entertainment-title">
      <Reveal>
        <div className="section-topline">
          <p className="eyebrow">{t("Change the pace")}</p>
          <span className="eyebrow">{t("Make room for something else")}</span>
        </div>
        <div className="entertainment-intro">
          <h2 id="entertainment-title">{t("THE FUN")}<br />{t("STARTS HERE")}<span>.</span></h2>
          <p>{t("On the big screen. On the lanes.")}<br />{t("Or simply in good company.")}</p>
        </div>
      </Reveal>
      <div className="entertainment-sequence">
        {entertainmentVenues.map((venue, index) => (<article className={`entertainment-experience experience-${venue.image}`} key={venue.slug} aria-labelledby={`experience-${venue.slug}`}>
            <ImmersiveImage {...experienceMedia[venue.image]} className="entertainment-image" sizes={index === 0 ? "(max-width: 1100px) 160vh, 100vw" : "(max-width: 700px) 90vh, 58vw"}/>
            {index === 0 && <div className="cinema-shade"/>}
            <Reveal className="entertainment-copy">
              <p className="eyebrow">{t(venue.category)}</p>
              <h3 id={`experience-${venue.slug}`}>{venue.name}</h3>
              <p className="experience-heading">{t(venue.heading)}</p>
              <p className="experience-description">{t(venue.description)}</p>
              <Link className="experience-link" href={`/entertainment/${venue.slug}`}>{t("EXPLORE {value0}", { value0: t(venue.category) })} <span aria-hidden="true">↗</span></Link>
            </Reveal>
          </article>))}
        <article className="family-experience" aria-labelledby="family-title">
          <ImmersiveImage {...experienceMedia.wonderland} className="family-image" sizes="(max-width: 700px) 75vh, 58vw"/>
          <div className="family-content">
            <Reveal className="family-heading">
              <p className="eyebrow">{t("Kids entertainment")}</p>
              <h3 id="family-title">{t("Wonderland")}</h3>
            </Reveal>
            <Reveal className="family-copy">
              <p className="family-venue">{t("Little explorers. Big days.")}</p>
              <p className="experience-description">{t("A place for play, imagination and time together.")}</p>
              <Link className="experience-link" href="/entertainment/wonderland">{t("Explore Wonderland ")}<span aria-hidden="true">↗</span></Link>
            </Reveal>
          </div>
        </article>
      </div>
    </section>);
}
