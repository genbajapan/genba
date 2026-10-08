import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-08";

export const companies20261008Daily: Company[] = [
  {
    slug: "babel-street",
    name: "Babel Street",
    category: "多言語リスク・IDインテリジェンス",
    broadCategory: "AI・データ基盤",
    hq: "レストン（米国）",
    japanPresence: "会社公式が日本での事業拠点を明記。日本を勤務地とする公式求人1件を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "公開情報と多言語データをAIで結び、本人確認、審査、脅威・取引先リスクの判断を支援。日本で営業開拓を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/babelstreet",
    tags: ["Risk Intelligence", "Identity", "OSINT", "AI", "Japan"],
  },
  {
    slug: "hudl",
    name: "Hudl",
    category: "スポーツ映像・データ分析",
    broadCategory: "コマース・業界特化",
    hq: "リンカーン（米国）",
    japanPresence: "Hudl Japan K.K.と渋谷オフィスを会社公式資料で確認。東京の公式求人1件を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "試合・練習の撮影、映像共有、分析、スカウティング、選手データを一つのスポーツ技術基盤で提供。東京で営業を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/hudl",
    tags: ["Sports Technology", "Video Analytics", "AI Camera", "Japan", "Tokyo"],
  },
  {
    slug: "claroty",
    name: "Claroty",
    category: "サイバーフィジカルシステム保護",
    broadCategory: "セキュリティ・IT運用",
    hq: "ニューヨーク（米国）",
    japanPresence: "日本を対象とするリモートの公式求人1件を確認。日本法人・国内常設拠点は未確認",
    hiringStatus: "継続観測",
    salesRoles: 1,
    description: "工場、医療機器、建物、公共インフラなどの接続資産を可視化し、脆弱性、接続、脅威を管理。日本向け営業開拓を採用。",
    lastChecked: checkedAt,
    careersUrl: "https://claroty.com/open-positions",
    tags: ["日本進出兆候", "OT Security", "IoMT", "Critical Infrastructure", "Remote"],
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
      fit: `${draft.segment}で、専門知識を顧客・組織の具体的な成果へ変えたい人に向く。`,
      thingsToKnow: "目標、達成率、担当範囲、国内支援体制、評価・昇進、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を商談、導入、運用、顧客KPIで定量化できれば、隣接する海外テクノロジー企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客・組織成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "企業向け営業、顧客支援、分析、複数の意思決定者を動かす業務の経験が隣接する。",
      nextCompanies: "担当市場と成果を数字で残せれば、企業営業、地域リード、顧客成功、専門領域の事業開発へ広げやすい。",
    },
  };
}

export const jobs20261008Daily: Job[] = [
  makeJob({
    id: "babel-street-sales-development-representative-japan-8239615",
    companySlug: "babel-street",
    title: "Sales Development Representative",
    segment: "Japan Risk Intelligence Sales Development",
    location: "Japan",
    workStyle: "日本を勤務地とするフルタイム。出社・リモート条件の詳細は公式求人で未確認",
    language: "日本語は業務上高度な水準、英語はビジネス水準",
    source: { label: "Babel Street Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/babelstreet/jobs/8239615" },
    descriptionSummary: "日本と一部APAC市場で対象企業・意思決定者を調べ、電話、メール、イベント、提携施策から見込み顧客を発掘し、商談へつなぐ。",
    genbaTake: "件数だけを追う営業開拓ではなく、多言語の本人確認、公開情報調査、脅威・取引先リスクを、行政・規制産業の具体的な判断へ翻訳する入口を作る役割。",
    desiredProfile: "企業向け営業開拓、CRM、アカウント調査、日英での対話が重要。行政、規制産業、サイバー、データ分析の経験が隣接する。",
    compensationReality: "公式求人は年収900万〜1,100万円を掲載。基本給・変動給の内訳、目標、達成率、株式、出張頻度は未確認。",
  }),
  makeJob({
    id: "hudl-account-executive-ii-tokyo-8108360",
    companySlug: "hudl",
    title: "Account Executive II",
    segment: "Japan Professional Sports Sales",
    location: "Tokyo",
    workStyle: "Hybrid。週3日東京オフィスへ出社",
    language: "日本語で国内顧客へ対応。英語は社内資料の理解と質問ができる業務水準",
    source: { label: "Hudl Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/hudl/jobs/8108360" },
    descriptionSummary: "国内のバスケットボール、バレーボール、野球を中心とするプロ組織へ、映像・データ分析の新規提案と既存顧客の拡大を担う。",
    genbaTake: "映像ソフトの販売ではなく、撮影、分析、スカウティングをコーチ・分析担当の試合準備と選手評価へ組み込み、競技成果につながる利用を広げる営業職。",
    desiredProfile: "顧客向け営業、スポーツと技術への関心、自律的な地域管理、月次の顧客訪問、日英での連携が重要。SaaSや技術提案の経験が隣接する。",
    compensationReality: "公式求人は基本給390万〜650万円、OTE780万〜1,300万円を掲載。目標、達成率、加速報酬、株式、担当チーム数は未確認。",
  }),
  makeJob({
    id: "claroty-sales-development-representative-japan-af-a6d",
    companySlug: "claroty",
    title: "Sales Development Representative",
    segment: "Japan Cyber-Physical Security Sales Development",
    location: "Japan",
    workStyle: "Remote。日本またはシンガポールを拠点にAPJを担当",
    language: "日本語は母語水準、英語は業務上流暢な水準",
    source: { label: "Claroty Careers", url: "https://claroty.com/open-positions/AF.A6D" },
    descriptionSummary: "日本を含むAPJで工場、医療、建物、公共部門の対象企業と意思決定者を調べ、営業・マーケティングと案件を作る。",
    genbaTake: "一般的なITセキュリティの接点作りではなく、止めにくい工場設備や医療機器の可視性・安全・事業継続を、現場、IT、セキュリティの共通課題へ変える営業開拓職。",
    desiredProfile: "営業開拓2年以上、企業向けSaaSまたはサイバー、日英、CRM、反論対応、自律的な見込み顧客開拓が重要。",
    compensationReality: "日本の給与、変動給、目標、達成率、株式、雇用主体、日本と他APJ市場の担当配分は公開情報で確認できない。",
  }),
];
