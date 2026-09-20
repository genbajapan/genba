import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-21";

const bluecat = buildDailyCompanyIntelligence({
  slug: "bluecat", name: "BlueCat", jobConfirmed: true,
  jobUrl: "https://jobs.lever.co/bluecatnetworks/8a67af9e-b75e-4698-b301-d7a0dc0aaba3", officialUrl: "https://bluecatnetworks.com/about/",
  customersUrl: "https://bluecatnetworks.com/ja/%E3%81%AA%E3%81%9Cbluecat%E3%81%AA%E3%81%AE%E3%81%8B%EF%BC%9F/", financeUrl: "https://bluecatnetworks.com/customer-success/",
  problem: "クラウド、拠点、端末が増えるほどDNS・DHCP・IPアドレス情報が分散し、障害原因の特定、設定変更、セキュリティ統制が遅くなる課題を解く。",
  origin: "創業者Michael Hyatt氏とRichard Hyatt氏が、以前の会社で必要だったDNSサーバーに満足できず自作したことから、2001年に創業した。",
  externalNeed: "企業ネットワークがクラウド、SaaS、拠点、端末へ広がり、DNSとIPアドレス情報を障害対応だけでなくセキュリティと自動化の共通基盤として管理する必要がある。",
  solution: "DNS、DHCP、IPアドレス管理を中心に、ネットワークの可視化、名前解決の保護、変更自動化、障害切り分けを一つの運用基盤へまとめる。",
  selection: "DDIの機能数だけでなく、クラウド・既存環境との統合、可視化、変更自動化、障害対応、国内技術支援まで含めて比較する。",
  growth: "会社公式は約1,000社の大手企業での利用を説明。日本法人の公的被保険者数は8人で、日本オフィスのSenior Sales Managerを募集している。",
  role: "Senior Sales Managerが日本の主要顧客と新規顧客を担当し、国内技術チームと案件発掘、提案、交渉、受注、予測、パートナー関係を担う。",
  organization: "BlueCat Japan KK・東京。gBizINFOの事業所被保険者数8人。日本オフィスの技術チームとの連携を求人で明示。",
  career: "小規模な日本組織で、大手企業のネットワーク運用課題を技術チーム・パートナーと解き、DDIからセキュリティ・自動化へ提案を広げる経験。",
  globalHeadcount: "400人超（2021年の会社公式記事。現員は変動あり）", japanPresence: "BlueCat Japan KK・東京。gBizINFOの事業所被保険者数8人", japanSince: "2013年に日本法人登記を確認",
  customer: { company: "Sony", outcome: "日本向け公式ページで信頼する顧客として掲載。導入範囲と定量成果は同ページで未公開。" },
  facts: [["創業","2001年","自社で必要だったDNSサーバーの開発を起点に創業。"],["顧客","約1,000社","大手企業を中心に会社公式が説明。"],["従業員","400人超","2021年の会社公式記事。"],["国内規模","8人","gBizINFO事業所被保険者数。"],["国内技術体制","あり","日本オフィスの技術チームを求人で明示。"],["日本求人","1件","Senior Sales Manager。"]],
  products: [["BlueCat Integrity","DNS、DHCP、IPアドレス管理を企業全体で統合。","https://bluecatnetworks.com/products/integrity/"],["BlueCat Edge","DNSを使って脅威の可視化と制御を支援。","https://bluecatnetworks.com/products/edge/"],["Infrastructure Assurance","ネットワーク構成と経路を可視化し障害切り分けを支援。","https://bluecatnetworks.com/products/infrastructure-assurance/"]],
  competitors: "Infoblox、EfficientIP、Microsoft系DNS・DHCP、各種ネットワーク運用ツール",
  leader: ["Stephen Devito","Chief Executive Officer","https://bluecatnetworks.com/about/"], local: ["未確認","日本事業責任者","https://bluecatnetworks.com/contact-us/"],
  work: ["ハイブリッド","日本オフィス勤務","出社日数は未確認","完全リモートの明記なし","勤務条件の詳細は面接確認"],
}, checkedAt);
bluecat.sources.push(
  { id: "bluecat-origin", label: "BlueCat 20-year history", url: "https://bluecatnetworks.com/blog/in-their-own-words-cats-reflect-on-20-years-of-bluecat/", kind: "企業公式", scope: "創業の経緯・従業員・顧客", checkedAt },
  { id: "gbiz-headcount-bluecat", label: "gBizINFO BlueCat Japan KK", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=4010001155656", kind: "公的機関", scope: "日本法人・事業所被保険者数", checkedAt },
);
bluecat.companyStats.japanHeadcount = { value: "8人", detail: "gBizINFOの事業所情報に掲載された厚生年金保険・健康保険の被保険者数。総在籍人数とは一致しない可能性がある。", sourceId: "gbiz-headcount-bluecat" };

const proofpoint = buildDailyCompanyIntelligence({
  slug: "proofpoint", name: "Proofpoint", jobConfirmed: true,
  jobUrl: "https://proofpoint.wd5.myworkdayjobs.com/en-US/ProofpointCareers/job/Business-Development-Representative_R13339", officialUrl: "https://www.proofpoint.com/jp/company/about",
  customersUrl: "https://www.proofpoint.com/jp/customer-stories/nttdatagroup", financeUrl: "https://www.proofpoint.com/us/company/about",
  problem: "攻撃者が人の判断と通信経路を狙い、生成AIで社内データが新しい経路へ流れるなか、メール、クラウド、端末、AIエージェントを横断して守れない課題を解く。",
  origin: "NetscapeでCTOを務めたEric Hahn氏が2002年に創業し、企業メールを入口にした脅威から人と情報を守る事業を広げた。",
  externalNeed: "メール起点の攻撃に加え、生成AIとAIエージェントが企業データへ触れる経路が増え、人・データ・機械の通信を横断して統制する必要がある。",
  solution: "人が使うメールと共同作業、組織内のデータ移動、内部脅威を分析し、攻撃防止、調査、データ損失防止、AI利用の統制を支援する。",
  selection: "単一のメール防御ではなく、人とデータの行動文脈、既存Microsoft環境との接続、調査、データ損失防止、AI統制を一体で扱えるかで比較する。",
  growth: "会社公式は5,000人超、200万超の顧客を説明。日本は東京・大阪の拠点と公的被保険者数64人を確認し、BDRとSenior Sales Engineerを募集している。",
  role: "BDRが日本市場の対象企業を商談化し、Senior Sales Engineerが大手企業の課題整理、設計、デモ、実証、技術評価を担う。",
  organization: "日本プルーフポイント株式会社。東京本社と大阪支社。gBizINFOの事業所被保険者数64人。",
  career: "人・メール・データ・AIのリスクを大手企業の業務と既存環境へ翻訳し、商談創出または技術的な選定を前進させる経験。",
  globalHeadcount: "5,000人超（会社公式）", japanPresence: "日本プルーフポイント株式会社・東京本社／大阪支社。gBizINFOの事業所被保険者数64人", japanSince: "2005年に日本法人登記を確認",
  customer: { company: "NTT DATA Group", outcome: "1日650万通規模のメールを扱う環境で、グループ共通のメールセキュリティ強化に採用したと公式事例で説明。" },
  facts: [["創業","2002年","Eric Hahn氏が米国で創業。"],["従業員","5,000人超","会社公式。"],["顧客","200万超","会社公式。"],["国内規模","64人","gBizINFO事業所被保険者数。"],["国内拠点","東京・大阪","会社公式。"],["日本求人","2件","BDR、Senior Sales Engineer。"]],
  products: [["Threat Protection","メールと共同作業を狙う脅威を検知・防御。","https://www.proofpoint.com/jp/solutions/email-protection"],["Data Security","データの所在、移動、損失、内部脅威を管理。","https://www.proofpoint.com/jp/solutions/data-security"],["AI Data Governance","生成AI・AIエージェントが触れる企業データの可視化と統制を支援。","https://www.proofpoint.com/us/solutions/ai-data-governance"]],
  competitors: "Microsoft、Mimecast、Abnormal AI、Palo Alto Networks、Forcepoint、Netskope",
  leader: ["Sumit Dhawan","Chief Executive Officer","https://www.proofpoint.com/us/company/leadership"], local: ["Ken Nomura","Vice President, Japan","https://www.proofpoint.com/jp/newsroom/press-releases/20251201-New-Japan-Vice-President-Ken-Nomura"],
  work: ["未確認","東京勤務","出社日数は未確認","完全リモートの明記なし","勤務条件の詳細は職種別に面接確認"],
}, checkedAt);
proofpoint.sources.push(
  { id: "proofpoint-japan-leader", label: "Proofpoint Japan Vice President appointment", url: "https://www.proofpoint.com/jp/newsroom/press-releases/20251201-New-Japan-Vice-President-Ken-Nomura", kind: "企業公式", scope: "日本責任者", checkedAt },
  { id: "proofpoint-se-job", label: "Senior Sales Engineer - Tokyo", url: "https://proofpoint.wd5.myworkdayjobs.com/en-US/ProofpointCareers/job/Senior-Sales-Engineer---Tokyo_R13892", kind: "企業公式", scope: "日本の技術営業採用", checkedAt },
  { id: "gbiz-headcount-proofpoint", label: "gBizINFO 日本プルーフポイント株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=2010001092612", kind: "公的機関", scope: "日本法人・事業所被保険者数", checkedAt },
);
proofpoint.companyStats.japanHeadcount = { value: "64人", detail: "gBizINFOの事業所情報に掲載された厚生年金保険・健康保険の被保険者数。総在籍人数とは一致しない可能性がある。", sourceId: "gbiz-headcount-proofpoint" };

const sonatype = buildDailyCompanyIntelligence({
  slug: "sonatype", name: "Sonatype", jobConfirmed: false,
  jobUrl: "https://jobs.lever.co/sonatype/4694e03a-5c74-4e8c-9725-bd4c81db4240", officialUrl: "https://www.sonatype.com/company",
  customersUrl: "https://www.sonatype.com/customer-stories", financeUrl: "https://www.sonatype.com/company",
  problem: "ソフトウェアの大半を占めるオープンソース部品とAI生成コードの依存関係を把握できず、脆弱性、ライセンス、悪意ある部品が開発工程へ入り込む課題を解く。",
  origin: "Apache Mavenの中核開発者たちが2001年に創業し、開発者が依存部品を扱う現場からリポジトリ管理とソフトウェアサプライチェーン統制へ製品を広げた。",
  externalNeed: "AI支援開発でコードと依存部品の追加速度が上がる一方、規制と顧客監査はSBOMと供給網リスクの説明を求めている。",
  solution: "ソフトウェア部品の保管、脆弱性・ライセンス評価、危険な部品の遮断、SBOM管理、開発者への修正案提示を開発工程へ組み込む。",
  selection: "検出件数だけでなく、部品情報の精度、Maven Centralの知見、開発工程への統合、誤検知、修正速度、監査証跡で比較する。",
  growth: "会社公式は2,000超の組織とFortune 100の70%での利用を説明。シンガポールで日本・東南アジア担当営業を募集するが、日本法人・国内拠点・日本勤務求人は確認できない。",
  role: "シンガポールのEnterprise Account Executiveが日本、タイ、ベトナム、フィリピンの大手企業を新規開拓し、提案、契約、既存拡大を担う。",
  organization: "APAC拠点はシンガポール。日本法人、国内拠点、日本常駐の専任組織は未確認。",
  career: "日本と東南アジアの4市場で、DevSecOpsとOSS統制を経営課題へ翻訳し、新しい市場の需要を検証する越境営業経験。",
  globalHeadcount: "501〜1,000人規模の公開集計（現員は変動あり）", japanPresence: "日本法人・国内拠点・日本勤務求人は未確認。シンガポールで日本担当営業を募集", japanSince: "未進出",
  customer: { company: "野村", outcome: "公式顧客一覧でスキャン量630%増を掲載。期間と詳細な導入範囲は一覧ページで未公開。" },
  facts: [["創業","2001年","Apache Mavenの中核開発者を起点に創業。"],["顧客","2,000超の組織","会社公式。"],["Fortune 100","70%","会社公式。"],["APAC拠点","シンガポール","会社公式。"],["日本法人","未確認","国内法人・拠点を確認できず。"],["日本担当求人","1件","シンガポール勤務のJapan & SEA営業。"]],
  products: [["Nexus Repository","ソフトウェア部品を保管・配布する企業向けリポジトリ。","https://www.sonatype.com/products/sonatype-nexus-repository"],["Lifecycle・Firewall","依存部品を評価し、危険な部品の流入と利用を制御。","https://www.sonatype.com/products/sonatype-lifecycle"],["SBOM Manager・Guide","SBOMの管理と開発者向けの修正支援を提供。","https://www.sonatype.com/products/sonatype-sbom-manager"]],
  competitors: "JFrog、Snyk、GitHub、Mend.io、Black Duck、各種SBOM・SCA製品",
  leader: ["Alex Berry","Chief Executive Officer","https://www.sonatype.com/company"], local: ["未確認","日本事業責任者","https://www.sonatype.com/company"],
  work: ["ハイブリッド","シンガポール勤務","出社日数は未確認","日本からの完全リモート不可","日本勤務ではなく、シンガポールで就労資格が必要"],
  preEntry: {
    verdict: "進出可能性は中。日本語を必須とする日本・東南アジア担当営業を採用しているが、日本法人、国内拠点、日本勤務の販売・技術支援は未確認。",
    signal: "シンガポールでEnterprise Account Executive, Japan & SEAを募集し、日本語、日本市場、大手企業の新規開拓を明示。",
    hurdle: "日本法人、国内拠点、日本勤務求人、日本語の契約・請求・技術支援体制を確認できない。",
    conditions: ["シンガポールから日本企業の有償需要と更新・拡大を再現する。", "日本語の販売、契約、導入・障害支援を安定して提供する。", "国内案件が日本常駐組織の固定費を支える。", "日本企業の公開事例と販売・技術提携先を増やす。"],
    watches: ["Japan・Tokyo求人", "日本法人・国内拠点", "日本語製品・契約・支援", "国内顧客事例", "日本専任営業・技術職"],
  },
}, checkedAt);
sonatype.sources.push({ id: "sonatype-japan-sea-job", label: "Enterprise Account Executive, Japan & SEA", url: "https://jobs.lever.co/sonatype/4694e03a-5c74-4e8c-9725-bd4c81db4240", kind: "企業公式", scope: "日本担当・勤務地・言語・対象市場", checkedAt });
sonatype.companyStats.japanHeadcount = { value: "対象法人未確認", detail: "会社公式の拠点一覧で日本法人・国内拠点を確認できず、日本での想定人数を0人とは扱わない。", sourceId: "sonatype-company" };

export const daily20260921IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { bluecat, proofpoint, sonatype };
