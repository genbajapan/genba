import type { CompanyPublicIntelligence, ResearchSource } from "@/lib/company-public-intelligence";

const checkedAt = "2026-08-12";

const airwallexSources: ResearchSource[] = [
  { id: "air-job", label: "Account Executive, Japan", url: "https://careers.airwallex.com/job/da172780-d69c-4685-8112-239fe1a04616/account-executive-japan/", kind: "企業公式", scope: "日本AEの担当・要件", checkedAt },
  { id: "air-jp", label: "Airwallex日本公式", url: "https://www.airwallex.com/ja-jp", kind: "企業公式", scope: "製品・日本提供範囲", checkedAt },
  { id: "air-license", label: "第二種資金移動業登録", url: "https://www.airwallex.com/global/newsroom/airwallex-obtains-registration-as-a-type-2-funds-transfer-business-operator", kind: "企業公式", scope: "日本事業・規制登録", checkedAt },
  { id: "air-funding", label: "Airwallex Series H", url: "https://www.airwallex.com/global/newsroom", kind: "企業公式", scope: "資金調達・企業規模", checkedAt },
  { id: "air-minor", label: "Minor Hotels事例", url: "https://www.airwallex.com/jp/case-studies", kind: "企業公式", scope: "顧客成果", checkedAt },
  { id: "air-slowood", label: "Slowood事例", url: "https://www.airwallex.com/jp/case-studies", kind: "企業公式", scope: "顧客成果", checkedAt },
  { id: "air-pure", label: "PURE Group事例", url: "https://www.airwallex.com/jp/case-studies", kind: "企業公式", scope: "顧客成果", checkedAt },
  { id: "air-fsa", label: "金融庁 資金移動業", url: "https://www.fsa.go.jp/policy/settlement/index.html", kind: "外部集計", scope: "日本の決済規制", checkedAt },
];

const airwallexIntelligence: CompanyPublicIntelligence = {
  researchedAt: checkedAt,
  salesSnapshot: "「海外売上と資金を国別口座・通貨・決済手段ごとに管理する負荷」を財務責任者へ問う会社。「越境決済の手数料と入金遅延が粗利とcash flowを削る課題」を事業責任者へ可視化する会社。「成長に合わせて決済・口座・カードを組み直す複雑さ」を一つの金融基盤へ束ねる会社で、経営指標へ直結する営業としての面白さがある。",
  marketStatus: { isPublic: false, growthSummary: "グローバル決済基盤を250,000社超へ展開し、日本では第二種資金移動業登録を取得して提供範囲を拡張する段階。", ipoOutlookSummary: "評価額や大型調達は公表されるが、上場時期は未公表。日本の提供機能と実稼働顧客を分けて見る必要がある。", milestones: [
    { year: "2015", label: "創業", detail: "越境取引の金融インフラを簡素化する目的で創業。", sourceId: "air-jp" },
    { year: "2024", label: "global scale", detail: "複数地域で口座・決済・支出管理を統合するplatformへ拡張。", sourceId: "air-jp" },
    { year: "2025", label: "日本登録", detail: "第二種資金移動業者として登録。", sourceId: "air-license" },
    { year: "2025", label: "Series H", detail: "$320Mを調達し、評価額$11Bを公表。", sourceId: "air-funding" },
    { year: "2026", label: "Japan AE採用", detail: "SME/Growthのfull-cycle AEを東京で募集。", sourceId: "air-job" },
  ], sourceIds: ["air-jp", "air-license", "air-funding", "air-job"], genbaVerdict: { headline: "日本の規制参入とglobal productの間を売る局面", body: "知名度だけでなく、日本で現在使える機能、顧客の海外取引量、finance workflowを正確に切り分ける営業力が問われる。" }, growthDrivers: [
    { title: "越境事業の増加", body: "海外販売・仕入・拠点運営が増えるほど通貨と口座の分断が顕在化。", sourceId: "air-jp" },
    { title: "日本の規制基盤", body: "第二種資金移動業登録が日本での製品展開余地を広げる。", sourceId: "air-license" },
    { title: "platform cross-sell", body: "paymentsからaccounts、cards、spend、embedded financeへ拡張可能。", sourceId: "air-jp" },
  ], japanGrowth: { headline: "規制登録後の市場開拓期", narrative: "日本では公式サイトが現在の提供範囲に留保を置く。global機能をそのまま販売可能と扱わず、利用可否を案件ごとに確認する必要がある。", qualitativeSignals: [
    { label: "営業採用", detail: "日本SME/Growth向けAEを募集。", sourceId: "air-job" },
    { label: "規制登録", detail: "第二種資金移動業登録を取得。", sourceId: "air-license" },
    { label: "提供範囲", detail: "日本公式ページで利用可能な機能と今後の機能を区別。", sourceId: "air-jp" },
  ], sourceIds: ["air-job", "air-license", "air-jp"] }, riskHypotheses: [
    { title: "日本の機能差が期待値gapになる", body: "global suiteの魅力が強いほど、日本で未提供の機能を前提に商談が進むrisk。", confidence: "高", evidence: ["日本公式が提供範囲を注記", "規制登録後の拡張段階"], counterSignal: "online payments等、現時点で販売できる入口はある。", sourceIds: ["air-jp", "air-license"] },
    { title: "FinTech競争と審査がcycleを左右", body: "銀行・決済代行・カード・経費SaaSとの比較に加え、KYCやrisk reviewが導入速度へ影響する。", confidence: "中", evidence: ["規制対象の金融service", "full-cycle AE採用"], counterSignal: "統合platformとglobal coverageは差別化要素。", sourceIds: ["air-fsa", "air-job"] },
  ] },
  sellingPlaybook: { frameIntro: "Airwallexは決済機能ではなく、海外成長のたびに増える銀行口座・通貨・入金・支払・cardの分断を経営課題として売る。日本で使える機能を明示し、手数料だけでなくcash conversionと運用工数を比較する。", issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Minor Hotelsは多通貨取引のcost、Slowoodは越境顧客体験、PURE Groupは国をまたぐ資金運用の非効率へ対応した。共通するのは、決済単価ではなく売上回収、為替、reconciliation、拠点運営が分断される課題。" },
    { title: "製品の成り立ちから見る課題", body: "Airwallexは国境を越える事業者が既存銀行と決済網を継ぎ合わせる不便から生まれ、accounts・payments・cards・embedded financeをAPIと一つのplatformへ寄せた。製品の核は金融workflowの再構成。" },
    { title: "外部環境の要求から見る課題", body: "ECとSaaSの海外販売、海外拠点、分散teamが増える一方、資金移動にはKYC・AML・各国規制への適合が必要。成長速度とfinance controlを同時に成立させる要求が強まる。" },
  ],
  narrative: [
    { label: "背景", body: "日本企業が海外販売・仕入・拠点展開を始めると、国別の口座、決済代行、card、経費、為替が増える。" },
    { label: "課題", body: "手数料、入金日数、reconciliation、権限、cash visibilityが分断され、finance teamの手作業と運転資金が膨らむ。" },
    { label: "解決策", body: "対象国と現在利用できる機能を確認し、一つの取引flowで決済成功率、入金日数、FX、照合作業をbaseline比較する。" },
    { label: "選定の理由", body: "銀行、Stripe、Wise、Adyen、経費SaaSとの比較で、複数金融機能をglobal infrastructure上で統合できる点が選定条件になる。" },
  ], openingHook: "海外売上100円を回収して自由に使えるまで、何社のproviderと何日、何円の手数料・照合作業が必要ですか。", valueHypothesis: "一地域・一決済flowでconversion、settlement、FX、reconciliation時間を測り、粗利とcash conversion cycleの改善幅から展開判断する。", commonObjection: { objection: "銀行と既存決済代行で足りている。", reframe: "単体手数料ではなく、複数国の口座維持、為替spread、入金待ち、照合、権限管理を含む総costと成長速度で比較する。" } },
  facts: [
    { label: "利用企業", value: "250,000社超", detail: "会社公式のglobal値。", sourceIds: ["air-funding"] },
    { label: "企業評価額", value: "$11B", detail: "Series H時点の非公開株式評価。", sourceIds: ["air-funding"] },
    { label: "調達", value: "$320M", detail: "Series Hの会社公式発表。", sourceIds: ["air-funding"] },
    { label: "組織", value: "2,300人・27拠点", detail: "求人記載のglobal規模。", sourceIds: ["air-job"] },
    { label: "日本登録", value: "第二種資金移動業", detail: "2025年取得。", sourceIds: ["air-license"] },
    { label: "掲載営業求人", value: "1件", detail: "Account Executive, Japanを確認。", sourceIds: ["air-job"] },
  ],
  hypotheses: [
    { topic: "PRODUCT / MARKET", title: "payments起点でfinance stackへ広がる", conclusion: "日本で使える決済を入口に、規制と提供状況に応じてaccount・card・spendへ広げる余地がある。", confidence: "中", evidence: ["global multi-product", "日本の規制登録"], counterSignals: ["日本未提供機能がある"], interviewQuestions: ["日本で現在販売可能なproduct別売上構成は", "paymentsからcross-sellする順序は"], sourceIds: ["air-jp", "air-license"] },
    { topic: "SALES MOTION", title: "SME/Growthのfull-cycle value sale", conclusion: "finance managerからCEOまで、海外取引flowを診断してnew logoをcloseするhunter role。", confidence: "高", evidence: ["求人がfull-cycleを明記", "Japan SMEを担当"], counterSignals: ["inbound/partner比率は非公開"], interviewQuestions: ["self-sourced比率と平均cycleは", "implementation/KYCのhandoffは"], sourceIds: ["air-job"] },
    { topic: "QUOTA ATTAINABILITY", title: "日本quotaは提供機能とtarget accountで決まる", conclusion: "global scaleより、日本のeligible account、product availability、KYC通過、sales cycleを確認すべき。", confidence: "探索中", evidence: ["日本AEを採用", "提供範囲に差"], counterSignals: ["global顧客基盤と資本力"], interviewQuestions: ["ramped AEの達成率・ACV・cycleは", "pipeline coverageとterritoryは"], sourceIds: ["air-job", "air-jp"] },
    { topic: "COMPENSATION", title: "日本の報酬条件は非公開", conclusion: "base、variable、equity、ramp、FX/payment volumeのcreditをoffer前に確認する。", confidence: "探索中", evidence: ["求人にrangeなし"], counterSignals: ["大型資金調達"], interviewQuestions: ["Pay Mixとacceleratorは", "volume・revenue・new logoの評価配分は"], sourceIds: ["air-job", "air-funding"] },
    { topic: "CULTURE / CAREER", title: "規制と速度を両立するbuild phase", conclusion: "既製playbookの実行だけでなく、日本のproduct realityをglobal teamへ返しGTMを作る経験になる。", confidence: "中", evidence: ["Japan early-stageを求人で示唆", "規制登録"], counterSignals: ["日本teamの在籍・昇進dataなし"], interviewQuestions: ["Japan team人数と意思決定権は", "product gapを改善した実例は"], sourceIds: ["air-job", "air-license"] },
  ],
  cultureNotes: { organizationReadTitle: "規制産業で速度とownershipを求める成長組織。", hypothesis: { title: "完成品を売るより、日本GTMを作る。", body: "求人はfull-cycleと自律性を強調。finance・risk・productを巻き込み、提供可否を正確に扱う人が合う。" }, careerValue: { title: "FinTechとglobal expansionの複合経験。", body: "決済、FX、KYC、API、finance ROIを横断できればFinTech・payments・Treasury領域で市場価値を作れる。", confidence: "高" } },
  customerProof: [
    { company: "Minor Hotels", products: "Global Accounts / FX / Payments", outcome: "会社事例で年間$7.2Mのcost削減を公表。", implication: "為替と送金をP&Lで売れる。", sourceId: "air-minor" },
    { company: "Slowood", products: "Payments", outcome: "会社事例でrepeat customer 36%増を公表。", implication: "決済をconversionとretentionへ結びつけられる。", sourceId: "air-slowood" },
    { company: "PURE Group", products: "Global financial infrastructure", outcome: "複数市場の運用cost削減を会社事例で紹介。", implication: "multi-entity finance operationを統合するuse case。", sourceId: "air-pure" },
  ],
  externalSignals: [
    { label: "日本参入条件", value: "第二種資金移動業登録", detail: "国内で一定額を超える資金移動serviceを提供する規制基盤。", caveat: "登録だけで全global機能が日本提供済みとは限らない。", sourceId: "air-license" },
    { label: "提供範囲", value: "日本とglobalで差", detail: "日本公式が現在利用可能な機能を区別。", caveat: "案件時点の最新契約・機能を確認する必要がある。", sourceId: "air-jp" },
  ],
  roleLens: { salesMotion: "SME/Growthへoutboundとinboundで入り、海外取引flowをdiscoveryし、finance managerからCEOを巻き込んでcloseするfull-cycle sale。", compensation: "日本のbase、OTE、equity、commission設計は非公開。", quota: "quota、達成率、ACV、cycleは非公開。product availabilityとtransaction volumeが難度を左右する。", collaboration: "Risk、Compliance、Product、Solutions、Implementation、Marketingと連携し、顧客側のFinance、Ecommerce、Operations、経営を束ねる。" },
  leadership: { name: "非公開", role: "日本事業責任者", read: "本調査の公式一次情報では現任責任者を確定できていない。reporting lineと日本の権限を面接で確認したい。", sourceId: "air-job" },
  companyStats: { globalHeadcount: { value: "2,300人", detail: "求人記載のglobal値。", sourceId: "air-job" }, japanHeadcount: { value: "非公開", detail: "日本team人数は未開示。" }, japanOffice: { value: "東京", detail: "求人勤務地。", sourceId: "air-job" }, japanSince: { value: "2025年に規制登録", detail: "法人設立年月は本調査で未確定。", sourceId: "air-license" } },
  salesAppeal: { intro: "経営数値と金融infrastructureを同時に扱う営業。", points: [
    { title: "cash flowを売る", detail: "決済成功率、FX、入金速度、照合をCFOの指標へ変える。", sourceIds: ["air-job", "air-minor"] },
    { title: "Japan GTMを作る", detail: "規制と提供範囲の制約下でICPと勝ち筋を磨く。", sourceIds: ["air-license", "air-jp"] },
    { title: "land-and-expandを設計する", detail: "paymentsから複数finance workflowへ拡張する。", sourceIds: ["air-jp"] },
  ] },
  interviewPrep: { intro: "global momentumと日本で売れる現実を分けて確認する。", questions: [
    { question: "日本で現在契約・利用可能なproductと12カ月のlaunch計画は。", why: "期待値gapを避ける。", sourceIds: ["air-jp", "air-license"] },
    { question: "ramped AEのquota達成率、ACV、cycle、self-sourced比率は。", why: "territoryの実現可能性を見る。", sourceIds: ["air-job"] },
    { question: "KYC・risk reviewから稼働までの中央値と失注理由は。", why: "FinTech固有のdelivery frictionを見る。", sourceIds: ["air-fsa", "air-job"] },
    { question: "payments後のcross-sell順序とcredit ruleは。", why: "multi-productの報酬とownershipを見る。", sourceIds: ["air-jp"] },
  ] },
  solutions: [
    { name: "Payments", valueProp: "国内外のonline paymentを受け入れ、conversionとsettlementを管理。", url: "https://www.airwallex.com/ja-jp/payments", competitors: "Stripe、Adyen、各PSP。", differentiation: "global accounts・FX・spendと同一infrastructureへ接続。", retention: "日本のproduct別NRRは非公開。" },
    { name: "Global Accounts & Transfers", valueProp: "複数通貨の受取・保有・送金を一つのplatformで扱う。", url: "https://www.airwallex.com/ja-jp", competitors: "銀行、Wise Business、Revolut Business。", differentiation: "paymentsとtreasury flowを統合。日本での利用可否は個別確認が必要。", retention: "日本の継続率は非公開。" },
    { name: "Cards & Spend", valueProp: "card発行と支出管理をfinance workflowへ統合。", url: "https://www.airwallex.com/ja-jp", competitors: "経費SaaS、corporate card各社。", differentiation: "multi-currency accountとglobal spendを接続。日本での利用可否は個別確認が必要。", retention: "日本の継続率は非公開。" },
  ],
  customerStoriesUrl: "https://www.airwallex.com/jp/case-studies", fitTags: ["FinTechを売りたい", "SME/Growthに強い", "CFO商談が得意", "full-cycleを持ちたい", "global businessに関心", "規制を正確に扱える", "ROIを数値化できる", "build phaseを楽しめる"], comparisonMap: [
    { arena: "Global payments", companies: ["Airwallex", "Stripe", "Adyen"], why: "acceptance、coverage、settlement、platform統合の比較" },
    { arena: "Business accounts", companies: ["Airwallex", "Wise Business", "銀行"], why: "通貨、FX、送金、規制、supportの比較" },
    { arena: "Spend management", companies: ["Airwallex", "Ramp", "Brex"], why: "cardとfinance stackの統合比較" },
  ], sources: airwallexSources,
};

const camblySources: ResearchSource[] = [
  { id: "cambly-job", label: "Account Executive Japan", url: "https://jobs.ashbyhq.com/Cambly/1a01afdf-d2c6-462d-a2f6-22cc675959c5", kind: "企業公式", scope: "日本AEの職務・要件", checkedAt },
  { id: "cambly-org", label: "Cambly法人プラン", url: "https://organizations.cambly.com/japan", kind: "企業公式", scope: "製品・顧客・導入成果", checkedAt },
  { id: "cambly-course", label: "Cambly Courses", url: "https://www.cambly.com/ja/english/courses", kind: "企業公式", scope: "学習内容", checkedAt },
  { id: "cambly-zuiko", label: "株式会社瑞光 導入事例", url: "https://organizations.cambly.com/japan", kind: "企業公式", scope: "製造業の研修成果", checkedAt },
  { id: "cambly-mikuni", label: "ミクニエアロスペース事例", url: "https://organizations.cambly.com/japan", kind: "企業公式", scope: "製造業の導入", checkedAt },
  { id: "cambly-gov", label: "中央省庁採用事例", url: "https://organizations.cambly.com/japan", kind: "企業公式", scope: "公的機関の導入", checkedAt },
  { id: "cambly-mext", label: "文部科学省 企業の人材育成", url: "https://www.mext.go.jp/a_menu/shotou/new-cs/senseiouen/mext_02611.html", kind: "外部集計", scope: "学び直し・人材育成", checkedAt },
];

const camblyIntelligence: CompanyPublicIntelligence = {
  researchedAt: checkedAt,
  salesSnapshot: "「英語研修を導入しても忙しい社員が続かない課題」を人事へ問う会社。「受講時間は見えても実務で話せるようになったか証明できない課題」をL&Dへ可視化する会社。「海外会議・赴任・顧客対応の直前に会話練習が足りない課題」を24時間の実践機会へ変える会社で、人の変化を事業成果へ結ぶ営業としての面白さがある。",
  marketStatus: { isPublic: false, growthSummary: "consumer英会話の基盤を法人研修へ展開し、日本公式は2,000社超の企業・機関導入を公表。日本B2B salesを拡張する段階。", ipoOutlookSummary: "非公開企業でIPO計画は未公表。法人売上、継続率、受講率の定義は面接で確認が必要。", milestones: [
    { year: "2012", label: "創業", detail: "native tutorとlearnerをonlineで接続する英会話serviceを開始。", sourceId: "cambly-org" },
    { year: "2020年代", label: "法人展開", detail: "HR/L&D向け管理・supportを備えた法人planを展開。", sourceId: "cambly-org" },
    { year: "2025", label: "日本顧客基盤", detail: "日本公式で2,000社超を掲示。", sourceId: "cambly-org" },
    { year: "2026", label: "AI学習支援", detail: "録画・文字起こし・personalized feedback・AI会話を統合。", sourceId: "cambly-org" },
    { year: "2026", label: "Japan AE採用", detail: "法人市場をfull-cycleで開拓するAEを募集。", sourceId: "cambly-job" },
  ], sourceIds: ["cambly-org", "cambly-job"], genbaVerdict: { headline: "成熟したconsumer体験を法人ROIへ翻訳する局面", body: "英会話serviceの比較ではなく、受講継続、CEFR、実務行動、管理工数をつないで研修予算を守れるかが営業の核。" }, growthDrivers: [
    { title: "global業務の会話需要", body: "海外拠点・会議・顧客対応で実践的speakingが必要。", sourceId: "cambly-zuiko" },
    { title: "研修ROIの可視化", body: "CEFR判定と利用dataで継続稟議を支援。", sourceId: "cambly-org" },
    { title: "運営負荷の代行", body: "説明会・onboarding・reportingを日本teamが支援。", sourceId: "cambly-org" },
  ], japanGrowth: { headline: "2,000社基盤からB2B再現性を高める", narrative: "導入logoは多い一方、企業規模別の有料顧客、契約seat、renewalは未開示。AEが新規開拓と導入後の利用設計をどこまで持つかが重要。", qualitativeSignals: [
    { label: "導入企業・機関", detail: "日本公式で2,000社超。", sourceId: "cambly-org" },
    { label: "公的導入", detail: "中央省庁の職員研修への採用を掲載。", sourceId: "cambly-gov" },
    { label: "営業採用", detail: "Japan B2BをscaleするAEを募集。", sourceId: "cambly-job" },
  ], sourceIds: ["cambly-org", "cambly-gov", "cambly-job"] }, riskHypotheses: [
    { title: "低価格比較へ陥る", body: "online英会話のseat単価比較になると、native tutor・24時間・supportの価値が薄まる。", confidence: "高", evidence: ["競合の多い英語研修市場", "法人planは5名以上"], counterSignal: "CEFR・管理・伴走を含む法人設計。", sourceIds: ["cambly-org"] },
    { title: "契約後の利用率がrenewalを左右", body: "購入しても社員が話さなければ成果が出ず、人事が予算を守れない。", confidence: "高", evidence: ["継続しない課題を公式に提示", "onboardingとreportingを提供"], counterSignal: "予約不要・24時間と日本語supportでfrictionを下げる。", sourceIds: ["cambly-org"] },
  ] },
  sellingPlaybook: { frameIntro: "Cambly法人営業は英会話lessonを売るのではなく、研修が続かず成果を証明できない構造を変える。対象社員の実務sceneとbaselineを定め、利用率・CEFR・行動変化を継続稟議へつなぐ。", issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "瑞光は海外出張の多い技術職を含む社員の抵抗感と実務会話、中央省庁は国際会議・外交場面、教育機関は多数受講者の実践機会を求めた。共通課題は教材不足ではなく、本番で話す回数と継続運営。" },
    { title: "製品の成り立ちから見る課題", body: "Camblyはnative speakerへonlineで即時接続するconsumer体験から始まり、録画・文字起こし・feedback・AI練習、法人管理へ拡張した。人との本番会話を中心に、時間と場所の制約を外す設計。" },
    { title: "外部環境の要求から見る課題", body: "海外顧客・拠点との協働が増え、翻訳AIが広がっても、交渉・会議・関係構築では即時の会話力が残る。一方、研修費には利用dataと成果の説明責任が強まり、受講機会と測定を同時に求められる。" },
  ],
  narrative: [
    { label: "背景", body: "企業は選抜研修、赴任準備、福利厚生として英語研修を契約する。" },
    { label: "課題", body: "予約、cancel、level差、担当者の催促が障壁となり、受講率と実務成果が上がらず更新根拠が弱い。" },
    { label: "解決策", body: "対象職種の実務sceneとCEFR baselineを定め、24時間の1対1会話、onboarding、利用report、level checkを90日で検証する。" },
    { label: "選定の理由", body: "Bizmates、レアジョブ、PROGOS、コーチング各社との比較で、native tutorの即時性、実会話量、法人運営support、測定の組合せが条件になる。" },
  ], openingHook: "直近の英語研修で、契約者のうち毎月実際に話した人数と、実務行動が変わった人数を説明できますか。", valueHypothesis: "海外対応が近い一部署で90日pilotを行い、activation、継続受講、speaking時間、CEFR、manager評価、運営工数を前後比較する。", commonObjection: { objection: "AI英会話や既存研修の方が安い。", reframe: "seat単価ではなく、実際に話した時間、継続率、実務sceneでの行動変化、人事運営工数を含む有効受講者あたりcostで比較する。" } },
  facts: [
    { label: "導入企業・機関", value: "2,000超", detail: "日本法人plan公式値。", sourceIds: ["cambly-org"] },
    { label: "講師", value: "10,000人超", detail: "native tutorの会社公式値。", sourceIds: ["cambly-org"] },
    { label: "利用時間", value: "24時間365日", detail: "予約または即時lesson。", sourceIds: ["cambly-org"] },
    { label: "成果signal", value: "82%", detail: "英語への自信がついたと回答した会社公式調査値。母数・調査条件は要確認。", sourceIds: ["cambly-org"] },
    { label: "導入開始", value: "最短1週間", detail: "相談、trial、onboarding後の会社案内。", sourceIds: ["cambly-org"] },
    { label: "掲載営業求人", value: "1件", detail: "Japan AEを確認。", sourceIds: ["cambly-job"] },
  ],
  hypotheses: [
    { topic: "PRODUCT / MARKET", title: "AI単体ではなくhuman practiceとのhybridが立ち位置", conclusion: "AI練習で反復し、native tutorとの予測不能な会話で実務耐性を作る提案が差別化になる。", confidence: "中", evidence: ["AI練習と1対1lessonを併設", "法人2,000社超"], counterSignals: ["AI-onlyの低価格化", "研修budget削減"], interviewQuestions: ["AI機能の利用率とlesson継続への効果は", "主要競合別の勝敗理由は"], sourceIds: ["cambly-org"] },
    { topic: "SALES MOTION", title: "HR/L&Dへのfull-cycle new logo sale", conclusion: "課題発掘からtrial、契約、利用設計までを持ち、成果dataでrenewalへ接続する。", confidence: "高", evidence: ["求人がfull-cycleを明記", "法人導入stepを公開"], counterSignals: ["CSとの境界は非公開"], interviewQuestions: ["AE/CSのrenewal ownershipは", "平均seatとcycleは"], sourceIds: ["cambly-job", "cambly-org"] },
    { topic: "QUOTA ATTAINABILITY", title: "logo数よりactive learner economicsを見る", conclusion: "2,000社の基盤だけでなく、paid seats、activation、renewal、expansionがquota実現性を決める。", confidence: "探索中", evidence: ["導入logoを公表", "利用継続課題を公式に提示"], counterSignals: ["日本語supportと24時間利用"], interviewQuestions: ["達成率、ACV、renewal、seat expansionは", "inactive seatの扱いは"], sourceIds: ["cambly-org", "cambly-job"] },
    { topic: "COMPENSATION", title: "日本の報酬・commissionは非公開", conclusion: "new logo、seat、renewal、usageの評価配分を確認する。", confidence: "探索中", evidence: ["求人に給与rangeなし"], counterSignals: ["B2B拡大role"], interviewQuestions: ["Pay Mix、ramp、acceleratorは", "renewal/expansion creditは"], sourceIds: ["cambly-job"] },
    { topic: "CULTURE / CAREER", title: "consumer speedと法人outcomeをつなぐ", conclusion: "EdTechのproduct engagementとB2B sales/CSの両方を学ぶbuild phase。", confidence: "中", evidence: ["日本B2B拡張", "global remote環境"], counterSignals: ["日本のtenure・promotion非公開"], interviewQuestions: ["Japan B2B team人数と権限は", "AEの昇進実例は"], sourceIds: ["cambly-job"] },
  ],
  cultureNotes: { organizationReadTitle: "学習体験を法人成果へ変える小規模GTM組織。", hypothesis: { title: "売って終わりではなく、話される状態を作る。", body: "trial・onboarding・利用dataを使い、HRとlearner双方の摩擦を拾える人が合う。" }, careerValue: { title: "EdTech PLGとB2B HR salesの交点。", body: "learner engagement、HR ROI、seat expansionを一体で扱えば、HR Tech・Learning Techで再現性のある経験になる。", confidence: "中" } },
  customerProof: [
    { company: "株式会社瑞光", products: "Cambly法人プラン", outcome: "海外出張の多い技術職を含め、英語への抵抗感低下と自主学習増加を会社事例で紹介。", implication: "職種別の実務sceneから全社展開へ広げるuse case。", sourceId: "cambly-zuiko" },
    { company: "中央省庁", products: "Cambly法人プラン", outcome: "国際会議・外交sceneを想定した職員研修へ採用。詳細は非公開。", implication: "security・調達・reporting要求へ対応する公共use case。", sourceId: "cambly-gov" },
    { company: "株式会社ミクニエアロスペース", products: "Cambly法人プラン", outcome: "社員向けonline英会話の導入事例を公式掲載。定量成果は非公開。", implication: "海外業務を持つ製造業の継続研修を狙える。", sourceId: "cambly-mikuni" },
  ],
  externalSignals: [
    { label: "研修要求", value: "実務と継続", detail: "企業は学び直しを個人任せにせず業務成果へつなぐ必要がある。", caveat: "政策資料はCamblyの需要・成果を直接示さない。", sourceId: "cambly-mext" },
    { label: "AI代替", value: "練習cost低下", detail: "Cambly自身もAI会話を組み込みhuman lessonと併用。", caveat: "human tutorの優位性は職種・level・目的で異なる。", sourceId: "cambly-org" },
  ],
  roleLens: { salesMotion: "HR/L&Dへoutbound・inboundで入り、対象者・実務scene・現行研修dataをdiscovery。trialとBusiness Caseを作り、contract後はonboarding・利用reportをCSとつなぐ。", compensation: "日本のbase、OTE、equity、commissionは非公開。", quota: "quota、達成率、ACV、cycleは非公開。paid seats、activation、renewalが難度を左右する。", collaboration: "Marketing、Customer Success、Learning、Product、Tutor operationsと連携し、顧客側のHR/L&D、部門manager、learner、procurementを束ねる。" },
  leadership: { name: "非公開", role: "Japan B2B leadership", read: "公式求人と法人pageでは現任責任者を確定できていない。Japan salesのreporting lineとP&L ownershipを確認したい。", sourceId: "cambly-job" },
  companyStats: { globalHeadcount: { value: "非公開", detail: "最新の公式従業員数は未確認。" }, japanHeadcount: { value: "非公開", detail: "Japan B2B team人数は未開示。" }, japanOffice: { value: "東京 / remote", detail: "求人でJapan remoteを案内。", sourceId: "cambly-job" }, japanSince: { value: "確認中", detail: "日本法人planは確認したが設立年月は一次情報で未確定。", sourceId: "cambly-org" } },
  salesAppeal: { intro: "人の行動変化を売上へ変えるsales経験。", points: [
    { title: "研修ROIを作る", detail: "activation、会話量、CEFR、実務評価を稟議へつなぐ。", sourceIds: ["cambly-org"] },
    { title: "consumer productをEnterpriseへ売る", detail: "個人利用の分かりやすさを管理・security・supportへ翻訳。", sourceIds: ["cambly-job", "cambly-org"] },
    { title: "利用定着まで関与する", detail: "trial、onboarding、reportingをrenewalへ接続。", sourceIds: ["cambly-org"] },
  ] },
  interviewPrep: { intro: "導入logoではなくactive useとrenewalを確認する。", questions: [
    { question: "日本法人のpaid customers、平均seat、activation、renewal、expansionは。", why: "2,000社のcommercial qualityを見る。", sourceIds: ["cambly-org"] },
    { question: "ramped AEのquota達成率、ACV、cycle、self-sourced比率は。", why: "hunter roleの実現可能性を見る。", sourceIds: ["cambly-job"] },
    { question: "AEとCSのonboarding・usage・renewal ownershipは。", why: "契約後の成果責任を確認。", sourceIds: ["cambly-job", "cambly-org"] },
    { question: "AI-only、国内online英会話、coachingへの勝敗理由は。", why: "category内の差別化を確認。", sourceIds: ["cambly-org"] },
  ] },
  solutions: [
    { name: "Cambly法人プラン", valueProp: "native tutorとの1対1lessonを24時間提供し、企業管理と日本語supportを付加。", url: "https://organizations.cambly.com/japan", competitors: "Bizmates、レアジョブ、EF、英語coaching各社。", differentiation: "10,000人超のnative tutor、予約不要、録画・文字起こし、法人伴走。", retention: "日本のrenewal・seat retentionは非公開。" },
    { name: "Speaking Level Check", valueProp: "CEFR準拠で会話levelの推移を可視化。", url: "https://organizations.cambly.com/japan", competitors: "PROGOS、VERSANT、各社test。", differentiation: "lesson利用と測定・reportingを同じprogramで扱う。", retention: "測定利用率は非公開。" },
    { name: "Courses & AI Practice", valueProp: "目的別courseとAI反復練習でlesson外の学習を支援。", url: "https://www.cambly.com/ja/english/courses", competitors: "AI英会話app、e-learning。", differentiation: "AI練習からnative tutorとの実会話へつながる。", retention: "機能別継続率は非公開。" },
  ],
  customerStoriesUrl: "https://organizations.cambly.com/japan", fitTags: ["HR/L&Dへ売りたい", "EdTechに関心", "人の行動変化を測りたい", "full-cycleを持ちたい", "SMB/Mid-Marketに強い", "利用定着へ踏み込みたい", "global teamで働きたい", "build phaseを楽しめる"], comparisonMap: [
    { arena: "法人online英会話", companies: ["Cambly", "Bizmates", "レアジョブ"], why: "講師、時間、管理、support、成果測定の比較" },
    { arena: "Speaking assessment", companies: ["Cambly", "PROGOS", "VERSANT"], why: "測定精度と学習flowの統合比較" },
    { arena: "AI英会話", companies: ["Cambly", "Speak", "ELSA"], why: "AI反復とhuman practiceの役割比較" },
  ], sources: camblySources,
};

const censysSources: ResearchSource[] = [
  { id: "censys-job", label: "Account Executive Japan", url: "https://job-boards.greenhouse.io/censys/jobs/8558569002", kind: "企業公式", scope: "日本AEの担当・要件", checkedAt },
  { id: "censys-product", label: "Censys Internet Intelligence", url: "https://censys.com/", kind: "企業公式", scope: "製品・企業規模", checkedAt },
  { id: "censys-map", label: "Censys Internet Map", url: "https://censys.com/resources/glossary/", kind: "企業公式", scope: "data規模・scan頻度", checkedAt },
  { id: "censys-nos", label: "NOS導入事例", url: "https://censys.com/case-studies/how-major-telecom-provider-nos-reduces-cyber-risk-and-investigates-threats-with-censys", kind: "企業公式", scope: "通信事業者の成果", checkedAt },
  { id: "censys-gov", label: "欧州政府機関事例", url: "https://censys.com/case-studies/how-a-european-government-agency-saves-time-sees-more-with-censys/", kind: "企業公式", scope: "調査時間短縮", checkedAt },
  { id: "censys-realestate", label: "不動産会社事例", url: "https://censys.com/case-studies/asm_cloud_discovery_case_study", kind: "企業公式", scope: "unknown asset発見", checkedAt },
  { id: "censys-nist", label: "NIST Cybersecurity Framework 2.0", url: "https://www.nist.gov/cyberframework", kind: "外部集計", scope: "asset・risk governance要求", checkedAt },
];

const censysIntelligence: CompanyPublicIntelligence = {
  researchedAt: checkedAt,
  salesSnapshot: "「自社が把握していないinternet-facing assetが攻撃対象になる課題」をCISOへ問う会社。「脆弱性alertは多いが攻撃者から見えるriskの優先順位が付かない課題」をsecurity operationsへ可視化する会社。「調査teamがhost・certificate・infrastructureの収集に時間を使う課題」をinternet-scale dataへ置き換える会社で、security判断の起点を売る営業としての面白さがある。",
  marketStatus: { isPublic: false, growthSummary: "internet-wide scan dataをAttack Surface Management、Threat Hunting、security productへのdata供給へ展開。日本で500人以上のupper midmarket・Enterpriseを直販とchannelで開拓する段階。", ipoOutlookSummary: "非公開企業でIPO計画は未公表。Fortune 500採用比率はglobal値で、日本の顧客・ARR・channel稼働は非公開。", milestones: [
    { year: "2015", label: "創業", detail: "University of Michiganのinternet scan研究を基盤に創業。", sourceId: "censys-product" },
    { year: "2020年代", label: "Internet Map", detail: "host・service・certificateを継続観測するdata基盤へ拡張。", sourceId: "censys-map" },
    { year: "2024", label: "Exposure Management", detail: "external attack surfaceの発見・ownership・prioritizationを統合。", sourceId: "censys-product" },
    { year: "2026", label: "Enterprise adoption", detail: "Fortune 500の50%超が利用と会社公表。", sourceId: "censys-product" },
    { year: "2026", label: "Japan AE採用", detail: "directとdistributor/resellerを担うAEを募集。", sourceId: "censys-job" },
  ], sourceIds: ["censys-product", "censys-map", "censys-job"], genbaVerdict: { headline: "日本のcategory creationを任されるsecurity data sale", body: "scanner比較ではなく、unknown asset、threat investigation、data enrichmentを複数buyerへ翻訳しchannelを立ち上げるrole。" }, growthDrivers: [
    { title: "cloud・子会社でassetが増殖", body: "CMDB外の公開assetを継続発見する需要。", sourceId: "censys-realestate" },
    { title: "threat investigation高速化", body: "attack infrastructureのhost・certificate履歴を即時検索。", sourceId: "censys-nos" },
    { title: "data APIへの組込み", body: "security vendor・保険・研究機関がinternet dataを自社workflowへ利用。", sourceId: "censys-product" },
  ], japanGrowth: { headline: "日本は初期GTMの可能性", narrative: "日本専任AEがdirectとchannelの両方を持つ。既存logo・local reference・SE/support体制を面接で確かめたい。", qualitativeSignals: [
    { label: "専任求人", detail: "Japan AEを公式掲載。", sourceId: "censys-job" },
    { label: "target", detail: "500人以上のupper midmarket・Enterpriseを担当。", sourceId: "censys-job" },
    { label: "channel", detail: "distributor・resellerとの共同開拓を要件化。", sourceId: "censys-job" },
  ], sourceIds: ["censys-job"] }, riskHypotheses: [
    { title: "category理解に教育costがかかる", body: "EASM、internet intelligence、threat huntingの予算ownerが分かれ、既存scannerとの違いが伝わりにくい。", confidence: "高", evidence: ["複数use case", "Japan AEがmarket developmentを担当"], counterSignal: "global Enterpriseの社会的証明。", sourceIds: ["censys-job", "censys-product"] },
    { title: "data freshnessだけでは勝てない", body: "scan量を示してもremediation ownershipやworkflow統合へ届かなければ価値が限定。", confidence: "中", evidence: ["顧客事例はasset発見後のactionを重視"], counterSignal: "API・workspace・integrationで運用へ接続。", sourceIds: ["censys-realestate", "censys-nos"] },
  ] },
  sellingPlaybook: { frameIntro: "Censysはsecurity toolの追加ではなく、攻撃者から見える自社・第三者assetを事実として作る基盤を売る。未知assetの件数、調査時間、remediation owner特定をpilotで測る。", issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "NOSは約200万IPと5G・IoTを含む複雑なsurface、欧州政府機関は列挙作業に1週間、不動産会社は監視外cloud assetを抱えた。共通課題は既知脆弱性のscan不足ではなく、何がinternetに存在するかの基準dataがないこと。" },
    { title: "製品の成り立ちから見る課題", body: "Censysは研究者がinternet全体をscan・構造化するprojectから生まれた。社内agentを置いた範囲だけを見る発想ではなく、外部から観測できるhost・service・certificateを履歴dataとして提供する。" },
    { title: "外部環境の要求から見る課題", body: "cloud、M&A、SaaS、third partyでasset ownershipは曖昧になる一方、経営にはcyber riskのgovernanceが要求される。攻撃者は組織図ではなく公開surfaceを見るため、継続発見と責任者へのroutingが必要。" },
  ],
  narrative: [
    { label: "背景", body: "企業のinternet-facing assetはcloud account、子会社、partner、開発teamごとに増える。" },
    { label: "課題", body: "CMDBとscannerの対象外が残り、alert noiseの中で重要riskとremediation ownerを決められない。" },
    { label: "解決策", body: "一事業・domain群でCensysの外部観測と内部inventoryを照合し、unknown asset、false positive、triage時間、owner到達率を測る。" },
    { label: "選定の理由", body: "Shodan、SecurityScorecard、Tenable、Palo Alto Cortex Xpanse、Microsoft等との比較で、internet-scale dataの深さ・freshness・履歴・API操作性が条件になる。" },
  ], openingHook: "攻撃者が今日発見できる御社のhost・service・certificateのうち、ownerまで特定できる割合は何%ですか。", valueHypothesis: "代表domainとcloud範囲で30日検証し、未知asset、重大露出、調査時間、owner特定、修正までの日数を既存processと比較する。", commonObjection: { objection: "既存scannerとCSPMで十分。", reframe: "登録済みassetの深いscanと、外部から存在を知らないassetを発見する役割を分け、重複ではなくblind spotと調査工数で比較する。" } },
  facts: [
    { label: "Fortune 500", value: "50%超", detail: "会社公式の利用比率。", sourceIds: ["censys-product"] },
    { label: "certificate", value: "100億超", detail: "Internet Mapの会社公式値。", sourceIds: ["censys-map"] },
    { label: "IPv4 host", value: "2億超", detail: "継続観測する会社公式値。", sourceIds: ["censys-map"] },
    { label: "service refresh", value: "daily 20億超", detail: "毎日更新するservice観測数。", sourceIds: ["censys-map"] },
    { label: "data history", value: "7年", detail: "Internet Mapの履歴。", sourceIds: ["censys-map"] },
    { label: "掲載営業求人", value: "1件", detail: "Japan AEを確認。", sourceIds: ["censys-job"] },
  ],
  hypotheses: [
    { topic: "PRODUCT / MARKET", title: "unknown assetを起点に複数use caseへexpand", conclusion: "ASMでlandし、threat hunting・security operations・data APIへ広げる余地。", confidence: "高", evidence: ["3種の顧客事例", "multi-product"], counterSignals: ["security budget統合"], interviewQuestions: ["日本のland productとexpansion順序は", "product別NRRは"], sourceIds: ["censys-product", "censys-nos"] },
    { topic: "SALES MOTION", title: "directとchannelを同時に作るhunter role", conclusion: "AEがnew logo、partner、executive valueを一人称で持つ。", confidence: "高", evidence: ["求人がfull-cycleとchannelを明記"], counterSignals: ["local team規模非公開"], interviewQuestions: ["direct/partner比率とcreditは", "SE coverageは"], sourceIds: ["censys-job"] },
    { topic: "QUOTA ATTAINABILITY", title: "Japan referenceとpipeline sourceが鍵", conclusion: "global採用率より日本logo、POC conversion、partner活性度がquota実現性を決める。", confidence: "探索中", evidence: ["Japan専任採用", "500+ employee target"], counterSignals: ["強いglobal proof"], interviewQuestions: ["達成率、ACV、cycle、pipeline coverageは", "日本有料顧客数は"], sourceIds: ["censys-job", "censys-product"] },
    { topic: "COMPENSATION", title: "日本報酬は非公開", conclusion: "base、variable、equity、ramp、partner creditを確認する。", confidence: "探索中", evidence: ["求人にrangeなし"], counterSignals: ["startup ownership"], interviewQuestions: ["Pay Mixとacceleratorは", "POCとdata dealのcreditは"], sourceIds: ["censys-job"] },
    { topic: "CULTURE / CAREER", title: "技術dataを市場へ翻訳するautonomous sale", conclusion: "research-grade dataをCISOのriskとanalyst workflowへ変えるcategory creation経験。", confidence: "中", evidence: ["remote/autonomous role", "研究起点"], counterSignals: ["日本昇進dataなし"], interviewQuestions: ["Japanからproduct roadmapへ影響した例は", "次の12カ月の採用計画は"], sourceIds: ["censys-job", "censys-map"] },
  ],
  cultureNotes: { organizationReadTitle: "研究dataをcommercial actionへ変える分散組織。", hypothesis: { title: "自律性と技術curiosityが必要。", body: "日本でbrand、pipeline、channelを作りながら、analystとexecutiveの両方へ価値を翻訳する人が合う。" }, careerValue: { title: "internet intelligenceの専門性。", body: "EASM、threat hunting、data APIを売れれば、security platformやcyber riskのEnterprise GTMで希少性がある。", confidence: "高" } },
  customerProof: [
    { company: "NOS", products: "ASM / Search", outcome: "約200万IPを対象に未知露出の発見とthreat investigationを支援。", implication: "大規模surfaceのnoise削減を売れる。", sourceId: "censys-nos" },
    { company: "欧州政府機関", products: "ASM", outcome: "asset列挙作業を1週間から20分へ短縮と会社事例で公表。", implication: "analyst時間を定量化できる。", sourceId: "censys-gov" },
    { company: "国際不動産会社", products: "ASM / Cloud Security", outcome: "監視外cloud assetを600超発見し、想定より80%多いonline assetを確認。", implication: "cloud blind spotをpilot成果にできる。", sourceId: "censys-realestate" },
  ],
  externalSignals: [
    { label: "governance要求", value: "CSF 2.0", detail: "NISTがGovernを加え、cyber riskを経営管理へ接続。", caveat: "framework採用は任意でCensys導入を直接要求しない。", sourceId: "censys-nist" },
    { label: "attack surface", value: "継続変化", detail: "Censysは毎日20億超serviceをrefresh。", caveat: "観測規模が顧客ごとの検知精度を自動保証しない。", sourceId: "censys-map" },
  ],
  roleLens: { salesMotion: "500人以上のEnterpriseへnew logoを開拓し、technical validationからexecutive Business Case、procurementまで管理。distributor・resellerをenableして共同pipelineを作る。", compensation: "日本のbase、OTE、equity、commissionは非公開。", quota: "quota、達成率、ACV、cycleは非公開。local proof、POC conversion、SE/channel capacityが難度を左右する。", collaboration: "Sales Engineering、Threat Research、Product、Customer Success、Marketing、channelと連携し、顧客側のCISO、SecOps、IT、cloud、riskを束ねる。" },
  leadership: { name: "非公開", role: "Japan sales leadership", read: "日本専任AEのreporting lineとlocal authorityは公式求人で確定できない。", sourceId: "censys-job" },
  companyStats: { globalHeadcount: { value: "非公開", detail: "最新公式値は未確認。" }, japanHeadcount: { value: "非公開", detail: "日本team規模は未開示。" }, japanOffice: { value: "日本 / remote", detail: "求人locationはJapan。", sourceId: "censys-job" }, japanSince: { value: "確認中", detail: "日本での初回提供・法人設立年月は未確定。", sourceId: "censys-job" } },
  salesAppeal: { intro: "security category creationの中核を担う。", points: [
    { title: "未知assetを経営riskへ変える", detail: "技術dataを損失・ownership・修正速度へ翻訳。", sourceIds: ["censys-realestate", "censys-job"] },
    { title: "analystとCISOの両方へ売る", detail: "search workflowからgovernanceまでmulti-thread。", sourceIds: ["censys-nos", "censys-nist"] },
    { title: "Japan channelを作る", detail: "distributor/resellerをpipeline engineへ育てる。", sourceIds: ["censys-job"] },
  ] },
  interviewPrep: { intro: "global data規模とJapan commercial tractionを分ける。", questions: [
    { question: "日本の有料顧客、ARR、reference、product別構成は。", why: "local proofを確認。", sourceIds: ["censys-job"] },
    { question: "ramped AEの達成率、ACV、cycle、POC conversionは。", why: "quota実現性を見る。", sourceIds: ["censys-job"] },
    { question: "direct/channelの案件ownership、margin、creditは。", why: "一人称で両方持つroleのconflictを見る。", sourceIds: ["censys-job"] },
    { question: "既存scanner・EASMへの勝敗理由とdata精度の検証方法は。", why: "spec比較を成果へ変えられるか見る。", sourceIds: ["censys-map", "censys-realestate"] },
  ] },
  solutions: [
    { name: "Censys Attack Surface Management", valueProp: "internet-facing assetを外部から継続発見し、riskとownerへ整理。", url: "https://censys.com/solutions/attack-surface-management/", competitors: "Cortex Xpanse、Microsoft Defender EASM、Tenable、Bitsight。", differentiation: "internet-wide scan dataと履歴を自社surfaceへ適用。", retention: "日本NRRは非公開。" },
    { name: "Censys Search / Internet Map", valueProp: "host・service・certificateを検索しthreat infrastructureを調査。", url: "https://search.censys.io/", competitors: "Shodan、ZoomEye、BinaryEdge。", differentiation: "structured schema、scan depth/frequency、certificate履歴。", retention: "product別継続率は非公開。" },
    { name: "Censys Enterprise Data", valueProp: "internet dataをAPI・datasetでsecurity productや分析へ組み込む。", url: "https://censys.com/", competitors: "自社scan、commercial threat data provider。", differentiation: "build costを避け、継続更新dataを利用。", retention: "data契約のrenewalは非公開。" },
  ], customerStoriesUrl: "https://censys.com/customers", fitTags: ["Cybersecurityを売りたい", "技術dataを翻訳できる", "CISO商談が得意", "Enterprise hunter", "channelを作れる", "category creationが好き", "remoteで自律できる", "POCを動かせる"], comparisonMap: [
    { arena: "EASM", companies: ["Censys", "Palo Alto Cortex Xpanse", "Microsoft Defender EASM"], why: "asset discovery、context、workflow統合の比較" },
    { arena: "Internet search", companies: ["Censys", "Shodan", "ZoomEye"], why: "scan depth、freshness、schema、historyの比較" },
    { arena: "Cyber rating", companies: ["Censys", "SecurityScorecard", "BitSight"], why: "観測dataとrisk scoringの用途比較" },
  ], sources: censysSources,
};

const halcyonSources: ResearchSource[] = [
  { id: "hal-job", label: "Commercial Account Executive Japan", url: "https://job-boards.greenhouse.io/halcyon/jobs/5745187004", kind: "企業公式", scope: "日本AEの職務・要件", checkedAt },
  { id: "hal-company", label: "Halcyon Company", url: "https://www.halcyon.ai/company", kind: "企業公式", scope: "創業・組織", checkedAt },
  { id: "hal-why", label: "Why Halcyon", url: "https://www.halcyon.ai/why-halcyon", kind: "企業公式", scope: "anti-ransomware platform", checkedAt },
  { id: "hal-key", label: "Key Material Capture", url: "https://www.halcyon.ai/platform/encryption-detection-key-capture", kind: "企業公式", scope: "製品差別化", checkedAt },
  { id: "hal-ocean", label: "OceanAir事例", url: "https://go.halcyon.ai/rs/401-WCH-435/images/CustomerCaseStudy_OceanAir.pdf?version=0", kind: "企業公式", scope: "金融組合のransomware対策", checkedAt },
  { id: "hal-dvu", label: "Delaware Valley University事例", url: "https://go.halcyon.ai/rs/401-WCH-435/images/CustomerCaseStudy_DelawareValleyUniversity.pdf?version=0", kind: "企業公式", scope: "大学のransomware resilience", checkedAt },
  { id: "hal-customers", label: "Halcyon Customers", url: "https://www.halcyon.ai/our-customers", kind: "企業公式", scope: "顧客事例", checkedAt },
  { id: "hal-funding", label: "Halcyon Series A", url: "https://www.halcyon.ai/press/halcyon-closes-50m-in-series-a-funding", kind: "企業公式", scope: "資金調達", checkedAt },
  { id: "hal-cisa", label: "CISA StopRansomware", url: "https://www.cisa.gov/stopransomware", kind: "外部集計", scope: "ransomware対策・復旧要求", checkedAt },
];

const halcyonIntelligence: CompanyPublicIntelligence = {
  researchedAt: checkedAt,
  salesSnapshot: "「EDRとbackupを入れてもransomwareが暗号化まで到達する課題」をCISOへ問う会社。「攻撃後に復号鍵がなく復旧時間を約束できない課題」を事業継続責任者へ可視化する会社。「security stackを増やしても専門teamが24時間追えない課題」をransomware専用防御とrecoveryへ変える会社で、最悪事態の事業損失を売る営業としての面白さがある。",
  marketStatus: { isPublic: false, growthSummary: "2021年創業のransomware専業vendor。endpoint prevention、decryption key capture、24/7 Ransomware Operations Center、warrantyを組み合わせ、日本commercial AEを採用。", ipoOutlookSummary: "非公開企業でIPO計画は未公表。日本顧客、local support、partner実績、renewalは非公開。", milestones: [
    { year: "2021", label: "創業", detail: "ransomwareを専用に止めるsecurity companyとして創業。", sourceId: "hal-company" },
    { year: "2023", label: "Series A", detail: "$50Mを調達。", sourceId: "hal-funding" },
    { year: "2024", label: "Ransomware Rollback", detail: "endpointで暗号化挙動とkey materialを捕捉するplatformを拡張。", sourceId: "hal-key" },
    { year: "2025", label: "customer proof", detail: "金融・教育・software・公共の導入事例を公開。", sourceId: "hal-customers" },
    { year: "2026", label: "Japan AE採用", detail: "directとchannelでcommercial市場を開拓。", sourceId: "hal-job" },
  ], sourceIds: ["hal-company", "hal-funding", "hal-job"], genbaVerdict: { headline: "EDR置換ではなくrecovery outcomeを売れる稀少なsecurity sale", body: "恐怖訴求だけでなく、既存EDR・backupとの役割分担、復旧時間、incident exerciseを定量化できるかが勝負。" }, growthDrivers: [
    { title: "ransomware継続", body: "侵入防止だけでなく暗号化・業務停止後の回復が経営課題。", sourceId: "hal-cisa" },
    { title: "既存stackとの共存", body: "EDRとbackupを置き換えず専用layerとして導入可能。", sourceId: "hal-why" },
    { title: "outcome保証", body: "key capture、ROC、warrantyでrecovery説明を強化。", sourceId: "hal-key" },
  ], japanGrowth: { headline: "日本は市場立ち上げ期", narrative: "Japan commercial AEがdirect・channelを担う。国内incident response、support language、data handling、warranty適用条件を確認したい。", qualitativeSignals: [
    { label: "営業採用", detail: "Japan Commercial AEを募集。", sourceId: "hal-job" },
    { label: "channel", detail: "partner共同販売をroleに明記。", sourceId: "hal-job" },
    { label: "product focus", detail: "ransomware専業の明確なcategory。", sourceId: "hal-why" },
  ], sourceIds: ["hal-job", "hal-why"] }, riskHypotheses: [
    { title: "既存EDR・backup予算に挟まれる", body: "顧客が既存投資で十分と判断すると専用budgetを作りにくい。", confidence: "高", evidence: ["coexistence前提", "ransomware専業"], counterSignal: "侵入後の暗号化・復旧という明確なgap。", sourceIds: ["hal-why", "hal-key"] },
    { title: "Japan deliveryの信頼が商談を左右", body: "incident時のresponse、復号、warrantyはlocal SLAと証拠が必要。", confidence: "中", evidence: ["24/7 ROCとwarrantyが価値", "Japan early stage"], counterSignal: "global customer casesを公開。", sourceIds: ["hal-customers", "hal-job"] },
  ] },
  sellingPlaybook: { frameIntro: "Halcyonはransomwareの恐怖ではなく、既存controlを抜けた暗号化に対して事業を何時間で戻せるかを売る。tabletop exerciseとendpoint pilotでprevention、key capture、recovery evidenceを作る。", issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "OceanAirは金融機関としてmember serviceを止めない防御、Delaware Valley Universityは限られたteamで既存stackを補完、他顧客は復旧時間短縮を求めた。共通課題はtool不足ではなく、ransomwareが通過した後の確実な回復。" },
    { title: "製品の成り立ちから見る課題", body: "Halcyonはransomware response経験者が、general-purpose securityでは暗号化専用の挙動・key・recoveryへ深く対応できない問題から設計。preventionだけでなくdecryption keyを攻撃中に捕捉する発想が核。" },
    { title: "外部環境の要求から見る課題", body: "ransomwareはdata窃取と暗号化を組み合わせ、企業にはBCP、報告、顧客説明、保険条件が求められる。backupがあってもidentity・endpoint・復旧手順が汚染されれば停止が続くため、復旧可能性の事前証明が必要。" },
  ],
  narrative: [
    { label: "背景", body: "企業はEDR、email security、backup、MDRへ投資している。" },
    { label: "課題", body: "攻撃が通過した際の暗号化拡大、key喪失、clean recovery、事業再開時間を実地で証明できない。" },
    { label: "解決策", body: "代表endpoint群で既存EDRとの共存を検証し、simulated encryptionの停止、key capture、isolation、ROC escalation、recovery exerciseを測る。" },
    { label: "選定の理由", body: "CrowdStrike、SentinelOne、Microsoft、Sophos、backup/MDR各社との比較で、ransomware専用技術、key material、24/7運用、warrantyの実効性が条件になる。" },
  ], openingHook: "主要endpointが暗号化された想定で、最後に復旧testを行い、事業部へ再開時刻を約束できたのはいつですか。", valueHypothesis: "一部endpointとcritical workflowで30〜60日検証し、暗号化阻止、key capture、alert精度、SOC工数、recovery timeを既存stackと比較する。", commonObjection: { objection: "EDRとimmutable backupで十分。", reframe: "侵入防止、暗号化挙動の停止、key確保、clean restoreは別control。既存stackを置き換えず、tabletopで残るgapと停止損失を確認する。" } },
  facts: [
    { label: "創業", value: "2021年", detail: "ransomware専業company。", sourceIds: ["hal-company"] },
    { label: "Series A", value: "$50M", detail: "2023年会社発表。", sourceIds: ["hal-funding"] },
    { label: "運用", value: "24/7 ROC", detail: "Ransomware Operations Centerを提供。", sourceIds: ["hal-why"] },
    { label: "特徴", value: "Key Material Capture", detail: "暗号化key materialの捕捉を設計。", sourceIds: ["hal-key"] },
    { label: "勤務", value: "remote", detail: "Japan AE求人の勤務形態。", sourceIds: ["hal-job"] },
    { label: "掲載営業求人", value: "1件", detail: "Commercial AE Japan。", sourceIds: ["hal-job"] },
  ],
  hypotheses: [
    { topic: "PRODUCT / MARKET", title: "ransomware専業が明確なwedge", conclusion: "EDR/backupの間に残る暗号化・recovery gapへlandできる。", confidence: "高", evidence: ["専用platform", "customer cases"], counterSignals: ["platform統合志向"], interviewQuestions: ["日本の主なcompetitive displacementは", "EDR別coexistence実績は"], sourceIds: ["hal-why", "hal-customers"] },
    { topic: "SALES MOTION", title: "CISOとchannelを動かすcommercial hunter", conclusion: "threat urgencyをexerciseとBusiness Caseへ変え、partnerでcoverageを作る。", confidence: "高", evidence: ["求人がdirect/channelを明記"], counterSignals: ["local support規模不明"], interviewQuestions: ["partner-sourced比率とPOC supportは", "buyer・cycleは"], sourceIds: ["hal-job"] },
    { topic: "QUOTA ATTAINABILITY", title: "Japan referenceとtechnical validationが鍵", conclusion: "global storyよりlocal logo、POC conversion、incident response体制を確認すべき。", confidence: "探索中", evidence: ["Japan専任採用"], counterSignals: ["明確なcategory pain"], interviewQuestions: ["達成率、ACV、cycleは", "日本顧客とreferenceは"], sourceIds: ["hal-job"] },
    { topic: "COMPENSATION", title: "日本報酬は非公開", conclusion: "base、variable、equity、ramp、partner creditを確認する。", confidence: "探索中", evidence: ["求人にrangeなし"], counterSignals: ["funding済み"], interviewQuestions: ["Pay Mixとacceleratorは", "multi-year/partner creditは"], sourceIds: ["hal-job", "hal-funding"] },
    { topic: "CULTURE / CAREER", title: "security operator起点のmission culture", conclusion: "ransomwareのtechnical depthとexecutive resilienceを両方扱う。", confidence: "中", evidence: ["専門家が創業", "fully remote"], counterSignals: ["日本tenure非公開"], interviewQuestions: ["Japan teamとon-call expectationは", "field feedbackの反映例は"], sourceIds: ["hal-company", "hal-job"] },
  ],
  cultureNotes: { organizationReadTitle: "ransomwareという一問題へ深く集中するremote組織。", hypothesis: { title: "危機感だけでなくevidenceを作る。", body: "技術teamと顧客のtabletop・POCを動かし、過剰な恐怖訴求を避けてrecovery outcomeを示す人が合う。" }, careerValue: { title: "cyber resilienceの専門性。", body: "endpoint、SOC、backup、incident responseを横断した経験はsecurity platformのEnterprise saleで強い。", confidence: "高" } },
  customerProof: [
    { company: "OceanAir Federal Credit Union", products: "Anti-Ransomware Platform", outcome: "既存防御を補完しmember-firstのransomware resilienceを強化。", implication: "金融機関のbusiness continuityへ提案できる。", sourceId: "hal-ocean" },
    { company: "Delaware Valley University", products: "Anti-Ransomware Platform", outcome: "限られたsecurity teamでpreventionとworst-case preparationを強化。", implication: "教育機関のresource制約へ適合。", sourceId: "hal-dvu" },
    { company: "市政府顧客", products: "Anti-Ransomware Platform", outcome: "会社顧客pageで約1,000 endpointと短時間recoveryの事例を紹介。", implication: "公共の事業継続とsmall teamへ売れる。", sourceId: "hal-customers" },
  ],
  externalSignals: [
    { label: "ransomware guidance", value: "防御と復旧", detail: "CISAがprevention・response resourceを継続提供。", caveat: "公的guidanceは特定vendor導入を推奨しない。", sourceId: "hal-cisa" },
    { label: "funding", value: "$50M Series A", detail: "専用platformの開発と市場拡大へ投資。", caveat: "資金調達はcommercial successを保証しない。", sourceId: "hal-funding" },
  ],
  roleLens: { salesMotion: "Commercial accountをprospectし、CISO・ITとransomware gapをdiscovery。SEとvalidationを行い、directまたはchannelでclose・expansionする。", compensation: "日本のbase、OTE、equity、commissionは非公開。", quota: "quota、達成率、ACV、cycleは非公開。local proof、POC capacity、partner coverageが難度を左右する。", collaboration: "Sales Engineering、Threat Research、ROC、Customer Success、Marketing、channelと連携し、顧客側のCISO、SOC、IT、BCP、Risk、経営を束ねる。" },
  leadership: { name: "Jon Miller", role: "CEO / Co-founder", read: "ransomware対策へ専業化した創業leader。日本の日常GTM責任者と権限は面接確認が必要。", sourceId: "hal-company" },
  companyStats: { globalHeadcount: { value: "非公開", detail: "最新公式値は未確認。" }, japanHeadcount: { value: "非公開", detail: "日本team人数は未開示。" }, japanOffice: { value: "remote", detail: "Japan AE求人はremote。", sourceId: "hal-job" }, japanSince: { value: "確認中", detail: "日本事業開始年月は未確定。", sourceId: "hal-job" } },
  salesAppeal: { intro: "security投資をrecovery outcomeへ変える。", points: [
    { title: "最悪事態を数値化する", detail: "RTO、endpoint、SOC工数、停止損失をBusiness Case化。", sourceIds: ["hal-ocean", "hal-cisa"] },
    { title: "専用categoryを作る", detail: "EDRとbackupの間のgapを経営へ説明。", sourceIds: ["hal-why", "hal-key"] },
    { title: "channelと技術検証を動かす", detail: "partner coverageとPOC evidenceを同時に作る。", sourceIds: ["hal-job"] },
  ] },
  interviewPrep: { intro: "threat urgencyではなくJapan executionを確認する。", questions: [
    { question: "日本顧客、ARR、reference、主要industryは。", why: "local tractionを見る。", sourceIds: ["hal-job"] },
    { question: "ramped AEの達成率、ACV、cycle、POC conversionは。", why: "quota実現性を見る。", sourceIds: ["hal-job"] },
    { question: "日本語でのROC、incident response、warranty適用体制は。", why: "売った後のcritical momentを確認。", sourceIds: ["hal-why"] },
    { question: "EDR・backup vendorとの共存条件と主な失注理由は。", why: "category budgetの作り方を見る。", sourceIds: ["hal-key", "hal-why"] },
  ] },
  solutions: [
    { name: "Halcyon Anti-Ransomware Platform", valueProp: "endpointでransomware挙動を検知・阻止し、既存security stackを補完。", url: "https://www.halcyon.ai/why-halcyon", competitors: "CrowdStrike、SentinelOne、Microsoft、Sophos。", differentiation: "ransomware専用engineと既存EDRとの共存。", retention: "日本NRRは非公開。" },
    { name: "Key Material Capture", valueProp: "暗号化中のkey materialを捕捉し復号可能性を高める。", url: "https://www.halcyon.ai/platform/encryption-detection-key-capture", competitors: "EDR rollback、backup restore、decryptor。", differentiation: "attack時にkeyを収集する専用設計。", retention: "機能別利用率は非公開。" },
    { name: "Ransomware Rollback / ROC", valueProp: "impactを抑え、24/7専門teamとrecoveryを支援。", url: "https://www.halcyon.ai/why-halcyon", competitors: "MDR、IR retainer、backup recovery。", differentiation: "prevention・operations・recovery outcomeを一体化。", retention: "service継続率は非公開。" },
  ], customerStoriesUrl: "https://www.halcyon.ai/our-customers", fitTags: ["Cybersecurityを売りたい", "CISO商談が得意", "ransomwareに詳しい", "Commercial hunter", "channelを作れる", "POCを動かせる", "remoteで自律できる", "事業継続を数値化できる"], comparisonMap: [
    { arena: "Endpoint ransomware", companies: ["Halcyon", "CrowdStrike", "SentinelOne"], why: "専用防御、rollback、EDR共存の比較" },
    { arena: "Cyber recovery", companies: ["Halcyon", "Rubrik", "Cohesity"], why: "endpoint keyとdata restoreの役割比較" },
    { arena: "Managed response", companies: ["Halcyon", "MDR vendors", "IR retainers"], why: "24/7 monitoringとincident時支援の比較" },
  ], sources: halcyonSources,
};

const idealsSources: ResearchSource[] = [
  { id: "id-job", label: "Key Account Manager Japan", url: "https://jobs.ashbyhq.com/ideals/6fabd9ca-f8b5-4124-b06b-e5fe5e3d43e4/", kind: "企業公式", scope: "日本営業職・事業規模", checkedAt },
  { id: "id-product", label: "iDeals VDR", url: "https://www.idealsvdr.com/", kind: "企業公式", scope: "製品・顧客規模", checkedAt },
  { id: "id-pricing", label: "VDR pricing", url: "https://www.idealsvdr.com/virtual-data-room-pricing/", kind: "企業公式", scope: "plan・購入model", checkedAt },
  { id: "id-qa", label: "Streamlined Q&A", url: "https://www.idealsvdr.com/streamlined-qa/", kind: "企業公式", scope: "due diligence workflow", checkedAt },
  { id: "id-mcp", label: "iDeals MCP", url: "https://www.idealsvdr.com/mcp/", kind: "企業公式", scope: "AI接続・権限", checkedAt },
  { id: "id-trust", label: "iDeals Trust Center", url: "https://trust.idealsvdr.com/", kind: "企業公式", scope: "security・企業規模", checkedAt },
  { id: "id-cases", label: "iDeals Customer Stories", url: "https://www.idealsvdr.com/customers/", kind: "企業公式", scope: "顧客利用例", checkedAt },
  { id: "id-fsa", label: "金融庁 経済安全保障推進法と金融機関", url: "https://www.fsa.go.jp/news/r5/sonota/20240215/20240215.html", kind: "外部集計", scope: "金融data・第三者管理要求", checkedAt },
];

const idealsIntelligence: CompanyPublicIntelligence = {
  researchedAt: checkedAt,
  salesSnapshot: "「M&Aや資金調達の機密資料をemailと共有driveで配る課題」をCFO・法務へ問う会社。「多数の買い手質問と版管理でdeal teamが止まる課題」を投資銀行へ可視化する会社。「AIで資料を読みたいが権限・監査証跡を失えない課題」をdeal専用workspaceへ変える会社で、重要取引の速度と信頼を売る営業としての面白さがある。",
  marketStatus: { isPublic: false, growthSummary: "VDRをM&A・fundraising・auditへ提供し、求人では2M users、300k companies、global M&Aの10%超を支援と公表。日本は3名のground teamで拡大局面。", ipoOutlookSummary: "非公開企業でIPO計画は未公表。公式source間で顧客組織数の表現が異なり、日本顧客・ARR・renewalは要確認。", milestones: [
    { year: "2008", label: "創業", detail: "security重視のvirtual data roomを開始。", sourceId: "id-trust" },
    { year: "2020年代", label: "global scale", detail: "M&A・legal・finance workflowへ展開。", sourceId: "id-product" },
    { year: "2025", label: "MCP", detail: "既存権限と監査を保ったAI接続を発表。", sourceId: "id-mcp" },
    { year: "2026", label: "成長", detail: "求人で4倍のrevenue成長と30%超YoYを記載。", sourceId: "id-job" },
    { year: "2026", label: "Japan採用", detail: "Tokyo hybridのKey Account Managerを募集。", sourceId: "id-job" },
  ], sourceIds: ["id-job", "id-product", "id-trust"], genbaVerdict: { headline: "deal infrastructureを日本で深掘る小規模team", body: "file storageではなく、取引のconfidentiality、Q&A、audit、buyer experienceをCFO・banker・legalへ売るrole。" }, growthDrivers: [
    { title: "機密dealのdigital化", body: "M&A・fundraisingで外部関係者が増え、権限とauditが必要。", sourceId: "id-product" },
    { title: "workflow効率", body: "Q&A・redaction・reportingでdeal teamの手作業を削減。", sourceId: "id-qa" },
    { title: "controlled AI", body: "MCPで既存permissionを維持してAI活用へ拡張。", sourceId: "id-mcp" },
  ], japanGrowth: { headline: "3名teamで日本key accountを開拓", narrative: "求人は日本を重点市場としてoutbound closingを求める。local support、customer references、finance ecosystemの関係性が実現性を左右する。", qualitativeSignals: [
    { label: "Japan team", detail: "求人でground team 3名を記載。", sourceId: "id-job" },
    { label: "target buyers", detail: "finance、banking、C-suiteを担当。", sourceId: "id-job" },
    { label: "growth", detail: "30%超YoYを求人で公表。", sourceId: "id-job" },
  ], sourceIds: ["id-job"] }, riskHypotheses: [
    { title: "commodity storage比較", body: "Microsoft・Box・Dropbox等との単価比較になるとdeal-specific controlの価値が薄い。", confidence: "高", evidence: ["VDR専用workflow", "pricing plan"], counterSignal: "security、Q&A、auditに明確な差。", sourceIds: ["id-product", "id-qa"] },
    { title: "案件波動と関係営業", body: "M&A件数とadvisor networkに左右され、安定pipelineにはrepeat accountが必要。", confidence: "中", evidence: ["金融・bankingへoutbound", "key account role"], counterSignal: "複数use caseとglobal基盤。", sourceIds: ["id-job"] },
  ] },
  sellingPlaybook: { frameIntro: "iDealsは安全なfolderではなく、重要dealを遅らせず漏らさない運用を売る。直近dealのaccess申請、Q&A、redaction、監査、buyer frictionを時間とriskで可視化する。", issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "M&A、資金調達、監査、licensingの顧客は、多数の外部参加者へ機密dataを限定公開し、Q&Aと証跡を維持するために利用する。共通課題は容量ではなく、deal速度と情報controlの両立。" },
    { title: "製品の成り立ちから見る課題", body: "iDealsは一般的file shareでは不足するM&Aの権限、watermark、redaction、audit、Q&Aを一つのdata roomへまとめた。deal teamがsecurityと使いやすさを交換条件にしない設計。" },
    { title: "外部環境の要求から見る課題", body: "越境M&A、第三者risk、privacy、AI利用で機密dataのaccess経路は増える。企業は誰が何を見たかだけでなく、AI toolへ渡した後も元の権限とauditを維持する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "dealごとに社内外のbanker、lawyer、buyer、auditorが短期間で資料へaccessする。" },
    { label: "課題", body: "folder設計、権限、redaction、Q&A、版管理が手作業となり、漏えいriskとdeal delayが増える。" },
    { label: "解決策", body: "一つのliveまたは過去dealをmodel化し、setup時間、質問response、permission error、audit作成、buyer engagementを比較する。" },
    { label: "選定の理由", body: "Datasite、Intralinks、Drooms、一般cloud storageとの比較で、security evidence、deal workflow、usability、support、予測可能なpricingが条件になる。" },
  ], openingHook: "直近dealで最も時間がかかったのは資料作成ではなく、誰に何を見せるかと質問を捌く作業ではありませんか。", valueHypothesis: "過去deal templateで1週間のsimulationを行い、room setup、permission、redaction、Q&A、audit report時間を現行processと比較する。", commonObjection: { objection: "Microsoft 365やBoxで足りる。", reframe: "storage単価ではなく、deal専用権限、Q&A、watermark、redaction、監査、外部user supportを含むdeal運営costと漏えいriskで比較する。" } },
  facts: [
    { label: "創業", value: "2008年", detail: "Trust Center記載。", sourceIds: ["id-trust"] },
    { label: "利用者", value: "2M", detail: "求人記載の会社公式値。", sourceIds: ["id-job"] },
    { label: "利用企業", value: "300k", detail: "求人記載。Trust Centerの組織数表現とは差がある。", sourceIds: ["id-job", "id-trust"] },
    { label: "M&A share", value: "10%超", detail: "global M&Aを支えると求人に記載。", sourceIds: ["id-job"] },
    { label: "Japan team", value: "3名", detail: "求人記載。", sourceIds: ["id-job"] },
    { label: "掲載営業求人", value: "1件", detail: "Key Account Manager Japan。", sourceIds: ["id-job"] },
  ], hypotheses: [
    { topic: "PRODUCT / MARKET", title: "VDRからdeal workspaceとAI controlへ拡張", conclusion: "securityでlandし、Q&A・analytics・AI接続へ価値を広げる。", confidence: "中", evidence: ["MCP launch", "deal workflow"], counterSignals: ["一般suiteの機能向上"], interviewQuestions: ["MCPの有料化・adoptionは", "product別renewalは"], sourceIds: ["id-mcp", "id-qa"] },
    { topic: "SALES MOTION", title: "finance relationshipを作る360度hunter", conclusion: "C-suiteとbankerへoutboundし、3〜6カ月でannual contractをclose。", confidence: "高", evidence: ["求人にcycleとACVを記載"], counterSignals: ["inbound比率非公開"], interviewQuestions: ["repeat accountとnew logo比率は", "advisor referralのcreditは"], sourceIds: ["id-job"] },
    { topic: "QUOTA ATTAINABILITY", title: "deal volumeとrepeat率が鍵", conclusion: "求人の成長率より日本pipeline、平均contract、renewalを確認すべき。", confidence: "探索中", evidence: ["Japan 3名team", "$50k-$200k contract"], counterSignals: ["global brandと2M users"], interviewQuestions: ["達成率、quota、ACV、cycleは", "日本顧客とrenewalは"], sourceIds: ["id-job"] },
    { topic: "COMPENSATION", title: "日本報酬は非公開", conclusion: "base、variable、equity、ramp、multi-year creditを確認する。", confidence: "探索中", evidence: ["求人にrangeなし"], counterSignals: ["高ACV"], interviewQuestions: ["Pay Mixとacceleratorは", "renewal/expansion creditは"], sourceIds: ["id-job"] },
    { topic: "CULTURE / CAREER", title: "小規模teamでglobal dealを動かす", conclusion: "finance networkとsecurity diligenceを自律的に開拓する経験。", confidence: "中", evidence: ["Japan 3名", "hybrid"], counterSignals: ["promotion data非公開"], interviewQuestions: ["Japanの意思決定権は", "career path実例は"], sourceIds: ["id-job"] },
  ], cultureNotes: { organizationReadTitle: "小規模日本teamで高信頼dealを動かす組織。", hypothesis: { title: "関係性とprocess disciplineの両方。", body: "banker・CFOとのnetworkを作り、permissionやsecurityの細部までcloseできる人が合う。" }, careerValue: { title: "M&A Techとfinance salesの専門性。", body: "high-stakes transactionを売った実績はFinTech、LegalTech、DealTechのkey accountで評価される。", confidence: "高" } },
  customerProof: [
    { company: "Investment banks", products: "iDeals VDR", outcome: "M&A sell-side/buy-sideで機密資料とbuyer accessを管理。個社定量値は非公開。", implication: "advisorのrepeat dealへ入り込める。", sourceId: "id-cases" },
    { company: "Corporate development teams", products: "iDeals VDR / Q&A", outcome: "due diligenceの権限・質問・auditを一元化。", implication: "CFO・CorpDevのdeal cycle短縮へ提案。", sourceId: "id-qa" },
    { company: "Legal / Life Sciences teams", products: "iDeals VDR", outcome: "licensing、fundraising、監査等の機密collaborationへ利用。", implication: "M&A以外へuse caseを広げられる。", sourceId: "id-cases" },
  ], externalSignals: [
    { label: "third-party control", value: "金融security要求", detail: "金融機関は重要dataと外部serviceの管理を強化。", caveat: "制度適用は企業・取引ごとに異なる。", sourceId: "id-fsa" },
    { label: "AI access", value: "permission継承", detail: "iDealsはMCPで既存権限とauditを保つ設計を提示。", caveat: "AI活用の安全性は接続先・運用を含め個別評価が必要。", sourceId: "id-mcp" },
  ], roleLens: { salesMotion: "finance・banking・C-suiteへoutboundし、security review、trial、procurementを3〜6カ月でclose。key accountでrepeat dealとexpansionを作る。", compensation: "日本のbase、OTE、equityは非公開。", quota: "quota・達成率は非公開。求人は平均contract $50k〜$200kを記載。", collaboration: "Country Director、Marketing、Pre-sales、Customer Success、Legal/Securityと連携し、顧客側のCFO、CorpDev、Legal、Banker、ITを束ねる。" },
  leadership: { name: "非公開", role: "Japan Country Director", read: "求人はCountry Directorへのreportを示すが氏名は確定できない。", sourceId: "id-job" },
  companyStats: { globalHeadcount: { value: "非公開", detail: "最新公式値は未確認。" }, japanHeadcount: { value: "3名", detail: "求人がground team規模を記載。", sourceId: "id-job" }, japanOffice: { value: "東京 / hybrid", detail: "求人勤務地。", sourceId: "id-job" }, japanSince: { value: "確認中", detail: "日本事業開始年月は未確定。", sourceId: "id-job" } },
  salesAppeal: { intro: "会社の命運を左右するdealへ入る営業。", points: [
    { title: "CFO・banker networkを作る", detail: "repeat transactionの中心へ入る。", sourceIds: ["id-job"] },
    { title: "trustをcommercial valueへ変える", detail: "security・permission・auditをdeal speedへ翻訳。", sourceIds: ["id-trust", "id-qa"] },
    { title: "高ACVのfull-cycleを持つ", detail: "outboundからannual contractまで一貫。", sourceIds: ["id-job"] },
  ] }, interviewPrep: { intro: "growth claimと日本のrepeat economicsを分ける。", questions: [
    { question: "日本顧客、ARR、renewal、repeat deal、主要advisorは。", why: "local tractionを見る。", sourceIds: ["id-job"] },
    { question: "ramped sellerの達成率、quota、ACV、cycleは。", why: "求人rangeを実績で確認。", sourceIds: ["id-job"] },
    { question: "new logo、new room、renewalのcreditは。", why: "deal波動と報酬を確認。", sourceIds: ["id-job"] },
    { question: "Microsoft/Box/Datasiteへの勝敗理由は。", why: "category差別化を見る。", sourceIds: ["id-product", "id-pricing"] },
  ] }, solutions: [
    { name: "iDeals VDR", valueProp: "機密deal資料の権限、redaction、watermark、auditを一元化。", url: "https://www.idealsvdr.com/", competitors: "Datasite、Intralinks、Drooms、Microsoft 365。", differentiation: "securityとdeal-team usability、supportを両立。", retention: "日本NRRは非公開。" },
    { name: "Streamlined Q&A", valueProp: "buyer質問のrouting、answer、visibilityを管理。", url: "https://www.idealsvdr.com/streamlined-qa/", competitors: "spreadsheet、email、競合VDR。", differentiation: "data room権限とQ&Aを接続。", retention: "機能別利用率は非公開。" },
    { name: "iDeals MCP", valueProp: "AI toolからVDR dataへ既存権限・auditを保って接続。", url: "https://www.idealsvdr.com/mcp/", competitors: "manual export、general AI connector。", differentiation: "deal permission modelをAI accessへ継承。", retention: "新機能のcommercial指標は非公開。" },
  ], customerStoriesUrl: "https://www.idealsvdr.com/customers/", fitTags: ["Financeへ売りたい", "M&Aに関心", "CFO商談が得意", "高ACV full-cycle", "relationship salesが得意", "securityを説明できる", "小規模teamが好き", "hybrid勤務"], comparisonMap: [
    { arena: "VDR", companies: ["iDeals", "Datasite", "Intralinks"], why: "security、workflow、support、pricingの比較" },
    { arena: "Secure collaboration", companies: ["iDeals", "Microsoft 365", "Box"], why: "general storageとdeal-specific controlの比較" },
    { arena: "Deal workflow", companies: ["iDeals", "DealRoom", "Midaxo"], why: "document roomとproject managementの比較" },
  ], sources: idealsSources,
};

const lighthouseSources: ResearchSource[] = [
  { id: "lh-job", label: "Account Executive Japan", url: "https://job-boards.greenhouse.io/lighthouse/jobs/4500582101", kind: "企業公式", scope: "日本AE・企業規模", checkedAt },
  { id: "lh-platform", label: "Lighthouse Platform", url: "https://www.mylighthouse.com/", kind: "企業公式", scope: "製品・data・integration", checkedAt },
  { id: "lh-pricing", label: "Lighthouse Pricing", url: "https://www.mylighthouse.com/platform/pricing", kind: "企業公式", scope: "hotel pricing product", checkedAt },
  { id: "lh-sofia", label: "The Sofia Hotel事例", url: "https://www.mylighthouse.com/resources/customer-stories/customer-spotlight-the-sofia-hotel", kind: "企業公式", scope: "independent hotel成果", checkedAt },
  { id: "lh-penta", label: "Penta Hotels事例", url: "https://www.mylighthouse.com/resources/customer-stories/customer-spotlight-penta-hotels-forms", kind: "企業公式", scope: "survey・portfolio運用", checkedAt },
  { id: "lh-cases", label: "Lighthouse Customer Stories", url: "https://www.mylighthouse.com/resources/customer-stories", kind: "企業公式", scope: "顧客事例", checkedAt },
  { id: "lh-jnto", label: "JNTO 訪日外客統計", url: "https://www.jnto.go.jp/statistics/data/visitors-statistics/", kind: "外部集計", scope: "日本hotel需要環境", checkedAt },
];

const lighthouseIntelligence: CompanyPublicIntelligence = {
  researchedAt: checkedAt,
  salesSnapshot: "「需要が変わっても宿泊料金を手作業と勘で更新する課題」をhotel経営者へ問う会社。「OTA・競合・event・自社予約のdataが分断され収益機会を逃す課題」をrevenue managerへ可視化する会社。「価格最適化とdirect booking施策を別々に運用する課題」をcommercial platformへ束ねる会社で、毎日の売上意思決定を売る営業としての面白さがある。",
  marketStatus: { isPublic: false, growthSummary: "$370M調達、$100M超ARR、850人超・35カ国、185カ国のhotel利用を求人で公表。日本でhunter AEを採用しhospitality commercial platformを拡大。", ipoOutlookSummary: "非公開企業でIPO計画は未公表。求人のglobal指標と日本顧客・ARR・quotaを分けて確認する。", milestones: [
    { year: "2012", label: "創業", detail: "hotel market intelligenceから事業開始。", sourceId: "lh-platform" },
    { year: "2020年代", label: "platform化", detail: "Pricing、Performance、Direct等へ拡張。", sourceId: "lh-platform" },
    { year: "2024", label: "commercial platform", detail: "market dataとhotel workflowを統合。", sourceId: "lh-platform" },
    { year: "2026", label: "global scale", detail: "$100M超ARRと850人超を求人で公表。", sourceId: "lh-job" },
    { year: "2026", label: "Japan AE採用", detail: "Tokyo圏remoteのfull-cycle hunterを募集。", sourceId: "lh-job" },
  ], sourceIds: ["lh-job", "lh-platform"], genbaVerdict: { headline: "hotel P&Lへ直接入るvertical SaaS sale", body: "dashboardを売るのではなく、ADR、occupancy、RevPAR、direct bookingを日次運用へ落とす営業。" }, growthDrivers: [
    { title: "旅行需要の変動", body: "event・競合・予約paceを早く捉える必要。", sourceId: "lh-jnto" },
    { title: "人手不足", body: "small commercial teamでもpricingと分析を回すautomation。", sourceId: "lh-pricing" },
    { title: "multi-product", body: "intelligenceからpricing、performance、directへ拡張。", sourceId: "lh-platform" },
  ], japanGrowth: { headline: "訪日需要を背景にJapan coverageを拡張", narrative: "日本のhotel数、customer segment、local integrationsは未開示。brand・management company・independentのどこからlandするか確認したい。", qualitativeSignals: [
    { label: "日本AE", detail: "Greater Tokyoのfull-cycle role。", sourceId: "lh-job" },
    { label: "target", detail: "hospitality expertiseとMEDDPICCを要件化。", sourceId: "lh-job" },
    { label: "外部需要", detail: "JNTOが訪日客統計を継続公表。", sourceId: "lh-jnto" },
  ], sourceIds: ["lh-job", "lh-jnto"] }, riskHypotheses: [
    { title: "hotel tech stackが分断", body: "PMS・RMS・CRS・channel manager・OTAとのintegrationが導入価値を左右する。", confidence: "高", evidence: ["400超integration", "platform product"], counterSignal: "広いecosystemを公式訴求。", sourceIds: ["lh-platform"] },
    { title: "small hotelのbudgetとchange management", body: "高稼働期でも現場が新しいpricing processを使えなければ成果が出ない。", confidence: "中", evidence: ["AI pricingとworkflow", "full-cycle hunter"], counterSignal: "自動化でresource制約へ対応。", sourceIds: ["lh-pricing", "lh-job"] },
  ] },
  sellingPlaybook: { frameIntro: "Lighthouseはhotel data toolではなく、毎日変わる需要を価格・販売channel・direct bookingへ反映できない収益漏れを売る。過去90日のpricing decisionとrevenue outcomeからgapを作る。", issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "The Sofia Hotelのようなindependent propertyは少人数で市場を読み、Penta Hotelsのようなportfolioは複数propertyの声とperformanceを標準化する。共通課題はdata不足ではなく、現場が毎日使えるdecision workflow。" },
    { title: "製品の成り立ちから見る課題", body: "Lighthouseはhotel rate shoppingとmarket intelligenceから始まり、Pricing、Performance、Direct、AIへ拡張。外部需要dataを見せるだけでなく、価格変更とcommercial actionまで閉じる方向に進化した。" },
    { title: "外部環境の要求から見る課題", body: "訪日需要、event、航空供給、競合価格は急変し、hotelはOTA commission、人手不足、brand standardを同時に管理する。月次reportでは遅く、propertyごとの日次判断とportfolio governanceが必要。" },
  ],
  narrative: [
    { label: "背景", body: "hotelはPMS、OTA、競合rate、review、web analyticsを別々に見る。" },
    { label: "課題", body: "pricing updateが遅れ、需要日を取り逃し、discount過多やOTA依存が粗利を削る。" },
    { label: "解決策", body: "一propertyで90日、forecast、rate recommendation、adoption、ADR、occupancy、RevPAR、direct shareをbaseline比較する。" },
    { label: "選定の理由", body: "Duetto、IDeaS、Cloudbeds、OTA insight各社との比較で、market dataの広さ、workflow、integration、portfolio visibility、direct連携が条件になる。" },
  ], openingHook: "先月、需要上昇を料金へ反映できなかった日と、下げすぎた日を何泊分・何円分説明できますか。", valueHypothesis: "代表propertyで90日pilotを行い、recommendation adoption、価格変更時間、ADR、RevPAR、direct shareを同条件の前年・control期間と比較する。", commonObjection: { objection: "経験あるrevenue managerとPMSで足りる。", reframe: "人の判断を置き換えず、競合・event・search・booking paceを集める時間と見逃しを減らし、採用増なしで何property運営できるか比較する。" } },
  facts: [
    { label: "ARR", value: "$100M超", detail: "求人記載の会社公式値。", sourceIds: ["lh-job"] },
    { label: "調達", value: "$370M", detail: "求人記載の累計。", sourceIds: ["lh-job"] },
    { label: "組織", value: "850人超・35カ国", detail: "求人記載。", sourceIds: ["lh-job"] },
    { label: "利用地域", value: "185カ国", detail: "hotel利用のglobal値。", sourceIds: ["lh-job"] },
    { label: "integration", value: "400超", detail: "platform公式値。", sourceIds: ["lh-platform"] },
    { label: "掲載営業求人", value: "1件", detail: "Account Executive Japan。", sourceIds: ["lh-job"] },
  ], hypotheses: [
    { topic: "PRODUCT / MARKET", title: "dataからcommercial OSへ拡張", conclusion: "market intelligenceでlandし、pricing・performance・directへ広げる。", confidence: "高", evidence: ["multi-product", "global ARR"], counterSignals: ["point solution競争"], interviewQuestions: ["Japanのland productとattach rateは", "product別NRRは"], sourceIds: ["lh-platform", "lh-job"] },
    { topic: "SALES MOTION", title: "vertical knowledge型hunter", conclusion: "hotel P&LをdiscoveryしMEDDPICCでfull-cycle closeする。", confidence: "高", evidence: ["求人が3x pipeline・outboundを明記"], counterSignals: ["lead source非公開"], interviewQuestions: ["self-sourced比率は", "brand/independent別cycleは"], sourceIds: ["lh-job"] },
    { topic: "QUOTA ATTAINABILITY", title: "global ARRよりJapan property economics", conclusion: "日本customer、average property count、integration、conversionを見るべき。", confidence: "探索中", evidence: ["Japan専任求人"], counterSignals: ["global scaleとcategory proof"], interviewQuestions: ["達成率、ACV、cycleは", "日本有料property数は"], sourceIds: ["lh-job"] },
    { topic: "COMPENSATION", title: "日本報酬は非公開", conclusion: "base、variable、equity、ramp、multi-product creditを確認。", confidence: "探索中", evidence: ["求人にrangeなし"], counterSignals: ["$100M ARR"], interviewQuestions: ["Pay Mixとacceleratorは", "property expansion creditは"], sourceIds: ["lh-job"] },
    { topic: "CULTURE / CAREER", title: "high ownershipのremote vertical sale", conclusion: "hospitality domainとAI sales tooling、MEDDPICCを同時に磨く。", confidence: "中", evidence: ["remote full-cycle", "own outbound"], counterSignals: ["Japan promotion dataなし"], interviewQuestions: ["Japan teamとsupport coverageは", "career path実例は"], sourceIds: ["lh-job"] },
  ], cultureNotes: { organizationReadTitle: "hotel commercial outcomeへ執着するdistributed組織。", hypothesis: { title: "domain fluencyとhunter discipline。", body: "hotel現場の言葉でP&Lを話し、自分でpipelineを作り、product adoptionまで追える人が合う。" }, careerValue: { title: "Vertical SaaSとrevenue managementの専門性。", body: "property-level ROIとportfolio rolloutはTravelTech、PropTechのEnterprise salesで強い。", confidence: "高" } },
  customerProof: [
    { company: "The Sofia Hotel", products: "Lighthouse Platform", outcome: "independent hotelがmarket insightを日々のcommercial判断へ利用。", implication: "small teamへdecision speedを売れる。", sourceId: "lh-sofia" },
    { company: "Penta Hotels", products: "Performance / Forms", outcome: "会社事例でsurvey responseを3倍、608件へ増加。", implication: "portfolio標準化とcustomer insightへ拡張。", sourceId: "lh-penta" },
    { company: "Global hotel customers", products: "Pricing / Performance / Direct", outcome: "tens of thousandsのhotelが185カ国で利用と求人に記載。", implication: "independentからglobal chainまでsegmentを持つ。", sourceId: "lh-job" },
  ], externalSignals: [
    { label: "訪日需要", value: "JNTO月次統計", detail: "日本の宿泊需要に影響する訪日外客数を継続公表。", caveat: "visitor増が個別hotelのRevPAR改善を保証しない。", sourceId: "lh-jnto" },
    { label: "data規模", value: "billions of daily signals", detail: "Lighthouseが日々処理する会社公式表現。", caveat: "data量とrecommendation精度は別途検証が必要。", sourceId: "lh-platform" },
  ], roleLens: { salesMotion: "hotel owner・commercial leaderへoutboundし、property P&Lをdiscovery。demo、trial、Business Case、negotiationをfull-cycleで持ち、multi-property・multi-productへexpand。", compensation: "日本のbase、OTE、equityは非公開。", quota: "quota、達成率、ACV、cycleは非公開。3x pipelineを求人で要求。", collaboration: "Solutions、Customer Success、Product、Data、Marketing、partnersと連携し、顧客側のOwner、GM、Revenue、Ecommerce、IT、Financeを束ねる。" },
  leadership: { name: "非公開", role: "Japan/APAC sales leadership", read: "求人ではreporting lineの氏名を確認できない。Japanのpricing・discount権限を確認したい。", sourceId: "lh-job" },
  companyStats: { globalHeadcount: { value: "850人超", detail: "35カ国。", sourceId: "lh-job" }, japanHeadcount: { value: "非公開", detail: "日本team人数は未開示。" }, japanOffice: { value: "Greater Tokyo / remote", detail: "求人勤務地。", sourceId: "lh-job" }, japanSince: { value: "確認中", detail: "日本事業開始年月は未確定。", sourceId: "lh-job" } },
  salesAppeal: { intro: "毎日動くhotel revenueへ直接触れる。", points: [
    { title: "P&Lを日次で売る", detail: "ADR、occupancy、RevPAR、direct shareを商談KPIにする。", sourceIds: ["lh-pricing", "lh-job"] },
    { title: "vertical expertiseを積む", detail: "ownerからrevenue managerまでhotel固有buyerへ提案。", sourceIds: ["lh-job"] },
    { title: "multi-product expansion", detail: "dataからpricing・performance・directへ広げる。", sourceIds: ["lh-platform"] },
  ] }, interviewPrep: { intro: "global scaleとJapan unit economicsを分ける。", questions: [
    { question: "日本の有料hotel/property、ARR、segment別構成は。", why: "local tractionを見る。", sourceIds: ["lh-job"] },
    { question: "達成率、quota、ACV、cycle、self-sourced比率は。", why: "hunterの実現性を見る。", sourceIds: ["lh-job"] },
    { question: "PMS/RMS integrationからgo-liveまでの中央値は。", why: "delivery frictionを見る。", sourceIds: ["lh-platform"] },
    { question: "land productとcross-sell順序・creditは。", why: "platform growthを確認。", sourceIds: ["lh-platform", "lh-job"] },
  ] }, solutions: [
    { name: "Lighthouse Pricing", valueProp: "需要signalからhotelのprice recommendationとautomationを提供。", url: "https://www.mylighthouse.com/platform/pricing", competitors: "IDeaS、Duetto、Atomize。", differentiation: "広いmarket dataとcommercial platformを接続。", retention: "日本NRRは非公開。" },
    { name: "Lighthouse Performance", valueProp: "property・portfolioのperformanceをbenchmarkしactionへつなぐ。", url: "https://www.mylighthouse.com/", competitors: "hotel BI、PMS reporting、OTA tools。", differentiation: "market、pricing、portfolio viewを統合。", retention: "product別継続率は非公開。" },
    { name: "Lighthouse Direct", valueProp: "hotelのdirect bookingとdigital marketing成果を改善。", url: "https://www.mylighthouse.com/", competitors: "booking engine、digital agency、OTA marketing。", differentiation: "market demandとcommercial actionを同じplatformで扱う。", retention: "product別継続率は非公開。" },
  ], customerStoriesUrl: "https://www.mylighthouse.com/resources/customer-stories", fitTags: ["Hospitalityへ売りたい", "Vertical SaaSが好き", "P&Lを話せる", "full-cycle hunter", "dataをactionへ変えたい", "remoteで自律できる", "MEDDPICC経験", "multi-productを売りたい"], comparisonMap: [
    { arena: "Hotel revenue management", companies: ["Lighthouse", "IDeaS", "Duetto"], why: "forecast、pricing automation、portfolio運用の比較" },
    { arena: "Hotel intelligence", companies: ["Lighthouse", "Amadeus", "OTA Insight"], why: "market data、rate shopping、demand signalの比較" },
    { arena: "Hotel platform", companies: ["Lighthouse", "Cloudbeds", "Mews"], why: "commercial intelligenceとPMS operating systemの役割比較" },
  ], sources: lighthouseSources,
};

const marqvisionSources: ResearchSource[] = [
  { id: "mv-job", label: "Account Executive Japan", url: "https://job-boards.greenhouse.io/marqvision/jobs/4986795008?gh_src=ohaerrr38us", kind: "企業公式", scope: "日本AE・contract economics", checkedAt },
  { id: "mv-about", label: "MarqVision About", url: "https://www.marqvision.com/about-us", kind: "企業公式", scope: "創業・組織・enforcement規模", checkedAt },
  { id: "mv-funding", label: "Series B", url: "https://www.marqvision.com/blog/marqvision-series-b-funding", kind: "企業公式", scope: "調達・成長", checkedAt },
  { id: "mv-product", label: "Brand Protection Software", url: "https://www.marqvision.com/blog/brand-protection-software", kind: "企業公式", scope: "製品・category", checkedAt },
  { id: "mv-mschf", label: "MSCHF事例", url: "https://www.marqvision.com/kr/brand-protection/customers/mschf", kind: "企業公式", scope: "counterfeit enforcement成果", checkedAt },
  { id: "mv-cases", label: "MarqVision Customers", url: "https://www.marqvision.com/customers", kind: "企業公式", scope: "顧客事例", checkedAt },
  { id: "mv-jpo", label: "特許庁 模倣品・海賊版対策", url: "https://www.jpo.go.jp/support/ipr/index.html", kind: "外部集計", scope: "越境模倣品・IP保護", checkedAt },
];

const marqvisionIntelligence: CompanyPublicIntelligence = {
  researchedAt: checkedAt,
  salesSnapshot: "「模倣品・海賊版・偽siteが国とplatformをまたいで増える課題」を知財責任者へ問う会社。「発見しても証拠収集と削除申請が手作業で追いつかない課題」をbrand protection teamへ可視化する会社。「売上漏えい・顧客被害・brand毀損を別々に扱う課題」をAIと専門家によるenforcementへ束ねる会社で、見えない損失を経営agendaへ上げる営業としての面白さがある。",
  marketStatus: { isPublic: false, growthSummary: "2020年創業、累計$90M超調達、Tokyo officeを持ち、ecommerce・social・web上のIP侵害をAIとhuman validationで検知・enforce。Japan Enterprise AEを採用。", ipoOutlookSummary: "非公開企業でIPO計画は未公表。日本ARR、顧客数、renewal、enforcement成功率の定義は確認が必要。", milestones: [
    { year: "2020", label: "創業", detail: "global brand/IP protectionをAIでscaleする目的で創業。", sourceId: "mv-about" },
    { year: "2024", label: "global enforcement", detail: "seller・contentの大規模enforcementを公表。", sourceId: "mv-about" },
    { year: "2025", label: "Series B", detail: "$48M、累計$90M超を調達。", sourceId: "mv-funding" },
    { year: "2026", label: "platform拡張", detail: "brand protectionからbrand controlへ領域拡張。", sourceId: "mv-product" },
    { year: "2026", label: "Japan AE採用", detail: "TokyoでEnterprise B2B SaaS AEを募集。", sourceId: "mv-job" },
  ], sourceIds: ["mv-about", "mv-funding", "mv-job"], genbaVerdict: { headline: "Legal budgetをrevenue protectionへ変えるcategory sale", body: "takedown件数ではなく、優先市場・seller・SKU別の損失、顧客安全、channel controlをBusiness Caseにする。" }, growthDrivers: [
    { title: "越境ECとsocial commerce", body: "侵害者が複数marketplace・SNSへ同時展開。", sourceId: "mv-jpo" },
    { title: "生成AIによるscale", body: "偽content・site・listingの生成costが低下。", sourceId: "mv-product" },
    { title: "IP teamのresource制約", body: "検知、証拠、申請、follow-upをautomation。", sourceId: "mv-product" },
  ], japanGrowth: { headline: "Tokyo拠点でEnterprise saleを拡張", narrative: "Japan AEは5年以上、IP・commercial・executive stakeholder、3〜6カ月cycleを扱う。local case、legal network、language別operationsを確認したい。", qualitativeSignals: [
    { label: "Tokyo office", detail: "会社公式がTokyo拠点を掲載。", sourceId: "mv-about" },
    { label: "contract", detail: "求人は平均$50k〜$200kを記載。", sourceId: "mv-job" },
    { label: "sales cycle", detail: "求人は3〜6カ月を記載。", sourceId: "mv-job" },
  ], sourceIds: ["mv-about", "mv-job"] }, riskHypotheses: [
    { title: "takedown量が価値を歪める", body: "件数をKPIにすると再出品、重要seller、売上影響を見失う。", confidence: "高", evidence: ["大規模enforcement", "MSCHF事例"], counterSignal: "AI prioritizationとhuman validation。", sourceIds: ["mv-about", "mv-mschf"] },
    { title: "platform・国別の実行差", body: "marketplace policy、商標登録、証拠要件で削除速度が変わる。", confidence: "高", evidence: ["global cross-platform enforcement"], counterSignal: "専門operationsとglobal coverage。", sourceIds: ["mv-product", "mv-jpo"] },
  ] },
  sellingPlaybook: { frameIntro: "MarqVisionは検索toolではなく、IP侵害が売上・顧客・channelへ与える損失を減らすoperating modelを売る。priority SKU・市場でbaselineを作り、valid infringementからenforcement・再出品まで測る。", issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "MSCHFは6カ月で530件を処理し98% enforcementを会社事例で公表。consumer brandやcontent holderは、侵害の発見だけでなく多言語証拠、platform申請、repeat offender追跡をscaleするために利用する。" },
    { title: "製品の成り立ちから見る課題", body: "MarqVisionはlaw firm型の個別調査とkeyword monitoringでは、越境marketplaceの量と速度へ追いつけない問題から生まれた。AI detectionにhuman validationとlegal enforcementを重ねる設計。" },
    { title: "外部環境の要求から見る課題", body: "EC・SNS・生成AIで侵害listingと偽contentの作成costは下がる一方、brand側には商標権、platform rule、証拠、顧客説明が要求される。国別に分断したmanual対応ではscaleしない。" },
  ],
  narrative: [
    { label: "背景", body: "brandは複数marketplace、SNS、偽domain、piracy siteで商品とcontentを監視する。" },
    { label: "課題", body: "false positive、証拠収集、申請、再出品でteamが疲弊し、重要侵害のbusiness impactを経営へ示せない。" },
    { label: "解決策", body: "重点brand・SKU・国で60日pilotを行い、valid detection、enforcement率・時間、repeat seller、推定露出、analyst工数を比較する。" },
    { label: "選定の理由", body: "Corsearch、Red Points、OpSec、law firm、内製monitoringとの比較で、AI precision、human evidence、cross-platform coverage、legal execution、reportingが条件になる。" },
  ], openingHook: "先月削除した件数ではなく、最重要SKUの侵害露出とrepeat sellerをどこまで減らせたか説明できますか。", valueHypothesis: "重点市場・SKUで60日検証し、検知精度、enforcement時間、再出品、analyst時間、authorized channelの売上signalをbaseline比較する。", commonObjection: { objection: "law firmとmarketplace申請で対応できる。", reframe: "重要案件のlegal判断は残しつつ、発見・証拠・大量申請・repeat追跡をautomationし、専門家を高impact案件へ集中させる。" } },
  facts: [
    { label: "創業", value: "2020年", detail: "会社公式。", sourceIds: ["mv-about"] },
    { label: "累計調達", value: "$90M超", detail: "Series B発表。", sourceIds: ["mv-funding"] },
    { label: "Series B", value: "$48M", detail: "会社公式発表。", sourceIds: ["mv-funding"] },
    { label: "enforced sellers", value: "500k", detail: "会社公式累計値。", sourceIds: ["mv-about"] },
    { label: "enforced content", value: "12M", detail: "会社公式累計値。", sourceIds: ["mv-about"] },
    { label: "掲載営業求人", value: "1件", detail: "AE Japan。", sourceIds: ["mv-job"] },
  ], hypotheses: [
    { topic: "PRODUCT / MARKET", title: "brand protectionからcommercial controlへ拡張", conclusion: "counterfeitでlandし、piracy・unauthorized seller・fake siteへ広げる。", confidence: "高", evidence: ["multi-channel product", "global enforcement"], counterSignals: ["point solution競争"], interviewQuestions: ["Japanのland use caseは", "module attach rateは"], sourceIds: ["mv-product", "mv-about"] },
    { topic: "SALES MOTION", title: "Legal・Brand・Ecommerceを束ねるEnterprise sale", conclusion: "POCからannual contractまで3〜6カ月、$50k〜$200kのcomplex cycle。", confidence: "高", evidence: ["求人記載"], counterSignals: ["pipeline source非公開"], interviewQuestions: ["economic buyerとPOC success criteriaは", "self-sourced比率は"], sourceIds: ["mv-job"] },
    { topic: "QUOTA ATTAINABILITY", title: "Japan logoとenforcement capacityが鍵", conclusion: "global fundingよりlocal pipeline、language/platform coverage、case proofを見るべき。", confidence: "探索中", evidence: ["Tokyo office", "Japan AE"], counterSignals: ["明確なexternal threat"], interviewQuestions: ["達成率、quota、ACVは", "日本顧客・renewalは"], sourceIds: ["mv-job", "mv-about"] },
    { topic: "COMPENSATION", title: "日本報酬は非公開", conclusion: "base、variable、equity、ramp、multi-product creditを確認。", confidence: "探索中", evidence: ["求人にrangeなし"], counterSignals: ["高ACV"], interviewQuestions: ["Pay Mixとacceleratorは", "renewal creditは"], sourceIds: ["mv-job"] },
    { topic: "CULTURE / CAREER", title: "AI startupとIP expertiseの交点", conclusion: "曖昧な侵害dataをexecutive valueへ変えるbuild phase。", confidence: "中", evidence: ["2020創業", "global office"], counterSignals: ["Japan tenure非公開"], interviewQuestions: ["Japan teamとdecision rightsは", "promotion実例は"], sourceIds: ["mv-about", "mv-job"] },
  ], cultureNotes: { organizationReadTitle: "AI、operations、legalを一つのoutcomeへ束ねる組織。", hypothesis: { title: "件数よりimpactを見る。", body: "顧客のbrand economicsを理解し、analyst・lawyer・productを動かして結果まで追う人が合う。" }, careerValue: { title: "BrandTechとLegalTechのEnterprise経験。", body: "IP、ecommerce、AI、cross-border enforcementを売る経験は希少。", confidence: "高" } },
  customerProof: [
    { company: "MSCHF", products: "Brand Protection", outcome: "6カ月で530 infringement、98% enforcementを会社事例で公表。", implication: "creative brandの高速模倣へ対応。", sourceId: "mv-mschf" },
    { company: "Consumer brands", products: "Brand Protection", outcome: "marketplace・social・webのcounterfeitを横断管理。個社定量値は公式一覧で確認範囲に限る。", implication: "LegalとEcommerceを同じKPIへ接続。", sourceId: "mv-cases" },
    { company: "Content owners", products: "Content Protection", outcome: "piracy contentの検知・証拠・enforcementをscale。", implication: "物理商品以外のIPへexpand。", sourceId: "mv-product" },
  ], externalSignals: [
    { label: "模倣品対策", value: "越境・online", detail: "特許庁が模倣品・海賊版対策情報を継続提供。", caveat: "公的情報はMarqVisionの成果を直接示さない。", sourceId: "mv-jpo" },
    { label: "資金調達", value: "$48M Series B", detail: "AIとglobal expansionへ投資。", caveat: "調達額は日本のsales tractionを保証しない。", sourceId: "mv-funding" },
  ], roleLens: { salesMotion: "Enterprise brandへoutboundし、Legal/IP、Brand、Ecommerce、executiveをmulti-thread。POCで侵害dataを示し3〜6カ月でannual contractをclose。", compensation: "日本のbase、OTE、equityは非公開。", quota: "quota・達成率は非公開。求人は平均contract $50k〜$200k。", collaboration: "Solutions、Brand Protection analysts、Legal operations、Product、CS、Marketingと連携。" },
  leadership: { name: "Mark Lee", role: "Co-founder / CEO", read: "IP protectionをsoftwareとoperationsでscaleする創業leader。Japanの日常reporting lineは面接確認が必要。", sourceId: "mv-about" },
  companyStats: { globalHeadcount: { value: "非公開", detail: "最新公式値は未確認。" }, japanHeadcount: { value: "非公開", detail: "Tokyo team人数は未開示。" }, japanOffice: { value: "東京", detail: "会社公式がTokyo officeを掲載。", sourceId: "mv-about" }, japanSince: { value: "確認中", detail: "Tokyo office開始年月は未確定。", sourceId: "mv-about" } },
  salesAppeal: { intro: "Legal costをrevenue protectionへ変える。", points: [
    { title: "新しいbudgetを作る", detail: "侵害を売上・顧客安全・brand価値へ翻訳。", sourceIds: ["mv-job", "mv-mschf"] },
    { title: "AIとhuman operationsを売る", detail: "precisionとexecutionを同時に設計。", sourceIds: ["mv-product"] },
    { title: "global stakeholderを動かす", detail: "IP・commercial・executiveをcross-borderで束ねる。", sourceIds: ["mv-job"] },
  ] }, interviewPrep: { intro: "enforcement volumeとcommercial outcomeを分ける。", questions: [
    { question: "日本顧客、ARR、renewal、industry構成は。", why: "local tractionを見る。", sourceIds: ["mv-job"] },
    { question: "達成率、quota、ACV、cycle、POC conversionは。", why: "求人のcontract economicsを確認。", sourceIds: ["mv-job"] },
    { question: "platform・国別のenforcement SLAと再出品率は。", why: "delivery realityを見る。", sourceIds: ["mv-product"] },
    { question: "Legal、Brand、Ecommerceのどこがeconomic buyerか。", why: "budget creationの再現性を見る。", sourceIds: ["mv-job"] },
  ] }, solutions: [
    { name: "Brand Protection", valueProp: "counterfeit、unauthorized seller、fake siteを検知・検証・enforce。", url: "https://www.marqvision.com/brand-protection", competitors: "Corsearch、Red Points、OpSec。", differentiation: "AI detection、human validation、global enforcementを一体化。", retention: "日本NRRは非公開。" },
    { name: "Content Protection", valueProp: "piracy contentをcross-platformで発見・削除。", url: "https://www.marqvision.com/", competitors: "anti-piracy vendors、manual monitoring。", differentiation: "brandとcontentのIP operationsを同一基盤へ。", retention: "product別継続率は非公開。" },
    { name: "Brand Control", valueProp: "侵害・seller・channel dataをpriorityと経営reportへ整理。", url: "https://www.marqvision.com/", competitors: "BI内製、channel monitoring。", differentiation: "enforcement dataをcommercial actionへ接続。", retention: "新領域の指標は非公開。" },
  ], customerStoriesUrl: "https://www.marqvision.com/customers", fitTags: ["Legal/IPへ売りたい", "Brand/Ecommerceに強い", "Enterprise AE", "高ACV full-cycle", "AI startupが好き", "cross-border商談", "POCを動かせる", "経営損失を数値化できる"], comparisonMap: [
    { arena: "Brand protection", companies: ["MarqVision", "Corsearch", "Red Points"], why: "coverage、precision、enforcement、operationsの比較" },
    { arena: "IP services", companies: ["MarqVision", "Law firms", "Investigation firms"], why: "software scaleと個別legal対応の比較" },
    { arena: "Marketplace monitoring", companies: ["MarqVision", "OpSec", "内製"], why: "detectionからtakedown・repeat追跡までの比較" },
  ], sources: marqvisionSources,
};

const postmanSources: ResearchSource[] = [
  { id: "pm-job", label: "SMB Account Executive Japan", url: "https://job-boards.greenhouse.io/postman/jobs/7519682003", kind: "企業公式", scope: "日本SMB AE", checkedAt },
  { id: "pm-product", label: "Postman API Platform", url: "https://www.postman.com/product/", kind: "企業公式", scope: "製品・利用規模", checkedAt },
  { id: "pm-pricing", label: "Postman Pricing", url: "https://www.postman.com/pricing/", kind: "企業公式", scope: "plan・commercial model", checkedAt },
  { id: "pm-workspaces", label: "Postman Workspaces", url: "https://www.postman.com/product/workspaces/", kind: "企業公式", scope: "collaboration・governance", checkedAt },
  { id: "pm-extend", label: "Extend事例", url: "https://www.postman.com/customer-stories/extend/", kind: "企業公式", scope: "developer productivity成果", checkedAt },
  { id: "pm-finserv", label: "Financial Services事例", url: "https://www.postman.com/customer-stories/finserv-company/", kind: "企業公式", scope: "API onboarding成果", checkedAt },
  { id: "pm-cases", label: "Postman Customer Stories", url: "https://www.postman.com/customer-stories/", kind: "企業公式", scope: "顧客事例", checkedAt },
  { id: "pm-owasp", label: "OWASP API Security Top 10", url: "https://owasp.org/API-Security/", kind: "外部集計", scope: "API security要求", checkedAt },
];

const postmanIntelligence: CompanyPublicIntelligence = {
  researchedAt: checkedAt,
  salesSnapshot: "「API仕様・test・documentがteamごとに散らばる課題」をengineering leaderへ問う会社。「developerが使っているfree toolを全社標準にするとsecurityとgovernanceが追いつかない課題」をCIOへ可視化する会社。「APIとAI agent・MCPの増加で品質とownershipが曖昧になる課題」をAPI lifecycle platformへ束ねる会社で、product-led利用をEnterprise契約へ育てる営業としての面白さがある。",
  marketStatus: { isPublic: false, growthSummary: "40M超developers、500k organizations、Fortune 500の98%利用を会社公表。Japan SMB AEは1,000人以下の既存usage accountをland-and-expandする。", ipoOutlookSummary: "非公開企業でIPO時期は未公表。利用者数とpaid organization、Japan ARR・NRR・seat expansionを分けて確認する。", milestones: [
    { year: "2014", label: "創業", detail: "API requestを簡単に作るdeveloper toolから開始。", sourceId: "pm-product" },
    { year: "2020年代", label: "API Platform", detail: "design、test、docs、monitoring、governanceへ拡張。", sourceId: "pm-product" },
    { year: "2024", label: "Enterprise governance", detail: "workspace・private API・security controlを強化。", sourceId: "pm-workspaces" },
    { year: "2026", label: "AI/API", detail: "AI・MCPを含むAPI collaborationへ製品を拡張。", sourceId: "pm-product" },
    { year: "2026", label: "Japan SMB採用", detail: "最大1,000人accountのAEを募集。", sourceId: "pm-job" },
  ], sourceIds: ["pm-product", "pm-job"], genbaVerdict: { headline: "開発者の既存利用を経営標準へ変えるPLG sale", body: "cold category creationよりusage signalを読み、collaboration・governance・securityのBusiness Caseへ変える力が核。" }, growthDrivers: [
    { title: "API増加", body: "application、partner、AI agentの接続点が増える。", sourceId: "pm-product" },
    { title: "developer collaboration", body: "spec・collection・test・docsをworkspaceで共有。", sourceId: "pm-workspaces" },
    { title: "Enterprise governance", body: "shadow API、secret、access、standardを組織管理。", sourceId: "pm-product" },
  ], japanGrowth: { headline: "既存product usageをSMB commercialへ転換", narrative: "日本SMB AEはusage dataを起点にinbound/outbound、land-and-expandを持つ。free-to-paid conversion、account mapping、technical support capacityが重要。", qualitativeSignals: [
    { label: "segment", detail: "最大1,000 employeesのSMB account。", sourceId: "pm-job" },
    { label: "motion", detail: "existing product usageからland-and-expand。", sourceId: "pm-job" },
    { label: "global proof", detail: "40M developers・500k organizations。", sourceId: "pm-product" },
  ], sourceIds: ["pm-job", "pm-product"] }, riskHypotheses: [
    { title: "free tool perception", body: "個人productivity toolとして定着するとEnterprise budgetの緊急性が弱い。", confidence: "高", evidence: ["freemium pricing", "developer-led usage"], counterSignal: "governanceとteam workflowのpaid価値。", sourceIds: ["pm-pricing", "pm-workspaces"] },
    { title: "API platform競争", body: "cloud、gateway、IDE、GitHub、API management各社がlifecycle機能を統合。", confidence: "中", evidence: ["広いAPI lifecycle"], counterSignal: "大規模developer communityとusage graph。", sourceIds: ["pm-product"] },
  ] },
  sellingPlaybook: { frameIntro: "Postmanはdeveloper seatを売るのではなく、既存利用が増えた組織でAPI品質・再利用・onboarding・governanceが崩れる転換点を売る。usage dataからchampionとhidden teamを特定する。", issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Extendはmanual API作業を減らし1日60分を節約、金融service企業は250超APIを外部化しfirst-call時間を50%短縮。共通課題はrequest送信ではなく、API知識をteam・顧客が再利用できるworkflow。" },
    { title: "製品の成り立ちから見る課題", body: "Postmanは一人のdeveloperがAPI requestを簡単に試すChrome extensionから生まれた。collection共有がteam collaborationへ、さらにdesign、test、docs、monitoring、governanceへ広がったPLGの典型。" },
    { title: "外部環境の要求から見る課題", body: "microservices、partner API、AI agent・MCPでAPI数と利用者が増える一方、OWASPはauthorization等のAPI固有riskを整理。速度を落とさずinventory、test、secret、access、standardを証明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "developerは個人・team単位でPostmanや複数toolを使いAPIを作る。" },
    { label: "課題", body: "collection、environment、secret、test、docsが分散し、onboarding、変更影響、外部公開、auditが遅れる。" },
    { label: "解決策", body: "usageが高い一teamでworkspaceとgovernanceを適用し、first call、test coverage、duplicate work、secret finding、reuse、onboardingを測る。" },
    { label: "選定の理由", body: "Insomnia、Swagger/SmartBear、Stoplight、API gateway、内製toolとの比較で、developer adoption、collaboration breadth、lifecycle coverage、governanceが条件になる。" },
  ], openingHook: "御社に何本APIがあるかではなく、owner、最新仕様、test、利用teamまで即答できる割合は何%ですか。", valueHypothesis: "既存usage上位teamで60日pilotを行い、onboarding時間、first-call success、test automation、collection reuse、secret・policy issueをbaseline比較する。", commonObjection: { objection: "free版とGitHub、gatewayで足りる。", reframe: "個人作業の可否ではなく、teamをまたぐknowledge reuse、access、secret、test、docs、auditにかかる時間とriskで比較する。" } },
  facts: [
    { label: "developers", value: "40M超", detail: "会社公式値。", sourceIds: ["pm-product"] },
    { label: "organizations", value: "500k", detail: "会社公式値。", sourceIds: ["pm-product"] },
    { label: "Fortune 500", value: "98%", detail: "利用する割合の会社公式値。", sourceIds: ["pm-product"] },
    { label: "segment", value: "1,000人以下", detail: "Japan SMB AEの担当。", sourceIds: ["pm-job"] },
    { label: "motion", value: "land-and-expand", detail: "既存usageを起点。", sourceIds: ["pm-job"] },
    { label: "掲載営業求人", value: "1件", detail: "SMB AE Japan。", sourceIds: ["pm-job"] },
  ], hypotheses: [
    { topic: "PRODUCT / MARKET", title: "AI時代もAPI control planeが広がる", conclusion: "human developerに加えagent・MCPのAPI開発とgovernanceへ拡張可能。", confidence: "中", evidence: ["lifecycle platform", "AI/MCP focus"], counterSignals: ["cloud/IDE bundling"], interviewQuestions: ["AI/MCP機能のpaid adoptionは", "product attach rateは"], sourceIds: ["pm-product"] },
    { topic: "SALES MOTION", title: "usage-led SMB full-cycle", conclusion: "product signalからchampionを見つけ、technical userとeconomic buyerをつなぐ。", confidence: "高", evidence: ["求人がland-and-expandを明記"], counterSignals: ["usage quality非公開"], interviewQuestions: ["PQL定義とconversionは", "self-sourced比率は"], sourceIds: ["pm-job"] },
    { topic: "QUOTA ATTAINABILITY", title: "territory内usageとconversionが鍵", conclusion: "global usersよりJapan paid account、PQL volume、average expansionを確認。", confidence: "探索中", evidence: ["SMB segment", "PLG motion"], counterSignals: ["大規模community"], interviewQuestions: ["達成率、quota、ACV、cycleは", "free-to-paid conversionは"], sourceIds: ["pm-job", "pm-product"] },
    { topic: "COMPENSATION", title: "日本報酬は非公開", conclusion: "base、variable、equity、ramp、seat/usage expansion creditを確認。", confidence: "探索中", evidence: ["求人にrangeなし"], counterSignals: ["mature PLG"], interviewQuestions: ["Pay Mixとacceleratorは", "renewal/expansion creditは"], sourceIds: ["pm-job"] },
    { topic: "CULTURE / CAREER", title: "developer empathyとcommercial discipline", conclusion: "technical productの既存愛用者を組織標準へ変える経験。", confidence: "中", evidence: ["developer-led product", "full-cycle"], counterSignals: ["Japan promotion dataなし"], interviewQuestions: ["Japan AEのcareer pathは", "SE/CS coverageは"], sourceIds: ["pm-job", "pm-product"] },
  ], cultureNotes: { organizationReadTitle: "developer communityを起点にEnterprise価値を作る組織。", hypothesis: { title: "売り込みよりusageを読む。", body: "developerの信頼を壊さず、hidden costとgovernanceをeconomic buyerへ翻訳する人が合う。" }, careerValue: { title: "PLGとdeveloper salesの王道経験。", body: "PQL、technical champion、seat expansion、API governanceを扱えばDevToolsのAEで強い。", confidence: "高" } },
  customerProof: [
    { company: "Extend", products: "Postman API Platform", outcome: "会社事例でdeveloperあたり1日60分を節約。", implication: "productivityをlabor capacityへ換算できる。", sourceId: "pm-extend" },
    { company: "Financial Services Company", products: "Postman API Platform", outcome: "250超APIを外部化しfirst-call時間を50%短縮。", implication: "external developer experienceを売れる。", sourceId: "pm-finserv" },
    { company: "Enterprise customers", products: "Workspaces / Governance", outcome: "Fortune 500の98%が利用と会社公表。paid範囲は非公開。", implication: "bottom-up usageからstandardizationへ入れる。", sourceId: "pm-product" },
  ], externalSignals: [
    { label: "API security", value: "OWASP Top 10", detail: "authorization、inventory、resource consumption等のriskを整理。", caveat: "frameworkはPostman採用を要求しない。", sourceId: "pm-owasp" },
    { label: "community scale", value: "40M developers", detail: "会社公式の登録・利用規模。", caveat: "active、paid、日本user数は分からない。", sourceId: "pm-product" },
  ], roleLens: { salesMotion: "1,000人以下のaccountでusage signalからchampionを特定し、inbound/outboundでtechnical discovery。team planからgovernance・Enterpriseへland-and-expand。", compensation: "日本のbase、OTE、equityは非公開。", quota: "quota、達成率、ACV、cycleは非公開。PQL volumeとfree-to-paid conversionが難度を左右する。", collaboration: "Sales Engineering、Customer Success、Product、Growth、Marketing、Supportと連携し、顧客側のdeveloper、Engineering Manager、Platform team、Security、CIOを束ねる。" },
  leadership: { name: "Abhinav Asthana", role: "Co-founder / CEO", read: "developer problemからPostmanを創業。Japanの日常sales leadershipは面接で確認。", sourceId: "pm-product" },
  companyStats: { globalHeadcount: { value: "非公開", detail: "最新公式値は未確認。" }, japanHeadcount: { value: "非公開", detail: "Japan GTM人数は未開示。" }, japanOffice: { value: "東京", detail: "求人location。", sourceId: "pm-job" }, japanSince: { value: "確認中", detail: "日本事業開始年月は未確定。", sourceId: "pm-job" } },
  salesAppeal: { intro: "technical usageをcommercial growthへ変える。", points: [
    { title: "PQLを売上へ変える", detail: "product dataからchampionとexpansion signalを読む。", sourceIds: ["pm-job"] },
    { title: "developerとCIOをつなぐ", detail: "productivityをstandard・security・ROIへ翻訳。", sourceIds: ["pm-product", "pm-owasp"] },
    { title: "API lifecycleを横断", detail: "designからtest・docs・monitoring・governanceまでexpand。", sourceIds: ["pm-product"] },
  ] }, interviewPrep: { intro: "user scaleとJapan monetizationを分ける。", questions: [
    { question: "Japanのactive users、paid accounts、PQL、free-to-paid conversionは。", why: "territory qualityを見る。", sourceIds: ["pm-job", "pm-product"] },
    { question: "達成率、quota、ACV、cycle、self-sourced比率は。", why: "SMB full-cycleの実現性を見る。", sourceIds: ["pm-job"] },
    { question: "AE・Growth・CSのexpansion ownershipとcreditは。", why: "PLGのhandoffを確認。", sourceIds: ["pm-job"] },
    { question: "free/GitHub/cloud suiteへの主な勝敗理由は。", why: "paid urgencyを見る。", sourceIds: ["pm-pricing", "pm-workspaces"] },
  ] }, solutions: [
    { name: "Postman API Platform", valueProp: "API design、development、test、docs、monitoringを一つのworkflowへ統合。", url: "https://www.postman.com/product/", competitors: "Insomnia、SmartBear、Stoplight、cloud API suites。", differentiation: "大規模developer adoptionとcollection/workspace ecosystem。", retention: "日本NRRは非公開。" },
    { name: "Workspaces", valueProp: "API artifactをteam・partner・publicで共有し再利用。", url: "https://www.postman.com/product/workspaces/", competitors: "GitHub、Confluence、API catalog。", differentiation: "実行可能なcollection・environmentとdocumentationを接続。", retention: "workspace別継続率は非公開。" },
    { name: "Enterprise Governance", valueProp: "API、access、secret、standardを組織scaleで管理。", url: "https://www.postman.com/product/", competitors: "API management、security tools、内製governance。", differentiation: "developer workflow内でgovernanceを適用。", retention: "product別NRRは非公開。" },
  ], customerStoriesUrl: "https://www.postman.com/customer-stories/", fitTags: ["Developer Toolsを売りたい", "PLGに強い", "SMB AE", "technical discoveryが得意", "land-and-expand", "APIに詳しい", "usage dataを読める", "CIO商談へ広げたい"], comparisonMap: [
    { arena: "API development", companies: ["Postman", "Insomnia", "SmartBear"], why: "developer UX、testing、collaborationの比較" },
    { arena: "API design", companies: ["Postman", "Stoplight", "SwaggerHub"], why: "spec-first workflowとexecutionの比較" },
    { arena: "API management", companies: ["Postman", "Kong", "Apigee"], why: "development lifecycleとruntime gatewayの役割比較" },
  ], sources: postmanSources,
};

const sensorTowerSources: ResearchSource[] = [
  { id: "st-job", label: "Account Executive Japan", url: "https://jobs.ashbyhq.com/sensor-tower/247225e0-9472-49ba-838e-ba90b62c1a53", kind: "企業公式", scope: "日本AEの職務・要件", checkedAt },
  { id: "st-product", label: "Sensor Tower Digital Intelligence", url: "https://sensortower.com/en-us", kind: "企業公式", scope: "製品・顧客規模", checkedAt },
  { id: "st-cases", label: "Sensor Tower Customer Stories", url: "https://sensortower.com/customer-stories", kind: "企業公式", scope: "顧客利用例", checkedAt },
  { id: "st-full", label: "Full-funnel Intelligence Playbook", url: "https://sensortower.com/blog/sensor-towers-full-funnel-digital-intelligence-playbook", kind: "企業公式", scope: "製品横断use case", checkedAt },
  { id: "st-web", label: "Web Insights launch", url: "https://sensortower.com/blog/web-insights-launch", kind: "企業公式", scope: "web intelligence", checkedAt },
  { id: "st-dataai", label: "data.ai acquisition", url: "https://sensortower.com/press/press-release-sensor-tower-acquires-market-intelligence-platform-data-ai", kind: "企業公式", scope: "買収・scale", checkedAt },
  { id: "st-appmagic", label: "AppMagic acquisition", url: "https://sensortower.com/press/press-release-sensor-tower-acquires-appmagic-adding-dedicated-smb-solution-to-comprehensive-suite-of-digital-intelligence", kind: "企業公式", scope: "SMB expansion", checkedAt },
  { id: "st-privacy", label: "Differential Privacy", url: "https://sensortower.com/blog/sensor-tower-introduces-differential-privacy", kind: "企業公式", scope: "privacy設計", checkedAt },
  { id: "st-ppc", label: "個人情報保護委員会", url: "https://www.ppc.go.jp/personalinfo/", kind: "外部集計", scope: "data・privacy要求", checkedAt },
];

const sensorTowerIntelligence: CompanyPublicIntelligence = {
  researchedAt: checkedAt,
  salesSnapshot: "「app・web・広告の市場dataが別toolに分かれ競合の成長理由が見えない課題」を経営企画へ問う会社。「privacy変化でuser acquisitionの判断根拠が減る課題」をgrowth leaderへ可視化する会社。「新市場・新appへ投資する前に需要と競争を定量化できない課題」をdigital intelligenceへ束ねる会社で、外部dataを経営判断へ変える営業としての面白さがある。",
  marketStatus: { isPublic: false, growthSummary: "mobile app intelligenceから広告・web・audience・gamingへ拡張。data.aiを2024年、AppMagicを2026年に買収し、2,500超Enterpriseへ提供するJapan hunterを採用。", ipoOutlookSummary: "非公開企業でIPO計画は未公表。買収後のproduct統合、日本ARR・renewal・data coverageを確認する。", milestones: [
    { year: "2013", label: "創業", detail: "mobile app market intelligenceから開始。", sourceId: "st-product" },
    { year: "2024", label: "data.ai買収", detail: "mobile intelligenceのdata・顧客基盤を統合。", sourceId: "st-dataai" },
    { year: "2025", label: "full funnel", detail: "app・ads・web・audienceを横断。", sourceId: "st-full" },
    { year: "2026", label: "AppMagic買収", detail: "SMB向けgaming/app solutionを追加。", sourceId: "st-appmagic" },
    { year: "2026", label: "Japan AE採用", detail: "Tokyo hybridのnew logo hunterを募集。", sourceId: "st-job" },
  ], sourceIds: ["st-product", "st-dataai", "st-appmagic", "st-job"], genbaVerdict: { headline: "fragmented dataをexecutive decisionへ売る情報service sale", body: "chartを見せるのではなく、campaign、product、market entry、M&Aの意思決定を速くするBusiness Caseが必要。" }, growthDrivers: [
    { title: "digital journeyの分断", body: "app・web・ads・gamingを一つのmarket viewへ。", sourceId: "st-full" },
    { title: "privacy制約", body: "first-partyだけでは競合・市場が見えずmodelled intelligenceが必要。", sourceId: "st-privacy" },
    { title: "portfolio expansion", body: "data.aiとAppMagicでEnterpriseからSMBまでcoverage拡大。", sourceId: "st-dataai" },
  ], japanGrowth: { headline: "Japanでnew SaaS revenueを作るhunter", narrative: "求人はmobile advertising ecosystemの理解とfull cycleを要求。Japan customer、vertical mix、data quality、統合migrationを確認したい。", qualitativeSignals: [
    { label: "Japan AE", detail: "Tokyo hybridでhunterを募集。", sourceId: "st-job" },
    { label: "顧客規模", detail: "求人で2,500 Enterpriseを記載。", sourceId: "st-job" },
    { label: "買収", detail: "data.ai・AppMagicでcoverageを拡張。", sourceId: "st-dataai" },
  ], sourceIds: ["st-job", "st-dataai", "st-appmagic"] }, riskHypotheses: [
    { title: "推計dataの信頼性説明", body: "顧客はactual first-party dataとの差、sample、model changeを問う。", confidence: "高", evidence: ["panel/model型intelligence", "differential privacy"], counterSignal: "長期data・複数source・methodologyを提供。", sourceIds: ["st-product", "st-privacy"] },
    { title: "買収後のproduct complexity", body: "data.ai・AppMagicとのpackage、migration、重複がsales cycleを複雑化。", confidence: "中", evidence: ["連続買収"], counterSignal: "coverageとsegment拡張の機会。", sourceIds: ["st-dataai", "st-appmagic"] },
  ] },
  sellingPlaybook: { frameIntro: "Sensor Towerはmarket reportではなく、競合・channel・user journeyが見えないために投資判断が遅れる問題を売る。過去のcampaign・launch・market entryで不足した外部dataをdecision logから特定する。", issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "game publisher、consumer app、agency、financeの顧客は、download・revenue・ad creative・audience・web trafficを比較し、UA、product roadmap、market entry、investment判断へ使う。共通課題はdata量ではなく競合行動を先に説明すること。" },
    { title: "製品の成り立ちから見る課題", body: "Sensor Towerはapp store rankingだけでは実際のdownload・revenue・競争を読めない問題からmodelled mobile intelligenceを構築し、広告、web、audience、gamingへ拡張。外から企業のdigital performanceを比較可能にする。" },
    { title: "外部環境の要求から見る課題", body: "privacy規制とplatform policyでuser-level trackingは制約され、consumer journeyはapp・web・retail・AIへ分散する。一方、経営はmarket shareと投資成果を求めるため、privacy-preservingなaggregate intelligenceが必要。" },
  ],
  narrative: [
    { label: "背景", body: "企業は自社analytics、ad platform、market reportを別々に見て意思決定する。" },
    { label: "課題", body: "競合のdownload・revenue・creative・audience・web trafficを同条件で比較できず、budget配分とmarket entryが勘に寄る。" },
    { label: "解決策", body: "一つの過去意思決定を再現し、調査時間、予測精度、競合発見、campaign/product action、decision speedを比較する。" },
    { label: "選定の理由", body: "Similarweb、Semrush、AppMagic、Apptopia、platform data、research firmとの比較で、app・ads・web・audience coverage、methodology、history、workflowが条件になる。" },
  ], openingHook: "競合が先月伸びた理由をdownload、広告creative、audience、web流入まで一つのstoryで何日で説明できますか。", valueHypothesis: "直近launchまたはcampaignを用いて30日validationし、analyst時間、競合signal、forecast差、action数、decision lead timeを現行toolと比較する。", commonObjection: { objection: "自社analyticsと無料dataで足りる。", reframe: "自社dataは自社行動に強いが競合・市場は見えない。外部推計はexact値ではなく、同じmethodologyでrelative trendとchangeを早く捉える用途で評価する。" } },
  facts: [
    { label: "Enterprise顧客", value: "2,500超", detail: "求人記載の会社公式値。", sourceIds: ["st-job"] },
    { label: "data.ai", value: "2024年買収", detail: "会社公式。", sourceIds: ["st-dataai"] },
    { label: "AppMagic", value: "2026年買収", detail: "SMB solutionを追加。", sourceIds: ["st-appmagic"] },
    { label: "coverage", value: "App・Ads・Web・Audience", detail: "full-funnel suite。", sourceIds: ["st-full"] },
    { label: "勤務", value: "Tokyo hybrid", detail: "火・木officeと求人記載。", sourceIds: ["st-job"] },
    { label: "掲載営業求人", value: "1件", detail: "Account Executive Japan。", sourceIds: ["st-job"] },
  ], hypotheses: [
    { topic: "PRODUCT / MARKET", title: "mobileからfull-funnelへwallet拡大", conclusion: "app intelligenceでlandしads・web・audienceへexpand。", confidence: "高", evidence: ["suite expansion", "acquisitions"], counterSignals: ["suite complexity"], interviewQuestions: ["Japanのland productとattach rateは", "cross-sell NRRは"], sourceIds: ["st-full", "st-dataai"] },
    { topic: "SALES MOTION", title: "data validation型new logo sale", conclusion: "trialで顧客のknown actualと推計を比較し、executive use caseへclose。", confidence: "高", evidence: ["full-cycle hunter", "mobile ecosystem要件"], counterSignals: ["inbound比率非公開"], interviewQuestions: ["validation success criteriaは", "buyer別cycleは"], sourceIds: ["st-job"] },
    { topic: "QUOTA ATTAINABILITY", title: "Japan pipelineとmigrationが鍵", conclusion: "global顧客数よりJapan new logo、renewal、買収product統合を確認。", confidence: "探索中", evidence: ["Japan hunter", "買収"], counterSignals: ["broad customer base"], interviewQuestions: ["達成率、quota、ACV、cycleは", "Japan顧客・renewalは"], sourceIds: ["st-job", "st-dataai"] },
    { topic: "COMPENSATION", title: "日本報酬は非公開", conclusion: "base、variable、equity、ramp、cross-sell creditを確認。", confidence: "探索中", evidence: ["求人にrangeなし"], counterSignals: ["Enterprise customer base"], interviewQuestions: ["Pay Mixとacceleratorは", "product別creditは"], sourceIds: ["st-job"] },
    { topic: "CULTURE / CAREER", title: "data fluencyとcommercial curiosity", conclusion: "推計の限界を誠実に説明しexecutive decisionへ変える。", confidence: "中", evidence: ["hunter role", "privacy methodology"], counterSignals: ["Japan promotion dataなし"], interviewQuestions: ["Japan teamとanalytics supportは", "career path実例は"], sourceIds: ["st-job", "st-privacy"] },
  ], cultureNotes: { organizationReadTitle: "外部dataを顧客の意思決定へ変えるhybrid組織。", hypothesis: { title: "数字を断言せず、trendをactionへ変える。", body: "methodologyと限界を説明しつつ、growth・product・strategyのdecisionへ結びつける人が合う。" }, careerValue: { title: "Data-as-a-ServiceのEnterprise経験。", body: "mobile、ads、web、audienceを横断したsalesはMarTech、AdTech、market intelligenceで強い。", confidence: "高" } },
  customerProof: [
    { company: "Mobile game publishers", products: "Game Intelligence / App Intelligence", outcome: "market sizing、genre trend、competitor launchをproduct・UA判断へ利用。個社定量値は公式事例参照。", implication: "game P&Lへdirectに入れる。", sourceId: "st-cases" },
    { company: "Consumer app teams", products: "App / Ad Intelligence", outcome: "download・revenue・creativeを競合比較しgrowth planningへ利用。", implication: "CMOとProductをmulti-thread。", sourceId: "st-cases" },
    { company: "Investors / Strategy teams", products: "Digital Intelligence", outcome: "企業・categoryのdigital performanceをdue diligenceとmarket entryへ利用。", implication: "marketing budget外へexpand。", sourceId: "st-full" },
  ], externalSignals: [
    { label: "privacy要求", value: "個人data保護", detail: "個人情報保護委員会がdata利用のルールを提供。", caveat: "具体的適用はdata source・処理・契約で異なる。", sourceId: "st-ppc" },
    { label: "privacy method", value: "Differential Privacy", detail: "Sensor Towerがprivacy-preserving aggregationを導入。", caveat: "導入だけで全dataの精度・complianceを保証しない。", sourceId: "st-privacy" },
  ], roleLens: { salesMotion: "Japan Enterpriseへoutboundし、growth・product・strategy・agencyのuse caseをdiscovery。data validation、proposal、procurementをfull-cycleでcloseしproduct cross-sell。", compensation: "日本のbase、OTE、equityは非公開。", quota: "quota、達成率、ACV、cycleは非公開。data validationとproduct packagingが難度を左右する。", collaboration: "Sales Engineering/Analytics、Customer Success、Product、Research、Marketingと連携し、顧客側のGrowth、Marketing、Product、Strategy、Data、Procurementを束ねる。" },
  leadership: { name: "Oliver Yeh", role: "Co-founder / CEO", read: "mobile intelligenceからfull-funnelへ拡張した共同創業者。Japan leadershipと買収後の権限は面接確認。", sourceId: "st-product" },
  companyStats: { globalHeadcount: { value: "非公開", detail: "買収後の最新公式値は未確認。" }, japanHeadcount: { value: "非公開", detail: "Japan team人数は未開示。" }, japanOffice: { value: "東京 / hybrid", detail: "火・木office。", sourceId: "st-job" }, japanSince: { value: "確認中", detail: "日本事業開始年月は未確定。", sourceId: "st-job" } },
  salesAppeal: { intro: "dataを経営の次の一手へ変える。", points: [
    { title: "multi-buyerへ売る", detail: "Growth、Product、Strategy、Investorへuse caseを変える。", sourceIds: ["st-full", "st-job"] },
    { title: "推計dataを検証する", detail: "methodologyと顧客actualをつなぎtrustを作る。", sourceIds: ["st-privacy"] },
    { title: "M&A後のplatformを拡張", detail: "data.ai・AppMagicを含むportfolioをcross-sell。", sourceIds: ["st-dataai", "st-appmagic"] },
  ] }, interviewPrep: { intro: "global customer数とJapan data economicsを分ける。", questions: [
    { question: "Japanの有料顧客、ARR、renewal、product別構成は。", why: "local tractionを見る。", sourceIds: ["st-job"] },
    { question: "達成率、quota、ACV、cycle、self-sourced比率は。", why: "hunter roleの実現性を見る。", sourceIds: ["st-job"] },
    { question: "data.ai/AppMagicのmigration、package、creditは。", why: "買収後complexityを確認。", sourceIds: ["st-dataai", "st-appmagic"] },
    { question: "推計精度を顧客actualで検証する標準processは。", why: "trustとPOC conversionを見る。", sourceIds: ["st-privacy"] },
  ] }, solutions: [
    { name: "App Intelligence", valueProp: "app download、revenue、engagement、category trendを比較。", url: "https://sensortower.com/en-us", competitors: "data.ai、AppMagic、Apptopia。", differentiation: "長期mobile dataと他channel suite。", retention: "日本NRRは非公開。" },
    { name: "Ad / Audience Intelligence", valueProp: "競合creative、campaign、audience重複を分析。", url: "https://sensortower.com/en-us", competitors: "Pathmatics、Similarweb、platform tools。", differentiation: "app performanceと広告・audienceを接続。", retention: "product別継続率は非公開。" },
    { name: "Web Insights", valueProp: "website traffic・referralをapp dataと横断分析。", url: "https://sensortower.com/blog/web-insights-launch", competitors: "Similarweb、Semrush。", differentiation: "mobile appからwebまでfull funnelを一つのtaxonomyで比較。", retention: "新product指標は非公開。" },
  ], customerStoriesUrl: "https://sensortower.com/customer-stories", fitTags: ["Data SaaSを売りたい", "MarTech/AdTechに強い", "Enterprise hunter", "mobile ecosystemに詳しい", "executive insightを作れる", "hybrid勤務", "multi-product sales", "methodologyを説明できる"], comparisonMap: [
    { arena: "Mobile intelligence", companies: ["Sensor Tower", "AppMagic", "Apptopia"], why: "coverage、estimate、history、workflowの比較" },
    { arena: "Digital intelligence", companies: ["Sensor Tower", "Similarweb", "Semrush"], why: "app・web・adsのcoverage比較" },
    { arena: "Ad intelligence", companies: ["Sensor Tower", "Pathmatics", "platform native tools"], why: "competitive creativeとaudience insightの比較" },
  ], sources: sensorTowerSources,
};

const ubiquitiSources: ResearchSource[] = [
  { id: "ui-job", label: "Account Executive Japan", url: "https://job-boards.greenhouse.io/ubiquiti/jobs/4245270009", kind: "企業公式", scope: "日本AEの職務・要件", checkedAt },
  { id: "ui-jp", label: "Ubiquiti Japan", url: "https://ui.com/jp/ja", kind: "企業公式", scope: "製品portfolio・scale", checkedAt },
  { id: "ui-wifi", label: "UniFi WiFi", url: "https://ui.com/jp/ja/wifi?l=ja&s=jp", kind: "企業公式", scope: "network製品", checkedAt },
  { id: "ui-identity", label: "UniFi Identity", url: "https://ui.com/jp/ja/identity", kind: "企業公式", scope: "access・identity", checkedAt },
  { id: "ui-cloud", label: "UniFi Cloud Architecture", url: "https://help.ui.com/hc/en-us/articles/30319146145175-Understanding-UniFi-Cloud-Architecture", kind: "企業公式", scope: "local control・cloud management", checkedAt },
  { id: "ui-rebath", label: "Re-Bath事例", url: "https://casestudies.ui.com/case-study/re-bath", kind: "企業公式", scope: "multi-site network成果", checkedAt },
  { id: "ui-cases", label: "Ubiquiti Case Studies", url: "https://casestudies.ui.com/", kind: "企業公式", scope: "顧客事例", checkedAt },
  { id: "ui-ir", label: "Ubiquiti Q3 FY2026 results", url: "https://ir.ui.com/financial/quarterly-results", kind: "法定開示", scope: "業績・public company", checkedAt },
  { id: "ui-nisc", label: "NISC サイバーセキュリティ", url: "https://www.nisc.go.jp/", kind: "外部集計", scope: "network security要求", checkedAt },
];

const ubiquitiIntelligence: CompanyPublicIntelligence = {
  researchedAt: checkedAt,
  salesSnapshot: "「拠点ごとにWi-Fi・switch・camera・入退室のvendorとlicenseが増える課題」をIT責任者へ問う会社。「Enterprise networkは高価でSMB向け機器は一元運用とsupportが足りない課題」をmulti-site企業へ可視化する会社。「hardware購入後もcloud管理料が積み上がる課題」をlicense-freeなUniFi ecosystemへ変える会社で、製品力とchannel executionを同時に売る営業としての面白さがある。",
  marketStatus: { isPublic: true, ticker: "UI", exchange: "NYSE", listedSince: "2011", stockLinkUrl: "https://ir.ui.com/", growthSummary: "network、Wi-Fi、security camera、access、NAS、VoIPをUniFiへ統合。100M devices shippedを会社公表し、日本でend customerとchannel双方を担当するAEを採用。", milestones: [
    { year: "2005", label: "創業", detail: "wireless networking companyとして創業。", sourceId: "ui-jp" },
    { year: "2011", label: "上場", detail: "NYSEへ上場。", sourceId: "ui-ir" },
    { year: "2020年代", label: "UniFi拡張", detail: "networkからprotect・access・talk・storageへ拡張。", sourceId: "ui-jp" },
    { year: "2026", label: "Q3 revenue", detail: "$788.2Mを会社発表。", sourceId: "ui-ir" },
    { year: "2026", label: "Japan AE採用", detail: "local team拡張のAEを募集。", sourceId: "ui-job" },
  ], sourceIds: ["ui-jp", "ui-ir", "ui-job"], genbaVerdict: { headline: "license-free ecosystemをend userとchannelへ広げるsale", body: "hardware discountではなく、multi-site運用、subscription TCO、single-pane management、partner deliveryを売る。" }, growthDrivers: [
    { title: "multi-site IT", body: "店舗・school・hotel・officeを少人数で遠隔管理。", sourceId: "ui-rebath" },
    { title: "license TCO", body: "UniFi Site Managerをlicense-freeで提供。", sourceId: "ui-cloud" },
    { title: "ecosystem cross-sell", body: "networkからvideo・access・identity・storageへ拡張。", sourceId: "ui-jp" },
  ], japanGrowth: { headline: "local UniFi teamを拡張", narrative: "Japan AEはend customer、distributor、resellerをfull-cycleで担当。local inventory、certification、support、incumbent network vendorとの比較が鍵。", qualitativeSignals: [
    { label: "日本AE", detail: "Tokyo preferredのremote/hybrid role。", sourceId: "ui-job" },
    { label: "対象industry", detail: "SMB、Enterprise、Education、Hospitality、Retail。", sourceId: "ui-job" },
    { label: "portfolio", detail: "network・surveillance・access等を一体提案。", sourceId: "ui-job" },
  ], sourceIds: ["ui-job"] }, riskHypotheses: [
    { title: "Enterprise support perception", body: "Cisco・Aruba等と比べprocurement、SLA、partner skill、replacement運用を問われる。", confidence: "高", evidence: ["channel＋end customer role", "broad hardware portfolio"], counterSignal: "大規模installed baseとlocal team採用。", sourceIds: ["ui-job", "ui-jp"] },
    { title: "hardware supplyとrevenue timing", body: "inventory・lead time・channel stockがcloseと認識時期を左右する。", confidence: "中", evidence: ["hardware中心business", "public revenue"], counterSignal: "100M devices scale。", sourceIds: ["ui-jp", "ui-ir"] },
  ] },
  sellingPlaybook: { frameIntro: "Ubiquitiは低価格hardwareではなく、networkとphysical securityのlicense・controller・vendor分断を減らすoperating modelを売る。代表siteでTCO、deployment、remote supportを比較する。", issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Re-Bathはfranchise拠点のphone、Wi-Fi、VPNを一元化しlicense costを抑えた。教育・hotel・製造の顧客は、多数deviceとsiteをsmall IT teamで標準化する。共通課題は単体性能より運用の複雑さと継続cost。" },
    { title: "製品の成り立ちから見る課題", body: "Ubiquitiは高価なEnterprise networkと低機能なconsumer機器の間を、software-defined managementとdirect ecommerce・communityで埋めた。UniFiはgateway、switch、Wi-Fiからcamera・accessへ同じmanagement experienceを広げる。" },
    { title: "外部環境の要求から見る課題", body: "店舗・hotel・schoolの接続deviceとsecurity systemは増え、IT人員は限られる。一方、networkにはsegmentation、update、remote access、privacy、incident対応が要求され、安さだけでなく継続管理を証明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "siteごとにrouter、switch、AP、camera、door、phoneを異なるvendor・licenseで導入する。" },
    { label: "課題", body: "controller、renewal、firmware、support、在庫、権限が分断し、障害時にownerと状態が見えない。" },
    { label: "解決策", body: "代表siteでdesign・deployment・remote operationを検証し、hardware、license、設置、管理時間、downtime、replacementを5年TCOで比較する。" },
    { label: "選定の理由", body: "Cisco/Meraki、Aruba、Fortinet、Axis、各SMB機器との比較で、統合portfolio、license-free management、performance、partner support、supplyが条件になる。" },
  ], openingHook: "全拠点のnetworkとsecurity deviceを一画面で見て、5年間のlicense・管理・現地対応costまで説明できますか。", valueHypothesis: "一siteで60日pilotを行い、設計・provisioning時間、管理工数、incident resolution、coverage、licenseを含む5年TCOを比較する。", commonObjection: { objection: "安いがEnterprise supportが不安。", reframe: "brand印象ではなく、対象siteの冗長性、spare、partner、RMA、firmware、SLA、local controlを要件化し、同じfailure scenarioで比較する。" } },
  facts: [
    { label: "上場", value: "NYSE: UI", detail: "public company。", sourceIds: ["ui-ir"] },
    { label: "Q3 FY2026 revenue", value: "$788.2M", detail: "会社決算発表。", sourceIds: ["ui-ir"] },
    { label: "出荷device", value: "100M", detail: "会社公式累計値。", sourceIds: ["ui-jp"] },
    { label: "management", value: "license-free", detail: "UniFi Site Managerの会社説明。", sourceIds: ["ui-cloud"] },
    { label: "対象業界", value: "5領域", detail: "SMB、Enterprise、Education、Hospitality、Retail。", sourceIds: ["ui-job"] },
    { label: "掲載営業求人", value: "1件", detail: "Account Executive Japan。", sourceIds: ["ui-job"] },
  ], hypotheses: [
    { topic: "PRODUCT / MARKET", title: "networkからsite operating stackへ拡張", conclusion: "Wi-Fiでlandしswitch、gateway、camera、access、identityへ広げる。", confidence: "高", evidence: ["broad portfolio", "shared management"], counterSignals: ["best-of-breed志向"], interviewQuestions: ["Japanのland productとattach rateは", "category別marginは"], sourceIds: ["ui-jp", "ui-identity"] },
    { topic: "SALES MOTION", title: "end customerとchannelのhybrid sale", conclusion: "AEがfull-cycle demandを作り、distributor/resellerでdesign・supply・deliveryをscale。", confidence: "高", evidence: ["求人が両方を明記"], counterSignals: ["channel conflict"], interviewQuestions: ["direct/partner ownershipとcreditは", "active partner数は"], sourceIds: ["ui-job"] },
    { topic: "QUOTA ATTAINABILITY", title: "supply・partner・installed baseが鍵", conclusion: "public growthよりJapan inventory、pipeline、average site、expansionを見る。", confidence: "探索中", evidence: ["local team expansion", "hardware business"], counterSignals: ["100M device scale"], interviewQuestions: ["達成率、quota、ACV、cycleは", "stock-out impactは"], sourceIds: ["ui-job", "ui-ir"] },
    { topic: "COMPENSATION", title: "日本報酬は非公開", conclusion: "base、variable、equity、ramp、hardware・software・channel creditを確認。", confidence: "探索中", evidence: ["求人にrangeなし"], counterSignals: ["public company"], interviewQuestions: ["Pay Mixとequityは", "shipment/booking/revenueのcredit時点は"], sourceIds: ["ui-job", "ui-ir"] },
    { topic: "CULTURE / CAREER", title: "product-led brandをfieldへ翻訳", conclusion: "community支持とecommerce demandをEnterprise procurement・channelへ変える。", confidence: "中", evidence: ["local team拡張", "broad segment"], counterSignals: ["Japan promotion dataなし"], interviewQuestions: ["Japan teamとsupport capacityは", "career path実例は"], sourceIds: ["ui-job"] },
  ], cultureNotes: { organizationReadTitle: "product速度とlean GTMを重視するhardware/software組織。", hypothesis: { title: "製品愛だけでなくdelivery ownership。", body: "demo、site design、inventory、partner、supportを一つのcustomer outcomeへ束ねる人が合う。" }, careerValue: { title: "network、IoT、channelの複合経験。", body: "multi-site rolloutとecosystem cross-sellはnetwork、physical security、PropTechで強い。", confidence: "高" } },
  customerProof: [
    { company: "Re-Bath", products: "UniFi Network / Talk", outcome: "franchise拠点のphone、Wi-Fi、VPNを集中管理しlicense feeを抑制。", implication: "multi-site TCOを売れる。", sourceId: "ui-rebath" },
    { company: "Foxconn", products: "UniFi", outcome: "大規模manufacturing environmentの導入事例を公式掲載。定量成果は事例参照。", implication: "SMBだけでなくEnterprise scaleを示せる。", sourceId: "ui-cases" },
    { company: "Education / Hospitality customers", products: "UniFi Network / Protect / Access", outcome: "campus・hotelのmulti-site networkとphysical security事例を公式掲載。", implication: "業界別templateへ展開可能。", sourceId: "ui-cases" },
  ], externalSignals: [
    { label: "cybersecurity要求", value: "network governance", detail: "NISCが組織のcybersecurity対策情報を提供。", caveat: "特定vendor採用を推奨せず、要件は業界・規模で異なる。", sourceId: "ui-nisc" },
    { label: "public performance", value: "$788.2M quarterly revenue", detail: "Q3 FY2026の会社発表。", caveat: "global全社売上で日本salesのquota達成を示さない。", sourceId: "ui-ir" },
  ], roleLens: { salesMotion: "SMBからEnterprise・Education・Hospitality・Retailへprospectし、demo・site design・proposal・negotiationをfull-cycleで担当。distributor/resellerとdeliveryを組む。", compensation: "日本のbase、OTE、equityは非公開。", quota: "quota、達成率、ACV、cycleは非公開。inventory、partner capacity、multi-site rolloutが難度を左右する。", collaboration: "Solutions/Technical support、Product、Operations、Distributor、Reseller、Marketingと連携し、顧客側のIT、Network、Security、Facilities、Procurementを束ねる。" },
  leadership: { name: "Robert Pera", role: "Founder / CEO", read: "network hardwareのcost構造とdirect modelを変えた創業者。Japan local leadershipとdiscount権限は面接確認。", sourceId: "ui-jp" },
  companyStats: { globalHeadcount: { value: "非公開", detail: "最新公式従業員数は本調査で未確認。" }, japanHeadcount: { value: "非公開", detail: "local UniFi team人数は未開示。" }, japanOffice: { value: "東京優先 / remote-hybrid", detail: "求人記載。", sourceId: "ui-job" }, japanSince: { value: "確認中", detail: "日本事業開始年月は未確定。", sourceId: "ui-job" } },
  salesAppeal: { intro: "hardwareとSaaS、directとchannelを横断する。", points: [
    { title: "5年TCOを売る", detail: "purchase priceだけでなくlicense・管理・現地対応を比較。", sourceIds: ["ui-cloud", "ui-rebath"] },
    { title: "multi-site rolloutを動かす", detail: "HQ標準とsite設置・supportをつなぐ。", sourceIds: ["ui-job", "ui-rebath"] },
    { title: "ecosystem cross-sell", detail: "networkからcamera・access・identityへ拡張。", sourceIds: ["ui-jp", "ui-identity"] },
  ] }, interviewPrep: { intro: "global product momentumとJapan field executionを分ける。", questions: [
    { question: "Japan revenue、active customers、average site、product mixは。", why: "local tractionを見る。", sourceIds: ["ui-job"] },
    { question: "達成率、quota、ACV、cycle、pipeline sourceは。", why: "full-cycleの実現性を見る。", sourceIds: ["ui-job"] },
    { question: "inventory、RMA、日本語support、partner certificationのSLAは。", why: "hardware delivery riskを見る。", sourceIds: ["ui-job"] },
    { question: "direct、distributor、resellerのownership・margin・creditは。", why: "channel conflictを確認。", sourceIds: ["ui-job"] },
  ] }, solutions: [
    { name: "UniFi Network", valueProp: "gateway、switch、Wi-Fiをlocal control planeとcloud managementで統合。", url: "https://ui.com/jp/ja/wifi?l=ja&s=jp", competitors: "Cisco Meraki、HPE Aruba、Fortinet。", differentiation: "license-free central managementとintegrated hardware/software。", retention: "subscription NRRの概念は限定的。" },
    { name: "UniFi Protect", valueProp: "camera、NVR、analyticsをUniFiで管理。", url: "https://ui.com/jp/ja", competitors: "Axis、Hanwha、Verkada、Genetec。", differentiation: "network infrastructureと同一ecosystem・local storage。", retention: "category別repeat purchaseは非公開。" },
    { name: "UniFi Access / Identity", valueProp: "door access、user identity、Wi-Fi/VPN accessを統合。", url: "https://ui.com/jp/ja/identity", competitors: "HID、Brivo、Okta周辺、traditional access systems。", differentiation: "network・physical access・identityをUniFi experienceへ接続。", retention: "日本のcross-sell率は非公開。" },
  ], customerStoriesUrl: "https://casestudies.ui.com/", fitTags: ["Networkingを売りたい", "channel salesに強い", "multi-site rollout", "hardware/software両方", "SMBからEnterprise", "TCOを数値化できる", "IoT/Physical Security", "full-cycleを持ちたい"], comparisonMap: [
    { arena: "Cloud-managed network", companies: ["Ubiquiti", "Cisco Meraki", "HPE Aruba"], why: "license、management、support、Enterprise機能の比較" },
    { arena: "Security camera", companies: ["Ubiquiti", "Verkada", "Axis"], why: "local/cloud architecture、AI、ecosystemの比較" },
    { arena: "SMB network", companies: ["Ubiquiti", "TP-Link Omada", "Fortinet"], why: "price、security、channel、operationsの比較" },
  ], sources: ubiquitiSources,
};

export const expansionIntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  airwallex: airwallexIntelligence,
  cambly: camblyIntelligence,
  censys: censysIntelligence,
  halcyon: halcyonIntelligence,
  ideals: idealsIntelligence,
  lighthouse: lighthouseIntelligence,
  marqvision: marqvisionIntelligence,
  postman: postmanIntelligence,
  "sensor-tower": sensorTowerIntelligence,
  ubiquiti: ubiquitiIntelligence,
};
