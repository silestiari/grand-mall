import { localizedMetadata } from "@/i18n/metadata";
import { useCopy } from "@/i18n/copy";
import type { Metadata } from "next";
import { getPublishedOffers } from "@/data/offers";
import { JournalPage, JournalEmpty, OfferSummary } from "@/components/journal";
import "../../journal.css";
export async function generateMetadata({ params }: PageProps<"/[locale]/offers">): Promise<Metadata> { const { locale } = await params; return localizedMetadata(locale, "/offers", "Offers & What’s New — Grand Mall Batumi", "Brand updates and confirmed offers at Grand Mall Batumi. Follow Grand Mall for the latest news."); }
export const revalidate = 300;
export default function OffersPage() {
    const t = useCopy();
    const offers = getPublishedOffers();
    return <JournalPage kind="offers">{offers.length ? <section className="journal-grid journal-offers-list" aria-label={t("Current offers and brand updates")}>{offers.map(offer => <OfferSummary key={offer.slug} offer={offer}/>)}</section> : <JournalEmpty kind="offers"/>}</JournalPage>;
}
