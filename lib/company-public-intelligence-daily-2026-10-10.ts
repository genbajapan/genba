import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-10";

const tulip = buildDailyCompanyIntelligence({
  slug: "tulip-interfaces", name: "Tulip Interfaces", jobConfirmed: true,
  jobUrl: "https://tulip.co/careers/", officialUrl: "https://tulip.co/about-us/",
  customersUrl: "https://tulip.co/about-us/", financeUrl: "https://tulip.co/press/tulip-secures-120m-series-d/",
  problem: "製造現場の作業手順、品質、設備、履歴、改善データが紙・表計算・個別システムへ分かれると、変化に時間がかかり、欠陥と手戻りの原因を同じデータで追えない。",
  origin: "2014年、MIT Media Lab発の企業としてNatan LinderとRony Kubatが創業。固定的な製造システムではなく、現場の人が必要なアプリを組み立てる発想から始まった。",
  externalNeed: "人手不足、多品種・短納期、供給網の変動、製薬・医療機器の追跡・監査要求により、製造企業は大型MESの長期改修を待たず、現場の変化を安全にデジタル化する必要がある。",
  solution: "ノーコードの現場アプリ、エッジ機器接続、共通データ、分析、AIを一つのコンポーザブルMESとして提供する。",
  selection: "SAP・Siemens・Rockwell等のMES、個別開発、紙・表計算と比べ、現場主導の変更速度、既存設備とシステムの接続、アプリの標準化、ガバナンスの両立で比較する。",
  growth: "60,000人超の現場従業者が45カ国で28百万時間以上利用すると会社公式が公表。2026年1月に三菱電機主導で1.2億ドルを調達し、評価額13億ドルに達した。",
  role: "日本で製薬営業、製造ソリューション導入、製品支援、クラウド基盤の4職種を募集し、販売から導入・運用までの国内体制を広げる。",
  organization: "会社情報はTokyoを6拠点の一つとする一方、現行日本求人は2026年リモート、2027年オフィス開設予定と記載。国内法人、拠点の実態、在籍人数は未確認。",
  career: "製造・製薬の業務、機器、データ、品質要求を、現場が変更できるアプリと世界共通の運用基盤へ変える経験。",
  globalHeadcount: "501〜1,000人規模（LinkedIn会社ページの公開レンジ。正確な現員は会社公式で非公開）", japanPresence: "2026年は日本在住リモート、2027年にオフィス開設予定。日本向け公式求人4件", japanSince: "日本市場での事業開始時期は未確認。現行求人は2027年オフィス予定を明記",
  customer: { company: "Outset Medical", outcome: "欠陥を70%減らし、紙中心のMESと比べ約100万ドルの節約を見込むと会社公式が紹介。" },
  facts: [["創業","2014年","MIT Media Labからスピンアウト。"],["利用者","60,000人超","45カ国の現場従業者。"],["アプリ","30万件","Tulip上で構築。"],["年間利用","2,800万時間","2026年の会社公式値。"],["Series D","1.2億ドル","2026年1月、評価額13億ドル。"],["日本求人","4件","営業、導入、支援、基盤。"]],
  products: [["Frontline Operations Platform","現場アプリ、データ、機器接続、分析を統合する。","https://tulip.co/platform/"],["Composable MES","工程、品質、在庫、追跡を必要な順で組み立てる。","https://tulip.co/solutions/composable-mes/"],["Native AI and ML","現場のデータと作業導線にAIを組み込む。","https://tulip.co/platform/native-ai-and-ml/"]],
  competitors: "SAP、Siemens、Rockwell Automation、Plex、個別開発、紙・表計算の現場運用",
  leader: ["Natan Linder","Co-Founder and Chief Executive Officer","https://tulip.co/about-us/"], local: ["未確認","日本事業責任者","https://tulip.co/careers/"],
  work: ["フルリモート","Japan - Remote","2026年は在宅","2027年のオフィス開設予定を明記","2027年以降の出社条件、国内雇用主体、職種ごとの出張・待機を選考で確認"],
}, checkedAt);
tulip.sources.push(
  { id: "tulip-about", label: "Tulip about and company facts", url: "https://tulip.co/about-us/", kind: "企業公式", scope: "創業・製品・規模・顧客事例", checkedAt },
  { id: "tulip-series-d", label: "Tulip Series D", url: "https://tulip.co/press/tulip-secures-120m-series-d/", kind: "企業公式", scope: "資金調達・評価額・三菱電機との提携", checkedAt },
  { id: "tulip-japan-jobs", label: "Tulip Japan careers", url: "https://tulip.co/careers/", kind: "企業公式", scope: "日本求人4件・勤務地・役割", checkedAt },
  { id: "gbiz-headcount-tulip", label: "gBizINFO Tulip Interfaces法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
tulip.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本求人とTokyo拠点の会社表示は確認したが、国内雇用主体と事業所被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-tulip" };

const whatnot = buildDailyCompanyIntelligence({
  slug: "whatnot", name: "Whatnot", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/whatnot", officialUrl: "https://www.whatnot.com/",
  customersUrl: "https://help.whatnot.com/hc/ja-jp/articles/360061195812-出品者の所在地と通貨要件", financeUrl: "https://www.whatnot.com/",
  problem: "コレクター商材は価値と真贋が伝わりにくく、販売者は固定価格の商品ページだけでファンと信頼を作りにくい。購入後の配送・紛争・不正対応も国別に変わる。",
  origin: "2019年に米国で創業。ポケモンカードなどのコレクター商材を、定期出品だけでなくライブ配信とオークションで発見・売買する市場へ広げた。",
  externalNeed: "コレクター市場が国境を越える一方、企業には、本人確認、出品品質、不正・紛争、配送、税、国内規制を整えながら、買い手と売り手を同時に増やす要求がある。",
  solution: "ライブ配信、オークション、出品者支援、購入者コミュニティ、配送、トラスト・リスク運用を一つの市場に統合する。",
  selection: "eBay、Mercari、Yahoo!オークション、TikTok Shop、対面イベントと比べ、ライブの発見体験、出品者とファンの関係、取引の信頼、国際配送、カテゴリごとの流動性で比較する。",
  growth: "日本ではWhatnot Japan合同会社と渋谷拠点を開設し、2026年時点で日本の出品を限定パイロットとして提供。技術、カテゴリ、マーケティング、運営、支援、信頼リスクの公式求人9件を確認した。",
  role: "日本の初期チームが、製品の国内化、出品者供給、カテゴリ運営、購入後体験、不正対策、顧客支援を同時に立ち上げる。",
  organization: "Whatnot Japan合同会社、東京都渋谷区宇田川町3-5の拠点、運営責任者を会社公式の特定商取引法表示で確認。国内の正確な在籍人数は未確認。",
  career: "海外のライブ市場を日本の出品者、購入者、物流、信頼、コミュニティへ適合させ、両面市場を0から作る経験。",
  globalHeadcount: "501〜1,000人規模（LinkedIn会社ページの公開レンジ。正確な現員は会社公式で非公開）", japanPresence: "Whatnot Japan合同会社、渋谷拠点、日本限定パイロット、東京の公式求人9件", japanSince: "2026年4月時点で国内事業者表示を確認",
  customer: { company: "日本のコレクター商材出品者", outcome: "日本の出品者は限定パイロットで米国、オーストラリア、英国、フランス、ドイツへ発送できると会社公式が案内。国内配送は将来対応予定。" },
  facts: [["創業","2019年","米国で創業。"],["事業","ライブ市場","コレクター商材をライブで売買。"],["日本法人","Whatnot Japan合同会社","会社公式の法定表示。"],["国内拠点","東京・渋谷","Spark SHIBUYA 7F。"],["日本展開","限定パイロット","日本出品者の国際発送を開始。"],["日本求人","9件","技術、運営、カテゴリ、支援。"]],
  products: [["Whatnot Live Shopping","出品者がライブ配信で商品を紹介し、オークション・販売する。","https://www.whatnot.com/"],["出品者基盤","出品、配信、注文、配送、顧客関係を管理する。","https://help.whatnot.com/hc/ja-jp"],["Trust & Risk","本人確認、出品品質、不正・紛争を運用で管理する。","https://help.whatnot.com/hc/ja-jp"]],
  competitors: "eBay、Mercari、Yahoo!オークション、TikTok Shop、コレクター向け対面イベント",
  leader: ["Grant LaFontaine","Co-Founder and Chief Executive Officer","https://www.whatnot.com/"], local: ["内田 悠一","Head of Operations","https://help.whatnot.com/hc/ja-jp/articles/46159385634061-特定商取引法に基づく表記"],
  work: ["ハイブリッド","Tokyo hub","職種別の固定出社日数は未確認","Tokyo hubの通勤圏内を求める求人が多い","3カ月契約を含む。職種ごとの出社、シフト、土日、出張、組織規模を選考で確認"],
}, checkedAt);
whatnot.sources.push(
  { id: "whatnot-japan-legal", label: "Whatnot Japan特定商取引法表示", url: "https://help.whatnot.com/hc/ja-jp/articles/46159385634061-特定商取引法に基づく表記", kind: "企業公式", scope: "日本法人・所在地・運営責任者", checkedAt },
  { id: "whatnot-japan-sellers", label: "Whatnot出品者の所在地と通貨要件", url: "https://help.whatnot.com/hc/ja-jp/articles/360061195812-出品者の所在地と通貨要件", kind: "企業公式", scope: "日本限定パイロット", checkedAt },
  { id: "whatnot-japan-shipping", label: "Whatnot日本出品者向け配送", url: "https://help.whatnot.com/hc/ja-jp/articles/44400732401293-配送について-日本の出品者向け", kind: "企業公式", scope: "日本からの国際配送・国内配送予定", checkedAt },
  { id: "whatnot-japan-jobs", label: "Whatnot Japan careers", url: "https://jobs.ashbyhq.com/whatnot", kind: "企業公式", scope: "日本求人9件・役割・勤務条件", checkedAt },
  { id: "gbiz-headcount-whatnot", label: "gBizINFO Whatnot Japan合同会社", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
whatnot.companyStats.japanOffice = { value: "東京都渋谷区宇田川町3-5", detail: "Spark SHIBUYA 7F。会社公式の特定商取引法表示。", sourceId: "whatnot-japan-legal" };
whatnot.companyStats.japanHeadcount = { value: "掲載なし", detail: "国内法人と拠点は確認したが、gBizINFOで事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-whatnot" };

const solveIntelligence = buildDailyCompanyIntelligence({
  slug: "solve-intelligence", name: "Solve Intelligence", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/solveintelligence/693f3600-2df6-4e9d-87b3-7a84b6919dab", officialUrl: "https://www.solveintelligence.com/about",
  customersUrl: "https://www.solveintelligence.com/", financeUrl: "https://www.solveintelligence.com/blog/post/solve-intelligence-raises-40m-series-b-to-build-ai-for-patents-and-launches-charts",
  problem: "特許の発明開示、出願書類、中間処理、先行技術調査、クレームチャートが人手に依存すると、弁理士の判断時間が定型的な読解・整形・引用確認に消える。知財部門と特許事務所は、限られた専門人材で品質を落とさず処理量と速度を上げにくい課題を抱える。",
  origin: "2023年6月に、特許専門家が重い下準備より判断・戦略・代理に集中できるよう、特許実務に特化したAIを作るため創業した。",
  externalNeed: "生成AIで発明と技術文書の量が増える一方、特許は単語の違いが権利範囲を左右する。知財部門と事務所は、機密性、根拠、各国実務、専門家の最終判断を保った自動化を必要とする。",
  solution: "特許出願、中間処理、図面、調査、クレームチャート、FTO、訴訟・ポートフォリオ分析を、引用根拠と組織固有のスタイルを保つAI基盤で支援する。",
  selection: "Harvey、PatSnap、LexisNexis PatentSight、汎用AI、事務所の手作業と比べ、特許実務の専門化、根拠と引用、組織固有の実務知識、機密性、出願から訴訟までの範囲で比較する。",
  growth: "700超の知財組織が6大陸で利用し、平均50%超の工数削減を報告すると会社公式が公表。2025年12月に4,000万ドルのSeries Bを調達し、累計5,500万ドルに達した。",
  role: "New YorkまたはLondonのJapanese Speaking Legal and Product Engineerが、日本の弁理士・知財部門に実演・パイロットを行い、日本特許庁実務のベンチマークを作る。",
  organization: "日本の顧客候補と現実の商談導線は求人から確認できるが、日本法人、国内拠点、国内雇用主体、日本在住の専任人員は確認できない。",
  career: "日本特許庁実務と専門AIの品質を結び、顧客の導入、ベンチマーク、製品開発を横断する国際的な知財テクノロジー経験。",
  globalHeadcount: "51〜200人規模（LinkedIn会社ページの公開レンジ。正確な現員は会社公式で非公開）", japanPresence: "日本法人・国内拠点・日本在住求人は未確認。日本実務を担当する海外拠点求人1件", japanSince: "未進出",
  customer: { company: "Intelの知財部門", outcome: "特許専門家と共に組織固有のテンプレートを作る顧客志向をIntelのChief Patent Counselが評価していると会社公式が紹介。日本顧客の社名入り事例は未確認。" },
  facts: [["創業","2023年6月","特許実務特化AIを構築。"],["顧客","700超","法律事務所と企業知財部門。"],["提供地域","6大陸","会社公式。"],["平均工数削減","50%超","顧客報告の会社公式集計。"],["累計調達","5,500万ドル","其中Series Bは4,000万ドル。"],["日本求人","0件","海外拠点の日本実務担当求人1件を確認。"]],
  products: [["Solve Platform","特許の発明開示から出願、中間処理、分析を統合する。","https://www.solveintelligence.com/"],["Solve Drafting & Prosecution","出願書類、クレーム、意見書・補正の下準備を支援する。","https://www.solveintelligence.com/product/drafting"],["Solve Charts","無効・侵害・FTO・標準必須特許のクレーム分析を行う。","https://www.solveintelligence.com/product/charts"]],
  competitors: "Harvey、PatSnap、LexisNexis PatentSight、Clarivate、汎用生成AI、特許事務所の手作業",
  leader: ["Chris Parsonson","Co-Founder and Chief Executive Officer","https://www.solveintelligence.com/about"], local: ["未採用","日本市場・製品担当","https://jobs.ashbyhq.com/solveintelligence/693f3600-2df6-4e9d-87b3-7a84b6919dab"],
  work: ["未確認","日本国内求人なし","該当なし","日本での勤務条件は未確認","Japanese Speaking職はNew YorkまたはLondon勤務と日本出張。国内応募可能と誤認しない"],
  preEntry: {
    verdict: "進出可能性は中〜高。日本の知財顧客と日本特許庁実務への具体的な投資はあるが、国内雇用、法人、拠点、日本語導入体制は未確認。",
    signal: "日本の特許事務所・企業知財部門への実演・パイロット、JPO実務のベンチマーク、定期的な日本出張を担う専門職を募集。",
    hurdle: "日本法人、国内拠点、国内雇用主体、日本特許データの処理地域、日本語の導入・支援体制を確認できない。",
    conditions: ["日本の弁理士・知財部門で有償利用と継続利用の再現性を確認する。","日本特許庁の手続、日本語出力、引用根拠の品質を継続評価する。","国内の契約、データ処理、導入支援、責任者を整える。","日本在住の営業・製品・導入人員を配置する。"],
    watches: ["日本在住求人","日本法人・東京拠点","日本の社名入り顧客事例","日本特許庁実務の製品発表","日本語の契約・支援情報","日本向けデータ処理条件"],
  },
}, checkedAt);
solveIntelligence.sources.push(
  { id: "solve-japanese-job", label: "Legal and Product Engineer (Japanese Speaking)", url: "https://jobs.ashbyhq.com/solveintelligence/693f3600-2df6-4e9d-87b3-7a84b6919dab", kind: "企業公式", scope: "日本市場・特許実務・勤務地", checkedAt },
  { id: "solve-about", label: "Solve Intelligence about", url: "https://www.solveintelligence.com/about", kind: "企業公式", scope: "創業課題・製品・組織", checkedAt },
  { id: "solve-series-b", label: "Solve Intelligence Series B", url: "https://www.solveintelligence.com/blog/post/solve-intelligence-raises-40m-series-b-to-build-ai-for-patents-and-launches-charts", kind: "企業公式", scope: "資金調達・利用組織・製品拡張", checkedAt },
  { id: "gbiz-headcount-solve", label: "gBizINFO Solve Intelligence法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
solveIntelligence.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本の弁理士・知財部門を担当する海外求人は確認したが、日本法人・事業所と被保険者数を特定できない。", sourceId: "gbiz-headcount-solve" };

for (const intelligence of [tulip, whatnot, solveIntelligence]) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.map((item) => item.year === "2026.09" ? { ...item, year: "2026.10" } : item);
}

export function applyDaily20261010Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.zilliz;
  if (!intelligence) return;
  const sourceId = "zilliz-founding-field-engineer-closure-20261010";
  const url = "https://jobs.lever.co/zilliz/9f2e2541-9945-47a9-bca7-6d123128ca50";
  if (!intelligence.sources.some((source) => source.id === sourceId)) {
    intelligence.sources.push({ id: sourceId, label: "Founding Field Engineer, Japan求人終了", url, kind: "企業公式", scope: "旧公式URLの404と現行採用一覧を確認", checkedAt });
  }
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => item.label !== "Founding Field Engineer, Japan求人終了"),
    { year: "2026.10.10", label: "Founding Field Engineer, Japan求人終了", detail: "旧公式求人URLが404を返し、現行の公式採用一覧にも当該職を確認できなかったため掲載から除外。これだけで日本事業縮小を意味しない。", sourceId },
  ];
}

export const daily20261010IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  "tulip-interfaces": tulip,
  whatnot,
  "solve-intelligence": solveIntelligence,
};
