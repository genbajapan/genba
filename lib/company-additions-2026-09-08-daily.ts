import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-08";

export const companies20260908Daily: Company[] = [
  {
    slug: "darktrace",
    name: "Darktrace",
    category: "AIサイバーセキュリティ・脅威検知と自律対応",
    broadCategory: "セキュリティ・IT運用",
    hq: "ケンブリッジ（英国）",
    japanPresence: "ダークトレース・ジャパン株式会社・東京事業所。gBizINFOの事業所被保険者数43人",
    hiringStatus: "積極採用",
    salesRoles: 3,
    description: "組織ごとの通常の挙動をAIが学習し、ネットワーク、メール、クラウドの未知の脅威を検知・対応。東京で営業3職種を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://darktrace.wd3.myworkdayjobs.com/DarktaceExternal",
    tags: ["Cybersecurity", "AI", "NDR", "Enterprise Sales", "Tokyo"],
  },
  {
    slug: "meltwater",
    name: "Meltwater",
    category: "メディアインテリジェンス・ソーシャルリスニング",
    broadCategory: "CRM・顧客体験",
    hq: "サンフランシスコ（米国）",
    japanPresence: "Meltwater Japan株式会社・東京都渋谷区恵比寿。gBizINFOの事業所被保険者数63人",
    hiringStatus: "採用中",
    salesRoles: 2,
    description: "ニュース、SNS、消費者の反応を収集・分析し、広報・マーケティングの判断に変える。東京で新規営業と大手顧客成功を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://meltwatercareers.ttcportals.com/search/jobs/in/tokyo-japan",
    tags: ["Media Intelligence", "Social Listening", "Sales", "Customer Success", "Tokyo"],
  },
  {
    slug: "teamworks",
    name: "Teamworks",
    category: "スポーツ組織運営・選手パフォーマンス基盤",
    broadCategory: "コマース・業界特化",
    hq: "ダーラム（米国）",
    japanPresence: "2026年4月に日本向け初イベントを開催し市場活動を開始。日本法人・国内常設拠点は未確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "チーム連絡、選手管理、スカウト、コンディションをつなぐスポーツ特化基盤。日本からリモートで働く顧客成功を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/teamworks",
    entryStatus: "pre-entry-signal",
    tags: ["SportsTech", "SaaS", "Customer Success", "Remote", "Pre-entry signal"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: "公式求人で明記された場合を除き、給与、変動給、株式、目標、担当範囲は未確認。面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客の課題を定量成果へ変え、複数の関係者を動かしたい人に向く。`,
      thingsToKnow: "目標、担当社数、達成率、支援体制、報酬構成は十分に公開されていない。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、顧客KPIで定量化できれば、隣接する企業向けソフトウェアの同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、目標責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職やより大きな顧客層へ広げやすい。",
    },
  };
}

export const jobs20260908Daily: Job[] = [
  makeJob({
    id: "darktrace-senior-sdr-jr101738", companySlug: "darktrace", title: "Senior Sales Development Representative", segment: "Sales Development / New Business", location: "東京都", workStyle: "東京オフィス勤務", language: "日本語ビジネスレベル必須。英語は歓迎",
    source: { label: "Darktrace Careers (Workday)", url: "https://darktrace.wd3.myworkdayjobs.com/en-US/DarktaceExternal/job/Tokyo-Office-Japan/Senior-Sales-Development-Representative_JR101738" },
    descriptionSummary: "日本の新規市場で意思決定者を特定し、架電、イベント、調査から商談機会を作る。",
    genbaTake: "件数だけでなく、未知の脅威と運用負荷を経営層が判断できる課題に変える新規開拓。",
    desiredProfile: "公式求人は日本市場のBDR・SDR経験、実績、目標達成への自律性を重視する。",
  }),
  makeJob({
    id: "darktrace-senior-account-executive-jr101931", companySlug: "darktrace", title: "Senior Account Executive", segment: "Enterprise Sales / Cybersecurity", location: "東京都", workStyle: "東京オフィス勤務", language: "日本語での複雑商談。英語は歓迎",
    source: { label: "Darktrace Careers (Workday)", url: "https://darktrace.wd3.myworkdayjobs.com/en-US/DarktaceExternal/job/Tokyo-Office-Japan/Senior-Account-Executive_JR101931" },
    descriptionSummary: "新規顧客、戦略顧客の拡大、更新を含む営業工程を持ち、CISO・CIOと大型案件を進める。",
    genbaTake: "AI製品の説明ではなく、検知、対応時間、アナリスト負荷、事業継続をPOVで反証できる価値提案営業。",
    desiredProfile: "公式求人は5年以上の複雑なB2B営業、大型案件、経営層、MEDDPICC等の方法論を重視する。",
  }),
  makeJob({
    id: "darktrace-sales-director-jr101942", companySlug: "darktrace", title: "Sales Director", segment: "Enterprise Sales Leadership / Japan", location: "東京都", workStyle: "東京拠点に週3日以上出社", language: "英語ビジネスレベルを歓迎。日本での営業組織構築経験を重視",
    source: { label: "Darktrace Careers (Workday)", url: "https://darktrace.wd3.myworkdayjobs.com/en-US/DarktaceExternal/job/Tokyo-Office-Japan/Sales-Director_JR101942" },
    descriptionSummary: "日本の大企業営業チームを率い、直販とパートナーの両方で新規・拡大・更新の再現性を作る。",
    genbaTake: "自分で大型案件を動かしつつ、予測、商談量、コーチング、販売網をチームの型にする日本営業責任者。",
    desiredProfile: "公式求人は5年以上の大企業営業チーム統括、大型受注、チャネル、予測管理の実績を求める。",
  }),
  makeJob({
    id: "meltwater-sales-consultant-japan-18088628", companySlug: "meltwater", title: "Sales Consultant, JAPAN", segment: "SMB Sales / New Business", location: "東京都渋谷区恵比寿", workStyle: "ハイブリッド。週3日オフィス勤務", language: "日本語・英語の読み書きと会話",
    source: { label: "Meltwater Careers", url: "https://meltwatercareers.ttcportals.com/jobs/18088628-sales-consultant-japan" },
    descriptionSummary: "中小企業の新規顧客を開拓し、課題発見、提案、デモ、交渉、契約までの全工程を担う。",
    genbaTake: "メディアの件数を売るのではなく、広報・マーケティングの判断速度と顧客理解を予算化する360度型新規営業。",
    desiredProfile: "公式求人はB2B新規営業1年以上、目標達成、交渉、自律的な接点作りを求める。",
  }),
  makeJob({
    id: "meltwater-enterprise-client-success-executive-japan-18015854", companySlug: "meltwater", title: "Enterprise Client Success Executive, JAPAN", segment: "Enterprise Customer Success / Renewal & Expansion", location: "東京都渋谷区恵比寿", workStyle: "ハイブリッド。週3日オフィス勤務", language: "日本語・英語の読み書きと会話",
    source: { label: "Meltwater Careers", url: "https://meltwatercareers.ttcportals.com/jobs/18015854-enterprise-client-success-executive-japan" },
    descriptionSummary: "大手顧客のKPIと共同計画を管理し、利用、更新、解約リスク、拡大を部門横断で動かす。",
    genbaTake: "操作支援より、広報・マーケティングKPIに対する利用成果を作り、更新と拡大の根拠にする顧客成功。",
    desiredProfile: "公式求人は7〜10年以上のコンサルティング・顧客成功・アカウント経験と、複雑な顧客管理を重視する。",
  }),
  makeJob({
    id: "teamworks-customer-success-manager-ii-japan-63c7c86c", companySlug: "teamworks", title: "Customer Success Manager II (Japan)", segment: "Customer Success / Japan Market Build", location: "日本", workStyle: "リモート。国内顧客への出張あり", language: "日本語ネイティブレベル、英語で業務可能",
    source: { label: "Teamworks Careers (Ashby)", url: "https://jobs.ashbyhq.com/teamworks/63c7c86c-8e0e-43e0-a015-c8dde03a07ff" },
    descriptionSummary: "日本のプロスポーツ組織への導入、利用、関係構築を担い、日本向けの顧客成功の型を作る。",
    genbaTake: "完成した日本運用を引き継ぐのではなく、言語・文化・スポーツ現場の運用を本社の製品と支援に編み込む初期メンバー。",
    desiredProfile: "公式求人は顧客成功・アカウント管理、ソフトウェア導入、スポーツ業界への理解を重視する。年収880万〜1,040万円、変動給144万円、株式を公式掲載。",
  }),
];
