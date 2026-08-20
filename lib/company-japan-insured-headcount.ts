import type { CompanyPublicIntelligence, ResearchSource } from "@/lib/company-public-intelligence";

const CHECKED_AT = "2026-08-18";
const NEW_COMPANY_CHECKED_AT = "2026-08-19";
const DAILY_20260821_CHECKED_AT = "2026-08-21";
const GBIZ_PROFILE_BASE = "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=";
const GBIZ_SEARCH_URL = "https://info.gbiz.go.jp/";

type VerifiedEntity = {
  corporateNumber: string;
  entityName: string;
  insuredCount?: number;
  caveat?: string;
};

// gBizINFOの法人プロフィールと、その「事業所」欄に掲載された
// 厚生年金保険・健康保険の被保険者数を2026-08-18に照合した。
// 2026-08-19追加分は国内法人を特定できない状態として監査対象へ加えた。
// insuredCountがない項目は法人番号までは一致したが、事業所行の掲載がなかった法人。
const VERIFIED_ENTITIES: Record<string, VerifiedEntity> = {
  mongodb: { corporateNumber: "2010003019010", entityName: "MongoDB Japan合同会社" },
  braze: { corporateNumber: "2010401154103", entityName: "Braze株式会社", insuredCount: 63 },
  hubspot: { corporateNumber: "6010001173961", entityName: "HubSpot Japan株式会社", insuredCount: 154 },
  okta: { corporateNumber: "6010001207629", entityName: "Okta Japan株式会社", insuredCount: 107 },
  zendesk: { corporateNumber: "2010401104446", entityName: "合同会社Zendesk", insuredCount: 88 },
  uipath: { corporateNumber: "6010001181808", entityName: "UiPath株式会社", insuredCount: 216 },
  confluent: { corporateNumber: "4010903006196", entityName: "Confluent Japan合同会社", insuredCount: 13 },
  pagerduty: { corporateNumber: "3010401166444", entityName: "PagerDuty株式会社", insuredCount: 46 },
  amplitude: { corporateNumber: "3010903006189", entityName: "Amplitude Analytics合同会社", insuredCount: 7 },
  contentsquare: { corporateNumber: "4010003037126", entityName: "Contentsquare Japan合同会社", insuredCount: 11 },
  anaplan: { corporateNumber: "5011001110443", entityName: "Anaplan Japan株式会社", insuredCount: 101 },
  qualtrics: { corporateNumber: "7360003007792", entityName: "クアルトリクス合同会社", insuredCount: 115 },
  celonis: { corporateNumber: "4010001197277", entityName: "Celonis株式会社", insuredCount: 66 },
  workato: { corporateNumber: "6010401162655", entityName: "Workato株式会社", insuredCount: 35 },
  "monday-com": { corporateNumber: "8010401164006", entityName: "monday.com株式会社", insuredCount: 13 },
  miro: { corporateNumber: "4010003034916", entityName: "ミロ・ジャパン合同会社" },
  "new-relic": { corporateNumber: "2010401139319", entityName: "New Relic株式会社", insuredCount: 86 },
  coupa: { corporateNumber: "1010401156802", entityName: "Coupa株式会社", insuredCount: 43 },
  rubrik: { corporateNumber: "2010401128107", entityName: "Rubrik Japan株式会社", insuredCount: 37 },
  notion: { corporateNumber: "7010403027995", entityName: "Notion Labs Japan合同会社", insuredCount: 94 },
  speak: { corporateNumber: "1700150135169", entityName: "Speakeasy Labs Inc" },
  dataiku: { corporateNumber: "6011001146305", entityName: "Dataiku Japan株式会社", insuredCount: 39 },
  verkada: { corporateNumber: "1010401170778", entityName: "Verkada Japan株式会社", insuredCount: 17 },
  mirakl: { corporateNumber: "5010401164347", entityName: "Mirakl株式会社", insuredCount: 10 },
  postman: { corporateNumber: "9010001233705", entityName: "Postman株式会社", insuredCount: 6 },
  "sensor-tower": { corporateNumber: "2010001262545", entityName: "Sensor Tower Japan株式会社" },
  ubiquiti: { corporateNumber: "8011001125934", entityName: "Ubiquiti Japan株式会社" },
  elastic: { corporateNumber: "4011301020723", entityName: "Elasticsearch株式会社", insuredCount: 38 },
  knowbe4: { corporateNumber: "8010403021766", entityName: "KnowBe4 Japan合同会社", insuredCount: 35 },
  deel: {
    corporateNumber: "4010001224766",
    entityName: "Deel Japan株式会社",
    insuredCount: 643,
    caveat: "EOR事業で同法人が雇用主となる人を含み得るため、Deel社内チームの人数とはみなさない。",
  },
  deepl: { corporateNumber: "9010003040612", entityName: "DeepLジャパン合同会社", insuredCount: 80 },
  pendo: { corporateNumber: "6140001118912", entityName: "Pendo.io Japan株式会社", insuredCount: 17 },
  anthropic: { corporateNumber: "6010003047429", entityName: "Anthropic Japan合同会社", insuredCount: 25 },
  fireblocks: { corporateNumber: "6010403036923", entityName: "Fireblocks Japan合同会社" },
  cloudflare: { corporateNumber: "1010401152941", entityName: "Cloudflare Japan株式会社", insuredCount: 71 },
  planet: { corporateNumber: "1010401192624", entityName: "Planet Labs Japan株式会社", insuredCount: 5 },
  nexthink: { corporateNumber: "7010403035486", entityName: "Nexthink合同会社", insuredCount: 14 },
  docusign: { corporateNumber: "1010001167695", entityName: "ドキュサイン・ジャパン株式会社", insuredCount: 112 },
  schrodinger: { corporateNumber: "3010001140279", entityName: "シュレーディンガー株式会社", insuredCount: 23 },
  lucanet: { corporateNumber: "2011001179003", entityName: "Lucanet Japan株式会社" },
  sysdig: { corporateNumber: "3010403019492", entityName: "Sysdig Japan合同会社", insuredCount: 10 },
  saviynt: { corporateNumber: "5010401196258", entityName: "Saviynt Japan株式会社" },
  walkme: { corporateNumber: "5010401142385", entityName: "WalkMe株式会社", insuredCount: 51 },
  sonar: { corporateNumber: "3010001251456", entityName: "SonarSource Japan株式会社", insuredCount: 8 },
  asana: { corporateNumber: "1010401144567", entityName: "Asana Japan株式会社", insuredCount: 39 },
  "channel-talk": { corporateNumber: "6700150067028", entityName: "株式会社Channel Corporation", insuredCount: 37 },
  "extreme-networks": { corporateNumber: "3010701023824", entityName: "Extreme Networks株式会社", insuredCount: 33 },
  gurobi: { corporateNumber: "3012401020085", entityName: "株式会社Gurobi Japan", insuredCount: 20 },
  "cato-networks": { corporateNumber: "8010401155500", entityName: "Cato Networks株式会社", insuredCount: 54 },
  patsnap: { corporateNumber: "1010403033454", entityName: "Patsnap合同会社", insuredCount: 5 },
  netskope: { corporateNumber: "9010401131426", entityName: "Netskope Japan株式会社", insuredCount: 51 },
  nice: { corporateNumber: "1010401099134", entityName: "ナイスジャパン株式会社", insuredCount: 56 },
  dialpad: { corporateNumber: "8010001175444", entityName: "Dialpad Japan株式会社", insuredCount: 14 },
  fivetran: { corporateNumber: "5010401180204", entityName: "Fivetran Japan株式会社" },
  shopify: { corporateNumber: "4010001187930", entityName: "Shopify Japan株式会社", insuredCount: 65 },
  figma: { corporateNumber: "5010401164834", entityName: "Figma Japan株式会社", insuredCount: 33 },
  sayari: { corporateNumber: "1010001258453", entityName: "Sayari Japan株式会社" },
  doubleverify: { corporateNumber: "6010401147771", entityName: "DoubleVerify Japan株式会社", insuredCount: 14 },
  similarweb: { corporateNumber: "3010401129830", entityName: "SimilarWeb Japan株式会社", insuredCount: 22 },
  appsflyer: { corporateNumber: "2011001122318", entityName: "AppsFlyer Japan株式会社", insuredCount: 12 },
  bluematrix: { corporateNumber: "8010003050182", entityName: "BlueMatrix合同会社" },
  ivanti: { corporateNumber: "9010401093419", entityName: "Ivanti Software株式会社", insuredCount: 20 },
  atlassian: { corporateNumber: "7011001095419", entityName: "アトラシアン株式会社", insuredCount: 77 },
  dynatrace: { corporateNumber: "4011003001897", entityName: "Dynatrace合同会社", insuredCount: 41 },
  gitlab: { corporateNumber: "6010403021867", entityName: "GitLab合同会社", insuredCount: 58 },
  cognition: { corporateNumber: "8010003050587", entityName: "Cognition AI Japan合同会社" },
  twilio: { corporateNumber: "1011003009480", entityName: "Twilio Japan合同会社", insuredCount: 22 },
  perforce: { corporateNumber: "4010403012901", entityName: "Delphix Software合同会社" },
  "fusion-worldwide": { corporateNumber: "9010003036643", entityName: "Fusion Trade Japan合同会社", insuredCount: 13 },
  dropbox: { corporateNumber: "8010401113045", entityName: "Dropbox Japan株式会社", insuredCount: 28 },
  fastly: { corporateNumber: "6010401117015", entityName: "ファストリー株式会社", insuredCount: 35 },
};

const NOT_ENTERED_SLUGS = new Set([
  "gong", "harvey", "clay", "vanta", "writer", "rippling", "pinecone", "intercom", "addepar", "sixsense",
  "apollo-io", "tines", "attio", "retool", "island", "1password", "klaviyo", "airtable", "mistral-ai", "lovable",
  "pigment", "ironclad", "vercel", "langchain", "lakera",
  "deepgram",
  "glean", "cambly", "censys", "lighthouse", "replit", "cohere", "dragos", "cribl",
  "hightouch", "cursor", "zadara", "abnormal-ai", "neural-concept", "patch", "mambu", "zilliz",
  "webflow",
]);

// 2026-08-18の一斉監査対象119社と、2026-08-19追加の3社。将来追加された会社へ未調査のまま
// 「確認済み」を自動付与しないため、対象slugを明示的に固定する。
const AUDITED_SLUGS = new Set([
  "mongodb", "braze", "hubspot", "okta", "zendesk", "uipath", "confluent", "pagerduty", "amplitude", "contentsquare",
  "anaplan", "qualtrics", "celonis", "workato", "monday-com", "miro", "new-relic", "coupa", "rubrik", "notion",
  "elevenlabs", "glean", "speak", "dataiku", "verkada", "mirakl", "cambly", "censys", "halcyon", "ideals",
  "lighthouse", "marqvision", "postman", "sensor-tower", "ubiquiti", "replit", "grafana-labs", "elastic", "knowbe4", "deel",
  "cohere", "deepl", "pendo", "dragos", "anthropic", "fireblocks", "wasabi", "cloudflare", "planet", "gong",
  "nexthink", "mendix", "cognition", "harvey", "clay", "vanta", "cribl", "writer", "scandit", "docusign",
  "hightouch", "schrodinger", "rippling", "pinecone", "intercom", "cursor", "sierra", "lucanet", "addepar", "sysdig",
  "saviynt", "walkme", "sonar", "asana", "channel-talk", "extreme-networks", "zadara", "sixsense", "abnormal-ai", "apollo-io",
  "wiz", "dbt-labs", "gurobi", "neural-concept", "patch", "lakera", "tines", "attio", "retool", "cato-networks",
  "patsnap", "netskope", "mambu", "nice", "island", "1password", "dialpad", "fivetran", "klaviyo", "shopify",
  "zilliz", "airtable", "figma", "mistral-ai", "tools-for-humanity", "lovable", "tanium", "sayari", "doubleverify", "similarweb",
  "appsflyer", "bluematrix", "black-duck", "ivanti", "pigment", "ironclad", "atlassian", "dynatrace", "vercel",
  "gitlab", "watchguard", "langchain", "twilio", "perforce", "fusion-worldwide", "deepgram",
  "dropbox", "fastly", "webflow",
]);

// 利益相反・編集方針により公開対象外のため、この一斉監査では触らない。
const EXCLUDED_SLUGS = new Set([
  "airwallex", "zscaler", "datadog", "veeva", "stripe", "aghanim", "primer", "adyen", "servicenow",
]);

function sourceFor(slug: string, entity?: VerifiedEntity): ResearchSource {
  const checkedAt = ["dropbox", "fastly", "webflow"].includes(slug)
    ? DAILY_20260821_CHECKED_AT
    : ["gitlab", "watchguard", "langchain", "lakera"].includes(slug)
      ? NEW_COMPANY_CHECKED_AT
      : CHECKED_AT;
  return {
    id: `gbiz-headcount-${slug}`,
    label: entity ? `Gビズインフォ ${entity.entityName}` : "Gビズインフォ 法人検索",
    url: entity ? `${GBIZ_PROFILE_BASE}${entity.corporateNumber}` : GBIZ_SEARCH_URL,
    kind: "公的機関",
    scope: entity
      ? `法人番号${entity.corporateNumber}・厚生年金保険/健康保険の被保険者数`
      : "国内法人の法人番号・事業所情報・日本法人での想定従業員数",
    checkedAt,
  };
}

export function applyJapanInsuredHeadcountAudit(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  for (const [slug, intelligence] of Object.entries(intelligenceBySlug)) {
    if (EXCLUDED_SLUGS.has(slug) || !AUDITED_SLUGS.has(slug)) continue;

    const entity = VERIFIED_ENTITIES[slug];
    const source = sourceFor(slug, entity);
    if (!intelligence.sources.some((item) => item.id === source.id)) intelligence.sources.push(source);

    if (entity?.insuredCount !== undefined) {
      intelligence.companyStats.japanHeadcount = {
        value: `${entity.insuredCount.toLocaleString("ja-JP")}人`,
        detail: [
          `${entity.entityName}について、gBizINFOの事業所情報に掲載された厚生年金保険・健康保険の被保険者数。${source.checkedAt}確認。`,
          "役員、制度の対象外となる従業者、他法人雇用者等との関係により、会社が通常いう社員総数とは一致しない場合がある。",
          entity.caveat,
        ].filter(Boolean).join(" "),
        sourceId: source.id,
      };
    } else if (entity) {
      intelligence.companyStats.japanHeadcount = {
        value: "掲載なし",
        detail: `${entity.entityName}（法人番号${entity.corporateNumber}）をgBizINFOで確認したが、事業所の被保険者数欄に行データの掲載はなかった。${source.checkedAt}確認。`,
        sourceId: source.id,
      };
    } else if (NOT_ENTERED_SLUGS.has(slug)) {
      intelligence.companyStats.japanHeadcount = {
        value: "対象法人未特定",
        detail: `公式情報とgBizINFOで会社ブランドに紐づく国内法人番号を特定できず、国内法人の被保険者数を掲載できない。日本在住・日本担当者が0人という意味ではなく、本国法人との直接雇用やEOR等の人数も含まない。${source.checkedAt}確認。`,
        sourceId: source.id,
      };
    } else {
      intelligence.companyStats.japanHeadcount = {
        value: "対象法人未特定",
        detail: `gBizINFOで会社ブランドと結びつく国内法人番号を特定できず、日本法人での想定従業員数を掲載できない。求人、外国会社、EORまたは販売パートナーの活動を国内法人の人数へ置き換えていない。${source.checkedAt}確認。`,
        sourceId: source.id,
      };
    }
  }
}
