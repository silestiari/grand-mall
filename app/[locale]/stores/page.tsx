import { localizedMetadata } from "@/i18n/metadata";
import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StoreDirectory } from "@/components/store-directory";
import { Reveal } from "@/components/reveal";
export async function generateMetadata({ params }: PageProps<"/[locale]/stores">): Promise<Metadata> { const { locale } = await params; return localizedMetadata(locale, "/stores", "Stores & Brands — Grand Mall Batumi", "Find stores at Grand Mall Batumi. Search brands and explore the directory by category and floor."); }
export default function StoresPage() {
    const t = useCopy();
    return <><Link className="skip-link" href="#main">{t("Skip to content")}</Link><Header variant="light"/><main id="main" className="stores-page"><section className="directory-hero" aria-labelledby="stores-title"><Reveal><div className="section-topline"><p className="eyebrow">{t("GRAND MALL DIRECTORY")}</p><span className="eyebrow">{t("FIND SOMETHING THAT FEELS LIKE YOU")}</span></div><div className="directory-hero-layout"><h1 id="stores-title">{t("STORES &")}<br />{t("BRANDS")}<span className="accent">.</span></h1><p>{t("Everything you\u2019re looking for,")}<br />{t("all in one place.")}</p></div></Reveal></section><StoreDirectory /></main><Footer home={false}/></>;
}
