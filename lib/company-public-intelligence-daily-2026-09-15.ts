import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-15";

const alteryx = buildDailyCompanyIntelligence({
  slug: "alteryx", name: "Alteryx", jobConfirmed: true,
  jobUrl: "https://alteryx.wd108.myworkdayjobs.com/en-US/AlteryxCareers/job/Sales-Development-Representative--Japan_R12203-1", officialUrl: "https://www.alteryx.com/ja/",
  customersUrl: "https://www.alteryx.com/ja/resources/customer-story/shimadzu-mfg", financeUrl: "https://www.alteryx.com/about-us",
  problem: "分析前のデータ準備と業務ロジックが表計算、個人の手作業、部門別ツールへ分散し、判断までの時間と再現性を損なう課題を解く。",
  origin: "1997年、米国カリフォルニアでDean Stoecker、Olivia Duane Adams、Ned Hardingが空間分析と企業データの複雑な準備を使いやすくするSRC LLCを創業し、後にAlteryxへ改称。",
  externalNeed: "生成AIが分析案を速く作るほど、企業は回答の前提となるデータ、計算手順、権限、更新履歴を人の記憶ではなく再利用できる工程として管理する必要がある。",
  solution: "コードを書かずにデータ接続、準備、結合、分析、機械学習、業務フローを設計し、統制された分析工程として繰り返し実行する。",
  selection: "単発の可視化だけでなく、データ準備から業務ロジック、AI利用、権限、再実行までを現場主導で標準化できる点で比較する。",
  growth: "公式Aboutは8,000社超の顧客、75万人超のコミュニティ、90カ国400社超の提携先、年間3.8億超の分析工程を掲載。東京でSales Development Representativeを募集。",
  role: "Sales Development Representativeが問い合わせと狙う企業への新規開拓を担い、Account Executiveと分析自動化の営業機会を作る。",
  organization: "アルテリックス・ジャパン合同会社・東京。gBizINFOの事業所被保険者数6人。",
  career: "少人数の日本組織で、分析担当者の手作業を経営・業務成果へ翻訳し、企業向け分析基盤の案件創出を設計する経験。",
  globalHeadcount: "2,400人（2023年会社資料。現員ではない）", japanPresence: "アルテリックス・ジャパン合同会社・東京。gBizINFOの事業所被保険者数6人", japanSince: "2016年に日本法人を確認",
  customer: { company: "島津製作所", outcome: "データ準備に最大3カ月を要していた分析工程へ導入し、約20人が利用。全工程の自動化と進捗の可視化を進めたと会社事例で紹介。" },
  facts: [["創業","1997年","米国カリフォルニアでSRC LLCとして創業。"],["顧客","8,000社超","公式About掲載。"],["コミュニティ","75万人超","公式About掲載。登録・活動人数の定義は未確認。"],["年間分析工程","3.8億超","会社が処理する年間ワークフロー数。"],["国内規模","6人","gBizINFO事業所被保険者数。"],["日本求人","1件","Sales Development Representative, Japan。"]],
  products: [["Alteryx One","データ準備、分析、AI利用、統制を一つの分析自動化基盤で運営。","https://www.alteryx.com/products/alteryx-one"],["Designer Cloud","データ接続、準備、結合、分析工程を視覚的に設計。","https://www.alteryx.com/products/designer-cloud"],["Auto Insights","業務データの変化と要因を自動で可視化・共有。","https://www.alteryx.com/products/auto-insights"]],
  competitors: "Microsoft Power BI・Fabric、Tableau、Dataiku、Databricks、表計算・Python・内製",
  leader: ["Andy MacMillan","Chief Executive Officer","https://www.alteryx.com/about-us/leadership"], local: ["未確認","日本事業責任者","https://www.alteryx.com/contact-us?area=ja"],
  work: ["出社中心","東京オフィス勤務","公式求人はtraditional office positionと記載","完全リモートではない","出社頻度、柔軟性、出張は選考で確認"],
}, checkedAt);
alteryx.sources.push({ id: "gbiz-headcount-alteryx", label: "gBizINFO アルテリックス・ジャパン合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=2010403018009", kind: "公的機関", scope: "日本法人・所在地・事業所被保険者数", checkedAt });
alteryx.companyStats.japanHeadcount = { value: "6人", detail: "gBizINFOの事業所情報に掲載された厚生年金保険・健康保険の被保険者数。役員・制度対象外・業務委託等を含む総在籍人数ではない。", sourceId: "gbiz-headcount-alteryx" };

const acronis = buildDailyCompanyIntelligence({
  slug: "acronis", name: "Acronis", jobConfirmed: true,
  jobUrl: "https://www.acronis.com/en/careers/job/r-100909/", officialUrl: "https://www.acronis.com/ja-jp/",
  customersUrl: "https://www.acronis.com/ja-jp/resource-center/category/case-studies/", financeUrl: "https://www.acronis.com/en/company/",
  problem: "バックアップ、セキュリティ、端末管理が別々の製品と担当へ分かれ、攻撃や障害時に検知、隔離、復旧を一つの運用で進めにくい課題を解く。",
  origin: "2003年、シンガポールでParallelsから分離し、ディスクイメージによる確実な保護と復旧を出発点にAcronisを創業。初期から日本を含む海外流通を広げた。",
  externalNeed: "生成AIとクラウド利用で攻撃面が広がり、企業は端末を守るだけでなく、侵害後に業務を戻せる復旧性、証跡、サービス事業者の運用品質を同時に求める。",
  solution: "バックアップ、災害復旧、マルウェア防御、端末管理、メール・SaaS保護を一つのエージェントと管理画面へ統合する。",
  selection: "検知率だけでなく、保護から復旧までの時間、一つのエージェントで扱える範囲、サービス事業者の運用効率、顧客ごとの採算で比較する。",
  growth: "公式Careersは1,800人超、15拠点、50カ国超、公式会社情報は2万社超のサービス事業者と75万社超の保護対象企業を掲載。日本で営業育成職を募集。",
  role: "Junior Cloud Services Advisorがサービス事業者候補を開拓し、案件評価、利用開始、小規模契約の受注、大規模案件の上位営業への引き継ぎを担う。",
  organization: "アクロニス・ジャパン株式会社・東京。gBizINFOの事業所被保険者数44人。",
  career: "新規開拓から小規模契約の受注までを持ち、サービス事業者の販売・運用能力を継続売上へ変えるパートナー営業経験。",
  globalHeadcount: "1,800人超（公式Careers）", japanPresence: "アクロニス・ジャパン株式会社・東京。gBizINFOの事業所被保険者数44人", japanSince: "2008年に日本で事業開始",
  customer: { company: "JMiX", outcome: "Acronis Cyber Protect Cloudの採用でサービスの付加価値と定常的な売上を高めたと2026年の会社事例で紹介。具体的な金額は非公開。" },
  facts: [["創業","2003年","シンガポールでParallelsから分離して創業。"],["従業員","1,800人超","公式Careers掲載。"],["サービス事業者","2万社超","会社公式。契約・活動の定義は未確認。"],["保護対象企業","75万社超","会社公式。直接契約社数とは限らない。"],["国内規模","44人","gBizINFO事業所被保険者数。"],["日本求人","2件確認","営業育成職と技術支援職。Genba掲載対象は営業育成職1件。"]],
  products: [["Acronis Cyber Protect Cloud","サービス事業者向けにバックアップ、セキュリティ、端末管理を統合。","https://www.acronis.com/ja-jp/products/cloud/cyber-protect/"],["Acronis Cyber Protect","企業端末の保護、バックアップ、復旧、管理を統合。","https://www.acronis.com/ja-jp/products/cyber-protect/"],["Acronis Cyber Protect Home Office","個人端末のバックアップとサイバー防御を提供。","https://www.acronis.com/ja-jp/products/true-image/"]],
  competitors: "Veeam、Rubrik、CrowdStrike、Microsoft、各種バックアップ・端末防御・内製運用",
  leader: ["Ezequiel Steiner","Chief Executive Officer","https://www.acronis.com/en/company/"], local: ["未確認","日本事業責任者","https://www.acronis.com/ja-jp/company/contacts/"],
  work: ["未確認","日本勤務","出社日数は未確認","Remote・Hybridの明記なし","雇用地、出社場所、柔軟性、出張は選考で確認"],
}, checkedAt);
acronis.sources.push({ id: "gbiz-headcount-acronis", label: "gBizINFO アクロニス・ジャパン株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=8010401078049", kind: "公的機関", scope: "日本法人・所在地・事業所被保険者数", checkedAt });
acronis.companyStats.japanHeadcount = { value: "44人", detail: "gBizINFOの事業所情報に掲載された厚生年金保険・健康保険の被保険者数。役員・制度対象外・業務委託等を含む総在籍人数ではない。", sourceId: "gbiz-headcount-acronis" };

const telnyx = buildDailyCompanyIntelligence({
  slug: "telnyx", name: "Telnyx", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/telnyx54", officialUrl: "https://telnyx.com/",
  customersUrl: "https://telnyx.com/customer-stories/blustream", financeUrl: "https://telnyx.com/resources/telnyx-rebrand-2023",
  problem: "音声、メッセージ、AI会話の通信経路を複数事業者へ依存し、遅延、品質、番号、法規制、障害対応を製品側で一貫して制御しにくい課題を解く。",
  origin: "2009年、David Casemが既存通信網の不透明な経路と高い卸売コストを見直し、ソフトウェアで制御できる通信基盤を米国で創業。",
  externalNeed: "会話AIが本番の顧客対応へ入るほど、企業はモデル精度だけでなく、音声遅延、通話到達率、番号規制、通信障害、個人情報を国ごとに運用する必要がある。",
  solution: "自社通信網とAPIで音声、メッセージ、番号、無線接続、Voice AIを提供し、通信経路からアプリ実装までを一つの運用へつなぐ。",
  selection: "API機能だけでなく、通信網の所有範囲、遅延と品質、国別規制、障害時の可視性、技術者が本番稼働まで入る支援で比較する。",
  growth: "公式サイトは1万4,000社超、45カ国超の認可、Voice AIの200ミリ秒未満の遅延を掲載。東京で最初の企業営業組織となる営業・技術職2件を募集。",
  role: "Founding Account ExecutiveとForward Deployed Engineerが対になり、日本の指名企業開拓、技術検証、本番導入、最初の国内事例と販売手順を作る。",
  organization: "日本法人・国内拠点・国内在籍人数は未確認。東京Hybridで最初のEnterprise Sales Podとなる2職種を公式募集。",
  career: "通信とAIの技術導入を、最初の企業顧客、国内事例、再利用できる販売・導入手順へ変える日本市場0→1の経験。",
  globalHeadcount: "非公開（現員の公式絶対数を確認できず）", japanPresence: "日本法人・国内拠点は未確認。東京Hybridで最初の企業営業組織2職種を募集", japanSince: "2026年に日本市場立ち上げ求人を確認",
  customer: { company: "BluStream", outcome: "電話番号移行を含む顧客導入期間を約6週間から約1週間へ短縮したと会社事例で紹介。日本事例ではない。" },
  facts: [["創業","2009年","David Casemが米国で創業。"],["利用企業","1万4,000社超","公式サイト掲載。契約形態の内訳は未確認。"],["認可地域","45カ国超","会社が通信サービスの認可を持つ国・地域。"],["Voice AI遅延","200ms未満","会社測定。条件と第三者監査は未確認。"],["日本体制","最初の2職種募集","法人・拠点・既存在籍人数は未確認。"],["日本求人","2件","Founding Account Executive、Forward Deployed Engineer。"]],
  products: [["Voice API","電話番号、発着信、経路制御をAPIで組み込む。","https://telnyx.com/products/voice-api"],["Messaging API","SMS・MMS等の送受信と到達管理を提供。","https://telnyx.com/products/sms-api"],["Voice AI","会話AIと自社通信網を接続し低遅延の音声応答を構築。","https://telnyx.com/products/voice-ai"]],
  competitors: "Twilio、Vonage、Sinch、通信事業者、各種通信API・内製",
  leader: ["David Casem","Founder and Chief Executive Officer","https://telnyx.com/nal-response-press-release-s3.pdf"], local: ["未確認","Founding Account Executive, Japan","https://job-boards.greenhouse.io/telnyx54/jobs/7992049003"],
  work: ["ハイブリッド","東京Hybrid","出社日数は未確認","完全リモートではない","雇用主体、オフィス、出張、APAC支援、初期採用計画は選考で確認"],
}, checkedAt);
telnyx.sources.push({ id: "gbiz-headcount-telnyx", label: "gBizINFO Telnyx法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt });
telnyx.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "Telnyxと結びつく国内法人・事業所を特定できず、日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-telnyx" };
if (telnyx.marketStatus.japanGrowth) {
  telnyx.marketStatus.japanGrowth.headline = "日本法人・国内拠点は未確認。東京で最初の企業営業組織2職種を募集";
  telnyx.marketStatus.japanGrowth.narrative = "日本法人、国内拠点、既存の国内人員は未確認。一方、公式求人は東京でFounding Account ExecutiveとForward Deployed Engineerを同時募集し、最初のEnterprise Sales Podを作ると明記している。";
  telnyx.marketStatus.japanGrowth.entryAssessment = {
    verdict: "進出可能性は高い。東京で最初の営業・技術2職種を同時募集しているが、法人、拠点、雇用主体、既存顧客、次の採用計画は未確認。",
    factSignals: [{ title: "最初の企業営業組織", body: "東京でFounding Account ExecutiveとForward Deployed Engineerを同時募集し、最初のEnterprise Sales Podを構築すると公式求人に明記。", sourceIds: ["telnyx-job"] }],
    hurdles: [{ title: "国内運営基盤は未確認", body: "日本法人、国内拠点、雇用主体、日本語の契約・技術支援、国内顧客事例を確認できない。", sourceIds: ["telnyx-job", "telnyx-company"] }],
    readinessConditions: [{ title: "成立条件1", body: "指名企業30〜40社から最初の本番利用と国内事例を作る。" }, { title: "成立条件2", body: "日本語の契約、番号規制、技術支援、障害対応を運営できる体制を整える。" }, { title: "成立条件3", body: "最初の営業・技術2人の案件量と継続利用が追加採用の固定費を上回る。" }],
    watchSignals: ["日本法人・国内拠点", "雇用主体とオフィス", "国内顧客事例", "日本語の契約・技術支援", "追加の営業・導入・顧客支援求人"],
  };
}

export const daily20260915IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { alteryx, acronis, telnyx };
