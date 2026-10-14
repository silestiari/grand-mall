import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { experienceMedia } from "@/lib/experience-media";
import { ImmersiveImage } from "./immersive-image";
import { Reveal } from "./reveal";
export function ArchitecturalBreak() {
    const t = useCopy();
    return (<section className="architectural-break" aria-labelledby="architecture-title">
      <ImmersiveImage {...experienceMedia.atrium} className="architecture-visual"/>
      <div className="architecture-shade"/>
      <div className="architecture-content">
        <p className="eyebrow">{t("A place for your everyday")}</p>
        <Reveal>
          <h2 id="architecture-title">{t("EVERYTHING.")}<br />{t("IN ONE PLACE.")}</h2>
        </Reveal>
        <div className="architecture-bottom">
          <p>{t("Different plans. One meeting place.")}</p>
          <Link href="#shop-eat-play" className="eyebrow">{t("Make a day of it ")}<span aria-hidden="true">↓</span></Link>
        </div>
      </div>
    </section>);
}
