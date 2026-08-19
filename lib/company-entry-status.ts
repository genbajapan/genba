type EntrySignalCompany = {
  entryStatus?: "not-entered" | "pre-entry-signal";
  salesRoles: number;
};

export const PRE_ENTRY_SIGNAL_ACTIVE_LABEL = "日本進出の兆しあり";
export const PRE_ENTRY_SIGNAL_PAST_LABEL = "過去に日本進出の兆しあり";
export const PRE_ENTRY_SIGNAL_FILTER_LABEL = "日本進出の兆しあり";
export const PRE_ENTRY_SIGNAL_DEFINITION =
  "日本法人・常設拠点は未確認ですが、日本法人・拠点設立予定の公式発表、日本責任者・日本市場担当者の配置、現行の日本市場向け公式求人など、具体的な動きを現在確認している企業です。日本で働く担当者がすでにいる場合も含み、法人の有無や雇用主体とは分けて表示します。";
export const PRE_ENTRY_SIGNAL_PAST_DEFINITION =
  "過去に日本市場向け公式求人などの動きを確認しましたが、現在は終了しています。現行の「日本進出の兆しあり」には含めず、観測履歴として表示します。";

export function getPreEntrySignalLabel(company: EntrySignalCompany) {
  return company.salesRoles > 0 ? PRE_ENTRY_SIGNAL_ACTIVE_LABEL : PRE_ENTRY_SIGNAL_PAST_LABEL;
}

export function getPreEntrySignalDefinition(company: EntrySignalCompany) {
  return company.salesRoles > 0 ? PRE_ENTRY_SIGNAL_DEFINITION : PRE_ENTRY_SIGNAL_PAST_DEFINITION;
}
