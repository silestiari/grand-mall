import { localizedMetadata } from "@/i18n/metadata";
import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MapExplorer } from "@/components/map-explorer";
export async function generateMetadata({ params }: PageProps<"/[locale]/map">): Promise<Metadata> { const { locale } = await params; return localizedMetadata(locale, "/map", "Mall Map — Grand Mall Batumi", "Find stores, dining and entertainment at Grand Mall Batumi. Search the directory and explore confirmed floors."); }
export default function MapPage() {
    const t = useCopy();
    return <><Link className="skip-link" href="#main">{t("Skip to content")}</Link><Header variant="light"/><main id="main" className="map-page"><Suspense fallback={<p className="map-loading" role="status">{t("Opening the mall directory…")}</p>}><MapExplorer /></Suspense></main><Footer home={false}/></>;
}
