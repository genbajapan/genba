import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-09-01";

function build(profile: Profile, patch: CompactPatchInput) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.09.01";
  return intelligence;
}

const sitecoreIntelligence = build({
  checkedAt, slug: "sitecore", name: "Sitecore",
  jobUrl: "https://jobs.jobvite.com/sitecore/job/oWZjzfwx",
  officialUrl: "https://www.sitecore.com/company/sitecore-story",
  customersUrl: "https://www.sitecore.com/solutions/customers/fujitsu/fujitsu-transforms-web-production-with-sitecore",
  externalUrl: "https://www.meti.go.jp/policy/it_policy/investment/dgc/dgc.html",
  financeUrl: "https://www.sitecore.com/company/newsroom/press-releases/2024/10/sitecore-surpasses-500m-usd-in-arr",
  salesSnapshot: "Web、アプリ、メールなどに分散したコンテンツと顧客データを、担当部門が開発待ちを減らしながら一貫した体験へ変える課題を解く。作成、配信、パーソナライズ、分析をつなぎ、顧客接点の速度と成果を高める。",
  growthSummary: "会社公式は2024年度にARR 5億ドル超、2026年に25周年、世界3,000超のブランド利用を公表。日本には2009年進出し東京拠点と現行営業開発求人を確認したが、日本売上・更新率は非公開。",
  ipoSummary: "EQT傘下の非公開企業。IPO時期と日本単体の売上・顧客数・更新率は公表されていない。",
  milestones: [
    { year: "1998", label: "前身創業", detail: "5人がWeb制作会社Pentiaを創業し、反復作業を自動化するコードを開発。", source: "company" },
    { year: "2001", label: "Sitecore設立", detail: "マーケターが開発者へ過度に依存せずコンテンツを作れるCMSとして会社化。", source: "company" },
    { year: "2009", label: "日本進出", detail: "会社沿革で日本市場への進出を公表。", source: "company" },
    { year: "2024", label: "ARR 5億ドル超", detail: "会社公式が年次経常収益の節目を公表。", source: "finance" },
    { year: "2026.09", label: "日本営業開発採用", detail: "東京のSales Development Representativeを公式確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Fujitsuは多数の国・部門で分散したWeb制作を標準化し、顧客接点の改善と公開速度を両立する必要があった。" },
    { title: "製品の成り立ちから見る課題", body: "Web制作の反復作業を減らすコードから始まり、コンテンツ、顧客データ、パーソナライズ、AIを一つの運用へ広げた。" },
    { title: "外部環境の要求から見る課題", body: "顧客接点が増えAI検索も広がるなか、企業は正確で一貫した情報を速く出し、個人情報・権限・ブランド統制も説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "国・事業・チャネルごとにコンテンツと顧客データが分かれ、制作と承認に時間がかかる。" },
    { label: "課題", body: "個別最適のCMSや施策を重ねるほど、同じ情報の重複、更新漏れ、体験の不一致、開発待ちが増える。" },
    { label: "解決策", body: "一つの顧客導線で作成から配信、個別化、計測までをつなぎ、公開時間、再利用率、転換率を導入前後で比較する。" },
    { label: "選定の理由", body: "Adobe、Optimizely、Contentful等との比較で、既存資産の移行、統合範囲、運用負荷、パーソナライズ成果に優位がある場合に選ぶ。" },
  ],
  openingHook: "一つの顧客向け情報をWeb、アプリ、メールへ正確に出すまで、何部門と何日が必要ですか。",
  valueHypothesis: "対象導線で公開までの日数、コンテンツ再利用率、開発依頼、更新漏れ、個別化率、転換率を導入前後で比較する。",
  objection: "既存CMSと生成AIで十分で、大規模なデジタル体験基盤は重い。",
  reframe: "機能数ではなく、既存資産を生かしながら制作・承認・配信・計測を何工程減らし、成果と統制を同時に改善できるかで比べる。",
  facts: [
    { label: "創業", value: "2001年", detail: "Web制作の自動化コードを原点に会社化。" },
    { label: "利用規模", value: "3,000超のブランド", detail: "2026年の会社公式。" },
    { label: "ARR", value: "5億ドル超", detail: "2024年度の会社公式。", source: "finance" },
    { label: "日本進出", value: "2009年", detail: "会社沿革で確認。" },
    { label: "国内事例", value: "Fujitsu", detail: "顧客エンゲージメント33%増を会社事例で公表。", source: "customers" },
    { label: "日本求人", value: "1件", detail: "Sales Development Representativeを確認。", source: "job" },
  ],
  customers: [
    { company: "Fujitsu", products: "Sitecore Experience Platform", outcome: "会社事例は企業サイトの顧客エンゲージメント33%増を公表。", implication: "大規模Web運用の標準化と顧客接点改善を同じKPIで追える。" },
    { company: "Mahindra", products: "Sitecore", outcome: "会社公式はWeb機能開発の高速化と顧客導線改善を紹介。", implication: "複数事業・製品の情報運用に適用できる。" },
  ],
  externalSignals: [
    { label: "DX経営", value: "顧客価値と運用変革", detail: "経産省のDX認定制度はデジタル技術を前提とした経営変革を扱う。", caveat: "個別製品の導入効果を保証しない。" },
    { label: "AI検索", value: "正確な情報供給", detail: "検索・対話型AIへ接点が広がり、正本管理と更新速度が重要になる。", caveat: "流入・転換への効果は自社計測が必要。" },
  ],
  role: "日本の見込み顧客を調査し、電話・メール・SNS・イベントで接点を作り、課題を営業機会へ変えるSales Development Representative。",
  organization: "東京拠点から営業、Marketing、技術営業、Partnerと連携する。日本の正確な組織人数と担当範囲は非公開。",
  careerValue: "大企業のコンテンツ・顧客体験・AI投資を経営課題へ翻訳し、Enterprise商談の入口を作る経験。",
  globalHeadcount: "1,001〜5,000人規模（LinkedIn公開レンジ）",
  japanPresence: "Sitecore株式会社・東京オフィス", japanSince: "2009年に日本進出",
  solutions: [
    { name: "SitecoreAI", valueProp: "コンテンツ、データ、個別化、AI業務を統合。", url: "https://www.sitecore.com/", competitors: "Adobe Experience Cloud、Optimizely。", differentiation: "Enterpriseのコンテンツ運用と個別化を同じ基盤で扱う。" },
    { name: "XM Cloud", valueProp: "クラウド型CMSで制作と配信を高速化。", url: "https://www.sitecore.com/products/content-management", competitors: "Contentful、Sanity、Adobe Experience Manager。", differentiation: "既存のSitecore資産と構成可能な配信をつなぐ。" },
    { name: "Personalize / CDP", valueProp: "顧客データを使い接点を個別化。", url: "https://www.sitecore.com/products/personalization", competitors: "Adobe、Salesforce、Optimizely。", differentiation: "コンテンツ運用と実験・個別化を連携する。" },
  ],
  fitTags: ["DXP", "CMS", "Enterprise", "AI", "Sales Development", "Tokyo"],
  comparisons: [
    { arena: "Enterprise DXP", companies: ["Sitecore", "Adobe", "Optimizely"], why: "統合範囲、運用負荷、個別化" },
    { arena: "Composable CMS", companies: ["Sitecore", "Contentful", "Sanity"], why: "開発自由度、既存資産、配信速度" },
  ],
}, {
  slug: "sitecore", leaderName: "Dave O'Flanagan", leaderLabel: "CEO", leaderUrl: "https://www.sitecore.com/company/newsroom/press-releases/2024/04/dave-oflanagan-appointed-ceo-of-sitecore",
  localName: "未確認", localLabel: "日本事業責任者", localUrl: "https://www.sitecore.com/company/office-locations",
  companyId: "sitecore-company", jobId: "sitecore-job", customersId: "sitecore-customers", externalId: "sitecore-external", financeId: "sitecore-finance",
  targets: ["CMO・デジタル責任者", "コンテンツ・顧客体験責任者", "CIO・Web基盤責任者"],
  heroSummary: "分散したコンテンツと顧客データを、担当部門が開発待ちを減らしながら一貫した体験へ変える課題を解く。作成、配信、個別化、分析をつなぎ、顧客接点の速度と成果を高める。",
  competitors: "Adobe、Optimizely、Contentful、Sanity、内製CMS。既存資産、統合、運用、個別化、総コストで比較する。",
  feature: "コンテンツ管理、顧客データ、個別化、AIによる制作・運用を同じデジタル体験基盤でつなぐ。",
  advantage: "25年のEnterprise CMS基盤と顧客データ・個別化を生かし、複数チャネルの制作から成果計測までを広く扱う。",
  benefit: "開発待ちと重複作業を減らし、情報の一貫性、公開速度、顧客エンゲージメントを高められる可能性がある。",
  evidence: "Fujitsu公式事例で企業サイトの顧客エンゲージメント33%増を公表。ただし顧客側施策を含む事例値で、全案件への再現を保証しない。",
  marketVerdict: "日本進出17年、東京拠点、国内事例、現行営業開発求人を確認。成熟した導入基盤をAI時代の情報運用と成果へ移せるかが焦点。",
  marketParagraphs: ["顧客接点と生成AIの利用が増え、正確なコンテンツを速く再利用しながら権限・ブランドを守る需要は続く。", "今後3〜5年は既存CMS更新だけでなく、AI検索を含む新接点で情報の正確性と転換成果を証明できるかが成長を分ける。"],
  cultureHeadline: "長いEnterprise基盤をAI時代へ更新し、日本の商談入口を作る営業開発。",
  classification: "出社中心", displayLabel: "東京勤務", officeDays: "出社頻度は未確認", remoteOnly: "full remote表記なし", flexibility: "顧客訪問・時差・出社条件は面接確認",
  goodFor: ["Enterpriseの顧客体験投資を経営課題へ翻訳したい人", "営業開発から複雑商談の型を学びたい人"],
  cautionFor: ["純粋な新規市場の0→1だけを望む人", "短い定型商談だけを望む人"],
  unresolved: [["営業開発KPI", "日本向けSDRを採用。", "商談化、受注寄与、自己開拓、Marketing起点の目標と達成率は。"], ["市場構成", "日本進出と国内事例を確認。", "既存・新規、製品別、業界別の日本pipelineは。"], ["AI移行", "SitecoreAIへ統合。", "既存顧客の移行率、更新、追加購入、主な障壁は。"], ["支援体制", "東京拠点あり。", "AE、SE、CS、Partner、Marketingの人数と責任境界は。"], ["報酬・昇進", "給与とquotaは非公開。", "pay mix、ramp、達成率、AEへの昇進基準は。"]],
});

sitecoreIntelligence.sources.push({ id: "gbiz-headcount-sitecore", label: "gBizINFO Sitecore株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=8010001129664", kind: "公的機関", scope: "日本法人・事業所被保険者数", checkedAt });
sitecoreIntelligence.sources.push({ id: "sitecore-linkedin", label: "Sitecore LinkedIn会社ページ", url: "https://www.linkedin.com/company/sitecore", kind: "外部集計", scope: "グローバル従業員規模", checkedAt });
sitecoreIntelligence.companyStats.globalHeadcount = { value: "1,001〜5,000人規模", detail: "LinkedIn公開レンジ。会社公式の厳密な現員ではない。", sourceId: "sitecore-linkedin" };
sitecoreIntelligence.companyStats.japanHeadcount = { value: "gBizINFO事業所人数の掲載なし", detail: "日本法人は確認したが、対応する事業所被保険者数の掲載を確認できず、0人とは扱わない。", sourceId: "gbiz-headcount-sitecore" };

const liferayIntelligence = build({
  checkedAt, slug: "liferay", name: "Liferay",
  jobUrl: "https://jobs.jobvite.com/liferay/job/oCrDAfw0",
  officialUrl: "https://www.liferay.com/company/our-story",
  customersUrl: "https://www.liferay.com/es/resource-hub/case-studies/tokyo-marine-nichido",
  externalUrl: "https://www.meti.go.jp/policy/it_policy/investment/dgc/dgc.html",
  financeUrl: "https://www.liferay.com/w/liferay-appoints-brian-chan-as-ceo",
  salesSnapshot: "顧客、取引先、従業員向けのWeb窓口が個別に増え、既存システムとの統合と継続改善が重くなる課題を解く。オープンソースの柔軟性を生かし、複雑なポータルと業務導線を一つのデジタル体験基盤へまとめる。",
  growthSummary: "公式求人は世界1,000人超、自力資本・黒字、公式発表は世界1,200超の顧客組織を公表。日本法人は2012年設立で東京をAPAC本部とするが、日本売上・更新率は非公開。",
  ipoSummary: "自力資本で黒字の非公開企業。IPO計画、日本売上、製品別ARRは公表されていない。",
  milestones: [
    { year: "2000", label: "個人プロジェクト", detail: "Brian Chanが非営利組織向けの共同作業基盤としてLiferay Portalを開発。", source: "company" },
    { year: "2004", label: "Liferay創業", detail: "オープンソースの企業向けポータル会社として設立。", source: "company" },
    { year: "2012", label: "日本法人設立", detail: "日本法人を設立し、東京をAPAC本部として展開。", source: "company" },
    { year: "2023", label: "創業者がCEO", detail: "創業者Brian ChanがCEOへ就任。", source: "finance" },
    { year: "2026.09", label: "Sales Engineer採用", detail: "東京の現行公式求人を確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "東京海上日動は多数の利用者、文書、マニュアルを扱う業務ポータルを安定運用し、情報探索と日常業務を支える必要があった。" },
    { title: "製品の成り立ちから見る課題", body: "非営利組織向けに友人を助けるポータルから始まり、既存投資を生かすオープンな統合基盤へ発展した。" },
    { title: "外部環境の要求から見る課題", body: "顧客・取引先・従業員のデジタル窓口が増える一方、企業は本人確認、権限、業務システム連携、継続改善を安全に運用する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "顧客・取引先・従業員ごとにポータルやWebサイトが増え、情報と手続きが分散する。" },
    { label: "課題", body: "個別開発を重ねると、認証、検索、コンテンツ、既存システム連携、改修の負担が積み上がる。" },
    { label: "解決策", body: "一つの対象ポータルで認証、情報、手続き、既存システム連携をまとめ、完了率、問い合わせ、改修時間を比較する。" },
    { label: "選定の理由", body: "Adobe、Sitecore、Optimizely、内製との比較で、オープン性、既存資産の再利用、複雑なポータル、総保有コストに優位がある場合に選ぶ。" },
  ],
  openingHook: "顧客や取引先が一つの手続きを終えるまで、何個の画面と社内システムを行き来していますか。",
  valueHypothesis: "対象ポータルで手続き完了率、検索成功率、問い合わせ、開発・改修時間、既存部品の再利用率を導入前後で比較する。",
  objection: "既存CMSや内製ポータルで十分で、新たなDXPは複雑になる。",
  reframe: "画面の新しさではなく、認証・情報・業務連携を何度作り直さずに済み、改修速度と総コストをどう変えるかで比較する。",
  facts: [
    { label: "創業", value: "2004年", detail: "Portalの個人プロジェクトを会社化。" },
    { label: "世界従業員", value: "1,000人超", detail: "現行公式求人。", source: "job" },
    { label: "顧客組織", value: "1,200超", detail: "会社公式発表。", source: "finance" },
    { label: "資本・収益", value: "自力資本・黒字", detail: "現行公式求人。", source: "job" },
    { label: "国内規模", value: "44人", detail: "gBizINFO事業所被保険者数。", source: "company" },
    { label: "日本求人", value: "1件", detail: "対象職種Sales Engineerを確認。", source: "job" },
  ],
  customers: [
    { company: "東京海上日動", products: "Liferay DXP", outcome: "会社事例は100万人超の利用者、10万文書、1,200マニュアルを扱う基盤を紹介。", implication: "大規模な社内情報・業務ポータルの参照事例。" },
    { company: "郵船ロジスティクス", products: "Liferay", outcome: "会社の顧客事例一覧で国内企業のデジタル基盤として掲載。", implication: "複数地域・業務の接点統合を検討できる。" },
  ],
  externalSignals: [
    { label: "DX経営", value: "既存資産を生かす変革", detail: "経産省のDX制度は顧客価値と業務・システム変革を一体で扱う。", caveat: "Liferay単独の成果を保証しない。" },
    { label: "ポータル需要", value: "複数利用者の統合窓口", detail: "顧客・取引先・従業員の自己解決を進めるほど、認証・権限・連携の共通基盤が必要になる。", caveat: "対象業務ごとの費用対効果を検証する。" },
  ],
  role: "顧客の業務・技術要件を整理し、提案、デモ、RFI・RFP回答を通じてLiferay DXPの技術選定を前へ進めるSales Engineer。",
  organization: "東京のAPAC本部で営業、Partner、技術、Productと連携。求人は最大30%の出張を示す。",
  careerValue: "オープンソースDXP、複雑なポータル、既存システム統合を技術提案と事業成果へ翻訳する経験。",
  globalHeadcount: "1,000人超", japanPresence: "日本ライフレイ株式会社・東京（APAC本部）", japanSince: "2012年に日本法人設立",
  solutions: [
    { name: "Liferay DXP", valueProp: "顧客・取引先・従業員向けのデジタル窓口を構築。", url: "https://www.liferay.com/products/dxp", competitors: "Adobe、Sitecore、Optimizely。", differentiation: "オープンソースと既存システム統合の柔軟性。" },
    { name: "Liferay Experience Cloud", valueProp: "DXPをクラウドで運用。", url: "https://www.liferay.com/products/experience-cloud", competitors: "SaaS CMS、cloud PaaS。", differentiation: "Liferayの拡張性と管理運用を組み合わせる。" },
    { name: "Customer / Supplier Portal", valueProp: "自己解決と業務手続きを一つの窓口へ集約。", url: "https://www.liferay.com/solutions/customer-portal", competitors: "Salesforce Experience Cloud、内製。", differentiation: "B2Bの複雑な権限・業務連携へ対応。" },
  ],
  fitTags: ["DXP", "Open Source", "Portal", "Enterprise", "Sales Engineering", "Tokyo"],
  comparisons: [
    { arena: "Enterprise DXP", companies: ["Liferay", "Adobe", "Sitecore"], why: "柔軟性、統合、運用" },
    { arena: "Portal", companies: ["Liferay", "Salesforce", "Microsoft"], why: "業務連携、権限、総コスト" },
  ],
}, {
  slug: "liferay", leaderName: "Brian Chan", leaderLabel: "Founder & CEO", leaderUrl: "https://www.liferay.com/company/our-story",
  localName: "未確認", localLabel: "日本事業責任者", localUrl: "https://www.liferay.com/blog/liferay-experience/an-insider-look-at-the-future-of-digital-experience-in-japan",
  companyId: "liferay-company", jobId: "liferay-job", customersId: "liferay-customers", externalId: "liferay-external", financeId: "liferay-finance",
  targets: ["CIO・DX責任者", "顧客・取引先ポータル責任者", "従業員体験・業務基盤責任者"],
  heroSummary: "顧客、取引先、従業員向けのWeb窓口が個別に増え、既存システムとの統合と継続改善が重くなる課題を解く。オープンソースの柔軟性を生かし、複雑なポータルと業務導線を一つへまとめる。",
  competitors: "Adobe、Sitecore、Optimizely、Salesforce、Microsoft、内製。統合、権限、再利用、改修速度、総コストで比較する。",
  feature: "オープンソースのDXPで、コンテンツ、認証、検索、手続き、既存システム連携を組み合わせたポータルを作る。",
  advantage: "既存投資を再利用する思想と拡張性を持ち、定型Webだけでなく顧客・取引先・従業員の複雑な業務導線を扱える。",
  benefit: "重複開発と問い合わせを減らし、利用者の自己解決、手続き完了、改修速度を高められる可能性がある。",
  evidence: "東京海上日動の公式事例で100万人超の利用者、10万文書、1,200マニュアルを扱う基盤を紹介。成果は顧客側の運用を含む。",
  marketVerdict: "日本法人14年、APAC本部、国内大規模事例、現行Sales Engineer求人を確認。小規模な国内組織でPartnerと技術提案を再現できるかが焦点。",
  marketParagraphs: ["企業の自己解決窓口は増える一方、認証・権限・業務連携を個別開発し続ける負担も増える。", "今後3〜5年はオープン性だけでなく、クラウド運用、導入Partner、短い価値実証で内製・大手suiteとの差を示せるかが成長を分ける。"],
  cultureHeadline: "44人規模の日本組織で、技術提案とPartnerを横断するSales Engineer。",
  classification: "出社中心", displayLabel: "東京勤務・出張最大30%", officeDays: "出社頻度は未確認", remoteOnly: "full remote表記なし", flexibility: "顧客・Partner訪問と出張条件は面接確認",
  goodFor: ["複雑な業務・Web統合を技術提案へ変えたい人", "小規模組織で営業とPartnerを横断したい人"],
  cautionFor: ["製品説明だけに専念したい人", "出張を避けたい人"],
  unresolved: [["日本pipeline", "Sales Engineerを採用。", "業界別pipeline、既存・新規、Partner起点の構成は。"], ["技術支援", "提案・デモ・RFPを担当。", "同時案件、PoC、導入、Supportの責任境界は。"], ["cloud移行", "Experience Cloudを展開。", "日本のcloud比率、移行、更新、主な障壁は。"], ["組織", "gBizINFOで44人。", "営業、SE、CS、Support、Partnerの人数と欠員背景は。"], ["報酬・昇進", "給与と評価指標は非公開。", "pay mix、評価KPI、昇進・専門職経路は。"]],
});

liferayIntelligence.sources.push({ id: "gbiz-headcount-liferay", label: "gBizINFO 日本ライフレイ株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=4011001090884", kind: "公的機関", scope: "日本法人・事業所被保険者数", checkedAt });
liferayIntelligence.companyStats.japanHeadcount = { value: "44人", detail: "gBizINFOの事業所被保険者数。役員・業務委託等を含む総在籍人数ではない。", sourceId: "gbiz-headcount-liferay" };
liferayIntelligence.companyStats.japanOffice = { value: "東京都渋谷区", detail: "gBizINFOの現行登記所在地。会社公式の旧連絡先表記との差があるため住所詳細は公的情報を優先。", sourceId: "gbiz-headcount-liferay" };

const rzrIntelligence = build({
  checkedAt, slug: "rzr", name: "RZR",
  jobUrl: "https://job-boards.greenhouse.io/rzr/jobs/4335686009",
  officialUrl: "https://www.rzr.com/about",
  customersUrl: "https://www.rzr.com/case-studies/bagelcode-achieves-130-d7-roi-while-maintaining-steady-customer-acquisition-cost",
  externalUrl: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/",
  financeUrl: "https://www.rzr.com/blogs/rzr-opens-new-bangalore-office-marking-next-chapter-of-apac-expansion",
  salesSnapshot: "アプリ企業が獲得件数だけを追い、継続利用や収益につながらない広告費を増やす課題を解く。モバイル獲得、再利用、CTVの信号を一つの予測基盤で学習し、長期価値に基づく広告投資へ変える。",
  growthSummary: "AarkiからRZRへ改称し、10年以上の実績データ、4つの自社データセンター、毎秒600万超の処理、世界7拠点を公式公表。日本初の専任営業を採用するが、日本法人・拠点・売上は未確認。",
  ipoSummary: "非公開企業。調達総額、売上、ARR、IPO計画、日本売上は公式に確認できない。",
  milestones: [
    { year: "確認不能", label: "前身の創業年は確認不能", detail: "会社公式は10年以上の実績データを説明するが、創業年を確定表示しない。", source: "company" },
    { year: "2026", label: "RZRへ改称", detail: "モバイル中心からCTVを含む複数画面の成果基盤へ再定義。", source: "company" },
    { year: "2026.04", label: "Bangalore拠点", detail: "India・Southeast Asia向けのAPAC投資を拡大。", source: "finance" },
    { year: "2026", label: "CTV拡張", detail: "LG Ad Solutionsとゲーム向け成果型CTVを開始。", source: "company" },
    { year: "2026.09", label: "日本初の専任営業", detail: "東京勤務のAccount Executiveを公式掲載。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Bagelcodeは顧客獲得費を維持しながら、獲得後の継続収益を高める必要があった。" },
    { title: "製品の成り立ちから見る課題", body: "モバイル広告の実績データと予測モデルから始まり、獲得、再利用、CTVを同じ長期価値の判断へ広げた。" },
    { title: "外部環境の要求から見る課題", body: "識別子制限と個人情報保護が強まる一方、広告主は獲得費だけでなく継続・収益への増分効果を説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "アプリ広告は獲得、再利用、CTVが別々に運用され、媒体ごとの短期指標へ偏りやすい。" },
    { label: "課題", body: "install単価が良くても利用継続と収益が弱ければ、規模を増やすほど投資効率が悪化する。" },
    { label: "解決策", body: "一つの市場・顧客群で獲得からD7・D30の継続、収益、増分までを結び、媒体横断で比較する。" },
    { label: "選定の理由", body: "Google、Meta、AppLovin、Moloco等との比較で、長期価値予測、媒体横断、透明性、増分検証に優位がある場合に選ぶ。" },
  ],
  openingHook: "今月獲得した利用者のうち、7日後・30日後も残り、広告費を上回る価値を生む割合は何%ですか。",
  valueHypothesis: "対象市場で獲得費、D7・D30継続率、ARPU、ROAS、増分、媒体別重複を導入前後で比較する。",
  objection: "Google・Meta・既存DSPで十分で、新しい広告基盤へデータを渡す理由がない。",
  reframe: "媒体の在庫量ではなく、獲得・再利用・CTVの信号を長期価値へ結び、増分とプライバシーをどう説明できるかで比べる。",
  facts: [
    { label: "旧社名", value: "Aarki", detail: "2026年にRZRへ改称。" },
    { label: "処理規模", value: "毎秒600万超", detail: "会社公式。" },
    { label: "基盤", value: "自社データセンター4拠点", detail: "会社公式。" },
    { label: "世界拠点", value: "7拠点", detail: "会社公式。" },
    { label: "顧客成果", value: "D7 ROI 130%", detail: "Bagelcode事例の会社公表値。", source: "customers" },
    { label: "日本求人", value: "1件", detail: "日本初の専任Account Executive。", source: "job" },
  ],
  customers: [
    { company: "Bagelcode", products: "RZR User Acquisition", outcome: "会社事例はD7 ROI 130%、予算3.6倍、ARPU 33%増を公表。", implication: "獲得単価だけでなく継続収益を投資判断に使う。" },
    { company: "Rovio", products: "RZR User Acquisition", outcome: "会社事例は支出を10倍へ拡大し、Angry Birds 2のiOS獲得で主要Partnerになったと公表。", implication: "ゲームの規模拡大と短期ROI管理の参照事例。" },
  ],
  externalSignals: [
    { label: "個人情報保護", value: "広告データの説明責任", detail: "個人情報保護委員会のガイドラインは取得・利用・第三者提供等の取扱いを示す。", caveat: "個別の広告実装が適法かを確定するものではない。" },
    { label: "識別子制限", value: "短期計測から増分へ", detail: "端末識別子への依存が難しくなり、集計・確率・実験を組み合わせた成果説明が重要になる。", caveat: "測定精度は媒体・同意・対象市場で異なる。" },
  ],
  role: "日本初の専任営業として、アプリ企業・広告主・代理店の新規開拓から提案、交渉、受注、拡大までを担い、日本の販売方法を作る。",
  organization: "Head of JP/KRへ報告し、世界の営業・技術・運用と連携。日本法人・国内office・local deliveryは未確認。",
  careerValue: "モバイル広告、機械学習、CTV、プライバシー制約下の計測を、日本市場の0→1営業へつなぐ経験。",
  globalHeadcount: "51〜200人規模（LinkedIn公開レンジ）",
  japanPresence: "日本法人・国内拠点未確認。東京勤務の日本初専任営業求人あり", japanSince: "2026年9月に日本初専任営業求人を確認",
  solutions: [
    { name: "Encore", valueProp: "獲得、再利用、CTVの入札を長期価値で最適化。", url: "https://www.rzr.com/", competitors: "Moloco、AppLovin、Google、Meta。", differentiation: "10年以上の実績データと自社予測基盤。" },
    { name: "User Acquisition", valueProp: "収益・継続につながるアプリ利用者を獲得。", url: "https://www.rzr.com/", competitors: "Google App Campaigns、Meta、Moloco。", differentiation: "獲得後の長期価値を入札へ反映。" },
    { name: "Retargeting / CTV", valueProp: "休眠利用者と大画面接点をアプリ成果へ接続。", url: "https://www.rzr.com/", competitors: "Criteo、AppLovin、各CTV広告基盤。", differentiation: "モバイルとCTVの信号を同じ予測系へ集約。" },
  ],
  fitTags: ["日本進出の兆しあり", "AdTech", "Mobile Apps", "Machine Learning", "Enterprise Sales", "Tokyo"],
  comparisons: [
    { arena: "App growth", companies: ["RZR", "Moloco", "AppLovin"], why: "長期価値、在庫、透明性" },
    { arena: "Major platforms", companies: ["RZR", "Google", "Meta"], why: "媒体横断、データ、増分" },
  ],
}, {
  slug: "rzr", leaderName: "Aman Sareen", leaderLabel: "CEO", leaderUrl: "https://www.rzr.com/blogs/rzr-opens-new-bangalore-office-marking-next-chapter-of-apac-expansion",
  localName: "未確認", localLabel: "Japan / Korea責任者", localUrl: "https://job-boards.greenhouse.io/rzr/jobs/4335686009",
  companyId: "rzr-company", jobId: "rzr-job", customersId: "rzr-customers", externalId: "rzr-external", financeId: "rzr-finance",
  targets: ["アプリ事業責任者", "顧客獲得・成長責任者", "Marketing data・privacy責任者"],
  heroSummary: "アプリ企業が獲得件数だけを追い、継続利用や収益につながらない広告費を増やす課題を解く。獲得、再利用、CTVの信号を一つの予測基盤で学習し、長期価値に基づく投資へ変える。",
  competitors: "Google、Meta、Moloco、AppLovin、Criteo。長期価値、媒体横断、在庫、透明性、増分、privacyで比較する。",
  feature: "自社の予測モデルでモバイル獲得、再利用、CTVの入札と学習を一つの成果基盤へつなぐ。",
  advantage: "10年以上の実績データ、4つの自社データセンター、毎秒600万超の処理を横断チャネルの予測へ使う。",
  benefit: "獲得単価だけでなく継続率・収益を基準に予算を動かし、規模と効率を両立できる可能性がある。",
  evidence: "Bagelcode事例でD7 ROI 130%、予算3.6倍、ARPU 33%増を公表。ただし会社選定事例で、全顧客への再現を保証しない。",
  marketVerdict: "日本初の専任営業求人は強い進出シグナル。一方、日本法人、office、契約・請求、国内顧客、local deliveryは未確認。",
  marketParagraphs: ["日本のアプリ・ゲーム市場には大きな広告需要がある一方、主要媒体・既存DSPとの競争とprivacy対応を越える必要がある。", "今後3〜5年は初期顧客で増分と長期価値を証明し、日本の契約・技術・運用支援を置けるかが正式進出を分ける。"],
  cultureHeadline: "日本法人・拠点前に、初の専任営業として市場と販売方法を作る局面。",
  classification: "出社中心", displayLabel: "東京を拠点とする日本市場担当", officeDays: "国内office未確認", remoteOnly: "full remote表記なし", flexibility: "契約形態、出社場所、APAC連携は面接確認",
  goodFor: ["AdTechとアプリ事業のKPIを0→1営業へつなぎたい人", "未整備な市場で自ら販売方法を作りたい人"],
  cautionFor: ["日本法人・支援部門が完成した環境を前提にする人", "privacy・計測・媒体競争を避けたい人"],
  unresolved: [["雇用主体", "日本初の専任営業。", "雇用主体、契約、社会保険、税務、福利厚生は。"], ["初期顧客", "日本は未開拓余地が大きいと求人に記載。", "有償顧客、active pipeline、業界、reference可能性は。"], ["territory", "日本の全販売cycleを担当。", "quota、ACV、cycle、self-source、代理店構成は。"], ["delivery", "世界7拠点と連携。", "日本語SE、運用、support、請求、privacy審査の担当は。"], ["正式進出", "日本初の営業を採用。", "法人、office、追加採用、国内データ対応の判断基準は。"]],
});

if (rzrIntelligence.marketStatus.japanGrowth) {
  rzrIntelligence.marketStatus.japanGrowth.headline = "日本初の専任営業求人を確認、法人・国内拠点は未確認";
  rzrIntelligence.marketStatus.japanGrowth.narrative = "東京勤務のAccount Executiveを日本初の専任営業として募集。日本市場へ投資する強いシグナルだが、日本法人、国内拠点、雇用主体、契約・請求、local delivery、国内顧客名を公式確認できず、正式進出とは断定しない。";
  rzrIntelligence.marketStatus.japanGrowth.entryAssessment = {
    verdict: "進出可能性は高め。日本初の専任営業を採用する一方、法人・契約・delivery基盤は未確認",
    factSignals: [
      { title: "日本初の専任営業", body: "公式求人がfirst dedicated sales presence in Japanと明記。", sourceIds: ["rzr-job"] },
      { title: "日本の市場責任", body: "新規開拓から受注・拡大までfull-cycleのcommercial ownerを置く。", sourceIds: ["rzr-job"] },
      { title: "APAC投資", body: "Bangalore拠点を開き、India・Southeast Asia向け投資を拡大。", sourceIds: ["rzr-finance"] },
      { title: "実績基盤", body: "10年以上のデータ、4データセンター、毎秒600万超の処理を会社公式が公表。", sourceIds: ["rzr-company"] },
    ],
    hurdles: [
      { title: "国内commercial proof", body: "日本の有償顧客、売上、更新、案件単価を確認できない。", sourceIds: ["rzr-job", "rzr-customers"] },
      { title: "雇用・契約基盤", body: "日本法人、雇用主体、契約、請求、税務、国内officeを確認できない。", sourceIds: ["rzr-job"] },
      { title: "local delivery", body: "日本語SE、campaign運用、support、privacy・security審査体制が未確認。", sourceIds: ["rzr-job", "rzr-external"] },
      { title: "媒体・計測競争", body: "Google・Meta・Moloco・AppLovin等に対し、増分と長期価値の差を日本で証明する必要。", sourceIds: ["rzr-company", "rzr-customers"] },
    ],
    readinessConditions: [
      { title: "日本の有償reference", body: "複数のアプリ企業で本番、更新、予算拡大を確認。" },
      { title: "雇用・契約基盤", body: "日本の雇用主体、契約、請求、税務を明確化。" },
      { title: "local technical coverage", body: "日本語でSE、運用、Support、privacy審査を提供。" },
      { title: "measurement proof", body: "主要媒体との差を増分、D7・D30、収益で再現。" },
      { title: "repeatable GTM", body: "ゲーム以外を含む重点業界とdirect・agencyの型を確立。" },
    ],
    watchSignals: ["日本法人・雇用主体", "Japan SE・運用求人", "国内顧客事例", "日本語privacy・製品資料", "国内代理店提携", "東京office・請求体制"],
  };
}
rzrIntelligence.sources.push({ id: "gbiz-headcount-rzr", label: "gBizINFO 法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報・被保険者数", checkedAt });
rzrIntelligence.sources.push({ id: "rzr-linkedin", label: "RZR LinkedIn会社ページ", url: "https://www.linkedin.com/company/rzr", kind: "外部集計", scope: "グローバル従業員規模", checkedAt });
rzrIntelligence.companyStats.globalHeadcount = { value: "51〜200人規模", detail: "LinkedIn公開レンジ。会社公式の厳密人数ではない。", sourceId: "rzr-linkedin" };
rzrIntelligence.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本法人・国内拠点を特定できず、事業所情報の被保険者数を0人とは扱わない。", sourceId: "gbiz-headcount-rzr" };

export const daily20260901IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  sitecore: sitecoreIntelligence,
  liferay: liferayIntelligence,
  rzr: rzrIntelligence,
};
