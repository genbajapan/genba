import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-12";

const guidewire = buildDailyCompanyIntelligence({
  slug: "guidewire", name: "Guidewire", jobConfirmed: true,
  jobUrl: "https://guidewire.wd5.myworkdayjobs.com/en-US/external/job/Technical-Solution-Consultant_JR_14253", officialUrl: "https://www.guidewire.com/ja/",
  customersUrl: "https://www.guidewire.com/customers/success-stories/rakuten", financeUrl: "https://ir.guidewire.com/node/26281",
  problem: "損害保険の契約、請求、保険金支払いが古い基幹システムと個別改修へ分散すると、商品改定、顧客対応、データ活用が遅くなり、変更のたびに費用と障害リスクが増える。",
  origin: "2001年、6人の起業家が損害保険の基幹業務を変える構想で米国に創業し、2003年のClaimCenterから契約・請求・分析へ広げた。",
  externalNeed: "自然災害、修理費上昇、顧客のデジタル期待、規制、生成AIの利用が重なり、保険会社は安定した基幹処理を保ちながら商品・査定・顧客対応を速く変える必要がある。",
  solution: "InsuranceSuiteとGuidewire Cloudで契約、保険料請求、保険金支払い、データ、デジタル接点を統合し、損害保険向けの製品・提携部品を提供する。",
  selection: "既存基幹の延命、独自開発、Duck Creek、Sapiens等と比べ、損害保険の業務範囲、クラウド更新、導入実績、日本固有機能、提携者の人材・部品で比較する。",
  growth: "2026年度売上14.754億ドル、ARR12.42億ドル、世界4,174人を会社公式で確認。日本では6,000万ドルの追加投資と日本固有機能の開発を発表した。",
  role: "Functional Solution Consultantが保険会社の事業目標と業務要件を聞き、Guidewire Cloudの適合、実演、提案、RFI・RFP回答を営業と進める。",
  organization: "ガイドワイア・ソフトウェア・ジャパン株式会社、東京・歌舞伎座タワー。gBizINFOの事業所被保険者数60人。",
  career: "損害保険の業務知識、クラウド移行、企業向けプリセールス、複数製品・提携者を束ねる提案力を同時に積める。",
  globalHeadcount: "4,174人（FY2026会社公式）", japanPresence: "日本法人、東京オフィス、国内顧客事例、gBizINFO被保険者数60人、東京求人1件", japanSince: "日本事業の開始年は未確認",
  customer: { company: "楽天損害保険", outcome: "ClaimCenter導入で保険金支払い業務の処理能力を150%高めたと会社公式が紹介。" },
  facts: [["創業","2001年","6人の起業家が創業。"],["顧客","570社超","会社公式About。"],["売上","14.754億ドル","FY2026会社公式。"],["ARR","12.42億ドル","FY2026会社公式。"],["国内規模","60人","gBizINFO事業所被保険者数。"],["日本求人","1件","Functional Solution Consultant。"]],
  products: [["InsuranceSuite","契約、請求、保険金支払いの中核業務を統合する。","https://www.guidewire.com/ja/products/insurancesuite"],["Guidewire Cloud","損害保険向け製品をクラウドで更新・運用する。","https://www.guidewire.com/ja/products/guidewire-cloud"],["Data and Analytics","保険データを分析、価格、査定、顧客対応へ使う。","https://www.guidewire.com/ja/products/data-and-analytics"]],
  competitors: "Duck Creek、Sapiens、既存の保険基幹システム、独自開発",
  leader: ["Mike Rosenbaum","Chief Executive Officer","https://www.guidewire.com/ja/about/leadership"], local: ["江端 美幸","日本代表","https://www.guidewire.com/ja/about/press-center/press-releases/20250917/guidewire-to-develop-policycenter-functionality-for-japanese-market-simplifying-innovation"],
  work: ["ハイブリッド","東京都","固定出社日数は未確認","完全リモートの明記なし","海外研修・社内会議への移動あり。目標、担当社数、商談期間、導入後の責任境界を選考で確認"],
}, checkedAt);
guidewire.sources.push(
  { id: "guidewire-about", label: "Guidewire会社情報", url: "https://www.guidewire.com/en/about", kind: "企業公式", scope: "創業・顧客・提携規模", checkedAt },
  { id: "guidewire-fy2026", label: "Guidewire FY2026 results", url: "https://ir.guidewire.com/node/26281", kind: "企業公式", scope: "売上・ARR", checkedAt },
  { id: "guidewire-sustainability-2026", label: "Guidewire FY2026 Sustainability Report", url: "https://www.guidewire.com/about/corporate-sustainability/fiscal-year-2026-sustainability-report", kind: "企業公式", scope: "世界従業員数", checkedAt },
  { id: "guidewire-japan-investment", label: "Guidewire日本への追加投資", url: "https://ir.guidewire.com/node/24311/pdf", kind: "企業公式", scope: "日本投資・国内利用規模", checkedAt },
  { id: "guidewire-rakuten", label: "楽天損害保険導入事例", url: "https://www.guidewire.com/customers/success-stories/rakuten", kind: "企業公式", scope: "国内顧客成果", checkedAt },
  { id: "guidewire-japan-job", label: "Functional Solution Consultant", url: "https://guidewire.wd5.myworkdayjobs.com/en-US/external/job/Technical-Solution-Consultant_JR_14253", kind: "企業公式", scope: "現行求人・勤務地・言語", checkedAt },
  { id: "gbiz-headcount-guidewire", label: "gBizINFO ガイドワイア・ソフトウェア・ジャパン株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=8010001114765", kind: "公的機関", scope: "日本法人・所在地・事業所被保険者数", checkedAt },
);
guidewire.companyStats.japanOffice = { value: "東京都中央区銀座4-12-15", detail: "歌舞伎座タワー19階。会社公式とgBizINFOで確認。", sourceId: "gbiz-headcount-guidewire" };
guidewire.companyStats.japanHeadcount = { value: "60人", detail: "gBizINFOの事業所情報に掲載された厚生年金保険・健康保険の被保険者数。役員・制度対象外・業務委託等を含む総在籍人数ではない。", sourceId: "gbiz-headcount-guidewire" };

const shieldAi = buildDailyCompanyIntelligence({
  slug: "shield-ai", name: "Shield AI", jobConfirmed: true,
  jobUrl: "https://jobs.lever.co/shieldai?location=Tokyo", officialUrl: "https://shield.ai/",
  customersUrl: "https://shield.ai/shield-ai-v-bat-selected-as-japan-maritime-self-defense-forces-first-maritime-isr-platform/", financeUrl: "https://shield.ai/ten-years-of-shield-ai/",
  problem: "通信やGPSが妨害される環境では、遠隔操縦だけに依存する航空機は任務を継続しにくく、人が危険地域へ近づくほど情報取得と意思決定のコストが上がる課題がある。",
  origin: "元米海軍特殊部隊員のBrandon Tsengが、派遣先で自律技術が人命を守れた場面を経験し、兄Ryan Tsengと自律制御技術者Andrew Reiterと2015年に創業した。",
  externalNeed: "安全保障環境の変化、無人機の大量運用、通信・GPS妨害、取得期間の長さにより、政府は人の危険を減らし、既存航空機にも載せられ、実運用で検証できる自律技術を求める。",
  solution: "Hivemindの機体非依存の自律飛行ソフトウェアと、垂直離着陸するV-BAT、次世代のX-BAT、シミュレーション技術を組み合わせる。",
  selection: "従来の防衛企業、個別の無人機、遠隔操縦、内製AIと比べ、通信なしでの自律性、機体への統合、実任務実績、輸出管理、安全性、国内産業との協業で比較する。",
  growth: "2025年に3人から1,000人超へ成長したと会社公式が公表。日本では海上自衛隊がV-BATを海上ISR基盤として選定し、東京で事業開発4件と技術2件を募集する。",
  role: "日本・北東アジアの事業開発職が、防衛省・軍・防衛企業と要件形成、実証、提案、取得、契約を担い、Hivemindと航空機の採用を進める。",
  organization: "会社公式のTokyo拠点とInternational EOR採用を確認。日本法人名、国内在籍人数、契約・保守体制の詳細は未確認。",
  career: "防衛取得、航空宇宙、自律AI、政府関係、長期の案件形成、技術と作戦要件の翻訳を横断する経験。",
  globalHeadcount: "1,000人超（2025年会社公式）", japanPresence: "Tokyo拠点、海上自衛隊のV-BAT選定、東京の公式求人6件（事業開発4件・技術2件）", japanSince: "日本拠点の開設年は未確認",
  customer: { company: "海上自衛隊", outcome: "V-BATを初の海上ISR基盤として選定し、複数システムを導入する計画を会社公式が発表。" },
  facts: [["創業","2015年","3人の共同創業者が設立。"],["従業員","1,000人超","2025年会社公式。"],["日本顧客","海上自衛隊","V-BATを海上ISR基盤に選定。"],["製品","Hivemind・V-BAT・X-BAT","会社公式。"],["日本拠点","Tokyo","会社公式Locations。"],["日本求人","6件","事業開発4件と技術2件。"]],
  products: [["Hivemind","通信・GPSが制限された環境で航空機を自律運用するAI操縦基盤。","https://shield.ai/hivemind/"],["V-BAT","艦艇や狭い場所から垂直離着陸できる無人航空機。","https://shield.ai/v-bat/"],["X-BAT","Hivemindを使う次世代の自律型垂直離着陸航空機。","https://shield.ai/x-bat/"]],
  competitors: "Anduril、General Atomics、Kratos、従来の防衛企業、遠隔操縦型無人機、政府内製",
  leader: ["Gary Steele","Chief Executive Officer","https://shield.ai/company-leadership/"], local: ["未確認","日本事業責任者","https://jobs.lever.co/shieldai?location=Tokyo"],
  work: ["未確認","東京都（職種別）","事業開発3件は出社、1件はリモート","International EOR採用","出張は職種別に多い。雇用主体、セキュリティ要件、輸出管理、目標、担当範囲を選考で確認"],
}, checkedAt);
shieldAi.sources.push(
  { id: "shield-about", label: "Shield AI会社情報", url: "https://shield.ai/about/", kind: "企業公式", scope: "創業・使命・製品", checkedAt },
  { id: "shield-leadership", label: "Shield AI leadership", url: "https://shield.ai/company-leadership/", kind: "企業公式", scope: "経営陣・規模", checkedAt },
  { id: "shield-ten-years", label: "Ten Years of Shield AI", url: "https://shield.ai/ten-years-of-shield-ai/", kind: "企業公式", scope: "創業背景・従業員規模", checkedAt },
  { id: "shield-locations", label: "Shield AI locations", url: "https://shield.ai/locations/", kind: "企業公式", scope: "Tokyo拠点", checkedAt },
  { id: "shield-jmsdf", label: "V-BAT海上自衛隊選定", url: "https://shield.ai/shield-ai-v-bat-selected-as-japan-maritime-self-defense-forces-first-maritime-isr-platform/", kind: "企業公式", scope: "国内顧客・採用目的", checkedAt },
  { id: "shield-tokyo-jobs", label: "Shield AI Tokyo jobs", url: "https://jobs.lever.co/shieldai?location=Tokyo", kind: "企業公式", scope: "東京求人6件・勤務形態", checkedAt },
  { id: "gbiz-headcount-shield-ai", label: "gBizINFO Shield AI法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
shieldAi.companyStats.japanOffice = { value: "東京（住所未確認）", detail: "会社公式LocationsにTokyoを掲載。日本法人名と住所は未確認。", sourceId: "shield-locations" };
shieldAi.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "Tokyo拠点とInternational EOR求人は確認したが、日本法人・事業所の被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-shield-ai" };

const xbow = buildDailyCompanyIntelligence({
  slug: "xbow", name: "XBOW", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/xbowcareers/39365232-635f-4dc5-b590-7a1078f66ca9/", officialUrl: "https://xbow.com/",
  customersUrl: "https://xbow.com/customer-stories", financeUrl: "https://xbow.com/news/xbow-raises-120m-to-scale",
  problem: "年数回の人手による侵入テストでは、開発速度と攻撃面の増加に追いつけず、重大な弱点が次の検査まで残る課題がある。AIで攻撃も大規模化する一方、熟練者は限られる。",
  origin: "GitHub CopilotとGitHub Advanced Securityを生んだOege de Moorが、AIを攻撃者の推論へ使う構想から2024年1月にXBOWを創業した。",
  externalNeed: "生成AIで開発と攻撃の速度が上がり、企業は本番環境の安全、認証情報、個人データ、監査証跡を守りながら、リリースごとに弱点を継続検証する必要がある。",
  solution: "自律型AIハッカーがWebアプリケーションを継続検査し、再現可能な攻撃証拠と修正優先度を提示し、専門家が安全性を監督する。",
  selection: "人手の侵入テスト、脆弱性スキャナー、バグ報奨金、内製レッドチームと比べ、未知の弱点を推論する力、検証頻度、再現証拠、誤検知、安全境界、データ保管で比較する。",
  growth: "2026年3月に1.2億ドルのSeries Cを発表し、5月時点で顧客100社超、従業員250人超を会社公式が公表。APAC営業と国際展開へ投資する。",
  role: "APACのStrategic Account Executiveが豪州・韓国を中心に地域の初期顧客を開拓する。日本勤務・日本担当の求人ではなく、国内応募可能とは扱わない。",
  organization: "日本法人、国内拠点、日本在住人員、日本語の契約・支援、国内顧客名は未確認。APAC営業求人とシンガポールのデータ保管選択肢を確認。",
  career: "自律型AI、攻撃的セキュリティ、企業向け販売、初期地域の市場開拓を横断できるが、日本での雇用・支援条件は未成立。",
  globalHeadcount: "250人超（2026年5月会社公式）", japanPresence: "日本法人・国内拠点・日本在住求人・国内顧客名は未確認。APAC営業求人あり", japanSince: "未進出",
  customer: { company: "Moderna", outcome: "会社公式の顧客事例一覧に掲載。個別の定量成果は公開ページで確認できない。" },
  facts: [["創業","2024年1月","Oege de Moorが創業。"],["資金調達","1.2億ドル","2026年3月Series C。"],["顧客","100社超","2026年5月会社公式。"],["従業員","250人超","2026年5月会社公式。"],["地域採用","APAC営業","豪州・韓国を中心とする海外求人。"],["日本求人","0件","日本勤務・日本担当求人は未確認。"]],
  products: [["XBOW Autonomous Pentesting","AIがWebアプリケーションを継続的に攻撃検証する。","https://xbow.com/product"],["XBOW Console","対象、検査、証拠、修正状況を管理する。","https://docs.xbow.com/console/get-started/"],["Trust and Safety Controls","データ保管、認証、検査の安全境界を管理する。","https://docs.xbow.com/console/get-started/trust-and-safety/"]],
  competitors: "Pentera、Horizon3.ai、Cobalt、Synack、バグ報奨金、人手の侵入テスト、内製レッドチーム",
  leader: ["Oege de Moor","Founder and Chief Executive Officer","https://xbow.com/leadership"], local: ["未採用","日本市場責任者","https://jobs.ashbyhq.com/xbowcareers"],
  work: ["未確認","日本国内求人なし","該当なし","日本での勤務条件は未確認","現行APAC職は豪州・韓国を中心とする地域求人。国内応募可能と誤認しない"],
  preEntry: {
    verdict: "進出可能性は中。APAC営業採用、国際展開投資、シンガポールのデータ保管選択肢はあるが、日本法人、国内拠点、日本担当、日本語支援、国内顧客は未確認。",
    signal: "地域で最初期の営業体制を作るAPAC Strategic Account Executiveを募集し、国際展開を資金用途に掲げる。",
    hurdle: "日本のセキュリティ責任者が求める日本語の契約・支援、データ所在、安全な検査承認、誤検知・損害時の責任、国内事例が未整備。",
    conditions: ["日本のセキュリティ・開発責任者で有償検証と導入用途を確立する。","日本語の契約、セキュリティ資料、運用支援、緊急対応を用意する。","日本在住の営業・技術支援人員または国内パートナーを置く。","日本顧客が選べるデータ所在と安全な検査承認・停止手順を明確にする。","日本法人・国内拠点または継続提供できる雇用・契約主体を整える。"],
    watches: ["日本在住求人","日本法人・国内拠点","日本語サイト・契約・支援情報","日本企業の社名入り事例","国内販売・技術パートナー","日本向けデータ所在・認証"],
  },
}, checkedAt);
xbow.sources.push(
  { id: "xbow-company", label: "XBOW公式", url: "https://xbow.com/", kind: "企業公式", scope: "課題・製品・顧客", checkedAt },
  { id: "xbow-leadership", label: "XBOW leadership", url: "https://xbow.com/leadership", kind: "企業公式", scope: "創業者・経営陣", checkedAt },
  { id: "xbow-series-c", label: "XBOW Series C", url: "https://xbow.com/news/xbow-raises-120m-to-scale", kind: "企業公式", scope: "創業・資金調達・国際展開", checkedAt },
  { id: "xbow-scale", label: "XBOW strategic investment", url: "https://xbow.com/news/xbow-secures-additional-35m-from-strategic-investors", kind: "企業公式", scope: "顧客・従業員規模", checkedAt },
  { id: "xbow-customers", label: "XBOW customer stories", url: "https://xbow.com/customer-stories", kind: "企業公式", scope: "顧客事例", checkedAt },
  { id: "xbow-trust", label: "XBOW Trust and Safety", url: "https://docs.xbow.com/console/get-started/trust-and-safety/", kind: "企業公式", scope: "データ保管・安全・認証", checkedAt },
  { id: "xbow-apac-job", label: "Strategic Account Executive (APAC)", url: "https://jobs.ashbyhq.com/xbowcareers/39365232-635f-4dc5-b590-7a1078f66ca9/", kind: "企業公式", scope: "APAC採用・勤務地・地域", checkedAt },
  { id: "gbiz-headcount-xbow", label: "gBizINFO XBOW法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
xbow.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "gBizINFOの事業所情報で対象法人を特定できず、日本法人での想定従業員数は算定しない。APAC営業求人だけで0人とは扱わない。", sourceId: "gbiz-headcount-xbow" };
if (xbow.marketStatus.japanGrowth?.entryAssessment) {
  xbow.marketStatus.japanGrowth.entryAssessment.factSignals = [
    { title: "APAC営業採用", body: "豪州・韓国を中心に地域の最初期顧客を開拓するStrategic Account Executiveを募集。", sourceIds: ["xbow-apac-job"] },
    { title: "国際展開へ投資", body: "2026年の資金調達で企業市場と国際展開の加速を用途に掲げる。", sourceIds: ["xbow-series-c"] },
    { title: "シンガポール保管を準備", body: "米国・欧州に加えシンガポールのデータ保管選択肢をprivate previewとして案内。", sourceIds: ["xbow-trust"] },
    { title: "顧客100社超", body: "2026年5月時点で顧客100社超を公表し、地域拡張を支える導入基盤がある。", sourceIds: ["xbow-scale"] },
  ];
  xbow.marketStatus.japanGrowth.entryAssessment.hurdles = [
    { title: "日本専任体制なし", body: "日本法人、国内拠点、日本在住の営業・技術支援人員は未確認。", sourceIds: ["xbow-apac-job", "gbiz-headcount-xbow"] },
    { title: "日本語支援なし", body: "日本語の契約、製品、セキュリティ、緊急対応情報は未確認。", sourceIds: ["xbow-company"] },
    { title: "国内実績なし", body: "日本企業の社名入り導入事例と国内パートナーは未確認。", sourceIds: ["xbow-customers"] },
    { title: "データ・検査責任", body: "本番環境を攻撃検証するため、日本顧客向けのデータ所在、承認、停止、損害責任を明確にする必要がある。", sourceIds: ["xbow-trust"] },
  ];
}

export const daily20261012IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  guidewire,
  "shield-ai": shieldAi,
  xbow,
};
