import { useCopy } from "@/i18n/copy";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Reveal } from "./reveal";
import { completionMedia, socialLinks } from "@/lib/homepage-content";
import type { MallEvent } from "@/data/events";
import type { MallOffer } from "@/data/offers";
export function JournalPage({ kind, children }: {
    kind: "events" | "offers";
    children: ReactNode;
}) {
    const t = useCopy();
    return <><a className="skip-link" href="#main">{t("Skip to content")}</a><Header variant="light"/><main id="main" tabIndex={-1} className={`journal-page journal-${kind}`}><section className="journal-hero" aria-labelledby="journal-title"><Reveal><div className="section-topline"><p className="eyebrow">{t("GRAND MALL / ")}{t(kind.toUpperCase())}</p><span className="eyebrow">{kind === "events" ? t("TOGETHER / IN BATUMI") : t("THE BRAND EDIT")}</span></div><h1 id="journal-title">{kind === "events" ? <>{t("WHAT'S")}<br />{t("HAPPENING")}<span className="accent">.</span></> : <>{t("OFFERS &")}<br />{t("WHAT'S NEW")}<span className="accent">.</span></>}</h1></Reveal></section>{children}</main><Footer home={false}/></>;
}
export function JournalEmpty({ kind }: {
    kind: "events" | "offers";
}) {
    const t = useCopy();
    const isEvents = kind === "events";
    const image = isEvents ? completionMedia.eventGathering : completionMedia.offerDetails;
    return <section className="journal-empty" aria-labelledby="journal-empty-title"><Reveal className="journal-empty-copy"><p className="eyebrow">{isEvents ? t("MORE MOMENTS TOGETHER") : t("WHAT\u2019S NEW.")}</p><h2 id="journal-empty-title">{isEvents ? <>{t("New events")}<br />{t("are coming soon.")}</> : <>{t("New offers and")}<br />{t("brand updates")}<br />{t("are coming soon.")}</>}</h2><p>{isEvents ? t("Follow Grand Mall for the latest updates.") : t("A closer look at the brands. Follow Grand Mall for the latest updates.")}</p><nav className="journal-social" aria-label={t("Grand Mall social updates")}>{socialLinks.map(link => <Link className="experience-link" key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{t(link.label.toUpperCase())} <span aria-hidden="true">↗</span></Link>)}</nav>{!isEvents && <Link className="experience-link journal-brand-link" href="/stores">{t("EXPLORE THE BRANDS ")}<span aria-hidden="true">→</span></Link>}</Reveal><Reveal className="journal-atmosphere"><Image src={image.src} alt={t(image.alt)} fill sizes="(max-width: 700px) 100vw, 50vw"/></Reveal></section>;
}
export function JournalDates({ startDate, endDate }: {
    startDate?: string;
    endDate?: string;
}) {
    const t = useCopy();
    const date = (value?: string) => {
        if (!value || Number.isNaN(Date.parse(value)))
            return null;
        return <time dateTime={value}>{new Intl.DateTimeFormat(t.locale, { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Tbilisi" }).format(new Date(value))}</time>;
    };
    const start = date(startDate), end = date(endDate);
    if (!start && !end)
        return null;
    return <span className="journal-dates">{start}{start && end && startDate !== endDate ? " — " : ""}{end && startDate !== endDate ? <>{!start && t("Until ")}{end}</> : null}</span>;
}
export function EventSummary({ event, featured = false }: {
    event: MallEvent;
    featured?: boolean;
}) {
    const t = useCopy();
    const href = `/events/${event.slug}`;
    return <article className={featured ? "journal-featured" : "journal-story"}><Reveal>{event.image && <Link href={href} className="journal-story-image" aria-label={t(event.title)}><Image src={event.image.src} alt={t(event.image.alt)} fill sizes={featured ? "(max-width: 700px) 100vw, 70vw" : "(max-width: 700px) 100vw, 45vw"}/></Link>}<div className="journal-meta eyebrow"><span>{featured ? t("FEATURED EVENT") : t("EVENT")}</span><JournalDates startDate={event.startDate} endDate={event.endDate}/></div><h2><Link href={href}>{t(event.title)} <span aria-hidden="true">↗</span></Link></h2>{event.shortDescription && <p>{t(event.shortDescription)}</p>}<Link href={href} className="experience-link">{t("VIEW EVENT ")}<span aria-hidden="true">→</span></Link></Reveal></article>;
}
export function OfferSummary({ offer }: {
    offer: MallOffer;
}) {
    const t = useCopy();
    // Links are optional; unsupported destinations never become placeholder buttons.
    const safeLink = offer.link && (/^https:\/\//.test(offer.link) || /^\/(stores|dining|entertainment)\/[a-z0-9-]+$/.test(offer.link)) ? offer.link : undefined;
    return <article className="journal-story journal-offer"><Reveal>{offer.image && <div className="journal-story-image"><Image src={offer.image.src} alt={t(offer.image.alt)} fill sizes="(max-width: 700px) 100vw, 45vw"/></div>}<div className="journal-meta eyebrow"><span>{offer.brand}</span><JournalDates startDate={offer.startDate} endDate={offer.endDate}/></div><h2>{t(offer.title)}</h2>{offer.shortDescription && <p>{t(offer.shortDescription)}</p>}{safeLink && <Link href={safeLink} target={safeLink.startsWith("https:") ? "_blank" : undefined} rel={safeLink.startsWith("https:") ? "noopener noreferrer" : undefined} className="experience-link">{t("DISCOVER MORE ")}<span aria-hidden="true">→</span></Link>}</Reveal></article>;
}
export function EventDetail({ event }: {
    event: MallEvent;
}) {
    const t = useCopy();
    return <><a className="skip-link" href="#main">{t("Skip to content")}</a><Header variant="light"/><main id="main" tabIndex={-1} className="journal-page journal-detail"><Link href="/events" className="experience-link">{t("ALL EVENTS ")}<span aria-hidden="true">←</span></Link><Reveal><p className="eyebrow journal-detail-label">{t("GRAND MALL / EVENTS")}</p><h1>{t(event.title)}</h1>{(event.startDate || event.endDate || event.location) && <div className="journal-detail-meta"><JournalDates startDate={event.startDate} endDate={event.endDate}/>{event.location && <p>{t(event.location)}</p>}</div>}{event.image && <div className="journal-detail-image"><Image src={event.image.src} alt={t(event.image.alt)} fill sizes="100vw" preload/></div>}</Reveal>{(event.shortDescription || event.description) && <div className="journal-detail-copy">{event.shortDescription && <p className="journal-detail-lead">{t(event.shortDescription)}</p>}{event.description?.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{t(paragraph)}</p>)}</div>}<Link href="/events" className="experience-link">{t("BACK TO EVENTS ")}<span aria-hidden="true">←</span></Link></main><Footer home={false}/></>;
}

