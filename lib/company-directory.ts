import type { CompanyStat } from "@/lib/company-public-intelligence";

export type CompanyDirectoryEntry = {
  officialWebsite: {
    url: string;
    locale: "ja" | "global";
  };
  globalScaleFallback?: CompanyStat & {
    sourceUrl: string;
    sourceLabel: string;
  };
};

export type GlobalScale = CompanyStat | NonNullable<CompanyDirectoryEntry["globalScaleFallback"]>;

const linkedInScale = (value: string, sourceUrl: string): CompanyDirectoryEntry["globalScaleFallback"] => ({
  value,
  detail: "LinkedIn企業ページの会社規模レンジ。公式の厳密な在籍人数ではなく、グローバル規模をつかむための公開集計。",
  sourceUrl,
  sourceLabel: "LinkedIn企業ページ",
});

export const companyDirectoryBySlug: Record<string, CompanyDirectoryEntry> = {
  salesforce: { officialWebsite: { url: "https://www.salesforce.com/jp/", locale: "ja" } },
  mongodb: { officialWebsite: { url: "https://www.mongodb.com/ja-jp", locale: "ja" } },
  braze: { officialWebsite: { url: "https://www.braze.com/ja", locale: "ja" } },
  hubspot: { officialWebsite: { url: "https://www.hubspot.jp/", locale: "ja" } },
  okta: { officialWebsite: { url: "https://www.okta.com/jp/", locale: "ja" } },
  zendesk: { officialWebsite: { url: "https://www.zendesk.co.jp/", locale: "ja" } },
  uipath: { officialWebsite: { url: "https://www.uipath.com/ja/", locale: "ja" } },
  confluent: {
    officialWebsite: { url: "https://www.confluent.io/ja-jp/", locale: "ja" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/confluent/"),
  },
  pagerduty: { officialWebsite: { url: "https://www.pagerduty.co.jp/", locale: "ja" } },
  amplitude: { officialWebsite: { url: "https://amplitude.com/ja-jp", locale: "ja" } },
  contentsquare: { officialWebsite: { url: "https://contentsquare.com/ja-jp/", locale: "ja" } },
  anaplan: {
    officialWebsite: { url: "https://www.anaplan.com/jp/", locale: "ja" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/anaplan/"),
  },
  qualtrics: {
    officialWebsite: { url: "https://www.qualtrics.com/jp/", locale: "ja" },
    globalScaleFallback: { value: "4,500人超", detail: "2026年4月の公開報道で言及された会社全体の規模。現在値は変動している可能性がある。", sourceUrl: "https://www.geekwire.com/2026/internal-memo-five-senior-execs-out-at-qualtrics-as-new-ceo-restructures-leadership-team/", sourceLabel: "公開報道" },
  },
  celonis: { officialWebsite: { url: "https://www.celonis.com/jp/", locale: "ja" } },
  workato: {
    officialWebsite: { url: "https://www.workato.com/ja-JP", locale: "ja" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/workato/"),
  },
  "monday-com": {
    officialWebsite: { url: "https://monday.com/lang/ja", locale: "ja" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/mondaydotcom/"),
  },
  miro: { officialWebsite: { url: "https://miro.com/ja/", locale: "ja" } },
  "new-relic": {
    officialWebsite: { url: "https://newrelic.com/jp", locale: "ja" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/new-relic-inc-/"),
  },
  coupa: {
    officialWebsite: { url: "https://www.coupa.com/ja", locale: "ja" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/coupa/"),
  },
  rubrik: { officialWebsite: { url: "https://www.rubrik.com/ja", locale: "ja" } },
  notion: {
    officialWebsite: { url: "https://www.notion.com/ja", locale: "ja" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/notionhq/"),
  },
  elevenlabs: { officialWebsite: { url: "https://elevenlabs.io/ja", locale: "ja" } },
  glean: { officialWebsite: { url: "https://www.glean.com/jp", locale: "ja" } },
  speak: {
    officialWebsite: { url: "https://www.speak.com/jp", locale: "ja" },
    globalScaleFallback: linkedInScale("51〜200人規模", "https://www.linkedin.com/company/usespeak/"),
  },
  dataiku: { officialWebsite: { url: "https://www.dataiku.com/ja/", locale: "ja" } },
  verkada: { officialWebsite: { url: "https://www.verkada.com/ja-JP/", locale: "ja" } },
  mirakl: {
    officialWebsite: { url: "https://www.mirakl.com/ja-jp/", locale: "ja" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/mirakl/"),
  },
  airwallex: { officialWebsite: { url: "https://www.airwallex.com/jp", locale: "ja" } },
  cambly: {
    officialWebsite: { url: "https://organizations.cambly.com/japan", locale: "ja" },
    globalScaleFallback: linkedInScale("51〜200人規模", "https://www.linkedin.com/company/cambly/"),
  },
  censys: {
    officialWebsite: { url: "https://censys.com/", locale: "global" },
    globalScaleFallback: linkedInScale("51〜200人規模", "https://www.linkedin.com/company/censysio/"),
  },
  halcyon: {
    officialWebsite: { url: "https://www.halcyon.ai/", locale: "global" },
    globalScaleFallback: linkedInScale("201〜500人規模", "https://www.linkedin.com/company/halcyonai/"),
  },
  ideals: {
    officialWebsite: { url: "https://www.idealsvdr.com/ja/", locale: "ja" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/idealsvdr/"),
  },
  lighthouse: { officialWebsite: { url: "https://www.mylighthouse.com/", locale: "global" } },
  marqvision: {
    officialWebsite: { url: "https://www.marqvision.com/jp/home", locale: "ja" },
    globalScaleFallback: linkedInScale("51〜200人規模", "https://www.linkedin.com/company/marqvision/"),
  },
  postman: {
    officialWebsite: { url: "https://www.postman.com/jp/", locale: "ja" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/postman-platform/"),
  },
  "sensor-tower": {
    officialWebsite: { url: "https://sensortower.com/ja", locale: "ja" },
    globalScaleFallback: linkedInScale("201〜500人規模", "https://www.linkedin.com/company/sensor-tower/"),
  },
  ubiquiti: {
    officialWebsite: { url: "https://ui.com/", locale: "global" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/ubiquiti-/"),
  },
  replit: {
    officialWebsite: { url: "https://replit.com/", locale: "global" },
    globalScaleFallback: linkedInScale("51〜200人規模", "https://www.linkedin.com/company/repl-it/"),
  },
  "grafana-labs": { officialWebsite: { url: "https://grafana.com/ja/", locale: "ja" } },
  elastic: {
    officialWebsite: { url: "https://www.elastic.co/jp/", locale: "ja" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/elastic-co/"),
  },
  knowbe4: {
    officialWebsite: { url: "https://www.knowbe4.jp/", locale: "ja" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/knowbe4/"),
  },
  deel: { officialWebsite: { url: "https://www.deel.com/ja/", locale: "ja" } },
  cohere: {
    officialWebsite: { url: "https://cohere.com/ja", locale: "ja" },
    globalScaleFallback: linkedInScale("201〜500人規模", "https://www.linkedin.com/company/cohere-ai/"),
  },
  deepl: { officialWebsite: { url: "https://www.deepl.com/ja/translator", locale: "ja" } },
  pendo: {
    officialWebsite: { url: "https://www.pendo.io/", locale: "global" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/pendo-io/"),
  },
  dragos: {
    officialWebsite: { url: "https://www.dragos.com/", locale: "global" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/dragos-inc./"),
  },
  anthropic: {
    officialWebsite: { url: "https://www.anthropic.com/ja", locale: "ja" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/anthropicresearch/"),
  },
  fireblocks: {
    officialWebsite: { url: "https://www.fireblocks.com/jp", locale: "ja" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/fireblocks/"),
  },
  wasabi: {
    officialWebsite: { url: "https://wasabi.com/ja", locale: "ja" },
    globalScaleFallback: linkedInScale("201〜500人規模", "https://www.linkedin.com/company/wasabitechnologies/"),
  },
  zscaler: {
    officialWebsite: { url: "https://www.zscaler.jp/", locale: "ja" },
    globalScaleFallback: linkedInScale("5,001〜10,000人規模", "https://www.linkedin.com/company/zscaler/"),
  },
  cloudflare: {
    officialWebsite: { url: "https://www.cloudflare.com/ja-jp/", locale: "ja" },
    globalScaleFallback: { value: "8,000人超の公開所属", detail: "LinkedIn企業ページで8,000人超の所属プロフィールを表示。公式の厳密な在籍人数とは異なる可能性がある。", sourceUrl: "https://www.linkedin.com/company/cloudflare/", sourceLabel: "LinkedIn企業ページ" },
  },
  planet: { officialWebsite: { url: "https://www.planet.com/", locale: "global" } },
  gong: {
    officialWebsite: { url: "https://www.gong.io/", locale: "global" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/gong-io/"),
  },
  nexthink: { officialWebsite: { url: "https://nexthink.com/ja", locale: "ja" } },
  mendix: {
    officialWebsite: { url: "https://www.mendix.com/ja/", locale: "ja" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/mendix/"),
  },
  cognition: {
    officialWebsite: { url: "https://cognition.com/", locale: "global" },
    globalScaleFallback: linkedInScale("201〜500人規模", "https://www.linkedin.com/company/cognition-ai/"),
  },
  harvey: {
    officialWebsite: { url: "https://www.harvey.ai/", locale: "global" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/harvey-ai/"),
  },
  clay: { officialWebsite: { url: "https://www.clay.com/", locale: "global" } },
  vanta: {
    officialWebsite: { url: "https://www.vanta.com/", locale: "global" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/vanta-security/"),
  },
  cribl: {
    officialWebsite: { url: "https://cribl.io/", locale: "global" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/cribl/"),
  },
  writer: {
    officialWebsite: { url: "https://writer.com/", locale: "global" },
    globalScaleFallback: linkedInScale("201〜500人規模", "https://www.linkedin.com/company/getwriter/"),
  },
  datadog: { officialWebsite: { url: "https://www.datadoghq.com/ja/", locale: "ja" } },
  scandit: {
    officialWebsite: { url: "https://www.scandit.com/jp/", locale: "ja" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/scandit/"),
  },
  docusign: {
    officialWebsite: { url: "https://www.docusign.com/ja-jp/", locale: "ja" },
    globalScaleFallback: linkedInScale("5,001〜10,000人規模", "https://www.linkedin.com/company/docusign/"),
  },
  hightouch: {
    officialWebsite: { url: "https://hightouch.com/", locale: "global" },
    globalScaleFallback: linkedInScale("201〜500人規模", "https://www.linkedin.com/company/hightouchio/"),
  },
  schrodinger: { officialWebsite: { url: "https://www.schrodinger.com/schrodinger-kk/", locale: "ja" } },
  rippling: { officialWebsite: { url: "https://www.rippling.com/", locale: "global" } },
  pinecone: {
    officialWebsite: { url: "https://www.pinecone.io/", locale: "global" },
    globalScaleFallback: linkedInScale("201〜500人規模", "https://www.linkedin.com/company/pinecone-io/"),
  },
  intercom: {
    officialWebsite: { url: "https://www.intercom.com/", locale: "global" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/intercom/"),
  },
  cursor: {
    officialWebsite: { url: "https://cursor.com/ja", locale: "ja" },
  },
  sierra: {
    officialWebsite: { url: "https://sierra.ai/jp", locale: "ja" },
    globalScaleFallback: linkedInScale("501〜1,000人規模", "https://www.linkedin.com/company/sierra-ai/"),
  },
  lucanet: {
    officialWebsite: { url: "https://www.lucanet.com/ja/", locale: "ja" },
  },
  addepar: {
    officialWebsite: { url: "https://addepar.com/", locale: "global" },
    globalScaleFallback: linkedInScale("1,001〜5,000人規模", "https://www.linkedin.com/company/addepar/"),
  },
};

const undisclosedPattern = /(非公開|非開示|確認でき|未確認)/;

export function getCompanyDirectoryEntry(slug: string) {
  return companyDirectoryBySlug[slug];
}

export function resolveGlobalScale(slug: string, stat?: CompanyStat): GlobalScale | undefined {
  const fallback = companyDirectoryBySlug[slug]?.globalScaleFallback;
  if (!stat || undisclosedPattern.test(stat.value)) return fallback ?? stat;
  return stat;
}

export function getGlobalScaleSource(scale?: GlobalScale) {
  if (!scale || !("sourceUrl" in scale) || typeof scale.sourceUrl !== "string") return undefined;
  const label = "sourceLabel" in scale && typeof scale.sourceLabel === "string" ? scale.sourceLabel : "公開ソース";
  return { url: scale.sourceUrl, label };
}
