"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { useCopy } from "@/i18n/copy";
import styles from "./directory-card.module.css";

type DirectoryCardProps = {
  name: string;
  href: string;
  category: string;
  floor?: string;
  image?: { src: string; alt: string };
  tone: "retail" | "dining" | "leisure";
  sizes?: string;
};

export function DirectoryCardList({ children, columns = 3 }: { children: ReactNode; columns?: 2 | 3 }) {
  return <ul className={`${styles.grid} ${columns === 2 ? styles.pair : ""}`}>{children}</ul>;
}

export function DirectoryCard({ name, href, category, floor, image, tone, sizes = "(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 30vw" }: DirectoryCardProps) {
  const t = useCopy();
  return (
    <li>
      <Link href={href} prefetch={false} className={`${styles.card} ${styles[tone] ?? ""}`}>
        <div className={styles.visual}>
          {image ? <Image src={image.src} alt={t(image.alt)} fill sizes={sizes} />
            : <span className={styles.monogram} aria-hidden="true">{name.slice(0, 1)}</span>}
          <span className={styles.wash} aria-hidden="true" />
          <span className={styles.category}>{category}</span>
        </div>
        <div className={styles.copy}>
          <h3>{name}</h3>
          <p>{floor ? <>{t("Floor")} {floor === "-1" ? "−1" : floor}</> : t("See mall map")}</p>
          <span className={styles.arrow} aria-hidden="true">↗</span>
        </div>
      </Link>
    </li>
  );
}
