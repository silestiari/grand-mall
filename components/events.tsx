import { useCopy } from "@/i18n/copy";
import { completionMedia, eventStories } from "@/lib/homepage-content";
import { getUpcomingEvents } from "@/data/events";
import { Link } from "@/i18n/navigation";
import { ImmersiveImage } from "./immersive-image";
import { Reveal } from "./reveal";
export function Events() {
    const t = useCopy();
    const published = getUpcomingEvents().map(event => ({ id: event.slug, title: event.title, description: event.shortDescription ?? "", category: "EVENT", startsAt: event.startDate ?? null, href: `/events/${event.slug}`, image: event.image ?? completionMedia.eventGathering }));
    const stories = published.length ? published : eventStories.map(story => ({ ...story, image: completionMedia[story.image] }));
    const [featured, ...secondary] = stories;
    if (!featured)
        return null;
    const dateLabel = (date: string) => new Intl.DateTimeFormat(t.locale, { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Tbilisi" }).format(new Date(date));
    return (<section id="events" className="events-section section-padding" aria-labelledby="events-title">
      <Reveal>
        <div className="section-topline"><p className="eyebrow">{t("The everyday & the unexpected")}</p><span className="eyebrow">{t("Grand Mall journal")}</span></div>
        <div className="finish-heading-row"><h2 id="events-title" className="finish-title">{t("WHAT\u2019S")}<br />{t("HAPPENING")}<span className="accent">.</span></h2><p>{t("New perspectives.")}<br />{t("More reasons to come together.")}</p></div>
      </Reveal>
      <div className="events-editorial">
        <Reveal className="event-featured">
          <Link href={featured.href} className="story-image-link" aria-label={t(featured.title)}><ImmersiveImage {...featured.image} className="event-featured-image" sizes="(max-width: 700px) 100vw, 65vw"/></Link>
          <div className="story-meta eyebrow"><span>{t(featured.category)}</span>{featured.startsAt && <time dateTime={featured.startsAt}>{dateLabel(featured.startsAt)}</time>}</div>
          <h3><Link href={featured.href}>{t(featured.title)} <span aria-hidden="true">↗</span></Link></h3>
          <p>{t(featured.description)}</p>
        </Reveal>
        <div className="event-secondary">
          {secondary.slice(0, 3).map(story => <Reveal className="secondary-story" key={story.id}>
            <Link href={story.href} className="story-image-link" aria-label={t(story.title)}><ImmersiveImage {...story.image} className="event-secondary-image" sizes="(max-width: 700px) 100vw, 32vw"/></Link>
            <div className="story-meta eyebrow"><span>{t(story.category)}</span>{story.startsAt && <time dateTime={story.startsAt}>{dateLabel(story.startsAt)}</time>}</div>
            <h3><Link href={story.href}>{t(story.title)} <span aria-hidden="true">↗</span></Link></h3><p>{t(story.description)}</p>
          </Reveal>)}
        </div>
      </div>
      <Link className="experience-link finish-end-link" href="/events">{t("View all events ")}<span aria-hidden="true">→</span></Link>
    </section>);
}
