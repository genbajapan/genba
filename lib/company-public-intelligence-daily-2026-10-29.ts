import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-29";

const optro = buildDailyCompanyIntelligence({
  slug: "optro", name: "Optro", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/optro/79f39121-fb47-4448-b666-785de56ece4b", officialUrl: "https://optro.ai/",
  customersUrl: "https://optro.ai/customer-success", financeUrl: "https://optro.ai/ai-info-for-llms",
  problem: "監査、SOX統制、リスク、セキュリティ、規制対応が部門と表計算に分散すると、同じ証跡を繰り返し集め、変化したリスクの影響範囲を追うのに時間がかかる。",
  origin: "元内部監査実務者が手作業のSOX統制管理を変えるため、2014年にSOXHUBとして創業。2017年にAuditBoard、2026年3月にOptroへ改名した。",
  externalNeed: "AI利用、委託先、セキュリティ脅威、規制が同時に増えるなか、企業は年一回の証跡確認ではなく、誰がどの統制に責任を持ち、何が変わったかを継続的に追跡する必要がある。",
  solution: "監査、統制、全社リスク、サイバーリスク、第三者リスク、AI統制のデータと業務を一つの基盤に置き、証跡収集、統制テスト、映射、問題起票を人が承認できるAIエージェントで進める。",
  selection: "単なる記録庫ではなく、リスク、統制、ポリシー、証跡、担当者を同じデータ中核でつなぎ、200以上の連携と権限・監査証跡を保ったまま実行まで自動化できるかで比較する。",
  growth: "公式求人はARR 3億ドル超と継続成長、公式Careerは顧客2,600社超、従業員900人超、Fortune 500の50%超を掲載。Hgが2024年に買収し、2026年にAuditBoardからOptroへ改名した。",
  role: "日本のEnterprise Account ExecutiveとRegional Alliance Managerが、大企業の新規・拡大営業と、Big 4・販売パートナーを通じた案件創出を分担する。",
  organization: "公式求人は『成長中のJapan team』と日本在住のリモート勤務を記載。日本法人、常設拠点、雇用主体、日本の正確な人数は公開情報で未確認。",
  career: "GRCの専門課題を日本企業の稟議、調達、法務、経営説明へ変換し、新規営業とパートナー生態系を立ち上げる経験。",
  globalHeadcount: "900人超（会社公式Career）", japanPresence: "日本法人・国内常設拠点は未確認。日本在住の公式求人2件", japanSince: "未進出・日本GTM採用を確認",
  customer: { company: "PetSmart", outcome: "監査・SOX・ERMを一つの基盤で運用し、3年の投資に対する577% ROI、25万ドル以上のコスト回避、リスク評価対象を65人から193人へ拡大したと会社事例で紹介。" },
  facts: [["創業","2014年","元内部監査実務者がSOXHUBとして創業。"],["顧客","2,600社超","会社公式Career。"],["ARR","3億ドル超","現行公式求人。"],["従業員","900人超","会社公式Career。"],["日本法人","未確認","国内常設拠点・雇用主体も未確認。"],["日本求人","2件","Enterprise Account ExecutiveとRegional Alliance Manager。"]],
  products: [["Optro GRC Intelligence Platform","監査、統制、リスク、セキュリティ、規制対応のデータと実行を統合。","https://optro.ai/platform"],["Autonomous Testing","証跡収集と統制テストをAIで継続的に実行。","https://optro.ai/products/autonomous-testing"],["AI Governance","企業内のAI利用、リスク、責任、規制対応を管理。","https://optro.ai/products/ai-governance"]],
  competitors: "Archer、ServiceNow GRC、Diligent、Workiva、監査法人・表計算・内製",
  leader: ["Raul Villar Jr.","Chief Executive Officer","https://optro.ai/about-us"], local: ["未確認","日本事業責任者","https://jobs.ashbyhq.com/optro"],
  work: ["フルリモート","日本在住のリモート","固定出社日の明記なし","公式求人はRemote","顧客・パートナーとの対面会議あり。雇用主体と国内福利厚生は選考で確認"],
  preEntry: {
    verdict: "日本進出の具体的な兆しあり。日本の営業・パートナー職2件とJapan teamの記載は強いが、日本法人、常設拠点、雇用主体は未確認。",
    signal: "Enterprise Account ExecutiveとRegional Alliance Managerを日本在住・リモートで公式募集。日本の大企業とBig 4・販売パートナーを明記。",
    hurdle: "日本法人、常設拠点、雇用主体、日本の正確なチーム人数、国内実名導入事例、日本語の常設支援体制を確認できない。",
    conditions: ["日本企業でGRCの新規受注と利用・更新を再現する。","Big 4・販売パートナーから継続的な案件創出を作る。","日本語の製品、契約、導入、障害・問い合わせ支援を定常化する。","雇用・契約・請求の責任主体を公開情報で確認できる状態にする。","国内の実名導入事例と定量成果を公開する。"],
    watches: ["日本法人・法人番号","東京等の常設拠点","日本事業責任者","国内実名導入事例","日本語製品・支援","日本の追加営業・技術・導入求人"],
  },
}, checkedAt);

const ids = (suffix: string) => `optro-${suffix}`;
optro.sources.push(
  { id: ids("about"), label: "Optro About", url: "https://optro.ai/about-us", kind: "企業公式", scope: "事業・経営陣・会社所在地", checkedAt },
  { id: ids("ai-info"), label: "Optro AI information", url: "https://optro.ai/ai-info-for-llms", kind: "企業公式", scope: "沿革・製品・AI・連携・信頼・成果", checkedAt },
  { id: ids("career"), label: "Optro Careers", url: "https://optro.ai/careers", kind: "企業公式", scope: "顧客・従業員規模・価値観", checkedAt },
  { id: ids("ae"), label: "Enterprise Account Executive (Japan)", url: "https://jobs.ashbyhq.com/optro/79f39121-fb47-4448-b666-785de56ece4b", kind: "企業公式", scope: "現行日本求人・責任・要件・勤務形態", checkedAt },
  { id: ids("alliances"), label: "Regional Alliance Manager (Japan)", url: "https://jobs.ashbyhq.com/optro/cecd6175-00c2-4403-88c4-828d073d93b5", kind: "企業公式", scope: "現行日本求人・パートナー責任・要件", checkedAt },
  { id: ids("petsmart"), label: "PetSmart customer story", url: "https://optro.ai/blog/petsmart-audit-success-story", kind: "企業公式", scope: "海外顧客の導入目的・成果", checkedAt },
  { id: ids("gbiz"), label: "gBizINFO Optro法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
optro.companyStats.japanOffice = { value: "常設拠点未確認", detail: "日本在住の公式求人2件はあるが、日本法人・常設拠点は公開情報で特定できない。", sourceId: ids("gbiz") };
optro.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本法人・事業所を特定できず、日本の想定従業員数を0人とは扱わない。", sourceId: ids("gbiz") };
if (optro.salesMarketOutlook) optro.salesMarketOutlook.cases = [{ company: "PetSmart（海外事例）", need: "監査・SOX・ERMの分断と手作業を統合。3年の577% ROIと25万ドル以上のコスト回避はOptro公式事例の顧客公表値で、他社の成果を保証しない。", sourceId: ids("petsmart") }];
if (optro.marketStatus.japanGrowth) {
  optro.marketStatus.japanGrowth.headline = "日本の営業・パートナー職2件を確認。日本法人・常設拠点は未確認";
  optro.marketStatus.japanGrowth.narrative = "大企業の直販とBig 4・販売パートナーの両方を日本で採用。一方、法人、常設拠点、雇用主体、国内導入事例、日本語の常設支援は未確認。";
  optro.marketStatus.japanGrowth.entryAssessment = {
    verdict: "日本進出の具体的な兆しあり。公式求人2件は強いが、法人・拠点・雇用主体は未確認。",
    factSignals: [
      { title: "日本Enterprise営業", body: "日本在住のEnterprise Account Executiveが日本の大企業の新規開拓・拡大と複雑な購買手続を担う。", sourceIds: [ids("ae")] },
      { title: "日本パートナー開拓", body: "Regional Alliance ManagerがBig 4、アドバイザリー、販売会社、ディストリビューターの案件創出と売上を担う。", sourceIds: [ids("alliances")] },
      { title: "グローバル事業基盤", body: "公式にARR 3億ドル超、顧客2,600社超、従業員900人超、Fortune 500の50%超を掲載。", sourceIds: [ids("career"), ids("ae")] },
      { title: "日本規制との接点", body: "製品はJ-SOXを含む30以上の枠組みと、200以上の企業システム連携を公式に記載。", sourceIds: [ids("ai-info")] },
    ],
    hurdles: [
      { title: "法人・拠点・雇用主体", body: "日本法人と常設拠点を特定できず、労務、契約、請求、国内福利厚生の責任主体は未確認。", sourceIds: [ids("gbiz"), ids("ae")] },
      { title: "国内顧客証拠", body: "公式サイトで日本企業の実名・定量導入事例を確認できず、日本での稼働・更新・拡大の再現性は未検証。", sourceIds: [ids("customers")] },
      { title: "日本語の導入・支援", body: "日本語UI、契約、導入、障害・サポートの常設体制は未確認。企業統制では言語と責任主体が導入審査を左右する。", sourceIds: [ids("company"), ids("ae")] },
      { title: "成熟競合と置換負担", body: "Archer、ServiceNow、Diligent、Workiva、監査法人、表計算・内製の既存工程から、過去証跡、権限、統制所有者を移す必要がある。", sourceIds: [ids("ai-info"), ids("ae")] },
    ],
    readinessConditions: [
      { title: "国内新規受注の再現", body: "日本企業で直販パイプライン、受注、導入、更新・拡大を複数社で再現する。" },
      { title: "パートナー起点の案件", body: "Big 4、アドバイザリー、販売会社が日本企業の統制変革にOptroを組み込むパイプラインを作る。" },
      { title: "導入・支援の日本語化", body: "製品、契約、導入、障害対応、トレーニングを日本語で継続提供できる体制を整える。" },
      { title: "契約・雇用・請求主体", body: "日本の顧客と従業員が、契約、請求、雇用、個人情報の責任主体を確認できる状態にする。" },
      { title: "国内の実名成果", body: "J-SOX、監査、サイバーリスク、AI統制の日本事例で、作業時間、統制カバレッジ、問題対応の定量成果を示す。" },
    ],
    watchSignals: ["日本法人・法人番号","東京等の常設拠点","日本事業責任者・追加人員","日本企業の実名・定量事例","日本語製品・契約・支援","日本の技術営業・導入・Customer Success求人"],
  };
}

export function applyDaily20261029Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug["kraken-technologies"];
  if (!intelligence) return;
  const sourceId = "kraken-mid-backend-engineer-closure-20261029";
  const label = "Mid-level Software Engineer (Backend - Python/Django)求人終了";
  if (!intelligence.sources.some((source) => source.id === sourceId)) {
    intelligence.sources.push({ id: sourceId, label: `${label}（公式求人）`, url: "https://jobs.ashbyhq.com/krakentech/ebceacfe-b47a-43bf-b963-06be91b2adb0", kind: "企業公式", scope: "旧公式URLの404とAshby公式一覧からの消失を確認", checkedAt });
  }
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => item.label !== label),
    { year: "2026.10.29", label, detail: "旧公式求人URLが404を返し、Kraken Technologiesの公式Ashby一覧にも当該職を確認できなかったため掲載から除外。これだけで日本事業の縮小を意味しない。", sourceId },
  ];
}

export const daily20261029IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { optro };
