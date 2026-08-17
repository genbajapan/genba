import type {
  AeInterviewHypothesis,
  CompanyPublicIntelligence,
  CultureDeepDive,
  ResearchSource,
  SalesFabeOverview,
  SalesMarketOutlook,
} from "@/lib/company-public-intelligence";

export const rolloutResearchedAt = "2026-08-17";
const rolloutDisplayDate = "2026.08.17";

export type StandardPatch = {
  leadership: CompanyPublicIntelligence["overviewLeadership"];
  marketOutlook: SalesMarketOutlook;
  fabe: SalesFabeOverview;
  heroSummary?: string;
  culture: CultureDeepDive;
  aeItems: AeInterviewHypothesis[];
  sources?: ResearchSource[];
};

const businessOutcomePattern = /(解決|改善|減ら|高め|つな|変え|支援|実現|移せ|広げ|成果|売上|コスト|速度|安全|収益|生産性|定着|時間|工数|意思決定|投資効果|統合|自動化|一元管理|運用)/;

function readerFirstSummary(intelligence: CompanyPublicIntelligence, fabe: SalesFabeOverview) {
  const summary = intelligence.salesSnapshot.trim();
  if (businessOutcomePattern.test(summary)) return summary;
  const benefit = fabe.fabeRows.find((row) => row.key === "benefit")?.analysis.trim().replace(/。$/, "");
  return benefit ? `${summary}その結果、${benefit}。` : summary;
}

export function applyStandard(intelligence: CompanyPublicIntelligence, patch: StandardPatch) {
  intelligence.researchedAt = rolloutResearchedAt;
  intelligence.overviewLeadership = patch.leadership;
  intelligence.salesMarketOutlook = patch.marketOutlook;
  // The hero must explain the customer problem and business outcome without
  // requiring the reader to know product names. The feature row remains in the
  // expandable FABE table; it must never be reused as the company summary.
  intelligence.salesFabeOverview = {
    ...patch.fabe,
    summary: patch.heroSummary ?? readerFirstSummary(intelligence, patch.fabe),
  };
  intelligence.cultureDeepDive = patch.culture;
  intelligence.aeInterviewHypotheses = {
    intro: "会社・市場・求人の公開事実から、入社後の達成難度を左右する未公開情報を5点に絞った。仮説を先に示し、数字・具体例・反証を面接で確認するための論点である。",
    items: patch.aeItems,
  };
  if (patch.sources?.length) {
    const existing = new Set(intelligence.sources.map((source) => source.id));
    intelligence.sources.push(...patch.sources.filter((source) => !existing.has(source.id)));
  }
}

export function culture(input: {
  headline: string;
  classification: CultureDeepDive["workStyle"]["classification"];
  displayLabel: string;
  remoteOnly: string;
  officeDays: string;
  flexibility: string;
  workSummary: string;
  officialSourceIds: string[];
  principles: CultureDeepDive["principles"];
  tokyoExperience: CultureDeepDive["tokyoExperience"];
  salesCulture: CultureDeepDive["salesCulture"];
  community: CultureDeepDive["communitySnapshot"];
  goodFor: string[];
  cautionFor: string[];
  interviewQuestions: string[];
  careerTitle: string;
  careerBody: string;
  sourceIds: string[];
}): CultureDeepDive {
  return {
    researchedAt: rolloutDisplayDate,
    headline: input.headline,
    workStyle: {
      classification: input.classification,
      displayLabel: input.displayLabel,
      remoteOnly: input.remoteOnly,
      officeDays: input.officeDays,
      flexibility: input.flexibility,
      summary: input.workSummary,
      sourceIds: input.officialSourceIds,
    },
    principles: input.principles,
    tokyoExperience: input.tokyoExperience,
    salesCulture: input.salesCulture,
    communitySnapshot: input.community,
    fit: {
      goodFor: input.goodFor,
      cautionFor: input.cautionFor,
      interviewQuestions: input.interviewQuestions,
    },
    careerValue: { title: input.careerTitle, body: input.careerBody },
    sourceIds: input.sourceIds,
  };
}

const fabeLabels: Record<SalesFabeOverview["fabeRows"][number]["key"], string> = {
  feature: "Feature",
  advantage: "Advantage",
  benefit: "Benefit",
  evidence: "Evidence",
  competitor: "Competitor",
};

export function fabeRows(rows: Array<Omit<SalesFabeOverview["fabeRows"][number], "label">>): SalesFabeOverview["fabeRows"] {
  return rows.map((row) => ({ ...row, label: fabeLabels[row.key] }));
}

export function ae(
  issue: string,
  hypothesis: string,
  question: string,
  goodSignal: string,
  cautionSignal: string,
  sourceIds: string[],
): AeInterviewHypothesis {
  return { issue, hypothesis, question, goodSignal, cautionSignal, sourceIds };
}

export type CompactPatchInput = {
  slug: string;
  leaderName: string;
  leaderLabel: string;
  leaderUrl: string;
  localName: string;
  localLabel: string;
  localUrl: string;
  companyId: string;
  jobId: string;
  customersId: string;
  externalId: string;
  financeId: string;
  targets: string[];
  heroSummary?: string;
  competitors: string;
  feature: string;
  advantage: string;
  benefit: string;
  evidence: string;
  marketVerdict: string;
  marketParagraphs: string[];
  cultureHeadline: string;
  classification: CultureDeepDive["workStyle"]["classification"];
  displayLabel: string;
  officeDays: string;
  remoteOnly: string;
  flexibility: string;
  goodFor: string[];
  cautionFor: string[];
  unresolved: string[][];
};

export function buildCompactPatch(input: CompactPatchInput): StandardPatch {
  const ids = [input.companyId, input.jobId, input.customersId, input.externalId, input.financeId];
  return {
    leadership: [
      { label: input.leaderLabel, people: [{ name: input.leaderName, url: input.leaderUrl, linkLabel: "公開情報" }] },
      { label: input.localLabel, people: [{ name: input.localName, url: input.localUrl, linkLabel: "公開情報" }] },
    ],
    marketOutlook: {
      title: "日本市場でのニーズと3-5年の成長性の見立て",
      verdict: input.marketVerdict,
      paragraphs: input.marketParagraphs,
      cases: [{ company: "国内公式事例", need: input.evidence, sourceId: input.customersId }],
      sourceIds: ids,
    },
    fabe: {
      targetSegments: input.targets,
      summary: input.feature,
      fabeRows: fabeRows([
        { key: "feature", analysis: input.feature, customerMeaning: "分断した業務・データを同じ運用へ集約する。" },
        { key: "advantage", analysis: input.advantage, customerMeaning: "point tool追加ではなく、複数部門・工程を一体で改善する。", sourceIds: [input.companyId] },
        { key: "benefit", analysis: input.benefit, customerMeaning: "導入前後の業務・事業KPIで投資効果を検証できる。" },
        { key: "evidence", analysis: input.evidence, customerMeaning: "公開事例と公式規模を商談の参照材料にできる。", sourceIds: [input.customersId, input.financeId] },
        { key: "competitor", analysis: input.competitors, customerMeaning: "機能数だけでなく、導入負荷、統合、運用、成果、総コストで比較する。" },
      ]),
    },
    heroSummary: input.heroSummary,
    culture: culture({
      headline: input.cultureHeadline,
      classification: input.classification,
      displayLabel: input.displayLabel,
      remoteOnly: input.remoteOnly,
      officeDays: input.officeDays,
      flexibility: input.flexibility,
      workSummary: `${input.displayLabel}。公開されていない勤務条件は補完せず、対象求人と面接で確認する。`,
      officialSourceIds: [input.jobId],
      principles: [
        { label: "顧客成果", title: "機能よりbusiness outcome", companySays: input.evidence, readerMeaning: "製品説明を顧客KPIと運用変化へ翻訳する必要がある。", sourceIds: [input.customersId] },
        { label: "速度", title: "成長市場で仮説を更新", companySays: input.marketParagraphs[1], readerMeaning: "完成したplaybookを待たず、事実と反証で提案を改善する人が合う。", sourceIds: [input.companyId, input.jobId] },
        { label: "協働", title: "営業・技術・導入を横断", companySays: "公式求人と製品構造は複数職種の連携を前提にする。", readerMeaning: "案件を一人で抱えず、専門家の責任を明確にして進める必要がある。", sourceIds: [input.jobId] },
      ],
      tokyoExperience: [
        { label: "日本拠点", value: input.displayLabel, detail: "公式求人・会社情報で確認できる範囲。", sourceId: input.jobId },
        { label: "顧客接点", value: "国内事例あり", detail: input.evidence, sourceId: input.customersId },
        { label: "事業段階", value: "拡張・構築局面", detail: input.marketParagraphs[1], sourceId: input.financeId },
      ],
      salesCulture: [
        { title: "複数stakeholderの成果を設計", evidence: input.feature, readerMeaning: "buyer、IT、現場、Procurementと社内専門家を束ねる。", sourceIds: [input.companyId, input.jobId] },
        { title: "非公開の運用指標を面接で検証", evidence: "日本のquota、達成率、ACV、cycle、昇進分布は十分に公開されていない。", readerMeaning: "ブランドや求人件数だけでterritoryを判断しない。", sourceIds: [input.jobId, input.financeId] },
      ],
      community: {
        label: "公開情報の限界",
        rating: "日本営業の信頼できる集計なし",
        recommend: "推奨率は未確認",
        metrics: [{ label: "公式", value: "求人・顧客事例を確認" }, { label: "匿名レビュー", value: "十分な日本母数を確認できず" }],
        positiveRead: "公式情報から、製品投資と日本向け採用を確認できる。",
        cautionRead: "匿名レビューの少数意見を日本営業組織の事実として一般化できない。",
        caveat: "確認不能な評判は作らず、配属先の実態を面接で検証する。",
        sourceId: input.jobId,
      },
      goodFor: input.goodFor,
      cautionFor: input.cautionFor,
      interviewQuestions: input.unresolved.map((item) => item[2]),
      careerTitle: "成長カテゴリーでの日本GTM経験",
      careerBody: `${input.feature} 顧客KPI、複数stakeholder、導入・定着までを成果で語れれば、隣接するEnterprise SaaS・AI・業務platformへ再現性を説明しやすい。`,
      sourceIds: ids,
    }),
    aeItems: input.unresolved.map((item, index) => ae(
      item[0],
      item[1],
      item[2],
      "分母、期間、責任者、具体例を数字で説明できる。",
      "一般論だけで、実績・責任境界・反証が示されない。",
      index % 2 === 0 ? [input.jobId, input.financeId] : [input.companyId, input.customersId],
    )),
  };
}
