import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-22";

const datarobot = buildDailyCompanyIntelligence({
  slug: "datarobot", name: "DataRobot", jobConfirmed: true,
  jobUrl: "https://www.datarobot.com/jp/careers/open-positions/job/102663/", officialUrl: "https://www.datarobot.com/jp/about-us/",
  customersUrl: "https://www.datarobot.com/jp/customers/septeni/", financeUrl: "https://www.datarobot.com/jp/newsroom/press/strengthening-investment-in-the-japanese-market/",
  problem: "予測モデル、生成AI、AIエージェントが部門ごとに分断され、本番展開、監視、費用、権限、説明責任を一貫して管理できない課題を解く。",
  origin: "応用データ科学者だったJeremy Achin氏とTom de Godoy氏が、専門家の手作業に依存する機械学習を自動化し、より多くの実務者へ広げるため2012年に創業した。",
  externalNeed: "AIエージェントが業務システムとデータへ直接触れるほど、企業は精度だけでなく、権限、監視、介入、費用、監査証跡を本番運用として持つ必要がある。",
  solution: "予測AI、生成AI、AIエージェントの構築、展開、監視、評価、ガバナンスを一つの企業向け基盤へまとめる。",
  selection: "モデル性能だけでなく、既存クラウド・業務への接続、オープンソースとの併用、本番監視、統制、国内データ保管、導入支援で比較する。",
  growth: "2012年創業。2024年にAPAC初の東京SaaSリージョンと国内中小企業向け価格を発表し、2026年には日本のカントリーマネージャー交代とAIエージェント本番運用への投資を公表した。",
  role: "日本のAI Engineer - Professional Servicesが戦略顧客とユースケースを定め、予測AI、生成AI、RAG、AIエージェントを実装・展開し、事業成果まで担う。",
  organization: "DataRobot Japan株式会社・東京。gBizINFOの事業所被保険者数35人。2026年7月から滝沢理氏がカントリーマネージャー。",
  career: "顧客の経営課題をAIアプリへ落とし込み、実装、本番展開、監視、ガバナンス、経営層への説明を一つの案件で経験できる。",
  globalHeadcount: "1,001〜5,000人規模の公開集計（現員は変動あり）", japanPresence: "DataRobot Japan株式会社・東京。gBizINFOの事業所被保険者数35人", japanSince: "2017年に日本法人登記を確認",
  customer: { company: "セプテーニ", outcome: "予測モデル開発を4カ月から1カ月未満へ短縮し、広告運用のKPIを従来比150%へ高めたと公式事例で説明。" },
  facts: [["創業","2012年","応用データ科学者が機械学習の実務を自動化する会社として創業。"],["東京リージョン","2024年発表","APAC初のDataRobot SaaSリージョン。"],["国内規模","35人","gBizINFO事業所被保険者数。"],["日本責任者","滝沢理氏","2026年7月1日付で就任。"],["勤務形態","国内フルリモート","顧客訪問に伴う出張25〜50%。"],["日本求人","1件","AI Engineer - Professional Services。"]],
  products: [["Agentic AI Platform","AIエージェントを構築・展開・監視・統制。","https://www.datarobot.com/jp/platform/agentic-ai/"],["Predictive AI","予測モデルの開発、展開、監視を自動化。","https://www.datarobot.com/jp/platform/predictive-ai/"],["AI Governance","モデルとエージェントのリスク、権限、監査を管理。","https://www.datarobot.com/jp/platform/ai-governance/"]],
  competitors: "Dataiku、Databricks、クラウド各社のAI基盤、各種内製MLOps・エージェント基盤",
  leader: ["Debanjan Saha","Chief Executive Officer","https://www.datarobot.com/about-us/"], local: ["滝沢 理","DataRobot Japan カントリーマネージャー","https://www.datarobot.com/jp/newsroom/new-country-manager-appointed-0701/"],
  work: ["フルリモート","日本国内フルリモート","定期出社なし","完全リモートを明記","顧客訪問のため25〜50%の出張あり"],
}, checkedAt);
datarobot.sources.push(
  { id: "datarobot-origin", label: "DataRobot company history and funding", url: "https://www.datarobot.com/newsroom/press/machine-learning-company-datarobot-accelerates-growth-33-million-new-funding/", kind: "企業公式", scope: "創業者・応用データ科学者による創業背景", checkedAt },
  { id: "datarobot-japan-leader", label: "DataRobot Japan country manager appointment", url: "https://www.datarobot.com/jp/newsroom/new-country-manager-appointed-0701/", kind: "企業公式", scope: "日本責任者・国内投資", checkedAt },
  { id: "gbiz-headcount-datarobot", label: "gBizINFO DataRobot Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=4011001110188", kind: "公的機関", scope: "日本法人・所在地・事業所被保険者数", checkedAt },
);
datarobot.companyStats.japanHeadcount = { value: "35人", detail: "gBizINFOの事業所情報に掲載された厚生年金保険・健康保険の被保険者数。役員・制度対象外・業務委託等を含む総在籍人数ではない。", sourceId: "gbiz-headcount-datarobot" };

const illumio = buildDailyCompanyIntelligence({
  slug: "illumio", name: "Illumio", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/illumio/a4f93cba-ae3e-4330-9d45-e34d1c8837fe", officialUrl: "https://www.illumio.com/company/about-illumio",
  customersUrl: "https://www.illumio.com/ja/customers", financeUrl: "https://www.illumio.com/company/about-illumio",
  problem: "攻撃者が一度侵入した後、クラウド、データセンター、端末の正規通信に紛れて横展開し、重要資産まで到達する課題を解く。",
  origin: "Andrew Rubin氏とPJ Kirner氏が、複雑で壊れやすかったマイクロセグメンテーションを簡素化するため2013年に創業した。",
  externalNeed: "侵入を完全に防ぐ前提が崩れ、生成AIとハイブリッドITで攻撃面が広がるなか、企業は侵害後の横展開を早く見つけ、業務を止めずに封じ込める必要がある。",
  solution: "通信関係をAIセキュリティグラフで可視化し、最小権限の分離ポリシーと即時封じ込めをクラウド、データセンター、端末へ適用する。",
  selection: "検知アラート数だけでなく、通信の可視化、既存環境を変えずに適用できる範囲、ポリシー設計、横展開の封じ込め、運用負荷で比較する。",
  growth: "会社公式はFortune 100の15社超、世界上位10銀行のうち6行を保護すると説明。日本法人は2021年登記で、国内顧客事例と東京のEnterprise Sales Executive求人を確認した。",
  role: "東京のEnterprise Sales Executiveが日本の大手企業で新規・既存商談を開拓し、侵害封じ込めの価値提案から受注、予測、社内外の関係者調整まで担う。",
  organization: "Illumio Japan合同会社・東京。gBizINFO事業所情報の被保険者数17人。国内のEnterprise Sales Executiveを募集。",
  career: "小規模な日本組織で、経営、セキュリティ、インフラ、パートナーを動かし、侵害後の事業継続を企業向け商談へ変える経験。",
  globalHeadcount: "501〜1,000人規模の公開集計（現員は変動あり）", japanPresence: "Illumio Japan合同会社・東京。gBizINFO事業所情報の被保険者数17人", japanSince: "2021年に日本法人登記を確認",
  customer: { company: "東映アニメーション", outcome: "アニメ制作を止めないため、侵害後の被害拡大を防ぐセキュリティ対策としてIllumioを採用したと公式事例で紹介。" },
  facts: [["創業","2013年","マイクロセグメンテーションを簡素化するため創業。"],["Fortune 100","15社超","会社公式が保護実績として掲載。"],["世界上位10銀行","6行","会社公式が保護実績として掲載。"],["日本法人","2021年","法人登記を確認。"],["国内規模","17人","gBizINFO事業所被保険者数。"],["日本求人","1件","Enterprise Sales Executive。"]],
  products: [["Illumio Segmentation","通信を可視化し最小権限の分離で横展開を止める。","https://www.illumio.com/products/segmentation"],["Illumio Insights","AIを使って危険な通信と横展開を検知・封じ込め。","https://www.illumio.com/products/illumio-insights"],["Illumio CloudSecure","クラウド資産と通信の可視化・分離を支援。","https://www.illumio.com/products/cloudsecure"]],
  competitors: "Akamai Guardicore、Cisco、Palo Alto Networks、クラウド各社・ネットワーク機器の分離機能",
  leader: ["Andrew Rubin","Chief Executive Officer and Founder","https://www.illumio.com/company/leadership"], local: ["未確認","日本事業責任者","https://www.illumio.com/ja/contact"],
  work: ["ハイブリッド","東京勤務","出社頻度は未確認","完全リモートの明記なし","顧客訪問と社内連携の頻度は選考で確認"],
}, checkedAt);
illumio.sources.push(
  { id: "illumio-origin", label: "About Illumio", url: "https://www.illumio.com/company/about-illumio", kind: "企業公式", scope: "創業背景・製品・顧客規模", checkedAt },
  { id: "gbiz-headcount-illumio", label: "gBizINFO Illumio Japan合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=6010903006723", kind: "公的機関", scope: "日本法人・所在地・事業所被保険者数", checkedAt },
);
illumio.companyStats.japanHeadcount = { value: "17人", detail: "gBizINFOの事業所情報に掲載された厚生年金保険・健康保険の被保険者数。役員・制度対象外・業務委託等を含む総在籍人数ではない。", sourceId: "gbiz-headcount-illumio" };

const qumulo = buildDailyCompanyIntelligence({
  slug: "qumulo", name: "Qumulo", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/qumulo/dfaec4ee-6675-4a3c-b658-22871e48074b", officialUrl: "https://qumulo.com/ja/",
  customersUrl: "https://qumulo.com/ja/customers/hirosaki-university/", financeUrl: "https://qumulo.com/press-releases/qumulo-strengthens-leadership-team-with-board-of-directors-expansion",
  problem: "AI、映像、研究、医療で増える非構造化データが拠点、クラウド、機器へ分散し、容量、性能、権限、移動、費用を一貫して管理できない課題を解く。",
  origin: "大規模ファイル基盤を作ってきた技術者たちが、古いストレージ構造の複雑さを減らし、データの保存場所に依存しない運用を目指して2012年にシアトルで創業した。",
  externalNeed: "AI学習と推論が大量の画像、映像、研究データを必要とし、企業はGPUだけでなく、エッジ、データセンター、クラウド間で同じデータへ安全かつ高速にアクセスする必要がある。",
  solution: "ファイルとオブジェクトをデータセンター、エッジ、クラウドにまたがる一つの名前空間で扱い、容量、性能、移動、可視化、保護を統合する。",
  selection: "容量単価だけでなく、複数環境の統合、既存アプリとの互換性、拡張時の運用負荷、性能、データ保護、技術支援で比較する。",
  growth: "会社公式は世界1,100社超、7EBの出荷容量、56カ国での利用を掲載。2024年10月のCloud Native Qumulo提供後、2025年時点でクラウドデータストレージが前年比400%超成長したと発表した。",
  role: "日本のSenior Customer Success Managerが大手顧客とOEM・販売パートナーを担当し、導入、利用、更新、拡大、技術・経営層への成果説明を担う。",
  organization: "Qumulo Japan株式会社・東京。日本語サイトと国内顧客事例を確認。gBizINFOには法人登記があるが、事業所被保険者数は掲載なし。",
  career: "データ・ストレージ・クラウドの技術理解と、顧客の導入、利用、更新、拡大、パートナー調整を同時に持つ顧客成功経験。",
  globalHeadcount: "501〜1,000人規模の公開集計（現員は変動あり）", japanPresence: "Qumulo Japan株式会社・東京。gBizINFOでは事業所被保険者数の掲載なし", japanSince: "2021年に日本法人登記を確認",
  customer: { company: "弘前大学", outcome: "AI・大規模言語モデルの研究教育向けに2つのQumuloクラスターを導入し、WindowsとLinuxからのアクセス、権限、拡張性、技術支援を一体で整備した。" },
  facts: [["創業","2012年","シアトルで大規模ファイルデータ基盤として創業。"],["顧客","1,100社超","会社公式。"],["出荷容量","7EB","会社公式。"],["提供地域","56カ国","会社公式。"],["日本法人","2021年","法人登記を確認。"],["日本求人","1件","Senior Customer Success Manager (APAC)。"]],
  products: [["Qumulo Data Platform","ファイルデータを拠点・クラウド横断で統合管理。","https://qumulo.com/ja/"],["Cloud Native Qumulo","AWS・Azureで伸縮するクラウドネイティブなファイル基盤。","https://qumulo.com/products/cloud-native-qumulo/"],["AI and Accelerated Computing","AI向けデータをコピーせずエッジ・拠点・クラウドへ供給。","https://qumulo.com/ja/use-cases/ai-and-ml"]],
  competitors: "Dell、NetApp、Pure Storage、WEKA、クラウド各社のファイルサービス",
  leader: ["Douglas Gourlay","Chief Executive Officer","https://qumulo.com/leadership"], local: ["未確認","日本事業責任者","https://qumulo.com/ja/contact"],
  work: ["フルリモート","東京圏を優先する日本国内リモート","顧客訪問時を除き未指定","日本国内リモートを明記","顧客・パートナー訪問の頻度は選考で確認"],
}, checkedAt);
qumulo.sources.push(
  { id: "qumulo-growth", label: "Qumulo 2025 growth update", url: "https://qumulo.com/press-releases/qumulo-strengthens-leadership-team-with-board-of-directors-expansion", kind: "企業公式", scope: "顧客数・クラウド事業の成長", checkedAt },
  { id: "gbiz-headcount-qumulo", label: "gBizINFO Qumulo Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=3010401159290", kind: "公的機関", scope: "日本法人・所在地・事業所情報の掲載状況", checkedAt },
);
qumulo.companyStats.japanHeadcount = { value: "掲載なし", detail: "gBizINFOで法人と所在地を特定したが、事業所情報の被保険者数は掲載されていない。日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-qumulo" };

export const daily20260922IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  datarobot,
  illumio,
  qumulo,
};
