export type CompTier = {
  id: string;
  label: string;
  oteRange: string;
  note: string;
};

export const compTiers: CompTier[] = [
  {
    id: "sdr-bdr",
    label: "SDR / BDR",
    oteRange: "700万〜1,500万円",
    note: "新規開拓の初期接点を担う職種。ここから経験を積んでAEへ移るケースが多い。",
  },
  {
    id: "smb-commercial",
    label: "SMB・Commercial AE",
    oteRange: "900万〜1,600万円",
    note: "案件単価は小さいが商談数は多い。未経験からのAE挑戦で最初に着地しやすい帯域。",
  },
  {
    id: "mid-market",
    label: "Mid-Market AE",
    oteRange: "1,200万〜2,200万円",
    note: "SMBより大きな組織を、Enterpriseほど長い商談サイクルではなく担当する中間帯。",
  },
  {
    id: "enterprise",
    label: "Enterprise・Strategic AE",
    oteRange: "1,500万〜3,000万円",
    note: "大型商談・複数ステークホルダーとの折衝が前提。到達難易度も報酬も一段上がる。",
  },
];

const segmentTierMap: Record<string, string> = {
  SMB: "smb-commercial",
  Commercial: "smb-commercial",
  "Mid-Market": "mid-market",
  "GRB/SB": "smb-commercial",
  Enterprise: "enterprise",
  "Public Sector": "enterprise",
  Strategic: "enterprise",
  Partner: "mid-market",
  "Data & AI": "enterprise",
  "Enterprise / Manufacturing": "enterprise",
  "Strategic Enterprise": "enterprise",
  "Services / Post-Sales": "enterprise",
  "Enterprise / Sales Leadership": "enterprise",
};

export function getCompTierForSegment(segment: string): CompTier {
  const tierId = segmentTierMap[segment] ?? "mid-market";
  return compTiers.find((tier) => tier.id === tierId) ?? compTiers[2];
}

export const compBenchmarkSource = {
  label: "Robert Walters Japan Salary Survey 2026(IT Software, Sales)",
  url: "https://www.robertwalters.co.jp/en/our-services/salary-survey.html",
};
