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
  if (primaryHeadquarters.includes(", US") || primaryHeadquarters.includes("Utah") || primaryHeadquarters.includes("米国")) return "us";
  if (primaryHeadquarters.includes("Canada") || primaryHeadquarters.includes("カナダ")) return "canada";
  if (primaryHeadquarters.includes("Israel") || primaryHeadquarters.includes("イスラエル")) return "israel";
  if (/Australia|Singapore|South Korea|オーストラリア|シンガポール|韓国/.test(primaryHeadquarters)) return "apac";
  if (/UK|Germany|France|Switzerland|Ireland|Netherlands|Belgium|英国|ドイツ|フランス|スイス|アイルランド|オランダ|ベルギー|\bNL\b/.test(primaryHeadquarters)) return "europe";
  return "other";
}
