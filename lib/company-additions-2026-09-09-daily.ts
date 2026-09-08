import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-09";

export const companies20260909Daily: Company[] = [
  {
    slug: "suse",
    name: "SUSE",
    category: "エンタープライズLinux・Kubernetes・AI基盤",
    broadCategory: "AI・データ基盤",
    hq: "ルクセンブルク／ニュルンベルク（ドイツ）",
    japanPresence: "SUSEソフトウエアソリューションズジャパン株式会社・東京。gBizINFOの事業所被保険者数17人",
    hiringStatus: "積極採用",
    salesRoles: 4,
    description: "企業向けLinux、Kubernetes管理、コンテナセキュリティ、AI基盤を提供。東京で営業・技術営業・パートナーの4職種を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://suse.wd3.myworkdayjobs.com/jobsatsuse",
    tags: ["Open Source", "Linux", "Kubernetes", "AI Infrastructure", "Enterprise Sales", "Tokyo"],
  },
  {
    slug: "ninjaone",
    name: "NinjaOne",
    category: "統合エンドポイント管理・自動パッチ・バックアップ",
    broadCategory: "セキュリティ・IT運用",
    hq: "オースティン（米国）",
    japanPresence: "2026年6月に日本展開、9月にNinjaOne Japan合同会社の法人番号指定を確認。東京で日本担当Solutions Engineerを公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "端末管理、パッチ、バックアップ、遠隔支援を一つのクラウド基盤へ統合。東京で日本担当Solutions Engineerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.jobvite.com/ninjaone/jobs",
    tags: ["Endpoint Management", "IT Operations", "Patch Management", "Backup", "Solutions Engineering", "Tokyo"],
  },
  {
    slug: "hebbia",
    name: "Hebbia",
    category: "金融・法務向け文書分析AI",
    broadCategory: "AI・データ基盤",
    hq: "ニューヨーク（米国）",
    japanPresence: "Singapore拠点の初代APAC Sales Lead求人が日本を担当市場・出張先に明記。日本法人・国内常設拠点・日本求人は未確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "大量の金融・法務文書を根拠付きで比較・分析するAI。Singaporeから日本を含むAPAC市場を開拓する初代営業責任者を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/hebbia-ai",
    entryStatus: "not-entered",
    tags: ["日本未進出", "Enterprise AI", "Financial Services", "Legal", "Document Analysis", "APAC"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile"> & { compensationReality?: string };

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: draft.compensationReality ?? "公式求人に日本の給与、変動給、株式、目標、担当範囲の十分な記載はない。面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客課題を定量成果へ変え、複数の関係者を動かしたい人に向く。`,
      thingsToKnow: "目標、担当社数、達成率、支援体制、報酬構成は十分に公開されていない。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、顧客KPIで定量化できれば、隣接する企業向けソフトウェアの同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、目標責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職やより大きな顧客層へ広げやすい。",
    },
  };
}

export const jobs20260909Daily: Job[] = [
  makeJob({
    id: "suse-ae-telecom-gov-71007607", companySlug: "suse", title: "AE Telecom/Gov", segment: "Enterprise Sales / Telecom & Public Sector", location: "東京都", workStyle: "東京勤務。出社日数は公式求人で未確認", language: "日本語・英語の実務水準は面接で確認",
    source: { label: "SUSE Careers (Workday)", url: "https://suse.wd3.myworkdayjobs.com/Jobsatsuse/job/Tokyo-Japan/AE-Telecom-Gov_71007607-1" },
    descriptionSummary: "通信・公共領域の顧客課題を捉え、Linux、Kubernetes、エッジ、AI基盤を組み合わせた大型案件を進める。",
    genbaTake: "製品単体ではなく、主権、可用性、既存基盤との相互運用、長期サポートを調達理由へ変える業界担当営業。",
    desiredProfile: "公式求人は大企業向けソフトウェア営業、複雑商談、経営層、パートナーとの協業経験を重視する。",
  }),
  makeJob({
    id: "suse-senior-solution-architect-71007655", companySlug: "suse", title: "Senior Solution Architect", segment: "Solutions Architecture / Enterprise Open Source", location: "東京都", workStyle: "東京勤務。出社日数は公式求人で未確認", language: "日本語・英語の実務水準は面接で確認",
    source: { label: "SUSE Careers (Workday)", url: "https://suse.wd3.myworkdayjobs.com/Jobsatsuse/job/Tokyo-Japan/Senior-Solution-Architect_71007655-1" },
    descriptionSummary: "顧客のLinux、Kubernetes、セキュリティ、AI基盤の要件を整理し、技術検証と提案設計を支える。",
    genbaTake: "デモより、既存環境の制約、移行リスク、運用責任、ロックイン回避を技術的に反証する役割。",
    desiredProfile: "公式求人は企業向け基盤技術、技術提案、検証、顧客・営業との部門横断協業を重視する。",
  }),
  makeJob({
    id: "suse-territory-account-manager-71007795", companySlug: "suse", title: "Territory Account Manager", segment: "Territory Sales / New & Existing Business", location: "東京都", workStyle: "東京勤務。出社日数は公式求人で未確認", language: "日本語・英語の実務水準は面接で確認",
    source: { label: "SUSE Careers (Workday)", url: "https://suse.wd3.myworkdayjobs.com/Jobsatsuse/job/Tokyo-Japan/Territory-Account-Manager_71007795-1" },
    descriptionSummary: "担当領域の新規・既存顧客を持ち、経営層との関係、案件創出、提案、交渉、受注、顧客成功への引継ぎを担う。",
    genbaTake: "Linux更新だけでなく、クラウドネイティブ、エッジ、AI基盤へ案件を広げ、販売パートナーも含めて市場占有率を上げる営業。",
    desiredProfile: "公式求人は目標達成、複雑商談、経営層、CRM予測、MEDDPICC等の営業方法論、オープンソースへの理解を求める。",
  }),
  makeJob({
    id: "suse-partner-executive-71007611", companySlug: "suse", title: "Partner Executive", segment: "Partners & Alliances / Japan", location: "東京都", workStyle: "東京勤務。出社日数は公式求人で未確認", language: "日本語・英語の実務水準は面接で確認",
    source: { label: "SUSE Careers (Workday)", url: "https://suse.wd3.myworkdayjobs.com/Jobsatsuse/job/Tokyo-Japan/Partner-Executive_71007611-1" },
    descriptionSummary: "販売・技術パートナーとの共同計画、案件創出、育成、共同提案を進め、日本の販売網を拡大する。",
    genbaTake: "紹介件数ではなく、SUSEを既存のクラウド・SI・ハードウェア提案へ組み込み、共同受注を再現する販売網づくり。",
    desiredProfile: "公式求人は企業向けソフトウェアのパートナー営業、共同事業計画、案件管理、経営層との関係構築を重視する。",
  }),
  makeJob({
    id: "ninjaone-solutions-engineer-japan-oyjpafwq", companySlug: "ninjaone", title: "Solutions Engineer - Japan", segment: "Solutions Engineering / Unified IT Operations", location: "東京都", workStyle: "Hybrid / Remote。東京勤務と公式求人に記載", language: "日本語ネイティブ、英語ビジネス水準を求める",
    source: { label: "NinjaOne Careers (Jobvite)", url: "https://jobs.jobvite.com/ninjaone/job/oYJpAfwq" },
    descriptionSummary: "日本の大企業・中堅企業向けに、要件整理、デモ、構成設計、技術検証、導入計画まで技術営業工程を担う。",
    genbaTake: "端末管理製品のデモに留まらず、分散した管理・パッチ・バックアップ・遠隔支援を一つの運用成果へ統合する技術営業。",
    desiredProfile: "公式求人は技術営業・技術コンサルティング等5年以上、Windows、LinuxまたはmacOS、ネットワーク、端末管理・RMM・ITSMの知識を重視する。",
    compensationReality: "公式求人は日本向けOTEレンジを掲載するが桁区切りが曖昧な表記のため、基本給・変動給の内訳と正確な金額を面接で確認したい。",
  }),
];
