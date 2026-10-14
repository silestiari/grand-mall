import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { visitorInformation } from "@/lib/homepage-content";
import { Reveal } from "./reveal";
export function PlanVisit() {
    const t = useCopy();
    return (<section id="visit" className="visit-section section-padding" aria-labelledby="visit-title">
      <Reveal><div className="section-topline"><p className="eyebrow">{t("We\u2019ll see you here")}</p><span className="eyebrow">{t("New boulevard, Batumi")}</span></div><h2 id="visit-title" className="finish-title">{t("PLAN")}<br />{t("YOUR VISIT")}<span className="accent">.</span></h2></Reveal>
      <div className="visit-layout">
        <Reveal className="visit-information"><dl>{visitorInformation.fields.map(field => <div className="visit-fact" key={field.label}><dt className="eyebrow">{t(field.label)}</dt><dd>{t(field.value)}<small>{t(field.note)}</small></dd></div>)}<div className="visit-fact"><dt className="eyebrow">{t("Phone")}</dt><dd><Link href={visitorInformation.phoneHref}>{visitorInformation.phone}</Link></dd></div><div className="visit-fact"><dt className="eyebrow">{t("Email")}</dt><dd><Link href={`mailto:${visitorInformation.email}`}>{visitorInformation.email}</Link></dd></div></dl></Reveal>
        <div className="visit-location">
          <div className="visit-location-top eyebrow"><span>{t("Black Sea coast")}</span><span>{t("Georgia")}</span></div>
          <div className="visit-location-center"><span className="location-marker" aria-hidden="true">+</span><p>GRAND MALL<small>BATUMI</small></p></div>
          <div className="visit-location-bottom"><p>{t(visitorInformation.address)}</p><Link href={visitorInformation.directions} target="_blank" rel="noopener noreferrer">{t("Open directions ")}<span aria-hidden="true">↗</span></Link></div>
        </div>
      </div>
      <div className="visit-actions"><Link className="experience-link" href={visitorInformation.directions} target="_blank" rel="noopener noreferrer">{t("Get directions ")}<span aria-hidden="true">→</span></Link><Link className="experience-link" href={`mailto:${visitorInformation.email}`}>{t("Contact us ")}<span aria-hidden="true">→</span></Link></div>
    </section>);
}
