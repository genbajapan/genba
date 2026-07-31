# ローンチチェックリスト

「Jioが実際にメディア運用・X運用をするだけ」の状態にするための実行タスク一覧。フェーズ順に上から着手する。

## Phase 0: ブロッカー解消(最優先)

- [ ] Adyen HR/法務に副業規定・競業避止・勧誘禁止条項を確認し、**発信のみなら問題ないこと**を明文化してもらう([legal-checklist.md](legal-checklist.md))
  - 個人の副業(有料アドバイザリー)としてではなく、まずは「個人の情報発信」であることの許容範囲を確認
  - 会社によっては外部発信自体に事前承認や届出が必要な場合があるので、そのプロセスも合わせて確認
- [ ] 上記が確認できるまでは、プロフィールや投稿で「アドバイザリー受注中」を匂わせる表現をしない(発信のみのトーンに留める)

## Phase 1: ブランド資産・アカウント確保

- [x] ドメイン確保: `genbajapan.com` を取得済み([legal-checklist.md](legal-checklist.md)参照)
- [ ] 問い合わせ用メールアドレス作成(hello@genbajapan.com としてコード側は設定済み。実際のメールボックス作成が必要)
- [ ] Xハンドル確保(空き確認、例: @genba_sales, @genbahq 等)
- [ ] ロゴ・アイコン画像の用意(簡易でよい。Xアイコン/ヘッダー、ブログのファビコン・OGP画像に流用)
- [ ] カラーパレット・フォントの簡易ガイド決定(ブログとXで統一感を出すため)
- [ ] Xプロフィール文言の確定
  - Bio: タグライン「Winning Japan Sales for SaaS & IT」+ 実績(Cisco/Shopify中心、[03-founder-profile.md](../docs/03-founder-profile.md)のガードレールに沿う)
  - リンク: ブログURL
  - 固定ポスト用の自己紹介スレッド草稿を作成

## Phase 2: メディア(ブログ)基盤構築

- [x] プラットフォーム選定: Next.js製の自前static site(`content/blog/published/`のMarkdownを読み込む構成)。Vercelへのデプロイを想定
- [ ] 独自ドメイン(genbajapan.com、取得済み)のDNSをホスティング(Vercel想定)に接続
- [x] 最低限のページを作成済み: トップ・About・Services・Blog(一覧+詳細)・Contact(コードはリポジトリ内 `app/`)
- [ ] 問い合わせ導線を設置(現状はmailtoリンクのみ。Calendly等の日程調整ツール導入は要検討)
- [ ] アクセス解析を設置(Google Analytics / Plausible等)
- [ ] メール購読機能の要否を検討(将来的なニュースレター化に備えるか)

## Phase 3: コンテンツ在庫の確保(公開前バッファ)

- [ ] [content-calendar.md](../content/calendar/content-calendar.md) を最低4週間分(5カテゴリのローテーション)埋める
- [ ] 一次情報の収集を [research/market-data/](../research/market-data/) と [research/competitors/](../research/competitors/) にストック(経産省・観光庁・JETROデータ、Nihonium等競合の発信内容の分析)。カテゴリ3(市場データ)記事はこれが揃うまで下書きのまま([content/blog/drafts/japans-cashless-shift.md](../content/blog/drafts/japans-cashless-shift.md))
- [x] 初回記事を4本、[content/blog/published/](../content/blog/published/) に執筆済み(カテゴリ1・2・4・5)。カテゴリ3は一次情報待ちで下書きに留め置き
- [ ] 各記事を [guardrails.md](guardrails.md) でレビュー(公開済み4本は執筆時にガードレール沿いで作成済みだが、公開前に再確認推奨)
- [ ] 各記事に対応するXダイジェストスレッドを [x-thread-template.md](../content/templates/x-thread-template.md) で作成
- [ ] 単発の気づきツイートも並行して10〜20本ストック(記事に紐付かない日常的な発信用)

## Phase 4: 運用フローの確立

- [ ] 発信の曜日・頻度を確定し、[content-calendar.md](../content/calendar/content-calendar.md) の運用ルールとして明記
- [ ] 公開前チェック([guardrails.md](guardrails.md))を毎回のルーティンに組み込む(テンプレート内のチェックリストで担保済み)
- [ ] 問い合わせが来た場合の一次対応フローを決める(誰が/いつ返信、料金の出し方、Phase 0が未解決の間は「現在は発信のみ、案件化は準備中」と回答する等)

## Phase 5: ローンチ

- [ ] ローンチ日を決定
- [ ] 初回記事+Xスレッドを同日公開
- [ ] 以降は[content-calendar.md](../content/calendar/content-calendar.md)に沿って運用を継続

## 進行管理

| フェーズ | ステータス |
|---|---|
| Phase 0: ブロッカー解消 | 未着手 |
| Phase 1: ブランド資産・アカウント確保 | 一部着手(ドメイン`genbajapan.com`取得済み、ロゴは簡易アイコンのみ) |
| Phase 2: メディア基盤構築 | 一部着手(サイト実装・ページ作成済み、ドメイン接続・解析・問い合わせ導線は未) |
| Phase 3: コンテンツ在庫の確保 | 一部着手(公開記事4本執筆済み、カレンダー未記入、カテゴリ3は一次情報待ち) |
| Phase 4: 運用フローの確立 | 未着手 |
| Phase 5: ローンチ | 未着手 |

最終更新: 2026-07-31
