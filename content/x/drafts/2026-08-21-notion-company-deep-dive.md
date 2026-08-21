# X下書き: Notionは一度失敗し、京都で作り直された

Notion公開版（Jio編集）

今日は意外にも日本とゆかりのあるNotionを軽くご紹介します！Notionは誰もが知っていると思いますが、日本法人においてはまだまだ小規模外資にあたるので取り上げます。

Notionは、2013年に始まったものの、最初の製品は失敗し、会社は消えかけました。「作りたいものは合っている。でも技術の土台が違う」と気づいた共同創業者2人は、2015年に会社ごと京都へ移り、借りた部屋で製品を一から作り直します。迷走期に作り直すこと4回。2018年のNotion 2.0で、ようやく伸び始めました。

現在は文書、社内Wiki、project管理を1つに集め、AI検索やAgentまで提供しています。

2024年8月には利用者1億人を突破。イメージでいうと、MiroやCanvaと同じくらいの規模感です。いずれも世界で1億人単位に使われています。
※Canvaだけ月間利用者で、厳密な同一指標ではありません。

ただ、「Claude CodeやCodexは、MCPでDriveやGitHubなどへ直接つながれる。Notionいらなくない？」という疑問はあると思います。実際、つながること自体はもはやNotionの強みとしては押し出せないとは僕も思ってます。

Notionが狙うのは、AIの接続先ではなく、複数のAIの仕事を人間が管理する共通画面です。AIが各toolを操作できても、何を任され、どこまで終わり、何を変え、誰が承認したのかを全社で揃える場所は別に必要。Notionはtask、文書、権限、承認、実行履歴をまとめ、Claude Agentや外部Agentも同じworkspaceへ取り込もうとしています。Custom Agentsは2026年5月時点で100万超。

MCPが「AIと各toolをつなぐ道路」なら、Notionが取りにいくのは、人とAIの仕事をさばく管制塔。AIが増えるほど、その管理場所が必要になるというのが勝ち筋のようです。

ただし、MicrosoftやGoogleがその管制塔まで取ればNotionは苦しい。文書toolからAI時代の仕事管理基盤へ移れるかが勝負です。

トヨタ自動車やJR西日本、SmartHRなどで導入実績があり、大幅な業務効率アップにつながっているとのこと。

今日時点での日本向け公式求人は15件。だいぶ多いですね、日本で拡大をしようという勢いが感じられます。
Genbaでは営業・マーケティング等の対象ロールの情報を確認でき、各求人からNotionの公式採用ページへ進めます。

▪️Notionの企業研究と日本求人
https://genbajapan.com/companies/notion?utm_source=x&utm_medium=organic_social&utm_campaign=20260821_notion&utm_content=post_03

シリーズ: 1社深掘り
確認日: 2026-08-21
公開日: 2026-08-21
ステータス: Jio手動投稿済み

## 事実確認メモ

- 創業背景: Notion公式。2013年に開始後、初期は方向を見失い、会社は消えかけた。迷走期に4回再構築し、正しい製品に対して技術stackが合わなかった版を日本で書き直した。2018年のNotion 2.0で初めてtractionの兆しが出たとの説明を確認。別の公式記事では、2015年に会社を京都へ移し、製品を完全に作り直したと説明している。本文は創業者の実名を出さず要約した。
  - https://www.notion.com/blog/100-million-of-you
  - https://www.notion.com/blog/behind-the-scenes-notion-ai
- 現在の事業: Notion公式の製品一覧でDocs、Knowledge Base、Projects、Enterprise Search、Agentsを確認。
  - https://www.notion.com/product
- 現在の規模: Notionは2024年8月に利用者1億人を突破したと、2024-09-03の公式記事で公表。現在の正確な利用者数、月間active利用者数、売上高は本文で補完していない。
  - https://www.notion.com/blog/100-million-of-you
- 規模比較: Miroは2026-05-19時点で1億人超の利用者、Canvaは2025年に月間利用者2.6億人を公式発表。NotionとMiroの公表値は月間利用者と明記されておらず、Canvaは月間利用者で定義が異なるため、本文では「世界で1億人単位に使われる」という桁の比較に限定した。
  - https://miro.com/newsroom/miro-takes-aim-at-the-gap-between-ai-potential-and-organizational-reality/
  - https://www.canva.com/newsroom/news/canva-2025-wrap/
- AI時代の生存戦略: Notion MCPはClaude Code、Cursor、Codex等がNotionの情報を検索・閲覧・作成・更新できる公式接続。一方、GitHubには公式MCP Serverがあり、Google Driveも2026年4月からDeveloper Previewで公式MCPを提供しているため、MCP接続自体をNotion固有の優位性とは扱っていない。Claude agents in NotionはBusiness・Enterprise向けbetaで、Notion内の共有文書・task boardを使って作業する。Developer Platformでは外部Agent、実行の可視化、承認、権限、sandboxを共通workspaceへ集める方向を公式に示している。
  - https://developers.notion.com/guides/mcp/overview
  - https://www.notion.com/help/notion-mcp
  - https://www.notion.com/help/use-claude-agents-in-notion
  - https://www.notion.com/blog/introducing-developer-platform
  - https://github.com/github/github-mcp-server
  - https://developers.google.com/workspace/drive/api/reference/mcp
- Custom Agents: 2026-05-13のNotion公式発表で、teamが作成したCustom Agentsは累計100万超。active agent数や有料利用数ではないため、本文では導入・作成の広がりを示す数字としてのみ使用した。
  - https://www.notion.com/blog/introducing-developer-platform
- 勝ち筋と競争リスク: MCPはAIと各toolを接続する手段であり、複数Agentのtask、進捗、承認、権限、実行履歴を全社で管理する共通画面までは決めない。Notionがその管理層を狙うという説明と、Microsoft・Googleが同じ管理層を取ればNotionが選ばれない可能性があるという部分は、上記の公式製品戦略を踏まえた編集上の分析。会社の公式見解や確定した将来予測ではない。
- トヨタ自動車事例: 未来創生センターが草案、共有、承認をNotionへ集約し、1件15分ほどだったX投稿の承認作業を5分へ短縮したとするNotion公式顧客事例。効果はvendor公表値であり、独立検証値ではない。
  - https://www.notion.com/ja/customers/toyota
- JR西日本事例: Notion公式顧客事例で、新メンバーのオンボーディング時間が50%以上削減されたとする。効果はvendor公表値であり、独立検証値ではない。
  - https://www.notion.com/ja/customers/jrwest-jp
- SmartHR事例: Notion公式顧客事例で、従業員が1日10分の探し物の時間を削減できるとした場合、年間6万時間相当と試算。実測した年間削減時間ではない。
  - https://www.notion.com/ja/customers/smarthr-jp
- 日本求人: 2026-08-21にNotion公式Ashbyで勤務地をTokyo, Japanに絞り、15件を確認。内訳はfull time 13件、contract 1件、temporary 1件。本文はJioの指示により件数だけを記載し、長いposition一覧は省略した。
  - https://jobs.ashbyhq.com/notion?locationId=09ab600d-2330-43ab-bb1a-760bb7b9b635
- 求人から見る日本拡大: 15件は公式求人の確認事実。「日本で拡大をしようという勢いが感じられる」はJioの編集上の推察であり、Notionが公式に明言した日本拡大計画ではない。
- Genba求人導線: 2026-08-21に本番企業ページで営業・マーケティング等の対象12ロールを確認。各role cardに公式求人への直接linkがある。公式ATSの15件すべてをGenbaへ掲載しているわけではないため、本文では「対象ロール」と表現した。
  - https://genbajapan.com/companies/notion#roles
- Genba掲載確認: 2026-08-21に本番企業ページで現在掲載中であることを確認。
  - https://genbajapan.com/companies/notion
- Genba導線: 2026-08-21にUTM付きURLで本番ページへ正常到達し、4つのparameter保持を確認。
- 公開版の扱い: 2026-08-21にJioが本文を編集し、Xへ手動投稿した。本ファイルは今後の語り口・構成の基準稿とし、本文は「Smart HR」を正式表記の「SmartHR」に、句点の重複とチャット上で崩れたURLだけを機械的に正規化した。Xの投稿URLは未確認のため記録していない。
