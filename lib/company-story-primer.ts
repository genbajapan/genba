export type CompanyStorySource = {
  label: string;
  url: string;
};

export type CompanyStoryPrimerData = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  essence: {
    shallow: string;
    deep: string;
    memoryHook: string;
  };
  origin: Array<{
    marker: string;
    title: string;
    body: string;
    source: CompanyStorySource;
  }>;
  productSystem: Array<{
    name: string;
    audience: string;
    job: string;
    outcome: string;
    source: CompanyStorySource;
  }>;
  direction: {
    official: string;
    analysis: string;
    source: CompanyStorySource;
  };
  japan: Array<{
    label: string;
    title: string;
    body: string;
    source: CompanyStorySource;
  }>;
  culture: {
    verified: string[];
    stated: string[];
    unknown: string[];
    source: CompanyStorySource;
  };
  brandGuide: CompanyStorySource;
  verifiedAt: string;
};

const elevenLabsStory: CompanyStoryPrimerData = {
  slug: "elevenlabs",
  eyebrow: "START HERE / 3分でつかむ",
  title: "吹き替えへの\n違和感から始まった。\n人と技術の会話を\n作り直す会社。",
  lead: "ElevenLabsを単なる「AI音声生成ツール」と捉えると、いま何を目指している会社なのかを見誤ります。出発点は、言語が変わっても話者の声と感情を失わない吹き替え。その技術を、制作・開発・顧客対応へ広げています。",
  essence: {
    shallow: "AIで、人間らしい声を作る会社",
    deep: "声・言語・会話を、あらゆる製品や業務へ組み込める基盤にする会社",
    memoryHook: "「声を作る」から「人と技術の接点を作る」へ",
  },
  origin: [
    {
      marker: "原体験",
      title: "吹き替えで、俳優の声と感情が失われる",
      body: "創業者たちは、母国ポーランドで海外作品を見るなかで、質の低い吹き替えが作品体験を損なうことに問題意識を持ちました。",
      source: { label: "創業背景", url: "https://elevenlabs.io/docs/help-center/other/what-is-eleven-labs" },
    },
    {
      marker: "最初の問い",
      title: "別の言語でも、同じ人の声と表現を保てないか",
      body: "目指したのは単なる読み上げではなく、話者らしさ、感情、間合いまで残したまま言語の壁を越えることでした。",
      source: { label: "Dubbingの思想", url: "https://elevenlabs.io/docs/help-center/product/dubbing/what-is-dubbing" },
    },
    {
      marker: "技術の核",
      title: "人間らしい音声モデルを作る",
      body: "2022年に創業し、最初の人間らしい音声モデルを起点に、文字起こし、吹き替え、音楽、会話型AIへ対象を広げました。",
      source: { label: "ElevenLabsについて", url: "https://elevenlabs.io/about" },
    },
    {
      marker: "現在",
      title: "音声機能ではなく、3つの利用基盤へ",
      body: "現在は、作る人、組み込む人、顧客と会話する企業のための3つの製品群として事業を組み直しています。",
      source: { label: "公式プロダクト構成", url: "https://elevenlabs.io/about" },
    },
  ],
  productSystem: [
    {
      name: "ElevenCreative",
      audience: "制作者・マーケター",
      job: "音声、音楽、効果音、動画を作り、多言語化する",
      outcome: "制作と海外展開を速くする",
      source: { label: "公式説明", url: "https://elevenlabs.io/about" },
    },
    {
      name: "ElevenAPI",
      audience: "開発者・プロダクト組織",
      job: "低遅延の音声モデルを、製品や業務へ組み込む",
      outcome: "音声体験を自社製品の一部にする",
      source: { label: "開発者向け概要", url: "https://elevenlabs.io/docs/overview/intro/" },
    },
    {
      name: "ElevenAgents",
      audience: "顧客対応・業務部門",
      job: "電話やチャットで、知識と業務ツールを使って会話する",
      outcome: "会話を業務の完了までつなぐ",
      source: { label: "ElevenAgents概要", url: "https://elevenlabs.io/docs/eleven-agents/overview/" },
    },
  ],
  direction: {
    official: "公式は、音声だけに閉じず、人と技術のやり取りそのものを変えることを目標に掲げています。現在の3製品群と安全対策への投資は、その方向を示しています。",
    analysis: "Genbaの見立てでは、ElevenLabsは「生成結果を売るツール」から、「制作・製品・顧客対応のなかで継続利用される基盤」へ移ろうとしています。競争軸も、声の自然さだけでなく、組み込みやすさ、本番運用、安全性まで広がります。",
    source: { label: "使命と現在地", url: "https://elevenlabs.io/about" },
  },
  japan: [
    {
      label: "事業基盤",
      title: "初の海外子会社を東京に設立",
      body: "2025年4月、日本法人をアジア展開の拠点として設立。日本向けの販売・協業を、海外からの対応ではなく現地組織で進める段階に入りました。",
      source: { label: "日本法人設立", url: "https://elevenlabs.io/blog/elevenlabs-establishes-japanese-subsidiary-elevenlabs-gk" },
    },
    {
      label: "利用の具体像",
      title: "日本語作品を、声の表現を保って世界へ",
      body: "TBSの番組「KASSO」では、多言語吹き替えに活用。日本では、コンテンツ輸出と音声の権利・同意を両立できるかが重要な論点です。",
      source: { label: "国内協業・事例", url: "https://elevenlabs.io/blog/elevenlabs-establishes-japanese-subsidiary-elevenlabs-gk" },
    },
  ],
  culture: {
    verified: [
      "公式採用ページに、ロンドン・ニューヨーク・サンフランシスコ・ワルシャワの拠点を記載",
      "50か国超にメンバーがいると公式採用ページで説明",
      "日本向け求人は、職種ごとの勤務地・責任範囲を公式求人で確認可能",
    ],
    stated: [
      "First principles（前提から考える）",
      "Excellence everywhere（どこでも高い基準を求める）",
      "Owning outcomes（作業ではなく成果を引き受ける）",
      "役職名よりインパクトを重視し、非同期で自律的に働く",
    ],
    unknown: [
      "日本組織での実際の意思決定速度と会議量",
      "マネージャーごとの支援の質、評価・昇進の運用",
      "繁忙期の実労働時間と、営業目標の達成者比率",
    ],
    source: { label: "公式採用ページ", url: "https://elevenlabs.io/careers" },
  },
  brandGuide: { label: "ElevenLabs公式ブランドガイド", url: "https://elevenlabs.io/brand" },
  verifiedAt: "2026-11-03",
};

const companyStories: Record<string, CompanyStoryPrimerData> = {
  elevenlabs: elevenLabsStory,
};

export function getCompanyStoryPrimer(slug: string) {
  return companyStories[slug];
}
