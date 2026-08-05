import Link from "next/link";
import type { CSSProperties } from "react";
import Container from "@/components/Container";
import NewsletterCTA from "@/components/NewsletterCTA";
import SignalCard from "@/components/SignalCard";
import StatusBadge from "@/components/StatusBadge";
import { getCompanyDecisionProfile } from "@/lib/company-intelligence";
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
                <h2>{profile.verdict}</h2>
                <p className="decision-reason">{profile.verdictReason}</p>
                <div className="decision-stats">
                  <div><strong>{profile.observedRoleCount}</strong><span>確認中の営業求人</span></div>
                  <div><strong>{companySignals.length}</strong><span>採用シグナル</span></div>
                  <div><strong>{shortDate(company.lastChecked).slice(5)}</strong><span>最終更新日</span></div>
                </div>
              </div>
              <div className="decision-console-foot">
                企業の優劣や合格確率ではなく、現在確認できる応募判断材料を示しています。
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
                  <div>
                    <p className="card-index">EVIDENCE COVERAGE</p>
                    <h3>応募判断材料の充足度</h3>
                    <p>確認できた項目だけを計上。会社の評価点ではありません。</p>
                    <span className="source-count">{profile.sourceCount}件の公開ソースを参照</span>
                  </div>
                </article>
              </div>

              <div className="evidence-grid">
                {evidenceTopics.map((topic) => (
                  <article className={topic.confirmed ? "evidence-item confirmed" : "evidence-item unknown"} key={topic.label}>
                    <span>{topic.confirmed ? "確認済み" : "確認中"}</span>
                    <h3>{topic.label}</h3>
                    <p>{topic.value}</p>
                  </article>
                ))}
              </div>

              <div className="probability-note">
                <span aria-hidden="true">%</span>
                <div><strong>合格確率は表示しません</strong><p>応募・合否実績がない状態で数字を作らず、求人要件との一致点と不足情報を示します。</p></div>
              </div>
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

              <div className="proof-stack">
                <div><p className="card-index">SOLUTION PROOF</p><h3>「強いソリューションか」を判断する証拠</h3><p>社名や評判ではなく、日本市場で確認できる証拠を積み上げます。</p></div>
                <ul>
                  <li className="proof-confirmed"><span>01</span><div><strong>ソリューション領域</strong><small>{company.category}</small></div><b>確認済み</b></li>
                  <li><span>02</span><div><strong>日本の導入事例</strong><small>公式事例を調査中</small></div><b>未確認</b></li>
                  <li><span>03</span><div><strong>競合との差別化</strong><small>一次情報と第三者情報を照合予定</small></div><b>未確認</b></li>
                  <li><span>04</span><div><strong>顧客継続・拡張の証拠</strong><small>公開情報を調査中</small></div><b>未確認</b></li>
                </ul>
              </div>
            </section>

            <section className="intel-section" id="roles">
              <div className="intel-heading">
                <div><p className="intel-kicker">03 / ROLE REALITY</p><h2>ポジションの実態を比べる。</h2></div>
                <p>{companyJobs.length === profile.observedRoleCount ? "求人票で確認できる事実と、面接で確認すべき項目を分けています。" : `集計${profile.observedRoleCount}件のうち、${companyJobs.length}件を個別データに整理済みです。`}</p>
              </div>

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
                        <div><span>OTE</span><strong>未確認</strong></div>
                        <div><span>Pay Mix</span><strong>未確認</strong></div>
                        <div><span>新規 / 既存</span><strong>未確認</strong></div>
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
                <article><span>GLOBAL HEADCOUNT</span><strong>—</strong><p>公式または適法な集計データを確認中</p></article>
                <article><span>JAPAN HEADCOUNT</span><strong>—</strong><p>{company.japanPresence}を確認</p></article>
                <article><span>AE IN JAPAN</span><strong>—</strong><p>役職分類と重複を精査後に掲載</p></article>
                <article><span>MEDIAN TENURE</span><strong>—</strong><p>日本・営業職の集計値を優先</p></article>
              </div>

              <div className="career-flow-board">
                <div className="career-node"><span>BEFORE</span><strong>主な入社元</strong><p>集計データ準備中</p></div>
                <div className="career-track" aria-hidden="true"><i /><b>{company.name.slice(0, 1)}</b><i /></div>
                <div className="career-node"><span>AFTER</span><strong>主な転職先</strong><p>集計データ準備中</p></div>
              </div>

              <div className="culture-grid">
                <article><p className="card-index">CULTURE LENS</p><h3>社風・マネジメント</h3><p>働き方、意思決定、Forecastの厳しさ、英語利用、社内昇進を、複数の公開情報から確認します。</p><a href={company.careersUrl} target="_blank" rel="noreferrer">公式カルチャー・採用情報 ↗</a></article>
                <article><p className="card-index">LEADERSHIP</p><h3>日本責任者・営業リーダー</h3><p>公式プロフィール、就任リリース、公開インタビューがある場合のみ掲載します。人物評や未確認情報は扱いません。</p><span className="pending-pill">参照記事を確認中</span></article>
              </div>

              {companySignals.length > 0 && <div className="company-signal-block"><h3>組織・採用の変化</h3><div className="signal-feed">{companySignals.map((signal) => <SignalCard key={signal.id} signal={signal} />)}</div></div>}
            </section>

            <section className="intel-section" id="compare">
              <div className="intel-heading">
                <div><p className="intel-kicker">05 / NEXT MOVES</p><h2>合わせて見るべき会社。</h2></div>
                <p>同じ買い手・領域・営業経験を軸にした併願候補です。</p>
              </div>
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
                    <time dateTime={company.lastChecked}>{shortDate(company.lastChecked)}</time>
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
                <div><dt><i className="legend-analysis" />Genba分析</dt><dd>事実をもとにした編集上の読み解き</dd></div>
                <div><dt><i className="legend-unknown" />未確認</dt><dd>判断に必要だが根拠が足りない項目</dd></div>
              </dl>
              <Link href="/methodology">調査方針を見る →</Link>
            </section>

            <section className="sponsor-proof-card">
              <span>FOR HIRING TEAMS</span>
              <h2>候補者が本当に知りたい情報を、公式に補完する。</h2>
              <p>企業提供情報はスポンサー表記を付け、通常の編集判断と分離して掲載します。</p>
              <Link href="/advertise">掲載について相談する →</Link>
            </section>
          </aside>
        </Container>
      </section>

      <section className="content-section surface-section"><Container><NewsletterCTA /></Container></section>
    </>
  );
}
