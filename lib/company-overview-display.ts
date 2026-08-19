import type { CompanyPublicIntelligence, PublicFact } from "@/lib/company-public-intelligence";

type JapanOfficeDisplayInput = {
  entryStatus?: "not-entered" | "pre-entry-signal";
  officeValue: string;
  japanSinceValue: string;
  milestones: CompanyPublicIntelligence["marketStatus"]["milestones"];
};

const locationPattern = /(〒|北海道|東京都|京都府|大阪府|.{2,3}県|東京|横浜|大阪|丸の内|大手町|日本橋|赤坂|六本木|渋谷|新宿|新橋|霞が関|虎ノ門|八重洲|日暮里|府中|ランドマークタワー|ミッドタウン|ヒルズ|ビル|タワー|スクエア)/;
const unavailableAddressPattern = /^(?:未確認|非公開|確認不能|実稼働オフィスは確認不能|常設オフィス未確認|公式一次情報で確認不能|住所未確認|開設準備中・住所未確認)$/;
const duplicateOverviewFactPattern = /^(?:日本法人(?:設立)?|国内法人|日本進出(?:年)?|日本市場進出|東京(?:拠点|オフィス|office)|国内拠点|日本(?:拠点|オフィス)|日本法人での想定従業員数)$/i;

function normalizeOfficeAddress(value: string, entryStatus?: JapanOfficeDisplayInput["entryStatus"]) {
  if (entryStatus === "pre-entry-signal") return "常設オフィス未確認";
  if (entryStatus === "not-entered" || /未進出/.test(value)) return "日本法人住所なし";

  let normalized = value
    .trim()
    .replaceAll("Tokyo", "東京")
    .replaceAll("Osaka", "大阪")
    .replace(/office/gi, "オフィス")
    .replace(/remote/gi, "リモート")
    .replace(/[（(][^）)]*(?:19|20)\d{2}[^）)]*[）)]/g, "")
    .replace(/^.*?(?:株式会社|合同会社|K\.?K\.?)\s*[・／/]\s*/i, "")
    .replace(/^[A-Za-z0-9 .&()-]+Japan\s*[・／/]\s*/i, "")
    .replace(/を含む国内採用.*$/, "")
    .replace(/\s*\/\s*Japan\s+(?:Sales|Revenue|GTM|Commercial|Client).*$/i, "")
    .replace(/・?オフィス$/i, "")
    .replace(/street address/gi, "詳細住所")
    .replace(/現住所非公開/g, "詳細住所非公開")
    .replace(/正確な住所は確認不能/g, "詳細住所未確認")
    .replace(/街区住所は公式確認不能/g, "詳細住所未確認")
    .replace(/住所・EBC稼働は確認不能/g, "詳細住所未確認")
    .replace(/詳細住所は非公開/g, "詳細住所非公開")
    .replace(/詳細住所は確認不能/g, "詳細住所未確認")
    .replace(/詳細番地非公開/g, "詳細住所非公開")
    .replace(/[（(]求人記載[）)]/g, "")
    .replace(/\s+/g, " ")
    .replace(/[・／/\s]+$/, "")
    .trim();

  normalized = normalized.split("。")[0].trim();
  if (unavailableAddressPattern.test(normalized)) return "住所未確認";
  if (/(?:Sales|Revenue|GTM|Commercial|Client|sales coverage|国内顧客|日本語公式サイト|採用|Country Manager配下|優先|リモート|hybrid)/i.test(normalized)) return "住所未確認";
  if (!locationPattern.test(normalized)) return "住所未確認";
  return normalized;
}

function normalizedYear(value: string) {
  const monthMatch = value.match(/((?:19|20)\d{2})\s*(?:年|[.／/-])\s*(\d{1,2})/);
  if (monthMatch) return `${monthMatch[1]}年${Number(monthMatch[2])}月`;
  const yearMatch = value.match(/((?:19|20)\d{2})/);
  if (!yearMatch) return undefined;
  return `${yearMatch[1]}年${/以前/.test(value) ? "以前" : ""}`;
}

function resolveJapanEntryYear(input: JapanOfficeDisplayInput) {
  if (input.entryStatus === "pre-entry-signal") return "日本GTM・採用を確認";
  if (input.entryStatus === "not-entered" || /未設立|未進出/.test(input.japanSinceValue)) return "日本未進出";
  if (/(?:未確認|確認不能|非公開|不明|未特定|確認済み|採用|求人|GTM)/i.test(input.japanSinceValue)) return "日本進出年未確認";
  const fromStat = normalizedYear(input.japanSinceValue);
  if (fromStat) return fromStat;

  if (input.japanSinceValue.trim()) return "日本進出年未確認";
  const milestone = input.milestones.find((item) =>
    /(日本|東京|国内).*(進出|開始|設立|開設|参入|拠点|オフィス|office)/i.test(`${item.label}${item.detail}`),
  );
  const fromMilestone = milestone ? normalizedYear(milestone.year) : undefined;
  return fromMilestone ?? "日本進出年未確認";
}

export function getJapanOfficeDisplay(input: JapanOfficeDisplayInput) {
  return {
    address: normalizeOfficeAddress(input.officeValue, input.entryStatus),
    entryYearNote: `（${resolveJapanEntryYear(input)}）`,
  };
}

export function isOverviewSnapshotDuplicateFact(fact: Pick<PublicFact, "label">) {
  return duplicateOverviewFactPattern.test(fact.label.trim());
}

export function getUniqueOverviewFacts(facts: PublicFact[]) {
  return facts.filter((fact) => !isOverviewSnapshotDuplicateFact(fact));
}
