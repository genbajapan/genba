type EntrySignalCompany = {
  entryStatus?: "not-entered" | "pre-entry-signal";
  salesRoles: number;
};

export const PRE_ENTRY_SIGNAL_ACTIVE_LABEL = "日本法人未確認・日本採用あり";
export const PRE_ENTRY_SIGNAL_PAST_LABEL = "日本法人未確認・過去に日本採用";
export const PRE_ENTRY_SIGNAL_FILTER_LABEL = "法人未確認・日本採用";
export const PRE_ENTRY_SIGNAL_DEFINITION =
  "日本で働く担当者がいる場合を含みます。日本法人の登記または公式な常設拠点を確認できない企業で、雇用主体が本国法人・EORなどのどれかは公開情報から確定していません。";

export function getPreEntrySignalLabel(company: EntrySignalCompany) {
  return company.salesRoles > 0 ? PRE_ENTRY_SIGNAL_ACTIVE_LABEL : PRE_ENTRY_SIGNAL_PAST_LABEL;
}
