import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-20";

export const companies20261020Daily: Company[] = [
  {
    slug: "wrike",
    name: "Wrike",
    category: "AI対応ワークマネジメント",
    broadCategory: "業務自動化・コラボレーション",
    hq: "カリフォルニア州サンディエゴ（米国）",
    japanPresence: "2019年にWrike Japanと東京・丸の内オフィスを開設。東京のPartner Account Manager求人1件を公式Greenhouseで確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "部門横断の仕事、進捗、承認、リソース、AIを一つの業務基盤で管理するワークマネジメント製品。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/wrike",
    tags: ["Work Management", "Partner Sales", "Enterprise", "AI", "Tokyo"],
  },
  {
    slug: "blackline",
    name: "BlackLine",
    category: "経理・決算オペレーション自動化",
    broadCategory: "経営管理・FinTech",
    hq: "カリフォルニア州ロサンゼルス（米国）",
    japanPresence: "ブラックライン株式会社は2018年8月設立、2019年1月営業開始。東京・赤坂の公式採用ページでAccount Executiveを確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "決算タスク、勘定照合、仕訳・取引照合、連結・内部統制を可視化・標準化・自動化する財務経理基盤。",
    lastChecked: checkedAt,
    careersUrl: "https://www.blackline.jp/careers/",
    tags: ["Financial Close", "Accounting Automation", "Enterprise Sales", "CFO", "Tokyo"],
  },
  {
    slug: "omni-analytics",
    name: "Omni",
    category: "AI対応BI・セマンティックレイヤー",
    broadCategory: "AI・データ基盤",
    hq: "カリフォルニア州サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点・日本在住求人・国内顧客事例は未確認。SydneyのAPAC事業開発・営業とSingapore初の現地営業求人を確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "企業ごとの指標定義と権限をセマンティックレイヤーで統一し、BI画面、表計算、生成AIから同じ文脈で分析できる基盤。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/omni",
    tags: ["日本未進出", "Business Intelligence", "Semantic Layer", "AI Analytics", "APAC"],
    entryStatus: "not-entered",
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、顧客の判断と導入を商談、利用、継続、事業成果へつなげたい人に向く。`,
      thingsToKnow: "目標、達成率、担当社数、案件期間、評価・昇進、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を案件創出、受注、更新、拡大、利用、顧客KPIで定量化できれば、隣接する海外テクノロジー企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客・組織成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "企業向けSaaS、ワークマネジメント、経理財務システム、パートナー営業の経験が隣接する。",
      nextCompanies: "担当市場と成果を数字で残せれば、上級企業営業、パートナー責任者、アカウント責任者、地域事業開発へ広げやすい。",
    },
  };
}

export const jobs20261020Daily: Job[] = [
  makeJob({
    id: "wrike-partner-account-manager-tokyo-4725613005",
    companySlug: "wrike",
    title: "Partner Account Manager",
    segment: "Japan Partner Sales・Channel Growth",
    location: "東京都",
    workStyle: "東京オフィスを拠点とする柔軟な勤務。固定出社日数は公式求人で明記なし",
    language: "日本語と英語。具体的な必須水準は選考で確認",
    source: { label: "Wrike Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/wrike/jobs/4725613005" },
    descriptionSummary: "日本の販売・導入パートナーと共同販売計画、案件創出、イネーブルメント、共同提案、売上予測を担う。",
    genbaTake: "パートナー数を増やすだけでなく、日本企業の業務設計にWrikeを組み込み、案件化から導入までの共同販売を作る役割。",
    desiredProfile: "B2B SaaSのチャネル・アライアンス、直販との共同商談、案件予測、パートナー育成の経験が隣接する。",
    compensationReality: "日本の給与、変動給、目標、達成率、パートナー由来売上の認定方法は公式求人で確認できない。",
  }),
  makeJob({
    id: "blackline-account-executive-japan-20261020",
    companySlug: "blackline",
    title: "Account Executive（エンタープライズ営業）",
    segment: "Japan Enterprise Finance Transformation Sales",
    location: "東京都港区・赤坂",
    workStyle: "東京オフィスを拠点とする正社員。在宅・出社条件は公式採用ページで明記なし",
    language: "日本語。英語の必須水準は公式採用ページで未確認",
    source: { label: "BlackLine Japan Careers", url: "https://www.blackline.jp/careers/" },
    descriptionSummary: "日本の大企業のCFO・経理財務部門に、決算、勘定照合、タスク、統制の標準化・自動化を提案する。",
    genbaTake: "会計システムの機能説明ではなく、決算短縮、統制強化、属人化解消、分析への人員シフトを経営課題として売る企業営業。",
    desiredProfile: "企業向けIT・SaaS、ERP・会計・経理財務、大規模組織の新規開拓、経営層・経理部門への課題提案経験が隣接する。",
    compensationReality: "公式採用ページに給与、OTE、Pay mix、目標、達成率、担当社数の記載はない。",
  }),
];
