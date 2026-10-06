import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Link } from "@/i18n/navigation";
import { getCopy } from "@/i18n/server";
import styles from "./not-found.module.css";

const destinations = [
  { label: "Stores", href: "/stores" },
  { label: "Dining", href: "/dining" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Mall Map", href: "/map" },
];

export default async function NotFound() {
  const t = await getCopy();
  return <>
    <a className="skip-link" href="#main">{t("Skip to content")}</a>
    <Header variant="light" />
    <main id="main" tabIndex={-1} className={styles.page}>
      <section className={styles.hero} aria-labelledby="not-found-title">
        <div>
          <p className="eyebrow">GRAND MALL / 404</p>
          <h1 id="not-found-title">{t("PAGE NOT FOUND")}<span className="accent">.</span></h1>
          <p className={styles.description}>{t("This link may have changed. Choose a section below to continue exploring Grand Mall.")}</p>
          <Link className={styles.home} href="/">{t("BACK TO HOME")}<span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.number} aria-hidden="true"><span>404</span><span className="eyebrow">BATUMI / GRAND MALL</span></div>
      </section>
      <nav className={styles.destinations} aria-label={t("Useful places to start")}>
        {destinations.map((destination, index) => <Link className={styles.destination} key={destination.href} href={destination.href}>
          <span className={styles.index} aria-hidden="true">0{index + 1}</span>
          <span className={styles.label}>{t(destination.label)}</span>
          <span className={styles.arrow} aria-hidden="true">↗</span>
        </Link>)}
      </nav>
    </main>
    <Footer home={false} />
  </>;
}
