type EntrySignalCompany = {
  entryStatus?: "not-entered" | "pre-entry-signal";
  salesRoles: number;
};

export const PRE_ENTRY_SIGNAL_ACTIVE_LABEL = "日本進出準備中（法人未確認・日本採用あり）";
export const PRE_ENTRY_SIGNAL_PAST_LABEL = "日本未進出・進出シグナルあり";
export const PRE_ENTRY_SIGNAL_FILTER_LABEL = "日本進出準備・シグナル";
export const PRE_ENTRY_SIGNAL_DEFINITION =
  "「日本に人がいない」という意味ではありません。日本法人・常設拠点は未確認でも、現行の日本市場担当求人がある企業を「日本進出準備中」、過去に求人を観測した企業を「進出シグナルあり」と表示します。日本在住・日本担当の社員がすでにいる場合も含み、雇用主体は公開情報だけで確定していません。";

export function getPreEntrySignalLabel(company: EntrySignalCompany) {
  return company.salesRoles > 0 ? PRE_ENTRY_SIGNAL_ACTIVE_LABEL : PRE_ENTRY_SIGNAL_PAST_LABEL;
}
