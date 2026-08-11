import Link from "next/link";
import type { CSSProperties } from "react";
import Container from "@/components/Container";
import NewsletterCTA from "@/components/NewsletterCTA";
import SignalCard from "@/components/SignalCard";
import StatusBadge from "@/components/StatusBadge";
import { getCompanyDecisionProfile } from "@/lib/company-intelligence";
import { getCompanyPublicIntelligence, getResearchSource } from "@/lib/company-public-intelligence";
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

export default function CompanyIntelligenceProfile({
  company,
  companyJobs,
  companySignals,
  allCompanies,
}: ProfileProps) {
  const profile = getCompanyDecisionProfile(company, companyJobs, companySignals, allCompanies);
  const publicIntel = getCompanyPublicIntelligence(company.slug);
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
    { label: "日本社員・AE人数", value: "未確認", confirmed: false },
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
                  <StatusBadge status={company.hiringStatus} />
                </div>
              </div>
              <h1>{company.name}</h1>
              <p className="company-category">{company.category} <span>/</span> {company.hq}</p>
              {publicIntel && <p className="company-sales-snapshot-label">営業から見たこの会社</p>}
              <p className="company-description">{publicIntel?.salesSnapshot ?? company.description}</p>
              <div className="company-tag-row">
                {company.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>

            <aside className={`decision-console decision-console-${profile.tone}`} aria-label="Genba応募判断サマリー">
              <div className="decision-console-head">
                <span>GENBA VIEW</span>
                <span className="decision-live">PUBLIC DATA</span>
              </div>
              <div className="decision-console-body">
                <p className="decision-reason">{profile.verdictReason}</p>
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
          <div className="dossier-nav-bar">
            <a className="dossier-company-marker" href="#company-top" title={`${company.name}のページ先頭へ戻る`}>
              <span aria-hidden="true" />
              <strong>{company.name}</strong>
            </a>
            <nav className="dossier-nav" aria-label="企業ページ内ナビゲーション">
              <a href="#overview">会社概要</a>
              <a href="#work-there">働く人を見る</a>
              <a href="#roles">募集中ポジション</a>
              <a href="#decision">5つの仮説</a>
              <a href="#solution">ソリューション深掘り</a>
              {publicIntel && <a href="#playbook">想定できる売り方</a>}
              <a href="#compare">併願候補</a>
            </nav>
          </div>
        </Container>
      </div>

      <section className="content-section company-intelligence-section">
        <Container className="company-intelligence-layout">
          <main className="company-intelligence-main">
            <section className="intel-section" id="overview">
              <div className="intel-heading">
                <div><p className="intel-kicker">01 / COMPANY OVERVIEW</p><h2>{company.name}社概要</h2></div>
                <p>公開されている企業情報・実績を、応募判断の前提としてまとめます。</p>
              </div>

              {publicIntel ? (
                <>
                  <div className="company-snapshot-strip company-snapshot-strip-5col">
                    <div><span>本社</span><strong>{company.hq}</strong></div>
                    <div><span>日本オフィス</span><strong>{publicIntel.companyStats.japanOffice.value}</strong></div>
                    <div><span>日本の社員数</span><strong>{publicIntel.companyStats.japanHeadcount.value}</strong></div>
                    <div><span>日本法人設立</span><strong>{publicIntel.companyStats.japanSince.value}</strong></div>
                    <div><span>代表者</span><strong>{publicIntel.leadership.name}</strong></div>
                  </div>

                  <div className="public-fact-grid">
                    {publicIntel.facts.map((fact) => {
                      const source = getResearchSource(publicIntel, fact.sourceIds[0]);
                      return (
                        <article key={fact.label}>
                          <span>{fact.label}</span>
                          <strong>{fact.value}</strong>
                          <p>{fact.detail}</p>
                          {source && <a href={source.url} target="_blank" rel="noreferrer">{source.kind} ↗</a>}
                        </article>
                      );
                    })}
                  </div>

                  <div className="market-status-panel">
                    <div className="market-status-head">
                      <div>
                        <p className="card-index">{publicIntel.marketStatus.isPublic ? "上場企業" : "非上場企業"}</p>
                        <h3>{publicIntel.marketStatus.isPublic ? `${publicIntel.marketStatus.exchange}: ${publicIntel.marketStatus.ticker}` : "株式は非公開"}</h3>
                      </div>
                      {publicIntel.marketStatus.isPublic && (
                        <a className="market-status-stock-link" href={publicIntel.marketStatus.stockLinkUrl} target="_blank" rel="noreferrer">最新の株価を見る ↗</a>
                      )}
                    </div>

                    {publicIntel.marketStatus.genbaVerdict && (
                      <div className="genba-verdict">
                        <span>GENBAの結論</span>
                        <h4>{publicIntel.marketStatus.genbaVerdict.headline}</h4>
                        <p>{publicIntel.marketStatus.genbaVerdict.body}</p>
                      </div>
                    )}

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
                          <p className="card-index">日本での成長性</p>
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
                          <div className="japan-fiscal-sources">
                            {japan.sourceIds.map((sourceId) => {
                              const source = getResearchSource(publicIntel, sourceId);
                              return source ? <a key={sourceId} href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a> : null;
                            })}
                          </div>
                        </div>
                      );
                    })()}

                    {(publicIntel.marketStatus.isPublic || publicIntel.marketStatus.genbaVerdict) && (
                      <p className="market-status-disclaimer">上記は変遷・成長性についてのGenba分析です。{publicIntel.marketStatus.isPublic ? "株価はリンク先で最新値をご確認ください。投資判断はご自身の責任でお願いします。" : ""}</p>
                    )}
                  </div>
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

              {companySignals.length > 0 && <div className="company-signal-block"><h3>組織・採用の変化</h3><div className="signal-feed">{companySignals.map((signal) => <SignalCard key={signal.id} signal={signal} />)}</div></div>}
            </section>

            <section className="intel-section" id="work-there">
              <div className="intel-heading">
                <div><p className="intel-kicker">02 / MEET THE PEOPLE</p><h2>{company.name}で働いている人を見る。</h2></div>
              </div>
              <a
                // geoUrn 101355337 = 日本(2026-08-08検証済み。105646813は誤りでスペインを指していたため修正した経緯あり)
                href={`https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(company.name)}&geoUrn=%5B%22101355337%22%5D&origin=SWITCH_SEARCH_VERTICAL`}
                target="_blank"
                rel="noreferrer"
                className="work-there-card"
              >
                <div className="work-there-card-glow" aria-hidden="true" />
                <div className="work-there-card-body">
                  <p className="work-there-card-kicker">LINKEDIN PEOPLE SEARCH</p>
                  <h3>{company.name}で働く人を、LinkedInで探してみる。</h3>
                  <p className="work-there-card-sub">経歴、前職、今の役割。実際に働いている人のプロフィールを見れば、求人票よりも解像度高くイメージできます。</p>
                  <p className="work-there-card-tip">
                    <strong>採用確度アップのTips</strong>
                    アプライをする前に、勇気を振り絞って、応募しようと思っているポジションの方などに1on1を申し込んでみましょう!Genbaにも載っていないリアルな情報や雰囲気をつかめたり、その場でぜひ一緒に働きたいなとなれば通過しやすくなることもあります。これも立派な自分という商品を売るための営業スキルです。
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
                <div><p className="intel-kicker">03 / ROLE REALITY</p><h2>ポジションの実態を深ぼる。</h2></div>
                <p>{companyJobs.length === profile.observedRoleCount ? "求人票で確認できる事実と、面接で確認すべき項目を分けています。" : `集計${profile.observedRoleCount}件のうち、${companyJobs.length}件を個別データに整理済みです。`}</p>
              </div>

              {publicIntel && (
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
                  {publicIntel && (
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
                            <div><p>{job.segment}</p><h3>{job.title}</h3></div>
                            <a href={job.source.url} target="_blank" rel="noreferrer">公式求人 ↗</a>
                          </header>
                          <div className="role-facts">
                            <div className="known"><span>勤務地</span><strong>{job.location}</strong></div>
                            <div className="known"><span>言語(募集要項)</span><strong>{job.language}</strong></div>
                            {publicIntel ? (
                              <>
                                <div className="analysis"><span>報酬の見立て</span><strong>{tier.label}帯 {tier.oteRange}が目安</strong></div>
                                <div className="analysis"><span>英語の実務利用</span><strong>{/英語|English/i.test(job.language) && !/明記なし|不問/.test(job.language) ? "募集要項で英語要件あり。使用場面と頻度は要確認" : "募集要項では要件を確認できず。使用場面と頻度は要確認"}</strong></div>
                                <div className="analysis"><span>面接で確認すべきこと</span><strong>担当テリトリーの質とcredit(成果配分)の決まり方</strong></div>
                              </>
                            ) : (
                              <>
                                <div><span>OTE</span><strong>未確認</strong></div>
                                <div><span>Pay Mix</span><strong>未確認</strong></div>
                                <div><span>新規 / 既存</span><strong>未確認</strong></div>
                              </>
                            )}
                            <div><span>初回確認</span><strong>{shortDate(job.firstSeen)}</strong></div>
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
                                <p>{job.compensationReality}</p>
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
                          {job.careerInsights && [
                            { label: "向き不向き", content: job.careerInsights.fit },
                            { label: "先に知っておくべきこと", content: job.careerInsights.thingsToKnow },
                            { label: "入って活躍できた場合の市場価値", content: job.careerInsights.marketValue },
                            { label: "在籍年数・社内プロモか転職が多いか", content: job.careerInsights.tenureAndPromotion },
                            { label: "どんな会社からの転職が多いか", content: job.careerInsights.priorCompanies },
                            { label: "どんな会社への転職が多いか", content: job.careerInsights.nextCompanies },
                          ].map((item) => (
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
                  <p className="card-index">具体的なソリューション(競合/差別化/継続実態)</p>
                  <div className="solution-catalog-grid">
                    {publicIntel.solutions.map((solution) => (
                      <details className="solution-item" key={solution.name}>
                        <summary>
                          <span className="solution-item-icon" aria-hidden="true">+</span>
                          <span className="solution-item-label">{solution.name}</span>
                          <span className="solution-item-chevron" aria-hidden="true">▾</span>
                        </summary>
                        <div className="solution-item-body">
                          <p>{solution.valueProp}</p>
                          {solution.competitors && <p><span>主な競合</span>{solution.competitors}</p>}
                          {solution.differentiation && <p><span>差別化ポイント</span>{solution.differentiation}</p>}
                          {solution.retention && <p><span>継続・拡張の実態</span>{solution.retention}</p>}
                          <a href={solution.url} target="_blank" rel="noreferrer">公式ソリューションページ ↗</a>
                        </div>
                      </details>
                    ))}
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
                    <div className="alternative-topline"><span>0{index + 1}</span><StatusBadge status={alternative.company.hiringStatus} /></div>
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
