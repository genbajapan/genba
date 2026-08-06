import { companies, jobs } from "@/lib/market-data";
import { getCompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { getCompTierForSegment } from "@/lib/comp-benchmark";

export type CareerStageId = "sdr-bdr" | "smb-commercial" | "mid-market" | "enterprise" | "manager";

export const careerStages: Array<{ id: CareerStageId; label: string }> = [
  { id: "sdr-bdr", label: "SDR / BDR" },
  { id: "smb-commercial", label: "SMB・Commercial AE" },
  { id: "mid-market", label: "Mid-Market AE" },
  { id: "enterprise", label: "Enterprise・Strategic AE" },
  { id: "manager", label: "マネージャー以上" },
];

export type OteBandId = "band-900" | "band-900-1500" | "band-1500-2200" | "band-2200-plus";

export const oteBands: Array<{ id: OteBandId; label: string }> = [
  { id: "band-900", label: "〜900万円" },
  { id: "band-900-1500", label: "900万〜1,500万円" },
  { id: "band-1500-2200", label: "1,500万〜2,200万円" },
  { id: "band-2200-plus", label: "2,200万円以上" },
];

const oteBandToStageIds: Record<OteBandId, CareerStageId[]> = {
  "band-900": ["sdr-bdr", "smb-commercial"],
  "band-900-1500": ["smb-commercial", "mid-market"],
  "band-1500-2200": ["mid-market", "enterprise"],
  "band-2200-plus": ["enterprise", "manager"],
};

export type EnglishLevelId = "business" | "conversational" | "growing";

export const englishLevels: Array<{ id: EnglishLevelId; label: string }> = [
  { id: "business", label: "ビジネスレベルで問題なく話せる" },
  { id: "conversational", label: "日常会話レベル" },
  { id: "growing", label: "これから伸ばしていきたい" },
];

export type MotivationId =
  | "high-ote"
  | "ai-data"
  | "security"
  | "enterprise-deals"
  | "new-territory"
  | "technical-selling"
  | "english-heavy"
  | "specialization"
  | "fast-growth"
  | "career-path";

export const motivations: Array<{ id: MotivationId; label: string; keywords: string[] }> = [
  { id: "high-ote", label: "高いOTEで大きく稼ぎたい", keywords: ["OTE", "稼ぎたい"] },
  { id: "ai-data", label: "AI・データ領域の最先端に関わりたい", keywords: ["AI", "データ", "エージェント"] },
  { id: "security", label: "セキュリティ・脅威インテリジェンス領域を極めたい", keywords: ["セキュリティ", "脅威"] },
  { id: "enterprise-deals", label: "エンタープライズの大型商談を経験したい", keywords: ["エンタープライズ", "大型商談", "C-suite", "C-Suite"] },
  { id: "new-territory", label: "新規開拓・裁量の大きい環境で動きたい", keywords: ["新規開拓", "裁量", "拡大期", "自ら動き方"] },
  { id: "technical-selling", label: "技術理解を伴う提案力を鍛えたい", keywords: ["技術理解", "エンジニア", "技術営業"] },
  { id: "english-heavy", label: "英語を使う環境に身を置きたい", keywords: ["英語"] },
  { id: "specialization", label: "業界特化・専門性を築きたい", keywords: ["業界特化", "官公庁", "専門性"] },
  { id: "fast-growth", label: "急成長企業でスピード感を求めたい", keywords: ["急成長", "スピード感"] },
  { id: "career-path", label: "カルチャー・キャリアパスの明確さを重視したい", keywords: ["カルチャー", "キャリアパス", "One Team"] },
];

export type MatchAnswers = {
  careerStage: CareerStageId | null;
  oteBand: OteBandId | null;
  englishLevel: EnglishLevelId | null;
  motivationIds: MotivationId[];
};

export type MatchResult = {
  slug: string;
  name: string;
  category: string;
  score: number;
  matchedMotivationLabels: string[];
  hasOpenRoleAtStage: boolean;
  commentary: string;
};

const trackedSlugs = ["salesforce", "datadog", "servicenow", "snowflake", "mongodb", "braze", "crowdstrike", "hubspot"];

export function computeMatches(answers: MatchAnswers): MatchResult[] {
  const selectedMotivations = motivations.filter((m) => answers.motivationIds.includes(m.id));
  const oteStageIds = answers.oteBand ? oteBandToStageIds[answers.oteBand] : [];

  const results = trackedSlugs.map((slug) => {
    const company = companies.find((c) => c.slug === slug);
    const intel = getCompanyPublicIntelligence(slug);
    if (!company || !intel) return null;

    const companyJobs = jobs.filter((job) => job.companySlug === slug);
    const jobStageIds = new Set(companyJobs.map((job) => getCompTierForSegment(job.segment).id));

    let score = 0;
    const matchedMotivationLabels: string[] = [];

    for (const motivation of selectedMotivations) {
      const hit = intel.fitTags.some((tag) => motivation.keywords.some((keyword) => tag.includes(keyword)));
      if (hit) {
        score += 3;
        matchedMotivationLabels.push(motivation.label);
      }
    }

    const hasOpenRoleAtStage = answers.careerStage ? jobStageIds.has(answers.careerStage) : false;
    if (hasOpenRoleAtStage) score += 2;

    if (oteStageIds.some((id) => jobStageIds.has(id))) score += 1;

    const careerLine = intel.cultureNotes.careerValue.body;
    const commentary =
      matchedMotivationLabels.length > 0
        ? `選んだ「${matchedMotivationLabels[0]}」に近い特徴を持つ会社です。${careerLine}`
        : careerLine;

    return {
      slug,
      name: company.name,
      category: company.category,
      score,
      matchedMotivationLabels,
      hasOpenRoleAtStage,
      commentary,
    };
  });

  return results
    .filter((r): r is MatchResult => r !== null)
    .sort((a, b) => b.score - a.score);
}
