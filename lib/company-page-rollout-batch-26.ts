import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch } from "@/lib/company-page-rollout-standard-helpers";

function patchGitLab(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "gitlab",
    leaderName: "Bill Staples",
    leaderLabel: "CEO",
    leaderUrl: "https://about.gitlab.com/company/team/e-group/",
    localName: "確認不能",
    localLabel: "日本事業責任者",
    localUrl: "https://about.gitlab.com/jobs/all-jobs/",
    companyId: "gitlab-company",
    jobId: "gitlab-job",
    customersId: "gitlab-customers",
    externalId: "gitlab-external",
    financeId: "gitlab-finance",
    targets: ["最高技術責任者・最高情報責任者", "開発・Platform Engineering", "アプリケーションセキュリティ・リスク", "DevOps・SRE担当", "パートナー・SI・Cloud責任者"],
    heroSummary: "AI codingとagentで変更量が増えるほど、code、CI/CD、security、approvalが別toolに分かれた開発組織は速度とgovernanceを同時に説明しにくい。GitLabはsoftware lifecycleのworkflowとdataを一つのDevSecOps platformへ統合し、release速度、security remediation、developer time、tool costを改善する。",
    competitors: "GitHub、Microsoft、Atlassian、Jenkins、Snyk、Checkmarx、Veracode、cloud-native tool",
    feature: "planning、source code、CI/CD、security、operations、AIを一つのDevSecOps platformで提供する。",
    advantage: "software lifecycle全体のworkflow・data・governanceをsingle applicationへ寄せ、AIをcode生成だけでなくdelivery・security contextへ接続する。",
    benefit: "lead time、deployment frequency、change failure、security remediation、developer hours、integration・license costを改善できる可能性がある。",
    evidence: "FY2026にARR 10億ドル超、free cash flow 2.2億ドル、登録user 5,000万人超を公表。国内では富士通の公式事例を掲載。",
    marketVerdict: "結論：ARR 10億ドル超、日本市場への2020年本格参入、日本法人での想定従業員数58人、Japan Ecosystem Sales採用は強い。一方、2026年の再編、日本売上・顧客数・partner経由売上は非公開で、platform統合の成果とmigration riskを検証する必要がある。",
    marketParagraphs: [
      "AI codingとagentはsoftware outputを増やす一方、source、review、security、audit、production責任の管理を難しくする。",
      "GitLabはsource code collaborationからCI/CD、planning、security、AIへ広がり、point toolの置換よりsoftware deliveryのoperating layerを狙う。",
      "Genba分析：一つのproductでlead time、deployment frequency、change failure、security remediation、developer hoursをbaseline比較し、migrationとintegrationを含む3年TCOで選定する。",
    ],
    cultureHeadline: "all-remoteを会社設計の中心に置くglobal組織。日本求人もRemote表記だが、timezone・travel・team運用は対象求人と面接で確認する。",
    classification: "フルリモート",
    displayLabel: "日本国内Remote",
    officeDays: "固定officeなし",
    remoteOnly: "all-remote",
    flexibility: "global team・partner・customerのtimezoneとtravel条件を確認",
    goodFor: ["DevSecOpsとAI governanceを横断したい", "partner共同GTMを売上へ変えたい", "remote global組織で自律的に動きたい"],
    cautionFor: ["対面officeを日常の前提にしたい", "partner契約管理だけに専念したい", "日本のquota・達成率開示を必須にする"],
    unresolved: [
      ["Partner portfolio", "hyperscaler、GSI、reseller、technology partnerを担当。", "担当partner数、tier、既存・新規比率、priority industryは？"],
      ["目標", "joint plan、pipeline、co-sell、enablementを担う。", "sourced・influenced pipeline、bookings、activationのweightと直近達成率は？"],
      ["Territory economics", "日本ecosystemを拡大する。", "Japan ARR、partner経由比率、平均ACV、sales cycle、ramped seller達成率は？"],
      ["協働", "Sales・Solutions・Marketing・CSと連携。", "direct Salesとのaccount ownership、credit、conflict時のdecision rightは？"],
      ["報酬・キャリア", "日本向け数値は非公開。", "base・variable・equity、ramp、直近24カ月の昇進・異動・離職は？"],
    ],
  }));
  if (intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.capitalMarketRead = {
      asOf: "FY2026通期（2026-08-19確認）",
      metrics: [
        { label: "ARR", value: "10億米ドル超（約1,570億円超）", change: "会社発表", interpretation: "Enterprise platformとして10億米ドル規模へ到達。日本単体は非公開。", sourceId: "gitlab-finance" },
        { label: "Free cash flow", value: "2.2億米ドル（約345億円）", change: "FY2026", interpretation: "成長投資とcash generationを両立。再編後の配分は継続確認。", sourceId: "gitlab-finance" },
      ],
      growthDrivers: [{ title: "AI時代のsoftware delivery統合", evidence: "planning、code、CI/CD、security、AIをsingle platformへ統合。", japanMeaning: "日本Ecosystem roleはpartnerを通じてplatform adoptionを広げる。", sourceIds: ["gitlab-company", "gitlab-job"] }],
      risks: [{ title: "再編・suite競争・migration", disclosedRisk: "2026年5月にagentic software deliveryへ集中する再編を発表。", companyResponse: "single platformとAI・governanceへの集中を掲げる。", genbaRead: "人員再編後の日本coverage、partner支援、roadmapとmigration負荷を検証する。", sourceIds: ["gitlab-finance", "gitlab-company"] }],
      japanCommitment: { verdict: "2020年の本格進出、日本法人での想定従業員数58人、2026年のJapan Ecosystem採用を確認", summary: "日本市場投資は確認できるが、日本売上・顧客数・team構成・partner経由売上は非公開。", signals: [{ year: "2026", title: "Senior Ecosystem Sales Manager採用", detail: "日本Remoteでhyperscaler、GSI、reseller、technology partnerを担当。", sourceIds: ["gitlab-job"] }], unknowns: ["日本売上・ARR・顧客数", "partner-sourced・influenced売上と達成率", "日本team構成・reporting line"] },
      scenarios: [
        { scenario: "基本", title: "DevSecOps統合とAI governance", body: "既存顧客とpartner経由でtool consolidationとAI software deliveryが進む。" },
        { scenario: "上振れ", title: "Agentic deliveryの標準化", body: "AI agentを含むsoftware lifecycleのgovernance layerとして大型標準化が進む。" },
        { scenario: "下振れ", title: "suite競争と再編の実行risk", body: "Microsoft・GitHub等との競争、migration負荷、coverage不足で日本拡張が鈍る。" },
      ],
      sourceIds: ["gitlab-finance", "gitlab-company", "gitlab-job", "gitlab-customers"],
    };
  }
}

function patchWatchGuard(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "watchguard",
    leaderName: "Joe Smolarski",
    leaderLabel: "CEO",
    leaderUrl: "https://www.watchguard.com/wgrd-about/leadership",
    localName: "確認不能",
    localLabel: "日本事業責任者",
    localUrl: "https://jobs.lever.co/watchguard/31981db1-54fb-4764-9f8c-16b886d176ae",
    companyId: "watchguard-company",
    jobId: "watchguard-job",
    customersId: "watchguard-customers",
    externalId: "watchguard-external",
    financeId: "watchguard-finance",
    targets: ["最高情報責任者・Security責任者", "中堅中小企業のIT責任者", "マネージドサービス事業者（MSP）", "セキュリティ販売店・ディストリビューター", "エンドポイント・Network運用責任者"],
    heroSummary: "network、endpoint、identity、incident対応が別製品・別partnerへ分かれると、alertは増えても24時間の判断・封じ込め責任が曖昧になる。WatchGuardはMSP・channelが複数顧客へ運用できるsecurity platformとして統合し、coverage、response時間、analyst工数、顧客当たり運用costを改善する。",
    competitors: "Fortinet、Sophos、Cisco、Palo Alto Networks、Microsoft、CrowdStrike、SentinelOne",
    feature: "network、endpoint、identity、MDRをWatchGuard Cloudで統合し、MSP・channelが複数顧客を運用する。",
    advantage: "network applianceからMDRまでをchannel-firstで設計し、25,000 MSPのservice deliveryとportfolio economicsへ接続する。",
    benefit: "coverage、MTTD・MTTR、incident、analyst hours、ticket、service attach、顧客当たり運用costを改善できる可能性がある。",
    evidence: "会社表示は1,250人、25,000 MSP、179カ国のpartner、175万台のactive appliance、750万のendpoint・identity保護。宮崎市等の国内事例を掲載。",
    marketVerdict: "結論：25,000 MSPのchannel基盤と東京Country Manager採用は日本投資の明確なsignal。一方、非公開企業で日本売上・顧客数・team人数・seller達成率は非公開のため、installed base、partner productivity、更新・service attachの実態を見極める必要がある。",
    marketParagraphs: [
      "ransomware、credential abuse、cloud・endpoint分散が続く一方、中堅中小企業と地域事業者はsecurity人材が限られる。",
      "WatchGuardはnetwork securityからendpoint、identity、MDRへ広がり、製品販売よりMSPが継続serviceを運用するplatformを目指す。",
      "Genba分析：対象customer群でcoverage、MTTD、MTTR、incident、analyst hours、service attachをbaseline比較し、partner marginを含む3年TCOで選定する。",
    ],
    cultureHeadline: "channel・MSPを中心に日本事業を率いるcountry leadership role。東京onsite以外の勤務柔軟性と現team体制は対象求人と面接で確認する。",
    classification: "出社中心",
    displayLabel: "東京／オンサイト",
    officeDays: "公式求人はonsite。週の具体日数は明記なし",
    remoteOnly: "Remote専任ではない",
    flexibility: "partner・customer訪問、国内外travelを含む運用",
    goodFor: ["country strategyと現場営業を一体で担いたい", "channel・distributionを売上へ変えたい", "cybersecurity teamを採用・育成したい"],
    cautionFor: ["個人商談だけに専念したい", "direct-only salesを志向する", "日本の売上・達成率開示を必須にする"],
    unresolved: [
      ["Country baseline", "日本の売上戦略と目標を統括。", "現在のARR・bookings、成長率、renewal、new・existing比率は？"],
      ["Team", "sales teamの採用・coachingを担う。", "現在のseller・SE・channel人数、open headcount、ramped seller達成率は？"],
      ["Channel economics", "二層distributionとMSP・partnerを運営。", "partner-sourced売上、active partner、service attach、margin、concentrationは？"],
      ["Forecast", "revenue targetとforecastを担う。", "quota、coverage、average deal、cycle、forecast accuracy、直近4四半期達成率は？"],
      ["権限・報酬", "Japan country leadership。", "P&L・pricing・hiringのdecision right、base・variable・equity、rampは？"],
    ],
  }));
}

function patchLangChain(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "langchain",
    leaderName: "Harrison Chase",
    leaderLabel: "Co-founder / CEO",
    leaderUrl: "https://www.langchain.com/about",
    localName: "確認不能",
    localLabel: "日本事業責任者",
    localUrl: "https://www.langchain.com/careers",
    companyId: "langchain-company",
    jobId: "langchain-careers",
    customersId: "langchain-customers",
    externalId: "langchain-external",
    financeId: "langchain-growth",
    targets: ["最高技術責任者・AI責任者", "AI基盤・機械学習エンジニアリング", "アプリケーション開発", "データ・セキュリティ・リスク", "デジタル製品責任者"],
    heroSummary: "各teamが異なるmodel・frameworkでAI agentを作ると、prompt、tool、evaluation、production telemetryが分散し、失敗原因とrelease判断を説明できない。LangChainはagent orchestrationとtrace・evaluation・deploymentをつなぎ、task success、latency、cost、human escalation、developer timeを改善する。",
    competitors: "AWS、Google Cloud、Microsoft、OpenAI・Anthropic SDK、LlamaIndex、CrewAI、Arize、Datadog、内製platform",
    feature: "LangChain、LangGraph、LangSmithでAI applicationの開発、stateful agent、trace、evaluation、deploymentを支援する。",
    advantage: "広いopen source integrationとagent orchestrationを、productionのtrace・evaluation・feedback loopへ接続する。",
    benefit: "task success、evaluation coverage、latency、token cost、incident再現、human escalation、release lead timeを改善できる可能性がある。",
    evidence: "楽天は3人・1週間で初期platformを構築し、32,000人への配布を計画。会社採用情報はSeries B 1.25億ドル、Fortune 500の35%利用を表示。",
    marketVerdict: "結論：楽天の国内lighthouse、developer adoption、APAC technical optionは進出余地を示す。一方、日本法人・office・専任求人・local supportは未確認で、free adoptionからpaid Japan ARRへ転換できるかを継続観測する。",
    marketParagraphs: [
      "AI agentはmodel、prompt、tool、data、human approvalが頻繁に変わり、quality、cost、latency、securityを継続評価する必要がある。",
      "LangChainはopen source frameworkからLangGraphのdurable agentとLangSmithのproduction feedback loopへ広がり、application teamからEnterprise platformへ予算範囲を拡張している。",
      "Genba分析：対象agentでtask success、evaluation、latency、cost、error、human escalationをbaseline比較し、cloud・内製との運用TCOで選定する。",
    ],
    cultureHeadline: "急拡大するAI developer platform。日本法人・office・Japan求人は未確認で、国内勤務可能性を示すものではない。",
    classification: "未確認",
    displayLabel: "日本拠点・求人なし",
    officeDays: "Japan roleがないため確認不能",
    remoteOnly: "日本からの勤務可否は未確認",
    flexibility: "将来のJapan roleで個別確認が必要",
    goodFor: ["AI agentのproduction化を作りたい", "open-source-to-enterpriseを経験したい", "将来のJapan market buildを観測したい"],
    cautionFor: ["現在すぐ日本法人へ応募したい", "日本語support体制を必須にする", "成熟したlocal playbookを求める"],
    unresolved: [
      ["Japan traction", "楽天の国内事例を確認。", "日本のpaid customer、ARR、renewal、production workloadはどの程度か？"],
      ["進出条件", "日本法人・office・求人は未確認。", "専任pod設置のARR・pipeline・customer数のthresholdは？"],
      ["Local readiness", "APAC region選択は確認。", "日本語契約・support・security・data・incident escalationを誰が担うか？"],
      ["Partner motion", "agent導入はcloud・SIとの協働が必要。", "国内cloud・SI・AI consultancyとのco-sell・delivery計画は？"],
      ["Career timing", "現時点でJapan求人はない。", "Japan・APAC roleの採用時期、location、reporting line、報酬・equityは？"],
    ],
  }));
}

export function applyCompanyPageRolloutBatchTwentySix(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  if (intelligenceBySlug.gitlab) patchGitLab(intelligenceBySlug.gitlab);
  if (intelligenceBySlug.watchguard) patchWatchGuard(intelligenceBySlug.watchguard);
  if (intelligenceBySlug.langchain) patchLangChain(intelligenceBySlug.langchain);
}
