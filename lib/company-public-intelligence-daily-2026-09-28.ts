import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-28";

const keeperSecurity = buildDailyCompanyIntelligence({
  slug: "keeper-security", name: "Keeper Security", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/keepersecurity/jobs/4408913009", officialUrl: "https://www.keepersecurity.com/ja_JP/company/about/",
  customersUrl: "https://www.keepersecurity.com/ja_JP/resources/marusan-case-study/", financeUrl: "https://www.keepersecurity.com/ja_JP/",
  problem: "共有パスワード、常時特権、サービスアカウント、シークレットが人・端末・クラウドへ分散し、誰が何へアクセスしたかを制御・監査しにくい課題を解く。",
  origin: "2011年に米国で、消費者と企業が端末をまたいで認証情報を安全に使えるゼロ知識型の保管庫を作ることから始まった。",
  externalNeed: "クラウド、外部委託、機械ID、AIエージェントが増えるほど、企業は常時権限を減らし、必要な時間だけアクセスを許可し、操作と承認の証跡を残す必要がある。",
  solution: "パスワード、シークレット、特権アカウント、リモート接続をゼロ知識・ゼロトラスト設計で管理し、最小権限、セッション制御、監査を統合する。",
  selection: "保管機能だけでなく、SSO・ディレクトリ統合、特権昇格、シークレット、セッション記録、導入速度、日本語支援、管理工数で比較する。",
  growth: "会社公式は150カ国超、導入企業93,000社超、保護利用者400万人を公開。2023年に東京へAPAC本社を開設し、現行の顧客成功求人を確認。",
  role: "東京のCustomer Success Manager, APACが既存顧客の導入、利用、四半期レビュー、更新、追加販売、問題解決を持ち、売上目標も担う。",
  organization: "Keeper Security APAC株式会社・東京虎ノ門。2023年5月に東京へAPAC本社を開設し、日本と地域顧客を支援する。",
  career: "IDセキュリティの技術理解と、顧客利用、更新、追加販売、経営層レビューを同じ顧客成果へ束ねるAPAC顧客成功経験。",
  globalHeadcount: "501〜1,000人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "Keeper Security APAC株式会社・東京虎ノ門。国内の正確な在籍人数は非公開", japanSince: "2023年に東京へAPAC本社を開設",
  customer: { company: "丸三食品", outcome: "公式国内事例で、部署・担当者単位の認証情報共有と細かな権限制御を導入し、管理リスクの負担を軽減したと説明。数値成果は未公開。" },
  facts: [["創業","2011年","米国で共同創業。"],["展開","150カ国超","会社公式。"],["導入企業","93,000社超","会社公式。"],["保護利用者","400万人","会社公式。"],["東京拠点","2023年","APAC本社を開設。"],["日本求人","1件","Customer Success Manager, APAC。"]],
  products: [["KeeperPAM","特権アカウント、昇格、セッション、リモート接続を管理。","https://www.keepersecurity.com/ja_JP/privileged-access-management/"],["Keeper Enterprise Password Manager","企業のパスワードと共有認証情報をゼロ知識で管理。","https://www.keepersecurity.com/ja_JP/enterprise.html"],["Keeper Secrets Manager","アプリケーション、CI/CD、クラウドのシークレットを管理。","https://www.keepersecurity.com/ja_JP/secrets-manager.html"]],
  competitors: "CyberArk、1Password、Delinea、BeyondTrust、Microsoft Entra、ブラウザ・表計算・内製の認証情報管理",
  leader: ["Darren Guccione","CEO and Co-Founder","https://www.keepersecurity.com/ja_JP/company/about/"], local: ["未確認","日本・APAC事業責任者","https://www.keepersecurity.com/ja_JP/company/about/"],
  work: ["出社中心","東京・虎ノ門","定期的な東京オフィス通勤を応募要件で確認","完全リモートではない","具体的な出社日数は未確認"],
}, checkedAt);
keeperSecurity.sources.push(
  { id: "keeper-tokyo", label: "Keeper 2023年振り返り", url: "https://www.keepersecurity.com/blog/ja/2023/12/18/2023-keeper-retrospective-a-year-of-growth-innovation-and-appreciation/", kind: "企業公式", scope: "東京APAC本社・開設時期", checkedAt },
  { id: "keeper-terms-japan", label: "Keeper利用規約", url: "https://www.keepersecurity.com/ja_JP/legal/terms-of-use/", kind: "企業公式", scope: "Keeper Security APAC株式会社・東京所在地", checkedAt },
  { id: "gbiz-headcount-keeper-security", label: "gBizINFO Keeper Security APAC株式会社", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
keeperSecurity.companyStats.japanHeadcount = { value: "掲載なし", detail: "日本法人と東京拠点は確認したが、gBizINFOで対応する事業所被保険者数を断定できず、0人とは扱わない。", sourceId: "gbiz-headcount-keeper-security" };

const liquidAi = buildDailyCompanyIntelligence({
  slug: "liquid-ai", name: "Liquid AI", jobConfirmed: true,
  jobUrl: "https://www.liquid.ai/careers", officialUrl: "https://www.liquid.ai/company",
  customersUrl: "https://www.liquid.ai/industries", financeUrl: "https://www.liquid.ai/blog/we-raised-250m-to-scale-capable-and-efficient-general-purpose-ai",
  problem: "大規模な基盤モデルが計算量、メモリ、遅延、費用、データ所在の制約で、端末・車両・企業環境へ配備しにくい課題を解く。",
  origin: "2023年にMIT CSAILから独立した4人の研究者が、Transformerだけに依存せず、効率のよい汎用AIをあらゆる規模で動かすため創業した。",
  externalNeed: "AIを製品、車両、工場、医療、金融へ組み込むほど、企業は精度だけでなく、推論遅延、メモリ、計算費用、端末上のプライバシー、用途別の評価を同時に満たす必要がある。",
  solution: "高効率なLiquid Foundation Modelsを、クラウド、オンプレミス、端末上で動かし、用途・日本語・画像・音声へ適応して本番配備する。",
  selection: "ベンチマーク精度だけでなく、実機の遅延とメモリ、計算費用、端末・オンプレミス対応、データ保護、用途別の微調整・評価で比較する。",
  growth: "2024年に2.5億ドルのSeries Aを調達。会社公式は東京拠点とLiquid AI Japanの技術職2件を掲載し、日本企業での配備と日本語マルチモーダル研究を拡大。",
  role: "東京のML Scientistが日本語マルチモーダルモデルの研究・評価を、Applied ML職が日本企業の課題からモデル配備までを担う。",
  organization: "Liquid AI株式会社・東京。会社公式の採用ページでLiquid AI Japanチーム、東京拠点、米国本社との連携を確認。",
  career: "日本語マルチモーダル研究と、モデルを端末・企業環境へ実装する応用機械学習を一つの日本立ち上げ組織で経験できる。",
  globalHeadcount: "51〜200人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "Liquid AI株式会社・東京。国内の正確な在籍人数は非公開", japanSince: "2024年に日本法人登記を確認",
  customer: { company: "日本の消費者機器・自動車・金融等の企業", outcome: "現行求人は日本の主要企業の技術チームと本番配備を進めると説明するが、社名と数値成果は公開していない。" },
  facts: [["創業","2023年","MIT CSAIL発。"],["Seed","4,660万ドル","2023年会社公表。"],["Series A","2.5億ドル","2024年会社公表。"],["日本組織","Liquid AI Japan","会社公式Career。"],["東京求人","2件","日本語マルチモーダルAI。"],["勤務形態","Hybrid","会社公式Career。"]],
  products: [["Liquid Foundation Models","計算量とメモリを抑えた汎用・マルチモーダルモデル。","https://www.liquid.ai/liquid-foundation-models"],["Apollo","Liquid Foundation Modelsを試し、評価・利用するための製品。","https://playground.liquid.ai/"],["Industry Solutions","自動車、端末、金融、医療、産業等の配備を支援。","https://www.liquid.ai/industries"]],
  competitors: "OpenAI、Anthropic、Google、Meta、Mistral AI、Cohere、端末・業界別の内製モデル",
  leader: ["Ramin Hasani","Co-Founder and Chief Executive Officer","https://www.liquid.ai/company"], local: ["未確認","Liquid AI Japan責任者","https://www.liquid.ai/careers"],
  work: ["ハイブリッド","東京","具体的な出社日数は未確認","完全リモートの明記なし","東京拠点と米国本社・顧客技術チームが連携"],
}, checkedAt);
liquidAi.sources.push(
  { id: "liquid-careers", label: "Liquid AI Careers", url: "https://www.liquid.ai/careers", kind: "企業公式", scope: "Liquid AI Japan・東京求人2件・勤務形態", checkedAt },
  { id: "liquid-applied-job", label: "Liquid AI Applied ML, Japanese Multimodal", url: "https://jobs.ashbyhq.com/liquid-ai/091f16ad-5d52-4337-89d8-c166c33577bf", kind: "企業公式", scope: "日本企業でのモデル配備・職務", checkedAt },
  { id: "gbiz-headcount-liquid-ai", label: "gBizINFO Liquid AI株式会社", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
liquidAi.companyStats.japanHeadcount = { value: "掲載なし", detail: "Liquid AI株式会社と東京拠点は確認したが、gBizINFOで事業所被保険者数の掲載を確認できず、0人とは扱わない。", sourceId: "gbiz-headcount-liquid-ai" };

const exa = buildDailyCompanyIntelligence({
  slug: "exa", name: "Exa", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/exa/f6bd612e-a4ee-4c75-a205-5cd70901661f", officialUrl: "https://exa.ai/about",
  customersUrl: "https://exa.ai/enterprise", financeUrl: "https://exa.ai/blog/announcing-series-c",
  problem: "人向けの検索結果は、AIエージェントが大量の最新情報を低遅延で取得し、本文と出典をそのまま処理する用途に最適化されていない課題を解く。",
  origin: "2021年ごろに、世界の情報をAIが意味で検索できる巨大なデータベースへ変え、従来検索を超える完全な検索を作る目標から始まった。",
  externalNeed: "AIエージェントが調査、営業、開発、金融、医療の判断を自動化するほど、企業は検索の網羅性だけでなく、鮮度、出典、抽出費用、遅延、用途別の精度を管理する必要がある。",
  solution: "Web規模の独自索引、埋め込みモデル、検索・本文抽出・深掘り・監視APIで、AIエージェントへ最新の外部情報と出典を返す。",
  selection: "検索件数だけでなく、用途別の再現率と精度、遅延、本文抽出のトークン量、出典、監視、価格、利用規約とデータ統制で比較する。",
  growth: "2026年に2.5億ドルのSeries Cを調達し、企業価値22億ドルを公表。利用企業5,000社超、開発者40万人超を説明し、Singaporeの研究職2件を募集。",
  role: "SingaporeのResearch, MLとResearch Engineer, Generalistが検索モデル、データ、評価、Web規模の検索基盤を開発する。日本勤務・日本専任求人は0件。",
  organization: "San FranciscoとSingaporeで採用を確認。日本法人、国内拠点、日本常駐の販売・導入・支援体制は未確認。",
  career: "正式進出後は、AIエージェント向け検索の品質、出典、外部データ利用を日本企業の本番業務へ持ち込む市場立ち上げ経験になり得る。",
  globalHeadcount: "51〜200人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "日本法人・国内拠点・日本求人は未確認。Singaporeの研究職2件を確認", japanSince: "未進出",
  customer: { company: "Cursor、Cognition、HubSpot、OpenRouter、monday.com", outcome: "会社公式はAIエージェントや開発製品の検索基盤として利用を説明。Cognitionは従来より少ない検索回数と時間で必要情報へ到達したと紹介するが、個別契約規模は非公開。" },
  facts: [["開始","2021年ごろ","完全な検索を目標に創業。"],["Series C","2.5億ドル","2026年会社公表。"],["企業価値","22億ドル","2026年会社公表。"],["利用企業","5,000社超","2026年会社公表。"],["開発者","40万人超","2026年公式発表。"],["日本求人","0件","公式Careerで確認。"]],
  products: [["Search API","意味検索でWeb情報と出典をAIへ返す。","https://exa.ai/search-api"],["Contents API","検索結果の本文を抽出し、処理しやすい形で返す。","https://exa.ai/contents-api"],["Agent API","複数段階の検索と調査をAIエージェント向けに実行。","https://exa.ai/agent-api"]],
  competitors: "Google、Bing、Brave Search、Tavily、Perplexity、Firecrawl、企業の内製検索・取得基盤",
  leader: ["Will Bryk","CEO and Co-Founder","https://exa.ai/about"], local: ["未確認","日本事業責任者","https://exa.ai/careers"],
  work: ["未確認","日本求人なし","該当なし","日本での勤務条件は未確認","Singapore求人の条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中。Singaporeで研究拠点を作り、AI・開発者市場に強いが、日本法人、国内拠点、日本専任求人、日本語の販売・契約・技術支援は未確認。",
    signal: "Singaporeで検索モデルと検索基盤の研究職2件を公式募集し、米国外の研究体制を拡大。",
    hurdle: "日本法人、国内拠点、日本勤務・専任求人、日本語の販売・契約・請求・技術支援、国内顧客の公開成果を確認できない。",
    conditions: ["Singaporeから日本企業のAI検索需要と継続利用を再現する。", "日本語検索の品質、鮮度、出典、利用規約を評価できる基準を作る。", "日本語の販売、契約、請求、技術支援を整える。", "国内の利用量と長期契約が日本常駐体制の固定費を支える。", "日本企業の公開事例とクラウド・開発基盤の提携先を作る。"],
    watches: ["Japan・Tokyo求人", "日本法人・国内拠点", "日本語検索の評価公開", "国内顧客の数値事例", "APAC求人のJapan担当表記", "国内クラウド・開発基盤提携"],
  },
}, checkedAt);
exa.sources.push(
  { id: "exa-careers", label: "Exa Careers", url: "https://exa.ai/careers", kind: "企業公式", scope: "現行求人・日本求人0件・Singapore研究職", checkedAt },
  { id: "exa-series-c", label: "Exa Series C announcement", url: "https://exa.ai/blog/announcing-series-c", kind: "企業公式", scope: "調達・企業価値・利用規模・顧客", checkedAt },
  { id: "exa-singapore-generalist", label: "Exa Research Engineer, Generalist", url: "https://jobs.ashbyhq.com/exa/7a852555-9ae4-4f27-890f-849cd066693e", kind: "企業公式", scope: "Singapore研究拠点・職務", checkedAt },
  { id: "gbiz-headcount-exa", label: "gBizINFO Exa法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
exa.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式情報とgBizINFOでExaに紐づく日本法人・国内拠点を特定できず、日本での想定人数を0人とは扱わない。", sourceId: "gbiz-headcount-exa" };
if (exa.marketStatus.japanGrowth) {
  exa.marketStatus.japanGrowth.headline = "日本求人0件・Singapore研究職2件を確認";
  exa.marketStatus.japanGrowth.narrative = "2026年9月28日の公式Careerで、日本勤務は0件、Singaporeの研究職2件を確認。日本法人、国内拠点、日本語の販売・契約・支援は未確認。";
}

export const daily20260928IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { "keeper-security": keeperSecurity, "liquid-ai": liquidAi, exa };
