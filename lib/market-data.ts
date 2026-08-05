export type Source = {
  label: string;
  url: string;
};

export type Company = {
  slug: string;
  name: string;
  category: string;
  hq: string;
  japanPresence: string;
  hiringStatus: "積極採用" | "採用中" | "継続観測";
  salesRoles: number;
  description: string;
  lastChecked: string;
  careersUrl: string;
  tags: string[];
};

export type Job = {
  id: string;
  companySlug: string;
  title: string;
  segment: string;
  location: string;
  workStyle: string;
  language: string;
  firstSeen: string;
  lastChecked: string;
  source: Source;
  descriptionSummary: string;
};

export type Signal = {
  id: string;
  companySlug: string;
  date: string;
  type: "新着求人" | "採用拡大" | "注目領域" | "組織シグナル";
  confidence: "公式確認" | "Genba分析";
  title: string;
  summary: string;
  source: Source;
};

export const companies: Company[] = [
  {
    slug: "salesforce",
    name: "Salesforce",
    category: "CRM / AI",
    hq: "San Francisco, US",
    japanPresence: "日本法人・東京",
    hiringStatus: "積極採用",
    salesRoles: 4,
    description: "Data Cloud、Agentforce、業界別Enterprise Salesなど複数の営業ポジションを継続掲載。",
    lastChecked: "2026-08-04",
    careersUrl: "https://careers.salesforce.com/jp/ja/",
    tags: ["Enterprise", "SMB", "Data & AI"],
  },
  {
    slug: "datadog",
    name: "Datadog",
    category: "Observability",
    hq: "New York, US",
    japanPresence: "東京",
    hiringStatus: "積極採用",
    salesRoles: 3,
    description: "Commercial、Mid-Market、Public Sectorまで複数セグメントで営業人材を募集。",
    lastChecked: "2026-08-04",
    careersUrl: "https://careers.datadoghq.com/ja/",
    tags: ["Commercial", "Mid-Market", "Public Sector"],
  },
  {
    slug: "servicenow",
    name: "ServiceNow",
    category: "Enterprise Workflow",
    hq: "Santa Clara, US",
    japanPresence: "日本法人・東京",
    hiringStatus: "積極採用",
    salesRoles: 3,
    description: "Enterprise AE、Solution Sales、Partner Accountなど日本向け採用を幅広く掲載。",
    lastChecked: "2026-08-04",
    careersUrl: "https://careers.servicenow.com/locations/apj/japan/",
    tags: ["Enterprise", "Manufacturing", "Partner"],
  },
  {
    slug: "snowflake",
    name: "Snowflake",
    category: "Data Cloud",
    hq: "Bozeman, US",
    japanPresence: "日本法人・東京",
    hiringStatus: "採用中",
    salesRoles: 2,
    description: "業界特化型Enterprise AEや若手営業育成プログラムを東京で展開。",
    lastChecked: "2026-08-04",
    careersUrl: "https://careers.snowflake.com/us/en/search-results?keywords=Tokyo",
    tags: ["Enterprise", "Media", "Sales Academy"],
  },
  {
    slug: "mongodb",
    name: "MongoDB",
    category: "Developer Data Platform",
    hq: "New York, US",
    japanPresence: "東京",
    hiringStatus: "採用中",
    salesRoles: 2,
    description: "Enterprise Salesに加え、パートナー戦略を担う日本向けポジションを掲載。",
    lastChecked: "2026-08-04",
    careersUrl: "https://www.mongodb.com/careers/",
    tags: ["Enterprise", "Partner", "Developer"],
  },
  {
    slug: "braze",
    name: "Braze",
    category: "Customer Engagement",
    hq: "New York, US",
    japanPresence: "東京オフィス",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "東京拠点を持つカスタマーエンゲージメント企業。採用ページを定点観測。",
    lastChecked: "2026-08-04",
    careersUrl: "https://www.braze.com/company/careers",
    tags: ["Marketing", "Customer Engagement"],
  },
  {
    slug: "crowdstrike",
    name: "CrowdStrike",
    category: "Cybersecurity",
    hq: "Austin, US",
    japanPresence: "日本法人",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "日本向けキャリアページと営業・チャネル関連求人を継続観測。",
    lastChecked: "2026-08-04",
    careersUrl: "https://www.crowdstrike.com/ja-jp/careers/",
    tags: ["Security", "Enterprise", "Channel"],
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM / Marketing",
    hq: "Cambridge, US",
    japanPresence: "日本法人・東京",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "日本市場の営業・カスタマーサクセス・パートナー職を定点観測。",
    lastChecked: "2026-08-04",
    careersUrl: "https://www.hubspot.com/careers/jobs",
    tags: ["SMB", "Mid-Market", "Partner"],
  },
];

export const jobs: Job[] = [
  {
    id: "sf-data-cloud-ae",
    companySlug: "salesforce",
    title: "Account Executive, Data Cloud",
    segment: "Data & AI",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-05-21",
    lastChecked: "2026-08-04",
    source: { label: "Salesforce Careers (JR343328)", url: "https://careers.salesforce.com/jp/%E3%82%B8%E3%83%A7%E3%83%96/jr343328/account-executive-data-cloud/" },
    descriptionSummary: "Data Cloudは製品としての採用が広がり始めた段階にあり、確立された勝ちパターンがまだない分、自分で提案の型を作れるポジションと説明されている。プロダクトスペシャリストAEとして、担当セグメントの事業成長そのものを設計する視点が求められる。",
  },
  {
    id: "sf-agentforce-smb",
    companySlug: "salesforce",
    title: "Account Executive, Agentforce SMB",
    segment: "SMB",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-04",
    lastChecked: "2026-08-04",
    source: { label: "Salesforce Careers (JR320258)", url: "https://careers.salesforce.com/jp/%E3%82%B8%E3%83%A7%E3%83%96/jr320258/account-executive-agentforce-smb/" },
    descriptionSummary: "AIとリアルタイムデータ分析でCustomer 360を再定義する新製品Agentforceを、SMB顧客に提案する役割。見込み顧客の課題を深く理解した上で提案する形の営業で、AI活用型ソリューションの技術理解とB2B/B2C双方の設計経験が要件として挙げられている。",
  },
  {
    id: "sf-enterprise-b2c",
    companySlug: "salesforce",
    title: "Account Executive, Enterprise B2C",
    segment: "Enterprise",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-04",
    lastChecked: "2026-08-04",
    source: { label: "Salesforce Careers (JR325247)", url: "https://careers.salesforce.com/en/jobs/jr325247/account-executive-enterprise-sales-btoc%E6%B6%88%E8%B2%A1-%E6%B5%81%E9%80%9A-%E7%89%A9%E6%B5%81-%E9%80%9A%E4%BF%A1-%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2-%E3%83%86%E3%83%AC%E3%82%B3%E3%83%A0/" },
    descriptionSummary: "消費財・流通・通信・メディアなどBtoC大手企業向けのDX提案を担うコンサル型の営業ポジション。単純な製品販売ではなく、顧客の事業の理想像を一緒に描く「事業設計パートナー」としての立ち位置を重視しており、商談相手はC-level・経営層が中心となる。",
  },
  {
    id: "dd-midmarket-ae",
    companySlug: "datadog",
    title: "Mid-Market Account Executive",
    segment: "Mid-Market",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-04",
    lastChecked: "2026-08-04",
    source: { label: "Datadog Careers", url: "https://careers.datadoghq.com/ja/detail/6523631/" },
    descriptionSummary: "従業員1,000〜5,000名規模の中堅企業への新規開拓(新規ロゴ獲得)に特化した役割。交渉から技術デモまで営業サイクル全体をリードし、CTOやエンジニアリング・ITリーダー層への戦略的営業、SDR・パートナー・マーケティングとの連携が求められる。",
  },
  {
    id: "dd-commercial-ae",
    companySlug: "datadog",
    title: "Commercial Account Executive",
    segment: "Commercial",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-04",
    lastChecked: "2026-08-04",
    source: { label: "Datadog Careers", url: "https://careers.datadoghq.com/ja/detail/6009777/?gh_jid=6009777" },
    descriptionSummary: "中小規模市場へのアウトバウンド営業による新規顧客獲得が中心の役割。IT製品のフィールドセールス経験(クロージング含む)2年以上が要件として明記されており、CTO・CIO・エンジニアリング層への提案とセールス・デベロップメント・チームとの連携が求められる。",
  },
  {
    id: "dd-public-sector",
    companySlug: "datadog",
    title: "Strategic Account Executive, Public Sector",
    segment: "Public Sector",
    location: "東京",
    workStyle: "公式求人で確認",
    language: "日本語 / 英語",
    firstSeen: "2026-08-04",
    lastChecked: "2026-08-04",
    source: { label: "Datadog Careers", url: "https://careers.datadoghq.com/ja/detail/7439573/" },
    descriptionSummary: "自治体・教育機関・病院・大学など大規模SLED(State/Local/Education)組織への新規開拓・既存深耕を担う役割。5年以上のクロージング経験、官公庁向け営業経験2〜3年以上、年間売上目標100万ドル以上の実績が要件として挙げられている。",
  },
];

export const signals: Signal[] = [
  {
    id: "signal-sf-data-ai",
    companySlug: "salesforce",
    date: "2026-08-04",
    type: "採用拡大",
    confidence: "Genba分析",
    title: "Data CloudとAgentforceで複数セグメントを同時募集",
    summary: "専門領域とSMBのAE求人を同時に確認。日本市場でAI・データ商材の販売体制を広げている可能性があります。",
    source: { label: "Salesforce Careers", url: "https://careers.salesforce.com/jp/ja/" },
  },
  {
    id: "signal-dd-segments",
    companySlug: "datadog",
    date: "2026-08-04",
    type: "採用拡大",
    confidence: "Genba分析",
    title: "Commercialから公共まで営業セグメントを横断して募集",
    summary: "複数の顧客規模・業界向けAE求人を確認。日本営業組織のカバレッジ拡大を示すシグナルです。",
    source: { label: "Datadog Careers", url: "https://careers.datadoghq.com/ja/" },
  },
  {
    id: "signal-servicenow-breadth",
    companySlug: "servicenow",
    date: "2026-08-04",
    type: "採用拡大",
    confidence: "Genba分析",
    title: "営業・パートナー・アーキテクトを横断して日本採用",
    summary: "日本拠点ページで複数職種を確認。フロント営業だけでなく、周辺組織も含む採用が見られます。",
    source: { label: "ServiceNow Japan Careers", url: "https://careers.servicenow.com/locations/apj/japan/" },
  },
];

export function getCompany(slug: string) {
  return companies.find((company) => company.slug === slug);
}

export function getCompanyJobs(slug: string) {
  return jobs.filter((job) => job.companySlug === slug);
}

export function getCompanySignals(slug: string) {
  return signals.filter((signal) => signal.companySlug === slug);
}
