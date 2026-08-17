import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch } from "@/lib/company-page-rollout-standard-helpers";

function patchServiceNow(intelligence: CompanyPublicIntelligence) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === "日本法人設立")) {
    intelligence.marketStatus.milestones.push({ year: "2013", label: "日本法人設立", detail: "ServiceNow Japanを設立し、東京・大阪で事業を展開。", sourceId: "servicenow-company" });
  }
  applyStandard(intelligence, buildCompactPatch({
    slug: "servicenow",
    leaderName: "Bill McDermott",
    leaderLabel: "会長・CEO",
    leaderUrl: "https://www.servicenow.com/company/leadership.html",
    localName: "鈴木 正敏",
    localLabel: "ServiceNow Japan 代表取締役社長",
    localUrl: "https://www.servicenow.com/jp/company/media/press-room/servicenow-japan-new-president.html",
    companyId: "servicenow-company",
    jobId: "servicenow-job",
    customersId: "servicenow-customers",
    externalId: "servicenow-external",
    financeId: "servicenow-finance",
    targets: ["最高情報責任者・最高デジタル責任者", "IT運用・セキュリティ・業務基盤", "人事・従業員体験", "顧客対応・営業・現場業務", "製造・通信・金融・公共の業務責任者"],
    heroSummary: "大企業では申請、承認、顧客対応、IT運用が部門別システムとメールに分かれ、AIを追加しても仕事の流れがつながらない。ServiceNowは共通データ、業務ワークフロー、AIエージェント、人の承認を一つの基盤で動かし、待ち時間、手作業、運用負荷、顧客・従業員体験を改善する。",
    competitors: "Microsoft、Salesforce、SAP、Oracle、Atlassian、BMC、個別ITSM・BPM、内製ワークフロー",
    feature: "IT、人事、顧客対応、営業、製造などに散らばる申請・判断・実行を、共通データ、ワークフロー、AIエージェント、人の承認でつなぐ。",
    advantage: "ITSMで築いた大企業の業務基盤を起点に、部門横断のデータモデル、権限、監査、パートナー導入を共通化できる。",
    benefit: "処理時間、引継ぎ、手入力、問い合わせ、障害復旧、従業員・顧客体験を業務単位で測り、AI投資を実行結果へ結びつけられる可能性がある。",
    evidence: "資生堂はITサービスの60%集約と人事業務月40時間削減を公表。国内顧客事例は会社選定であり、独立監査された全社共通効果ではない。",
    marketVerdict: "結論：売上成長、AI ACV 10億米ドル超（約1,575.6億円）、成熟した国内組織、26対象求人は強い。一方、日本単体の売上・達成率は非公開で、役割別のterritoryと成果責任を見極める必要がある。",
    marketParagraphs: [
      "大企業ではlegacy、SaaS乱立、DX人材不足、生成AIの業務組込みが同時に進み、権限・承認・記録を保った部門横断の実行基盤が必要になる。",
      "ServiceNowはIT部門のticket管理から、人事、顧客対応、営業、製造、AI agentへ広がり、既存systemを置換するよりsystem間の仕事を動かすplatformとして予算範囲を拡張している。",
      "Genba分析：優先workflowでcycle time、handoff、manual hours、self-service、case deflection、adoption、AI completionをbaseline比較し、platform licenseとintegrationを含む3年TCOで選定する。",
    ],
    cultureHeadline: "Customer focus、速度、学習、team executionを重視する成熟GTM。日本の26対象求人は職種ごとに勤務地・勤務条件を確認する。",
    classification: "未確認",
    displayLabel: "東京・大阪／職種別条件",
    officeDays: "個別求人で固定日数の明記なし",
    remoteOnly: "一律のRemote条件は確認できない",
    flexibility: "顧客・team・roleにより異なるため面接で確認",
    goodFor: ["大企業の複数部門を動かしたい", "業務成果とAIを同時に売りたい", "営業・技術・導入・CSの専門性を深めたい"],
    cautionFor: ["単一機能の短期販売だけを好む", "役割境界が固定された小規模案件を望む", "日本のquota・達成率開示を必須にする"],
    unresolved: [
      ["担当市場", "26職種でsegment・industry・lifecycleを分業。", "担当territory、既存顧客、新規・拡張比率、過去4四半期のquota達成者比率は？"],
      ["報酬", "日本向け数値報酬は非公開。職種別市場benchmarkから仮説化。", "base、OTE、pay mix、ramp、accelerator、equity、credit ruleは？"],
      ["営業実行", "AE・専門seller・SC・Architect・Partner・CSを配置。", "平均ACV、sales cycle、pipeline source、SE比率、partner寄与、主な失注理由は？"],
      ["顧客成果", "国内定量事例はあるが日本全体の継続率は非公開。", "time-to-value、adoption、renewal、expansion、production化を誰がどのKPIで持つ？"],
      ["キャリア", "成熟組織で職種ごとの専門性を積める。", "直近24カ月の職種別昇進・異動・離職と、次levelへ進んだ成果指標は？"],
    ],
  }));

  if (intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.capitalMarketRead = {
      asOf: "Q2 2026（2026-08-17確認）",
      metrics: [
        { label: "売上", value: "39.87億米ドル（約6,282億円）", change: "+24%", interpretation: "subscriptionとAI・workflow拡張が成長。", sourceId: "servicenow-finance" },
        { label: "稼ぐ力", value: "GAAP営業利益1.62億米ドル（約255億円）", change: "FCF 6.34億米ドル（約999億円）", interpretation: "GAAP利益とcash創出を分けて確認。", sourceId: "servicenow-finance" },
      ],
      growthDrivers: [
        { title: "AIとplatform拡張", evidence: "ServiceNow AIのACVが10億米ドル（約1,575.6億円）を突破。RPOは290億米ドル（約4兆5,692億円）。", japanMeaning: "日本でもindustry、CRM、architecture、CSを含む26対象求人を確認。", sourceIds: ["servicenow-finance", "servicenow-job"] },
      ],
      risks: [
        { title: "大型導入・競争・価値実現", disclosedRisk: "Microsoft、Salesforce、SAP、Oracle、個別ITSM・内製と予算・platform主導権を争う。", companyResponse: "共通data modelとAI workflowを複数部門へ展開。", genbaRead: "契約規模よりproduction化、adoption、業務KPI、3年TCOを検証する。", sourceIds: ["servicenow-company", "servicenow-finance"] },
      ],
      japanCommitment: {
        verdict: "2013年の日本法人設立、東京・大阪、国内顧客、26対象求人を確認",
        summary: "投資の厚さは確認できるが、日本売上、ARR、顧客数、team別達成率は非公開。",
        signals: [{ year: "2026", title: "26対象求人", detail: "Sales、BDR、Partner、Presales、Architecture、CS、Deal Operationsを公式確認。", sourceIds: ["servicenow-job"] }],
        unknowns: ["日本売上・ARR・顧客数", "職種別quota・達成率・ramp", "team別headcount・昇進・離職"],
      },
      scenarios: [
        { scenario: "基本", title: "部門横断workflowとAI拡張", body: "既存顧客で複数workflowとAI agentのadoptionが進む。" },
        { scenario: "上振れ", title: "AI operating layer化", body: "部門別AIをつなぐ権限・data・execution基盤として標準化する。" },
        { scenario: "下振れ", title: "bundle・導入長期化", body: "suite競争、platform cost、partner capacity、change managementで価値実現が遅れる。" },
      ],
      sourceIds: ["servicenow-finance", "servicenow-company", "servicenow-job", "servicenow-customers"],
    };
  }
}

function patchToolsForHumanity(intelligence: CompanyPublicIntelligence) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === "日本で利用開始")) {
    intelligence.marketStatus.milestones.push({ year: "2025", label: "日本で利用開始", detail: "Tinder JapanでWorld IDによるproof of human・年齢確認を開始。", sourceId: "tools-for-humanity-customers" });
  }
  applyStandard(intelligence, buildCompactPatch({
    slug: "tools-for-humanity",
    leaderName: "Alex Blania / Sam Altman",
    leaderLabel: "共同創業者・CEO／共同創業者・Chairman",
    leaderUrl: "https://www.toolsforhumanity.com/",
    localName: "確認不能",
    localLabel: "日本法人・日本責任者",
    localUrl: "https://jobs.ashbyhq.com/Tools%20for%20Humanity",
    companyId: "tools-for-humanity-company",
    jobId: "tools-for-humanity-job",
    customersId: "tools-for-humanity-customers",
    externalId: "tools-for-humanity-external",
    financeId: "tools-for-humanity-finance",
    targets: ["消費者向けプラットフォーム・Trust & Safety", "デジタル本人確認・不正対策", "金融・決済・ウォレット", "ゲーム・広告・チケット・コミュニティ", "プライバシー・法務・公共政策"],
    heroSummary: "AIやbotが増えると、オンラインサービスは相手が一人の人間か、年齢条件を満たすかを確認しながら、個人情報を集めすぎないという課題に直面する。World IDは氏名そのものを渡さず、人間性・一意性・年齢など必要な事実だけを証明し、不正対策と利用体験の両立を支援する。",
    competitors: "公的eKYC、電話番号認証、passkey、CAPTCHA、device・behavioral risk、各platform内の本人確認",
    feature: "Orbや公的credentialで作るWorld ID、World App、Mini Appsを通じ、氏名を共有せず人間性・一意性・年齢等を証明する。",
    advantage: "zero-knowledge proofによる選択的開示と、一人一つのproof of humanをglobal consumer networkへ組み込む設計。",
    benefit: "bot・duplicate account・manual review・本人確認時間・離脱・個人data保持を減らし、信頼できる利用者体験を作れる可能性がある。",
    evidence: "Tinder Japanは人間バッジと18歳以上の年齢認証にWorld IDを利用。日本の本番効果を独立監査したROIではない。",
    marketVerdict: "結論：日本のTinderとマイナンバーカードcredentialは強い利用signal。一方、現行Japan求人は0件で、日本法人・責任者・売上・運用体制は確認できず、採用中企業としては扱わない。",
    marketParagraphs: [
      "生成AI、bot、deepfake、複数accountが増えるほど、platformは人間性、年齢、一意性を確認しつつ、個人dataを過剰収集しない必要がある。",
      "WorldはOrbだけでなく公的credential、World App、Mini Appsへ広がり、identity verificationをconsumer distributionとtransactionの基盤へ拡張しようとしている。",
      "Genba分析：限定use caseでverification completion、時間、bot・fraud、duplicate、離脱、manual review、privacy reviewを既存eKYC・phone・CAPTCHAと比較する。",
    ],
    cultureHeadline: "Mission志向のidentity・consumer・hardware・crypto横断組織。現行Japan求人0件のため日本固有の働き方は確認不能。",
    classification: "未確認",
    displayLabel: "現行Japan求人なし",
    officeDays: "対象求人なし",
    remoteOnly: "対象求人なし",
    flexibility: "米国・ドイツ求人の条件を将来の日本求人へ転用しない",
    goodFor: ["digital identityとprivacyを横断したい", "consumer productとhardware operationsを扱いたい", "将来のJapan再採用を先回りしたい"],
    cautionFor: ["今すぐ日本専任職へ応募したい", "token・Orbを伴わない本人確認だけを望む", "日本法人・国内支援の確定を必須にする"],
    unresolved: [
      ["Japan採用", "日本の実利用はあるが現行Japan求人0件。", "Japan採用再開の条件、必要role、既存team、reporting lineは？"],
      ["事業規模", "user・認証・Mini App規模は公開、認識売上は非公開。", "recognized revenue、paid partner、unit economics、profit、FCF、日本売上は？"],
      ["利用成果", "Tinder Japanとcredential連携を確認。", "verification completion、fraud、duplicate、drop-off、cost、renewalの実測は？"],
      ["規制・privacy", "選択的開示を訴求。", "data flow、biometric processing、retention、incident、consent、未成年対応を日本で誰が担う？"],
      ["市場採用", "公的eKYC等の代替が強い。", "World IDが必須になるuse case、buyer、commercial model、integration ownerは？"],
    ],
  }));
}

function patchLovable(intelligence: CompanyPublicIntelligence) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === "創業")) {
    intelligence.marketStatus.milestones.unshift({ year: "2023", label: "創業", detail: "スウェーデンで創業し、2024年11月にLovableを一般公開。", sourceId: "lovable-company" });
  }
  applyStandard(intelligence, buildCompactPatch({
    slug: "lovable",
    leaderName: "Anton Osika / Fabian Hedin",
    leaderLabel: "共同創業者",
    leaderUrl: "https://lovable.dev/blog/series-c",
    localName: "確認不能",
    localLabel: "日本法人・日本責任者",
    localUrl: "https://jobs.ashbyhq.com/lovable",
    companyId: "lovable-company",
    jobId: "lovable-careers",
    customersId: "lovable-customers",
    externalId: "lovable-external",
    financeId: "lovable-growth",
    targets: ["最高情報責任者・最高デジタル責任者", "事業開発・業務変革", "製品・デザイン・エンジニアリング", "営業・マーケティング・業務部門", "セキュリティ・法務・調達"],
    heroSummary: "日本企業では小規模な業務アプリや顧客向けサービスの要望が開発部門に積み上がり、外注や既製SaaSでは時間・費用・適合性の課題が残る。Lovableは要件を自然言語で伝えると、画面だけでなくデータベース、認証、決済、公開まで含むアプリを作り、現場の着想を短期間で検証・運用できる形へ変える。",
    competitors: "Replit、Bolt、Base44、v0、Cursor、GitHub Copilot、Power Apps、Mendix、SI・外注、既存SaaS、内製",
    feature: "自然言語からUI、backend、database、auth、payments、deployment、security scanningを含むfull-stack appを生成・公開する。",
    advantage: "非技術者のideaから動くproductまでを一つのworkspaceでつなぎ、EnterpriseではSSO、workspace、publishing、security governanceを加える。",
    benefit: "prototype・業務appのlead time、外注費、SaaS重複、engineering backlogを減らし、現場とITが同じ成果物で検証できる可能性がある。",
    evidence: "launch後6,000万超projects、Lovable製appの月9億超visitsを会社発表。日本企業のnamed production caseと定量成果は確認できない。",
    marketVerdict: "結論：4億米ドル（約630.2億円）のSeries C、133億米ドル（約2兆955.5億円）評価、利用規模は強いが、日本法人・office・求人・named case・local supportは未確認。話題性ではなく有償利用とenterprise readinessで進出を判断する。",
    marketParagraphs: [
      "DX人材不足とengineering backlogが続く一方、生成AIで作ったappを無統制に本番化するとdata leakage、security、owner不在、保守負債が増える。",
      "Lovableはself-serve creationからCloud、payments、security、Enterprise governanceへ広がり、個人のprototypeを組織のsoftware portfolioへ変える投資を進めている。",
      "Genba分析：一つの低risk workflowでlead time、外注・SaaS cost、defect、security finding、adoption、maintenance hoursを比較し、IT reviewとownershipをstage gateにする。",
    ],
    cultureHeadline: "高速なproduct iterationとbuilder ownershipを重視する欧米中心の成長組織。現行Japan求人0件で日本勤務条件は未確認。",
    classification: "未確認",
    displayLabel: "日本未進出・現行Japan求人なし",
    officeDays: "対象求人なし",
    remoteOnly: "対象求人なし",
    flexibility: "欧米拠点・Remote求人の条件を将来の日本求人へ転用しない",
    goodFor: ["AIによるsoftware creationを事業成果へつなぎたい", "PLGからEnterpriseへの拡張を作りたい", "将来のJapan entryを観測したい"],
    cautionFor: ["今すぐ日本専任職へ応募したい", "国内data residency・日本語supportを必須にする", "生成codeの品質・保守をvendorへ全面委任したい"],
    unresolved: [
      ["Japan entry", "日本語siteはあるがJapan・APAC求人0件。", "Japan paid usage、pipeline、partner、進出承認条件、最初のlocal podは？"],
      ["Private economics", "funding・valuation・usageは公開、認識売上は非公開。", "recognized revenue、ARR、growth、gross margin、profit、FCF、NRRは？"],
      ["Enterprise readiness", "security・governance機能を拡張。", "data location、SSO・RBAC、audit、incident、support SLA、code ownershipは？"],
      ["Customer proof", "global利用規模は大きいが国内named caseなし。", "Japan production app、renewal、SaaS置換、lead time・cost・adoption成果は？"],
      ["Role economics", "対象求人なし。", "再採用時のterritory、quota、OTE、ramp、attainment、SE・CS・partner coverageは？"],
    ],
  }));
}

export function applyCompanyPageRolloutBatchTwentyThree(records: Record<string, CompanyPublicIntelligence>) {
  if (records.servicenow) patchServiceNow(records.servicenow);
  if (records["tools-for-humanity"]) patchToolsForHumanity(records["tools-for-humanity"]);
  if (records.lovable) patchLovable(records.lovable);
}
