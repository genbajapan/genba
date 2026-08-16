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

function patchAghanim(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2023", "創業", "2023年6月にAghanim Inc.を創業。", "rollout-aghanim-funding-2024");
  ensureMilestone(intelligence, "確認不能", "日本市場で採用を開始", "2026年に日本向けRemote求人2件を確認。法人設立・正式進出年月ではない。", "aghanim-job");
  applyStandard(intelligence, buildCompactPatch({
    slug: "aghanim",
    leaderName: "Konstantin Golubitsky / Constantin Andry / Albert Tugushev",
    leaderLabel: "共同創業者",
    leaderUrl: "https://aghanim.com/",
    localName: "非公開",
    localLabel: "日本責任者",
    localUrl: "https://jobs.ashbyhq.com/aghanim/0b7e0d14-4741-4439-bdba-67dca40af857",
    companyId: "aghanim-company",
    jobId: "aghanim-job",
    customersId: "aghanim-docs",
    externalId: "aghanim-jftc",
    financeId: "aghanim-company",
    targets: ["モバイルゲーム開発会社", "ゲーム事業責任者・P&L", "コマース・LiveOps", "決済・Finance", "製品・CRM・Community"],
    competitors: "Xsolla、Coda Payments、gaming web store、PSP＋税務・fraud・support内製、publisher内製Game Hub",
    feature: "Game Hub、Merchant of Record、Billing Engine、catalog、segmentation、LiveOps、loyalty、communityをmobile gameのD2C基盤として提供する。",
    advantage: "Adyen等の決済処理基盤を組み込みつつ、checkoutだけでなくgaming固有の税・fraud・返金・support・offer・player engagementまで一体運用する。",
    benefit: "studioがplayerとの直接接点と購買dataを持ち、conversion、AOV、repeat、margin、LTV、campaign cycleを自社で改善できる可能性がある。",
    evidence: "公式site・docsとAdyen提携は製品範囲を示す一方、固有顧客名、導入KPI、日本でのproduction実績は確認できない。会社claimを顧客成果として扱わない。",
    marketVerdict: "結論：日本のmobile ecosystemで代替payment・marketplaceの選択肢が増えることは追い風。Head of BD Japan求人は市場開拓signalだが、日本法人、顧客、売上、delivery体制は非公開で、greenfield territoryとして検証が必要。",
    marketParagraphs: [
      "mobile game studioはapp storeへ決済・販売・player接点を依存し、margin、first-party data、offer実験、loyaltyを自社で制御しにくい。",
      "今後3〜5年は日本のmobile競争ルール変更とD2C志向が追い風。一方、platform条件、税・返金・fraud・support、既存publisher基盤、consumer trustが投資条件になる。",
      "Genba分析：勝ち筋は手数料だけでなく、対象titleでGame Hub adoption、conversion、AOV、repeat、payment success、fraud、net revenue、LiveOps cycleをbaseline比較すること。",
    ],
    cultureHeadline: "現行Japan求人はHead of BDとCustomer Success Producerの2件で、いずれもFull-time・Remote。給与、bonus、雇用主体、労働時間は非公開。",
    classification: "フルリモート",
    displayLabel: "日本・リモート",
    officeDays: "出社指定なし",
    remoteOnly: "公式求人でRemote",
    flexibility: "勤務時間・居住地・出張条件の詳細は非公開",
    goodFor: ["Gaming D2Cの日本市場をゼロから作りたい", "PaymentsとLiveOpsをP&Lで売りたい", "studio・partner・key accountを横断したい"],
    cautionFor: ["国内顧客proofが豊富な成熟組織を求める", "明確な日本法人・delivery teamを必須にする", "既製playbookだけを実行したい"],
    unresolved: [
      ["日本territory", "Head of BD求人は投資signalだが売上の証明ではない。", "日本のtarget studio、pipeline、paid customer、ACV、sales cycleは？"],
      ["顧客proof", "固有顧客名と導入KPIを公開情報で確認できない。", "production稼働title、GMV、conversion、retention、reference可能な顧客は？"],
      ["delivery体制", "日本法人、office、local implementation・support人数は非公開。", "契約主体、導入owner、support時間帯、escalation、globalとの分担は？"],
      ["product economics", "最大収益改善等の会社claimは顧客実績ではない。", "pricing、take rate、MoR範囲、payment cost、gross margin、成果算定方法は？"],
      ["報酬・達成", "給与、bonus、quota、equity、雇用主体は非公開。", "base／variable、quota、ramp、accelerator、達成条件、equityは？"],
    ],
  }));
  intelligence.facts = [
    { label: "年間売上高・ARR", value: "非公開", detail: "会社claim、調達、取扱高、顧客への収益効果をAghanimの売上高・ARRとして扱わない。", sourceIds: ["aghanim-company"] },
    { label: "収益性", value: "非公開", detail: "営業利益、純利益、EBITDA、FCF、margin、黒字・赤字は一次情報で確認できない。", sourceIds: ["aghanim-company"] },
    { label: "事業固有規模", value: "100超のgameを構築中", detail: "Customer Success求人の会社公表値。顧客数、稼働済みtitle数、売上ではない。", sourceIds: ["rollout-aghanim-cs-job"] },
    { label: "日本の現行求人", value: "2件", detail: "Head of BDとCustomer Success Producer。いずれもFull-time・Remote。", sourceIds: ["aghanim-job", "rollout-aghanim-cs-job"] },
  ];
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "Head of BD求人から日本team人数を推定しない。", sourceId: "aghanim-job" };
  intelligence.companyStats.japanOffice = { value: "確認不能", detail: "Remote求人は確認できるが、日本法人・office住所は確認できない。", sourceId: "aghanim-job" };
  intelligence.companyStats.japanSince = { value: "2026年にJapan市場求人を確認", detail: "正式な日本進出・法人設立年月ではない。", sourceId: "aghanim-job" };
  intelligence.customerProof = [];
  intelligence.roleLens = {
    salesMotion: "Head of BDがmarket strategy、studio・partner・key account、pipeline・closeを、Customer Success ProducerがDTC移行、offer実験、LiveOps、revenue expansionを担う。",
    compensation: "2求人とも給与・bonus・OTEは非公開。CS求人はequity benefitを記載するが額・条件は非公開。",
    quota: "BD quota、ACV、cycle、ramp、達成率、CSのportfolio・retention・expansion目標は非公開。",
    collaboration: "global leadership、Product、Payments・Risk、Implementation・Support、studioを横断するfounding sales・delivery motion。",
  };
  addSources(intelligence, [
    { id: "rollout-aghanim-cs-job", label: "Aghanim Customer Success Producer Japan", url: "https://jobs.ashbyhq.com/aghanim/911b20d1-1a67-4b1f-a899-e64309823fce", kind: "企業公式", scope: "現行日本求人・100超game・role要件", checkedAt: researchedAt },
    { id: "rollout-aghanim-funding-2024", label: "Aghanim 2024 funding・会社概要", url: "https://www.prnewswire.com/news-releases/aghanim-opens-public-access-to-mobile-dtc-enablement-platform-reveals-advisory-board-and-a-new-funding-round-302233875.html", kind: "企業公式", scope: "創業・経営陣・調達金額非公開", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchAirwallex(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2015", "創業", "Melbourneで創業。", "rollout-airwallex-company");
  ensureMilestone(intelligence, "2025", "日本事業を開始・第二種資金移動業登録", "2025年11月に登録し、日本でacquiringを提供開始。", "rollout-airwallex-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "airwallex", leaderName: "Jack Zhang", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.airwallex.com/en-us/who-we-are", localName: "内山 憲（Ken Uchiyama）", localLabel: "Japan Country Manager・日本法人代表", localUrl: "https://www.airwallex.com/ja-jp/newsroom/type-2-fund-transfer-service-provider-in-japan",
    companyId: "rollout-airwallex-company", jobId: "rollout-airwallex-jobs-20260817", customersId: "rollout-airwallex-japan", externalId: "rollout-airwallex-meti-ec", financeId: "rollout-airwallex-series-h",
    targets: ["EC・SaaS・マーケットプレイス", "CFO・財務・Treasury", "決済・製品・Engineering", "中小・成長企業", "VC・スタートアップecosystem"], competitors: "Stripe、Adyen、Checkout.com、PayPal、Wise Business、銀行、国内PSP・card／expense platform",
    feature: "globalではBusiness Accounts、FX・transfer、Payments、Cards・Spend、Billing、Treasury、Embedded Financeを提供し、日本ではonline payment acceptanceを提供する。", advantage: "85超のlicense、multi-currency network、API、paymentsからfinance workflowまでのmulti-product基盤を持つ。日本の提供範囲はlocal pageと契約で限定確認する。", benefit: "越境売上のpayment acceptance、settlement、FX、reconciliationを減らし、conversion、資金可視性、月次締め、運用工数を改善する。", evidence: "日本法人のnamed定量事例は確認できない。global scaleと日本license・求人は投資signalだが、日本成果として扱わない。",
    marketVerdict: "結論：越境ECと多通貨取引は追い風。2026年3月annualized revenue 13億米ドル（約2,108.0億円）・transaction volume 2,870億米ドル（約46.54兆円）と高成長だが、日本はpayments中心の初期展開で、国内顧客proofと提供範囲、AUSTRAC監査を検証する必要がある。", marketParagraphs: ["海外販売・仕入が増えると、PSP、銀行、FX、settlement、refund、reconciliationが分断し、Financeのcash visibilityと月次締めが悪化する。", "今後3〜5年は越境ECとglobal operationsが追い風。一方、日本のlicense別提供範囲、fraud・KYC、support、既存銀行・PSPとの総コスト、AML oversightが購入条件になる。", "Genba分析：まず日本で提供中のonline paymentsに限定し、payment success、conversion、settlement、FX、reconciliation工数をbaseline比較する。Business Account等は正式提供後だけ拡張する。"],
    cultureHeadline: "現行Genba対象6求人。AE、AM、Sales Manager、OperationsはTokyo On-site、Inbound SalesとVenture Partnershipsは個別workstyleを確認できない。", classification: "出社中心", displayLabel: "東京・オンサイト中心", officeDays: "個別日数は非公開", remoteOnly: "現行日本対象求人では確認できない", flexibility: "役割ごとのATS表記を優先",
    goodFor: ["paymentsをCFOのcash・operation KPIで売りたい", "日本の立上げ局面でSales・Partner・Opsを横断したい", "global FinTechの規制とspeedを両立したい"], cautionFor: ["global全製品を日本ですぐ売れる前提を置く", "国内の豊富な定量referenceを必須にする", "compliance・operationsを営業外と考える"],
    unresolved: [["日本の提供範囲", "online paymentsは提供中だがBusiness Account等は準備中。", "今四半期に販売・契約・稼働できるproductとlicense範囲は？"], ["国内traction", "日本法人顧客のnamed定量事例を確認できない。", "日本のactive customer、annualized revenue、TPV、retention、reference可能顧客は？"], ["AUSTRAC監査", "2026年にAML／CTF懸念から外部監査命令。", "監査のscope、是正、Japan商談・operationsへの影響は？"], ["Sales・Ops分担", "6対象求人とCompliance・Legal採用を確認。", "KYC、activation、support、expansion、partner creditのownerとSLAは？"], ["報酬・達成", "給与、OTE、quota、担当社数は非公開。", "base／variable、quota、ramp、達成者比率、product別creditは？"]],
  }));
  intelligence.facts = [
    { label: "Annualized revenue", value: "13億米ドル（約2,108.0億円）", detail: "2026年3月時点、前年比74%増。年換算run-rateで監査済み年度売上・ARRではない。", sourceIds: ["rollout-airwallex-series-h", "rollout-b06-boj-usd-20260716"] },
    { label: "収益性", value: "非公開", detail: "純利益、営業利益、EBITDA、FCF、marginは非公開。", sourceIds: ["rollout-airwallex-series-h"] },
    { label: "Annualized transaction volume", value: "2,870億米ドル（約46.54兆円）", detail: "前年比120%超増。顧客取引の取扱高でAirwallex売上ではない。", sourceIds: ["rollout-airwallex-series-h", "rollout-b06-boj-usd-20260716"] },
    { label: "顧客・product mix", value: "67.6万business／revenueの90%超がmulti-product", detail: "direct＋platform customersのglobal値。日本の直接契約社数ではない。", sourceIds: ["rollout-airwallex-series-h"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "2,300人超・27 offices", detail: "2026年Series H会社発表。", sourceId: "rollout-airwallex-series-h" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "対象6求人とCompliance・Legal採用は人数・売上の証明ではない。", sourceId: "rollout-airwallex-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都港区北青山2-14-4", detail: "金融庁の電子決済等代行業者一覧で確認。", sourceId: "rollout-airwallex-fsa" };
  intelligence.companyStats.japanSince = { value: "2023年登録／2025年第二種資金移動業登録", detail: "法人設立日とは分ける。", sourceId: "rollout-airwallex-japan" };
  intelligence.customerProof = [];
  intelligence.roleLens = { salesMotion: "現行対象6件はInbound Sales、AE、AM、Sales Manager、Venture Partnerships、Operation Manager。日本でpayments獲得からpartner、activation・operationsまで構築する。", compensation: "6求人とも給与・OTE・bonus金額は非公開。", quota: "個人・team quota、product別credit、ACV、cycle、ramp、達成率、Ops KPIは非公開。", collaboration: "Sales、Partnerships、Operations、Compliance、Legal、Product、Risk、Supportがlocal licenseとcustomer lifecycleで連携する。" };
  addSources(intelligence, [
    { id: "rollout-airwallex-series-h", label: "Airwallex Series H・2026規模", url: "https://www.airwallex.com/global/newsroom/airwallex-secures-320-million-in-series-h-funding-valuation-hits-11-billion", kind: "企業公式", scope: "annualized revenue・transaction volume・顧客・調達", checkedAt: researchedAt },
    { id: "rollout-airwallex-company", label: "Airwallex会社概要", url: "https://www.airwallex.com/en-us/who-we-are", kind: "企業公式", scope: "創業・製品・経営", checkedAt: researchedAt },
    { id: "rollout-airwallex-japan", label: "Airwallex日本・第二種資金移動業登録", url: "https://www.airwallex.com/ja-jp/newsroom/type-2-fund-transfer-service-provider-in-japan", kind: "企業公式", scope: "日本代表・登録・提供開始", checkedAt: researchedAt },
    { id: "rollout-airwallex-fsa", label: "金融庁 電子決済等代行業者一覧", url: "https://www.fsa.go.jp/menkyo/menkyoj/dendai.pdf", kind: "公的機関", scope: "日本法人・登録・住所", checkedAt: researchedAt },
    { id: "rollout-airwallex-jobs-20260817", label: "Airwallex Japan現行求人", url: "https://careers.airwallex.com/", kind: "企業公式", scope: "対象6求人・日本体制・勤務条件", checkedAt: researchedAt },
    { id: "rollout-airwallex-meti-ec", label: "経産省 2024年EC市場調査", url: "https://www.meti.go.jp/policy/it_policy/statistics/outlook/250826_kohyoshiryo.pdf", kind: "公的機関", scope: "越境ECの外部環境", checkedAt: researchedAt },
    { id: "rollout-airwallex-austrac", label: "AUSTRAC Airwallex外部監査命令", url: "https://www.austrac.gov.au/new-and-media/news/austrac-orders-audit-airwallex-suspected-amlctf-compliance-failures", kind: "公的機関", scope: "AML／CTF反証・監査", checkedAt: researchedAt },
    { id: "rollout-b06-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchAmplitude(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2011", "創業・法人化", "Sonalightとして法人化し、2012年にAmplitude事業を開始。", "rollout-amplitude-10k-2025");
  ensureMilestone(intelligence, "確認不能", "日本事業を開始", "日本事業とCountry Managerは確認できるが、法人設立・正式進出年月は確認不能。", "rollout-amplitude-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "amplitude", leaderName: "Spenser Skates", leaderLabel: "共同創業者・CEO", leaderUrl: "https://amplitude.com/", localName: "仁枝 かおり（Kaori Nieda）", localLabel: "Country Manager for Japan", localUrl: "https://amplitude.com/press/expanded-investment-japan",
    companyId: "rollout-amplitude-10k-2025", jobId: "rollout-amplitude-jobs-20260817", customersId: "rollout-amplitude-lifull", externalId: "rollout-amplitude-meti-dx", financeId: "rollout-amplitude-q2-2026",
    targets: ["CPO・製品責任者", "成長・Product Operations", "データ・Analytics", "デジタルマーケティング・CX", "CIO・データ統制"], competitors: "Mixpanel、PostHog、Contentsquare、Optimizely、Statsig、LaunchDarkly、Pendo、Adobe・Google Analytics",
    feature: "Product・Web Analytics、Session Replay、Experimentation、Feature Management、Guides・Surveys、Activation、AI Agentsを提供する。", advantage: "行動分析から仮説、実験、feature rollout、再測定までを一つのdata governanceとworkflowへ接続する。", benefit: "分析時間、activation、conversion、retention、実験速度・成功率を改善し、product投資を顧客行動と収益へ結ぶ。", evidence: "LIFULLは分析時間90%削減、実験速度1.5倍、A/B test成功率2.8倍、NTTドコモはd払いonboarding完了率40%から60%と事例で説明。",
    marketVerdict: "結論：AI機能とdigital productの増加は追い風。Q2 2026は売上+21%、ARR+22%、RPO+35%、FCFプラスだがGAAP営業赤字。日本の現行求人は0件で、旧求人を現在の投資signalに使えない。", marketParagraphs: ["product teamはGA4、warehouse、support、feedbackにdataが分散し、login後の行動、retention、feature価値、実験結果を同じ意思決定へつなげにくい。", "今後3〜5年はAI productと高速なexperimentationが追い風。一方、privacy、event governance、分析人材不足、既存analytics・warehouse・CDPとの重複が購入条件になる。", "Genba分析：重要journey一本でevent設計、funnel、cohort、replay、experimentを接続し、分析時間、conversion、retention、release cycleをbaseline比較する。"],
    cultureHeadline: "2026年8月17日時点で公式Greenhouseの日本・東京求人は0件。終了求人の勤務・言語・報酬条件を現在へ転用しない。", classification: "未確認", displayLabel: "現行日本求人なし", officeDays: "確認不能", remoteOnly: "確認不能", flexibility: "日本の現行求人がないため個別条件は確認不能",
    goodFor: ["Product dataを実験と顧客KPIへ変えたい", "analyticsとgrowthのcategory saleを学びたい", "公開求人再開を継続観測できる"], cautionFor: ["現在応募できる日本GTM職を求める", "GAAP黒字を前提にする", "旧求人条件を現行offerとみなす"],
    unresolved: [["日本採用", "現行日本求人は0件。", "日本GTMの採用再開時期、組織規模、coverage planは？"], ["日本traction", "国内事例はあるが日本売上・顧客数は非公開。", "日本ARR、paid customer、segment、retention、partner比率は？"], ["GAAP赤字", "Q2はFCFプラスだがGAAP営業損失3,520万米ドル（約55.5億円）。", "成長投資、SBC、profitability pathをどう管理する？"], ["data governance", "AI・analytics利用はevent定義とprivacyに依存。", "consent、identity、schema、access、retentionのownerは？"], ["報酬・達成", "現行求人がなく給与・OTE・quotaは確認不能。", "採用再開時のsegment、quota、ramp、達成者比率は？"]],
  }));
  intelligence.facts = [
    { label: "Q2 2026売上高", value: "1億90万米ドル（約159.0億円）", detail: "前年比21%増。1ドル=157.56円の税関公示レートによる参照換算。", sourceIds: ["rollout-amplitude-q2-2026", "rollout-b06-customs-usd-202608"] },
    { label: "GAAP営業損失・FCF", value: "3,520万米ドルの損失／2,370万米ドル（約55.5億円の損失／37.3億円）", detail: "会計上は営業赤字、free cash flowはプラス。non-GAAP利益と混同しない。", sourceIds: ["rollout-amplitude-q2-2026", "rollout-b06-customs-usd-202608"] },
    { label: "ARR", value: "4億1,000万米ドル（約646.0億円）", detail: "前年比22%増。時点run-rateでGAAP売上ではない。", sourceIds: ["rollout-amplitude-q2-2026", "rollout-b06-customs-usd-202608"] },
    { label: "RPO・顧客", value: "4億8,300万米ドル（約761.0億円）／有償5,200社超", detail: "RPOは前年比35%増。ARR 10万米ドル超顧客824社。", sourceIds: ["rollout-amplitude-q2-2026", "rollout-b06-customs-usd-202608"] },
  ];
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "旧外部推定8人は採用しない。", sourceId: "rollout-amplitude-japan" };
  intelligence.companyStats.japanOffice = { value: "東京（現住所非公開）", detail: "SEC上の日本子会社はAmplitude Analytics GK。別会社と同名の登記情報を混同しない。", sourceId: "rollout-amplitude-subsidiaries" };
  intelligence.companyStats.japanSince = { value: "確認不能", detail: "正確な設立・進出年月を一次情報で確定できない。", sourceId: "rollout-amplitude-subsidiaries" };
  intelligence.customerProof = [
    { company: "NTTドコモ", products: "Amplitude Analytics", outcome: "d払いonboarding完了率40%から60%へ改善。", implication: "vendor-selected事例で、施策変更を含み単独因果を保証しない。", sourceId: "rollout-amplitude-docomo" },
    { company: "LIFULL HOME'S", products: "Analytics・Experiment", outcome: "分析時間90%削減、実験速度1.5倍、A/B test成功率2.8倍。", implication: "顧客自己申告の個別事例で全社平均ではない。", sourceId: "rollout-amplitude-lifull" },
  ];
  intelligence.roleLens = { salesMotion: "現行日本求人は0件。過去Enterprise・Commercial・Partner求人は公式boardから消えており掲載しない。", compensation: "現行日本求人がなく、給与、OTE、勤務形態、言語を確認不能。", quota: "日本のquota、territory、ACV、ramp、達成率は非公開。", collaboration: "採用再開時はProduct、Data、Growth、Marketing、IT・PrivacyとSales・Solutions・CSの責任境界を確認する。" };
  addSources(intelligence, [
    { id: "rollout-amplitude-q2-2026", label: "Amplitude Q2 2026決算", url: "https://investors.amplitude.com/news-releases/news-release-details/amplitude-announces-second-quarter-2026-financial-results", kind: "企業公式", scope: "売上・GAAP損失・FCF・ARR・RPO・顧客", checkedAt: researchedAt },
    { id: "rollout-amplitude-10k-2025", label: "Amplitude FY2025 Form 10-K", url: "https://www.sec.gov/Archives/edgar/data/1866692/000119312526057847/ampl-20251231.htm", kind: "法定開示", scope: "沿革・本社・競争・財務", checkedAt: researchedAt },
    { id: "rollout-amplitude-jobs-20260817", label: "Amplitude現行Greenhouse", url: "https://job-boards.greenhouse.io/amplitude", kind: "企業公式", scope: "日本求人0件・終了反証", checkedAt: researchedAt },
    { id: "rollout-amplitude-japan", label: "Amplitude日本投資・Country Manager", url: "https://amplitude.com/press/expanded-investment-japan", kind: "企業公式", scope: "日本責任者・市場投資", checkedAt: researchedAt },
    { id: "rollout-amplitude-subsidiaries", label: "Amplitude子会社一覧", url: "https://www.sec.gov/Archives/edgar/data/1866692/000095017024017102/ampl-ex21_1.htm", kind: "法定開示", scope: "Amplitude Analytics GK", checkedAt: researchedAt },
    { id: "rollout-amplitude-docomo", label: "Amplitude・NTTドコモ事例", url: "https://amplitude.com/ja-jp/blog/aha-moment-ntt-docomo", kind: "企業公式", scope: "国内onboarding成果", checkedAt: researchedAt },
    { id: "rollout-amplitude-lifull", label: "Amplitude・LIFULL事例", url: "https://amplitude.com/blog/lifull-analytics-experiment", kind: "企業公式", scope: "国内分析・実験成果", checkedAt: researchedAt },
    { id: "rollout-amplitude-meti-dx", label: "経産省 デジタルガバナンス・コード3.0", url: "https://www.meti.go.jp/press/2024/09/20240919001/20240919001.html", kind: "公的機関", scope: "data活用とDX経営の外部環境", checkedAt: researchedAt },
    { id: "rollout-b06-customs-usd-202608", label: "財務省税関 2026年8月16日〜22日公示レート", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  if (intelligence.marketStatus.isPublic) intelligence.marketStatus.capitalMarketRead = {
    asOf: "Q2 2026 / 2026-08-17確認", metrics: [
      { label: "四半期売上", value: "1.009億米ドル（約159.0億円）", change: "前年比+21%", interpretation: "成長が再加速。", sourceId: "rollout-amplitude-q2-2026" },
      { label: "GAAP営業損失", value: "3,520万米ドル（約55.5億円）", change: "赤字継続", interpretation: "FCFは2,370万米ドルのプラス。", sourceId: "rollout-amplitude-q2-2026" },
      { label: "ARR・RPO", value: "4.10億／4.83億米ドル（約646.0億円／761.0億円）", change: "+22%／+35%", interpretation: "契約指標は売上より速く成長。", sourceId: "rollout-amplitude-q2-2026" },
    ],
    growthDrivers: [{ title: "大口化とAnalytics→Experiment", evidence: "10万米ドル（約1,575.6万円）超ARR顧客824社、RPO+35%。", japanMeaning: "国内事例をnew logo・expansionへ再現できるかが焦点。", sourceIds: ["rollout-amplitude-q2-2026"] }],
    risks: [{ title: "GAAP赤字と日本採用停止", disclosedRisk: "GAAP営業赤字で、現行日本求人は0件。", companyResponse: "product suiteとAIへ投資。", genbaRead: "日本coverageとprofitabilityの両方を面接・決算で追う。", sourceIds: ["rollout-amplitude-q2-2026", "rollout-amplitude-jobs-20260817"] }],
    japanCommitment: { verdict: "顧客・責任者は確認、現行採用なし", summary: "Country Managerと国内事例は確認できるが、現行公式求人は0件。", signals: [{ year: "2026", title: "日本求人0件", detail: "公式GreenhouseでTokyo/Japan求人なし。", sourceIds: ["rollout-amplitude-jobs-20260817"] }], unknowns: ["日本売上・顧客数", "日本人員・office住所", "採用再開計画"] },
    scenarios: [{ scenario: "基本", title: "成長再加速とFCF継続", body: "AnalyticsとExperimentの大口化が進む。" }, { scenario: "上振れ", title: "AI product測定が新需要", body: "AI機能のevalとiteration基盤として拡張。" }, { scenario: "下振れ", title: "bundle・open toolsが圧迫", body: "既存analyticsと低価格競合でNRRが伸びない。" }],
    sourceIds: ["rollout-amplitude-q2-2026", "rollout-amplitude-jobs-20260817", "rollout-amplitude-docomo", "rollout-amplitude-lifull"],
  };
  refreshSourceDates(intelligence);
}

function patchAnthropic(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2021", "創業", "Dario Amodei氏、Daniela Amodei氏らが創業。", "rollout-anthropic-series-b");
  ensureMilestone(intelligence, "2025", "日本進出・東京office開設", "2025年10月にAPAC初拠点として正式開設。", "rollout-anthropic-tokyo");
  applyStandard(intelligence, buildCompactPatch({
    slug: "anthropic", leaderName: "Dario Amodei / Daniela Amodei", leaderLabel: "共同創業者・CEO／President", leaderUrl: "https://www.anthropic.com/company", localName: "東條 英俊", localLabel: "Representative Director and President, Japan", localUrl: "https://www.anthropic.com/news/opening-our-tokyo-office",
    companyId: "rollout-anthropic-company", jobId: "rollout-anthropic-jobs-20260817", customersId: "rollout-anthropic-rakuten", externalId: "rollout-anthropic-meti-ai-guideline", financeId: "rollout-anthropic-series-h",
    targets: ["CIO・CDO・CTOなど経営層", "AI・機械学習基盤・Engineering", "金融・小売・交通・Utilities", "CISO・リスク・Compliance", "SI・クラウドpartner・顧客成功"], competitors: "OpenAI、Google Gemini、Microsoft Copilot／Azure OpenAI、AWS上の他model、Cohere、Mistral、open-weight・内製LLM、GitHub Copilot、Cursor",
    feature: "Claude.ai、Enterprise、API・Platform、Claude Code、Cowork、MCP・Skillsを提供し、AWS Bedrock、Google Vertex AI、Microsoft Foundry経由でも利用できる。", advantage: "長時間agent task、日本語、tool use、安全性研究、enterprise controlと、直販・cloud・SIの複数deployment routeを組み合わせる。", benefit: "coding、document review、knowledge work、customer workflowの処理時間と品質を改善し、PoCからproductionへeval・権限・監査を含めて展開する。", evidence: "Rakutenは新機能time-to-marketを24日から5日、NRIは日本語文書review時間50%削減、NECは約3万人へ展開と公式事例・発表で説明。",
    marketVerdict: "結論：企業AIのPoC→production移行と人材不足は強い追い風。run-rate revenue 470億米ドル超（約7.41兆円）と急成長する一方、監査済み売上・利益は非公開で、model供給・価格・安全・fallbackをcritical workloadごとに検証する必要がある。", marketParagraphs: ["部門ごとに生成AI・coding agentの試用が増える一方、model選定、data接続、eval、安全審査、human review、費用管理が分断し、PoCが乱立する。", "今後3〜5年はenterprise agentとcodingが追い風。一方、個人data、説明可能性、model更新、供給継続、cloud lock-in、unit costがBuyerの経営・risk条件になる。", "Genba分析：優先業務一本でtask success、処理時間、修正率、escalation、risk event、unit costを同じrubricにし、競合modelとproduction条件で比較する。"],
    cultureHeadline: "東京の現行12求人中、Genba対象9件。全9件がoffice 25%以上で、職種により追加出社の可能性がある。給与・OTE金額は非公開。", classification: "ハイブリッド", displayLabel: "東京・office 25%以上", officeDays: "原則25%以上", remoteOnly: "該当しない", flexibility: "職種によりoffice比率が増える可能性",
    goodFor: ["frontier modelを実業務evalと成果で売りたい", "AI Sales・Architecture・CS・Partnerを横断したい", "安全・governanceを購買条件へ翻訳したい"], cautionFor: ["model brandだけで商談したい", "提供条件が変わらない成熟productを求める", "office 25%以上が難しい"],
    unresolved: [["run-rateの質", "470億米ドル超（約7.41兆円）は監査済みannual revenue・ARRではない。", "認識売上、contract duration、usage concentration、gross margin、cash burnは？"], ["日本coverage", "対象9求人は投資signalだが日本売上の証明ではない。", "日本売上、paid customer、segment、partner比率、team人数は？"], ["production eval", "model benchmarkだけでは顧客workflowの成功を保証しない。", "task success、human correction、risk、latency、unit costの標準rubricは？"], ["供給・fallback", "model・輸出規制・capacity・価格は変動する。", "critical workloadのfallback、version pinning、SLA、責任分界は？"], ["報酬・達成", "9求人の給与金額、OTE、quota、担当社数は非公開。", "base／variable、quota、ramp、達成者比率、partner・usage creditは？"]],
  }));
  intelligence.facts = [
    { label: "Run-rate revenue", value: "470億米ドル超（約7.41兆円）", detail: "2026年5月時点の年換算run-rate。監査済み年間売上・ARR・受注ではない。", sourceIds: ["rollout-anthropic-series-h", "rollout-b06-customs-usd-202608"] },
    { label: "収益性", value: "非公開", detail: "純利益、営業利益、EBITDA、FCF、margin、黒字・赤字は非公開。", sourceIds: ["rollout-anthropic-series-h"] },
    { label: "Claude Code run-rate revenue", value: "25億米ドル超（約3,939億円）", detail: "2026年2月時点の年換算product指標。Anthropic全社売上ではない。", sourceIds: ["rollout-anthropic-series-g", "rollout-b06-customs-usd-202608"] },
    { label: "大口利用顧客", value: "年間100万米ドル（約1.58億円）超相当 1,000社超", detail: "会社発表のglobal usage scale。日本顧客数ではない。", sourceIds: ["rollout-anthropic-compute", "rollout-b06-customs-usd-202608"] },
  ];
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行12求人から実在社員数を推定しない。", sourceId: "rollout-anthropic-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京（街区住所は公式確認不能）", detail: "2025年10月にAPAC初拠点として正式開設。", sourceId: "rollout-anthropic-tokyo" };
  intelligence.companyStats.japanSince = { value: "2025年10月", detail: "東京office正式開設。法人名はAnthropic Japan GK。", sourceId: "rollout-anthropic-tokyo" };
  intelligence.customerProof = [
    { company: "Rakuten", products: "Claude・Claude Code", outcome: "新機能time-to-marketを24日から5日へ79%短縮。", implication: "vendor-selected事例で、99.9%等の内部評価条件を一般化しない。", sourceId: "rollout-anthropic-rakuten" },
    { company: "NRI", products: "Claude", outcome: "専門用語を含む日本語文書review時間を50%削減と説明。", implication: "顧客内部評価で、独立監査値ではない。", sourceId: "rollout-anthropic-nri" },
    { company: "NEC", products: "Claude Enterprise・API", outcome: "NEC Group約3万人へ展開し、industry solutionを共同開発。", implication: "展開規模であり、productivity・revenue効果は別途検証が必要。", sourceId: "rollout-anthropic-nec" },
  ];
  intelligence.roleLens = { salesMotion: "対象9件はApplied AI 2、Channel 2、CSM、Support、FSI・Retail・T&U AE 3。new logo・expansionからpartner、eval、deployment、adoptionまで日本で構築する。", compensation: "全9件で給与金額・OTE・pay mixは非公開。AEはbase＋commission＋equityの存在のみ記載。", quota: "quota、担当社数、ACV、cycle、ramp、達成率、usage・seat expansion、partner-sourced targetは非公開。", collaboration: "Industry Sales、Applied AI、CS、Support、AWS・GCP・SI partner、Product・Engineering・Safetyがproduction adoptionで連携する。" };
  addSources(intelligence, [
    { id: "rollout-anthropic-series-h", label: "Anthropic Series H", url: "https://www.anthropic.com/news/series-h", kind: "企業公式", scope: "run-rate revenue・調達・評価額", checkedAt: researchedAt },
    { id: "rollout-anthropic-series-g", label: "Anthropic Series G", url: "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation", kind: "企業公式", scope: "Claude Code run-rate・顧客規模", checkedAt: researchedAt },
    { id: "rollout-anthropic-compute", label: "Anthropic Google・Broadcom compute partnership", url: "https://www.anthropic.com/news/google-broadcom-partnership-compute", kind: "企業公式", scope: "年間100万米ドル超利用顧客", checkedAt: researchedAt },
    { id: "rollout-anthropic-series-b", label: "Anthropic Series B・創業", url: "https://www.anthropic.com/news/anthropic-raises-series-b-to-build-safe-reliable-ai", kind: "企業公式", scope: "創業・mission", checkedAt: researchedAt },
    { id: "rollout-anthropic-company", label: "Anthropic会社概要", url: "https://www.anthropic.com/company", kind: "企業公式", scope: "PBC・本社・culture", checkedAt: researchedAt },
    { id: "rollout-anthropic-tokyo", label: "Anthropic東京office開設", url: "https://www.anthropic.com/news/opening-our-tokyo-office", kind: "企業公式", scope: "日本代表・office・国内signal", checkedAt: researchedAt },
    { id: "rollout-anthropic-jobs-20260817", label: "Anthropic東京現行求人", url: "https://job-boards.greenhouse.io/anthropic?offices%5B%5D=4035213008", kind: "企業公式", scope: "現行12件・Genba対象9件・勤務条件", checkedAt: researchedAt },
    { id: "rollout-anthropic-rakuten", label: "Anthropic・Rakuten事例", url: "https://www.anthropic.com/customers/rakuten", kind: "企業公式", scope: "国内time-to-market成果", checkedAt: researchedAt },
    { id: "rollout-anthropic-nri", label: "Anthropic・NRI事例", url: "https://www.anthropic.com/customers/nri", kind: "企業公式", scope: "国内文書review成果", checkedAt: researchedAt },
    { id: "rollout-anthropic-nec", label: "Anthropic・NEC提携", url: "https://www.anthropic.com/news/anthropic-nec", kind: "企業公式", scope: "国内展開規模・partner", checkedAt: researchedAt },
    { id: "rollout-anthropic-meti-ai-guideline", label: "経産省 AI事業者ガイドライン1.2", url: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html", kind: "公的機関", scope: "AI governanceの外部要求", checkedAt: researchedAt },
    { id: "rollout-b06-customs-usd-202608", label: "財務省税関 2026年8月16日〜22日公示レート", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchAsana(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2008", "創業", "Dustin Moskovitz氏とJustin Rosenstein氏が創業。", "rollout-asana-company");
  ensureMilestone(intelligence, "2019", "日本事業を開始・東京office", "2019年に日本語版を正式提供し東京officeを展開。", "rollout-asana-japanese-launch");
  applyStandard(intelligence, buildCompactPatch({
    slug: "asana", leaderName: "Dan Rogers", leaderLabel: "CEO", leaderUrl: "https://asana.com/leadership", localName: "確認不能", localLabel: "現日本責任者", localUrl: "https://asana.com/ja/company",
    companyId: "rollout-asana-company", jobId: "rollout-asana-jobs-20260817", customersId: "rollout-asana-fujitec", externalId: "rollout-asana-ipa-2026", financeId: "rollout-asana-q1fy27",
    targets: ["COO・CIO・CDOなど経営層", "PMO・変革・業務運営", "製品・Engineering", "人事・マーケティング・営業運営", "IT・セキュリティ・調達"], competitors: "Microsoft Planner・Project・Teams・Copilot、Atlassian Jira・Confluence・Rovo、monday.com、Smartsheet、ClickUp、Wrike、Notion、ServiceNow、email・spreadsheet",
    feature: "Work Graphを基盤にGoals、Portfolios、Projects、Tasks、Forms・Rules、Reporting・Resource、AI Studio・AI Teammatesを提供する。", advantage: "strategy→portfolio→workflow→owner・dependencyを同じcontextへ接続し、人とAI teammateの権限・承認・監査を仕事の流れへ組み込む。", benefit: "status会議、handoff、期限超過、report作成、重複作業を減らし、cycle time、goal alignment、active adoptionを改善する。", evidence: "Fujitecは会議時間3,200時間削減、Suzukiの一teamは残業35%減、東光電気工事はreport作成30分から5分・年約200時間削減と事例で説明。",
    marketVerdict: "結論：AI導入は広がるが企業価値化が限定される中、work graphとgovernance需要は追い風。Q1 FY2027売上+9.5%・FCFプラスだがGAAP赤字、DBNRR 96〜97%で既存cohort収縮が反証。", marketParagraphs: ["Goal、portfolio、project、task、approvalがM365、Jira、Slack、spreadsheetに分散し、owner、deadline、dependency、decision contextが曖昧になる。AI agentを足しても統制と成果測定がない。", "今後3〜5年はhuman・AI collaborationとportfolio governanceが追い風。一方、既存suite bundle、migration、定着、AI credit、data residency対象範囲、追加toolのTCOが選定条件になる。", "Genba分析：product launchや全社変革の一workflowからGoal→Portfolio→Project→Taskを接続し、会議時間、cycle、期限超過、rework、active adoptionを導入前後で測る。"],
    cultureHeadline: "現行Genba対象はCorporate AE 1件。office-centric hybridで火・木＋追加1日office、残る2平日は原則WFH可。", classification: "ハイブリッド", displayLabel: "東京・週3日office", officeDays: "火・木＋追加1日", remoteOnly: "該当しない", flexibility: "追加office日はteam指定または本人選択。最終条件はrecruiter確認",
    goodFor: ["PLG利用を企業標準へ変えたい", "workflowとAI adoptionを経営KPIで売りたい", "cross-functional transformation saleを学びたい"], cautionFor: ["既存suiteとのTCO比較を避けたい", "DBNRR 100%未満を軽視する", "週3日officeが難しい"],
    unresolved: [["NRR改善", "overall 96%、Core 97%、10万米ドル（約1,621.5万円）超96%。", "churn・contraction要因、segment別NRR、expansion playは？"], ["日本territory", "現行Genba対象求人はCorporate AE 1件。", "日本売上、paid customer、segment、pipeline、coverage、partnerは？"], ["AI monetization", "AI-enabled customerは増えるがcredit実利用・ROIは非公開。", "attach、credits consumed、renewal、workflow別成果は？"], ["product roadmap", "Service Management等はcoming soon。", "GA機能、sellable scope、migration・delivery ownerは？"], ["報酬・達成", "給与、OTE、quota、担当社数は非公開。", "base／variable、quota、ramp、達成者比率、new／expansion creditは？"]],
  }));
  intelligence.facts = [
    { label: "Q1 FY2027売上高", value: "2億509.5万米ドル（約332.6億円）", detail: "前年比9.5%増。1ドル=162.15円の参照換算。", sourceIds: ["rollout-asana-q1fy27", "rollout-b06-boj-usd-20260716"] },
    { label: "GAAP営業損失・調整FCF", value: "1,524万米ドルの損失／3,440万米ドル（約24.7億円の損失／55.8億円）", detail: "non-GAAP営業利益とは分ける。adjusted FCFは独自調整指標。", sourceIds: ["rollout-asana-q1fy27", "rollout-b06-boj-usd-20260716"] },
    { label: "FY2026売上高", value: "7億9,080万米ドル（約1,282.3億円）", detail: "GAAP営業損失1億9,730万米ドル（約319.9億円）。ARRは別途非開示。", sourceIds: ["rollout-asana-fy26", "rollout-b06-boj-usd-20260716"] },
    { label: "顧客・DBNRR", value: "Core顧客26,103社／overall DBNRR 96%", detail: "Core DBNRR 97%、10万米ドル（約1,621.5万円）超顧客817社・DBNRR 96%。いずれも100%未満。", sourceIds: ["rollout-asana-q1fy27", "rollout-b06-boj-usd-20260716"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "1,767人", detail: "2026年1月31日時点。", sourceId: "rollout-asana-10k" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行Tokyo 2求人から人数を推定しない。", sourceId: "rollout-asana-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都千代田区丸の内2-6-1 丸の内パークビルディング8階", detail: "Asana公式会社情報。", sourceId: "rollout-asana-company" };
  intelligence.companyStats.japanSince = { value: "2019年", detail: "日本語版正式提供・Tokyo officeの開始。", sourceId: "rollout-asana-japanese-launch" };
  intelligence.customerProof = [
    { company: "フジテック", products: "Asana", outcome: "約100 projectを90日で移行し、導入前後1年で会議時間3,200時間削減。", implication: "特定部門・vendor-selected事例で全社一般化しない。", sourceId: "rollout-asana-fujitec" },
    { company: "スズキ", products: "Asana", outcome: "15部門700超active accounts。活用が進んだ1 teamで残業35%減。", implication: "事例自身が定着はleaderに依存、全体効果は今後測定と説明。", sourceId: "rollout-asana-suzuki" },
    { company: "東光電気工事", products: "Asana AI Studio", outcome: "report作成30分から5分、年約200時間削減、約3,000枚paperless。", implication: "対象workflow限定の自己申告。", sourceId: "rollout-asana-toko" },
  ];
  intelligence.roleLens = { salesMotion: "現行Genba対象はCorporate AE 1件。small〜large企業のnew logo、pipeline、full-cycle close、strategic upsellをSE・Marketing・CSと担う。People Partnerは掲載対象外。", compensation: "給与、base、bonus、OTE、equity金額は非公開。", quota: "quota、担当社数、ACV、sales cycle、ramp、達成率、new／upsell creditは非公開。", collaboration: "AE、SE、Marketing、CS、Product、Security・IT・ProcurementがWork Graph・AI adoptionとenterprise standard化で連携する。" };
  addSources(intelligence, [
    { id: "rollout-asana-q1fy27", label: "Asana Q1 FY2027決算", url: "https://investors.asana.com/news-releases/news-release-details/asana-announces-first-quarter-fiscal-2027-results", kind: "企業公式", scope: "売上・GAAP損失・FCF・顧客・DBNRR", checkedAt: researchedAt },
    { id: "rollout-asana-fy26", label: "Asana FY2026決算", url: "https://investors.asana.com/news-releases/news-release-details/asana-announces-fourth-quarter-and-fiscal-year-2026-results", kind: "企業公式", scope: "通期売上・GAAP損失・FCF", checkedAt: researchedAt },
    { id: "rollout-asana-10k", label: "Asana FY2026 Form 10-K", url: "https://www.sec.gov/Archives/edgar/data/1477720/000147772026000021/asan-20260131.htm", kind: "法定開示", scope: "従業員・財務・risk・culture", checkedAt: researchedAt },
    { id: "rollout-asana-jobs-20260817", label: "Asana Tokyo現行求人", url: "https://asana.com/ja/jobs/tokyo", kind: "企業公式", scope: "現行2件・Genba対象1件・workstyle", checkedAt: researchedAt },
    { id: "rollout-asana-company", label: "Asana会社情報", url: "https://asana.com/ja/company", kind: "企業公式", scope: "創業・本社・日本office", checkedAt: researchedAt },
    { id: "rollout-asana-japanese-launch", label: "Asana日本語版正式提供", url: "https://asana.com/ja/inside-asana/asana-new-language-japanese", kind: "企業公式", scope: "日本展開時期", checkedAt: researchedAt },
    { id: "rollout-asana-fujitec", label: "Asana・フジテック事例", url: "https://asana.com/ja/case-study/fujitec", kind: "企業公式", scope: "国内会議時間成果", checkedAt: researchedAt },
    { id: "rollout-asana-suzuki", label: "Asana・スズキ事例", url: "https://asana.com/ja/case-study/suzuki", kind: "企業公式", scope: "国内adoption・残業成果・反証", checkedAt: researchedAt },
    { id: "rollout-asana-toko", label: "Asana・東光電気工事事例", url: "https://asana.com/ja/case-study/toko-electrical-construction", kind: "企業公式", scope: "国内AI workflow成果", checkedAt: researchedAt },
    { id: "rollout-asana-ipa-2026", label: "IPA DX動向2026", url: "https://www.ipa.go.jp/pressrelease/2026/press20260716.html", kind: "公的機関", scope: "AI導入と価値創出の外部環境", checkedAt: researchedAt },
    { id: "rollout-b06-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  if (intelligence.marketStatus.isPublic) intelligence.marketStatus.capitalMarketRead = {
    asOf: "Q1 FY2027 / 2026-08-17確認", metrics: [
      { label: "四半期売上", value: "2.051億米ドル（約332.6億円）", change: "前年比+9.5%", interpretation: "一桁台後半の成長。", sourceId: "rollout-asana-q1fy27" },
      { label: "GAAP営業損失", value: "1,524万米ドル（約24.7億円）", change: "margin -7%", interpretation: "赤字は継続するがadjusted FCFはプラス。", sourceId: "rollout-asana-q1fy27" },
      { label: "DBNRR", value: "overall 96%／Core 97%", change: "100%未満", interpretation: "upsell込みでもexisting cohortが収縮。", sourceId: "rollout-asana-q1fy27" },
    ],
    growthDrivers: [{ title: "大口顧客とAI workflow", evidence: "10万米ドル超顧客817社、前年比12%増。", japanMeaning: "国内workflow成果をenterprise expansionへ再現できるかが焦点。", sourceIds: ["rollout-asana-q1fy27"] }],
    risks: [{ title: "NRRとGAAP赤字", disclosedRisk: "overall・Core・大口DBNRRが96〜97%、GAAP赤字。", companyResponse: "AI TeammatesとWork Graph productへ投資。", genbaRead: "new logoだけでなくadoption・retentionの再現性を確認する。", sourceIds: ["rollout-asana-q1fy27"] }],
    japanCommitment: { verdict: "継続投資を確認", summary: "日本法人・office、Corporate AE、国内事例、Enterprise+ Tokyo data centerを確認。", signals: [{ year: "2019", title: "日本語版・Tokyo office", detail: "日本市場で正式展開。", sourceIds: ["rollout-asana-japanese-launch"] }, { year: "2026", title: "Corporate AE採用", detail: "現行Genba対象1件。", sourceIds: ["rollout-asana-jobs-20260817"] }], unknowns: ["日本売上・顧客数", "現日本責任者", "quota・達成率"] },
    scenarios: [{ scenario: "基本", title: "一桁台成長とFCF改善", body: "AI attachと大口化を進めるがNRR回復は緩やか。" }, { scenario: "上振れ", title: "Human・AI work OSへ拡張", body: "AI teammateが新しいworkflow予算を作る。" }, { scenario: "下振れ", title: "suite bundleとcontraction", body: "Microsoft・Atlassianとの重複とNRR低下が成長を圧迫。" }],
    sourceIds: ["rollout-asana-q1fy27", "rollout-asana-fy26", "rollout-asana-jobs-20260817", "rollout-asana-fujitec"],
  };
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchSix(records: Record<string, CompanyPublicIntelligence>) {
  if (records.aghanim) patchAghanim(records.aghanim);
  if (records.airwallex) patchAirwallex(records.airwallex);
  if (records.amplitude) patchAmplitude(records.amplitude);
  if (records.anthropic) patchAnthropic(records.anthropic);
  if (records.asana) patchAsana(records.asana);
}
