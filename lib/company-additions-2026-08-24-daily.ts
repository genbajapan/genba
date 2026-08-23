import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-08-24";

export const companies20260824Daily: Company[] = [
  {
    slug: "datasnipper",
    name: "DataSnipper",
    category: "監査・財務向けAIエージェント・証憑照合",
    broadCategory: "業務自動化・コラボレーション",
    hq: "アムステルダム（オランダ）",
    japanPresence: "渋谷ヒカリエの東京officeと日本向け初期営業求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "監査・財務の証憑抽出、突合、検証をExcel中心のAI workflowで自動化するplatform。日本で最初期のAccount Executiveとして市場開拓とEnterprise受注を担う人材を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/datasnipper/3adf1eee-09c2-4187-837b-0579591afe3a",
    tags: ["Audit AI", "Finance Automation", "Excel", "Enterprise Sales", "Japan Launch", "Hybrid"],
  },
  {
    slug: "runway",
    name: "Runway",
    category: "生成AI動画・映像制作・世界モデル",
    broadCategory: "AI・データ基盤",
    hq: "ニューヨーク（米国）",
    japanPresence: "日本市場立ち上げを担うGeneral Manager求人を確認（日本法人・常設officeは未確認）",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "映像・広告・media制作向けの生成AI modelとcreative workflowを提供。日本でGTM、Enterprise partnership、初期顧客、local teamを一から作るGeneral Managerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/runway-ml/5d5a91ae-b091-425c-96b5-2d4a88d0c796",
    tags: ["日本未進出", "Generative Video", "Creative AI", "Enterprise", "Country Launch", "Japan"],
    entryStatus: "pre-entry-signal",
  },
];

function careerInsights(domain: string, roleEvidence: string, marketValue: string): Job["careerInsights"] {
  return {
    fit: `${domain}を機能説明で終わらせず、顧客の業務KPIと導入・定着へ変えたい人に向く。`,
    thingsToKnow: "日本のbase、OTE、quota、担当社数、達成率、ramp、昇進・離職の集計は公式求人で確認できない。配属先の分母と期間を面接で確認したい。",
    marketValue,
    tenureAndPromotion: `【Genba仮説】次のscopeは在籍年数より、${roleEvidence}を定量成果として再現できるかで決まる。支持材料: 公式求人は顧客成果、部門横断の実行、継続的な学習と目標責任を求める。反証・留保: 日本teamの昇進率・離職率、level別の標準在籍期間、評価分布は未公開。面接で確認: 直近24カ月の昇進・異動・退職の分母、次levelへ進んだ人の共通成果、performance reviewの周期は。`,
    priorCompanies: `【Genba仮説】${domain}に近い顧客課題、複数stakeholder、目標責任を持ち、複雑な案件を社内専門家と進めた人が隣接する。支持材料: 公式求人はrole固有のdomain、顧客折衝、部門横断の実行、成果責任を要件にする。反証・留保: 日本の同一roleを十分な件数で集計できず、特定社からの採用傾向は断定しない。面接で確認: 直近採用者の前職category上位3つ、標準ramp期間は。`,
    nextCompanies: `【Genba仮説】${marketValue}を数字と具体例で残せれば、隣接するEnterprise SaaSの専門職、上位segment、leadershipへ接続しやすい。支持材料: 公式求人が顧客成果、複数stakeholder、社内外の協働、目標ownershipを求める。反証・留保: 公開された日本在籍者の転職先分布ではなく、職務構造からの仮説。面接で確認: alumniの次role category、社内異動例、次の職位で必要な定量成果は。`,
  };
}

export const jobs20260824Daily: Job[] = [
  {
    id: "datasnipper-sales-account-executive-japan-3adf1eee",
    companySlug: "datasnipper",
    title: "Sales Account Executive",
    segment: "Enterprise / Japan Launch",
    location: "日本",
    workStyle: "Hybrid、Full-time",
    language: "日本語native、英語professional proficiency必須",
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    source: { label: "DataSnipper Careers (Ashby)", url: "https://jobs.ashbyhq.com/datasnipper/3adf1eee-09c2-4187-837b-0579591afe3a" },
    descriptionSummary: "日本の最初期AEとしてprospecting、discovery、demo、proposal、negotiation、closeを担い、BDRと共に市場playbookとEnterprise顧客基盤を作る。",
    genbaTake: "audit・financeのmanualな証憑照合を、Excelに残したtraceabilityとAI agentで置き換える投資理由をCFO、監査法人、内部監査へ翻訳する市場立ち上げrole。",
    compensationReality: "報酬packageへの一般的言及はあるが、日本のbase、OTE、pay mix、quota、accelerator、ramp保証は公式求人で確認できない。",
    desiredProfile: "日本でのB2B SaaS営業3年以上、new business、full-cycle sales、executive communication、日本語native、英語professional proficiencyを求める。",
    careerInsights: careerInsights("監査AI・Finance Automation・Enterprise Sales", "初期pipeline、full-cycle close、日本playbook構築", "audit・finance buyer、AI governance、Enterprise SaaS、日本launchを横断する実績"),
  },
  {
    id: "runway-general-manager-japan-5d5a91ae",
    companySlug: "runway",
    title: "General Manager, Japan",
    segment: "Country Leadership / Enterprise GTM",
    location: "日本",
    workStyle: "Full-time（Tokyo拠点化の可能性を求人に記載）",
    language: "日本語native、英語professional proficiency必須",
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    source: { label: "Runway Careers (Ashby)", url: "https://jobs.ashbyhq.com/runway-ml/5d5a91ae-b091-425c-96b5-2d4a88d0c796" },
    descriptionSummary: "日本のGTM戦略、Enterprise partnership、初期顧客との関係を作り、将来のAE、Growth、Deploymentを含むlocal teamとofficeを立ち上げる。",
    genbaTake: "生成動画のtool販売ではなく、media、広告、brand、technology企業の制作工程、権利・安全管理、model活用を日本の商流へ組み込むcountry build role。",
    compensationReality: "日本のbase、bonus、equity、売上目標、採用budget、P&L権限は公式求人で確認できない。",
    desiredProfile: "日本のmedia・entertainment・advertising・brand・technology ecosystemで7年以上のGTMまたはbusiness development、日本語native、英語professional proficiencyを求める。",
    careerInsights: careerInsights("生成AI動画・Country Leadership", "GTM設計、Enterprise partnership、初期顧客、local team build", "creative AI、media ecosystem、country launch、global-to-local経営を横断する実績"),
  },
];
