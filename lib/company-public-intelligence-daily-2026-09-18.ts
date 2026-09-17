import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-18";

const gainsight = buildDailyCompanyIntelligence({
  slug: "gainsight", name: "Gainsight", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/gainsight/923f3346-9992-4118-b212-75e9521f06a1", officialUrl: "https://www.gainsight.com/company/",
  customersUrl: "https://www.gainsight.com/customer/usage-explodes-11x-for-cin7-customer-education-increasing-retention-7/", financeUrl: "https://www.gainsight.com/press/gainsight-expands-further-into-asia-pacific-with-japan-cloud-partnership/",
  problem: "企業向けサービスの導入、利用、学習、コミュニティ、更新情報が分かれ、解約の兆候や拡大機会を担当者の経験だけで追う課題を解く。",
  origin: "2009年に米国セントルイスでJBara Softwareとして始まり、LiveOfficeで顧客維持の難しさを体験したNick Mehtaが2013年に経営へ加わり、Customer Successの事業へ育てた。",
  externalNeed: "継続課金型のサービスでは販売時点より利用成果と更新が収益を左右し、AIが顧客接点を増やすほど、企業は利用状況、支援履歴、契約、責任者の変化を権限付きで統合する必要がある。",
  solution: "CustomerOSで導入計画、顧客健全性、利用、学習、コミュニティ、更新をつなぎ、AIエージェントでリスク把握と担当者の次の行動を支援する。",
  selection: "CRMの活動記録や個別の利用分析ではなく、顧客成果、製品利用、教育、コミュニティ、更新判断を一つの運用へつなぎ、維持・拡大の責任を持てる点で比較する。",
  growth: "現行の公式求人は2,000社超がGainsightを利用すると掲載。会社公式は1,200人超の従業員を掲げ、日本では2022年にJapan Cloudとの提携と東京拠点を発表した。",
  role: "東京のEnterprise Account Executiveが日本の大手顧客で新規開拓、アップセル、クロスセルを持ち、経営層へ顧客維持・成長の投資対効果を提案する。",
  organization: "Japan Cloudとの提携で2022年に日本展開と東京拠点を公式発表。Country Managerへの報告を求人で確認したが、国内の正確な人数と氏名は未確認。",
  career: "カスタマーサクセスを支援部門の活動ではなく、維持率、利用、学習、拡大の経営指標へ変え、日本市場で再現できる営業モデルを作る経験。",
  globalHeadcount: "1,200人超（会社公式）", japanPresence: "Gainsight Japan・東京。国内の正確な在籍人数は未確認", japanSince: "2022年にJapan Cloudとの提携と東京拠点を公式発表",
  customer: { company: "Cin7", outcome: "顧客教育の利用者を3,000人未満から34,000人超へ伸ばし、維持率を7%改善、ライブ研修を60%削減したと会社事例で紹介。" },
  facts: [["創業","2009年","米国セントルイスでJBara Softwareとして創業。"],["従業員","1,200人超","会社公式。"],["導入企業","2,000社超","現行公式求人。定義と有料契約の内訳は未確認。"],["日本展開","2022年","Japan Cloudとの提携と東京拠点を発表。"],["顧客成果","維持率7%改善","Cin7の会社事例。"],["日本求人","1件","Enterprise Account Executive。"]],
  products: [["Gainsight Customer Success","顧客健全性、導入、更新、拡大の計画と実行を管理する。","https://www.gainsight.com/customer-success/"],["Gainsight Product Experience","製品利用を把握し、アプリ内案内と定着施策へつなぐ。","https://www.gainsight.com/product-experience/"],["Gainsight Customer Communities","顧客同士の知識共有と支援をコミュニティとして運営する。","https://www.gainsight.com/customer-communities/"]],
  competitors: "ChurnZero、Totango、Planhat、Salesforce・HubSpotの顧客管理機能、内製",
  leader: ["Nick Mehta","Chief Executive Officer","https://www.gainsight.com/company/"], local: ["未確認","Japan Country Manager","https://jobs.ashbyhq.com/gainsight/923f3346-9992-4118-b212-75e9521f06a1"],
  work: ["ハイブリッド","東京","出社日数は未確認","完全リモートの明記なし","社内会議、研修、催事に伴う出張の可能性あり"],
}, checkedAt);
gainsight.sources.push(
  { id: "gainsight-origin", label: "Gainsight founder story", url: "https://www.gainsight.com/blog/veteran-rookie/", kind: "企業公式", scope: "Nick Mehtaの参画経緯・JBaraの初期事業", checkedAt },
  { id: "gainsight-japan", label: "Gainsight Japan expansion with Japan Cloud", url: "https://www.gainsight.com/press/gainsight-expands-further-into-asia-pacific-with-japan-cloud-partnership/", kind: "企業公式", scope: "2022年の日本展開・東京拠点", checkedAt },
  { id: "gbiz-headcount-gainsight", label: "gBizINFO Gainsight法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の被保険者数監査", checkedAt },
);
gainsight.companyStats.japanHeadcount = { value: "掲載値未確認", detail: "日本展開と東京拠点は公式確認したが、gBizINFOで対応する事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-gainsight" };

const minitab = buildDailyCompanyIntelligence({
  slug: "minitab", name: "Minitab", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/minitab/jobs/7739659003", officialUrl: "https://www.minitab.com/en-us/company/",
  customersUrl: "https://www.minitab.com/en-us/resources-services/resources/case-studies/kyocera-avx/?locale=en-US", financeUrl: "https://www.minitab.com/ja-jp/company/press-releases/minitab-opens-new-subsidiary-office-japan/",
  problem: "製造現場、品質部門、研究開発で測定・工程データの形式と分析方法が分かれ、ばらつき、不良、改善効果を同じ根拠で判断しにくい課題を解く。",
  origin: "50年以上前、Barbara Ryanらが米国ペンシルベニア州立大学で、学生が統計計算ではなく意味の理解へ集中できるようMinitab Statistical Softwareを開発した。",
  externalNeed: "製造の人手不足、品質要求、供給網の複雑化が進み、企業は経験則だけでなく、工場から品質部門まで同じ測定、統計的工程管理、改善手順を再現できる必要がある。",
  solution: "統計解析、リアルタイム工程管理、データ接続、改善プロジェクト管理を組み合わせ、測定から異常検知、原因分析、標準化までを支援する。",
  selection: "分析機能の数だけでなく、現場が使える操作、統計手法の妥当性、工程データとの接続、品質改善の標準手順、教育と支援を含む再現性で比較する。",
  growth: "会社公式はFortune 100の90%超とFortune 500の過半が利用すると掲載。日本では20年以上の事業を経て2024年にMinitab株式会社と東京の新拠点を開設した。",
  role: "東京のAccount Executiveが製造企業の成熟度を見極め、工場、品質部門、経営へ統計解析、工程管理、データ標準化の価値を提案する。",
  organization: "Minitab株式会社・東京。2024年の日本法人と中央東京の拠点開設を公式発表。国内の正確な人数と現責任者は未確認。",
  career: "製造現場の測定と品質改善を、統計、工程管理、投資効果の共通言語へ変え、複数工場へ展開する企業営業経験。",
  globalHeadcount: "501〜1,000人規模の公開集計（現員は変動あり）", japanPresence: "Minitab株式会社・東京。国内の正確な在籍人数は未確認", japanSince: "日本で20年以上事業を行い、2024年に日本法人と新オフィスを公式発表",
  customer: { company: "KYOCERA AVX", outcome: "30超の製造拠点で顧客苦情の8D手順とテンプレートをMinitab Engageへ統一し、進捗の可視化と再発防止の共有を改善したと会社事例で紹介。" },
  facts: [["歴史","50年以上","大学で統計教育を容易にするソフトとして開始。"],["Fortune 100","90%超","会社公式。製品別の内訳は未確認。"],["Fortune 500","過半","会社公式。"],["日本事業","20年以上","2024年の会社発表。"],["日本法人","2024年","Minitab株式会社と東京拠点を開設。"],["日本求人","1件","東京のAccount Executive。"]],
  products: [["Minitab Statistical Software","統計解析、可視化、予測で品質・工程の判断を支援する。","https://www.minitab.com/en-us/products/minitab/"],["Minitab Real-Time SPC","工程データを継続監視し、異常とばらつきへ早く対応する。","https://www.minitab.com/en-us/products/real-time-spc/"],["Minitab Connect","複数の業務・工程データを接続、整形し、分析へ渡す。","https://www.minitab.com/en-us/products/connect/"]],
  competitors: "JMP、SAS、IBM SPSS、Python・R、製造実行・品質管理製品、内製",
  leader: ["Jeff Slovin","President and Chief Executive Officer","https://www.minitab.com/en-us/company/leadership/"], local: ["未確認","Japan leadership","https://www.minitab.com/ja-jp/company/press-releases/minitab-opens-new-subsidiary-office-japan/"],
  work: ["未確認","東京","出社頻度は未確認","完全リモートの明記なし","出張条件、担当業界、販売経路は選考で確認"],
}, checkedAt);
minitab.sources.push(
  { id: "minitab-japan-entity", label: "Minitab opens new subsidiary office in Japan", url: "https://www.minitab.com/ja-jp/company/press-releases/minitab-opens-new-subsidiary-office-japan/", kind: "企業公式", scope: "日本法人・東京拠点・20年以上の日本事業", checkedAt },
  { id: "gbiz-headcount-minitab", label: "gBizINFO Minitab株式会社検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の被保険者数監査", checkedAt },
);
minitab.companyStats.japanHeadcount = { value: "掲載値未確認", detail: "日本法人と東京拠点は公式確認したが、gBizINFOで対応する事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-minitab" };

const mattermost = buildDailyCompanyIntelligence({
  slug: "mattermost", name: "Mattermost", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/mattermost/jobs/5381946008", officialUrl: "https://mattermost.com/about-us/",
  customersUrl: "https://mattermost.com/customers/kokusai-software/", financeUrl: "https://mattermost.com/blog/mattermost-raises-20m-to-help-make-the-world-safer-and-more-productive/",
  problem: "防衛、重要インフラ、規制産業で、一般的な外部運用の協働サービスでは機密データ、閉域、可用性、監査、業務自動化を自組織の統制下へ置きにくい課題を解く。",
  origin: "オンラインゲーム会社が利用していた外部メッセンジャーの障害、ファイル消失、データへのアクセス制限を経験し、自社のゲーム用通信技術から協働製品を作り、2015年にオープンソース化した。",
  externalNeed: "サイバー攻撃と地政学リスクが高まるほど、防衛・重要インフラは通信とAIの便利さだけでなく、閉域運用、データ主権、障害時の継続、操作履歴を同時に満たす必要がある。",
  solution: "メッセージ、ファイル共有、通話、業務手順、自動化、AIをオンプレミスまたはプライベートクラウドで運用し、組織がデータと接続先を統制する。",
  selection: "一般的な協働製品の機能数ではなく、閉域・自社運用、ソースへのアクセス、データ主権、重要業務の可用性、既存の安全な道具との統合で比較する。",
  growth: "会社公式の顧客事例一覧は世界800組織超の利用を掲載。東京の求人は日本・インド太平洋地域初の技術担当として進出を形作る役割と明記する。",
  role: "東京のTechnical Sales Engineer / Leadが地域初の技術担当として、閉域、オンプレミス、プライベートクラウドの提案、実証、パートナー構築、顧客要件の製品反映を主導する。",
  organization: "東京で日本・インド太平洋地域初の技術担当を公式募集。日本法人、常設拠点、日本事業責任者は公式情報から確認できない。",
  career: "防衛・重要インフラの厳しい安全要件を製品構成、実証、販売パートナーへ落とし、日本市場の技術的な参入条件を作る経験。",
  globalHeadcount: "201〜500人規模の公開集計（現員は変動あり）", japanPresence: "日本法人・国内拠点は未確認。東京で地域初の技術営業を募集", japanSince: "進出準備の兆しを2026年9月に公式求人で確認",
  customer: { company: "国際ソフトウェア", outcome: "自社運用で機密データを管理し、緊急時の応答速度を約30%改善、メールを50%超削減したと会社事例で紹介。" },
  facts: [["公開開始","2015年","ゲーム会社内の道具をオープンソース化。"],["導入組織","800超","会社公式の顧客事例一覧。"],["資金調達","2,000万ドル","2019年Series Aの会社発表。"],["国内事例","国際ソフトウェア","応答速度約30%改善、メール50%超削減。"],["日本組織","未確認","法人・常設拠点・責任者を確認できず。"],["日本求人","1件","地域初のTechnical Sales Engineer / Lead。"]],
  products: [["Mattermost Channels","自社運用可能なメッセージ、ファイル共有、通話で重要業務を支える。","https://mattermost.com/channels/"],["Mattermost Playbooks","事故対応や定型業務の手順、担当、判断、履歴を一つにする。","https://mattermost.com/playbooks/"],["Mattermost AI","組織が選ぶモデルと統制の下で、要約、検索、業務支援を行う。","https://mattermost.com/mattermost-ai/" ]],
  competitors: "Microsoft Teams、Slack、Rocket.Chat、Element、各組織の内製協働・指揮基盤",
  leader: ["Ian Tien","CEO and Co-Founder","https://mattermost.com/about-us/"], local: ["未確認","日本事業責任者","https://job-boards.greenhouse.io/mattermost/jobs/5381946008"],
  work: ["未確認","東京","出社頻度は未確認","完全リモートの明記なし","顧客・パートナー・催事支援で最大50%の出張可能性"],
  preEntry: {
    verdict: "進出可能性は高い。東京で地域初の技術担当を募集し、日本市場の技術活動とパートナー網を作る責任を明記する一方、日本法人・常設拠点は未確認。",
    signal: "東京のTechnical Sales Engineer / Leadを、日本・インド太平洋地域初の技術採用として公式募集。日本の顧客、販売パートナー、製品要件まで担当する。",
    hurdle: "日本法人、常設拠点、商用責任者、国内の防衛・重要インフラ向け販売実績、支援・契約体制を確認できない。",
    conditions: ["東京の初期技術担当が販売パートナーと有償案件を作る。", "閉域・オンプレミスの導入、保守、機密要件を国内で継続支援できる体制を整える。", "日本の案件規模が商用責任者と法人運営の固定費を支える。"],
    watches: ["日本法人・常設拠点", "Japan Country Manager・営業採用", "国内の防衛・重要インフラ事例", "販売代理店・保守契約", "日本語製品・支援体制"],
  },
}, checkedAt);
mattermost.sources.push(
  { id: "mattermost-origin", label: "Mattermost Developer Manifesto", url: "https://mattermost.com/developer-manifesto/", kind: "企業公式", scope: "ゲーム会社から生まれた経緯・2015年公開・データ主権", checkedAt },
  { id: "gbiz-headcount-mattermost", label: "gBizINFO Mattermost法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
mattermost.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式とgBizINFOで対応する日本法人・国内拠点を特定できず、日本での想定人数を0人とは扱わない。", sourceId: "gbiz-headcount-mattermost" };

export function applyDaily20260918Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.tanium;
  if (!intelligence) return;
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => !`${item.label}${item.detail}`.includes("Customer Success Manager")),
    { year: "2026.09.18", label: "Customer Success Manager求人終了", detail: "公式Greenhouse求人ID 8024983が現行一覧から消えたため掲載から除外。別の日本求人は検知したが、スケジュール実行では既存企業への新規求人追加を行わない。", sourceId: "tanium-job" },
  ];
}

export const daily20260918IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { gainsight, minitab, mattermost };
