import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-16";

const mapbox = buildDailyCompanyIntelligence({
  slug: "mapbox", name: "Mapbox", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/mapbox", officialUrl: "https://www.mapbox.com/ja/company",
  customersUrl: "https://www.mapbox.com/ja/press-releases/toyota-motor-corporation-adopts-the-mapbox-platform-to-support-the-custom-development-and-fast-rendering-of-digital-maps-in-north-america-europe-and-australia",
  financeUrl: "https://www.mapbox.com/blog/mapbox-announces-series-e-funding",
  problem: "地図、住所、交通、経路が複数のデータと製品へ分かれ、車両やアプリごとに最新性、表示、検索、案内を一貫して作りにくい課題を解決する。",
  origin: "2010年、国際開発の現場で使える地図作成道具を必要とした開発者が、ワシントンD.C.の小さなチームからMapboxを創業。初期の地図は国連、世界銀行、USAID等の活動を支えた。",
  externalNeed: "車両のソフトウェア化と物流・移動サービスの即時性が進み、企業は静的な地図ではなく、道路、交通、充電、施設の変化を製品へ継続反映する必要がある。",
  solution: "地図表示、住所検索、経路案内、交通・道路データをAPIと開発キットで提供し、車載機、スマートフォン、物流業務へ組み込む。",
  selection: "表示の自由度だけでなく、更新頻度、車載・モバイルへの組込み、地域データ、通信断対応、車両の製品寿命にわたる運用で比較する。",
  growth: "公式求人は登録開発者400万人超を掲載。2023年にSoftBank主導で2.8億ドルを調達し、日本では2025年に畑義和氏をCountry Managerへ任命。",
  role: "日本でSenior Account Executive、Automotive Business Development Manager、Solutions Architectの3職種が、企業開拓から技術検証、導入、利用拡大までを担う。",
  organization: "2020年にMapbox Inc.とSoftBankの合同出資でマップボックス・ジャパン合同会社を設立。2023年の会社記事は東京の日本チーム50人超を掲載。",
  career: "地理空間データと自動車・物流の製品開発を、長期契約、技術設計、本番導入へ結ぶ企業向け営業・技術営業経験。",
  globalHeadcount: "501〜1,000人規模の公開集計（現員は変動あり）", japanPresence: "マップボックス・ジャパン合同会社・東京。2023年の会社記事で日本チーム50人超", japanSince: "2020年に日本法人設立",
  customer: { company: "トヨタ自動車", outcome: "北米、欧州、オーストラリア向け車載ナビゲーションにMapboxを採用し、ブランドに合わせた地図の高速描画と遠隔更新を進めたと会社発表。" },
  facts: [["創業","2010年","米国ワシントンD.C.で創業。"],["登録開発者","400万人超","公式求人掲載。登録と稼働の定義は未確認。"],["資金調達","2.8億ドル","2023年Series E。現在の売上・利益ではない。"],["日本法人","2020年","Mapbox Inc.とSoftBankの合同出資。"],["国内規模","50人超","2023年会社記事。現在の人数ではない。"],["日本求人","3件","営業、事業開発、技術営業。"]],
  products: [["Maps","Web・モバイル・車載向けの地図表示とデザインを提供。","https://www.mapbox.com/ja/maps"],["Navigation","交通と道路データを使い、車載・モバイル向け経路案内を提供。","https://www.mapbox.com/ja/navigation"],["Search","住所、施設、地点の検索と入力補完をアプリへ組み込む。","https://www.mapbox.com/ja/search"]],
  competitors: "Google Maps Platform、HERE Technologies、TomTom、各国の地図・自社開発",
  leader: ["Peter Sirota","Chief Executive Officer","https://www.mapbox.com/ja/company"], local: ["畑 義和","Country Manager, Japan","https://www.mapbox.com/ja/press-releases/mapbox-extends-presence-in-japan-with-appointment-of-yoshikazu-hata-as-country-manager"],
  work: ["未確認","役割別にRemoteまたは日本勤務","Solutions ArchitectはRemote。営業2職種の出社日数は未確認","役割による","出張、出社場所、柔軟性は求人ごとに確認"],
}, checkedAt);
mapbox.sources.push(
  { id: "mapbox-japan-roots", label: "Mapbox Japanのルーツ", url: "https://www.mapbox.jp/labs/our-roots-mapbox-japan", kind: "企業公式", scope: "創業・日本法人設立・東京拠点", checkedAt },
  { id: "mapbox-japan-team", label: "Mapbox Japan 3周年", url: "https://www.mapbox.com/ja/blog/happy-anniversary-japan-team", kind: "企業公式", scope: "2023年時点の日本チーム50人超・Yahoo! JAPAN移行", checkedAt },
  { id: "gbiz-headcount-mapbox", label: "gBizINFO マップボックス・ジャパン合同会社検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の被保険者数監査", checkedAt },
);
mapbox.companyStats.japanHeadcount = { value: "50人超（2023年）", detail: "会社公式記事のフルタイム従業員数。gBizINFOの事業所情報に基づく現在の被保険者数ではなく、現在の総在籍人数は未確認。", sourceId: "gbiz-headcount-mapbox" };

const sproutAi = buildDailyCompanyIntelligence({
  slug: "sprout-ai", name: "Sprout.ai", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/sprout-ai/f9c25a5a-d1bb-4e15-9ead-867af2b38932", officialUrl: "https://sprout.ai/company/",
  customersUrl: "https://sprout.ai/resource/case-study-advancecare-and-sprout-ai/", financeUrl: "https://sprout.ai/resource/looking-back-on-2024-whats-happened-at-sprout-ai/",
  problem: "保険金請求の書類確認、情報入力、判断、不正確認が手作業に偏り、支払までの時間と判断の一貫性を損なう課題を解く。",
  origin: "2018年、保険加入者が最も支援を必要とするときに、古い仕組みと手作業で結果を何週間も待つ問題を変えるため、ロンドンで創業。",
  externalNeed: "請求量、書類の種類、不正手口が増える一方、保険会社は支払を速めても判断根拠、規制対応、公平性、人の最終責任を失えない。",
  solution: "保険書類を読み取り、情報を構造化し、請求・引受判断を支援して、定型案件を自動化し複雑案件を担当者へ渡す。",
  selection: "汎用AIの回答力ではなく、保険書類での精度、判断根拠、監査証跡、基幹請求システムとの接続、本番での処理時間で比較する。",
  growth: "2024年に300万件超の請求を処理。2025年の会社発表は北米、日本、欧州、中南米の4大陸で顧客稼働と、日本での地域体制拡大を掲載。",
  role: "Technical Project Manager, Japanが日本の保険会社の技術検証から本番稼働までを持ち、工程、顧客満足、利用定着、継続的な問題解決を担う。",
  organization: "会社公式は日本拠点とCountry Managerの木下博志氏を掲載。求人は創業期の日本組織と説明し、正確な人数と日本法人は未確認。",
  career: "日本の初期組織で、AIの技術検証を保険会社の本番運用へ変え、経営層から利用者までの価値実現を持つ導入責任経験。",
  globalHeadcount: "51〜200人規模の公開集計（現員は変動あり）", japanPresence: "日本拠点とCountry Managerを会社公式で確認。正確な国内人数と法人は未確認", japanSince: "2025年までに日本で顧客稼働・地域体制を確認",
  customer: { company: "AdvanceCare", outcome: "2023年から保険金請求を自動化し、定型請求の一部を60秒で処理、担当者の作業量を減らしたと2025年の会社事例で紹介。" },
  facts: [["創業","2018年","英国ロンドンで創業。"],["2024年処理量","300万件超","会社の年間振り返り。請求の種類と顧客別内訳は未確認。"],["顧客地域","4大陸","2025年会社発表。"],["日本責任者","木下 博志氏","2026年の会社行事ページ。"],["日本体制","創業期","求人の表現。正確な人数は未確認。"],["日本求人","1件","Technical Project Manager, Japan。"]],
  products: [["Claims Processing","保険書類を読み取り、情報を構造化し定型請求を自動処理。","https://sprout.ai/platform/"],["Decision Support","判断材料と根拠を担当者へ示し、複雑な請求の処理を支援。","https://sprout.ai/platform/"],["Fraud Detection","不整合や異常な傾向を検出し、不正・漏えいの確認を支援。","https://sprout.ai/platform/"]],
  competitors: "Shift Technology、Tractable、保険基幹システム各社、汎用OCR・生成AI・内製",
  leader: ["Roi Amir","Chief Executive Officer","https://sprout.ai/company/"], local: ["木下 博志","Country Manager, Japan","https://sprout.ai/event/itc-japan-2026/"],
  work: ["フルリモート","日本Remote","出社日数なし","日本から完全リモート","顧客訪問、英国チームとの時差、出張は選考で確認"],
}, checkedAt);
sproutAi.sources.push(
  { id: "sprout-ai-japan", label: "Sprout.ai ITC Japan 2026", url: "https://sprout.ai/event/itc-japan-2026/", kind: "企業公式", scope: "Japan Country Manager・日本市場活動", checkedAt },
  { id: "gbiz-headcount-sprout-ai", label: "gBizINFO Sprout.ai法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
sproutAi.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "gBizINFOで対応する日本法人を特定できず、事業所情報の被保険者数を0人とは扱わない。求人は創業期の日本組織と記載。", sourceId: "gbiz-headcount-sprout-ai" };

const horizon3 = buildDailyCompanyIntelligence({
  slug: "horizon3", name: "Horizon3", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/horizon3ai/27401a87-09e4-49ce-a76d-678f8e962c48", officialUrl: "https://horizon3.ai/",
  customersUrl: "https://horizon3.ai/customer-story/from-a-chance-phone-call-to-a-partnership-how-nodezero-helped-the-city-of-st-petersburg-improve-its-defenses/",
  financeUrl: "https://horizon3.ai/news/press-release/partner-led-growth-investment/",
  problem: "脆弱性情報が大量に並んでも実際に悪用できる経路と優先順位が分からず、年1回の侵入テストでは修復後の安全を継続確認できない課題を解く。",
  origin: "2019年、米国特殊作戦部隊のサイバー担当経験者とセキュリティ専門家が、攻撃者の行動を機械で再現して守る側が継続検証できるように創業。",
  externalNeed: "AIで脆弱性探索と攻撃が速くなるほど、防御側は一覧を増やすのではなく、本番で悪用可能な経路を安全に確かめ、修復をすぐ再検証する必要がある。",
  solution: "NodeZeroが本番環境で自律型侵入テストを実行し、実証した攻撃経路、影響、修復手順を示し、同じ条件で再検証する。",
  selection: "検出件数ではなく、本番での安全性、悪用可能性の証拠、修復後の再検証、販売・運用パートナーが継続サービス化できる点で比較する。",
  growth: "2026年8月の会社発表は顧客環境7,000超、累計31万回超の自律型侵入テスト、ARR前年比120%増、商流の90%がパートナー経由と掲載。",
  role: "Enterprise Account Executive, Japanが新規企業の開拓、技術評価、価値検証、契約、投資対効果、販売パートナー関係を担う。",
  organization: "日本法人、国内拠点、雇用主体、既存の日本担当者は未確認。公式求人は日本を担当するRemote営業1件を掲載。",
  career: "自律型侵入テストという新しい分類を日本の顧客と販売パートナーへ説明し、最初の再現可能な受注経路を作る市場立ち上げ経験。",
  globalHeadcount: "201〜500人規模の公開集計（現員は変動あり）", japanPresence: "日本法人・国内拠点・国内人数は未確認。日本担当Remote営業1件を募集", japanSince: "2026年に日本担当求人を確認",
  customer: { company: "米国セントピーターズバーグ市", outcome: "NodeZero導入後、約3,000台の内部機器にある弱点を45%減らしたと会社事例で紹介。日本事例ではない。" },
  facts: [["創業","2019年","米国特殊作戦部隊経験者と業界専門家が創業。"],["顧客環境","7,000超","2026年8月会社発表。"],["自律型侵入テスト","31万回超","同社基盤上の累計。"],["ARR成長","前年比120%増","2026年8月会社発表。絶対額は非公開。"],["パートナー経由","商流の90%","会社発表。計算期間と契約基準は未確認。"],["日本求人","1件","Enterprise Account Executive, Japan。"]],
  products: [["NodeZero Autonomous Pentesting","本番環境で攻撃経路を自律検証し、悪用可能な弱点を示す。","https://horizon3.ai/nodezero/"],["Cloud Pentesting","クラウドの権限、設定、経路を攻撃者視点で検証する。","https://horizon3.ai/platform/cloud-pentesting/"],["Web Application Pentesting","Webアプリの弱点を実証し、修復後に再確認する。","https://horizon3.ai/platform/web-application-pentesting/"]],
  competitors: "Pentera、Randori・IBM、Rapid7、従来の手動侵入テスト、脆弱性管理・内製",
  leader: ["Snehal Antani","Chief Executive Officer / Co-Founder","https://horizon3.ai/news/press-release/horizon3-arr-growth-nodezero/"], local: ["未確認","Enterprise Account Executive, Japan","https://jobs.ashbyhq.com/horizon3ai/27401a87-09e4-49ce-a76d-678f8e962c48"],
  work: ["フルリモート","日本Remote","出社日数なし","日本からRemote","担当市場内の出張が最大40%。雇用主体と時差は選考で確認"],
}, checkedAt);
horizon3.sources.push(
  { id: "horizon3-japan-entity", label: "Horizon3公式拠点・採用情報", url: "https://horizon3.ai/join-our-team/", kind: "企業公式", scope: "米国・欧州拠点とRemote体制、日本法人・拠点の非掲載", checkedAt },
  { id: "gbiz-headcount-horizon3", label: "gBizINFO Horizon3法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
horizon3.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "gBizINFOと公式拠点情報で対応する日本法人を特定できず、事業所情報の被保険者数を0人とは扱わない。", sourceId: "gbiz-headcount-horizon3" };
if (horizon3.marketStatus.japanGrowth) {
  horizon3.marketStatus.japanGrowth.headline = "日本法人・国内拠点は未確認。日本担当Enterprise Account Executiveを募集";
  horizon3.marketStatus.japanGrowth.narrative = "日本法人、国内拠点、雇用主体、国内顧客事例は未確認。一方、公式求人は日本担当営業を置き、顧客開拓、技術評価、販売パートナー関係を任せる。";
  horizon3.marketStatus.japanGrowth.entryAssessment = {
    verdict: "進出可能性は中〜高。日本担当営業の採用は強い事実シグナルだが、法人、拠点、雇用、技術支援、国内顧客は未確認。",
    factSignals: [{ title: "日本担当の企業営業", body: "日本でEnterprise Account Executiveを公式募集し、新規企業、価値検証、契約、販売パートナーを担当範囲に置く。", sourceIds: ["horizon3-job"] }],
    hurdles: [{ title: "国内運営基盤は未確認", body: "日本法人、国内拠点、雇用主体、日本語の技術・契約・障害支援、国内顧客事例を確認できない。", sourceIds: ["horizon3-job", "horizon3-company", "horizon3-japan-entity"] }],
    readinessConditions: [{ title: "成立条件1", body: "販売パートナーと最初の価値検証・受注・継続利用を作る。" }, { title: "成立条件2", body: "日本語の技術評価、修復支援、契約、データ取扱いを運営できる体制を整える。" }, { title: "成立条件3", body: "Remote営業の案件量と更新・拡張が、技術営業・顧客支援の追加採用を支える。" }],
    watchSignals: ["日本法人・国内拠点", "雇用主体", "国内顧客事例", "日本語の技術・契約支援", "技術営業・顧客支援の追加求人"],
  };
}

export function applyDaily20260916Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug["channel-talk"];
  if (!intelligence) return;
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => !`${item.label}${item.detail}`.includes("Customer Experience")),
    { year: "2026.09.16", label: "Customer Experience求人終了", detail: "公式求人ID 8fe67af8-1f09-499e-8b81-64a1dddf649cが404となり、現行の公式Lever求人一覧にも存在しないため掲載から除外。これだけで日本の採用停止や事業縮小を示すものではない。", sourceId: "channel-talk-job" },
  ];
}

export const daily20260916IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { mapbox, "sprout-ai": sproutAi, horizon3 };
