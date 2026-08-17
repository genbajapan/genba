import type { Job } from "@/lib/market-data";

const checkedAt = "2026-08-17";

function careerInsights(domain: string): Job["careerInsights"] {
  return {
    fit: `${domain}の顧客課題を調べ、複数部門と社内外の専門家を束ねて成果を作りたい人に向く。`,
    thingsToKnow: "給与、quota、担当社数、達成率、昇進、離職は公開情報で確認できない。配属先の数字と具体例を面接で確認したい。",
    marketValue: `${domain}の役割成果をpipeline、受注、導入、利用、顧客KPIで定量化できれば、隣接するEnterprise SaaS・Securityの同職種や上位職へ再現性を説明しやすい。`,
    tenureAndPromotion: `【Genba仮説】${domain}では、在籍年数だけでなく担当scope、個人・team成果、再現可能なprocess作りが次のlevelを決める。支持材料: 公式求人は顧客成果と部門横断の実行を求める。反証・留保: 日本の対象職種を十分な件数で集計した昇進率は確認できない。面接で確認: 直近24カ月の昇進・異動・退職件数と次levelの定量条件は。`,
    priorCompanies: `【Genba仮説】入社元は社名より、${domain}に近い顧客課題、複数stakeholder、目標責任、部門横断の実行が共通項になる。支持材料: 公式求人がrole固有の経験と成果を明記する。反証・留保: 日本の公開profileを4件以上の同一条件で集計できず、特定企業からの採用傾向は断定できない。面接で確認: 直近採用者の前職category上位3つ、共通skill、ramp期間は。`,
    nextCompanies: `【Genba仮説】pipeline、受注、導入、利用、顧客KPIを数字で残せれば、${domain}の専門職、上位segment、Lead、managementへ接続しやすい。支持材料: 公式求人が成果責任とcross-functional ownershipを求める。反証・留保: 公開された日本の転職先分布ではなく、隣接する職務構造からの仮説である。面接で確認: 退職者の次role categoryと、社内でscopeを広げた実例は。`,
  };
}

function job(input: Omit<Job, "firstSeen" | "lastChecked" | "careerInsights"> & { domain: string }): Job {
  const { domain, ...record } = input;
  return { ...record, firstSeen: checkedAt, lastChecked: checkedAt, careerInsights: careerInsights(domain) };
}

type ZscalerSeed = [id: string, title: string, location: string, segment: string, language: string];

const zscalerSeeds: ZscalerSeed[] = [
  ["5156024007", "Account Executive - Commercial", "東京", "Commercial Sales", "日本語／英語水準は公式求人で明記なし"],
  ["5156026007", "Account Executive - Commercial", "東京", "Commercial Sales", "日本語／英語水準は公式求人で明記なし"],
  ["5156030007", "Account Executive, Commercial", "東京", "Commercial Sales", "日本語／英語水準は公式求人で明記なし"],
  ["5159494007", "Account Executive, Commercial (West)", "大阪・日本", "Commercial Sales / West", "日本語／英語水準は公式求人で明記なし"],
  ["5179814007", "Account Executive, Commercial (West)", "大阪・日本", "Commercial Sales / West", "日本語／英語水準は公式求人で明記なし"],
  ["5170215007", "Account Executive, Enterprise", "東京", "Enterprise Sales", "日本語／英語水準は公式求人で明記なし"],
  ["5158390007", "Account Executive, Majors", "東京", "Major Accounts", "日本語／英語水準は公式求人で明記なし"],
  ["5164504007", "Account Executive, Majors", "東京", "Major Accounts", "日本語／英語水準は公式求人で明記なし"],
  ["5119845007", "Account Executive, Majors", "東京", "Major Accounts", "日本語（高い読み書き・会話力）／英語水準は明記なし"],
  ["5179816007", "Account Executive, Majors", "東京", "Major Accounts", "日本語／英語水準は公式求人で明記なし"],
  ["5159496007", "Account Executive, Majors (Finance)", "東京", "Major Accounts / Finance", "日本語／英語水準は公式求人で明記なし"],
  ["5202975007", "Account Executive - Strategic（大手顧客担当）", "東京", "Strategic Accounts", "日本語／英語水準は公式求人で明記なし"],
  ["5156033007", "Account Executive - Strategic（大手顧客担当）", "東京", "Strategic Accounts", "日本語／英語水準は公式求人で明記なし"],
  ["5174751007", "Principal AI Security Specialist", "東京", "AI Security Specialist Sales", "公式求人で言語水準の明記なし"],
  ["5110108007", "Principal Business Value Consulting, Japan", "東京", "Business Value Consulting", "日本語（fluent）／英語（business）"],
  ["5122180007", "Renewal Specialist", "東京", "Renewal / Customer Success", "日本語・英語（fluent）"],
  ["5052789007", "Senior Account Executive - ZT Cloud", "東京", "Zero Trust Cloud Sales", "公式求人で言語水準の明記なし"],
  ["5180994007", "Senior Partner Solution Engineer", "東京", "Partner Pre-sales", "公式求人で言語水準の明記なし"],
  ["5211136007", "Senior Sales Engineer - Commercial", "東京", "Commercial Pre-sales", "日本語（高い読み書き・会話力）／英語水準は明記なし"],
  ["5201259007", "Senior Sales Engineer (Enterprise)", "東京", "Enterprise Pre-sales", "日本語（高い読み書き・会話力）／英語水準は明記なし"],
  ["5150538007", "Senior Sales Engineer - Finance and Strategic", "東京", "Finance & Strategic Pre-sales", "日本語（高い読み書き・会話力）／英語水準は明記なし"],
  ["5156071007", "Senior Sales Engineer - Major", "東京", "Major Accounts Pre-sales", "日本語（高い読み書き・会話力）／英語水準は明記なし"],
  ["5119847007", "Senior Sales Engineer - Major", "東京", "Major Accounts Pre-sales", "日本語（高い読み書き・会話力）／英語水準は明記なし"],
  ["5156082007", "Senior Sales Engineer - Public Sector", "東京", "Public Sector Pre-sales", "日本語（高い読み書き・会話力）／英語水準は明記なし"],
  ["5156084007", "Senior Sales Engineer - Telco", "東京", "Telecommunications Pre-sales", "日本語（高い読み書き・会話力）／英語水準は明記なし"],
  ["5150536007", "Senior Sales Engineer - Utility and Auto", "日本", "Utility & Automotive Pre-sales", "日本語（高い読み書き・会話力）／英語水準は明記なし"],
  ["5156077007", "Transformation Architect", "東京", "Transformation Architecture", "日本語（native level）／英語水準は明記なし"],
  ["5156075007", "Transformation Architect - Enterprise", "東京", "Enterprise Transformation Architecture", "日本語（native level）／英語水準は明記なし"],
  ["5139660007", "Transformation Architect - Major", "東京", "Major Accounts Transformation Architecture", "日本語（native level）／英語水準は明記なし"],
];

function zscalerSummary(title: string) {
  if (title.includes("Transformation Architect")) return "顧客のnetwork・security・workplace変革をbusiness case、roadmap、executive alignmentへ落とし、platform adoptionと大型案件を支援する。";
  if (title.includes("Sales Engineer") || title.includes("Solution Engineer")) return "discovery、architecture、demo、PoV、technical validationを担い、Sales・partnerとZero Trust案件のtechnical winを作る。";
  if (title.includes("Value Consulting")) return "顧客の現行cost・risk・user experienceを定量化し、Zero Trust transformationのbusiness caseとvalue realizationを設計する。";
  if (title.includes("Renewal")) return "契約更新、risk、usage、stakeholderを管理し、Customer Success・Salesとretentionおよびexpansionを進める。";
  if (title.includes("AI Security")) return "AI利用・agentを含むsecurity課題を専門領域として担当し、Sales・SEとAI securityのpipelineと技術評価を進める。";
  return "担当segmentでnew logoとexisting expansionを担い、CIO・CISO、SE、partnerを束ねてZero Trust platformのfull-cycle案件を進める。";
}

const zscalerJobs = zscalerSeeds.map(([id, title, location, segment, language]) => job({
  id: `zscaler-${id}`,
  companySlug: "zscaler",
  title,
  segment,
  location,
  workStyle: location.startsWith("大阪") ? "Remote Osaka（求人本文は#LI-Hybrid）" : "Hybrid（出社日数は非公開）",
  language,
  source: { label: "Zscaler Careers (Greenhouse)", url: `https://job-boards.greenhouse.io/zscaler/jobs/${id}` },
  descriptionSummary: zscalerSummary(title),
  genbaTake: "単一security製品でなく、VPN、branch、internet・private access、data protection、AI securityをrisk、user experience、network costの共通KPIへ束ねる。",
  compensationReality: "日本の給与、base、OTE、pay mix、equity、quota、担当社数は公式求人で数値非公開。",
  desiredProfile: "公式求人が明記するsegment・専門領域、顧客対応、部門横断の実行、勤務地・語学条件を優先し、記載のない条件は補完しない。",
  domain: "Zero Trust・SSE・Enterprise Security",
}));

export const jobs20260817BatchSeventeen: Job[] = [
  ...zscalerJobs,
  job({
    id: "abnormal-ai-7820227003",
    companySlug: "abnormal-ai",
    title: "Enterprise Account Executive - Japan",
    segment: "Enterprise / Founding Japan GTM",
    location: "日本",
    workStyle: "Remote",
    language: "英語（proficiency）／日本語水準は公式求人で明記なし",
    source: { label: "Abnormal AI Careers (Greenhouse)", url: "https://abnormal.ai/careers/jobs/7820227003?gh_jid=7820227003" },
    descriptionSummary: "日本市場を立ち上げるfoundational sales teamとして、3,000 mailbox超の企業でnew ARR、new logo、expansion、CISO relationshipをfull-cycleで担う。",
    genbaTake: "email gatewayの置換だけでなく、behavioral AIによるemail・identity・insider・AI riskの検知とSOC工数を一つのbusiness caseへする。",
    compensationReality: "日本の給与、base、OTE、pay mix、equity、quota、ramp、attainmentは公式求人で数値非公開。",
    desiredProfile: "enterprise cybersecurity・SaaSのdirect sales、hunter、CISO selling、over-quota実績、英語力を重視。日本語水準は補完しない。",
    domain: "Behavioral AI・Email and Identity Security・Japan Market Entry",
  }),
];
