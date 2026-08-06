import { companies, jobs, type Company, type Job } from "../lib/market-data";
import { getCompanyPublicIntelligence } from "../lib/company-public-intelligence";

export type KnowledgeBlock = { id: string; title: string; text: string };

function buildCompanyBlock(company: Company, companyJobs: Job[]): KnowledgeBlock {
  const intel = getCompanyPublicIntelligence(company.slug);
  const lines: string[] = [];
  lines.push(`# ${company.name}(${company.category})`);
  lines.push(`本社: ${company.hq} / 日本拠点: ${company.japanPresence} / 採用状況: ${company.hiringStatus}`);
  lines.push(company.description);

  if (intel) {
    lines.push("## 会社概要ファクト(出典付き、詳細はGenba上の個別ページを参照)");
    intel.facts.forEach((fact) => lines.push(`- ${fact.label}: ${fact.value}(${fact.detail})`));

    if (intel.marketStatus.isPublic) {
      const market = intel.marketStatus;
      lines.push(
        `## 株式市場: ${market.exchange}: ${market.ticker}、株価${market.price}(${market.priceAsOf}時点のスナップショット、リアルタイムではない)、時価総額${market.marketCap}、52週レンジ${market.week52Range}、アナリスト評価${market.analystConsensus}(平均目標株価${market.analystTargetAvg})`,
      );
      lines.push(`成長見通し: ${market.outlookSummary}`);
    } else {
      lines.push(`## 非上場企業のIPO見通し: ${intel.marketStatus.ipoOutlookSummary}`);
    }

    lines.push("## Genbaの5つの仮説(公開情報からの分析。事実そのものではない)");
    intel.hypotheses.forEach((hypothesis) =>
      lines.push(`- [${hypothesis.topic}] ${hypothesis.title}: ${hypothesis.conclusion}(確度: ${hypothesis.confidence})`),
    );

    lines.push("## カルチャー・キャリアの読み");
    lines.push(`${intel.cultureNotes.hypothesis.title}: ${intel.cultureNotes.hypothesis.body}`);
    lines.push(`${intel.cultureNotes.careerValue.title}: ${intel.cultureNotes.careerValue.body}`);

    lines.push("## 営業ロールの特徴(Genba分析)");
    lines.push(
      `商流: ${intel.roleLens.salesMotion} / 報酬構造: ${intel.roleLens.compensation} / クォータ達成: ${intel.roleLens.quota} / 社内連携: ${intel.roleLens.collaboration}`,
    );

    lines.push(`## 転職者が挙げやすい魅力(タグ): ${intel.fitTags.join("、")}`);
  }

  if (companyJobs.length > 0) {
    lines.push("## 現在Genbaが確認している営業求人");
    companyJobs.forEach((job) => lines.push(`- ${job.title}(セグメント: ${job.segment}、勤務地: ${job.location}、最終確認日: ${job.lastChecked})`));
  } else {
    lines.push("## 現在Genbaが確認している営業求人: なし(継続観測中)");
  }

  return { id: company.slug, title: company.name, text: lines.join("\n") };
}

export function buildKnowledgeBlocks(): KnowledgeBlock[] {
  const blocks = companies.map((company) => buildCompanyBlock(company, jobs.filter((job) => job.companySlug === company.slug)));

  blocks.push({
    id: "about-genba",
    title: "Genbaというメディアについて",
    text: [
      "Genbaは「外資戦士と予備軍の作戦会議室」を掲げる、外資SaaS営業職向けの無料の日本語インテリジェンスメディアです。",
      "読者は無料。収益は採用企業・人材関連会社などのスポンサーから得ており、広告料金によって企業評価や分析結論を変えることはありません。",
      "編集原則: 公式情報を優先する、初回確認日・最終確認日を明記する、事実とGenba分析を表示上分ける、広告・PRは明示する。",
      "Genba上では求人応募の受付、候補者情報の企業への提供、候補者と求人の個別マッチング、条件交渉、採用成功報酬の受け取りは行っていません。応募は各社の公式採用ページで行います。",
      `現在Genbaが深く調査している企業は${companies.length}社です: ${companies.map((c) => c.name).join("、")}。`,
    ].join("\n"),
  });

  return blocks;
}

// ひらがなのみの2文字(助詞・活用語尾の断片: 「のは」「です」「した」等)はノイズになりやすいため除外する
function isPureHiragana(text: string): boolean {
  return /^[぀-ゟ]+$/.test(text);
}

function tokenize(text: string): string[] {
  const tokens: string[] = [];
  const normalized = text.toLowerCase();

  const asciiMatches = normalized.match(/[a-z0-9]+/g) ?? [];
  tokens.push(...asciiMatches.filter((token) => token.length >= 2));

  const cjkRuns = normalized.match(/[぀-ヿ㐀-鿿]+/g) ?? [];
  for (const run of cjkRuns) {
    if (run.length === 1) {
      if (!isPureHiragana(run)) tokens.push(run);
      continue;
    }
    for (let i = 0; i < run.length - 1; i++) {
      const bigram = run.slice(i, i + 2);
      if (!isPureHiragana(bigram)) tokens.push(bigram);
    }
  }

  return tokens;
}

export function retrieveRelevantBlocks(blocks: KnowledgeBlock[], query: string, limit = 4): KnowledgeBlock[] {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return blocks.slice(0, limit);

  const queryTokenSet = new Set(queryTokens);
  const scored = blocks.map((block) => {
    // ブロック内でのトークン出現回数ではなく、一致した「種類数」で数える(頻出語の反復による水増しを防ぐ)
    const blockTokenSet = new Set(tokenize(`${block.title} ${block.text}`));
    let score = 0;
    for (const token of blockTokenSet) {
      if (queryTokenSet.has(token)) score += 1;
    }
    if (query.includes(block.title)) score += 20;
    return { block, score };
  });

  scored.sort((a, b) => b.score - a.score);
  // 短いbigramの偶然一致(助詞など)をノイズとして除外するため、一定スコア以上のみ「関連あり」とみなす
  const RELEVANCE_THRESHOLD = 3;
  const top = scored.filter((entry) => entry.score >= RELEVANCE_THRESHOLD).slice(0, limit);

  // 「about-genba」は常に文脈として有用なので、上位に含まれていなければ追加する
  const aboutBlock = blocks.find((block) => block.id === "about-genba");
  if (aboutBlock && !top.some((entry) => entry.block.id === "about-genba")) {
    top.push({ block: aboutBlock, score: 0 });
  }

  return top.slice(0, limit + 1).map((entry) => entry.block);
}
