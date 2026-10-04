import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-04";

const skydio = buildDailyCompanyIntelligence({
  slug: "skydio", name: "Skydio", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/skydio/9e21861e-a035-4283-8e85-42a22908af8c", officialUrl: "https://www.skydio.com/ja-jp/about",
  customersUrl: "https://www.skydio.com/customer-stories/japanese-infrastructure-waymark", financeUrl: "https://www.skydio.com/blog/skydio-series-f",
  problem: "橋梁・電力・建設・公共安全の現場では、人が危険箇所へ入り、熟練操縦者が手動で飛ばし、画像を持ち帰る点検・状況把握に時間、安全、再現性の課題がある。",
  origin: "MITの大学院で2009年に出会い自律飛行を研究したAdam Bry、Abe Bachrach、Matt Donahoeが、Google Project Wingでの経験を経て2014年にSkydioを創業した。",
  externalNeed: "インフラ老朽化、人手不足、災害・公共安全対応が重なるほど、企業と行政は目視外飛行、機体・通信の安全、操縦資格、映像管理、障害対応を含む継続運用を求められる。",
  solution: "AIとコンピュータービジョンを機体へ組み込み、障害物を避ける自律飛行、Dockからの遠隔運用、3Dスキャン、映像配信、クラウド管理を提供する。",
  selection: "飛行性能だけでなく、GPSが使えない場所の自律性、現場ネットワークへの接続、遠隔運用、安全・法令対応、導入後の稼働率と保守で比較する。",
  growth: "2023年時点で企業・公共部門の顧客が1,200組織を超えた。2026年のSeries Fでは1.1億ドル（約173億円）を調達し、評価額44億ドル（約6,908億円）、年間売上は数億ドル規模と公表した。",
  role: "Deployment and Support Engineerが日本の顧客・認定パートナーへ機体、Dock、クラウド、ネットワークを導入し、障害解析、稼働、製品改善まで担う。",
  organization: "Skydio合同会社・東京。2020年に初の海外子会社として日本法人を設立し、2023年に日本オフィスを移転。国内の正確な在籍人数は未確認。",
  career: "ロボティクス、企業ネットワーク、現場導入、障害解析、顧客成功、法令・安全を横断し、自律システムを本番運用へ定着させる経験。",
  globalHeadcount: "公式の現員数は未確認。2023年発表では前年比40%増員と製造拠点150人超の採用計画を記載", japanPresence: "Skydio合同会社・東京。日本顧客、国内パートナー、日本組織、現行求人を確認", japanSince: "2020年に初の海外子会社Skydio Japanを設立",
  customer: { company: "Japan Infrastructure Waymark", outcome: "橋梁点検事業を12カ月で70倍へ伸ばし、300機超を運用、操縦訓練を100時間から8時間へ短縮したと紹介。会社作成事例であり独立監査済み成果ではない。" },
  facts: [["創業","2014年","MITの自律飛行研究を起点に米国で創業。"],["企業・公共顧客","1,200組織超","2023年会社公式。"],["年間売上（会社表現の下限）","$200M(約314億円)以上","2026年会社公式の『hundreds of millions in annual revenue』を、規模比較用に2億ドル以上という下限へ置換。正確な売上額ではない。"],["企業価値","44億ドル(約6,908億円)","2026年Series F発表時。"],["日本法人","2020年","初の海外子会社として設立。"],["日本求人","1件","Deployment and Support Engineer (Japan)。"]],
  products: [["Skydio X10","AIによる障害物回避、センサー、遠隔操作に対応する企業・公共向けドローン。","https://www.skydio.com/ja-jp/skydio-x10"],["Dock for X10","機体の格納・充電と遠隔出動を支えるドローンポート。","https://www.skydio.com/ja-jp/dock"],["Skydio Cloud / Remote Flight Deck","機体、映像、飛行、遠隔運用をブラウザとクラウドで管理する。","https://www.skydio.com/ja-jp/solutions"]],
  competitors: "DJI、Parrot、Autel Robotics、現地の手動点検・有人作業、業界別ドローン運用事業者",
  leader: ["Adam Bry","Co-Founder and Chief Executive Officer","https://www.skydio.com/ja-jp/about"], local: ["未確認","Japan Organization","https://www.skydio.com/ja-jp/blog/skydio-grows-in-japans-enterprise-market"],
  work: ["ハイブリッド","Tokyo, Japan","出社日数は未記載","完全リモートの明記なし","年間30〜50%の出張と米国本社との時差対応を想定"],
}, checkedAt);
skydio.sources.push(
  { id: "skydio-japan-entry", label: "Skydio Japan market entry", url: "https://www.skydio.com/ja-jp/blog/skydio-grows-in-japans-enterprise-market", kind: "企業公式", scope: "日本法人・日本顧客・国内展開", checkedAt },
  { id: "skydio-manufacturing-investment", label: "Skydio U.S. manufacturing investment", url: "https://www.skydio.com/blog/skydio-commits-usd3-5-billion-to-expand-u-s-manufacturing-and-secure-american-drone-leadership", kind: "企業公式", scope: "米国製造投資計画", checkedAt },
  { id: "gbiz-headcount-skydio", label: "gBizINFO Skydio合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=6010403023954", kind: "公的機関", scope: "日本法人・所在地・事業所情報", checkedAt },
);
skydio.companyStats.japanHeadcount = { value: "掲載値未確認", detail: "Skydio合同会社と東京拠点は確認したが、gBizINFOで事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-skydio" };

const alarmCom = buildDailyCompanyIntelligence({
  slug: "alarm-com", name: "Alarm.com", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/alarmcom/jobs/8733921002", officialUrl: "https://alarm.com/our-story/",
  customersUrl: "https://alarm.com/resources/business/testimonials-reviews/", financeUrl: "https://international.alarm.com/landing/jp/",
  problem: "住宅・店舗・事業所の防犯、映像、入退室、空調、設備が分断されると、利用者は異常を把握しにくく、販売・施工・監視事業者も継続支援と収益化を標準化しにくい。",
  origin: "MicroStrategyの研究開発部門から2000年に始まり、2003年に携帯回線とWebを使って外出先から物件を監視できる仕組みを市場へ投入した。",
  externalNeed: "人手不足と複数拠点運営、通信・映像・IoT機器の増加が重なるほど、顧客と設置事業者は誤報、権限、保守、通信障害、プライバシー、継続課金を一つの運用で管理する必要がある。",
  solution: "防犯、映像、入退室、空調・エネルギー、見守りをクラウドとアプリで統合し、認定事業者が販売、設置、監視、支援するB2B2C型で提供する。",
  selection: "単体カメラや警報機と比べ、複数機器の統合、専門事業者の設置・監視、遠隔管理、誤報抑制、継続支援、既存設備との接続で比較する。",
  growth: "日本向け公式サイトは世界900万超の顧客、1万2,000超のサービス事業者、60カ国超を掲載。日本のハードウェアパートナーと東京拠点の日本語対応チームを案内している。",
  role: "Business Development Managerが日本を中心に統合・販売・監視事業者を開拓し、既存パートナーの導入、売上、長期関係を広げる。",
  organization: "日本向けサービス、国内ハードウェアパートナー、東京拠点の日本語対応チームを確認。日本法人名、オフィス所在地、正確な国内在籍人数は未確認。",
  career: "クラウド・IoTと物理セキュリティを、販売・施工・監視事業者の継続収益へ変えるチャネル開拓・複数国事業開発経験。",
  globalHeadcount: "公式の現員数は未確認。Nasdaq上場企業として年次報告書を公開", japanPresence: "日本向けサービス、国内パートナー、東京拠点の日本語対応チーム、現行求人を確認", japanSince: "日本でのサービス展開開始時期は公式ページで明記なし",
  customer: { company: "AVI Foodsystems", outcome: "映像、防犯、入退室を70超の拠点で標準化したと公式顧客事例で紹介。詳細な費用・事故削減率は未確認。" },
  facts: [["創業","2000年","MicroStrategyの研究開発部門を起点に米国で創業。"],["顧客","900万超","日本向け公式サイト。"],["FY2025売上","$1.0112B(約1,588億円)","2025年12月期の通期総売上。会社公式決算。"],["サービス事業者","1万2,000超","日本向け公式サイト。"],["展開国","60カ国超","日本向け公式サイト。"],["日本体制","東京担当チーム","日本語対応の東京拠点チームと国内パートナーを確認。"],["日本求人","1件","Business Development Manager。"]],
  products: [["Alarm.com Platform","防犯、映像、入退室、設備をクラウドとアプリで統合する。","https://international.alarm.com/landing/jp/"],["Alarm.com for Business","複数店舗・事業所の映像、防犯、入退室、エネルギーを遠隔管理する。","https://alarm.com/small-medium-business/"],["Partner Services","認定事業者の販売、設置、顧客管理、継続収益を支援する。","https://alarm.com/new-partner/"]],
  competitors: "ADT、Resideo、Johnson Controls、Verkada、単体カメラ・入退室・警報機、地域の警備・施工事業者",
  leader: ["Stephen Trundle","Chief Executive Officer","https://investors.alarm.com/governance/board-of-directors/person-details/default.aspx?ItemId=cc322463-851f-43b9-b006-8da6584f6a13"], local: ["未確認","Japan Business Development","https://international.alarm.com/landing/jp/"],
  work: ["未確認","Japan（東京圏を優先）","出社日数は未記載","完全リモートの明記なし","日本・フィリピン・ベトナム・グアムへ60〜70%の出張を想定"],
}, checkedAt);
alarmCom.sources.push(
  { id: "alarm-com-origin", label: "Alarm.com Our Story", url: "https://alarm.com/our-story/", kind: "企業公式", scope: "事業の成り立ち・提供モデル", checkedAt },
  { id: "alarm-com-japan", label: "Alarm.com Japan landing page", url: "https://international.alarm.com/landing/jp/", kind: "企業公式", scope: "日本展開・国内パートナー・東京担当チーム", checkedAt },
  { id: "alarm-com-fy2025-results", label: "Alarm.com FY2025 results", url: "https://investors.alarm.com/news-releases/press-release-details/2026/Alarm-com-Reports-Fourth-Quarter-and-Full-Year-2025-Results/default.aspx", kind: "企業公式", scope: "2025年通期売上", checkedAt },
  { id: "gbiz-headcount-alarm-com", label: "gBizINFO Alarm.com法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
alarmCom.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本向けサービス、国内パートナー、東京拠点の担当チームは確認したが、対応する日本法人・事業所を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-alarm-com" };

const magnetForensics = buildDailyCompanyIntelligence({
  slug: "magnet-forensics", name: "Magnet Forensics", jobConfirmed: true,
  jobUrl: "https://jobs.lever.co/magnetforensics/dd9fcd02-0997-48a4-829f-e4a3eeccfa85", officialUrl: "https://www.magnetforensics.com/our-story/",
  customersUrl: "https://www.magnetforensics.com/customer-stories/", financeUrl: "https://www.magnetforensics.com/why-magnet-forensics/",
  problem: "犯罪・不正・サイバー事故の証拠がスマートフォン、PC、クラウド、映像、車載機器へ分散し、取得、解析、共有が遅れると、捜査・調査の滞留と証拠の見落としが増える。",
  origin: "警察官・デジタル鑑識官だったJad Salibaが、所属部署でデジタル証拠を回収するソフトウェアを作った経験から、2011年にMagnet Forensicsを創業した。",
  externalNeed: "端末とクラウドのデータ量、暗号化、生成AIによる合成情報、法的手続きが増えるほど、捜査機関と企業は証拠の完全性、権限、人権、監査、専門家の負担を同時に管理する必要がある。",
  solution: "端末・クラウド・車載・映像から証拠を取得し、解析、事案管理、共同レビュー、自動化までをデジタル捜査ワークフローとしてつなぐ。",
  selection: "対応端末・データ源だけでなく、証拠の完全性、解析速度、事案横断の共同作業、監査、人権・輸出管理、既存鑑識基盤との接続で比較する。",
  growth: "会社公式は100カ国超、6,000超の機関・企業、Fortune 100の70%超を掲載。日本を主市場とするNorth Asia企業営業を募集し、日本のトレーニングパートナーも案内している。",
  role: "Enterprise Account Executive – North Asiaが日本を主市場にCISO、SOC、インシデント対応部門へ新規・拡大商談を作り、技術評価、商務、販売パートナーを動かす。",
  organization: "公式拠点はカナダ、米国、シンガポール。日本のトレーニングパートナーは確認したが、日本法人、国内オフィス、雇用主体、正確な国内在籍人数は未確認。",
  career: "デジタル鑑識、企業調査、インシデント対応を、技術評価、法務・調達、経営課題へ翻訳し、日本とNorth Asiaの市場を作る企業営業経験。",
  globalHeadcount: "公式の現員数は未確認。カナダ・米国・シンガポールの拠点と世界各地の従業員を掲載", japanPresence: "日本法人・国内オフィスは未確認。日本を主市場とする現行求人と国内トレーニングパートナーを確認", japanSince: "未進出",
  customer: { company: "Fairfax County Police Department", outcome: "80台超の端末滞留を解消し、証拠の返却時間を数カ月から数日へ短縮したと公式事例で紹介。会社作成事例であり独立監査済み成果ではない。" },
  facts: [["創業","2011年","元警察官・デジタル鑑識官の現場課題から創業。"],["顧客組織","6,000超","会社公式。"],["FY2022売上","$98.9M(約155億円)","買収・非公開化前の2022年通期売上。現在の売上規模ではない。"],["展開国","100カ国超","会社公式。"],["Fortune 100","70%超","会社公式。"],["日本体制","未確認","法人・国内オフィス・雇用主体は未確認。"],["日本求人","1件","Enterprise Account Executive – North Asia。"]],
  products: [["Magnet Axiom","モバイル、PC、クラウド、車載等のデジタル証拠を取得・解析する。","https://www.magnetforensics.com/products/magnet-axiom/"],["Magnet One","取得、解析、事案管理、共有をクラウド型ワークフローでつなぐ。","https://www.magnetforensics.com/products/"],["Magnet Axiom Cyber","企業の端末から遠隔で証拠を収集し、インシデントと内部調査を支援する。","https://www.magnetforensics.com/products/magnet-axiom-cyber/"]],
  competitors: "Cellebrite、Exterro FTK、OpenText EnCase、Nuix、各機関・企業の個別鑑識ツール",
  leader: ["Adam Belsher","Chief Executive Officer","https://www.magnetforensics.com/our-team/"], local: ["未確認","North Asia Enterprise Sales","https://jobs.lever.co/magnetforensics/dd9fcd02-0997-48a4-829f-e4a3eeccfa85"],
  work: ["フルリモート","Tokyo / Japan / Nagoya / Osaka / Yokohama","常設オフィスへの出社条件は未確認","求人はRemoteと明記","日本を主市場にNorth Asiaへ30〜50%の出張を想定"],
  preEntry: {
    verdict: "進出可能性は高め。日本を主市場とする企業営業と国内トレーニングパートナーを確認した一方、日本法人、国内オフィス、雇用主体、国内顧客名は未確認。",
    signal: "日本を主市場とし、東京・日本・名古屋・大阪・横浜を勤務地候補に含むEnterprise Account Executive – North Asiaを募集している。",
    hurdle: "日本法人、国内オフィス、雇用・契約主体、公共機関・企業の公開事例、日本語の技術支援とデータ取扱条件を確認できない。",
    conditions: ["日本での雇用、契約、税務、個人情報・証拠データ取扱を担う主体を明確にする。", "国内の公共・企業顧客と販売・トレーニングパートナーから再現可能な需要を確認する。", "日本語の技術評価、導入、障害対応、研修、法務・人権審査を継続提供する。", "長い調達・技術評価を支える営業技術・顧客成功体制を整える。"],
    watches: ["日本法人・国内オフィス", "国内顧客事例", "日本語の技術・導入支援", "追加の営業技術・顧客成功求人", "雇用・契約・データ取扱主体"],
  },
}, checkedAt);
magnetForensics.sources.push(
  { id: "magnet-founder", label: "Magnet Forensics leadership", url: "https://www.magnetforensics.com/our-team/", kind: "企業公式", scope: "創業者・創業背景", checkedAt },
  { id: "magnet-training-japan", label: "Magnet Forensics training partners", url: "https://www.magnetforensics.com/training-partners/", kind: "企業公式", scope: "日本のトレーニングパートナー", checkedAt },
  { id: "magnet-fy2022-results", label: "Magnet Forensics FY2022 results", url: "https://www.magnetforensics.com/news/magnet-forensics-announces-2022-fourth-quarter-and-year-end-results/", kind: "企業公式", scope: "買収前の2022年通期売上", checkedAt },
  { id: "gbiz-headcount-magnet-forensics", label: "gBizINFO Magnet Forensics法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
magnetForensics.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本担当求人と国内トレーニングパートナーは確認したが、対応する日本法人・事業所を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-magnet-forensics" };
if (magnetForensics.marketStatus.japanGrowth) {
  magnetForensics.marketStatus.japanGrowth.headline = "日本を主市場とするNorth Asia企業営業を募集";
  magnetForensics.marketStatus.japanGrowth.narrative = "2026年10月4日の公式求人で日本を主市場とするEnterprise Account Executiveを確認。日本法人、国内オフィス、雇用主体、国内顧客名は未確認。";
}

for (const intelligence of [skydio, alarmCom, magnetForensics]) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.map((item) => item.year === "2026.09" ? { ...item, year: "2026.10" } : item);
}

export const daily20261004IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  skydio,
  "alarm-com": alarmCom,
  "magnet-forensics": magnetForensics,
};
