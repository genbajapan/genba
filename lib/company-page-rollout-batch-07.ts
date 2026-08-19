import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import {
  applyStandard,
  buildCompactPatch,
  rolloutResearchedAt as researchedAt,
} from "@/lib/company-page-rollout-standard-helpers";

function addSources(intelligence: CompanyPublicIntelligence, sources: CompanyPublicIntelligence["sources"]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function refreshSourceDates(intelligence: CompanyPublicIntelligence) {
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

function ensureMilestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) {
    intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
  }
}

function patchCensys(intelligence: CompanyPublicIntelligence) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.filter((item) => item.label !== "創業");
  ensureMilestone(intelligence, "2017", "Censys Inc.創業", "2013年のZMap、2015年のCensys Searchを経て2017年に会社設立。", "rollout-censys-about");
  ensureMilestone(intelligence, "2024", "日本GTM開始を確認", "公式沿革でJapanを含むGTM拡張を確認。", "rollout-censys-about");
  applyStandard(intelligence, buildCompactPatch({
    slug: "censys", leaderName: "Zakir Durumeric", leaderLabel: "Founder・CEO", leaderUrl: "https://censys.com/leadership", localName: "非公開", localLabel: "日本責任者", localUrl: "https://job-boards.greenhouse.io/censys",
    companyId: "rollout-censys-about", jobId: "rollout-censys-jobs-20260817", customersId: "censys-nos", externalId: "rollout-censys-ipa-threats", financeId: "rollout-censys-funding-2026",
    targets: ["CISO・サイバーリスク", "SOC・脅威インテリジェンス・インシデント対応", "攻撃対象領域・脆弱性管理", "クラウド・インターネット資産管理", "政府・重要インフラ・セキュリティベンダー"], competitors: "Shodan、SecurityTrails、GreyNoise、Microsoft Defender EASM、Palo Alto Cortex Xpanse、CrowdStrike Falcon Surface、CyCognito、Tenable、Qualys、Recorded Future、CMDB・scanner内製",
    feature: "Censys Platform、Internet Map・Search、Exposure Management、Adversary Investigations、Enrichment API・Assistant、SOC・SIEM・SOAR integrationsを提供する。", advantage: "3,500超port・100 protocolの継続観測、日次snapshotと約5年の履歴を基盤に、未知assetの発見からthreat infrastructure調査、API組込みまで同じInternet Intelligenceで支える。", benefit: "unknown asset、古いservice、threat infrastructureを早く発見し、asset ownership、triage、investigation、remediationの時間を短縮する。", evidence: "海外公式事例では欧州政府機関が一部作業を1週間から20分へ短縮、不動産会社が600超の未管理cloud assetを発見。日本企業名付き成果は確認できない。",
    marketVerdict: "結論：cloud・SaaS・委託先でattack surfaceが増えることは追い風。2026年上期はAPAC ARR +115%だが絶対ARR・売上・利益は非公開。日本はRemoteのAE・Senior SE 2件で、local customer proof・法人・officeは未確認。", marketParagraphs: ["企業のinternet-facing assetはcloud account、子会社、partner、開発teamごとに増え、CMDBや登録済みscannerの外にblind spotが残る。", "今後3〜5年はransomware、supply-chain、AI攻撃、重要インフラriskが追い風。一方、観測網羅性、attribution、false positive、既存SOC統合、remediation ownerまでの運用が購入条件になる。", "Genba分析：代表domain・cloud範囲で既存台帳と照合し、unknown asset、新規検知時間、調査時間、owner特定、false positiveをPoCで比較する。"],
    cultureHeadline: "現行日本求人はAEとSenior Solutions Engineerの2件で、いずれもJapan Remote。給与、福利厚生、出社頻度は非公開。採用後のAnn Arbor対面onboardingを記載。", classification: "フルリモート", displayLabel: "日本・リモート", officeDays: "出社指定なし", remoteOnly: "公式求人でRemote", flexibility: "国内居住を要件とする求人あり。対面onboarding・出張詳細はroleごとに確認",
    goodFor: ["internet dataをCISO・SOCの判断へ翻訳したい", "直販とchannelを同時に作りたい", "category creationとtechnical PoCを楽しめる"], cautionFor: ["国内の豊富なnamed customerを必須にする", "日本office・大規模local teamを求める", "観測dataだけでremediationが完了すると考える"],
    unresolved: [["売上・ARR", "APAC ARR等の成長率だけを公表。", "全社ARR、recognized revenue、gross margin、burn、retentionは？"], ["日本traction", "日本企業名付き成果と法人・officeを確認できない。", "日本有料顧客、ARR、reference、team、契約・support主体は？"], ["Data品質", "観測規模は顧客環境の精度を保証しない。", "coverage、freshness、attribution、false positive、owner mappingのbenchmarkは？"], ["Direct・Channel", "AEは直販とchannel、SEはtechnical winを担当。", "案件ownership、partner margin・credit、SE coverage、PoC conversionは？"], ["報酬・達成", "給与、OTE、quota、担当社数は非公開。", "base／variable、quota、ramp、達成者比率、new／expansion／partner creditは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高・ARR", value: "非公開", detail: "APAC ARR +115%等の成長率は絶対額・売上高ではない。", sourceIds: ["rollout-censys-h1-2026"] },
    { label: "収益性", value: "非公開", detail: "営業利益、純利益、EBITDA、FCF、margin、黒字・赤字は一次情報で確認できない。", sourceIds: ["rollout-censys-funding-2026"] },
    { label: "2026年資金調達", value: "7,000万米ドル（約110.3億円）", detail: "Series D equity 4,000万米ドルとdebt 3,000万米ドル。資金調達であり売上ではない。", sourceIds: ["rollout-censys-funding-2026", "rollout-b07-customs-usd-202608"] },
    { label: "事業固有規模", value: "30万超security practitioner／Fortune 500の50%超", detail: "利用・community指標。paid customer数・日本顧客数・売上ではない。", sourceIds: ["rollout-censys-funding-2026"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "13カ国に従業員との会社発表はあるが人数は非公開。", sourceId: "rollout-censys-h1-2026" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "AE・Senior SEの求人は人数・売上の証明ではない。", sourceId: "rollout-censys-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "確認不能", detail: "Japan Remote求人は確認できるが、日本法人・office住所は確認できない。", sourceId: "rollout-censys-jobs-20260817" };
  intelligence.companyStats.japanSince = { value: "2024年にJapan GTMを確認", detail: "日本法人設立年月ではない。", sourceId: "rollout-censys-about" };
  intelligence.customerProof = [
    { company: "NOS", products: "Censys Platform", outcome: "約200万IPを対象にunknown exposureとthreat investigationを支援。", implication: "海外vendor-selected事例で日本成果ではない。", sourceId: "censys-nos" },
    { company: "欧州政府機関", products: "Censys", outcome: "一部asset列挙作業を1週間から20分へ短縮。", implication: "会社事例で測定範囲・一般再現性は限定。", sourceId: "censys-gov" },
    { company: "国際不動産会社", products: "Censys ASM", outcome: "600超の未管理cloud asset、従来想定より80%多いonline assetを発見。", implication: "海外事例。日本顧客の定量成果は確認不能。", sourceId: "censys-realestate" },
  ];
  intelligence.roleLens = { salesMotion: "AEが500人以上のEnterprise・Upper Mid-Marketのnew・expansionとdirect・channelを持ち、Senior SEがdiscovery、demo、PoC、deployment、technical winを担う。", compensation: "2求人とも日本の給与・OTE金額は非公開。", quota: "quota、担当社数、ACV、cycle、attainment、PoC conversion、partner creditは非公開。", collaboration: "AE、SE、Threat Research、Product、CS、Marketing、distributor・reseller、顧客SOC・CISO・Cloudが連携する。" };
  addSources(intelligence, [
    { id: "rollout-censys-about", label: "Censys会社沿革", url: "https://censys.com/about-censys", kind: "企業公式", scope: "起源・設立・日本GTM", checkedAt: researchedAt },
    { id: "rollout-censys-funding-2026", label: "Censys 2026 strategic funding", url: "https://censys.com/newsroom/censys-raises-70-million-in-strategic-funding-to-expand-its-internet-intelligence-platform/", kind: "企業公式", scope: "資金調達・利用規模", checkedAt: researchedAt },
    { id: "rollout-censys-h1-2026", label: "Censys 2026年上期成長", url: "https://censys.com/blog/record-first-half-2026-growth/", kind: "企業公式", scope: "APAC ARR成長・partner・Japan presence", checkedAt: researchedAt },
    { id: "rollout-censys-jobs-20260817", label: "Censys現行日本求人", url: "https://job-boards.greenhouse.io/censys", kind: "企業公式", scope: "現行2求人・勤務地・要件", checkedAt: researchedAt },
    { id: "rollout-censys-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "日本のsecurity外部環境", checkedAt: researchedAt },
    { id: "rollout-b07-customs-usd-202608", label: "財務省税関 2026年8月16日〜22日公示レート", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchCloudflare(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2020.07", "日本法人を設立", "Cloudflare Japan K.K.を設立。", "rollout-cloudflare-jcb");
  applyStandard(intelligence, buildCompactPatch({
    slug: "cloudflare", leaderName: "Matthew Prince / Michelle Zatlyn", leaderLabel: "共同創業者・CEO／President", leaderUrl: "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm", localName: "Sayoko Matsumoto", localLabel: "Geo Vice President, Japan", localUrl: "https://www.cloudflare.com/resource/2026-cloudflare-security-signals-report/",
    companyId: "rollout-cloudflare-10k-2025", jobId: "rollout-cloudflare-jobs-20260817", customersId: "rollout-cloudflare-sansan", externalId: "rollout-cloudflare-ipa-threats", financeId: "rollout-cloudflare-q1-2026",
    targets: ["CIO・CISO・情報システム", "ネットワーク・セキュリティ", "アプリケーション・基盤開発", "開発者・AI基盤", "デジタルコマース・IT運用"], competitors: "Akamai、Fastly、AWS・Azure・Google Cloud、Zscaler、Palo Alto Prisma、Netskope、Cisco、F5、Imperva、Fortinet、Vercel、point products・既存vendor",
    feature: "Application Services、SASE・Zero Trust、Network Services、Email Security、Developer Platform・Workers・R2・D1・Workers AIをglobal network上で提供する。", advantage: "330超都市・125カ国の単一networkとcontrol planeへsecurity、connectivity、performance、computeを載せ、directとGSI・MSSP・resellerの両方で展開する。", benefit: "latency、attack block、availability、VPN ticket、origin負荷、vendor数、change lead time、TCOを改善する可能性がある。", evidence: "SansanはWAF運用cost推定90%減・origin負荷20%減、DeNAはVPN ticket解決を月400時間削減、SORACOMはdashboardを10秒から数msと公式事例で説明。",
    marketVerdict: "結論：DDoS、supply-chain、remote access、API・AI riskは追い風。Q1 2026売上6.398億米ドル（約1,008.1億円）・FCFプラスだがGAAP営業赤字。2026年5月に約1,100人削減も公表し、成長と組織再編を併記する。", marketParagraphs: ["customer application、employee access、branch、API、AI workloadがinternetへ広がる一方、CDN、WAF、VPN、DDoS、email、computeが別vendorとなり、policy・log・契約・incident ownerが分断する。", "今後3〜5年は重要serviceの可用性とsecurity統合が追い風。一方、既存vendor overlap、migration、data locality、support、product別economics、一社集中riskが選定条件になる。", "Genba分析：一application・user groupから既存vendorと比較し、latency、attack block、VPN ticket、origin、運用時間、TCOを測り、成果が出たlayerだけ段階拡張する。"],
    cultureHeadline: "現行日本関連5求人は全てHybrid。出社日数は非公開。Principled・Curious・TransparentとAI-native curiosityを掲げる一方、2026年5月に約1,100人の全社削減を発表。", classification: "ハイブリッド", displayLabel: "東京・ハイブリッド", officeDays: "非公開", remoteOnly: "該当しない", flexibility: "Support職は夜間・週末・祝日を含むrotational shifts。地域別福利厚生は個別確認",
    goodFor: ["Security・Network・Developerを横断したい", "named enterpriseとpartner motionを両方学びたい", "technical platformを経営KPIで売りたい"], cautionFor: ["単一point productだけを担当したい", "組織再編の不確実性を避けたい", "Hybrid勤務・support shiftが難しい"],
    unresolved: [["GAAP収益性", "FCFプラスだがGAAP営業赤字。", "GAAP黒字化、SBC、margin、sales efficiencyの計画は？"], ["組織再編", "2026年5月に約1,100人削減。", "Japanのcoverage、manager、SE・CS・Support、territoryへの影響は？"], ["Portfolio credit", "Application、SASE、Network、Developerを横断。", "product別quota・credit、land product、expansion owner、renewalは？"], ["Direct・Partner", "sales leadershipとpartner leadershipを同時採用。", "named account、GSI・MSSP ownership、channel conflict、delivery capacityは？"], ["報酬・達成", "全求人で給与・OTE・担当社数は非公開。", "base／variable、quota、ramp、達成者比率、equity、office dayは？"]],
  }));
  intelligence.facts = [
    { label: "Q1 2026売上高", value: "6億3,980万米ドル（約1,008.1億円）", detail: "GAAP売上。1ドル=157.56円の参照換算。", sourceIds: ["rollout-cloudflare-q1-2026", "rollout-b07-customs-usd-202608"] },
    { label: "GAAP営業損失・FCF", value: "6,200万米ドルの損失／8,410万米ドル（約97.7億円の損失／132.5億円）", detail: "FCF margin 13%。GAAP赤字とnon-GAAP・FCF黒字を混同しない。", sourceIds: ["rollout-cloudflare-q1-2026", "rollout-b07-customs-usd-202608"] },
    { label: "FY2025売上高", value: "21億6,790万米ドル（約3,415.7億円）", detail: "GAAP営業損失2億720万米ドル、FCF2億6,060万米ドル。", sourceIds: ["rollout-cloudflare-fy2025", "rollout-b07-customs-usd-202608"] },
    { label: "RPO・顧客", value: "RPO 24.96億米ドル（約3,932.7億円）／paying customer約33.2万", detail: "2025年末。RPOは契約残で売上・ARRではない。DBNR 120%、10万米ドル超顧客4,298社。", sourceIds: ["rollout-cloudflare-q4-transcript", "rollout-b07-customs-usd-202608"] },
  ];
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行5求人と全社削減から日本人数を推定しない。", sourceId: "rollout-cloudflare-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都中央区京橋2-2-1 京橋エドグラン26階", detail: "現行Privacy Policy。", sourceId: "rollout-cloudflare-privacy" };
  intelligence.companyStats.japanSince = { value: "2010年network／2020年7月法人", detail: "東京network開始と日本法人設立を分ける。", sourceId: "rollout-cloudflare-jcb" };
  intelligence.customerProof = [
    { company: "Sansan", products: "WAF・Application Services", outcome: "月約4,520万attackへ対応、WAF運用cost推定約90%減、origin負荷20%減。", implication: "vendor-selected事例で算定方法・一般再現性は限定。", sourceId: "rollout-cloudflare-sansan" },
    { company: "DeNA", products: "Cloudflare One", outcome: "VPN関連ticket解決時間を月400時間削減。", implication: "特定workflowの顧客自己申告。", sourceId: "rollout-cloudflare-dena" },
    { company: "SORACOM", products: "Application Services", outcome: "dashboard応答を10秒から数ms、task完了を2〜3倍高速化。", implication: "対象serviceの事例で全portfolioへ一般化しない。", sourceId: "rollout-cloudflare-soracom" },
  ];
  intelligence.roleLens = { salesMotion: "現行はEnterprise Sales Director、Named AE、Partner Sales Senior Director・Senior PAM、Tokyo選択可のPremium Support。direct・partner・production supportを同時採用。", compensation: "5求人とも給与・OTE金額は非公開。Supportのshift手当も非公開。", quota: "個人・team quota、担当account、attainment、product・partner credit、renewal、support KPIは非公開。", collaboration: "AE、Sales・Partner leaders、SE、Support、Product、Network・Security、GSI・MSSP・reseller、顧客CIO・CISO・Platformが連携する。" };
  addSources(intelligence, [
    { id: "rollout-cloudflare-q1-2026", label: "Cloudflare Q1 2026決算", url: "https://www.cloudflare.net/news/news-details/2026/Cloudflare-Announces-First-Quarter-2026-Financial-Results/default.aspx", kind: "企業公式", scope: "売上・GAAP損失・FCF", checkedAt: researchedAt },
    { id: "rollout-cloudflare-fy2025", label: "Cloudflare FY2025決算", url: "https://www.cloudflare.net/news/news-details/2026/Cloudflare-Announces-Fourth-Quarter-and-Fiscal-Year-2025-Financial-Results/default.aspx", kind: "企業公式", scope: "通期売上・GAAP損失・FCF", checkedAt: researchedAt },
    { id: "rollout-cloudflare-q4-transcript", label: "Cloudflare Q4 2025 transcript", url: "https://www.cloudflare.net/files/doc_financials/2025/q4/CORRECTED-TRANSCRIPT-Cloudflare-Inc-NET-US-Q4-2025-Earnings-Call-10-February-2026-5-00-PM-ET.pdf", kind: "法定開示", scope: "RPO・顧客・DBNR", checkedAt: researchedAt },
    { id: "rollout-cloudflare-10k-2025", label: "Cloudflare FY2025 Form 10-K", url: "https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm", kind: "法定開示", scope: "会社・財務・競争risk", checkedAt: researchedAt },
    { id: "rollout-cloudflare-jobs-20260817", label: "Cloudflare現行日本関連求人", url: "https://job-boards.greenhouse.io/cloudflare", kind: "企業公式", scope: "現行5求人・workstyle・role", checkedAt: researchedAt },
    { id: "rollout-cloudflare-jcb", label: "Cloudflare・JCB事例", url: "https://www.cloudflare.com/ja-jp/case-studies/jcb/", kind: "企業公式", scope: "日本法人設立時期", checkedAt: researchedAt },
    { id: "rollout-cloudflare-privacy", label: "Cloudflare Privacy Policy", url: "https://www.cloudflare.com/policies/privacy/", kind: "企業公式", scope: "日本office住所", checkedAt: researchedAt },
    { id: "rollout-cloudflare-sansan", label: "Cloudflare・Sansan事例", url: "https://www.cloudflare.com/ja-jp/case-studies/sansan/", kind: "企業公式", scope: "国内security・cost成果", checkedAt: researchedAt },
    { id: "rollout-cloudflare-dena", label: "Cloudflare・DeNA事例", url: "https://www.cloudflare.com/ja-jp/case-studies/dena/", kind: "企業公式", scope: "国内VPN工数成果", checkedAt: researchedAt },
    { id: "rollout-cloudflare-soracom", label: "Cloudflare・SORACOM事例", url: "https://www.cloudflare.com/ja-jp/case-studies/soracom/", kind: "企業公式", scope: "国内performance成果", checkedAt: researchedAt },
    { id: "rollout-cloudflare-layoff", label: "Cloudflare Building for the Future", url: "https://blog.cloudflare.com/ja-jp/building-for-the-future/", kind: "企業公式", scope: "2026年組織再編・人員削減", checkedAt: researchedAt },
    { id: "rollout-cloudflare-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "日本security外部環境", checkedAt: researchedAt },
    { id: "rollout-b07-customs-usd-202608", label: "財務省税関 2026年8月16日〜22日公示レート", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  if (intelligence.marketStatus.isPublic) intelligence.marketStatus.capitalMarketRead = {
    asOf: "Q1 2026 / 2026-08-17確認", metrics: [
      { label: "四半期売上", value: "6.398億米ドル（約1,008.1億円）", change: "前年同期比の詳細は公式release参照", interpretation: "FY2025の成長を継続。", sourceId: "rollout-cloudflare-q1-2026" },
      { label: "GAAP営業損失", value: "6,200万米ドル（約97.7億円）", change: "赤字", interpretation: "FCF 8,410万米ドルと定義を分ける。", sourceId: "rollout-cloudflare-q1-2026" },
      { label: "DBNR", value: "120%", change: "2025年末", interpretation: "既存cohortの拡張signal。", sourceId: "rollout-cloudflare-q4-transcript" },
    ],
    growthDrivers: [{ title: "大口化とportfolio拡張", evidence: "10万米ドル超顧客4,298社、RPO 24.96億米ドル（約3,932.7億円）。", japanMeaning: "日本のNamed Enterpriseとpartner-led expansionの再現性が焦点。", sourceIds: ["rollout-cloudflare-q4-transcript"] }],
    risks: [{ title: "GAAP赤字と組織再編", disclosedRisk: "Q1はGAAP営業赤字、2026年5月に約1,100人削減。", companyResponse: "AI-eraのproduct・go-to-marketへ組織を再配分。", genbaRead: "Japan coverage、role scope、support capacityを面接で確認する。", sourceIds: ["rollout-cloudflare-q1-2026", "rollout-cloudflare-layoff"] }],
    japanCommitment: { verdict: "継続投資を確認", summary: "日本法人・office、現行5求人、direct・partner leadership、国内定量事例を確認。", signals: [{ year: "2020", title: "日本法人", detail: "Cloudflare Japan K.K.を設立。", sourceIds: ["rollout-cloudflare-jcb"] }, { year: "2026", title: "Sales・Partner採用", detail: "leadershipを含む現行5求人。", sourceIds: ["rollout-cloudflare-jobs-20260817"] }], unknowns: ["日本売上・社員数", "quota・達成率", "組織再編後のcoverage"] },
    scenarios: [{ scenario: "基本", title: "大口・multi-product成長", body: "GAAP赤字を残しつつFCFとRPOを伸ばす。" }, { scenario: "上振れ", title: "Connectivity Cloud標準化", body: "Application・SASE・Developerを同一networkへ統合。" }, { scenario: "下振れ", title: "競合・再編friction", body: "point vendor・hyperscaler競争と組織再編が成長を圧迫。" }],
    sourceIds: ["rollout-cloudflare-q1-2026", "rollout-cloudflare-fy2025", "rollout-cloudflare-q4-transcript", "rollout-cloudflare-layoff"],
  };
  refreshSourceDates(intelligence);
}

function patchCognition(intelligence: CompanyPublicIntelligence) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.filter((item) => !(item.year === "2023" && item.label === "創業"));
  ensureMilestone(intelligence, "確認不能", "創業年は一次情報で確認不能", "公式Devin launchは2024年。外部資料の創業年を確定表示しない。", "rollout-cognition-devin-launch");
  ensureMilestone(intelligence, "2024", "Devinを公開", "2024年3月にAI software engineerとしてDevinを発表。", "rollout-cognition-devin-launch");
  ensureMilestone(intelligence, "2026.03", "日本法人を設立", "Cognition AI Japan合同会社が3月4日に法人番号指定。4月9日に日本法人設立と日本事業開始を発表。", "rollout-cognition-japan-entity");
  applyStandard(intelligence, buildCompactPatch({
    slug: "cognition",
    leaderName: "Scott Wu",
    leaderLabel: "CEO",
    leaderUrl: "https://dena.com/jp/news/5269/",
    localName: "正井 拓己",
    localLabel: "Japan President & GM",
    localUrl: "https://cognition.com/blog/launching-in-japan",
    companyId: "rollout-cognition-dpa",
    jobId: "rollout-cognition-jobs-20260817",
    customersId: "rollout-cognition-dena",
    externalId: "rollout-cognition-ipa-2026",
    financeId: "rollout-cognition-one-year",
    targets: ["CTO・CIO・開発責任者", "開発生産性・基盤開発", "CISO・アプリケーションセキュリティ", "DX・レガシー刷新", "SI・クラウド・公共パートナー"],
    competitors: "Anthropic Claude Code、OpenAI Codex、GitHub Copilot coding agent、Cursor、Gemini Code Assist・Jules、Amazon Q・Kiro、JetBrains AI、内製agent・SI",
    feature: "Devin Cloud、Devin Desktop、Review・Ask Devin・DeepWiki・CLI、Security Swarmを通じ、repositoryの理解から計画、実装、test、review、修正までをAI agentで支援する。",
    advantage: "isolated environmentで長時間taskをparallel実行し、Desktop・CLI・review・security・customer data planeとDeployed Engineer・partner deliveryを同じenterprise rolloutへまとめる。",
    benefit: "migration、test、maintenance、security remediationの完了taskを増やし、cycle time、review工数、backlog、cost per accepted taskを改善する可能性がある。",
    evidence: "DeNAは複数機能で業務効率2倍超、ちばぎんコンピューターサービスの2案件は想定工数・原価を57.8%／81.6%削減と発表。ただし後者はC-chatSupportと伴走支援を含む複合成果。",
    marketVerdict: "結論：DX人材不足とlegacy modernizationは追い風。2026年7月run-rate revenue 5億米ドル超（約810.8億円超）と急成長する一方、監査済み売上・ARR・利益ではなく、AI codeの品質・security・長期保守を同一taskで検証する必要がある。",
    marketParagraphs: [
      "企業はAI coding assistantを配布しても、seat・token・line数しか測れず、merge可能なtask、review、defect、backlog、business valueへつなげにくい。",
      "今後3〜5年はDX人材不足、legacy移行、security修正が追い風。一方、repo・credential・顧客dataをagentへ渡すほど権限、証跡、data boundary、human approval、長期保守が購入条件になる。",
      "Genba分析：migration、test、known vulnerability修正等のtask cohortをleast privilegeでpilotし、completion・merge率、cycle、review、rework、defect、security、costを競合と同条件で比較する。",
    ],
    cultureHeadline: "東京の現行7求人は全てFull-time・On-site。公式Careerと求人は高いurgency・autonomy・executionを強調するが、日本の勤務時間、PTO、福利厚生は非公開。",
    classification: "出社中心",
    displayLabel: "東京・オンサイト",
    officeDays: "日数は非公開",
    remoteOnly: "現行東京求人では確認できない",
    flexibility: "Partner Deployed EngineerはAPAC出張25〜50%。その他の出張・勤務時間は役割ごとに確認",
    goodFor: ["AI software engineeringのJapan市場を作りたい", "販売・deployment・partnerを横断したい", "developer productivityを受注後の成果まで測りたい"],
    cautionFor: ["成熟したrole境界と固定playbookを求める", "オンサイト勤務が難しい", "AI生成codeのreview・governanceを営業外と考える"],
    unresolved: [
      ["Run-rateの質", "5億米ドル超（約810.8億円超）は年率換算で売上高・ARRではない。", "認識売上、recurring比率、gross margin、retention、customer concentrationは？"],
      ["日本traction", "DeNA・みずほ証券等は確認できるが日本売上・顧客数は非公開。", "日本のpaid customer、ARR、active use、reference、pilot→production率は？"],
      ["Agent成果", "vendor・partner selected事例で複合施策を含む。", "accepted task、merge、review、defect、rollback、長期保守をどう測る？"],
      ["Delivery・data", "東京でDeployed・Support・Partner職を採用。Japan residencyは非公開。", "support SLA、data plane、incident、SI responsibility、production ownerは？"],
      ["報酬・達成", "給与、OTE、equity、quota、担当社数は非公開。", "base／variable、quota、ramp、達成者比率、new／activation／partner creditは？"],
    ],
  }));
  intelligence.facts = [
    { label: "Revenue run rate", value: "5億米ドル超（約810.8億円超）", detail: "2026年7月会社発表。一定時点の年率換算で、監査済み期間売上・annual revenue・ARRではない。", sourceIds: ["rollout-cognition-one-year", "rollout-b07-boj-usd-20260716"] },
    { label: "収益性", value: "非公開", detail: "営業利益、純利益、EBITDA、gross margin、OCF・FCF、黒字・赤字は一次情報で確認できない。", sourceIds: ["rollout-cognition-one-year"] },
    { label: "調達・評価額", value: "累計10億米ドル超／260億米ドル（約1,621.5億円超／約4.22兆円）", detail: "2026年Series D時点。資金調達・投資家評価であり売上・稼ぐ力ではない。", sourceIds: ["cognition-finance", "rollout-b07-boj-usd-20260716"] },
    { label: "組織・利用signal", value: "350人／enterprise usage 10倍超", detail: "350人は2026年7月会社発表。usageは2026年初からの会社指標で、顧客数・売上・品質ではない。", sourceIds: ["rollout-cognition-one-year", "cognition-finance"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "350人", detail: "2026年7月会社発表。", sourceId: "rollout-cognition-one-year" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "東京7求人とdedicated local teamは投資signalだが、現在人数ではない。", sourceId: "rollout-cognition-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都中央区銀座（登記本店）", detail: "Cognition AI Japan合同会社（法人番号8010003050587）の登記本店。会社発表の日本拠点は東京都千代田区有楽町。", sourceId: "rollout-cognition-japan-entity" };
  intelligence.companyStats.japanSince = { value: "2026年3月", detail: "3月4日に法人番号指定、4月9日に日本法人設立・日本事業開始を発表。", sourceId: "rollout-cognition-japan-launch" };
  intelligence.customerProof = [
    { company: "DeNA", products: "Devin", outcome: "複数のengineering機能で業務効率2倍超。全社導入では2,000人超が利用可能、40 team超が利用開始。", implication: "利用可能数はactive paid seats・ROIではなく、2倍超の母数・期間も非公開。", sourceId: "rollout-cognition-dena" },
    { company: "ちばぎんコンピューターサービス", products: "Devin＋C-chatSupport", outcome: "新規systemは4.0→1.5人月・原価57.8%減、VB.NET移行は12.5→2.0人月・原価81.6%減。", implication: "2 project限定で伴走支援との複合成果。品質・長期保守は非公開。", sourceId: "rollout-cognition-chibagin" },
    { company: "みずほ証券", products: "Devin", outcome: "ULS Consulting経由で大規模金融機関へ導入。", implication: "定量成果・scope・稼働時期は非公開。", sourceId: "cognition-company" },
  ];
  intelligence.roleLens = {
    salesMotion: "現行7件はAccount Director、Head・Director of Partnerships、Deployed Engineer 2職、AI Support、GTM Operations。source→close→activation→support→partner scaleを同時構築する。",
    compensation: "7求人とも日本の給与・OTE・bonus・equity金額は非公開。",
    quota: "quota、担当社数、ACV、cycle、attainment、pilot→production、partner-sourced credit、renewal ownershipは非公開。",
    collaboration: "Japan President、Sales、Deployed・Support Engineering、Partnerships、GTM Ops、Product、Security、SI・cloud partner、顧客Engineeringが連携する。",
  };
  intelligence.solutions = [
    { name: "Devin Cloud", valueProp: "repositoryを理解し、計画・実装・test・自己検証・PRまでをisolated VMで実行するAI software engineer。", url: "https://cognition.com/blog/introducing-devin", competitors: "Claude Code、OpenAI Codex、GitHub Copilot coding agent。", differentiation: "parallel・managed agentsと長時間taskのend-to-end実行。", retention: "accepted taskとproduction adoptionを増やし、継続usageへ接続。" },
    { name: "Devin Desktop", valueProp: "Agent Command Center、local・cloud agents、Spaces、ACP、IDE互換を提供する次世代desktop体験。", url: "https://cognition.com/blog/introducing-devin-desktop", competitors: "Cursor、VS Code＋Copilot、JetBrains AI。", differentiation: "interactive IDEとautonomous cloud agentsを同じcontextで運用。", retention: "daily developer workflow内の利用定着を支える。" },
    { name: "Review・Security・Enterprise", valueProp: "Review、Ask Devin、DeepWiki、Security Swarm、customer data plane、SSO・RBACを組み合わせる。", url: "https://cognition.com/legal/security", competitors: "AppSec tool、SI内製、AI coding suite。", differentiation: "生成・review・security・deployment・deliveryを同じplatformへ接続。", retention: "governanceとsecurityを満たしenterprise rolloutを拡張。" },
  ];
  addSources(intelligence, [
    { id: "rollout-cognition-one-year", label: "Cognition One Year of Building Together", url: "https://cognition.com/blog/one-year-of-building-together", kind: "企業公式", scope: "最新run-rate・組織規模・内部利用signal", checkedAt: researchedAt },
    { id: "rollout-cognition-devin-launch", label: "Cognition Devin発表", url: "https://cognition.com/blog/introducing-devin", kind: "企業公式", scope: "製品の成り立ち・機能", checkedAt: researchedAt },
    { id: "rollout-cognition-desktop", label: "Cognition Devin Desktop", url: "https://cognition.com/blog/introducing-devin-desktop", kind: "企業公式", scope: "現行desktop製品・agent orchestration", checkedAt: researchedAt },
    { id: "rollout-cognition-dpa", label: "Cognition Data Processing Addendum", url: "https://cognition.com/documents/Cognition-DPA.pdf", kind: "企業公式", scope: "法人名・本社住所・data processing", checkedAt: researchedAt },
    { id: "rollout-cognition-jobs-20260817", label: "Cognition Tokyo現行求人", url: "https://cognition.com/careers", kind: "企業公式", scope: "現行7求人・role・workstyle・culture", checkedAt: researchedAt },
    { id: "rollout-cognition-japan-entity", label: "Gビズインフォ Cognition AI Japan合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=8010003050587", kind: "公的機関", scope: "法人番号・法人名・登記本店", checkedAt: "2026-08-19" },
    { id: "rollout-cognition-japan-launch", label: "Cognition 日本法人設立・日本事業開始発表", url: "https://prtimes.jp/main/html/rd/p/000000001.000181315.html", kind: "企業公式", scope: "日本法人設立・日本拠点・Japan President・国内team", checkedAt: "2026-08-19" },
    { id: "rollout-cognition-dena", label: "DeNA・Cognition戦略提携・全社導入", url: "https://dena.com/jp/news/5269/", kind: "企業公式", scope: "国内導入成果・CEO", checkedAt: researchedAt },
    { id: "rollout-cognition-chibagin", label: "DeNA・ちばぎんコンピューターサービス成果", url: "https://dena.com/jp/news/5372/", kind: "企業公式", scope: "国内2案件の工数・原価成果", checkedAt: researchedAt },
    { id: "rollout-cognition-ipa-2026", label: "IPA DX動向2026", url: "https://www.ipa.go.jp/pressrelease/2026/press20260716.html", kind: "公的機関", scope: "AI導入と価値創出の外部環境", checkedAt: researchedAt },
    { id: "rollout-cognition-meti-legacy", label: "経産省 レガシーシステムモダン化委員会総括レポート", url: "https://www.meti.go.jp/press/2025/05/20250528003/20250528003.html", kind: "公的機関", scope: "legacy modernizationの外部要求", checkedAt: researchedAt },
    { id: "rollout-b07-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchCambly(intelligence: CompanyPublicIntelligence) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.filter((item) => !["創業", "Japan AE採用"].includes(item.label));
  ensureMilestone(intelligence, "2013", "創業", "Sameer ShariffとKevin Lawが創業。2014年にserviceを開始。", "rollout-cambly-about");
  ensureMilestone(intelligence, "確認不能", "日本向け法人service開始時期は確認不能", "日本語の法人serviceは確認できるが、進出・法人設立年月は一次情報で確定できない。", "cambly-org");
  ensureMilestone(intelligence, "2026", "APAC Sales Director採用", "上海をprimary、東京をsecondary locationとするAPAC Sales Directorを募集。", "rollout-cambly-jobs-20260817");
  applyStandard(intelligence, buildCompactPatch({
    slug: "cambly", leaderName: "Sameer Shariff", leaderLabel: "Co-founder・CEO", leaderUrl: "https://press.cambly.com/posts/cambly-the-video-chat-app-that-connects-english-learners-to-native-english-tutors-launches-cambly-groups", localName: "非公開", localLabel: "日本責任者", localUrl: "https://jobs.ashbyhq.com/Cambly",
    companyId: "rollout-cambly-about", jobId: "rollout-cambly-jobs-20260817", customersId: "cambly-org", externalId: "rollout-cambly-jetro-2026", financeId: "rollout-cambly-forbes-2022",
    targets: ["CHRO・人事・人材開発", "グローバル人材・海外赴任", "海外事業・営業・顧客支援", "大学・高校・教育機関", "官公庁・研修担当"], competitors: "Bizmates、レアジョブ、EF・Berlitz、PROGriT等coaching、Speak・ELSA等AI-only、VERSANT・PROGOS等assessment、社内研修・人講師",
    feature: "24時間の1対1・Group lesson、native tutor、録画・文字起こし、AI practice・feedback、CEFR準拠判定、法人dashboard、日本語onboarding・reportingを提供する。", advantage: "10,000人超のnative tutorと予約不要のhuman conversationを、AI反復、CEFR、管理・伴走へ接続し、個人学習と法人運用を同じprogramで扱う。", benefit: "英語を話す量・継続率を増やし、会議・赴任・顧客対応への実務移転と研修運営の可視化を支援する。", evidence: "日本公式は2,000超の企業・教育機関を掲載。瑞光は会話への抵抗感低下と自主学習増、明大中野は409名導入を紹介するが、定量outcomeと因果は限定的。",
    marketVerdict: "結論：海外business人材不足は追い風だが、研修予算は限られAI-only代替も強い。現行日本関連求人はAPAC Sales Director 1件のみで、日本法人・office・売上・現在の収益性は確認できない。", marketParagraphs: ["海外顧客・拠点との協働が増える一方、英語研修は契約seat、受講回数、満足度で終わり、会議・交渉・赴任で使えた変化を説明しにくい。", "今後3〜5年はglobal人材不足とAI練習の低価格化が同時進行する。HRはhuman lessonのincremental valueを利用率、CEFR、実務行動、renewalで示す必要がある。", "Genba分析：対象職種・scene・baselineを定め、human lesson＋AI反復をpilotし、activation、speaking時間、CEFR、manager評価、運営工数、renewal intentを比較する。"],
    cultureHeadline: "現行APAC Sales Directorは上海primary・東京secondaryのHybrid。日本専任team、出社日数、給与・福利厚生は非公開。公式valuesはempathy、impact、learning、empowerment、global perspective。", classification: "ハイブリッド", displayLabel: "上海・東京", officeDays: "非公開", remoteOnly: "現行求人はHybrid", flexibility: "東京はsecondary location。日本での雇用主体・勤務拠点を選考で確認",
    goodFor: ["APACの法人研修事業を率いたい", "humanとAIを成果設計で組み合わせたい", "SalesとB2B Marketing組織を作りたい"], cautionFor: ["日本専任territoryだけを求める", "現行の日本法人・officeを必須にする", "vendor claimをそのまま研修ROIとみなす"],
    unresolved: [["現在の財務", "2022年のrevenue幅・cash-flow-positive発言はhistorical。", "current revenue、ARR、profit、FCF、B2B mixは？"], ["日本体制", "東京は現行求人のsecondary location。", "雇用主体、日本法人、office、Japan team、reporting lineは？"], ["研修成果", "82%・30%・3カ月等は方法非公開のcompany claim。", "母数、対照、CEFR、実務移転、renewalへの寄与は？"], ["APAC scope", "日本・中国・韓国を統括するleadership role。", "国別revenue、team、quota、local support、travelは？"], ["報酬・達成", "給与、OTE、commission、equityは非公開。", "pay mix、quota、ramp、attainment、new・renewal creditは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高・ARR", value: "非公開", detail: "2022年取材のtens of millions of dollarsは幅表現・過去値でcurrent revenueではない。", sourceIds: ["rollout-cambly-forbes-2022"] },
    { label: "現在の収益性", value: "非公開", detail: "2022年時点の過去5年cash-flow-positive発言は現在の利益・FCFを証明しない。", sourceIds: ["rollout-cambly-forbes-2022"] },
    { label: "累計資金調達", value: "6,000万米ドル（約97.3億円）", detail: "会社発表。資金調達であり売上ではない。", sourceIds: ["rollout-cambly-funding", "rollout-b07-boj-usd-20260716"] },
    { label: "事業固有規模", value: "2,000超の企業・教育機関／10,000超tutor", detail: "会社表示。active paid customer・Japan revenueではない。", sourceIds: ["cambly-org"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "現行Careerの80+と2022年発表の200人が不整合で、current exact headcountは確定しない。", sourceId: "rollout-cambly-careers" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "Tokyo teamの過去言及と現行求人はあるが現在人数は非公開。", sourceId: "rollout-cambly-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "確認不能", detail: "東京は現行求人のsecondary location。法人・物理office住所は確認できない。", sourceId: "rollout-cambly-jobs-20260817" };
  intelligence.companyStats.japanSince = { value: "確認不能", detail: "日本語・法人serviceは確認できるが進出年月は一次情報で確定できない。", sourceId: "cambly-org" };
  intelligence.roleLens = { salesMotion: "APAC Sales Directorが日本・中国・韓国の売上計画、直販、AE・AM・B2B Marketing組織を担う。旧Japan AEは現行公式boardから外れた。", compensation: "給与・OTE・commission・equity金額は非公開。", quota: "APAC・国別quota、ACV、cycle、attainment、renewal・expansion creditは非公開。", collaboration: "Sales、Account Management、B2B Marketing、Product、Tutor operations、Customer Success、Finance・Legalと連携する。" };
  addSources(intelligence, [
    { id: "rollout-cambly-jobs-20260817", label: "Cambly現行公式求人", url: "https://jobs.ashbyhq.com/Cambly", kind: "企業公式", scope: "現行APAC Sales Director・勤務地・要件", checkedAt: researchedAt },
    { id: "rollout-cambly-about", label: "Cambly About", url: "https://try.cambly.com/jp-about", kind: "企業公式", scope: "founders・HQ・values", checkedAt: researchedAt },
    { id: "rollout-cambly-careers", label: "Cambly Careers", url: "https://jobs.cambly.com/", kind: "企業公式", scope: "組織表示・culture", checkedAt: researchedAt },
    { id: "rollout-cambly-funding", label: "Cambly leadership・funding発表", url: "https://press.cambly.com/posts/cambly-a-marketplace-to-support-english-learning-expands-leadership-team-with-five-new-key-hires", kind: "企業公式", scope: "累計資金調達・会社規模", checkedAt: researchedAt },
    { id: "rollout-cambly-forbes-2022", label: "Forbes Cambly CEO interview 2022", url: "https://www.forbes.com/sites/kenrickcai/2022/06/08/cambly-series-b-english-language-app-profitable/", kind: "外部集計", scope: "historical revenue幅・cash-flow status・創業年", checkedAt: researchedAt },
    { id: "rollout-cambly-jetro-2026", label: "JETRO 海外事業展開調査", url: "https://www.jetro.go.jp/biznews/2026/02/802af9145ed8cc83.html", kind: "公的機関", scope: "海外business人材不足", checkedAt: researchedAt },
    { id: "rollout-cambly-mhlw-training", label: "厚生労働省 能力開発基本調査", url: "https://www.mhlw.go.jp/stf/houdou/newpage_00202.html", kind: "公的機関", scope: "企業研修費・能力開発課題", checkedAt: researchedAt },
    { id: "rollout-b07-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchCatoNetworks(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2020.10", "日本法人を設立", "Cato Networks株式会社を設立し、日本市場の販売・partner体制を開始。", "rollout-cato-japan-launch");
  applyStandard(intelligence, buildCompactPatch({
    slug: "cato-networks", leaderName: "Shlomo Kramer", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.catonetworks.com/company/", localName: "田島 弘介", localLabel: "Japan Country Manager", localUrl: "https://www.iijglobal.co.jp/news/2026/press_20260311.html",
    companyId: "rollout-cato-company", jobId: "rollout-cato-jobs-20260817", customersId: "rollout-cato-canon", externalId: "rollout-cato-ipa-threats", financeId: "rollout-cato-careers",
    targets: ["CIO・CISO・情報システム", "ネットワーク・インフラ", "セキュリティ・SOC", "グローバルIT・クラウド", "パートナー・MSP・通信事業者"], competitors: "Palo Alto Prisma SASE、Zscaler、Netskope、Cisco、Fortinet、Versa、carrier・MPLS＋firewall・VPN・point products",
    feature: "Cato SASE PlatformはSD-WAN・private backbone・Neural Edge、FWaaS・SWG・ZTNA・CASB・DLP、XDR・EDR、DEM、AI Securityをsingle management・APIで統合する。", advantage: "global private backboneとsingle cloud architectureにnetwork・securityを収束し、modular adoptionとpartner deliveryで拠点・remote・cloudを段階移行できる。", benefit: "policy・visibility・障害切分け・更新を統合し、network performance、security response、運用人員、vendor・carrier TCOを改善する。", evidence: "Canon MJ groupは10社・約2万人を段階移行、Lionは29拠点・5,000 remote usersを数週間で展開。HIS・Topconもglobal・remote運用を紹介するがvendor-selected事例。",
    marketVerdict: "結論：cloud・remote・AIとransomware・supply-chain risk、人材不足は追い風。current ARR 4.15億米ドル超（約672.9億円）だがrecognized revenue・利益は非公開。日本10求人はinvestment signalで、single-vendor lock-inをPoCで反証したい。", marketParagraphs: ["拠点・cloud・remote・partner接続が増えると、MPLS、SD-WAN、firewall、VPN、SSEのpolicy・visibility・supportが分断する。", "今後3〜5年はransomware、supply-chain、AI利用と専門人材不足が同時に進み、少人数でglobal network・securityを説明・運用できるarchitectureが求められる。", "Genba分析：target拠点・user・appをinventoryし、data path、latency、policy、security coverage、incident、SLA、運用工数、3年TCO、rollbackを既存構成と比較する。"],
    cultureHeadline: "日本ではSales、Presales、CS、Supportの10求人を掲載。workstyle、給与、OTEは全件非公開。Careersはchallengeからの進化、内部登用、顧客・teamとの協働を強調。", classification: "未確認", displayLabel: "東京・日本", officeDays: "非公開", remoteOnly: "確認できない", flexibility: "Field and Remote sales experienceは経験要件で勤務形態ではない",
    goodFor: ["networkとsecurityを一つの経営caseにしたい", "直販・presales・CS・supportを横断したい", "global拠点とpartner ecosystemを扱いたい"], cautionFor: ["勤務形態の明示を必須にする", "既存best-of-breedを無条件で全置換したい", "single-vendor concentration riskを許容できない"],
    unresolved: [["ARRの質", "4.15億米ドル超（約672.9億円）はcompany-reported ARR。", "recognized revenue、gross margin、NRR、profit、FCFは？"], ["日本traction", "国内事例・法人・10求人は確認。", "Japan ARR、顧客数、pipeline、renewal、headcountは？"], ["統合risk", "single architectureは簡素化とconcentration riskの両面。", "PoP・backbone failure、rollback、data path、SLA、既存tool coexistenceは？"], ["Delivery", "CS・Support 5件を含む採用。", "Japan support hours、severity SLA、escalation、partner responsibilityは？"], ["報酬・達成", "全求人の給与、OTE、quotaは非公開。", "pay mix、quota、ramp、attainment、partner・renewal creditは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高", value: "非公開", detail: "current ARRは開示するがrecognized revenueではない。", sourceIds: ["rollout-cato-careers"] },
    { label: "収益性", value: "非公開", detail: "営業利益、純利益、EBITDA、FCF、margin、黒字・赤字は確認できない。", sourceIds: ["rollout-cato-careers"] },
    { label: "Current ARR", value: "4.15億米ドル超（約672.9億円）", detail: "2026年Careers表示、前年比+42%。run-rateで売上高ではない。", sourceIds: ["rollout-cato-careers", "rollout-b07-boj-usd-20260716"] },
    { label: "事業固有規模", value: "4,000超enterprise customer／1,500超employee", detail: "会社表示。Japan customer・headcountではない。", sourceIds: ["rollout-cato-careers"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "1,500人超", detail: "現行公式Careers表示。", sourceId: "rollout-cato-careers" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行10求人は採用signalで現在人数ではない。", sourceId: "rollout-cato-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都千代田区大手町1-6-1 大手町ビル SPACES大手町1F", detail: "公式contact。郵便番号は公式ページ側の表記揺れがあるため省略。", sourceId: "rollout-cato-contact" };
  intelligence.companyStats.japanSince = { value: "2020年10月", detail: "Cato Networks株式会社設立。", sourceId: "rollout-cato-japan-launch" };
  intelligence.customerProof = [
    { company: "キヤノンマーケティングジャパングループ", products: "Cato SASE Platform", outcome: "10社・約2万人を対象に既存構成を大きく変えず段階移行。", implication: "規模・移行方法は確認できるが、削減率・ROIは非公開。", sourceId: "rollout-cato-canon" },
    { company: "ライオン", products: "Cato SASE Platform", outcome: "29拠点と5,000 remote userへ数週間で展開。", implication: "管理cost削減は定性で、vendor-selected事例。", sourceId: "rollout-cato-lion" },
    { company: "エイチ・アイ・エス", products: "Cato SASE Platform", outcome: "66カ国・141都市・233店舗を統合し、COVID時のremote移行で事業影響なしと紹介。", implication: "顧客発言を含むvendor事例で、独立監査値ではない。", sourceId: "rollout-cato-his" },
    { company: "トプコン", products: "Cato SASE Platform", outcome: "約600人のremote accessを置換し、Chinaを含むperformance・管理を簡素化。", implication: "定量的なcost・performance値は非公開。", sourceId: "rollout-cato-topcon" },
  ];
  intelligence.roleLens = { salesMotion: "現行10件はRSD・RSM・SDR、Sales Engineer 2件、CSM 2件、Support 3件。pipelineからtechnical win、adoption・renewal、production supportまで日本で拡張する。", compensation: "10求人すべて日本の給与・OTE・commission・equity金額は非公開。", quota: "quota、担当社数、ACV、cycle、attainment、partner・renewal・upsell creditは非公開。", collaboration: "Sales、SE、CS、Support、Product、SOC、partner・carrier、CIO・CISO・Network teamが連携する。" };
  intelligence.solutions = [
    { name: "Cato SASE Platform", valueProp: "SD-WAN・private backboneとSSEをsingle cloud architectureへ統合。", url: "https://www.catonetworks.com/ja/use-cases/", competitors: "Palo Alto、Zscaler、Netskope、Cisco、Fortinet。", differentiation: "network・security・managementを単一architectureで運用。", retention: "拠点・user・cloudを同じpolicyへ広げrenewal・expansionを支える。" },
    { name: "XDR・AI Security・DEM", valueProp: "endpoint・network・AI利用・digital experienceのvisibilityとresponseを追加。", url: "https://www.catonetworks.com/ja/use-cases/", competitors: "EDR・XDR・DEM・AI security point tools。", differentiation: "SASE traffic・policy contextと同じplatformで相関。", retention: "追加use caseとsecurity operationsの定着へ接続。" },
    { name: "Modular Adoption", valueProp: "SD-WAN、SSE、UZTNA、AI Securityを段階導入し、既存環境とのcoexistenceを支援。", url: "https://www.catonetworks.com/ja/news/cato-introduces-modular-adoption-model-ai-native-sase-platform/", competitors: "full replacement、carrier managed SASE、best-of-breed。", differentiation: "single platformを段階移行できる設計。", retention: "初期scopeから段階的なplatform expansionを可能にする。" },
  ];
  addSources(intelligence, [
    { id: "rollout-cato-company", label: "Cato Networks Company", url: "https://www.catonetworks.com/company/", kind: "企業公式", scope: "創業・leadership・会社概要", checkedAt: researchedAt },
    { id: "rollout-cato-careers", label: "Cato Networks Careers", url: "https://www.catonetworks.com/careers/", kind: "企業公式", scope: "current ARR・顧客・従業員・culture", checkedAt: researchedAt },
    { id: "rollout-cato-jobs-20260817", label: "Cato Networks現行求人", url: "https://boards-api.greenhouse.io/v1/boards/catonetworks/jobs?content=true", kind: "企業公式", scope: "日本10求人・職務・要件", checkedAt: researchedAt },
    { id: "rollout-cato-japan-launch", label: "Cato Networks日本法人設立", url: "https://www.catonetworks.com/ja/news/sase-press-release/", kind: "企業公式", scope: "日本法人・設立・責任者", checkedAt: researchedAt },
    { id: "rollout-cato-contact", label: "Cato Networks Japan Contact", url: "https://www.catonetworks.com/ja/contact-us/", kind: "企業公式", scope: "現行日本office住所", checkedAt: researchedAt },
    { id: "rollout-cato-canon", label: "Cato・キヤノンMJ事例", url: "https://www.catonetworks.com/ja/customers/canon-smooth-sase-migration-for-20000-users/", kind: "企業公式", scope: "国内導入規模・移行", checkedAt: researchedAt },
    { id: "rollout-cato-lion", label: "Cato・ライオン事例", url: "https://www.catonetworks.com/ja/customers/lion-adopts-cato/", kind: "企業公式", scope: "国内拠点・remote導入", checkedAt: researchedAt },
    { id: "rollout-cato-his", label: "Cato・HIS事例", url: "https://www.catonetworks.com/customers/his-group-simplifies-and-strengthens-global-wan-security-and-connectivity-with-cato/", kind: "企業公式", scope: "global network・remote成果", checkedAt: researchedAt },
    { id: "rollout-cato-topcon", label: "Cato・トプコン事例", url: "https://www.catonetworks.com/ja/customers/topcon-achieves-a-fast-secure-global-wan-with-cato/", kind: "企業公式", scope: "remote access・global運用", checkedAt: researchedAt },
    { id: "rollout-cato-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply-chain・AI・remote risk", checkedAt: researchedAt },
    { id: "rollout-cato-meti-cyber", label: "経産省 サイバーセキュリティ経営ガイドラインv3.0", url: "https://www.meti.go.jp/policy/netsecurity/downloadfiles/guide3.0.pdf", kind: "公的機関", scope: "経営・supply-chain security要求", checkedAt: researchedAt },
    { id: "rollout-b07-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchSeven(records: Record<string, CompanyPublicIntelligence>) {
  if (records.cambly) patchCambly(records.cambly);
  if (records["cato-networks"]) patchCatoNetworks(records["cato-networks"]);
  if (records.censys) patchCensys(records.censys);
  if (records.cloudflare) patchCloudflare(records.cloudflare);
  if (records.cognition) patchCognition(records.cognition);
}
