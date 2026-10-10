import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-11";

const exotec = buildDailyCompanyIntelligence({
  slug: "exotec", name: "Exotec", jobConfirmed: true,
  jobUrl: "https://careers.exotec.com/_/j/509BE5C3E9/apply", officialUrl: "https://www.exotec.com/ja/company/",
  customersUrl: "https://www.exotec.com/ja/news/nippon-express-ihi-exotec-partnership/", financeUrl: "https://www.exotec.com/ja/insight/10years-anniversary/",
  problem: "倉庫で人手不足、保管スペースの制約、需要変動、出荷速度の要求が重なると、人が棚まで歩く固定的な設備では処理能力と柔軟性を同時に高めにくい。大規模設備の停止や改修も事業継続リスクになる。",
  origin: "2015年にフランスで設立。倉庫内の棚を固定して人を歩かせるのではなく、小型ロボットが棚の高さ方向も走り、商品を作業者へ運ぶSkypodから始まった。",
  externalNeed: "ECの即日・小口出荷、人手不足、物流の2024年問題、限られた倉庫床、繁閑差により、企業は処理能力を上げつつ段階的に拡張でき、停止時にも運用を続けられる自動化を求める。",
  solution: "三次元走行ロボット、ラック、作業ステーション、搬送設備、倉庫実行ソフトウェア、24時間監視と保守を一体提供する。",
  selection: "自動倉庫、AGV・AMR、コンベヤー、手作業と比べ、保管密度、入出庫能力、拡張性、停止耐性、導入期間、10年間の運用費、インテグレーター体制で比較する。",
  growth: "会社公式は世界200超の物流センター、900人超の従業員を掲載。日本では2019年のオフィス開設後、東京デモセンターと日本通運などの導入事例を確認できる。",
  role: "VP Sales Japanが、日本の物流・小売・ECで大型案件、経営層、インテグレーター、社内の設計・導入・顧客支援を束ねる。",
  organization: "Exotec Nihon株式会社、品川の国内法人所在地、新木場のデモセンターを会社公式で確認。国内の正確な在籍人数と営業組織規模は未確認。",
  career: "倉庫の人員、設備、ソフトウェア、処理能力、投資回収を一つの企業案件へまとめ、日本の物流自動化市場を拡張する経験。",
  globalHeadcount: "900人超（会社公式Careers）", japanPresence: "Exotec Nihon株式会社、東京オフィス、新木場デモセンター、国内導入事例、東京求人1件", japanSince: "2019年に日本オフィスを開設",
  customer: { company: "日本通運 NX西京極倉庫", outcome: "Skypodで保管効率と入出庫能力を高め、作業コスト削減と安定した品質を狙うと会社公式が発表。" },
  facts: [["創業","2015年","フランスで設立。"],["世界導入","200超の物流センター","会社公式の現行日本語サイト。"],["従業員","900人超","会社公式Careers。"],["日本進出","2019年","日本オフィス開設。"],["保守","24時間365日","10年間の稼働率98%を契約保証。"],["日本求人","1件","VP Sales Japan。"]],
  products: [["Skypod System","ロボット、ラック、ステーションで商品を作業者へ運ぶ。","https://www.exotec.com/ja/"],["Deepsky WES","保管、搬送、出荷の流れを倉庫全体で制御する。","https://www.exotec.com/ja/"],["Lifecycle Services","監視、保守、部品、更新を長期運用として提供する。","https://www.exotec.com/ja/service/"]],
  competitors: "AutoStore、Geek+、HIKROBOT、Mujin、従来型AS/RS、AGV・AMR、コンベヤー、手作業",
  leader: ["Romain Moulin","Co-Founder and Chief Executive Officer","https://www.exotec.com/ja/company/"], local: ["立脇 竜","日本法人代表・APAC地域責任者","https://www.exotec.com/ja/news/nippon-express-ihi-exotec-partnership/"],
  work: ["ハイブリッド","東京都","固定出社日数は未確認","顧客倉庫・パートナー・イベントへの移動を伴う","担当地域、出張頻度、チーム人数、目標、受注後の責任境界を選考で確認"],
}, checkedAt);
exotec.sources.push(
  { id: "exotec-company", label: "Exotec会社情報", url: "https://www.exotec.com/ja/company/", kind: "企業公式", scope: "製品・拠点・価値", checkedAt },
  { id: "exotec-ten-years", label: "Exotec 10年の歩み", url: "https://www.exotec.com/ja/insight/10years-anniversary/", kind: "企業公式", scope: "創業・日本進出・規模", checkedAt },
  { id: "exotec-nippon-express", label: "日本通運導入事例", url: "https://www.exotec.com/ja/news/nippon-express-ihi-exotec-partnership/", kind: "企業公式", scope: "国内顧客・日本法人", checkedAt },
  { id: "exotec-japan-job", label: "VP Sales Japan", url: "https://careers.exotec.com/_/j/509BE5C3E9/apply", kind: "企業公式", scope: "現行求人・勤務地・勤務形態", checkedAt },
  { id: "gbiz-headcount-exotec", label: "gBizINFO Exotec Nihon株式会社", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
exotec.companyStats.japanOffice = { value: "東京都港区港南2-15-1", detail: "Exotec Nihon株式会社。東京デモセンターは東京都江東区新木場。", sourceId: "exotec-nippon-express" };
exotec.companyStats.japanHeadcount = { value: "掲載なし", detail: "国内法人と拠点は確認したが、gBizINFOで事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-exotec" };

const navex = buildDailyCompanyIntelligence({
  slug: "navex", name: "NAVEX", jobConfirmed: true,
  jobUrl: "https://www.navex.com/ja-jp/company/careers/job-openings/", officialUrl: "https://www.navex.com/ja-jp/company/",
  customersUrl: "https://www.navex.com/ja-jp/resources/customer-stories/hitachi/", financeUrl: "https://www.navex.com/ja-jp/company/careers/",
  problem: "内部通報、調査、行動規範、研修、第三者リスク、規制変更が部門や国ごとに分かれると、経営は重大な兆候を早く把握できず、証跡、対応品質、匿名性を同じ基準で保ちにくい。",
  origin: "倫理・コンプライアンス通報とリスク管理の専門企業群を統合して発展し、従業員の声から第三者・規制・企業リスクまでを一つのGRC基盤へ広げた。",
  externalNeed: "公益通報者保護、サプライチェーンの人権・制裁・贈収賄、AI利用、個人情報、各国規制の要求が増え、企業は相談窓口だけでなく調査、是正、教育、第三者評価を監査可能な形で継続運用する必要がある。",
  solution: "NAVEX Oneで内部通報・事案管理、ポリシー、研修、第三者リスク、規制変更、分析を統合する。",
  selection: "独自開発、法律事務所・外部窓口、OneTrust、Diligent、SAI360等と比べ、匿名通報の信頼、各国対応、業務範囲、導入・支援、データ保護、分析で比較する。",
  growth: "会社公式は世界13,000社超の顧客と1,300人超の従業員を掲載。日本語サイト、日立の事例、東京の営業・導入求人を確認できる。",
  role: "Account Directorが日本の大企業を開拓し、Customer Interface Specialistが設定・導入を支えるため、販売と立ち上げを同時に現地化する。",
  organization: "会社公式は東京オフィスを掲載し、日本語サイトと東京求人も確認できる。日本法人名、オフィス住所、国内在籍人数は会社公式とgBizINFOで特定できない。",
  career: "規制・倫理・人事・法務・監査・情報セキュリティを横断し、企業の声とリスクを経営が使える統制へ変える経験。",
  globalHeadcount: "1,300人超（会社公式Careers）", japanPresence: "日本語公式サイト、東京オフィス、国内顧客事例、東京の営業・導入求人2件", japanSince: "日本市場での事業開始時期は未確認",
  customer: { company: "日立製作所", outcome: "世界約28万人・約600社の通報窓口を統合し、年間約2,000件を扱うグローバルコンプライアンスホットラインを構築。" },
  facts: [["顧客","13,000社超","会社公式。"],["従業員","1,300人超","会社公式Careers。"],["利用言語","22言語超","会社公式Careers。"],["国内事例","日立製作所","2020年に本格導入。"],["国内通報規模","年間約2,000件","日立事例の会社公式値。"],["日本求人","2件","営業と導入。"]],
  products: [["NAVEX One","GRCのデータと業務を統合する基盤。","https://www.navex.com/ja-jp/platform/navex-one/"],["Whistleblowing & Incident Management","匿名通報、調査、是正、分析を管理する。","https://www.navex.com/ja-jp/products/whistleblowing-and-incident-management/"],["Third-Party Risk Management","取引先の調査、監視、是正を管理する。","https://www.navex.com/ja-jp/products/third-party-risk-management/"]],
  competitors: "OneTrust、Diligent、SAI360、EQSTRIAN、独自開発、法律事務所・外部通報窓口",
  leader: ["Sean Thompson","President and Chief Executive Officer","https://www.navex.com/ja-jp/company/leadership-team/"], local: ["未確認","日本事業責任者","https://www.navex.com/ja-jp/company/careers/job-openings/"],
  work: ["未確認","東京都（職種別）","営業は当初出社、導入職の固定日数は未確認","営業はチーム構築後のハイブリッド移行予定","国内雇用主体、オフィス、担当社数、目標、導入案件数、機密情報の権限を選考で確認"],
}, checkedAt);
navex.sources.push(
  { id: "navex-jp", label: "NAVEX日本語公式サイト", url: "https://www.navex.com/ja-jp/", kind: "企業公式", scope: "製品・日本向け提供・顧客規模", checkedAt },
  { id: "navex-careers", label: "NAVEX Careers", url: "https://www.navex.com/ja-jp/company/careers/", kind: "企業公式", scope: "従業員・拠点・働き方", checkedAt },
  { id: "navex-japan-jobs", label: "NAVEX Japan job openings", url: "https://www.navex.com/ja-jp/company/careers/job-openings/", kind: "企業公式", scope: "東京求人2件・職種", checkedAt },
  { id: "navex-hitachi", label: "日立製作所顧客事例", url: "https://www.navex.com/ja-jp/resources/customer-stories/hitachi/", kind: "企業公式", scope: "国内顧客・導入目的・成果", checkedAt },
  { id: "gbiz-headcount-navex", label: "gBizINFO NAVEX法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
navex.companyStats.japanOffice = { value: "東京（住所未確認）", detail: "会社公式のAI参照情報で東京オフィスを確認。日本法人名と住所は未確認。", sourceId: "navex-jp" };
navex.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本語公式サイト、東京オフィス、東京求人は確認したが、国内法人・事業所と被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-navex" };

const matterIntelligence = buildDailyCompanyIntelligence({
  slug: "matter-intelligence", name: "Matter Intelligence", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/matter-intelligence/d1151da3-8eda-4b0f-9102-51211f4f5409", officialUrl: "https://www.matter.com/",
  customersUrl: "https://www.matter.com/application", financeUrl: "https://www.matter.com/team",
  problem: "通常のカメラや現在の衛星は形と色を主に捉えるため、素材の化学組成、温度変化、劣化、ガス、地下・植生の兆候を直接判別しにくい。政府と産業は現地採取や遅い検査に頼り、判断が後手に回る課題を抱える。",
  origin: "NASAの火星探査でセンサーと遠隔観測に携わったVishnu Sridharが、宇宙で培った分光技術を地球の環境・産業課題へ使う発想から創業した。",
  externalNeed: "気候災害、鉱物・エネルギー安全保障、インフラ老朽化、防衛・宇宙の主権要件により、政府と企業は物質を遠隔で特定し、データ所在と輸出管理を守りながら早く判断する必要がある。",
  solution: "紫外から熱赤外まで2,000帯域を捉える超多波長センサー、エッジ計算、物理情報を学ぶLarge World Modelを統合し、遠隔の意思決定を早める。",
  selection: "通常のRGB、マルチ・ハイパースペクトル衛星、ドローン、現地検査、既存の地理空間分析と比べ、帯域数、空間・時間分解能、化学特定、実時間性、データ主権、実証可能性で比較する。",
  growth: "サンフランシスコとエルセグンドに拠点を置き、NASA・防衛・センサー経験者を集め、Lowercarbon Capital、Bezos Expeditions、Toyota Ventures等の支援を会社公式で掲載する。商用規模と売上は未確認。",
  role: "米国勤務のHead of Sovereign Partnershipsが日本・韓国を初期重点市場にし、政府・防衛・宇宙の顧客、提携、調達、実証、進出形態を設計する。",
  organization: "日本法人、国内拠点、日本在住人員、日本語の契約・支援は未確認。現行求人はサンフランシスコ出社で、日本への応募可能求人ではない。",
  career: "超多波長センサー、地理空間AI、政府調達、輸出管理、主権データを横断し、日本市場の成立条件を初期から設計する経験。",
  globalHeadcount: "51〜200人規模（LinkedIn会社ページの公開レンジ。正確な現員は会社公式で非公開）", japanPresence: "日本法人・国内拠点・日本在住求人は未確認。日本を初期重点市場とする米国勤務求人1件", japanSince: "未進出",
  customer: { company: "公開顧客名なし", outcome: "保険、鉱業、農業、排出監視、防衛・情報の用途とEarly Accessは公開するが、日本の社名入り導入事例は未確認。" },
  facts: [["技術","2,000帯域","深紫外から熱赤外。"],["拠点","2都市","San FranciscoとEl Segundo。"],["用途","保険・鉱業・農業・防衛","会社公式。"],["支援者","Lowercarbon Capital等","会社公式掲載。"],["日本法人","未確認","国内拠点も未確認。"],["日本求人","0件","米国勤務の日本市場担当1件。"]],
  products: [["Ultraspectral Sensors","物質の化学組成、温度、形状を遠隔で捉える。","https://www.matter.com/technology"],["Large World Model","分光データと物理情報から物質と変化を推論する。","https://www.matter.com/"],["Aerospace and Robotics Applications","衛星・航空・ロボットへセンシングを展開する。","https://www.matter.com/application"]],
  competitors: "Planet、BlackSky、Pixxel、Orbital Sidekick、既存のハイパースペクトル・地理空間分析、現地検査",
  leader: ["Vishnu Sridhar","Chief Executive Officer","https://www.matter.com/leadership/vishnu-sridhar"], local: ["未採用","日本市場責任者","https://jobs.ashbyhq.com/matter-intelligence/d1151da3-8eda-4b0f-9102-51211f4f5409"],
  work: ["未確認","日本国内求人なし","該当なし","日本での勤務条件は未確認","現行職はサンフランシスコ出社・地域出張。国内応募可能と誤認しない"],
  preEntry: {
    verdict: "進出可能性は中。日本を初期重点市場と明記し、政府・宇宙・防衛の市場参入を調べる段階だが、国内法人、人員、顧客、契約・支援体制は未確認。",
    signal: "日本・韓国の政府市場、提携、調達、実証、将来の地域採用と拠点設計を担う米国勤務の責任者を募集。",
    hurdle: "輸出管理、機密情報、データ主権、政府調達、国内パートナー、実証設備、長い予算サイクルに対応する現地体制が必要。",
    conditions: ["日本の政府・宇宙・防衛・インフラ顧客で有償実証の用途を絞る。","輸出管理、技術移転、データ所在、機密情報の条件を整理する。","国内の主契約者・インテグレーター・研究機関との提携を構築する。","日本在住の事業開発・技術・契約支援人員と国内拠点を置く。"],
    watches: ["日本在住求人","日本法人・国内拠点","日本の社名入り実証・契約","国内パートナー発表","日本語の製品・契約・支援情報","政府調達・宇宙案件"],
  },
}, checkedAt);
matterIntelligence.sources.push(
  { id: "matter-home", label: "Matter Intelligence公式", url: "https://www.matter.com/", kind: "企業公式", scope: "課題・製品・用途", checkedAt },
  { id: "matter-technology", label: "Matter Technology", url: "https://www.matter.com/technology", kind: "企業公式", scope: "帯域・センサー・モデル", checkedAt },
  { id: "matter-team", label: "Matter Team", url: "https://www.matter.com/team", kind: "企業公式", scope: "拠点・経営陣・支援者", checkedAt },
  { id: "matter-japan-signal", label: "Head of Sovereign Partnerships", url: "https://jobs.ashbyhq.com/matter-intelligence/d1151da3-8eda-4b0f-9102-51211f4f5409", kind: "企業公式", scope: "日本市場・勤務地・進出条件", checkedAt },
  { id: "gbiz-headcount-matter", label: "gBizINFO Matter Intelligence法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所・被保険者数の確認", checkedAt },
);
matterIntelligence.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本を初期重点市場とする海外求人は確認したが、日本法人・事業所と被保険者数を特定できない。", sourceId: "gbiz-headcount-matter" };

export function applyDaily20261011Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.canva;
  if (!intelligence) return;
  const sourceId = "canva-channel-account-manager-closure-20261011";
  const url = "https://www.lifeatcanva.com/en/jobs/6000000001187132/japan-channel-account-manager/";
  if (!intelligence.sources.some((source) => source.id === sourceId)) {
    intelligence.sources.push({ id: sourceId, label: "Japan Channel Account Manager求人終了", url, kind: "企業公式", scope: "旧公式URLの404と現行採用一覧を確認", checkedAt });
  }
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => item.label !== "Japan Channel Account Manager求人終了"),
    { year: "2026.10.11", label: "Japan Channel Account Manager求人終了", detail: "旧公式求人URLが404を返したため掲載から除外。これだけで日本の販売パートナー戦略や事業縮小を意味しない。", sourceId },
  ];
}

export const daily20261011IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  exotec,
  navex,
  "matter-intelligence": matterIntelligence,
};
