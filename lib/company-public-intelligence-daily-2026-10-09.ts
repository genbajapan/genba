import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-09";

const entrust = buildDailyCompanyIntelligence({
  slug: "entrust", name: "Entrust", jobConfirmed: true,
  jobUrl: "https://entrust.wd1.myworkdayjobs.com/EntrustCareers/job/Japan---Tokyo/Tech-Sales-Consultant---Data-Protection-Solutions_R004181", officialUrl: "https://www.entrust.com/ja/company",
  customersUrl: "https://www.entrust.com/sites/default/files/documentation/casestudies/dps-nshield-hsms-yahoo-japan-cs.pdf", financeUrl: "https://www.entrust.com/ja/company",
  problem: "人、端末、アプリ、機器の本人性と、暗号鍵・証明書が部署や基盤ごとに分散すると、不正アクセス、証明書切れ、監査不備、暗号移行の遅れが事業停止へつながる。",
  origin: "1969年創業のDatacardによるID発行の系譜と、1994年創業のEntrustによる公開鍵基盤の系譜を統合し、物理・デジタル双方の信頼を守る会社へ広げた。",
  externalNeed: "クラウド、機器、AI利用で機械IDと証明書が増え、ポスト量子暗号への移行期限も近づくため、企業は鍵・証明書の所在、期限、権限、暗号方式を継続的に管理する必要がある。",
  solution: "本人確認、認証、ID発行、PKI、HSM、暗号鍵、証明書ライフサイクル管理を、ID中心のセキュリティとして提供する。",
  selection: "個別の認証、PKI、HSM、証明書管理と比べ、ID登録から認証、鍵・証明書、ポスト量子暗号移行までの範囲、規格対応、既存基盤との接続、国内支援で比較する。",
  growth: "会社公式は55年以上の事業歴、150超の国での提供を案内。日本では1998年設立のエントラストジャパン、東京オフィス、Yahoo! JAPANのHSM事例、現行の技術営業求人を確認した。",
  role: "Tech Sales Consultantが日本の顧客と販売パートナーに対し、PKI、HSM、暗号鍵、電子署名、証明書管理の発見、提案、実証、設計、導入支援を担う。",
  organization: "エントラストジャパン株式会社と東京・台場オフィスを会社公式で確認。外部求人情報では国内12人との公開値があるが、現在の正確な在籍人数は未確認。",
  career: "暗号・IDの技術を、規制、事業継続、ポスト量子移行、システム設計へ翻訳し、顧客と販売パートナーを動かす技術営業経験。",
  globalHeadcount: "2,500人超（会社公式資料の公開値。現在値は変動している可能性がある）", japanPresence: "エントラストジャパン株式会社、東京・台場オフィス、日本の公式求人1件を確認", japanSince: "1998年12月にエントラストジャパンを設立",
  customer: { company: "Yahoo! JAPAN", outcome: "nShield HSMを暗号鍵の保護へ採用した国内事例を会社公式が紹介。現在の構成、運用品質、定量成果は未確認。" },
  facts: [["事業歴","55年以上","ID発行とデジタル信頼の事業を継続。"],["提供地域","150超の国","会社公式資料。"],["日本法人","1998年設立","エントラストジャパン株式会社。"],["東京拠点","台場","トレードピアお台場22階。"],["国内事例","Yahoo! JAPAN","nShield HSMを採用。"],["日本求人","1件","Data Protection Solutionsの技術営業。"]],
  products: [["nShield HSM","暗号鍵を専用ハードウェアで生成・保護・利用する。","https://www.entrust.com/ja/products/hsm"],["PKI and Certificate Lifecycle Management","公開鍵基盤と証明書の発行、更新、失効、可視化を管理する。","https://www.entrust.com/ja/products/pki"],["Identity Verification","本人確認と不正検知をデジタル登録・取引へ組み込む。","https://www.entrust.com/ja/products/identity-verification"]],
  competitors: "Thales、DigiCert、Keyfactor、CyberArk、Microsoft、クラウド事業者の鍵管理・証明書サービス、内製PKI",
  leader: ["Tony Ball","Chief Executive Officer","https://www.entrust.com/ja/company/leadership"], local: ["松﨑 隆伸","代表取締役","https://www.entrust.com/ja/contact/entrust-japan"],
  work: ["ハイブリッド","Tokyo","出社頻度は未確認","完全リモートの明記なし","担当範囲、出張、実証・導入、販売パートナー支援の配分を選考で確認"],
}, checkedAt);
entrust.sources.push(
  { id: "entrust-japan-entity", label: "エントラストジャパン会社情報", url: "https://www.entrust.com/ja/contact/entrust-japan", kind: "企業公式", scope: "日本法人・設立・所在地・代表者", checkedAt },
  { id: "entrust-japan-job", label: "Tech Sales Consultant - Data Protection Solutions", url: "https://entrust.wd1.myworkdayjobs.com/EntrustCareers/job/Japan---Tokyo/Tech-Sales-Consultant---Data-Protection-Solutions_R004181", kind: "企業公式", scope: "日本求人・役割・要件", checkedAt },
  { id: "entrust-yahoo-case", label: "Yahoo! JAPAN nShield HSM case study", url: "https://www.entrust.com/sites/default/files/documentation/casestudies/dps-nshield-hsms-yahoo-japan-cs.pdf", kind: "企業公式", scope: "国内顧客事例", checkedAt },
  { id: "gbiz-headcount-entrust", label: "gBizINFO エントラストジャパン", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報と被保険者数の確認", checkedAt },
);
entrust.companyStats.japanOffice = { value: "東京都港区台場2-3-1", detail: "トレードピアお台場22階。会社公式の日本法人情報。", sourceId: "entrust-japan-entity" };
entrust.companyStats.japanHeadcount = { value: "12人（外部求人情報の公開値）", detail: "外部求人情報の公開値。gBizINFOの事業所被保険者数として現在値を確定できていないため、実在籍人数とは一致しない可能性がある。", sourceId: "gbiz-headcount-entrust" };

const fitchSolutions = buildDailyCompanyIntelligence({
  slug: "fitch-solutions", name: "Fitch Solutions", jobConfirmed: true,
  jobUrl: "https://careers.fitch.group/job/Tokyo-Senior-Customer-Success-Manager-andor-Customer-Success-Manager%2C-Tokyo-Toky/1397082433/", officialUrl: "https://www.fitchsolutions.com/",
  customersUrl: "https://www.fitchsolutions.com/bmi", financeUrl: "https://www.fitch.group/history/",
  problem: "信用、市場、国、業界、企業に関する情報が別々の資料とデータに分かれると、投資・融資・事業会社は変化を同じ基準で比較できず、リスクの兆候と機会を意思決定へ反映しにくい。",
  origin: "1913年にJohn Knowles Fitchらが投資家向けの債券データ集を始め、1924年に現在広く使われる文字格付けを導入。2008年にFitch Solutionsを立ち上げ、調査・データ・分析へ拡張した。",
  externalNeed: "金利、信用、地政学、貿易、気候、サプライチェーンが同時に変化し、企業と投資家は公開情報の要約だけでなく、比較可能な長期データ、方法論、更新頻度、説明可能性を必要とする。",
  solution: "Fitch Ratings Pro、BMI、CreditSightsなどを通じ、信用調査、格付け、市場データ、国・業界リスク、債券調査を提供する。",
  selection: "Bloomberg、LSEG、S&P Global、Moody's、FactSet、個別調査会社と比べ、信用・国・業界をまたぐ対象範囲、方法論、分析担当者、既存業務への接続、顧客成功支援で比較する。",
  growth: "Fitch Groupは40超の拠点・関連会社と5,000人超を案内。2026年2月に東京オフィスを移転・拡張し、Fitch Solutionsでは東京の顧客成功職を募集する。",
  role: "Senior Customer Success ManagerがFitch Ratings Pro、BMI、CreditSightsの戦略顧客に対し、導入、利用定着、更新準備、リスク把握、追加提案を担う。",
  organization: "Fitch Ratings、Fitch Solutions、Fitch Learningが東京・京橋の同一オフィスで運営。gBizINFOで関連国内法人フィッチ・レーティングス・ジャパンの事業所被保険者30人を確認したが、Solutions単体の人数ではない。",
  career: "信用・市場・地政学データを、金融機関と事業会社の投資・リスク判断へ定着させ、利用、更新、拡大を動かす顧客成功経験。",
  globalHeadcount: "5,000人超（Fitch Group会社公式）", japanPresence: "東京・京橋オフィスと関連国内法人の事業所被保険者30人を確認。Solutions単体人数は未確認", japanSince: "日本での事業開始時期は未確認。2026年2月に東京オフィス移転を発表",
  customer: { company: "金融機関・投資家・事業会社", outcome: "信用、市場、国・業界リスクの調査・データを投資、リスク管理、成長機会の判断へ利用。日本企業の社名入り定量事例は未確認。" },
  facts: [["起点","1913年","投資家向け債券データから開始。"],["格付け方式","1924年","文字格付けを導入。"],["Solutions開始","2008年","調査・データ・分析を拡張。"],["グループ規模","5,000人超","40超の拠点・関連会社。"],["国内事業所","30人","関連法人の事業所被保険者数。"],["日本求人","1件","東京のSenior Customer Success Manager。"]],
  products: [["Fitch Ratings Pro","格付け、信用調査、比較分析を提供する。","https://www.fitchsolutions.com/products/fitch-ratings-pro"],["BMI","200超の市場と20超の業界の国・政治・業界リスクを分析する。","https://www.fitchsolutions.com/ja/bmi"],["CreditSights","投資適格、レバレッジド、ディストレスト債券の独立調査を提供する。","https://www.creditsights.com/"]],
  competitors: "S&P Global、Moody's、Bloomberg、LSEG、FactSet、Morningstar DBRS、個別の経済・地政学調査会社",
  leader: ["Rachel Lojko","President, Fitch Solutions","https://www.fitchsolutions.com/news/fitch-solutions-appoints-rachel-lojko-president"], local: ["未確認","Japan Leadership","https://www.fitchsolutions.com/news/fitch-group-strengthens-presence-in-japan-with-new-tokyo-office-location-23-02-2026"],
  work: ["ハイブリッド","Tokyo","週3日出社","完全リモートではない","担当契約額、社数、更新・拡大の評価配分、金融規制上の利益相反管理を選考で確認"],
}, checkedAt);
fitchSolutions.sources.push(
  { id: "fitch-japan-office", label: "Fitch Group new Tokyo office", url: "https://www.fitchsolutions.com/news/fitch-group-strengthens-presence-in-japan-with-new-tokyo-office-location-23-02-2026", kind: "企業公式", scope: "東京オフィス・日本市場方針", checkedAt },
  { id: "fitch-japan-job", label: "Senior Customer Success Manager, Tokyo", url: "https://careers.fitch.group/job/Tokyo-Senior-Customer-Success-Manager-andor-Customer-Success-Manager%2C-Tokyo-Toky/1397082433/", kind: "企業公式", scope: "日本求人・役割・働き方", checkedAt },
  { id: "fitch-history", label: "Fitch Group history", url: "https://www.fitch.group/history/", kind: "企業公式", scope: "創業・製品史・グループ規模", checkedAt },
  { id: "gbiz-headcount-fitch", label: "gBizINFO フィッチ・レーティングス・ジャパン株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=2010001135635", kind: "公的機関", scope: "関連国内法人・東京事業所の被保険者数", checkedAt },
);
fitchSolutions.companyStats.japanOffice = { value: "東京都中央区京橋1-1-1", detail: "八重洲ダイビル9階。Fitch Group会社公式。", sourceId: "fitch-japan-office" };
fitchSolutions.companyStats.japanHeadcount = { value: "30人", detail: "gBizINFOのフィッチ・レーティングス・ジャパン株式会社の事業所被保険者数。Fitch Solutions単体の人数とは一致しない。", sourceId: "gbiz-headcount-fitch" };

const elementBiosciences = buildDailyCompanyIntelligence({
  slug: "element-biosciences", name: "Element Biosciences", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/elementbiosciences/jobs/6214062004", officialUrl: "https://www.elementbiosciences.com/about",
  customersUrl: "https://www.elementbiosciences.com/", financeUrl: "https://www.elementbiosciences.com/news/element-biosciences-announces-upsized-series-e-to-accelerate-global-growth-across-ecosystem-of-genomic-multiomic-and-clinical-research-solutions",
  problem: "高性能なゲノム解析装置が高価で大規模な設備に偏ると、中小の研究室は十分な回数と柔軟性で実験できず、装置、試薬、解析手順の制約が研究速度を下げる。",
  origin: "2017年、3人の科学者が高品質なゲノム解析を一部の大規模施設だけでなく幅広い研究者へ開くために創業し、装置、試薬、表面化学、データ解析を一から設計した。",
  externalNeed: "精密医療と創薬はDNAだけでなくRNA、タンパク質、細胞形態を同時に捉える必要があり、研究機関は費用、処理量、データ品質、既存試薬との互換性を保って解析を拡張する必要がある。",
  solution: "AVITIのベンチトップ型シーケンサーとAVITI24、VITARIを通じ、ゲノム、トランスクリプトーム、タンパク質、空間・細胞情報を扱う開放的な解析基盤を提供する。",
  selection: "Illumina、PacBio、Oxford Nanopore、10x Genomics、外部受託解析と比べ、読取り品質、1ラン当たり費用、処理量、装置サイズ、試薬の自由度、マルチオミクス統合、国内支援で比較する。",
  growth: "2022年にAVITIを出荷開始し、2024年時点で190台超、2026年には40超の国へ顧客を拡大。2026年6月にSamsung Electronicsから1.75億ドルを含むSeries Eを発表した。",
  role: "Country Manager - JapanがAVITI装置と消耗品の日本戦略、売上、予測、重点顧客、販売代理店、技術研修、商用・技術課題の解決を持つ。",
  organization: "日本在住必須のリモートCountry Managerを募集。販売代理店が取引と現地支援を担う前提は求人にあるが、日本法人、常設拠点、国内在籍人数は未確認。",
  career: "研究装置の直接営業、販売代理店、重点研究者、技術支援、消耗品売上を束ね、日本市場を一から経営する国責任者経験。",
  globalHeadcount: "201〜500人規模（LinkedIn会社ページの公開レンジ。正確な現員は会社公式で非公開）", japanPresence: "日本在住リモートのCountry Manager求人1件を確認。日本法人・常設拠点は未確認", japanSince: "販売代理店経由の日本活動開始時期は未確認",
  customer: { company: "University of Minnesota Genomics Center", outcome: "2023年の初回導入後に4台を追加し、従来装置より高いデータ品質、短い処理時間、低コストへの適合を評価したと会社公式が紹介。" },
  facts: [["創業","2017年","3人の科学者がゲノム解析の民主化を目指して創業。"],["初回出荷","2022年","AVITIを研究室へ出荷開始。"],["導入台数","190台超","2024年時点。"],["顧客地域","40超の国","2026年会社発表。"],["Series E","1.75億ドル超","Samsung分。ほか投資家分は非開示。"],["日本求人","1件","Country Manager - Japan。"]],
  products: [["AVITI","高品質・低コストを狙うベンチトップ型DNAシーケンサー。","https://www.elementbiosciences.com/products/aviti"],["AVITI24","シーケンシングと細胞の多次元解析を一台で行う。","https://www.elementbiosciences.com/products/aviti24"],["VITARI","高処理量のゲノム・マルチオミクス解析を提供する。","https://www.elementbiosciences.com/products/vitari"]],
  competitors: "Illumina、PacBio、Oxford Nanopore Technologies、10x Genomics、BGI/MGI、外部受託解析",
  leader: ["Molly He","Co-Founder and Chief Executive Officer","https://www.elementbiosciences.com/about"], local: ["未確認","Country Manager - Japan","https://job-boards.greenhouse.io/elementbiosciences/jobs/6214062004"],
  work: ["フルリモート","Japan","日本在住必須","求人でリモートを明記","国内外出張最大50%、時間外の顧客支援、雇用主体、代理店との責任分担を確認"],
  preEntry: {
    verdict: "進出可能性は高い。日本事業の売上・市場成長を直接持つCountry Managerを採用中だが、日本法人、常設拠点、国内雇用主体は未確認。",
    signal: "日本在住必須の国責任者が、日本戦略、売上、重点顧客、販売代理店、技術研修、商用・技術課題を直接持つ。",
    hurdle: "日本法人、契約・請求・雇用主体、常設の技術・保守体制、国内顧客の社名入り事例を確認できない。",
    conditions: ["日本の契約・雇用・保守主体を明確にする。","販売代理店だけでなく国内の技術営業・アプリケーション支援を置く。","研究機関・製薬・検査機関の国内導入成果を公開する。","装置導入後の試薬供給と障害対応SLAを示す。"],
    watches: ["日本法人・常設拠点","Country Managerの採用完了","国内技術・顧客支援求人","国内顧客事例","販売代理店・保守網","日本語の製品・規制対応情報"],
  },
}, checkedAt);
if (elementBiosciences.salesFabeOverview) {
  elementBiosciences.salesFabeOverview.summary = "大学・研究機関・製薬・検査組織に対し、『高性能なゲノム解析の費用と処理量が研究頻度を制約する』『DNA以外の分子・細胞情報が別工程へ分かれる』『既存装置と試薬の選択肢が限定される』という課題を解決する。主力製品はAVITI、AVITI24、VITARIで、ゲノムからマルチオミクスまでを高品質かつ柔軟に解析する。競合優位性は、独自のAvidite化学、ベンチトップの運用、開放的な試薬・分析の生態系を一体で設計する点にある。顧客への一番のメリットは、研究室が解析の費用・速度・範囲を自ら選び、同じ予算で検証回数と得られる生物学的情報を増やせることにある。";
}
elementBiosciences.sources.push(
  { id: "element-japan-job", label: "Element Biosciences Country Manager - Japan", url: "https://job-boards.greenhouse.io/elementbiosciences/jobs/6214062004", kind: "企業公式", scope: "日本向け求人・役割・働き方", checkedAt },
  { id: "element-about", label: "Element Biosciences about and journey", url: "https://www.elementbiosciences.com/about", kind: "企業公式", scope: "創業・製品史・顧客地域", checkedAt },
  { id: "element-series-e", label: "Element Biosciences Series E", url: "https://www.elementbiosciences.com/news/element-biosciences-announces-upsized-series-e-to-accelerate-global-growth-across-ecosystem-of-genomic-multiomic-and-clinical-research-solutions", kind: "企業公式", scope: "資金調達・顧客地域・製品計画", checkedAt },
  { id: "gbiz-headcount-element", label: "gBizINFO Element Biosciences法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報と被保険者数の確認", checkedAt },
);
elementBiosciences.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本在住必須のCountry Manager求人は確認したが、日本法人・事業所と被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-element" };
if (elementBiosciences.marketStatus.japanGrowth) {
  elementBiosciences.marketStatus.japanGrowth.headline = "日本事業を直接持つCountry Managerを採用中";
  elementBiosciences.marketStatus.japanGrowth.narrative = "日本戦略、売上、重点顧客、販売代理店、技術課題を持つ求人は強い進出シグナルだが、日本法人・常設拠点・雇用主体は未確認。";
}

for (const intelligence of [entrust, fitchSolutions, elementBiosciences]) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.map((item) => item.year === "2026.09" ? { ...item, year: "2026.10" } : item);
}

export function applyDaily20261009Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.docusign;
  if (!intelligence) return;
  const sourceId = "docusign-partner-account-manager-salesforce-closure-20261009";
  const url = "https://careers.docusign.com/jobs/29277?lang=en-us";
  if (!intelligence.sources.some((source) => source.id === sourceId)) {
    intelligence.sources.push({ id: sourceId, label: "Partner Account Manager - Salesforce求人終了", url, kind: "企業公式", scope: "旧公式URLの404と現行採用一覧を確認", checkedAt });
  }
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => item.label !== "Partner Account Manager - Salesforce求人終了"),
    { year: "2026.10.09", label: "Partner Account Manager - Salesforce求人終了", detail: "旧公式求人URLが404を返し、現行の公式採用一覧にも当該職を確認できなかったため掲載から除外。これだけで日本事業縮小を意味しない。", sourceId },
  ];
}

export const daily20261009IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  entrust,
  "fitch-solutions": fitchSolutions,
  "element-biosciences": elementBiosciences,
};
