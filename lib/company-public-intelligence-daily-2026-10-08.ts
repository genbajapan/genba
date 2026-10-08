import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-08";

const babelStreet = buildDailyCompanyIntelligence({
  slug: "babel-street", name: "Babel Street", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/babelstreet/jobs/8239615", officialUrl: "https://www.babelstreet.com/about-us",
  customersUrl: "https://www.babelstreet.com/resources/case-studies/nomura-research-institute", financeUrl: "https://www.babelstreet.com/about-us/newsroom/babel-street-announces-strategic-acquisition-of-vertical-knowledge",
  problem: "本人・企業・取引先・脅威に関する公開情報が言語、表記、情報源ごとに分散すると、審査担当者は別人を同一人物と誤認したり、重要なつながりを見落としたりしやすい。",
  origin: "2009年に、国境・言語・表記をまたぐ公開情報を、政府・規制産業の高い説明責任に耐える判断材料へ変える会社として創業した。",
  externalNeed: "制裁、マネーロンダリング、偽装、地政学、サプライチェーン攻撃が複雑になる一方、生成AIによる合成情報も増え、組織は速度だけでなく根拠、出典、再現性を保って審査する必要がある。",
  solution: "多言語の公開情報、固有表現、人物・組織の関係をAIで結び、本人照合、調査、取引先審査、脅威監視を支えるリスク情報基盤を提供する。",
  selection: "一般検索、個別の制裁データベース、手作業の照合と比べ、言語横断の名前照合、分析可能なデータ、関係の可視化、出典追跡、既存審査系への接続で比較する。",
  growth: "会社公式は日本を含む国際拠点を案内し、2024年にVertical Knowledgeを買収。日本では野村総合研究所の金融機関向けAML/CFT支援事例と、現行SDR求人を確認した。",
  role: "Sales Development Representativeが日本と選定されたAPAC市場で対象組織・意思決定者を調べ、問い合わせ、外向き開拓、イベント、パートナー施策から案件を作る。",
  organization: "会社公式は日本での事業拠点を明記するが、日本法人名、所在地、国内の正確な在籍人数は未確認。日本を勤務地とする公式求人1件を確認した。",
  career: "多言語データ、本人確認、公開情報調査、規制・安全保障を、行政・金融・企業の意思決定へつなぐ営業開拓経験。",
  globalHeadcount: "201〜500人規模（LinkedIn会社ページの公開レンジ。正確な現員は会社公式で非公開）", japanPresence: "会社公式が日本での事業拠点を明記。日本を勤務地とする公式求人1件を確認", japanSince: "日本での事業開始時期は未確認",
  customer: { company: "野村総合研究所", outcome: "Babel Street Matchを日本の地域金融機関向けAML/CFTソリューションへ組み込み、外国人名を含む照合の有効性向上を支える事例を会社公式が紹介。定量成果は未確認。" },
  facts: [["創業","2009年","多言語の公開情報を高い説明責任のある判断へ変える事業を開始。"],["事業","リスク情報","本人照合、調査、取引先・脅威リスクを支援。"],["買収","Vertical Knowledge","2024年にデータ収集・分析能力を拡張。"],["国内事例","野村総合研究所","地域金融機関向けAML/CFTでMatchを活用。"],["日本体制","事業拠点あり","法人名・所在地・正確な人数は未確認。"],["日本求人","1件","Sales Development Representative。"]],
  products: [["Babel Street Match","表記や言語が異なる人物・組織名を照合し、誤検知と見落としを減らす。","https://www.babelstreet.com/products/match"],["Babel Street Insights","公開情報を検索・分析し、人物、組織、出来事、関係を調査する。","https://www.babelstreet.com/products/insights"],["Babel Street Data","多言語の公開情報を分析可能なデータとして提供する。","https://www.babelstreet.com/products/data"]],
  competitors: "Palantir、Sayari、Recorded Future、Dow Jones Risk & Compliance、LexisNexis Risk Solutions、一般検索・内製調査",
  leader: ["Benji Hutchinson","Chief Executive Officer","https://www.babelstreet.com/about-us/leadership"], local: ["未確認","Japan Leadership","https://www.babelstreet.com/about-us"],
  work: ["未確認","Japan","出社日数は未確認","完全リモートの明記なし","国内拠点、出社、APAC出張、時差連携を選考で確認"],
}, checkedAt);
babelStreet.sources.push(
  { id: "babel-street-japan-job", label: "Babel Street Sales Development Representative", url: "https://job-boards.greenhouse.io/babelstreet/jobs/8239615", kind: "企業公式", scope: "日本求人・役割・報酬レンジ", checkedAt },
  { id: "babel-street-japan-case", label: "Babel Street and Nomura Research Institute", url: "https://www.babelstreet.com/resources/case-studies/nomura-research-institute", kind: "企業公式", scope: "国内顧客事例・AML/CFT", checkedAt },
  { id: "babel-street-japan-presence", label: "Babel Street company presence", url: "https://www.babelstreet.com/about-us/newsroom/major-asian-national-defense-agency-selects-babel-street-to-enhance-government-screening-and-investigations", kind: "企業公式", scope: "日本を含む国際拠点", checkedAt },
  { id: "babel-street-linkedin", label: "Babel Street LinkedIn", url: "https://www.linkedin.com/company/babel-street/", kind: "外部集計", scope: "グローバル従業員規模の公開レンジ", checkedAt },
  { id: "gbiz-headcount-babel-street", label: "gBizINFO Babel Street法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報と被保険者数の確認", checkedAt },
);
babelStreet.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本での事業拠点と求人は確認したが、gBizINFOで結びつく国内法人と被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-babel-street" };

const hudl = buildDailyCompanyIntelligence({
  slug: "hudl", name: "Hudl", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/hudl/jobs/8108360", officialUrl: "https://www.hudl.com/about",
  customersUrl: "https://www.hudl.com/blog/hudl-renews-multi-year-partnership-with-japan-professional-football-league", financeUrl: "https://www.hudl.com/newsroom",
  problem: "試合・練習の映像、選手データ、スカウティング情報が撮影機器や担当者ごとに分かれると、コーチと分析担当は準備に時間を使い、同じ根拠で選手・戦術を判断しにくい。",
  origin: "2006年、ネブラスカ大学のフットボールチームで映像と紙のプレーブック配布に時間がかかる現場を見たDavid Graffが、Brian Kaiser、John Wirtzと最初の製品を作った。",
  externalNeed: "競技団体は映像、選手追跡、AI分析を使う一方、データ権利、選手のプライバシー、現場での使いやすさを保ち、分析を実際の練習・編成・獲得判断へ反映する必要がある。",
  solution: "AIカメラ、映像共有、タグ付け、競技分析、スカウティング、選手データを一つのスポーツ技術基盤として提供する。",
  selection: "個別の撮影、手作業タグ付け、データ提供会社と比べ、撮影から映像・データ分析、共有、スカウティングまでの一貫性、競技別の運用、導入チーム網で比較する。",
  growth: "日本語サイトは600万超の利用者、16万超のチーム、2,600超のプロクラブを案内。2026年にJリーグとの複数年提携を更新し、日本地域責任者と初のブランドアンバサダーを任命した。",
  role: "Account Executive IIが日本のバスケットボール、バレーボール、野球を中心に、プロ組織の新規獲得と既存顧客の拡大を担う。",
  organization: "Hudl Japan K.K.と渋谷の東京オフィスを会社公式資料で確認。日本地域責任者はKengo Miura。国内の正確な在籍人数は未確認。",
  career: "プロスポーツの競技現場、映像・データ、SaaS営業を横断し、コーチと分析担当の判断・勝利へ技術を定着させる経験。",
  globalHeadcount: "2,000人（日本語公式サイト）", japanPresence: "Hudl Japan K.K.、渋谷オフィス、日本地域責任者、東京求人1件を確認", japanSince: "日本法人の設立年は未確認",
  customer: { company: "Jリーグ", outcome: "100年構想リーグ、J1、J2、J3、カップ、プレーオフ等の映像・データをHudl Wyscoutで提供する複数年提携を2026年に更新。単独の競技成果は示していない。" },
  facts: [["創業","2006年","大学フットボールの映像共有課題から創業。"],["利用者","600万超","日本語公式サイト。"],["導入チーム","16万超","日本語公式サイト。"],["プロクラブ","2,600超","日本語公式サイト。"],["国内提携","Jリーグ","2026年に複数年提携を更新。"],["日本求人","1件","東京のAccount Executive II。"]],
  products: [["Hudl Pro Suite","撮影、映像分析、選手データ、スカウティングをプロ競技向けに統合する。","https://jp.hudl.com/ja/"],["Hudl Wyscout","世界の試合映像と選手データをスカウティング・分析へ提供する。","https://www.hudl.com/products/wyscout"],["Hudl Focus","AIカメラで試合・練習を自動撮影し、共有・分析へつなぐ。","https://www.hudl.com/products/focus"]],
  competitors: "Catapult Sports、Stats Perform、Spiideo、Pixellot、競技団体・クラブの個別撮影・分析基盤",
  leader: ["David Graff","Co-Founder and Chief Executive Officer","https://www.hudl.com/about/leadership"], local: ["Kengo Miura","Regional Director for Japan","https://www.hudl.com/blog/hudl-appoints-kengo-miura-as-regional-director-japan"],
  work: ["ハイブリッド","Tokyo","週3日出社","完全リモートではない","月次の顧客訪問、国内移動、競技日程に伴う対応を選考で確認"],
}, checkedAt);
hudl.sources.push(
  { id: "hudl-japan-office", label: "Hudl office locations", url: "https://www.hudl.com/contact/", kind: "企業公式", scope: "渋谷オフィス所在地", checkedAt },
  { id: "hudl-japan-entity", label: "Hudl Master Subscription Agreement", url: "https://static.hudl.com/craft/legal/Hudl-Master-Subscription-Agreeement_2026-02-09.pdf", kind: "企業公式", scope: "Hudl Japan K.K.の契約主体", checkedAt },
  { id: "hudl-japan-job", label: "Hudl Account Executive II", url: "https://job-boards.greenhouse.io/hudl/jobs/8108360", kind: "企業公式", scope: "東京求人・働き方・報酬", checkedAt },
  { id: "hudl-japan-leader", label: "Hudl appoints Regional Director for Japan", url: "https://www.hudl.com/blog/hudl-appoints-kengo-miura-as-regional-director-japan", kind: "企業公式", scope: "日本地域責任者・市場方針", checkedAt },
  { id: "gbiz-headcount-hudl", label: "gBizINFO Hudl Japan法人・事業所確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報と被保険者数の掲載状況", checkedAt },
);
hudl.companyStats.japanOffice = { value: "東京都渋谷区渋谷2-24-12", detail: "渋谷スクランブルスクエア37階のWeWork内。会社公式の拠点一覧。", sourceId: "hudl-japan-office" };
hudl.companyStats.japanHeadcount = { value: "掲載なし", detail: "日本法人、東京拠点、地域責任者、求人は確認したが、gBizINFOで制度対象外を含む正確な在籍人数を確認できず、0人とは扱わない。", sourceId: "gbiz-headcount-hudl" };

const claroty = buildDailyCompanyIntelligence({
  slug: "claroty", name: "Claroty", jobConfirmed: true,
  jobUrl: "https://claroty.com/open-positions/AF.A6D", officialUrl: "https://claroty.com/company",
  customersUrl: "https://claroty.com/resources/case-studies", financeUrl: "https://claroty.com/press-releases/claroty-secures-150-million-in-series-f-funding-to-lead-charge-on-securing-the-worlds-mission-critical-infrastructure",
  problem: "工場設備、医療機器、建物、公共インフラの接続資産は止めにくく、古い機器や独自通信も多いため、IT向けの資産管理と防御だけでは所在、脆弱性、通信、事業影響を捉えにくい。",
  origin: "2015年に、産業制御を含む重要インフラを保護する目的で創業し、工場から医療、建物、公共部門のサイバーフィジカルシステムへ対象を広げた。",
  externalNeed: "ランサムウェアやサプライチェーン攻撃が物理的な停止・安全へ波及し、規制と経営は、接続資産を止めずに可視化し、事業影響に基づいて脆弱性と接続を優先することを求める。",
  solution: "工場、医療、建物、公共部門の接続資産を発見・分類し、脆弱性、ネットワーク、遠隔接続、脅威を一つのCPS保護基盤で管理する。",
  selection: "一般的な資産管理、ネットワーク監視、脆弱性診断と比べ、独自プロトコルと機器文脈、受動的な可視化、事業影響、現場を止めにくい導入、IT・現場協働で比較する。",
  growth: "2026年にSeries Fで1.5億ドルを調達。会社公式は1,300超の顧客、22,000超の導入拠点、60超の国、Fortune 100の24社を案内し、日本向けリモートSDRを募集する。",
  role: "Sales Development Representativeが日本を含むAPJで工場、医療、建物、公共部門の対象企業を調べ、営業・マーケティングと案件を作る。",
  organization: "APJ本部はシンガポール。会社公式の拠点一覧に日本はなく、日本法人・常設拠点・国内の正確な在籍人数は未確認。日本を対象とするリモート求人を確認した。",
  career: "OT、医療機器、IoT、事業継続を、IT・セキュリティ・現場部門の共同投資へ変える日本市場の営業開拓経験。",
  globalHeadcount: "700人超（2025年会社公式発表）", japanPresence: "日本向けリモートの公式求人1件を確認。日本法人・常設拠点は未確認", japanSince: "日本向け活動の開始時期は未確認",
  customer: { company: "Pfizer、BHP等のグローバル顧客", outcome: "工場・重要設備の可視化、監視、リスク優先付けに活用する事例を会社公式が紹介。日本企業の社名入り事例と日本固有の定量成果は未確認。" },
  facts: [["創業","2015年","重要インフラの接続資産保護から開始。"],["顧客","1,300社超","会社公式サイト。"],["導入拠点","22,000超","60超の国。"],["Series F","1.5億ドル","2026年1月の会社発表。"],["日本体制","拠点未確認","APJ本部はシンガポール。"],["日本向け求人","1件","リモートのSales Development Representative。"]],
  products: [["Claroty xDome","クラウドで接続資産、脆弱性、接続、脅威を管理する。","https://claroty.com/xdome"],["Continuous Threat Detection","オンプレミス環境で産業・重要設備の通信と脅威を監視する。","https://claroty.com/continuous-threat-detection"],["xDome Secure Access","重要設備への遠隔接続を制御・監査する。","https://claroty.com/xdome-secure-access"]],
  competitors: "Nozomi Networks、Dragos、Armis、Microsoft Defender for IoT、Palo Alto Networks、ネットワーク監視・資産台帳の内製",
  leader: ["Yaniv Vardi","Chief Executive Officer","https://claroty.com/company"], local: ["未確認","Japan Leadership","https://claroty.com/open-positions"],
  work: ["フルリモート","Japan / Singapore","日本またはシンガポールを拠点","日本からのリモート勤務を求人で確認","雇用主体、出社・顧客訪問、APJ担当比率、時差連携を確認"],
  preEntry: {
    verdict: "進出可能性は中程度。日本語・日本市場を明示したリモートSDR求人がある一方、日本法人、常設拠点、国内の導入・保守体制は未確認。",
    signal: "日本またはシンガポールを拠点とし、日本語を母語水準で求めるAPJ営業開拓職を会社公式が募集。",
    hurdle: "国内の契約・請求・導入・障害対応主体、日本語の技術支援、社名入り国内顧客事例を確認できない。",
    conditions: ["日本での契約・雇用・保守の主体を明確にする。","工場・医療の現場を日本語で支える技術・顧客成功体制を置く。","国内顧客の導入目的と定量成果を公開する。","営業開拓を日本専任の営業・技術採用へつなげる。"],
    watches: ["日本法人・常設拠点","日本専任の営業・技術求人","国内顧客の社名入り事例","国内パートナー","日本語の導入・障害対応","SDR採用後の組織拡張"],
  },
}, checkedAt);
if (claroty.salesFabeOverview) {
  claroty.salesFabeOverview.summary = "製造・医療・ビル・公共インフラの運用部門に対し、「止めにくい接続資産を正確に把握できない」「脆弱性と事業影響の優先順位を決められない」「遠隔接続と脅威を一貫して統制できない」という課題を解決する。主力製品は、接続資産の発見・分類から脆弱性、通信、遠隔接続、脅威までを一つのCPS保護基盤で管理する。競合優位性は、独自通信や機器の文脈を、現場を止めにくい受動的な可視化と事業影響の優先付けへつなげる点にある。顧客への一番のメリットは、ITと現場が同じ資産・リスク情報で意思決定し、停止・安全・監査のリスクを優先順位に沿って改善できることにある。";
}
claroty.sources.push(
  { id: "claroty-japan-job", label: "Claroty Sales Development Representative", url: "https://claroty.com/open-positions/AF.A6D", kind: "企業公式", scope: "日本向け求人・役割・働き方", checkedAt },
  { id: "claroty-office-list", label: "Claroty Careers and worldwide offices", url: "https://claroty.com/careers", kind: "企業公式", scope: "APJ本部・世界拠点・日本拠点未掲載", checkedAt },
  { id: "claroty-series-f", label: "Claroty Series F", url: "https://claroty.com/press-releases/claroty-secures-150-million-in-series-f-funding-to-lead-charge-on-securing-the-worlds-mission-critical-infrastructure", kind: "企業公式", scope: "資金調達・顧客・成長", checkedAt },
  { id: "gbiz-headcount-claroty", label: "gBizINFO Claroty法人・事業所確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報と被保険者数の確認", checkedAt },
);
claroty.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本向け求人は確認したが、日本法人・事業所と被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-claroty" };
if (claroty.marketStatus.japanGrowth) {
  claroty.marketStatus.japanGrowth.headline = "日本向けリモート求人を確認。法人・常設拠点は未確認";
  claroty.marketStatus.japanGrowth.narrative = "日本語を母語水準で求める営業開拓職は応募可能だが、国内の契約・雇用・導入・保守主体は公開情報だけでは確認できない。";
}

for (const intelligence of [babelStreet, hudl, claroty]) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.map((item) => item.year === "2026.09" ? { ...item, year: "2026.10" } : item);
}

export function applyDaily20261008Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.veeam;
  if (!intelligence) return;
  const sourceId = "veeam-solution-architect-closure-20261008";
  const url = "https://careers.veeam.com/en/job/tokyo/solution-architect-professional-services/22681/99420332992";
  if (!intelligence.sources.some((source) => source.id === sourceId)) {
    intelligence.sources.push({ id: sourceId, label: "Solution Architect (Professional Services)求人終了", url, kind: "企業公式", scope: "旧公式URLの404と現行採用一覧を確認", checkedAt });
  }
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => item.label !== "Solution Architect (Professional Services)求人終了"),
    { year: "2026.10.08", label: "Solution Architect (Professional Services)求人終了", detail: "旧公式求人URLが404を返し、現行の公式採用一覧にも当該職を確認できなかったため掲載から除外。これだけで日本事業縮小を意味しない。", sourceId },
  ];
}

export const daily20261008IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  "babel-street": babelStreet,
  hudl,
  claroty,
};
