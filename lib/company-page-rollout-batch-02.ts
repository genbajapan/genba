import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import {
  applyStandard,
  buildCompactPatch,
  rolloutResearchedAt as researchedAt,
} from "@/lib/company-page-rollout-standard-helpers";

function ensureMilestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) {
    intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
  }
}

function addSources(intelligence: CompanyPublicIntelligence, sources: CompanyPublicIntelligence["sources"]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function patchGlean(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "glean", leaderName: "Arvind Jain", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.glean.com/about", localName: "小澤 正治", localLabel: "日本カントリーマネージャー", localUrl: "https://prtimes.jp/main/html/rd/p/000000004.000179911.html",
    companyId: "glean-platform", jobId: "glean-job-enterprise", customersId: "glean-konoike", externalId: "glean-ai-guideline", financeId: "glean-arr-200",
    targets: ["大手企業の情報システム", "製造・物流", "金融・保険", "人事・社内業務", "開発・カスタマーサポート"], competitors: "Microsoft 365 Copilot、Google Gemini Enterprise、Elastic、Coveo、社内RAG・検索内製",
    feature: "社内SaaS・文書・会話を権限付きで横断する検索、AI Assistant、業務Agentを一つのEnterprise Contextで提供する。", advantage: "既存systemを置換せず、connector、権限、人物・contentの関係、Agent実行を同じcontextへつなぐ。", benefit: "情報探索、問い合わせ処理、content制作、onboardingの時間を短縮し、AIの全社利用率と統制を高める。", evidence: "鴻池運輸は第1段階で1,200 licenseを導入。Booking.comは動画制作を8週から2週へ、Zillowは利用率80%超・1人週1.5時間超削減を公開。",
    marketVerdict: "結論：生成AIを個人利用から全社業務へ移す需要は強い。ARR成長と日本責任者就任は投資signalだが、日本ARR、継続率、quota達成率は非公開。", marketParagraphs: ["企業内の文書、ticket、会話、SaaSが分断し、人とAIが最新版・権限・業務contextを揃えにくい。国内の鴻池運輸事例は、検索だけでなくAgent開発とAI人材育成までを全社基盤の目的に置く需要を示す。", "今後3〜5年は、汎用modelの性能差より、permission、出典、connector、Agent governance、adoption、ROIが選定軸になる。Gleanは日本Country Managerの下でStrategic・Enterprise AEとSDRを採用し、直販とpartnerを広げる局面にある。", "Genba分析：勝ち筋はAI license数ではなく、検索時間、解決時間、cycle time、weekly active use、Agent成果を導入前後で示すこと。suite bundleと内製RAGが価格・統合の反証になる。"],
    cultureHeadline: "日本の現行営業求人は日本在住remoteを明記。AI fluency、greenfield territory、data-driven PoCを重視するscale-upで、完成したplaybookより仮説検証の速度が求められる。", classification: "フルリモート", displayLabel: "日本在住のリモート", officeDays: "固定出社日の記載なし", remoteOnly: "現行の日本営業求人でremoteを確認", flexibility: "顧客対応・役割により確認",
    goodFor: ["Enterprise AIの日本市場を作りたい", "ROI付きPoCと全社定着を設計したい", "IT・Security・業務部門を横断したい"], cautionFor: ["完成したterritoryと手順を最優先する", "短期・単一buyerの商談を好む", "AI governanceやtechnical discoveryを避けたい"],
    unresolved: [["日本の事業規模", "グローバルARR成長を日本の再現性へ置き換えられない。", "日本の有料顧客数、ARR、GRR、NRRは？"], ["territory", "StrategicとEnterpriseのaccount境界とwhite spaceが達成難度を左右する。", "named account数、既存顧客、平均ACV、cycleは？"], ["PoCから本番", "security reviewとchange managementで全社化が止まる可能性がある。", "PoC成功・有償化・全社展開の転換率と期間は？"], ["支援capacity", "AE、SE、CS、partnerの同時案件数が成長制約になりうる。", "日本のSE・CS・partner体制と案件分担は？"], ["報酬と成長", "給与・OTE・quota・昇進実績は非公開。", "base、variable、quota、達成者比率、昇進例は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高", value: "非公開", detail: "非公開企業。年間売上高・純収益は確認できない。ARRを売上高として扱わない。", sourceIds: ["glean-arr-200"] },
    { label: "収益性", value: "非公開", detail: "純利益、営業利益、EBITDA、フリーキャッシュフロー、marginは公開情報で確認できない。", sourceIds: ["glean-arr-200"] },
    { label: "ARR", value: "$300M超（約486.5億円超）", detail: "2026年5月の会社発表。ARRは年間売上高ではなく、監査済み財務数値でもない。1ドル=162.15円（日本銀行 2026年7月16日中心相場）の参照換算。", sourceIds: ["rollout-glean-arr-300", "rollout-b02-boj-usd-20260716"] },
    { label: "国内導入規模", value: "1,200 license", detail: "鴻池運輸の第1段階。日本全体の顧客数ではない。", sourceIds: ["glean-konoike"] },
  ];
  addSources(intelligence, [
    { id: "rollout-glean-arr-300", label: "Glean ARR 3億ドル到達発表", url: "https://www.glean.com/press/glean-surpasses-300m-arr-unrivaled-enterprise-context-fuels-ai-adoption", kind: "企業公式", scope: "ARR・利用部門・利用率・対象国", checkedAt: researchedAt },
    { id: "rollout-b02-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
}

function patchHubSpot(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2006", "創業", "Brian Halligan氏とDharmesh Shah氏が創業。", "hs-japan-info");
  ensureMilestone(intelligence, "2016", "日本法人を設立し日本進出", "HubSpot Japan株式会社を2016年2月に設立。", "hs-japan-info");
  applyStandard(intelligence, buildCompactPatch({
    slug: "hubspot", leaderName: "Yamini Rangan", leaderLabel: "CEO", leaderUrl: "https://www.hubspot.com/company/management", localName: "伊佐 裕也", localLabel: "日本カントリーマネージャー", localUrl: "https://www.hubspot.jp/country-manager-20260401",
    companyId: "hs-japan-info", jobId: "hs-work-tokyo", customersId: "hs-pca", externalId: "hs-q2-2026-breeze-adoption", financeId: "hs-fy2025-results",
    targets: ["中小・中堅企業", "成長企業の経営・営業", "マーケティング", "カスタマーサービス", "デジタル事業"], competitors: "Salesforce、Microsoft Dynamics 365、Zoho、Adobe、複数point tool・表計算",
    feature: "CRMを中心にMarketing、Sales、Service、Content、Operations、CommerceとBreeze AIを一つの顧客dataで提供する。", advantage: "無料・SMBの入口から部門横断のCustomer Platformへ段階拡張し、同じ顧客履歴とautomationを共有する。", benefit: "lead獲得、商談化、受注、継続支援の引継ぎを減らし、成長施策と顧客対応を同じKPIで運用する。", evidence: "ピー・シー・エー、読売新聞グループなどの国内事例と、FY2025売上31.3億ドル・GAAP通期黒字化を確認。",
    marketVerdict: "結論：中堅・SMBのCRM統合とAI活用需要は続く。日本法人は拡大する一方、売上成長鈍化とAI収益化の不確実性を伴う成熟局面。", marketParagraphs: ["日本の中小・中堅企業では、marketing、営業、supportの顧客dataとautomationが分かれ、引継ぎと効果測定が属人化しやすい。国内事例は、lead獲得だけでなく部門横断の顧客基盤へ拡張する需要を示す。", "今後3〜5年は、検索流入の変化、生成AIによる接客・営業支援、人手不足、first-party data統合が追い風になる。HubSpotは日本でSMBからCorporateまでのAE、BDR、Sales Manager、Solutions Engineerを同時採用している。", "Genba分析：勝ち筋はall-in-oneの機能数でなく、顧客獲得費、商談化、sales cycle、解約、support解決率を共通dataで改善すること。Salesforce等とのupmarket競争と、AI利用が売上へ直結するかが反証になる。"],
    cultureHeadline: "HubSpotはHEART、柔軟な働き方、透明性を掲げる。日本求人はremote可能なroleを含むが、職種ごとの条件を確認し、グローバル集計を日本の配属先へ一般化しない。", classification: "ハイブリッド", displayLabel: "リモート／オフィス選択を含む柔軟な勤務", officeDays: "職種・選択により異なる", remoteOnly: "一部求人で日本国内remote可", flexibility: "配属先・役割ごとに確認",
    goodFor: ["SMBからupmarketへ段階的に経験したい", "CRMとAIを部門横断で売りたい", "inside sales型の再現性を磨きたい"], cautionFor: ["訪問中心のfield salesだけを望む", "高成長率だけを判断軸にする", "月次KPIと透明なfeedbackを避けたい"],
    unresolved: [["成長とterritory", "全社成長の鈍化と日本のseller economicsは別に見る必要がある。", "segment別のquota、達成者比率、平均ACV、cycleは？"], ["AI収益化", "Breeze利用拡大が契約価値へ転換する速度は未確定。", "日本でBreezeがnew・expansion ARRへ寄与した比率は？"], ["segment mobility", "SMB、Mid Market、Corporateの階段が実際の昇進を保証しない。", "直近24カ月のsegment昇格件数と条件は？"], ["役割分業", "AE、BDR、Solutions、CSのhandoffとcreditが成果を左右する。", "pipeline source、technical支援、renewal・expansionのownershipは？"], ["勤務とmanagement", "柔軟性はrole・managerで実態が異なる可能性。", "配属teamの出社、評価、coaching、離職の実例は？"]],
  }));
  intelligence.facts = [
    { label: "四半期売上高", value: "$911.740M（約1,478.4億円）", detail: "2026年Q2、前年同期比20%増。1ドル=162.15円（日本銀行 2026年7月16日中心相場）の参照換算で、決算期間平均ではない。", sourceIds: ["rollout-hs-q2-2026-sec", "rollout-b02-boj-usd-20260716"] },
    { label: "GAAP営業利益", value: "$43.3M（約70.2億円）", detail: "2026年Q2、営業利益率4.8%。前年同期は$24.6Mの営業損失。1ドル=162.15円で参照換算。", sourceIds: ["rollout-hs-q2-2026-sec", "rollout-b02-boj-usd-20260716"] },
    { label: "Non-GAAPフリーキャッシュフロー", value: "$167.9M（約272.3億円）", detail: "2026年Q2。GAAP cash flowと同一視しない。同期のGAAP営業cash flowは$222.8M（約361.3億円）。1ドル=162.15円で参照換算。", sourceIds: ["rollout-hs-q2-2026-sec", "rollout-b02-boj-usd-20260716"] },
    { label: "顧客規模", value: "306,446社", detail: "2026年6月末、前年比14%増。low-priced tierを含み、Enterprise tractionや日本顧客数を直接示さない。", sourceIds: ["rollout-hs-q2-2026-sec"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "9,016人", detail: "2026年6月末のSEC開示。", sourceId: "rollout-hs-q2-2026-sec" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "日本単独の現在人数は公式確認できない。" };
  intelligence.companyStats.japanOffice = { value: "〒100-0005 東京都千代田区丸の内1-4-1 丸の内永楽ビルディング26階", detail: "HubSpot Japan公式会社情報で確認。", sourceId: "hs-japan-info" };
  intelligence.companyStats.japanSince = { value: "2016年2月 / 2016年7月", detail: "日本法人設立 / 営業開始。", sourceId: "hs-japan-info" };
  if (intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.capitalMarketRead = {
      asOf: "2026年Q2 / 2026-08-17確認",
      metrics: [
        { label: "四半期売上高", value: "$911.740M", change: "前年比+20%", interpretation: "subscriptionが98%を占め、成長を維持。", sourceId: "rollout-hs-q2-2026-sec" },
        { label: "GAAP営業利益率", value: "4.8%", change: "前年同期-3.2%から改善", interpretation: "成長を続けながらGAAP黒字化が進む。", sourceId: "rollout-hs-q2-2026-sec" },
        { label: "顧客数", value: "306,446社", change: "前年比+14%", interpretation: "顧客数と顧客当たりsubscription revenueの両方が伸長。", sourceId: "rollout-hs-q2-2026-sec" },
      ],
      growthDrivers: [
        { title: "Customer Platformの複数製品化", evidence: "Marketing、Sales、Service等をSmart CRMへ統合し、複数Hub採用を広げる。", japanMeaning: "SMBからCorporateまで、部門追加とAI利用をexpansionへ変えられるかが重要。", sourceIds: ["hs-pca", "rollout-hs-q2-2026-sec"] },
        { title: "Breeze・Agent Hub", evidence: "CRM contextを使うAI agentとoutcome課金へ投資。", japanMeaning: "人手不足下の営業・support生産性を、利用ではなく顧客KPIで証明する必要がある。", sourceIds: ["hs-q2-2026-breeze-adoption"] },
      ],
      risks: [
        { title: "成長率の成熟", disclosedRisk: "売上成長率は過去の高成長期から低下し、顧客純増とguidanceへの市場感応度が高い。", companyResponse: "利益率・FCFを改善し、upmarketとAI収益化を進める。", genbaRead: "日本では契約数だけでなく、segment別のdeal qualityと複数製品拡張が重くなる可能性。", sourceIds: ["hs-fy2025-results", "rollout-hs-q2-2026-sec"] },
        { title: "AIとbundle競争", disclosedRisk: "大手suite、point solution、generic AI、価格競争を10-Kで開示。", companyResponse: "CRM dataを共通contextに、各Hubとagentを一体提供する。", genbaRead: "AI credit、seat、contact、partner費を含むTCOと定着を比較する必要がある。", sourceIds: ["hs-10k", "hs-q2-2026-breeze-adoption"] },
      ],
      japanCommitment: {
        verdict: "採用・顧客基盤の継続拡張を確認",
        summary: "日本法人、国内事例、新代表、7件のGTM求人を確認。一方、日本単独の売上・顧客数・人数・quota達成率は非公開。",
        signals: [
          { year: "2016", title: "日本法人設立・営業開始", detail: "東京で日本事業を開始。", sourceIds: ["hs-japan-info"] },
          { year: "2026", title: "日本代表就任", detail: "伊佐裕也氏がカントリーマネージャーへ就任。", sourceIds: ["hs-japan-leadership"] },
          { year: "2026", title: "7件のGTM求人", detail: "AE、BDR、Manager、Solutions、Field Marketingを公式掲載。", sourceIds: ["hs-work-tokyo"] },
        ],
        unknowns: ["日本売上・顧客数", "日本社員数", "segment別quota・達成率", "Breezeの日本ARR寄与"],
      },
      scenarios: [
        { scenario: "基本", title: "CRM統合とAI利用が緩やかに拡大", body: "顧客数とARPCを伸ばし、利益率を改善。日本はSMB・Mid-Marketを中心に複数Hubへ拡張。" },
        { scenario: "上振れ", title: "Agent Hubが追加予算を作る", body: "AIがsales・support outcomeを改善し、upmarketと従量収益が加速。" },
        { scenario: "下振れ", title: "bundleと価格競争が拡張を抑える", body: "大手suiteとgeneric AIで差別化が縮まり、獲得・更新・AI monetizationが鈍化。" },
      ],
      sourceIds: ["rollout-hs-q2-2026-sec", "hs-fy2025-results", "hs-japan-info", "hs-japan-leadership"],
    };
  }
  addSources(intelligence, [
    { id: "rollout-hs-q2-2026-sec", label: "HubSpot 2026年Q2 Form 10-Q・決算release", url: "https://www.sec.gov/Archives/edgar/data/1404655/000119312526335232/hubs-20260630.htm", kind: "法定開示", scope: "売上・利益・cash flow・顧客数・従業員数", checkedAt: researchedAt },
    { id: "rollout-b02-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
}

function patchQualtrics(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2016", "日本法人を設立し日本進出", "2016年9月に法人設立、2018年に日本事業を開始。", "qualtrics-japan-registry");
  applyStandard(intelligence, buildCompactPatch({
    slug: "qualtrics", leaderName: "Jason Maynard", leaderLabel: "CEO", leaderUrl: "https://www.qualtrics.com/news/qualtrics-appoints-jason-maynard-as-chief-executive-officer/", localName: "熊代 悟", localLabel: "日本カントリーマネージャー", localUrl: "https://www.qualtrics.com/ja/press/2022-04-qualtrics-japan-new-office/",
    companyId: "qualtrics-japan-company", jobId: "qualtrics-japan-100m-investment", customersId: "qualtrics-japan-100m-investment", externalId: "qualtrics-experience-agents", financeId: "qualtrics-fy2022-results",
    targets: ["大手製造・自動車", "金融・サービス", "顧客体験・マーケティング", "従業員体験・人事", "調査・市場分析"], competitors: "Medallia、SurveyMonkey、Adobe、Salesforce、従業員survey・調査会社・内製",
    feature: "顧客・従業員・製品・ブランドのfeedbackを収集・分析し、Experience Agentsとworkflowで担当部門の行動へつなぐ。", advantage: "survey作成に留まらず、複数experienceのdata、分析、業務actionを同じXM platformで管理する。", benefit: "顧客離反、従業員engagement、製品課題、brand評価を早く検知し、改善責任と効果を追跡する。", evidence: "LIXIL、ヤマハ発動機、マツダなど500社超の国内導入を会社が公表し、日本へ5年間で1億ドルの投資方針を発表。",
    marketVerdict: "結論：人材・顧客接点の変化を継続把握する需要は強い。日本投資方針は追い風だが、非公開化後の財務、買収統合、新CEO体制の実行は未検証。", marketParagraphs: ["企業はsurveyを実施しても、結果が部門別資料に留まり、顧客離反・従業員定着・製品改善の担当actionへつながらない。国内大手導入は、製造・自動車を含む全社experience管理の需要を示す。", "今後3〜5年は、人手不足、人的資本開示、デジタル接点増加、AIによる自由記述・会話分析が追い風になる。QualtricsはExperience AgentsとPress Ganey Forsta統合を進め、日本投資を掲げる。", "Genba分析：勝ち筋はsurvey回答数ではなく、解約、NPS、従業員定着、product defect、改善cycleをaction ownerと結ぶこと。大型買収の統合負荷と既存CRM・BIとの重複が反証になる。"],
    cultureHeadline: "東京求人はhybridまたはonsite寄りを職種別に明記し、TACOSの価値観と顧客experienceを掲げる。新CEO・大型買収下で、変化への適応と成果規律が求められる。", classification: "ハイブリッド", displayLabel: "ハイブリッド／オンサイト（職種別）", officeDays: "求人ごとに異なる", remoteOnly: "現行営業求人で未確認", flexibility: "職種・teamで確認",
    goodFor: ["CX・EXを経営課題へ変えたい", "大企業の複数部門を横断したい", "MarTech・HR Tech双方の専門性を積みたい"], cautionFor: ["組織・製品の変化を避けたい", "survey単体の短期商談だけを望む", "出社・出張条件の柔軟性を最優先する"],
    unresolved: [["非公開化後の成長", "FY2022以降の売上・収益性は非公開。", "直近売上、ARR、EBITDA、FCFと日本の寄与は？"], ["日本投資", "5年1億ドル方針の進捗は経営刷新後も要検証。", "投資額、採用、製品localization、顧客数の進捗は？"], ["買収統合", "Press Ganey Forsta統合が製品・territoryを複雑化する可能性。", "日本のportfolio、account ownership、cross-sell計画は？"], ["quotaと支援", "segment別の達成率とtechnical capacityは非公開。", "Commercial・Enterpriseのquota、達成者比率、SE/TSM分担は？"], ["勤務とculture", "hybrid・onsite・出張条件がroleで異なる。", "配属先の出社、travel、評価、直近の昇進・離職は？"]],
  }));
  intelligence.facts = [
    { label: "最新の公開年間売上高", value: "$1,458.6M（約2,298.2億円）", detail: "FY2022。2023年の非公開化前の最終通期で、現在値ではない。1ドル=157.56円（税関 2026年8月16〜22日適用）の参照換算。", sourceIds: ["qualtrics-fy2022-results", "rollout-b02-customs-usd-202608"] },
    { label: "GAAP営業損失", value: "$1,049.0M（約1,652.8億円）の損失", detail: "FY2022。同期のnon-GAAP営業利益は$57.8M（約91.1億円）。株式報酬等の調整前後を分け、非公開化後の収益性へ外挿しない。1ドル=157.56円で参照換算。", sourceIds: ["qualtrics-fy2022-results", "rollout-b02-customs-usd-202608"] },
    { label: "RPO", value: "$2,174.6M（約3,426.1億円）", detail: "FY2022末の残存履行義務。売上高ではない。1ドル=157.56円で参照換算。", sourceIds: ["qualtrics-fy2022-results", "rollout-b02-customs-usd-202608"] },
    { label: "現在の財務開示", value: "非公開", detail: "2023年の非公開化後の売上、ARR、利益、FCF、NRRは公開情報で確認できない。", sourceIds: ["qualtrics-takeprivate-silverlake"] },
  ];
  addSources(intelligence, [{ id: "rollout-b02-customs-usd-202608", label: "税関 週間為替相場 2026年8月16〜22日", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt }]);
}

function patchSpeak(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2023", "日本進出・日本語版を開始", "日本語版を正式提供。法人版は2025年2月に本格提供。", "speak-japan-b2b");
  applyStandard(intelligence, buildCompactPatch({
    slug: "speak", leaderName: "Connor Zwick", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.speak.com/about", localName: "Yan Kindyushenko", localLabel: "日本統括", localUrl: "https://prtimes.jp/main/html/rd/p/000000016.000116340.html",
    companyId: "speak-origin", jobId: "speak-job-ae", customersId: "speak-japan-b2b", externalId: "speak-jetro-workforce", financeId: "speak-series-c",
    targets: ["大手企業の人事・人材開発", "海外事業部門", "グローバル人材育成", "製造・消費財", "専門職・顧客対応部門"], competitors: "オンライン英会話、集合研修、Duolingo、ELSA、Udemy、社内研修",
    feature: "非native話者向け音声認識、AI会話、roleplay、個別学習と法人管理portalを組み合わせ、発話練習を常時提供する。", advantage: "講師予約に依存せず、consumerで磨いた反復体験を、職種別scenario、利用data、CS運用とともに法人へ展開する。", benefit: "社員の実発話量、利用継続、会議・顧客対応での自信と行動変化を増やし、研修の利用率と展開効率を改善する。", evidence: "日本ではサッポロビールとLIXILの先行導入を公開。法人導入500社超を掲げるが、日本企業だけの件数・ARR・renewalは非公開。",
    marketVerdict: "結論：グローバル人材不足と生成AIの個別学習を背景に需要余地がある。consumer認知は強みだが、日本B2B ARR・更新率・学習効果の比較は非公開。", marketParagraphs: ["日本企業は海外事業を広げても、社員が会議・交渉で話す練習量を確保しにくく、研修受講と業務行動の間にgapが残る。国内先行導入は、一般英語でなく業務scenarioと継続利用を求める需要を示す。", "今後3〜5年は、海外事業、人材不足、AI tutorの改善、人的資本投資の効果測定が追い風になる。SpeakはJapan AE・CSMとAPAC Sales責任者を採用し、B2Bの獲得・定着・地域展開を同時に作る局面にある。", "Genba分析：勝ち筋はseat配布でなく、activation、週次発話、継続、skill assessment、対象業務の行動を導入前後で測ること。既存研修との併用・置換と、self-report以外の効果証明が反証になる。"],
    cultureHeadline: "東京の現行B2B求人はhybridを明記。小規模な地域teamで売上・顧客成果・playbookを同時に作る0→1後半の環境で、役割の曖昧さをprocessへ変える力が必要。", classification: "ハイブリッド", displayLabel: "東京のハイブリッド", officeDays: "正確な日数は非公開", remoteOnly: "現行日本求人で未確認", flexibility: "role・teamで確認",
    goodFor: ["AIと人材育成を事業成果へつなげたい", "日本B2Bの0→1を作りたい", "利用dataからrenewal・expansionを設計したい"], cautionFor: ["完成したEnterprise playbookを求める", "consumerとB2Bの優先順位変化を避けたい", "学習効果の測定から距離を置きたい"],
    unresolved: [["日本B2B economics", "500社のheadlineだけでは契約規模・継続性を判断できない。", "日本ARR、平均seat・ACV、renewal、expansionは？"], ["quota", "brand認知とsellerの達成可能性は別。", "AE quota、達成者比率、cycle、win rateは？"], ["学習成果", "利用率が業務成果へつながるかを検証する必要がある。", "trial・QBRで測るskillと業務KPIは？"], ["役割分業", "AE、CSM、APAC Headのnew・renewal・upsell責任が重なる可能性。", "ownership、credit、担当社数、support分担は？"], ["組織と成長", "小規模teamではscopeが変わりやすい。", "日本team人数、採用計画、評価、昇進・異動例は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高", value: "非公開", detail: "非公開企業。consumer・法人を含む年間売上高・純収益は確認できない。", sourceIds: ["speak-b2b"] },
    { label: "収益性", value: "非公開", detail: "純利益、営業利益、EBITDA、フリーキャッシュフロー、cash burn、marginは公開情報で確認できない。", sourceIds: ["speak-series-c"] },
    { label: "ARR", value: "$50M接近（約78.8億円接近）", detail: "現在の公式B2Bページの会社主張。基準日・監査状況・consumer/B2Bの範囲は明記されず、年間売上高として扱わない。1ドル=157.56円（税関 2026年8月16〜22日適用）の参照換算。", sourceIds: ["speak-b2b", "rollout-b02-customs-usd-202608"] },
    { label: "法人導入", value: "500社超", detail: "公式B2Bページのグローバル値。日本企業だけの件数、有料seat、renewalは非公開。", sourceIds: ["speak-b2b"] },
  ];
  intelligence.companyStats.japanOffice = { value: "〒150-6139 東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア39階", detail: "日本公式発表で確認。", sourceId: "rollout-speak-japan-office" };
  intelligence.companyStats.japanSince = { value: "2022年10月 / 2024年8月", detail: "日本soft launch / 日本法人設立。正式app launchは2023年2月、法人版は2025年2月。", sourceId: "rollout-speak-japan-office" };
  addSources(intelligence, [
    { id: "rollout-speak-japan-office", label: "Speak 日本オフィス移転発表", url: "https://prtimes.jp/main/html/rd/p/000000021.000116340.html", kind: "企業公式", scope: "日本進出・法人・責任者・オフィス", checkedAt: researchedAt },
    { id: "rollout-b02-customs-usd-202608", label: "税関 週間為替相場 2026年8月16〜22日", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
}

function patchStripe(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2016", "日本でサービス提供を開始し進出", "日本でStripeの提供を開始。2020年にTokyo開発拠点を開設。", "rollout-stripe-japan-2024");
  applyStandard(intelligence, buildCompactPatch({
    slug: "stripe", leaderName: "Patrick Collison", leaderLabel: "共同創業者・CEO", leaderUrl: "https://stripe.com/jp/newsroom/information", localName: "平賀 充", localLabel: "日本代表取締役", localUrl: "https://stripe.com/jp/newsroom/news/tour-tokyo-2025",
    companyId: "stripe-company", jobId: "stripe-job", customersId: "stripe-tential", externalId: "stripe-external", financeId: "stripe-finance",
    targets: ["電子商取引（EC）", "SaaS・サブスクリプション", "プラットフォーム・マーケットプレイス", "大手デジタル事業", "財務・決済・不正対策"], competitors: "Adyen、PayPal/Braintree、Checkout.com、Worldpay、国内決済代行、銀行・内製",
    feature: "Payments、Billing、Connect、Tax、Radar、Terminal、data製品をAPIと共通の金融dataで提供する。", advantage: "決済受付だけでなく、請求、platformの資金移動、不正、会計operation、新市場・決済手段の追加を一つの基盤へつなぐ。", benefit: "決済成功率、checkout完了、fraud loss、入金・照合工数、課金変更と新市場launchの時間を改善する。", evidence: "TENTIALは決済成功率98〜99%・6カ月で不正約2億円をblock。東急TsugiTsugiは購入完了率20%向上、日経は導入を2カ月短縮。",
    marketVerdict: "結論：EC、cashless、越境、subscription、platform化は追い風。日本TPV成長とlocal product投資は強いが、売上・take rate・利益額・日本shareは非公開。", marketParagraphs: ["日本のEC・cashless・越境・subscription・marketplace拡大は、決済成功、local methods、不正、3DS、請求、seller payout、照合を経営課題にする。国内事例はconversionと運用・riskを同時改善する需要を示す。", "今後3〜5年は、PayPay等のlocal対応、対面・online統合、AI commerce、usage billing、platform financeが成長軸になる。Stripeは日本でHunter・Growerを分け、Tokyoの製品・開発投資も続ける。", "Genba分析：勝ち筋はAPIの美しさだけでなく、authorization、conversion、fraud、reconciliation、launch time、payment costを共通business caseにすること。国内PSPのlocal運用と価格、複数provider併用が反証になる。"],
    cultureHeadline: "Tokyoの3営業求人はoffice-assignedで月50%以上をofficeまたは顧客先と明記。Users first、speed and craft、高いownershipを掲げ、精度と緊急度を両立する。", classification: "ハイブリッド", displayLabel: "月50%以上をオフィスまたは顧客先", officeDays: "月間勤務時間の50%以上", remoteOnly: "該当しない", flexibility: "team・roleにより上乗せの場合あり",
    goodFor: ["決済を事業・財務・productの経営課題として売りたい", "APIと複雑なEnterprise商談を横断したい", "新規と既存拡張の専門性を明確にしたい"], cautionFor: ["フルリモートを必須にする", "決済手数料だけで営業したい", "高い速度・精度・ownershipを避けたい"],
    unresolved: [["売上と収益性", "TPV成長は売上・利益額を示さない。", "全社・日本の純収益、take rate、利益、FCFは？"], ["territory", "HunterとGrowerのportfolio qualityが達成難度を左右する。", "担当社数、white space、平均ACV、cycleは？"], ["quotaと報酬", "OTEは公開だがpay mix・quota・達成率は非公開。", "base/variable、quota、ramp、達成者比率、acceleratorは？"], ["product expansion", "Payments以外の採用が成長の中心でもcreditが複雑になりうる。", "Billing・Connect・Radar等のpipelineとcredit ruleは？"], ["導入と勤務", "契約からgo-liveまでの責任と対面負荷がroleで異なる。", "implementation ownership、office・顧客訪問、global協業の実態は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高・純収益", value: "非公開", detail: "非公開企業。TPVをStripeの売上高・純収益として扱わない。", sourceIds: ["rollout-stripe-2025-update"] },
    { label: "稼ぐ力", value: "黒字（利益額・marginは非公開）", detail: "会社は2025年もrobustly profitableと説明。純利益、営業利益、EBITDA、FCFの金額は非公開。", sourceIds: ["rollout-stripe-2025-update"] },
    { label: "総決済額（TPV）", value: "$1.9T（約296.6兆円）", detail: "2025年、前年比34%増。Stripeの売上高ではない。1ドル=156.105円（日本銀行 2026年2月24日17時レンジ中値）の参照換算。", sourceIds: ["rollout-stripe-2025-update", "rollout-stripe-boj-20260224"] },
    { label: "Revenue suite annual run rate", value: "$1B見込み（約1,561.1億円）", detail: "2026年中の見込み。Stripe全社ARR・年間売上高ではない。1ドル=156.105円で参照換算。", sourceIds: ["rollout-stripe-2025-update", "rollout-stripe-boj-20260224"] },
  ];
  intelligence.companyStats.japanOffice = { value: "東京（正確な住所は本調査で確認不能）", detail: "Tokyo officeと開発拠点を公式発表で確認。現行住所は補完しない。", sourceId: "rollout-stripe-japan-2024" };
  intelligence.companyStats.japanSince = { value: "2016年", detail: "日本でのサービス提供開始。2020年にTokyo開発拠点を開設。", sourceId: "rollout-stripe-japan-2024" };
  addSources(intelligence, [
    { id: "rollout-stripe-2025-update", label: "Stripe 2025年事業アップデート", url: "https://stripe.com/jp/newsroom/news/stripe-2025-update", kind: "企業公式", scope: "TPV・収益性・利用規模・評価額", checkedAt: researchedAt },
    { id: "rollout-stripe-boj-20260224", label: "日本銀行 外国為替市況 2026年2月24日", url: "https://www.boj.or.jp/statistics/market/forex/fxdaily/fxlist/fx260224.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=156.105円）", checkedAt: researchedAt },
    { id: "rollout-stripe-japan-2024", label: "Stripe Tour Tokyo 2024", url: "https://stripe.com/en-jp/newsroom/news/tour-tokyo-2024", kind: "企業公式", scope: "日本提供開始・Tokyo開発拠点・国内顧客", checkedAt: researchedAt },
  ]);
}

export function applyCompanyPageRolloutBatchTwo(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  if (intelligenceBySlug.glean) patchGlean(intelligenceBySlug.glean);
  if (intelligenceBySlug.hubspot) patchHubSpot(intelligenceBySlug.hubspot);
  if (intelligenceBySlug.qualtrics) patchQualtrics(intelligenceBySlug.qualtrics);
  if (intelligenceBySlug.speak) patchSpeak(intelligenceBySlug.speak);
  if (intelligenceBySlug.stripe) patchStripe(intelligenceBySlug.stripe);
}
