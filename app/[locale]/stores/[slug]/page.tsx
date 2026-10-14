import { localizedMetadata, notFoundMetadata } from "@/i18n/metadata";
import { getCopy } from "@/i18n/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stores, getStore } from "@/data/stores";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StoreDetail } from "@/components/store-detail";
export function generateStaticParams() { return stores.map(store => ({ slug: store.slug })); }
export async function generateMetadata({ params }: PageProps<"/[locale]/stores/[slug]">): Promise<Metadata> {
    const { locale, slug } = await params;
    const store = getStore(slug);
    if (!store) return notFoundMetadata(locale, "Place not found — Grand Mall Batumi");
    const t = await getCopy(locale);
    // Without a published description, describe the store from verified catalogue fields only.
    const description = store.shortDescription ?? (store.floor ? t("{value0} at Grand Mall Batumi: {value1}, floor {value2}.", { value0: store.name, value1: t(store.category), value2: store.floor === "-1" ? "−1" : store.floor }) : undefined);
    return localizedMetadata(locale, `/stores/${slug}`, `${store.name} — Grand Mall Batumi`, description);
}
export default async function StorePage({ params }: PageProps<"/[locale]/stores/[slug]">) {
    const t = await getCopy();
    const store = getStore((await params).slug);
    if (!store)
        notFound();
    return <><a className="skip-link" href="#main">{t("Skip to content")}</a><Header variant="light"/><main id="main" tabIndex={-1} className="store-page"><StoreDetail store={store}/></main><Footer home={false}/></>;
}
