import Link from "next/link";
import { companies, jobs } from "@/lib/market-data";
import { buildHiringHeatRows } from "@/lib/solution-categories";

const rows = buildHiringHeatRows(companies, jobs);

const total = rows.reduce((sum, row) => sum + row.count, 0);
const activeAreas = rows.filter((row) => row.count > 0).length;
const hiringCompanies = new Set(jobs.map((job) => job.companySlug)).size;
const hotTierAreas = rows.filter((row) => row.tier === "hot").map((row) => row.area);
const warmTierAreas = rows.filter((row) => row.tier === "active").map((row) => row.area);
const quietTierAreas = rows.filter((row) => row.tier === "selective").map((row) => row.area);
const lastUpdated = companies.reduce((latest, company) => (company.lastChecked > latest ? company.lastChecked : latest), "");

function tierHref(tier: "hot" | "active" | "selective") {
  return `/companies?tier=${tier}#company-results`;
}

export default function HiringHeatmap() {
  return (
    <section className="market-heat" aria-labelledby="market-heat-title">
      <div className="market-heat-head">
        <div>
          <p className="eyebrow eyebrow-light">CATEGORY HIRING HEAT</p>
          <h2 id="market-heat-title">7つの大分類で見る採用温度</h2>
          <p>製品固有の細かな領域を、読者が企業を探しやすい7つの大分類へ統合。公式確認できた掲載中の営業求人を集計しています。</p>
        </div>
        <div className="market-head-status">
          <div className="market-head-metrics" aria-label="現在の掲載状況">
            <div><strong>{hiringCompanies}<small>社</small></strong><span>求人掲載中の企業</span></div>
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
        <p className="market-tier-heading">採用温度で見る3つの層</p>
        <p className="market-tier-note">最も熱い領域が、必ずしも狙い目とは限りません。</p>
        <div className="market-tier-list">
          <Link href={tierHref("hot")} className="market-tier market-tier-hot" aria-label="HOTに含まれる企業をすべて見る">
            <span className="market-tier-label">HOT</span>
            <div className="market-tier-tags">
              {hotTierAreas.length ? hotTierAreas.map((area) => <span key={area} className="market-tier-tag">{area}</span>) : <span className="market-tier-tag market-tier-tag-empty">該当なし</span>}
            </div>
            <p>掲載求人が相対的に多い大分類。複数社を横断して比較できます。</p>
          </Link>
          <Link href={tierHref("active")} className="market-tier market-tier-warm" aria-label="Activeに含まれる企業をすべて見る">
            <span className="market-tier-label">Active</span>
            <div className="market-tier-tags">
              {warmTierAreas.length ? warmTierAreas.map((area) => <span key={area} className="market-tier-tag">{area}</span>) : <span className="market-tier-tag market-tier-tag-empty">該当なし</span>}
            </div>
            <p>複数社で採用を確認。専門性と顧客セグメントの相性を見極めたい大分類。</p>
          </Link>
          <Link href={tierHref("selective")} className="market-tier market-tier-quiet" aria-label="Selectiveに含まれる企業をすべて見る">
            <span className="market-tier-label">Selective</span>
            <div className="market-tier-tags">
              {quietTierAreas.length ? quietTierAreas.map((area) => <span key={area} className="market-tier-tag">{area}</span>) : <span className="market-tier-tag market-tier-tag-empty">該当なし</span>}
            </div>
            <p>掲載求人が相対的に少ない大分類。募集状況と更新日を合わせて確認できます。</p>
          </Link>
        </div>
      </div>

      <p className="market-disclaimer">現在確認できている営業求人を大分類ごとに集計し、最大求人数に対する相対比でHOT・Active・Selectiveへ分類しています。募集終了・新規掲載は確認次第更新します。</p>
    </section>
  );
}
