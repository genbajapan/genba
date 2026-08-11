import Link from "next/link";
import { companies, getCompany, jobs } from "@/lib/market-data";

const allAreas = Array.from(new Set(companies.map((company) => company.category)));
const currentCounts = new Map<string, number>();

for (const job of jobs) {
  const area = getCompany(job.companySlug)?.category;
  if (area) currentCounts.set(area, (currentCounts.get(area) ?? 0) + 1);
}

const orderedAreas = allAreas.sort((a, b) => {
  const difference = (currentCounts.get(b) ?? 0) - (currentCounts.get(a) ?? 0);
  return difference || a.localeCompare(b);
});

const rows = orderedAreas.map((area) => {
  const areaCompanies = companies.filter((company) => company.category === area);
  return { area, count: currentCounts.get(area) ?? 0, companies: areaCompanies.length };
});

const total = rows.reduce((sum, row) => sum + row.count, 0);
const activeAreas = rows.filter((row) => row.count > 0).length;
const hiringCompanies = new Set(jobs.map((job) => job.companySlug)).size;
const maximum = Math.max(1, ...rows.map((row) => row.count));
const hotTierAreas = rows.filter((row) => row.count > 0 && row.count === maximum).map((row) => row.area);
const warmTierAreas = rows.filter((row) => row.count > 0 && row.count < maximum).map((row) => row.area);
const quietTierAreas = rows.filter((row) => row.count === 0).map((row) => row.area);
const lastUpdated = companies.reduce((latest, company) => (company.lastChecked > latest ? company.lastChecked : latest), "");

function areaHref(area: string) {
  return `/companies?category=${encodeURIComponent(area)}#company-results`;
}

export default function HiringHeatmap() {
  return (
    <section className="market-heat" aria-labelledby="market-heat-title">
      <div className="market-heat-head">
        <div>
          <p className="eyebrow eyebrow-light">SOLUTION HIRING HEAT</p>
          <h2 id="market-heat-title">各領域の現状</h2>
          <p>Genbaで公式確認できた掲載中の営業求人を、企業のソリューション領域別に集計しています。</p>
        </div>
        <div className="market-date">
          <span>最終更新日</span>
          <strong>{lastUpdated.replaceAll("-", ".")}</strong>
        </div>
      </div>

      <div className="market-tier-board">
        <p className="market-tier-heading">採用温度で見る3つの層</p>
        <p className="market-tier-note">最も熱い領域が、必ずしも狙い目とは限りません。</p>
        <div className="market-tier-list">
          <div className="market-tier market-tier-hot">
            <span className="market-tier-label">HOT</span>
            <div className="market-tier-tags">
              {hotTierAreas.length ? hotTierAreas.map((area) => <Link key={area} href={areaHref(area)} className="market-tier-tag" aria-label={`${area}の企業一覧を見る`}>{area}</Link>) : <span className="market-tier-tag market-tier-tag-empty">該当なし</span>}
            </div>
            <p>求人数が最も多い領域。応募者の競合も多いと想定されます。</p>
          </div>
          <div className="market-tier market-tier-warm">
            <span className="market-tier-label">Active</span>
            <div className="market-tier-tags">
              {warmTierAreas.length ? warmTierAreas.map((area) => <Link key={area} href={areaHref(area)} className="market-tier-tag" aria-label={`${area}の企業一覧を見る`}>{area}</Link>) : <span className="market-tier-tag market-tier-tag-empty">該当なし</span>}
            </div>
            <p>採用は動いているが、激戦区ほど競合は多くない領域。</p>
          </div>
          <div className="market-tier market-tier-quiet">
            <span className="market-tier-label">Selective</span>
            <div className="market-tier-tags">
              {quietTierAreas.length ? quietTierAreas.map((area) => <Link key={area} href={areaHref(area)} className="market-tier-tag" aria-label={`${area}の企業一覧を見る`}>{area}</Link>) : <span className="market-tier-tag market-tier-tag-empty">該当なし</span>}
            </div>
            <p>現在確認できる求人は少数。穴場として狙える可能性があります。</p>
          </div>
        </div>
      </div>

      <div className="market-dashboard">
        <div className="market-plot">
          <div className="market-axis"><span>ソリューション領域</span><span>掲載中の営業求人</span></div>
          <div className="heat-tile-grid">
            {rows.map((row, index) => {
              const width = row.count === 0 ? 0 : Math.max(6, (row.count / maximum) * 100);
              const tier = row.count === 0 ? "selective" : row.count === maximum ? "hot" : "active";
              const tierLabel = tier === "hot" ? "HOT" : tier === "active" ? "Active" : "Selective";
              return (
                <Link
                  href={areaHref(row.area)}
                  className={`heat-tile heat-tile-${tier}`}
                  key={row.area}
                >
                  <div className="heat-tile-top">
                    <span className="heat-tile-rank">{String(index + 1).padStart(2, "0")}</span>
                    <span className={`heat-tile-badge heat-tile-badge-${tier}`}>{tierLabel}</span>
                  </div>
                  <h3>{row.area}</h3>
                  <div className="heat-tile-stats">
                    <div><strong>{row.companies}</strong><span>社</span></div>
                    <div><strong>{row.count}</strong><span>件</span></div>
                  </div>
                  <div className="heat-tile-track">
                    <div
                      className="heat-tile-fill"
                      style={{ width: `${width}%`, transitionDelay: `${index * 30}ms` }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <aside className="market-insight">
          <p className="market-insight-label">現在の採用温度</p>
          <div className="market-total-row">
            <div><strong>{hiringCompanies}<small>社</small></strong><span>求人掲載中の企業</span></div>
            <div><strong>{total}<small>件</small></strong><span>掲載中の営業求人</span></div>
          </div>
          <p>{activeAreas}領域で営業求人を確認</p>
          <p className="market-disclaimer">現在確認できている営業求人を集計しています。募集終了・新規掲載は確認次第更新します。</p>
        </aside>
      </div>
    </section>
  );
}
