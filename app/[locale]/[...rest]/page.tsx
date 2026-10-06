import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCopy } from "@/i18n/server";

export async function generateMetadata({ params }: PageProps<"/[locale]/[...rest]">): Promise<Metadata> {
  const t = await getCopy((await params).locale);
  return { title: t("Page not found — Grand Mall Batumi"), robots: { index: false, follow: true } };
}

export default function CatchAllPage() {
  notFound();
}
