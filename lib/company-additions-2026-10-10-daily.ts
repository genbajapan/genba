import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-10";

export const companies20261010Daily: Company[] = [
  {
    slug: "tulip-interfaces",
    name: "Tulip Interfaces",
    category: "製造現場・コンポーザブルMES",
    broadCategory: "コマース・業界特化",
    hq: "マサチューセッツ州サマーヴィル（米国）",
    japanPresence: "2026年は日本在住リモート、2027年にオフィス開設予定。日本向け公式求人4件を確認",
    hiringStatus: "積極採用",
    salesRoles: 4,
    description: "製造現場がノーコードで作業、品質、追跡、機器データのアプリを組み立てる基盤。日本で営業・技術・導入・支援を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://tulip.co/careers/",
    tags: ["Manufacturing", "Composable MES", "No-Code", "Frontline Operations", "Japan Remote"],
  },
  {
    slug: "whatnot",
    name: "Whatnot",
    category: "ライブコマース・コレクター市場",
    broadCategory: "コマース・業界特化",
    hq: "ロサンゼルス（米国）",
    japanPresence: "Whatnot Japan合同会社、渋谷拠点、日本限定パイロットを確認。東京の公式求人9件を確認",
    hiringStatus: "積極採用",
    salesRoles: 8,
    description: "ライブ配信、オークション、コミュニティを組み合わせたコレクター向け市場。日本立ち上げの技術、運営、カテゴリ、支援を広く募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/whatnot",
    tags: ["Live Commerce", "Marketplace", "Creator Economy", "Collectibles", "Tokyo"],
  },
  {
    slug: "solve-intelligence",
    name: "Solve Intelligence",
    category: "特許実務・AI知的財産基盤",
    broadCategory: "AI・データ基盤",
    hq: "ロンドン（英国）",
    japanPresence: "日本法人・国内拠点は未確認。日本の弁理士・知財部門を担当する海外拠点の公式求人1件を確認",
    hiringStatus: "継続観測",
    salesRoles: 1,
    description: "発明開示、特許出願、中間処理、クレームチャート、ポートフォリオ分析を特許専門AIで支援。日本実務対応を本格化する段階。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/solveintelligence",
    tags: ["日本進出兆候", "Patent AI", "Legal Tech", "Intellectual Property", "Japanese Market"],
    entryStatus: "pre-entry-signal",
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、日本市場の課題を世界の製品・組織につなぎたい人に向く。`,
      thingsToKnow: "目標、達成率、担当範囲、国内支援体制、評価・昇進、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を受注、導入、利用、運営、顧客KPIで定量化できれば、隣接する海外テクノロジー企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客・組織成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "業界特化ソフトウェア、市場立ち上げ、顧客運営、技術導入、複数関係者を動かす業務の経験が隣接する。",
      nextCompanies: "日本市場の担当範囲と成果を数字で残せれば、国責任者、専門領域の事業開発、顧客組織、技術組織へ広げやすい。",
    },
  };
}

export const jobs20261010Daily: Job[] = [
  makeJob({
    id: "tulip-account-executive-pharma-japan-7776005003", companySlug: "tulip-interfaces", title: "Account Executive, 製薬", segment: "Japan Pharma Enterprise Sales", location: "日本国内（リモート）", workStyle: "2026年はフルリモート。2027年にオフィス開設予定", language: "日本語は母語または業務水準、英語は業務水準", source: { label: "Tulip Careers (Greenhouse)", url: "https://tulip.co/careers/job-posting/?gh_jid=7776005003" },
    descriptionSummary: "日本の製薬・バイオ・ライフサイエンス企業に対し、新規開拓から受注までを担い、日本独自の営業の型を作る。", genbaTake: "製品説明ではなく、電子バッチ記録、逸脱管理、監査対応の課題を投資判断へ変える初期の専任営業。", desiredProfile: "製薬・バイオへの企業ソフトウェア営業5年以上、MES・QMS・LIMS、GxP、MEDDPICC、複雑な調達・品質保証組織への営業が重要。", compensationReality: "日本の基本給、変動給、目標、達成率、株式条件は公開情報で確認できない。",
  }),
  makeJob({ id: "tulip-manufacturing-solutions-engineer-japan-7660955003", companySlug: "tulip-interfaces", title: "Manufacturing Solutions Engineer", segment: "Japan Manufacturing Delivery", location: "日本国内（リモート）", workStyle: "2026年はリモート。日本国内の顧客現場対応あり", language: "日本語と英語の業務運用が必要", source: { label: "Tulip Careers (Greenhouse)", url: "https://tulip.co/careers/job-posting/?gh_jid=7660955003" }, descriptionSummary: "製造現場の要件をTulipアプリ、機器接続、データ、運用設計に変え、導入と横展開を支援する。", genbaTake: "個別開発で終わらず、現場データと作業を再利用できる標準アプリへ変える導入職。", desiredProfile: "製造・プロセス改善、MES・IoT・低コード、要件定義、顧客向け導入の経験が隣接する。", compensationReality: "日本の給与、賞与、株式、稼働率、同時案件数、出張頻度は未確認。" }),
  makeJob({ id: "tulip-product-support-engineer-japan-7660945003", companySlug: "tulip-interfaces", title: "Product Support Engineer", segment: "Japan Technical Support", location: "日本国内（リモート）", workStyle: "2026年はリモート", language: "日本語と英語の顧客・社内対応が必要", source: { label: "Tulip Careers (Greenhouse)", url: "https://tulip.co/careers/job-posting/?gh_jid=7660945003" }, descriptionSummary: "日本の顧客からの製品・アプリ・機器接続の問題を調査し、解決と知識化を進める。", genbaTake: "チケット処理で終わらず、製造現場の停止リスクを予防運用と製品改善へ戻す技術支援。", desiredProfile: "企業ソフトウェア支援、API・ネットワーク・データの切り分け、日英の説明力が重要。", compensationReality: "給与、シフト、待機、SLA、平均チケット数、評価指標は公開情報で確認できない。" }),
  makeJob({ id: "tulip-senior-devops-engineer-japan-7640896003", companySlug: "tulip-interfaces", title: "Senior DevOps Engineer", segment: "Japan Cloud Infrastructure", location: "日本国内（リモート）", workStyle: "2026年はリモート。オンコール対応あり", language: "日本語と英語はともに業務水準", source: { label: "Tulip Careers (Greenhouse)", url: "https://tulip.co/careers/job-posting/?gh_jid=7640896003" }, descriptionSummary: "米国・欧州・アジアにまたがるクラウド基盤、CI/CD、可観測性、自動化、障害対応を担う。", genbaTake: "日本顧客の要件を個別環境でしのぐのではなく、世界共通の安定運用と自動化に織り込む基盤職。", desiredProfile: "DevOps・SRE経験5〜7年以上、Kubernetes、Terraform、AWSまたはAzure、可観測性、Go・TypeScript・Pythonなどが重要。", compensationReality: "日本の給与、株式、オンコール回数、障害頻度、エラーバジェットは未確認。" }),

  makeJob({ id: "whatnot-customer-experience-manager-japan-93f4e65d", companySlug: "whatnot", title: "Customer Experience Manager, Japan", segment: "Japan Customer Experience Leadership", location: "Tokyo, Japan", workStyle: "ハイブリッド。東京ハブの通勤圏内が必要", language: "日本語は母語水準、英語は流暢", source: { label: "Whatnot Careers (Ashby)", url: "https://jobs.ashbyhq.com/whatnot/93f4e65d-de09-4729-a96e-f08d2ee8bc9e" }, descriptionSummary: "日本の初期サポート責任者として、チーム、処理手順、品質、CSAT、応答時間、製品改善を構築する。", genbaTake: "窓口管理ではなく、日本の購入者・出品者の問題を運営と製品の両方へ戻す立ち上げ責任。", desiredProfile: "顧客支援6年以上、エージェント管理、運用改善、数値管理、日英の部門横断連携が重要。", compensationReality: "給与、株式、チーム人数、応答SLA、対応量、営業時間は未確認。" }),
  makeJob({ id: "whatnot-marketing-manager-japan-dae66ab7", companySlug: "whatnot", title: "Marketing Manager, Japan", segment: "Japan Marketplace Marketing", location: "Tokyo, Japan", workStyle: "リモートファースト。東京ハブでの協業あり", language: "日本語は母語水準、英語は流暢", source: { label: "Whatnot Careers (Ashby)", url: "https://jobs.ashbyhq.com/whatnot/dae66ab7-94b1-47ee-83fa-8758b96d1e5f" }, descriptionSummary: "日本の出品者供給、コミュニティ、ソーシャルメディア、オンライン・対面施策を設計・実行する。", genbaTake: "広告の到達ではなく、質の高い出品者と購入者を同時に増やし、市場の流動性を作るマーケティング。", desiredProfile: "日本の消費者文化、創作者・出品者コミュニティ、イベント、ソーシャル運用、データに基づく改善が重要。", compensationReality: "給与、株式、予算、顧客獲得単価、出品者定着指標は未確認。" }),
  makeJob({ id: "whatnot-strategy-operations-senior-manager-japan-4f63929c", companySlug: "whatnot", title: "Strategy & Operations Senior Manager, Japan", segment: "Japan Commerce Strategy & Operations", location: "Tokyo, Japan", workStyle: "リモートファースト。東京ハブの通勤圏内が必要", language: "日英の部門横断連携が必要", source: { label: "Whatnot Careers (Ashby)", url: "https://jobs.ashbyhq.com/whatnot/4f63929c-6f24-4b4d-a09b-5abf21baba0e" }, descriptionSummary: "日本の購入後運用、物流、不正、信頼・安全、サービス品質の戦略と実行を担う初代の戦略運営職。", genbaTake: "個別の事故処理を、市場全体の信頼、速度、コストを改善するシステムと運用に変える役割。", desiredProfile: "戦略・運営7〜10年、部門横断の改善、市場・物流・信頼リスク、データ分析が重要。", compensationReality: "給与、株式、予算権限、チーム規模、日本市場の指標は未確認。" }),
  makeJob({ id: "whatnot-customer-experience-agent-japanese-48a5fcba", companySlug: "whatnot", title: "Customer Experience Agent (Japanese Speaking)", segment: "Japan Customer Support", location: "Tokyo, Japan", workStyle: "リモートファースト。東京ハブの通勤圏内が必要", language: "日本語は母語水準、英語は流暢", source: { label: "Whatnot Careers (Ashby)", url: "https://jobs.ashbyhq.com/whatnot/48a5fcba-35c4-4cdc-be51-9948cb9d78a9" }, descriptionSummary: "購入、出品、注文、配送、アカウントの問い合わせを日英で解決し、再発防止へつなげる。", genbaTake: "国内立ち上げでまだ定型化されていない問題を、個別対応から知識と運用へ変える顧客支援。", desiredProfile: "メール・チャット支援3年以上、市場運営、Zendesk等、日英の問題解決が重要。", compensationReality: "給与、株式、勤務時間帯、休日対応、対応件数、品質評価は未確認。" }),
  makeJob({ id: "whatnot-category-associate-japan-a6f3c20d", companySlug: "whatnot", title: "Category Associate, Japan", segment: "Japan Category Growth", location: "Tokyo, Japan", workStyle: "リモートファースト。東京ハブの通勤圏内が必要", language: "日本語は母語水準、英語は流暢", source: { label: "Whatnot Careers (Ashby)", url: "https://jobs.ashbyhq.com/whatnot/a6f3c20d-ae09-4215-954c-2a2b366eb8a9" }, descriptionSummary: "担当カテゴリの出品者発掘、導入、成長支援、コミュニティ、施策、データ分析を担う。", genbaTake: "商材を並べるのではなく、有力な出品者とファンが繰り返し参加するカテゴリ経済圏を作る。", desiredProfile: "営業またはアカウント管理3年以上、創作者・出品者組織、基礎的なSQLとデータ分析が重要。", compensationReality: "給与、株式、担当出品者数、取扱高・定着指標、外出頻度は未確認。" }),
  makeJob({ id: "whatnot-trust-risk-agent-japan-1e1e4a05", companySlug: "whatnot", title: "Trust & Risk Agent, Japan", segment: "Japan Marketplace Trust & Risk", location: "Tokyo, Japan", workStyle: "リモートファースト。東京ハブの通勤圏内が必要", language: "日本の利用者とグローバル組織への対応が必要", source: { label: "Whatnot Careers (Ashby)", url: "https://jobs.ashbyhq.com/whatnot/1e1e4a05-25a8-44e4-8a46-77f406488d61" }, descriptionSummary: "不正、規約違反、本人確認、注文・取引の高感度なケースを調査し、利用者への説明と予防を行う。", genbaTake: "個別適否の判定だけでなく、不正を減らしつつ正常な出品者・購入者の体験を損なわないルールと運用を作る。", desiredProfile: "トラスト・リスク、不正対策、顧客支援、センシティブな調査、数値と根拠に基づく判断が重要。", compensationReality: "給与、株式、シフト、待機、処理量、エスカレーション比率は未確認。" }),
  makeJob({ id: "whatnot-category-manager-japan-8f677043", companySlug: "whatnot", title: "Category Manager, Japan", segment: "Japan Category Leadership", location: "Tokyo, Japan", workStyle: "リモートファースト。東京ハブの通勤圏内が必要", language: "日本語は母語水準、英語は流暢", source: { label: "Whatnot Careers (Ashby)", url: "https://jobs.ashbyhq.com/whatnot/8f677043-db26-40e3-8da2-8c263b3f4468" }, descriptionSummary: "担当カテゴリの上位出品者、戦略的提携、育成、販売施策、利用者の課題をまとめて市場を拡大する。", genbaTake: "短期の出品数だけでなく、有力な出品者が成長し、購入者が戻る両面市場の循環を設計する責任。", desiredProfile: "市場、創作者経済、カテゴリ管理、出品者営業、分析、不確実な環境での実行力が重要。", compensationReality: "給与、株式、担当取扱高、出品者数、維持率、チーム規模は未確認。" }),
  makeJob({ id: "whatnot-localization-qa-japanese-577326cf", companySlug: "whatnot", title: "Japanese App Localization QA Specialist (Contract, 3 months)", segment: "Japan Product Localization", location: "Tokyo, Japan", workStyle: "リモートファースト。3カ月の契約", language: "日本語の母語水準が必要", source: { label: "Whatnot Careers (Ashby)", url: "https://jobs.ashbyhq.com/whatnot/577326cf-758e-466f-b803-cddf676979cd" }, descriptionSummary: "アプリとWebの日本語、文脈、用語、利用導線を検証し、日本の購入者・出品者に自然な体験を作る。", genbaTake: "翻訳文の誤字確認ではなく、日本独自の商習慣と市場運営が製品体験に正しく反映されるかを保証する。", desiredProfile: "日本語の校正・ローカライズ、アプリQA、利用者体験、課題の再現と明確な報告が重要。", compensationReality: "契約単価、週当たり時間、更新・正社員化、対象範囲は公開情報で確認できない。" }),
  makeJob({ id: "whatnot-staff-software-engineer-japan-6054df86", companySlug: "whatnot", title: "Staff Software Engineer - Japan", segment: "Japan New Markets Engineering", location: "Tokyo, Japan", workStyle: "リモートファースト。東京オフィスで定期的な協業が必要", language: "日本語と英語はともに準流暢以上", source: { label: "Whatnot Careers (Ashby)", url: "https://jobs.ashbyhq.com/whatnot/6054df86-f47f-4b12-965d-8201ea127ec7" }, descriptionSummary: "日本市場の物流、出品者導入、本人確認、取引、購入体験を製品に実装し、国内技術組織の基盤を作る。", genbaTake: "国別の個別対応を作るのではなく、日本向けの要件を他市場にも再利用できる世界共通アーキテクチャにする初期リーダー。", desiredProfile: "8年以上の開発、フルスタック、技術方針、0→1の製品・市場立ち上げ、日英の連携が重要。", compensationReality: "公式求人は基本給年1,900万〜2,600万円と株式を掲載。別の表示額も混在するため、適用範囲と最終額は選考で確認が必要。" }),

  makeJob({ id: "solve-intelligence-legal-product-engineer-japanese-693f3600", companySlug: "solve-intelligence", title: "Legal and Product Engineer (Japanese Speaking)", segment: "Japan Patent Product & Market", location: "New YorkまたはLondon、日本へ定期出張", workStyle: "海外拠点のハイブリッド。日本国内勤務の求人ではない", language: "日本の特許実務を日本語で担当し、英語で開発組織と連携", source: { label: "Solve Intelligence Careers (Ashby)", url: "https://jobs.ashbyhq.com/solveintelligence/693f3600-2df6-4e9d-87b3-7a84b6919dab" }, descriptionSummary: "日本の特許事務所・企業知財部門への実演、導入、パイロット、日本特許庁実務の品質評価、製品改善を担う。", genbaTake: "販売と製品開発の間で、日本特許実務の言語・法的精度・信頼を検証し、将来の国内展開条件を作る初期役割。", desiredProfile: "特許出願・中間処理の実務3年以上、日本特許庁実務、技術的な客戸対応、製品開発との協業が重要。", compensationReality: "公式求人はニューヨーク向け基本給10万〜22万ドルを掲載。ロンドン条件、出張、株式、日本拠点展開後の条件は未確認。" }),
];
