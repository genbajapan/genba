import type { Job } from "@/lib/market-data";

const checkedAt = "2026-08-17";

function careerInsights(domain: string): Job["careerInsights"] {
  return {
    fit: `${domain}の顧客課題を調べ、複数部門と社内外の専門家を束ねて成果を作りたい人に向く。`,
    thingsToKnow: "給与、quota、担当社数、達成率、昇進、離職は公開情報で確認できない。配属先の数字と具体例を面接で確認したい。",
    marketValue: `${domain}の役割成果をpipeline、受注、導入、利用、顧客KPIで定量化できれば、隣接するEnterprise SaaSの同職種・上位職へ再現性を説明しやすい。`,
    tenureAndPromotion: `【Genba仮説】${domain}では、在籍年数だけでなく担当scope、個人・team成果、再現可能なprocess作りが次のlevelを決める。支持材料: 公式求人は顧客成果と部門横断の実行を求める。反証・留保: 日本の対象職種を十分な件数で集計した昇進率は確認できない。面接で確認: 直近24カ月の昇進・異動・退職件数と次levelの定量条件は。`,
    priorCompanies: `【Genba仮説】入社元は社名より、${domain}に近い顧客課題、複数stakeholder、目標責任、部門横断の実行が共通項になる。支持材料: 公式求人がrole固有の経験と成果を明記する。反証・留保: 日本の公開profileを4件以上の同一条件で集計できず、特定企業からの採用傾向は断定できない。面接で確認: 直近採用者の前職category上位3つ、共通skill、ramp期間は。`,
    nextCompanies: `【Genba仮説】pipeline、受注、導入、利用、顧客KPIを数字で残せれば、${domain}の専門職、上位segment、Lead、managementへ接続しやすい。支持材料: 公式求人が成果責任とcross-functional ownershipを求める。反証・留保: 公開された日本の転職先分布ではなく、隣接する職務構造からの仮説である。面接で確認: 退職者の次role categoryと、社内でscopeを広げた実例は。`,
  };
}

function job(input: Omit<Job, "firstSeen" | "lastChecked" | "careerInsights"> & { domain: string }): Job {
  const { domain, ...record } = input;
  return { ...record, firstSeen: checkedAt, lastChecked: checkedAt, careerInsights: careerInsights(domain) };
}

type VeevaSeed = [id: string, title: string, city: string, workStyle: string, language: string, segment: string];

const veevaSeeds: VeevaSeed[] = [
  ["5fb8bb25-915e-4424-9cb9-9fdbc0d731d9", "Account Partner - Commercial", "東京", "On-site", "日本語（native）／英語（business）", "Enterprise Sales / Commercial"],
  ["041f291f-ad2b-424c-9053-bf1487235e89", "Account Partner - MedTech Japan", "大阪", "On-site", "日本語（native）／英語（business）", "Enterprise Sales / MedTech"],
  ["7d586942-3a78-45cf-a240-3a960dde4430", "Account Partner - MedTech Japan", "東京", "On-site", "日本語（native）／英語（business）", "Enterprise Sales / MedTech"],
  ["650505f0-9926-49e5-bbb0-8f90c44cc8ec", "Account Partner - R&D", "東京", "On-site", "日本語（native）／英語（intermediate）", "Enterprise Sales / R&D"],
  ["e2ba2520-f47c-4ff3-bac7-5ce6fa553c9c", "Associate Consultant", "東京", "On-site", "日本語（native・fluent）／英語（proficient）", "Consulting / Life Sciences"],
  ["87ebf160-f969-460f-9ab2-f6c12b02a97c", "Business Consultant - Commercial Content", "東京", "On-site", "日本語・英語（business）", "Business Consulting / Commercial Content"],
  ["5478ae11-0ec2-4c0f-9a01-3ed195dc4e1b", "Consultant - Commercial Strategy", "東京", "Remote", "日本語・英語（effective）", "Business Consulting / Commercial Strategy"],
  ["7c69592f-a6ab-410e-b037-b9b0f4d04a66", "Consultant - Commercial Strategy", "大阪", "Remote", "日本語・英語（effective）", "Business Consulting / Commercial Strategy"],
  ["1782ee67-d843-4a17-9d77-d1abba89ad6b", "Consultant - Veeva Link", "大阪", "On-site", "日本語・英語（proficient）", "Consulting / Data & Key People"],
  ["e11fbb15-92a2-4f5c-820f-fa13de1026e8", "Consultant - Veeva Link", "東京", "On-site", "日本語・英語（proficient）", "Consulting / Data & Key People"],
  ["80e60cdb-b94e-4712-9e23-7ee8503ffdf3", "Customer Success Manager - CRM Suite", "東京", "On-site", "日本語・英語（excellent）", "Customer Success / CRM Suite"],
  ["e7bc87a0-2b65-4cfa-ae3f-6c85581271a9", "Customer Success Manager - CRM Suite", "大阪", "On-site", "日本語・英語（excellent）", "Customer Success / CRM Suite"],
  ["964f463e-506c-4e99-95b2-39b1c94490b6", "Managed Services Consultant - Commercial", "広島", "On-site", "日本語（native）／英語（翻訳toolで読解・記述、fluentは歓迎）", "Managed Services / Commercial"],
  ["a7aa3168-deb9-43d2-b144-fad8b548f177", "Managed Services Consultant - Commercial", "東京", "On-site", "日本語（native）／英語（翻訳toolで読解・記述、fluentは歓迎）", "Managed Services / Commercial"],
  ["37f8e227-e34f-4905-9414-d85cc1edb04d", "Managed Services Consultant - R&D", "大阪", "On-site", "日本語・英語（business desirable）", "Managed Services / R&D"],
  ["679903b4-4ac4-4402-b6ec-3af4a14a34d5", "Managed Services Consultant - R&D", "東京", "On-site", "日本語・英語（business desirable）", "Managed Services / R&D"],
  ["b9bb3e49-e802-442d-b020-cd0ca015a41f", "Principal & Team Manager - R&D Business Consulting - Japan", "東京", "Remote", "日本語・英語（fluent）", "Consulting Leadership / R&D"],
  ["83504ba5-073b-4974-9c4b-e79084f4fccf", "Principal Business Consultant - Commercial Content Business Consulting", "東京", "Remote", "日本語・英語（effective）", "Principal Consulting / Commercial Content"],
  ["0f093f25-7842-41b4-b4ca-c237cfb148af", "Principal Consultant - Commercial Strategy Business Consulting", "大阪", "Remote", "日本語・英語（effective）", "Principal Consulting / Commercial Strategy"],
  ["521182e6-80bb-47e8-9083-c687ad064f64", "Principal Consultant - Commercial Strategy Business Consulting", "東京", "On-site", "日本語・英語（effective）", "Principal Consulting / Commercial Strategy"],
  ["61df5f7f-b0a1-45f7-be53-f5e83ce3de9e", "Senior Account Partner - Veeva QualityOne", "大阪", "On-site", "日本語（native）／英語（business）", "Enterprise Sales / QualityOne"],
  ["930a55ab-48ca-46ba-b686-dc7fcb722cbc", "Senior Account Partner - Veeva QualityOne", "東京", "On-site", "日本語（native）／英語（business）", "Enterprise Sales / QualityOne"],
  ["aa264fd7-56b0-4b98-aa99-05a51ce62c20", "Senior Consultant - CDMS Services (eCOA)", "東京", "On-site", "日本語（native）／英語（fluent）", "Senior Consulting / Clinical Data"],
  ["68cc65d1-f8e4-434c-8c77-28cf1a44e74e", "Senior Consultant - Commercial Services", "東京", "On-site", "日本語（fluent）／英語（business）", "Senior Consulting / Commercial"],
  ["8d9b5c9d-eb59-4521-94c6-ced17eee7fec", "Senior Consultant - Commercial Services", "大阪", "On-site", "日本語（fluent）／英語（business）", "Senior Consulting / Commercial"],
  ["fcfd78ef-f32a-4b63-a831-99e7e3238681", "Senior Consultant - RTSM", "東京", "On-site", "公式求人で人間言語の明記なし", "Senior Consulting / RTSM"],
  ["8a9f27bd-0e0b-47be-a93b-6e94d182d4bf", "Senior Consultant - Safety", "東京", "On-site", "日本語・英語（business・fluent）", "Senior Consulting / Safety"],
  ["37803247-f815-454f-a1ea-e7a1ff27f2b9", "Senior Consultant - Veeva QualityOne", "東京", "On-site", "日本語（native）／英語（business）", "Senior Consulting / QualityOne"],
  ["4940dc48-3a7a-4bb5-9353-570a2e8a3f16", "Senior Consultant - Veeva QualityOne", "大阪", "On-site", "日本語（native）／英語（business）", "Senior Consulting / QualityOne"],
  ["1adf32ec-0698-4e03-8697-36a63edbb73d", "Services Engagement Manager - Commercial Cloud", "東京", "On-site", "英語（business）／日本語水準は公式求人で明記なし", "Services Sales / Commercial Cloud"],
  ["6b15dcc9-1c67-4632-ade0-e63947752b33", "Solution Consultant - MedTech", "東京", "On-site", "日本語（fluent）／英語（歓迎）", "Pre-sales / MedTech"],
  ["950d7390-9de1-45ce-b219-291339d02b09", "Solution Consultant - MedTech", "大阪", "On-site", "日本語（fluent）／英語（歓迎）", "Pre-sales / MedTech"],
];

function veevaSummary(title: string) {
  if (title.includes("Account Partner")) return "life sciences顧客のnew business、strategic account、pipeline、revenue expansionを担い、製品・servicesを複数部門へ展開する。";
  if (title.includes("Solution Consultant")) return "MedTech顧客の業務・system要件を整理し、demo、solution design、technical validationで商談を支援する。";
  if (title.includes("Customer Success")) return "CRM Suiteのadoption、value realization、stakeholder alignment、renewal・expansionを支援する。";
  if (title.includes("Managed Services")) return "導入後のapplication運用、改善、顧客要望、service deliveryを継続的に支援する。";
  if (title.includes("Engagement Manager")) return "Commercial Cloud servicesのscope、proposal、commercial agreement、delivery handoffを担う。";
  return "life sciencesの規制業務・data・workflowを分析し、Veeva製品の設計、導入、定着、変革を顧客と進める。";
}

const veevaJobs = veevaSeeds.map(([id, title, city, workStyle, language, segment]) => job({
  id: `veeva-${id}`, companySlug: "veeva", title, segment, location: `${city}・日本`, workStyle, language,
  source: { label: "Veeva Careers (Lever)", url: `https://jobs.lever.co/veeva/${id}` },
  descriptionSummary: veevaSummary(title),
  genbaTake: "単一applicationの導入でなく、Clinical・Regulatory・Safety・Quality・Medical・Commercialを規制対応、data品質、launch・patient outcomeへ接続する。",
  compensationReality: "日本の給与、bonus、OTE、equity、quota、担当社数は公式求人で数値非公開。",
  desiredProfile: "公式求人が明記するlife sciences domain、顧客対応、部門横断の実行、勤務地・語学条件を優先し、記載のない条件は補完しない。",
  domain: "Life Sciences Industry Cloud・Consulting・Customer Value",
}));

export const jobs20260817BatchSixteen: Job[] = [
  job({
    id: "ubiquiti-4240773009", companySlug: "ubiquiti", title: "Sales Solution Engineer - Japan", segment: "Pre-sales / Networking & Physical IT", location: "日本（東京優先）", workStyle: "Remote / Hybrid", language: "日本語（native）／英語（business）", source: { label: "Ubiquiti Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/ubiquiti/jobs/4240773009" },
    descriptionSummary: "日本初のSolution Engineering leadとしてenterprise、SI・MSP、channelへnetwork、Protect、Access、ProAV、VoIP、storageの設計・demo・validationを提供。", genbaTake: "機器specでなく、multi-site architecture、運用統合、license・hardware TCO、partner delivery、supportを実環境で検証する。", compensationReality: "日本の給与、bonus、equity、担当案件数は非公開。", desiredProfile: "networking・ProAV・VoIP・security・storageの設計、technical presales、日英communicationを重視。", domain: "Enterprise Networking・Solution Engineering",
  }),
  ...veevaJobs,
  job({
    id: "zadara-f913dc3e-76dd-45eb-89a8-bda865b10ea6", companySlug: "zadara", title: "Senior Technical Account Manager", segment: "Technical Customer Success / Sovereign Cloud", location: "東京・日本", workStyle: "Remote", language: "日本語（fluent）／英語（business）", source: { label: "Zadara Careers (Lever)", url: "https://jobs.lever.co/Zadara/f913dc3e-76dd-45eb-89a8-bda865b10ea6" },
    descriptionSummary: "priority customerのpost-sale技術責任者としてarchitecture最適化、health check、incident escalation、success plan、DR drill、POC・training、MSP enablementを担う。", genbaTake: "cloud capacityでなく、data sovereignty、availability、DR、運用責任、consumption economicsを継続的なcustomer outcomeへ変える。", compensationReality: "日本の給与、bonus、equity、portfolio、renewal・expansion creditは非公開。", desiredProfile: "technical consulting・CS・SA・systems engineering 7年以上、日本在住・就労資格、日英communicationを重視。", domain: "Sovereign Cloud・Technical Account Management",
  }),
];
