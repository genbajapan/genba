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

function patchOkta(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2009", "創業", "Todd McKinnon氏とFrederic Kerrest氏が共同創業。", "okta-ipo");
  ensureMilestone(intelligence, "2020", "日本法人を設立し日本進出", "2020年9月にOkta Japan株式会社を設立。", "rollout-okta-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "okta", leaderName: "Todd McKinnon", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.okta.com/company/leadership/todd-mckinnon/", localName: "渡邉 崇", localLabel: "代表取締役社長", localUrl: "https://www.okta.com/ja-jp/company/okta-japan/",
    companyId: "rollout-okta-japan", jobId: "rollout-okta-jobs-20260817", customersId: "rollout-okta-goodpatch", externalId: "rollout-okta-ipa-2026", financeId: "rollout-okta-q1fy27-sec",
    targets: ["CISO・CIO・Identity管理", "IT・情シス・人事", "SecOps・監査", "製品・Engineering", "顧客向けデジタルサービス"], competitors: "Microsoft Entra、CyberArk、SailPoint、Ping Identity、個別MFA・IGA・PAM、内製認証",
    feature: "Okta PlatformとAuth0 Platformを軸に、SSO、MFA、Directory、Lifecycle、IGA、PAM、Identity Threat Protection、customer identityを提供する。", advantage: "特定suiteに閉じないmulti-vendor identity layerと、workforce identity・customer/developer identityの二面性を持つ。", benefit: "入退社・異動の権限管理、phishing耐性、access review、顧客login開発を統合し、残存権限・監査工数・認証frictionを減らす。", evidence: "Goodpatchは新規app導入時の情シス手順書作成を約1時間から実質0、signupを約5分から約30秒、DNPはuser登録を10分超から数分へ短縮と事例で説明。",
    marketVerdict: "結論：人・委託先・customer・machine／AI identityの増加は追い風。Q1 FY2027はGAAP黒字とFCFを確保した一方、成長率は11%でMicrosoft競争と自社security recordの検証が必要。", marketParagraphs: ["SaaS、委託先、remote work、AI agentが増えるほど、joiner-mover-leaver、privileged access、phishing耐性、customer authenticationを別toolで管理するriskと運用負荷が増える。", "今後3〜5年はidentityをsecurity control planeとして統合する需要が追い風。一方、Microsoft bundle、専門PAM・IGA、migration、reliability、過去incidentへのtrustが選定条件になる。", "Genba分析：勝ち筋はapp連携数ではなく、provisioning時間、残存権限、access review工数、MFA bypass、developer実装時間、login conversionをbaseline比較し、incident responseと契約責任まで確認すること。"],
    cultureHeadline: "現行実求人5件はTokyo・Hybrid。Talent Communityは将来求人通知で、確定headcountとして数えない。role別の出社日数は非公開。", classification: "ハイブリッド", displayLabel: "東京・ハイブリッド", officeDays: "非公開", remoteOnly: "現行実求人では該当しない", flexibility: "役割別の詳細は非公開",
    goodFor: ["identityを経営riskと業務KPIで売りたい", "securityとdeveloper buyerを横断したい", "WorkforceとAuth0の二つのGTMを扱いたい"], cautionFor: ["Microsoft bundleとの比較を避けたい", "security incidentの説明責任を負いたくない", "完全リモート日数を確約条件にする"],
    unresolved: [["日本territory", "実求人5件は投資signalだが売上の証明ではない。", "日本売上、顧客、segment、pipeline、ACV、sales cycleは？"], ["Microsoft競争", "Entra bundleが強い顧客では独立platformの増分TCOが問われる。", "直近のwin／loss、併用pattern、migration costは？"], ["security record", "2023 support incidentでは顧客fileとsessionへのaccessが発生。", "是正措置、customer assurance、incident責任をどう説明する？"], ["役割分担", "Okta、Auth0、TAM、Marketingを同時採用。", "territory、handoff、renewal、expansion、technical ownershipは？"], ["報酬・達成", "給与、OTE、quota、ramp、達成率は非公開。", "base／variable、quota、accelerator、ramp、達成者比率は？"]],
  }));
  intelligence.facts = [
    { label: "Q1 FY2027売上高", value: "7億6,500万米ドル（約1,240.4億円）", detail: "2026年4月30日終了四半期、前年比11%増。1ドル=162.15円の参照換算。", sourceIds: ["rollout-okta-q1fy27-sec", "rollout-b05-boj-usd-20260716"] },
    { label: "GAAP営業利益・FCF", value: "5,600万米ドル／2億7,100万米ドル（約90.8億円／439.4億円）", detail: "GAAP営業margin 7%、FCF margin 35%。non-GAAP営業利益とは分ける。", sourceIds: ["rollout-okta-q1fy27-sec", "rollout-b05-boj-usd-20260716"] },
    { label: "RPO", value: "47億1,900万米ドル（約7,651.9億円）", detail: "将来の契約履行義務で売上高・ARRではない。cRPOは24億9,900万米ドル、DBNRR 107%。", sourceIds: ["rollout-okta-q1fy27-sec", "rollout-b05-boj-usd-20260716"] },
    { label: "大口顧客", value: "ACV 10万米ドル（約1,621.5万円）超 5,180社", detail: "前年同期4,870社から増加。日本顧客数ではない。", sourceIds: ["rollout-okta-q1fy27-sec", "rollout-b05-boj-usd-20260716"] },
  ];
  intelligence.companyStats.japanOffice = { value: "東京・渋谷ヒカリエ30階／大阪・WeWork Namba SkyO 27階", detail: "Okta Japan公式会社概要で確認。", sourceId: "rollout-okta-japan" };
  intelligence.companyStats.japanSince = { value: "2020年9月", detail: "Okta Japan株式会社の設立。", sourceId: "rollout-okta-japan" };
  intelligence.customerProof = [
    { company: "Goodpatch", products: "Okta Workforce Identity", outcome: "新規app導入時の手順書作成を約1時間から実質0、signupを約5分から約30秒へ短縮。", implication: "vendor-selected事例で、全社平均・単独因果を保証しない。", sourceId: "rollout-okta-goodpatch" },
    { company: "DNP", products: "Okta", outcome: "新規user 1人の登録を10分超から数分へ短縮と説明。", implication: "顧客環境・process変更を含む個別事例。", sourceId: "rollout-okta-dnp" },
  ];
  intelligence.roleLens = { salesMotion: "現行実求人はAuth0 AE、Okta AE、Digital Media、Field Marketing、Auth0 TAMの5件。Talent Community SDRは将来通知で実headcountに含めない。", compensation: "5実求人とも日本の給与・OTE金額は非公開。Auth0 AEの言語要件も明記なし。", quota: "quota、territory、account数、ACV、ramp、達成率、Marketing pipeline目標、TAMのrenewal指標は非公開。", collaboration: "Okta・Auth0 Sales、Marketing、TAM、Solutions、Partner、Product・Engineeringがworkforce／customer identityで連携する。" };
  addSources(intelligence, [
    { id: "rollout-okta-q1fy27-sec", label: "Okta Q1 FY2027決算・SEC", url: "https://www.sec.gov/Archives/edgar/data/1660134/000166013426000050/okta-4302026_ex991.htm", kind: "法定開示", scope: "売上・GAAP利益・FCF・RPO・顧客指標", checkedAt: researchedAt },
    { id: "rollout-okta-japan", label: "Okta Japan会社概要", url: "https://www.okta.com/ja-jp/company/okta-japan/", kind: "企業公式", scope: "日本法人・代表・東京大阪office", checkedAt: researchedAt },
    { id: "rollout-okta-jobs-20260817", label: "Okta Japan現行求人", url: "https://boards-api.greenhouse.io/v1/boards/oktajp/jobs?content=true", kind: "企業公式", scope: "現行実求人5件とTalent Communityの区別", checkedAt: researchedAt },
    { id: "rollout-okta-goodpatch", label: "Okta・Goodpatch事例", url: "https://www.okta.com/ja-jp/customers/goodpatch/", kind: "企業公式", scope: "国内導入成果", checkedAt: researchedAt },
    { id: "rollout-okta-dnp", label: "Okta・DNP事例", url: "https://www.okta.com/jp/customers/dnp/", kind: "企業公式", scope: "国内user登録成果", checkedAt: researchedAt },
    { id: "rollout-okta-ipa-2026", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "identity・accessに関わる国内脅威", checkedAt: researchedAt },
    { id: "rollout-okta-incident-2023", label: "Okta 2023 support incident RCA", url: "https://sec.okta.com/articles/2023/11/unauthorized-access-oktas-support-case-management-system-root-cause/", kind: "企業公式", scope: "security incidentの影響と是正", checkedAt: researchedAt },
    { id: "rollout-b05-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  if (intelligence.marketStatus.isPublic) intelligence.marketStatus.capitalMarketRead = {
    asOf: "Q1 FY2027 / 2026-08-17確認",
    metrics: [
      { label: "四半期売上高", value: "7.65億米ドル（約1,240.4億円）", change: "前年比+11%", interpretation: "成長は継続するがFY27 guideは9〜10%。", sourceId: "rollout-okta-q1fy27-sec" },
      { label: "GAAP営業利益率", value: "7%", change: "GAAP黒字", interpretation: "FCF margin 35%と収益性を確保。", sourceId: "rollout-okta-q1fy27-sec" },
      { label: "RPO", value: "47.19億米ドル（約7,651.9億円）", change: "前年比+16%", interpretation: "将来契約残高は売上より速く増加。", sourceId: "rollout-okta-q1fy27-sec" },
    ],
    growthDrivers: [{ title: "大口化とproduct expansion", evidence: "ACV 10万米ドル（約1,621.5万円）超顧客とRPOが増加。", japanMeaning: "日本でもSSOからgovernance・PAM・Auth0へ拡張できるかが焦点。", sourceIds: ["rollout-okta-q1fy27-sec"] }],
    risks: [{ title: "成長鈍化とMicrosoft競争", disclosedRisk: "FY27 guideは9〜10%、Microsoftをprincipal competitorと開示。", companyResponse: "multi-vendor platformと新identity製品へ投資。", genbaRead: "日本ではbundle差額を運用・risk KPIで正当化する必要。", sourceIds: ["rollout-okta-q1fy27-sec"] }, { title: "security trust", disclosedRisk: "2023 support incidentで顧客file・sessionへのaccessが発生。", companyResponse: "RCAと是正措置を公開。", genbaRead: "自社incidentも含めたtransparentなrisk説明が商談条件。", sourceIds: ["rollout-okta-incident-2023"] }],
    japanCommitment: { verdict: "継続投資を確認", summary: "2020年法人設立、東京・大阪拠点、現行実求人5件、国内事例を確認。日本売上・採算は非公開。", signals: [{ year: "2020", title: "日本法人設立", detail: "Okta Japan株式会社を設立。", sourceIds: ["rollout-okta-japan"] }, { year: "2026", title: "実求人5件", detail: "AE、Marketing、TAMを公式掲載。", sourceIds: ["rollout-okta-jobs-20260817"] }], unknowns: ["日本売上・顧客数", "segment別quota・達成率", "日本のprofitability"] },
    scenarios: [{ scenario: "基本", title: "大口化とFCF改善を継続", body: "growthは成熟しつつ、governance・PAM・Auth0 expansionで伸長。" }, { scenario: "上振れ", title: "AI identityが追加予算を作る", body: "machine・agent identityが新しいcontrol plane需要を生む。" }, { scenario: "下振れ", title: "bundleとtrustが圧迫", body: "Microsoft bundleとsecurity concernで新規・更新が鈍化。" }],
    sourceIds: ["rollout-okta-q1fy27-sec", "rollout-okta-japan", "rollout-okta-jobs-20260817", "rollout-okta-incident-2023"],
  };
  refreshSourceDates(intelligence);
}

function patchPagerDuty(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2009", "創業", "Alex Solomon氏、Andrew Miklas氏、Baskar Puvanathasan氏がTorontoで創業。", "pagerduty-ipo");
  ensureMilestone(intelligence, "2022", "日本法人を設立し日本進出", "Japan Cloudとの戦略提携でPagerDuty株式会社を設立。", "pagerduty-japan-founding");
  applyStandard(intelligence, buildCompactPatch({
    slug: "pagerduty", leaderName: "John DiLullo", leaderLabel: "CEO", leaderUrl: "https://www.pagerduty.com/newsroom/pagerduty-john-dilullo/", localName: "山根 伸行", localLabel: "代表取締役社長", localUrl: "https://www.pagerduty.co.jp/topics/7813/",
    companyId: "pagerduty-japan-founding", jobId: "rollout-pagerduty-jobs-20260817", customersId: "pagerduty-case-docomo", externalId: "rollout-pagerduty-fsa-resilience", financeId: "rollout-pagerduty-q1fy27-sec",
    targets: ["SRE・DevOps・IT運用", "CIO・CTO・開発部門", "NOC・SecOps・セキュリティ運用", "顧客サポート・CX", "金融・公共・重要業務"], competitors: "ServiceNow、Atlassian Service Management、Datadog・New Relic・Dynatrace等のbundle、incident.io・Rootly、open-source・内製",
    feature: "Incident Management、on-call、AIOps・event orchestration、Automation・Runbook、Customer Service Ops、Status Pages、AI／SRE AgentをOperations Cloudで提供する。", advantage: "700超の監視・security・ITSM sourceの後段で、人・machine・workflow・customer communicationをreal-timeにorchestrateする。", benefit: "alert noise、ownership不明、manual escalation、属人的runbookを減らし、MTTA、MTTR、有人対応工数、顧客影響を改善する。", evidence: "NTTドコモはalertsを月1万から約1,000、MTTAを数時間から3〜5分、MTTRを数日から2時間15分、アイレットはalert対応80%以上自動化と約1,000人月削減と説明。",
    marketVerdict: "結論：重要業務の24時間化とoperational resilience要求は追い風。一方Q1 FY2027は売上+1%、ARRほぼ横ばい、DBNRR 97%で既存顧客収縮が明確。利益・FCF改善と成長鈍化を同時に見る必要がある。", marketParagraphs: ["cloud、microservices、outsourcing、AI-generated codeでdependencyとsignalが増え、alertの手動triageと電話連絡では許容中断時間、顧客影響、復旧ownerを管理できない。", "今後3〜5年はresilience、AI-assisted operations、runbook automationが追い風。一方、ServiceNow・observability bundle、pure-play、内製、AI agentによるseat圧縮が競争条件になる。", "Genba分析：勝ち筋は通知機能ではなく、priority serviceでalert削減、MTTA、MTTR、automation率、有人時間、customer impactをbaseline→PoVで測り、identified valueではなく実現値を追うこと。"],
    cultureHeadline: "現行日本求人6件は勤務地・勤務形態を個別に明記していない。東京officeからHybridや出社日数を推定しない。", classification: "未確認", displayLabel: "勤務形態は求人で非公開", officeDays: "非公開", remoteOnly: "非公開", flexibility: "会社一般の制度を個別求人へ転用しない",
    goodFor: ["incident responseを事業KPIで売りたい", "Sales・Solutions・Servicesを横断したい", "成長鈍化局面でexpansionを作りたい"], cautionFor: ["高成長だけを転職理由にする", "alert toolだけの短い商談を望む", "勤務地・remote条件の事前確約を必須にする"],
    unresolved: [["成長再加速", "Q1売上+1%、ARR flat、DBNRR 97%。", "usage pricing、AI、automationのnew ARR、migration、retentionは？"], ["日本territory", "国内350社超の集計基準と日本売上は非公開。", "paid customer、ARR、segment、pipeline、partner比率は？"], ["6求人の分担", "PSC 2件が同時掲載だが別headcountか不明。", "Sales、SC、PSC、BDRのteam規模、coverage、handoffは？"], ["競合bundle", "ITSM・observabilityの既存vendorがincident機能をbundleする。", "直近のwin／loss、coexistence、TCO、rip-and-replace比率は？"], ["報酬・達成", "給与、OTE、quota、勤務地、workstyleは非公開。", "base／variable、quota、ramp、達成者比率、出社・travel条件は？"]],
  }));
  intelligence.facts = [
    { label: "Q1 FY2027売上高", value: "1億2,096.7万米ドル（約196.1億円）", detail: "前年比1%増。1ドル=162.15円の参照換算。", sourceIds: ["rollout-pagerduty-q1fy27-sec", "rollout-b05-boj-usd-20260716"] },
    { label: "GAAP営業利益・FCF", value: "920万米ドル／4,119.2万米ドル（約14.9億円／66.8億円）", detail: "GAAP営業margin 7.6%、FCF margin 34.1%。4四半期連続GAAP黒字と会社説明。", sourceIds: ["rollout-pagerduty-q1fy27-sec", "rollout-b05-boj-usd-20260716"] },
    { label: "ARR", value: "4億9,600万米ドル（約804.3億円）", detail: "前年比ほぼ横ばい。ARRは会計上の売上高ではない。DBNRR 97%。", sourceIds: ["rollout-pagerduty-q1fy27-sec", "rollout-b05-boj-usd-20260716"] },
    { label: "顧客・RPO", value: "有料15,380社／RPO 4億4,100万米ドル（約715.1億円）", detail: "paid+freeは3.6万超。RPOは将来履行義務で売上・ARRではない。", sourceIds: ["rollout-pagerduty-q1fy27-sec", "rollout-b05-boj-usd-20260716"] },
  ];
  intelligence.companyStats.japanOffice = { value: "東京都港区赤坂9-7-1 ミッドタウン・タワー18階", detail: "日本公式で確認。", sourceId: "pagerduty-japan-ceo" };
  intelligence.companyStats.japanSince = { value: "2022年", detail: "Japan Cloudとの戦略提携でPagerDuty株式会社を設立。", sourceId: "pagerduty-japan-founding" };
  intelligence.customerProof = [
    { company: "NTTドコモ", products: "PagerDuty Operations Cloud", outcome: "monthly alerts 1万から約1,000、MTTA 数時間から3〜5分、MTTR 数日から2時間15分。", implication: "vendor-selected・顧客自己申告で平均効果ではない。", sourceId: "pagerduty-case-docomo" },
    { company: "NTTデータ", products: "PagerDuty", outcome: "error検知から担当者連絡を20〜30分から数秒〜数分へ短縮。", implication: "個別workflowの事例で単独因果を保証しない。", sourceId: "pagerduty-case-nttdata" },
    { company: "アイレット", products: "PagerDuty・Automation", outcome: "alert対応80%以上自動化、直近2年で約1,000人月削減と説明。", implication: "顧客process・automation設計を含む成果。", sourceId: "rollout-pagerduty-iret" },
  ];
  intelligence.roleLens = { salesMotion: "現行はEnterprise AE、Sr Sales Manager、BDR、Solutions Consultant、Professional Services Consultant 2件の計6件。new logo・expansionからPoV・implementationまでを横断する。", compensation: "6求人とも給与・OTE金額は非公開。勤務地・勤務形態も個別求人で確認できない。", quota: "Sales quota、team target、territory、account数、ACV、ramp、達成率、PSC utilization・marginは非公開。", collaboration: "AE・BDR・Sales Manager、Solutions、Professional Services、Partner、Customer Success、Productがincident lifecycleで連携する。" };
  addSources(intelligence, [
    { id: "rollout-pagerduty-q1fy27-sec", label: "PagerDuty Q1 FY2027決算・SEC", url: "https://www.sec.gov/Archives/edgar/data/1568100/000156810026000030/ex991-pagerdutyq1fy27earni.htm", kind: "法定開示", scope: "売上・利益・FCF・ARR・RPO・顧客指標", checkedAt: researchedAt },
    { id: "rollout-pagerduty-jobs-20260817", label: "PagerDuty Japan現行求人", url: "https://japancloud.jp/career/companies/pagerduty/", kind: "企業公式", scope: "現行6求人・言語・非公開条件", checkedAt: researchedAt },
    { id: "rollout-pagerduty-iret", label: "PagerDuty・アイレット事例", url: "https://www.pagerduty.co.jp/customers/iret/", kind: "企業公式", scope: "国内automation・工数成果", checkedAt: researchedAt },
    { id: "rollout-pagerduty-fsa-resilience", label: "金融庁 主要行等向け監督指針・operational resilience", url: "https://www.fsa.go.jp/common/law/guide/city/03c2.html", kind: "公的機関", scope: "重要業務の許容中断・顧客影響の外部要求", checkedAt: researchedAt },
    { id: "rollout-b05-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  if (intelligence.marketStatus.isPublic) intelligence.marketStatus.capitalMarketRead = {
    asOf: "Q1 FY2027 / 2026-08-17確認",
    metrics: [
      { label: "四半期売上高", value: "1.20967億米ドル（約196.1億円）", change: "前年比+1%", interpretation: "売上成長はほぼ横ばい。", sourceId: "rollout-pagerduty-q1fy27-sec" },
      { label: "GAAP営業利益率", value: "7.6%", change: "4四半期連続GAAP黒字", interpretation: "growthよりprofit・cash disciplineが先行。", sourceId: "rollout-pagerduty-q1fy27-sec" },
      { label: "ARR・DBNRR", value: "4.96億米ドル（約804.3億円）／97%", change: "ARRほぼflat", interpretation: "existing baseはnet contraction。", sourceId: "rollout-pagerduty-q1fy27-sec" },
    ],
    growthDrivers: [{ title: "Automation・AIへの拡張", evidence: "AIOps、Runbook、AI／SRE Agentへportfolioを拡張。", japanMeaning: "国内のautomation定量事例をnew・expansionへ再現できるかが焦点。", sourceIds: ["rollout-pagerduty-iret", "rollout-pagerduty-q1fy27-sec"] }],
    risks: [{ title: "existing contraction", disclosedRisk: "ARRほぼflat、DBNRR 97%、売上+1%。", companyResponse: "利益・FCF改善とplatform expansionを推進。", genbaRead: "日本ではnew logoだけでなくrenewal・automation attachの質が重要。", sourceIds: ["rollout-pagerduty-q1fy27-sec"] }, { title: "bundle競争", disclosedRisk: "ITSM・observability・hyperscaler・open-sourceとの競争。", companyResponse: "cross-signal orchestrationとmission-critical scaleを訴求。", genbaRead: "既存tool後段のincremental valueを実測する必要。", sourceIds: ["pagerduty-competitor-comparison"] }],
    japanCommitment: { verdict: "日本でfull-cycle体制を継続", summary: "2022年法人設立、現行6求人、国内大手事例を確認。日本売上・採算・quotaは非公開。", signals: [{ year: "2022", title: "日本法人設立", detail: "Japan Cloudと日本事業を開始。", sourceIds: ["pagerduty-japan-founding"] }, { year: "2026", title: "現行6求人", detail: "Sales、Solutions、Professional Servicesを公式掲載。", sourceIds: ["rollout-pagerduty-jobs-20260817"] }], unknowns: ["日本売上・ARR", "paid customer定義", "quota・達成率", "日本事業の採算"] },
    scenarios: [{ scenario: "基本", title: "低成長・高FCFを継続", body: "core incident基盤を維持しautomation attachを拡大。" }, { scenario: "上振れ", title: "AI・runbookがexpansionを再加速", body: "人手削減とresilienceを同時に証明。" }, { scenario: "下振れ", title: "bundle・AIがseatを圧縮", body: "existing contractionが続きgrowthがさらに鈍化。" }],
    sourceIds: ["rollout-pagerduty-q1fy27-sec", "pagerduty-japan-founding", "rollout-pagerduty-jobs-20260817", "rollout-pagerduty-iret"],
  };
  refreshSourceDates(intelligence);
}

function patchSonar(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2008", "創業", "2007年のplatform開発を起点に、2008年11月SonarSourceを設立。", "sonar-company");
  ensureMilestone(intelligence, "確認不能", "日本市場でGTMを開始（進出年は確認不能）", "Tokyoの現行On-site求人と日本語siteは確認できるが、法人設立・正式進出年は非公開。", "sonar-job");
  applyStandard(intelligence, buildCompactPatch({
    slug: "sonar", leaderName: "Tariq Shaukat", leaderLabel: "CEO", leaderUrl: "https://www.sonarsource.com/company/about/", localName: "非公開", localLabel: "日本責任者", localUrl: "https://jobs.lever.co/sonarsource",
    companyId: "sonar-company", jobId: "sonar-job", customersId: "rollout-sonar-dept", externalId: "rollout-sonar-ipa-ai-code", financeId: "rollout-sonar-revenue",
    targets: ["CTO・開発責任者", "Developer Platform・開発者体験", "Application Security・アプリケーション防御", "QA・開発品質", "コンプライアンス・監査"], competitors: "GitHub Advanced Security、GitLab、Snyk、Veracode、Checkmarx、Semgrep、Fortify、Mend・Black Duck、open-source lint／scanner内製",
    feature: "SonarQube Server、SonarQube Cloud、SonarQube for IDE、Advanced Security、AI CodeFixをIDE・PR・CIへ組み込む。", advantage: "code qualityとsecurityをnew-code quality gateで一貫管理し、self-managed・air-gappedからcloudまで選べる。", benefit: "AI生成codeを含むbug、vulnerability、technical debtを早期検知し、late review、rework、release risk、監査工数を減らす。", evidence: "国内named customerの定量事例は確認できない。海外事例ではDEPTがissue発見60%高速化・troubleshooting 30%削減、Recognyteがfirst month ROIと説明。",
    marketVerdict: "結論：AI codingとsoftware supply chain統制は追い風。4億ドル超規模のrevenueと黒字を会社が説明する一方、期間・利益額・ARRは非公開、日本の顧客成果・法人・責任者も確認できない。", marketParagraphs: ["AI coding・agentで変更量と速度が増える一方、生成codeの脆弱性、保守性、review能力、SBOM・監査証跡が開発組織の新しいbottleneckになる。", "今後3〜5年はsecurity-by-designとAI code verificationが追い風。一方、repository・cloud vendorのbundle、point SAST、open-source、false positive、build time、developer adoptionが選定条件になる。", "Genba分析：勝ち筋はscanner数でなく、precision、new-code issue、remediation time、quality-gate pass、build time、exception、audit evidenceを実repositoryで比較し、日本語支援と3年TCOまで検証すること。"],
    cultureHeadline: "現行Japan 2求人はTokyo・On-site。Territory Managerは応募時に週3日office可否を確認し、Partner Managerは具体日数を明記しない。", classification: "出社中心", displayLabel: "東京・オンサイト", officeDays: "営業職は週3日確認、Partner職は非公開", remoteOnly: "該当しない", flexibility: "役割別の求人条件を優先",
    goodFor: ["DevToolsをengineering KPIで売りたい", "AppSecとdeveloper experienceを横断したい", "Enterprise directとpartner motionを作りたい"], cautionFor: ["国内referenceが豊富な成熟組織を求める", "office勤務を避けたい", "technical validationやdeveloper adoptionを避けたい"],
    unresolved: [["日本traction", "Tokyo 2求人は投資signalだが売上の証明ではない。", "日本顧客、ARR、pipeline、partner、production規模は？"], ["財務", "会社公表revenue規模・profitableは期間や利益額を開示しない。", "対象期間、認識売上、growth、margin、FCF、ARRは？"], ["国内proof", "named Japanese customer outcomeを確認できない。", "日本のreference、industry、deployment規模、定量成果は？"], ["bundle競争", "GitHub／GitLab等のnative securityで足りる場合もある。", "直近win／loss、precision、adoption、TCOは？"], ["報酬・達成", "給与、OTE、quota、達成率、日本責任者は非公開。", "base／variable、quota、ramp、達成者比率、reportingは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上規模", value: "4億米ドル超（約630.2億円超）", detail: "現行公式Japan求人の会社説明。期間・会計基準・監査有無は非公開。1ドル=157.56円の参照換算。", sourceIds: ["rollout-sonar-revenue", "rollout-b05-customs-usd-202608"] },
    { label: "収益性", value: "黒字と会社説明", detail: "2025年公式発表はprofitable・double-digit growthと説明するが、営業利益、純利益、EBITDA、FCF、marginは非公開。", sourceIds: ["rollout-sonar-profitability"] },
    { label: "Enterprise customers", value: "21,000社", detail: "全世界の会社公表値。400,000超の利用組織とは母集団が異なり、日本顧客数ではない。", sourceIds: ["sonar-company"] },
    { label: "Developer・code scale", value: "700万人超／1日7,500億行", detail: "会社公表のglobal usage。売上・paid seat・日本規模ではない。", sourceIds: ["sonar-company"] },
  ];
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "Tokyo求人2件からteam人数を推定しない。", sourceId: "sonar-job" };
  intelligence.companyStats.japanOffice = { value: "東京（詳細住所は非公開）", detail: "公式locationと現行求人でTokyoを確認。", sourceId: "sonar-job" };
  intelligence.companyStats.japanSince = { value: "確認不能", detail: "日本法人設立・正式進出年を一次情報で確認できない。", sourceId: "sonar-company" };
  intelligence.customerProof = [
    { company: "DEPT（海外事例）", products: "SonarQube", outcome: "issue発見60%高速化、troubleshooting 30%削減と説明。", implication: "vendor-selectedで日本成果・平均効果を保証しない。", sourceId: "rollout-sonar-dept" },
    { company: "Recognyte（海外事例）", products: "SonarQube", outcome: "120超project・40万行超でfirst month ROIと説明。", implication: "算定条件・独立監査はなく、日本の再現性を示さない。", sourceId: "rollout-sonar-recognyte" },
  ];
  intelligence.roleLens = { salesMotion: "現行はEnterprise Territory ManagerとPartner Business Managerの2件。direct new logoとSI・reseller・hyperscaler経由のbookings・renewalを並行して作る。", compensation: "2求人とも日本の給与・OTE・pay mix・equityは非公開。Territory Managerはprofessional Englishを明記、日本語要件は記載なし。", quota: "quota、territory account数、ACV、cycle、ramp、達成率、partner-sourced creditは非公開。", collaboration: "Sales、Partner、Solutions、Marketing、Product・Engineering、AppSec／Developer Platform buyerがquality gateの検証・標準化で連携する。" };
  addSources(intelligence, [
    { id: "rollout-sonar-revenue", label: "Sonar現行Japan求人・会社規模", url: "https://jobs.lever.co/sonarsource/4a5dfed7-c01a-44e9-af6a-5917cf056a88", kind: "企業公式", scope: "4億米ドル超revenue・現行営業要件", checkedAt: researchedAt },
    { id: "rollout-sonar-profitability", label: "Sonar CFO任命発表", url: "https://www.sonarsource.com/company/press-releases/sonar-appoints-jean-compeau-as-chief-financial-officer-and-eyal-ben-david-as-chief-legal-officer/", kind: "企業公式", scope: "profitable・double-digit growthの会社説明", checkedAt: researchedAt },
    { id: "rollout-sonar-dept", label: "Sonar・DEPT事例", url: "https://www.sonarsource.com/customer-stories/dept/", kind: "企業公式", scope: "海外customer outcome", checkedAt: researchedAt },
    { id: "rollout-sonar-recognyte", label: "Sonar・Recognyte事例", url: "https://www.sonarsource.com/customer-stories/recognyte/", kind: "企業公式", scope: "海外customer scale・ROI claim", checkedAt: researchedAt },
    { id: "rollout-sonar-ipa-ai-code", label: "IPA AI利用製品開発者向けガイド", url: "https://www.ipa.go.jp/security/guide/vuln/for_dev_user.html", kind: "公的機関", scope: "生成codeの品質・脆弱性・governance", checkedAt: researchedAt },
    { id: "rollout-b05-customs-usd-202608", label: "財務省税関 2026年8月16日〜22日公示レート", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchZendesk(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2007", "創業", "CopenhagenでMikkel Svane氏らが創業。", "zendesk-ipo-and-buyout");
  ensureMilestone(intelligence, "2013", "日本市場へ進出", "2013年に日本市場へ参入。", "rollout-zendesk-japan-leader");
  applyStandard(intelligence, buildCompactPatch({
    slug: "zendesk", leaderName: "Tom Eggemeier", leaderLabel: "CEO", leaderUrl: "https://web-assets.zendesk.com/zendesk/pages/newsroom/media-resources/Zendesk_Media_Kit.pdf", localName: "森 太郎", localLabel: "代表執行役社長", localUrl: "https://www.zendesk.co.jp/company/press/zendesk-japan-taro-mori-2025/",
    companyId: "rollout-zendesk-media-kit", jobId: "rollout-zendesk-jobs-20260817", customersId: "rollout-zendesk-daimaru", externalId: "rollout-zendesk-ppc-callcenter", financeId: "rollout-zendesk-fy2021-sec",
    targets: ["顧客サポート・Contact Center", "CX・デジタル・CRM", "CIO・社内IT Service", "業務運用・BPO", "AI統制・Security・法務"], competitors: "Salesforce Service Cloud／Agentforce、ServiceNow、Dynamics 365、Freshdesk、Intercom、Genesys・NICE・Five9・Amazon Connect、HubSpot Service Hub、内製",
    feature: "Resolution Platformとしてticket、messaging、voice、knowledge、AI Agents、Copilot、Action Flows、QA・WFM・analytics、Customer／Employee Serviceを提供する。", advantage: "service conversation、knowledge、action、AIと人へのhandoffを一つのCX operating layerにまとめ、国内DC・ISMAP対象serviceも持つ。", benefit: "問い合わせ処理、自己解決、agent作業、QA、staffing、customer effortを改善し、verified resolution単価とriskを管理する。", evidence: "大丸松坂屋は処理時間を約5分の1・有人chat 50%増、味の素デジタルビジネスパートナーは対応時間30%減・自己解決率25%増、EARTHBRAINはCSAT 96〜98%と事例で説明。",
    marketVerdict: "結論：AI service・voice・employee serviceと国内governance要求は追い風。非公開化後の全社財務は非公開で、2025年projected AI ARRはsubset指標。現行3求人と日本の定量事例は投資signalだが、total ARRや利益へ拡張しない。", marketParagraphs: ["voice、digital、AI接点が増える一方、channel、knowledge、legacy tool、委託先が分断すると、顧客は反復説明し、agentは検索・転記、管理者は品質・権限・AI判断・カスハラ対応を追えない。", "今後3〜5年はAI resolution、contact center、employee serviceが追い風。一方、Salesforce・ServiceNow・CCaaS bundle、AI誤答、verified outcome課金、個人data、human handoff、国内DC・ISMAP範囲が選定条件になる。", "Genba分析：勝ち筋はticket数ではなく、resolution、AHT、FCR、self-service、CSAT、handoff、hallucination、QA、agent workload、verified outcome costを業務別PoCで測り、security・労務も同時に設計すること。"],
    cultureHeadline: "現行Tokyo 3求人はFull-time・Hybridで週の一部office。具体的な出社日はhiring managerが決め、公開求人では固定していない。", classification: "ハイブリッド", displayLabel: "東京・ハイブリッド", officeDays: "週の一部、具体日は非公開", remoteOnly: "該当しない", flexibility: "team・managerによりscheduleが異なる",
    goodFor: ["AI CXをresolution KPIで売りたい", "Sales・Solutions・BDRを横断したい", "customer dataとemployee protectionを同時に扱いたい"], cautionFor: ["最新全社財務の透明性を必須にする", "ticket toolだけの短い商談を望む", "正確な出社日を応募前に確約条件にする"],
    unresolved: [["非公開化後のeconomics", "2022年以降のcurrent全社売上・利益・total ARRは非公開。", "current revenue、growth、GAAP利益、FCF、total ARR／NRRは？"], ["日本territory", "約80人と現行3求人は確認できるが売上は非公開。", "日本売上、segment、AI mix、pipeline、partner、quota attainmentは？"], ["AI outcome", "projected AI ARRはsubsetで、全社ARRではない。", "actual AI ARR、verified resolution定義、accuracy、handoff、gross marginは？"], ["Commercial要件", "CX experienceの英日job descriptionに矛盾がある。", "必須・preferredの正しい条件と評価基準は？"], ["報酬・達成", "給与、OTE、quota、正確な出社日は非公開。", "base／variable、quota、ramp、達成者比率、office cadenceは？"]],
  }));
  intelligence.facts = [
    { label: "最終監査通期売上高", value: "13億3,860.3万米ドル（約2,109.1億円）", detail: "FY2021のhistorical値。2022年非公開化後のcurrent revenueではない。1ドル=157.56円の参照換算。", sourceIds: ["rollout-zendesk-fy2021-sec", "rollout-b05-customs-usd-202608"] },
    { label: "最終監査通期GAAP営業損失", value: "1億6,668.4万米ドル（約262.6億円）の損失", detail: "FY2021。current profitability、EBITDA、FCFは非公開。", sourceIds: ["rollout-zendesk-fy2021-sec", "rollout-b05-customs-usd-202608"] },
    { label: "AI ARR", value: "2025年2億米ドル見込み（約315.1億円）", detail: "会社が2025年にprojectedとしたAI製品subset。実績確認済みの全社ARR・売上ではない。", sourceIds: ["rollout-zendesk-ai-2025", "rollout-b05-customs-usd-202608"] },
    { label: "利用規模", value: "8万社超・160 territories", detail: "2026 media kitのglobal値。400万人のagent／admin、年約50億resolutionも会社公表。日本顧客数ではない。", sourceIds: ["rollout-zendesk-media-kit"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "current official media kitで社員数を確認できず、第三者推計を採用しない。", sourceId: "rollout-zendesk-media-kit" };
  intelligence.companyStats.japanHeadcount = { value: "約80人", detail: "2025年7月の日本代表就任発表。営業・consulting・CS等。", sourceId: "rollout-zendesk-japan-leader" };
  intelligence.companyStats.japanOffice = { value: "東京都中央区（詳細住所は確認不能）", detail: "日本代表発表で東京・中央区本社を確認。", sourceId: "rollout-zendesk-japan-leader" };
  intelligence.companyStats.japanSince = { value: "2013年", detail: "日本市場参入。", sourceId: "rollout-zendesk-japan-leader" };
  intelligence.customerProof = [
    { company: "大丸松坂屋百貨店", products: "Zendesk", outcome: "電話比率76.8%から70.4%、1件処理時間約5分の1、有人chat 50%増、CSAT 87.88%。", implication: "vendor-selectedで、他施策・評価期間を含む個別成果。", sourceId: "rollout-zendesk-daimaru" },
    { company: "味の素デジタルビジネスパートナー", products: "Zendesk", outcome: "対応時間30%減、自己解決率25%増、月150〜200件で安定と説明。", implication: "顧客process・knowledge整備を含む可能性があり単独因果を保証しない。", sourceId: "rollout-zendesk-ajinomoto" },
    { company: "EARTHBRAIN", products: "Zendesk", outcome: "CSAT 96〜98%、自己解決率が2年で3倍超、2024年予測1.8万件を約40人で対応。", implication: "vendor-selectedで平均効果ではない。", sourceId: "rollout-zendesk-earthbrain" },
  ];
  intelligence.roleLens = { salesMotion: "現行TokyoはSenior Commercial AE、Senior Sales Engineer、BDRの3件。旧SMB AEはlive Workdayから消え、new logo・expansion、technical discovery・PoC、pipeline creationを分担する。", compensation: "3求人とも日本の給与・OTE金額は非公開。BDRはqualified opportunitiesに基づく評価・報酬とだけ記載。", quota: "quota、territory、account数、ACV、cycle、ramp、達成率、SEのPoC・travel評価は非公開。", collaboration: "AE・BDR・Senior Sales Engineer、Marketing、Partner、CS・Services、Product・AI、Security／LegalがResolution Platformの導入とexpansionで連携する。" };
  addSources(intelligence, [
    { id: "rollout-zendesk-fy2021-sec", label: "Zendesk FY2021 10-K", url: "https://www.sec.gov/Archives/edgar/data/1463172/000146317222000027/zen-20211231.htm", kind: "法定開示", scope: "非公開化前の最終監査通期売上・GAAP損失", checkedAt: researchedAt },
    { id: "rollout-zendesk-ai-2025", label: "Zendesk Resolution Platform AI発表", url: "https://www.zendesk.com/newsroom/press-releases/zendesk-unveils-powerful-new-ai-capabilities-within-the-resolution-platform-to-accelerate-service-at-scale/", kind: "企業公式", scope: "projected AI ARR・AI利用顧客・resolution scale", checkedAt: researchedAt },
    { id: "rollout-zendesk-media-kit", label: "Zendesk 2026 Media Kit", url: "https://web-assets.zendesk.com/zendesk/pages/newsroom/media-resources/Zendesk_Media_Kit.pdf", kind: "企業公式", scope: "current leadership・customer・usage scale", checkedAt: researchedAt },
    { id: "rollout-zendesk-jobs-20260817", label: "Zendesk現行Tokyo求人", url: "https://zendesk.wd1.myworkdayjobs.com/en-US/zendesk", kind: "企業公式", scope: "現行3求人・workstyle・言語・報酬境界", checkedAt: researchedAt },
    { id: "rollout-zendesk-japan-leader", label: "Zendesk Japan森太郎氏就任発表", url: "https://www.zendesk.co.jp/company/press/zendesk-japan-taro-mori-2025/", kind: "企業公式", scope: "日本代表・参入年・約80人・Tokyo拠点", checkedAt: researchedAt },
    { id: "rollout-zendesk-daimaru", label: "Zendesk・大丸松坂屋事例", url: "https://www.zendesk.co.jp/customer/daimaru-matsuzakaya/", kind: "企業公式", scope: "国内処理時間・channel・CSAT成果", checkedAt: researchedAt },
    { id: "rollout-zendesk-ajinomoto", label: "Zendesk・味の素デジタルビジネスパートナー事例", url: "https://www.zendesk.co.jp/customer/adp/", kind: "企業公式", scope: "国内対応時間・自己解決成果", checkedAt: researchedAt },
    { id: "rollout-zendesk-earthbrain", label: "Zendesk・EARTHBRAIN事例", url: "https://www.zendesk.co.jp/customer/earthbrain/", kind: "企業公式", scope: "国内CSAT・自己解決・運用規模", checkedAt: researchedAt },
    { id: "rollout-zendesk-ppc-callcenter", label: "個人情報保護委員会 コールセンター注意喚起", url: "https://www.ppc.go.jp/news/careful_information/240124_alert_call_center/", kind: "公的機関", scope: "個人data・従業者・委託先管理の外部要求", checkedAt: researchedAt },
    { id: "rollout-b05-customs-usd-202608", label: "財務省税関 2026年8月16日〜22日公示レート", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchZilliz(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2017", "創業", "Charles Xie氏が創業。", "zilliz-company");
  ensureMilestone(intelligence, "確認不能", "日本市場でGTMを開始（進出年は確認不能）", "Tokyoのfounding求人とcloud regionは確認できるが、法人設立・正式進出年は非公開。", "zilliz-job");
  applyStandard(intelligence, buildCompactPatch({
    slug: "zilliz", leaderName: "Charles Xie", leaderLabel: "創業者・CEO", leaderUrl: "https://zilliz.com.cn/about", localName: "非公開", localLabel: "日本責任者", localUrl: "https://jobs.lever.co/zilliz?workplaceType=hybrid",
    companyId: "zilliz-company", jobId: "zilliz-job", customersId: "rollout-zilliz-filevine", externalId: "rollout-zilliz-ipa-2026", financeId: "rollout-zilliz-funding-2022",
    targets: ["AI・機械学習基盤", "データ・検索基盤", "RAG・AI Agent開発", "Platform Engineering・SRE運用", "情報システム・セキュリティ"], competitors: "Pinecone、Weaviate、Qdrant、Elasticsearch／OpenSearch、PostgreSQL＋pgvector、cloud-native vector search、self-managed Milvus",
    feature: "Milvusのopen-source vector database、managed Zilliz Cloud、BYOC、Tokyo region、public previewのVector Lakebaseを提供する。", advantage: "OSSで検証できるportabilityとcommunityを入口に、distributed vector search、managed operation、multi-cloud・BYOC、lake-native architectureへ拡張する。", benefit: "RAG・agent・semantic searchをPoCからproductionへ移し、retrieval品質、P99 latency、availability、operator hours、unit costを管理する。", evidence: "Filevineは300億超のvectorを扱い、情報探索をhoursからseconds、情報のconsume／digest／identify時間を60〜80%削減と事例で説明。日本のnamed customer成果は確認できない。",
    marketVerdict: "結論：日本でAI pilotが増える一方、事業価値化とproduction運用は課題。Tokyo regionとfounding AE・Field Engineerは市場投資signalだが、日本の売上・顧客・法人・責任者は非公開。", marketParagraphs: ["RAG、agent、recommendation、multimodal searchがPoCから業務へ移ると、vector量、tenant、filter、update、peak loadが増え、recallだけでなくlatency、availability、freshness、permission、costが事業要件になる。", "今後3〜5年はproduction AIとunstructured data基盤が追い風。一方、既存databaseのvector機能、cloud bundle、self-managed Milvusで足りる場合もあり、AI governance、data control、運用ownerが選定条件になる。", "Genba分析：勝ち筋はdemo精度ではなく、recall、P95／P99、QPS、freshness、recovery、operator hours、1,000 query当たりcostを同じ実負荷で比較し、Tokyo region・BYOC・auditを契約条件へ落とすこと。"],
    cultureHeadline: "現行Japan 2求人はTokyo・Full-Time・Hybrid。出社日数、remote可否、福利厚生は非公開で、米国条件を転用しない。", classification: "ハイブリッド", displayLabel: "東京・ハイブリッド", officeDays: "非公開", remoteOnly: "非公開", flexibility: "役割別の詳細は非公開",
    goodFor: ["Vector DB・RAGをproduction KPIで売りたい", "OSSからEnterprise契約へのGTMを作りたい", "Japan founding teamで技術とcommercialを横断したい"], cautionFor: ["国内referenceが豊富な成熟組織を求める", "小規模PoCだけの短い商談を望む", "曖昧な役割境界や初期市場buildを避けたい"],
    unresolved: [["日本traction", "現行2求人とTokyo regionは売上の証明ではない。", "日本の顧客、pipeline、ACV、production use case、PoC-to-production率は？"], ["法人・leadership", "日本法人名、責任者、office、headcountを一次情報で確認できない。", "雇用主体、reporting、意思決定権、採用計画は？"], ["OSSからCloud", "約80%はCloud顧客のMilvus起点比率でconversion率ではない。", "Milvus cohortのconversion、cycle、expansion、churnは？"], ["production benchmark", "vendor benchmarkはworkload条件で変わる。", "実dataでrecall、P99、QPS、recovery、unit costをどう比較する？"], ["報酬・達成", "給与、OTE、quota、ramp、達成率は非公開。", "base／variable、quota、territory、ramp、達成者比率、FFEの評価指標は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高・ARR", value: "非公開", detail: "10,000超の利用組織、GitHub stars、調達額を売上高・ARRとして扱わない。", sourceIds: ["zilliz-company", "rollout-zilliz-funding-2022"] },
    { label: "収益性", value: "非公開", detail: "営業利益、純利益、EBITDA、FCF、margin、黒字・赤字は一次情報で確認できない。", sourceIds: ["rollout-zilliz-funding-2022"] },
    { label: "累計調達", value: "1億1,300万米ドル（約183.2億円）", detail: "latest disclosed roundは2022年の6,000万米ドル。調達額は売上・評価額ではない。1ドル=162.15円の参照換算。", sourceIds: ["rollout-zilliz-funding-2022", "rollout-b05-boj-usd-20260716"] },
    { label: "利用・community", value: "10,000超の組織／45,000超のGitHub stars", detail: "global usageとcommunityの会社公表値。paid・active・Japan顧客数ではない。Cloud顧客の約80%がMilvus user起点だが、有料転換率ではない。", sourceIds: ["zilliz-job", "zilliz-finance"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "51〜200人（外部directory range）", detail: "LinkedIn公開rangeの二次情報。一次情報の実数ではなく、売上規模比較ではこのrangeの中点と同category企業の1人当たり売上から【Genba仮説】を算出する。", sourceId: "rollout-zilliz-linkedin" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "Japan founding teamの求人はあるが人数は非公開。", sourceId: "zilliz-job" };
  intelligence.companyStats.japanOffice = { value: "非公開", detail: "Tokyo求人とAWS Tokyo regionは確認できるが、法人office住所ではない。", sourceId: "zilliz-job" };
  intelligence.companyStats.japanSince = { value: "確認不能", detail: "日本法人・正式な進出年は一次情報で確認できない。", sourceId: "zilliz-job" };
  intelligence.customerProof = [
    { company: "Filevine（海外事例）", products: "Zilliz Cloud", outcome: "300億超のvectorで、attorneyの情報探索をhoursからseconds、情報処理時間を60〜80%削減と説明。", implication: "vendor-selected・顧客自己申告で、日本成果や平均効果を保証しない。", sourceId: "rollout-zilliz-filevine" },
  ];
  intelligence.roleLens = {
    salesMotion: "現行はEnterprise AEとFounding Field Engineerの2件。AEがpipeline、value quantification、negotiation、expansionを、FFEがtechnical discovery、PoC、go-live、production adoption、engineering escalationを担う。",
    compensation: "日本向け給与、OTE、pay mix、equity、bonusは2求人とも非公開。米国求人の条件を転用しない。",
    quota: "AE quota、territory、account数、ACV、cycle、ramp、達成率は非公開。FFEのPoC・production・support評価指標も非公開。",
    collaboration: "AE、Marketing、Partner、SA、FFE、global Product・Engineeringが連携するfounding motion。残存Solutions Architectページは公式一覧から外れており現行求人に含めない。",
  };
  addSources(intelligence, [
    { id: "rollout-zilliz-funding-2022", label: "Zilliz Series B extension発表", url: "https://www.businesswire.com/news/home/20220824005057/en/Vector-Database-Company-Zilliz-Raises-%2460-Million-Series-B-Extension-to-Expand-Its-Operations-in-Silicon-Valley", kind: "外部集計", scope: "累計調達額・最新開示round", checkedAt: researchedAt },
    { id: "rollout-zilliz-filevine", label: "Zilliz・Filevine事例", url: "https://zilliz.com/customers/filevine", kind: "企業公式", scope: "global customer scale・探索時間・顧客自己申告成果", checkedAt: researchedAt },
    { id: "rollout-zilliz-ipa-2026", label: "IPA DX動向2026", url: "https://www.ipa.go.jp/pressrelease/2026/press20260716.html", kind: "公的機関", scope: "日本企業のAI導入と価値創出の外部環境", checkedAt: researchedAt },
    { id: "rollout-zilliz-linkedin", label: "LinkedIn Zilliz会社規模", url: "https://www.linkedin.com/company/zilliz/", kind: "外部集計", scope: "社員規模range（一次未確認）", checkedAt: researchedAt },
    { id: "rollout-b05-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchFive(records: Record<string, CompanyPublicIntelligence>) {
  if (records.okta) patchOkta(records.okta);
  if (records.pagerduty) patchPagerDuty(records.pagerduty);
  if (records.sonar) patchSonar(records.sonar);
  if (records.zendesk) patchZendesk(records.zendesk);
  if (records.zilliz) patchZilliz(records.zilliz);
}
