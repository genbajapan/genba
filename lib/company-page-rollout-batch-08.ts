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

function patchCohere(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2026", "日本向けGTM開始を確認", "Tokyo RemoteのAE・Partner Development・FDEを公式掲載。法人設立年ではない。", "rollout-cohere-jobs-20260817");
  applyStandard(intelligence, buildCompactPatch({
    slug: "cohere", leaderName: "Aidan Gomez", leaderLabel: "Co-founder・CEO", leaderUrl: "https://cohere.com/about", localName: "非公開", localLabel: "日本責任者", localUrl: "https://jobs.ashbyhq.com/cohere",
    companyId: "rollout-cohere-about", jobId: "rollout-cohere-jobs-20260817", customersId: "rollout-cohere-fujitsu", externalId: "rollout-cohere-ipa-dx2025", financeId: "rollout-cohere-funding-2025",
    targets: ["経営・CIO・CTO・Chief AI Officer", "セキュリティ・CISO・Enterprise Architecture", "AI・ML基盤", "金融・製造・通信・公共", "提携・SI・Cloud・Technology Partner"], competitors: "OpenAI、Anthropic、Google Gemini、AWS Bedrock、Azure AI、Vertex AI、Mistral・Llama等open weight、Microsoft Copilot、Glean、内製RAG・Agent",
    heroSummary: "Cohereは、企業が社内文書や業務データを安全に使いながら、生成AIによる検索、文書作成、業務支援を本番運用するための企業向けAI基盤。機密データを外部に出しにくい構成や、自社のクラウド・データセンター内での運用に対応する。CIOやAI責任者は、実験で止まっている生成AIを、精度、権限、監査、運用コストを管理できる業務システムへ移せる。",
    feature: "North、Compass、Command、Embed、Rerank、TranscribeとModel Vaultを、SaaS、VPC、private cloud、on-prem・air-gappedで提供する。", advantage: "enterprise向けgeneration・retrieval・agent applicationを、private deploymentとdata boundaryを含む一つのstackで設計し、日本語modelは富士通とのTakaneで補強する。", benefit: "機密dataを境界内に保ちながら、日本語検索・生成・agentのtask completion、review時間、hallucination、latency、costを本番workflowで改善できる可能性がある。", evidence: "富士通はCohereと日本語enterprise LLM Takaneを共同開発し、Kozuchiへ提供。business KPIは非公開で、JGLUEの具体条件も公開事例だけでは十分に確認できない。",
    marketVerdict: "結論：日本では生成AIのPoCから業務組込みへのgapと、機密data・governance要求が追い風。東京RemoteのAE・Partner Development・FDE 3件を確認したが、日本法人・office・責任者・日本売上は確認できない。", marketParagraphs: ["生成AIの利用意向が増える一方、機密data、権限、Japanese domain精度、hallucination評価、agent監査が別々に残り、業務組込みが止まる。", "今後3〜5年はregulated industryと行政の本番利用が追い風だが、hyperscalerのmodel catalog、open-weight運用、GPU cost、既存Copilotとの重複が選定条件になる。", "Genba分析：一つの高価値workflowをVPC・on-premを含む同一条件で比較し、task completion、acceptance、review、hallucination、latency、cost/task、運用責任を測る。"],
    cultureHeadline: "現行日本3求人はTokyo Remote。給与・OTE・Japan benefitsは非公開。公式valuesはMomentum、Openness、Autonomyで、remote teamの学習・offsite支援を掲げる。", classification: "フルリモート", displayLabel: "東京・リモート", officeDays: "出社指定なし", remoteOnly: "現行3求人はRemote", flexibility: "FDEは20〜40%出張。Tokyo officeは公式拠点一覧で確認できない",
    goodFor: ["private AIをregulated enterpriseへ届けたい", "model・retrieval・infrastructureを横断したい", "partnerとtechnical deliveryを同時に作りたい"], cautionFor: ["日本の常設officeを必須にする", "current profit・Japan tractionの開示を求める", "GPU・open-weight運用責任を避けたい"],
    unresolved: [["財務の確度", "監査済み売上・利益は非公開で、ARRは二次報道。", "recognized revenue、ARR、gross margin、burn、FCF、retentionは？"], ["日本体制", "Remote 3求人とFujitsu提携は確認。", "日本法人、雇用主体、責任者、人数、support・delivery capacityは？"], ["Private AIの実装", "VPC・on-prem・air-gappedを訴求。", "GPU sizing、upgrade、SLA、incident、data boundary、cost責任は？"], ["Direct・Partner", "AE、PDM、FDEを同時募集。", "account ownership、sourced・influenced credit、FDE coverage、partner delivery責任は？"], ["報酬・達成", "3求人とも給与・OTE・quotaは非公開。", "pay mix、quota、ramp、attainment、POC-to-production、equityは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高・収益性", value: "非公開", detail: "監査済み売上、営業利益、純利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-cohere-about"] },
    { label: "ARR", value: "約2.4億米ドル（約389.2億円）", detail: "2025年末の投資家memoを基にした二次報道。未監査で、売上高ではない。", sourceIds: ["rollout-cohere-arr-secondary", "rollout-b08-boj-usd-20260716"] },
    { label: "2025年資金調達・評価額", value: "5億米ドル（約810.8億円）／68億米ドル（約1.10兆円）", detail: "資金調達と投資家評価であり、売上・利益ではない。", sourceIds: ["rollout-cohere-funding-2025", "rollout-b08-boj-usd-20260716"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "現行公式Aboutで厳密な人数を確認できない。", sourceId: "rollout-cohere-about" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "3求人は採用signalで現在人数ではない。", sourceId: "rollout-cohere-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "確認不能", detail: "Tokyo Remote求人はあるが、公式拠点一覧にTokyo officeはない。", sourceId: "rollout-cohere-about" };
  intelligence.companyStats.japanSince = { value: "確認不能", detail: "Fujitsu提携と日本求人を進出年月・法人設立日へ置換しない。", sourceId: "rollout-cohere-fujitsu" };
  intelligence.customerProof = [{ company: "富士通", products: "Takane・Command系model", outcome: "日本語enterprise LLMを共同開発し、Fujitsu Kozuchiへ提供。", implication: "戦略partnerかつvendor-selected事例。工数・売上・利用社数等のbusiness KPIは非公開。", sourceId: "rollout-cohere-fujitsu" }];
  intelligence.roleLens = { salesMotion: "AEがnet-newをfull-cycleで担当し、PDMがSI・cloud ecosystemを作り、FDEがprivate cloud・on-premをproductionへ導く。", compensation: "3求人とも給与・OTE金額は非公開。", quota: "quota、担当社数、ACV、attainment、partner credit、POC conversionは非公開。", collaboration: "AE、PDM、FDE、Product・Research、Security、SI・cloud partner、顧客CIO・CISO・AI Platformが連携する。" };
  addSources(intelligence, [
    { id: "rollout-cohere-about", label: "Cohere About", url: "https://cohere.com/about", kind: "企業公式", scope: "創業・経営・製品・拠点", checkedAt: researchedAt },
    { id: "rollout-cohere-jobs-20260817", label: "Cohere現行求人", url: "https://jobs.ashbyhq.com/cohere", kind: "企業公式", scope: "日本3求人・勤務地・言語・出張", checkedAt: researchedAt },
    { id: "rollout-cohere-funding-2025", label: "Cohere 2025 funding", url: "https://cohere.com/blog/september-2025-funding-round", kind: "企業公式", scope: "closed financing", checkedAt: researchedAt },
    { id: "rollout-cohere-arr-secondary", label: "TechCrunch Cohere ARR report", url: "https://techcrunch.com/2026/02/13/coheres-240m-year-sets-stage-for-ipo/", kind: "外部集計", scope: "未監査ARR二次報道", checkedAt: researchedAt },
    { id: "rollout-cohere-fujitsu", label: "Cohere・Fujitsu事例", url: "https://cohere.com/customer-stories/fujitsu", kind: "企業公式", scope: "Takane・日本語enterprise AI", checkedAt: researchedAt },
    { id: "rollout-cohere-fujitsu-report", label: "富士通 統合レポート", url: "https://pr.fujitsu.com/jp/ir/report/2024/report125.pdf", kind: "企業公式", scope: "Takane戦略提携の顧客側確認", checkedAt: researchedAt },
    { id: "rollout-cohere-ipa-dx2025", label: "IPA DX動向2025", url: "https://www.ipa.go.jp/event/2025/tbl5kb0000001rzs-att/dx-trend-2025-Webinar-Handouts.pdf", kind: "公的機関", scope: "生成AIの業務組込みgap", checkedAt: researchedAt },
    { id: "rollout-cohere-meti-ai", label: "経産省 AI事業者ガイドラインv1.2", url: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html", kind: "公的機関", scope: "AI governance", checkedAt: researchedAt },
    { id: "rollout-b08-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchContentsquare(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2022.04", "日本法人設立", "Contentsquare Japan合同会社を設立。", "rollout-contentsquare-japan-launch");
  applyStandard(intelligence, buildCompactPatch({
    slug: "contentsquare", leaderName: "Jonathan Cherki", leaderLabel: "Founder・CEO", leaderUrl: "https://contentsquare.com/company/", localName: "堀井 健一郎", localLabel: "Country Manager, Japan", localUrl: "https://go.contentsquare.com/cxcircle-tokyo",
    companyId: "rollout-contentsquare-company", jobId: "rollout-contentsquare-jobs-20260817", customersId: "rollout-contentsquare-smcc", externalId: "rollout-contentsquare-meti-ec", financeId: "rollout-contentsquare-series-f",
    targets: ["デジタル責任者・CDO・CXO", "EC・マーケティング・CRO", "製品・UX・Design", "Web・App開発", "顧客Support・VoC"], competitors: "Adobe Analytics・CJA、Amplitude、FullStory、Glassbox、Quantum Metric、Microsoft Clarity、GA4＋manual research。Hotjar・HeapはContentsquare傘下",
    feature: "Experience Analytics、Product Analytics、Experience Monitoring、Voice of Customer、Conversation Intelligence、mobile analytics、Data Connect、Sense AI・MCPを統合する。", advantage: "journey、session replay、heatmap、error、product event、VoCをautomatic captureで結び、frictionの経済impactから改善後の効果まで同じplatformで追う。", benefit: "CVR、完了率、support contact、error、time-to-insight、施策勝率を改善し、Marketing・Product・Engineeringの優先順位を共通化する。", evidence: "三井住友カードは住所入力UI改善でconversion約5%向上。Sony・NURO、ベルーナ、山田養蜂場、GDOも個別journeyの改善値を公開するが、すべてvendor-selected事例。",
    marketVerdict: "結論：26.1兆円の国内B2C ECとmobile比率上昇は追い風。日本法人・office・国内定量事例はあるが、2026年8月17日時点の公式日本求人は0件で、最新売上・利益・正確なARRは非公開。", marketParagraphs: ["EC・申込・supportがweb、app、AI、chatへ広がるほど、小さなfriction、error、accessibility failureが売上・support・信頼へ直結する。", "今後3〜5年はmobile・digital比率上昇が追い風だが、behavior dataのprivacy、automatic captureのgovernance、GA4・Clarity等との重複、導入工数が選定条件になる。", "Genba分析：重要journeyを一つ選び、journey→session→friction→impact→施策のclosed loopでCVR、contact、error、time-to-insight、incremental ROIを比較する。"],
    cultureHeadline: "現行公式boardで日本求人は0件。GlobalはHybrid・一部Remoteとvaluesを公開するが、日本role固有の勤務・給与・benefitsへ一般化しない。", classification: "未確認", displayLabel: "東京office・現行求人なし", officeDays: "確認不能", remoteOnly: "該当する現行日本求人なし", flexibility: "Global policyはあるが日本個別条件は確認不能",
    goodFor: ["CXを売上・support・engineeringへ横断したい", "定量と定性dataをつなぎたい", "日本のnamed customer proofを使いたい"], cautionFor: ["今すぐ応募できる日本求人を求める", "無料analyticsだけで十分な環境", "最新の財務透明性を必須にする"],
    unresolved: [["現在の財務", "2022年の曖昧なARRとfunding以降、exact current値は非公開。", "recognized revenue、ARR、growth、profit、FCF、retentionは？"], ["日本採用", "現行公式boardはJapan 0件。", "Japan team、open headcount、sales・CS coverage、採用再開条件は？"], ["Incremental ROI", "国内事例は個別施策の成果。", "Contentsquare起因分、control、施策cost、annualized impactは？"], ["Data governance", "session・behavior・conversation dataを扱う。", "masking、consent、retention、access、data flow、AI training条件は？"], ["Commercial条件", "現行求人がなく給与・quotaも不明。", "Japan pricing、contract、implementation、support、renewal、total costは？"]],
  }));
  intelligence.facts = [
    { label: "最新売上高・収益性", value: "非公開", detail: "年間売上、営業利益、純利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-contentsquare-company"] },
    { label: "ARR", value: "正確なcurrent値は非公開", detail: "2022年にseveral hundreds of millions of dollarsとしたhistoricalな曖昧表現のみ。売上ではない。", sourceIds: ["rollout-contentsquare-series-f"] },
    { label: "2022年資金調達・評価額", value: "6億米ドル（約972.9億円）／56億米ドル（約9,080.4億円）", detail: "equity 4億米ドル＋debt 2億米ドル。累計調達14億米ドル（約2,270.1億円）。売上・利益ではない。", sourceIds: ["rollout-contentsquare-series-f", "rollout-b08-boj-usd-20260716"] },
    { label: "事業固有規模", value: "3,000社／130万超sites・apps", detail: "会社表示。Japan customer・paid seat・売上ではない。", sourceIds: ["rollout-contentsquare-jp"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "約1,500人", detail: "現行公式Press表示。", sourceId: "rollout-contentsquare-press" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "終了求人の過去人数をcurrent値に使わない。", sourceId: "rollout-contentsquare-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都千代田区丸の内1-6-5 丸の内北口ビル9階", detail: "現行公式Company・契約資料。", sourceId: "rollout-contentsquare-company" };
  intelligence.companyStats.japanSince = { value: "2022年4月", detail: "Contentsquare Japan合同会社設立。", sourceId: "rollout-contentsquare-japan-launch" };
  intelligence.customerProof = [
    { company: "三井住友カード", products: "Experience Analytics", outcome: "住所入力UI改善でconversion約5%向上。", implication: "vendor-selected事例。母数・control・他施策の寄与は限定的。", sourceId: "rollout-contentsquare-smcc" },
    { company: "Sony Network Communications・NURO", products: "Contentsquare", outcome: "mobile LP CTR 15.6%→17.9%、確認pop-upでapplication chat利用38%減。", implication: "特定journeyの成果で全社平均ではない。", sourceId: "rollout-contentsquare-sony" },
    { company: "ベルーナ", products: "Contentsquare", outcome: "login完了1.4倍、banner更新でPV22.7%増、経由売上7.6%増。", implication: "顧客・vendor事例で第三者監査値ではない。", sourceId: "rollout-contentsquare-belluna" },
  ];
  intelligence.roleLens = { salesMotion: "2026年8月17日時点で現行公式日本求人は0件。過去SDRの条件・team人数を現在へ転用しない。", compensation: "現行日本求人がなく、給与・OTE・pay mixは確認不能。", quota: "Japan quota、担当社数、ACV、cycle、attainment、renewalは非公開。", collaboration: "現行配属は確認不能。一般にDigital・Product・Marketing・Engineering・CS・Privacyが関与するが、Japan組織構成は推定しない。" };
  intelligence.marketStatus.growthSummary = "2012年にJonathan Cherkiがパリで創業。Experience Analyticsを起点にHeap、Hotjar、Loris AIを統合し、Product Analytics、VoC、Conversation Intelligence、AI・MCPまで製品範囲を広げた。現行公式表示は3,000社、130万超のsites・apps、約1,500人・14拠点。正確な最新売上、ARR、利益は非公開で、2022年以降の評価額更新も確認できない。";
  if (!intelligence.marketStatus.isPublic) intelligence.marketStatus.ipoOutlookSummary = "具体的なIPO時期、S-1提出、引受幹事の公式発表は確認できない。2022年の56億米ドル（約9,080.4億円）評価はhistorical financing valueで、現在価値・時価総額ではない。";
  intelligence.marketStatus.milestones = [
    { year: "2012", label: "パリで創業", detail: "Jonathan Cherkiがdigital experienceの理解を目的に創業。", sourceId: "rollout-contentsquare-company" },
    { year: "2022.04", label: "日本法人設立", detail: "Contentsquare Japan合同会社を設立。", sourceId: "rollout-contentsquare-japan-launch" },
    { year: "2022.07", label: "Series F", detail: "equity 4億米ドル（約648.6億円）＋debt 2億米ドル（約324.3億円）、評価額56億米ドル（約9,080.4億円）。現在の売上・評価額ではない。", sourceId: "rollout-contentsquare-series-f" },
  ];
  intelligence.marketStatus.genbaVerdict = { headline: "国内の定量事例とproduct breadthは強いが、現行日本求人と最新財務は確認できない。", body: "三井住友カード、Sony・NURO、ベルーナ等で特定journeyの改善値を確認できる一方、2026年8月17日の公式Lever boardにJapan求人は0件。過去求人のteam人数・顧客数・勤務条件を現在値へ流用せず、採用再開、Japan coverage、pricing、incremental ROIを継続観測する局面。" };
  intelligence.marketStatus.growthDrivers = [
    { title: "web・app・product・VoC・conversationの統合", body: "Heap、Hotjar、Loris AIを取り込み、journeyとfrictionを複数接点で測るplatformへ拡張。", sourceId: "rollout-contentsquare-company" },
    { title: "国内EC・mobile利用の拡大", body: "2024年の国内B2C ECは26.1兆円。重要journeyの小さなfrictionが売上・supportへ与える影響が大きくなる。", sourceId: "rollout-contentsquare-meti-ec" },
  ];
  intelligence.marketStatus.riskHypotheses = [
    { title: "最新財務とJapan scaleが非公開", body: "2022年の曖昧なARR表現以降、recognized revenue、利益、current ARR、日本売上・顧客数・headcountは確認できない。", confidence: "高", evidence: ["公式現況は利用規模を示すが最新財務値を掲載していない", "現行日本求人は0件"], counterSignal: "日本法人・東京officeと複数の国内定量事例は継続して確認できる。", sourceIds: ["rollout-contentsquare-company", "rollout-contentsquare-jobs-20260817"] },
    { title: "無料・既存analyticsとの重複", body: "GA4、Microsoft Clarity、既存product analyticsで基本計測が足りる顧客には、追加platformの導入・運用costが上回り得る。", confidence: "中", evidence: ["無料・bundle型の代替が存在", "behavior dataはprivacy・masking・retentionの設計が必要"], counterSignal: "国内事例ではsession・journeyの文脈から具体的なconversion改善へつないでいる。", sourceIds: ["rollout-contentsquare-smcc", "rollout-contentsquare-company"] },
  ];
  intelligence.marketStatus.japanGrowth = { headline: "日本法人・東京office・国内事例は確認できるが、現行公式日本求人は0件。", narrative: "2022年4月にContentsquare Japan合同会社を設立し、現Country Managerは堀井健一郎。三井住友カード、Sony・NURO、ベルーナ等の国内事例はある。一方、2026年8月17日の公式Lever boardにJapan求人はなく、終了求人にあった過去のteam人数・顧客数をcurrent値として使えない。採用0件だけで撤退・縮小とも断定しない。", qualitativeSignals: [
    { label: "現Country Manager", detail: "公式eventページで堀井健一郎の現職を確認。就任日は当該一次情報から確定しない。", sourceId: "rollout-contentsquare-leader" },
    { label: "公式日本求人0件", detail: "2026年8月17日のLever現行19件にJapan・Tokyoなし。", sourceId: "rollout-contentsquare-jobs-20260817" },
    { label: "国内定量事例", detail: "conversion、CTR、login、PV、売上等の個別workflow成果を複数確認。", sourceId: "rollout-contentsquare-smcc" },
  ], sourceIds: ["rollout-contentsquare-leader", "rollout-contentsquare-jobs-20260817", "rollout-contentsquare-smcc"] };
  intelligence.hypotheses = [
    { topic: "PRODUCT EXPANSION", title: "単一のsession replayから、複数接点のExperience Intelligenceへ拡張。", conclusion: "Heap、Hotjar、Loris AIの統合によりproduct、VoC、conversation、AI接点まで同じbuyerへ広げる余地がある。", confidence: "高", evidence: ["現行公式product portfolio", "3,000社・130万超sites・appsの会社表示"], counterSignals: ["買収機能の統合度、bundle価格、利用定着は顧客ごとに検証が必要"], interviewQuestions: ["日本顧客で複数productへ拡張した比率と、最も再現性のあるuse caseは。"], sourceIds: ["rollout-contentsquare-company"] },
    { topic: "JAPAN HIRING", title: "現行日本求人0件。採用再開条件とJapan coverageは確認が必要。", conclusion: "日本法人と顧客事例は存在するが、2026年8月17日の公式boardでJapan求人は確認できない。", confidence: "高", evidence: ["Lever current APIのJapan・Tokyo 0件"], counterSignals: ["求人0件は欠員がないだけの可能性もあり、撤退・縮小の証拠ではない"], interviewQuestions: ["Japanの現体制、open headcount、採用再開条件、sales・CS coverageは。"], sourceIds: ["rollout-contentsquare-jobs-20260817"] },
    { topic: "ROI AND GOVERNANCE", title: "国内成果は強いが、incremental ROIとprivacyの両方を検証したい。", conclusion: "behavior dataから個別CVR成果を作れる一方、既存analyticsとの差分、masking、retention、導入運用costを含む比較が必要。", confidence: "中", evidence: ["三井住友カードのconversion約5%向上", "Sony・NURO、ベルーナの個別成果"], counterSignals: ["vendor-selected事例で対照群・他施策寄与が限定的"], interviewQuestions: ["既存GA4・Clarity等に対するincremental liftと3年TCO、privacy設計は。"], sourceIds: ["rollout-contentsquare-smcc", "rollout-contentsquare-sony", "rollout-contentsquare-belluna"] },
  ];
  intelligence.cultureNotes = { organizationReadTitle: "GlobalはHybridと4 valuesを掲げるが、日本role固有条件は現在確認できない。", hypothesis: { title: "製品・地域を横断して複雑な体験dataを簡潔にする文化。", body: "公式CareersはBe daring、Be understanding、Be deliberate、Be simplifiersを掲げる。現行日本求人がないため、過去求人のteam規模、出社頻度、給与、benefitsを現在のJapan条件へ一般化しない。" }, careerValue: { title: "CX・Product・Marketing・Engineeringを数値でつなぐ経験。", body: "journey、session、error、VoCとbusiness impactを横断できれば隣接するanalytics・CX領域へ再現性を説明しやすい。ただし応募可能な日本roleは現在確認できない。", confidence: "中" } };
  intelligence.externalSignals = [
    { label: "国内B2C EC", value: "26.1兆円", detail: "2024年。前年比5.1%増、EC化率9.8%。", caveat: "市場拡大はContentsquareの採用・成果を保証しない。", sourceId: "rollout-contentsquare-meti-ec" },
    { label: "現行日本求人", value: "0件", detail: "2026年8月17日の公式Lever board全19件を照合。", caveat: "求人0件だけで撤退・縮小とは断定できない。", sourceId: "rollout-contentsquare-jobs-20260817" },
  ];
  intelligence.leadership = { name: "堀井 健一郎", role: "Contentsquare Japan Country Manager", read: "公式CX Circle Tokyo登壇ページで現職を確認。就任日、日本team人数、組織構成は当該一次情報から確定しない。", sourceId: "rollout-contentsquare-leader" };
  intelligence.salesAppeal = { intro: "現行日本求人はない。採用再開時に判断価値となる事業・顧客基盤を、現在確認できる公式情報だけで整理。", points: [
    { title: "国内の具体的なconversion成果", detail: "三井住友カード、Sony・NURO、ベルーナ等で特定journeyの改善値を確認できる。", sourceIds: ["rollout-contentsquare-smcc", "rollout-contentsquare-sony", "rollout-contentsquare-belluna"] },
    { title: "analyticsを複数teamへ横断", detail: "Experience、Product、VoC、Conversation、MonitoringをDigital・Product・Marketing・Engineeringへ広げる。", sourceIds: ["rollout-contentsquare-company"] },
    { title: "成果とprivacyを同時に扱う", detail: "frictionのbusiness impactだけでなく、masking、retention、access、AI利用条件を設計する必要がある。", sourceIds: ["rollout-contentsquare-company"] },
  ] };
  intelligence.interviewPrep = { intro: "採用が再開した場合、終了求人の過去情報ではなくcurrent Japan体制と役割条件を確認する。", questions: [
    { question: "現在のJapan team構成、役割別人数、採用再開の優先職種は。", why: "現行公式boardはJapan 0件で、current組織規模は非公開。", sourceIds: ["rollout-contentsquare-jobs-20260817"] },
    { question: "国内で再現性の高いuse case、平均導入期間、incremental ROIは。", why: "国内事例は強いが、特定施策・vendor-selectedという限界がある。", sourceIds: ["rollout-contentsquare-smcc", "rollout-contentsquare-sony"] },
    { question: "GA4・Clarity・Adobe・Amplitudeとの勝因・敗因と3年TCOは。", why: "低cost・bundle代替との増分価値を確認したい。", sourceIds: ["rollout-contentsquare-company"] },
  ] };
  intelligence.fitTags = ["Digital Experience", "Product Analytics", "CRO", "VoC", "Session Replay", "Enterprise CX", "Japan求人0件", "継続観測"];
  addSources(intelligence, [
    { id: "rollout-contentsquare-company", label: "Contentsquare Company", url: "https://contentsquare.com/company/", kind: "企業公式", scope: "創業・経営・日本office", checkedAt: researchedAt },
    { id: "rollout-contentsquare-leader", label: "Contentsquare CX Circle Tokyo", url: "https://go.contentsquare.com/cxcircle-tokyo", kind: "企業公式", scope: "現Country Manager", checkedAt: researchedAt },
    { id: "rollout-contentsquare-jp", label: "Contentsquare日本公式", url: "https://contentsquare.com/ja-ja/", kind: "企業公式", scope: "製品・利用規模", checkedAt: researchedAt },
    { id: "rollout-contentsquare-press", label: "Contentsquare Press", url: "https://contentsquare.com/ja-ja/press/", kind: "企業公式", scope: "従業員・拠点・累計調達", checkedAt: researchedAt },
    { id: "rollout-contentsquare-jobs-20260817", label: "Contentsquare現行求人", url: "https://jobs.lever.co/contentsquare", kind: "企業公式", scope: "日本求人0件", checkedAt: researchedAt },
    { id: "rollout-contentsquare-series-f", label: "Contentsquare Series F", url: "https://contentsquare.com/press/600m-growth-investment/", kind: "企業公式", scope: "historical ARR・資金調達・評価額", checkedAt: researchedAt },
    { id: "rollout-contentsquare-japan-launch", label: "Contentsquare Japan設立", url: "https://prtimes.jp/main/html/rd/p/000000004.000080319.html", kind: "企業公式", scope: "日本法人設立", checkedAt: researchedAt },
    { id: "rollout-contentsquare-smcc", label: "Contentsquare・三井住友カード事例", url: "https://contentsquare.com/ja-ja/customers/sumitomo-mitsui-card/", kind: "企業公式", scope: "国内CVR成果", checkedAt: researchedAt },
    { id: "rollout-contentsquare-sony", label: "Contentsquare・Sony Network Communications事例", url: "https://contentsquare.com/customers/sony-network-communications/", kind: "企業公式", scope: "国内CTR・chat成果", checkedAt: researchedAt },
    { id: "rollout-contentsquare-belluna", label: "Contentsquare・ベルーナ事例", url: "https://contentsquare.com/ja-ja/customers/belluna/", kind: "企業公式", scope: "国内login・PV・売上成果", checkedAt: researchedAt },
    { id: "rollout-contentsquare-meti-ec", label: "経産省 2024年度EC市場調査", url: "https://www.meti.go.jp/press/2025/08/20250826005/20250826005.html", kind: "公的機関", scope: "国内EC市場", checkedAt: researchedAt },
    { id: "rollout-b08-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchDatadog(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2018", "日本法人設立・事業開始", "Datadog Japanを設立し日本市場で事業開始。", "rollout-datadog-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "datadog", leaderName: "Olivier Pomel / Alexis Lê-Quôc", leaderLabel: "Co-founder・CEO／CTO", leaderUrl: "https://www.datadoghq.com/about/leadership/", localName: "非公開（Country Managerを募集中）", localLabel: "日本責任者", localUrl: "https://careers.datadoghq.com/detail/7975747/?gh_jid=7975747",
    companyId: "rollout-datadog-about", jobId: "rollout-datadog-jobs-20260817", customersId: "rollout-datadog-toppan", externalId: "rollout-datadog-ipa-threats", financeId: "rollout-datadog-q2-2026",
    targets: ["経営・CIO・CTO・CISO", "開発責任者・SRE・Platform", "開発運用・DevOps・Cloud Operations", "セキュリティ・FinOps", "公共・Digital Business"], competitors: "Dynatrace、New Relic、Splunk Observability、Grafana Cloud、Elastic、AWS CloudWatch、Azure Monitor、Google Cloud Operations、Honeycomb、OpenTelemetry＋自社運用",
    feature: "Infrastructure、APM・Tracing、Logs、RUM・Synthetics、Cloud Security、SIEM、Incident、AI・LLM Observability、FinOpsを一つのSaaS platformで提供する。", advantage: "metrics・traces・logs・experience・security・costを同じtag・contextで相関し、800超integrationとAI-assisted investigationで複数teamの運用をつなぐ。", benefit: "MTTI・MTTR、deploy frequency、alert noise、cloud cost、security triage、tool sprawlを改善し、production riskとdigital business impactを速く説明する。", evidence: "TOPPANはscript作成を1週間から数時間、alert判断を5分からほぼ0へ短縮。一休はdeploy頻度を2週間に1回から1日複数回へ、東芝はcloud costを16%削減。",
    marketVerdict: "結論：cloud・microservices・AIでtelemetryと運用複雑性が増えることは追い風。Q2 2026売上11.21億米ドル（約1,818.3億円）で成長する一方、FY2025はGAAP営業赤字。東京の対象22求人は広い投資signalだが、quota・達成率は非公開。", marketParagraphs: ["digital serviceが売上・顧客接点・重要業務になる一方、APM、log、infra、experience、security、costが別toolで、incident時のownerとbusiness impactが見えにくい。", "今後3〜5年はAI workloadとoperational resilienceが追い風だが、data volume、cardinality、retention、pricing、vendor consolidation、AI誤判定が選定条件になる。", "Genba分析：重要serviceを一つ選び、coverage、MTTI・MTTR、alert noise、deploy、cloud cost、query・ingest cost、engineer時間を既存stackと比較する。"],
    cultureHeadline: "東京の現行対象22求人は全てHybrid。出社日数と給与・OTEは非公開。Sales、SE、CS、Support、Partner、Public Sector、Country leadershipまで幅広く採用する。", classification: "ハイブリッド", displayLabel: "東京・ハイブリッド", officeDays: "非公開", remoteOnly: "該当しない", flexibility: "Field CTOは出張最大50%、一部Supportは週末rotation・顧客訪問あり",
    goodFor: ["observabilityをbusiness outcomeへ翻訳したい", "land-and-expandのplatform salesを学びたい", "Sales・SE・CS・Support・Partnerを横断したい"], cautionFor: ["data量・pricingの複雑性を避けたい", "明確な日本quota公開を必須にする", "Hybrid・出張・rotationが難しい"],
    unresolved: [["GAAP収益性", "成長・FCFとGAAP営業赤字が併存。", "GAAP黒字化、SBC、gross margin、sales efficiencyの計画は？"], ["Japan coverage", "対象22求人と200人超のteam表示を確認。", "segment・product別headcount、territory、SE・CS・Support ratioは？"], ["Data economics", "広いtelemetryと統合が価値。", "ingest・index・retention・replay・AI cost、discount、3年TCOは？"], ["Platform credit", "多数productとnew・expansionを横断。", "product別quota・credit、renewal owner、partner influence、CS expansionは？"], ["報酬・達成", "全現行日本求人で給与・OTEは非公開。", "pay mix、quota、ramp、attainment、accelerator、equityは？"]],
  }));
  intelligence.facts = [
    { label: "Q2 2026売上高", value: "11億2,100万米ドル（約1,818.3億円）", detail: "前年比36%増。GAAP売上。", sourceIds: ["rollout-datadog-q2-2026", "rollout-b08-boj-usd-20260716"] },
    { label: "Q1 2026 GAAP営業利益・FCF", value: "700万米ドル（約11.4億円）／2億8,900万米ドル（約468.6億円）", detail: "Q1売上10.06億米ドル。FCF margin 29%。", sourceIds: ["rollout-datadog-q1-2026", "rollout-b08-boj-usd-20260716"] },
    { label: "FY2025売上・GAAP営業損失", value: "34.3億米ドル（約5,561.7億円）／4,400万米ドルの損失（約71.3億円）", detail: "FY2025 FCF 9.15億米ドル（約1,483.7億円）。GAAPとnon-GAAPを分ける。", sourceIds: ["rollout-datadog-fy2025", "rollout-b08-boj-usd-20260716"] },
    { label: "顧客規模", value: "総顧客33,200／年間経常収益10万米ドル（約1,621.5万円）超4,720", detail: "Q1 total customerとQ2 high-value customer。異なる時点・尺度。", sourceIds: ["rollout-datadog-q1-2026", "rollout-datadog-q2-2026", "rollout-b08-boj-usd-20260716"] },
  ];
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "2026年8月17日",
    metrics: [
      { label: "Q2 2026売上高", value: "11億2,100万米ドル（約1,818.3億円）", change: "前年比+36%", interpretation: "cloud・AI workloadとplatform expansionが成長を支える一方、日本単独売上は非公開。", sourceId: "rollout-datadog-q2-2026" },
      { label: "FY2025 GAAP営業損失・FCF", value: "4,400万米ドルの損失（約71.3億円）／9億1,500万米ドル（約1,483.7億円）", change: "GAAP赤字・FCF黒字", interpretation: "cash generationとGAAP収益性を分けて評価する必要がある。", sourceId: "rollout-datadog-fy2025" },
    ],
    growthDrivers: [
      { title: "ObservabilityからSecurity・FinOps・AIへ拡張", evidence: "metrics・traces・logsを共通contextに、security、cost、AI workloadを同じplatformへ追加。", japanMeaning: "対象22求人はSalesだけでなくSE、CS、Support、Partnerまで日本capacityを広げるsignal。", sourceIds: ["rollout-datadog-jobs-20260817", "rollout-datadog-q2-2026"] },
    ],
    risks: [
      { title: "data volume・pricing・競争", disclosedRisk: "cloud native、open source、observability suitesとの競争と、telemetry量に応じたcostが継続する。", companyResponse: "platform breadth、integrations、AI-assisted investigationと国内support・data centerを拡張。", genbaRead: "重要serviceの運用KPIと3年TCOを既存stackと同条件で比較したい。", sourceIds: ["rollout-datadog-fy2025", "rollout-datadog-jobs-20260817"] },
    ],
    japanCommitment: {
      verdict: "強い採用signalはあるが、日本単独の売上・採算・quota達成率は非公開。",
      summary: "2018年進出、2023年東京data center、現行対象22求人と国内事例を確認できる。",
      signals: [{ year: "2026", title: "対象22求人", detail: "Country、Sales、SE、CS、Support、Partner、Public Sectorを採用。", sourceIds: ["rollout-datadog-jobs-20260817"] }],
      unknowns: ["Japan revenue・ARR・market share", "segment・product別quotaと達成率", "Country Manager採用後の組織設計"],
    },
    scenarios: [
      { scenario: "基本", title: "platform expansion継続", body: "cloud・AI複雑性を追い風に、既存顧客とnew logoへ複数productを拡張する。" },
      { scenario: "上振れ", title: "AI・Security・Public Sectorが加速", body: "国内data centerとlocal coverageがregulated workloadの採用を後押しする。" },
      { scenario: "下振れ", title: "cost最適化とbundle競争", body: "cloud native・open source・競合suiteでtelemetry costとvendor consolidationが圧力になる。" },
    ],
    sourceIds: ["rollout-datadog-q2-2026", "rollout-datadog-fy2025", "rollout-datadog-jobs-20260817"],
  };
  intelligence.companyStats.globalHeadcount = { value: "8,100人超", detail: "現行公式求人の会社紹介。", sourceId: "rollout-datadog-jobs-20260817" };
  intelligence.companyStats.japanHeadcount = { value: "200人超", detail: "現行公式Japan求人の会社紹介。職種別人数ではない。", sourceId: "rollout-datadog-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都千代田区丸の内2-7-2 JPタワー19階", detail: "公式About Japan。", sourceId: "rollout-datadog-japan" };
  intelligence.companyStats.japanSince = { value: "2018年", detail: "日本法人・事業開始。2023年に東京data center。", sourceId: "rollout-datadog-japan" };
  intelligence.customerProof = [
    { company: "TOPPANデジタル", products: "Datadog", outcome: "script作成を1週間から数時間、alert判断を約5分からほぼ0へ短縮。", implication: "特定運用のvendor-selected事例で、全社平均ではない。", sourceId: "rollout-datadog-toppan" },
    { company: "一休", products: "Datadog", outcome: "deployを2週間に1回から1日複数回へ改善。", implication: "process・組織変更も寄与し、Datadog単独因果とは断定しない。", sourceId: "rollout-datadog-ikyu" },
    { company: "東芝", products: "Cloud Cost Management・Observability", outcome: "cloud cost 16%減、alert rate 16%減、30分以内復旧率87%からほぼ100%。", implication: "対象環境の顧客自己申告で一般保証ではない。", sourceId: "rollout-datadog-toshiba" },
  ];
  intelligence.roleLens = { salesMotion: "対象22求人はCountry・Sales leadership、Commercial・Mid-Market・Public Sector sales、SDR、SE・Field CTO、Partner、CS・TAM、Support・Escalationを含む。", compensation: "現行対象求人の日本給与・OTE金額は非公開。", quota: "個人・team quota、担当社数、ACV、cycle、attainment、product・partner・renewal creditは非公開。", collaboration: "Sales、SE、CS、TAM、Support、Product、Security・FinOps、Partner、顧客Engineering・SRE・CIO・CISOが連携する。" };
  addSources(intelligence, [
    { id: "rollout-datadog-about", label: "Datadog Leadership", url: "https://www.datadoghq.com/about/leadership/", kind: "企業公式", scope: "創業者・経営", checkedAt: researchedAt },
    { id: "rollout-datadog-japan", label: "Datadog Japan", url: "https://www.datadoghq.com/ja/about/latest-news/press-releases/datadog-establishes-japanese-subsidiary/", kind: "企業公式", scope: "日本進出・拠点", checkedAt: researchedAt },
    { id: "rollout-datadog-jobs-20260817", label: "Datadog現行Tokyo求人", url: "https://careers.datadoghq.com/all-jobs/?search=&location=Tokyo", kind: "企業公式", scope: "現行25求人・対象22求人・勤務形態", checkedAt: researchedAt },
    { id: "rollout-datadog-q2-2026", label: "Datadog Q2 2026決算", url: "https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-second-quarter-2026-financial-results", kind: "企業公式", scope: "売上・顧客", checkedAt: researchedAt },
    { id: "rollout-datadog-q1-2026", label: "Datadog Q1 2026決算", url: "https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-first-quarter-2026-financial-results/", kind: "企業公式", scope: "売上・GAAP利益・FCF・顧客", checkedAt: researchedAt },
    { id: "rollout-datadog-fy2025", label: "Datadog FY2025決算", url: "https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-fourth-quarter-and-fiscal-year-2025-financial", kind: "企業公式", scope: "通期売上・GAAP損失・FCF", checkedAt: researchedAt },
    { id: "rollout-datadog-toppan", label: "Datadog・TOPPANデジタル事例", url: "https://www.datadoghq.com/ja/case-studies/toppan/", kind: "企業公式", scope: "国内運用成果", checkedAt: researchedAt },
    { id: "rollout-datadog-ikyu", label: "Datadog・一休事例", url: "https://www.datadoghq.com/ja/case-studies/ikyu/", kind: "企業公式", scope: "国内deploy成果", checkedAt: researchedAt },
    { id: "rollout-datadog-toshiba", label: "Datadog国内顧客事例一覧", url: "https://www.datadoghq.com/ja/customers/?lang_pref=ja", kind: "企業公式", scope: "東芝・TDSのcost・alert・復旧成果", checkedAt: researchedAt },
    { id: "rollout-datadog-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "国内operational risk", checkedAt: researchedAt },
    { id: "rollout-b08-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchDbtLabs(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2026", "日本向けRemote採用開始を確認", "統合後の公式Careersで日本Remote 4求人を確認。日本法人設立年ではない。", "rollout-dbt-jobs-20260817");
  applyStandard(intelligence, buildCompactPatch({
    slug: "dbt-labs", leaderName: "George Fraser / Tristan Handy", leaderLabel: "CEO／President", leaderUrl: "https://www.fivetran.com/blog/fivetran-dbt-labs-complete-merger", localName: "非公開", localLabel: "日本責任者", localUrl: "https://www.fivetran.com/careers",
    companyId: "rollout-dbt-merger", jobId: "rollout-dbt-jobs-20260817", customersId: "rollout-dbt-telecy", externalId: "rollout-dbt-ipa-dx2026", financeId: "rollout-dbt-merger",
    targets: ["データ責任者・CDO・Data Platform", "分析開発・Analytics Engineering", "BI・データGovernance", "AI・ML基盤", "財務・Operations・Product analytics"], competitors: "Snowflake・Databricks標準機能、Dataform、Matillion、Coalesce、Dagster・Airflow、SQL・Python内製、Fivetran以外のingestion・transformation suite",
    feature: "dbt Core・Cloud・Fusion、Catalog・Semantic Layer、Orchestration・Observabilityと、Fivetranのmanaged ingestionを統合したdata infrastructureを提供する。", advantage: "source ingestionからSQL transformation、test、lineage、documentation、semantic definitionまでをsoftware engineering workflowでつなぎ、open-source communityとmanaged platformを両立する。", benefit: "data model開発、review、debug、CI/CD、incident、metric trustを改善し、analytics・AIへ供給するdataの品質と変更責任を説明しやすくする。", evidence: "Telecyは開発生産性20倍、debugを数十分から2〜5分、CI/CDを週3〜4時間からほぼ0へ改善し、1〜2人のdata engineer採用を回避したと公式事例で説明。",
    marketVerdict: "結論：AI・self-service analyticsでtrusted data、lineage、testの需要は強い。Fivetran統合後ARR約6億米ドル（約972.9億円）・顧客1万超だがrecognized revenue・利益は非公開。日本Remote 4求人を確認。", marketParagraphs: ["warehouse・lakehouseへdataを集めても、transformation logic、metric、test、lineage、ownershipが個人SQLとtoolへ分散し、AIと経営reportの信頼性が崩れる。", "今後3〜5年はAI-ready dataとgovernanceが追い風だが、warehouse標準機能、dbt Core内製、統合後のproduct・pricing・organizationが選定条件になる。", "Genba分析：一つのdomainでmodel lead time、test coverage、CI time、incident、metric disagreement、compute・license costをbaseline比較し、ingestionからsemanticまでのincremental valueを測る。"],
    cultureHeadline: "現行4求人は日本・APAC Remote。統合後のFivetran careersを正本とし、旧dbt LabsとFivetranのbenefits・cultureを混同しない。給与・OTEは非公開。", classification: "フルリモート", displayLabel: "日本・APACリモート", officeDays: "出社指定なし", remoteOnly: "現行4求人はRemote", flexibility: "BDRは入社2週目に対面Bootcamp。地域別benefitsは個別確認",
    goodFor: ["analytics engineeringをAI-ready dataへ広げたい", "OSS・PLGとEnterprise saleを横断したい", "data qualityを開発workflowで売りたい"], cautionFor: ["合併後の安定した組織境界を必須にする", "warehouse標準機能で十分な顧客だけを担当したい", "公開されたJapan quotaを必須にする"],
    unresolved: [["合併後財務", "ARR約6億米ドル（約972.9億円）はcompany-reported run-rate。", "recognized revenue、growth、profit、FCF、NRR、product mixは？"], ["Japan体制", "日本Remote 4求人を確認。", "日本法人、雇用主体、責任者、人数、sales・CS・partner coverageは？"], ["製品統合", "ingestionとtransformationを一社化。", "roadmap、pricing、support、bundling、既存customer migration、vendor neutralityは？"], ["Open・Managed", "dbt CoreとCloud、warehouse nativeが共存。", "free-to-paid、Cloud差分、compute economics、lock-inの説明は？"], ["報酬・達成", "4求人の給与・OTE・quotaは非公開。", "pay mix、quota、ramp、attainment、new・expansion・partner creditは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高・収益性", value: "非公開", detail: "合併後のrecognized revenue、営業利益、純利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-dbt-merger"] },
    { label: "合併後ARR", value: "約6億米ドル（約972.9億円）", detail: "company-reported run-rateで売上高ではない。", sourceIds: ["rollout-dbt-merger", "rollout-b08-boj-usd-20260716"] },
    { label: "顧客規模", value: "1万社超", detail: "Fivetran・dbt Labs統合会社の顧客数。product別・Japan顧客数ではない。", sourceIds: ["rollout-dbt-merger"] },
    { label: "dbt ecosystem", value: "dbt Cloud 5,700超顧客／community 10万人超", detail: "現行About表示。merged companyの全顧客・売上とは別尺度。", sourceIds: ["rollout-dbt-about"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "合併後の厳密な従業員数は公式で確認できない。", sourceId: "rollout-dbt-merger" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "4求人は現在人数を示さない。", sourceId: "rollout-dbt-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "確認不能", detail: "日本Remote求人は確認できるが、法人・常設office住所は確認できない。", sourceId: "rollout-dbt-jobs-20260817" };
  intelligence.companyStats.japanSince = { value: "確認不能", detail: "日本語site・求人から法人進出年月を推定しない。", sourceId: "rollout-dbt-jobs-20260817" };
  intelligence.customerProof = [{ company: "Telecy", products: "dbt Cloud", outcome: "開発生産性20倍、debugを数十分から2〜5分、CI/CDを週3〜4時間からほぼ0へ改善。", implication: "vendor-selected事例。8 models／月・1〜2人採用回避は特定環境の自己申告。", sourceId: "rollout-dbt-telecy" }];
  intelligence.roleLens = { salesMotion: "Partner Sales、Commercial BDR、Customer Solutions Architect、Sales Directorを採用し、pipeline、enterprise close、adoption・expansion、ecosystemを日本・APACでつなぐ。", compensation: "BDRはbase＋uncapped commission、Sales Directorはsalary・equity・performance payの定性記載のみ。金額非公開。", quota: "quota、担当社数、ACV、cycle、attainment、NRR、partner creditは非公開。", collaboration: "Sales、BDR、CSA、Partner、Product・Engineering、Fivetran ingestion、warehouse・lakehouse partner、顧客Data・AI teamが連携する。" };
  addSources(intelligence, [
    { id: "rollout-dbt-merger", label: "Fivetran・dbt Labs merger completion", url: "https://www.getdbt.com/blog/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents", kind: "企業公式", scope: "統合・経営・ARR・顧客", checkedAt: researchedAt },
    { id: "rollout-dbt-about", label: "dbt Labs About", url: "https://www.getdbt.com/about-us", kind: "企業公式", scope: "dbt ecosystem規模", checkedAt: researchedAt },
    { id: "rollout-dbt-jobs-20260817", label: "dbt Labs現行求人", url: "https://www.getdbt.com/about-us/careers", kind: "企業公式", scope: "日本4求人・Remote・職務", checkedAt: researchedAt },
    { id: "rollout-dbt-telecy", label: "dbt Labs・Telecy事例", url: "https://www.getdbt.com/jp/blog/case-study-telecy", kind: "企業公式", scope: "開発・debug・CI/CD成果", checkedAt: researchedAt },
    { id: "rollout-dbt-ipa-dx2026", label: "IPA DX動向2026", url: "https://www.ipa.go.jp/pressrelease/2026/press20260716.html", kind: "公的機関", scope: "AI導入・価値創出gap", checkedAt: researchedAt },
    { id: "rollout-dbt-meti-ai", label: "経産省 AI事業者ガイドラインv1.2", url: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html", kind: "公的機関", scope: "AI・data governance", checkedAt: researchedAt },
    { id: "rollout-b08-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchDeel(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2022.02", "日本法人設立", "Deel Japan株式会社を東京都に設立。", "rollout-deel-japan-jetro");
  applyStandard(intelligence, buildCompactPatch({
    slug: "deel", leaderName: "Alex Bouaziz / Shuo Wang", leaderLabel: "Co-founder・CEO／CRO", leaderUrl: "https://www.deel.com/leadership-team/", localName: "西浦 亮", localLabel: "Deel Japan 社長執行役員・Country Manager", localUrl: "https://prtimes.jp/main/html/rd/p/000000052.000090798.html",
    companyId: "rollout-deel-about", jobId: "rollout-deel-jobs-20260817", customersId: "rollout-deel-infostellar", externalId: "rollout-deel-mhlw-foreign-workers", financeId: "rollout-deel-arr-2026",
    targets: ["人事責任者・CHRO・People Operations", "グローバル給与・CFO・Controller", "法務・Privacy・Mobility", "採用・Talent Acquisition・海外事業", "人事Tech・IT・Procurement"], competitors: "Remote、Papaya Global、Oyster、Multiplier、G-P、ADP、CloudPay、Rippling、Workday、SAP、SmartHR、社労士・local payroll、現地法人＋複数vendor",
    feature: "EOR、contractor、Global Payroll、HRIS・ATS・Engage、IT、Benefits、Mobility、Entity Services、AI・APIを150カ国で提供する。", advantage: "worker type、country、payroll、HR、IT、mobilityを一つのrecord・approval・audit trailへ統合し、owned infrastructureとlocal deliveryで拡張する。", benefit: "entityを持たない国の採用速度、payroll accuracy、vendor数、close、HR ticket、compliance exception、運営costを改善する可能性がある。", evidence: "Infostellarは米国・ドイツ人材をEORで雇用し、現地法人の初期・維持費として最低でも年数百万円を回避したと顧客事例で説明。",
    marketVerdict: "結論：外国人材・海外採用・越境労務の増加は追い風。ARR 15億米ドル（約2,432.3億円）、EBITDA黒字を会社発表するが監査済みannual revenue・利益額・FCFは非公開。日本の掲載対象4職種を確認。", marketParagraphs: ["採用国とworker typeが増えると、契約、税・社保、payroll cutoff、benefit、device、privacy、vendorが国ごとに分断し、採用速度と統制が両立しにくい。", "今後3〜5年は外国人材・海外展開が追い風だが、EOR責任境界、local payroll accuracy、data transfer、FX・pricing、vendor governance、訴訟・trustが選定条件になる。", "Genba分析：一国・一cohortでEORまたはPayrollをpilotし、time-to-onboard、first-pay error、off-cycle、close日数、ticket、exception、total operating costを既存運用と比較する。"],
    cultureHeadline: "公式Careersはwork-from-anywhere、7,000人・100カ国超を掲げる一方、high volume・high accountability・high speedで予測可能な週を望む人には向かないと明記。日本求人固有の完全在宅・出社頻度は未確定。", classification: "未確認", displayLabel: "日本・remote workの柔軟性", officeDays: "個別求人では未設定", remoteOnly: "完全在宅とは断定しない", flexibility: "optional WeWork access。国別の勤務・benefitsは個別確認",
    goodFor: ["HR・Payroll・Legalを横断したい", "global operationsを高い速度で作りたい", "一国pilotからmulti-productへ広げたい"], cautionFor: ["安定した予測可能な週を最優先する", "監査済み利益・日本実績の詳細開示を必須にする", "ongoing litigationの不確実性を避けたい"],
    unresolved: [["財務の質", "ARRとEBITDA黒字は会社発表。", "recognized revenue、EBITDA額・margin、net income、FCF、retentionは？"], ["日本delivery", "日本法人・責任者・求人は確認。", "Japan customer、payroll volume、accuracy、SLA、headcount、escalationは？"], ["責任境界", "EOR・Payroll・HR・IT・Mobilityを横断。", "雇用・指揮命令、tax、data、termination、subprocessorの責任分界は？"], ["競争・trust", "統合platformとowned infrastructureを訴求。", "partner依存、audit、訴訟、security、country別service gapへの対応は？"], ["報酬・達成", "掲載対象求人の給与・OTE・quotaは非公開。", "pay mix、quota、ramp、attainment、new・expansion・cross-sell creditは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高", value: "非公開", detail: "2025年9月の月間売上1億米ドル（約162.2億円）は単月値で、年換算しない。", sourceIds: ["rollout-deel-series-e", "rollout-b08-boj-usd-20260716"] },
    { label: "ARR", value: "15億米ドル（約2,432.3億円）", detail: "2026年7月のcompany-reported run-rate。recognized revenueではない。", sourceIds: ["rollout-deel-arr-2026", "rollout-b08-boj-usd-20260716"] },
    { label: "収益性", value: "EBITDA黒字を3年以上", detail: "会社発表。EBITDA額・margin、GAAP net income、FCFは非公開。", sourceIds: ["rollout-deel-profitability"] },
    { label: "事業固有規模", value: "顧客4万社／月200万payroll run／年220億米ドル（約3.57兆円）のpayroll flow", detail: "payroll flowは売上・GMVではない。", sourceIds: ["rollout-deel-arr-2026", "rollout-deel-series-e", "rollout-b08-boj-usd-20260716"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "7,000人超", detail: "110カ国超。公式leadership profile。", sourceId: "rollout-deel-leadership" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行求人と日本収益成長から人数を推定しない。", sourceId: "rollout-deel-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都（詳細住所は非公開）", detail: "JETROは日本法人を東京都に設立と確認。", sourceId: "rollout-deel-japan-jetro" };
  intelligence.companyStats.japanSince = { value: "2022年2月", detail: "Deel Japan株式会社設立。", sourceId: "rollout-deel-japan-jetro" };
  intelligence.customerProof = [
    { company: "Infostellar", products: "Deel EOR", outcome: "米国・ドイツ人材を雇用し、現地法人の初期・維持費として最低でも年数百万円を回避。", implication: "vendor-selected顧客証言。実際のEOR fee・長期TCOとの比較は非公開。", sourceId: "rollout-deel-infostellar" },
    { company: "SORACOM", products: "Deel", outcome: "自社拠点のない国で人材を雇用・管理し、global remote teamを構築。", implication: "定量成果は非公開で、一般再現性を保証しない。", sourceId: "rollout-deel-soracom" },
  ];
  intelligence.roleLens = { salesMotion: "掲載対象はSDR、Japanese・Mandarin Onboarding、Payroll Operations Manager・Associate。営業から導入・日本payroll deliveryまでを採用する。", compensation: "4求人の給与・OTE金額は非公開。Internal Legal職のUSD rangeは対象職へ転用しない。", quota: "SDR meeting・SQO・pipeline target、delivery KPI、担当社数、attainmentは非公開。", collaboration: "Sales、Onboarding、Payroll、Legal・Mobility、Finance・Treasury、Product・IT、local experts、顧客HR・CFOが連携する。" };
  addSources(intelligence, [
    { id: "rollout-deel-about", label: "Deel About", url: "https://www.deel.com/about/", kind: "企業公式", scope: "創業・共同創業者・製品", checkedAt: researchedAt },
    { id: "rollout-deel-leadership", label: "Deel Leadership", url: "https://www.deel.com/leadership-team/", kind: "企業公式", scope: "経営・global規模", checkedAt: researchedAt },
    { id: "rollout-deel-jobs-20260817", label: "Deel現行日本求人", url: "https://www.deel.com/careers/", kind: "企業公式", scope: "7 postings・6 unique jobs・掲載対象4職種", checkedAt: researchedAt },
    { id: "rollout-deel-arr-2026", label: "Deel Works 2026 company scale", url: "https://www.deel.com/deel-works/shuo-wang-deel-convention-breaking/", kind: "企業公式", scope: "ARR・clients・payroll runs", checkedAt: researchedAt },
    { id: "rollout-deel-series-e", label: "Deel Series E", url: "https://www.deel.com/blog/new-investment-valuation/", kind: "企業公式", scope: "月間売上・payroll flow・調達・評価額", checkedAt: researchedAt },
    { id: "rollout-deel-profitability", label: "Deel legal update", url: "https://www.deel.com/blog/deel-files-lawsuit/", kind: "企業公式", scope: "EBITDA profitability・係争中の会社側主張", checkedAt: researchedAt },
    { id: "rollout-deel-japan-jetro", label: "JETRO Deel Japan設立", url: "https://www.jetro.go.jp/invest/newsroom/2022/7983d512e1d42430.html", kind: "公的機関", scope: "日本法人・設立・所在地", checkedAt: researchedAt },
    { id: "rollout-deel-infostellar", label: "Deel・Infostellar事例", url: "https://hsassets.deel.com/hubfs/JP_Infostellar_case_study_July2023.pdf", kind: "企業公式", scope: "国内EOR・cost成果", checkedAt: researchedAt },
    { id: "rollout-deel-soracom", label: "Deel・SORACOM事例", url: "https://hsassets.deel.com/hubfs/FINAL%20JP%202nd%20local%20white%20paper.pdf", kind: "企業公式", scope: "国内global hiring", checkedAt: researchedAt },
    { id: "rollout-deel-mhlw-foreign-workers", label: "厚生労働省 外国人雇用状況2025", url: "https://www.mhlw.go.jp/content/11655000/001646128.pdf", kind: "公的機関", scope: "外国人労働者増加", checkedAt: researchedAt },
    { id: "rollout-b08-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchEight(records: Record<string, CompanyPublicIntelligence>) {
  if (records.cohere) patchCohere(records.cohere);
  if (records.contentsquare) patchContentsquare(records.contentsquare);
  if (records.datadog) patchDatadog(records.datadog);
  if (records["dbt-labs"]) patchDbtLabs(records["dbt-labs"]);
  if (records.deel) patchDeel(records.deel);
}
