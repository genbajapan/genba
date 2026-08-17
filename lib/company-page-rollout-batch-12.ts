import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch, rolloutResearchedAt as researchedAt } from "@/lib/company-page-rollout-standard-helpers";

function addSources(intelligence: CompanyPublicIntelligence, sources: CompanyPublicIntelligence["sources"]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function refreshSourceDates(intelligence: CompanyPublicIntelligence) {
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

function ensureMilestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
}

function stripBlockedSources(value: unknown, blocked: Set<string>): void {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    for (let index = value.length - 1; index >= 0; index -= 1) {
      const item = value[index];
      if (item && typeof item === "object") {
        const record = item as { id?: string; sourceId?: string; sourceIds?: string[] };
        if ((record.id && blocked.has(record.id)) || (record.sourceId && blocked.has(record.sourceId)) || record.sourceIds?.some((id) => blocked.has(id))) {
          value.splice(index, 1);
          continue;
        }
      }
      stripBlockedSources(item, blocked);
    }
    return;
  }
  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    if (key === "sourceIds" && Array.isArray(child)) {
      (value as Record<string, unknown>)[key] = child.filter((id) => typeof id !== "string" || !blocked.has(id));
    } else {
      stripBlockedSources(child, blocked);
    }
  }
}

function patchMarqVision(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2025", "日本事業開始", "求人は2025年に日本で本格展開を開始したと説明。法人設立年は確認不能。", "rollout-marqvision-jobs-20260817");
  applyStandard(intelligence, buildCompactPatch({
    slug: "marqvision", leaderName: "Mark Lee", leaderLabel: "Founder・CEO", leaderUrl: "https://www.marqvision.com/leadership", localName: "Takeshi Suzuki", localLabel: "Japan Country Manager・Head of Sales", localUrl: "https://www.marqvision.com/leadership",
    companyId: "rollout-marqvision-about", jobId: "rollout-marqvision-jobs-20260817", customersId: "rollout-marqvision-japan-customers", externalId: "rollout-marqvision-customs-ip", financeId: "rollout-marqvision-series-b",
    targets: ["法務・知財・ブランド保護", "CMO・EC・流通責任者", "CISO・不正対策・デジタルリスク", "ゲーム・コンテンツライセンス", "消費者安全・グローバルコマース"], competitors: "Corsearch、Red Points、OpSec、ZeroFox、BrandShield・MarkMonitor、marketplace native program、法律事務所・調査会社・内製監視",
    feature: "Marq AIでmarketplace counterfeit、domain・social・ad impersonation、unauthorized sales、piracyを検知し、human validation、takedown、MarqLaw、Brand Intelligence Agentへつなぐ。", advantage: "AI detection、human・legal validation、online・offline enforcement、日本・中国を含むlocal operationsを一つのaudit trailへ統合する。", benefit: "検知から申請までの時間、false positive、repeat seller、analyst工数、顧客安全・authorized channelへの影響を改善できる可能性がある。", evidence: "Panasonic、Nissan Motor、SEGA、Mizunoの利用を求人が列挙するが、国内顧客別の定量成果は確認できない。",
    marketVerdict: "結論：越境EC、social commerce、生成AIで模倣・なりすましの量と速度が増す。売上・利益は非公開だがARR約33.1億円の会社発表と東京3求人を確認。", marketParagraphs: ["知財teamは複数国・platformで検知、証拠、申請、再出品を追い、顧客安全とauthorized channelを説明する必要がある。", "案件別law firmとmanual monitoringではaction time、priority、repeat network、ROIが分断しやすい。", "Genba分析：重点brand・SKU・channelの4〜8週pilotでprecision、detect-to-filing、success、再出現、analyst hoursを比較する。"],
    cultureHeadline: "Originalityを守るmissionの下でAI、global commerce、IP専門性を横断。日本求人はremote・flexibleを尊重するが頻度・分類は非公開。", classification: "未確認", displayLabel: "Tokyo / flexible", officeDays: "非公開", remoteOnly: "full remoteとは確認できない", flexibility: "remote・flexibleを尊重との求人記載まで確認",
    goodFor: ["Legal budgetをrevenue protectionへ変えたい", "AIとhuman・legal operationsを売りたい", "Japan launch期でSales・CS・Deliveryを作りたい"], cautionFor: ["国内定量caseを必須にする", "監査済み財務を必須にする", "勤務頻度・数値報酬の事前開示を必須にする"],
    unresolved: [["最新財務", "2025年初ARR 300億KRW超（約33.1億円）、累計調達9,000万米ドル（約141.8億円）。", "recognized revenue、profit、FCF、ARR定義・現在値は？"], ["日本体制", "Country Manager、東京住所、3求人を確認。", "法人登記名、設立日、Japan headcount、雇用主体は？"], ["国内proof", "Panasonic等の利用社名を確認。", "顧客別の削除時間、成功率、再発、recovered revenueは？"], ["Product outcome", "自社測定のprecision・takedown時間を公表。", "日本語labeled data、false positive、platform別SLA、第三者監査は？"], ["Commercial", "AE求人は3〜6カ月、ACV 5万〜20万米ドル（約788万〜3,151万円）。", "給与、OTE、quota、attainment、POC conversion、renewal creditは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "認識売上、営業・純利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-marqvision-series-b"] },
    { label: "事業固有指標", value: "2025年初ARR 300億KRW超（約33.1億円）", detail: "ARRであり売上ではない。500k+ sellers、12m+ content enforcedは会社累計claim。", sourceIds: ["rollout-marqvision-arr", "rollout-b12-customs-fx"] },
    { label: "資金調達", value: "Series B 4,800万米ドル（約75.6億円）／累計9,000万米ドル（約141.8億円）", detail: "資本であり売上・利益ではない。", sourceIds: ["rollout-marqvision-series-b", "rollout-b12-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "現在の厳密な一次人数は確認できない。", sourceId: "rollout-marqvision-about" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "3求人とCountry Managerから全人数を推測しない。", sourceId: "rollout-marqvision-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "渋谷スクランブルスクエア", detail: "東京都渋谷区渋谷2-24-12。", sourceId: "rollout-marqvision-about" };
  intelligence.companyStats.japanSince = { value: "2025年本格展開", detail: "求人記載。日本法人の登記・設立年は確認不能。", sourceId: "rollout-marqvision-jobs-20260817" };
  intelligence.customerProof = [{ company: "Panasonic・Nissan Motor・SEGA・Mizuno", products: "Marq AI", outcome: "現行求人が顧客として列挙。国内顧客別の定量成果は確認できない。", implication: "named adoptionとbusiness outcomeを分け、global事例を国内成果へ外挿しない。", sourceId: "rollout-marqvision-japan-customers" }];
  intelligence.roleLens = { salesMotion: "AEがnew logo・PoC・annual contract、CSMがonboarding・QBR・renewal・expansion、Specialistが調査・takedownを担う。", compensation: "日本3roleの給与、OTE、pay mix、equityは非公開。AEのACVは顧客契約規模で報酬ではない。", quota: "quota、attainment、POC conversion、renewal・expansion creditは非公開。", collaboration: "Sales、CS、Brand Protection Specialist、Legal、Product、顧客IP・Brand・Ecommerceが連携。" };
  addSources(intelligence, [
    { id: "rollout-marqvision-about", label: "MarqVision About・Leadership", url: "https://www.marqvision.com/about-us", kind: "企業公式", scope: "創業・拠点・経営・規模", checkedAt: researchedAt },
    { id: "rollout-marqvision-jobs-20260817", label: "MarqVision現行Japan求人", url: "https://boards-api.greenhouse.io/v1/boards/marqvision/jobs?content=true", kind: "企業公式", scope: "3求人・言語・勤務・契約規模", checkedAt: researchedAt },
    { id: "rollout-marqvision-series-b", label: "MarqVision Series B", url: "https://www.marqvision.com/blog/marqvision-series-b-funding", kind: "企業公式", scope: "調達・累計資本", checkedAt: researchedAt },
    { id: "rollout-marqvision-arr", label: "MarqVision Korea Series B release", url: "https://www.marqvision.com/kr/news/marqvision-series-b", kind: "企業公式", scope: "2025年初ARR", checkedAt: researchedAt },
    { id: "rollout-marqvision-japan-customers", label: "MarqVision Japan求人・customer names", url: "https://job-boards.greenhouse.io/marqvision/jobs/4986795008", kind: "企業公式", scope: "国内顧客名・成果非開示", checkedAt: researchedAt },
    { id: "rollout-marqvision-customs-ip", label: "税関 知的財産侵害物品の水際取締り", url: "https://www.customs.go.jp/mizugiwa/chiteki/pages/g_001.htm", kind: "公的機関", scope: "輸入差止・模倣品", checkedAt: researchedAt },
    { id: "rollout-b12-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（USD・EUR・KRW）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchMendix(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2020・2021", "日本事業開始", "2020年に日本向けlocal team拡大を発表し、2021年までの本格化を計画。法人設立年は確認不能。", "rollout-mendix-2020-arr");
  applyStandard(intelligence, buildCompactPatch({
    slug: "mendix", leaderName: "Raymond Kok", leaderLabel: "CEO", leaderUrl: "https://www.mendix.com/press/mendix-appoints-raymond-kok-as-its-ceo/", localName: "非公開", localLabel: "日本責任者", localUrl: "https://www.mendix.com/ja/contact-us/",
    companyId: "rollout-mendix-company", jobId: "rollout-mendix-jobs-20260817", customersId: "rollout-mendix-kao", externalId: "rollout-mendix-ipa-modernization", financeId: "rollout-mendix-2020-arr",
    targets: ["CIO・CTO・全社アーキテクチャ", "アプリ開発・Platform Engineering", "DX・CoE・業務部門", "製造・オペレーション", "AIガバナンス・セキュリティ・調達"], competitors: "OutSystems、Microsoft Power Apps、Appian、ServiceNow Creator Workflows、Salesforce・SAP Build、custom Java・.NET・cloud native、SI outsourcing、RPA・iPaaS",
    feature: "enterprise context・knowledge graph、AI model development、agentic development、orchestration、built-in governanceを、traditional web・mobile applicationと同じlifecycleで提供。", advantage: "businessとprofessional developer、app・agent・people・process、multi-cloud・on-prem・edge、Siemens industrial ecosystemを共通のvisual modelとgovernanceへ置く。", benefit: "application backlog、開発・変更lead time、manual hours、外注依存、重複logic、governance exceptionを減らし、再利用可能なdelivery modelを作れる可能性がある。", evidence: "Kaoは12 interfacesを各2〜3日、従来見積30日からtime-to-market 10倍、営業担当最大2時間/日削減と報告。",
    marketVerdict: "結論：legacy modernization、developer不足、GenAI deliveryとgovernanceの両立が追い風。Mendix単体財務は非公開で、東京3求人を確認。", marketParagraphs: ["SI・custom backlogは事業・工場改善を遅らせ、部門no-code・RPAはshadow IT、重複logic、fragile integrationを増やし得る。", "CIOは速度だけでなくarchitecture、policy、reusable module、portfolio cost、AI accountabilityを同時に管理する必要がある。", "Genba分析：限定workflowを8〜12週で実装し、lead time、manual hours、defect、change cycle、adoption、3年TCO・exportを比較する。"],
    cultureHeadline: "Mendix Blueはbrave・bold、innovation、difference、高いstandardsを重視。日本はPartner Sales・AEがOnsite、PresalesがHybrid。", classification: "ハイブリッド", displayLabel: "Tokyo Onsite / Hybrid", officeDays: "role別日数は非公開", remoteOnly: "該当なし", flexibility: "全社hybrid rhythmはteam差。求人固有条件を優先",
    goodFor: ["CIOのapplication portfolio変革を売りたい", "business・IT・partnerを束ねたい", "industrial・agentic applicationを横断したい"], cautionFor: ["Mendix単体の財務開示を必須にする", "platform lock-inを許容できない", "日本語人材・partner capacityが未検証のまま進めたい"],
    unresolved: [["Standalone財務", "2020年ARR 1億米ドル超（約157.6億円）のhistorical値はある。", "current revenue、ARR、profit、FCF、renewalは？"], ["日本体制", "東京contactと3求人を確認。", "法人登記、Country Manager、headcount、direct・partner売上は？"], ["Delivery capacity", "Partner SalesとPresalesを採用。", "certified partner、日本語developer、CoE、production SLAは？"], ["AI・lock-in", "agentic development、context、orchestration、governanceへ拡張。", "model choice、data grounding、export、runtime cost、manual code保守は？"], ["Commercial", "3roleを確認。", "給与、OTE、quota、attainment、ACV、cycle、Siemens・partner creditは？"]],
  }));
  intelligence.facts = [
    { label: "Standalone売上・稼ぐ力", value: "非公開", detail: "SiemensはMendix単体のrevenue、profit、FCFを分離開示しない。", sourceIds: ["rollout-mendix-siemens-fy2025"] },
    { label: "Historical ARR", value: "2020年1億米ドル超（約157.6億円）", detail: "当時値。ARRは売上ではなく、現在値として扱わない。", sourceIds: ["rollout-mendix-2020-arr"] },
    { label: "親会社・規模", value: "Siemens傘下／1,400人超", detail: "2018年取得。親会社・Digital Industries財務をMendixへ帰属しない。", sourceIds: ["rollout-mendix-company", "rollout-mendix-siemens-fy2025"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "1,400人超", detail: "現行公式Careers。", sourceId: "rollout-mendix-company" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "3求人から現人数を推測しない。", sourceId: "rollout-mendix-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "小田急サザンタワー9F", detail: "東京都渋谷区代々木2-2-1。event会場と混同しない。", sourceId: "rollout-mendix-contact" };
  intelligence.companyStats.japanSince = { value: "2020年に拡大発表、2021年までにlocal activity", detail: "法人設立年は確認不能。", sourceId: "rollout-mendix-2020-arr" };
  intelligence.customerProof = [
    { company: "花王", products: "Mendix", outcome: "12 interfacesを各2〜3日、従来見積30日からtime-to-market 10倍、営業担当最大2時間/日削減と報告。", implication: "vendor-selected case。対象scope・他施策寄与を一般化しない。", sourceId: "rollout-mendix-kao" },
    { company: "江崎グリコ", products: "Mendix", outcome: "maintenance app初版7カ月、年間4,620時間のmanual work削減を推定、72 users。", implication: "削減は推定。全工場・海外展開は計画で実績ではない。", sourceId: "rollout-mendix-glico" },
    { company: "住友重機械建機クレーン", products: "Mendix", outcome: "OutSystemsからの移行で内製力・100%外注脱却を狙う。", implication: "post-resultの定量成果は確認できない。", sourceId: "rollout-mendix-hsc" },
  ];
  intelligence.roleLens = { salesMotion: "Specialized AEがenterprise pipeline・close、Partner Salesがchannel revenue・delivery capacity、Presalesがarchitecture・demo・PoCを担う。", compensation: "日本3roleの給与、OTE、pay mix、equityは非公開。", quota: "quota、attainment、ACV、cycle、partner sourced・influenced credit、Siemens creditは非公開。", collaboration: "Sales、Presales、Partner、Product、Siemens ecosystem、顧客CIO・Architecture・Businessが連携。" };
  addSources(intelligence, [
    { id: "rollout-mendix-company", label: "Mendix company・careers", url: "https://www.mendix.com/careers/", kind: "企業公式", scope: "創業・社員・culture", checkedAt: researchedAt },
    { id: "rollout-mendix-jobs-20260817", label: "Mendix現行Tokyo求人", url: "https://api.lever.co/v0/postings/mendix?mode=json", kind: "企業公式", scope: "3求人・workstyle・非公開条件", checkedAt: researchedAt },
    { id: "rollout-mendix-contact", label: "Mendix Japan contact", url: "https://www.mendix.com/ja/contact-us/", kind: "企業公式", scope: "東京office", checkedAt: researchedAt },
    { id: "rollout-mendix-2020-arr", label: "Mendix 2020 ARR milestone", url: "https://www.mendix.com/press/mendix-fires-on-all-cylinders-surpassed-100-million-annual-recurring-revenue-and-now-on-trajectory-to-double-in-18-months/", kind: "企業公式", scope: "historical ARR・APAC・Japan activity", checkedAt: researchedAt },
    { id: "rollout-mendix-siemens-fy2025", label: "Siemens FY2025 annual report", url: "https://assets.new.siemens.com/siemens/assets/api/uuid%3A428ea18a-e7ab-4f93-a160-33908f1c3540/Siemens-Annual-Report-2025.pdf", kind: "法定開示", scope: "親会社財務・Mendix非帰属", checkedAt: researchedAt },
    { id: "rollout-mendix-kao", label: "Mendix・花王事例", url: "https://www.mendix.com/ja/customer-stories/kao/", kind: "企業公式", scope: "国内開発速度・工数", checkedAt: researchedAt },
    { id: "rollout-mendix-glico", label: "Mendix・江崎グリコ事例", url: "https://www.mendix.com/ja/customer-stories/glicos-smart-manufacturing-and-digital-transformation-journey-with-mendix/", kind: "企業公式", scope: "国内maintenance app・推定工数", checkedAt: researchedAt },
    { id: "rollout-mendix-hsc", label: "Mendix・住友重機械建機クレーン事例", url: "https://www.mendix.com/ja/customer-stories/hsc-adopts-mendix-to-support-core-system-transition/", kind: "企業公式", scope: "国内platform移行・内製化", checkedAt: researchedAt },
    { id: "rollout-mendix-ipa-modernization", label: "IPA Software Modernization 2026 report", url: "https://www.ipa.go.jp/disc/committee/eid2eo00000036bq-att/software-modernization-committee-20260324-report.pdf", kind: "公的機関", scope: "legacy・人材・service delay", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchMiro(intelligence: CompanyPublicIntelligence) {
  const weakSources = new Set(["miro-layoffs-2024", "miro-ipo-2026", "miro-japan-openwork", "miro-competitors", "miro-japan-customers"]);
  stripBlockedSources(intelligence, weakSources);
  ensureMilestone(intelligence, "2025", "東京office移転", "2025年4月、グラントウキョウサウスタワー9Fへ移転。", "rollout-miro-office");
  ensureMilestone(intelligence, "2026", "Japan data residency", "対象production・backup・metadataを日本regionで処理・保存する選択肢を発表。", "rollout-miro-japan-residency");
  applyStandard(intelligence, buildCompactPatch({
    slug: "miro", leaderName: "Andrey Khusid", leaderLabel: "Co-founder・CEO", leaderUrl: "https://miro.com/about/", localName: "向山泰貴", localLabel: "ミロ・ジャパン代表執行役社長", localUrl: "https://mirojapan.com/miro-country-manager-mukoyama/",
    companyId: "rollout-miro-about", jobId: "rollout-miro-jobs-20260817", customersId: "rollout-miro-fujitsu", externalId: "rollout-miro-ipa-dx", financeId: "rollout-miro-series-c",
    targets: ["プロダクト・開発・デザイン", "PMO・業務変革", "イノベーション・DX", "IT・セキュリティ・調達", "人材開発・ワークショップ責任者"], competitors: "FigJam・Figma、Mural、Lucid、Microsoft Whiteboard・Loop、Notion・Confluence・Jira、slides・spreadsheets・email・physical whiteboard",
    feature: "AI Innovation Workspaceとしてstrategy、customer discovery、roadmap、prototype、diagram、planning、Agile executionをshared canvas、AI Workflows、Sidekicks、Flows、Insights、Talktrackでつなぐ。", advantage: "発散から収束・deliveryまでのvisual workflow、cross-functional adoption、AI team workflow、enterprise governance・integration、日本data residencyを一つのworkspaceで扱う。", benefit: "情報共有会議、context再説明、handoff、rework、decision lead timeを減らし、product・DX workflowのadoptionとoutcomeを測れる可能性がある。", evidence: "富士通はTalktrackで情報共有会議を減らし、SE研修を毎年約500人・累計2,000人超へ展開と報告。削減率・ROIは非公開。",
    marketVerdict: "結論：AI・内製・agileが進むほど、部門間contextと意思決定の共通面が重要になる。売上・利益は非公開。東京の現行8求人を確認。", marketParagraphs: ["個人AI、文書、会議、design・issue toolが分断すると、発見からdefinition・deliveryまでcontext再説明と手戻りが増える。", "DX buyerはtool導入でなく、cycle time、meeting hours、handoff、rework、adoptionとgovernanceを測る必要がある。", "Genba分析：1つのproduct・DX workflowでbaselineを作り、template、access、data residency、AI policyを設定して競合と比較する。"],
    cultureHeadline: "Hub-centric hybridのMiro Together。Curiosity、Drive、Resilience、Empathy、Cognitive Agility、Accountabilityを重視し、business languageはEnglish。", classification: "ハイブリッド", displayLabel: "Tokyo hub-centric hybrid", officeDays: "現行role別は非公開", remoteOnly: "該当なし", flexibility: "in-personとremoteを混在。過去記事の週2〜3日を現行確定条件にしない",
    goodFor: ["product・DX workflowを部門横断で売りたい", "AI collaborationとenterprise governanceを両立したい", "Sales・SE・SA・TAMのlocal teamで働きたい"], cautionFor: ["whiteboard単機能だけを売りたい", "current profitabilityの開示を必須にする", "数値報酬・role別出社日を事前に必須とする"],
    unresolved: [["財務", "2022年にprofitableとの会社説明。", "current revenue、ARR、profit、FCF、growth、NRRは？"], ["日本scale", "法人、代表、office、8求人を確認。", "Japan revenue、ARR、headcount、paid customers、retentionは？"], ["Commercial", "Commercial・Strategic・BDR・SE・SA・TAMを採用。", "quota、attainment、ACV、cycle、account数、new・expansion creditは？"], ["AI・data", "AI Workflows、ISO42001、日本residencyを発表。", "対象data、subprocessor、credit cost、model accuracy、human reviewは？"], ["Outcome", "国内利用規模・定性成果はある。", "meeting削減、cycle time、rework、adoption、incremental ROIの基準値は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "2022年Series C時点のprofitable claimは現在の黒字保証ではない。", sourceIds: ["rollout-miro-series-c"] },
    { label: "Current scale", value: "100M+ users／250,000 organizations", detail: "adoptionでありpaid seats・ARRではない。1,600人・13〜14 hubsは公式内で表記差。", sourceIds: ["rollout-miro-about", "rollout-miro-careers"] },
    { label: "2022 Series C", value: "4億米ドル（約630.2億円）／評価額175億米ドル（約2.76兆円）", detail: "資本・評価額であり売上ではない。", sourceIds: ["rollout-miro-series-c", "rollout-b12-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "1,600人超", detail: "現行公式Careers。", sourceId: "rollout-miro-careers" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "8求人から現在人数を推測しない。", sourceId: "rollout-miro-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "グラントウキョウサウスタワー9F", detail: "東京都千代田区丸の内1-9-2、2025年4月移転。", sourceId: "rollout-miro-office" };
  intelligence.companyStats.japanSince = { value: "2021年7月", detail: "ミロ・ジャパン合同会社設立。", sourceId: "rollout-miro-japan" };
  intelligence.customerProof = [
    { company: "富士通", products: "Miro・Talktrack", outcome: "情報共有用会議を減らし、1〜2分の非同期messageで意図伝達。SE研修は毎年約500人・累計2,000人超。", implication: "vendor-hosted interview。時間削減率・ROIは非公開。", sourceId: "rollout-miro-fujitsu" },
    { company: "三菱電機", products: "Miro", outcome: "4人から開始し、2〜3週ごと約2時間の特許idea探索へ利用。", implication: "利用規模・cadenceであり特許件数増加の証明ではない。", sourceId: "rollout-miro-mitsubishi" },
    { company: "Nikon", products: "Miro", outcome: "中間資料を集約し、撮影・再digital化・移動・設営を削減。", implication: "削減時間の数値は非公開。", sourceId: "rollout-miro-nikon" },
  ];
  intelligence.roleLens = { salesMotion: "Commercial・Strategic AEとBDRがnew・expansion、SEがtechnical win、SA・TAMがworkflow design、adoption、renewalを担う。", compensation: "日本8requisitionの数値給与、OTE、pay mix、equityは非公開。", quota: "quota、attainment、ACV、cycle、account数、MOST delivery KPIは非公開。", collaboration: "Sales、BDR、SE、SA、TAM、Product、Security、顧客Product・DX・ITが連携。" };
  addSources(intelligence, [
    { id: "rollout-miro-about", label: "Miro About", url: "https://miro.com/about/", kind: "企業公式", scope: "経営・規模・positioning", checkedAt: researchedAt },
    { id: "rollout-miro-careers", label: "Miro Careers", url: "https://miro.com/careers/", kind: "企業公式", scope: "社員・culture・hybrid", checkedAt: researchedAt },
    { id: "rollout-miro-jobs-20260817", label: "Miro現行Tokyo求人", url: "https://miro.com/careers/open-positions/?location=tokyo-jp", kind: "企業公式", scope: "8求人・言語・報酬非開示", checkedAt: researchedAt },
    { id: "rollout-miro-series-c", label: "Miro Series C", url: "https://miro.com/newsroom/miro-series-c/", kind: "企業公式", scope: "funding・valuation・historical profitability", checkedAt: researchedAt },
    { id: "rollout-miro-japan", label: "ミロ・ジャパン会社概要", url: "https://miro.com/ja/blog/aboutus/", kind: "企業公式", scope: "日本法人・代表", checkedAt: researchedAt },
    { id: "rollout-miro-office", label: "Miro Tokyo office", url: "https://miro.com/ja/blog/office-access/", kind: "企業公式", scope: "現office・移転", checkedAt: researchedAt },
    { id: "rollout-miro-japan-residency", label: "Miro Japan data residency", url: "https://miro.com/blog/japan-data-residency/", kind: "企業公式", scope: "日本region・data", checkedAt: researchedAt },
    { id: "rollout-miro-fujitsu", label: "Miro・富士通事例", url: "https://miro.com/ja/blog/case-fujitsu/", kind: "企業公式", scope: "国内研修規模・workflow", checkedAt: researchedAt },
    { id: "rollout-miro-mitsubishi", label: "Miro・三菱電機事例", url: "https://miro.com/ja/blog/case-mitsubishielectric/", kind: "企業公式", scope: "国内innovation workflow", checkedAt: researchedAt },
    { id: "rollout-miro-nikon", label: "Miro・Nikon事例", url: "https://miro.com/ja/blog/case-nikon-ux-agile-challenge/", kind: "企業公式", scope: "国内資料・report workflow", checkedAt: researchedAt },
    { id: "rollout-miro-ipa-dx", label: "IPA DX動向2025", url: "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2025.html", kind: "公的機関", scope: "AI・agile・内製・全体最適", checkedAt: researchedAt },
    { id: "rollout-b12-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchNetskope(intelligence: CompanyPublicIntelligence) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.filter((item) => !/非上場|private/i.test(`${item.label} ${item.detail}`));
  ensureMilestone(intelligence, "2017", "日本法人設立", "Netskope Japan株式会社を2017年5月に設立。", "rollout-netskope-houjin");
  ensureMilestone(intelligence, "2025", "NASDAQ上場", "2025年9月18日、NASDAQ Global Select MarketへNTSKとして上場。", "rollout-netskope-ir-faq");
  applyStandard(intelligence, buildCompactPatch({
    slug: "netskope", leaderName: "Sanjay Beri", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.netskope.com/jp/company/leadership-team", localName: "現任は公式再確認不能", localLabel: "Japan Country Manager", localUrl: "https://www.netskope.com/jp/company/leadership-team",
    companyId: "rollout-netskope-company", jobId: "rollout-netskope-jobs-20260817", customersId: "rollout-netskope-persol", externalId: "rollout-netskope-ipa-threats", financeId: "rollout-netskope-q1-fy2027",
    targets: ["情報セキュリティ・IT経営責任者", "ネットワーク・セキュリティ基盤", "データ保護・プライバシー", "SOC・クラウド・プラットフォーム", "AIガバナンス・調達"], competitors: "Zscaler、Palo Alto Prisma SASE、Cisco Secure Access、Cloudflare One、Microsoft Entra Internet・Private Access＋Purview、legacy VPN・firewall・proxy、point DLP・CASB",
    feature: "Netskope OneでSASE・SSE、SWG、CASB、ZTNA、DLP、FWaaS、SD-WAN、AI Gateway・Agentic Broker・Guardrails・Red TeamingをZero Trust EngineとNewEdge上に統合。", advantage: "user・device・app activity・data・AI contextをone engine・client・console・networkで扱い、inline controlとuser experienceを同時に設計する。", benefit: "shadow app・AI、data leak、VPN・proxy bottleneck、policy・incident調査、vendor・admin costを改善できる可能性がある。", evidence: "PERSOL Groupは国内約30,000人へparallel rolloutしzero downtime、data-center traffic・security review工数の改善を報告。削減率は非公開。",
    marketVerdict: "結論：cloud・remote・GenAI・委託先accessでdata pathが境界外へ広がる。売上・ARRは約30%成長だがGAAP赤字。日本の現行12求人を確認。", marketParagraphs: ["legacy VPN・firewall・proxyと個別CASB・DLPでは、誰がどのapp・data・AIへ何をしたかのcontextが分断しやすい。", "CISOはransomware、shadow AI、内部持出し、third-party riskを抑えつつlatency、helpdesk、policy運用も改善する必要がある。", "Genba分析：30〜60日PoCでtraffic・latency、VPN ticket、shadow apps、DLP event、policy数、admin hoursをbaseline比較する。"],
    cultureHeadline: "約3,000人のopen organization。ideas win、internal promotion、founder・leaderとshoulder-to-shoulderを掲げるが、日本roleの勤務形態は非公開。", classification: "未確認", displayLabel: "Japan / workstyle非公開", officeDays: "非公開", remoteOnly: "確認不能", flexibility: "各求人でremote・hybrid・出社頻度の明記なし",
    goodFor: ["CISO・Network・Data・AIを横断したい", "enterprise・channel・technical teamで大規模変革を売りたい", "上場後のgrowthとoperating disciplineを経験したい"], cautionFor: ["GAAP黒字を必須にする", "workstyle・数値報酬の事前開示を必須にする", "single-vendor concentrationを許容できない"],
    unresolved: [["Profitability", "FY2026は初の通期FCF黒字。", "Q1で再びFCF赤字。SBC、cash burn、黒字化path、marginは？"], ["Japan scale", "2017法人、登記住所、12求人を確認。", "Japan revenue、ARR、headcount、customers、NRR、current Country Managerは？"], ["Sales capacity", "RSM・Strategic・Territory・SE・SA・Channel・TAMを採用。", "quota、attainment、ACV、cycle、ramp、territory split、partner creditは？"], ["Product・privacy", "one engineでinline decrypt・DLP・AI control。", "日本data path、decryption除外、false positive、latency、retentionは？"], ["Migration・TCO", "国内large deploymentを確認。", "legacy並行期間、rollback、helpdesk、license・network cost、partner capacityは？"]],
  }));
  intelligence.marketStatus = {
    ...intelligence.marketStatus,
    isPublic: true,
    ticker: "NTSK",
    exchange: "NASDAQ Global Select Market",
    listedSince: "2025年9月18日",
    stockLinkUrl: "https://investors.netskope.com/",
  };
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "FY2026 / Q1 FY2027（2026-08-17確認）",
    metrics: [
      { label: "FY2026売上", value: "7.09億米ドル（約1,117.1億円）", change: "+32%", interpretation: "subscription中心の成長を継続。", sourceId: "rollout-netskope-fy2026" },
      { label: "Q1 FY2027 ARR", value: "8.45億米ドル（約1,331.4億円）", change: "+29%・NRR 113%", interpretation: "ARRは売上ではなく、NRRは前年117%から低下。", sourceId: "rollout-netskope-q1-fy2027" },
      { label: "収益性", value: "FY2026 FCF +0.12億米ドル（約19.5億円）／Q1 -0.57億米ドル（約90.1億円）", change: "GAAP営業赤字継続", interpretation: "初の通期FCF黒字後もquarter変動とSBCを含む赤字riskが残る。", sourceId: "rollout-netskope-q1-fy2027" },
    ],
    growthDrivers: [{ title: "SSE・SASEとAI Security拡張", evidence: "売上・ARR約30%成長と12の日本GTM求人。", japanMeaning: "Sales、technical、channel、TAMをlocalで厚くする。", sourceIds: ["rollout-netskope-q1-fy2027", "rollout-netskope-jobs-20260817"] }],
    risks: [{ title: "GAAP赤字・競争・inline運用", disclosedRisk: "GAAP営業赤字、FCF変動、NRR低下。", companyResponse: "one engineとNewEdge、AI Securityへportfolioを拡張。", genbaRead: "日本ではlatency、decryption、privacy、migration、TCOをPoCで検証する。", sourceIds: ["rollout-netskope-fy2026", "rollout-netskope-q1-fy2027"] }],
    japanCommitment: { verdict: "日本法人・12求人・国内大規模事例を確認", summary: "2017年法人設立。SalesからTAMまで採用するが日本売上・人数は非公開。", signals: [{ year: "2026", title: "日本12求人", detail: "Sales、Channel、SE、SA、TAMを公式確認。", sourceIds: ["rollout-netskope-jobs-20260817"] }], unknowns: ["日本売上・ARR・NRR", "Japan headcount・current Country Manager", "quota・attainment・workstyle"] },
    scenarios: [{ scenario: "基本", title: "SSE・SASE拡張", body: "cloud・data・AI security需要をmulti-productで獲得。" }, { scenario: "上振れ", title: "AI Security標準化", body: "shadow・agentic AI controlが新規予算を作る。" }, { scenario: "下振れ", title: "競争・採算圧力", body: "bundle価格、migration負荷、GAAP赤字が投資効率を圧迫。" }],
    sourceIds: ["rollout-netskope-fy2026", "rollout-netskope-q1-fy2027", "rollout-netskope-jobs-20260817"],
  };
  intelligence.facts = [
    { label: "FY2026売上", value: "7.09億米ドル（約1,117.1億円）", detail: "前年比32%増。", sourceIds: ["rollout-netskope-fy2026", "rollout-b12-customs-fx"] },
    { label: "FY2026稼ぐ力", value: "GAAP営業損失6.53億米ドル（約1,028.2億円）／FCF +0.12億米ドル（約19.5億円）", detail: "GAAP margin -92%。初の通期positive FCFだが、Q1 FY2027はFCF -0.57億米ドル。", sourceIds: ["rollout-netskope-fy2026", "rollout-netskope-q1-fy2027", "rollout-b12-customs-fx"] },
    { label: "Q1 FY2027", value: "売上2.02億米ドル（約317.6億円）／ARR 8.45億米ドル（約1,331.4億円）", detail: "売上+28%、ARR+29%、NRR 113%。ARRは売上ではない。APJ売上を日本へ帰属しない。", sourceIds: ["rollout-netskope-q1-fy2027", "rollout-b12-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "約3,000人", detail: "公式company page。4,000+ customers、30+ Fortune100。", sourceId: "rollout-netskope-company" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "12求人から現人数を推測しない。", sourceId: "rollout-netskope-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "新丸の内ビルディング10F EGG JAPAN内", detail: "国税庁登記本店。日常勤務場所・席数は非公開。", sourceId: "rollout-netskope-houjin" };
  intelligence.companyStats.japanSince = { value: "2017年5月", detail: "Netskope Japan株式会社設立。", sourceId: "rollout-netskope-houjin" };
  intelligence.customerProof = [
    { company: "PERSOL Group", products: "Netskope One", outcome: "国内約30,000人へparallel rolloutしzero downtime、data-center traffic削減、security review工数の大幅削減を報告。", implication: "deployment規模と定性成果。削減率・control groupはない。", sourceId: "rollout-netskope-persol" },
    { company: "United Arrows", products: "SWG・RBI・CASB", outcome: "約2,000 Windows devicesへdeployしvisibilityとrisky behavior control、outsourced SOCを実現と報告。", implication: "vendor-hosted customer statement。ROIは非公開。", sourceId: "rollout-netskope-united-arrows" },
    { company: "LIFULL", products: "Netskope Private Access", outcome: "2,000+ employeesのremote accessで混雑時間のspeed改善を報告。", implication: "閉域網cost削減は将来目標で実績ではない。", sourceId: "rollout-netskope-lifull" },
  ];
  intelligence.roleLens = { salesMotion: "RSM・Strategic・Territoryがnew・expand、SE・SAがarchitecture・POC、Channel roleがpartner・MSP、TAMがadoption・value・renewalを担う。", compensation: "日本12requisitionの給与、OTE、pay mix、equityは非公開。", quota: "quota、attainment、ACV、cycle、ramp、territory split、partner creditは非公開。", collaboration: "Sales、SE、SA、Channel、TAM、Product、Support、顧客CISO・Network・Data・AIが連携。" };
  addSources(intelligence, [
    { id: "rollout-netskope-company", label: "Netskope company・leadership", url: "https://www.netskope.com/jp/company", kind: "企業公式", scope: "経営・規模・製品", checkedAt: researchedAt },
    { id: "rollout-netskope-jobs-20260817", label: "Netskope現行Japan求人", url: "https://boards-api.greenhouse.io/v1/boards/netskope/jobs?content=true", kind: "企業公式", scope: "12求人・言語・非公開条件", checkedAt: researchedAt },
    { id: "rollout-netskope-ir-faq", label: "Netskope Investor FAQ", url: "https://investors.netskope.com/shareholder-services/investor-faqs", kind: "企業公式", scope: "上場・ticker・本社", checkedAt: researchedAt },
    { id: "rollout-netskope-fy2026", label: "Netskope FY2026 results", url: "https://www.netskope.com/jp/press-releases/netskope-announces-strong-fourth-quarter-and-fiscal-year-2026-financial-results", kind: "企業公式", scope: "売上・営業損失・FCF", checkedAt: researchedAt },
    { id: "rollout-netskope-q1-fy2027", label: "Netskope Q1 FY2027 results", url: "https://www.netskope.com/jp/press-releases/netskope-announces-strong-fiscal-first-quarter-2027-financial-results", kind: "企業公式", scope: "売上・ARR・NRR・loss・FCF", checkedAt: researchedAt },
    { id: "rollout-netskope-houjin", label: "国税庁 Netskope Japan法人情報", url: "https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=9010401131426", kind: "公的機関", scope: "日本法人・設立・登記住所", checkedAt: researchedAt },
    { id: "rollout-netskope-persol", label: "Netskope・PERSOL事例", url: "https://www.netskope.com/jp/resources/case-studies/persol-group-builds-a-zero-trust-foundation", kind: "企業公式", scope: "国内大規模deployment", checkedAt: researchedAt },
    { id: "rollout-netskope-united-arrows", label: "Netskope・United Arrows事例", url: "https://www.netskope.com/jp/press-releases/netskope-helps-united-arrows-ltd-to-secure-its-digital-transformation-journey", kind: "企業公式", scope: "国内device・SOC", checkedAt: researchedAt },
    { id: "rollout-netskope-lifull", label: "Netskope・LIFULL事例", url: "https://www.netskope.com/jp/resources/case-studies/lifull", kind: "企業公式", scope: "国内remote access", checkedAt: researchedAt },
    { id: "rollout-netskope-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply chain・AI・remote", checkedAt: researchedAt },
    { id: "rollout-b12-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchNeuralConcept(intelligence: CompanyPublicIntelligence) {
  const founding = intelligence.marketStatus.milestones.find((item) => item.label === "創業");
  if (founding) Object.assign(founding, { year: "2018・2019", detail: "Who We Areは2018年、複数press boilerplateは2019年と公式内で表記が分かれる。", sourceId: "rollout-neural-company" });
  ensureMilestone(intelligence, "2021", "日本で販売開始", "Cybernet Systemsが日本でNeural Concept Shapeの販売・support・consultingを開始。", "rollout-neural-cybernet");
  ensureMilestone(intelligence, "2026", "日本office開設準備", "TAM求人はnew office openingとするが、公式Contactに東京住所はなく、法人・正式開設日は確認不能。", "rollout-neural-jobs-20260817");
  applyStandard(intelligence, buildCompactPatch({
    slug: "neural-concept", leaderName: "Dr Pierre Baqué", leaderLabel: "Founder・CEO", leaderUrl: "https://www.neuralconcept.com/who-we-are", localName: "募集中", localLabel: "Regional Sales Director (Japan)", localUrl: "https://jobs.ashbyhq.com/neuralconcept/9b018838-aad4-48a6-8d6b-f2a544e0fbed",
    companyId: "rollout-neural-company", jobId: "rollout-neural-jobs-20260817", customersId: "rollout-neural-subaru", externalId: "rollout-neural-meti-mobility", financeId: "rollout-neural-series-c",
    targets: ["開発・R&D責任者", "CAE・シミュレーション・設計", "データサイエンス・AI", "IT・クラウド・セキュリティ", "調達・財務・CTO"], competitors: "Ansys SimAI、Altair PhysicsAI、PhysicsX、Monolith、Siemens・Dassault・AutodeskのCAE・optimization、内製Python・PyTorch surrogate、CAE・HPC継続、consulting",
    feature: "CAD・3D geometry・design intent・physicsを理解するEngineering AI Copilotとして、physics-aware予測、CAD-ready design option、comparison、SaaS・private cloud deploymentを提供。", advantage: "geometry-native model、既存simulation data、CAD・CAE workflow、designer向けcopilot、enterprise deploymentを一つのengineering lifecycleへ統合する。", benefit: "simulation turnaround、design feedback、variants、engineer・compute hours、late reworkを減らし、過去CAE資産を再利用できる可能性がある。", evidence: "SUBARUの限定PoCは特定形状の予測を3時間から2分へ短縮し、CAEとほぼ同等精度と報告。誤差率・全開発効果は非公開。",
    marketVerdict: "結論：SDV・AI競争、multi-physics複雑化、人材不足が設計・CAE高速化を促す。売上・利益は非公開。日本の現行4求人とoffice開設準備を確認。", marketParagraphs: ["design変更からCAE feedbackまで時間・週単位で待つと、試せるvariantが減り、専門家handoffとcomputeがbottleneckになる。", "一方、安全・認証・IPにはaccuracy・OOD、traceability、human oversight、private deployment、final CAE・physical validationが必要。", "Genba分析：限定use caseを同一dataでbenchmarkし、accuracy、time-to-result、data effort、integration、security、adoption、TCOを比較する。"],
    cultureHeadline: "Passion、Respect、Transparency、Creativity、Excellence。flexible hoursとresults重視を掲げるが、日本はrole別にHybrid・Remote表記が異なる。", classification: "ハイブリッド", displayLabel: "Tokyo Hybrid / Remote", officeDays: "非公開", remoteOnly: "該当なし", flexibility: "RSD・TAM・Application EngineerはHybrid、SEはRemote表記",
    goodFor: ["manufacturing・CAEへAIを売りたい", "Sales・TAM・SE・Application EngineeringでJapan teamを作りたい", "accuracyとengineering outcomeを同時に検証したい"], cautionFor: ["日本officeが既に完成している前提を求める", "売上・利益・ARRの絶対開示を必須にする", "AI予測をfinal validationの代替として売りたい"],
    unresolved: [["財務", "Series C 1億米ドル（約157.6億円）、enterprise revenue 18カ月で4倍。", "recognized revenue、ARR、profit、FCF、burn、valuationは？"], ["日本office", "2021販売partnerと4求人、opening表現を確認。", "法人、住所、開設日、headcount、Japan leader、employment entityは？"], ["Model validation", "SUBARU限定PoCで3時間から2分。", "誤差、OOD、drift、solver・physical再検証、audit、liabilityは？"], ["Job accuracy", "SE JapanはTokyo・Remote。", "韓国語必須記載はtemplate errorか、実際のterritory・languageは？"], ["Commercial", "4対象roleを確認。", "給与、OTE、quota、attainment、ACV、cycle、portfolio、partner creditは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "revenue・ARR絶対額、profit、EBITDA、FCF、cash・burnは確認できない。", sourceIds: ["rollout-neural-series-c"] },
    { label: "事業固有指標", value: "enterprise revenue 18カ月で4倍／50+ global companies", detail: "enterprise adoption +100%、upsell +40%は会社定義・母数非公開。", sourceIds: ["rollout-neural-series-c", "rollout-neural-growth"] },
    { label: "Series C", value: "1億米ドル（約157.6億円）", detail: "2025年12月。資本であり売上・valuationではない。", sourceIds: ["rollout-neural-series-c", "rollout-b12-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "100人超", detail: "current Who We Are。", sourceId: "rollout-neural-company" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "4求人とpartner activityから現人数を推測しない。", sourceId: "rollout-neural-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "開設準備中・住所未確認", detail: "TAM求人はopening a new office。公式ContactはTokyoを未掲載。", sourceId: "rollout-neural-jobs-20260817" };
  intelligence.companyStats.japanSince = { value: "2021年に販売開始", detail: "Cybernet Systemsが販売・support・consultingを開始。direct officeの正式開設年ではない。", sourceId: "rollout-neural-cybernet" };
  intelligence.customerProof = [
    { company: "SUBARU", products: "Neural Concept", outcome: "特定のダイフェース形状PoCで板厚減少率予測を3時間から2分へ短縮し、CAEとほぼ同等精度と報告。", implication: "限定形状・予測のPoC。誤差率・全開発cycleへの効果は非公開。", sourceId: "rollout-neural-subaru" },
    { company: "Mitsubishi Chemical Group", products: "Neural Concept", outcome: "optimizationを数時間から学習後seconds、顧客answerを数週間から1日へ短縮と報告。", implication: "EMEA・Global Product Lineの事例で、日本国内導入とは断定しない。", sourceId: "rollout-neural-mitsubishi" },
  ];
  intelligence.roleLens = { salesMotion: "RSDがrevenue・partner、SEがdiscovery・demo・SOW、TAMがadoption・renewal・expansion、Application EngineerがPoC・workflow deliveryを担う。", compensation: "4roleともcompetitive salaryのみ。金額、base・variable、OTE、equityは非公開。", quota: "quota、attainment、ACV、cycle、portfolio、renewal・expansion creditは非公開。", collaboration: "Sales、SE、TAM、Application Engineering、Cybernet、顧客R&D・CAE・ITが連携。" };
  addSources(intelligence, [
    { id: "rollout-neural-company", label: "Neural Concept Who We Are", url: "https://www.neuralconcept.com/who-we-are", kind: "企業公式", scope: "創業・経営・社員・values", checkedAt: researchedAt },
    { id: "rollout-neural-jobs-20260817", label: "Neural Concept現行Japan求人", url: "https://jobs.ashbyhq.com/neuralconcept", kind: "企業公式", scope: "4求人・office opening・言語矛盾", checkedAt: researchedAt },
    { id: "rollout-neural-series-c", label: "Neural Concept Series C", url: "https://www.neuralconcept.com/press-release/neural-concept-closes-100m-funding-round", kind: "企業公式", scope: "funding・enterprise revenue・customers", checkedAt: researchedAt },
    { id: "rollout-neural-growth", label: "Neural Concept enterprise growth", url: "https://www.neuralconcept.com/press-release/neural-concept-100-percent-enterprise-growth", kind: "企業公式", scope: "adoption・upsell・profitability caveat", checkedAt: researchedAt },
    { id: "rollout-neural-cybernet", label: "Cybernet Systems Neural Concept販売開始", url: "https://www.cybernet.co.jp/company/about/news/press/2021/20211029.html", kind: "企業公式", scope: "国内販売・support・consulting", checkedAt: researchedAt },
    { id: "rollout-neural-subaru", label: "Cybernet・SUBARU事例", url: "https://www.cybernet.co.jp/company/about/news/press/2024/20240327.html", kind: "企業公式", scope: "国内PoC・simulation時間", checkedAt: researchedAt },
    { id: "rollout-neural-mitsubishi", label: "Neural Concept・Mitsubishi Chemical事例", url: "https://www.neuralconcept.com/customer-stories/mitsubishi-chemical-material-characterization", kind: "企業公式", scope: "日本企業global事例", checkedAt: researchedAt },
    { id: "rollout-neural-meti-mobility", label: "経済産業省 Mobility DX Strategy 2025", url: "https://www.meti.go.jp/english/press/2025/0609_001.html", kind: "公的機関", scope: "SDV・AI・開発process・人材", checkedAt: researchedAt },
    { id: "rollout-b12-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchTwelve(records: Record<string, CompanyPublicIntelligence>) {
  if (records.marqvision) patchMarqVision(records.marqvision);
  if (records.mendix) patchMendix(records.mendix);
  if (records.miro) patchMiro(records.miro);
  if (records.netskope) patchNetskope(records.netskope);
  if (records["neural-concept"]) patchNeuralConcept(records["neural-concept"]);
}
