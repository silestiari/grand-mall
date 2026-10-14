import { localizedMetadata, notFoundMetadata } from "@/i18n/metadata";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEvent, getPublishedEvents } from "@/data/events";
import { EventDetail } from "@/components/journal";
import "../../../journal.css";
export function generateStaticParams() { return getPublishedEvents().map(event => ({ slug: event.slug })); }
export async function generateMetadata({ params }: PageProps<"/[locale]/events/[slug]">): Promise<Metadata> { const { locale, slug } = await params; const event = getEvent(slug); return event ? localizedMetadata(locale, `/events/${slug}`, `${event.title} — Grand Mall Batumi`, event.shortDescription) : notFoundMetadata(locale, "Event not found — Grand Mall Batumi"); }
export default async function EventPage({ params }: PageProps<"/[locale]/events/[slug]">) {
    const event = getEvent((await params).slug);
    if (!event)
        notFound();
    return <EventDetail event={event}/>;
}
