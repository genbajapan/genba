import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-09-04";

type DailyInput = {
  profile: Profile;
  patch: CompactPatchInput;
  preEntry?: {
    verdict: string;
    factSignals: Array<[string, string, string[]]>;
    hurdles: Array<[string, string, string[]]>;
    conditions: Array<[string, string]>;
    watches: string[];
  };
};

function build(input: DailyInput) {
  const intelligence = buildIntelligence(input.profile);
  applyStandard(intelligence, buildCompactPatch(input.patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.09.04";
  if (input.preEntry && intelligence.marketStatus.japanGrowth) {
    intelligence.marketStatus.japanGrowth.headline = "日本法人・国内拠点・日本専任求人は未確認";
    intelligence.marketStatus.japanGrowth.narrative = `${input.profile.japanPresence}。APAC・Global求人を日本から応募できるとは補完せず、正式進出の成立条件を継続観測する。`;
    intelligence.marketStatus.japanGrowth.entryAssessment = {
      verdict: input.preEntry.verdict,
      factSignals: input.preEntry.factSignals.map(([title, body, sourceIds]) => ({ title, body, sourceIds })),
      hurdles: input.preEntry.hurdles.map(([title, body, sourceIds]) => ({ title, body, sourceIds })),
      readinessConditions: input.preEntry.conditions.map(([title, body]) => ({ title, body })),
      watchSignals: input.preEntry.watches,
    };
  }
  return intelligence;
}

function addJapanScale(intelligence: CompanyPublicIntelligence, input: { id: string; label: string; url: string; count: string; detail: string }) {
  intelligence.sources.push({ id: input.id, label: input.label, url: input.url, kind: "公的機関", scope: "日本法人・事業所被保険者数", checkedAt });
  intelligence.companyStats.japanHeadcount = { value: input.count, detail: input.detail, sourceId: input.id };
}

const canva = build({
  profile: {
    checkedAt,
    slug: "canva",
    name: "Canva",
    jobUrl: "https://www.lifeatcanva.com/en/jobs/6000000001187132/japan-channel-account-manager/",
    officialUrl: "https://www.canva.com/newsroom/news/canva-2025-wrap/",
    customersUrl: "https://www.canva.com/newsroom/news/one-year-canva-enterprise/",
    externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html",
    financeUrl: "https://www.canva.com/newsroom/news/canva-2025-wrap/",
    salesSnapshot: "デザイン担当だけでなく全社員が資料、動画、Web、広告を作るほど、制作待ち、ブランド逸脱、権限、素材管理が増える課題を解く。作成、共同編集、AI、ブランド管理を同じ業務基盤へまとめ、速さと統制を両立する。",
    growthSummary: "会社は2025年に月間利用者2.6億人、年間売上35億ドルを公表し、Canva EnterpriseはFortune 500の95%で利用されると説明。日本は渋谷拠点とgBizINFOの事業所被保険者数16人、販売パートナー営業と成長マーケティングの現行求人を確認したが、日本売上・企業顧客数は非公開。",
    ipoSummary: "非公開企業。会社は2025年売上35億ドルを公表しているが、IPO時期、評価額、日本売上は公式に確定していない。",
    milestones: [
      { year: "2013", label: "Canva創業・公開", detail: "Melanie Perkins、Cliff Obrecht、Cameron Adamsがシドニーで創業し、誰でもデザインできる製品を公開。", source: "company" },
      { year: "2023", label: "日本法人設立", detail: "Canva Japan株式会社の法人番号が指定。", source: "company" },
      { year: "2024", label: "Canva Enterprise", detail: "大企業向けの権限、ブランド、安全管理を強化。", source: "company" },
      { year: "2025", label: "売上35億ドル", detail: "月間利用者2.6億人とともに会社公式で公表。", source: "finance" },
      { year: "2026.09", label: "日本採用を確認", detail: "販売パートナー営業と成長マーケティングを公式確認。", source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "企業事例は、部門ごとに増える制作物を速く作りながら、ブランド、権限、承認を全社で揃える必要を示す。" },
      { title: "製品の成り立ちから見る課題", body: "専門ソフトを扱える人だけが制作を担う制約から始まり、テンプレート、共同編集、動画、文書、Web、AIへ作成範囲を広げた。" },
      { title: "外部環境の要求から見る課題", body: "生成AIで作成量と作り手が増えるほど、企業は出典、権限、ブランド、機密情報、公開前承認を継続して説明する必要がある。" },
    ],
    narrative: [
      { label: "背景", body: "営業、マーケティング、人事など非デザイン部門にも日々の制作需要が広がる。" },
      { label: "課題", body: "制作依頼の待ち時間を減らすと、無断素材、ブランド逸脱、重複作業、公開権限の問題が増えやすい。" },
      { label: "解決策", body: "対象部門を限定し、テンプレート、承認、権限、AI利用を設計して、初稿時間、差し戻し、再利用率、逸脱件数を比較する。" },
      { label: "選定の理由", body: "Adobe Express、Microsoft 365、Google Workspace、Figma等と比べ、非専門職の利用、ブランド統制、素材、共同編集、AI、総費用に優位がある場合に選ぶ。" },
    ],
    openingHook: "一つの顧客向け資料を公開できる状態にするまで、何人が何時間を制作依頼、素材確認、ブランド修正に使っていますか。",
    valueHypothesis: "対象部門で初稿時間、差し戻し回数、テンプレート再利用率、ブランド逸脱、外注費、公開までの時間を導入前後で比較する。",
    objection: "Adobe、Microsoft、Google、Figmaを既に契約しており、新しい作成基盤を増やす必要はない。",
    reframe: "単体機能ではなく、非専門職が安全に作れる範囲、ブランド・権限、既存形式、共同編集、教育、総制作費で比べる。",
    facts: [
      { label: "創業", value: "2013年", detail: "オーストラリア・シドニー発。" },
      { label: "月間利用者", value: "2.6億人", detail: "2025年会社公式。", source: "finance" },
      { label: "売上", value: "35億ドル", detail: "2025年会社公式。", source: "finance" },
      { label: "企業利用", value: "Fortune 500の95%", detail: "2025年Canva Enterprise公式記事。", source: "customers" },
      { label: "国内規模", value: "16人", detail: "gBizINFOの事業所被保険者数。役員・制度対象外・業務委託等を含む総在籍人数ではない。", source: "company" },
      { label: "掲載求人", value: "2件", detail: "販売パートナー営業と成長マーケティング。", source: "job" },
    ],
    customers: [
      { company: "FedEx", products: "Canva Enterprise", outcome: "企業向けの制作、共同編集、ブランド管理を利用する代表企業として公式掲載。個別の定量成果は未確認。", implication: "全社展開では作成速度だけでなくブランド・権限設計が提案軸になる。" },
      { company: "DocuSign", products: "Canva Enterprise", outcome: "世界企業での利用例として公式掲載。個別の定量成果は未確認。", implication: "既存の営業・マーケティング業務との連携を検証する参照になる。" },
    ],
    externalSignals: [
      { label: "AIガバナンス", value: "作成物の説明責任", detail: "経済産業省のAI事業者ガイドラインは、リスクに応じたガバナンスと関係者への説明を求める。", caveat: "Canva単独の適法性・安全性を保証しない。" },
      { label: "制作の分散", value: "速さと統制の両立", detail: "作り手と作成量が増えるほど、ブランド、素材権利、権限、承認を業務として設計する必要がある。", caveat: "効果は既存環境と運用設計で異なる。" },
    ],
    role: "販売パートナーの開拓・育成・共同売上を持つChannel Account Managerと、日本の獲得から継続・売上までを持つGrowth Marketing Lead。",
    organization: "渋谷の小規模日本組織。世界の製品・データ・制作部門と連携しながら、日本の販売網と利用成長を作る段階。",
    careerValue: "広い個人利用を企業契約と日本の販売網へ変え、AI作成、ブランド統制、製品主導成長を横断する経験。",
    globalHeadcount: "非公開（公式採用サイトは世界の分散組織を説明）",
    japanPresence: "Canva Japan株式会社・渋谷オフィス。gBizINFO事業所被保険者数16人",
    japanSince: "2023年に日本法人設立を確認",
    solutions: [
      { name: "Canva Enterprise", valueProp: "全社員の制作をブランド、権限、承認、安全管理の下で運用。", url: "https://www.canva.com/enterprise/", competitors: "Adobe Express、Microsoft 365、Google Workspace、Figma。", differentiation: "非専門職の作成体験と企業統制を一つにする。" },
      { name: "Visual Suite", valueProp: "デザイン、動画、文書、プレゼンテーション、Web、ホワイトボードを共同編集。", url: "https://www.canva.com/visual-suite/", competitors: "Adobe Creative Cloud、Microsoft 365、Google Workspace。", differentiation: "形式を跨いだテンプレートと作成体験を共有する。" },
      { name: "Magic Studio", valueProp: "文章、画像、動画、レイアウトのAI作成・編集を提供。", url: "https://www.canva.com/magic-studio/", competitors: "Adobe Firefly、Microsoft Copilot、Google Gemini。", differentiation: "既存の素材、テンプレート、ブランド業務へAIを埋め込む。" },
    ],
    fitTags: ["Anchor", "Enterprise", "AI", "Design", "Channel", "Growth"],
    comparisons: [
      { arena: "企業制作", companies: ["Canva", "Adobe", "Microsoft"], why: "非専門職、統制、既存形式、総費用" },
      { arena: "共同デザイン", companies: ["Canva", "Figma", "Google"], why: "作成範囲、共同編集、ブランド運用" },
    ],
  },
  patch: {
    slug: "canva", leaderName: "Melanie Perkins", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.canva.com/newsroom/about-canva/",
    localName: "未確認", localLabel: "Japan責任者（現任者未確認）", localUrl: "https://www.canva.com/ja_jp/newsroom/news/whats-new-in-japan/",
    companyId: "canva-company", jobId: "canva-job", customersId: "canva-customers", externalId: "canva-external", financeId: "canva-finance",
    targets: ["ブランド・制作責任者", "マーケティング・営業企画責任者", "情報システム・AI活用責任者"],
    heroSummary: "全社員が資料、動画、Web、広告を作るほど増える制作待ち、ブランド逸脱、権限、素材管理の課題を解く。作成、共同編集、AI、ブランド管理を同じ基盤へまとめ、制作時間を減らしながら速さと統制を両立する。",
    competitors: "Adobe Express、Microsoft 365、Google Workspace、Figma。非専門職の利用、ブランド・権限、既存形式、素材、AI、総費用で比較する。",
    feature: "デザイン、動画、文書、Web、ホワイトボード、AI作成をテンプレート、共同編集、ブランド・権限管理と一体で提供する。",
    advantage: "2.6億人の利用で磨く作成体験と豊富な素材を、企業向けのブランド、権限、安全、外部連携へ広げる。",
    benefit: "制作待ち、初稿時間、差し戻し、外注費、ブランド逸脱を減らし、非専門職が安全に作れる範囲を広げられる可能性がある。",
    evidence: "会社は2025年に月間利用者2.6億人、売上35億ドルを公表し、Canva EnterpriseはFortune 500の95%で利用と説明。個社の効果は別途検証する。",
    marketVerdict: "世界利用と企業導入は強く、日本の被保険者数16人の組織で販売網・成長職を採用。広い無料利用を統制された企業契約へ変える再現性が焦点。",
    marketParagraphs: ["生成AIで制作量と作り手が増え、企業は速度だけでなくブランド、権限、素材権利、公開前承認を一体で管理する必要がある。", "今後3〜5年は個人利用の知名度を、販売会社、企業管理、既存業務との連携、日本語支援へ変えられるかが日本の成長を分ける。"],
    cultureHeadline: "渋谷の小規模日本組織から、世界規模の製品と販売網を日本へ広げる局面。",
    classification: "ハイブリッド", displayLabel: "渋谷オフィスを拠点とするハイブリッド", officeDays: "求人ごとの出社日数は未確認", remoteOnly: "完全リモートではない", flexibility: "役割ごとの勤務条件を公式求人で確認",
    goodFor: ["利用者基盤を企業契約・販売網へ変えたい人", "AI作成とブランド統制を業務成果へ翻訳したい人"],
    cautionFor: ["完成済みの日本営業手順だけを求める人", "製作機能の説明だけで商談を進めたい人"],
    unresolved: [["企業転換", "個人利用は広い。", "日本で無料・個人利用から企業契約へ移る率と主要な起点は。"], ["販売網", "SoftBank C&Sを担当。", "販売会社別の案件創出、技術支援、売上計上、競合時の責任は。"], ["日本組織", "gBizINFOの事業所被保険者数は16人。", "営業、顧客成功、技術、マーケティングの現員と採用計画は。"], ["AI統制", "企業向け管理を強化。", "学習設定、素材権利、承認、監査を日本顧客へどう説明するか。"], ["成果", "世界利用規模は大きい。", "日本の更新率、拡大率、達成率、平均契約額、営業期間は。"]],
  },
});

addJapanScale(canva, {
  id: "gbiz-headcount-canva", label: "gBizINFO Canva Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=9010401177221", count: "16人",
  detail: "gBizINFOの事業所被保険者数。役員・制度対象外・海外所属・業務委託等を含むJapan team総数ではない。",
});
canva.sources.push({ id: "canva-japan-office", label: "Canva日本の最新情報", url: "https://www.canva.com/ja_jp/newsroom/news/whats-new-in-japan/", kind: "企業公式", scope: "渋谷オフィス・日本展開", checkedAt });
canva.companyStats.japanOffice = { value: "東京都渋谷区", detail: "会社公式が渋谷の新オフィスを日本チームの拠点として説明。", sourceId: "canva-japan-office" };
const canvaScaleFact = canva.facts.find((fact) => fact.label === "国内規模");
if (canvaScaleFact) canvaScaleFact.sourceIds = ["gbiz-headcount-canva"];

const monotype = build({
  profile: {
    checkedAt,
    slug: "monotype",
    name: "Monotype",
    jobUrl: "https://monotype.wd1.myworkdayjobs.com/olapic",
    officialUrl: "https://www.monotype.com/ja/resources/ebook/MonotypeFonts",
    customersUrl: "https://www.monotype.com/ja/resources/case-studies/publishing-meets-product-monotype-fonts-x-upep",
    externalUrl: "https://www.bunka.go.jp/seisaku/chosakuken/",
    financeUrl: "https://www.monotype.com/company/press-release/monotype-completes-acquisition-leading-japanese-foundry-fontworks",
    salesSnapshot: "部門や制作会社ごとに増えた書体ファイルと利用条件を追えず、無許諾利用、ブランド不統一、検索・配布の手戻りが起きる課題を解く。25万超の書体を探索、配布、ライセンス、ブランド統制まで一元管理する。",
    growthSummary: "Monotype Fontsは25万超の書体と2025年8月の日本語UIを公表。2023年に73人のFontworksを買収し、日本法人の現行被保険者数は78人。東京で営業5件・顧客成功1件を採用中だが、日本売上・更新率は非公開。",
    ipoSummary: "非公開企業。日本単体の売上、ARR、更新率、投資計画、IPO時期は公表されていない。",
    milestones: [
      { year: "1887", label: "Monotype創業", detail: "文字組み機械と書体技術から事業を開始。", source: "company" },
      { year: "2021以前", label: "日本事業開始を確認", detail: "会社公式の日本向け発表で、日本法人による国内事業を確認。正確な進出年は未確認。", source: "company" },
      { year: "2019", label: "非公開化", detail: "HGGCによる買収後、非公開企業として運営。", source: "finance" },
      { year: "2023", label: "Fontworks買収", detail: "日本の書体会社Fontworksの73人と1,000超の書体を統合。", source: "finance" },
      { year: "2025.08", label: "日本語UI", detail: "Monotype Fontsの日本語UI対応を公表。", source: "company" },
      { year: "2026.09", label: "東京で6職種採用", detail: "営業管理、営業、顧客成功を公式Workdayで確認。", source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "UPEPは書体ファイルの探索・置換と会社単位の権利管理を減らし、制作時間を教育コンテンツへ戻す必要があった。" },
      { title: "製品の成り立ちから見る課題", body: "書体の設計・ライセンス事業から、クラウドで探索、同期、配布、権利、ブランド運用を一体管理する基盤へ広げた。" },
      { title: "外部環境の要求から見る課題", body: "制作物と生成AI出力が増えるほど、企業は利用した書体の権利、配布先、用途、ブランド基準を継続して説明する必要がある。" },
    ],
    narrative: [
      { label: "背景", body: "Web、アプリ、動画、広告、資料へ制作接点が広がり、部門と外部制作会社が異なる書体を扱う。" },
      { label: "課題", body: "書体ファイルと契約が分散すると、探す時間、重複購入、無許諾利用、ブランド不統一が見えなくなる。" },
      { label: "解決策", body: "利用中の書体と権利を棚卸しし、対象部門で承認済み書体の配布、同期、利用記録を統一する。" },
      { label: "選定の理由", body: "Adobe Fonts、Morisawa Fonts、Fontstand、自社管理と比べ、書体範囲、権利の明確さ、企業配布、世界言語、日本語支援、総費用に優位がある場合に選ぶ。" },
    ],
    openingHook: "社内と制作会社が今使っている書体を、契約範囲、利用場所、担当者まで何日で一覧にできますか。",
    valueHypothesis: "対象ブランドで書体探索時間、利用申請、重複購入、権利確認、ブランド逸脱、制作差し戻しを導入前後で比較する。",
    objection: "Adobe Fontsや国内書体サービス、共有フォルダで十分で、新しい管理基盤を増やす必要はない。",
    reframe: "書体数ではなく、実際に必要な日本語・多言語書体、利用権、配布、制作ソフト連携、監査、総管理時間で比べる。",
    facts: [
      { label: "起点", value: "1887年", detail: "書体技術の長い事業史。" },
      { label: "書体", value: "25万超", detail: "2025年7月時点の会社公式。", source: "company" },
      { label: "日本語UI", value: "2025年8月", detail: "Monotype Fontsで提供。", source: "company" },
      { label: "Fontworks", value: "73人・1,000超書体", detail: "2023年買収完了時の会社発表。", source: "finance" },
      { label: "国内規模", value: "78人", detail: "gBizINFO事業所被保険者数。", source: "company" },
      { label: "日本求人", value: "6件", detail: "営業5件、顧客成功1件。", source: "job" },
    ],
    customers: [
      { company: "United Prime Educational Publishing", products: "Monotype Fonts", outcome: "書体の自動同期と一元管理で探索・置換を減らし、コンテンツ開発へ時間を戻したと公式事例が説明。", implication: "制作時間と権利リスクを同じ導入効果として測れる。" },
      { company: "Kenvue", products: "Monotype Fonts / Typography Center of Excellence", outcome: "165超の国で分散した書体利用を棚卸しし、ライセンス・配布・ブランド運用を共通化。", implication: "大規模組織では法務・制作・ブランドの共同運用が選定理由になる。" },
    ],
    externalSignals: [
      { label: "著作権・契約", value: "用途と許諾の管理", detail: "書体ソフトウェアの利用は契約条件と権利確認を伴い、Web、アプリ、動画、配布等の用途別管理が必要。", caveat: "個別契約の法的判断は専門家へ確認する。" },
      { label: "AI制作", value: "生成量と利用資産の統制", detail: "AIで制作量が増えるほど、承認済み資産と利用条件を作成時点へ組み込む必要が高まる。", caveat: "効果は制作工程と管理設計で異なる。" },
    ],
    role: "日本市場の大型案件、営業戦略、組織改善を担う管理職、新規・既存の企業営業4職種、導入・更新・拡大を持つ顧客成功1職種。",
    organization: "東京の78人規模の法人。Fontworks統合後の日本語書体資産と、世界のMonotype Fontsを企業のブランド・制作運用へ広げる段階。",
    careerValue: "ブランド、制作、IT、法務、調達を跨ぎ、書体の権利と運用を企業向けSaaSの商談・定着へ変える専門性。",
    globalHeadcount: "1,000人超（公式求人記載）",
    japanPresence: "Monotype株式会社・東京。gBizINFO事業所被保険者数78人",
    japanSince: "2021年までに日本法人の事業を公式発表で確認。正確な進出年は未確認",
    solutions: [
      { name: "Monotype Fonts", valueProp: "25万超の書体を探索、同期、共有、ライセンス管理。", url: "https://www.monotype.com/ja/products/monotype-fonts", competitors: "Adobe Fonts、Morisawa Fonts、Fontstand、自社管理。", differentiation: "世界の書体資産と企業向け配布・権利管理を一体化。" },
      { name: "Monotype Studio", valueProp: "企業固有の多言語書体とブランド表現を設計。", url: "https://www.monotype.com/ja/products/studio", competitors: "国内外の書体制作会社、ブランド会社。", differentiation: "書体設計と世界言語の専門家網を企業運用へつなぐ。" },
      { name: "Typography Center of Excellence", valueProp: "書体の棚卸し、基準、配布、継続運用を支援。", url: "https://www.monotype.com/resources/case-studies/kenvue-x-monotype-font-system", competitors: "制作会社、ブランドコンサル、自社管理。", differentiation: "ソフトウェアだけでなく制作現場の運用設計まで組み込む。" },
    ],
    fitTags: ["Enterprise", "Brand Governance", "Font", "SaaS", "Customer Success", "Tokyo"],
    comparisons: [
      { arena: "企業書体管理", companies: ["Monotype", "Adobe", "Morisawa"], why: "書体範囲、権利、配布、日本語、総費用" },
      { arena: "ブランド運用", companies: ["Monotype", "Frontify", "Bynder"], why: "書体の深さとブランド資産管理の範囲" },
    ],
  },
  patch: {
    slug: "monotype", leaderName: "Ninan Chacko", leaderLabel: "CEO", leaderUrl: "https://www.monotype.com/company/leadership",
    localName: "Fuminobu Satoh", localLabel: "Japan General Manager（2023年会社発表）", localUrl: "https://www.monotype.com/company/press-release/monotype-completes-acquisition-leading-japanese-foundry-fontworks",
    companyId: "monotype-company", jobId: "monotype-job", customersId: "monotype-customers", externalId: "monotype-external", financeId: "monotype-finance",
    targets: ["ブランド・制作運用責任者", "法務・調達・ライセンス責任者", "情報システム・デジタル資産責任者"],
    heroSummary: "部門や制作会社ごとに増えた書体ファイルと利用条件を追えず、無許諾利用、ブランド不統一、検索・配布の手戻りが起きる課題を解く。書体を探索、配布、ライセンス、ブランド統制まで一元管理する。",
    competitors: "Adobe Fonts、Morisawa Fonts、Fontstand、自社共有。必要書体、用途別権利、配布、制作ソフト連携、日本語支援、総管理時間で比較する。",
    feature: "25万超の書体をクラウドで探索・同期し、チーム配布、利用権、ブランド基準、独自書体制作まで一体で提供する。",
    advantage: "Helvetica等の世界的書体とFontworksの日本語資産、書体専門家、企業向け管理を同じ提供体制へ持つ。",
    benefit: "書体探索、ファイル受け渡し、重複購入、権利確認、ブランド修正の時間とリスクを減らせる可能性がある。",
    evidence: "UPEPは探索・置換時間の削減とコンテンツ開発への集中を説明。Kenvueは165超の国で書体運用を共通化したが、定量効果は個別に検証する。",
    marketVerdict: "日本語資産と78人の法人基盤を持ち、東京で営業・顧客成功6職種を同時採用。AI制作時代に書体をブランド統制の基盤として売れるかが焦点。",
    marketParagraphs: ["Web、動画、アプリ、生成AIで制作物が増え、企業は書体を見た目ではなく権利、配布、ブランド、制作速度の共通基盤として管理する必要がある。", "今後3〜5年はFontworksの日本語資産とMonotype Fontsの企業管理を統合し、制作・法務・IT・調達の共通KPIへ変えられるかが成長を分ける。"],
    cultureHeadline: "78人規模の日本法人で、書体事業を企業向けブランド運用SaaSへ広げる局面。",
    classification: "ハイブリッド", displayLabel: "東京拠点のハイブリッド", officeDays: "一部求人は週3日出社", remoteOnly: "完全リモートではない", flexibility: "求人ごとに出社・訪問条件が異なる",
    goodFor: ["ブランドと権利を企業向けSaaS商談へ変えたい人", "デザイン、IT、法務、調達を跨ぐ営業・顧客成功をしたい人"],
    cautionFor: ["短い単一部門商談だけを求める人", "書体・ブランド・権利の学習を避けたい人"],
    unresolved: [["統合", "2023年にFontworksを買収。", "製品、顧客、営業、顧客成功の統合状況と日本で残る重複は。"], ["営業成果", "営業5件を同時採用。", "現員、担当範囲、達成率、平均契約額、営業期間、採用理由は。"], ["企業転換", "25万超の書体を提供。", "単体書体契約から管理基盤へ移る率と主要な導入起点は。"], ["競争", "国内外の代替がある。", "Adobe、Morisawa、自社管理に勝つ用途と失注理由は。"], ["AI", "AI時代の書体統制を発信。", "生成時点の権利・ブランド統制が現在の売上、利用、更新へどう寄与するか。"]],
  },
});

monotype.sources.push({ id: "gbiz-headcount-monotype", label: "gBizINFO Monotype株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=7290001010129", kind: "公的機関", scope: "日本法人・事業所被保険者数・所在地", checkedAt });
monotype.companyStats.japanHeadcount = { value: "78人", detail: "gBizINFOの事業所被保険者数。役員・制度対象外・業務委託等を含む総在籍人数ではない。", sourceId: "gbiz-headcount-monotype" };
monotype.companyStats.japanOffice = { value: "東京都港区北青山三丁目2番4号", detail: "gBizINFOの現行事業所情報。", sourceId: "gbiz-headcount-monotype" };
const monotypeScaleFact = monotype.facts.find((fact) => fact.label === "国内規模");
if (monotypeScaleFact) monotypeScaleFact.sourceIds = ["gbiz-headcount-monotype"];

const supabase = build({
  profile: {
    checkedAt,
    jobConfirmed: false,
    slug: "supabase",
    name: "Supabase",
    jobUrl: "https://supabase.com/careers",
    officialUrl: "https://supabase.com/careers",
    customersUrl: "https://supabase.com/customers/kayhanspace",
    externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html",
    financeUrl: "https://supabase.com/blog/series-f",
    salesSnapshot: "アプリごとにデータベース、認証、ストレージ、API、リアルタイム処理を別々に構築・運用する課題を解く。Postgresを中心に必要なバックエンド機能をまとめ、開発速度と移植性を両立する。",
    growthSummary: "2026年6月に5億ドルのSeries Fを100億ドルの投資前評価額で調達。会社は約1,000万の開発者、データベース作成数の前年比600%増、350人超・60超の国を公表。日本法人・拠点・日本専任求人は未確認。",
    ipoSummary: "非公開企業。累計10億ドルを調達し、2026年6月のSeries Fで投資前評価額100億ドルを公表したが、IPO時期、日本売上、日本法人計画は未公表。",
    milestones: [
      { year: "2020", label: "Supabase創業", detail: "Paul CopplestoneとAnt WilsonがオープンソースのFirebase代替を掲げて開始。", source: "company" },
      { year: "2024", label: "正式提供", detail: "Postgresを中心とする開発基盤を正式提供へ移行。", source: "company" },
      { year: "2026.06", label: "Series F", detail: "5億ドルを調達し、投資前評価額100億ドルを公表。", source: "finance" },
      { year: "2026", label: "約1,000万開発者", detail: "会社公式が利用規模として公表。", source: "finance" },
      { year: "2026.09", label: "日本状況を確認", detail: "日本法人・拠点・日本専任求人は確認できず。", source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "Kayhan SpaceはRDSとAuth0をまとめ、フロントエンド担当がバックエンド変更を待たず開発できる体制へ移る必要があった。" },
      { title: "製品の成り立ちから見る課題", body: "Firebaseの速い開発体験を、標準的なPostgresとオープンソースで得られるようにする発想から、認証、ストレージ、API、リアルタイムへ広げた。" },
      { title: "外部環境の要求から見る課題", body: "AIが短時間に大量のアプリを作るほど、企業はデータ権限、環境分離、監査、費用、障害対応を継続して管理する必要がある。" },
    ],
    narrative: [
      { label: "背景", body: "AI支援で画面と機能の実装は速くなる一方、認証、データ、権限、運用が製品化の待ち時間になる。" },
      { label: "課題", body: "機能ごとにサービスを組み合わせると、設計、請求、監視、権限、障害対応が分散する。" },
      { label: "解決策", body: "対象アプリでPostgres、認証、ストレージ、APIを共通化し、初回公開、変更、障害、費用、移行可能性を比較する。" },
      { label: "選定の理由", body: "Firebase、Neon、AWS、Azure、Render等と比べ、Postgres互換、開発体験、統合機能、移植性、企業統制、総費用に優位がある場合に選ぶ。" },
    ],
    openingHook: "新しいアプリの最初の顧客へ届けるまで、認証、データベース、API、権限設定に何人日を使っていますか。",
    valueHypothesis: "対象アプリで初回公開時間、変更の待ち時間、開発者数、基盤費、障害時間、権限設定、移行工数を比較する。",
    objection: "Firebaseや既存クラウドの管理サービスで十分で、新しい開発基盤を増やす必要はない。",
    reframe: "初期速度だけでなく、標準SQL、データ所有、権限、拡張、監視、移行可能性、本番運用の総工数で比べる。",
    facts: [
      { label: "創業", value: "2020年", detail: "オープンソースのFirebase代替として開始。" },
      { label: "Series F", value: "5億ドル", detail: "2026年6月会社公式。", source: "finance" },
      { label: "評価額", value: "100億ドル", detail: "2026年6月の投資前評価額。", source: "finance" },
      { label: "開発者", value: "約1,000万人", detail: "2026年会社公式。", source: "finance" },
      { label: "全社規模", value: "350人超・60超の国", detail: "公式採用ページ。", source: "company" },
      { label: "日本求人", value: "0件", detail: "APAC・Global求人はあるが日本専任・日本勤務地は未確認。", source: "job" },
    ],
    customers: [
      { company: "Kayhan Space", products: "Database / Auth", outcome: "基盤統合後に開発速度8倍、注目急増時にも停止0と会社事例が説明。", implication: "開発速度と運用耐性を同じ評価へ置ける。" },
      { company: "Quilia", products: "Data API / Row Level Security", outcome: "開発・公開時間75%削減、月額基盤費を100ドルから約50ドルへ削減と会社事例が説明。", implication: "小規模開発では統合機能が人員と費用の代替になる。" },
    ],
    externalSignals: [
      { label: "AIアプリ", value: "データ統制がボトルネック", detail: "生成AIでアプリ作成が速くなるほど、データ権限、監査、評価、運用の設計が投資条件になる。", caveat: "AI利用の効果とリスクは用途ごとに検証する。" },
      { label: "オープンソース", value: "移植性と運用責任", detail: "Postgres互換は移植性を高めうるが、管理サービス固有機能と自社運用の責任も比較が必要。", caveat: "移行容易性は利用機能と規模で異なる。" },
    ],
    role: "日本向け公式求人は0件。現行採用ページにはAPACまたはGlobalの営業・支援職があるが、日本勤務地・国内雇用・日本専任の職務とは確認できない。",
    organization: "350人超が60超の国で働く完全リモート組織。日本法人、国内拠点、日本語の営業・顧客支援組織は確認できない。",
    careerValue: "PostgresとAIアプリ開発の急成長を観測し、日本進出に必要な契約、データ所在、販売、導入、顧客支援の成立条件を見極める。",
    globalHeadcount: "350人超・60超の国（公式採用ページ）",
    japanPresence: "日本法人・国内拠点・日本専任求人は未確認。完全リモートだが日本からの雇用可否は未確認",
    japanSince: "正式な日本進出時期は未確認",
    solutions: [
      { name: "Supabase Platform", valueProp: "Postgres、認証、ストレージ、Realtime、API、Edge Functionsを統合。", url: "https://supabase.com/", competitors: "Firebase、AWS Amplify、Appwrite。", differentiation: "Postgresとオープンソースを中心に統合した開発体験。" },
      { name: "Supabase Enterprise", valueProp: "SSO、監査、専用支援、企業の安全・運用要件へ対応。", url: "https://supabase.com/enterprise", competitors: "AWS、Azure、Google Cloud、MongoDB Atlas。", differentiation: "小さく始めた同じ開発体験を企業統制へ広げる。" },
      { name: "Supabase for Platforms", valueProp: "顧客ごとのデータベース、認証、ストレージを自社製品へ組み込む。", url: "https://supabase.com/features/platforms", competitors: "自社構築、各クラウドの管理サービス。", differentiation: "顧客単位の分離と管理を製品機能として提供。" },
    ],
    fitTags: ["Pre-entry", "Postgres", "Open Source", "Developer Platform", "AI", "Remote"],
    comparisons: [
      { arena: "開発基盤", companies: ["Supabase", "Firebase", "AWS"], why: "初期速度、標準技術、統合、運用" },
      { arena: "管理Postgres", companies: ["Supabase", "Neon", "MongoDB"], why: "データモデル、分岐、企業統制、移植性" },
    ],
  },
  patch: {
    slug: "supabase", leaderName: "Paul Copplestone", leaderLabel: "共同創業者・CEO", leaderUrl: "https://supabase.com/blog/series-f",
    localName: "未確認", localLabel: "日本・APAC責任者", localUrl: "https://supabase.com/careers",
    companyId: "supabase-company", jobId: "supabase-job", customersId: "supabase-customers", externalId: "supabase-external", financeId: "supabase-finance",
    targets: ["開発基盤・クラウド責任者", "AIアプリ・製品開発責任者", "データ・セキュリティ責任者"],
    heroSummary: "アプリごとにデータベース、認証、ストレージ、API、リアルタイム処理を別々に構築・運用する課題を解く。Postgresを中心に必要なバックエンド機能をまとめ、開発速度と移植性を両立する。",
    competitors: "Firebase、AWS、Azure、Neon、MongoDB、Appwrite。初期速度、標準技術、統合機能、権限、運用、移植性、総費用で比較する。",
    feature: "Postgresを中心にデータベース、認証、ストレージ、Realtime、API、Edge Functionsを一つの開発基盤で提供する。",
    advantage: "オープンソースと標準SQLを核に、約1,000万開発者の利用とAI作成ツールからの大量の新規データベースで開発体験を磨く。",
    benefit: "基盤構築、機能間連携、権限設定の時間を減らし、少人数でも本番アプリを速く改善できる可能性がある。",
    evidence: "Kayhan Spaceは開発速度8倍、Quiliaは開発・公開時間75%削減を会社事例で説明。日本企業の公式事例と国内支援は未確認。",
    marketVerdict: "世界の開発者利用、資金、AI経由の成長は強いが、日本法人・拠点・専任求人・国内事例を確認できず、進出可能性は探索段階。",
    marketParagraphs: ["AIがアプリ作成を速めるほど、認証、データ、権限、監査、費用、障害対応を一つに管理する需要が増える。", "今後3〜5年は自然流入だけでなく、日本の契約・請求、データ要件、技術支援、販売、顧客成功へ投資する判断が正式進出を分ける。"],
    cultureHeadline: "350人超が60超の国で働く完全リモート組織。日本での雇用条件は未確認。",
    classification: "フルリモート", displayLabel: "世界分散の完全リモート", officeDays: "オフィスなし", remoteOnly: "世界のどこからでも働けると会社説明", flexibility: "日本の雇用主体・応募可否は確認できない",
    goodFor: ["PostgresとAIアプリ基盤の成長を観測したい人", "オープンソースと企業利用の接点を研究したい人"],
    cautionFor: ["現在日本向け職務へ応募したい人", "日本法人・国内支援を必須とする人"],
    unresolved: [["日本需要", "世界で約1,000万開発者。", "日本の有償組織数、用途、利用量、更新率は。"], ["APAC求人", "APAC・Global求人を掲載。", "日本居住者の雇用可否、担当国、時差、出張、言語要件は。"], ["企業基盤", "企業向け管理機能を提供。", "日本のデータ所在、契約、安全審査、障害連絡をどう支援するか。"], ["競争", "Firebase代替から成長。", "Neon、クラウド各社、自社Postgresに勝つ本番用途と失注理由は。"], ["進出条件", "日本法人・拠点・専任求人なし。", "法人、契約、販売、技術支援、顧客成功を置く判断条件は。"]],
  },
  preEntry: {
    verdict: "進出可能性は探索段階。世界の開発者利用とAPAC求人はあるが、日本の法人・雇用・販売・顧客支援へ投資する公式シグナルは未確認",
    factSignals: [["世界利用", "約1,000万の開発者とデータベース作成数の前年比600%増を会社が公表。", ["supabase-finance"]], ["APAC求人", "営業、支援、運用のAPAC求人を掲載。", ["supabase-job"]], ["完全リモート", "350人超が60超の国で勤務。", ["supabase-company"]], ["日本求人0件", "日本専任・日本勤務地・国内雇用を確認できない。", ["supabase-job"]]],
    hurdles: [["法人・雇用", "日本法人、国内拠点、雇用主体を確認できない。", ["supabase-company"]], ["国内実績", "日本企業の公式事例と国内顧客数を確認できない。", ["supabase-customers"]], ["企業審査", "日本語の契約、請求、データ所在、障害対応、法務・安全資料の体制が未確認。", ["supabase-job"]], ["競争", "クラウド各社、Firebase、Neon、自社Postgresに勝つ必要がある。", ["supabase-company"]]],
    conditions: [["国内の有償実績", "複数組織で本番利用、更新、拡大を確認。"], ["Japan commercial owner", "日本市場の営業・顧客支援責任者を配置。"], ["契約・請求・雇用", "国内の販売・契約・請求・雇用経路を明確化。"], ["企業支援", "日本語の安全・法務資料、データ要件、障害連絡を提供。"], ["現行Japan求人", "公式採用で日本市場の職務を確認。"]],
    watches: ["Japan・APAC求人", "日本法人・国内拠点", "国内企業の公式事例", "日本語Trust資料", "国内販売パートナー", "日本向け契約・請求"],
  },
});

supabase.sources.push({ id: "gbiz-headcount-supabase", label: "gBizINFO 法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報・被保険者数", checkedAt });
supabase.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "対応する日本法人を特定できず、事業所情報の被保険者数を0人とは扱わない。", sourceId: "gbiz-headcount-supabase" };

export const daily20260904IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { canva, monotype, supabase };
