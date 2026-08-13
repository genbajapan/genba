import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-08-14";

export const companies20260814: Company[] = [
  { slug: "dialpad", name: "Dialpad", category: "AI Communications / Contact Center", broadCategory: "CRM・顧客体験", hq: "San Ramon, US", japanPresence: "Dialpad Japan / Tokyo office", hiringStatus: "採用中", salesRoles: 1, description: "voice、meeting、contact center、sales coachingをAIで統合。国内3,000社の利用実績を持ち、東京でMid-Market AEを募集。", lastChecked: checkedAt, careersUrl: "https://job-boards.greenhouse.io/dialpad/jobs/8606879002", tags: ["AI Communications", "UCaaS", "CCaaS", "Mid-Market", "Japan"] },
  { slug: "fivetran", name: "Fivetran", category: "Automated Data Movement / ELT", broadCategory: "AI・データ基盤", hq: "Oakland, US", japanPresence: "日本語公式サイト / Remote Japan GTM", hiringStatus: "採用中", salesRoles: 1, description: "sourceからwarehouseへのdata movementを自動化。日本でPartner Sales Manager、Sales Director、BDR等を募集。", lastChecked: checkedAt, careersUrl: "https://www.fivetran.com/careers/job?gh_jid=7818344003", tags: ["Data Integration", "ELT", "Partner", "Cloud", "Japan"] },
  { slug: "klaviyo", name: "Klaviyo", category: "B2C CRM / Marketing Automation", broadCategory: "CRM・顧客体験", hq: "Boston, US", japanPresence: "日本法人・国内拠点を確認できず", hiringStatus: "継続観測", salesRoles: 0, description: "B2C企業向けにcustomer data、email、SMS、analytics、serviceを統合。Sydney・SingaporeのAPAC基盤からJapan進出条件を継続観測。", lastChecked: checkedAt, careersUrl: "https://www.klaviyo.com/careers", tags: ["日本未進出", "B2C CRM", "Marketing Automation", "Commerce", "APAC"], entryStatus: "not-entered" },
];

const jobs: Job[] = [
  {
    id: "dialpad-account-executive-mid-market-japan", companySlug: "dialpad", title: "Account Executive, Mid-Market", segment: "Mid-Market / AI Communications", location: "Tokyo", workStyle: "公式求人で明記なし", language: "公式求人で明記なし", firstSeen: checkedAt, lastChecked: checkedAt,
    source: { label: "Dialpad Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/dialpad/jobs/8606879002" },
    descriptionSummary: "JapanのMid-Market顧客へprospecting、discovery、demo、negotiation、closeまでのsales processを担当。Japan RVPへreportし、3〜5年のsales経験を求める。",
    genbaTake: "電話systemの置換ではなく、会話dataをsupport品質、seller coaching、応答速度、顧客体験へつなぐplatform sale。ITだけでなくSales・Supportの業務責任者を同じbusiness caseへ束ねる必要がある。",
    compensationReality: "日本のbase、OTE、pay mix、quota、accelerator、equityは公式求人で確認できない。new logoとexpansion、product別credit、ramp保証を選考で確認したい。",
    desiredProfile: "公式求人は3〜5年のsales経験、complete sales cycle、SaaS・UCaaS・CCaaS経験、pipeline管理、executive communicationを重視。日本語・英語要件は明記なし。",
    careerInsights: { fit: "Mid-Marketで複数部門のcommunication workflowを変えるfull-cycle sellerに向く。", thingsToKnow: "担当社数、平均ACV、sales cycle、self-source比率、Japan quota達成率は非公開。", marketValue: "UCaaS、CCaaS、conversation AI、multi-product expansionを横断する経験。", tenureAndPromotion: "Japan sales teamの平均在籍年数、離職率、昇進実績は公開情報で確認できない。", priorCompanies: "公開プロフィールの十分な集計は未確認。求人要件からSaaS、UCaaS、CCaaSのclosing経験者が隣接する。", nextCompanies: "公開集計は未確認。成果を定量化できればCX、contact center、collaboration SaaSのEnterprise AEへつながり得る（仮説）。" },
  },
  {
    id: "fivetran-partner-sales-manager-japan", companySlug: "fivetran", title: "Partner Sales Manager", segment: "Partner / Data Infrastructure", location: "Remote, Japan, APAC", workStyle: "remote", language: "公式求人で確認", firstSeen: checkedAt, lastChecked: checkedAt,
    source: { label: "Fivetran Careers (Greenhouse)", url: "https://www.fivetran.com/careers/job?gh_jid=7818344003" },
    descriptionSummary: "Japanのcloud、SI、technology partnerとjoint GTM、enablement、co-sell pipelineを作り、automated data movementの市場coverageを広げる。",
    genbaTake: "connectorの紹介販売ではなく、cloud migration、analytics、AI projectへreliable data movementを標準で組み込むecosystem sale。partnerのdeliveryとseller motionを同時に設計する。",
    compensationReality: "日本のbase、bonus、quota、accelerator、equityは公式求人で確認できない。sourced・influenced、cloud marketplace、consumptionのcreditを確認したい。",
    desiredProfile: "公式求人でRemote JapanのPartner Sales Managerとして掲載を確認。data・cloud ecosystemでのpartner development、joint planning、pipeline executionが中核。",
    careerInsights: { fit: "cloud・data partnerとrepeatable pipelineを作るecosystem sellerに向く。", thingsToKnow: "主要partner、sourced比率、average consumption、sales cycle、Japan quota達成率は非公開。", marketValue: "Data Integration、cloud marketplace、SI co-sell、partner GTMの複合経験。", tenureAndPromotion: "Japan teamの平均在籍年数、離職率、昇進実績は公開情報で確認できない。", priorCompanies: "公開プロフィールの十分な集計は未確認。求人内容からcloud、data platform、SI、channel salesの経験者が隣接する。", nextCompanies: "公開集計は未確認。成果を定量化できればdata・cloud platformのAlliance DirectorやSales Leadershipへつながり得る（仮説）。" },
  },
];

const replacementSeeds = [
  { id: "wasabi-inside-sales-representative-japan", slug: "wasabi", title: "Inside Sales Representative - Japan", segment: "Inside Sales / Cloud Storage", location: "Japan", workStyle: "公式求人で確認", language: "公式求人で確認", url: "https://job-boards.greenhouse.io/wasabi/jobs/5382765008", summary: "Japanのprospectへoutboundし、cloud storageのqualified pipelineを作る。", take: "容量単価ではなく、egress、予測可能性、backup・archive・AI dataのTCOを短いdiscoveryで見極める。", profile: "公式求人でJapan担当のInside Salesとして掲載を確認。", fit: "cloud infrastructureのcategory educationとpipeline creationを磨きたい人に向く。", value: "Cloud Storage、FinOps、Inside Salesの経験。" },
  { id: "zscaler-account-executive-enterprise-japan", slug: "zscaler", title: "Account Executive, Enterprise", segment: "Enterprise / Zero Trust", location: "Tokyo", workStyle: "hybrid", language: "公式求人で確認", url: "https://job-boards.greenhouse.io/zscaler/jobs/5170215007", summary: "Japan Enterprise顧客へZero Trust platformのnew logoとexpansionを担う。", take: "security製品の置換ではなく、network・access・data protectionを事業変革とrisk reductionへ束ねる。", profile: "公式求人でTokyoのEnterprise Account Executiveとして掲載を確認。", fit: "CISOとCIOを横断するcomplex security saleに向く。", value: "Zero Trust、Enterprise Security、platform consolidationの経験。" },
  { id: "schrodinger-account-manager-material-science-japan", slug: "schrodinger", title: "Account Manager, Material Science, Japan", segment: "Material Science / Enterprise", location: "Tokyo", workStyle: "公式求人で確認", language: "公式求人で確認", url: "https://job-boards.greenhouse.io/schrdinger/jobs/7694468003", summary: "Japanのmaterials research顧客へcomputational platformのadoptionとcommercial growthを担う。", take: "software seatではなく、candidate探索、実験回数、研究cycle、portfolio判断を変えるdomain sale。", profile: "公式求人でJapanのMaterial Science Account Managerとして掲載を確認。", fit: "scientific buyerと研究成果を扱うsolution sellerに向く。", value: "Materials Informatics、R&D software、scientific salesの経験。" },
  { id: "glean-strategic-account-executive-japan", slug: "glean", title: "Strategic Account Executive, Japan", segment: "Strategic / Enterprise AI", location: "Japan", workStyle: "remote", language: "公式求人で確認", url: "https://job-boards.greenhouse.io/gleanwork/jobs/4721393005", summary: "Japanのstrategic accountへEnterprise SearchとAI assistantのnew logoを開拓する。", take: "検索demoではなく、知識探索時間、権限、AI adoptionをexecutive business caseへ変える。", profile: "公式求人でJapanのStrategic Account Executiveとして掲載を確認。", fit: "大手企業のAI transformationをgreenfieldで作るsellerに向く。", value: "Enterprise AI、Strategic Sales、knowledge governanceの経験。" },
  { id: "elastic-enterprise-account-executive-retail-japan", slug: "elastic", title: "Enterprise Account Executive - Retail Market", segment: "Enterprise / Retail", location: "Tokyo", workStyle: "distributed", language: "公式求人で確認", url: "https://jobs.elastic.co/jobs/sales/tokyo-japan/enterprise-account-executive-retail-market/7882324", summary: "Japanのretail Enterprise顧客へsearch、observability、security、AI use caseをfull-cycleで提案する。", take: "search engineの販売ではなく、customer experience、system reliability、security dataを共通platformの投資理由へ束ねる。", profile: "公式求人でTokyoのRetail Market Enterprise AEとして掲載を確認。", fit: "retailの業務課題とtechnical platformを横断したいsellerに向く。", value: "Search、Observability、Security、Retail Enterprise salesの経験。" },
] as const;

const replacementJobs: Job[] = replacementSeeds.map((seed) => ({
  id: seed.id, companySlug: seed.slug, title: seed.title, segment: seed.segment, location: seed.location, workStyle: seed.workStyle, language: seed.language, firstSeen: checkedAt, lastChecked: checkedAt,
  source: { label: `${seed.slug} official careers`, url: seed.url }, descriptionSummary: seed.summary, genbaTake: seed.take,
  compensationReality: "日本のbase、OTE、pay mix、equity、quota、acceleratorは公開求人で確認できない。選考でramp、credit rule、達成率まで確認したい。",
  desiredProfile: seed.profile,
  careerInsights: { fit: seed.fit, thingsToKnow: "日本ARR、顧客数、平均ACV、sales cycle、担当社数、quota達成率は非公開。", marketValue: seed.value, tenureAndPromotion: "日本teamの平均在籍年数、離職率、昇進実績は公開情報で確認できない。", priorCompanies: "個人profileの十分な母数は未確認。求人要件と隣接categoryの経験者が候補になる。", nextCompanies: "公開集計は未確認。担当categoryで定量成果を残せば隣接Enterprise softwareの役割へつながり得る（仮説）。" },
}));

export const jobs20260814 = [...jobs, ...replacementJobs];
