import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
export function QuickInfo() {
    const t = useCopy();
    return (<section className="quick-info" id="quick-info" aria-label={t("Grand Mall at a glance")}>
      <div className="quick-facts">
        <span>{t("\u2248100 STORES")}</span>
        <span>{t("5 FLOORS")}</span>
        <span>{t("SHOPPING")}</span>
        <span>{t("DINING")}</span>
        <span>{t("CINEMA")}</span>
        <span>{t("ENTERTAINMENT")}</span>
      </div>
      <Link className="quick-map" href="/map">{t("Find your way")}<span aria-hidden="true">↗</span>
      </Link>
    </section>);
}
