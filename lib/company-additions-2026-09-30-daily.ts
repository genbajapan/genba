import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-30";

export const companies20260930Daily: Company[] = [
  {
    slug: "adjoe",
    name: "adjoe",
    category: "モバイルアプリ向け広告収益化・利用者獲得",
    broadCategory: "CRM・顧客体験",
    hq: "ハンブルク（ドイツ）",
    japanPresence: "東京オフィスと日本責任者を会社公式で確認。東京で日本担当のSupply Growth Managerを公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "報酬型ゲーム広告、広告配信、ロイヤルティ機能を通じて、アプリの利用継続、広告収益、利用者獲得を支援。東京でパブリッシャー担当を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://adjoe.io/careers/open-positions/30d19b10-25c8-47dd-a074-4d8b55eb0152/",
    tags: ["AdTech", "Mobile Apps", "Rewarded Advertising", "Publisher Growth", "Tokyo", "Japan"],
  },
  {
    slug: "securityscorecard",
    name: "SecurityScorecard",
    category: "サードパーティ・サプライチェーンのサイバーリスク管理",
    broadCategory: "セキュリティ・IT運用",
    hq: "ニューヨーク（米国）",
    japanPresence: "SecurityScorecard株式会社・東京。日本語サイト、国内事例、現行のCountry Manager求人を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "社外から観測できる信号で自社と取引先のサイバーリスクを継続評価し、改善、取締役会報告、第三者リスク管理を支援。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/securityscorecard/jobs/8167848",
    tags: ["Cybersecurity", "Third-Party Risk", "Security Ratings", "Country Manager", "Remote", "Japan"],
  },
  {
    slug: "pallet",
    name: "Pallet",
    category: "物流・サプライチェーン業務向けAIエージェント",
    broadCategory: "コマース・業界特化",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・東京オフィスは未確認。東京で最初の商用採用となるSales Directorを公式募集し、将来の東京オフィス開設を明記",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "物流・製造・流通の受注、書類、追跡、請求などの手作業を、既存システムに接続するAIエージェントで自動化。東京で市場立ち上げを募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/pallet/jobs/5186143007",
    tags: ["AI Agents", "Logistics", "Supply Chain", "Enterprise Sales", "Tokyo", "Pre-entry"],
    entryStatus: "pre-entry-signal",
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、顧客の業務指標と事業成果をつなぐ役割を持ちたい人に向く。`,
      thingsToKnow: "担当範囲、達成率、支援体制、評価・昇進、報酬の支給条件は、公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、更新、顧客KPIで定量化できれば、隣接する企業向けソフトウェア企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客成果、再利用できる市場開拓・顧客支援の型が次の役割の土台になる。",
      priorCompanies: "企業向けソフトウェア、対象業界、複数の意思決定者を動かす営業・顧客支援の経験が隣接する。",
      nextCompanies: "担当市場と成果を数字で残せれば、企業営業、地域リード、事業開発、顧客戦略へ広げやすい。",
    },
  };
}

export const jobs20260930Daily: Job[] = [
  makeJob({
    id: "adjoe-supply-growth-manager-japan-30d19b10",
    companySlug: "adjoe",
    title: "Supply Growth Manager - Japan",
    segment: "Publisher Growth / Mobile Advertising",
    location: "Tokyo",
    workStyle: "東京勤務。会社はハイブリッド制度を案内するが、具体的な出社日数は公式求人で未確認",
    language: "求人本文に言語要件の明記なし。日本のパートナー対応に必要な言語水準は選考で確認",
    source: { label: "adjoe Careers", url: "https://adjoe.io/careers/open-positions/30d19b10-25c8-47dd-a074-4d8b55eb0152/" },
    descriptionSummary: "日本のアプリ運営会社を担当し、広告収益、利用継続、ARPDAU等の指標を分析しながら、利用拡大、四半期レビュー、製品改善へのフィードバックを担う。",
    genbaTake: "広告枠の販売だけでなく、媒体側の収益・継続率・利用体験を同時に改善し、既存パートナーの拡張を作る顧客成長職。",
    compensationReality: "給与、変動給、株式、担当社数、売上目標、達成率は公式求人で未記載。",
    desiredProfile: "公式求人はAdTech・モバイル広告・デジタルマーケティング1年以上、アカウント成長、CPI・CPM・CTR・ARPDAU等の分析、四半期レビューを重視する。",
  }),
  makeJob({
    id: "securityscorecard-country-manager-japan-8167848",
    companySlug: "securityscorecard",
    title: "Country Manager, Japan",
    segment: "Country Leadership / Cybersecurity SaaS Sales",
    location: "Japan",
    workStyle: "Remote (Japan)。国内出張と定期的なAPAC・米国本社への出張を明記",
    language: "日本語は母語または同等、英語は業務水準を必須とする",
    source: { label: "SecurityScorecard Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/securityscorecard/jobs/8167848" },
    descriptionSummary: "日本の新規ARR、3〜4倍の商談量、金融・保険・公共を含む企業営業、販売パートナー開拓を持ち、将来の国内営業組織を採用・育成する。",
    genbaTake: "既存の日本法人と顧客基盤を引き継ぐだけでなく、数値目標を持つ個人営業から販売網・チーム・市場戦略まで再構築する国責任者。",
    compensationReality: "公式求人は年額総報酬23万〜27.5万米ドル（基本給と賞与）を掲載。株式対象の可能性はあるが、基本給・変動給の内訳、目標額、達成率は未記載。",
    desiredProfile: "公式求人は日本の企業向けSaaS営業7年以上、目標超過、金融・保険・公共を含む複雑な購買、サイバー・GRC・TPRM、販売パートナー構築を重視する。",
  }),
  makeJob({
    id: "pallet-sales-director-tokyo-5186143007",
    companySlug: "pallet",
    title: "Sales Director - Tokyo",
    segment: "Enterprise Sales / Logistics AI",
    location: "Tokyo",
    workStyle: "当初は東京からリモート。東京オフィス開設後は顧客訪問時を除き週5日出社。業務時間の約75%を顧客訪問・出張に使う想定",
    language: "求人本文に明示的な日本語・英語要件はない。日本顧客と米国本社をつなぐ実務水準は選考で確認",
    source: { label: "Pallet Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/pallet/jobs/5186143007" },
    descriptionSummary: "東京で最初の商用採用として、日本の大手物流企業を開拓し、業務発見、AI活用案、試行、投資対効果、企業契約までを一貫して担う。",
    genbaTake: "完成した日本組織で売る役割ではなく、物流業務を理解してAIエージェントの成果を証明し、国際展開の販売方法と東京拠点をゼロから作る役割。",
    compensationReality: "公式求人はOTE 2,100万〜5,000万円、基本給50%・目標コミッション50%、上限なしの加速報酬、株式を掲載。目標額、達成率、初年度保証は未記載。",
    desiredProfile: "公式求人は企業向けSaaSまたは物流営業8年以上、6〜7桁米ドル規模の契約、複雑な購買、価値提案、顧客訪問と市場立ち上げを重視する。",
  }),
];
