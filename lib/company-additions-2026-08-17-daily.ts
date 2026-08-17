import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-08-17";

export const companies20260817Daily: Company[] = [
  {
    slug: "servicenow",
    name: "ServiceNow",
    category: "Enterprise Workflow / AI Platform",
    broadCategory: "業務自動化・コラボレーション",
    hq: "Santa Clara, US",
    japanPresence: "ServiceNow Japan / Tokyo・Osaka",
    hiringStatus: "積極採用",
    salesRoles: 26,
    description: "IT・従業員・顧客・業界業務を一つのAI workflow platformでつなぐ上場企業。日本ではSales、Presales、Customer Success、Architecture、Partner、GTMの26対象求人を公式確認。",
    lastChecked: checkedAt,
    careersUrl: "https://careers.servicenow.com/jobs/?search=&country=Japan",
    tags: ["アンカー企業", "Enterprise Workflow", "AI Platform", "ITSM", "CRM", "Customer Success", "Partner", "Japan"],
  },
  {
    slug: "tools-for-humanity",
    name: "Tools for Humanity (World)",
    category: "Proof of Human / Digital Identity / World App",
    broadCategory: "セキュリティ・IT運用",
    hq: "San Francisco, US / Munich, Germany",
    japanPresence: "World IDを日本で提供 / Tinder Japan・マイナンバーカード連携を確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "AI時代に人間であることをprivacy-preservingに証明するWorld IDとWorld Appを開発。日本で実利用を確認できる一方、公式ATSの現行24件は米国・ドイツのみでJapan求人は0件。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/Tools%20for%20Humanity",
    tags: ["Proof of Human", "Digital Identity", "Privacy", "AI Trust", "World ID", "Japan"],
  },
  {
    slug: "lovable",
    name: "Lovable",
    category: "AI Software Creation / Full-stack App Platform",
    broadCategory: "AI・データ基盤",
    hq: "Stockholm, Sweden",
    japanPresence: "日本語サイトは提供 / 日本法人・国内拠点・Japan求人は未確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "自然言語からweb appを設計・実装・公開し、database、auth、payments、security、enterprise governanceまで扱うAI software creation platform。公式ATS 74件にJapan勤務地はない。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/lovable",
    tags: ["日本未進出", "AI Coding", "Full-stack", "Vibe Coding", "Enterprise", "Developer Tools", "PLG"],
    entryStatus: "not-entered",
  },
];

type ServiceNowJobSpec = {
  id: string;
  title: string;
  segment: string;
  location?: string;
  summary: string;
};

const serviceNowJobs: ServiceNowJobSpec[] = [
  { id: "744000143024689", title: "Senior Advisory Executive Architect", segment: "Executive Architecture / Strategic Accounts", summary: "経営層とtechnology strategyを結び、ServiceNow platformの複数年roadmapと大規模変革を設計する。" },
  { id: "744000142040459", title: "Associate Customer Success Manager", segment: "Customer Success / Adoption", summary: "顧客のsuccess plan、adoption、value realization、risk管理を持ち、契約後の成果定着を支える。" },
  { id: "744000141395520", title: "Head of Manufacturing GTM, Japan", segment: "Manufacturing / GTM Leadership", summary: "日本の製造業向けGTM、industry message、pipeline、field enablement、partner連携を統括する。" },
  { id: "744000140382539", title: "Account Executive - Commercial", segment: "Commercial / New & Existing", summary: "Commercial顧客の新規開拓と既存拡大を担い、複数workflowのbusiness caseを経営・ITへ提案する。" },
  { id: "744000139172459", title: "Solution Sales Executive - CRM & Industry Workflows", segment: "CRM & Industry Workflows / Specialist Sales", summary: "CRMと業界workflowの専門sellerとしてcore AEと連携し、pipeline、solution strategy、closeを担う。" },
  { id: "744000139033069", title: "Associate Enterprise Account Executive - Manufacturing", segment: "Manufacturing / Enterprise", summary: "製造業のEnterprise accountでpipeline形成、discovery、account planning、複数部門の合意形成を担う。" },
  { id: "744000138987469", title: "Partner Account Manager", segment: "Partner / Ecosystem", summary: "SI・consulting・technology partnerとのjoint plan、enablement、sourced・influenced pipelineを作る。" },
  { id: "744000138779739", title: "Platform Architect", segment: "Platform Architecture / Enterprise", summary: "顧客のenterprise architectureとServiceNow platformを接続し、標準化、governance、roadmapを設計する。" },
  { id: "744000137786189", title: "Senior Customer Success Manager", segment: "Strategic Customer Success", summary: "大手顧客のportfolioでadoption、value、executive governance、renewal・expansionに向けたsuccess planを主導する。" },
  { id: "744000137558364", title: "Partner Account Manager", segment: "Partner / Ecosystem", summary: "担当partnerのbusiness plan、pipeline、capability、共同案件を運営し、日本のdelivery capacityを広げる。" },
  { id: "744000136128729", title: "Customer Success Executive", segment: "Executive Customer Success", summary: "戦略顧客の経営層と成果指標を合意し、platform adoptionと複数年のvalue realizationを統括する。" },
  { id: "744000134387459", title: "Enterprise Account Executive - Telecom", segment: "Telecom / Enterprise", summary: "通信業界のnamed accountsでnew businessとexpansionを担い、業界変革を複数workflowへ広げる。" },
  { id: "744000134169238", title: "Enterprise Account Executive", segment: "Enterprise / New & Existing", summary: "大企業のC-level・IT・business leaderへplatform変革を提案し、account strategyからcloseまで持つ。" },
  { id: "744000134168885", title: "Associate Enterprise Account Executive", segment: "Enterprise / Growth", summary: "Enterprise territoryでpipeline形成、discovery、account planning、deal executionを担い、上位segmentへの基礎を作る。" },
  { id: "744000134164876", title: "Enterprise Account Executive - Technology", segment: "Technology / Enterprise", summary: "technology企業の大手顧客を担当し、workflowとAI platformのnew logo・expansionを進める。" },
  { id: "744000134168788", title: "Sr Enterprise Account Executive - TMT", segment: "TMT / Strategic Enterprise", summary: "Technology・Media・Telecomの戦略顧客で、長期account planと複雑なmulti-product dealを主導する。" },
  { id: "744000134101311", title: "Mid-Market Account Executive", segment: "Mid-Market / New & Existing", summary: "中堅企業のworkflow統合を、短中期cycleでnew logoとexisting expansionの両方へつなげる。" },
  { id: "744000133886725", title: "Solution Consultant - TMT, Enterprise", segment: "TMT / Presales", summary: "TMT大手顧客のdiscovery、demo、solution design、technical validationを担い、business outcomeを可視化する。" },
  { id: "744000133857499", title: "Manager, Deal Operations", segment: "Deal Operations / Commercial Governance", summary: "複雑案件のpricing、approval、contract、forecast、commercial riskをSales・Finance・Legalと運営する。" },
  { id: "744000132323324", title: "Business Development Representative", segment: "Business Development / Pipeline", summary: "priority accountを調査し、outbound・inboundから初回商談とqualified pipelineを作る。" },
  { id: "744000131811939", title: "Senior Solution Sales Executive - CRM & Industry Workflows", segment: "CRM & Industry Workflows / Senior Specialist Sales", summary: "CRM・業界workflowの大型案件でspecialist sales strategy、executive alignment、closeを主導する。" },
  { id: "744000131810669", title: "Enterprise Account Executive - West", segment: "West Japan / Enterprise", location: "Osaka, Japan", summary: "西日本のEnterprise accountでnew businessとexpansionを担い、地域のpartner・executive networkを作る。" },
  { id: "744000128347769", title: "Advisory Solution Consultant", segment: "Advisory Presales / Enterprise", summary: "経営・業務課題のdiscoveryからvalue story、demo、workshop、technical validationまでを設計する。" },
  { id: "744000127347199", title: "Solution Architect", segment: "Solution Architecture / Enterprise", summary: "複数製品・既存systemをまたぐtarget architecture、integration、security、governanceを設計する。" },
  { id: "744000122381681", title: "Enterprise Account Executive - Utility & Retail", segment: "Utility & Retail / Enterprise", summary: "電力・公益・小売の大手顧客へindustry workflowとAIのbusiness caseを作り、複雑案件をcloseする。" },
  { id: "744000094537795", title: "Enterprise Account Executive - Manufacturing (Process)", segment: "Process Manufacturing / Enterprise", summary: "素材・化学等のprocess manufacturingで、workflow標準化とAI活用を複数部門の変革案件へ広げる。" },
];

const careerInsights = (spec: ServiceNowJobSpec): Job["careerInsights"] => ({
  fit: `${spec.segment}で、顧客の業務・組織・technologyを横断して成果責任を持ちたい人に向く。`,
  thingsToKnow: "日本の個別quota、担当社数、pay mix、達成率、平均ACV、ramp、配属teamの出社頻度は公式求人で確認できない。",
  marketValue: `${spec.title}としての成果を、売上・pipeline・adoption・導入速度・顧客KPIで定量化できれば、同じ職種群の上位scopeへ転用しやすい。`,
  tenureAndPromotion: `【Genba仮説】${spec.title}の昇進は在籍年数より、${spec.segment}で担当したscope、顧客成果、再利用可能なplaybook、周囲の育成を数字で示せたかが基準になる。支持材料: 公式求人は「${spec.summary}」という成果責任を置き、成熟したsegment・industry・lifecycle別組織で専門性を分けている。反証・留保: 日本の職種別昇進率、平均在籍年数、manager別離職、社内公募の実績は公開されていない。面接で確認: 直近24カ月の同職種の昇進・異動・退職件数、次levelへ上がった人の共通KPI、managerのpromotion実績を具体例で聞く。`,
  priorCompanies: `【Genba仮説】${spec.segment}に近いEnterprise software、consulting、IT operations、CRM・workflow領域で、複数stakeholderを動かして成果を出した人が隣接する。支持材料: ${spec.title}は「${spec.summary}」を担うため、製品名よりdiscovery、value設計、technical・commercial調整、実行管理の再現性が重要になる。反証・留保: ServiceNow Japanの実際の入社元企業分布、職種別採用比率、業界未経験者の通過率は公開されていない。面接で確認: 現teamで活躍する人の前職類型、採用時に評価した成果、足りない経験を入社後どうrampするかを聞く。`,
  nextCompanies: `【Genba仮説】${spec.title}で${spec.segment}の成果を定量化できれば、同じ職種群のStrategic scope、Principal・Practice Lead、Manager、Japan・APAC leadershipへ広げられる。支持材料: 公式求人の責任は「${spec.summary}」であり、顧客規模、専門領域、team責任を一段上げる形で隣接roleへ接続できる。反証・留保: 実際の退職後転職先、昇給幅、転職成功率を示す公開分布ではなく、職務構造からの推定である。面接で確認: alumniの代表的な進路、社内で次に狙えるrole、必要なKPI・certification・people leadership、異動実績を聞く。`,
});

export const jobs20260817Daily: Job[] = serviceNowJobs.map((spec) => ({
  id: `servicenow-${spec.id}`,
  companySlug: "servicenow",
  title: spec.title,
  segment: spec.segment,
  location: spec.location ?? "Tokyo, Japan",
  workStyle: "公式求人で個別の出社日数は明記なし",
  language: "公式求人で必須言語の明記なし",
  firstSeen: checkedAt,
  lastChecked: checkedAt,
  source: { label: "ServiceNow Careers", url: `https://careers.servicenow.com/jobs/${spec.id}/${spec.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/` },
  descriptionSummary: spec.summary,
  genbaTake: `${spec.summary} 単一moduleの説明ではなく、顧客の業務成果とplatform adoptionを同じaccount planへ束ねる役割。`,
  compensationReality: "日本向けの公式報酬レンジは確認できない。職種・seniority・責任範囲と東京の外資technology市場benchmarkからGenba仮説を算定する。",
  desiredProfile: `${spec.segment}の顧客課題を理解し、executive・business・IT・Security・Procurementと社内のSales・SE・CS・Partnerを束ねて成果を進められる人。`,
  careerInsights: careerInsights(spec),
}));
