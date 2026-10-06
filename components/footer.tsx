import { LanguageSelector } from "./language-selector";
import { useCopy } from "@/i18n/copy";
import { Link } from "@/i18n/navigation";
import { footerNavigation, footerInformation, legalLinks, socialLinks, visitorInformation } from "@/lib/homepage-content";
export function Footer({ home = true }: {
    home?: boolean;
}) {
    const t = useCopy();
    const href = (value: string) => !home && value.startsWith("#") && value !== "#main" ? `/${value}` : value;
    return (<footer className="site-footer" aria-label={t("Grand Mall information")}>
      <div className="footer-top"><Link href={home ? "#main" : "/"} className="wordmark" aria-label={t("Grand Mall Batumi home")}><span>GRAND MALL</span><small>BATUMI</small></Link><p>{t("Part of the city.")}<br />{t("Part of your everyday.")}</p><Link href="#main" className="footer-top-link">{t("BACK TO TOP ")}<span aria-hidden="true">↑</span></Link></div>
      <div className="footer-columns">
        <nav aria-label={t("Footer navigation")}><h2 className="eyebrow">{t("DISCOVER")}</h2>{footerNavigation.map(link => <Link key={link.label} href={href(link.href)}>{t(link.label)}</Link>)}</nav>
        <nav aria-label={t("Information")}><h2 className="eyebrow">{t("INFORMATION")}</h2>{footerInformation.map(link => <Link key={link.label} href={href(link.href)}>{t(link.label)}</Link>)}</nav>
        <div className="footer-visitor"><h2 className="eyebrow">{t("FIND US")}</h2><address>{t(visitorInformation.address)}</address>{visitorInformation.openingHours && <p>{t(visitorInformation.openingHours.scope)}: {t(visitorInformation.openingHours.value)}</p>}<Link href={visitorInformation.phoneHref}>{visitorInformation.phone}</Link><Link href={`mailto:${visitorInformation.email}`}>{visitorInformation.email}</Link></div>
        <div className="footer-social"><nav aria-label={t("Social media")}><h2 className="eyebrow">{t("STAY IN THE PICTURE")}</h2>{socialLinks.map(link => <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{t(link.label)} <span aria-hidden="true">↗</span></Link>)}</nav><LanguageSelector footer /></div>
      </div>
      <div className="footer-grand" aria-hidden="true">GRAND MALL</div>
      <div className="footer-bottom"><p>© 2026 Grand Mall Batumi</p><span>{t("BATUMI, GEORGIA")}</span><nav aria-label={t("Legal")}>{legalLinks.map(link => <Link key={link.label} href={link.href}>{t(link.label)}</Link>)}</nav></div>
    </footer>);
}
