import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { notFoundMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/[...rest]">): Promise<Metadata> {
  return notFoundMetadata((await params).locale);
}

export default function CatchAllPage() {
  notFound();
}
