import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useCopy } from "@/i18n/copy";
import { officialMedia } from "@/lib/official-media";
import { stockMedia } from "@/lib/stock-media";

const destinations = [
  { title: "Stores", href: "/stores", media: officialMedia.zara, tone: "emerald" },
  { title: "Dining", href: "/dining", media: officialMedia.cafe, tone: "bronze" },
  { title: "Entertainment", href: "/entertainment", media: stockMedia.bowling, tone: "ocean" },
] as const;

export function DestinationCards() {
  const t = useCopy();
  return <nav className="destination-cards" aria-label={t("Explore Grand Mall")}>
    {destinations.map(item => <Link href={item.href} className={`destination-card destination-${item.tone}`} key={item.href}>
      <Image src={item.media.src} alt={t(item.media.alt)} fill sizes="(max-width: 700px) 100vw, 33vw" />
      <span className="destination-wash" aria-hidden="true" />
      <span className="destination-label">{t(item.title)}<span className="destination-arrow" aria-hidden="true">↗</span></span>
    </Link>)}
  </nav>;
}
