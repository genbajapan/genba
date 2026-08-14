import Link from "next/link";
import { companies, jobs } from "@/lib/market-data";
import { buildHiringHeatRows, hiringHeatCriteria } from "@/lib/solution-categories";

const rows = buildHiringHeatRows(companies, jobs);

const total = rows.reduce((sum, row) => sum + row.count, 0);
const activeAreas = rows.filter((row) => row.count > 0).length;
const hiringCompanies = new Set(jobs.map((job) => job.companySlug)).size;
const hotTierAreas = rows.filter((row) => row.tier === "hot").map((row) => row.area);
const warmTierAreas = rows.filter((row) => row.tier === "active").map((row) => row.area);
const quietTierAreas = rows.filter((row) => row.tier === "selective").map((row) => row.area);
const tierStats = Object.fromEntries(
  (["hot", "active", "selective"] as const).map((tier) => [
    tier,
    rows.filter((row) => row.tier === tier).reduce(
      (stats, row) => ({ companies: stats.companies + row.companies, jobs: stats.jobs + row.count }),
      { companies: 0, jobs: 0 },
    ),
  ]),
) as Record<"hot" | "active" | "selective", { companies: number; jobs: number }>;
const lastUpdated = companies.reduce((latest, company) => (company.lastChecked > latest ? company.lastChecked : latest), "");
const preEntryCompanies = companies.filter((company) => company.entryStatus === "not-entered");

function tierHref(tier: "hot" | "active" | "selective") {
  return `/companies?tier=${tier}#company-results`;
}

export default function HiringHeatmap() {
  return (
    <section className="market-heat" aria-labelledby="market-heat-title">
      <div className="market-heat-head">
        <div>
          <p className="eyebrow eyebrow-light">CATEGORY HIRING HEAT</p>
          <h2 id="market-heat-title">求人状況と日本未進出の注目企業</h2>
          <div className="market-heat-description">
            <p>プロダクト領域の求人状況温度感をHOT・Active・Selectiveに分類。国内の営業求人を比較しながら、今後日本へ進出する可能性を調査した海外企業も別枠で追えます。</p>
            <details className="market-heat-criteria">
              <summary>（分類基準）</summary>
              <div className="market-heat-criteria-panel">
                <p><strong>HOT</strong><span>国内営業求人{hiringHeatCriteria.hot.minimumJobs}件以上、かつ採用企業{hiringHeatCriteria.hot.minimumCompanies}社以上</span></p>
                <p><strong>Active</strong><span>国内営業求人{hiringHeatCriteria.active.minimumJobs}件以上、かつ採用企業{hiringHeatCriteria.active.minimumCompanies}社以上</span></p>
                <p><strong>Selective</strong><span>国内営業求人{hiringHeatCriteria.selective.minimumJobs}件以上</span></p>
                <p><strong>対象外</strong><span>求人0件の領域と日本未進出企業。日本未進出企業は黄色の別枠で表示</span></p>
              </div>
            </details>
          </div>
        </div>
        <div className="market-head-status">
          <div className="market-head-metrics" aria-label="現在の掲載状況">
            <div><strong>{hiringCompanies}<small>社</small></strong><span>現在求人ありの企業</span></div>
            <div><strong>{total}<small>件</small></strong><span>掲載中の営業求人</span></div>
            <div><strong>{activeAreas}<small>分類</small></strong><span>営業求人を確認</span></div>
          </div>
          <div className="market-date">
            <span>最終更新日</span>
            <strong>{lastUpdated.replaceAll("-", ".")}</strong>
          </div>
        </div>
      </div>

      <div className="market-tier-board">
        <p className="market-tier-heading">採用温度の3つの層 + 日本未進出</p>
        <p className="market-tier-note">現在の求人と、将来の進出可能性は分けて表示しています。</p>
        <div className="market-tier-list">
          <Link href={tierHref("hot")} className="market-tier market-tier-hot" aria-label={`HOT（${tierStats.hot.companies}社／${tierStats.hot.jobs}求人）に含まれる企業をすべて見る`}>
            <span className="market-tier-label">HOT <small>（{tierStats.hot.companies}社／{tierStats.hot.jobs}求人）</small></span>
            <div className="market-tier-tags">
              {hotTierAreas.length ? hotTierAreas.map((area) => <span key={area} className="market-tier-tag">{area}</span>) : <span className="market-tier-tag market-tier-tag-empty">該当なし</span>}
            </div>
            <p>国内営業求人{hiringHeatCriteria.hot.minimumJobs}件以上、かつ採用企業{hiringHeatCriteria.hot.minimumCompanies}社以上の大分類。</p>
          </Link>
          <Link href={tierHref("active")} className="market-tier market-tier-warm" aria-label={`Active（${tierStats.active.companies}社／${tierStats.active.jobs}求人）に含まれる企業をすべて見る`}>
            <span className="market-tier-label">Active <small>（{tierStats.active.companies}社／{tierStats.active.jobs}求人）</small></span>
            <div className="market-tier-tags">
              {warmTierAreas.length ? warmTierAreas.map((area) => <span key={area} className="market-tier-tag">{area}</span>) : <span className="market-tier-tag market-tier-tag-empty">該当なし</span>}
            </div>
            <p>国内営業求人{hiringHeatCriteria.active.minimumJobs}件以上、かつ採用企業{hiringHeatCriteria.active.minimumCompanies}社以上の大分類。</p>
          </Link>
          <Link href={tierHref("selective")} className="market-tier market-tier-quiet" aria-label={`Selective（${tierStats.selective.companies}社／${tierStats.selective.jobs}求人）に含まれる企業をすべて見る`}>
            <span className="market-tier-label">Selective <small>（{tierStats.selective.companies}社／{tierStats.selective.jobs}求人）</small></span>
            <div className="market-tier-tags">
              {quietTierAreas.length ? quietTierAreas.map((area) => <span key={area} className="market-tier-tag">{area}</span>) : <span className="market-tier-tag market-tier-tag-empty">該当なし</span>}
            </div>
            <p>国内営業求人を{hiringHeatCriteria.selective.minimumJobs}件以上確認している大分類。</p>
          </Link>
          <Link href="/companies?entry=not-entered#company-results" className="market-tier market-tier-pre-entry" aria-label="日本未進出の注目企業をすべて見る">
            <span className="market-tier-label">日本未進出</span>
            <div className="market-tier-tags">
              <span className="market-tier-tag">注目企業 {preEntryCompanies.length}社</span>
            </div>
            <p>海外成長、APAC展開、日本対応を調査。進出時期は公式事実とGenba仮説を分けて掲載。</p>
          </Link>
        </div>
      </div>

      <p className="market-disclaimer">HOT・Active・Selectiveは、現在公開中と確認できた日本向け営業求人の件数と採用企業数による分類です。求人0件の企業と「日本未進出」は含めず、日本法人・国内拠点・日本向け求人が未確認の企業は、海外公式情報と公開プロフィールから別枠で調査しています。</p>
    </section>
  );
}
