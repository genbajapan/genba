import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-25";

const vectraAi = buildDailyCompanyIntelligence({
  slug: "vectra-ai", name: "Vectra AI", jobConfirmed: true,
  jobUrl: "https://www.vectra.ai/about/jobs?gh_jid=7724894", officialUrl: "https://www.vectra.ai/about",
  customersUrl: "https://www.vectra.ai/resources/jp-kintetsu-enhancing-edr-with-vectra-ai-for-comprehensive-network-visibility", financeUrl: "https://www.vectra.ai/about",
  problem: "EDR、SIEM、クラウド、IDごとにアラートが分断し、攻撃の進行と優先して止める対象を判断しにくい課題を解く。",
  origin: "2011年に米国で、固定ルールでは追いつけない攻撃を、ネットワーク上の実際の振る舞いと機械学習で検知する発想から始まった。",
  externalNeed: "クラウド、SaaS、ID、AIエージェントへ接続先が広がり、攻撃が複数環境を短時間で横断するほど、企業は検知数ではなく侵入の進行、資産・IDの重要度、影響範囲を一つの対応順序へ変える必要がある。",
  solution: "ネットワーク、クラウド、ID、SaaSの行動をAIで相関し、実際の攻撃進行として優先順位付けして、調査・封じ込めの時間を減らす。",
  selection: "検知項目の多さだけでなく、不要なアラートの削減、攻撃の相関、EDRの死角、既存SOCへの接続、調査と対応の所要時間で比較する。",
  growth: "会社公式は従業員600人超、顧客1,700社超、監視ホスト7百万超、113カ国での事業展開を公開。東京拠点と日本法人、現行技術営業1件を確認。",
  role: "東京のSecurity Engineer, Pre-Salesが営業と組み、調査、設計、実演、実証、RFP/RFI、導入設計の確認を通じて顧客の技術判断を主導する。",
  organization: "Vectra AI Japan株式会社・東京丸の内。公式情報で日本カントリーリードを確認。国内の正確な在籍人数は非公開。",
  career: "ネットワーク、ID、クラウド、SOC運用を横断し、検知の技術差を大企業の対応時間とリスク削減へ変える技術営業経験。",
  globalHeadcount: "600人超（会社公式）", japanPresence: "Vectra AI Japan株式会社・東京丸の内。国内の正確な在籍人数は非公開", japanSince: "2019年に日本法人登記を確認",
  customer: { company: "近鉄百貨店", outcome: "2025年初頭に運用を開始し、EDRで対応できない機器を含むネットワーク全体を監視。導入約1カ月で疑わしいホストを検知し未然対応したと公式事例で説明。" },
  facts: [["創業","2011年","米国で創業。"],["顧客","1,700社超","会社公式。"],["従業員","600人超","会社公式。"],["監視対象","700万ホスト超","会社公式。"],["日本法人","2019年","法人登記を確認。"],["日本求人","1件","Security Engineer, Pre-Sales。"]],
  products: [["Vectra AI Platform","ネットワーク、ID、クラウド、SaaSの攻撃振る舞いを相関。","https://www.vectra.ai/platform/ai-cybersecurity-platform"],["Threat Detection & Response","攻撃進行の検知、調査、対応を優先順位付け。","https://www.vectra.ai/platform/threat-detection-investigation-response"],["Network Exposure Management","ネットワークの露出、設定、統制の改善対象を可視化。","https://www.vectra.ai/platform/network-exposure-management"]],
  competitors: "Darktrace、ExtraHop、Cisco、Palo Alto Networks、Microsoft、EDR・SIEM・内製SOC基盤",
  leader: ["Hitesh Sheth","President and Chief Executive Officer","https://www.vectra.ai/about/leadership"], local: ["佐々木 元威","Japan Country Lead","https://www.vectra.ai/about/news/jp-it-trend-expo-2025-spring"],
  work: ["未確認","東京勤務","出社日数は未確認","完全リモートの明記なし","顧客・提携先訪問と地域内出張を含む"],
}, checkedAt);
vectraAi.sources.push(
  { id: "vectra-japan-contact", label: "Vectra AI Contact Japan", url: "https://ja.vectra.ai/about/contact", kind: "企業公式", scope: "東京・丸の内拠点", checkedAt },
  { id: "gbiz-headcount-vectra-ai", label: "gBizINFO Vectra AI Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=9010901044755", kind: "公的機関", scope: "日本法人・登記・事業所情報", checkedAt },
);
vectraAi.companyStats.japanHeadcount = { value: "掲載なし", detail: "日本法人と東京拠点は確認したが、gBizINFOで事業所被保険者数の掲載を確認できず、0人とは扱わない。", sourceId: "gbiz-headcount-vectra-ai" };

const circleci = buildDailyCompanyIntelligence({
  slug: "circleci", name: "CircleCI", jobConfirmed: true,
  jobUrl: "https://www.circleci.com/careers/jobs/8790033002/?gh_jid=8790033002", officialUrl: "https://circleci.com/about/",
  customersUrl: "https://circleci.com/case-studies/ana-systems/", financeUrl: "https://circleci.com/blog/we-raised-a-56m-series-d-what-s-next-for-circleci-customers/",
  problem: "ビルド、テスト、安全性確認、配備が手作業と個別の実行環境へ分断し、開発者の待ち時間と公開リスクが増える課題を解く。",
  origin: "2011年にサンフランシスコで、DevOpsの専門家がCI/CDを開発工程全体の信頼性と速度の基盤にするため創業した。",
  externalNeed: "AIが作るコードと変更量が増えるほど、企業はビルド時間、テストの網羅性、認証・権限、実行環境の費用、本番へ進める条件を自動化しながら説明できる必要がある。",
  solution: "クラウド、専用実行環境、セルフホスト実行基盤でビルド、テスト、セキュリティ確認を自動化し、失敗を早く返して配送時間を減らす。",
  selection: "ジョブ実行速度だけでなく、対応する実行環境、再現性、並列実行、権限・監査、開発者の待ち時間、クラウド費用、移行と運用の負荷で比較する。",
  growth: "公式求人は1日300万件超のジョブ実行を説明。公開集計は従業員201〜500人。CircleCI合同会社を2018年に東京へ設立し、現行求人は東京から日本を除くAPACを担当する。",
  role: "東京のStrategic Client Account Executive, APACが日本を除くAPACの大手顧客を担当し、新規開拓と既存拡大を通じて開発生産性と事業成果を提案する。",
  organization: "CircleCI合同会社・東京。2018年に初の海外拠点として設立。現行求人の担当市場は日本を除くAPACで、日本営業とは扱わない。",
  career: "東京を拠点に複数国の大手開発組織を担当し、技術評価、開発生産性、大口契約、複数部門の合意を横断する地域営業経験。",
  globalHeadcount: "201〜500人（LinkedIn会社ページの公開レンジ）", japanPresence: "CircleCI合同会社・東京。国内の正確な在籍人数は非公開", japanSince: "2018年にCircleCI合同会社を東京で設立",
  customer: { company: "ANAシステムズ", outcome: "国内線と国際線の旅客システム統合でCircleCIを300人が月利用し、ビルドからテスト・配備までの手作業をほぼゼロにし、月平均1,000時間の工数を削減したと公式事例で説明。" },
  facts: [["創業","2011年","サンフランシスコで創業。"],["実行量","1日300万件超","公式求人のジョブ実行数。"],["従業員","201〜500人","公開レンジ。"],["日本法人","2018年","東京で設立。"],["国内成果","月1,000時間削減","ANAシステムズ事例。"],["東京求人","1件","日本を除くAPAC担当。"]],
  products: [["CircleCI Cloud","ビルド、テスト、配備をクラウドで自動化。","https://circleci.com/product/"],["CircleCI Runner","自社・クラウド環境の実行基盤をCircleCIから管理。","https://circleci.com/execution-environments/runner/"],["CircleCI Server","統制が必要な自社環境でCI/CDを運用。","https://circleci.com/docs/plan-server/"]],
  competitors: "GitHub Actions、GitLab CI/CD、Jenkins、Harness、Buildkite、Bitrise、クラウド各社の開発基盤",
  leader: ["Jim Rose","Chief Executive Officer","https://circleci.com/about/"], local: ["未確認","日本事業責任者","https://circleci.com/blog/announcing-circleci-japan/"],
  work: ["未確認","東京勤務・日本を除くAPAC担当","出社日数は未確認","完全リモートの明記なし","勤務地と担当市場を分けて確認する"],
}, checkedAt);
circleci.sources.push(
  { id: "circleci-japan-launch", label: "Announcing CircleCI Japan", url: "https://circleci.com/blog/announcing-circleci-japan/", kind: "企業公式", scope: "CircleCI合同会社・東京拠点・設立年", checkedAt },
  { id: "circleci-linkedin", label: "CircleCI LinkedIn company page", url: "https://www.linkedin.com/company/circleci", kind: "外部集計", scope: "従業員数の公開レンジ", checkedAt },
  { id: "gbiz-headcount-circleci", label: "gBizINFO CircleCI合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=1011003008805", kind: "公的機関", scope: "日本法人・登記・事業所情報", checkedAt },
);
circleci.companyStats.japanHeadcount = { value: "掲載なし", detail: "CircleCI合同会社と東京拠点は確認したが、gBizINFOで事業所被保険者数の掲載を確認できず、0人とは扱わない。", sourceId: "gbiz-headcount-circleci" };

const catapultSports = buildDailyCompanyIntelligence({
  slug: "catapult-sports", name: "Catapult Sports", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/catapultsports/jobs/8055068", officialUrl: "https://www.catapult.com/company/about-catapult",
  customersUrl: "https://www.catapult.com/case-studies", financeUrl: "https://www.catapult.com/investor",
  problem: "選手の負荷、動作、映像、戦術、復帰判断が機器や担当者ごとに分断し、競技現場が同じ根拠で意思決定できない課題を解く。",
  origin: "アテネ五輪へ向けてオーストラリアのスポーツ研究機関が選手の動きを客観計測する共同研究を始め、2006年にメルボルンで創業した。",
  externalNeed: "競技日程が過密化し、怪我の回避、復帰、選手価値、映像と身体負荷の統合が重要になるほど、チームは経験だけでなく再現可能なデータで判断を説明する必要がある。",
  solution: "ウェアラブル計測、選手管理、映像分析、スカウティングをつなぎ、練習・試合の負荷、戦術、復帰、獲得判断を同じ運用へ載せる。",
  selection: "計測精度だけでなく、装着と同期の負荷、映像との統合、現場での使いやすさ、競技別支援、データ所有、導入後の活用、更新率で比較する。",
  growth: "会社公式は従業員900人超、5,500チーム超、40競技超、100カ国超を公開。ASX上場企業で、日本法人と東京拠点、日本の現行顧客成功求人を確認。",
  role: "Customer Success Specialistが日本のプロチーム、競技団体、大学等を担当し、導入、教育、定着、更新、拡張を通じて製品価値を競技成果へ変える。",
  organization: "Catapult Sports合同会社・東京。日本の商業・支援チームとAPAC地域組織が連携する。国内の正確な在籍人数は非公開。",
  career: "SaaSの更新・拡張に加え、スポーツ科学、映像、現場運用をつなぎ、監督・コーチ・分析担当・経営層へ価値を示す顧客成功経験。",
  globalHeadcount: "900人超（会社公式）", japanPresence: "Catapult Sports合同会社・東京。国内の正確な在籍人数は非公開", japanSince: "東京拠点と日本法人は確認、正確な事業開始年は未確認",
  customer: { company: "日本を含む世界のプロチーム・競技団体", outcome: "会社公式は5,500チーム超での利用を公開。日本ではSuper GTを含むレース運営ソフトの利用を確認したが、個別チームの数値成果は本調査で確認できない。" },
  facts: [["創業","2006年","メルボルンで創業。"],["従業員","900人超","会社公式。"],["導入チーム","5,500超","会社公式。"],["展開","100カ国超","会社公式。"],["競技","40超","会社公式。"],["日本求人","1件","Customer Success Specialist。"]],
  products: [["Athlete Monitoring","ウェアラブルで選手の動きと負荷を計測。","https://www.catapult.com/solutions/athlete-monitoring"],["Video Analysis","映像、競技データ、身体データを分析工程へ統合。","https://www.catapult.com/solutions/video-analysis"],["Recruiting & Scouting","映像とデータで選手評価・獲得判断を支援。","https://www.catapult.com/solutions/recruiting-scouting"]],
  competitors: "Hudl、KINEXON、STATSports、Genius Sports、各競技の映像・選手管理基盤、内製分析",
  leader: ["Will Lopes","Chief Executive Officer and Managing Director","https://www.catapult.com/company/about-catapult"], local: ["未確認","日本事業責任者","https://www.catapult.com/careers"],
  work: ["未確認","Greater Tokyoを優先","出社日数は未確認","完全リモートの明記なし","国内・APAC出張を含む"],
}, checkedAt);
catapultSports.sources.push(
  { id: "catapult-locations", label: "Catapult Locations", url: "https://www.catapult.com/careers/locations", kind: "企業公式", scope: "グローバル拠点", checkedAt },
  { id: "catapult-japan-entity", label: "Catapult Sub-Processors", url: "https://www.catapult.com/wp-content/uploads/2024/03/CAT-Sub-Processors-1-March-2024.pdf", kind: "企業公式", scope: "Catapult Sports合同会社・日本法人", checkedAt },
  { id: "gbiz-headcount-catapult-sports", label: "gBizINFO Catapult Sports合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
catapultSports.companyStats.japanHeadcount = { value: "対象人数未確認", detail: "日本法人と東京拠点は確認したが、gBizINFOで対応する事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-catapult-sports" };

const langchain = buildDailyCompanyIntelligence({
  slug: "langchain", name: "LangChain", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/langchain/c882af7e-59aa-4017-b791-9a8094c0ef6f", officialUrl: "https://www.langchain.com/about",
  customersUrl: "https://www.langchain.com/customers", financeUrl: "https://www.langchain.com/blog/series-b",
  problem: "AIエージェントは試作で動いても、入力やモデルの変化で予期せぬ振る舞いが生じ、評価、権限、復旧、長時間実行を管理しにくい課題を解く。",
  origin: "2022年に、LLMがデータやAPIへアクセスするエージェントになり、複雑なシステムを支える新しい開発基盤が必要になるという発想からオープンソースのLangChainが始まった。",
  externalNeed: "生成AIを業務へ入れるほど、企業は固定的な正解のない出力を本番データで評価し、追跡、人の確認、権限、長時間実行、モデル変更後の品質を継続管理する必要がある。",
  solution: "LangChainで構築、LangGraphでメモリ・人の確認・長時間実行を制御し、LangSmithで追跡、評価、配備、改善を一つの開発循環へつなぐ。",
  selection: "対応モデルの多さだけでなく、ステップごとの制御、復旧、評価の再現性、本番データの反映、権限、モデル選択の自由、運用費用で比較する。",
  growth: "2026年の公式求人は月1億回超のオープンソース・ダウンロード、LangSmithの稼働顧客6,000社超、Fortune 10の5社が本番利用と説明。2025年に1.25億ドルを調達し、評価12.5億ドルを公表。",
  role: "SingaporeのDeployed ArchitectとDeployed EngineerがAPACの企業顧客で、AIエージェント、基盤、評価、配備を設計・実装する。日本勤務・日本専任求人は0件。",
  organization: "APACはSingaporeのリモート導入職を確認。日本法人、国内拠点、日本常駐の販売・導入・支援体制は未確認。",
  career: "正式進出後は、AIエージェントの試作を、本番運用、評価、権限、復旧、業務成果へ変える市場立ち上げ経験になり得る。",
  globalHeadcount: "201〜500人（LinkedIn会社ページの公開レンジ）", japanPresence: "日本法人・国内拠点・日本求人は未確認。SingaporeのAPAC導入職2件を確認", japanSince: "未進出",
  customer: { company: "Cloudflare、Workday、Cisco等", outcome: "会社公式がAI開発組織の利用企業として掲載。対象業務と個別の数値成果は同発表だけでは確認できない。" },
  facts: [["開始","2022年","オープンソースのLangChainを公開。"],["調達","1.25億ドル","2025年Series B。"],["評価","12.5億ドル","2025年会社公表。"],["月間利用","1億回超","オープンソースのダウンロード。"],["LangSmith","6,000社超","稼働顧客。"],["日本求人","0件","公式Ashbyで確認。"]],
  products: [["LangChain","複数のモデルや道具を使うAIエージェントを構築。","https://www.langchain.com/langchain"],["LangGraph","メモリ、人の確認、復旧、長時間実行を制御。","https://www.langchain.com/langgraph"],["LangSmith","エージェントの追跡、評価、配備、改善を管理。","https://www.langchain.com/langsmith-platform"]],
  competitors: "OpenAI、Google Cloud、Microsoft、AWS、LlamaIndex、Arize、Braintrust、各社の内製AIエージェント基盤",
  leader: ["Harrison Chase","Co-Founder and Chief Executive Officer","https://www.langchain.com/about"], local: ["未確認","日本事業責任者","https://jobs.ashbyhq.com/langchain"],
  work: ["未確認","日本求人なし","該当なし","日本での勤務条件は未確認","Singapore求人の条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中。APACの顧客導入体制と大きな開発者利用はあるが、日本法人、国内拠点、日本専任求人、日本語の契約・導入・障害支援は未確認。",
    signal: "SingaporeでAPAC向けのDeployed ArchitectとDeployed Engineerを公式募集し、企業顧客のAI基盤・エージェント導入へ投資。",
    hurdle: "日本法人、国内拠点、日本勤務・専任求人、日本語の契約・請求・導入・障害支援、国内顧客の公開成果を確認できない。",
    conditions: ["Singaporeから日本企業の有償需要と更新・拡張を再現する。", "日本語の販売、契約、請求、導入、障害支援を整える。", "国内の案件量が日本常駐の営業・導入技術職の固定費を支える。", "日本企業の本番AIエージェント導入事例と販売・技術提携先を作る。", "データ所在、権限、モデル・ツール利用、評価、監査を日本語で説明する。"],
    watches: ["Japan・Tokyo求人", "日本法人・国内拠点", "日本語の販売・契約・支援", "国内顧客の数値事例", "APAC求人のJapan担当表記", "国内販売・技術提携先"],
  },
}, checkedAt);
langchain.sources.push(
  { id: "langchain-careers", label: "LangChain Careers", url: "https://jobs.ashbyhq.com/langchain", kind: "企業公式", scope: "現行求人・日本求人0件・APAC導入職", checkedAt },
  { id: "langchain-growth", label: "LangChain Series B announcement", url: "https://www.langchain.com/blog/series-b", kind: "企業公式", scope: "調達・評価・利用規模・製品展開", checkedAt },
  { id: "langchain-apac-engineer-job", label: "LangChain Deployed Engineer, Professional Services (APAC)", url: "https://jobs.ashbyhq.com/langchain/0ee73994-b8a3-4a75-9675-da536abd3e10", kind: "企業公式", scope: "Singapore・APAC顧客技術体制", checkedAt },
  { id: "langchain-linkedin", label: "LangChain LinkedIn company page", url: "https://www.linkedin.com/company/langchain", kind: "外部集計", scope: "従業員数の公開レンジ", checkedAt },
  { id: "gbiz-headcount-langchain", label: "gBizINFO LangChain法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
langchain.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式とgBizINFOで対応する日本法人・国内拠点を特定できず、日本での想定人数を0人とは扱わない。", sourceId: "gbiz-headcount-langchain" };
const langchainMilestone = langchain.marketStatus.milestones.find((item) => item.sourceId === "langchain-job");
if (langchainMilestone) {
  langchainMilestone.label = "日本求人0件・APAC導入職2件を確認";
  langchainMilestone.detail = "2026年9月25日の公式Ashbyで、日本勤務は0件、SingaporeのAPAC向けDeployed ArchitectとDeployed Engineerを確認。";
}

export function applyDaily20260925Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const closures: Array<[string, string, string, string]> = [
    ["cribl", "Regional Sales Director, Japan求人終了", "公式Greenhouse APIから当該求人IDが消失したため掲載から除外。日本の他求人は継続。", "rollout-cribl-jobs"],
    ["wasabi", "Inside Sales Representative - Japan求人終了", "公式Greenhouse APIから当該求人IDが消失したため掲載から除外。これだけで日本事業縮小を意味しない。", "rollout-wasabi-jobs"],
  ];
  for (const [slug, label, detail, sourceId] of closures) {
    const intelligence = intelligenceBySlug[slug];
    if (!intelligence) continue;
    intelligence.researchedAt = checkedAt;
    intelligence.marketStatus.milestones = [
      ...intelligence.marketStatus.milestones.filter((item) => item.label !== label),
      { year: "2026.09.25", label, detail, sourceId },
    ];
  }
}

export const daily20260925IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { "vectra-ai": vectraAi, circleci, "catapult-sports": catapultSports, langchain };
