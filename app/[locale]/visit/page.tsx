import { localizedMetadata } from "@/i18n/metadata";
import { useCopy } from "@/i18n/copy";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { visitorInformation as info } from "@/data/visitor-info";
import "../../visit.css";
export async function generateMetadata({ params }: PageProps<"/[locale]/visit">): Promise<Metadata> { const { locale } = await params; return localizedMetadata(locale, "/visit", "Plan Your Visit — Grand Mall Batumi", "Find Grand Mall Batumi, plan directions and parking, and check visitor information, accessibility and contact details."); }
const quickLinks = [{ name: "Stores", href: "/stores" }, { name: "Dining", href: "/dining" }, { name: "Entertainment", href: "/entertainment" }, { name: "Mall Map", href: "/map" }];
const arrow = <span aria-hidden="true">→</span>;
export default function VisitPage() {
    const t = useCopy();
    return <>
    <a className="skip-link" href="#main">{t("Skip to content")}</a>
    <Header variant="light"/>
    <main id="main" tabIndex={-1} className="visit-page">
      <section className="visit-page-hero" aria-labelledby="visit-page-title">
        <p className="eyebrow">{t("GRAND MALL / VISIT")}</p>
        <Reveal className="visit-page-intro">
          <div><h1 id="visit-page-title">{t("PLAN")}<br />{t("YOUR VISIT")}<span className="accent">.</span></h1><p>{t("Everything you need")}<br />{t("before you arrive.")}</p></div>
          <div className="visit-architecture" aria-hidden="true"><svg viewBox="0 0 360 300" fill="none"><path d="M24 264H336M48 240V84L216 24V240M48 84H240V264M96 67V240M144 50V240M192 33V240M240 112H312V264M264 112V264M288 112V264M48 144H240M48 192H240M24 264 48 240H216L336 264"/><path className="visit-architecture-plane" d="M144 50 192 33V240H144Z"/></svg><span className="eyebrow">{t("BATUMI / GEORGIA")}</span></div>
        </Reveal>
        <nav className="visit-page-actions" aria-label={t("Essential visitor actions")}><Link className="experience-link" href={info.directions} target="_blank" rel="noopener noreferrer">{t("GET DIRECTIONS ")}{arrow}</Link><Link className="experience-link" href={info.phoneHref}>{t("CALL GRAND MALL ")}{arrow}</Link><Link className="experience-link" href="/map">{t("MALL MAP ")}{arrow}</Link></nav>
      </section>

      <section className="visit-essentials" aria-labelledby="visit-essentials-title">
        <h2 id="visit-essentials-title" className="sr-only">{t("Essential information")}</h2>
        <dl>
          <div><dt className="eyebrow">{t("ADDRESS")}</dt><dd><address>{t(info.street)}<br /><small>{t(info.city)}</small></address></dd></div>
          {info.openingHours && <div><dt className="eyebrow">{t("OPENING HOURS")}</dt><dd>{t(info.openingHours.value)}<small>{t(info.openingHours.scope)}. {t(info.openingHours.note)}</small></dd></div>}
          <div><dt className="eyebrow">{t("PHONE")}</dt><dd><Link href={info.phoneHref}>{info.phone}</Link><small>{t("Grand Mall information")}</small></dd></div>
          <div><dt className="eyebrow">{t("EMAIL")}</dt><dd><Link href={`mailto:${info.email}`}>{info.email}</Link><small>{t("Get in touch before your visit.")}</small></dd></div>
        </dl>
      </section>

      <section id="directions" className="visit-directions visit-page-section" aria-labelledby="visit-directions-title">
        <Reveal className="visit-directions-copy"><p className="eyebrow">{t("YOUR DESTINATION")}</p><h2 id="visit-directions-title">{t("GET")}<br />{t("DIRECTIONS")}<span className="accent">.</span></h2><address>{t(info.address)}</address><Link className="experience-link" href={info.directions} target="_blank" rel="noopener noreferrer">{t("OPEN IN MAPS ")}{arrow}</Link></Reveal>
        <div className="visit-city-location" aria-label={t("Grand Mall location")}>
          {info.locationEmbed ? <iframe title={t("Grand Mall city location")} src={info.locationEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/> : <><div className="visit-city-top eyebrow"><span>{t("YOUR DESTINATION")}</span><span>BATUMI</span></div><div className="visit-city-center"><span aria-hidden="true">+</span><p>GRAND<br />MALL<span className="accent">.</span></p></div><div className="visit-city-bottom"><address>{t(info.street)}<br />{t(info.city)}</address><Link className="experience-link" href={info.directions} target="_blank" rel="noopener noreferrer">{t("OPEN IN MAPS ")}{arrow}</Link></div></>}
        </div>
      </section>

      <section className="visit-page-section" aria-labelledby="visit-transport-title">
        <Reveal className="visit-section-heading"><p className="eyebrow">{t("ON YOUR WAY")}</p><h2 id="visit-transport-title">{t("GETTING HERE")}<span className="accent">.</span></h2></Reveal>
        <div className="visit-transport-list">{info.transport?.map((item, index) => <div key={item.mode}><span className="eyebrow">0{index + 1}</span><h3>{t(item.mode)}</h3><p>{t(item.description)}</p></div>)}</div>
      </section>

      <div className="visit-arrival visit-page-section">
        <section id="parking" aria-labelledby="visit-parking-title"><Reveal><p className="eyebrow">{t("ARRIVING BY CAR")}</p><h2 id="visit-parking-title">{t("PARKING")}<span className="accent">.</span></h2></Reveal>
          {info.parking?.spaces && <p className="visit-parking-count">{info.parking.spaces}<span className="eyebrow">{t("PARKING SPACES")}</span></p>}
          <dl className="visit-parking-details">{info.parking?.level && <div><dt>{t("Parking level")}</dt><dd>{info.parking.level}</dd></div>}{info.parking?.hours && <div><dt>{t("Daily hours")}</dt><dd>{info.parking.hours}</dd></div>}</dl>
          {info.parking?.charging && <p className="visit-small-copy">{t(info.parking.charging)}</p>}
          <Link className="experience-link" href={info.phoneHref}>{t("ASK ABOUT PARKING ")}{arrow}</Link>
        </section>
        <section aria-labelledby="visit-accessibility-title"><Reveal><p className="eyebrow">{t("A VISIT FOR EVERYONE")}</p><h2 id="visit-accessibility-title">{t("ACCESSIBILITY")}<span className="accent">.</span></h2></Reveal>
          <ul className="visit-access-list">{Object.entries(info.accessibility ?? {}).map(([key, value]) => value && <li key={key}><span aria-hidden="true">+</span>{t(value)}</li>)}</ul>
          <p className="visit-small-copy">{t("For help planning your arrival or finding an entrance, contact our information team.")}</p><Link className="experience-link" href={info.phoneHref}>{t("ASK OUR TEAM ")}{arrow}</Link>
        </section>
      </div>

      <nav className="visit-quick-links visit-page-section" aria-label={t("Explore Grand Mall")}><p className="eyebrow">{t("MAKE A DAY OF IT")}</p>{quickLinks.map(link => <Link key={link.href} href={link.href}>{t(link.name.toUpperCase())} {arrow}</Link>)}</nav>

      <section id="contact" className="visit-contact visit-page-section" aria-labelledby="visit-contact-title"><Reveal><p className="eyebrow">{t("WE\u2019RE HERE TO HELP")}</p><h2 id="visit-contact-title">{t("NEED")}<br />{t("HELP")}<span className="accent">?</span></h2></Reveal><div className="visit-contact-details"><Link href={info.phoneHref}>{info.phone}</Link><Link href={`mailto:${info.email}`}>{info.email}</Link>{info.openingHours && <p>{t(info.openingHours.scope)}: {t(info.openingHours.value)}</p>}<Link className="experience-link" href={`mailto:${info.email}`}>{t("CONTACT GRAND MALL ")}{arrow}</Link></div></section>
    </main>
    <Footer home={false}/>
  </>;
}
