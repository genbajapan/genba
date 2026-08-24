import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-08-25";

export const companies20260825Daily: Company[] = [
  {
    slug: "clickhouse",
    name: "ClickHouse",
    category: "リアルタイム分析・データウェアハウス・オブザーバビリティ",
    broadCategory: "AI・データ基盤",
    hq: "サンフランシスコ・ベイエリア（米国）",
    japanPresence: "ClickHouse株式会社、東京本社、日本代表、国内顧客事例とJapan求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "大規模データを低遅延で集計するオープンソースの列指向databaseとmanaged cloudを提供。日本でconsulting、architecture、導入、supportを横断するSenior Consulting Engineerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/clickhouse/jobs/6140123004",
    tags: ["Real-time Analytics", "Data Warehouse", "Observability", "Open Source", "Consulting", "Japan Remote"],
  },
];

export const jobs20260825Daily: Job[] = [
  {
    id: "clickhouse-senior-consulting-engineer-japan-6140123004",
    companySlug: "clickhouse",
    title: "Senior Consulting Engineer - Japan",
    segment: "Consulting / Architecture / Support",
    location: "日本",
    workStyle: "Remote、東京顧客へのonsite対応あり",
    language: "日本語・英語proficient必須",
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    source: { label: "ClickHouse Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/clickhouse/jobs/6140123004" },
    descriptionSummary: "strategic customerのdesign、architecture、migration、implementation、PoCと、L1〜L3のconsultative supportを各50%で担う。",
    genbaTake: "databaseの設定支援で終わらず、real-time analyticsのarchitecture、性能検証、production launch、障害対応を顧客とProduct・Engineeringの間で完遂するrole。",
    compensationReality: "日本向けの給与レンジ、bonus、equity額、utilization、on-call手当は公式求人で確認できない。全新規入社者へのstock option記載はある。",
    desiredProfile: "Professional Services、Support、TAM、Engineering/SRE等5年以上、分散DBMSの実装・運用・support経験5年以上、public cloud、OLAP、Kubernetes等を求める。最大35%のregional travelとglobal 24x7 support schedulingへの対応が必要。",
    careerInsights: {
      fit: "分散databaseの深い技術を、顧客のarchitecture、migration、性能、production成果へ変えたい人に向く。",
      thingsToKnow: "日本team人数、担当社数、project数、support比率、on-call頻度、travel実績、評価KPI、給与は未公開。面接で実運用を確認したい。",
      marketValue: "OLAP・distributed systems、Professional Services、technical support、Enterprise architectureを横断する実績。",
      tenureAndPromotion: "【Genba仮説】次のscopeは在籍年数より、複雑なmigration、production launch、性能改善、重大caseを再現可能なreference architectureへ変えた成果で決まる。支持材料: 公式求人はlarge-scope project、mentoring、documentation、Product・Engineering連携を求める。反証・留保: 日本teamの昇進率・離職率、level別在籍期間は未公開。面接で確認: 直近24カ月の昇進・異動・退職、次levelの定量基準は。",
      priorCompanies: "【Genba仮説】database、cloud、observability、Professional Services、TAM、SREで、顧客のproduction systemと重大incidentを持った人が隣接する。支持材料: 公式求人はOLAP、distributed DBMS、cloud、Kubernetes、customer-facing deliveryを重視。反証・留保: 日本の同一roleの採用履歴は十分に公開されていない。面接で確認: 直近採用者の前職categoryと標準ramp期間は。",
      nextCompanies: "【Genba仮説】migration、performance、production supportの成果を数字で残せれば、data platformのPrincipal Consultant、Solutions Architecture、TAM leadership、APJ delivery leadershipへ接続しやすい。支持材料: architectureからsupport・mentoringまで広い責任。反証・留保: 公開されたalumni分布ではなく職務構造からの仮説。面接で確認: alumniの次role、社内異動、leadership trackは。",
    },
  },
];
