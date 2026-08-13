export const headquartersRegions = [
  { value: "すべて", label: "すべて" },
  { value: "us", label: "米国" },
  { value: "europe", label: "欧州" },
  { value: "canada", label: "カナダ" },
  { value: "apac", label: "アジア太平洋" },
  { value: "israel", label: "イスラエル" },
] as const;

export type HeadquartersRegion = (typeof headquartersRegions)[number]["value"];

export function getHeadquartersRegion(headquarters: string): Exclude<HeadquartersRegion, "すべて"> | "other" {
  const primaryHeadquarters = headquarters.split("/")[0].trim();
  if (primaryHeadquarters.includes(", US") || primaryHeadquarters.includes("Utah")) return "us";
  if (primaryHeadquarters.includes("Canada")) return "canada";
  if (primaryHeadquarters.includes("Israel")) return "israel";
  if (primaryHeadquarters.includes("Australia") || primaryHeadquarters.includes("Singapore") || primaryHeadquarters.includes("South Korea")) return "apac";
  if (/UK|Germany|France|Switzerland|Ireland|Netherlands|Belgium|\bNL\b/.test(primaryHeadquarters)) return "europe";
  return "other";
}
