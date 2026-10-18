import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-19";

const aiand = buildDailyCompanyIntelligence({
  slug: "aiand", name: "ai&", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/aiand/9e603f41-a703-4b10-a2e4-b4ef77cfb77e", officialUrl: "https://www.aiand.com/jp/",
  customersUrl: "https://www.aiand.com/jp/newsroom/plug-and-play-collaboration", financeUrl: "https://www.aiand.com/newsroom/build-acquisition",
  problem: "企業がAIを本番利用すると、GPU、モデル、追加学習、推論、アプリ実行、データ所在が別々の供給者へ分かれ、速度、費用、障害対応、情報管理を一つの責任で改善しにくい。",
  origin: "David Bennettと原慎平が、日本からAIの計算基盤、推論、モデル、アプリ実行までを一体で最適化するため、2026年3月に横浜で創業した。",
  externalNeed: "生成AIが実験から基幹業務へ移るほど、企業はモデル性能だけでなく、データの所在、推論費用、応答速度、障害時の責任、アプリ配備を継続的に管理する必要がある。",
  solution: "日本国内の計算基盤から複数モデルの推論、追加学習、AIアプリとエージェントの配備を提供し、データを国内に保ちながら同じ技術基盤で運用する。",
  selection: "AWS、Google Cloud、Azure、国内GPUクラウド、各モデルAPI、Vercel等と比べ、国内完結、モデル選択、推論効率、追加学習、アプリ配備、障害時の責任範囲を同一業務で比較する。",
  growth: "2026年3月創業。Build.ioを買収してアプリ実行層を加え、100MW超の計算基盤を開発中と公表。公式求人では横浜・東京で営業を含む複数職種を採用している。",
  role: "Account Managerが日本顧客の利用、更新・拡大、新規商談を担い、AIaaS & PaaS Business Developmentが顧客開拓、提携、価格・用途の形成から受注までを担う。",
  organization: "株式会社エーアイ・アンド。本社は横浜・みなとみらい。東京・横浜の複数求人と、日本語公式サイトを確認した。",
  career: "創業初期の小規模組織で、AI基盤の用途、価格、提携、企業導入を実商談から作り、日本市場と製品開発を直接つなぐ経験。",
  globalHeadcount: "11〜50人規模の公開集計（現員は変動あり）", japanPresence: "株式会社エーアイ・アンド、横浜本社、日本語製品、東京・横浜求人", japanSince: "2026年3月に日本で創業",
  customer: { company: "Plug and Play Japan（協業先）", outcome: "AI Center of Excellenceで日本企業のAI導入を支える基盤提供について、2026年6月に協業を公式発表。導入企業名と定量成果は未確認。" },
  facts: [["創業","2026年3月","横浜で創業。"],["本社","横浜","みなとみらい・クイーンズタワーA。"],["計算基盤","100MW超","開発中の会社公表値。"],["買収","Build.io","2026年4月に会社公式発表。"],["規模","11〜50人","LinkedIn企業ページの公開レンジ。"],["日本営業求人","2件","Account Manager、AIaaS & PaaS Business Development。"]],
  products: [["ai& Inference","複数の先端モデルを日本国内の計算基盤からAPIで実行。","https://www.aiand.com/jp/inference"],["ai& Build","AIアプリ、エージェント、APIを日本国内で配備・運用。","https://www.aiand.com/jp/build"],["Post-Training","企業の領域・データ・評価に合わせてモデルを追加学習。","https://www.aiand.com/jp/"]],
  competitors: "AWS、Google Cloud、Microsoft Azure、国内GPUクラウド、各モデルAPI、Vercel",
  leader: ["David Bennett","Co-Founder & CEO","https://www.aiand.com/about"], local: ["原 慎平","Co-Founder & President","https://www.aiand.com/about"],
  work: ["ハイブリッド","横浜・東京","固定出社日数は未確認","完全リモートの明記なし","顧客訪問、担当範囲、技術支援、目標、達成率を選考で確認"],
}, checkedAt);
aiand.sources.push(
  { id: "aiand-about", label: "ai&会社情報", url: "https://www.aiand.com/about", kind: "企業公式", scope: "創業・本社・経営陣・事業思想", checkedAt },
  { id: "aiand-jp", label: "ai&日本語製品サイト", url: "https://www.aiand.com/jp/", kind: "企業公式", scope: "製品・国内データ所在・計算基盤", checkedAt },
  { id: "aiand-build", label: "Build.io買収発表", url: "https://www.aiand.com/newsroom/build-acquisition", kind: "企業公式", scope: "買収・アプリ実行基盤", checkedAt },
  { id: "aiand-pnp", label: "Plug and Play Japan協業発表", url: "https://www.aiand.com/jp/newsroom/plug-and-play-collaboration", kind: "企業公式", scope: "国内協業・企業向け展開", checkedAt },
  { id: "aiand-account-job", label: "Account Manager", url: "https://jobs.ashbyhq.com/aiand/9e603f41-a703-4b10-a2e4-b4ef77cfb77e", kind: "企業公式", scope: "現行求人・勤務地・言語・責任", checkedAt },
  { id: "aiand-bd-job", label: "AIaaS & PaaS Business Development", url: "https://jobs.ashbyhq.com/aiand/33601126-9a76-42a9-8759-1b2c6e465037", kind: "企業公式", scope: "現行求人・勤務地・責任", checkedAt },
  { id: "gbiz-headcount-aiand", label: "gBizINFO 株式会社エーアイ・アンド確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
aiand.companyStats.japanOffice = { value: "神奈川県横浜市西区みなとみらい2-3-1", detail: "クイーンズタワーA 10階。会社公式で確認。", sourceId: "aiand-about" };
aiand.companyStats.japanHeadcount = { value: "対象事業所の人数未確認", detail: "日本法人と本社住所は確認したが、gBizINFOの事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-aiand" };

const pitchbook = buildDailyCompanyIntelligence({
  slug: "pitchbook", name: "PitchBook", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/pitchbookdata/jobs/4624916006", officialUrl: "https://pitchbook.com/about",
  customersUrl: "https://pitchbook.com/products/integrations", financeUrl: "https://pitchbook.com/media/press-releases/pitchbook-announces-founder-john-gabberts-departure-plans",
  problem: "未公開企業、投資家、ファンド、案件の情報が開示資料、ニュース、各社サイトへ散らばり、投資、M&A、事業開発の候補発見と比較に時間がかかる。",
  origin: "John Gabbertが未公開市場の不透明さを解くため、2007年にシアトルの小さな事務所で7人の仲間とPitchBookを創業した。",
  externalNeed: "未公開市場の案件、評価額、資金調達、投資家行動が速く変わるほど、企業は出典と更新時点を持つ一貫したデータを、調査、財務モデル、顧客管理、生成AIの導線へつなぐ必要がある。",
  solution: "未公開・公開企業、投資家、ファンド、取引、人物のデータ、調査、比較、Excel・PowerPoint・CRM・生成AI連携を一つの基盤で提供する。",
  selection: "S&P Capital IQ、CB Insights、Crunchbase、Preqin、LSEG、各社内製調査と比べ、未公開市場の範囲、更新頻度、出典、分析、業務連携、顧客支援で比較する。",
  growth: "Morningstarが2016年に買収。2023年売上は5.519億ドル、利用者10万人超、世界3,000人超を会社公式が公表。公式製品ページは1,100万超の企業プロフィールを掲載している。",
  role: "東京のAccount ManagerとSenior Account Managerが既存顧客の主要窓口となり、四半期の販売・継続目標、利用、更新、利用者拡大、顧客教育、商談予測を担う。",
  organization: "東京勤務の現行求人2件を確認。日本法人名、国内オフィス住所、国内の正確な在籍人数は公式公開情報で確定できない。",
  career: "投資、M&A、事業開発の情報要求を、データ活用、継続、利用者拡大へ変え、アカウントの複数年成長を持つ経験。",
  globalHeadcount: "3,000人超（2024年会社公式）", japanPresence: "東京勤務のAccount Manager求人2件。日本法人名・住所・国内人数は未確認", japanSince: "確認不能",
  customer: { company: "DG Ventures", outcome: "PitchBook Customer Successの提案でExcel連携を日常業務へ組み込み、生産性が変わったとManaging Directorが公式製品ページで説明。" },
  facts: [["創業","2007年","シアトルで創業。"],["利用者","10万人超","2024年会社公式。"],["従業員","3,000人超","2024年会社公式。"],["2023年売上","5.519億ドル","会社公式発表。"],["企業プロフィール","1,100万超","公式製品ページ。"],["日本求人","2件","Account Manager、Senior Account Manager。"]],
  products: [["PitchBook Desktop","未公開・公開企業、投資家、ファンド、案件を検索・比較・分析。","https://pitchbook.com/products/desktop"],["Direct Data","PitchBookデータをデータフィードとAPIで社内基盤へ接続。","https://pitchbook.com/products/direct-data"],["Integrations","Excel、PowerPoint、ブラウザ、CRMへデータと更新を接続。","https://pitchbook.com/products/integrations"]],
  competitors: "S&P Capital IQ、CB Insights、Crunchbase、Preqin、LSEG、内製調査",
  leader: ["Rod Diefendorf","President & Chief Operating Officer","https://pitchbook.com/about"], local: ["未確認","日本事業責任者","https://pitchbook.com/about"],
  work: ["出社中心","東京勤務","週5日","完全リモートではない","限定的な出張あり。顧客担当、目標、達成率、支援分担を選考で確認"],
}, checkedAt);
pitchbook.sources.push(
  { id: "pitchbook-about", label: "PitchBook会社情報", url: "https://pitchbook.com/about", kind: "企業公式", scope: "事業・経営陣・会社概要", checkedAt },
  { id: "pitchbook-founder", label: "創業者交代発表", url: "https://pitchbook.com/media/press-releases/pitchbook-announces-founder-john-gabberts-departure-plans", kind: "企業公式", scope: "創業・規模・売上・利用者・買収", checkedAt },
  { id: "pitchbook-desktop", label: "PitchBook Desktop", url: "https://pitchbook.com/products/desktop", kind: "企業公式", scope: "製品・データ範囲・利用場面", checkedAt },
  { id: "pitchbook-integrations", label: "PitchBook Integrations", url: "https://pitchbook.com/products/integrations", kind: "企業公式", scope: "連携・DG Venturesコメント", checkedAt },
  { id: "pitchbook-account-job", label: "Account Manager, PitchBook", url: "https://job-boards.greenhouse.io/pitchbookdata/jobs/4624916006", kind: "企業公式", scope: "現行求人・勤務地・勤務形態・言語・責任", checkedAt },
  { id: "pitchbook-senior-account-job", label: "Senior Account Manager, PitchBook", url: "https://job-boards.greenhouse.io/pitchbookdata/jobs/4625512006", kind: "企業公式", scope: "現行求人・勤務地・勤務形態・言語・責任", checkedAt },
  { id: "gbiz-headcount-pitchbook", label: "gBizINFO PitchBook法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
pitchbook.companyStats.japanOffice = { value: "東京都（住所未確認）", detail: "公式求人で東京都勤務を確認。会社公式の国内オフィス住所は確認できない。", sourceId: "pitchbook-account-job" };
pitchbook.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "東京求人は確認したが、gBizINFOで対象法人と被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-pitchbook" };

const nomic = buildDailyCompanyIntelligence({
  slug: "nomic-ai", name: "Nomic", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/nomic.ai/e2165542-9e5d-4a8b-937f-4c573a99f300", officialUrl: "https://www.nomic.ai/about",
  customersUrl: "https://www.nomic.ai/news/announcing-nomics-strategic-funding-round-and-partnerships-with-aurecon-and-arcadis", financeUrl: "https://www.nomic.ai/news/announcing-nomics-strategic-funding-round-and-partnerships-with-aurecon-and-arcadis",
  problem: "建築・設計・建設では、図面、仕様書、基準、提出物、質問記録が大量に分かれ、熟練者が照合と一次確認へ時間を使い、見落としが手戻りと工期リスクになる。",
  origin: "Andriy MulyarがAIを説明可能にする研究から2022年に創業し、設計・建設会社との仕事を通じて、汎用AIが読みにくい図面と仕様書へ事業を集中した。",
  externalNeed: "生成AIが設計・工事へ入るほど、企業は答えの速さだけでなく、図面・条文への出典、既存権限、人の最終確認、地域別データ所在を一つの運用として持つ必要がある。",
  solution: "図面、仕様書、建築基準、提出物、RFI、社内知識を業界特化モデルで読み、出典付きの検索、照合、一次レビュー、PDF注記を既存システムと権限の中で行う。",
  selection: "Microsoft Copilot、ChatGPT Enterprise、Autodesk・ProcoreのAI機能、各社内製RAGと比べ、図面理解、建築基準、出典、権限継承、AEC業務への組込みで比較する。",
  growth: "2022年創業。2023年に1,700万ドルのSeries Aを調達。2026年にAureconとArcadisが戦略投資し、Aureconは6,700人へ展開、Arcadisは12カ国約150人の試行後に導入を進めている。",
  role: "APACのSenior Account Executiveが豪州・ニュージーランド・シンガポールのいずれかを拠点に、地域の案件創出、技術評価、契約、導入、拡大、提携を最初の上級営業として担う。",
  organization: "APACの顧客、パイプライン、営業求人を確認。日本法人、国内拠点、日本担当、日本語契約・支援、日本在住求人は未確認。",
  career: "正式進出後は、AECの現場知識とAI評価を結び、日本の設計・建設会社へ業界特化AIを立ち上げる経験になり得る。",
  globalHeadcount: "11〜50人規模の公開集計（現員は変動あり）", japanPresence: "日本法人・国内拠点・日本求人・国内顧客名は未確認。APAC営業求人あり", japanSince: "未進出",
  customer: { company: "Aurecon・Arcadis", outcome: "Aureconは6,700人へ利用を拡大。Arcadisは12カ国約150人の試行で86%が仕事の進め方を変えたと回答し、導入を拡大。" },
  facts: [["創業","2022年","ニューヨークで創業。"],["Series A","1,700万ドル","2023年会社公式。"],["APAC展開","Aurecon 6,700人","利用拡大を会社公式発表。"],["試行","12カ国・約150人","Arcadisで実施。"],["規模","11〜50人","LinkedIn企業ページの公開レンジ。"],["日本求人","0件","公式Careerで確認。"]],
  products: [["Nomic Platform","図面、仕様書、基準、工事記録を出典付きで検索・レビュー。","https://www.nomic.ai/"],["Agent API","図面・文書理解モデルを社内AIへ組み込むAPI。","https://www.nomic.ai/about"],["AEC-Bench","建築・設計・建設の実務でAIエージェントを評価する公開ベンチマーク。","https://www.nomic.ai/blog/what-does-aec-bench-mean-for-aec-firms"]],
  competitors: "Microsoft Copilot、ChatGPT Enterprise、Autodesk、Procore、各社内製RAG",
  leader: ["Andriy Mulyar","Founder & CEO","https://www.nomic.ai/about"], local: ["未確認","日本事業責任者","https://www.nomic.ai/careers"],
  work: ["未確認","日本求人なし","該当なし","日本での勤務条件は未確認","APAC求人の条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中。APACの大手顧客、豪州のデータ所在、地域営業採用はあるが、日本専任体制と日本語の製品・契約・支援は未確認。",
    signal: "豪州・ニュージーランド・シンガポール在住のSenior Account Executiveを募集し、Aureconを含むAPAC顧客と案件を拡大。",
    hurdle: "日本法人、国内拠点、日本担当求人、国内顧客事例、日本語の建築基準・契約・技術支援を確認できない。",
    conditions: ["日本の図面、仕様、建築基準で精度と出典を検証する。", "日本語の製品、契約、情報管理、導入支援を整える。", "APACから日本企業の有償案件、更新、紹介を再現し、専任組織の固定費を上回る。"],
    watches: ["Japan・Tokyo求人", "日本法人・国内拠点", "国内AEC顧客事例", "日本語・国内データ所在", "APAC営業求人のJapan territory表記"],
  },
}, checkedAt);
nomic.sources.push(
  { id: "nomic-about", label: "Nomic会社情報", url: "https://www.nomic.ai/about", kind: "企業公式", scope: "創業・製品・経営陣・規模", checkedAt },
  { id: "nomic-apac-job", label: "Senior Account Executive, APAC", url: "https://jobs.ashbyhq.com/nomic.ai/e2165542-9e5d-4a8b-937f-4c573a99f300", kind: "企業公式", scope: "APAC採用・勤務地・責任", checkedAt },
  { id: "nomic-partnerships", label: "Aurecon・Arcadis提携発表", url: "https://www.nomic.ai/news/announcing-nomics-strategic-funding-round-and-partnerships-with-aurecon-and-arcadis", kind: "企業公式", scope: "資金調達・APAC顧客・導入規模", checkedAt },
  { id: "nomic-security", label: "Nomic Security", url: "https://www.nomic.ai/security", kind: "企業公式", scope: "権限・データ所在・学習利用・監査", checkedAt },
  { id: "nomic-careers", label: "Nomic Careers", url: "https://www.nomic.ai/careers", kind: "企業公式", scope: "現行求人・組織", checkedAt },
  { id: "gbiz-headcount-nomic", label: "gBizINFO Nomic法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
nomic.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "Nomicと結びつく国内法人・事業所をgBizINFOで特定できず、日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-nomic" };

export const daily20261019IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  aiand,
  pitchbook,
  "nomic-ai": nomic,
};
