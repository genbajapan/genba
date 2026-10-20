import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-21";

const reaktor = buildDailyCompanyIntelligence({
  slug: "reaktor", name: "Reaktor", jobConfirmed: true,
  jobUrl: "https://www.reaktor.com/ja-jp/careers/senior-technical-lead-tokyo", officialUrl: "https://www.reaktor.com/ja-jp/",
  customersUrl: "https://www.reaktor.com/work", financeUrl: "https://www.group.reaktor.com/en/ipo",
  problem: "企業の新規サービス開発が戦略、デザイン、技術、データへ分断すると、判断が遅れ、利用者の反応を学ぶ前に仕様と組織だけが大きくなる。",
  origin: "2000年にフィンランドで、ソフトウェアを納品物ではなく、顧客と同じチームで事業と利用者の価値まで作る会社として創業した。",
  externalNeed: "AIで試作と実装が速くなるほど、企業は作る量ではなく、利用者の行動、事業成果、技術品質、運用責任を短い学習サイクルでつなぐ必要がある。",
  solution: "事業設計、顧客体験、ソフトウェア開発、データ・AIを一つの混成チームへ集め、顧客組織と共に構想から本番運用まで進める。",
  selection: "大手コンサルティング会社、SIer、デザイン会社、内製開発と比べ、意思決定者と実装者の距離、手を動かす技術リード、顧客チームへの能力移転、継続的な改善で比較する。",
  growth: "2000年創業。Reaktor Groupは2026年第1四半期に690人、2025年売上1.177億ユーロ、119の稼働顧客を公表。日本は2014年設立で、会社概要は2023年7月時点31人。",
  role: "東京のテックリード＆クライアントリードが、国内大手企業のプロダクトで技術方針、実装、顧客関係、案件の成長を横断して担う。",
  organization: "Reaktor Japan株式会社。東京・恵比寿に拠点を持ち、会社概要は2023年7月時点31人。現在値と職種別人数は未確認。",
  career: "顧客の経営・プロダクト課題を技術設計と実装へ落とし、同じ案件で技術品質、利用者価値、顧客関係、事業の拡大まで持つ経験。",
  globalHeadcount: "690人（Reaktor Group、2026年第1四半期会社公式）", japanPresence: "Reaktor Japan株式会社、東京・恵比寿。会社概要は2023年7月時点31人", japanSince: "2014年",
  customer: { company: "S Group", outcome: "小売・サービスのデジタル接点を共同で継続開発し、顧客体験と組織能力を同時に更新する事例を会社公式で公開。日本企業の定量成果は今回未確認。" },
  facts: [["創業","2000年","フィンランドで創業。"],["従業員","690人","Reaktor Groupの2026年第1四半期。"],["2025年売上","1.177億ユーロ","Reaktor Groupの会社公式。"],["稼働顧客","119社","2026年第1四半期。"],["日本法人","2014年設立","Reaktor Japan株式会社。"],["日本求人","1件","テックリード＆クライアントリード。"]],
  products: [["Digital Product Development","事業、体験、技術を一つのチームで設計・実装。","https://www.reaktor.com/ja-jp/"],["AI & Data","データ基盤、分析、機械学習、生成AIを業務と製品へ組み込む。","https://www.reaktor.com/ja-jp/"],["Strategy & Design","顧客調査、サービス設計、組織・事業の変革を支援。","https://www.reaktor.com/ja-jp/"]],
  competitors: "大手コンサルティング会社、SIer、デザイン会社、内製開発組織",
  leader: ["Mika Sutinen","President and CEO, Reaktor Group","https://www.group.reaktor.com/en/ipo"], local: ["井上 純","代表取締役","https://www.reaktor.com/ja-jp/about"],
  work: ["ハイブリッド","恵比寿・顧客先・リモート","固定出社日数は未確認","完全リモートではない","顧客先勤務と出張の可能性あり。担当案件、売上責任、評価指標を選考で確認"],
}, checkedAt);
reaktor.sources.push(
  { id: "reaktor-about", label: "Reaktor Japan会社概要", url: "https://www.reaktor.com/ja-jp/about", kind: "企業公式", scope: "日本法人・所在地・従業員数・代表者", checkedAt },
  { id: "reaktor-group", label: "Reaktor Group IPO information", url: "https://www.group.reaktor.com/en/ipo", kind: "企業公式", scope: "グループ規模・売上・顧客数・経営陣", checkedAt },
  { id: "reaktor-tokyo", label: "Reaktor Tokyo", url: "https://www.reaktor.com/careers/locations/tokyo", kind: "企業公式", scope: "東京組織・拠点・沿革", checkedAt },
  { id: "reaktor-sgroup", label: "S Group customer story", url: "https://www.reaktor.com/work/s-group", kind: "企業公式", scope: "顧客との共同開発・導入目的", checkedAt },
  { id: "reaktor-job", label: "テックリード＆クライアントリード", url: "https://www.reaktor.com/ja-jp/careers/senior-technical-lead-tokyo", kind: "企業公式", scope: "現行求人・勤務地・言語・責任", checkedAt },
  { id: "gbiz-headcount-reaktor", label: "gBizINFO Reaktor Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=7011101069256", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
reaktor.companyStats.japanOffice = { value: "東京都渋谷区恵比寿3-28-2", detail: "会社公式の日本法人概要。", sourceId: "reaktor-about" };
reaktor.companyStats.japanHeadcount = { value: "31人", detail: "会社公式が掲載する2023年7月時点の人数。現在値ではない。", sourceId: "reaktor-about" };
if (reaktor.salesMarketOutlook) {
  reaktor.salesMarketOutlook.cases = [{ company: "国内公式事例は未確認", need: "S Groupとの共同開発は海外公式事例。日本企業の実名・定量成果は今回確認できず、日本での再現性は別途検証が必要。", sourceId: "reaktor-sgroup" }];
}

const greenHills = buildDailyCompanyIntelligence({
  slug: "green-hills-software", name: "Green Hills Software", jobConfirmed: true,
  jobUrl: "https://www.ghs.com/corporate/jobs_field_app_engineer_japan.html", officialUrl: "https://www.ghs.com/japan/",
  customersUrl: "https://www.ghs.com/news/20260527_aisin_nxp_driver_monitoring.html", financeUrl: "https://www.ghs.com/corporate/",
  problem: "自動車、航空宇宙、医療、産業機器では、組み込みソフトウェアの障害や侵害が人命、事業停止、製品回収へ直結し、開発速度だけでは採用判断ができない。",
  origin: "Dan O'Dowdらが1982年に米国で創業し、組み込み開発者が高信頼なソフトウェアを設計、検証、保護できる道具を作ってきた。",
  externalNeed: "車載機器のソフトウェア化と接続が進むほど、企業は性能に加え、機能安全、サイバーセキュリティ、分離、長期保守を認証と実装の両面で証明する必要がある。",
  solution: "INTEGRITYリアルタイムOS、MULTI開発環境、仮想化、セキュリティ基盤を組み合わせ、重要機器の開発、分離、検証、保護を支える。",
  selection: "QNX、Wind River、Linux・各種RTOS、半導体各社の開発環境、内製基盤と比べ、安全認証、セキュリティ設計、実時間性能、開発・デバッグ、長期支援を同じ製品計画で比較する。",
  growth: "1982年創業の非公開企業。会社公式は創業以来の黒字、過去の平均年率約30%の売上成長、50カ国超での利用を公表。日本は2018年に現地法人を開設した。",
  role: "東京のField Application Engineerが、組み込み顧客の製品評価、技術提案、導入、研修、デバイスドライバー、販売前後の技術支援を担う。",
  organization: "Green Hills Software合同会社。東京・神宮前に拠点を持つ。国内の正確な在籍人数と職種別人数は未確認。",
  career: "安全性とセキュリティが厳しい組み込み製品で、顧客の設計判断、評価、採用、量産、長期運用を技術面から支える経験。",
  globalHeadcount: "正確な現員は会社公式で未確認", japanPresence: "Green Hills Software合同会社、東京・神宮前。国内人数は未確認", japanSince: "2018年4月",
  customer: { company: "AISIN", outcome: "AI対応の運転者監視システムにGreen HillsのRTOSと開発道具を選定し、NXPの車載基盤上で2028年の初回リリースを目指すと会社公式で発表。" },
  facts: [["創業","1982年","米国で創業。"],["収益性","創業以来黒字","会社公式。"],["売上成長","平均年率約30%","会社公式の過去実績。"],["展開","50カ国超","会社公式。"],["日本法人","2018年開設","東京で営業・技術支援を開始。"],["日本求人","1件","Field Application Engineer。"]],
  products: [["INTEGRITY RTOS","安全性とセキュリティが重要な組み込み機器向けリアルタイムOS。","https://www.ghs.com/products/rtos/integrity.html"],["MULTI IDE","組み込みソフトウェアの編集、コンパイル、デバッグ、性能分析を統合。","https://www.ghs.com/products/MULTI_IDE.html"],["INTEGRITY Multivisor","異なる安全性・セキュリティ領域を同じ機器上で分離・統合。","https://www.ghs.com/products/rtos/integrity_virtualization.html"]],
  competitors: "QNX、Wind River、Linux・各種RTOS、半導体各社の開発環境",
  leader: ["Dan O'Dowd","Founder and Chief Executive Officer","https://ghs.com/corporate/management_team.html"], local: ["未確認","日本事業責任者","https://www.ghs.com/japan/"],
  work: ["ハイブリッド","東京・顧客先","固定出社日数は未確認","完全リモートではない","勤務時間・場所は柔軟。顧客訪問、展示会、国内外出張あり"],
}, checkedAt);
greenHills.sources.push(
  { id: "ghs-company", label: "Green Hills Software会社情報", url: "https://www.ghs.com/corporate/", kind: "企業公式", scope: "創業・収益性・成長・展開", checkedAt },
  { id: "ghs-japan", label: "Green Hills Software Japan", url: "https://www.ghs.com/japan/", kind: "企業公式", scope: "日本法人・東京拠点・連絡先", checkedAt },
  { id: "ghs-japan-launch", label: "日本法人開設発表", url: "https://www.ghs.com/news/20180416_japan_office.html", kind: "企業公式", scope: "日本進出時期・国内支援", checkedAt },
  { id: "ghs-aisin", label: "AISIN選定発表", url: "https://ghs.com/news/20260527_aisin_nxp_driver_monitoring.html", kind: "企業公式", scope: "日本企業の選定・用途・計画", checkedAt },
  { id: "ghs-job", label: "Field Application Engineer", url: "https://www.ghs.com/corporate/jobs_field_app_engineer_japan.html", kind: "企業公式", scope: "現行求人・勤務地・言語・責任", checkedAt },
  { id: "gbiz-headcount-ghs", label: "gBizINFO Green Hills Software法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
greenHills.companyStats.japanOffice = { value: "東京都渋谷区神宮前1-5-8", detail: "会社公式の日本拠点。", sourceId: "ghs-japan" };
greenHills.companyStats.japanHeadcount = { value: "対象法人の人数未確認", detail: "日本法人と所在地は確認したが、gBizINFOで事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-ghs" };

const orca = buildDailyCompanyIntelligence({
  slug: "orca-ai", name: "Orca AI", jobConfirmed: true,
  jobUrl: "https://www.comeet.com/jobs/Orca-AI/86.003/customer-success-manager/9D.27B", officialUrl: "https://www.orca-ai.io/about/",
  customersUrl: "https://www.orca-ai.io/case/improving-safety-and-reducing-fuel-costs-for-global-shipping-giant-seaspan-corporation/", financeUrl: "https://www.orca-ai.io/blog/2025-in-review-scaling-impact-across-global-fleets/",
  problem: "船舶の航海では、見張り、レーダー、カメラ、航路、気象、船隊データが分かれ、衝突リスク、燃料消費、到着遅延を陸上と船上で同じ状況認識にできない。",
  origin: "海軍と商船の経験を持つYarden GrossとDor Ravivが、海上の視認と判断をコンピュータビジョンで補うため2018年にイスラエルで創業した。",
  externalNeed: "船員不足、脱炭素、保険・安全要求、港湾混雑が重なるほど、船社は航行判断を人の経験だけに閉じず、船隊全体で検証できるデータと運用へ変える必要がある。",
  solution: "船上カメラ、センサー、コンピュータビジョン、航海データを組み合わせ、衝突回避、見張り、船隊の状況把握、燃料効率、遠隔運航を支援する。",
  selection: "既存のレーダー・ECDIS、船橋メーカー、船隊管理、内製分析と比べ、視覚認識、船上・陸上の共通画面、導入船隊の学習、運航判断への組込み、安全と燃料の両方で比較する。",
  growth: "2018年創業。2025年3月に7,250万ドルのSeries Bを調達し、累計調達額1.11億ドルを公表。Anglo-Easternの750隻超の管理船隊との戦略提携も発表した。",
  role: "日本のCustomer Success Managerが、国内顧客の主要窓口として導入、利用、満足、継続、拡大を持ち、日本の商習慣と海外チームをつなぐ。",
  organization: "日本法人・国内拠点は未確認。日本在住のCustomer Success Manager求人は確認したが、雇用主体、既存顧客名、国内チーム人数は未確認。",
  career: "日本市場の最初期に、海事顧客の導入と利用成果、継続・拡大、海外組織との運用をまとめ、顧客成功の型を作る経験になり得る。",
  globalHeadcount: "正確な現員は会社公式で未確認", japanPresence: "日本法人・国内拠点は未確認。日本のCustomer Success Manager求人1件を確認", japanSince: "未進出（日本担当採用の兆しあり）",
  customer: { company: "Seaspan", outcome: "64隻で68万海里超・208航海を運用し、1隻当たり年500トンのCO2削減見込みを会社公式事例で公表。" },
  facts: [["創業","2018年","イスラエルで創業。"],["Series B","7,250万ドル","2025年3月。"],["累計調達","1.11億ドル","2025年会社公式。"],["提携船隊","750隻超","Anglo-Easternの管理船隊。"],["日本法人","未確認","国内法人・拠点を確認できず。"],["日本求人","1件","Customer Success Manager。"]],
  products: [["SeaPod","船上のカメラとAIで海上目標を検知し、航海士の状況認識を支援。","https://www.orca-ai.io/"],["FleetView","陸上の船隊管理者へ航行状況、リスク、運航データを提供。","https://www.orca-ai.io/"],["Operational Platform","安全、燃料、船隊の意思決定を共通データでつなぐ。","https://www.orca-ai.io/about/"]],
  competitors: "既存レーダー・ECDIS、船橋メーカー、船隊管理ソフト、内製分析",
  leader: ["Yarden Gross","Co-Founder and Chief Executive Officer","https://www.orca-ai.io/about/"], local: ["未確認","日本事業責任者","https://careers.orca-ai.io/"],
  work: ["未確認","日本勤務・顧客先","固定出社日数は未確認","完全リモートの明記なし","対面顧客対応と国内・海外出張あり。雇用主体、担当船社、目標を選考で確認"],
  preEntry: {
    verdict: "進出可能性は高。日本専任の顧客成功求人を出し、国内顧客との対面対応、継続、拡大を明記する一方、日本法人・拠点・雇用主体は未確認。",
    signal: "日本を拠点に国内顧客の導入、満足、継続、拡大を持つCustomer Success Managerを公式募集。SingaporeではAPAC営業責任者も採用している。",
    hurdle: "日本法人、国内拠点、雇用主体、既存顧客名、日本語の契約・常設技術支援、国内チーム人数を確認できない。",
    conditions: ["日本顧客の導入・継続・拡大を再現し、専任組織の採算を証明する。", "国内の契約、保守、船上設置、事故対応、データ管理の責任主体を整える。", "営業、技術支援、導入作業を日本語で継続できる体制を作る。"],
    watches: ["日本法人・国内拠点", "雇用主体と国内チーム", "日本船社の公式導入事例", "日本語契約・保守体制", "Japan営業・技術求人"],
  },
}, checkedAt);
orca.sources.push(
  { id: "orca-about", label: "Orca AI会社情報", url: "https://www.orca-ai.io/about/", kind: "企業公式", scope: "創業・創業者・製品・拠点", checkedAt },
  { id: "orca-2025", label: "Orca AI 2025 review", url: "https://www.orca-ai.io/blog/2025-in-review-scaling-impact-across-global-fleets/", kind: "企業公式", scope: "資金調達・成長・提携", checkedAt },
  { id: "orca-seaspan", label: "Seaspan導入事例", url: "https://www.orca-ai.io/case/improving-safety-and-reducing-fuel-costs-for-global-shipping-giant-seaspan-corporation/", kind: "企業公式", scope: "導入船数・航海・CO2削減", checkedAt },
  { id: "orca-careers", label: "Orca AI Careers", url: "https://careers.orca-ai.io/", kind: "企業公式", scope: "現行求人・拠点一覧", checkedAt },
  { id: "orca-job", label: "Customer Success Manager - Japan", url: "https://www.comeet.com/jobs/Orca-AI/86.003/customer-success-manager/9D.27B", kind: "企業公式", scope: "日本求人・勤務地・言語・責任", checkedAt },
  { id: "gbiz-headcount-orca", label: "gBizINFO Orca AI法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
orca.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本求人は確認したが、日本法人・事業所をgBizINFOで特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-orca" };
if (orca.salesMarketOutlook) {
  orca.salesMarketOutlook.cases = [{ company: "国内公式事例は未確認", need: "Seaspanの64隻・68万海里超・208航海・1隻当たり年500トンのCO2削減見込みは海外公式事例。日本企業の実名事例は今回未確認。", sourceId: "orca-seaspan" }];
}
if (orca.marketStatus.japanGrowth) {
  orca.marketStatus.japanGrowth.headline = "日本法人・国内拠点は未確認。日本担当求人1件を確認";
  orca.marketStatus.japanGrowth.narrative = "日本を拠点に国内顧客の導入、満足、継続、拡大を担うCustomer Success Managerを公式確認。現在応募できる求人はあるが、雇用主体、日本法人、国内拠点、常設チームは未確認。";
}

export const daily20261021IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  reaktor,
  "green-hills-software": greenHills,
  "orca-ai": orca,
};
