import { localizedMetadata } from "@/i18n/metadata";
import { useCopy } from "@/i18n/copy";
import type { Metadata } from "next";
import { getUpcomingEvents } from "@/data/events";
import { JournalPage, JournalEmpty, EventSummary } from "@/components/journal";
import "../../journal.css";
export async function generateMetadata({ params }: PageProps<"/[locale]/events">): Promise<Metadata> { const { locale } = await params; return localizedMetadata(locale, "/events", "Events — Grand Mall Batumi", "See what’s happening at Grand Mall Batumi. Follow Grand Mall for event announcements and the latest updates."); }
// Re-evaluate dated records so expired events do not linger after a deployment.
export const revalidate = 300;
export default function EventsPage() {
    const t = useCopy();
    const [featured, ...upcoming] = getUpcomingEvents();
    return <JournalPage kind="events">{featured ? <><EventSummary event={featured} featured/>{!!upcoming.length && <section className="journal-upcoming" aria-labelledby="upcoming-title"><h2 id="upcoming-title" className="journal-section-title">{t("UPCOMING EVENTS")}<span className="accent">.</span></h2><div className="journal-grid">{upcoming.map(event => <EventSummary key={event.slug} event={event}/>)}</div></section>}</> : <JournalEmpty kind="events"/>}</JournalPage>;
}
