import type { Job } from "@/lib/market-data";

const checkedAt = "2026-08-17";

function careerInsights(domain: string): Job["careerInsights"] {
  return {
    fit: `${domain}の顧客課題を調べ、複数部門と社内外の専門家を束ねて成果を作りたい人に向く。`,
    thingsToKnow: "給与、quota、担当社数、達成率、昇進、離職は公開情報で確認できない。配属先の数字と具体例を面接で確認したい。",
    marketValue: `${domain}の役割成果をpipeline、受注、導入、利用、顧客KPIで定量化できれば、隣接するEnterprise SaaSの同職種・上位職へ再現性を説明しやすい。`,
    tenureAndPromotion: `【Genba仮説】${domain}では、在籍年数だけでなく担当scope、個人・team成果、再現可能なprocess作りが次のlevelを決める。支持材料: 公式求人は顧客成果、部門横断の実行、継続的な学習を求める。反証・留保: 日本の対象職種だけを十分な件数で集計した在籍年数・昇進率は確認できない。面接で確認: 直近24カ月の昇進・異動・退職件数と、次levelに必要な定量成果は。`,
    priorCompanies: `【Genba仮説】入社元は社名より、${domain}に近い顧客課題、複数stakeholder、目標責任、部門横断の実行が共通項になる。支持材料: 公式求人がrole固有の経験と成果を明記する。反証・留保: 日本の公開profileを4件以上の同一条件で集計できず、特定企業からの採用傾向は断定できない。面接で確認: 直近採用者の前職category上位3つ、共通skill、ramp期間は。`,
    nextCompanies: `【Genba仮説】pipeline、受注、導入、利用、顧客KPIを数字で残せれば、${domain}の専門職、上位segment、Lead、managementへ接続しやすい。支持材料: 公式求人が成果責任とcross-functional ownershipを求める。反証・留保: 公開された日本の転職先分布ではなく、隣接する職務構造からの仮説である。面接で確認: 退職者の次role categoryと、社内でscopeを広げた実例は。`,
  };
}

function job(input: Omit<Job, "firstSeen" | "lastChecked" | "careerInsights"> & { domain: string }): Job {
  const { domain, ...record } = input;
  return { ...record, firstSeen: checkedAt, lastChecked: checkedAt, careerInsights: careerInsights(domain) };
}

export const jobs20260817BatchFifteen: Job[] = [
  job({
    id: "schrodinger-account-manager-material-science-japan-current", companySlug: "schrodinger", title: "Account Manager, Material Science, Japan", segment: "Materials Science / Enterprise", location: "東京・日本", workStyle: "柔軟な働き方（出社頻度は非公開）", language: "英語（business level preferred）／日本語水準は公式求人で明記なし", source: { label: "Schrödinger Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/schrdinger/jobs/7694468003" },
    descriptionSummary: "日本の材料科学顧客へpipeline構築、full-cycle sale、account expansionを担う。科学・enterprise software sales 5年以上を重視。", genbaTake: "simulation licenseでなく、実験候補の絞り込み、計算・研究工数、材料開発lead timeを顧客のR&D KPIへ変える。", compensationReality: "competitive base salary・incentiveの定性記載のみ。日本のbase、OTE、pay mix、quota、equityは非公開。", desiredProfile: "材料科学・化学のdomain理解、科学softwareのvalue selling、長いR&D意思決定を部門横断で進める力を重視。", domain: "Computational Materials・Scientific Enterprise Sales",
  }),
  job({
    id: "schrodinger-applications-scientist-materials-japan-current", companySlug: "schrodinger", title: "Applications Scientist, Materials Science, Japan", segment: "Technical Customer / Materials Science", location: "東京・日本", workStyle: "柔軟な働き方（出社頻度は非公開）", language: "日本語（native level）／英語（email・report・web meeting）", source: { label: "Schrödinger Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/schrdinger/jobs/6619838003" },
    descriptionSummary: "材料科学顧客へdemo、training、technical support、workflow設計を提供し、Sales・Productと連携する。出張あり。", genbaTake: "精度の説明だけでなく、顧客data・simulation・実験validationをつなぎ、研究者が継続利用できるworkflowへ定着させる。", compensationReality: "competitive salaryの定性記載のみ。日本の給与、bonus、equity、担当社数は非公開。", desiredProfile: "材料・計算化学等のPhD、simulation、顧客対応、日英communicationを重視。", domain: "Computational Materials・Applications Science",
  }),
  job({
    id: "sensor-tower-agency-partner-japan-current", companySlug: "sensor-tower", title: "Agency Partner", segment: "Agency Partnerships / Digital Intelligence", location: "東京・日本", workStyle: "Hybrid（火・木office／週3日在宅）", language: "公式求人で人間言語の明記なし", source: { label: "Sensor Tower Careers (Ashby)", url: "https://jobs.ashbyhq.com/sensor-tower/ea0dbfd0-7226-492b-a6dc-e2e774242aa4" },
    descriptionSummary: "日本のagency portfolioを管理し、brand partnership、QBR、renewal・upsellを担う。partnership・BD・sales 6年以上。", genbaTake: "data subscriptionでなく、agencyのcampaign planning、competitor insight、client retention・growthへ組み込む共同serviceを作る。", compensationReality: "日本の給与、OTE、pay mix、quota、equityは非公開。", desiredProfile: "agency・SaaS partnership、C-level discussion、QBR、renewal・upsellを重視。", domain: "Digital Intelligence・Agency Partnerships",
  }),
  job({
    id: "sensor-tower-account-director-japan-current", companySlug: "sensor-tower", title: "Account Director", segment: "Account Management / Digital Intelligence", location: "東京・日本", workStyle: "Hybrid（火・木office／週3日在宅）", language: "日本語・英語（full fluency）", source: { label: "Sensor Tower Careers (Ashby)", url: "https://jobs.ashbyhq.com/sensor-tower/0e0ac464-026e-4dac-910c-24e7d8afbc13" },
    descriptionSummary: "Japan顧客の全journey、C-level関係、QBR、renewal・upsell、NRR成長を担う。", genbaTake: "利用reportでなく、market・広告・競合dataを顧客の意思決定へ定着させ、renewal・expansionの根拠を作る。", compensationReality: "日本の給与、OTE、pay mix、portfolio、NRR targetは非公開。", desiredProfile: "SaaSのBDR・SDR・AE・AM経験、日本のbrand・EC・金融・digital ecosystem、日英fluencyを重視。", domain: "Digital Intelligence・Account Management",
  }),
  job({
    id: "sensor-tower-team-director-account-management-japan-current", companySlug: "sensor-tower", title: "Team Director, Account Management", segment: "Account Management Leadership / Japan", location: "東京・日本", workStyle: "Hybrid（火・木office／週3日在宅）", language: "日本語・英語（fluent）", source: { label: "Sensor Tower Careers (Ashby)", url: "https://jobs.ashbyhq.com/sensor-tower/b3e0fc94-6e27-4268-b9e0-339ee40682e8" },
    descriptionSummary: "Japan Account Director teamを率い、renewal、upsell、NRR、strategic account、C-level関係を統括。", genbaTake: "個人の関係営業でなく、account plan、QBR、product penetration、retentionをteam operating modelとして再現する。", compensationReality: "日本の給与、OTE、team target、管理人数、equityは非公開。", desiredProfile: "Key Account 8年以上、enterprise team management 3年以上、日本市場理解、日英fluencyを重視。", domain: "Digital Intelligence・Account Leadership",
  }),
  job({
    id: "sensor-tower-team-director-account-management-japan-localized-current", companySlug: "sensor-tower", title: "アカウントマネジメント チームディレクター（日本担当）", segment: "Account Management Leadership / Japan", location: "東京・日本", workStyle: "Hybrid（火・木office／週3日在宅）", language: "日本語・英語（business level）", source: { label: "Sensor Tower Careers (Ashby)", url: "https://jobs.ashbyhq.com/sensor-tower/beff8111-71c7-44d7-9bb0-3e24944bb327" },
    descriptionSummary: "英語版Team Directorと実質同職種の日本語localized別ATS record。JapanのAM team、renewal、upsell、NRRを統括。", genbaTake: "別採用枠かlocalized duplicateかを応募前に確認し、team scopeと採用人数を明確にする。", compensationReality: "日本の給与、OTE、team target、採用人数は非公開。", desiredProfile: "Key Account 8年以上、sales team管理3年以上、日英business communicationを重視。", domain: "Digital Intelligence・Account Leadership",
  }),
  job({
    id: "sensor-tower-product-marketing-manager-apac-japan-current", companySlug: "sensor-tower", title: "Product Marketing Manager, APAC", segment: "APAC Product Marketing / Digital Intelligence", location: "東京・日本", workStyle: "Hybrid（火・木office／週3日在宅）", language: "日本語・英語（business level、必須）", source: { label: "Sensor Tower Careers (Ashby)", url: "https://jobs.ashbyhq.com/sensor-tower/e26bee0d-076b-47aa-8b03-dfeae6237ab5" },
    descriptionSummary: "APACのpositioning、競合分析、use case・ROI story、launch、Sales enablementを担う。", genbaTake: "global messageの翻訳でなく、日本・APACの競合とbuyer課題をcommercial storyへ変え、pipeline・revenueへの寄与を測る。", compensationReality: "competitive compensationの定性記載のみ。日本の給与、bonus、equityは非公開。", desiredProfile: "B2B SaaS・Mobile・AdTech・Gaming・Data AnalyticsのPMM 3年以上、APAC GTM、日英business proficiencyを重視。", domain: "Digital Intelligence・APAC Product Marketing",
  }),
  job({
    id: "shopify-product-partnerships-lead-japan-current", companySlug: "shopify", title: "Product Partnerships Lead", segment: "Product Partnerships / Commerce", location: "日本Remote", workStyle: "Digital by Design・Remote（年3回程度の対面機会）", language: "日本語（native）／英語水準は公式求人で明記なし", source: { label: "Shopify Careers", url: "https://www.shopify.com/careers/product-partnerships-lead_d9993b7d-d973-409c-9da3-0c8d48cff776" },
    descriptionSummary: "marketplace、payments、logistics、marketing、vertical SaaSのstrategic partnerを発掘し、複雑な契約とproduct integrationを進める。", genbaTake: "紹介提携でなく、merchantの販売・決済・配送・marketing workflowを補完するproduct ecosystemを日本で作る。", compensationReality: "日本の給与、bonus、equity、partner revenue targetは非公開。", desiredProfile: "日本市場でのproduct・platform partnership、契約交渉、executive relationship、product・engineering連携を重視。", domain: "Commerce Platform・Product Partnerships",
  }),
];
