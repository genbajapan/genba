import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-26";

const qdrant = buildDailyCompanyIntelligence({
  slug: "qdrant", name: "Qdrant", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/qdrant.tech/43984944-5877-4611-b970-39519591b341", officialUrl: "https://qdrant.tech/about-us/",
  customersUrl: "https://qdrant.tech/customers/", financeUrl: "https://qdrant.tech/blog/series-b/",
  problem: "生成AIや意味検索で扱う埋め込みデータが増えると、単純なキーワード検索やライブラリだけでは、絞り込み、更新、低遅延、可用性、権限を本番規模で維持しにくい。",
  origin: "創業者Andrey Vasnetsovが既存ライブラリでは本番要件を満たせずベクトル検索エンジンを自作し、André Zayarniと2021年にベルリンで会社として立ち上げた。",
  externalNeed: "企業が検索、推薦、AIエージェントを実証から本番へ移すほど、モデルだけでなく、独自データを速く安全に検索し、配備場所と費用を管理できる基盤が必要になる。",
  solution: "オープンソースのベクトル検索エンジンとManaged Cloud、Hybrid Cloud、Enterprise、推論機能を提供し、意味検索と属性フィルタを大規模に運用する。",
  selection: "Pinecone、Weaviate、Milvus/Zilliz、Elasticsearch、PostgreSQL拡張、FAISS・内製と比べ、検索品質、絞り込み、遅延、運用、配備方式、費用、ロックインを同じ用途で比較する。",
  growth: "会社公式は100人超・20カ国超、累計2.5億ダウンロード超、GitHub 2.9万スターを掲載。2026年3月にAVP主導のSeries Bで5,000万ドルを調達した。",
  role: "日本を勤務地に含むSenior Technical Success ManagerとSenior Solutions Engineerが、APAC顧客の技術評価、本番設計、運用、利用拡大を担う。",
  organization: "ベルリン本社と分散勤務を会社公式で確認。日本法人、国内拠点、雇用主体、日本語の常設営業・技術支援は未確認。",
  career: "ベクトル検索の精度、遅延、可用性、費用を顧客のAI製品へ結び、実証から本番化・継続利用まで動かす経験。",
  globalHeadcount: "100人超（会社公式About）", japanPresence: "日本法人・国内拠点は未確認。日本を勤務地に含むAPAC技術職2件", japanSince: "未進出",
  customer: { company: "Bayer", outcome: "Hybrid Cloudを含むAI Hubを11.6万人の従業員向けに運用。会社事例はAI基盤全体で約20%の効率向上、8.3万件の成果物、月4.9万検索、7,500利用者を紹介するが、効果をQdrant単独には帰属できない。" },
  facts: [["創業","2021年","ベルリンで会社として設立。"],["従業員","100人超","20カ国超に分散。"],["利用","2.5億ダウンロード超","会社公式About。"],["資金調達","Series B 5,000万ドル","2026年3月。"],["日本法人","未確認","国内拠点・雇用主体も未確認。"],["日本向け求人","2件","APAC技術職で日本を勤務地に含む。"]],
  products: [["Qdrant Open Source","意味検索と属性フィルタを行うベクトル検索エンジン。","https://qdrant.tech/"],["Qdrant Cloud","管理型でベクトル検索基盤を配備・運用。","https://qdrant.tech/cloud/"],["Qdrant Hybrid Cloud","顧客のクラウド・基盤内で管理型運用を行う。","https://qdrant.tech/hybrid-cloud/"]],
  competitors: "Pinecone、Weaviate、Milvus/Zilliz、Elasticsearch、PostgreSQL拡張、FAISS・内製",
  leader: ["André Zayarni","Chief Executive Officer and Co-founder","https://qdrant.tech/about-us/"], local: ["未確認","日本事業責任者","https://qdrant.tech/contact-us/"],
  work: ["フルリモート","日本を含むAPAC","固定出社日なし","対象2求人はRemoteと記載","雇用主体、勤務時間帯、出張、顧客訪問、障害対応を選考で確認"],
  preEntry: {
    verdict: "進出可能性は中低。日本を勤務地に含むAPAC技術職2件はあるが、日本専任求人、日本法人、国内拠点、雇用主体、日本語支援は未確認。",
    signal: "APAC初期のTechnical Success ManagerとSolutions Engineerを募集し、両方で日本を候補勤務地に含める。",
    hurdle: "求人は地域横断で、日本専任ではない。日本法人、契約・請求・雇用主体、国内顧客事例、日本語支援、国内営業を確認できない。",
    conditions: ["日本企業の本番利用と更新・拡大を再現する。","日本語の契約、請求、技術支援、障害連絡の責任主体を定める。","地域横断の技術職だけでなく、日本市場を継続して開拓・支援する体制を作る。"],
    watches: ["日本法人・国内拠点","日本専任求人","雇用・契約・請求主体","日本企業の定量事例","日本語の営業・技術支援"],
  },
}, checkedAt);

qdrant.sources.push(
  { id: "qdrant-about", label: "Qdrant About", url: "https://qdrant.tech/about-us/", kind: "企業公式", scope: "創業・規模・拠点・利用", checkedAt },
  { id: "qdrant-series-b", label: "Qdrant Series B", url: "https://qdrant.tech/blog/series-b/", kind: "企業公式", scope: "資金調達・顧客・成長", checkedAt },
  { id: "qdrant-tsm", label: "Senior Technical Success Manager", url: "https://jobs.ashbyhq.com/qdrant.tech/43984944-5877-4611-b970-39519591b341", kind: "企業公式", scope: "現行求人・勤務地・責任・要件", checkedAt },
  { id: "qdrant-se", label: "Senior Solutions Engineer (APAC)", url: "https://jobs.ashbyhq.com/qdrant.tech/512b651a-3a52-4662-92c0-bcf84c0786af", kind: "企業公式", scope: "現行求人・勤務地・責任・要件", checkedAt },
  { id: "qdrant-bayer", label: "Bayer customer story", url: "https://qdrant.tech/customers/bayer/", kind: "企業公式", scope: "海外顧客の導入目的・規模・成果", checkedAt },
  { id: "gbiz-headcount-qdrant", label: "gBizINFO Qdrant法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
qdrant.companyStats.japanOffice = { value: "未確認", detail: "会社公式と公的法人検索で、日本法人・国内拠点を特定できない。", sourceId: "gbiz-headcount-qdrant" };
qdrant.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本法人・事業所を特定できず、日本の想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-qdrant" };
if (qdrant.salesMarketOutlook) qdrant.salesMarketOutlook.cases = [{ company: "Bayer（海外事例）", need: "11.6万人向けAI Hubで独自データの検索と配備統制が必要だった。約20%の効率向上はAI基盤全体の成果で、Qdrant単独効果ではない。", sourceId: "qdrant-bayer" }];
if (qdrant.marketStatus.japanGrowth) {
  qdrant.marketStatus.japanGrowth.headline = "日本法人・国内拠点は未確認。日本を候補勤務地に含むAPAC技術職2件";
  qdrant.marketStatus.japanGrowth.narrative = "Technical SuccessとSolutions Engineeringの地域横断求人で日本を勤務地に含める。ただし日本専任求人、法人、雇用主体、国内顧客、日本語支援は未確認。";
}

export const daily20261026IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { qdrant };
