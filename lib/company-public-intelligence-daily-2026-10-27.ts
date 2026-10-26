import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";
import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";

const checkedAt = "2026-10-27";

const hootsuite = buildDailyCompanyIntelligence({
  slug: "hootsuite", name: "Hootsuite", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/hootsuite/jobs/8312189", officialUrl: "https://www.hootsuite.com/",
  customersUrl: "https://www.hootsuite.com/customers", financeUrl: "https://www.hootsuite.com/about",
  problem: "企業のSNS運用がチャネル、国、部門ごとに分かれると、コンテンツ、承認、顧客対応、リスニング、効果測定が断片化し、ブランドと売上への寄与を説明しにくい。",
  origin: "2008年、バンクーバーのデジタルマーケティング会社Invoke Mediaが、複数のSNSアカウントを一画面で管理できるツールを見つけられず、自社用に作ったことから始まった。",
  externalNeed: "SNSが広告、販売、顧客対応、危機管理の共通接点になり、生成AIで発信量も増えるほど、企業は速度だけでなく承認、権限、一貫性、顧客の声、事業成果を同じ運用で管理する必要がある。",
  solution: "複数SNSの作成・承認・予約・分析、ソーシャルリスニング、従業員による発信、ソーシャル上の顧客対応を一つの基盤で運用する。",
  selection: "Sprout Social、Buffer、Sprinklr、Salesforceの顧客対応基盤、各SNSの標準機能、広告代理店・内製と比べ、対応SNS、承認と権限、リスニング、顧客対応、データ保存、分析、運用工数、費用を同じ用途で比較する。",
  growth: "会社公式は、2008年の創業、企業顧客6,000社以上、利用者20万人以上、200カ国以上での利用を掲載する。",
  role: "東京のSenior Account ManagerがEmerging Marketsの既存顧客を担当し、更新、解約リスク対応、追加販売、幹部関係、予測を担う。",
  organization: "公式求人で東京オフィスとその通勤圏を確認。日本法人名、所在地、国内の正確な在籍人数は未確認。",
  career: "ソーシャルメディの運用データを、解約防止、部門展開、幹部合意、売上予測へ結び、更新と拡張を両方持つ経験。",
  globalHeadcount: "1,001〜5,000人規模（LinkedIn企業ページの公開レンジ）", japanPresence: "東京オフィスの通勤圏を条件とする求人1件。日本法人名と国内人数は未確認", japanSince: "未確認",
  customer: { company: "DaVita（海外事例）", outcome: "従業員による承認済みコンテンツの発信により、広告価値換算で150万ドル相当を節減したと会社公式で紹介。日本企業の実名・定量事例は今回未確認。" },
  facts: [["創業","2008年","カナダ・バンクーバー。"],["企業顧客","6,000社以上","会社公式About。"],["利用者","20万人以上","会社公式About。"],["利用地域","200カ国以上","会社公式。"],["日本拠点","東京オフィス","公式求人で確認。日本法人名と所在地は未確認。"],["日本求人","1件","Senior Account Manager。"]],
  products: [["Hootsuite","SNSの作成、承認、予約、分析、エンゲージメントを統合。","https://www.hootsuite.com/products"],["Hootsuite Listening","SNS上の会話、トレンド、競合、ブランドリスクを把握。","https://www.hootsuite.com/products/listening"],["Amplify","従業員が承認済み情報を発信する運用を管理。","https://www.hootsuite.com/products/amplify"]],
  competitors: "Sprout Social、Buffer、Sprinklr、Salesforceの顧客対応基盤、各SNSの標準機能、広告代理店・内製",
  leader: ["Ryan Holmes","CEO and Founder","https://www.hootsuite.com/about/leadership"], local: ["未確認","日本事業責任者","https://job-boards.greenhouse.io/hootsuite"],
  work: ["ハイブリッド","東京","固定出社日数は未確認","東京オフィスの通勤圏内が条件","担当社数、顧客訪問、出張、目標、達成率を選考で確認"],
}, checkedAt);

hootsuite.sources.push(
  { id: "hootsuite-about", label: "Hootsuite About", url: "https://www.hootsuite.com/about", kind: "企業公式", scope: "創業・顧客・利用者・製品・創業ストーリー", checkedAt },
  { id: "hootsuite-leadership", label: "Hootsuite Leadership", url: "https://www.hootsuite.com/about/leadership", kind: "企業公式", scope: "経営陣・CEO復帰", checkedAt },
  { id: "hootsuite-customers", label: "Hootsuite customer stories", url: "https://www.hootsuite.com/customers", kind: "企業公式", scope: "導入事例・成果", checkedAt },
  { id: "hootsuite-job", label: "Senior Account Manager (Japanese/English)", url: "https://job-boards.greenhouse.io/hootsuite/jobs/8312189", kind: "企業公式", scope: "現行求人・東京拠点・職務・要件", checkedAt },
  { id: "gbiz-headcount-hootsuite", label: "gBizINFO Hootsuite法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
  { id: "linkedin-headcount-hootsuite", label: "LinkedIn Hootsuite company page", url: "https://www.linkedin.com/company/hootsuite/", kind: "外部集計", scope: "グローバル会社規模レンジ", checkedAt },
);
hootsuite.companyStats.japanOffice = { value: "東京", detail: "公式求人でTokyo officeの通勤圏内を条件として確認。所在地は未確認。", sourceId: "hootsuite-job" };
hootsuite.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "東京オフィスは確認したが、日本法人と事業所人数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-hootsuite" };
if (hootsuite.salesMarketOutlook) hootsuite.salesMarketOutlook.cases = [{ company: "DaVita（海外事例）", need: "承認済み情報を従業員が発信する仕組みで、広告価値換算150万ドル相当を節減。日本企業の実名・定量事例は今回未確認。", sourceId: "hootsuite-customers" }];

export const daily20261027IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { hootsuite };
