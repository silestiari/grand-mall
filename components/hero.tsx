"use client";
import { useCopy } from "@/i18n/copy";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { homepageMedia } from "@/lib/homepage-media";
export function Hero() {
    const t = useCopy();
    const heroCopy = useTranslations("homepageHero");
    const originalLines = heroCopy.raw("lines") as string[];
    const headlineLines = [originalLines[0], originalLines.slice(1).join(" ")];
    const reduce = useReducedMotion();
    return (<section className="hero hero-facade" aria-labelledby="hero-title">
      <div className="hero-image">
        {homepageMedia.hero.kind === "video" ? (<video autoPlay={!reduce} muted loop playsInline poster={homepageMedia.hero.poster} aria-hidden="true">
            <source src={homepageMedia.hero.src}/>
          </video>) : (<Image src={homepageMedia.hero.src} alt={t(homepageMedia.hero.alt)} fill loading="eager" fetchPriority="high" sizes="100vw"/>)}
      </div>
      <div className="hero-shade"/>
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">
          <span className="small-cross">+</span>{t("A new perspective on Batumi")}</p>
        <motion.h1 id="hero-title" className={t.locale === "en" ? undefined : "hero-headline-lines"} initial={{ opacity: 1 }} animate={reduce ? undefined : { opacity: [0.3, 1], y: [26, 0] }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
          {headlineLines.map(line => <span key={line}>{line.toLocaleUpperCase(t.locale)}</span>)}
        </motion.h1>
        <div className="hero-details">
          <p>{t("Shopping, dining and entertainment")}<br />{t("in the heart of Batumi.")}</p>
          <div className="hero-actions">
            <Link className="button button-light" href="#brands">{t("Explore Grand Mall")}<span aria-hidden="true">↗</span>
            </Link>
            <Link className="hero-visit" href="/visit">{t("Plan your visit")}<span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <Link className="eyebrow scroll-link" href="#numbers">{t("Scroll to discover")}<span aria-hidden="true">↓</span>
        </Link>
        <span className="eyebrow hero-location">{t("Batumi, Georgia \u00b7 Black Sea coast")}</span>
      </div>
    </section>);
}
