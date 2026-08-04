# Genba Webサイト・リニューアル指示書

最終更新: 2026-08-04

関連資料: [09-pivot-business-plan.md](09-pivot-business-plan.md)

## 1. リニューアルの目的

既存サイトは、海外企業向けの英語中心アドバイザリーサイトとして設計されている。これを、日本の外資SaaS営業職向けの無料データメディアへ変更する。

リニューアル後の最重要行動は、問い合わせではなく以下とする。

1. 無料ニュースレターへの登録
2. 企業・求人ページの閲覧
3. 企業公式求人への遷移
4. 採用企業・スポンサーからの掲載問い合わせ

## 2. 実装方針

### 維持するもの

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- static export
- Cloudflare assets deployment
- Markdownベースの記事管理
- 日英対応可能な基盤

### 変更するもの

- 日本語を主言語にする
- トップページをメディア・データベース型へ全面変更
- Advisory、Services、既存Contact中心の導線を廃止・再配置
- 企業・求人・変更履歴を構造化データで管理
- ニュースレター登録を全ページの主要CTAにする
- 採用企業向けページを追加
- 既存の英語記事はアーカイブとして保持するが、トップ導線から外す

## 3. URL設計

推奨URLは以下。

| URL | 役割 |
|---|---|
| `/` | 日本語トップ |
| `/companies` | 外資SaaS企業一覧 |
| `/companies/[slug]` | 企業詳細・採用タイムライン |
| `/jobs` | 外資SaaS営業求人一覧 |
| `/jobs/[id]` | 求人詳細・公式応募リンク |
| `/signals` | 新規求人・終了・日本参入シグナル |
| `/insights` | 編集記事一覧 |
| `/insights/[slug]` | 記事詳細 |
| `/newsletter` | 無料ニュースレター登録 |
| `/advertise` | 求人掲載・スポンサー案内 |
| `/methodology` | 情報源・判定・訂正方針 |
| `/about` | Genbaと編集方針 |
| `/contact` | 一般・訂正・掲載問い合わせ |
| `/en/...` | 既存英語記事のアーカイブ候補 |

既存の `/ja` を日本語ルートとして残すのではなく、日本語をルート直下に移す。既存URLから301リダイレクトできないstatic export構成では、旧URLの保持またはHTMLレベルの移行案を検討し、検索評価を失わないようにする。

## 4. グローバルナビゲーション

```text
Genba | 企業を探す | 求人を探す | 採用シグナル | インサイト | 掲載について | 無料購読
```

- `無料購読`を最も目立つCTAにする
- モバイルではハンバーガーメニューを使用する
- 現行ヘッダーは狭い画面でリンク過多になるため作り直す

## 5. トップページ仕様

### 5.1 Hero

見出し案:

> 外資SaaSの日本採用を、変化から読む。

補足:

> 日本で働く・働きたい外資SaaS営業のために、企業、求人、日本参入シグナルを継続観測。すべて無料で提供します。

CTA:

- Primary: `無料で週次レポートを受け取る`
- Secondary: `最新の営業求人を見る`

### 5.2 今日の数字

- 追跡企業数
- 公開中の営業求人
- 今週の新規求人
- 今週の日本参入・採用シグナル

すべてデータから自動集計する。

### 5.3 今日の採用シグナル

最大5件を表示。

カード項目:

- 企業名
- 変更種別
- 変更日
- 事実の要約
- 編集部の読み解き（ある場合）
- 信頼度・出典

### 5.4 新着営業求人

最大6件。

- 職種
- 企業
- セグメント
- 勤務地・勤務形態
- 言語要件
- 公開・確認日
- 日本市場フェーズ

### 5.5 注目企業

- 日本採用拡大中
- 新規参入・初期チーム
- Enterprise AE募集中
- 営業以外のSE・CSも同時採用

### 5.6 無料ニュースレター

価値を具体化する。

> 毎週、新着・終了求人、日本採用が動いた企業、外資AEが押さえるべきニュースをまとめて配信します。

メールアドレス以外は必須にしない。登録後アンケートで職種・転職意向を任意取得する。

### 5.7 スポンサー表示

- `Sponsored`を明示する
- 編集カードと視覚的に区別する
- 通常順位へ混ぜない

## 6. 企業一覧仕様

### フィルター

- SaaSカテゴリ
- 日本市場フェーズ
- 営業求人あり
- AE／SDR／BDR／Manager／Partner Sales／SE／CS
- SMB／Commercial／Enterprise
- 日本法人あり
- 日本語サイトあり
- リモート可
- 年収記載あり
- 新規参入・採用拡大中

### ソート

- 最終更新順
- 新規求人順
- 営業求人数順
- 採用シグナル順
- 企業名順

### 企業カード

- ロゴ（利用可能な場合）
- 企業名
- カテゴリ
- 日本市場フェーズ
- 営業求人数と前週差
- 最新シグナル
- 最終確認日

## 7. 企業詳細仕様

### 上部サマリー

- 企業名・公式URL
- 事業カテゴリ・本社
- 日本法人・日本語サイト
- 日本市場フェーズ
- 採用トレンド
- 営業求人数
- 最終確認日

### 日本市場シグナル

次を有無で表示。

- 日本法人
- 日本責任者
- 日本語サイト
- 国内顧客事例
- 営業求人
- SE・CS求人
- 国内パートナー
- 日本向けイベント・製品対応

総合スコアを出す場合は「企業評価」ではなく `Japan Hiring Signal` とし、算出方法を公開する。

### 現在の求人

- Genba内詳細ページ
- 企業公式応募ページ
- 最終確認日

### タイムライン

- 求人公開
- 求人終了
- 要件変更
- 日本法人・サイト・責任者・顧客・パートナー関連ニュース

### 注記

- 事実
- 編集部の推論
- 読者提供情報
- スポンサー情報

を異なるラベルと背景色で分ける。

## 8. 求人一覧・詳細仕様

### 一覧フィルター

- 職種
- セグメント
- 勤務地
- リモート
- 言語
- 年収記載
- 経験年数
- 日本市場フェーズ
- 公開日

### 詳細ページ

- 求人タイトル
- 企業
- 職種分類
- セグメント
- 勤務地・勤務形態
- 言語・経験要件
- 求人票に明記された報酬
- 原文の要点
- 企業の日本市場コンテキスト
- 最終確認日
- 公式応募CTA
- 出典

求人本文を無断転載せず、必要項目を要約して公式ページへ送客する。

## 9. データモデル

初期はGit管理のJSONまたはYAMLを推奨する。企業数・変更頻度が増えたらDBへ移行する。

### Company

```ts
interface Company {
  slug: string;
  name: string;
  legalName?: string;
  logoUrl?: string;
  website: string;
  careersUrl: string;
  newsroomUrl?: string;
  headquarters: string;
  category: string[];
  descriptionJa: string;
  japanEntity: "yes" | "no" | "unknown";
  japaneseSite: boolean;
  japanPhase: "watching" | "entry" | "building" | "scaling" | "established" | "contracting" | "unknown";
  hiringTrend: "up" | "flat" | "down" | "unknown";
  lastVerifiedAt: string;
  sources: Source[];
}
```

### Job

```ts
interface Job {
  id: string;
  companySlug: string;
  title: string;
  role: "sdr" | "bdr" | "ae" | "am" | "manager" | "partner" | "se" | "cs" | "other";
  segment?: "smb" | "commercial" | "mid-market" | "enterprise";
  location: string;
  workStyle?: "onsite" | "hybrid" | "remote" | "unknown";
  languages?: string[];
  salaryText?: string;
  sourceUrl: string;
  firstSeenAt: string;
  lastSeenAt: string;
  status: "open" | "closed" | "unknown";
  sponsored: boolean;
}
```

### Signal

```ts
interface Signal {
  id: string;
  companySlug: string;
  type: "job_added" | "job_removed" | "job_changed" | "japan_entity" | "leader_hired" | "customer" | "partner" | "localization" | "event" | "other";
  observedAt: string;
  factJa: string;
  interpretationJa?: string;
  confidence: "high" | "medium" | "low";
  source: Source;
}
```

### Source

```ts
interface Source {
  url: string;
  title: string;
  publisher: string;
  publishedAt?: string;
  accessedAt: string;
  tier: "official" | "reputable_secondary" | "community";
}
```

## 10. 収集・更新フロー

### 情報源の優先順位

1. 企業公式Career・ATS・ニュースルーム・日本サイト
2. 信頼できる求人・報道媒体
3. X・LinkedIn・読者提供情報

### 日次処理

1. 登録済み企業の公式URLを巡回
2. 公開中求人を抽出
3. 前回スナップショットと比較
4. 追加・削除・変更候補を生成
5. 関連ニュースを照合
6. AIが職種、セグメント、信頼度を分類
7. 出典・取得日・差分を保存
8. デイリーブリーフ、X原稿、ニュースレター候補を生成
9. ガードレールとリンク切れを検査
10. 承認後に公開・デプロイ

### 収集上の制約

- robots.txt、利用規約、アクセス頻度を尊重する
- ログインや回避技術が必要な取得は行わない
- 求人媒体を公式Careerの代替ソースとして無断複製しない
- 取得できない情報を推測で埋めない
- 自動収集が許されないサイトは手動確認または公式フィードを利用する

## 11. 記事・ニュースレター自動生成

### 毎日

- 変化フィード更新
- 新規求人の短文紹介
- X投稿候補2〜3本

### 毎週

- Genba Sales Brief
- 今週の求人差分
- 注目企業1社
- 外資AE向け海外記事の要点

### 週1〜2本

- 検索需要のある編集記事

記事数をKPIにせず、企業・求人データの鮮度を最優先にする。

## 12. SEO・AEO

- Company、JobPosting、Organization、Article、BreadcrumbListのJSON-LD
- 求人終了時はページを即削除せず、終了表示と関連求人を出す
- 企業ページに最終確認日と出典を表示
- サイトマップを企業・求人・記事へ対応
- `llms.txt`を新しいサイト構造へ更新
- canonical、OGP、descriptionをページ別に生成
- 求人タイトルだけを量産した薄いページを作らない
- FAQは実際の読者質問があるページに限定

## 13. ニュースレター

候補はbeehiiv、Kit、Ghost。MVPでは次を優先する。

- APIまたはフォーム埋め込み
- ダブルオプトイン
- 登録元計測
- タグ・セグメント
- 開封・クリック計測
- 購読解除
- スポンサー枠

サイト側にベンダー固有ロジックを密結合せず、環境変数と独立コンポーネントで差し替え可能にする。

## 14. スポンサー・求人掲載

### `/advertise`

- 読者像
- 掲載商品
- 仮価格または問い合わせ制
- Sponsored表記方針
- 審査基準
- 掲載レポート例
- 問い合わせフォーム

MVPでは自動決済を実装せず、掲載審査後に請求する。無審査セルフサーブ掲載は、信用と法務対応が整ってから検討する。

## 15. 信頼・法務ページ

### `/methodology`

- 情報源の優先順位
- Japan Phaseの定義
- Hiring Trendの算出
- 求人の確認頻度
- 推論の扱い
- AI利用方針
- 訂正・削除依頼
- スポンサーと編集の分離

### 必須表記

- 運営者情報
- プライバシーポリシー
- Cookie・分析ツール
- 広告・アフィリエイト表記
- 免責事項
- 問い合わせ・訂正窓口
- 必要に応じて特定商取引法表記

## 16. デザイン

### 方向性

- 現行のpaper／navy／accentを基調として維持可能
- ブログではなく、信頼できる業界端末・データサービスの印象
- 数字、更新日、差分、出典を読み取りやすくする
- 情報密度は高く、装飾は抑える

### 状態表示

- 拡大: green
- 横ばい: slate
- 縮小: amberまたはred
- 不明: gray
- Sponsored: accentの枠＋明示ラベル
- Community source: warningラベル

色だけに依存せず、テキストとアイコンを併用する。

## 17. 分析イベント

最低限、以下を計測する。

- `newsletter_signup`
- `company_view`
- `company_filter_used`
- `job_view`
- `official_apply_click`
- `sponsor_click`
- `advertise_inquiry`
- `source_link_click`

個人を過剰追跡せず、媒体価値とUX改善に必要な範囲に限定する。

## 18. MVPの実装順

1. 新しい日本語トップ・ナビ・フッター
2. Company／Job／Signalの型とサンプル20社
3. 企業一覧・詳細
4. 求人一覧・詳細
5. 変化フィード
6. ニュースレター登録
7. Methodology・掲載案内・法務ページ
8. 構造化データ・サイトマップ・llms.txt
9. 差分検出スクリプト
10. 日次下書き生成と承認フロー
11. 分析イベント
12. ビルド・リンク・モバイル表示の検証

## 19. MVPで実装しないもの

- ユーザーアカウント
- 有料会員
- 応募書類の受付
- 人材紹介・候補者マッチング
- 口コミ掲示板
- 未検証の給与投稿
- 複雑なリアルタイム検索基盤
- 求人企業の無審査セルフ投稿
- ネイティブアプリ

## 20. 受入条件

### 機能

- 20社以上の企業データが表示できる
- 企業・求人のフィルターとソートが機能する
- 求人追加・終了履歴が企業タイムラインに表示される
- 公式求人への遷移を計測できる
- ニュースレター登録ができる
- スポンサーと通常コンテンツが明確に区別される
- 出典と最終確認日が全データページに表示される

### 品質

- `npm run build`成功
- TypeScriptエラーなし
- モバイル・デスクトップで主要導線が崩れない
- 主要ページに固有title、description、canonicalがある
- 内部リンク切れなし
- 同一企業・求人の重複なし
- 求人終了後の表示方針が機能する
- WCAGを意識したコントラストとキーボード操作

### 運用

- 日次更新が自動下書きまで進む
- 公開前に変更件数・出典・リスクが一覧表示される
- 承認されない変更は公開されない
- 失敗時に既存公開データを壊さない

## 21. リニューアル完了後の初回公開内容

求人データとスポンサー表示の実装・運用は、[`ops/job-publication-and-sponsor-policy.md`](../ops/job-publication-and-sponsor-policy.md) に従う。

- 追跡企業20社
- 公開中求人30件以上を目標
- 過去7〜14日分の変更シグナル
- 基礎記事5本
- ニュースレター創刊号
- Methodology
- 掲載問い合わせページ
- `@chosenshi08`の固定ポストとローンチスレッド

実装開始前に、勤務先の外部発信・副業・競業確認と、追跡対象から除外すべき企業の定義を完了すること。
