import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-09-10";

function build(profile: Profile, patch: CompactPatchInput) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.09.10";
  return intelligence;
}

const recordedFuture = build({
  checkedAt, slug: "recorded-future", name: "Recorded Future",
  jobUrl: "https://job-boards.greenhouse.io/recordedfuture/jobs/8725963002",
  officialUrl: "https://www.recordedfuture.com/jp/newsroom/press-releases/mitsuro-kakizawa-announcement",
  customersUrl: "https://www.recordedfuture.com/jp/case-study/panasonic",
  externalUrl: "https://www.ipa.go.jp/security/10threats/10threats2026.html",
  financeUrl: "https://www.mastercard.com/global/en/news-and-trends/press/2024/december/mastercard-finalizes-acquisition-of-recorded-future.html",
  salesSnapshot: "CISO、SOC、脆弱性・第三者リスク責任者へ、公開Web、ダークWeb、技術情報を分析した脅威インテリジェンスを提供する。顧客が抱える情報のノイズ、人手の優先順位付け、事後対応偏重を解き、外部脅威の兆候を調査、修正、経営判断へつなぐ。",
  growthSummary: "2009年創業。1,900超の企業・政府機関、75カ国、Fortune 100の半数超を顧客に持つと会社公表。2024年12月にMastercardが26.5億ドルで買収を完了した。",
  ipoSummary: "Mastercardの子会社。Recorded Future単体の売上、ARR、利益、日本売上は非公開。",
  milestones: [
    { year: "2009", label: "創業", detail: "Christopher AhlbergとStaffan Truvéが、インターネット上の情報から将来の脅威を先回りする会社を創業。", source: "company" },
    { year: "2018", label: "日本法人設立", detail: "レコーデッド・フューチャー・ジャパン株式会社を東京に設立。", source: "company" },
    { year: "2024", label: "Mastercardが買収", detail: "26.5億ドルの買収を12月に完了。", source: "finance" },
    { year: "2026", label: "日本事業責任者", detail: "柿澤美郎氏のCountry Manager, Japan就任と東京拠点を会社発表。", source: "company" },
    { year: "2026", label: "東京の顧客技術採用", detail: "Principal Technical Account Managerを公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "パナソニックは手作業と主観的な脅威評価を見直し、分析レポート作成を50%高速化、脆弱性の優先順位付けを自動化したと公式事例で紹介される。" },
    { title: "製品の成り立ちから見る課題", body: "世界で起きる事象をWeb上の広い情報から先回りする構想を、攻撃者、基盤、標的を結ぶ脅威インテリジェンス基盤へ発展させた。" },
    { title: "外部環境の要求から見る課題", body: "ランサムウェア、認証情報悪用、サプライチェーン攻撃が境界を越え、企業は自社内ログだけでなく外部脅威の早期兆候を継続的に判断する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "内部ログと外部の脅威情報が急増し、アナリストが事象の重要度を人手で判断する。" },
    { label: "課題", body: "インジケータの羅列だけでは自社に関係する攻撃者、脆弱性、第三者リスクを優先順位付けできない。" },
    { label: "解決策", body: "一つの運用で外部脅威情報をSIEM・SOAR・脆弱性管理に接続し、調査時間、誤検知、修正時間、先行検知を測る。" },
    { label: "選定の理由", body: "Mandiant、CrowdStrike、Microsoft、Flashpoint、セキュリティベンダーの脅威フィードと比べ、情報源の幅、文脈、自社への関連付け、日本語支援、運用統合が優位なら選ぶ。" },
  ],
  openingHook: "毎日受け取る脅威情報のうち、自社で本当に調査・修正すべきものを何分で判断できますか。",
  valueHypothesis: "対象運用で脅威調査時間、誤検知、脆弱性修正時間、先行検知、アナリスト工数を導入前後で比べる。",
  objection: "SIEMやEDRベンダーの脅威情報で十分。",
  reframe: "フィード数ではなく、自社への関連付け、根拠、既存運用への接続、人の判断時間をどこまで減らせるかで比較する。",
  facts: [
    { label: "創業", value: "2009年", detail: "スウェーデン出身の共同創業者2人が米国で創業。" },
    { label: "顧客", value: "1,900超", detail: "75カ国の企業・政府機関。", source: "finance" },
    { label: "買収額", value: "26.5億ドル", detail: "2024年12月にMastercardが買収を完了。", source: "finance" },
    { label: "日本法人", value: "2018年", detail: "東京・JPタワー。", source: "company" },
    { label: "国内事例", value: "複数", detail: "パナソニック、東芝、HIS、SOMPO、豊田通商等を公式掲載。", source: "customers" },
    { label: "日本求人", value: "1件", detail: "東京のPrincipal Technical Account Manager。", source: "job" },
  ],
  customers: [
    { company: "パナソニックグループ", products: "Recorded Future Intelligence Platform", outcome: "脅威分析レポート作成を50%高速化し、脆弱性の優先順位付けを自動化したと公式事例で紹介。", implication: "大規模な日本企業での能動的防御と運用標準化の参照になる。" },
    { company: "セガサミーホールディングス", products: "Threat Intelligence・Third-Party Intelligence", outcome: "90社のグループを監視し、認証情報流出と第三者リスクを早期検出と公式事例で紹介。", implication: "グループ・サプライチェーンまでの展開に使える。" },
  ],
  externalSignals: [
    { label: "サイバー威協", value: "供給網・認証情報・ランサムウェア", detail: "外部脅威の兆候を自社の資産と結び、防御の優先順位を継続更新する必要がある。", caveat: "Recorded Futureの導入だけで防止やガイドライン適合を保証しない。" },
    { label: "AI利用", value: "根拠と人の判断", detail: "大量情報の要約・関連付けにAIを使っても、最終的な脅威判断と対応責任は組織に残る。", caveat: "リスク、データ、対応手順で必要な人の確認は異なる。" },
  ],
  role: "東京のPrincipal Technical Account Managerが、日本顧客の導入、運用定着、価値評価、技術的課題解決を担う。",
  organization: "レコーデッド・フューチャー・ジャパン株式会社。gBizINFOの事業所被保険者数24人。",
  careerValue: "脅威インテリジェンス、SOC運用、脆弱性・第三者リスク、技術顧客成功を横断する経験。",
  globalHeadcount: "1,000人超（会社公式の2026年掲載）", japanPresence: "東京・JPタワー14階", japanSince: "2018年",
  solutions: [
    { name: "Intelligence Platform", valueProp: "攻撃者、脆弱性、第三者、ブランド等の脅威情報を統合。", url: "https://www.recordedfuture.com/jp/platform", competitors: "Mandiant、CrowdStrike、Microsoft、Flashpoint。", differentiation: "広い情報源と専門家分析をリスクの文脈で接続。" },
    { name: "Recorded Future AI", valueProp: "脅威情報の調査、要約、レポート作成を支援。", url: "https://www.recordedfuture.com/jp/platform/artificial-intelligence", competitors: "各セキュリティ基盤のAIアシスタント、内製。", differentiation: "長年の脅威データ、分析者の知識、既存運用連携。" },
  ],
  fitTags: ["Threat Intelligence", "Cybersecurity", "Technical Account Management", "AI", "Tokyo"],
  comparisons: [
    { arena: "脅威インテリジェンス", companies: ["Recorded Future", "Mandiant", "CrowdStrike", "Flashpoint"], why: "情報源、文脈、分析、運用統合、価格" },
    { arena: "セキュリティ運用", companies: ["Recorded Future", "Microsoft", "SIEM各社"], why: "外部脅威と内部データの関連付け" },
  ],
}, {
  slug: "recorded-future", leaderName: "Christopher Ahlberg", leaderLabel: "Co-founder / CEO", leaderUrl: "https://www.recordedfuture.com/about",
  localName: "柿澤 美郎", localLabel: "Country Manager, Japan", localUrl: "https://www.recordedfuture.com/jp/newsroom/press-releases/mitsuro-kakizawa-announcement",
  companyId: "recorded-future-company", jobId: "recorded-future-job", customersId: "recorded-future-customers", externalId: "recorded-future-external", financeId: "recorded-future-finance",
  targets: ["CISO・SOC責任者", "脆弱性・インシデント対応責任者", "第三者・ブランドリスク責任者"],
  heroSummary: "外部の脅威情報が多すぎて、自社に関係する攻撃者、脆弱性、第三者リスクの優先順位を人手で判断しきれない課題を解く。Web上の広い情報をAIと専門家で文脈付けし、事後対応から先回りする運用へ変える。",
  competitors: "Mandiant、CrowdStrike、Microsoft、Flashpoint、SIEM各社。情報源、文脈、日本語支援、既存運用連携、総費用で比較。",
  feature: "公開Web、ダークWeb、技術情報を統合し、攻撃者、脆弱性、第三者、ブランドの脅威を関連付ける。",
  advantage: "15年以上の脅威データ、1,000人超の専門人材、1,900超の顧客と国内の複数事例を持つ。",
  benefit: "調査時間、誤検知、脆弱性修正時間、先行検知、アナリスト工数を改善できる可能性がある。",
  evidence: "パナソニックの分析レポート50%高速化、セガサミー90社の第三者監視を公式事例で確認。",
  marketVerdict: "24人規模の国内事業所と新任Country Manager、複数の国内事例を持ち、東京で顧客技術人材を採用中。販売拡大だけでなく定着・価値実現を厚くする局面。",
  marketParagraphs: ["攻撃が供給網、認証情報、ブランドへ広がり、内部ログだけでは防御の優先順位を決めにくい。", "AI時代の優位はモデル単体ではなく、長年の脅威データ、専門家分析、顧客の安全運用への接続を保てるかで決まる。"],
  cultureHeadline: "小規模な日本組織で、脅威情報を顧客の日常運用へ定着させる。",
  classification: "ハイブリッド", displayLabel: "東京／週3日出社", officeDays: "週3日", remoteOnly: "完全リモートではない", flexibility: "顧客対応と東京オフィス出社を含む",
  goodFor: ["セキュリティ情報を顧客の意思決定へ定着させたい人", "技術支援と顧客価値・拡張を横断したい人"],
  cautionFor: ["製品の操作支援だけを望む人", "完全リモートを必須とする人"],
  unresolved: [
    ["担当", "顧客の定着と価値実現を担う。", "担当社数、業界、製品範囲、技術的エスカレーション数は。"],
    ["成果", "顧客価値を評価。", "利用、更新、拡張、問題解決のどのKPIで評価されますか。"],
    ["組織", "日本事業所は24人規模。", "営業、技術営業、TAM、分析、支援の人数と責任分担は。"],
    ["製品", "広い脅威情報を扱う。", "日本顧客の利用領域、競合勝因、データや日本語の制約は。"],
    ["報酬", "日本の数値報酬は未掲載。", "基本給、変動給、株式、評価指標、昇進基準は。"],
  ],
});

const sprinklr = build({
  checkedAt, slug: "sprinklr", name: "Sprinklr",
  jobUrl: "https://sprinklr.wd1.myworkdayjobs.com/careers",
  officialUrl: "https://www.sprinklr.com/jp/",
  customersUrl: "https://www.sprinklr.com/stories/honda/",
  externalUrl: "https://www.meti.go.jp/policy/investment/pdf/tokuteibunya.pdf",
  financeUrl: "https://investors.sprinklr.com/news/press-releases/detail/264/sprinklr-announces-second-quarter-fiscal-2027-results",
  publicInfo: { ticker: "CXM", exchange: "NYSE", listedSince: "2021年6月" },
  salesSnapshot: "経営層、顧客サービス、マーケティング、デジタル責任者へ、顧客対応、SNS、マーケティング、顧客インサイトを一つのAI基盤へ統合する。部門ごとの道具・データ・対応が分断し、顧客が通過するチャネル全体で一貫した体験と改善指標を作れない課題を解く。",
  growthSummary: "2027年1月期Q2売上は2.137億ドルで前年比1%増、サブスクリプション売上は3%増。RPOは10.3億ドルで11%増、1,600社超とFortune 100の59%が利用すると会社公表。",
  milestones: [
    { year: "2009", label: "創業", detail: "Ragy Thomasが自宅の予備部屋から、分断した顧客接点を一つにする構想で創業。", source: "company" },
    { year: "2014", label: "日本法人設立", detail: "パートナー経由の参入を経てSprinklr Japan株式会社を設立。", source: "company" },
    { year: "2016", label: "国内研究開発拠点", detail: "日本企業のソーシャルメディ投資効果向上向けに新設。", source: "company" },
    { year: "2021", label: "NYSE上場", detail: "ティッカーCXMで上場。", source: "finance" },
    { year: "2026", label: "統合CXの導入人材を採用", detail: "東京で導入・運用支援の3職種を公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Hondaはオンライン車販売で、SNS、メール、チャット、音声の顧客対応とデータを一つにし、3つの個別製品を置き換えたと公式事例で紹介される。" },
    { title: "製品の成り立ちから見る課題", body: "ソーシャルチャネルと顧客の声が増え、ブランド側の部門、データ、対応が分断した問題から、顧客サービス、SNS、マーケティング、分析の統合基盤へ広げた。" },
    { title: "外部環境の要求から見る課題", body: "顧客は音声、メール、SNS、チャットを横断する一方、企業には個人情報、ブランド表現、AIの誤答、委託先、人の承認を一貫して管理する責任がある。" },
  ],
  narrative: [
    { label: "背景", body: "顧客との会話が音声、メール、チャット、SNS、広告へ分散する。" },
    { label: "課題", body: "部門ごとに道具、顧客情報、予算、品質管理が分かれ、一人の顧客に一貫した対応とブランド表現を提供しにくい。" },
    { label: "解決策", body: "一つの顧客接点を対象にデータ、対応経路、品質、AI支援を統合し、解決時間、自動解決、満足度、運用費を測る。" },
    { label: "選定の理由", body: "Salesforce、Adobe、Microsoft、Genesys、NICE、各SNS・コンタクトセンター個別製品と比べ、チャネル、データ、ワークフロー、AI、統制を一つの基盤で運用できるなら選ぶ。" },
  ],
  openingHook: "一人の顧客が電話、メール、SNS、チャットを移動したとき、履歴と次の最適な対応を同じ画面で引き継げますか。",
  valueHypothesis: "対象の顧客接点で解決時間、一次解決率、自動解決率、満足度、応対工数、道具数を導入前後で比べる。",
  objection: "Salesforceや既存のコンタクトセンターとSNS管理で十分。",
  reframe: "機能の重複ではなく、顧客データと業務を何チャネルでも引き継ぎ、品質・AI・統制と総費用を一つの運用にできるかで比較する。",
  facts: [
    { label: "創業", value: "2009年", detail: "Ragy Thomasが自宅の予備部屋から創業。" },
    { label: "FY2027 Q2売上", value: "2.137億ドル", detail: "前年比1%増。サブスクリプション売上は3%増。", source: "finance" },
    { label: "RPO", value: "10.3億ドル", detail: "2026年7月末。前年比11%増。", source: "finance" },
    { label: "従業員", value: "3,258人", detail: "2026年1月末。", source: "finance" },
    { label: "国内事業所", value: "被保険者21人", detail: "gBizINFO。役員・制度対象外・業務委託を含む総従業員数ではない。", source: "company" },
    { label: "日本求人", value: "Genba掲載3件", detail: "東京の導入・運用支援職。", source: "job" },
  ],
  customers: [
    { company: "Honda", products: "Sprinklr Insights・Marketing・Social・Service", outcome: "100人超が100車種以上を分析し、個別3製品を置き換え、オンライン車販売の音声まで統合したと公式事例で紹介。", implication: "日本の大企業で部門・チャネルを越える展開の参照になる。" },
    { company: "IKEA", products: "Sprinklr", outcome: "62市場・460店舗の顧客の声を統合する事例を会社サイトで紹介。", implication: "多国籍・多拠点企業の統制と現場利用を考える参照になる。" },
  ],
  externalSignals: [
    { label: "対日投資", value: "2014年法人・2016年研究開発", detail: "経済産業省の成功事例は、パートナー経由の参入から国内法人と開発拠点へ広げた経緯を示す。", caveat: "現在の人員・売上・投資計画を示すものではない。" },
    { label: "個人情報・AI", value: "委託・越境・人の承認", detail: "顧客の会話と利用者情報を扱うため、処理地域、委託先、権限、保持、削除、AI誤答と人の対応境界を設計する必要がある。", caveat: "Sprinklrの認証取得だけで個別用途の法令適合やリスク低減を保証しない。" },
  ],
  role: "東京の3職種が、CCaaS・統合CXMの要件整理、設計、連携、導入、教育、利用定着、継続改善を担う。",
  organization: "Sprinklr Japan株式会社。gBizINFOの事業所被保険者数21人。",
  careerValue: "大企業の顧客サービス・SNS・マーケティングを、AI、データ、ワークフロー、定着、価値実現まで横断する経験。",
  globalHeadcount: "3,258人（2026年1月末、法定開示）", japanPresence: "Sprinklr Japan株式会社・東京", japanSince: "2014年",
  solutions: [
    { name: "Sprinklr Service", valueProp: "音声、メール、チャット、SNSの顧客対応を統合。", url: "https://www.sprinklr.com/jp/products/customer-service/", competitors: "Genesys、NICE、Salesforce、Amazon Connect。", differentiation: "SNS・デジタル・音声と顧客文脈を同じ基盤で扱う。" },
    { name: "Sprinklr Social / Insights", valueProp: "30以上のデジタル・SNSチャネルの発信、反応、リスニングを管理。", url: "https://www.sprinklr.com/jp/products/social-media-management/", competitors: "Salesforce、Adobe、Hootsuite、Brandwatch。", differentiation: "大企業のグローバル統制と顧客サービスへの連携。" },
  ],
  fitTags: ["Unified CXM", "CCaaS", "Customer Experience", "Professional Services", "AI", "Tokyo"],
  comparisons: [
    { arena: "統合顧客体験", companies: ["Sprinklr", "Salesforce", "Adobe", "Microsoft"], why: "顧客文脈、チャネル、AI、ワークフロー、統制" },
    { arena: "CCaaS", companies: ["Sprinklr", "Genesys", "NICE", "Amazon Connect"], why: "音声・デジタル統合、移行、運用、総費用" },
  ],
}, {
  slug: "sprinklr", leaderName: "Rory Read", leaderLabel: "President / CEO", leaderUrl: "https://www.sprinklr.com/leadership/",
  localName: "未確認", localLabel: "日本事業責任者", localUrl: "https://www.sprinklr.com/jp/",
  companyId: "sprinklr-company", jobId: "sprinklr-job", customersId: "sprinklr-customers", externalId: "sprinklr-external", financeId: "sprinklr-finance",
  targets: ["顧客サービス・コンタクトセンター責任者", "マーケティング・SNS責任者", "CIO・デジタル・データ責任者"],
  heroSummary: "顧客との会話が音声、メール、SNS、チャットに分散し、部門ごとの道具とデータで一貫した対応を作れない課題を解く。顧客サービス、SNS、マーケティング、顧客インサイトを一つのAI基盤でつなぐ。",
  competitors: "Salesforce、Adobe、Microsoft、Genesys、NICE、Amazon Connect、個別SNS管理製品。統合範囲、移行、AI、統制、定着、総費用で比較。",
  feature: "顧客サービス、SNS、マーケティング、顧客インサイトを単一コード基盤とAIで統合する。",
  advantage: "1,677社、59%のFortune 100、90カ国超、150言語の運用と、日本での10年超の導入基盤を持つ。",
  benefit: "解決時間、一次解決率、自動解決率、満足度、応対工数、道具数を改善できる可能性がある。",
  evidence: "Hondaが個別3製品を置き換え、100人超で100車種超の顧客の声を分析する国内公式事例あり。",
  marketVerdict: "21人規模の国内事業所で、新規営業ではなくCCaaS・統合CXMの導入・運用支援を3職種同時募集。受注後の稼働、定着、価値実現を厚くする局面。",
  marketParagraphs: ["顧客の会話が複数チャネルへ広がり、企業は部門別の道具とデータを越えた一貫した対応と統制を求める。", "2027年1月期Q2は売上1%増、サブスクリプション売上3%増と低成長だが、RPOは11%増。日本の導入・運用支援3職種で契約済み需要を稼働・定着へ変えられるかが焦点になる。"],
  cultureHeadline: "小規模な日本組織で、大企業の顧客接点変革を本番稼働まで完遂する。",
  classification: "未確認", displayLabel: "東京勤務", officeDays: "公式求人で明記なし", remoteOnly: "完全リモートの明記なし", flexibility: "顧客対応・出張条件は職種ごとに要確認",
  goodFor: ["大企業の顧客対応基盤を設計から定着まで担いたい人", "顧客サービス、SNS、データ、AIを横断したい人"],
  cautionFor: ["予め固定された単一製品の小規模導入だけを望む人", "顧客の運用変更・部門調整に関与したくない人"],
  unresolved: [
    ["導入", "3職種が導入・運用を担う。", "同時担当案件数、標準期間、解約・適用範囲変更の頻度は。"],
    ["成果", "顧客価値と定着を担う。", "納期、利益率、品質、利用率、満足度、更新のどのKPIで評価されますか。"],
    ["組織", "日本事業所は21人規模。", "営業、技術営業、導入、顧客成功、支援の人数と案件ごとの責任は。"],
    ["製品", "4製品スイートとCCaaSを持つ。", "日本の最優先製品、既存製品からの移行・統合パターン、競合勝因は。"],
    ["報酬", "日本の数値報酬は未掲載。", "基本給、変動給、株式、プロジェクト評価、昇進基準は。"],
  ],
});

if (sprinklr.marketStatus.isPublic) {
  sprinklr.marketStatus.capitalMarketRead = {
    asOf: "2026年9月2日発表のFY2027 Q2（2026年7月末）",
    metrics: [
      { label: "Q2売上", value: "2.137億ドル", change: "+1%", interpretation: "全体成長は低いが、サブスクリプション売上は3%増。", sourceId: "sprinklr-finance" },
      { label: "RPO", value: "10.3億ドル", change: "+11%", interpretation: "契約済み需要は売上より速く増加。稼働と更新への転換が焦点。", sourceId: "sprinklr-finance" },
      { label: "Q2 GAAP営業利益", value: "996万ドル", change: "margin 5%", interpretation: "黒字は維持したが、前年の営業利益1,627万ドルから減少。", sourceId: "sprinklr-finance" },
    ],
    growthDrivers: [
      { title: "AIと大企業の統合CX", evidence: "1,600社超、Fortune 100の59%が利用すると会社公表。", japanMeaning: "日本の導入・運用支援3職種が、契約後の稼働、定着、更新・拡張につなげられるかが重要。", sourceIds: ["sprinklr-finance", "sprinklr-job"] },
    ],
    risks: [
      { title: "低成長・競争・移行難度", disclosedRisk: "成長率の変動、更新・拡張、AI・新製品、第三者基盤、大企業の長い販売周期をリスクとして開示。", companyResponse: "AI開発、大企業利用、RPOと収益性の改善を重視。", genbaRead: "日本では統合範囲、移行期間、利用率、顧客KPI、利益率、更新・拡張を同一案件で確認する。", sourceIds: ["sprinklr-finance", "sprinklr-job"] },
    ],
    japanCommitment: {
      verdict: "2014年の日本法人、21人規模の事業所、Hondaの国内事例、東京の導入・運用3求人を確認。日本売上・顧客数は非公開。",
      summary: "新規営業よりも、大企業のCCaaS・統合CXを本番稼働させる人材を同時採用。",
      signals: [{ year: "2026", title: "東京の導入・運用3求人", detail: "SaaS導入プロジェクト、CCaaS導入、継続運用改善を公式募集。", sourceIds: ["sprinklr-job"] }],
      unknowns: ["日本売上・顧客数", "日本の職種別人数・離職", "案件別の導入期間・利益率・更新貢献"],
    },
    scenarios: [
      { scenario: "基本", title: "RPOを稼働と更新へ転換", body: "導入・運用支援が統合CXを本番稼働させ、サブスクリプション成長を維持する。" },
      { scenario: "上振れ", title: "AI顧客対応の統合基盤化", body: "音声・デジタル・SNS・顧客データを跨ぐ業務が大企業の標準になる。" },
      { scenario: "下振れ", title: "統合コストが効果を上回る", body: "移行が長期化し、利用・満足度・工数の改善を示せなければ、CRM・CCaaS・SNSの既存構成が残る。" },
    ],
    sourceIds: ["sprinklr-finance", "sprinklr-job", "sprinklr-customers", "gbiz-headcount-sprinklr"],
  };
}

const decagon = buildPreEntryIntelligence({
  checkedAt, slug: "decagon", name: "Decagon", homepage: "https://decagon.ai/about", growthUrl: "https://decagon.ai/blog/series-d-announcement", careersUrl: "https://decagon.ai/careers", customersUrl: "https://decagon.ai/case-studies", trustUrl: "https://decagon.ai/security", apacUrl: "https://decagon.ai/blog/bringing-the-ai-concierge-to-australia", externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html", linkedinUrl: "https://www.linkedin.com/company/decagon-ai/",
  salesSnapshot: "顧客サービス、CX、コンタクトセンター責任者へ、音声、チャット、メールで回答だけでなく業務実行まで担うAIコンシェルジュを提供する。従来型チャットボットで解決できず人へ転送する課題、チャネルごとに会話が切れる課題、改善のたびに開発者待ちになる課題を解く。",
  growthSummary: "2026年1月に2.5億ドルを調達し、半年未満で評価額を約3倍の45億ドルへ引き上げたと会社発表。前事業年度にAvis Budget Group、Block、Deutsche Telekom等100社超の企業顧客が新規導入。",
  verdict: "進出可能性は中。Sydney拠点と豪州の販売・技術体制を優先しており、日本固有の需要検証は未確認",
  entryNarrative: "Decagonは企業向け顧客対応AIで急成長し、2026年にSydney拠点と豪州の営業・技術営業を立ち上げた。公式事例のHunter Douglasは日本を含む11カ国で事業を営むが、展開事例は英国・米国・豪州・フランスで、日本導入は確認できない。日本法人、国内拠点、日本求人、日本語製品・支援、国内顧客事例は未確認。Sydneyから日本の有償顧客と継続利用を再現できるまで進出とは扱わない。",
  headcount: "201〜500人規模", headcountDetail: "LinkedIn企業ページの会社規模レンジ。公式の厳密値ではない。",
  apacPresence: "2026年4月にSydney拠点を開設し、豪州でStrategic Accounts、Enterprise AE、Solutions Engineer等を公式募集。",
  productLanguage: "音声、チャット、メールと複数地域への展開実績は確認できるが、日本語の精度、UI、導入、支援、国内データ要件の同等性は未確認。",
  milestones: [
    { year: "2023", label: "創業", detail: "Jesse ZhangとAshwin Sreenivasが、従来の決定木型チャットボットが顧客の信頼を損なう問題から創業。", source: "company" },
    { year: "2024", label: "ステルスから登場", detail: "Seed 500万ドルとSeries A 3,000万ドルを発表。", source: "growth" },
    { year: "2024", label: "Series B", detail: "6,500万ドル、累計1億ドルを調達。", source: "growth" },
    { year: "2026.01", label: "Series D", detail: "2.5億ドル、45億ドル評価。", source: "growth" },
    { year: "2026.04", label: "Sydney拠点", detail: "豪州の顧客対応と営業・技術営業の採用を開始。", source: "apac" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Hunter Douglasは電話・メールでの定型的な問い合わせが購入体験を遮る課題から導入し、AI完結会話から100万ドルの売上、非利用者比85%高い平均注文額を公式事例で公表。" },
    { title: "製品の成り立ちから見る課題", body: "従来の決定木型チャットボットが解決できず、かえって顧客の信頼を損なう問題から、会話、業務実行、試験、品質改善を一つにするAI基盤を作った。" },
    { title: "外部環境の要求から見る課題", body: "企業は24時間対応と生産性を求める一方、個人情報、業務権限、誤答、人への引継ぎ、ブランド品質、模型委託先を運用で説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "問い合わせ量とチャネルが増え、顧客は24時間の速い解決を期待する。" },
    { label: "課題", body: "従来型ボットは定型回答と転送に留まり、顧客ごとの文脈、業務実行、複数チャネルの継続性を保ちにくい。" },
    { label: "解決策", body: "限定した問い合わせでAIの回答・業務実行・人への引継ぎを導入し、自動解決、誤答、解決時間、満足度、費用を測る。" },
    { label: "選定の理由", body: "Salesforce、Intercom、Zendesk、Sierra、コンタクトセンター各社、内製AIと比べ、業務実行、試験、品質改善、人の監督、複数チャネルの運用が優位なら選ぶ。" },
  ],
  openingHook: "現在の自動応答のうち、人へ転送せず顧客の用件を正しく完了した比率を把握していますか。",
  valueHypothesis: "対象業務で自動解決率、人への転送、誤答、解決時間、満足度、業務完了、単位費用を比べる。",
  objection: "既存のCRM・顧客対応基盤のAIか内製で十分。",
  reframe: "デモの自然さではなく、顧客固有のデータと業務権限で実際の用件を完了し、誤りを測り、人が改善し続けられるかで比較する。",
  facts: [
    { label: "創業", value: "2023年", detail: "Jesse ZhangとAshwin Sreenivasが共同創業。", source: "company" },
    { label: "Series D", value: "2.5億ドル", detail: "2026年1月。", source: "growth" },
    { label: "評価額", value: "45億ドル", detail: "Series Dと同時に会社発表。", source: "growth" },
    { label: "新規企業顧客", value: "100社超", detail: "前事業年度の会社発表。", source: "growth" },
    { label: "APAC拠点", value: "Sydney", detail: "2026年4月開設。", source: "apac" },
    { label: "日本求人", value: "0件", detail: "公式Careersと140件を確認し、Japan・Tokyo勤務は確認できず。", source: "careers" },
  ],
  customers: [
    { company: "Hunter Douglas", products: "Chat・Email・Voice", outcome: "AI完結会話から100万ドルの売上、非利用者比85%高い平均注文額、受信の平均40%自動対応を公式事例で紹介。", implication: "問い合わせ費用だけでなく購入と売上までの投資理由を作れる。" },
    { company: "ClassPass", products: "Decagon", outcome: "初期想定の10倍の自動解決、顧客対応費95%減を公式事例で紹介。", implication: "対応数と単位費用の改善の参照になる。" },
    { company: "Rippling", products: "Decagon", outcome: "複数製品・利用者類型に合わせた対応で自動解決を32%向上と公式事例で紹介。", implication: "製品群と利用者文脈が複雑な企業の参照になる。" },
  ],
  externalSignals: [
    { label: "AIガバナンス", value: "人間中心・リスク管理", detail: "顧客対応AIは個人へ直接影響し、業務実行も行うため、利用目的、権限、誤答、人への引継ぎ、記録を運用に組み込む必要がある。", caveat: "Decagonの導入だけでガイドライン適合を保証しない。" },
    { label: "越境データ", value: "処理地域・委託先・保持", detail: "顧客の会話、認証情報、業務データを扱うため、処理地域と多数の基盤・模型委託先の管理が必要。", caveat: "要件は業界、データ、契約、リスクで異なる。" },
  ],
  entryAssessment: {
    verdict: "進出可能性は中。豪州の顧客と運用の再現後に、日本語と国内導入の負荷を正当化できるかが分岐点",
    factSignals: [
      { title: "Sydney拠点を開設", body: "2026年4月に豪州で現地拠点を開設し、APACの顧客対応拠点と明記。", sourceIds: ["apac"] },
      { title: "豪州で顧客接点職を採用", body: "Strategic Accounts、Enterprise AE、Solutions Engineer等の公式求人があり、販売と技術検証を現地化している。", sourceIds: ["careers", "apac"] },
      { title: "成長と投資余力", body: "2.5億ドル調達、45億ドル評価、100社超の新規企業顧客を会社発表。", sourceIds: ["growth"] },
      { title: "複数地域への展開実績", body: "顧客事例は英国、米国、豪州、フランス等へAIエージェントを現地化して展開している。", sourceIds: ["customers"] },
    ],
    hurdles: [
      { title: "国内の有償導入実績がない", body: "日本企業名、用途、成果を示す公式事例を確認できない。", sourceIds: ["customers"] },
      { title: "日本語と業務ローカライズ", body: "日本語音声・文章の精度、敬語、商習慣、業界別業務での実績は未確認。", sourceIds: ["company", "careers"] },
      { title: "導入・支援の現地体制", body: "設計、連携、試験、品質改善、障害対応を日本語・日本時間で担う人材が必要。", sourceIds: ["careers", "apac"] },
      { title: "データ・AI審査", body: "処理地域、多数の再委託先、零日保持、業務権限、誤答、人の引継ぎを国内顧客ごとに説明する必要。", sourceIds: ["trust", "external"] },
    ],
    readinessConditions: [
      { title: "日本の有償顧客", body: "Sydneyから国内企業の本番導入と更新を複数再現する。" },
      { title: "日本語の品質", body: "音声、文章、商習慣、業務完了の品質を比較可能な形で示す。" },
      { title: "現地導入・支援", body: "営業だけでなく、技術営業、導入、顧客成功、支援を日本語で提供する。" },
      { title: "データ審査", body: "処理地域、委託先、権限、保持、削除、人の承認を国内要件に合わせる。" },
      { title: "国内契約基盤", body: "契約、請求、雇用、税務・労務の責任主体を明示する。" },
    ],
    watchSignals: ["Japan・Tokyo求人", "日本法人・国内拠点", "日本企業の公式顧客事例", "日本語の音声・文章ベンチマーク", "APAC求人の日本担当", "国内CCaaS・SIパートナー"],
  },
  sourceIds: ["company", "growth", "careers", "customers", "trust", "apac", "external", "linkedin"],
  salesMotion: "Sydneyの営業・技術営業が大企業のCX責任者に入り、AIの対応と業務完了を限定運用で検証し、音声・チャット・メールへ広げる企業向け販売。",
  careerValue: "顧客対応AI、業務設計、音声・複数チャネル、品質・AI統制、APACからの国別立ち上げを横断する可能性。",
  leader: { name: "Jesse Zhang", role: "Co-founder / CEO", read: "従来型チャットボットが顧客の信頼を損なう問題から、企業の複雑な用件を完了するAIエージェントを共同創業。" },
  solutions: [
    { name: "AI Concierge", valueProp: "音声、チャット、メール、SMSで顧客に応答し業務を実行。", url: "https://decagon.ai/", competitors: "Salesforce、Intercom、Zendesk、Sierra、内製AI。", differentiation: "会話を越えた業務実行、複数チャネルの記憶、導入支援。" },
    { name: "Agent Operating Procedures / Duet", valueProp: "CX部門が自然言語でAIの業務手順を設計・試験・改善。", url: "https://decagon.ai/duet", competitors: "プロンプト管理、ノーコードボット、内製。", differentiation: "業務所有者が改善し、試験と品質監視まで同じ運用で行う。" },
  ],
  fitTags: ["日本未進出", "AI Agents", "Customer Experience", "Voice AI", "Sydney", "APAC"],
  comparisons: [
    { arena: "顧客対応AI", companies: ["Decagon", "Sierra", "Intercom", "Salesforce"], why: "業務完了、品質、人の監督、導入速度" },
    { arena: "コンタクトセンターAI", companies: ["Decagon", "Genesys", "NICE", "Amazon Connect"], why: "音声・デジタル統合、業務連携、運用責任" },
  ],
});

applyStandard(decagon, buildCompactPatch({
  slug: "decagon", leaderName: "Jesse Zhang", leaderLabel: "Co-founder / CEO", leaderUrl: "https://decagon.ai/about",
  localName: "未確認", localLabel: "日本・APAC責任者", localUrl: "https://decagon.ai/blog/bringing-the-ai-concierge-to-australia",
  companyId: "decagon-company", jobId: "decagon-careers", customersId: "decagon-customers", externalId: "decagon-external", financeId: "decagon-growth",
  targets: ["顧客サービス・CX責任者", "コンタクトセンター・業務責任者", "CIO・AI・デジタル責任者"],
  heroSummary: "従来型チャットボットで解決できず人へ転送し、チャネルごとに会話と業務が切れる課題を解く。AIが音声、チャット、メールで顧客の用件を理解し、回答から業務完了までを担う。",
  competitors: "Salesforce、Intercom、Zendesk、Sierra、Genesys、NICE、Amazon Connect、内製AI。業務完了、品質、統制、導入速度、総費用で比較。",
  feature: "音声、チャット、メールで、顧客固有のデータと業務手順に基づき回答・業務実行・人への引継ぎを行う。",
  advantage: "業務所有者が手順を編集でき、会話データ、試験、品質監視、権限、複数チャネルを同じ運用で持つ。",
  benefit: "自動解決率、人への転送、誤答、解決時間、満足度、売上、単位費用を改善できる可能性がある。",
  evidence: "Hunter DouglasのAI完結会話から100万ドルの売上、ClassPassの顧客対応費95%減、Ripplingの自動解決32%向上を公式事例で紹介。",
  marketVerdict: "SydneyでAPACの営業・技術営業を先行している。日本法人、国内顧客、日本求人、日本語の製品・支援は未確認で、正式進出とは扱わない。",
  marketParagraphs: ["企業は顧客対応の24時間化と生産性を求める一方、個人情報、業務権限、誤答、人への引継ぎ、ブランド品質を管理する必要がある。", "今後3〜5年の日本進出は、Sydneyから国内の有償顧客と更新を再現し、日本語の音声・業務品質、現地導入支援、データ審査を満たせるかが分岐点になる。"],
  cultureHeadline: "SydneyからAPACの顧客接点と導入の型を作る成長局面。",
  classification: "ハイブリッド", displayLabel: "Sydney拠点／Australia", officeDays: "豪州求人は職種によりHybrid・On-site", remoteOnly: "日本居住の完全リモートではない", flexibility: "APACの顧客対応・出張を含む可能性",
  goodFor: ["顧客対応AIのAPAC市場を作りたい人", "デモでなく業務完了・品質・統制を大企業で実装したい人"],
  cautionFor: ["現時点で日本居住者向け求人を求める人", "日本語の製品・導入・支援体制が完成した環境を必須とする人"],
  unresolved: [
    ["日本進出", "SydneyをAPAC拠点として開設。", "日本法人・専任組織を置く顧客数、売上、更新、提携先の条件は。"],
    ["日本語", "複数地域の現地化実績あり。", "日本語の音声認識、応答、敬語、業務完了をどの基準で評価しますか。"],
    ["データ", "複数の基盤・模型委託先を利用。", "日本顧客向けの処理地域、委託先、保持、削除、監査、モデル切替え条件は。"],
    ["導入", "豪州で営業・技術営業を採用。", "日本の技術検証、ワークフロー設計、品質改善、障害対応を誰が日本語で担いますか。"],
    ["競合", "急成長中の企業向けAI。", "Salesforce、Intercom、Sierra、各CCaaS、内製AIに対する勝因・敗因と総費用は。"],
  ],
}));
decagon.researchedAt = checkedAt;
if (decagon.cultureDeepDive) decagon.cultureDeepDive.researchedAt = "2026.09.10";

function addGbizAudit(intelligence: CompanyPublicIntelligence, input: { slug: string; label: string; url: string; value: string; detail: string; office: string; since: string }) {
  const sourceId = `gbiz-headcount-${input.slug}`;
  intelligence.sources.push({ id: sourceId, label: input.label, url: input.url, kind: "公的機関", scope: "日本法人・事業所情報・被保険者数", checkedAt });
  intelligence.companyStats.japanHeadcount = { value: input.value, detail: input.detail, sourceId };
  intelligence.companyStats.japanOffice = { value: input.office, detail: "公式求人・会社情報と法人検索で確認できる範囲。", sourceId };
  intelligence.companyStats.japanSince = { value: input.since, detail: "法人設立年と営業開始年が異なる場合がある。", sourceId };
}

addGbizAudit(recordedFuture, { slug: "recorded-future", label: "gBizINFO レコーデッド・フューチャー・ジャパン株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=8010001193826", value: "24人", detail: "厚生年金保険・健康保険適用事業所の被保険者数。役員・制度対象外・業務委託等を含む総従業員数ではない。", office: "東京都千代田区丸の内・JPタワー14階", since: "2018年" });
addGbizAudit(sprinklr, { slug: "sprinklr", label: "gBizINFO Sprinklr Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=4010401115581", value: "21人", detail: "厚生年金保険・健康保険適用事業所の被保険者数。役員・制度対象外・業務委託等を含む総従業員数ではない。", office: "東京都港区六本木・住友不動産六本木通ビル", since: "2014年" });
addGbizAudit(decagon, { slug: "decagon", label: "gBizINFO Decagon法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", value: "対象法人未特定", detail: "米国Decagonと結びつく日本法人・事業所を特定できず、日本法人での想定従業員数を0人とは扱わない。", office: "日本法人住所なし", since: "日本拠点進出は未確認" });

export const daily20260910IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { "recorded-future": recordedFuture, sprinklr, decagon };

export function applyDaily20260910Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.cribl;
  if (!intelligence) return;
  const detail = "Delivery Managerの公式Greenhouse求人ID 6137610004が現行ボードから消失し、直接URLも404となったためGenba掲載から除外。これだけで日本の採用停止や事業縮小を示すものではない。";
  intelligence.researchedAt = checkedAt;
  intelligence.facts = intelligence.facts.map((fact) => /日本.*求人|求人.*日本/.test(fact.label)
    ? { ...fact, value: "0件", detail: `${detail} 2026年9月10日確認。` }
    : fact);
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => !/Delivery Manager|東京.*求人/.test(`${item.label}${item.detail}`)),
    { year: "2026.09.10", label: "東京Delivery Manager求人終了", detail, sourceId: "cribl-careers" },
  ];
}
