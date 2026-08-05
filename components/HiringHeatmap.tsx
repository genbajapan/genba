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
const maximum = Math.max(1, ...rows.map((row) => row.count));
const hotAreas = rows.filter((row) => row.count === maximum && row.count > 0).map((row) => row.area);
const lastUpdated = companies.reduce((latest, company) => (company.lastChecked > latest ? company.lastChecked : latest), "");

export default function HiringHeatmap() {
  return (
    <section className="market-heat" aria-labelledby="market-heat-title">
      <div className="market-heat-head">
        <div>
          <p className="eyebrow eyebrow-light">SOLUTION HIRING HEAT</p>
          <h2 id="market-heat-title">どの領域が、いま熱いか。</h2>
          <p>Genbaで公式確認できた掲載中の営業求人を、企業のソリューション領域別に集計しています。</p>
        </div>
        <div className="market-date">
          <span>最終更新日</span>
          <strong>{lastUpdated.replaceAll("-", ".")}</strong>
        </div>
      </div>

      <div className="market-dashboard">
        <div className="market-plot">
          <div className="market-axis"><span>ソリューション領域</span><span>掲載中の営業求人</span></div>
          <div className="heat-tile-grid">
            {rows.map((row, index) => {
              const width = row.count === 0 ? 0 : Math.max(6, (row.count / maximum) * 100);
              const isHot = row.count > 0 && row.count === maximum;
              return (
                <Link
                  href={`/companies?category=${encodeURIComponent(row.area)}`}
                  className={`heat-tile ${isHot ? "heat-tile-hot" : ""}`}
                  key={row.area}
                >
                  <div className="heat-tile-top">
                    <span className="heat-tile-rank">{String(index + 1).padStart(2, "0")} ・ {row.companies}社</span>
                    {isHot && <span className="heat-tile-badge">HOT</span>}
                  </div>
                  <h3>{row.area}</h3>
                  <div className="heat-tile-count"><strong>{row.count}</strong><small>件</small></div>
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
          <strong className="market-total">{total}<small>件</small></strong>
          <p>{activeAreas}領域で営業求人を確認</p>
          <div className="market-hot-label">HOT AREA</div>
          <strong className="market-hot-value">{hotAreas.length ? hotAreas.join(" / ") : "観測開始前"}</strong>
          <p className="market-disclaimer">現在確認できている営業求人を集計しています。募集終了・新規掲載は確認次第更新します。</p>
        </aside>
      </div>
    </section>
  );
}
