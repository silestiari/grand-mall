import { localizedMetadata } from "@/i18n/metadata";
import { getCopy } from "@/i18n/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DiningDetail } from "@/components/dining-detail";
import { diningVenues, getDiningVenue } from "@/data/dining";
export function generateStaticParams() { return diningVenues.map(venue => ({ slug: venue.slug })); }
export async function generateMetadata({ params }: PageProps<"/[locale]/dining/[slug]">): Promise<Metadata> { const { locale, slug } = await params; const venue = getDiningVenue(slug); return localizedMetadata(locale, `/dining/${slug}`, venue ? `${venue.name} — Grand Mall Batumi` : "Place not found — Grand Mall Batumi", venue?.shortDescription); }
export default async function DiningVenuePage({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const t = await getCopy();
    const venue = getDiningVenue((await params).slug);
    if (!venue)
        notFound();
    return <><a className="skip-link" href="#main">{t("Skip to content")}</a><Header variant="light"/><main id="main" tabIndex={-1} className="dining-venue-page"><DiningDetail venue={venue}/></main><Footer home={false}/></>;
}
