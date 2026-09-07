import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-09-08";

function build(profile: Profile, patch: CompactPatchInput, preEntry = false) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.09.08";
  if (preEntry && intelligence.marketStatus.japanGrowth) {
    intelligence.marketStatus.japanGrowth.headline = "日本市場活動と日本居住者向け求人は確認、国内法人・常設拠点は未確認";
    intelligence.marketStatus.japanGrowth.narrative = profile.japanPresence + "。イベント開催と求人の勤務地表記を、法人設立や恒常的な国内販売・支援体制と同一視しない。";
    intelligence.marketStatus.japanGrowth.entryAssessment = {
      verdict: "日本向け市場活動と採用は強い進出シグナルだが、国内法人、常設拠点、雇用主体を確認できず、正式な拠点進出とは断定しない。",
      factSignals: [
        { title: "日本向け市場活動", body: "2026年4月に東京で初の日本向けイベントを開催し、公式に日本市場活動を発信。", sourceIds: ["teamworks-company"] },
        { title: "日本居住者を採用", body: "Customer Success Manager IIの勤務地をJapan、勤務形態をリモートと明記。", sourceIds: ["teamworks-job"] },
        { title: "国内利用の参照", body: "公式顧客事例は侍ジャパンの大会準備を支える運用を紹介。", sourceIds: ["teamworks-customers"] },
        { title: "初期市場構築", body: "公式求人が日本を成長市場と位置づけ、最初期の現地顧客成功の役割を説明。", sourceIds: ["teamworks-job"] },
      ],
      hurdles: [
        { title: "法人・常設拠点が未確認", body: "Teamworks本体と結びつく日本法人、国内住所、事業所被保険者数を確認できない。", sourceIds: ["gbiz-headcount-teamworks"] },
        { title: "雇用・契約主体が未公開", body: "日本での雇用主体、社会保険、福利厚生、契約・請求主体は求人で確認できない。", sourceIds: ["teamworks-job"] },
        { title: "国内体制の分母が未公開", body: "日本の営業、導入、技術支援、顧客成功の人数と責任分担は未確認。", sourceIds: ["teamworks-company", "teamworks-job"] },
        { title: "国内導入の広がりが未確認", body: "侍ジャパンの事例はあるが、国内契約組織数、更新率、日本語支援範囲は未公開。", sourceIds: ["teamworks-customers"] },
      ],
      readinessConditions: [
        { title: "雇用基盤", body: "日本の雇用主体、労務・税務・社会保険、福利厚生を明示する。" },
        { title: "販売・支援", body: "日本語の販売、導入、技術支援と時差・緊急対応の責任を置く。" },
        { title: "国内の再現性", body: "国内スポーツ組織での導入、利用、更新を複数事例で説明する。" },
        { title: "データ統制", body: "選手の健康・パフォーマンスデータの目的、権限、保存、委託先管理を日本向けに整える。" },
        { title: "商用モデル", body: "国内競技規模に合う価格、導入期間、支援、契約条件を確立する。" },
      ],
      watchSignals: ["日本法人・国内拠点の公表", "日本の雇用主体・福利厚生の明示", "日本専任の営業・導入・技術支援求人", "国内スポーツ組織の追加事例", "日本語の製品・支援文書", "国内パートナー・販売網の公表"],
    };
  }
  return intelligence;
}

const darktrace = build({
  checkedAt, slug: "darktrace", name: "Darktrace",
  jobUrl: "https://darktrace.wd3.myworkdayjobs.com/DarktaceExternal",
  officialUrl: "https://www.darktrace.com/ja/company",
  customersUrl: "https://www.darktrace.com/ja/resource/customer-stories",
  externalUrl: "https://www.nisc.go.jp/pdf/policy/kihon-s/cs2025.pdf",
  financeUrl: "https://www.darktrace.com/ja/company",
  salesSnapshot: "組織ごとの通常の挙動をAIで学び、ネットワーク、メール、クラウド、OTにまたがる未知の脅威の発見と対応を早める。",
  growthSummary: "10,000組織・110カ国・2,300人超を会社公表。日本は事業所被保険者43人で、東京のSDR、Senior AE、Sales Directorを公式募集。",
  ipoSummary: "2024年にThoma Bravoによる買収を経て非公開企業。日本売上、ARR、更新率は未開示。",
  milestones: [
    { year: "2013", label: "創業", detail: "数学者とサイバー防御の専門家が英国で創業。", source: "company" },
    { year: "2015", label: "日本法人設立", detail: "ダークトレース・ジャパン株式会社を確認。", source: "company" },
    { year: "2024", label: "非公開化", detail: "Thoma Bravoによる買収を完了。", source: "finance" },
    { year: "2026", label: "東京採用", detail: "営業3職種を公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "国内事例は、少人数の運用チームで可視性を広げ、未知の異常への発見と初動を早める必要を示す。" },
    { title: "製品の成り立ちから見る課題", body: "署名や過去の攻撃パターンだけでなく、各組織の通常の挙動を学習して逸脱を見つける発想から生まれた。" },
    { title: "外部環境の要求から見る課題", body: "AIとクラウド利用が広がり攻撃の速度も上がるなか、企業には事業継続を守る発見・封じ込め・復旧の速度と説明責任が求められる。" },
  ],
  narrative: [
    { label: "背景", body: "ネットワーク、メール、クラウド、OTに攻撃面が広がる。" },
    { label: "課題", body: "既知ルールと分断した製品では、新しい脅威の関係を読み、重要な異常へ運用者を集中させにくい。" },
    { label: "解決策", body: "対象環境で通常行動を学び、検知時間、調査時間、封じ込め、運用工数を比較する。" },
    { label: "選定の理由", body: "Microsoft、CrowdStrike、Palo Alto Networks、Vectra AI、SIEM・SOC運用と比べ、検知精度、文脈、自律対応、統合、運用負荷で優位な場合に選ぶ。" },
  ],
  openingHook: "今見逃している異常と、発見後の調査・封じ込めに何時間かかっていますか。",
  valueHypothesis: "対象範囲で平均検知時間、調査時間、自律対応件数、誤検知、運用工数を導入前後で比較する。",
  objection: "既存のEDR、SIEM、SOCで十分であり、追加製品はアラートとコストを増やす。",
  reframe: "機能数ではなく、現在の見落とし、検知から対応までの時間、運用工数、事業停止リスクで比べる。",
  facts: [
    { label: "創業", value: "2013年", detail: "英国ケンブリッジ発。" },
    { label: "顧客", value: "10,000組織", detail: "110カ国。" },
    { label: "従業員", value: "2,300人超", detail: "会社公式。" },
    { label: "研究", value: "200件超", detail: "特許・特許出願。", source: "finance" },
    { label: "日本事業所", value: "被保険者43人", detail: "gBizINFO。", source: "company" },
    { label: "日本求人", value: "3件", detail: "SDR、Senior AE、Sales Director。", source: "job" },
  ],
  customers: [
    { company: "東北電気保安協会", products: "Darktrace Network", outcome: "AI駆動の可視化、脅威発見、自律的な封じ込めを公式事例で紹介。", implication: "国内の地域拠点にまたがる運用への参照になる。" },
    { company: "東海協和", products: "Darktrace", outcome: "自己学習型AIでネットワーク内の可視性と異常検知を改善したと会社事例が紹介。", implication: "国内物流・現場系の事業継続に近い参照になる。" },
  ],
  externalSignals: [
    { label: "サイバーセキュリティ戦略", value: "経営と事業継続の課題", detail: "政府の戦略は供給網と重要インフラを含む対応力を求める。", caveat: "Darktrace導入だけで戦略・法令対応を保証しない。" },
    { label: "AI利用の拡大", value: "保護対象の変化", detail: "生成AIとSaaS利用は、従来の境界を越えたデータ・権限・挙動の可視化を必要にする。", caveat: "対象範囲と誤検知は顧客環境で検証が必要。" },
  ],
  role: "東京のSDR、Senior Account Executive、Sales Directorが新規開拓、大型案件、営業組織とパートナー網を担う。",
  organization: "ダークトレース・ジャパン株式会社の東京事業所。gBizINFOの事業所被保険者数43人。",
  careerValue: "AIサイバー防御を、技術評価から経営層の事業継続・運用成果へ翻訳する経験。",
  globalHeadcount: "2,300人超（会社公式）",
  japanPresence: "ダークトレース・ジャパン株式会社・東京事業所",
  japanSince: "2015年に国内法人を確認",
  solutions: [
    { name: "Darktrace ActiveAI Security Platform", valueProp: "ネットワーク、メール、クラウド、OT、AI利用の脅威を統合。", url: "https://www.darktrace.com/ja/products", competitors: "Microsoft、CrowdStrike、Palo Alto Networks、Vectra AI。", differentiation: "各組織の通常行動を学習する自己学習型AI。" },
    { name: "Darktrace RESPOND", valueProp: "進行中の異常を可視化し、影響を抑える対応を支援。", url: "https://www.darktrace.com/ja/products/respond", competitors: "EDR、SOAR、SOC手動対応。", differentiation: "組織の通常行動と事業文脈を使い対応範囲を調整。" },
    { name: "Darktrace / EMAIL", valueProp: "メールの送受信関係と文脈から異常を検知。", url: "https://www.darktrace.com/ja/products/email", competitors: "Microsoft Defender for Office 365、Proofpoint、Mimecast。", differentiation: "本文だけでなく利用者と組織の通信挙動を学習。" },
  ],
  fitTags: ["Cybersecurity", "AI", "NDR", "Enterprise Sales", "Tokyo"],
  comparisons: [
    { arena: "AI脅威検知・対応", companies: ["Darktrace", "Vectra AI", "Microsoft"], why: "検知精度、文脈、自律対応、運用負荷" },
    { arena: "統合セキュリティ", companies: ["Darktrace", "CrowdStrike", "Palo Alto Networks"], why: "対象範囲、既存基盤、総コスト、人の責任" },
  ],
}, {
  slug: "darktrace", leaderName: "Ed Jennings", leaderLabel: "President・CEO", leaderUrl: "https://www.darktrace.com/company/leadership",
  localName: "田井 祥雅", localLabel: "ダークトレース・ジャパン代表取締役", localUrl: "https://www.darktrace.com/ja/company",
  companyId: "darktrace-company", jobId: "darktrace-job", customersId: "darktrace-customers", externalId: "darktrace-external", financeId: "darktrace-finance",
  targets: ["CISO・セキュリティ責任者", "SOC・セキュリティ運用", "クラウド・OT・AI統制責任者"],
  heroSummary: "組織ごとの通常の挙動をAIが学び、ネットワーク、メール、クラウドにまたがる未知の異常を発見する。運用者が重要な事象に集中し、検知・調査・封じ込めの時間と事業停止リスクを減らせるようにする。",
  competitors: "Microsoft、CrowdStrike、Palo Alto Networks、Vectra AI、SIEM・SOC運用。検知精度、文脈、自律対応、統合、運用負荷で比較。",
  feature: "組織の通常行動を学習し、異常の発見、調査、対応を複数領域でつなぐ。",
  advantage: "10,000組織の運用、独自AI研究、ネットワークからAI利用までの可視化を持つ。",
  benefit: "平均検知・調査・封じ込め時間、運用工数、事業停止リスクを改善できる可能性がある。",
  evidence: "東北電気保安協会、東海協和などの国内事例と、世界10,000組織を会社公表。",
  marketVerdict: "日本事業所の被保険者43人、国内事例、東京の営業3求人を確認。AIネイティブを実運用の成果へ変える力が焦点。",
  marketParagraphs: ["クラウド・OT・生成AIへ攻撃面が広がり、少人数運用で発見と対応を早める需要が続く。", "今後3〜5年はAIの呼び名より、誤検知、自律対応の制御、既存SOCとの統合を実環境で証明できるかが成長を分ける。"],
  cultureHeadline: "東京の43人規模の事業所で、新規開拓から営業組織の拡張まで担う。",
  classification: "ハイブリッド", displayLabel: "東京オフィス", officeDays: "Sales Directorは週3日以上。他職種の詳細は要確認", remoteOnly: "完全リモートではない", flexibility: "顧客訪問・イベントを含む",
  goodFor: ["AIセキュリティを事業成果へ翻訳したい人", "新規、拡大、パートナーを横断したい人"],
  cautionFor: ["既存顕在案件だけを担当したい人", "実環境でのPOVと技術関係者を避けたい人"],
  unresolved: [
    ["達成可能性", "営業3求人。", "直近4四半期の達成者比率、quota、pipeline coverageは。"],
    ["担当", "新規と拡大を担う。", "担当社数、ACV、平均商談期間、新規・拡大配分は。"],
    ["POV", "技術チームとPOVを進める。", "平均期間、成功条件、本番化率、顧客の必要体制は。"],
    ["組織", "被保険者43人。", "営業、SE、CS、アナリスト、パートナーの人数と責任は。"],
    ["報酬", "公開レンジなし。", "base、OTE、pay mix、株式、accelerator、ramp保証は。"],
  ],
});

const meltwater = build({
  checkedAt, slug: "meltwater", name: "Meltwater",
  jobUrl: "https://meltwatercareers.ttcportals.com/search/jobs/in/tokyo-japan",
  officialUrl: "https://www.meltwater.com/jp/about",
  customersUrl: "https://www.meltwater.com/jp/customer-stories",
  externalUrl: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/",
  financeUrl: "https://www.meltwater.com/en/careers",
  salesSnapshot: "ニュース、SNS、消費者の声、インフルエンサーデータを集め、広報・マーケティングの反響、リスク、顧客理解を判断できる状態に変える。",
  growthSummary: "27,000社、2,200人超、50拠点を会社公表。日本は事業所被保険者63人で、東京の新規営業と大手顧客成功を公式募集。",
  ipoSummary: "非公開企業。日本売上、ARR、更新率、利益は未開示。",
  milestones: [
    { year: "2001", label: "創業", detail: "ノルウェーのオスロで創業。", source: "company" },
    { year: "2009", label: "日本法人設立", detail: "Meltwater Japan株式会社を設立。", source: "company" },
    { year: "2026", label: "国内事例", detail: "ネスレ日本、NTTドコモ等の事例を公式掲載。", source: "company" },
    { year: "2026", label: "東京採用", detail: "新規営業と大手顧客成功を公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "ネスレ日本の事例は、SNS分析の工数と粒度の限界を解き、ブランド責任者と役員の判断材料を作る必要を示す。" },
    { title: "製品の成り立ちから見る課題", body: "ニュースを手作業で切り抜くメディア監視の遅さから、オンライン情報の収集・分析を自動化した。" },
    { title: "外部環境の要求から見る課題", body: "SNSと生成AIが情報発見と評価を変えるなか、企業には多言語の評判・顧客の声・リスクを早く理解し、個人情報と利用目的を管理することが求められる。" },
  ],
  narrative: [
    { label: "背景", body: "ニュース、SNS、顧客の声が途切れなく増え、ブランドの反響がチャネルごとに分かれる。" },
    { label: "課題", body: "手作業の検索と分断した分析では、事実の把握、文脈の理解、社内共有が遅れ、施策の改善までつながらない。" },
    { label: "解決策", body: "対象ブランドでメディアとSNSを集約し、分析時間、網羅性、社内共有、施策・商品への反映を比較する。" },
    { label: "選定の理由", body: "Brandwatch、Cision、Sprinklr、国内監視・SNS分析、手作業と比べ、情報範囲、多言語、AI分析、運用支援、社内定着で優位な場合に選ぶ。" },
  ],
  openingHook: "その施策がどう受け止められ、なぜ売上や評判が動いたかを、何時間で説明できますか。",
  valueHypothesis: "対象ブランドで収集・分析工数、チャネル網羅性、社内共有時間、洞察から施策までの時間を導入前後で比較する。",
  objection: "ニュース検索、SNSの標準分析、広告・調査データで十分。",
  reframe: "収集件数ではなく、重要な変化の発見速度、文脈の精度、社内判断、施策への反映工数で比べる。",
  facts: [
    { label: "創業", value: "2001年", detail: "ノルウェー・オスロ発。" },
    { label: "顧客", value: "27,000社", detail: "会社公式。" },
    { label: "従業員", value: "2,200人超", detail: "50拠点、25カ国。" },
    { label: "日本法人", value: "2009年設立", detail: "東京都渋谷区恵比寿。", source: "company" },
    { label: "日本事業所", value: "被保険者63人", detail: "gBizINFO。", source: "company" },
    { label: "日本求人", value: "2件", detail: "新規営業と大手顧客成功を当日確認。", source: "job" },
  ],
  customers: [
    { company: "ネスレ日本", products: "Meltwater・Audiense", outcome: "公式事例はソーシャルリスニングの工数半減・解像度倍増を紹介。15アカウントで利用。", implication: "日本語の文脈を含む顧客理解と社内利用の定量参照になる。" },
    { company: "NTTドコモ", products: "Meltwater", outcome: "施策の受け止められ方と競合をリアルタイムに可視化し、広報のPDCAへ利用。", implication: "大規模ブランドの部門横断の判断に近い参照になる。" },
  ],
  externalSignals: [
    { label: "個人情報保護", value: "利用目的と安全管理", detail: "SNSや関係者データを扱うほど、利用目的、権限、委託先、保存を説明できる運用が必要。", caveat: "Meltwater導入だけで法令適合を保証しない。" },
    { label: "生成AI検索", value: "発見面の拡張", detail: "検索結果とSNSに加え、AI回答での言及・評価を観測する要求が増える。", caveat: "AI回答の網羅性と影響を売上に直結させない。" },
  ],
  role: "東京のSales Consultantが中小企業の新規開拓、Enterprise Client Success Executiveが大手顧客の利用・更新・拡大を担う。",
  organization: "Meltwater Japan株式会社・東京都渋谷区恵比寿。gBizINFOの事業所被保険者数63人。",
  careerValue: "メディア・顧客の声を、広報、マーケティング、経営の判断と更新・拡大の成果へ翻訳する経験。",
  globalHeadcount: "2,200人超（会社公式）",
  japanPresence: "Meltwater Japan株式会社・東京都渋谷区恵比寿",
  japanSince: "2009年設立",
  solutions: [
    { name: "Media Intelligence", valueProp: "ニュースとメディア露出を監視・分析。", url: "https://www.meltwater.com/jp/products/media-intelligence", competitors: "Cision、国内メディア監視、手作業。", differentiation: "世界のメディア収集とソーシャル分析を統合。" },
    { name: "Social Listening", valueProp: "SNS上の会話、属性、感情、話題を分析。", url: "https://www.meltwater.com/jp/products/social-listening", competitors: "Brandwatch、Sprinklr、SNS標準分析。", differentiation: "メディア露出と消費者の会話を横断。" },
    { name: "Consumer Intelligence", valueProp: "オンラインの発言を消費者層と市場判断へ変える。", url: "https://www.meltwater.com/jp/products/consumer-intelligence", competitors: "市場調査、SNS分析、BI。", differentiation: "日本語の高文脈な表現を現地支援と組み合わせる。" },
  ],
  fitTags: ["Media Intelligence", "Social Listening", "Sales", "Customer Success", "Tokyo"],
  comparisons: [
    { arena: "メディアインテリジェンス", companies: ["Meltwater", "Cision", "Brandwatch"], why: "情報範囲、SNS、多言語、社内利用" },
    { arena: "顧客理解", companies: ["Meltwater", "Sprinklr", "市場調査・BI"], why: "文脈、速度、分析工数、意思決定" },
  ],
}, {
  slug: "meltwater", leaderName: "John Box", leaderLabel: "CEO", leaderUrl: "https://www.meltwater.com/jp/about",
  localName: "赤田 将之", localLabel: "Meltwater Japan 執行役員社長", localUrl: "https://www.meltwater.com/jp/about",
  companyId: "meltwater-company", jobId: "meltwater-job", customersId: "meltwater-customers", externalId: "meltwater-external", financeId: "meltwater-finance",
  targets: ["広報・コミュニケーション責任者", "ブランド・マーケティング責任者", "顧客理解・調査・危機管理責任者"],
  heroSummary: "ニュース、SNS、消費者の反応が分散し、広報・マーケティングの成果とリスクを説明しにくい課題を解く。情報の収集・分析・共有を一つの運用へつなぎ、重要な変化の発見、顧客理解、社内判断、施策改善までの時間と工数を減らせるようにする。",
  competitors: "Cision、Brandwatch、Sprinklr、国内監視・SNS分析、市場調査、手作業。情報範囲、文脈、速度、運用支援、総コストで比較。",
  feature: "ニュース、SNS、消費者・インフルエンサーの情報を収集・分析・共有する。",
  advantage: "27,000社、50拠点の収集・支援基盤と、日本語・国内顧客の事例を持つ。",
  benefit: "調査・分析時間、社内共有、反応の発見、施策の改善を早められる可能性がある。",
  evidence: "ネスレ日本の工数半減・解像度倍増やNTTドコモ等の国内事例を公式掲載。",
  marketVerdict: "日本法人17年、被保険者63人、複数の国内事例、東京の営業・顧客成功採用を確認。AI分析を意思決定の速度と成果へ変える力が焦点。",
  marketParagraphs: ["SNS・ニュース・生成AIで評価の発生面が広がり、評判と顧客理解を速く共有する需要が続く。", "今後3〜5年は分析機能の数より、日本語の文脈、データ統制、施策への定着を実証できるかが成長を分ける。"],
  cultureHeadline: "東京の63人規模の法人で、新規受注と大手顧客の利用・更新・拡大を担う。",
  classification: "ハイブリッド", displayLabel: "東京・恵比寿オフィス", officeDays: "週3日", remoteOnly: "完全リモートではない", flexibility: "顧客対応とオフィス勤務を含む",
  goodFor: ["データを顧客の判断と行動変容へ翻訳したい人", "新規開拓または更新・拡大に定量責任を持ちたい人"],
  cautionFor: ["データ提供だけで顧客の運用へ入りたくない人", "週3日の出社が難しい人"],
  unresolved: [
    ["達成可能性", "東京2求人。", "営業quota、顧客成功の更新・拡大目標、達成者比率は。"],
    ["担当", "SMBとEnterpriseの職種。", "担当社数、ARR、業界、契約更新時期の分布は。"],
    ["成果", "国内定量事例あり。", "日本で再現性の高い利用案件と、導入後の価値測定方法は。"],
    ["組織", "被保険者63人。", "営業、導入、顧客成功、支援、データ専門家の人数は。"],
    ["報酬", "公開レンジなし。", "base、変動給、株式、更新・拡大credit、昇進基準は。"],
  ],
});

const teamworks = build({
  checkedAt, slug: "teamworks", name: "Teamworks",
  jobUrl: "https://jobs.ashbyhq.com/teamworks/63c7c86c-8e0e-43e0-a015-c8dde03a07ff",
  officialUrl: "https://teamworks.com/about-us",
  customersUrl: "https://teamworks.com/customer-stories",
  externalUrl: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/",
  financeUrl: "https://teamworks.com/blog/hg-growth-investment",
  salesSnapshot: "チーム連絡、選手の健康・栄養・パフォーマンス、スカウト、映像・データが分かれる課題を、スポーツ組織向けの共通基盤でつなぐ。",
  growthSummary: "2026年に7,000超のスポーツ組織、485人超、17カ国、評価15億ドル超を会社公表。日本で初期の顧客成功職を募集。",
  ipoSummary: "非公開企業。2026年にHgの追加投資を受け評価15億ドル超を会社公表。日本売上・契約数は未開示。",
  milestones: [
    { year: "2006", label: "創業", detail: "大学フットボール選手だったZach Maurides氏がチーム連絡の課題から創業。", source: "company" },
    { year: "2025", label: "Series F", detail: "2.35億ドルを調達。", source: "finance" },
    { year: "2026", label: "日本市場活動", detail: "東京で初の日本向けイベントを開催。", source: "company" },
    { year: "2026", label: "日本採用", detail: "日本から勤務するCustomer Success Manager IIを公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "侍ジャパンの事例は、選手・コーチ・スタッフの日程、連絡、情報を大会準備の一つの運用へまとめる必要を示す。" },
    { title: "製品の成り立ちから見る課題", body: "創業者が大学フットボール選手として、数百人の日程・連絡・行動の分断に直面したことから始まった。" },
    { title: "外部環境の要求から見る課題", body: "データ分析とAIが競技判断に広がるほど、スポーツ組織には選手の健康・能力・行動データの利用目的、権限、人の判断責任を明確にする要求が高まる。" },
  ],
  narrative: [
    { label: "背景", body: "スポーツ組織では日程、連絡、スカウト、健康、栄養、映像、パフォーマンスが別々の人と製品に分かれる。" },
    { label: "課題", body: "分断した運用では、選手とスタッフの動きがずれ、同じデータを使った判断・ケア・準備が遅れる。" },
    { label: "解決策", body: "対象チームで連絡、日程、選手データ、スタッフ業務をつなぎ、連絡漏れ、作業時間、利用、選手の稼働・準備を比較する。" },
    { label: "選定の理由", body: "Kitman Labs、Catapult、Hudl、個別製品、自社運用と比べ、競技業務の統合、導入、データ統制、現場定着で優位な場合に選ぶ。" },
  ],
  openingHook: "選手とスタッフは、今日必要な日程・連絡・パフォーマンス情報を一つの場所で判断できていますか。",
  valueHypothesis: "対象チームで連絡・日程調整工数、情報の反応率、スタッフの作業時間、選手の利用、稼働・準備の指標を導入前後で比較する。",
  objection: "競技ごとの既存製品とメッセージ、表計算で十分。",
  reframe: "機能数ではなく、選手・コーチ・支援スタッフが同じ情報で動く時間、データ統制、現場利用、総コストで比べる。",
  facts: [
    { label: "創業", value: "2006年", detail: "米国ダーラム発。" },
    { label: "導入組織", value: "7,000超", detail: "世界のスポーツ組織。" },
    { label: "従業員", value: "485人超", detail: "17カ国。" },
    { label: "評価額", value: "15億ドル超", detail: "2026年会社公表。", source: "finance" },
    { label: "日本拠点", value: "法人・常設拠点未確認", detail: "市場活動と区別。", source: "company" },
    { label: "日本求人", value: "1件", detail: "Customer Success Manager II。", source: "job" },
  ],
  customers: [
    { company: "侍ジャパン", products: "Teamworks Hub", outcome: "2026年WBCの準備・運用で、選手とスタッフの連絡を支えたと公式事例が紹介。", implication: "日本の国家代表レベルでの運用参照になる。" },
    { company: "Aston Martin Aramco Formula One Team", products: "Teamworks", outcome: "公式顧客事例に掲載。個別の定量成果は未確認。", implication: "移動と専門職の多い国際スポーツ組織の参照になる。" },
  ],
  externalSignals: [
    { label: "個人情報保護", value: "選手データの適正利用", detail: "健康・能力・行動データを扱う場合、利用目的、権限、安全管理、委託先管理が必要。", caveat: "Teamworks導入だけで法令適合を保証しない。" },
    { label: "AIによる競技判断", value: "説明可能性と人の責任", detail: "スカウトや選手評価にAIを使うほど、根拠、偏り、最終判断者を説明できる運用が必要。", caveat: "AI機能の有無を意思決定品質と同一視しない。" },
  ],
  role: "日本からリモートでCustomer Success Manager IIとして働き、国内スポーツ組織の導入、利用、更新、日本向け運用の構築を担う。",
  organization: "485人超が17カ国に分布。日本の初期顧客成功メンバーを募集する一方、日本法人・常設拠点・雇用主体は未確認。",
  careerValue: "日本のスポーツ組織で、日程・連絡・選手データを現場の定着と競技成果へつなぐ初期市場構築の経験。",
  globalHeadcount: "485人超（会社公式）",
  japanPresence: "日本向け市場活動と日本居住者向けリモート求人あり。日本法人・常設拠点は未確認",
  japanSince: "2026年4月に初の日本向けイベントを開催",
  solutions: [
    { name: "Teamworks Hub", valueProp: "選手・コーチ・スタッフの連絡、日程、文書、旅程を統合。", url: "https://teamworks.com/hub", competitors: "メッセージ・カレンダー・スポーツ運用製品。", differentiation: "スポーツ組織の複雑な人・日程・移動に特化。" },
    { name: "Teamworks AMS", valueProp: "選手の健康、トレーニング、パフォーマンスを共有。", url: "https://teamworks.com/ams", competitors: "Kitman Labs、Catapult、個別の健康・パフォーマンス基盤。", differentiation: "Hubや他の競技業務と同じ組織・利用者基盤でつなぐ。" },
    { name: "Teamworks Intelligence", valueProp: "スカウト、選手評価、映像・データの判断を支援。", url: "https://teamworks.com/", competitors: "Hudl、競技別分析、自社データ基盤。", differentiation: "運用と選手データの共通文脈をAIと分析に使う。" },
  ],
  fitTags: ["Pre-entry signal", "SportsTech", "Customer Success", "Remote", "Japan"],
  comparisons: [
    { arena: "スポーツ組織運営", companies: ["Teamworks", "Kitman Labs", "Catapult"], why: "運用範囲、選手データ、現場定着" },
    { arena: "映像・競技分析", companies: ["Teamworks", "Hudl", "競技別製品"], why: "データ統合、AI、導入、コスト" },
  ],
}, {
  slug: "teamworks", leaderName: "Zach Maurides", leaderLabel: "創業者・CEO", leaderUrl: "https://teamworks.com/about-us",
  localName: "未確認", localLabel: "日本・APAC責任者", localUrl: "https://teamworks.com/blog/teamworks-launch-japan",
  companyId: "teamworks-company", jobId: "teamworks-job", customersId: "teamworks-customers", externalId: "teamworks-external", financeId: "teamworks-finance",
  targets: ["プロ・代表チームの組織運営責任者", "選手パフォーマンス・医療・栄養責任者", "スカウト・データ・技術責任者"],
  heroSummary: "スポーツ組織で日程、連絡、健康・栄養、スカウト、映像・分析が分かれ、選手と支援スタッフの判断が遅れる課題を解く。競技業務に特化した共通基盤で情報と行動をつなぎ、現場運用と選手の準備を速める。",
  competitors: "Kitman Labs、Catapult、Hudl、連絡・健康・映像・分析の個別製品、自社運用。統合範囲、データ統制、現場定着、総コストで比較。",
  feature: "スポーツ組織の連絡、日程、選手データ、スカウト、分析をつなぐ。",
  advantage: "7,000超のスポーツ組織と主要プロリーグの運用知見、複数製品の共通基盤を持つ。",
  benefit: "連絡・調整工数、情報の反応率、スタッフの作業、選手の利用・準備を改善できる可能性がある。",
  evidence: "侍ジャパンの国内参照と、世界7,000超のスポーツ組織を会社公表。",
  marketVerdict: "日本向け市場活動、侍ジャパンの参照、日本居住者向け求人を確認。法人・常設拠点・雇用主体は未確認で、初期の進出シグナルとして扱う。",
  marketParagraphs: ["データとAIが競技・選手管理に広がり、複数専門職が同じ情報で動く基盤への需要が増える。", "今後3〜5年の日本では、代表チームの単発参照を、雇用・日本語支援・データ統制・複数顧客の更新へ変えられるかが進出の定着を分ける。"],
  cultureHeadline: "17カ国に分散する組織のなかで、日本の顧客成功の型を作る初期役割。",
  classification: "フルリモート", displayLabel: "日本国内リモート", officeDays: "国内オフィスは未確認", remoteOnly: "公式求人はリモート", flexibility: "日本国内の顧客訪問・出張を含む",
  goodFor: ["日本の初期顧客成功と運用の型を作りたい人", "スポーツ現場の判断と技術をつなぎたい人"],
  cautionFor: ["国内法人・オフィスの確立を必須とする人", "定まった導入手順と分業だけを望む人"],
  unresolved: [
    ["雇用", "日本居住者向け求人。", "雇用主体、社会保険、税務・労務責任、福利厚生は。"],
    ["顧客", "日本を成長市場と明記。", "国内契約組織数、担当社数、更新率、導入期間は。"],
    ["組織", "初期市場構築。", "日本の営業、導入、技術支援、顧客成功の人数と責任は。"],
    ["データ", "選手データを扱う。", "保管地域、利用目的、権限、保存、事故対応、AI利用の責任は。"],
    ["報酬", "現金・株式の公式掲載あり。", "変動給144万円の指標、支給条件、株式、昇給・昇進基準は。"],
  ],
}, true);

function addGbizAudit(intelligence: CompanyPublicIntelligence, input: { slug: string; label: string; url: string; value: string; detail: string; office: string; since: string }) {
  const sourceId = "gbiz-headcount-" + input.slug;
  intelligence.sources.push({ id: sourceId, label: input.label, url: input.url, kind: "公的機関", scope: "日本法人・事業所情報・被保険者数", checkedAt });
  intelligence.companyStats.japanHeadcount = { value: input.value, detail: input.detail, sourceId };
  intelligence.companyStats.japanOffice = { value: input.office, detail: "公式求人・会社情報と法人検索で確認できる範囲。", sourceId };
  intelligence.companyStats.japanSince = { value: input.since, detail: "法人設立年と営業開始年が異なる場合がある。", sourceId };
}

addGbizAudit(darktrace, { slug: "darktrace", label: "gBizINFO ダークトレース・ジャパン株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=6120001194600", value: "43人", detail: "東京事業所の厚生年金保険・健康保険被保険者数。役員・制度対象外・業務委託等を含む総従業員数ではない。", office: "東京都渋谷区桜丘町", since: "2015年" });
addGbizAudit(meltwater, { slug: "meltwater", label: "gBizINFO Meltwater Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=3011001061960", value: "63人", detail: "厚生年金保険・健康保険適用事業所の被保険者数。役員・制度対象外・業務委託等を含む総従業員数ではない。", office: "東京都渋谷区恵比寿", since: "2009年" });
addGbizAudit(teamworks, { slug: "teamworks", label: "gBizINFO Teamworks法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", value: "対象法人未特定", detail: "米国Teamworksと結びつく国内法人・事業所を特定できず、日本法人での想定従業員数を0人とは扱わない。", office: "日本法人住所なし", since: "日本拠点進出は未確認" });

export const daily20260908IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  darktrace,
  meltwater,
  teamworks,
};
