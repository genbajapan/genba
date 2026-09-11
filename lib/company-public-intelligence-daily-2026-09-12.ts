import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-12";

const cloudera = buildDailyCompanyIntelligence({
  slug: "cloudera", name: "Cloudera", jobConfirmed: true,
  jobUrl: "https://cloudera.wd5.myworkdayjobs.com/External_Career", officialUrl: "https://jp.cloudera.com/about.html",
  customersUrl: "https://jp.cloudera.com/about/news-and-blogs/press-releases/20220112.html", financeUrl: "https://www.cloudera.com/about.html",
  problem: "データがオンプレミスと複数クラウドへ分散し、AI利用のたびに移動、複製、権限、監査が増える課題を解く。",
  origin: "2008年、Hadoopを企業で安全かつ継続的に使えるデータ基盤へするため米国で創業。",
  externalNeed: "生成AIを業務へ組み込む企業は、機密データを移し過ぎず、品質、権限、追跡可能性、本番運用を同時に満たす必要がある。",
  solution: "オンプレミスと複数クラウドのデータ、分析、機械学習、生成AIを共通の管理・統制下で動かす。",
  selection: "既存データ基盤を残したまま複数環境を横断できる範囲、AI本番化、権限・系譜、運用の一貫性で比較する。",
  growth: "会社は10億ドル超のARRと25エクサバイト超の管理データを公表。日本ではAIの技術営業・実装職3件を同時募集。",
  role: "日本向けのApplied AI SpecialistとForward Deployed AI Engineer 2件が、課題発見、技術検証、AI実装、本番化を分担する。",
  organization: "Cloudera株式会社・東京。gBizINFOの事業所被保険者数21人。",
  career: "顧客の実データと運用制約へ入り、AIの技術検証から本番成果までを作る技術営業・実装経験。",
  globalHeadcount: "1,001〜5,000人規模の公開集計（現員は変動あり）", japanPresence: "Cloudera株式会社・東京・京橋。gBizINFOの事業所被保険者数21人", japanSince: "2011年に日本法人を確認",
  customer: { company: "NEC・塩野義製薬・ヤフー・サイボウズ", outcome: "日本事業10周年時の公式発表で、国内企業のデータ分析・基盤利用例として紹介。" },
  facts: [["創業","2008年","米国で創業。"],["管理データ","25EB超","会社公式。"],["ARR","10億ドル超","会社公式。"],["国内規模","21人","gBizINFO事業所被保険者数。"],["国内実績","10年以上","2022年に日本事業10周年を発表。"],["日本求人","3件","AI技術営業・実装職。"]],
  products: [["Cloudera Data Platform","複数環境のデータ、分析、AIを共通統制。","https://jp.cloudera.com/products/cloudera-data-platform.html"],["Cloudera AI","企業データを使うAI開発と本番運用を支援。","https://www.cloudera.com/products/machine-learning.html"],["Data Governance","権限、系譜、監査を横断管理。","https://www.cloudera.com/products/sdxa/data-governance.html"]],
  competitors: "Databricks、Snowflake、AWS、Microsoft、Google Cloud、各種オンプレミス基盤",
  leader: ["Charles Sansbury","Chief Executive Officer","https://www.cloudera.com/about/leadership.html"], local: ["山賀 裕二","リージョナル・バイスプレジデント兼カントリーマネージャー","https://jp.cloudera.com/about/news-and-blogs/press-releases/20250403.html"],
  work: ["ハイブリッド","日本Remote・東京Hybrid","職種によりRemoteまたはHybrid","Forward Deployed AI EngineerはJapan-Remote","顧客訪問・地域出張・勤務条件は職種ごとに確認"],
}, checkedAt);
cloudera.sources.push({ id: "gbiz-headcount-cloudera", label: "gBizINFO Cloudera株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=6010001145639", kind: "公的機関", scope: "日本法人・所在地・事業所被保険者数", checkedAt });
cloudera.companyStats.japanHeadcount = { value: "21人", detail: "厚生年金保険・健康保険適用事業所の被保険者数。役員・制度対象外・業務委託等を含む総従業員数ではない。", sourceId: "gbiz-headcount-cloudera" };
cloudera.companyStats.japanOffice = { value: "東京・京橋", detail: "公式拠点情報とgBizINFOの所在地を照合。", sourceId: "gbiz-headcount-cloudera" };

const boomi = buildDailyCompanyIntelligence({
  slug: "boomi", name: "Boomi", jobConfirmed: true,
  jobUrl: "https://boomi.com/company/careers/", officialUrl: "https://boomi.com/ja/",
  customersUrl: "https://boomi.com/ja/customer/JAL/", financeUrl: "https://boomi.com/resources/resources-library/boomi-innovations-may-2026-ja/",
  problem: "買収やクラウド導入でアプリ、データ、APIが増え、接続の個別開発と変更対応が事業速度を下げる課題を解く。",
  origin: "2000年、企業間取引の接続を簡単にする統合技術から米国で創業し、クラウド型統合基盤へ発展。",
  externalNeed: "生成AIとAIエージェントが既存業務を実行するほど、企業は接続先、データ品質、権限、API、失敗時の復旧を統制する必要がある。",
  solution: "アプリ・データ統合、API管理、自動化、データ管理、AIエージェントの設計と統制を一つの基盤でつなぐ。",
  selection: "接続部品の広さだけでなく、開発速度、再利用、運用監視、API統制、AIエージェントを既存業務へ安全に接続する範囲で比較する。",
  growth: "会社は3万社超の顧客と30万超の接続を公表。日本では大企業向け直販営業2件を同時募集。",
  role: "日本のAccount Executive 2件が、大企業の新規開拓、経営層との複雑商談、社内専門家を束ねた提案と受注を担う。",
  organization: "ブーミー株式会社・東京。gBizINFOの事業所被保険者数19人。",
  career: "小規模な国内組織で、統合・API・自動化・AIの全社基盤を経営投資へ翻訳する企業営業経験。",
  globalHeadcount: "1,001〜5,000人規模の公開集計（現員は変動あり）", japanPresence: "ブーミー株式会社・東京・恵比寿。gBizINFOの事業所被保険者数19人", japanSince: "日本法人を確認",
  customer: { company: "日本航空（JAL）", outcome: "基幹・周辺システムの連携開発を標準化し、開発期間短縮と再利用を進めた事例を公開。" },
  facts: [["創業","2000年","米国で創業。"],["顧客","3万社超","会社公式。"],["接続","30万超","会社公式。"],["国内規模","19人","gBizINFO事業所被保険者数。"],["国内事例","JAL・JERA等","会社公式。"],["日本求人","2件","大企業向け直販営業。"]],
  products: [["Boomi Enterprise Platform","統合、自動化、API、データ、AIを一つの基盤で運用。","https://boomi.com/platform/"],["Integration","アプリとデータをローコードで接続。","https://boomi.com/platform/integration/"],["API Management","APIの設計、公開、保護、監視を管理。","https://boomi.com/platform/api-management/"]],
  competitors: "MuleSoft、Informatica、Workato、Microsoft、各クラウドの統合サービス、内製連携",
  leader: ["Steve Lucas","Chairman and Chief Executive Officer","https://boomi.com/company/leadership/"], local: ["河野 英太郎","代表取締役社長 CEO","https://boomi.com/ja/resources/resources-library/boomi-aws-summit-japan-2026/"],
  work: ["未確認","日本勤務","出社日数は公式求人で未確認","完全リモートの明記なし","顧客訪問・出張・勤務条件は面接確認"],
}, checkedAt);
boomi.sources.push({ id: "gbiz-headcount-boomi", label: "gBizINFO ブーミー株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=2010403027281", kind: "公的機関", scope: "日本法人・所在地・事業所被保険者数", checkedAt });
boomi.companyStats.japanHeadcount = { value: "19人", detail: "厚生年金保険・健康保険適用事業所の被保険者数。役員・制度対象外・業務委託等を含む総従業員数ではない。", sourceId: "gbiz-headcount-boomi" };
boomi.companyStats.japanOffice = { value: "東京・渋谷区", detail: "2026年の会社公式発表とgBizINFOの所在地を照合。", sourceId: "gbiz-headcount-boomi" };

const cockroachLabs = buildDailyCompanyIntelligence({
  slug: "cockroach-labs", name: "Cockroach Labs", jobConfirmed: false,
  jobUrl: "https://job-boards.greenhouse.io/cockroachlabs", officialUrl: "https://www.cockroachlabs.com/about/",
  customersUrl: "https://www.cockroachlabs.com/customers/", financeUrl: "https://www.cockroachlabs.com/blog/series-f-announcement-vision/",
  problem: "データベースを複数地域へ広げるほど、障害復旧、停止時間、整合性、地域ごとの運用が複雑になる課題を解く。",
  origin: "Googleで大規模分散データベースを経験した創業者たちが、Viewfinder運営時の分割・障害対応の苦労から、壊れにくいSQLデータベースを2015年に公開。",
  externalNeed: "24時間止められないデジタル事業とAIサービスは、地域障害へ耐えながら、正確な取引データ、低遅延、データ所在、クラウド選択肢を満たす必要がある。",
  solution: "SQLと強い整合性を保ちながら、複数地域・複数クラウドへ自動分散し、障害時に復旧するデータベースを提供する。",
  selection: "障害時の復旧目標、地域配置、整合性、SQL互換性、運用負荷、クラウド中立性を同じ業務要件で比較する。",
  growth: "2021年に50億ドル評価を公表。2026年9月はSingaporeでAPAC向け営業・技術営業を確認したが、日本求人は0件。",
  role: "SingaporeのAPAC Sales Engineering Manager、Senior Staff Sales Engineer、Sales Development Representativeを確認。日本担当、日本雇用、日本求人は未確認。",
  organization: "公式拠点一覧に日本はなく、Singapore求人をAPACの顧客接点として確認。日本法人・国内拠点は未確認。",
  career: "正式進出後は、分散データ、クラウド、規制、事業継続を経営と技術の両面で設計する市場立ち上げ経験になり得る。",
  globalHeadcount: "501〜1,000人規模の公開集計（現員は変動あり）", japanPresence: "日本法人・国内拠点・日本求人は未確認。SingaporeでAPAC向け3職種を確認", japanSince: "未進出",
  customer: { company: "Netflix・Cisco・Squarespace・FanDuel", outcome: "Netflixは380超のクラスター運用など、複数地域・大規模サービスの利用事例を公開。" },
  facts: [["公開","2015年","CockroachDBを公開。"],["評価額","50億ドル","2021年会社公表。"],["利用","数万クラスター","2021年会社公表。"],["APAC採用","Singapore 3件","営業・技術営業。"],["日本法人","未確認","公式拠点・法人を確認できず。"],["日本求人","0件","公式Greenhouseで確認。"]],
  products: [["CockroachDB","分散SQLと強い整合性を複数地域で提供。","https://www.cockroachlabs.com/product/"],["CockroachDB Cloud","管理型の分散SQLを複数クラウドで運用。","https://www.cockroachlabs.com/product/cloud/"],["Multi-Region","データ配置、低遅延、地域障害耐性を設計。","https://www.cockroachlabs.com/product/multi-region/"]],
  competitors: "Google Cloud Spanner、Amazon Aurora、YugabyteDB、Oracle、PostgreSQL、各種クラウドDB",
  leader: ["Spencer Kimball","Co-founder and Chief Executive Officer","https://www.cockroachlabs.com/about/"], local: ["未確認","日本・APAC責任者","https://www.cockroachlabs.com/careers/"],
  work: ["ハイブリッド","Singapore勤務（日本求人なし）","求人別の出社頻度は未確認","日本居住の完全リモートではない","日本の雇用主体・勤務条件へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中。APACの営業・技術営業基盤はあるが、日本専任体制、国内顧客事例、日本語支援は未確認。",
    signal: "SingaporeでAPAC向けの営業、技術営業管理、営業開発を公式募集。",
    hurdle: "日本法人、国内拠点、日本担当求人、日本語販売・技術支援、国内公開事例を確認できない。",
    conditions: ["Singaporeから日本企業の有償需要と更新を再現する。","日本語の販売・技術資料と一次支援を整える。","日本のデータ所在・契約・請求・セキュリティ審査へ対応する。","国内SI・クラウド・販売パートナーの導入体制を作る。","国内事例と粗利が専任組織の固定費を上回る。"],
    watches: ["Japan・Tokyo求人","日本法人・国内拠点","国内顧客事例","日本語製品・技術支援","Singapore求人のJapan territory表記","国内クラウド・SI提携"],
  },
}, checkedAt);

cockroachLabs.sources.push({ id: "cockroach-contact-offices", label: "Cockroach Labs Contact", url: "https://www.cockroachlabs.com/contact/", kind: "企業公式", scope: "公式拠点一覧・日本拠点未確認", checkedAt });
cockroachLabs.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本法人・国内事業所を特定できず、日本での想定従業員数を0人とは扱わない。", sourceId: "cockroach-contact-offices" };
if (cockroachLabs.marketStatus.japanGrowth?.entryAssessment) {
  cockroachLabs.marketStatus.japanGrowth.entryAssessment.factSignals = [
    { title: "APAC営業採用", body: "SingaporeでSales Development Representativeを公式募集。", sourceIds: ["cockroach-labs-job"] },
    { title: "APAC技術営業", body: "SingaporeでSenior Staff Sales Engineerを公式募集。", sourceIds: ["cockroach-labs-job"] },
    { title: "APAC管理職", body: "SingaporeでSr. Manager, Sales Engineering - APACを公式募集。", sourceIds: ["cockroach-labs-job"] },
    { title: "企業成長", body: "2021年に50億ドル評価と数万クラスターの利用を会社が公表。", sourceIds: ["cockroach-labs-finance"] },
  ];
  cockroachLabs.marketStatus.japanGrowth.entryAssessment.hurdles = [
    { title: "日本法人・拠点", body: "公式拠点一覧に日本を確認できない。", sourceIds: ["cockroach-contact-offices"] },
    { title: "日本求人", body: "公式Greenhouseで日本勤務地・日本担当求人を確認できない。", sourceIds: ["cockroach-labs-job"] },
    { title: "国内事例", body: "日本企業の国内利用を示す公式事例を確認できない。", sourceIds: ["cockroach-labs-customers"] },
    { title: "日本語支援", body: "日本語の販売、契約、導入、障害対応の常設体制を確認できない。", sourceIds: ["cockroach-labs-company"] },
  ];
}

export const daily20260912IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  cloudera,
  boomi,
  "cockroach-labs": cockroachLabs,
};

export function applyDaily20260912Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const updates: Array<[string, string, string, string]> = [
    ["walkme", "Director, Alliances and Channels", "2026.09.12", "公式求人URLが404となり、現行の公式Lever求人一覧にも存在しないため掲載から除外。これだけで日本の採用停止や事業縮小を示すものではない。"],
    ["channel-talk", "AX Sales", "2026.09.12", "公式Lever求人ID 321f0cae-b7e3-4459-bbb8-ff0f34d8fa20が404となり、現行のJapan求人一覧にも存在しないため掲載から除外。これだけで日本の採用停止や事業縮小を示すものではない。"],
  ];
  for (const [slug, title, date, detail] of updates) {
    const intelligence = intelligenceBySlug[slug];
    if (!intelligence) continue;
    intelligence.researchedAt = checkedAt;
    intelligence.marketStatus.milestones = [
      ...intelligence.marketStatus.milestones.filter((item) => !`${item.label}${item.detail}`.includes(title)),
      { year: date, label: `${title}求人終了`, detail, sourceId: `${slug}-job` },
    ];
  }
}
