import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-25";

const apryse = buildDailyCompanyIntelligence({
  slug: "apryse", name: "Apryse", jobConfirmed: true, jobUrl: "https://jobs.lever.co/apryse/45fb8fc3-c804-4547-86df-f64b3507f2ed", officialUrl: "https://apryse.com/company/our-story", customersUrl: "https://apryse.com/customers", financeUrl: "https://apryse.com/company/careers",
  problem: "ソフトウェア企業がPDF、Office、CAD等の表示、編集、変換、署名、抽出を個別開発すると、開発期間、書式互換性、安全性、保守負荷が製品ごとに重くなる。",
  origin: "1998年にカナダでPDFTronとして始まり、PDF技術から複数社の買収と製品統合で文書ライフサイクル全体へ広がり、2023年にApryseへ改称した。",
  externalNeed: "AIによる文書抽出、電子署名、アクセシビリティ、監査、複数端末の利用が広がるほど、企業は文書を外部へ出さず、自社製品内で一貫して処理する必要がある。",
  solution: "Web、server、mobile向けSDKとiText、Xodo等で、文書の表示、編集、変換、比較、墨消し、署名、OCR、データ抽出を製品へ組み込む。",
  selection: "Nutrient、Syncfusion、Aspose、Adobeの文書API、オープンソース・内製と比べ、対応書式、端末内処理、表示精度、開発期間、ライセンス、長期保守を同じ用途で比較する。",
  growth: "会社公式は従業員670人超、導入企業2万社超、Fortune 100の85%で利用と公表。売上・利益は非公開で、数値は各社内の利用範囲を示さない。",
  role: "日本担当Enterprise Account Executiveが、技術・製品責任者と文書処理SDKの評価、要件整理、交渉、受注を推進する。",
  organization: "デンバー、バンクーバー、ボストン、シンガポール、ヘントの拠点は公式掲載。日本法人、国内拠点、雇用主体、国内人数は未確認。",
  career: "完成品SaaSではなく、顧客の製品設計と開発工数に入り、組み込みSDKのbuild-vs-buy判断を受注と長期利用へ変える経験。",
  globalHeadcount: "670人超（会社公式Careers）", japanPresence: "日本法人・国内拠点は未確認。日本担当リモート求人1件", japanSince: "未進出",
  customer: { company: "PiNOR EDMS", outcome: "Apryse SDKでEPC文書の技術レビュー周期を40%短縮し、メールでの文書交換を最大70%削減したと会社事例で紹介。" },
  facts: [["創業","1998年","PDFTronとしてカナダで創業。"],["従業員","670人超","会社公式Careers。"],["導入企業","2万社超","会社公式。"],["Fortune 100","85%","利用企業の割合。利用範囲は非公開。"],["日本拠点","未確認","日本法人・雇用主体も未確認。"],["日本求人","1件","Enterprise Account Executive, Japan。"]],
  products: [["Apryse SDK","Web、server、mobileに文書表示・編集・変換・抽出を組み込む。","https://apryse.com/sdk"],["iText","Java・.NETでPDFを作成・操作するライブラリ。","https://itextpdf.com/"],["Xodo","PDFの編集、結合、署名を行う利用者向け製品。","https://xodo.com/"]],
  competitors: "Nutrient、Syncfusion、Aspose、Adobe Document Services、オープンソース・内製実装", leader: ["Cassidy Smirnow","Chief Executive Officer","https://apryse.com/company/our-people"], local: ["未確認","日本事業責任者","https://jobs.lever.co/apryse"],
  work: ["フルリモート","日本国内リモート","固定出社日は公式求人で未記載","会社公式はremote-first、対象求人はRemoteと記載","雇用主体、就業時間帯、顧客訪問・出張を選考で確認"],
  preEntry: { verdict: "進出可能性は中。日本市場専任の営業求人はあるが、日本法人、国内拠点、雇用・契約主体は未確認。", signal: "日本全域を担当するEnterprise Account Executiveを、日本語・英語必須のリモート職として公式募集。", hurdle: "日本法人、雇用主体、契約・請求・一次支援、ソリューションエンジニア配置、国内顧客事例を確認できない。", conditions: ["日本の開発・製品責任者から技術評価と有償契約を再現する。","日本語の契約、請求、技術資料、障害連絡の責任主体を定める。","営業と技術評価・導入後支援を持続する収益基盤を作る。"], watches: ["日本法人・国内拠点","雇用・契約・請求主体","日本向け技術職求人","日本企業の定量事例","日本語サポート"] },
}, checkedAt);
const hiring = apryse.marketStatus.milestones.find((milestone) => milestone.label === "日本採用を確認");
if (hiring) hiring.year = "2026.10";
apryse.sources.push(
  { id: "apryse-story", label: "Apryse Our Story", url: "https://apryse.com/company/our-story", kind: "企業公式", scope: "創業・改称・製品範囲", checkedAt },
  { id: "apryse-careers", label: "Apryse Careers", url: "https://apryse.com/company/careers", kind: "企業公式", scope: "従業員規模・拠点・勤務方針", checkedAt },
  { id: "apryse-japan-job", label: "Enterprise Account Executive, Japan", url: "https://jobs.lever.co/apryse/45fb8fc3-c804-4547-86df-f64b3507f2ed", kind: "企業公式", scope: "現行求人・日本市場・責任・言語・勤務形態", checkedAt },
  { id: "apryse-customers", label: "Apryse Customers", url: "https://apryse.com/customers", kind: "企業公式", scope: "導入企業数・顧客層・導入目的", checkedAt },
  { id: "apryse-pinor", label: "PiNOR EDMS customer story", url: "https://apryse.com/blog/categories/Customer", kind: "企業公式", scope: "文書レビュー時間・メール交換の定量成果", checkedAt },
  { id: "gbiz-headcount-apryse", label: "gBizINFO Apryse法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
apryse.companyStats.japanOffice = { value: "未確認", detail: "会社公式の拠点一覧と公的法人検索で、Apryseと結びつく日本法人・国内拠点を特定できない。", sourceId: "gbiz-headcount-apryse" };
apryse.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本法人・事業所を特定できず、日本の想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-apryse" };
if (apryse.salesMarketOutlook) apryse.salesMarketOutlook.cases = [{ company: "PiNOR EDMS", need: "EPC文書のレビューとメール交換を短縮する組み込み基盤が必要だった。日本企業事例ではない。", sourceId: "apryse-pinor" }];

export const daily20261025IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { apryse };
