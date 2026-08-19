import type { CompanyPublicIntelligence, JapanEntryAssessment, ResearchSource } from "@/lib/company-public-intelligence";

const checkedAt = "2026-08-19";

type ActiveSignalProfile = {
  name: string;
  jobUrl: string;
  roleSignal: string;
  marketContext: string;
};

const activeSignalProfiles: Record<string, ActiveSignalProfile> = {
  glean: {
    name: "Glean",
    jobUrl: "https://job-boards.greenhouse.io/gleanwork/jobs/4721393005",
    roleSignal: "Strategic AE、Enterprise AE、SDRなど日本市場の現行求人を確認",
    marketContext: "公式発表で日本カントリーマネージャー、日本組織の構築、国内販売を確認できるが、日本法人・常設拠点は確認できない",
  },
  cambly: {
    name: "Cambly",
    jobUrl: "https://jobs.ashbyhq.com/Cambly/96f0b293-0cdc-4d96-9b36-507c787f2b34",
    roleSignal: "東京を勤務地候補とし、日本・中国・韓国を担当するSales Director, APACの現行求人を確認",
    marketContext: "日本向けB2B事業の拡大は確認できるが、日本法人・常設拠点は確認できない",
  },
  censys: {
    name: "Censys",
    jobUrl: "https://job-boards.greenhouse.io/censys/jobs/8558569002",
    roleSignal: "Account ExecutiveとSolutions Engineerの日本市場向け現行求人を確認",
    marketContext: "Remoteの日本市場チームは確認できるが、日本法人・常設拠点は確認できない",
  },
  lighthouse: {
    name: "Lighthouse",
    jobUrl: "https://job-boards.eu.greenhouse.io/lighthouse/jobs/4500582101",
    roleSignal: "Business Development Manager（Account Executive）- Japanの現行求人を確認",
    marketContext: "日本語製品と国内事例は確認できるが、日本法人・常設拠点は確認できない",
  },
  replit: {
    name: "Replit",
    jobUrl: "https://jobs.ashbyhq.com/replit/bcfdb564-48c9-42c9-ab5b-c901b6babb44",
    roleSignal: "Founding Account ExecutiveとGrowth Leadの日本市場向け現行求人を確認",
    marketContext: "Remoteでの市場立ち上げは確認できるが、日本法人・常設拠点は確認できない",
  },
  cohere: {
    name: "Cohere",
    jobUrl: "https://jobs.ashbyhq.com/cohere/85e808ab-ee45-4944-bedc-832bf933d0b6",
    roleSignal: "Account Executive、Partner Development、Forward Deployed Engineerの日本向け現行求人を確認",
    marketContext: "日本企業との提携とTokyo Remote採用は確認できるが、日本法人・常設拠点は確認できない",
  },
  dragos: {
    name: "Dragos",
    jobUrl: "https://job-boards.greenhouse.io/dragos/jobs/5254855008",
    roleSignal: "Senior Enterprise AEとAdvisory Solutions Architectの日本向け現行求人を確認",
    marketContext: "国内partnerとRemote teamは確認できるが、日本法人・常設拠点は確認できない",
  },
  cribl: {
    name: "Cribl",
    jobUrl: "https://cribl.io/job-detail/?gh_jid=6098546004",
    roleSignal: "Sales Director、Enterprise Sales、Partner Business Managerの日本向け現行求人を確認",
    marketContext: "Remote Japanでの市場立ち上げは確認できるが、日本法人・常設拠点は確認できない",
  },
  hightouch: {
    name: "Hightouch",
    jobUrl: "https://job-boards.greenhouse.io/hightouch/jobs/5836057004",
    roleSignal: "Enterprise Account Executive, APAC（Japan）の現行求人を確認",
    marketContext: "国内reseller活動は確認できるが、日本法人・常設拠点は確認できない",
  },
  cursor: {
    name: "Cursor",
    jobUrl: "https://cursor.com/careers/strategic-enterprise-account-executive-japan",
    roleSignal: "Strategic AE、Field Engineering、FDE、Solutions Architectの日本向け現行求人を確認",
    marketContext: "日本語公式サイトと国内顧客は確認できるが、日本法人・常設拠点は確認できない",
  },
  zadara: {
    name: "Zadara",
    jobUrl: "https://jobs.lever.co/Zadara/f913dc3e-76dd-45eb-89a8-bda865b10ea6",
    roleSignal: "Tokyoを勤務地とするSenior Technical Account Managerの現行求人を確認",
    marketContext: "日本語公式サイトと国内顧客は確認できるが、日本法人・常設拠点は確認できない",
  },
  "abnormal-ai": {
    name: "Abnormal AI",
    jobUrl: "https://abnormal.ai/careers/jobs/7820227003?gh_jid=7820227003",
    roleSignal: "Enterprise Account Executive - Japanの現行求人を確認",
    marketContext: "Remoteでの日本市場立ち上げは確認できるが、日本法人・常設拠点は確認できない",
  },
  "neural-concept": {
    name: "Neural Concept",
    jobUrl: "https://jobs.ashbyhq.com/neuralconcept/9b018838-aad4-48a6-8d6b-f2a544e0fbed",
    roleSignal: "Sales Director、TAM、Solution Engineer、Application Engineerの日本向け現行求人を確認",
    marketContext: "日本での販売活動と東京office開設準備は確認できるが、日本法人・開設済み拠点は確認できない",
  },
  patch: {
    name: "Patch",
    jobUrl: "https://jobs.ashbyhq.com/patch.io/1d73e679-d6f7-42c1-9545-74c31e97e7da",
    roleSignal: "Enterprise Account Executive, APAC - Tokyoの現行求人を確認",
    marketContext: "Tokyo RemoteでのAPAC市場開発は確認できるが、日本法人・常設拠点は確認できない",
  },
  mambu: {
    name: "Mambu",
    jobUrl: "https://careers-mambu.icims.com/jobs/3352/senior-account-executive-%28channel%29/job",
    roleSignal: "JP-RemoteのSenior Account Executive（Channel）の現行求人を確認",
    marketContext: "Employee of RecordによるRemote採用は確認できるが、日本法人・常設拠点は確認できない",
  },
  zilliz: {
    name: "Zilliz",
    jobUrl: "https://jobs.lever.co/zilliz/8144e236-2836-4980-92cf-b6501ce0f81c",
    roleSignal: "Enterprise AEとFounding Field Engineerの日本向け現行求人を確認",
    marketContext: "Tokyo Hybridのfounding teamとTokyo cloud regionは確認できるが、日本法人・常設拠点は確認できない",
  },
};

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function buildAssessment(profile: ActiveSignalProfile, companySourceIds: string[], jobSourceId: string, registrySourceId: string): JapanEntryAssessment {
  const evidenceIds = unique([jobSourceId, ...companySourceIds]);
  return {
    verdict: `日本進出の兆しあり。${profile.roleSignal}。一方、${profile.marketContext}ため、日本法人がある企業とは扱わない。`,
    factSignals: [
      { title: "現行の日本市場担当求人", body: profile.roleSignal, sourceIds: [jobSourceId] },
      { title: "法人・拠点の確認状況", body: profile.marketContext, sourceIds: [registrySourceId, jobSourceId] },
      { title: "日本市場への投資意図", body: "公式求人で日本territory、pipeline、partner、顧客対応または市場立ち上げを担う役割を確認した。", sourceIds: [jobSourceId] },
      { title: "製品・事業の基盤", body: "海外の製品・顧客・事業基盤は既存の公式情報で確認できるが、日本の売上・顧客数・renewalへは置き換えない。", sourceIds: evidenceIds },
    ],
    hurdles: [
      { title: "日本法人・常設拠点が未確認", body: "求人の存在だけでは、契約主体、雇用主体、国内拠点、正式な進出時期を確定できない。", sourceIds: [registrySourceId, jobSourceId] },
      { title: "初期GTM podの厚み", body: "AE以外のSE、CS、Marketing、Legal、Supportを日本時間で継続提供できるかは未確認。", sourceIds: [jobSourceId] },
      { title: "国内commercial proof", body: "日本のARR、qualified pipeline、平均ACV、sales cycle、renewalは公開情報で確認できない。", sourceIds: evidenceIds },
      { title: "local deliveryとproduct readiness", body: "日本語、契約、security review、data handling、partner deliveryの同等性を案件ごとに検証する必要がある。", sourceIds: evidenceIds },
    ],
    readinessConditions: [
      { title: "継続するJapan採用", body: "単発求人ではなく、複数四半期にわたりJapan担当roleを維持・拡張する。" },
      { title: "専任Japan pod", body: "SalesだけでなくSE、CS、Marketing、Supportの責任範囲が明確になる。" },
      { title: "国内契約・delivery体制", body: "契約主体、雇用主体、請求、support、security reviewのlocal運用が確認できる。" },
      { title: "国内lighthouse customer", body: "日本の有償顧客、production利用、renewal、定量成果が公式に確認できる。" },
      { title: "法人・常設拠点", body: "日本法人、登記、公式office一覧または常設拠点が公式・公的情報で確認できる。" },
    ],
    watchSignals: ["Japan求人の継続・増員", "日本法人・登記", "Tokyo等の常設拠点", "日本責任者の公式発表", "国内顧客事例・partner発表", "日本語support・契約・data region"],
  };
}

export function applyPreEntrySignalAudit(records: Record<string, CompanyPublicIntelligence>) {
  for (const [slug, profile] of Object.entries(activeSignalProfiles)) {
    const intelligence = records[slug];
    if (!intelligence) continue;

    const jobSourceId = `pre-entry-signal-job-${slug}`;
    const registrySourceId = `gbiz-headcount-${slug}`;
    const jobSource: ResearchSource = {
      id: jobSourceId,
      label: `${profile.name}公式日本市場求人`,
      url: profile.jobUrl,
      kind: "企業公式",
      scope: `${profile.roleSignal}・2026年8月19日現行確認`,
      checkedAt,
    };
    if (!intelligence.sources.some((source) => source.id === jobSourceId)) intelligence.sources.push(jobSource);

    const companySourceIds = intelligence.sources
      .filter((source) => source.kind === "企業公式" && source.id !== jobSourceId)
      .slice(0, 2)
      .map((source) => source.id);
    const assessment = buildAssessment(profile, companySourceIds, jobSourceId, registrySourceId);

    intelligence.researchedAt = checkedAt;
    intelligence.marketStatus.genbaVerdict = {
      headline: "日本進出の兆しあり：現行の日本市場担当求人を確認。",
      body: `${profile.roleSignal}。${profile.marketContext}。日本で働く担当者がいる場合を含む分類で、求人を日本法人設立・拠点開設・国内売上の証明とは分けて継続観測する。`,
    };
    intelligence.marketStatus.japanGrowth = {
      ...intelligence.marketStatus.japanGrowth,
      headline: "日本市場担当を採用中。法人・常設拠点の確認前にGTMを組成する段階。",
      narrative: `${profile.roleSignal}。${profile.marketContext}。Genbaでは日本法人の確認と日本採用を別軸で扱い、雇用主体が本国法人・EORなどのどれかを公開情報から確定できない場合は日本進出済み企業の採用温度から除外する。`,
      entryAssessment: assessment,
      sourceIds: unique([
        ...(intelligence.marketStatus.japanGrowth?.sourceIds ?? []),
        jobSourceId,
        registrySourceId,
        ...companySourceIds,
      ]),
    };
    intelligence.companyStats.japanOffice = {
      value: "常設オフィス未確認",
      detail: `${profile.marketContext}。求人の勤務地やRemote勤務を常設officeの証明へ置き換えない。`,
      sourceId: registrySourceId,
    };
    intelligence.companyStats.japanSince = {
      value: "日本GTM・採用を確認",
      detail: "日本市場担当者や求人を確認しているが、その確認時点を法人設立年や常設拠点の開設年として扱わない。",
      sourceId: jobSourceId,
    };
  }
}

export const activePreEntrySignalSlugs = Object.freeze(Object.keys(activeSignalProfiles));
