import { useCopy } from "@/i18n/copy";
import { experienceMedia } from "@/lib/experience-media";
import { ImmersiveImage } from "./immersive-image";
import { Link } from "@/i18n/navigation";
import { Reveal } from "./reveal";
export function ShopEatPlay() {
    const t = useCopy();
    return (<section id="shop-eat-play" className="day-sequence" aria-label={t("Shop, eat and play at Grand Mall")}>
      <section className="day-shop" aria-labelledby="shop-title">
        <Reveal className="day-shop-copy">
          <p className="eyebrow day-label">{t("Your day, your way")}</p>
          <h2 className="day-title" id="shop-title">{t("SHOP")}<span>.</span></h2>
          <p className="day-description">{t("International fashion, everyday essentials and new discoveries.")}</p>
          <Link className="experience-link" href="/stores">{t("Explore stores ")}<span aria-hidden="true">→</span></Link>
        </Reveal>
        <ImmersiveImage {...experienceMedia.shop} className="day-shop-image" sizes="(max-width: 700px) 100vw, 55vw"/>
      </section>

      <section className="day-eat" aria-labelledby="eat-title">
        <div className="day-eat-heading">
          <p className="eyebrow day-label">{t("A table. A conversation. A little time.")}</p>
          <Reveal><h2 className="day-title" id="eat-title">{t("EAT")}<span>.</span></h2></Reveal>
        </div>
        <ImmersiveImage {...experienceMedia.eat} className="day-eat-image" sizes="(max-width: 700px) 100vw, 65vw"/>
        <Reveal className="day-eat-copy">
          <p className="day-description">{t("Coffee, lunch, dinner and everything in between.")}</p>
          <Link className="experience-link" href="/dining">{t("Explore dining ")}<span aria-hidden="true">→</span></Link>
        </Reveal>
      </section>

      <section className="day-play" aria-labelledby="play-title">
        <ImmersiveImage {...experienceMedia.play} className="day-play-image"/>
        <div className="day-play-shade"/>
        <Reveal className="day-play-copy">
          <p className="eyebrow day-label">{t("When the day takes a different turn")}</p>
          <h2 className="day-title" id="play-title">{t("PLAY")}<span>.</span></h2>
          <div className="day-play-bottom">
            <p className="day-description">{t("Cinema, fitness and entertainment for every kind of day.")}</p>
            <Link className="experience-link" href="/entertainment">{t("Explore entertainment ")}<span aria-hidden="true">→</span></Link>
          </div>
        </Reveal>
      </section>
    </section>);
}
