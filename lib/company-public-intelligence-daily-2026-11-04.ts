import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";
import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";

const checkedAt = "2026-11-04";

const channelCorp = buildDailyCompanyIntelligence({
  slug: "channel-corp", name: "Channel Corp.", jobConfirmed: true,
  jobUrl: "https://channel.io/jp/careers", officialUrl: "https://channel.io/jp/team",
  customersUrl: "https://channel.io/jp/customers", financeUrl: "https://channel.io/jp/careers/94ea1ef9-eddc-45e1-b34e-2289e8853e77",
  problem: "チャット、電話、メール、顧客情報が別々に管理されると、問い合わせ対応が遅れ、履歴が途切れ、顧客理解と継続率改善を一つの業務にできない。",
  origin: "2017年に韓国で、企業が顧客と継続的に会話できる仕組みを作る目的からChannel Talkを開始した。",
  externalNeed: "問い合わせ量と接点が増え、生成AIで自動化できる範囲も広がる一方、企業には回答品質、顧客データ、有人対応への引き継ぎ、継続利用を同じ業務として管理することが求められる。",
  solution: "チャット、電話、CRMマーケティング、顧客データ、AI応答と業務フローを一つの顧客コミュニケーション基盤へまとめる。",
  selection: "単一のチャットボットや問い合わせ管理と比べ、顧客履歴、有人対応、電話、マーケティング、AI自動化を同じ運用へ接続し、売上と顧客体験の両方を追えるかで比較する。",
  growth: "会社公式求人は世界24万社以上、従業員約200人、日本国内2万アカウント超を掲載する。gBizINFOの国内事業所被保険者数は37人。",
  role: "日本でAccount Executive、Renewal & Expansion、Customer Success、Partner Salesなどを同時募集し、新規獲得から更新・拡張、AI業務実装、共同販売までを拡張している。",
  organization: "株式会社Channel Corporation・東京都千代田区。gBizINFOの事業所被保険者数37人。",
  career: "小規模な日本組織で、新規販売、更新・拡張、AI業務実装、パートナー販売を通じて顧客コミュニケーション事業を拡張する経験。",
  globalHeadcount: "約200人（会社公式求人）", japanPresence: "株式会社Channel Corporation・東京都千代田区・事業所被保険者数37人", japanSince: "日本展開年は今回未確認",
  customer: { company: "日本国内2万アカウント超", outcome: "会社公式求人は日本国内で2万アカウント超が利用すると説明。個別企業の成果は各導入事例で確認が必要。" },
  facts: [["創業","2017年","韓国でChannel Talkを開始。"],["従業員","約200人","会社公式求人。"],["利用企業","24万社以上","会社公式求人。"],["日本利用","2万アカウント超","会社公式求人。"],["国内規模","37人","gBizINFO事業所被保険者数。"],["日本求人","4件以上","AE、Renewal & Expansion、CS、Partner Salesを公式確認。"]],
  products: [["Channel Talk","顧客チャット、電話、CRM、社内会話を統合。","https://channel.io/jp"],["ALF","問い合わせ内容と顧客データを使いAI対応を自動化。","https://channel.io/jp/alf"],["CRM Marketing","顧客情報と行動を使ってメッセージ配信と関係構築を支援。","https://channel.io/jp/crm-marketing"]],
  competitors: "Intercom、Zendesk、Salesforce Service Cloud、HubSpot、国内チャット・コールセンター製品",
  leader: ["Choi Siwon","Co-founder・CEO","https://channel.io/jp/team"], local: ["玉川 葉","CEO in Japan","https://channel.io/jp/team"],
  work: ["未確認","東京勤務","固定出社日数は求人ごとに確認","完全リモートの明記なし","勤務形態は職種ごとに選考で確認"],
}, checkedAt);
channelCorp.sources.push({ id: "gbiz-headcount-channel-corp", label: "gBizINFO 株式会社Channel Corporation", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=6700150067028", kind: "公的機関", scope: "日本法人・所在地・事業所被保険者数", checkedAt });
channelCorp.companyStats.japanHeadcount = { value: "37人", detail: "gBizINFOの事業所情報に掲載された厚生年金保険・健康保険の被保険者数。役員、制度対象外、業務委託等を含む総在籍人数ではない。", sourceId: "gbiz-headcount-channel-corp" };
channelCorp.companyStats.japanOffice = { value: "東京都千代田区", detail: "麹町2丁目3番2号。gBizINFOで確認。", sourceId: "gbiz-headcount-channel-corp" };

const concertai = buildDailyCompanyIntelligence({
  slug: "concertai", name: "ConcertAI", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/concertai/jobs/4313547009", officialUrl: "https://www.concertai.com/about-us",
  customersUrl: "https://www.terarecon.com/news/concertais-terarecon-surpasses-2000-global-customers-accelerating-cloud-first-saas-transformation-to-further-unlock-productivity-for-healthcare-providers",
  financeUrl: "https://www.concertai.com/investors",
  problem: "臨床研究、医療画像、患者経過、診療のデータが分断されると、治療判断、研究対象の特定、画像処理、臨床試験の速度と再現性が落ちる。",
  origin: "2017年に米国で、腫瘍領域の実臨床データとAIを研究・診療判断へつなぐ目的から設立された。2021年に医療画像企業TeraReconを統合した。",
  externalNeed: "医療機関と製薬企業には、生成AIや画像AIの精度だけでなく、臨床データの由来、規制、患者安全、既存PACS・診療導線との接続を保ちながら意思決定を速めることが求められる。",
  solution: "実臨床データ、臨床研究支援、精密医療AIとTeraReconの画像可視化・解析を組み合わせ、研究から診療までの判断を支える。",
  selection: "単一の画像処理、PACS、データ提供会社と比べ、画像、臨床データ、研究設計、規制・導入、診療ワークフローをどこまで一つの成果へつなげられるかで比較する。",
  growth: "ConcertAIはFY2024売上2億ドル、ARR約30%成長、黒字を会社公式で公表。TeraReconは2025年に世界2,000顧客超とクラウド優先のSaaS転換を公表し、東京オフィスと日本営業求人も確認できる。",
  role: "Remote JapanのSales Managerが医療機関向けTeraRecon商材のパイプライン、複数年契約、既存顧客、展示会、予測管理を担い、Director of Japan Salesの下で働く。",
  organization: "ConcertAI傘下TeraReconの東京オフィスを文京区湯島に確認。日本法人名と国内の正確な在籍人数は未確認。",
  career: "医療画像の専門知識を、病院経営、臨床ワークフロー、AI導入、複数年ソフトウェア契約へ翻訳する業界特化営業経験。",
  globalHeadcount: "公開公式値は今回未確認", japanPresence: "TeraRecon東京オフィス・東京都文京区湯島。国内人数は未確認", japanSince: "2003年に日本市場参入を会社沿革で確認",
  customer: { company: "TeraRecon世界2,000顧客超", outcome: "会社公式は、医療画像の可視化・AIワークフローを世界2,000顧客超が利用すると説明。日本顧客の個別定量成果は今回未確認。" },
  facts: [["設立","2017年","米国でConcertAIを設立。"],["FY2024売上","$200M(約314億円)","会社公式。ARRは約30%成長し、黒字と説明。"],["TeraRecon顧客","2,000超","2025年会社公式。"],["日本拠点","東京・湯島","TeraRecon公式Contact。"],["日本戦略","国別展開","2025年公式発表。"],["日本求人","1件","Sales Manager, Japan。"]],
  products: [["TeraRecon AV","医療画像の3D可視化、計測、臨床ワークフローを支援。","https://www.terarecon.com"],["Cara AI Platform","臨床・画像・分子データから研究と診療の洞察を作る。","https://www.concertai.com"],["Precision Suite","実臨床データと分析を臨床開発・商用判断へ接続。","https://www.concertai.com/solutions"]],
  competitors: "GE HealthCare、Siemens Healthineers、Philips、PACS・VNA各社、医療実臨床データ各社",
  leader: ["Eron Kelly","Chief Executive Officer","https://www.concertai.com/about-us"], local: ["未確認","Director of Japan Sales","https://job-boards.greenhouse.io/concertai/jobs/4313547009"],
  work: ["フルリモート","Remote Japan","固定出社なし","日本国内リモート","顧客訪問・展示会・出張頻度を選考で確認"],
}, checkedAt);
concertai.sources.push(
  { id: "concertai-fy2024-results", label: "ConcertAI FY2024 business results", url: "https://www.concertai.com/news/2024/01/concertai-highlights-2024-partnerships-strategy-business-results-and-ai-roadmap-at-42nd-annual-j-p-morgan-healthcare-conference", kind: "企業公式", scope: "FY2024売上・ARR成長・黒字", checkedAt },
  { id: "concertai-terarecon-contact", label: "TeraRecon Contact", url: "https://www.terarecon.com/contact", kind: "企業公式", scope: "東京オフィス・連絡先", checkedAt },
  { id: "concertai-terarecon-integration", label: "ConcertAI integrates TeraRecon", url: "https://www.terarecon.com/news/concertai-announces-integration-of-terarecon", kind: "企業公式", scope: "統合・拠点", checkedAt },
);
concertai.companyStats.japanHeadcount = { value: "未確認", detail: "東京オフィスと日本営業組織は確認できるが、法人単位の事業所被保険者数と総在籍人数は今回特定できない。", sourceId: "concertai-terarecon-contact" };
concertai.companyStats.japanOffice = { value: "東京都文京区湯島", detail: "湯島アーバンビル6階。TeraRecon公式Contactで確認。", sourceId: "concertai-terarecon-contact" };

const everpure = buildDailyCompanyIntelligence({
  slug: "everpure", name: "Everpure（旧Pure Storage）", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/purestorage/jobs/7464039", officialUrl: "https://www.everpuredata.com/jp/",
  customersUrl: "https://www.purestorage.com/content/dam/pdf/ja-jp/case-studies/cs-denso-it-solutions-ja-jp.pdf",
  financeUrl: "https://www.purestorage.com/content/dam/pdf/en/quarter-report/q4-2026.pdf",
  problem: "企業データが増え続け、ストレージ更新、停止、移行、容量計画、ランサムウェア対策が個別作業になると、AI・分析へ使える前に運用負荷と事業継続リスクが増える。",
  origin: "2009年に米国で、複雑な企業ストレージをフラッシュとソフトウェアで簡素化する目的からPure Storageとして創業し、2026年にデータ基盤企業としてEverpureへ改称した。",
  externalNeed: "生成AI、分析、サイバー耐性の投資が進むほど、企業は高速性だけでなく、停止を抑えた更新、容量効率、復旧、クラウド・Kubernetesを含むデータ管理を継続運用する必要がある。",
  solution: "FlashArray、FlashBlade、Evergreen、Pure1、Portworxを組み合わせ、保存、保護、更新、監視、Kubernetesデータを一つの企業データ基盤として運用する。",
  selection: "Dell、NetApp、HPE、IBM、クラウド保存と比べ、性能だけでなく、無停止更新、容量効率、復旧、サブスクリプション、運用工数、既存基盤との接続を同じ用途で比較する。",
  growth: "FY2026売上37億ドルを公表し、東京で営業・営業管理・更新・内勤営業など複数の求人を掲載。日本企業のストレージ更新と運用負荷削減事例も公開する。",
  role: "日本のAccount Executiveが公共インフラ顧客の新規開拓、チャネル、アカウント計画、パイプライン、四半期・年間目標を担う。",
  organization: "ピュア・ストレージ・ジャパン株式会社と東京・永田町オフィスを確認。国内の正確な在籍人数は未確認。",
  career: "AI・データ基盤、サイバー耐性、公共インフラの継続性を、経営層からデータセンター現場まで通して提案する企業向け営業経験。",
  globalHeadcount: "公開公式値は今回未確認", japanPresence: "ピュア・ストレージ・ジャパン株式会社・東京永田町", japanSince: "日本法人設立年は今回未確認",
  customer: { company: "デンソーITソリューションズ", outcome: "FlashArrayとEvergreen Storageにより、毎年数百TB規模で増える基盤の性能・容量効率を高め、老朽化更新作業を大幅に減らしたと紹介。" },
  facts: [["創業","2009年","米国でPure Storageとして創業。"],["改称","2026年","Everpureへブランド変更。"],["FY2026売上","37億ドル","会社公式決算。"],["日本法人","確認済み","ピュア・ストレージ・ジャパン株式会社。"],["国内事例","複数","デンソーITソリューションズ、DMM.com等。"],["日本求人","複数","東京のAE、営業管理、更新、内勤営業等。"]],
  products: [["FlashArray","企業アプリ・データベース向けのオールフラッシュ基盤。","https://www.everpuredata.com/jp/products/storage/flasharray.html"],["FlashBlade","非構造化データ、分析、AI向けのファイル・オブジェクト基盤。","https://www.everpuredata.com/jp/products/storage/flashblade.html"],["Evergreen","無停止更新と継続利用を支えるサブスクリプション型運用。","https://www.everpuredata.com/jp/products/evergreen.html"]],
  competitors: "Dell Technologies、NetApp、HPE、IBM、クラウド各社の保存・データ基盤",
  leader: ["Charles Giancarlo","Chairman and Chief Executive Officer","https://www.everpuredata.com/company/leadership.html"], local: ["未確認","Japan RVP Sales","https://job-boards.greenhouse.io/purestorage"],
  work: ["未確認","東京オフィス","固定出社日数は未確認","完全リモートの明記なし","顧客訪問、出社、担当範囲を選考で確認"],
}, checkedAt);
everpure.sources.push(
  { id: "everpure-rebrand", label: "Pure Storage is now Everpure", url: "https://blog.purestorage.com/news-events/pure-storage-is-now-everpure/", kind: "企業公式", scope: "2026年のブランド変更", checkedAt },
  { id: "everpure-japan-case-denso", label: "デンソーITソリューションズ導入事例", url: "https://www.purestorage.com/content/dam/pdf/ja-jp/case-studies/cs-denso-it-solutions-ja-jp.pdf", kind: "企業公式", scope: "日本顧客・導入目的・成果", checkedAt },
);
everpure.companyStats.japanHeadcount = { value: "未確認", detail: "日本法人と東京オフィスは確認できるが、事業所被保険者数と総在籍人数を今回の公開情報から特定できない。", sourceId: "everpure-company" };
everpure.companyStats.japanOffice = { value: "東京都千代田区永田町", detail: "現行公式求人で東京・永田町オフィスを確認。", sourceId: "everpure-job" };

const mistplay = buildDailyCompanyIntelligence({
  slug: "mistplay", name: "Mistplay", jobConfirmed: true,
  jobUrl: "https://jobs.lever.co/mistplay/de4316a2-d0b9-4b86-b3d1-5dad566afc7d", officialUrl: "https://business.mistplay.com/newsroom",
  customersUrl: "https://business.mistplay.com/resources/ana-x-case-study-loyaltyplay", financeUrl: "https://business.mistplay.com/newsroom",
  problem: "モバイルゲームとアプリでは、広告で獲得した利用者が定着せず、広告費回収と継続利用を両立できないと、成長するほど収益性が悪化する。",
  origin: "2015年にカナダ・モントリオールで、ゲームを遊ぶ時間に報酬を付け、利用者とゲーム会社の双方へ継続価値を作る目的から創業した。",
  externalNeed: "広告識別子とプライバシー規制の変化で従来の追跡型広告が難しくなる一方、ゲーム・アプリ企業には同意、報酬、継続率、広告費回収を測定可能な獲得導線が求められる。",
  solution: "プレイ報酬、Mistplay Audience Network、LoyaltyPlay、Helios AIを組み合わせ、利用者獲得、継続、アプリ内収益化を支える。",
  selection: "一般的な広告ネットワーク、オファーウォール、広告運用会社と比べ、報酬設計、利用者の継続、広告費回収、ブランド体験、複数市場の配信を同じ成果で比較する。",
  growth: "会社公式は世界175人超、9市場、2026年の日本iPhone版開始、日本担当営業責任者、日本語サイト、日本の公式求人を掲載する。日本法人・常設オフィスは未確認。",
  role: "Remote TokyoのSenior Account Executiveが日本のゲーム企業を新規開拓し、提案、導入、継続、解約防止、アップセルを一貫して担う。",
  organization: "日本担当営業責任者と営業担当、日本向け製品・事例・求人は確認。日本法人と常設オフィスは未確認のため『日本進出の兆しあり』として扱う。",
  career: "モバイルゲーム企業の利用者獲得、継続、広告費回収、収益化をデータで結び、日本市場の顧客基盤を拡張する経験。",
  globalHeadcount: "175人超（会社公式Newsroom）", japanPresence: "日本担当チーム・日本語製品・Remote Tokyo求人あり。法人・常設オフィスは未確認", japanSince: "2026年に日本iPhone版開始を公式確認",
  customer: { company: "ANA X", outcome: "LoyaltyPlayをANA Pocketへ組み込み、2025年5月以降に広告収益目標の145%を達成したと会社公式事例で紹介。" },
  facts: [["創業","2015年","カナダ・モントリオールで創業。"],["従業員","175人超","会社公式Newsroom。"],["展開","9市場","会社公式Newsroom。"],["日本製品","iOS・Android","2026年にiPhone版を開始。"],["日本法人","未確認","日本担当チームと製品は確認。"],["日本求人","1件","Senior Account Executive I, Japan。"]],
  products: [["Mistplay","ゲーム発見とプレイ報酬を利用者へ提供。","https://ja.mistplay.com"],["Mistplay Audience Network","ゲーム・アプリ企業の報酬型利用者獲得を支援。","https://business.mistplay.com"],["LoyaltyPlay","他社アプリへゲーム報酬・収益化を組み込む。","https://business.mistplay.com/resources/ana-x-case-study-loyaltyplay"]],
  competitors: "一般広告ネットワーク、オファーウォール、ironSource・Unity等のゲーム広告基盤、各種ポイント媒体",
  leader: ["Trent Ward","Chief Executive Officer","https://business.mistplay.com/newsroom"], local: ["Kaku Kindaichi","Director of Commercial, Japan","https://business.mistplay.com/resources/mistplay-iphone-japan-market-report"],
  work: ["フルリモート","Remote Tokyo","固定出社なし","日本国内リモート","出張、担当社数、APAC連携を選考で確認"],
  preEntry: {
    verdict: "進出の兆しあり。日本担当チーム、国内向け製品、日本企業事例、現行Remote Tokyo求人を確認したが、日本法人・常設オフィスは未確認。",
    signal: "2026年に日本iPhone版を開始し、日本担当営業責任者とSenior Account Executive求人を確認。",
    hurdle: "法人・常設拠点、国内雇用主体、国内売上・顧客数、サポート体制の公開がない。",
    conditions: ["日本での雇用・契約主体と常設拠点を明確にする。", "国内顧客の継続率と広告費回収を再現できる販売・支援体制を整える。", "日本語の利用者・広告主支援と規制・報酬運用を継続できる。"],
    watches: ["日本法人・国内拠点", "国内雇用主体", "日本求人の増員", "国内顧客・売上・継続率", "日本語サポート体制"],
  },
}, checkedAt);
mistplay.sources.push(
  { id: "mistplay-japan-launch", label: "Mistplay for iPhone arrives in Japan", url: "https://business.mistplay.com/resources/mistplay-iphone-japan-market-report", kind: "企業公式", scope: "日本展開・担当責任者・製品", checkedAt },
  { id: "mistplay-ana-x", label: "ANA X LoyaltyPlay case study", url: "https://business.mistplay.com/resources/ana-x-case-study-loyaltyplay", kind: "企業公式", scope: "日本顧客・導入目的・成果", checkedAt },
);
mistplay.companyStats.japanHeadcount = { value: "未確認", detail: "日本担当責任者と営業担当は確認できるが、法人・事業所と国内総人数は公開情報から特定できない。", sourceId: "mistplay-japan-launch" };
mistplay.companyStats.japanOffice = { value: "常設オフィス未確認", detail: "公式求人はRemote Tokyo。日本法人・常設拠点を確認できないため、現在応募できる求人と法人・拠点を分けて表示する。", sourceId: "mistplay-job" };

export const daily20261104IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  "channel-corp": channelCorp,
  concertai,
  everpure,
  mistplay,
};
