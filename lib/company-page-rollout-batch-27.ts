import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-08-20";

function patchTwilio(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "twilio",
    leaderName: "Khozema Shipchandler",
    leaderLabel: "CEO",
    leaderUrl: "https://www.twilio.com/en-us/company/leadership",
    localName: "久保 敦",
    localLabel: "Twilio Japan 代表取締役社長",
    localUrl: "https://www.twilio.com/ja-jp/press/releases/go",
    companyId: "twilio-company",
    jobId: "twilio-job",
    customersId: "twilio-customers",
    externalId: "twilio-external",
    financeId: "twilio-finance",
    targets: ["最高デジタル責任者・顧客体験責任者", "コンタクトセンター・顧客対応", "製品・開発", "マーケティング・成長・CRM", "セキュリティ・本人確認・通信運用"],
    heroSummary: "電話、message、email、contact center、customer dataが別systemへ分かれると、顧客文脈が切れ、AI agentを加えても到達、品質、cost、human handoffを一つの責任で管理できない。Twilioはcommunication API、Flex、Segmentを接続し、delivery、処理時間、conversion、fraud、developer工数を改善する。",
    competitors: "Vonage、Sinch、AWS、Genesys、Amazon Connect、NICE、Salesforce、Adobe、国内carrier、内製",
    feature: "Voice、Messaging、Email、Verify、Flex、SegmentをAPIとcustomer dataでつなぐ。",
    advantage: "global communication infrastructure、developer-first API、contact center、first-party dataを同じcustomer journeyへ接続する。",
    benefit: "delivery、containment、handle time、conversion、fraud loss、developer hours、channel costを改善できる可能性がある。",
    evidence: "Q2 2026は売上14.99億ドル、organic growth 17%、DBNER 116%、free cash flow 3.53億ドル。Toyota Connected、ANA、GO等の国内事例を掲載。",
    marketVerdict: "結論：Q2の17% organic growth、116% DBNER、国内法人22人、Strategic AE採用は成長と日本投資のsignal。一方、日本売上・顧客数・NRR・seller達成率は非公開で、usage growthをgross marginとmulti-product価値へ変えられるかを検証する。",
    marketParagraphs: [
      "AI agentとdigital customer serviceが増えるほど、通信品質、identity、data、human handoffを横断したoperating layerが必要になる。",
      "Twilioはcommunication APIからFlex、Segment、AIへ広がり、channel単体ではなく顧客との会話全体のinfrastructureを狙う。",
      "Genba分析：重要journeyでdelivery、containment、handle time、conversion、fraud、developer hoursをbaseline比較し、channel・data・AIを含む3年TCOで選定する。",
    ],
    cultureHeadline: "remote-firstのglobal組織。日本求人は日本国内Remoteで約50%のtravelを想定し、在宅中心でも顧客接点は多い。",
    classification: "フルリモート",
    displayLabel: "日本国内Remote",
    officeDays: "固定出社日数なし。対象求人は約50%のtravelを想定",
    remoteOnly: "remote-first",
    flexibility: "顧客・team gatheringでの対面と国内外travelを含む",
    goodFor: ["APIと顧客体験を横断したい", "usage・gross marginを含むStrategic Salesを担いたい", "remote global組織で自律的に動きたい"],
    cautionFor: ["出張を避けたい", "new logo hunterだけに専念したい", "日本のquota・達成率開示を必須にする"],
    unresolved: [
      ["Account portfolio", "既存Strategic customersを拡張。", "担当社数、上位customer concentration、industry、既存usageとwhite spaceは？"],
      ["目標", "up-sell・cross-sellとterritory planを担う。", "revenue、gross profit、usage、multi-product、renewalのweightと直近達成率は？"],
      ["Unit economics", "communication volumeとplatform adoptionを伸ばす。", "product別gross margin、discount、carrier cost、commit、overageをどう管理するか？"],
      ["協働", "SE、Partner、Product、Marketingと連携。", "account ownership、specialist credit、support escalation、product gapのdecision rightは？"],
      ["報酬・キャリア", "日本向け数値は非公開。", "base・variable・equity、ramp、直近24カ月の昇進・異動・離職は？"],
    ],
  }));
  intelligence.researchedAt = checkedAt;
  if (intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.capitalMarketRead = {
      asOf: "Q2 2026（2026-08-20確認）",
      metrics: [
        { label: "売上", value: "14.99億米ドル（約2,354億円）", change: "前年同期比22%増・organic 17%増", interpretation: "communication usageとplatform拡張が再加速。日本単体は非公開。", sourceId: "twilio-finance" },
        { label: "Dollar-Based Net Expansion Rate", value: "116%", change: "前年同期108%", interpretation: "既存顧客の拡張が改善。日本portfolioの値ではない。", sourceId: "twilio-finance" },
        { label: "Free cash flow", value: "3.53億米ドル（約554億円）", change: "前年同期2.64億米ドル", interpretation: "成長とcash generationを両立。", sourceId: "twilio-finance" },
      ],
      growthDrivers: [{ title: "AI時代のconversation infrastructure", evidence: "Voice、Messaging、Email、Flex、SegmentをAI agent・human双方の対話基盤へ統合。", japanMeaning: "日本Strategic AEは既存customerのmulti-product adoptionとprofitable growthを担う。", sourceIds: ["twilio-company", "twilio-job", "twilio-finance"] }],
      risks: [{ title: "carrier cost・competition・customer concentration", disclosedRisk: "通信原価、価格競争、大口customerの利用変動が売上とgross marginへ影響する。", companyResponse: "platform productとAI、GTM効率、financial disciplineを強化。", genbaRead: "日本accountでusage growthだけでなくgross profit、commit、retention、multi-productを確認する。", sourceIds: ["twilio-finance", "twilio-company"] }],
      japanCommitment: { verdict: "2018年法人設立、公開人数22人、通信事業者登録、Strategic AE採用を確認", summary: "日本の事業基盤は明確だが、日本売上・顧客数・NRR・team構成は非公開。", signals: [{ year: "2026", title: "Strategic Account Executive採用", detail: "日本Remoteで既存大手顧客のup-sell・cross-sellを担当。", sourceIds: ["twilio-job"] }], unknowns: ["日本売上・gross profit・NRR", "担当account数・concentration・達成率", "日本team構成・reporting line"] },
      scenarios: [
        { scenario: "基本", title: "既存customerのmulti-product化", body: "Voice・MessagingからFlex、Segment、AIへ拡張しDBNERを維持する。" },
        { scenario: "上振れ", title: "AI agent conversationの標準基盤", body: "human・AI双方のcommunication infrastructureとしてusageとplatform mixが伸びる。" },
        { scenario: "下振れ", title: "通信原価とsuite競争", body: "carrier cost、hyperscaler・CCaaS競争、customer optimizationでprofitable growthが鈍る。" },
      ],
      sourceIds: ["twilio-finance", "twilio-company", "twilio-job", "twilio-customers"],
    };
  }
}

function patchPerforce(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "perforce",
    leaderName: "Jim Cassens",
    leaderLabel: "CEO",
    leaderUrl: "https://www.perforce.com/company",
    localName: "確認不能",
    localLabel: "日本事業責任者",
    localUrl: "https://jobs.lever.co/perforce/9eeec4e8-9bc0-4a07-9ac1-3cbd99236b7d",
    companyId: "perforce-company",
    jobId: "perforce-job",
    customersId: "perforce-customers",
    externalId: "perforce-external",
    financeId: "perforce-finance",
    targets: ["最高情報責任者・開発責任者", "DevOps・基盤開発", "データベース・データ基盤", "セキュリティ・プライバシー・コンプライアンス", "品質保証・アプリケーション責任者"],
    heroSummary: "test dataを得るまで日数がかかり、環境ごとに機密dataが増殖すると、releaseは遅れ、privacyとstorage riskが増える。Perforce Delphixはmasking、virtualization、provisioning、policyを統合し、data待ち、storage、audit finding、release頻度を改善する。",
    competitors: "Broadcom、IBM、K2view、Informatica、cloud-native database clone、script内製、GitLab、Microsoft",
    feature: "code、quality、test data、infrastructure automationをportfolioで提供し、Delphixでtest dataをmasking・provisioningする。",
    advantage: "heterogeneous databaseのdata copy、masking policy、self-service、auditをsoftware deliveryのworkflowへ接続する。",
    benefit: "data provision lead time、storage、masking coverage、audit finding、release frequency、engineer hoursを改善できる可能性がある。",
    evidence: "会社表示は20,000社超、1,700人超、80カ国超、Fortune 100の75%超。DBS、Choice Hotels、ADP等の公式事例を掲載。",
    marketVerdict: "結論：大規模customer基盤、Delphix日本法人、日本Enterprise AE採用は明確。一方、買収後のportfolio統合、日本売上・customer・team・seller達成率は非公開で、test dataの速度とcomplianceを同じbudgetへ束ねられるかを検証する。",
    marketParagraphs: [
      "AI・cloud開発で非本番環境とdata需要が増えるほど、provisioning速度と個人・機密dataの統制が同時制約になる。",
      "Perforceはversion controlからquality、infrastructure、test dataへ買収で広がり、mission-critical software deliveryのportfolioを形成している。",
      "Genba分析：対象applicationでdata待ち、storage、masking、finding、release frequencyをbaseline比較し、script・cloud cloneを含む3年TCOで選定する。",
    ],
    cultureHeadline: "日本在住RemoteのEnterprise Sales role。global portfolioと国内customer・partnerをつなぐ働き方で、固定出社日数は明記されていない。",
    classification: "フルリモート",
    displayLabel: "日本国内Remote",
    officeDays: "固定出社日数の明記なし",
    remoteOnly: "対象求人はRemote",
    flexibility: "顧客・partner訪問、global teamとのtimezone・travel条件を確認",
    goodFor: ["DevOpsとdata privacyを横断したい", "大手企業の複雑なdatabase課題を売りたい", "買収portfolioのcross-sellを作りたい"],
    cautionFor: ["単一productのsimple SaaS saleを望む", "小規模・短期商談だけを担いたい", "日本のquota・達成率開示を必須にする"],
    unresolved: [
      ["Territory", "Japan EnterpriseでDelphixを担当。", "既存customer、white space、industry、account数、new・existing比率は？"],
      ["目標", "test data managementの売上を担う。", "quota、ACV、cycle、pipeline coverage、renewal・cross-sell creditと直近達成率は？"],
      ["Portfolio", "Perforceが2024年にDelphixを買収。", "Delphix単体とP4・Puppet・Perfectoのaccount ownership、pricing、enablementは？"],
      ["Delivery", "複雑なdata・security導入。", "Japan SE、Professional Services、Support、partnerの人数とimplementation責任は？"],
      ["報酬・キャリア", "日本向け数値は非公開。", "base・variable・equity、ramp、直近24カ月の昇進・異動・離職は？"],
    ],
  }));
  intelligence.researchedAt = checkedAt;
}

function patchFusionWorldwide(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "fusion-worldwide",
    leaderName: "Peter LeSaffre",
    leaderLabel: "Founder / CEO",
    leaderUrl: "https://www.fusionww.com/about-us/team",
    localName: "Peter LeSaffre",
    localLabel: "Fusion Trade Japan 代表者",
    localUrl: "https://www.fusionww.jp/",
    companyId: "fusion-worldwide-company",
    jobId: "fusion-worldwide-job",
    customersId: "fusion-worldwide-customers",
    externalId: "fusion-worldwide-external",
    financeId: "fusion-worldwide-finance",
    targets: ["調達・サプライチェーン責任者", "製造・生産管理", "設計・部品技術", "品質保証・コンプライアンス", "財務・在庫管理"],
    heroSummary: "allocation、EOL、急な需要で半導体・電子部品が不足するとline stopが起き、open market調達はcounterfeitリスク、余剰在庫はcashを圧迫する。Fusion Worldwideはglobal sourcing、quality inspection、market intelligence、inventory programを組み合わせ、生産継続、lead time、quality、working capitalを改善する。",
    competitors: "Arrow、Avnet、Macnica、Mouser、Digi-Key、他のindependent distributor、manufacturer direct、broker、内製調達",
    feature: "8,500社のsupplier network、20超の拠点、quality control・test、inventory managementを一体で提供する。",
    advantage: "scarcity時のglobal accessとcommercial speedに、inspection・test・traceability、excess mitigationを接続する。",
    benefit: "line-stop回避、lead time、purchase variance、defect、expedite、excess recovery、調達工数を改善できる可能性がある。",
    evidence: "会社公式は年間売上20億ドル超、8,500 supplier、20超の拠点、35人超のengineer、5つのquality center、5段階100-point inspectionを掲載。日本公式は東京office16人を公表。",
    marketVerdict: "結論：global sourcingとquality infrastructure、日本法人・東京16人、現行Sales AE求人は事業基盤を示す。一方、日本売上・customer・repeat率・seller達成率は非公開で、spot取引をBOM risk・inventory・長期accountへ広げられるかを検証する。",
    marketParagraphs: [
      "AI infrastructure、地政学、export control、fab capacityの変化で、半導体の不足・価格・納期は複数categoryへ同時に波及する。",
      "Fusion Worldwideはauthorized channelで埋まらないscarcityとEOLにglobal networkで入り、quality・testingとinventory programでbrokerとの差を作る。",
      "Genba分析：重要BOMでline-stop回避、lead time、purchase variance、inspection defect、excess recoveryを測り、平時の単価ではなくrisk-adjusted costで選定する。",
    ],
    cultureHeadline: "東京officeを拠点に新規開拓、価格交渉、global Purchasingとの連携を進めるsales組織。成果連動のuncapped commissionを明記する。",
    classification: "出社中心",
    displayLabel: "東京office",
    officeDays: "固定出社日数の明記なし。flexible hoursは9:00–18:00または10:00–19:00",
    remoteOnly: "Remote専任表記なし",
    flexibility: "国内出張は勤務時間の20%以下を想定",
    goodFor: ["新規開拓と価格交渉を鍛えたい", "半導体・Supply Chainの専門性を作りたい", "global sourcing teamと高速に案件を動かしたい"],
    cautionFor: ["subscription SaaSだけを売りたい", "cold call・spot案件を避けたい", "固定給中心の報酬だけを望む"],
    unresolved: [
      ["Territory", "日本の新規顧客を開拓。", "industry、account数、named・white space、既存引継ぎ、self-source比率は？"],
      ["Quota・economics", "uncapped commissionを明記。", "base、pay mix、quota、gross profit・revenueのweight、accelerator、直近達成率は？"],
      ["Quality liability", "inspection・testを提供。", "source qualification、defect・RMA、traceability、保険、claim時の責任境界は？"],
      ["Repeat business", "不足・EOL・余剰を扱う。", "spotからpreferred supplier、inventory programへ移る率、repeat gross profit、concentrationは？"],
      ["Career", "東京teamとglobal Purchasingで案件実行。", "ramp、training、account ownership、直近24カ月の昇進・異動・離職は？"],
    ],
  }));
  intelligence.researchedAt = checkedAt;
}

function patchDeepgram(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "deepgram",
    leaderName: "Scott Stephenson",
    leaderLabel: "Co-founder / CEO",
    leaderUrl: "https://deepgram.com/company/leadership",
    localName: "募集中",
    localLabel: "Sales Country Leader (Japan)",
    localUrl: "https://jobs.ashbyhq.com/Deepgram/3ecb28e4-4ce3-468c-8bf2-e2b3c4a722bf",
    companyId: "deepgram-company",
    jobId: "deepgram-job",
    customersId: "deepgram-customers",
    externalId: "deepgram-external",
    financeId: "deepgram-finance",
    targets: ["最高技術責任者・AI責任者", "コンタクトセンター・顧客体験", "製品・開発", "通信・CCaaS・CPaaS事業者", "セキュリティ・プライバシー・リスク"],
    heroSummary: "Voice AIは少しの遅延、専門語の誤認識、interrupt処理の失敗で顧客体験とcontainmentが崩れる。Deepgramはreal-time STT、TTS、turn-taking、Voice Agent APIをvoice-native stackで提供し、accuracy、latency、completion、human transfer、call costを改善する。",
    competitors: "Google、AWS、Microsoft、OpenAI、ElevenLabs、AssemblyAI、CCaaS・CPaaS、内製",
    feature: "real-timeのSTT、TTS、conversational speech recognition、Voice Agent APIをcloud・self-hostedで提供する。",
    advantage: "voice-native foundation model、interruptを扱うturn-taking、deployment choiceを一つのproduction stackへまとめる。",
    benefit: "accuracy、latency、containment、completion、transfer、call cost、CSATを改善できる可能性がある。",
    evidence: "Series C 1.3億ドル・13億ドル評価、20万developer、1,300社超、5万年分のaudio・1兆語を会社発表。Twilio、SigmaMind等のproduction事例を掲載。",
    marketVerdict: "結論：大規模なdeveloper・customer基盤、Series C、Japan Country Leader採用は進出の強いsignal。一方、日本法人・常設拠点・named customer・local deliveryは未確認で、求人を正式進出の証明とはせず、採用・lighthouse・専任podを観測する。",
    marketParagraphs: [
      "contact centerとconsumer serviceでAI agentが増えるほど、日本語のaccuracy、latency、human handoff、privacyがproduction条件になる。",
      "DeepgramはSTTからTTS、turn-taking、Voice Agent APIへ広がり、voice modelをpoint APIではなくconversation runtimeへ拡張している。",
      "Genba分析：限定use caseでaccuracy、latency、containment、completion、transfer、call costをbaseline比較し、hyperscaler・CCaaS・内製との運用TCOで選定する。",
    ],
    cultureHeadline: "remote-firstのAI企業。Japan Country Leader求人はmarket buildと対面でのtrust形成を重視するが、Remote・Hybrid・office条件は明記されていない。",
    classification: "未確認",
    displayLabel: "日本勤務／形態未確認",
    officeDays: "固定出社日数の明記なし",
    remoteOnly: "会社はremote-first。対象roleのRemote専任表記はなし",
    flexibility: "日本Enterpriseとの対面、global team、partner活動を含む",
    goodFor: ["Voice AI categoryを日本で作りたい", "player-coachとして売上とteam buildを両立したい", "directとpartnerを同時に設計したい"],
    cautionFor: ["完成したJapan playbookを求める", "個人商談だけに専念したい", "日本法人・officeの確定を入社条件にする"],
    unresolved: [
      ["Entry baseline", "求人はstrong demandを示す。", "Japan qualified pipeline、paid customer、production volume、renewal、ARRの分母は？"],
      ["Country number", "pipelineとARR growthを担う。", "year-one quota、ramp、ACV、cycle、self-source、partner-source、直近forecastは？"],
      ["Team build", "AEを採用・coachするplayer-coach。", "approved headcount、SE・CS・Partner・Marketing・Supportの採用順とbudgetは？"],
      ["Local readiness", "日本語product feedbackとlocalizationを担う。", "日本語accuracy、support、contract、privacy、security、incident escalationのgapは？"],
      ["法人・報酬", "日本法人・雇用主体と報酬は非公開。", "雇用・契約主体、base・variable・equity、decision right、法人・office計画は？"],
    ],
  }));
  intelligence.researchedAt = checkedAt;
}

export function applyCompanyPageRolloutBatchTwentySeven(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  if (intelligenceBySlug.twilio) patchTwilio(intelligenceBySlug.twilio);
  if (intelligenceBySlug.perforce) patchPerforce(intelligenceBySlug.perforce);
  if (intelligenceBySlug["fusion-worldwide"]) patchFusionWorldwide(intelligenceBySlug["fusion-worldwide"]);
  if (intelligenceBySlug.deepgram) patchDeepgram(intelligenceBySlug.deepgram);
}
