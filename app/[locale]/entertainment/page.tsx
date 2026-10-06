import { localizedMetadata } from "@/i18n/metadata";
import { useCopy } from "@/i18n/copy";
import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { entertainmentVenues } from "@/data/entertainment";
import { entertainmentHero } from "@/lib/entertainment-media";
export async function generateMetadata({ params }: PageProps<"/[locale]/entertainment">): Promise<Metadata> { const { locale } = await params; return localizedMetadata(locale, "/entertainment", "Entertainment — Grand Mall Batumi", "Choose your pace at Grand Mall Batumi. Explore CAVEA, Bowling, Oktopus Fitness and Wonderland."); }
export default function EntertainmentPage() {
    const t = useCopy();
    return <><Link className="skip-link" href="#main">{t("Skip to content")}</Link><Header variant="light"/><main id="main" className="ent-page">
    <section className="ent-hero" aria-labelledby="ent-title">
      <Image src={entertainmentHero.src} alt={t(entertainmentHero.alt)} fill sizes="100vw" preload/>
      <div className="ent-hero-shade"/>
      <Reveal className="ent-hero-content"><p className="eyebrow">{t("GRAND MALL / ENTERTAINMENT")}</p><h1 id="ent-title">{t("THE FUN")}<br />{t("STARTS HERE")}<span>.</span></h1><div className="ent-hero-bottom"><p>{t("Cinema, fitness, bowling")}<br />{t("and entertainment for every kind of day.")}</p><Link href="#choose-your-pace" className="experience-link">{t("EXPLORE ENTERTAINMENT ")}<span aria-hidden="true">↓</span></Link></div></Reveal>
    </section>
    <section className="ent-intro" id="choose-your-pace" aria-labelledby="ent-intro-title"><Reveal><div className="section-topline"><p className="eyebrow">{t("A CHANGE OF PACE")}</p><span className="eyebrow">{t("YOUR DAY. YOUR WAY.")}</span></div><div className="ent-intro-layout"><h2 id="ent-intro-title">{t("CHOOSE")}<br />{t("YOUR PACE")}<span className="accent">.</span></h2><p>{t("Slow down.")}<br />{t("Move.")}<br />{t("Play.")}<br />{t("Stay a little longer.")}</p></div></Reveal></section>
    <div className="ent-venues">{entertainmentVenues.map((venue, index) => <section key={venue.slug} className={`ent-venue ent-${venue.slug}`} aria-labelledby={`ent-${venue.slug}-title`}>
      <Reveal className="ent-venue-heading"><p className="eyebrow">0{index + 1} / {t(venue.category.toUpperCase())}</p><h2 id={`ent-${venue.slug}-title`}>{venue.slug === "oktopus-fitness" ? <>OKTOPUS<br />FITNESS</> : venue.name.toUpperCase()}</h2></Reveal>
      {venue.image && <Reveal className="ent-visual"><Link href={`/entertainment/${venue.slug}`} aria-label={t("Explore {value0}", { value0: venue.name })} prefetch={false}><Image src={venue.image.src} alt={t(venue.image.alt)} fill sizes={index === 0 ? "100vw" : "(max-width: 700px) 100vw, 60vw"}/></Link></Reveal>}
      <Reveal className="ent-venue-copy">{venue.shortDescription && <p>{t(venue.shortDescription)}</p>}<Link href={`/entertainment/${venue.slug}`} className="experience-link">{t("EXPLORE {value0}", { value0: venue.slug === "oktopus-fitness" ? t("FITNESS") : venue.name.toUpperCase() })} <span aria-hidden="true">→</span></Link></Reveal>
    </section>)}</div>
    <section className="ent-quick-nav" aria-labelledby="ent-quick-title"><Reveal><div className="section-topline"><p className="eyebrow">{t("MAKE YOUR NEXT STOP")}</p><span className="eyebrow">{t("GRAND MALL / ENTERTAINMENT")}</span></div><h2 id="ent-quick-title">{t("FIND YOUR")}<br />{t("EXPERIENCE")}<span>.</span></h2><nav aria-label={t("Entertainment venues")}><ul>{entertainmentVenues.map(venue => <li key={venue.slug}><Link href={`/entertainment/${venue.slug}`} className="ent-quick-link" prefetch={false}><span className="ent-quick-name">{venue.name}</span><span className="ent-quick-category">{t(venue.category)}</span>{venue.floor && <span className="ent-quick-floor">{t("Floor ")}{venue.floor}</span>}<span className="ent-quick-arrow" aria-hidden="true">↗</span></Link></li>)}</ul></nav></Reveal></section>
  </main><Footer home={false}/></>;
}
