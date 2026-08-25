import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-08-26";

export const companies20260826Daily: Company[] = [
  {
    slug: "behavox",
    name: "Behavox",
    category: "AIコンプライアンス・取引／コミュニケーション監視",
    broadCategory: "セキュリティ・IT運用",
    hq: "ロンドン（英国）",
    japanPresence: "東京オフィス、NRIとの国内導入連携、日本顧客事例、Tokyo求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "銀行・証券・資産運用会社向けに、コミュニケーション／取引監視、アーカイブ、統制を一つのAI基盤で提供。東京でenterprise導入を担うDelivery Managerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/behavox/jobs/7959497",
    tags: ["RegTech", "AI Controls", "Surveillance", "Financial Services", "Delivery", "Tokyo Hybrid"],
  },
  {
    slug: "chainguard",
    name: "Chainguard",
    category: "ソフトウェア供給網セキュリティ・安全なオープンソース",
    broadCategory: "セキュリティ・IT運用",
    hq: "ワシントン州カークランド（米国）",
    japanPresence: "日本法人・国内拠点・Japan求人を公式確認できず。SingaporeでEnterprise AEとSales Engineerを採用中",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "脆弱性を継続修正したproduction-readyなcontainer、VM、libraryを供給。SingaporeのGTM採用を、日本進出の成立条件を観測するAPACシグナルとして掲載。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/chainguard",
    tags: ["日本未進出", "Software Supply Chain", "Container Security", "Open Source", "APAC", "Singapore"],
    entryStatus: "not-entered",
  },
];

export const jobs20260826Daily: Job[] = [
  {
    id: "behavox-delivery-manager-3-tokyo-7959497",
    companySlug: "behavox",
    title: "Delivery Manager 3",
    segment: "Professional Services / Enterprise Delivery",
    location: "東京",
    workStyle: "Hybrid（東京オフィス週2日）",
    language: "日本語・英語要件は公式求人で明記なし",
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    source: { label: "Behavox Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/behavox/jobs/7959497" },
    descriptionSummary: "複数workstreamを含むenterprise導入で、schedule、Gantt、RAID log、scope、change、riskを管理し、time to first valueとrevenue recognitionへ接続する。",
    genbaTake: "project進行だけでなく、cloud-native architectureとdata integrationを理解し、複雑な金融機関導入を契約scope内で前進させるcustomer-facing delivery role。",
    compensationReality: "給与レンジ、bonus、equity額は未公開。competitive cash、equity award、家族を含むhealth insurance、年30日の休暇を記載。",
    desiredProfile: "enterprise delivery framework、cloud-native architecture、SMTP・SFTP等のdata integration、delivery economicsへの理解を求める。通常5年以上のdeliveryまたはproject management経験を想定。",
    careerInsights: {
      fit: "金融機関向けSaaS導入で、技術依存関係・契約scope・顧客価値・売上認識を一つのdelivery計画にまとめたい人に向く。",
      thingsToKnow: "日本team人数、同時案件数、顧客segment、reporting line、出張、評価KPI、給与、日本語・英語の実運用は未公開。面接で確認したい。",
      marketValue: "RegTech、enterprise SaaS delivery、cloud／data integration、risk・change management、financial services顧客対応を横断する実績。",
      tenureAndPromotion: "【Genba仮説】次のscopeは在籍年数より、複数workstreamを予定・scope・品質どおりに立ち上げ、time-to-valueを再現可能にした成果で決まる。支持材料: 公式求人は独立した判断、delivery consistency、revenue recognitionを重視。反証・留保: 日本teamの昇進・離職・level別在籍期間は非公開。面接で確認: 直近24カ月の昇進・異動・退職、次levelの定量基準は。",
      priorCompanies: "【Genba仮説】金融SI、Professional Services、RegTech、cloud／data integrationで複雑なenterprise導入を持った人が隣接する。支持材料: structured delivery、cloud-native、SMTP・SFTP、statement of workを必須文脈とする。反証・留保: 日本の同一roleの採用履歴は公開されていない。面接で確認: 直近採用者の前職categoryと標準ramp期間は。",
      nextCompanies: "【Genba仮説】規制業界の導入成果を数字で残せれば、Professional Services leadership、Customer Success leadership、Solution Delivery、APAC program leadershipへ接続しやすい。支持材料: enterprise project、stakeholder、delivery economicsを横断。反証・留保: 公開alumni分布ではなく職務構造からの仮説。面接で確認: alumniの次roleと社内異動例は。",
    },
  },
];
