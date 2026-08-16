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

function refreshSourceDates(intelligence: CompanyPublicIntelligence) {
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

function patchDeepL(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2023", "日本法人を設立し本格稼働", "DeepL Japan G.K.が2023年7月に本格稼働。日本語対応開始の2020年とは分けて扱う。", "rollout-deepl-japan-2023");
  applyStandard(intelligence, buildCompactPatch({
    slug: "deepl", leaderName: "Jaroslaw “Jarek” Kutylowski", leaderLabel: "創業者・CEO", leaderUrl: "https://www.deepl.com/en/careers", localName: "高山 清光", localLabel: "Head of Operations Japan", localUrl: "https://www.deepl.com/ja/commercial-disclosure-jp",
    companyId: "deepl-company", jobId: "rollout-deepl-careers-20260817", customersId: "rollout-deepl-jae", externalId: "rollout-deepl-jetro", financeId: "rollout-deepl-index-2024",
    targets: ["グローバル展開企業", "法務・コンプライアンス", "営業・顧客サポート", "製品・コンテンツのローカライズ", "IT・情報セキュリティ"], competitors: "Google・Microsoft・Amazonの翻訳／音声、OpenAI等の汎用LLM、Phrase・Smartling等のTMS、翻訳会社・人間通訳",
    feature: "Translator、Write、Voice、API、glossary・style、document・meeting・agent連携を、企業向けの管理・securityとともに提供する。", advantage: "専用Language AIの品質と用語・style統制を、document、voice、API、MCPまで同じvendor・管理面で広げる。", benefit: "翻訳待ち、外注費、post-edit、会議の言語摩擦を減らし、海外営業・support・契約・市場投入を速める。", evidence: "JAEはfile翻訳効率86%改善、SOMPOは50超のsecurity基準と年数百万円の外注費削減見込み、長島・大野・常松は作業をdaysからminutesへ短縮と会社事例で説明。",
    marketVerdict: "結論：海外事業・外国人材・AI governanceはLanguage AIの追い風。日本で現行GTM・CS・Solutions 7職種を採用する一方、売上・利益、日本のquota、言語pair別品質は非公開で実データ検証が必要。", marketParagraphs: ["海外拠点・顧客・外国人材との文書、会議、supportが増えるほど、翻訳専門家や英語話者のqueue、用語不統一、shadow AIが事業速度と統制を阻害する。国内事例は時間・外注費・securityを同時に扱う需要を示す。", "今後3〜5年は海外事業拡大、DX人材不足、voice・agent化が追い風になる。一方、個人情報、学習利用、誤訳、human review、既存Microsoft・Google・LLMとのbundle競争が導入条件になる。", "Genba分析：勝ち筋は一文の印象ではなく、言語pair・文書type別のblind testと、turnaround、post-edit率、外注費、用語逸脱、meeting理解、security controlを同じPoVで測ること。"],
    cultureHeadline: "東京の現行求人は多くが週2日officeのHybrid。Senior CSMだけは勤務形態を確認できず、全職種へ一律適用しない。", classification: "ハイブリッド", displayLabel: "東京・多くの現行求人で週2日オフィス", officeDays: "多くは週2日、Senior CSMは非公開", remoteOnly: "該当しない", flexibility: "flexible hoursを求人で説明",
    goodFor: ["Language AIを業務KPIで売りたい", "product・Sales・CS・Solutionsを横断したい", "日本とAPJのGTMを作りたい"], cautionFor: ["全職種の完全リモートを必須にする", "翻訳品質だけの短い商談を望む", "security・Legal・human reviewを避けたい"],
    unresolved: [["日本の事業規模", "20万社超のglobal顧客から日本のterritoryは分からない。", "日本の売上、顧客、製品mix、renewal、主要業界は？"], ["現行7職種の役割分担", "AE、CS、Renewal、Solutions、Enablement、Product GTMが同時採用。", "各teamの人数、account ownership、handoff、採用背景は？"], ["PoVと品質", "Language AIは言語pairと業務で品質が変わる。", "blind test、post-edit、用語逸脱、human reviewをどう測る？"], ["競合とbundle", "既存suite・LLM・TMS・人手が合理的な場合もある。", "Google／Microsoft／LLM／TMSとの直近勝敗とTCOは？"], ["報酬・達成", "給与、OTE、quota、達成率、昇進は非公開。", "base／variable、quota、ramp、達成者比率、昇進例は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高", value: "非公開", detail: "非公開企業。顧客数、調達額、評価額を売上高・純収益として扱わない。", sourceIds: ["deepl-company", "rollout-deepl-index-2024"] },
    { label: "収益性", value: "非公開", detail: "営業利益、純利益、EBITDA、FCF、margin、黒字・赤字は公開情報で確認できない。", sourceIds: ["rollout-deepl-index-2024"] },
    { label: "Business customers・paid licenses", value: "20万社超・100万license", detail: "公式Careerの全世界値。228 markets、1,000人超も公表するが、日本の顧客数・有料seat・売上ではない。", sourceIds: ["rollout-deepl-careers-20260817"] },
    { label: "2024年資金調達・評価額", value: "3億米ドル（約486.5億円）／20億米ドル（約3,243億円）", detail: "Index Ventures公表。調達額・非公開株評価で業績指標ではない。1ドル=162.15円（日本銀行 2026年7月16日中心相場）の参照換算。", sourceIds: ["rollout-deepl-index-2024", "rollout-b04-boj-usd-20260716"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "1,000人超", detail: "公式Careerの会社公表値。", sourceId: "rollout-deepl-careers-20260817" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "日本teamの人数は公式に確認できない。", sourceId: "rollout-deepl-careers-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都港区虎ノ門4-3-20 神谷町MTビル14階", detail: "公式特商法表示で確認。", sourceId: "rollout-deepl-japan-address" };
  intelligence.companyStats.japanSince = { value: "2023年7月（日本法人本格稼働）", detail: "日本語対応は2020年。法人本格稼働と分ける。", sourceId: "rollout-deepl-japan-2023" };
  intelligence.salesAppeal = {
    intro: "Language AIを翻訳精度だけでなく、海外業務の速度、外注費、用語統制、security、全社定着へつなげて提案できる。",
    points: [
      { title: "業務成果と品質を同時に測れる", detail: "turnaround、外注費、post-edit率、用語逸脱、document throughput、meeting理解、active usageをPoVの指標にできる。", sourceIds: ["rollout-deepl-jae"] },
      { title: "営業・CS・Solutionsをまたぐ日本GTM", detail: "2026年8月17日時点でAE、CS、Renewal、Solutions、Enablement、Product GTMの対象7職種を確認。役割分担とhandoffを作る局面に関われる。", sourceIds: ["rollout-deepl-careers-20260817"] },
      { title: "AI品質とgovernanceを一つの商談で扱う", detail: "言語pair別の品質、glossary・style、human review、個人data・機密情報の統制をLegal・Security・事業部と検証する。", sourceIds: ["rollout-deepl-jetro"] },
    ],
  };
  intelligence.sources = intelligence.sources.map((source) => source.id === "deepl-job" ? {
    ...source,
    label: "DeepL公式Career・現行Tokyo求人",
    url: "https://jobs.ashbyhq.com/DeepL",
    scope: "現行求人一覧・職務・勤務地・公開条件",
    checkedAt: researchedAt,
  } : source);
  addSources(intelligence, [
    { id: "rollout-deepl-careers-20260817", label: "DeepL公式Career・現行Tokyo求人", url: "https://jobs.ashbyhq.com/DeepL", kind: "企業公式", scope: "現行日本求人8件、Genba対象7件、勤務・言語・報酬の公開境界", checkedAt: researchedAt },
    { id: "rollout-deepl-index-2024", label: "Index Ventures DeepL投資発表", url: "https://www.indexventures.com/perspectives/fluency-is-currency-deepl/", kind: "外部集計", scope: "2024年3億米ドル調達と企業規模", checkedAt: researchedAt },
    { id: "rollout-deepl-japan-2023", label: "DeepL日本法人本格稼働発表", url: "https://prtimes.jp/main/html/rd/p/000000002.000112534.html", kind: "企業公式", scope: "日本法人・2023年7月本格稼働", checkedAt: researchedAt },
    { id: "rollout-deepl-japan-address", label: "DeepL日本向け特商法表示", url: "https://www.deepl.com/ja/commercial-disclosure-jp", kind: "企業公式", scope: "日本所在地・運営統括責任者", checkedAt: researchedAt },
    { id: "rollout-deepl-jae", label: "DeepL・JAE導入事例", url: "https://www.deepl.com/ja/customer-stories/jae", kind: "企業公式", scope: "国内企業の翻訳効率・利用規模・security選定", checkedAt: researchedAt },
    { id: "rollout-deepl-jetro", label: "JETRO 日本企業の海外事業展開調査", url: "https://www.jetro.go.jp/world/gtir/2025/ch2/sec3/sub3.html", kind: "公的機関", scope: "海外事業拡大と多言語業務の外部需要", checkedAt: researchedAt },
    { id: "rollout-b04-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchElevenLabs(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2022", "創業", "Mati Staniszewski氏とPiotr Dabkowski氏が創業。", "eleven-series-d");
  applyStandard(intelligence, buildCompactPatch({
    slug: "elevenlabs", leaderName: "Mati Staniszewski", leaderLabel: "共同創業者・CEO", leaderUrl: "https://elevenlabs.io/blog/authors/mati-staniszewski", localName: "田村 元", localLabel: "General Manager, Japan & Korea", localUrl: "https://elevenlabs.io/blog/elevenlabs-establishes-japanese-subsidiary-elevenlabs-gk",
    companyId: "eleven-careers", jobId: "eleven-job-ae", customersId: "rollout-eleven-tbs-direct", externalId: "rollout-eleven-meti-content", financeId: "eleven-arr",
    targets: ["コンタクトセンター・顧客対応", "メディア・放送・ローカライズ", "開発者・AI Platform", "マーケティング・クリエイティブ", "公共・アクセシビリティ"], competitors: "OpenAI、Google、Microsoft、AWS、Deepgram・Cartesia・Resemble、Genesys・Twilio、HeyGen・従来のdubbing studio／BPO",
    feature: "ElevenAgents、ElevenCreative、ElevenAPIとして、音声生成・認識、dubbing、music・media制作、voice／chat agent、integration・monitoringを提供する。", advantage: "自然なvoice・多言語・低latencyを、Creative、API、Agentのproduction workflowとconsent・monitoringまで連続して扱う。", benefit: "収録・吹替・顧客対応を言語とvolumeに比例させず、公開速度、応答capacity、accessibilityを広げる。", evidence: "TBSはKASSOを英語・スペイン語・ポルトガル語へdubbing。視聴・収益・削減率は非公開で、DOCOMOは評価段階、AILAS・Nottaは協業で顧客成果ではない。",
    marketVerdict: "結論：日本発contentの海外展開と24時間・多言語supportは追い風。ARRの急成長と日本専任AE・AMは強いsignalだが、日本の売上・利益・本番顧客成果とquotaは非公開。", marketParagraphs: ["日本発contentの海外売上拡大、supportの24時間・多言語化、voice interface需要が同時に進む一方、人の収録・dubbing・BPOは言語とvolumeに比例してcostとlead timeが増える。", "今後3〜5年はVoice Agent、localization、accessibilityが追い風になる。一方、日本語品質、latency、誤応答、本人同意・著作権、個人data、human oversightが本番調達のgateになる。", "Genba分析：contentはcost／minute、review、公開速度、engagement、agentはcontainment、AHT、CSAT、handoff、error・停止条件をblind testと本番pilotで測る。secondary location求人は日本専任teamと混同しない。"],
    cultureHeadline: "日本専任AE・AMはRemote。日本から応募可能なglobal・APAC求人もRemoteだが、主勤務地・timezone・言語は個別で、日本専任とは限らない。", classification: "フルリモート", displayLabel: "日本専任2求人はリモート", officeDays: "必須日数の明記なし", remoteOnly: "日本専任求人はRemote", flexibility: "global求人はtimezone条件を個別確認",
    goodFor: ["Voice AIを本番KPIで売りたい", "remote・asynchronousに自走したい", "技術・commercial・AI safetyを横断したい"], cautionFor: ["完成済みの日本playbookを求める", "音声demoだけの提案を望む", "権利・security・human handoffを避けたい"],
    unresolved: [["日本のproduction traction", "global ARRとagent数は日本の達成再現性を示さない。", "日本ARR、production顧客、上位use case、PoC-to-production率は？"], ["専任・secondary location", "10対象求人のうち8件はglobal／APACのsecondary location。", "日本案件比率、reporting、timezone、travel、言語、採用優先度は？"], ["AE・AM・Solutionsの境界", "AMはtechnical設計とNRRを持ち、負荷集中の可能性がある。", "deployment、support、renewal、usage、incidentの責任はどう分かれる？"], ["Voice risk", "本人同意、著作権、誤応答、個人dataが調達を止めうる。", "consent、monitoring、watermark、human handoff、on-premをどう検証する？"], ["報酬・達成", "給与、OTE、usage credit、quota、達成率は非公開。", "base／variable、quota、ramp、usage／renewal／cross-sell credit、達成者比率は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高", value: "非公開", detail: "非公開企業。ARRを会計上の年間売上高・純収益として扱わない。", sourceIds: ["eleven-arr"] },
    { label: "収益性", value: "非公開", detail: "営業利益、純利益、EBITDA、FCF、gross margin、cash burnは公開情報で確認できない。", sourceIds: ["eleven-series-d"] },
    { label: "ARR", value: "5億米ドル超（約810.8億円超）", detail: "2026年1〜4月で到達したcompany run-rate。2025年末は3.5億米ドル（約567.5億円）。認識売上ではない。1ドル=162.15円の参照換算。", sourceIds: ["eleven-arr", "rollout-b04-boj-usd-20260716"] },
    { label: "Series D・評価額", value: "5億米ドル（約810.8億円）／110億米ドル（約1兆7,836.5億円）", detail: "2026年2月の調達額と非公開株評価。売上・利益・将来の株式価値ではない。", sourceIds: ["eleven-series-d", "rollout-b04-boj-usd-20260716"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "530人", detail: "2026年5月の会社発表。50カ国超で勤務。", sourceId: "eleven-arr" };
  intelligence.companyStats.japanOffice = { value: "東京都千代田区丸の内1-6-5", detail: "日本法人設立発表の所在地。常設専有officeか登記住所のみかは未確認。", sourceId: "eleven-japan" };
  intelligence.companyStats.japanSince = { value: "2025年4月14日", detail: "初の海外子会社としてElevenLabs Japan G.K.を設立。", sourceId: "eleven-japan" };
  intelligence.customerProof = [
    { company: "TBS", products: "AI Dubbing", outcome: "KASSO Season 1を英語・スペイン語・ポルトガル語へ展開。制作時間短縮と説明するが削減率・視聴・収益成果は非公開。", implication: "3言語というoutputは確認できるが、平均効果・単独因果を保証しない。", sourceId: "rollout-eleven-tbs-direct" },
    { company: "DOCOMO Innovations", products: "Voice technology evaluation", outcome: "日本語use caseのfull-scale launchに向けたtechnology evaluation。", implication: "production導入・有料顧客・成果として扱わない。", sourceId: "eleven-japan" },
    { company: "AILAS", products: "Voice ID・consent", outcome: "本人確認済みvoice IDと同意情報を生成workflowへ接続する協業。", implication: "governance材料だが顧客成果ではない。", sourceId: "eleven-ailas" },
  ];
  addSources(intelligence, [
    { id: "rollout-eleven-tbs-direct", label: "ElevenLabs・TBS KASSO事例", url: "https://elevenlabs.io/blog/kasso", kind: "企業公式", scope: "国内contentの3言語dubbingと成果の公開境界", checkedAt: researchedAt },
    { id: "rollout-eleven-meti-content", label: "経済産業省 通商白書2025 日本発コンテンツ", url: "https://www.meti.go.jp/report/tsuhaku2025/2025honbun/i2340000.html", kind: "公的機関", scope: "日本発content海外売上と多言語展開需要", checkedAt: researchedAt },
    { id: "rollout-eleven-copyright", label: "文化庁 AIと著作権に関する考え方", url: "https://www.bunka.go.jp/seisaku/chosakuken/aiandcopyright.html", kind: "公的機関", scope: "生成AI・著作権・権利処理の外部環境", checkedAt: researchedAt },
    { id: "rollout-b04-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchMirakl(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "mirakl", leaderName: "Philippe Corrot", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.mirakl.com/company/about-mirakl/", localName: "佐藤 恭平", localLabel: "代表取締役・日本カントリーマネージャー", localUrl: "https://www.mirakl.com/ja-JP/blog/hew-years-address-2026",
    companyId: "mirakl-about", jobId: "mirakl-job-ae", customersId: "rollout-mirakl-satsudora-live", externalId: "mirakl-meti-ec", financeId: "mirakl-arr",
    targets: ["小売・EC", "メーカー・卸売", "デジタルコマース・新規事業", "商品・物流・サプライチェーン", "IT・法務・プラットフォーム運営"], competitors: "Marketplacer・Spryker・VTEX、Adobe Commerce・commercetools・Shopify＋SI、Rithum・fabric、PIM・retail media専業、内製",
    feature: "Marketplace、Dropship、Catalog、Connect、Payout、Ads、Distribution Orchestration、Nexusを企業向けCommerce operating systemとして提供する。", advantage: "seller・商品・order・payment・Ads・agentic channelを、10万超のseller／brand networkとEnterprise運営知見で一体化する。", benefit: "在庫を増やさず品揃え・GMV・margin・新収益を広げ、seller onboardingと運営・法務負荷を標準化する。", evidence: "サツドラ、ニトリ、GLADDの国内採用・launchは確認できるが、post-launchの売上、GMV、商品数、ROIは公開されず、期待効果と実現成果を分ける。",
    marketVerdict: "結論：B2C・B2B EC拡大とinventory-light成長は追い風。2025年ARR成長とgroup黒字を公表する一方、日本の実現済み定量ROI、ARR、GMV、quotaは非公開。", marketParagraphs: ["日本のB2C・B2B ECは拡大するが、自社在庫だけでは品揃えと成長が頭打ちになる。第三者sellerを追加するとonboarding、catalog、order、returns、payout、危険商品、苦情対応が新たな運営責任になる。", "今後3〜5年はmarketplace、dropship、retail media、agentic commerceが追い風になる。一方、消費者保護・製品安全・seller governanceと、顧客側の専任team・SI capacityがsigned-to-liveを左右する。", "Genba分析：勝ち筋は契約logoではなく、seller activation、商品数、time-to-live、GMV、contribution margin、運営FTE、returns・SLA、法務責任をbaseline比較し、期待値を実現値へ変えること。"],
    cultureHeadline: "会社はmost teamsをHybridとするが、JapanのSenior AE・Solution Consultantは役割固有の日数を公開していない。", classification: "ハイブリッド", displayLabel: "会社一般はハイブリッド、役割固有日数は非公開", officeDays: "役割・location別で非公開", remoteOnly: "該当しない", flexibility: "exact arrangementはrole・locationで異なる",
    goodFor: ["marketplaceのP&LをC-suiteへ売りたい", "commerceとarchitectureを横断したい", "契約からlaunch・GMVまで関与したい"], cautionFor: ["短期license saleだけを望む", "seller・catalog・物流・法務を避けたい", "role固有のremote条件を必須にする"],
    unresolved: [["日本のlive economics", "採用logoは日本の実現売上・GMVを示さない。", "日本の有料顧客、live marketplace、ARR、GMV、renewalは？"], ["Signed-to-live", "顧客専任teamとdelivery capacityが成果を制約する。", "契約からlaunchの中央値、SC／SI capacity、遅延理由は？"], ["AE territory", "global成長から日本quotaの達成可能性は分からない。", "quota、ACV、cycle、pipeline、達成者比率、new／expansionは？"], ["Product・governance", "MarketplaceからAds・Nexusへ広がるほど運営責任が増える。", "product別adoption、seller safety、payout、法務責任、lock-inは？"], ["報酬・勤務", "給与、OTE、office日数、昇進は非公開。", "base／variable、equity、ramp、credit、勤務、昇進例は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高", value: "非公開", detail: "非公開企業。ARR、GMV、Ads spendを会計売上高・純収益として扱わない。", sourceIds: ["mirakl-arr"] },
    { label: "収益性", value: "2025年度group通期黒字（額・margin非公開）", detail: "会社発表。GAAP／non-GAAP、営業利益、純利益、EBITDA、FCFの額は非公開。日本法人単体と混同しない。", sourceIds: ["mirakl-arr"] },
    { label: "ARR", value: "2億1,800万米ドル（約343.5億円）", detail: "2025年、前年比23%増の会社公表run-rate。認識売上ではない。1ドル=157.56円の参照換算。", sourceIds: ["mirakl-arr", "rollout-b04-customs-usd-202608"] },
    { label: "Marketplace・Dropship GMV", value: "146億米ドル（約2兆3,003.8億円）", detail: "2025年、前年比31%増。顧客上の流通総額でMiraklの売上ではない。", sourceIds: ["mirakl-arr", "rollout-b04-customs-usd-202608"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "750人超", detail: "公式Careerの会社公表値。9 offices、40カ国籍超。", sourceId: "rollout-mirakl-careers" };
  intelligence.customerProof = [
    { company: "サツドラ", products: "Mirakl Marketplace", outcome: "公式online storeを刷新し、地域supplier・manufacturerと将来のthird-party seller参加を見据えた基盤をlaunch。post-launchの売上・GMV・商品数は非公開。", implication: "国内live利用は確認できるが定量ROIは補完しない。", sourceId: "rollout-mirakl-satsudora-live" },
    { company: "ニトリ", products: "Mirakl Marketplace", outcome: "品揃え拡大、在庫・物流cost削減、収益性向上を見込んで採用。", implication: "目標・期待効果で、実現済み成果ではない。", sourceId: "mirakl-nitori" },
    { company: "GLADD", products: "Mirakl Marketplace", outcome: "商品数、personalization、新収益を期待して導入。", implication: "導入前の顧客scaleと期待値をMirakl成果にしない。", sourceId: "mirakl-gladd" },
  ];
  addSources(intelligence, [
    { id: "rollout-mirakl-careers", label: "Mirakl公式Career", url: "https://www.mirakl.com/company/careers/", kind: "企業公式", scope: "hybrid方針・values・global組織規模", checkedAt: researchedAt },
    { id: "rollout-mirakl-satsudora-live", label: "Mirakl・サツドラ稼働発表", url: "https://www.mirakl.com/ja-jp/news/support-sapporo-drugs-2025-11-19/", kind: "企業公式", scope: "国内marketplaceのlaunchと定量成果の公開境界", checkedAt: researchedAt },
    { id: "rollout-mirakl-consumer-platform", label: "消費者庁 取引デジタルプラットフォーム消費者保護法", url: "https://www.caa.go.jp/policies/policy/consumer_transaction/digital_platform/", kind: "公的機関", scope: "seller連絡・危険商品・苦情・情報開示の外部要求", checkedAt: researchedAt },
    { id: "rollout-b04-customs-usd-202608", label: "税関 週間為替相場 2026年8月16〜22日", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchNewRelic(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "new-relic", leaderName: "Ashan Willy", leaderLabel: "CEO", leaderUrl: "https://newrelic.com/about/leadership", localName: "古舘 正清", localLabel: "執行役員社長・Head of Japan", localUrl: "https://newrelic.com/jp/press-release/20260521",
    companyId: "rollout-newrelic-about", jobId: "newrelic-japan-jobs-ae", customersId: "rollout-newrelic-tokyogas", externalId: "rollout-newrelic-fsa-resilience", financeId: "rollout-newrelic-fy2023-sec",
    targets: ["デジタルサービス・EC", "金融・公共・重要業務", "製造・SAP・基幹システム", "SRE・開発運用部門", "情報システム・セキュリティ・クラウド費用管理"], competitors: "Datadog、Dynatrace、Cisco Splunk／AppDynamics、Grafana、Elastic、AWS・Azure・Googleのnative monitoring、OpenTelemetry内製",
    feature: "APM、logs、traces、infrastructure、Kubernetes、DEM、AIOps、AI observability、Security RX、SRE Agent、Business Observabilityを統合する。", advantage: "OpenTelemetryと780超のintegrationからtelemetryを集め、application・infra・experience・AI・security・business impactを一つのplatformで相関する。", benefit: "MTTI・MTTR、developer toil、incident impact、customer experience、telemetry costを可視化し、重要業務のresilienceを高める。", evidence: "東京ガスはerror調査時間を10分の1、意思決定を3時間から30分へ、ORIXは原因特定を15分から1〜2分、CS解決を20〜30分から平均10分へ短縮と事例で説明。",
    marketVerdict: "結論：cloud・AI・重要業務の複雑化とresilience要求は追い風。日本の採用・team増・東京region計画は投資signalだが、非公開化後の業績・quotaと東京regionのGAは未確認。", marketParagraphs: ["cloud、microservice、AI agent、SAP移行でdependencyとtelemetryが増え、APM・log・infra・DEMが分断するとalert後の原因特定、責任team間の往復、business impact把握が遅れる。", "今後3〜5年はAI observability、operational resilience、log evidence、business observabilityが追い風。一方、ingest・retention cost、AI誤判定、data residency、既存cloud bundleとOpenTelemetry運用が選定条件になる。", "Genba分析：勝ち筋はtool統合数でなく、MTTI／MTTR、incident回数、developer hours、customer impact、ingest単価、retention、false positiveをbaseline比較し、東京regionの実利用条件を契約で確認すること。"],
    cultureHeadline: "現行Japan 9求人はすべてHybrid metadata。Yaesu officeとWORKSTYLING等の柔軟性はあるが、role別のoffice日数は非公開。", classification: "ハイブリッド", displayLabel: "東京・ハイブリッド", officeDays: "役割別日数は非公開", remoteOnly: "現行求人では該当しない", flexibility: "自宅・office・WORKSTYLINGを会社が説明",
    goodFor: ["observabilityをbusiness outcomeで売りたい", "SRE・Security・経営buyerを横断したい", "PE傘下の変革と日本投資を機会にできる"], cautionFor: ["単一APMの短期商談だけを望む", "telemetry economicsを避けたい", "完全リモート日数を確約条件にする"],
    unresolved: [["非公開化後のeconomics", "FY2023以降のcurrent業績は非開示。", "current revenue、growth、profit、ARR／NRR、日本規模は？"], ["7 requisitionsとterritory", "同名Senior AE 3 seatを含む採用signalは達成可能性を示さない。", "各seatのcoverage、quota、ACV、cycle、達成者比率、managerは？"], ["東京region", "2026年7月予定後のGAを公式に確認できない。", "現在のGA、対象data、移行、DR、SLA、価格は？"], ["AI・cost", "AI triageは誤判定、ingest・retentionはTCOを伴う。", "RCA精度、human guardrail、data volume、retention、costをどう検証する？"], ["報酬・career", "給与、OTE、quota、昇進・離職は非公開。", "base／variable、ramp、accelerator、達成者比率、SDR→AE／SC→lead実例は？"]],
  }));
  intelligence.sellingPlaybook = {
    frameIntro: "digital serviceが売上・顧客接点・重要業務そのものになり、cloud・AIでdependencyが増える一方、規制側もresilienceとlog分析を重視する。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "東京ガスとORIXは、障害調査と顧客対応の時間を短縮し、技術dataを意思決定へ使うために導入した。共通課題はmonitoring tool不足より、telemetry分断とbusiness impact不明にある。" },
      { title: "製品の成り立ちから見る課題", body: "APMから始まりlogs、infra、DEM、security、AI、Business Observabilityへ拡張した。核はsoftwareの内部状態を利用者・業務成果と結び、問題を起きた後の探索から継続改善へ変えること。" },
      { title: "外部環境の要求から見る課題", body: "金融庁はoperational resilience、デジタル庁はlog取得・分析、経産省は経営主導のcyber risk・incident対応を求める。重要業務は予防だけでなく、発見、影響把握、復旧、証跡を説明できる必要がある。" },
    ],
    narrative: [
      { label: "背景", body: "cloud、AI、SAP移行でdigital serviceと依存関係が増え、停止が売上・顧客・重要業務へ直結する。" },
      { label: "課題", body: "APM、logs、infra、DEMが分断し、alert後の手作業、team間往復、business impact不明、ingest costとdata residencyが判断を遅らせる。" },
      { label: "解決策", body: "telemetry、experience、security、business KPIを相関し、AIでtriageを支援。priority workloadでMTTI／MTTR、developer hours、customer impact、costを測って展開する。" },
      { label: "選定の理由", body: "国内の時間短縮事例、広いtelemetry・AI portfolio、OpenTelemetryとintegration、日本teamへの投資が材料。ただし価格優位を断定せず、東京region、retention、AI guardrail、3年TCOをPoC・契約で比較する。" },
    ],
    openingHook: "重大incidentの発生から、影響する顧客・売上・原因とownerを同じ画面で特定するまで何分かかりますか。",
    valueHypothesis: "priority serviceでMTTI、MTTR、developer investigation hours、false alerts、customer impact、telemetry GB・retention costをbaseline化し、統合後の実測値で判断する。",
    commonObjection: { objection: "既存cloud monitoringやOpenTelemetry＋Grafanaで十分。", reframe: "tool数でなく、cross-stack correlation、business impact、運用工数、retention・egress、AI guardrailを同じserviceで比較する。" },
  };
  intelligence.facts = [
    { label: "買収前最終年間売上高", value: "9億2,562.6万米ドル（約1,458.4億円）", detail: "FY2023監査済み。2023年11月の非公開化後のcurrent revenueではない。1ドル=157.56円の参照換算。", sourceIds: ["rollout-newrelic-fy2023-sec", "rollout-b04-customs-usd-202608"] },
    { label: "GAAP営業損失", value: "1億8,524.3万米ドル（約291.9億円）の損失", detail: "FY2023。同期のnon-GAAP営業利益3,450万米ドル（約54.4億円）とは調整項目が異なる。", sourceIds: ["rollout-newrelic-fy2023-sec", "rollout-b04-customs-usd-202608"] },
    { label: "RPO", value: "8億810万米ドル（約1,273.2億円）", detail: "FY2023末の残存履行義務で売上高・ARRではない。同期NRR 118%、active accounts 1.6万。current値ではない。", sourceIds: ["rollout-newrelic-fy2023-sec", "rollout-b04-customs-usd-202608"] },
    { label: "非公開化", value: "企業価値65億米ドル（約1兆242.1億円）", detail: "2023年11月完了のtake-private enterprise valueで業績指標ではない。", sourceIds: ["newrelic-take-private", "rollout-b04-customs-usd-202608"] },
  ];
  intelligence.companyStats.japanOffice = { value: "東京都中央区八重洲2-2-1 東京ミッドタウン八重洲7階", detail: "公式About・移転発表で確認。", sourceId: "rollout-newrelic-about" };
  intelligence.customerProof = [
    { company: "東京ガス", products: "New Relic Intelligent Observability", outcome: "TG-WISPでerror調査時間10分の1、意思決定3時間から30分と顧客事例で説明。", implication: "vendor-publishedでbaseline詳細・独立監査はない。", sourceId: "rollout-newrelic-tokyogas" },
    { company: "ORIX", products: "New Relic", outcome: "PATPOSTでengineering原因特定15分から1〜2分、CS解決20〜30分から平均10分と説明。", implication: "組織・process変更を含む可能性があり単独因果を保証しない。", sourceId: "rollout-newrelic-orix" },
    { company: "airCloset", products: "New Relic MCP Server・顧客自作AI", outcome: "問題調査20分の1、monitoringから改善計画の工数ゼロと説明。", implication: "顧客自作multi-agent等との複合成果でNew Relic単独効果にしない。", sourceId: "rollout-newrelic-aircloset" },
  ];
  intelligence.interviewPrep = {
    intro: "採用requisition数や新製品の勢いと、自分のterritory・達成可能性・delivery条件を分けて確認したい。",
    questions: [
      { question: "各AE seatのsegment、territory、account数、平均ACV、cycle、ramped達成率は。", why: "同名Senior AE 3 requisitionsを、採用signalではなく実際のquota難度へ落とす。", sourceIds: ["newrelic-japan-jobs-ae"] },
      { question: "東京regionは現在どのdataとproductでGAし、移行・DR・SLA・価格はどうなるか。", why: "2026年7月開始予定と、8月17日時点で公式GAを確認できない状態を分ける。", sourceIds: ["newrelic-japan-datacenter-2026"] },
      { question: "AI triage・RCAの精度、human review、誤判定時のownerと改善cycleは。", why: "AI demoとproduction incident運用の差を確認する。", sourceIds: ["newrelic-market-position"] },
      { question: "ingest量、retention、user、supportを含む3年TCOを競合・内製とどう比較するか。", why: "公開単価だけで価格優位を断定せず、顧客data量で検証する。", sourceIds: ["newrelic-market-position"] },
    ],
  };
  intelligence.roleLens = {
    salesMotion: "2026年8月17日時点のGenba対象は7 requisitions。Enterprise AE 1件、Senior Enterprise AE 3件、SDR、Senior Technical Success Manager、Solutions Consultant IIで、新規・拡張、pipeline、technical validation、adoptionを分担する。",
    compensation: "日本の7対象求人は給与・OTE・pay mixを公開していない。第三者投稿や他国の給与帯で補完しない。",
    quota: "quota額、territory、担当社数、ACV、ramp、達成率は非公開。同名Senior AEの3 requisitionsは採用seatのsignalであり、達成可能性の証明ではない。",
    collaboration: "AE・SDRに加えSolutions ConsultantとTechnical Successを同時採用しており、presales、onboarding、adoption、renewal riskを横断するteam sellingが前提。",
  };
  intelligence.salesAppeal = {
    intro: "observabilityを単なる監視ではなく、重要業務のresilience、AI運用、顧客影響、telemetry economicsへ接続して提案できる局面。",
    points: [
      { title: "国内の時間短縮事例を商談仮説へ使える", detail: "東京ガスとORIXの事例を、平均効果ではなくPoCのbaseline設計材料として使える。", sourceIds: ["rollout-newrelic-tokyogas", "rollout-newrelic-orix"] },
      { title: "AI・security・business impactまで提案範囲が広い", detail: "APM起点からAI observability、SRE Agent、Security RX、Business ObservabilityへbuyerとKPIを広げられる。", sourceIds: ["newrelic-market-position"] },
      { title: "日本の7対象requisitionsはGTM投資signal", detail: "AE、SDR、Solutions、Technical Successを同時採用する。ただし業績やquota達成の証拠ではない。", sourceIds: ["newrelic-japan-jobs-ae"] },
    ],
  };
  intelligence.solutions = intelligence.solutions.map((solution) => ({
    ...solution,
    differentiation: "telemetry、digital experience、security、AI、business impactを一つのplatformで相関し、OpenTelemetryと多数のintegrationを取り込める。価格優位は公開価格、retention、ingest量、supportを含む実見積で比較する。",
  }));
  intelligence.fitTags = intelligence.fitTags.filter((tag) => !tag.includes("価格競争力") && !tag.includes("国内データセンター開設"));
  intelligence.sources = intelligence.sources.filter((source) => !["newrelic-japan-openwork", "newrelic-japan-salary-openwork"].includes(source.id));
  const sourceFixes: Record<string, Partial<CompanyPublicIntelligence["sources"][number]>> = {
    "newrelic-founding": { label: "New Relic公式About", url: "https://newrelic.com/jp/about", kind: "企業公式", scope: "創業・会社・leadership" },
    "newrelic-market-position": { label: "New Relic公式Platform", url: "https://newrelic.com/jp/platform", kind: "企業公式", scope: "現行製品と比較検証軸" },
  };
  intelligence.sources = intelligence.sources.map((source) => sourceFixes[source.id] ? { ...source, ...sourceFixes[source.id], checkedAt: researchedAt } : source);
  addSources(intelligence, [
    { id: "rollout-newrelic-fy2023-sec", label: "New Relic FY2023 Form 10-K", url: "https://www.sec.gov/Archives/edgar/data/1448056/000144805623000033/newr-20230331.htm", kind: "法定開示", scope: "買収前最終通期の売上・利益・RPO・NRR・顧客規模", checkedAt: researchedAt },
    { id: "rollout-newrelic-about", label: "New Relic日本公式About", url: "https://newrelic.com/jp/about", kind: "企業公式", scope: "会社・leadership・日本office", checkedAt: researchedAt },
    { id: "rollout-newrelic-tokyogas", label: "New Relic・東京ガス事例", url: "https://newrelic.com/jp/customers/tokyogas-group", kind: "企業公式", scope: "国内顧客の障害調査・意思決定時間", checkedAt: researchedAt },
    { id: "rollout-newrelic-orix", label: "New Relic・ORIX事例", url: "https://newrelic.com/jp/customers/orix", kind: "企業公式", scope: "原因特定・CS解決時間", checkedAt: researchedAt },
    { id: "rollout-newrelic-aircloset", label: "New Relic・airCloset発表", url: "https://newrelic.com/jp/press-release/20260708", kind: "企業公式", scope: "顧客自作AIとの複合成果", checkedAt: researchedAt },
    { id: "rollout-newrelic-fsa-resilience", label: "金融庁 Operational Resilience", url: "https://www.fsa.go.jp/common/law/guide/city/03c2.html", kind: "公的機関", scope: "重要業務継続とIT・third-party依存の外部要求", checkedAt: researchedAt },
    { id: "rollout-b04-customs-usd-202608", label: "税関 週間為替相場 2026年8月16〜22日", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchNotion(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "notion", leaderName: "Ivan Zhao", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.notion.com/about", localName: "西 勝清", localLabel: "General Manager, APAC", localUrl: "https://www.notion.com/ja/blog/notion-japan-salesmeetup",
    companyId: "notion-about", jobId: "notion-careers", customersId: "notion-uzabase", externalId: "rollout-notion-ipa-dx2026", financeId: "rollout-notion-secondary-2026",
    targets: ["全社IT・DX・AI", "ナレッジ・情報共有", "プロジェクト・業務運営", "人事・オンボーディング", "営業・マーケティング・Product"], competitors: "Microsoft 365・Copilot、Google Workspace・Gemini、Atlassian・Rovo、Glean、Asana・monday・ClickUp、Slack・Drive・社内wiki・内製agent",
    feature: "Docs、Wiki、database、Projects、Calendar・Mail、Enterprise Search、Meeting Notes、Notion Agent・Custom Agents、Developer Platformを同じworkspaceで提供する。", advantage: "柔軟なblock・databaseと既存PLG利用を、permission-aware search、AI、workflow、data residency、developer extensibilityへ連続させる。", benefit: "検索、承認、onboarding、meetingからaction、project coordinationを短縮し、人とAIが同じ権限付きcontextから仕事を進める。", evidence: "Toyotaは承認15分から5分、Uzabaseは情報到達改善と組織図転記45分から10分、JR西日本はonboarding支援時間50%超減を事例で説明。vendor-selectedで一般保証ではない。",
    marketVerdict: "結論：AI導入がpilotから価値創出へ進むほど、権限付きknowledgeとworkflowが重要。日本の対象12求人とdata residencyは投資signalだが、売上・ARR・利益額・quotaは非公開。", marketParagraphs: ["AI導入は大企業を中心に広がる一方、社内knowledgeはchat、drive、docs、project toolへ分散し、最新版・権限・正本が整わなければ人もAIも検索と確認に時間を失う。", "今後3〜5年はAI Agent、enterprise search、meeting-to-action、developer platformが追い風になる。一方、既存suite bundle、tool sprawl、migration、permission、AI credit実利用、data residency対象範囲が選定条件になる。", "Genba分析：勝ち筋はseatやAI demoでなく、一つのapproval、onboarding、search、meeting workflowでcycle、検索時間、adoption、credits consumed、answer acceptance、security reviewを測って拡張すること。"],
    cultureHeadline: "Notionはin-person companyを掲げ、東京でも月・火・木をAnchor Daysとする。現行求人はHybrid表記と#LI-Onsiteが併存するため、完全remoteとは扱わない。", classification: "出社中心", displayLabel: "東京・週3日Anchor Days", officeDays: "月・火・木", remoteOnly: "該当しない", flexibility: "地域別制度は個別確認",
    goodFor: ["PLGをEnterprise標準へ広げたい", "workflowを顧客とco-buildしたい", "AI・knowledge・projectを横断したい"], cautionFor: ["完全リモートを必須にする", "generic demo中心を望む", "migration・adoption・securityを避けたい"],
    unresolved: [["12求人とGTM設計", "BDR、Marketing、Sales、Solutions、Outcomes、FDEを同時採用。", "各teamの人数、coverage、account ownership、採用背景は？"], ["PLG→Enterprise", "1億userはpaid enterprise tractionを示さない。", "Japanのfree／team→Enterprise conversion、ACV、cycle、renewalは？"], ["AI value realization", "AI-enabled ARR構成比は利用・成果を示さない。", "credits sold／consumed、weekly adoption、workflow outcome、NRRをどう測る？"], ["Suite competition・TCO", "既存Microsoft・Google・Atlassianで十分な顧客もいる。", "migration、seat、AI credit、connector、changeを含む3年TCOと勝敗は？"], ["報酬・達成", "給与、OTE、quota、達成率、昇進は非公開。", "base／variable、quota、ramp、達成者比率、BDR→AE・SC→lead実例は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高・ARR", value: "非公開", detail: "非公開企業。総annual revenue、純収益、総ARR、日本売上は公開情報で確認できない。", sourceIds: ["rollout-notion-secondary-2026"] },
    { label: "収益性", value: "会社はearly historyからprofitableと説明（額・margin非公開）", detail: "2026年の取締役会記事による自己申告。current利益、営業利益、EBITDA、FCFは非公開。", sourceIds: ["rollout-notion-board-2026"] },
    { label: "AI-enabled customersのARR構成", value: "50%超", detail: "2025年末。総ARR額やAI単体売上ではなく、AI-enabled customerの構成比。", sourceIds: ["rollout-notion-secondary-2026"] },
    { label: "Secondary tender・評価額", value: "約2.7億米ドル（約437.8億円）／110億米ドル（約1兆7,836.5億円）", detail: "2026年の従業員・元従業員株式購入額と非公開株評価。会社への一次資金調達・時価総額・業績ではない。1ドル=162.15円の参照換算。", sourceIds: ["rollout-notion-secondary-2026", "rollout-b04-boj-usd-20260716"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "current global employee countを一次情報で確認できない。", sourceId: "notion-careers" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "日本team人数は公式に確認できない。", sourceId: "notion-japan-sales" };
  intelligence.companyStats.japanOffice = { value: "東京（正確な住所は確認不能）", detail: "公式CareerでTokyo officeは確認。一次情報で番地・ビルを確定しない。", sourceId: "notion-careers" };
  intelligence.customerProof = [
    { company: "トヨタ自動車 Future Creation Center", products: "Notion", outcome: "SNS投稿承認を15分から5分へ短縮。Toyota全社ではなく限定team・workflow。", implication: "特定workflowのvendor caseで全社平均・一般成果を保証しない。", sourceId: "notion-toyota" },
    { company: "ユーザベース", products: "Notion・Notion AI", outcome: "1,093人利用、利用率high-90%台、約70%が情報到達高速化。組織図転記45分から10分。", implication: "customer-reportedで、29時間削減等はcase計算を含む。", sourceId: "notion-uzabase" },
    { company: "JR西日本", products: "Notion Wiki", outcome: "data analytics部門で100%利用、onboarding支援時間50%超削減。", implication: "50%超は体感値で監査指標ではない。", sourceId: "notion-jrwest" },
    { company: "SmartHR", products: "Notion・Notion AI", outcome: "1,500人組織でMAU 96%、AI利用91%。年6万時間削減は1日10分短縮の仮定に基づく試算。", implication: "実測cost savingsとして扱わない。", sourceId: "rollout-notion-smarthr" },
  ];
  addSources(intelligence, [
    { id: "rollout-notion-secondary-2026", label: "Notion 2026年secondary tender発表", url: "https://www.notion.com/blog/gic-sequoia-index-purchase-notion-shares", kind: "企業公式", scope: "AI-enabled ARR構成、株式購入、評価額", checkedAt: researchedAt },
    { id: "rollout-notion-board-2026", label: "Notion取締役会紹介", url: "https://www.notion.com/blog/meet-notions-board-of-directors", kind: "企業公式", scope: "profitabilityの会社説明と経営体制", checkedAt: researchedAt },
    { id: "rollout-notion-ipa-dx2026", label: "IPA DX動向2026", url: "https://www.ipa.go.jp/pressrelease/2026/press20260716.html", kind: "公的機関", scope: "AI導入と価値創出のgap", checkedAt: researchedAt },
    { id: "rollout-notion-smarthr", label: "Notion・SmartHR事例", url: "https://www.notion.com/ja/customers/smarthr-jp", kind: "企業公式", scope: "国内adoptionと試算値の公開境界", checkedAt: researchedAt },
    { id: "rollout-b04-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchFour(records: Record<string, CompanyPublicIntelligence>) {
  const deepL = records.deepl;
  const elevenLabs = records.elevenlabs;
  const mirakl = records.mirakl;
  const newRelic = records["new-relic"];
  const notion = records.notion;
  if (deepL) patchDeepL(deepL);
  if (elevenLabs) patchElevenLabs(elevenLabs);
  if (mirakl) patchMirakl(mirakl);
  if (newRelic) patchNewRelic(newRelic);
  if (notion) patchNotion(notion);
}
