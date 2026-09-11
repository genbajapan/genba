import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-09-11";

export type DailyIntelligenceInput = {
  slug: string;
  name: string;
  jobConfirmed: boolean;
  jobUrl: string;
  officialUrl: string;
  customersUrl: string;
  financeUrl: string;
  problem: string;
  origin: string;
  externalNeed: string;
  solution: string;
  selection: string;
  growth: string;
  role: string;
  organization: string;
  career: string;
  globalHeadcount: string;
  japanPresence: string;
  japanSince: string;
  customer: { company: string; outcome: string };
  facts: Array<[string, string, string]>;
  products: Array<[string, string, string]>;
  competitors: string;
  leader: [string, string, string];
  local: [string, string, string];
  work: [CompactPatchInput["classification"], string, string, string, string];
  preEntry?: { verdict: string; signal: string; hurdle: string; conditions: string[]; watches: string[] };
};

export function buildDailyCompanyIntelligence(input: DailyIntelligenceInput, researchDate = checkedAt): CompanyPublicIntelligence {
  const profile: Profile = {
    checkedAt: researchDate,
    jobConfirmed: input.jobConfirmed,
    slug: input.slug,
    name: input.name,
    jobUrl: input.jobUrl,
    officialUrl: input.officialUrl,
    customersUrl: input.customersUrl,
    externalUrl: "https://www.ipa.go.jp/digital/chousa/metrics/metrics2022.html",
    financeUrl: input.financeUrl,
    salesSnapshot: `${input.problem}${input.solution}`,
    growthSummary: input.growth,
    milestones: [
      { year: input.facts[0][1], label: "創業", detail: input.origin, source: "company" },
      { year: input.japanSince, label: input.preEntry ? "日本進出未確認" : "日本法人設立", detail: input.japanPresence, source: "company" },
      { year: "2026.09", label: input.jobConfirmed ? "日本採用を確認" : "APAC採用を確認", detail: input.role, source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: `${input.customer.company}の公式事例は、${input.customer.outcome}` },
      { title: "製品の成り立ちから見る課題", body: input.origin },
      { title: "外部環境の要求から見る課題", body: input.externalNeed },
    ],
    narrative: [
      { label: "背景", body: input.externalNeed },
      { label: "課題", body: input.problem },
      { label: "解決策", body: input.solution },
      { label: "選定の理由", body: input.selection },
    ],
    openingHook: `${input.problem}その時間・失敗・手戻りを現在どの指標で測っていますか。`,
    valueHypothesis: `${input.solution}導入前後で時間、失敗、手戻り、利用率、事業KPIを比較する。`,
    objection: `${input.competitors}や内製で十分。`,
    reframe: `機能数ではなく、${input.selection}`,
    facts: input.facts.map(([label, value, detail], index) => ({ label, value, detail, source: index === input.facts.length - 1 ? "job" : index > 1 ? "finance" : "company" })),
    customers: [{ company: input.customer.company, products: input.products[0][0], outcome: input.customer.outcome, implication: "公開された顧客成果を、日本での業務設計と投資判断の参照にできる。" }],
    externalSignals: [{ label: "デジタルサービス品質", value: "速度・安全・説明責任", detail: input.externalNeed, caveat: `${input.name}の採用や導入だけで成果・法令適合・安全性を保証しない。` }],
    role: input.role,
    organization: input.organization,
    careerValue: input.career,
    globalHeadcount: input.globalHeadcount,
    japanPresence: input.japanPresence,
    japanSince: input.japanSince,
    solutions: input.products.map(([name, valueProp, url]) => ({ name, valueProp, url, competitors: input.competitors, differentiation: input.selection })),
    fitTags: [input.products[0][0], "Enterprise", "AI", input.jobConfirmed ? "Japan" : "APAC"],
    comparisons: [{ arena: input.products[0][0], companies: [input.name, ...input.competitors.split("、").slice(0, 3)], why: "導入負荷、業務統合、測定可能な成果、総費用" }],
  };

  const intelligence = buildIntelligence(profile);
  const ids = (suffix: string) => `${input.slug}-${suffix}`;
  applyStandard(intelligence, buildCompactPatch({
    slug: input.slug,
    leaderName: input.leader[0], leaderLabel: input.leader[1], leaderUrl: input.leader[2],
    localName: input.local[0], localLabel: input.local[1], localUrl: input.local[2],
    companyId: ids("company"), jobId: ids("job"), customersId: ids("customers"), externalId: ids("external"), financeId: ids("finance"),
    targets: ["事業・IT責任者", "対象業務の現場責任者", "変革・データ責任者"],
    heroSummary: `${input.problem}${input.solution}`,
    competitors: input.competitors,
    feature: input.solution,
    advantage: input.selection,
    benefit: "対象業務の時間、失敗、手戻り、利用率、事業KPIを改善できる可能性がある。",
    evidence: `${input.customer.company}の公式事例で、${input.customer.outcome}`,
    marketVerdict: input.preEntry ? input.preEntry.verdict : `${input.organization}${input.role} 日本市場の実績と新規採用を分け、再現可能な顧客成果を確認する局面。`,
    marketParagraphs: [input.externalNeed, input.growth],
    cultureHeadline: input.preEntry ? "日本組織は未確認。APAC採用から成立条件を観測する。" : `${input.organization}グローバル専門職と連携して日本顧客の成果を作る。`,
    classification: input.work[0], displayLabel: input.work[1], officeDays: input.work[2], remoteOnly: input.work[3], flexibility: input.work[4],
    goodFor: [input.career, "複数部門の課題を一つの成果へ束ねたい人"],
    cautionFor: ["完成した国内分業と公開済みの達成指標を前提にする人", "製品説明だけに役割を限定したい人"],
    unresolved: [
      ["日本体制", input.japanPresence, "職種別人数、意思決定権、今後12カ月の採用計画は。"],
      ["達成可能性", input.role, "目標、達成率、案件単価、販売期間、案件創出の構成は。"],
      ["競争", input.competitors, "直近の勝因・敗因と置換・共存の比率は。"],
      ["顧客成果", input.customer.outcome, "導入後の定着、更新、拡張を誰がどの指標で持つか。"],
      ["報酬・昇進", "日本の数値報酬は未確認。", "基本給、変動給、株式、評価KPI、昇進基準は。"],
    ],
  }));
  intelligence.researchedAt = researchDate;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = researchDate.replaceAll("-", ".");
  if (input.preEntry && intelligence.marketStatus.japanGrowth) {
    intelligence.marketStatus.japanGrowth.headline = "日本法人・国内拠点・日本求人は未確認";
    intelligence.marketStatus.japanGrowth.narrative = `${input.japanPresence}。現在応募できる日本求人があるとは扱わない。`;
    intelligence.marketStatus.japanGrowth.entryAssessment = {
      verdict: input.preEntry.verdict,
      factSignals: [{ title: "APAC営業採用", body: input.preEntry.signal, sourceIds: [ids("job")] }],
      hurdles: [{ title: "日本専任体制なし", body: input.preEntry.hurdle, sourceIds: [ids("job"), ids("company")] }],
      readinessConditions: input.preEntry.conditions.map((body, index) => ({ title: `成立条件${index + 1}`, body })),
      watchSignals: input.preEntry.watches,
    };
  }
  return intelligence;
}

const tricentis = buildDailyCompanyIntelligence({
  slug: "tricentis", name: "Tricentis", jobConfirmed: true,
  jobUrl: "https://tricentis.wd1.myworkdayjobs.com/Tricentis_Careers/job/JP---Tokyo/Senior-Account-Executive_JR105896",
  officialUrl: "https://www.tricentis.com/ja/company", customersUrl: "https://www.tricentis.com/ja/case-studies/en-inc-improves-test-automation-coverage-with-tricentis-testim",
  financeUrl: "https://www.tricentis.com/ja/news/tricentis-sets-ambition-for-japanese-business",
  problem: "手動テストと分断した道具で、リリースが遅れ、品質事故と保守工数が増える課題を解く。",
  origin: "2007年にオーストリアで、従来の重いテスト作成を自動化・継続化する発想から創業。",
  externalNeed: "AIがコード生成を速めるほど変更量が増え、企業は品質確認を同じ速度で自動化し、事故と監査証跡を管理する必要がある。",
  solution: "コード不要のテスト自動化、テスト管理、性能・変更影響分析を一つの品質工程へつなぐ。",
  selection: "SAP等の複雑な業務システム、継続的テスト、AI支援、全社の品質可視化を同じ運用へ広げられる点で比較する。",
  growth: "2023年にARR 3.3億ドル超、顧客3,000社超を公表し、日本事業を5年で1億ドル超へ伸ばす目標を掲げた。",
  role: "東京のSenior Account Executiveが日本の大企業・見込み顧客を担当し、10万ドル超ACVを含む複雑な新規・拡大商談を担う。",
  organization: "Tricentis Japan合同会社。gBizINFOの事業所被保険者数14人。",
  career: "小規模な日本組織で、品質保証、DevOps、SAP変革を経営成果へ翻訳する企業向け営業経験。",
  globalHeadcount: "1,001〜5,000人規模の公開集計（現員は変動あり）", japanPresence: "東京・大手町。gBizINFOの事業所被保険者数14人", japanSince: "2023年に日本法人を確認",
  customer: { company: "エン株式会社", outcome: "Testim導入後にテスト実行を月500回から3,000回超へ増やし、テスト時間を50%削減したと紹介。" },
  facts: [["創業","2007年","オーストリアで創業。"],["顧客","3,000社超","2023年会社公表。"],["ARR","3.3億ドル超","2023年会社公表。"],["国内規模","14人","gBizINFO事業所被保険者数。"],["日本目標","5年で1億ドル超","2024年会社発表。"],["日本求人","1件","東京のSenior Account Executive。"]],
  products: [["Tricentis Tosca","企業システムのテストをコード不要で自動化。","https://www.tricentis.com/ja/products/automate-continuous-testing-tosca"],["Tricentis qTest","テスト計画・実行・品質情報を管理。","https://www.tricentis.com/products/unified-test-management-qtest"],["Tricentis Testim","Web・モバイルのテスト作成と保守をAIで支援。","https://www.tricentis.com/products/test-automation-web-apps-testim"]],
  competitors: "OpenText、SmartBear、UiPath、各種内製テスト基盤",
  leader: ["Kevin Thompson","Chief Executive Officer","https://www.tricentis.com/team/kevin-thompson"], local: ["未確認","日本事業責任者","https://www.tricentis.com/ja/company"],
  work: ["未確認","東京勤務","出社日数は未確認","完全リモートの明記なし","勤務条件の詳細は面接確認"],
});
tricentis.sources.push({ id: "gbiz-headcount-tricentis", label: "gBizINFO Tricentis Japan合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=7010403031618", kind: "公的機関", scope: "日本法人・事業所被保険者数・所在地", checkedAt });
tricentis.companyStats.japanHeadcount = { value: "14人", detail: "gBizINFOの事業所情報に掲載された厚生年金保険・健康保険の被保険者数。役員・制度対象外・業務委託等を含む総在籍人数ではない。", sourceId: "gbiz-headcount-tricentis" };

const medallia = buildDailyCompanyIntelligence({
  slug: "medallia", name: "Medallia", jobConfirmed: true,
  jobUrl: "https://jobs.medallia.com/jobs/5978?lang=en-us", officialUrl: "https://www.medallia.com/ja/",
  customersUrl: "https://www.medallia.com/ja/resource/nissan-case-study/", financeUrl: "https://www.medallia.com/ja/press-release/medallia-appoints-mark-bishof-as-chairman-and-ceo/",
  problem: "顧客・従業員の声がアンケート、通話、Web、店舗へ分散し、改善すべき体験と事業影響を結べない課題を解く。",
  origin: "2001年、企業が顧客の声を現場の行動へ変えられない問題から、体験管理会社として米国で創業。",
  externalNeed: "顧客接点がデジタルと対面へ広がり、企業は生成AIを使いながらも、同意、権限、誤答、現場対応を一貫して管理する必要がある。",
  solution: "アンケート、会話、行動、業務データをAIで分析し、顧客別・現場別の改善行動へつなぐ。",
  selection: "顧客と従業員の信号、テキスト・会話分析、現場への行動配信を一つの企業運用へ広げられる点で比較する。",
  growth: "世界で1,800人超、2,000超のブランド、月10億超の体験信号を扱うと会社公表。2025年にMark BishofがCEOへ就任。",
  role: "東京のSenior Technical Consultantが事業目標を技術設計へ変え、体験データの洞察、経営提案、利用定着、投資対効果を担う。",
  organization: "Medallia株式会社・東京。gBizINFOでは事業所被保険者数の掲載がなく、職種別人数と国内の正確な在籍人数は非公開。",
  career: "体験データ、技術設計、経営助言、導入後の価値実現を横断する専門サービス経験。",
  globalHeadcount: "1,800人超（会社公式）", japanPresence: "Medallia株式会社・東京・京橋。国内の正確な在籍人数は非公開", japanSince: "2019年に日本法人登記",
  customer: { company: "日産", outcome: "Digital Experience Analyticsでフォーム入力率を32.5%高め、販売前リードを39%増やしたと紹介。" },
  facts: [["創業","2001年","米国で創業。"],["ブランド","2,000超","会社公式。"],["従業員","1,800人超","会社公式。"],["体験信号","月10億超","会社公式。"],["日本法人","2019年","gBizINFOで法人登記を確認。"],["日本求人","1件","東京のSenior Technical Consultant。"]],
  products: [["Medallia Experience Cloud","顧客・従業員の体験信号を収集・分析し行動へつなぐ。","https://www.medallia.com/ja/platform/"],["Digital Experience Analytics","Web・アプリの行動と摩擦を可視化。","https://www.medallia.com/ja/products/digital-experience-analytics/"],["Conversational Intelligence","通話・会話を分析し品質と顧客課題を捉える。","https://www.medallia.com/ja/products/conversational-intelligence/"]],
  competitors: "Qualtrics、Sprinklr、Salesforce、各種アンケート・分析基盤",
  leader: ["Mark Bishof","Chairman and Chief Executive Officer","https://www.medallia.com/ja/leadership/"], local: ["未確認","日本事業責任者","https://www.medallia.com/ja/"],
  work: ["未確認","東京勤務","出社日数は未確認","完全リモートの明記なし","勤務条件の詳細は面接確認"],
});
medallia.sources.push({ id: "medallia-gbiz", label: "gBizINFO Medallia株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=7010001204906", kind: "公的機関", scope: "日本法人・所在地・事業所情報の掲載状況", checkedAt });
medallia.sources[medallia.sources.length - 1].id = "gbiz-headcount-medallia";
medallia.companyStats.japanHeadcount = { value: "掲載なし", detail: "gBizINFOで法人と所在地を特定したが、事業所情報の被保険者数は掲載されていない。日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-medallia" };

const launchdarkly = buildDailyCompanyIntelligence({
  slug: "launchdarkly", name: "LaunchDarkly", jobConfirmed: false,
  jobUrl: "https://job-boards.greenhouse.io/launchdarkly/jobs/7588897003", officialUrl: "https://launchdarkly.com/about-us/",
  customersUrl: "https://launchdarkly.com/customer-stories/", financeUrl: "https://launchdarkly.com/blog/dreaming-bigger/",
  problem: "コードの配備と機能公開が一体で、本番障害、夜間作業、大規模な一斉移行のリスクが高い課題を解く。",
  origin: "2014年、Edith HarbaughとJohn Kodumalが、公開のたびにコードを書き換える苦労から機能フラグをサービス化。",
  externalNeed: "AIで開発速度が上がるほど変更量と不確実性も増え、企業は利用者別の段階公開、即時停止、証跡、実験を運用として持つ必要がある。",
  solution: "機能公開を配備から切り離し、対象者別の段階公開、即時停止、実験、AI実行時の制御を一つの基盤で管理して、本番障害と夜間作業を減らす。",
  selection: "大規模な配布基盤、既存開発導線への接続、権限・監査、障害時の即時制御を継続運用できる点で比較する。",
  growth: "2023年にARR 1億ドル、顧客4,000社を公表。2026年9月の公式求人ではSingaporeのMid-Market Account Executiveを確認したが、日本求人は0件。",
  role: "SingaporeのMid-Market Account Executiveが地域の新規・既存顧客を担当。Japan担当、日本法人、東京拠点、日本求人は未確認。",
  organization: "APACではSingapore採用を確認。日本の法人・拠点・専任人員は未確認。",
  career: "正式進出後は、開発者向け製品をIT・事業成果へ翻訳し、APACと日本の市場立ち上げを結ぶ経験になり得る。",
  globalHeadcount: "501〜1,000人規模の公開集計（現員は変動あり）", japanPresence: "日本法人・国内拠点・日本求人は未確認。Singapore営業求人を確認", japanSince: "未進出",
  customer: { company: "Paramount", outcome: "配備頻度を月2回から1日6〜7回へ高め、問題解決を最大7日から1日へ短縮したと紹介。" },
  facts: [["創業","2014年","米国オークランドで創業。"],["顧客","4,000社","2023年会社公表。"],["ARR","1億ドル","2023年会社公表。"],["APAC採用","Singapore","Mid-Market Account Executive。"],["日本法人","未確認","国内法人・拠点を確認できず。"],["日本求人","0件","公式Greenhouseで確認。"]],
  products: [["Feature Management","機能公開を配備から切り離し段階制御。","https://launchdarkly.com/feature-management/"],["Experimentation","利用者群ごとに機能効果を実験・測定。","https://launchdarkly.com/experimentation/"],["AI Runtime Control","AI機能の公開・監視・停止を運用。","https://launchdarkly.com/solutions/ai/"]],
  competitors: "CloudBees、DevCycle、Split、クラウド各社・内製機能フラグ",
  leader: ["Dan Rogers","Chief Executive Officer","https://launchdarkly.com/blog/dreaming-bigger/"], local: ["未確認","日本事業責任者","https://launchdarkly.com/careers/"],
  work: ["未確認","日本求人なし","該当なし","日本での勤務条件は未確認","Singapore求人の条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中。APAC営業基盤と強い開発カテゴリはあるが、日本専任体制と国内顧客事例は未確認。",
    signal: "SingaporeでMid-Market Account Executiveを公式募集し、APACの顧客接点を継続投資。",
    hurdle: "日本法人、東京拠点、日本担当求人、国内公開事例、日本語販売・支援体制を確認できない。",
    conditions: ["Singaporeから日本企業の有償需要と販売再現性を確認する。", "日本語の製品・契約・技術支援と国内販売パートナーを整える。", "国内事例と更新・拡大の採算が専任組織の固定費を上回る。"],
    watches: ["Japan・Tokyo求人", "日本法人・国内拠点", "国内顧客事例", "日本語製品・支援", "Singapore求人のJapan territory表記"],
  },
});
launchdarkly.sources.push({ id: "gbiz-headcount-launchdarkly", label: "gBizINFO LaunchDarkly法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt });
launchdarkly.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "LaunchDarklyと結びつく国内法人・事業所をgBizINFOで特定できず、日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-launchdarkly" };

export const daily20260911IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  tricentis,
  medallia,
  launchdarkly,
};
