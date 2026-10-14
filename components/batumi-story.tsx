import { useCopy } from "@/i18n/copy";
import { completionMedia } from "@/lib/homepage-content";
import { ImmersiveImage } from "./immersive-image";
import { Reveal } from "./reveal";
export function BatumiStory() {
    const t = useCopy();
    return (<section id="batumi-story" className="batumi-story" aria-labelledby="batumi-title">
      <ImmersiveImage {...completionMedia.batumi} className="batumi-visual"/>
      <div className="batumi-shade"/>
      <div className="batumi-content"><p className="eyebrow">{t("Our city. Your everyday.")}</p><Reveal><h2 id="batumi-title">{t("MADE FOR")}<br />{t("BATUMI.")}</h2></Reveal><div className="batumi-bottom"><p>{t("For locals.")}<br />{t("For visitors.")}<br />{t("For every day.")}</p><span className="eyebrow">{t("New boulevard / Black Sea coast")}</span></div></div>
    </section>);
}
