import { localizedMetadata } from "@/i18n/metadata";
import { useCopy } from "@/i18n/copy";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MapExplorer, MapWorkspace } from "@/components/map-explorer";
export async function generateMetadata({ params }: PageProps<"/[locale]/map">): Promise<Metadata> { const { locale } = await params; return localizedMetadata(locale, "/map", "Mall Map — Grand Mall Batumi", "Find stores, dining and entertainment at Grand Mall Batumi. Search the directory and explore confirmed floors."); }
export default function MapPage() {
    const t = useCopy();
    return <><a className="skip-link" href="#main">{t("Skip to content")}</a><Header variant="light"/><main id="main" tabIndex={-1} className="map-page">{/* The fallback is the full directory without a deep-linked selection, so it is server-rendered. */}<Suspense fallback={<MapWorkspace />}><MapExplorer /></Suspense></main><Footer home={false}/></>;
}
