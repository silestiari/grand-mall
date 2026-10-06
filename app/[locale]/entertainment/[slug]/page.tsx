import { localizedMetadata } from "@/i18n/metadata";
import { getCopy } from "@/i18n/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { entertainmentVenues, getEntertainmentVenue } from "@/data/entertainment";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EntertainmentDetail } from "@/components/entertainment-detail";
export function generateStaticParams() { return entertainmentVenues.map(venue => ({ slug: venue.slug })); }
export async function generateMetadata({ params }: PageProps<"/[locale]/entertainment/[slug]">): Promise<Metadata> { const { locale, slug } = await params; const venue = getEntertainmentVenue(slug); return localizedMetadata(locale, `/entertainment/${slug}`, venue ? `${venue.name} — Grand Mall Batumi` : "Place not found — Grand Mall Batumi", venue?.shortDescription); }
export default async function EntertainmentVenuePage({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const t = await getCopy();
    const venue = getEntertainmentVenue((await params).slug);
    if (!venue)
        notFound();
    return <><Link className="skip-link" href="#main">{t("Skip to content")}</Link><Header variant="light"/><main id="main" className="ent-detail-page"><EntertainmentDetail venue={venue}/></main><Footer home={false}/></>;
}
