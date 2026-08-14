import Link from "next/link";
import Container from "@/components/Container";
import AdvertiseInquiryForm from "@/components/AdvertiseInquiryForm";

type Language = "ja" | "en";

export default function AdvertisePageContent({ language = "ja" }: { language?: Language }) {
  const en = language === "en";
  const bestFits = en ? [
    { number: "1–4", label: "open sales roles in Japan", title: "Small and mid-sized global companies hiring sales in Japan", body: "The role is real, but the employer is not yet familiar to strong candidates. Genba explains the product, market, sales motion and role context that a job description alone cannot carry.", signal: "Best when low awareness—not lack of role quality—is suppressing consideration." },
    { number: "0→1", label: "Japan market entry", title: "Companies hiring a Country Manager or Founding AE", body: "Early hires are evaluating market risk, team support and career upside at the same time. A structured company page turns a globally known product into a credible Japan employment story.", signal: "Especially valuable when the first sales hire must understand the business before applying." },
    { number: "Niche", label: "specialist audience", title: "Recruitment firms focused on global IT and SaaS sales", body: "General brand messaging is rarely enough. Genba gives specialist firms room to define the roles, segments and market context where their expertise is genuinely useful.", signal: "Works when the firm can prove a clear specialty and wants qualified, relevant traffic." },
  ] : [
    { number: "1〜4", label: "日本の営業採用枠", title: "営業職を1〜4名採用中の小中規模外資", body: "求人はあるのに、企業名だけでは優秀な候補者の比較対象に入らない。Genbaが製品、市場、営業モーション、役割の背景を一つの企業理解へまとめます。", signal: "求人の質ではなく、知名度不足が検討を止めている企業に最適です。" },
    { number: "0→1", label: "日本市場の立ち上げ", title: "Country Manager・Founding AEを採用中の進出直後企業", body: "初期採用では、候補者は市場性、支援体制、キャリアの上振れを同時に見ています。グローバル製品の魅力を、日本で働く理由へ翻訳します。", signal: "最初の営業人材に、応募前から事業を深く理解してほしい企業ほど価値が出ます。" },
    { number: "特化", label: "専門読者への到達", title: "外資IT・SaaS営業に特化した採用支援会社", body: "一般的な会社紹介では専門性が伝わりません。得意な職種、セグメント、企業フェーズを明確にし、関係する読者へ継続的に届けます。", signal: "専門領域を証明でき、関連性の高い送客を増やしたい会社に向いています。" },
  ];

  const inclusions = en ? [
    ["Sponsored company page", "A permanent, clearly labelled home for the product, Japan hiring context and sales role story."],
    ["Company-provided facts", "Hiring background and sales organisation details are labelled separately from Genba editorial analysis."],
    ["Newsletter: 2× per month", "Six sponsored newsletter placements across the 90-day pilot."],
    ["X distribution: 1× per month", "Three clearly marked PR posts from @chosenshi08 across the pilot."],
    ["Tracked official-job links", "Click measurement while every application still happens on the company’s official careers site."],
    ["Monthly report", "Page views, distribution activity and tracked job clicks in aggregate—never individual reader data."],
    ["One update per month", "Refresh one set of approved facts, priority roles or hiring context each month."],
  ] : [
    ["Sponsored企業ページ", "製品、日本採用の背景、営業職としての魅力を、広告表記付きで継続的に説明します。"],
    ["企業提供事実", "採用背景・営業組織の情報を、Genbaの編集分析とは別のラベルで掲載します。"],
    ["ニュースレター月2回", "90日間で合計6回、関連性の高い読者へスポンサー情報を届けます。"],
    ["PR表記付きX配信 月1回", "@chosenshi08から90日間で合計3回、PRであることを明示して配信します。"],
    ["公式求人への計測リンク", "応募は企業公式サイトで行い、Genbaからのクリックを集計します。"],
    ["月次レポート", "企業ページ閲覧、配信実績、求人クリックを個人が特定されない集計値で報告します。"],
    ["月1回までの更新", "採用背景、注力職種、承認済みの企業提供事実を毎月1回更新できます。"],
  ];

  const timeline = en ? [
    ["Month 1", "Build the sponsored page, define the hiring story, add tracked links, run two newsletters and one PR post, then establish the baseline report."],
    ["Month 2", "Use the first month’s reading and click data to sharpen the priority role and message. Run two newsletters, one PR post and one content update."],
    ["Month 3", "Repeat distribution, deliver the third report and compare tracked outcomes with the company’s existing recruitment channels."],
  ] : [
    ["1カ月目", "企業ページを制作し、採用ストーリーと計測リンクを設定。ニュースレター2回、X配信1回を実施し、基準値をレポートします。"],
    ["2カ月目", "初月の閲覧・クリックを踏まえて注力職種と訴求を更新。ニュースレター2回、X配信1回、情報更新1回を実施します。"],
    ["3カ月目", "同じ配信頻度を継続し、3回目のレポートで既存採用チャネルと比較できる判断材料をまとめます。"],
  ];

  const process = en ? [
    ["Fit review", "We confirm the company, active roles and relevance to Genba readers."],
    ["Source intake", "You provide official URLs, approved facts, hiring context and priority roles."],
    ["Draft & fact check", "Genba creates the page. The company checks factual accuracy, not editorial conclusions."],
    ["Start the pilot", "After payment, the 90-day measurement and distribution cycle begins."],
  ] : [
    ["適合性確認", "企業、募集中求人、Genba読者との関連性を確認します。"],
    ["情報提出", "公式URL、承認済み事実、採用背景、注力職種をご提出いただきます。"],
    ["制作・事実確認", "Genbaが原稿を制作。企業は事実を確認し、編集結論は変更しません。"],
    ["実証開始", "支払い後、90日間の計測・配信サイクルを開始します。"],
  ];

  return (
    <>
      <section className="page-hero advertise-hero advertise-hero-v2">
        <Container>
          <div className="advertise-language-row">
            <span>{en ? "PARTNERSHIP / JAPAN" : "GENBA PARTNERSHIP"}</span>
            <div aria-label={en ? "Language" : "言語切り替え"}>
              <Link href="/advertise" className={!en ? "is-active" : ""}>日本語</Link>
              <Link href="/en/advertise" className={en ? "is-active" : ""}>English</Link>
            </div>
          </div>
          <div className="page-hero-grid">
            <div>
              <p className="eyebrow">{en ? "FOUNDING PILOT — THREE PARTNERS ONLY" : "初期3社限定・実証パートナー"}</p>
              <h1>{en ? "Make a lesser-known global company understandable before candidates apply." : "知名度の差を、\n企業理解で埋める。"}</h1>
              <p className="page-lead">{en ? "Genba reaches people working in—or seriously considering—global IT and SaaS sales in Japan. We turn product, market-entry and sales-organisation context into a measured 90-day hiring narrative." : "Genbaは、外資IT・SaaS営業の現役層と予備軍が企業を深く比較するためのメディアです。求人票だけでは伝わらない製品、市場、営業組織の背景を、90日間の継続発信と計測へ変えます。"}</p>
              <div className="advertise-hero-proof">
                <span>{en ? "Best for" : "最も価値が出る企業"}</span>
                <strong>{en ? "1–4 Japan sales hires / Founding GTM / Specialist recruiters" : "営業採用1〜4名・日本進出直後・外資営業特化エージェント"}</strong>
              </div>
            </div>
            <aside className="advertise-price-card" aria-label={en ? "Pilot pricing and term" : "実証料金と期間"}>
              <span>{en ? "90-DAY PILOT" : "90日間の実証プラン"}</span>
              <div><strong>{en ? "¥80k" : "8万円"}</strong><small>{en ? "+ tax / month" : "（税別）/ 月"}</small></div>
              <p>{en ? "For our first few partners, sponsorship is available at the pilot rate of ¥80,000 + tax per month. Three-month minimum; ¥240,000 + tax total. Limited to the first three approved partners." : "初めの数社様限定で、月額8万円（税別）の「実証プラン」としてスポンサー枠をご提供します。最低3カ月、総額24万円（税別）。審査を通過した初期3社限定です。"}</p>
              <a href="#inquiry" className="button button-primary">{en ? "Discuss the pilot" : "実証プランを相談する"}</a>
            </aside>
          </div>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <div className="advertise-section-heading advertise-section-heading-wide">
            <p className="eyebrow">{en ? "WHERE GENBA CREATES THE MOST VALUE" : "最も費用対効果が出やすい企業"}</p>
            <h2>{en ? "The role is attractive. The missing piece is context." : "求人の魅力ではなく、理解不足で候補から外れている。"}</h2>
            <p>{en ? "Genba is not a replacement for every recruitment channel. It is most useful when qualified candidates need a credible reason to understand an unfamiliar company before they are ready to apply." : "Genbaはあらゆる採用媒体の代替ではありません。優秀な候補者が、まだ知らない企業を応募候補として理解するまでの情報不足を埋めるとき、最も価値が出ます。"}</p>
          </div>
          <div className="advertise-fit-grid">
            {bestFits.map((item, index) => <article key={item.title}>
              <div className="advertise-fit-stat"><strong>{item.number}</strong><span>{item.label}</span></div>
              <span className="advertise-fit-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <small>{item.signal}</small>
            </article>)}
          </div>
        </Container>
      </section>

      <section className="content-section surface-section">
        <Container>
          <div className="advertise-section-heading advertise-section-heading-wide">
            <p className="eyebrow">{en ? "FROM HIRING PROBLEM TO MEASURABLE SIGNAL" : "採用課題から、測れる判断材料まで"}</p>
            <h2>{en ? "A three-step hiring communication system." : "認知、理解、公式求人への行動をつなぐ。"}</h2>
            <p>{en ? "The pilot is designed to create an explainable path from an unfamiliar employer name to measurable interest—not to promise applications or hires." : "応募数や採用を保証する商品ではありません。知られていない企業が比較対象に入り、理解され、公式求人へ進むまでを計測できる形にします。"}</p>
          </div>
          <div className="advertise-value-flow" role="list">
            <article role="listitem"><span>01</span><small>{en ? "HIRING FRICTION" : "採用上の摩擦"}</small><h3>{en ? "Candidates cannot judge an unfamiliar employer." : "知らない企業は、検討する前に候補から外れる。"}</h3><p>{en ? "A title and compensation range do not explain Japan-stage risk, the buyer, sales motion or support system." : "職種名と条件だけでは、日本事業の段階、Buyer、営業モーション、支援体制まで判断できません。"}</p></article>
            <b aria-hidden="true">→</b>
            <article role="listitem"><span>02</span><small>{en ? "GENBA INTERVENTION" : "Genbaの介在"}</small><h3>{en ? "Give the company a credible, persistent narrative." : "応募前に、企業と仕事を深く理解できる状態を作る。"}</h3><p>{en ? "A sponsored page, six newsletters and three PR posts repeat the story without changing Genba’s independent analysis." : "企業ページ、ニュースレター6回、X配信3回で、編集の独立性を守りながら採用背景を継続発信します。"}</p></article>
            <b aria-hidden="true">→</b>
            <article role="listitem"><span>03</span><small>{en ? "DECISION EVIDENCE" : "社内判断の証拠"}</small><h3>{en ? "Measure attention and official-job intent." : "閲覧と公式求人クリックを、月次で比較する。"}</h3><p>{en ? "Tracked links and monthly reports let the hiring team compare Genba with its existing channels using the same internal definitions." : "計測リンクと月次レポートにより、既存チャネルと同じ社内基準で費用対効果を比較できます。"}</p></article>
          </div>
        </Container>
      </section>

      <section className="content-section advertise-economics-section">
        <Container>
          <div className="advertise-section-heading advertise-section-heading-wide">
            <p className="eyebrow">{en ? "THE 90-DAY ECONOMICS" : "90日間の費用対効果"}</p>
            <h2>{en ? "¥240,000 buys a measured test—not a vague logo placement." : "24万円を、曖昧な掲載費で終わらせない。"}</h2>
            <p>{en ? "The total pilot investment and every included distribution unit are fixed in advance. The final report uses actual results; the figures below show how an internal team can evaluate those results." : "総額と提供回数を先に固定し、実績値は月次レポートで確認します。以下は成果予測ではなく、社内で採算を判断するための計算方法です。"}</p>
          </div>
          <div className="advertise-economics-grid">
            <div className="advertise-investment-card">
              <span>{en ? "FIXED PILOT INVESTMENT" : "実証プランの固定投資"}</span>
              <strong>¥240,000</strong>
              <small>{en ? "+ tax / 90 days" : "税別 / 90日間"}</small>
              <div><p><b>6</b>{en ? "newsletter placements" : "ニュースレター掲載"}</p><p><b>3</b>{en ? "PR posts on X" : "XでのPR配信"}</p><p><b>3</b>{en ? "monthly reports" : "月次レポート"}</p></div>
            </div>
            <div className="advertise-calculation-card">
              <span>{en ? "ILLUSTRATIVE UNIT ECONOMICS" : "単価計算の例"}</span>
              <div><p>{en ? "If Genba drives" : "Genba経由で"}<strong>30</strong>{en ? "tracked job clicks" : "件の公式求人クリック"}</p><b>=</b><p><strong>¥8,000</strong>{en ? "per click" : "/ クリック"}</p></div>
              <div><p>{en ? "If Genba is attributed to" : "Genba経由と確認できる"}<strong>3</strong>{en ? "interviews" : "件の面接"}</p><b>=</b><p><strong>¥80,000</strong>{en ? "per interview" : "/ 面接"}</p></div>
              <div><p>{en ? "If Genba is attributed to" : "Genba経由と確認できる"}<strong>1</strong>{en ? "hire" : "名の採用"}</p><b>=</b><p><strong>¥240,000</strong>{en ? "per hire" : "/ 採用"}</p></div>
              <small>{en ? "Calculation examples only. They are not traffic, interview or hiring forecasts." : "上記は計算例であり、クリック数・面接数・採用数を予測または保証するものではありません。"}</small>
            </div>
          </div>
          <div className="advertise-decision-grid">
            <article><span>01</span><h3>{en ? "Set the baseline" : "既存チャネルの基準値を置く"}</h3><p>{en ? "Record your current cost per qualified job click, interview and hire for the same roles." : "同じ職種について、既存媒体の公式求人クリック単価、面接単価、採用単価を確認します。"}</p></article>
            <article><span>02</span><h3>{en ? "Use tracked outcomes" : "Genba経由を計測する"}</h3><p>{en ? "Use tracked links plus the company’s own source question at application or interview stage." : "計測リンクに加え、応募・面接時の流入元確認を企業側の運用に組み込みます。"}</p></article>
            <article><span>03</span><h3>{en ? "Make the renewal decision" : "3カ月後に継続判断する"}</h3><p>{en ? "Compare unit economics, candidate relevance and the reusable value of the company narrative." : "単価だけでなく、候補者の関連性と、企業理解コンテンツが残る価値も含めて判断します。"}</p></article>
          </div>
        </Container>
      </section>

      <section className="content-section surface-section">
        <Container>
          <div className="advertise-plan-grid">
            <div className="advertise-plan-copy">
              <p className="eyebrow">{en ? "WHAT THE PILOT INCLUDES" : "実証プランに含まれるもの"}</p>
              <h2>{en ? "One plan. Seven concrete deliverables." : "提供内容を、7つに固定。"}</h2>
              <p>{en ? "The plan combines a durable company asset, repeated distribution and evidence for a renewal decision. There are no success fees and no access to individual reader data." : "企業理解の資産、継続配信、継続判断のための計測を一つにまとめます。成功報酬はなく、読者個人データは提供しません。"}</p>
              <div className="advertise-plan-terms"><div><span>{en ? "PRICE" : "費用"}</span><strong>{en ? "¥80k / mo" : "月額8万円"}</strong><small>{en ? "+ tax" : "税別"}</small></div><div><span>{en ? "TERM" : "期間"}</span><strong>{en ? "3 months" : "最低3カ月"}</strong><small>{en ? "¥240k total" : "総額24万円"}</small></div></div>
            </div>
            <ol className="advertise-inclusion-list">
              {inclusions.map(([title, body], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{title}</strong><p>{body}</p></div></li>)}
            </ol>
          </div>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <div className="advertise-section-heading advertise-section-heading-wide"><p className="eyebrow">{en ? "THE 90-DAY OPERATING RHYTHM" : "90日間の進め方"}</p><h2>{en ? "Build once, learn monthly, decide with evidence." : "作って終わらず、毎月学び、数字で判断する。"}</h2></div>
          <div className="advertise-timeline">{timeline.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className="advertise-policy-strip"><strong>{en ? "EDITORIAL BOUNDARY" : "編集上の境界"}</strong><span>{en ? "Sponsored and PR labels are explicit" : "Sponsored・PRを明示"}</span><span>{en ? "Company facts stay separate from Genba analysis" : "企業提供事実とGenba分析を分離"}</span><span>{en ? "No paid ranking or favourable conclusion" : "順位・分析結論は販売しない"}</span><span>{en ? "Aggregate reporting only" : "レポートは集計値のみ"}</span></div>
        </Container>
      </section>

      <section className="content-section surface-section">
        <Container>
          <div className="advertise-section-heading advertise-section-heading-wide"><p className="eyebrow">{en ? "HOW IT STARTS" : "掲載開始まで"}</p><h2>{en ? "Four steps to a 90-day pilot." : "4ステップで実証を開始。"}</h2></div>
          <div className="advertise-process-grid">{process.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </Container>
      </section>

      <section id="inquiry" className="content-section advertise-inquiry-section">
        <Container>
          <div className="advertise-section-heading advertise-section-heading-wide"><p className="eyebrow">{en ? "PILOT INQUIRY" : "実証パートナーの相談"}</p><h2>{en ? "See whether Genba fits your Japan hiring challenge." : "自社の採用課題に合うか、まず確認する。"}</h2><p>{en ? "We review audience fit, official hiring activity and conflicts before accepting a partner. Paid activity begins only after the required legal and employment-policy checks are complete." : "読者との適合性、公式求人、利益相反を確認した上で掲載可否をご連絡します。有料契約の開始は、必要な法務・勤務先規定の確認完了後です。"}</p></div>
          <AdvertiseInquiryForm language={language} />
        </Container>
      </section>
    </>
  );
}
