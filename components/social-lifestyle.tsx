import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { completionMedia, socialImages, socialLinks } from "@/lib/homepage-content";
import { ImmersiveImage } from "./immersive-image";
import { Reveal } from "./reveal";
export function SocialLifestyle() {
    const t = useCopy();
    return (<section id="lifestyle" className="lifestyle-section section-padding" aria-labelledby="lifestyle-title">
      <Reveal><div className="section-topline"><p className="eyebrow">{t("Everyday moments")}</p><span className="eyebrow">{t("In good company")}</span></div><div className="finish-heading-row"><h2 className="finish-title" id="lifestyle-title">{t("LIFE AT")}<br />GRAND MALL<span className="accent">.</span></h2><Link className="lifestyle-handle" href={socialLinks[0].href} target="_blank" rel="noopener noreferrer">@GRANDMALLBATUMI <span aria-hidden="true">↗</span></Link></div></Reveal>
      <div className="lifestyle-gallery">{socialImages.map(item => <Reveal className={`lifestyle-item lifestyle-${item.id}`} key={item.id}><figure><ImmersiveImage {...completionMedia[item.image]} className="lifestyle-image" sizes="(max-width: 700px) 50vw, 32vw"/><figcaption className="eyebrow">{t(item.caption)}</figcaption></figure></Reveal>)}</div>
      <div className="lifestyle-bottom"><p>{t("Different days. Shared moments.")}</p><Link className="experience-link" href={socialLinks[0].href} target="_blank" rel="noopener noreferrer">{t("Follow along ")}<span aria-hidden="true">→</span></Link></div>
    </section>);
}
