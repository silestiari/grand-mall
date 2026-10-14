import { useCopy } from "@/i18n/copy";
import { mallFacts } from "@/lib/mall-data";
import { Reveal } from "./reveal";
export function MallNumbers() {
    const t = useCopy();
    return (<section className="numbers section-padding" id="numbers" aria-labelledby="numbers-title">
      <Reveal>
        <div className="section-topline">
          <p className="eyebrow">{t("GRAND MALL IN NUMBERS")}</p>
          <span className="eyebrow">{t("MORE THAN A DESTINATION")}</span>
        </div>
        <div className="numbers-intro">
          <h2 id="numbers-title">{t("MORE THAN")}<br />
            <span>{t("SHOPPING.")}</span>
          </h2>
          <p>{t("A place to find your style.")}<br />{t("To meet, explore and make a day of it.")}<br />{t("Welcome to Grand Mall Batumi.")}</p>
        </div>
        <div className="statistics">
          {mallFacts.map((fact) => (<div className="statistic" key={fact.label}>
              <div className="stat-value">
                {fact.value.startsWith("≈") ? (<>
                    <span className="stat-prefix">≈</span>
                    {fact.value.slice(1)}
                  </>) : (fact.value)}
              </div>
              <h3 className="eyebrow">{t(fact.label)}</h3>
              <p>{t(fact.note)}</p>
            </div>))}
        </div>
      </Reveal>
    </section>);
}
