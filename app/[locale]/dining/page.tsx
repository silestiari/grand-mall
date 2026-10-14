import { localizedMetadata } from "@/i18n/metadata";
import { useCopy } from "@/i18n/copy";
import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { DiningDirectory } from "@/components/dining-directory";
import { diningVenues } from "@/data/dining";
import { diningMedia } from "@/lib/dining-media";
export async function generateMetadata({ params }: PageProps<"/[locale]/dining">): Promise<Metadata> { const { locale } = await params; return localizedMetadata(locale, "/dining", "Dining — Grand Mall Batumi", "Coffee, lunch, dinner and everything in between. Explore cafés and restaurants at Grand Mall Batumi."); }
export default function DiningPage() {
    const t = useCopy();
    const featured = ["big-chefs", "oliva-caf", "dunkin"].map(slug => diningVenues.find(venue => venue.slug === slug)!);
    return <><a className="skip-link" href="#main">{t("Skip to content")}</a><Header variant="light"/><main id="main" tabIndex={-1} className="dining-page">
    <section className="dining-page-hero" aria-labelledby="dining-page-title">
      <Image src={diningMedia.hero.src} alt={t(diningMedia.hero.alt)} fill sizes="100vw" preload/>
      <div className="dining-hero-shade"/>
      <Reveal className="dining-hero-content"><p className="eyebrow">{t("Grand Mall / dining")}</p><h1 id="dining-page-title"><span>{t("EAT.")}</span><span>{t("MEET.")}</span><span>{t("STAY A WHILE.")}</span></h1><div className="dining-hero-bottom"><p>{t("Coffee, lunch, dinner")}<br />{t("and everything in between.")}</p><Link className="experience-link" href="#dining-directory">{t("Explore dining ")}<span aria-hidden="true">↓</span></Link></div></Reveal>
    </section>
    <section className="dining-page-intro" aria-labelledby="dining-intro-title">
      <Reveal><div className="section-topline"><p className="eyebrow">{t("A little time well spent")}</p><span className="eyebrow">{t("At Grand Mall")}</span></div><h2 id="dining-intro-title">{t("A TABLE")}<br />{t("FOR EVERY")}<br className="dining-intro-break"/>{t(" MOMENT")}<span className="accent">.</span></h2></Reveal>
      <div className="dining-intro-layout"><Reveal className="dining-photo dining-intro-large"><Image src={diningMedia.table.src} alt={t(diningMedia.table.alt)} fill sizes="(max-width: 700px) 100vw, 60vw"/></Reveal><div className="dining-intro-side"><Reveal><p>{t("From a quick coffee")}<br />{t("to dinner with friends.")}</p><span className="eyebrow">{t("Make yourself at home")}</span></Reveal><Reveal className="dining-photo dining-intro-small"><Image src={diningMedia.coffee.src} alt={t(diningMedia.coffee.alt)} fill sizes="(max-width: 700px) 60vw, 28vw"/></Reveal></div></div>
    </section>
    <section className="dining-page-featured" aria-labelledby="dining-featured-title"><Reveal><div className="section-topline"><h2 id="dining-featured-title" className="eyebrow">{t("Some places to start")}</h2><span className="eyebrow">{t("Coffee / company / good food")}</span></div></Reveal>
      {featured.map((venue, index) => <Reveal key={venue.slug} className={`dining-feature dining-feature-${index + 1}`}><Link href={`/dining/${venue.slug}`} className="dining-photo dining-feature-image" aria-label={t("Explore {value0}", { value0: venue.name })} prefetch={false}>{venue.image && <Image src={venue.image.src} alt={t(venue.image.alt)} fill sizes="(max-width: 700px) 100vw, 55vw"/>}</Link><div className="dining-feature-copy"><p className="eyebrow">0{index + 1} / {t(venue.category.toUpperCase())}</p><h3><Link href={`/dining/${venue.slug}`}>{venue.name}<span className="accent">.</span></Link></h3>{venue.shortDescription && <p className="dining-feature-description">{t(venue.shortDescription)}</p>}{venue.floor && <p className="eyebrow dining-feature-floor">{t("Floor ")}{venue.floor}</p>}<Link href={`/dining/${venue.slug}`} className="experience-link">{t("EXPLORE {value0}", { value0: venue.name.toUpperCase() })} <span aria-hidden="true">→</span></Link></div></Reveal>)}
    </section>
    <DiningDirectory />
  </main><Footer home={false}/></>;
}
