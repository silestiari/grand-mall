import { localizedMetadata } from "@/i18n/metadata";
import { getCopy } from "@/i18n/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stores, getStore } from "@/data/stores";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StoreDetail } from "@/components/store-detail";
export function generateStaticParams() { return stores.map(store => ({ slug: store.slug })); }
export async function generateMetadata({ params }: PageProps<"/[locale]/stores/[slug]">): Promise<Metadata> { const { locale, slug } = await params; const store = getStore(slug); return localizedMetadata(locale, `/stores/${slug}`, store ? `${store.name} — Grand Mall Batumi` : "Place not found — Grand Mall Batumi", store?.shortDescription); }
export default async function StorePage({ params }: PageProps<"/[locale]/stores/[slug]">) {
    const t = await getCopy();
    const store = getStore((await params).slug);
    if (!store)
        notFound();
    return <><a className="skip-link" href="#main">{t("Skip to content")}</a><Header variant="light"/><main id="main" tabIndex={-1} className="store-page"><StoreDetail store={store}/></main><Footer home={false}/></>;
}
