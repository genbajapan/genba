import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";
import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";

const checkedAt = "2026-10-31";

const keyloop = buildDailyCompanyIntelligence({
  slug: "keyloop", name: "Keyloop", jobConfirmed: true,
  jobUrl: "https://jobs.lever.co/keyloop/9558b231-82a5-4f8e-86b2-b5379b77f3b8", officialUrl: "https://keyloop.com/",
  customersUrl: "https://keyloop.com/", financeUrl: "https://keyloop.com/about-us",
  problem: "自動車販売店では、車両販売、在庫、整備、顧客連絡、メーカー連携が別々の仕組みに分かれると、顧客の履歴と次の行動が途切れ、現場の二重入力と経営判断の遅れが生じる。",
  origin: "1976年に英国ハンガーフォードでKerridgeとして始まり、販売店管理システムを40年以上育てた。ADP Dealer Services、CDK Globalを経て、2021年にFrancisco Partnersによる買収後、Keyloopとして独立した。",
  externalNeed: "オンラインでの車選び、電動化、コネクテッド車、メーカー直販、整備収益の重要性が重なり、販売店は店舗とデジタルの顧客履歴、在庫、販売、整備をつないで顧客生涯価値を高める必要がある。",
  solution: "販売店管理、顧客接点、車両販売、在庫、整備、データ連携を統合し、メーカー、販売店、顧客の業務を一つの流れへつなぐ。",
  selection: "CDK Global、Reynolds and Reynolds、Dealertrack、メーカー純正システム、個別CRM・在庫・整備ツールと比べ、対象業務、既存システムとの接続、メーカー連携、現場定着、データ移行、総費用を同じ用途で比較する。",
  growth: "会社公式は、2万以上の小売事業者、80以上の自動車メーカー、90カ国以上、年間10億件以上の取引、従業員2,200人超を掲載する。",
  role: "日本のSenior Account Managerが既存・新規顧客を担当し、案件創出、提案、契約、利用拡大をCustomer Success・Professional Servicesと進める。",
  organization: "Keyloop Japan Co., Ltd.を東京都港区浜松町に確認。gBizINFOには事業所被保険者数の掲載がなく、国内人数を0人とは扱わない。",
  career: "自動車流通の業務を理解し、販売店の経営層と現場をつなぎ、既存顧客の拡張と新規受注を一貫して持つ経験。",
  globalHeadcount: "2,200人超（会社公式ESG Report 2024）", japanPresence: "Keyloop Japan Co., Ltd.・東京都港区", japanSince: "法人番号指定年月日は今回未確認",
  customer: { company: "Park's Motor Group（海外事例）", outcome: "Keyloop公式は、平均請求額と追加販売が増えたと紹介。提供会社作成事例で、日本企業の実名・定量事例は今回未確認。" },
  facts: [["創業の起点","1976年","英国ハンガーフォードでKerridgeとして開始。"],["従業員","2,200人超","ESG Report 2024。"],["小売事業者","2万以上","会社公式。"],["自動車メーカー","80以上","会社公式。"],["展開国","90カ国以上","会社公式。"],["日本求人","1件","Senior Account Manager, Japan。"]],
  products: [["Keyloop Platform","販売店管理、顧客接点、販売、整備のデータと業務を接続。","https://keyloop.com/"],["Keyloop DMS","自動車販売店の顧客、車両、在庫、販売、整備、会計業務を管理。","https://keyloop.com/"],["Keyloop APIs","メーカー・販売店・外部サービス間のデータ連携を支える。","https://keyloop.com/manufacturers"]],
  competitors: "CDK Global、Reynolds and Reynolds、Dealertrack、メーカー純正システム、個別CRM・在庫・整備ツール",
  leader: ["Tom Kilroy","CEO","https://keyloop.com/our-leadership"], local: ["未確認","日本事業責任者","https://jobs.lever.co/keyloop?location=Japan"],
  work: ["フルリモート","日本","固定出社日数なし","日本国内勤務","担当社数、出張、目標、達成率、Customer Successとの分担を選考で確認"],
}, checkedAt);

keyloop.sources.push(
  { id: "keyloop-about", label: "Keyloop About us", url: "https://keyloop.com/about-us", kind: "企業公式", scope: "沿革・創業の起点・事業", checkedAt },
  { id: "keyloop-esg-2024", label: "Keyloop ESG Report 2024", url: "https://keyloop.com/app/uploads/2024/10/Keyloop_ESG_Report_2024.pdf", kind: "企業公式", scope: "従業員・沿革・事業規模", checkedAt },
  { id: "keyloop-manufacturers", label: "Keyloop for manufacturers", url: "https://keyloop.com/manufacturers", kind: "企業公式", scope: "メーカー・接続・取引規模", checkedAt },
  { id: "keyloop-job", label: "Senior Account Manager, Japan", url: "https://jobs.lever.co/keyloop/9558b231-82a5-4f8e-86b2-b5379b77f3b8", kind: "企業公式", scope: "現行求人・職務・要件", checkedAt },
  { id: "keyloop-entities", label: "Keyloop Trading Entities", url: "https://keyloop.com/keyloop-trading-entities", kind: "企業公式", scope: "日本法人・住所", checkedAt },
  { id: "gbiz-headcount-keyloop", label: "gBizINFO Keyloop Japan Co Ltd", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=4010401047602", kind: "公的機関", scope: "日本法人・所在地・事業所被保険者数", checkedAt },
);
keyloop.companyStats.japanOffice = { value: "東京都港区", detail: "浜松町2-4-1 世界貿易センタービルディング南館17階。企業公式Trading EntitiesとgBizINFOで確認。", sourceId: "gbiz-headcount-keyloop" };
keyloop.companyStats.japanHeadcount = { value: "掲載なし", detail: "gBizINFOで対象法人と所在地を特定したが、事業所情報の厚生年金保険・健康保険の被保険者数は掲載されていない。役員・制度対象外・業務委託を含む総在籍人数を0人とは扱わない。", sourceId: "gbiz-headcount-keyloop" };
if (keyloop.salesMarketOutlook) keyloop.salesMarketOutlook.cases = [{ company: "Park's Motor Group（海外事例）", need: "Keyloop公式は平均請求額と追加販売が増えたと紹介。提供会社作成事例で、日本企業の実名・定量事例は今回未確認。", sourceId: "keyloop-customers" }];

export const daily20261031IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { keyloop };
