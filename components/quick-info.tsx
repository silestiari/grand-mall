import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
export function QuickInfo() {
    const t = useCopy();
    return (<section className="quick-info" id="quick-info" aria-label={t("Grand Mall at a glance")}>
      <div className="quick-facts">
        <span>{t("\u2248100 stores")}</span>
        <span>{t("5 floors")}</span>
        <span>{t("Shopping")}</span>
        <span>{t("Dining")}</span>
        <span>{t("Cinema")}</span>
        <span>{t("Entertainment")}</span>
      </div>
      <Link className="quick-map" href="/map">{t("Find your way")}<span aria-hidden="true">↗</span>
      </Link>
    </section>);
}
