import Link from "next/link";
import type { CSSProperties } from "react";
import Container from "@/components/Container";
import NewsletterCTA from "@/components/NewsletterCTA";
import SignalCard from "@/components/SignalCard";
import StatusBadge from "@/components/StatusBadge";
import { getCompanyDecisionProfile } from "@/lib/company-intelligence";
import { getCompanyPublicIntelligence, getResearchSource } from "@/lib/company-public-intelligence";
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
      <section className="company-command-hero">
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
              <p className="company-description">{company.description}</p>
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
                <p>応募検討の優先度</p>
                <h2>{publicIntel ? "重点検討" : profile.verdict}</h2>
                <p className="decision-reason">{publicIntel?.verdict ?? profile.verdictReason}</p>
                <div className="decision-stats">
                  <div><strong>{profile.observedRoleCount}</strong><span>観測した営業求人</span></div>
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
          <nav className="dossier-nav" aria-label="企業ページ内ナビゲーション">
            <a href="#decision">応募判断</a>
            <a href="#solution">ソリューション</a>
            <a href="#roles">ポジション</a>
            <a href="#team">組織・キャリア</a>
            <a href="#compare">併願先</a>
            <a href="#sources">出典</a>
          </nav>
        </Container>
      </div>

      <section className="content-section company-intelligence-section">
        <Container className="company-intelligence-layout">
          <main className="company-intelligence-main">
            <section className="intel-section" id="decision">
              <div className="intel-heading">
                <div><p className="intel-kicker">01 / DECISION BRIEF</p><h2>自分が見るべき会社か。</h2></div>
                <p>現時点の公開情報から、まず確認すべき判断材料を整理します。</p>
              </div>

              {publicIntel ? (
                <>
                  <article className="research-verdict-card">
                    <div className="research-verdict-meta">
                      <span>DEEP RESEARCH</span>
                      <span>{shortDate(publicIntel.researchedAt)} 更新</span>
                      <span>{publicIntel.sources.length} SOURCES</span>
                    </div>
                    <h3>{publicIntel.verdict}</h3>
                    <div className="research-verdict-grid">
                      <div><span>向いていそうな人</span><p>{publicIntel.bestFor}</p></div>
                      <div><span>先に疑うべきこと</span><p>{publicIntel.watchouts}</p></div>
                    </div>
                  </article>

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

                  <div className="hypothesis-intro">
                    <div><p className="card-index">GENBA HYPOTHESES</p><h3>公開情報から立てる、5つの仮説</h3></div>
                    <p>事実ではない読み解きは「仮説」と明記。支持材料だけでなく、反証材料と面接での検証質問も併記します。</p>
                  </div>
                  <div className="hypothesis-stack">
                    {publicIntel.hypotheses.map((hypothesis, index) => (
                      <article className="hypothesis-card" key={hypothesis.topic}>
                        <header>
                          <span className="hypothesis-number">H{String(index + 1).padStart(2, "0")}</span>
                          <div><p>{hypothesis.topic}</p><h3>{hypothesis.title}</h3></div>
                          <span className={`confidence confidence-${hypothesis.confidence}`}>確度 {hypothesis.confidence}</span>
                        </header>
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
                      </article>
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
                <div><p className="intel-kicker">02 / SOLUTION INTELLIGENCE</p><h2>何を、誰に、なぜ売るのか。</h2></div>
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
                  <div className="buyer-list"><span>主な買い手</span>{profile.lens.buyers.map((buyer) => <strong key={buyer}>{buyer}</strong>)}</div>
                </div>
              </div>

              <div className="solution-question-grid">
                <article><span>営業としての面白さ</span><p>{profile.lens.appeal}</p></article>
                <article><span>面接・選考で確認したいこと</span><p>{profile.lens.salesQuestion}</p></article>
              </div>

              {publicIntel ? (
                <div className="customer-proof-wrap">
                  <div className="customer-proof-heading"><div><p className="card-index">JAPAN CUSTOMER PROOF</p><h3>日本企業が、何を買い、何が変わったか。</h3></div><p>企業公式の導入事例に記載された成果を、AEが商談の再現性を考えやすい形に読み替えています。</p></div>
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

            <section className="intel-section" id="roles">
              <div className="intel-heading">
                <div><p className="intel-kicker">03 / ROLE REALITY</p><h2>ポジションの実態を比べる。</h2></div>
                <p>{companyJobs.length === profile.observedRoleCount ? "求人票で確認できる事実と、面接で確認すべき項目を分けています。" : `集計${profile.observedRoleCount}件のうち、${companyJobs.length}件を個別データに整理済みです。`}</p>
              </div>

              {publicIntel && (
                <div className="role-hypothesis-grid">
                  <article><span>SALES MOTION</span><p>{publicIntel.roleLens.salesMotion}</p></article>
                  <article><span>COMPENSATION</span><p>{publicIntel.roleLens.compensation}</p></article>
                  <article><span>QUOTA</span><p>{publicIntel.roleLens.quota}</p></article>
                  <article><span>COLLABORATION</span><p>{publicIntel.roleLens.collaboration}</p></article>
                </div>
              )}

              {companyJobs.length ? (
                <div className="role-dossier-list">
                  {companyJobs.map((job, index) => (
                    <article className="role-dossier" key={job.id}>
                      <header>
                        <span className="role-number">{String(index + 1).padStart(2, "0")}</span>
                        <div><p>{job.segment}</p><h3>{job.title}</h3></div>
                        <a href={job.source.url} target="_blank" rel="noreferrer">公式求人 ↗</a>
                      </header>
                      <div className="role-facts">
                        <div className="known"><span>勤務地</span><strong>{job.location}</strong></div>
                        <div className="known"><span>言語</span><strong>{job.language}</strong></div>
                        {publicIntel ? (
                          <>
                            <div className="analysis"><span>報酬の見立て</span><strong>国内上位の可能性</strong></div>
                            <div className="analysis"><span>営業モーション</span><strong>拡張・co-sell寄り</strong></div>
                            <div className="analysis"><span>最優先で検証</span><strong>Territory / credit</strong></div>
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
                      <footer><span>Source</span><p>{job.source.label}</p><time dateTime={job.lastChecked}>最終更新日 {shortDate(job.lastChecked)}</time></footer>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="empty-intel-state">
                  <span>RADAR ON</span>
                  <h3>{profile.observedRoleCount > 0 ? `${profile.observedRoleCount}件を集計で確認` : "現在確認中の営業求人はありません"}</h3>
                  <p>{profile.observedRoleCount > 0 ? "個別求人の出典と要件を整理中です。応募前に公式採用ページでも最新情報を確認してください。" : "公式採用ページを継続観測し、募集を確認次第追加します。"}</p>
                </div>
              )}
            </section>

            <section className="intel-section" id="team">
              <div className="intel-heading">
                <div><p className="intel-kicker">04 / PEOPLE &amp; CAREER</p><h2>組織との相性と、その先のキャリア。</h2></div>
                <p>個人名の羅列ではなく、公開情報を集計して組織の傾向を示す方針です。</p>
              </div>

              <div className="people-metric-grid">
                {publicIntel ? (
                  <>
                    <article><span>GLOBAL HEADCOUNT</span><strong>83,334</strong><p>FY26 Form 10-K / 2026年1月31日時点</p></article>
                    <article><span>JAPAN SINCE</span><strong>2000</strong><p>日本法人設立。20年以上の市場・顧客基盤</p></article>
                    <article><span>JAPAN LEADER</span><strong className="people-name">{publicIntel.leadership.name}</strong><p>{publicIntel.leadership.role}</p></article>
                    <article><span>ORG READ</span><strong className="people-name">MATRIX</strong><p>製品 × 顧客規模 × 地域で細分化された組織</p></article>
                  </>
                ) : (
                  <>
                    <article><span>GLOBAL HEADCOUNT</span><strong>—</strong><p>公式または適法な集計データを確認中</p></article>
                    <article><span>JAPAN HEADCOUNT</span><strong>—</strong><p>{company.japanPresence}を確認</p></article>
                    <article><span>AE IN JAPAN</span><strong>—</strong><p>役職分類と重複を精査後に掲載</p></article>
                    <article><span>MEDIAN TENURE</span><strong>—</strong><p>日本・営業職の集計値を優先</p></article>
                  </>
                )}
              </div>

              {publicIntel ? (
                <article className="organization-read-card">
                  <div><p className="card-index">ORGANIZATION READ</p><h3>大きな会社では「社風」より、自分が入る小さな組織を見抜く。</h3></div>
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
                    <article><p className="card-index">CULTURE HYPOTHESIS</p><h3>学習資源は厚い。ただし体験はOUと上司次第。</h3><p>公式の研修・mentorship・昇進パスと、外部レビューのtraining評価は整合します。一方、高業績文化やmanager差も示唆されるため、配属チーム単位で検証が必要です。</p><a href={company.careersUrl} target="_blank" rel="noreferrer">公式カルチャー・採用情報 ↗</a></article>
                    <article><p className="card-index">CAREER VALUE</p><h3>“Enterprise Salesの学校”として見る。</h3><p>大手顧客、複数製品、C-level、Partner、専門組織を束ねた経験は次の転職でも説明しやすい。一方、昇進実績や在籍年数は同一OUの実数を面接で確かめたいです。</p><span className="hypothesis-pill">GENBA仮説 / 確度 中</span></article>
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

            <section className="intel-section" id="compare">
              <div className="intel-heading">
                <div><p className="intel-kicker">05 / NEXT MOVES</p><h2>合わせて見るべき会社。</h2></div>
                <p>同じ買い手・領域・営業経験を軸にした併願候補です。</p>
              </div>
              {publicIntel && (
                <div className="comparison-map-grid">
                  {publicIntel.comparisonMap.map((comparison) => (
                    <article key={comparison.arena}>
                      <span>{comparison.arena}</span>
                      <div>{comparison.companies.map((name) => <strong key={name}>{name}</strong>)}</div>
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
                <div><p className="intel-kicker">06 / SOURCE LEDGER</p><h2>このページの根拠。</h2></div>
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

          <aside className="company-action-rail">
            <section className="next-action-card">
              <p className="card-index">YOUR NEXT MOVE</p>
              <h2>次に確認すること</h2>
              <ol>
                <li><span>01</span><p>自分に近い求人セグメントを確認</p></li>
                <li><span>02</span><p>OTE・新規比率・Quotaを面接で質問</p></li>
                <li><span>03</span><p>併願候補と営業モーションを比較</p></li>
              </ol>
              <a href={company.careersUrl} target="_blank" rel="noreferrer" className="button button-primary">公式採用ページ ↗</a>
            </section>

            <section className="method-card">
              <p className="card-index">HOW TO READ</p>
              <h2>情報ラベル</h2>
              <dl>
                <div><dt><i className="legend-confirmed" />確認済み</dt><dd>公開ソースで確認できた事実</dd></div>
                <div><dt><i className="legend-analysis" />Genba仮説</dt><dd>複数の公開情報から立てた検証可能な読み解き</dd></div>
                <div><dt><i className="legend-unknown" />反証・留保</dt><dd>仮説が外れる条件や情報の限界</dd></div>
              </dl>
              <Link href="/methodology">調査方針を見る →</Link>
            </section>

            <section className="sponsor-proof-card">
              <span>FOR HIRING TEAMS</span>
              <h2>仮説を、公式の事実でアップデートする。</h2>
              <p>企業提供情報はスポンサー表記を付け、Genbaの編集仮説と分離。OTE、達成率、担当範囲など候補者の疑問へ一次情報で回答できます。</p>
              <Link href="/advertise">掲載について相談する →</Link>
            </section>
          </aside>
        </Container>
      </section>

      <section className="content-section surface-section"><Container><NewsletterCTA /></Container></section>
    </>
  );
}
