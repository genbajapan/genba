import Link from "next/link";
import type { CSSProperties } from "react";
import Container from "@/components/Container";
import DossierNav from "@/components/DossierNav";
import NewsletterCTA from "@/components/NewsletterCTA";
import SignalCard from "@/components/SignalCard";
import StatusBadge from "@/components/StatusBadge";
import { getCompanyDirectoryEntry, getGlobalScaleSource, resolveGlobalScale } from "@/lib/company-directory";
import { getCompanyFABESalesView, getSolutionFABE } from "@/lib/company-fabe";
import { getCompanyDecisionProfile } from "@/lib/company-intelligence";
import { getCompanyPublicIntelligence, getResearchSource } from "@/lib/company-public-intelligence";
import type { CompanyPublicIntelligence, SalesFabeOverview } from "@/lib/company-public-intelligence";
import { getCompanyScaleComparisons } from "@/lib/company-scale-comparison";
import { compBenchmarkSource, getCompTierForSegment } from "@/lib/comp-benchmark";
import type { Company, Job, Signal, Source } from "@/lib/market-data";

type ProfileProps = {
  company: Company;
  companyJobs: Job[];
  companySignals: Signal[];
  allCompanies: Company[];
};

type SourceEntry = Source & {
  context: string;
  kind: "公式" | "分析根拠";
  checkedAt?: string;
};

function uniqueSources(entries: SourceEntry[]) {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

function shortDate(date: string) {
  return date.replaceAll("-", ".");
}

function CompensationResearchBlock({ research }: { research: NonNullable<Job["compensationResearch"]> }) {
  return (
    <div className="compensation-research">
      <div className="compensation-research-verdict">
        <div>
          <span>GENBA推定</span>
          <b>確度：{research.confidence}</b>
        </div>
        <strong>{research.headline}</strong>
        <p>公式の提示額ではなく、公開情報から求めた市場レンジです。</p>
      </div>

      <p className="compensation-research-summary">{research.summary}</p>

      <div className="compensation-research-grid">
        {research.breakdown.map((item) => (
          <article key={item.label}>
            <div><span>{item.label}</span><em>{item.status}</em></div>
            <strong>{item.value}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>

      <div className="compensation-research-take">
        <span>オファー比較で見るべきこと</span>
        <p>{research.readerTake}</p>
      </div>

      <div className="compensation-research-sources">
        <div className="compensation-research-sources-heading">
          <span>根拠データ</span>
          <p>日本向けの直接値ではないものは、海外参考として限界も明記しています。</p>
        </div>
        <ol>
          {research.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>
              <p>{source.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function ReputationResearchBlock({ research }: { research: NonNullable<Job["reputationResearch"]> }) {
  return (
    <div className="reputation-research">
      <p>{research.summary}</p>
      <div className="reputation-research-topics">
        <span>匿名レビューで見られる論点</span>
        <ul>
          {research.topics.map((topic) => <li key={topic}>{topic}</li>)}
        </ul>
      </div>
      <div className="reputation-research-sources">
        <span>公開ソース</span>
        <ul>
          {research.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>
              <p>{source.detail}</p>
            </li>
          ))}
        </ul>
      </div>
      <p className="reputation-research-caveat">{research.caveat}</p>
    </div>
  );
}

function SalesFabeDetails({
  overview,
  intelligence,
}: {
  overview: SalesFabeOverview;
  intelligence: ReturnType<typeof getCompanyPublicIntelligence>;
}) {
  return (
    <details className="company-sales-evidence company-sales-fabe-details">
      <summary>
        <span className="company-sales-evidence-label-closed">FABE分析と競合比較</span>
        <span className="company-sales-evidence-label-open">FABE分析と競合比較を閉じる</span>
        <span className="company-sales-evidence-icon" aria-hidden="true">＋</span>
      </summary>
      <div className="company-sales-fabe-panel">
        <div className="company-sales-table-scroll">
          <table className="company-sales-table company-fabe-table" aria-label="FABE分析と競合比較">
            <thead><tr><th>観点</th><th>Adyenの分析</th><th>顧客にとっての意味</th></tr></thead>
            <tbody>
              {overview.fabeRows.map((row) => (
                <tr key={row.key} className={`company-fabe-row-${row.key}`}>
                  <th scope="row">{row.label}</th>
                  <td>
                    {row.analysis}
                    {row.sourceIds && (
                      <span className="company-fabe-sources">
                        {row.sourceIds.map((sourceId) => {
                          const source = intelligence && getResearchSource(intelligence, sourceId);
                          return source ? <a key={sourceId} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a> : null;
                        })}
                      </span>
                    )}
                  </td>
                  <td>{row.customerMeaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="company-sales-table-resize-note">右下をドラッグして、表の横幅を調整できます。</p>
      </div>
    </details>
  );
}

function CapitalMarketReadPanel({ intelligence }: { intelligence: CompanyPublicIntelligence }) {
  const analysis = intelligence.marketStatus.capitalMarketRead;
  if (!analysis) return null;

  const sourceLinks = (sourceIds: string[]) => (
    <span className="capital-read-source-links">
      {sourceIds.map((sourceId) => {
        const source = getResearchSource(intelligence, sourceId);
        return source ? <a key={sourceId} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a> : null;
      })}
    </span>
  );

  return (
    <div className="capital-read">
      <section className="capital-read-section">
        <div className="capital-read-heading">
          <span>01 / FINANCIALS</span>
          <h4>決算の数字をどう読むか</h4>
          <p>{analysis.asOf}時点。会社公表値とGenbaの読みを分けて記載しています。</p>
        </div>
        <div className="capital-read-metrics">
          {analysis.metrics.map((metric) => (
            <article key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <b>{metric.change}</b>
              <p>{metric.interpretation}</p>
              {sourceLinks([metric.sourceId])}
            </article>
          ))}
        </div>
      </section>

      <section className="capital-read-section">
        <div className="capital-read-heading">
          <span>02 / GROWTH</span>
          <h4>成長性を支える根拠</h4>
        </div>
        <div className="capital-read-growth-grid">
          {analysis.growthDrivers.map((driver, index) => (
            <article key={driver.title}>
              <span>0{index + 1}</span>
              <h5>{driver.title}</h5>
              <p>{driver.evidence}</p>
              <div><strong>日本への意味</strong><p>{driver.japanMeaning}</p></div>
              {sourceLinks(driver.sourceIds)}
            </article>
          ))}
        </div>
      </section>

      <section className="capital-read-section">
        <div className="capital-read-heading">
          <span>03 / RISK &amp; RESPONSE</span>
          <h4>リスクと会社の対応</h4>
          <p>会社が開示したリスク、その対応、採用候補者として確認すべき点を横並びで整理しています。</p>
        </div>
        <div className="capital-read-risk-table-wrap">
          <table className="capital-read-risk-table">
            <thead><tr><th>論点</th><th>開示されたリスク</th><th>会社の対応</th><th>Genbaの読み</th></tr></thead>
            <tbody>
              {analysis.risks.map((risk) => (
                <tr key={risk.title}>
                  <th scope="row">{risk.title}{sourceLinks(risk.sourceIds)}</th>
                  <td>{risk.disclosedRisk}</td>
                  <td>{risk.companyResponse}</td>
                  <td>{risk.genbaRead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="capital-read-section capital-read-japan">
        <div className="capital-read-heading">
          <span>04 / JAPAN COMMITMENT</span>
          <h4>決算資料から見える日本への注力度</h4>
        </div>
        <div className="capital-read-japan-verdict">
          <span>GENBAの評価</span>
          <strong>{analysis.japanCommitment.verdict}</strong>
          <p>{analysis.japanCommitment.summary}</p>
        </div>
        <div className="capital-read-signal-list">
          {analysis.japanCommitment.signals.map((signal) => (
            <article key={`${signal.year}-${signal.title}`}>
              <span>{signal.year}</span>
              <div><h5>{signal.title}</h5><p>{signal.detail}</p>{sourceLinks(signal.sourceIds)}</div>
            </article>
          ))}
        </div>
        <div className="capital-read-unknowns">
          <strong>公開情報だけでは分からないこと</strong>
          <ul>{analysis.japanCommitment.unknowns.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="capital-read-section">
        <div className="capital-read-heading">
          <span>05 / 3–5 YEAR OUTLOOK</span>
          <h4>日本での3〜5年の見立て</h4>
        </div>
        <div className="capital-read-scenarios">
          {analysis.scenarios.map((item) => (
            <article key={item.scenario} className={`capital-read-scenario-${item.scenario}`}>
              <span>{item.scenario}シナリオ</span>
              <h5>{item.title}</h5>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="capital-read-sources">
        <span>主な参照資料</span>
        {sourceLinks(analysis.sourceIds)}
      </footer>
    </div>
  );
}

function CultureDossier({ intelligence, companyName }: { intelligence: CompanyPublicIntelligence; companyName: string }) {
  const culture = intelligence.cultureDeepDive;
  if (!culture) return null;

  const sourceLinks = (sourceIds: string[]) => (
    <span className="culture-source-links">
      {sourceIds.map((sourceId) => {
        const source = getResearchSource(intelligence, sourceId);
        return source ? <a key={sourceId} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a> : null;
      })}
    </span>
  );

  return (
    <details className="culture-dossier">
      <summary className="culture-dossier-header">
        <div><p className="card-index">WORKING CULTURE</p><h3>{companyName}での働き方とカルチャー</h3></div>
        <span>調査日 {culture.researchedAt}</span>
        <i aria-hidden="true">＋</i>
      </summary>

      <div className="culture-dossier-body">
      <p className="culture-dossier-intro">{culture.headline}</p>

      <section className="culture-workstyle">
        <div className="culture-workstyle-verdict">
          <span>働き方の結論</span>
          <strong>{culture.workStyle.displayLabel}</strong>
          <p>{culture.workStyle.summary}</p>
          {sourceLinks(culture.workStyle.sourceIds)}
        </div>
        <dl className="culture-workstyle-facts">
          <div><dt>勤務形態</dt><dd>{culture.workStyle.classification}</dd></div>
          <div><dt>フルリモート</dt><dd>{culture.workStyle.remoteOnly}</dd></div>
          <div><dt>東京の出社日数</dt><dd>{culture.workStyle.officeDays}</dd></div>
          <div><dt>柔軟性</dt><dd>{culture.workStyle.flexibility}</dd></div>
        </dl>
      </section>

      <section className="culture-dossier-section">
        <div className="culture-section-heading"><span>01</span><div><p>THE ADYEN FORMULA</p><h4>公式の価値観を、日々の行動に翻訳すると</h4></div></div>
        <div className="culture-principle-grid">
          {culture.principles.map((principle) => (
            <article key={principle.label}>
              <span>{principle.label}</span>
              <h5>{principle.title}</h5>
              <p>{principle.companySays}</p>
              <div><strong>働く人への意味</strong><p>{principle.readerMeaning}</p></div>
              {sourceLinks(principle.sourceIds)}
            </article>
          ))}
        </div>
      </section>

      <section className="culture-dossier-section culture-tokyo-section">
        <div className="culture-section-heading"><span>02</span><div><p>TOKYO OFFICE</p><h4>東京拠点で実際に得られる環境</h4></div></div>
        <div className="culture-tokyo-grid">
          {culture.tokyoExperience.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
              {sourceLinks([item.sourceId])}
            </article>
          ))}
        </div>
      </section>

      <section className="culture-dossier-section">
        <div className="culture-section-heading"><span>03</span><div><p>SALES CULTURE</p><h4>営業組織では、何が日常になりそうか</h4></div></div>
        <div className="culture-sales-grid">
          {culture.salesCulture.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h5>{item.title}</h5>
              <p>{item.evidence}</p>
              <div><strong>応募判断への意味</strong><p>{item.readerMeaning}</p></div>
              {sourceLinks(item.sourceIds)}
            </article>
          ))}
        </div>
      </section>

      <section className="culture-dossier-section culture-community-section">
        <div className="culture-section-heading"><span>04</span><div><p>EMPLOYEE REVIEWS</p><h4>社員レビューで、公式説明を反証する</h4></div></div>
        <div className="culture-community-card">
          <div className="culture-community-score">
            <span>{culture.communitySnapshot.label}</span>
            <strong>{culture.communitySnapshot.rating}</strong>
            <p>{culture.communitySnapshot.recommend}</p>
            {sourceLinks([culture.communitySnapshot.sourceId])}
          </div>
          <div className="culture-community-body">
            <div className="culture-community-metrics">
              {culture.communitySnapshot.metrics.map((metric) => <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>)}
            </div>
            <div className="culture-community-reads">
              <div><strong>肯定的な傾向</strong><p>{culture.communitySnapshot.positiveRead}</p></div>
              <div><strong>注意したい傾向</strong><p>{culture.communitySnapshot.cautionRead}</p></div>
            </div>
            <small>{culture.communitySnapshot.caveat}</small>
          </div>
        </div>
      </section>

      <section className="culture-dossier-section">
        <div className="culture-section-heading"><span>05</span><div><p>YOUR FIT</p><h4>自分に合うかを、ここで見極める</h4></div></div>
        <div className="culture-fit-grid">
          <article className="culture-fit-good"><span>合いやすい人</span><ul>{culture.fit.goodFor.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="culture-fit-caution"><span>慎重に見たい人</span><ul>{culture.fit.cautionFor.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article className="culture-fit-questions"><span>面接で必ず聞くこと</span><ol>{culture.fit.interviewQuestions.map((item) => <li key={item}>{item}</li>)}</ol></article>
        </div>
        <div className="culture-career-value"><span>この環境で得られるキャリア価値</span><div><strong>{culture.careerValue.title}</strong><p>{culture.careerValue.body}</p></div></div>
      </section>

      <footer className="culture-dossier-sources"><span>主な参照情報</span>{sourceLinks(culture.sourceIds)}</footer>
      </div>
    </details>
  );
}

export default function CompanyIntelligenceProfile({
  company,
  companyJobs,
  companySignals,
  allCompanies,
}: ProfileProps) {
  const isPreEntry = company.entryStatus === "not-entered";
  const isAdyen = company.slug === "adyen";
  const profile = getCompanyDecisionProfile(company, companyJobs, companySignals, allCompanies);
  const publicIntel = getCompanyPublicIntelligence(company.slug);
  const salesView = publicIntel ? getCompanyFABESalesView(publicIntel) : undefined;
  const salesSnapshot = salesView?.summary ?? company.description;
  const salesFabeOverview = publicIntel?.salesFabeOverview;
  const salesMarketOutlook = publicIntel?.salesMarketOutlook;
  const directoryEntry = getCompanyDirectoryEntry(company.slug);
  const globalScale = resolveGlobalScale(company.slug, publicIntel?.companyStats.globalHeadcount);
  const globalScaleDirectorySource = getGlobalScaleSource(globalScale);
  const globalScaleResearchSource = publicIntel && globalScale?.sourceId ? getResearchSource(publicIntel, globalScale.sourceId) : undefined;
  const globalScaleSource = globalScaleDirectorySource ?? (globalScaleResearchSource ? { url: globalScaleResearchSource.url, label: globalScaleResearchSource.label } : undefined);
  const japanOfficeSource = publicIntel?.companyStats.japanOffice.sourceId ? getResearchSource(publicIntel, publicIntel.companyStats.japanOffice.sourceId) : undefined;
  const japanHeadcountSource = publicIntel?.companyStats.japanHeadcount.sourceId ? getResearchSource(publicIntel, publicIntel.companyStats.japanHeadcount.sourceId) : undefined;
  const foundedYear = publicIntel?.marketStatus.milestones.find((milestone) => milestone.label.includes("創業"))?.year;
  const japanEntryYear = publicIntel?.marketStatus.milestones.find((milestone) => milestone.label.includes("日本") && (milestone.label.includes("進出") || milestone.label.includes("開始")))?.year;
  const scaleComparisons = getCompanyScaleComparisons(company, allCompanies);
  const knownRatio = Math.round((profile.knownTopics / profile.totalTopics) * 100);
  const sourceEntries = uniqueSources([
    {
      label: `${company.name} 公式採用ページ`,
      url: company.careersUrl,
      context: "企業・採用状況",
      kind: "公式",
    },
    ...companyJobs.map((job) => ({
      ...job.source,
      context: job.title,
      kind: "公式" as const,
    })),
    ...companyJobs.flatMap((job) => job.compensationResearch?.sources.map((source) => ({
      label: source.label,
      url: source.url,
      context: "給与事情の推定根拠",
      kind: "分析根拠" as const,
      checkedAt: job.compensationResearch?.researchedAt,
    })) ?? []),
    ...companyJobs.flatMap((job) => job.reputationResearch?.sources.map((source) => ({
      label: source.label,
      url: source.url,
      context: "ネガティブ評判・噢の参照情報",
      kind: "分析根拠" as const,
      checkedAt: job.reputationResearch?.researchedAt,
    })) ?? []),
    ...companySignals.map((signal) => ({
      ...signal.source,
      context: signal.title,
      kind: signal.confidence === "公式確認" ? "公式" as const : "分析根拠" as const,
    })),
    ...(publicIntel?.sources.map((source) => ({
      label: source.label,
      url: source.url,
      context: `${source.kind} / ${source.scope}`,
      kind: source.kind === "企業公式" || source.kind === "法定開示" ? "公式" as const : "分析根拠" as const,
      checkedAt: source.checkedAt,
    })) ?? []),
  ]);

  const evidenceTopics = [
    { label: "採用状況", value: company.hiringStatus, confirmed: true },
    { label: "営業求人", value: `${profile.observedRoleCount}件`, confirmed: true },
    { label: "ソリューション", value: company.category, confirmed: true },
    { label: "日本拠点", value: company.japanPresence, confirmed: true },
    { label: "OTE・Pay Mix", value: "未確認", confirmed: false },
    { label: "日本社員・AE人数", value: isPreEntry ? "確認できず" : "未確認", confirmed: false },
    { label: "Quota達成率", value: "未確認", confirmed: false },
    { label: "在籍・昇進データ", value: "未確認", confirmed: false },
  ];

  return (
    <>
      <section className="company-command-hero" id="company-top">
        <Container>
          <div className="company-breadcrumbs">
            <Link href="/companies">企業データ</Link>
            <span aria-hidden="true">/</span>
            <span>{company.name}</span>
          </div>
          <div className="company-command-grid">
            <div className="company-identity">
              <div className="company-identity-topline">
                <span className="company-monogram" aria-hidden="true">{company.name.slice(0, 1)}</span>
                <div>
                  <p className="eyebrow eyebrow-light">COMPANY FIELD DOSSIER</p>
                  {isPreEntry ? <span className="pre-entry-badge pre-entry-badge-hero"><i /> 日本未進出の注目企業</span> : <StatusBadge status={company.hiringStatus} />}
                </div>
              </div>
              <h1>{company.name}</h1>
              <p className="company-category">{company.category} <span>/</span> {company.hq}</p>
              {publicIntel && (
                <div className="company-sales-snapshot-heading">
                  <span>セールス観点から見たこの会社</span>
                  <details className="fabe-help">
                    <summary>(FABE分析ベース)</summary>
                    <div className="fabe-help-card">
                      <strong>FABE分析とは</strong>
                      <p>製品の説明を「何ができるか」で終わらせず、顧客が選ぶ理由と事業成果まで一続きで整理するフレームワーク。</p>
                      <dl>
                        <div><dt>Feature</dt><dd>製品が持つ機能・技術・仕組み</dd></div>
                        <div><dt>Advantage</dt><dd>競合・内製・現状維持と比べた優位性</dd></div>
                        <div><dt>Benefit</dt><dd>顧客の業務・財務・リスクに起きる改善</dd></div>
                        <div><dt>Evidence</dt><dd>公式事例・開示数値・製品情報などの根拠</dd></div>
                      </dl>
                      <small>Genbaでは、代替手段を比較できるよう「Competitor」も併記する。</small>
                    </div>
                  </details>
                </div>
              )}
              {salesFabeOverview ? (
                <div className="company-sales-overview">
                  <div className="company-sales-segments" aria-label="主な対象領域">
                    <strong>主な対象領域</strong>
                    <div>{salesFabeOverview.targetSegments.map((segment) => <span key={segment}>{segment}</span>)}</div>
                  </div>
                  <p className="company-description">{salesFabeOverview.summary}</p>
                </div>
              ) : (
                <p className="company-description">{salesSnapshot}</p>
              )}
              {(salesMarketOutlook || salesView?.expanded) && (
                <details className="company-sales-evidence">
                  <summary>
                    <span className="company-sales-evidence-label-closed">{salesMarketOutlook?.title ?? "導入実績・成果指標・日本市場の見立てを見る"}</span>
                    <span className="company-sales-evidence-label-open">{salesMarketOutlook ? `${salesMarketOutlook.title}を閉じる` : "導入実績・成果指標・日本市場の見立てを閉じる"}</span>
                    <span className="company-sales-evidence-icon" aria-hidden="true">＋</span>
                  </summary>
                  {salesMarketOutlook ? (
                    <>
                      <div className="company-market-outlook-resizable">
                        <div className="company-market-outlook">
                          <p className="company-market-outlook-verdict">{salesMarketOutlook.verdict}</p>
                          {salesMarketOutlook.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                          <div className="company-market-outlook-cases">
                            <strong>国内で確認できる主な事例</strong>
                            <ul>
                              {salesMarketOutlook.cases.map((item) => {
                                const source = publicIntel && getResearchSource(publicIntel, item.sourceId);
                                return (
                                  <li key={item.company}>
                                    <b>{item.company}：</b>{item.need}
                                    {source && <a href={source.url} target="_blank" rel="noreferrer" aria-label={`${item.company}の公式事例を見る`}> ↗</a>}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div className="company-market-outlook-sources">
                            <span>主な根拠</span>
                            {salesMarketOutlook.sourceIds.map((sourceId) => {
                              const source = publicIntel && getResearchSource(publicIntel, sourceId);
                              return source ? <a key={sourceId} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a> : null;
                            })}
                          </div>
                        </div>
                      </div>
                      <p className="company-sales-content-resize-note">右下をドラッグして、表示幅を調整できます。</p>
                    </>
                  ) : (
                    <p>{salesView && salesView.expanded}</p>
                  )}
                </details>
              )}
              {salesFabeOverview && <SalesFabeDetails overview={salesFabeOverview} intelligence={publicIntel} />}
              <div className="company-tag-row">
                {company.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>

            <aside className={`decision-console decision-console-${profile.tone} ${isPreEntry ? "decision-console-pre-entry" : ""}`} aria-label={isPreEntry ? "Genba日本進出可能性サマリー" : "Genba応募判断サマリー"}>
              <div className="decision-console-head">
                <span>GENBA VIEW</span>
                <span className="decision-live">PUBLIC DATA</span>
              </div>
              <div className="decision-console-body">
                <p className="decision-reason">{isPreEntry ? company.description : profile.verdictReason}</p>
                <div className="decision-fit-tags">
                  {(publicIntel?.fitTags ?? profile.fitSignals).map((tag) => <span key={tag}>#{tag}</span>)}
                </div>
                <div className="decision-stats">
                  <a href="#roles" aria-label={`現在の求人${profile.observedRoleCount}件を見る`}>
                    <strong>{profile.observedRoleCount}</strong><span>現在の求人</span>
                  </a>
                  <div><strong>{publicIntel?.sources.length ?? companySignals.length}</strong><span>{publicIntel ? "調査ソース" : "採用シグナル"}</span></div>
                  <div><strong>{shortDate(publicIntel?.researchedAt ?? company.lastChecked).slice(5)}</strong><span>最終更新日</span></div>
                </div>
              </div>
              <div className="decision-console-foot">
                {publicIntel ? "公開事実とGenba仮説を分離し、反証材料まで含めて判断材料を示します。" : "企業の優劣や合格確率ではなく、現在確認できる応募判断材料を示しています。"}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <div className="dossier-nav-wrap">
        <Container>
          <DossierNav companyName={company.name} isPreEntry={isPreEntry} hasPlaybook={Boolean(publicIntel)} />
        </Container>
      </div>

      <section className="content-section company-intelligence-section">
        <Container className="company-intelligence-layout">
          <main className="company-intelligence-main">
            <section className="intel-section" id="overview">
              <div className="intel-heading">
                <div><p className="intel-kicker">01 / COMPANY OVERVIEW</p><h2>{company.name}{company.slug === "adyen" ? "" : "社"}概要</h2></div>
                <p>{company.slug === "adyen" ? "※公開情報を参照" : "公開されている企業情報・実績を、応募判断の前提としてまとめます。"}</p>
              </div>

              {publicIntel ? (
                <>
                  <div className={publicIntel.overviewLeadership ? "company-overview-card" : undefined}>
                    {publicIntel.overviewLeadership ? (
                      <div className="company-snapshot-strip company-snapshot-strip-compact company-snapshot-strip-leadership">
                        {publicIntel.overviewLeadership.map((group) => (
                          <div className="company-snapshot-leadership-card" key={group.label}>
                            <span>{group.label}</span>
                            <div className="company-snapshot-people">
                              {group.people.map((person) => (
                                <a href={person.url} target="_blank" rel="noreferrer" key={person.name}>
                                  <strong>{person.name}</strong>
                                  <small>{person.linkLabel} ↗</small>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                        {directoryEntry ? (
                          <a className="company-snapshot-official" href={directoryEntry.officialWebsite.url} target="_blank" rel="noreferrer">
                            <span>本社</span>
                            <strong>{company.hq}</strong>
                            {foundedYear && <small className="company-snapshot-milestone">創業：{foundedYear}年</small>}
                            <small>{directoryEntry.officialWebsite.locale === "ja" ? "日本語公式サイトへ" : "本国公式サイトへ"} ↗</small>
                          </a>
                        ) : <div><span>本社</span><strong>{company.hq}</strong>{foundedYear && <small className="company-snapshot-milestone">創業：{foundedYear}年</small>}</div>}
                        <div>
                          <span>日本オフィス</span>
                          <strong>{publicIntel.companyStats.japanOffice.value}</strong>
                          {japanEntryYear && <small className="company-snapshot-milestone">日本進出：{japanEntryYear}年</small>}
                          {japanOfficeSource && <a className="company-snapshot-source" href={japanOfficeSource.url} target="_blank" rel="noreferrer">{japanOfficeSource.kind} ↗</a>}
                        </div>
                        <div>
                          <span>グローバル社員数</span>
                          <strong>{globalScale?.value ?? "確認中"}</strong>
                          {globalScaleSource && <a className="company-snapshot-source" href={globalScaleSource.url} target="_blank" rel="noreferrer">{globalScaleSource.label} ↗</a>}
                        </div>
                        <div>
                          <span>日本の社員数</span>
                          <strong>{publicIntel.companyStats.japanHeadcount.value}</strong>
                          {japanHeadcountSource && <a className="company-snapshot-source" href={japanHeadcountSource.url} target="_blank" rel="noreferrer">{japanHeadcountSource.kind} ↗</a>}
                        </div>
                      </div>
                    ) : (
                      <div className="company-snapshot-strip company-snapshot-strip-6col">
                        {directoryEntry ? (
                          <a className="company-snapshot-official" href={directoryEntry.officialWebsite.url} target="_blank" rel="noreferrer">
                            <span>本社 / 公式サイト</span>
                            <strong>{company.hq}</strong>
                            <small>{directoryEntry.officialWebsite.locale === "ja" ? "日本語公式サイトへ" : "本国公式サイトへ"} ↗</small>
                          </a>
                        ) : <div><span>本社</span><strong>{company.hq}</strong></div>}
                        <div>
                          <span>グローバル社員数</span>
                          <strong>{globalScale?.value ?? "確認中"}</strong>
                          {globalScaleSource && <a className="company-snapshot-source" href={globalScaleSource.url} target="_blank" rel="noreferrer">{globalScaleSource.label} ↗</a>}
                        </div>
                        <div><span>日本オフィス</span><strong>{publicIntel.companyStats.japanOffice.value}</strong></div>
                        <div><span>日本の社員数</span><strong>{publicIntel.companyStats.japanHeadcount.value}</strong></div>
                        <div><span>日本法人設立</span><strong>{publicIntel.companyStats.japanSince.value}</strong></div>
                        <div><span>代表者</span><strong>{publicIntel.leadership.name}</strong></div>
                      </div>
                    )}

                    <div className={`public-fact-grid${company.slug === "adyen" ? " public-fact-grid-compact" : ""}${publicIntel.overviewLeadership ? " public-fact-grid-merged" : ""}`}>
                      {publicIntel.facts.map((fact) => {
                        const source = getResearchSource(publicIntel, fact.sourceIds[0]);
                        return (
                          <article key={fact.label}>
                            <span>{fact.label}</span>
                            <strong>{fact.value}</strong>
                            {fact.secondaryValue && <small className="public-fact-secondary-value">{fact.secondaryValue}</small>}
                            <p>{fact.detail}</p>
                            {source && <a href={source.url} target="_blank" rel="noreferrer">{source.kind} ↗</a>}
                          </article>
                        );
                      })}
                    </div>
                  </div>

                  <details className="company-scale-comparison">
                    <summary>
                      <span>
                        <small>売上・従業員数を身近な企業でつかむ</small>
                        <strong>近しい規模感の外資IT企業</strong>
                      </span>
                      <span className="company-scale-comparison-action">
                        <span className="company-scale-comparison-open-label">比較を見る</span>
                        <span className="company-scale-comparison-close-label">閉じる</span>
                        <i aria-hidden="true">＋</i>
                      </span>
                    </summary>
                    <div className="company-scale-comparison-body">
                      <p className="company-scale-comparison-note">公開された通期の売上・純収益を優先し、四半期値は年率換算して比較します。非公開企業は、公開売上と従業員数から算出した同カテゴリの水準を使い、幅を持たせた推定値として明示します。企業価値や成長性の優劣を示すものではありません。</p>
                      <div className="company-scale-comparison-columns">
                        <section>
                          <div className="company-scale-comparison-heading">
                            <span>売上規模</span>
                            <h3>売上規模が近い企業</h3>
                            <p>{scaleComparisons.revenueBasis ? <>{company.name}の比較基準：{scaleComparisons.revenueBasis} <b>{scaleComparisons.revenueBasisDisclosure}</b></> : "推定に必要な公開情報を確認できていません。"}</p>
                            {scaleComparisons.revenueMethodology && <small className="company-scale-comparison-method">推定方法：{scaleComparisons.revenueMethodology}</small>}
                          </div>
                          {scaleComparisons.revenue.length > 0 ? (
                            <div className="company-scale-comparison-list">
                              {scaleComparisons.revenue.map((item) => (
                                <Link href={`/companies/${item.slug}`} key={`revenue-${item.slug}`}>
                                  <span><strong>{item.name}</strong><small>{item.label} <b>{item.disclosure}</b></small></span>
                                  <span><strong>{item.value}</strong><small>{item.distanceLabel}</small></span>
                                </Link>
                              ))}
                            </div>
                          ) : <p className="company-scale-comparison-empty">公開情報だけでは妥当な推定レンジを算出できませんでした。</p>}
                        </section>
                        <section>
                          <div className="company-scale-comparison-heading">
                            <span>従業員規模</span>
                            <h3>従業員規模が近い企業</h3>
                            <p>{scaleComparisons.headcountBasis ? `${company.name}の比較基準: ${scaleComparisons.headcountBasis}` : "比較可能なグローバル従業員数は確認できていません。"}</p>
                          </div>
                          {scaleComparisons.headcount.length > 0 ? (
                            <div className="company-scale-comparison-list">
                              {scaleComparisons.headcount.map((item) => (
                                <Link href={`/companies/${item.slug}`} key={`headcount-${item.slug}`}>
                                  <span><strong>{item.name}</strong><small>{item.label}</small></span>
                                  <span><strong>{item.value}</strong><small>{item.distanceLabel}</small></span>
                                </Link>
                              ))}
                            </div>
                          ) : <p className="company-scale-comparison-empty">従業員数非公開のため、推測による比較は行っていません。</p>}
                        </section>
                      </div>
                    </div>
                  </details>

                  <details className="market-status-panel">
                    <summary className="market-status-toggle">
                      <div>
                        <p className="card-index">{publicIntel.marketStatus.isPublic ? `上場企業 / ${publicIntel.marketStatus.exchange}: ${publicIntel.marketStatus.ticker}` : "上場前 / 株式非公開"}</p>
                        <h3>{publicIntel.marketStatus.isPublic ? "決算資料から読み解く日本での成長性とリスク" : "IPOの兆しと海外公開情報から読み解く日本での成長性とリスク"}</h3>
                      </div>
                      <span className="market-status-toggle-action">
                        <span className="market-status-open-label">分析を見る</span>
                        <span className="market-status-close-label">閉じる</span>
                        <i aria-hidden="true">＋</i>
                      </span>
                    </summary>

                    <div className="market-status-body">
                      {publicIntel.marketStatus.isPublic && (
                        <div className="market-status-stock-row">
                          <a className="market-status-stock-link" href={publicIntel.marketStatus.stockLinkUrl} target="_blank" rel="noreferrer">最新の株価を見る ↗</a>
                        </div>
                      )}

                      {publicIntel.marketStatus.genbaVerdict && (
                        <div className="genba-verdict">
                          <span>GENBAの結論</span>
                          <h4>{publicIntel.marketStatus.genbaVerdict.headline}</h4>
                          <p>{publicIntel.marketStatus.genbaVerdict.body}</p>
                        </div>
                      )}

                    {publicIntel.marketStatus.capitalMarketRead ? (
                      <CapitalMarketReadPanel intelligence={publicIntel} />
                    ) : (
                      <>
                    {!publicIntel.marketStatus.genbaVerdict && (
                      <p className="market-status-summary">{publicIntel.marketStatus.growthSummary}</p>
                    )}
                    {!publicIntel.marketStatus.isPublic && (
                      <div className="market-status-ipo-outlook">
                        <span>IPO見通し</span>
                        <p>{publicIntel.marketStatus.ipoOutlookSummary}</p>
                      </div>
                    )}
                    <div className="market-status-timeline">
                      {publicIntel.marketStatus.milestones.map((milestone) => {
                        const source = getResearchSource(publicIntel, milestone.sourceId);
                        return (
                          <article key={`${milestone.year}-${milestone.label}`} className="market-status-milestone">
                            <span>{milestone.year}</span>
                            <div>
                              <strong>{milestone.label}</strong>
                              <p>{milestone.detail}</p>
                              {source && <a href={source.url} target="_blank" rel="noreferrer">{source.kind} ↗</a>}
                            </div>
                          </article>
                        );
                      })}
                    </div>

                    {publicIntel.marketStatus.growthDrivers && (
                      <div className="growth-driver-section">
                        <p className="card-index">成長ドライバー</p>
                        <div className="growth-driver-grid">
                          {publicIntel.marketStatus.growthDrivers.map((driver) => {
                            const source = getResearchSource(publicIntel, driver.sourceId);
                            return (
                              <details key={driver.title} className="growth-driver-card">
                                <summary>
                                  <h5>{driver.title}</h5>
                                  <span className="growth-driver-chevron" aria-hidden="true">▾</span>
                                </summary>
                                <p>{driver.body}</p>
                                {source && <a href={source.url} target="_blank" rel="noreferrer">{source.kind} ↗</a>}
                              </details>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {publicIntel.marketStatus.riskHypotheses && (
                      <div className="risk-hypothesis-section">
                        <p className="card-index">Genbaのリスク仮説</p>
                        <div className="risk-hypothesis-grid">
                          {publicIntel.marketStatus.riskHypotheses.map((risk) => (
                            <details key={risk.title} className="risk-hypothesis-card">
                              <summary>
                                <h5>{risk.title}</h5>
                                <span className={`confidence confidence-${risk.confidence}`}>確度: {risk.confidence}</span>
                                <span className="risk-hypothesis-chevron" aria-hidden="true">▾</span>
                              </summary>
                              <p className="risk-body">{risk.body}</p>
                              <div className="risk-hypothesis-evidence">
                                <span>根拠</span>
                                <ul>{risk.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
                              </div>
                              <div className="risk-hypothesis-counter">
                                <span>反証・留保</span>
                                <p>{risk.counterSignal}</p>
                              </div>
                              <footer>
                                {risk.sourceIds.map((sourceId) => {
                                  const source = getResearchSource(publicIntel, sourceId);
                                  return source ? <a key={sourceId} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a> : null;
                                })}
                              </footer>
                            </details>
                          ))}
                        </div>
                      </div>
                    )}

                    {publicIntel.marketStatus.japanGrowth && (() => {
                      const japan = publicIntel.marketStatus.japanGrowth;
                      const maxRevenue = japan.fiscalData ? Math.max(...japan.fiscalData.map((d) => parseFloat(d.revenue))) : 0;
                      return (
                        <div className="japan-growth-panel">
                          <p className="card-index">{isPreEntry ? "日本進出の可能性" : "日本での成長性"}</p>
                          <h4 className="japan-growth-headline">{japan.headline}</h4>
                          <p className="japan-growth-narrative">{japan.narrative}</p>
                          {japan.fiscalData && (
                            <div className="japan-fiscal-chart">
                              {japan.fiscalData.map((point) => (
                                <div className="japan-fiscal-row" key={point.period}>
                                  <span>{point.period}</span>
                                  <div className="japan-fiscal-bar-track">
                                    <div className="japan-fiscal-bar-fill" style={{ width: `${(parseFloat(point.revenue) / maxRevenue) * 100}%` }}>
                                      <strong>{point.revenue}</strong>
                                    </div>
                                  </div>
                                  <div className="japan-fiscal-meta">
                                    <strong>{point.revenueGrowth}</strong>
                                    <span>純利益{point.netIncomeGrowth}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          {japan.qualitativeSignals && (
                            <div className="japan-qualitative-grid">
                              {japan.qualitativeSignals.map((signal) => {
                                const source = getResearchSource(publicIntel, signal.sourceId);
                                return (
                                  <article key={signal.label}>
                                    <span>{signal.label}</span>
                                    <p>{signal.detail}</p>
                                    {source && <a href={source.url} target="_blank" rel="noreferrer">{source.kind} ↗</a>}
                                  </article>
                                );
                              })}
                            </div>
                          )}
                          {japan.entryAssessment && (
                            <div className="japan-entry-assessment">
                              <div className="japan-entry-verdict">
                                <span>GENBAの現時点評価</span>
                                <strong>{japan.entryAssessment.verdict}</strong>
                              </div>
                              <section>
                                <p className="japan-entry-section-label">進出を後押しする公開事実</p>
                                <div className="japan-entry-card-grid">
                                  {japan.entryAssessment.factSignals.map((item) => (
                                    <article key={item.title}>
                                      <h5>{item.title}</h5>
                                      <p>{item.body}</p>
                                      <footer>{item.sourceIds.map((sourceId) => {
                                        const source = getResearchSource(publicIntel, sourceId);
                                        return source ? <a key={sourceId} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a> : null;
                                      })}</footer>
                                    </article>
                                  ))}
                                </div>
                              </section>
                              <section>
                                <p className="japan-entry-section-label">進出ハードル</p>
                                <div className="japan-entry-card-grid japan-entry-hurdle-grid">
                                  {japan.entryAssessment.hurdles.map((item) => (
                                    <article key={item.title}>
                                      <h5>{item.title}</h5>
                                      <p>{item.body}</p>
                                      <footer>{item.sourceIds.map((sourceId) => {
                                        const source = getResearchSource(publicIntel, sourceId);
                                        return source ? <a key={sourceId} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a> : null;
                                      })}</footer>
                                    </article>
                                  ))}
                                </div>
                              </section>
                              <section>
                                <p className="japan-entry-section-label">日本進出が現実的になる条件</p>
                                <ol className="japan-entry-conditions">
                                  {japan.entryAssessment.readinessConditions.map((item) => <li key={item.title}><strong>{item.title}</strong><p>{item.body}</p></li>)}
                                </ol>
                              </section>
                              <section className="japan-entry-watch">
                                <p className="japan-entry-section-label">今後見るべきシグナル</p>
                                <ul>{japan.entryAssessment.watchSignals.map((item) => <li key={item}>{item}</li>)}</ul>
                              </section>
                            </div>
                          )}
                          <div className="japan-fiscal-sources">
                            {japan.sourceIds.map((sourceId) => {
                              const source = getResearchSource(publicIntel, sourceId);
                              return source ? <a key={sourceId} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a> : null;
                            })}
                          </div>
                        </div>
                      );
                    })()}
                      </>
                    )}

                      {(publicIntel.marketStatus.isPublic || publicIntel.marketStatus.genbaVerdict) && (
                        <p className="market-status-disclaimer">上記は公開情報に基づくGenba分析です。{publicIntel.marketStatus.isPublic ? "株価はリンク先で最新値をご確認ください。投資判断を目的とした情報ではありません。" : ""}</p>
                      )}
                    </div>
                  </details>
                </>
              ) : (
                <div className="company-snapshot-strip">
                  <div><span>本社</span><strong>{company.hq}</strong></div>
                  <div><span>日本拠点</span><strong>{company.japanPresence}</strong></div>
                  <div><span>ソリューション領域</span><strong>{company.category}</strong></div>
                  <div><span>最終確認日</span><strong>{shortDate(company.lastChecked)}</strong></div>
                </div>
              )}

              {!publicIntel && (
                <div className="people-metric-grid">
                  <article><span>GLOBAL HEADCOUNT</span><strong>—</strong><p>公式または適法な集計データを確認中</p></article>
                  <article><span>JAPAN HEADCOUNT</span><strong>—</strong><p>{company.japanPresence}を確認</p></article>
                  <article><span>AE IN JAPAN</span><strong>—</strong><p>役職分類と重複を精査後に掲載</p></article>
                  <article><span>MEDIAN TENURE</span><strong>—</strong><p>日本・営業職の集計値を優先</p></article>
                </div>
              )}

              {publicIntel?.cultureDeepDive ? (
                <CultureDossier intelligence={publicIntel} companyName={company.name} />
              ) : (
                <>
                  {publicIntel ? (
                    <article className="organization-read-card">
                      <div><p className="card-index">ORGANIZATION READ</p><h3>{publicIntel.cultureNotes.organizationReadTitle}</h3></div>
                      <p>{publicIntel.leadership.read}</p>
                      {(() => { const source = getResearchSource(publicIntel, publicIntel.leadership.sourceId); return source ? <a href={source.url} target="_blank" rel="noreferrer">役員人事を見る ↗</a> : null; })()}
                    </article>
                  ) : (
                    <div className="career-flow-board">
                      <div className="career-node"><span>BEFORE</span><strong>主な入社元</strong><p>集計データ準備中</p></div>
                      <div className="career-track" aria-hidden="true"><i /><b>{company.name.slice(0, 1)}</b><i /></div>
                      <div className="career-node"><span>AFTER</span><strong>主な転職先</strong><p>集計データ準備中</p></div>
                    </div>
                  )}

                  <div className="culture-grid">
                    {publicIntel ? (
                      <>
                        <article><p className="card-index">CULTURE HYPOTHESIS</p><h3>{publicIntel.cultureNotes.hypothesis.title}</h3><p>{publicIntel.cultureNotes.hypothesis.body}</p><a href={company.careersUrl} target="_blank" rel="noreferrer">公式カルチャー・採用情報 ↗</a></article>
                        <article><p className="card-index">CAREER VALUE</p><h3>{publicIntel.cultureNotes.careerValue.title}</h3><p>{publicIntel.cultureNotes.careerValue.body}</p><span className="hypothesis-pill">GENBA仮説 / 確度 {publicIntel.cultureNotes.careerValue.confidence}</span></article>
                      </>
                    ) : (
                      <>
                        <article><p className="card-index">CULTURE LENS</p><h3>社風・マネジメント</h3><p>働き方、意思決定、Forecastの厳しさ、英語利用、社内昇進を、複数の公開情報から確認します。</p><a href={company.careersUrl} target="_blank" rel="noreferrer">公式カルチャー・採用情報 ↗</a></article>
                        <article><p className="card-index">LEADERSHIP</p><h3>日本責任者・営業リーダー</h3><p>公式プロフィール、就任リリース、公開インタビューがある場合のみ掲載します。人物評や未確認情報は扱いません。</p><span className="pending-pill">参照記事を確認中</span></article>
                      </>
                    )}
                  </div>
                </>
              )}

              {companySignals.length > 0 && <div className="company-signal-block"><h3>組織・採用の変化</h3><div className="signal-feed">{companySignals.map((signal) => <SignalCard key={signal.id} signal={signal} />)}</div></div>}
            </section>

            <section className="intel-section" id="work-there">
              <div className="intel-heading">
                <div><p className="intel-kicker">02 / MEET THE PEOPLE</p><h2>{isPreEntry ? `${company.name}の海外GTM人材を見る。` : `${company.name}で働いている人を見る。`}</h2></div>
              </div>
              <a
                // geoUrn 101355337 = 日本(2026-08-08検証済み。105646813は誤りでスペインを指していたため修正した経緯あり)
                href={isPreEntry ? `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(`${company.name} Singapore sales`)}&origin=GLOBAL_SEARCH_HEADER` : `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(company.name)}&geoUrn=%5B%22101355337%22%5D&origin=SWITCH_SEARCH_VERTICAL`}
                target="_blank"
                rel="noreferrer"
                className="work-there-card"
              >
                <div className="work-there-card-glow" aria-hidden="true" />
                <div className="work-there-card-body">
                  <p className="work-there-card-kicker">LINKEDIN PEOPLE SEARCH</p>
                  <h3>{isPreEntry ? `${company.name}のAPAC・海外GTM人材を、LinkedInで探してみる。` : `${company.name}で働く人を、LinkedInで探してみる。`}</h3>
                  <p className="work-there-card-sub">{isPreEntry ? "公開プロフィールから、APACで先に置かれた役割と組織構成を確認。個人の経歴ではなく、将来の日本GTMに必要な機能を読み解きます。" : "経歴、前職、今の役割。実際に働いている人のプロフィールを見れば、求人票よりも解像度高くイメージできます。"}</p>
                  <p className="work-there-card-tip">
                    <strong>採用確度アップのTips</strong>
                    {isPreEntry ? "公開プロフィールは組織の完全な名簿ではありません。少数例から採用要件や進出時期を断定せず、公式拠点・求人・製品対応と合わせて確認しましょう。" : "アプライをする前に、勇気を振り絞って、応募しようと思っているポジションの方などに1on1を申し込んでみましょう!Genbaにも載っていないリアルな情報や雰囲気をつかめたり、その場でぜひ一緒に働きたいなとなれば通過しやすくなることもあります。これも立派な自分という商品を売るための営業スキルです。"}
                  </p>
                </div>
                <span className="work-there-card-cta">
                  LinkedInで見る
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </section>

            <section className="intel-section" id="roles">
              <div className="intel-heading">
                <div><p className="intel-kicker">03 / ROLE REALITY</p><h2>{isPreEntry ? "日本進出時の役割を先回りして考える。" : "ポジションの実態を深ぼる。"}</h2></div>
                <p>{isPreEntry ? "日本向け求人は未確認。海外の営業モデルから、進出求人が出たときに確認すべき条件を整理しています。" : companyJobs.length === profile.observedRoleCount ? "求人票で確認できる事実と、面接で確認すべき項目を分けています。" : `集計${profile.observedRoleCount}件のうち、${companyJobs.length}件を個別データに整理済みです。`}</p>
              </div>

              {publicIntel && company.slug !== "adyen" && (
                <div className="role-hypothesis-wrap">
                  <p className="card-index">ざっくりまとめ</p>
                  <div className="role-hypothesis-grid">
                    <article><span>セールスモーション</span><p>{publicIntel.roleLens.salesMotion}</p></article>
                    <article><span>給与関連</span><p>{publicIntel.roleLens.compensation}</p></article>
                    <article><span>Quota</span><p>{publicIntel.roleLens.quota}</p></article>
                    <article><span>チーム連携</span><p>{publicIntel.roleLens.collaboration}</p></article>
                  </div>
                </div>
              )}

              {companyJobs.length ? (
                <>
                  {publicIntel && company.slug !== "adyen" && (
                    <p className="role-benchmark-note">
                      「報酬の見立て」は担当セグメント別のOTE目安({compBenchmarkSource.label})にどれだけ近いかを示すGenba仮説で、{company.name}固有の確認値ではありません。「英語の実務利用」も個社の確認事実ではなく、外資営業組織で一般的に見られる傾向としてのGenba分析です。
                    </p>
                  )}
                  <div className="role-dossier-list">
                    {companyJobs.map((job, index) => {
                      const tier = getCompTierForSegment(job.segment);
                      return (
                        <article className="role-dossier" key={job.id}>
                          <header>
                            <span className="role-number">{String(index + 1).padStart(2, "0")}</span>
                            <div>
                              <p>{isAdyen ? "大手企業向け営業／営業リーダー" : job.segment}</p>
                              <h3>{job.title}</h3>
                              {isAdyen && <time className="role-last-updated">最終更新日 {shortDate(job.lastChecked)}</time>}
                            </div>
                            <a href={job.source.url} target="_blank" rel="noreferrer">公式求人 ↗</a>
                          </header>
                          <div className={`role-facts${isAdyen ? " role-facts-adyen" : ""}`}>
                            <div className="known"><span>勤務地</span><strong>{job.location}</strong></div>
                            <div className="known"><span>言語(募集要項)</span><strong>{job.language}</strong></div>
                            {publicIntel ? (
                              <>
                                <div className="analysis"><span>報酬の見立て</span><strong>{isAdyen ? "現金OTE 2,200万〜3,200万円（Genba推定）" : `${tier.label}帯 ${tier.oteRange}が目安`}</strong></div>
                                {!isAdyen && <div className="analysis"><span>英語の実務利用</span><strong>{/英語|English/i.test(job.language) && !/明記なし|不問/.test(job.language) ? "募集要項で英語要件あり。使用場面と頻度は要確認" : "募集要項では要件を確認できず。使用場面と頻度は要確認"}</strong></div>}
                                {!isAdyen && <div className="analysis"><span>面接で確認すべきこと</span><strong>担当テリトリーの質とcredit(成果配分)の決まり方</strong></div>}
                              </>
                            ) : (
                              <>
                                <div><span>OTE</span><strong>未確認</strong></div>
                                <div><span>Pay Mix</span><strong>未確認</strong></div>
                                <div><span>新規 / 既存</span><strong>未確認</strong></div>
                              </>
                            )}
                            {!isAdyen && <div><span>初回確認</span><strong>{shortDate(job.firstSeen)}</strong></div>}
                          </div>
                          {job.descriptionSummary && (
                            <details className="role-description">
                              <summary>
                                <span className="role-description-icon" aria-hidden="true">+</span>
                                <span className="role-description-label">求人の概要を見る</span>
                                <span className="role-description-chevron" aria-hidden="true">▾</span>
                              </summary>
                              <div className="role-description-body">
                                <p><span>公式ディスクリプションの要約</span>{job.descriptionSummary}</p>
                                {job.genbaTake && <p className="role-description-take"><span>Genbaからの示唆</span>{job.genbaTake}</p>}
                              </div>
                            </details>
                          )}
                          {job.compensationReality && (
                            <details className="role-description">
                              <summary>
                                <span className="role-description-icon" aria-hidden="true">+</span>
                                <span className="role-description-label">給与事情</span>
                                <span className="role-description-chevron" aria-hidden="true">▾</span>
                              </summary>
                              <div className="role-description-body">
                                {job.compensationResearch
                                  ? <CompensationResearchBlock research={job.compensationResearch} />
                                  : <p>{job.compensationReality}</p>}
                              </div>
                            </details>
                          )}
                          {job.desiredProfile && (
                            <details className="role-description">
                              <summary>
                                <span className="role-description-icon" aria-hidden="true">+</span>
                                <span className="role-description-label">求める人物や経験</span>
                                <span className="role-description-chevron" aria-hidden="true">▾</span>
                              </summary>
                              <div className="role-description-body">
                                <p>{job.desiredProfile}</p>
                              </div>
                            </details>
                          )}
                          {job.reputationResearch && (
                            <details className="role-description">
                              <summary>
                                <span className="role-description-icon" aria-hidden="true">+</span>
                                <span className="role-description-label">ネガティブ評判、噢</span>
                                <span className="role-description-chevron" aria-hidden="true">▾</span>
                              </summary>
                              <div className="role-description-body">
                                <ReputationResearchBlock research={job.reputationResearch} />
                              </div>
                            </details>
                          )}
                          {job.careerInsights && [
                            { label: "向き不向き", content: job.careerInsights.fit },
                            { label: "先に知っておくべきこと", content: job.careerInsights.thingsToKnow },
                            { label: "入って活躍できた場合の市場価値", content: job.careerInsights.marketValue },
                            { label: "在籍年数・社内プロモか転職が多いか", content: job.careerInsights.tenureAndPromotion },
                            { label: "どんな会社からの転職が多いか", content: job.careerInsights.priorCompanies },
                            { label: "どんな会社への転職が多いか", content: job.careerInsights.nextCompanies },
                          ].filter((item) => (!isAdyen || item.label !== "向き不向き") && (!job.reputationResearch || item.label !== "先に知っておくべきこと")).map((item) => (
                            <details className="role-description" key={item.label}>
                              <summary>
                                <span className="role-description-icon" aria-hidden="true">+</span>
                                <span className="role-description-label">{item.label}</span>
                                <span className="role-description-chevron" aria-hidden="true">▾</span>
                              </summary>
                              <div className="role-description-body">
                                <p>{item.content}</p>
                              </div>
                            </details>
                          ))}
                          <footer><span>Source</span><p>{job.source.label}</p><time dateTime={job.lastChecked}>最終更新日 {shortDate(job.lastChecked)}</time></footer>
                        </article>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="empty-intel-state">
                  <span>RADAR ON</span>
                  <h3>{profile.observedRoleCount > 0 ? `${profile.observedRoleCount}件を集計で確認` : "現在確認中の営業求人はありません"}</h3>
                  <p>{profile.observedRoleCount > 0 ? "個別求人の出典と要件を整理中です。応募前に公式採用ページでも最新情報を確認してください。" : "公式採用ページを継続観測し、募集を確認次第追加します。"}</p>
                </div>
              )}

              {company.interviewFlow && (
                <div className="interview-flow">
                  <p className="card-index">想定面接フロー(実態は要確認)</p>
                  <div className="interview-flow-track">
                    {company.interviewFlow.steps.flatMap((step, index, steps) => {
                      const nodes = [
                        <div className="interview-flow-step" key={`step-${step.label}`}>
                          <span className="interview-flow-number">{index + 1}</span>
                          <div className="interview-flow-body">
                            <strong>{step.label}</strong>
                            <p>{step.detail}</p>
                          </div>
                        </div>,
                      ];
                      if (index < steps.length - 1) {
                        nodes.push(<div className="interview-flow-connector" key={`connector-${step.label}`} aria-hidden="true" />);
                      }
                      return nodes;
                    })}
                  </div>
                  <p className="interview-flow-note">{company.interviewFlow.note}</p>
                </div>
              )}
            </section>

            <section className="intel-section" id="decision">
              <div className="intel-heading">
                {publicIntel ? (
                  <div><p className="intel-kicker">04 / GENBA HYPOTHESES</p><h2>公開情報から読み解く、5つの仮説。</h2></div>
                ) : (
                  <div><p className="intel-kicker">04 / DECISION BRIEF</p><h2>自分が見るべき会社か。</h2></div>
                )}
                <p>{publicIntel ? "事実ではない読み解きは「仮説」と明記。タップして詳細(支持材料・反証材料・面接での検証質問)を開けます。" : "現時点の公開情報から、まず確認すべき判断材料を整理します。"}</p>
              </div>

              {publicIntel ? (
                <>
                  <div className="hypothesis-stack">
                    {publicIntel.hypotheses.map((hypothesis, index) => (
                      <details className="hypothesis-card" key={hypothesis.topic}>
                        <summary>
                          <span className="hypothesis-number">H{String(index + 1).padStart(2, "0")}</span>
                          <div><p>{hypothesis.topic}</p><h3>{hypothesis.title}</h3></div>
                          <span className={`confidence confidence-${hypothesis.confidence}`}>確度 {hypothesis.confidence}</span>
                          <span className="hypothesis-chevron" aria-hidden="true">▾</span>
                        </summary>
                        <p className="hypothesis-conclusion">{hypothesis.conclusion}</p>
                        <div className="hypothesis-evidence-grid">
                          <section><span>仮説を支持する材料</span><ul>{hypothesis.evidence.map((item) => <li key={item}>{item}</li>)}</ul></section>
                          <section><span>反証・留保</span><ul>{hypothesis.counterSignals.map((item) => <li key={item}>{item}</li>)}</ul></section>
                          <section><span>面接で検証する質問</span><ol>{hypothesis.interviewQuestions.map((item) => <li key={item}>{item}</li>)}</ol></section>
                        </div>
                        <footer>
                          <span>根拠</span>
                          {hypothesis.sourceIds.map((sourceId) => {
                            const source = getResearchSource(publicIntel, sourceId);
                            return source ? <a href={source.url} target="_blank" rel="noreferrer" key={sourceId}>{source.label} ↗</a> : null;
                          })}
                        </footer>
                      </details>
                    ))}
                  </div>

                  {!isAdyen && (
                    <div className="external-signal-grid">
                      {publicIntel.externalSignals.map((signal) => {
                        const source = getResearchSource(publicIntel, signal.sourceId);
                        return (
                          <article key={signal.label}>
                            <p className="card-index">EXTERNAL SIGNAL</p>
                            <span>{signal.label}</span><strong>{signal.value}</strong>
                            <p>{signal.detail}</p><small>{signal.caveat}</small>
                            {source && <a href={source.url} target="_blank" rel="noreferrer">元データを見る ↗</a>}
                          </article>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="decision-board">
                    <article className="fit-card">
                      <p className="card-index">FIT SIGNALS</p>
                      <h3>この経験を持つ人は、求人を詳しく見る価値あり</h3>
                      <div className="fit-chip-cloud">
                        {profile.fitSignals.map((signal) => <span key={signal}># {signal}</span>)}
                      </div>
                      <p className="fit-card-note">これは一般的な経験の近さです。個人の合格可能性を示すものではありません。</p>
                    </article>
                    <article className="evidence-card">
                      <div className="evidence-meter" style={{ "--evidence": `${knownRatio * 3.6}deg` } as CSSProperties}>
                        <div><strong>{profile.knownTopics}</strong><span>/ {profile.totalTopics}</span></div>
                      </div>
                      <div><p className="card-index">EVIDENCE COVERAGE</p><h3>応募判断材料の充足度</h3><p>確認できた項目だけを計上。会社の評価点ではありません。</p><span className="source-count">{profile.sourceCount}件の公開ソースを参照</span></div>
                    </article>
                  </div>
                  <div className="evidence-grid">
                    {evidenceTopics.map((topic) => (
                      <article className={topic.confirmed ? "evidence-item confirmed" : "evidence-item unknown"} key={topic.label}>
                        <span>{topic.confirmed ? "確認済み" : "確認中"}</span><h3>{topic.label}</h3><p>{topic.value}</p>
                      </article>
                    ))}
                  </div>
                  <div className="probability-note"><span aria-hidden="true">%</span><div><strong>合格確率は表示しません</strong><p>応募・合否実績がない状態で数字を作らず、求人要件との一致点と不足情報を示します。</p></div></div>
                </>
              )}
            </section>

            <section className="intel-section" id="solution">
              <div className="intel-heading">
                <div><p className="intel-kicker">05 / SOLUTION INTELLIGENCE</p><h2>売るソリューションの深掘り。</h2></div>
                <span className="analysis-label">Genbaカテゴリ分析</span>
              </div>

              <div className="solution-map">
                <div className="solution-orbit" aria-hidden="true">
                  <span className="orbit-core">{company.name.slice(0, 2)}</span>
                  <span className="orbit-label orbit-label-a">PRODUCT</span>
                  <span className="orbit-label orbit-label-b">BUYER</span>
                  <span className="orbit-label orbit-label-c">VALUE</span>
                </div>
                <div className="solution-story">
                  <p className="card-index">SOLUTION AREA</p>
                  <h3>{company.category}</h3>
                  <p>{profile.lens.problem}</p>
                </div>
              </div>

              <div className="buyer-panel">
                <p className="card-index">主な買い手(アプローチ先)</p>
                <div className="buyer-chip-row">
                  {profile.lens.buyers.map((buyer) => <span key={buyer}>{buyer}</span>)}
                </div>
              </div>

              {publicIntel && publicIntel.solutions.length > 0 && (
                <div className="solution-catalog">
                  <p className="card-index">具体的なソリューション(FABE分析/競合比較)</p>
                  <div className="solution-catalog-grid">
                    {publicIntel.solutions.map((solution) => {
                      const fabe = getSolutionFABE(publicIntel, solution);
                      return (
                        <details className="solution-item" key={solution.name}>
                          <summary>
                            <span className="solution-item-icon" aria-hidden="true">+</span>
                            <span className="solution-item-label">{solution.name}</span>
                            <span className="solution-item-chevron" aria-hidden="true">▾</span>
                          </summary>
                          <div className="solution-item-body">
                            <p><span>Feature(機能)</span>{fabe.feature}</p>
                            <p><span>Advantage(優位性)</span>{fabe.advantage}</p>
                            <p><span>Benefit(メリット)</span>{fabe.benefit}</p>
                            <p><span>Evidence(証拠)</span>{fabe.evidence}</p>
                            <p><span>Competitor(競合)</span>{fabe.competitor}</p>
                            <a href={solution.url} target="_blank" rel="noreferrer">公式ソリューションページ ↗</a>
                          </div>
                        </details>
                      );
                    })}
                  </div>
                </div>
              )}

              {publicIntel ? (
                <div className="appeal-interview-grid">
                  <article className="appeal-block spark-block">
                    <p className="card-index">SALES APPEAL</p>
                    <h3>営業としての面白さ</h3>
                    <p className="block-intro">{publicIntel.salesAppeal.intro}</p>
                    <ul className="spark-list">
                      {publicIntel.salesAppeal.points.map((point, index) => (
                        <li key={point.title}>
                          <span className="spark-number">{String(index + 1).padStart(2, "0")}</span>
                          <div className="spark-body">
                            <strong>{point.title}</strong>
                            <p>{point.detail}</p>
                            <div className="mini-source-row">
                              {point.sourceIds.map((sourceId) => {
                                const source = getResearchSource(publicIntel, sourceId);
                                return source ? <a href={source.url} target="_blank" rel="noreferrer" key={sourceId}>{source.label} ↗</a> : null;
                              })}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </article>
                  <article className="interview-block spark-block spark-block-interview">
                    <p className="card-index">INTERVIEW PREP</p>
                    <h3>面接・選考で確認したいこと</h3>
                    <p className="block-intro">{publicIntel.interviewPrep.intro}</p>
                    <ol className="spark-list">
                      {publicIntel.interviewPrep.questions.map((item, index) => (
                        <li key={item.question}>
                          <span className="spark-number spark-number-interview">Q{index + 1}</span>
                          <div className="spark-body">
                            <strong>{item.question}</strong>
                            <p>{item.why}</p>
                            <div className="mini-source-row">
                              {item.sourceIds.map((sourceId) => {
                                const source = getResearchSource(publicIntel, sourceId);
                                return source ? <a href={source.url} target="_blank" rel="noreferrer" key={sourceId}>{source.label} ↗</a> : null;
                              })}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </article>
                </div>
              ) : (
                <div className="solution-question-grid">
                  <article><span>営業としての面白さ</span><p>{profile.lens.appeal}</p></article>
                  <article><span>面接・選考で確認したいこと</span><p>{profile.lens.salesQuestion}</p></article>
                </div>
              )}

              {publicIntel ? (
                <div className="customer-proof-wrap">
                  <div className="customer-proof-heading"><div><p className="card-index">JAPAN CUSTOMER PROOF</p><h3>日本企業が、何を買い、何が変わったか。</h3></div><p>企業公式の導入事例に記載された成果を、AEが商談の再現性を考えやすい形に読み替えています。</p></div>
                  {publicIntel.customerStoriesUrl && (
                    <a className="customer-stories-index-link" href={publicIntel.customerStoriesUrl} target="_blank" rel="noreferrer">公式の導入事例一覧を見る ↗</a>
                  )}
                  <div className="customer-proof-grid">
                    {publicIntel.customerProof.map((proof, index) => {
                      const source = getResearchSource(publicIntel, proof.sourceId);
                      return (
                        <article key={proof.company}>
                          <span>CASE 0{index + 1}</span><h3>{proof.company}</h3><p className="customer-products">{proof.products}</p>
                          <strong>{proof.outcome}</strong><p>{proof.implication}</p>
                          {source && <a href={source.url} target="_blank" rel="noreferrer">公式事例 ↗</a>}
                        </article>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="proof-stack">
                  <div><p className="card-index">SOLUTION PROOF</p><h3>「強いソリューションか」を判断する証拠</h3><p>社名や評判ではなく、日本市場で確認できる証拠を積み上げます。</p></div>
                  <ul>
                    <li className="proof-confirmed"><span>01</span><div><strong>ソリューション領域</strong><small>{company.category}</small></div><b>確認済み</b></li>
                    <li><span>02</span><div><strong>日本の導入事例</strong><small>公式事例を調査中</small></div><b>未確認</b></li>
                    <li><span>03</span><div><strong>競合との差別化</strong><small>一次情報と第三者情報を照合予定</small></div><b>未確認</b></li>
                    <li><span>04</span><div><strong>顧客継続・拡張の証拠</strong><small>公開情報を調査中</small></div><b>未確認</b></li>
                  </ul>
                </div>
              )}
            </section>

            {publicIntel && (
              <section className="intel-section" id="playbook">
                <div className="intel-heading">
                  <div><p className="intel-kicker">06 / SELLING PLAYBOOK</p><h2>想定できる売り方。</h2></div>
                  <p>「何が課題で、なぜこの解決策で、なぜこの会社なのか」を、公開情報から組み立てたGenba仮説です。実際の商談設計は個社事情に合わせて調整してください。</p>
                </div>

                <p className="playbook-frame-intro">{publicIntel.sellingPlaybook.frameIntro}</p>

                <div className="playbook-lens-grid">
                  <p className="card-index">課題を見つける3つのレンズ</p>
                  <div className="playbook-lens-row">
                    {publicIntel.sellingPlaybook.issueLenses.map((lens, index) => (
                      <article key={lens.title}>
                        <span>0{index + 1}</span>
                        <strong>{lens.title}</strong>
                        <p>{lens.body}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="playbook-narrative">
                  <p className="card-index">課題仮説から選定理由までのストーリー</p>
                  <div className="playbook-narrative-track">
                    {publicIntel.sellingPlaybook.narrative.flatMap((stage, index, stages) => {
                      const nodes = [
                        <div className="playbook-narrative-step" key={`step-${stage.label}`}>
                          <span className="playbook-narrative-number">{index + 1}</span>
                          <div className="playbook-narrative-body">
                            <strong>{stage.label}</strong>
                            <p>{stage.body}</p>
                          </div>
                        </div>,
                      ];
                      if (index < stages.length - 1) {
                        nodes.push(<div className="playbook-narrative-connector" key={`connector-${stage.label}`} aria-hidden="true">→</div>);
                      }
                      return nodes;
                    })}
                  </div>
                </div>

                <div className="playbook-support-grid">
                  <article className="playbook-hook-card">
                    <p className="card-index">オープニングの問いかけ</p>
                    <p className="playbook-hook-quote">「{publicIntel.sellingPlaybook.openingHook}」</p>
                  </article>
                  <article className="playbook-value-card">
                    <p className="card-index">価値仮説</p>
                    <p>{publicIntel.sellingPlaybook.valueHypothesis}</p>
                  </article>
                  <article className="playbook-objection-card">
                    <p className="card-index">よくある反論への返し</p>
                    <p><span>反論</span>{publicIntel.sellingPlaybook.commonObjection.objection}</p>
                    <p><span>切り返し</span>{publicIntel.sellingPlaybook.commonObjection.reframe}</p>
                  </article>
                </div>
              </section>
            )}

            <section className="intel-section" id="compare">
              <div className="intel-heading">
                <div><p className="intel-kicker">07 / NEXT MOVES</p><h2>合わせて見るべき会社。</h2></div>
                <p>同じ買い手・領域・営業経験を軸にした併願候補です。</p>
              </div>
              {publicIntel && (
                <div className="comparison-map-grid">
                  {publicIntel.comparisonMap.map((comparison) => (
                    <article key={comparison.arena}>
                      <span>{comparison.arena}</span>
                      <div>
                        {comparison.companies.map((name) => {
                          const matched = allCompanies.find((c) => c.name === name);
                          return matched ? (
                            <Link key={name} href={`/companies/${matched.slug}`}>
                              <strong>{name}</strong>
                            </Link>
                          ) : (
                            <strong key={name}>{name}</strong>
                          );
                        })}
                      </div>
                      <p>{comparison.why}</p>
                    </article>
                  ))}
                </div>
              )}
              <div className="alternative-grid">
                {profile.alternatives.map((alternative, index) => (
                  <article className="alternative-card" key={alternative.company.slug}>
                    <div className="alternative-topline"><span>0{index + 1}</span>{alternative.company.entryStatus === "not-entered" ? <span className="pre-entry-badge"><i /> 日本未進出</span> : <StatusBadge status={alternative.company.hiringStatus} />}</div>
                    <h3>{alternative.company.name}</h3>
                    <p className="alternative-category">{alternative.company.category}</p>
                    <p>{alternative.reason}</p>
                    <div className="alternative-footer"><strong>{alternative.company.salesRoles}<small>営業求人</small></strong><Link href={`/companies/${alternative.company.slug}`}>比較する →</Link></div>
                  </article>
                ))}
              </div>
              <p className="analysis-disclaimer">併願候補は、企業データのカテゴリ・想定Buyer・求人セグメントの近さから算出したGenba分析です。競合関係や合格可能性を断定するものではありません。</p>
            </section>

            <section className="intel-section" id="sources">
              <div className="intel-heading">
                <div><p className="intel-kicker">08 / SOURCE LEDGER</p><h2>このページの根拠。</h2></div>
                <p>数字・判断材料の出所と更新日を追える状態にします。</p>
              </div>
              <div className="source-ledger">
                {sourceEntries.map((source, index) => (
                  <article key={source.url}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><small>{source.kind} / {source.context}</small><a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></div>
                    <time dateTime={source.checkedAt ?? company.lastChecked}>{shortDate(source.checkedAt ?? company.lastChecked)}</time>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </Container>
      </section>

      <section className="content-section surface-section"><Container><NewsletterCTA /></Container></section>
    </>
  );
}
