import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-20";

const wrike = buildDailyCompanyIntelligence({
  slug: "wrike", name: "Wrike", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/wrike/jobs/4725613005", officialUrl: "https://www.wrike.com/ja/",
  customersUrl: "https://www.wrike.com/ja/customer-stories/", financeUrl: "https://www.wrike.com/company/",
  problem: "企業の仕事がメール、表計算、個別のタスク管理へ分かれると、進捗、優先度、責任、リソース、成果を部門横断で把握しにくい。",
  origin: "Andrew Filevが複数のプロジェクトをメールと表計算で管理する限界を感じ、共同作業を即時に同期できる道具として2006年に創業した。",
  externalNeed: "AIエージェントが業務に入るほど、企業は人とAIの仕事を共通の優先度、権限、期限、証跡で管理し、経営目標と実行をつなぐ必要がある。",
  solution: "プロジェクト、申請、進捗、承認、稼働、リソース、報告、自動化、AIを一つのワークマネジメント基盤に集める。",
  selection: "Asana、monday.com、Smartsheet、Jira、Microsoft 365と比べ、複雑な部門横断業務、リソース、承認、報告、外部連携、AIの統制を同じ運用で比較する。",
  growth: "2006年創業。会社公式は顧客2万社以上、利用者200万人以上、従業員1,000人以上、140カ国支援を公表。2019年に東京拠点を開設し、現在Partner Account Managerを採用している。",
  role: "東京のPartner Account Managerが、日本の販売・導入パートナーと共同販売計画、案件創出、育成、共同提案、売上予測を担う。",
  organization: "Wrike Japanと東京・丸の内オフィスを2019年に会社公式発表。国内の正確な在籍人数は未確認。",
  career: "日本のパートナー網を使い、業務変革の案件を創出し、直販・導入支援と共に受注と利用定着を作るチャネルGTM経験。",
  globalHeadcount: "1,000人以上（会社公式）", japanPresence: "Wrike Japan、東京・丸の内オフィス、日本向け求人1件。国内総人数は未確認", japanSince: "2019年",
  customer: { company: "JERA", outcome: "年100件を超えるIT・DXプロジェクトの運用を統合し、経営判断向けデータの即時把握と進捗報告の効率化を目的に活用。" },
  facts: [["創業","2006年","メールと表計算での業務管理の限界から創業。"],["顧客","2万社以上","会社公式。"],["利用者","200万人以上","会社公式。"],["従業員","1,000人以上","会社公式。"],["東京拠点","2019年開設","会社公式。"],["日本求人","1件","Partner Account Manager。"]],
  products: [["Wrike","AI、ワークフロー、プロジェクト、リソース、報告を統合。","https://www.wrike.com/ja/"],["Wrike Work Intelligence","AIで作業作成、優先度、要約、自動化を支援。","https://www.wrike.com/features/work-intelligence/"],["Wrike Integrate","SaaSや業務システムとワークフローを接続。","https://www.wrike.com/apps/integrate/"]],
  competitors: "Asana、monday.com、Smartsheet、Jira、Microsoft 365",
  leader: ["Thomas Scott","Chief Executive Officer","https://www.wrike.com/company/"], local: ["未確認","日本事業責任者","https://www.wrike.com/company/"],
  work: ["ハイブリッド", "Tokyo hub", "固定出社日数は未確認", "完全リモートの明記なし", "パートナー訪問、出社、担当範囲、売上認定を選考で確認"],
}, checkedAt);
wrike.sources.push(
  { id: "wrike-about", label: "Wrike会社情報", url: "https://www.wrike.com/company/", kind: "企業公式", scope: "創業・規模・東京拠点・経営陣", checkedAt },
  { id: "wrike-tokyo", label: "Wrike Japan設立発表", url: "https://www.wrike.com/newsroom/tokyo-office-opening/", kind: "企業公式", scope: "日本法人・東京拠点・進出時期", checkedAt },
  { id: "wrike-jera", label: "JERA導入事例", url: "https://www.wrike.com/ja/customer-stories/jera/", kind: "企業公式", scope: "国内導入目的・利用業務", checkedAt },
  { id: "wrike-job", label: "Partner Account Manager", url: "https://job-boards.greenhouse.io/wrike/jobs/4725613005", kind: "企業公式", scope: "現行求人・東京・責任", checkedAt },
);

const blackline = buildDailyCompanyIntelligence({
  slug: "blackline", name: "BlackLine", jobConfirmed: true,
  jobUrl: "https://www.blackline.jp/careers/", officialUrl: "https://www.blackline.jp/",
  customersUrl: "https://www.blackline.jp/customers/", financeUrl: "https://investors.blackline.com/",
  problem: "決算業務が表計算、メール、ERP、個人の手作業へ分かれると、勘定照合、進捗、証跡、異常の発見が遅れ、経理人材が分析と事業支援に時間を使えない。",
  origin: "Therese Tuckerが財務・会計ソフトウェアの経験を基に2001年に創業し、自ら初期製品を設計。2007年にクラウドへ移行した。",
  externalNeed: "企業グループの拠点とシステムが増え、決算期間と監査要求が厳しくなるほど、CFOは会計数値だけでなく、作業過程、承認、証跡、例外処理を証明できる業務基盤を必要とする。",
  solution: "決算タスク、勘定照合、取引マッチング、仕訳、連結、内部統制を標準化・自動化し、ERPの上で決算プロセスを可視化する。",
  selection: "SAP・Oracle等のERP、Workiva、FloQast、Trintech、内製の表計算と比べ、複数ERP横断の決算・照合・統制、自動化率、証跡、日本の導入支援で比較する。",
  growth: "会社公式は130カ国以上、4,400社以上、38.5万人以上の利用を公表。日本法人は2018年設立、2019年営業開始で、現在Account Executiveを採用している。",
  role: "東京のAccount Executiveが、大企業のCFO・経理財務部門に決算、勘定照合、統制、業務自動化の変革を提案する。",
  organization: "ブラックライン株式会社。東京・赤坂のミッドタウンタワーに拠点を持ち、代表取締役社長は宮﨑盛光氏。",
  career: "CFO・経理財務・IT・監査・業務部門を動かし、決算短縮、統制、自動化、人材シフトを経営成果として売る企業営業経験。",
  globalHeadcount: "正確な現員は今回の公式調査で未確認", japanPresence: "ブラックライン株式会社、東京・赤坂、日本向け求人1件", japanSince: "2019年1月営業開始",
  customer: { company: "セゾンテクノロジー", outcome: "3カ月で約53%の勘定照合を自動化し、伝票承認の押印を0にしたと公式事例で公表。" },
  facts: [["創業","2001年","Therese Tuckerが創業。"],["クラウド移行","2007年","創業者の公式経歴。"],["顧客","4,400社以上","日本公式サイト。"],["利用国","130カ国以上","日本公式サイト。"],["FY2025売上","$700.4M(約1,099.6億円)","2025年12月期のTotal GAAP revenues。日本単体の内訳は非開示。"],["日本法人","2018年8月設立","日本公式会社概要。"],["日本求人","1件","Account Executive。"]],
  products: [["Financial Close & Consolidation","決算、タスク、勘定照合、差異分析、連結を管理。","https://www.blackline.jp/solutions/financial-close-and-consolidation/"],["Invoice-to-Cash","売掛金、入金消込、与信、回収を自動化。","https://www.blackline.com/solutions/invoice-to-cash/"],["Intercompany Financial Management","グループ間取引の照合、決済、仕訳、統制を管理。","https://www.blackline.com/solutions/intercompany-financial-management/"]],
  competitors: "SAP、Oracle、Workiva、FloQast、Trintech、表計算・内製運用",
  leader: ["Owen Ryan","Co-CEO & Chairman","https://investors.blackline.com/governance/executive-management/"], local: ["宮﨑 盛光","代表取締役社長","https://www.blackline.jp/company/"],
  work: ["未確認", "Tokyo office", "固定出社日数は未確認", "完全リモートの明記なし", "顧客訪問、担当業界、直販・パートナー分担、目標を選考で確認"],
}, checkedAt);
blackline.sources.push(
  { id: "blackline-company", label: "BlackLine Japan会社概要", url: "https://www.blackline.jp/company/", kind: "企業公式", scope: "日本法人・所在地・代表者・営業開始", checkedAt },
  { id: "blackline-founder", label: "Therese Tucker創業者経歴", url: "https://investors.blackline.com/board-member/therese-tucker/", kind: "企業公式", scope: "創業・初期製品・クラウド移行", checkedAt },
  { id: "blackline-customers", label: "BlackLine導入事例", url: "https://www.blackline.jp/customers/", kind: "企業公式", scope: "顧客規模・国内事例", checkedAt },
  { id: "blackline-saison", label: "セゾンテクノロジー導入事例", url: "https://www.blackline.jp/customers/saison-information-systems.html", kind: "企業公式", scope: "国内導入成果・自動化率", checkedAt },
  { id: "blackline-fy2025", label: "BlackLine FY2025決算", url: "https://investors.blackline.com/news-releases/news-release-details/blackline-announces-fourth-quarter-and-full-year-2025-financial", kind: "法定開示", scope: "FY2025売上・顧客数・収益性", checkedAt },
  { id: "blackline-job", label: "BlackLine Japan採用情報", url: "https://www.blackline.jp/careers/", kind: "企業公式", scope: "現行求人・東京・組織", checkedAt },
);

const omni = buildDailyCompanyIntelligence({
  slug: "omni-analytics", name: "Omni", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/omni/474a2d92-9dac-45e0-8523-bd3c129af6c8", officialUrl: "https://omni.co/about",
  customersUrl: "https://omni.co/customer-case-studies", financeUrl: "https://omni.co/blog/press-release-omni-series-c-funding",
  problem: "企業の指標定義がBI、表計算、データモデル、生成AIごとに分かれると、同じ売上や顧客数でも答えが変わり、利用者はデータ部門への依頼と数字の照合に時間を使う。",
  origin: "Looker・GoogleとStitch・Talendでデータ製品を率いたColin Zima、Jamie Davidson、Chris Merrickが、速さと統制の二者択一を解くため2022年に創業した。",
  externalNeed: "生成AIが社内データへ直接質問する入口になるほど、企業は共通の指標定義、権限、出典、変更管理をどの画面やAIからも同じように適用する必要がある。",
  solution: "データ基盤の上に指標、関係、権限、Git管理を持つセマンティックレイヤーを置き、ダッシュボード、表計算型画面、自然言語、AIから同じ文脈で分析する。",
  selection: "Looker、Tableau、Power BI、Sigma、ThoughtSpot、Cube、内製基盤と比べ、定義の再利用、権限、Git、AIへの文脈供給、埋込分析、移行負担で比較する。",
  growth: "2022年創業。2026年4月に1.2億ドルのSeries Cを調達し評価額15億ドル、前年の売上成長4倍を会社公式が公表。SydneyとSingaporeでAPAC営業を採用している。",
  role: "Sydneyの事業開発・中堅営業とSingapore初の企業営業が、APACの案件創出、技術評価、提携、受注、導入、拡大を担う。",
  organization: "APACの顧客とAustralia・Singaporeの採用は確認したが、日本法人、国内拠点、日本在住求人、日本専任担当、日本語の契約・支援は未確認。",
  career: "正式進出後は、企業のデータ定義とAI利用を同じ統制へまとめ、データ部門と事業部門の双方へBI・AI基盤を立ち上げる経験になり得る。",
  globalHeadcount: "201〜500人規模（LinkedIn公開レンジ。厳密な現員ではない）", japanPresence: "日本法人・国内拠点・日本求人・国内顧客事例は未確認。Australia・SingaporeでAPAC営業体制を構築", japanSince: "未進出",
  customer: { company: "Uscreen", outcome: "3人のチームが既存レポートを移し、1カ月で顧客向け分析を全面公開。提供会社公表の事例で、日本企業事例は未確認。" },
  facts: [["創業","2022年","Looker・Google、Stitch・Talend出身の3人が創業。"],["Series C","1.2億ドル","2026年4月会社公式。"],["評価額","15億ドル","2026年4月会社公式。"],["売上成長","前年比4倍","定義・絶対額は非開示。"],["APAC求人","3件以上","Sydneyの事業開発・営業、Singaporeの企業営業。"],["日本求人","0件","公式Ashbyで確認。"]],
  products: [["Omni","ダッシュボード、表計算型分析、自然言語を一つのセマンティックレイヤーへ接続。","https://omni.co/"],["Omni AI","共通指標と権限を使い、自然言語から分析・可視化を作成。","https://omni.co/blog/press-release-omni-series-c-funding"],["Embedded Analytics","顧客向け製品へ分析、探索、AIを埋め込み、同じ定義を再利用。","https://omni.co/customer-case-studies"]],
  competitors: "Looker、Tableau、Power BI、Sigma、ThoughtSpot、Cube、内製BI・セマンティックレイヤー",
  leader: ["Colin Zima","Co-Founder & CEO","https://omni.co/about"], local: ["未確認","日本事業責任者","https://jobs.ashbyhq.com/omni"],
  work: ["未確認", "日本求人なし", "該当なし", "日本での勤務条件は未確認", "Australia・Singapore求人の条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中。SydneyとSingaporeでAPACの案件創出・企業営業を置く一方、日本専任体制と国内の契約・支援・事例は未確認。",
    signal: "SydneyでAPAC事業開発と中堅営業、Singaporeで最初の現地企業営業を募集し、APACの販売体制を複数市場へ広げている。",
    hurdle: "日本法人、国内拠点、日本担当求人、日本語製品・契約・支援、国内顧客事例、国内データ所在を確認できない。",
    conditions: ["APACの既存顧客から日本企業の有償利用・紹介を作る。", "日本語の指標定義、契約、情報管理、導入支援を整える。", "データ基盤ベンダーの国内提携経路と専任体制の採算を証明する。"],
    watches: ["Japan・Tokyo求人", "日本法人・国内拠点", "国内顧客事例", "日本語の製品・契約・支援", "APAC求人のJapan territory表記"],
  },
}, checkedAt);
omni.sources.push(
  { id: "omni-about", label: "Omni会社情報", url: "https://omni.co/about", kind: "企業公式", scope: "創業・創業者・製品思想", checkedAt },
  { id: "omni-series-c", label: "Omni Series C発表", url: "https://omni.co/blog/press-release-omni-series-c-funding", kind: "企業公式", scope: "調達・評価額・成長・顧客", checkedAt },
  { id: "omni-linkedin-scale", label: "LinkedIn Omni企業ページ", url: "https://www.linkedin.com/company/exploreomni/", kind: "外部集計", scope: "会社規模レンジ（201〜500人）", checkedAt },
  { id: "omni-uscreen", label: "Uscreen導入事例", url: "https://omni.co/blog/case-study-uscreen", kind: "企業公式", scope: "移行・埋込分析・導入成果", checkedAt },
  { id: "omni-job", label: "Omni APAC求人", url: "https://jobs.ashbyhq.com/omni", kind: "企業公式", scope: "APAC採用・日本求人不在", checkedAt },
);

export function applyDaily20261020Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.bluematrix;
  if (!intelligence) return;
  const sourceId = "bluematrix-client-sales-manager-closure-20261020";
  const label = "Client Sales Manager求人終了";
  if (!intelligence.sources.some((source) => source.id === sourceId)) {
    intelligence.sources.push({ id: sourceId, label, url: "https://jobs.lever.co/BlueMatrix/", kind: "企業公式", scope: "旧公式URLの404と現行Lever採用一覧を確認", checkedAt });
  }
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => item.label !== label),
    { year: "2026.10.20", label, detail: "旧公式求人URLが404を返し、現行の公式Lever採用一覧にも当該職を確認できなかったため掲載から除外。東京ではCustomer Success ManagerとSenior Specialist - Client Solutionsを引き続き募集しており、これだけで日本事業縮小を意味しない。", sourceId },
  ];
}

export const daily20261020IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  wrike,
  blackline,
  "omni-analytics": omni,
};
