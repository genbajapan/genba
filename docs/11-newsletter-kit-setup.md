# Genbaニュースレター / Kit接続手順

最終更新: 2026-08-15

## 方針

- 配信日: 毎週月曜日・木曜日・土曜日（日本時間）
- 送信者名: `Genba`
- 送信元: `js@genbajapan.com`
- 登録項目: メールアドレスのみ
- 登録方式: ダブルオプトイン
- 配信停止: 全メール末尾に表示
- 配信基盤: Kit Newsletter Plan
- 公開Form UID: `e55c8dd730`
- Embed URL: `https://genba-2.kit.com/e55c8dd730/index.js`

## Kit側の設定

1. KitでFormを1つ作成する
2. `Settings > Confirmation email`で確認メールを有効にする
3. `Auto-confirm new subscribers`を無効にし、ダブルオプトインにする
4. Form送信後の遷移先を`https://genbajapan.com/newsletter/check-email`にする
5. 確認ボタン押下後の遷移先を`https://genbajapan.com/newsletter/confirmed`にする
6. 送信者名を`Genba`、Fromを`js@genbajapan.com`にし、Kitから届く確認メールで送信元アドレスを認証する
7. Kitの案内に従い、Cloudflare DNSへSPF・DKIM・DMARCを設定して`genbajapan.com`を送信ドメインとして認証する
8. メール末尾へKitが求める住所を表示する。自宅住所を公開しない場合は、Kitが利用を認める住所または事業用住所を設定する
9. Formの`Embed > JavaScript`から`data-uid`と`src`を取得する
10. FormのShare URLを取得する

## サイト側の環境変数

サイトには現在の公開Form識別子を既定値として設定済み。フォームを差し替える場合は、`.env.example`の3項目をCloudflareの本番ビルド環境へ設定して上書きする。

```text
NEXT_PUBLIC_KIT_FORM_UID=<scriptのdata-uid>
NEXT_PUBLIC_KIT_FORM_EMBED_URL=<scriptのsrc URL>
NEXT_PUBLIC_KIT_FORM_URL=<FormのShare URL>
```

値は`NEXT_PUBLIC_`で公開されるForm識別子・公開URLに限定する。Kit API secretやログイン情報を入れない。

## 配信前テスト

1. Gmail、Outlook、iCloud等の別アドレスで登録する
2. 未確認状態では本配信対象にならないことを確認する
3. 確認メールのFromが`Genba <js@genbajapan.com>`であることを確認する
4. 確認ボタン後に登録完了ページへ遷移することを確認する
5. テストBroadcastを送り、本文・リンク・解除リンクを確認する
6. SPF・DKIM・DMARCの認証結果と迷惑メール判定を確認する
7. CSVをエクスポートし、購読者データを月1回バックアップする

## 月曜日・木曜日・土曜日の運用

- シリーズ名は`Genba発掘`、各号は`Genba発掘 #NNN`の連番とし、過去の下書き・配信記録と重複させない
- 1通5社の発見形式とし、選定条件・再掲載間隔・スポンサー枠は`docs/09-pivot-business-plan.md`と`ops/daily-task-workflow.md`に従う
- 本文の書き出しは`Genba編集長です！`、続けて`皆さん、いつもありがとうございます。`に統一する
- 読了時間は3分を標準とする。各社は`その会社ならではの魅力`と、太字の`仕事として見ると：`を2つの短い段落で伝える。日本未進出企業は後段を`日本進出を先回りすると：`へ置き換える
- 短い段落と十分な改行を使い、事実、Genba分析、次の話題、CTAの境界が一目で分かるようにする
- URLを本文へ直接貼らず、リンク先で得られる答えが分かる文字列へリンクを設定する
- メール本文からGenbaへ戻す全リンクにはUTMを付ける。各社CTAは`utm_source=newsletter`、`utm_medium=email`、`utm_campaign=genba_hakkutsu_<号数3桁>`、`utm_content=company_<掲載順2桁>_<企業slug>`の固定形式とする（例: `https://genbajapan.com/companies/stripe?utm_source=newsletter&utm_medium=email&utm_campaign=genba_hakkutsu_001&utm_content=company_01_stripe`）
- 末尾の企業一覧は`utm_content=footer_companies`、求人一覧は`footer_jobs`、日本未進出一覧は`footer_preentry`、スポンサー相談は`footer_sponsor`とする。既存queryがあるURLではUTMを`&`で追加し、`#`がある場合はUTMをfragmentより前に置く
- Kitのclick trackingだけに依存しない。配信前のテストメールで、5社すべてと末尾CTAの遷移先URLに上記UTMが残ることを確認する
- 配信曜日は日本時間の月曜日・木曜日・土曜日に固定する。配信時刻は別途決定する
- 週3回を超える臨時配信は原則行わない
- 公式情報とGenba分析を分ける
- X投稿と同様に、メール配信はJioが内容を確認して明示承認した場合だけ実行する
- スポンサーを含む場合は広告・PR・スポンサー表記を付ける
- 毎号の最下部では、媒体説明の後・配信停止案内の前に、以下の控えめなスポンサー相談導線を1つだけ置く。広告枠の大きなボタンや固定料金は表示しない

  `Genbaでは、読者に価値を提供できるスポンサー企業との協業を限定的に受け付けています。`

  `スポンサー掲載について相談する →`

- 遷移先は`https://genbajapan.com/advertise`とし、`utm_source=newsletter`、`utm_medium=email`、`utm_campaign=genba_hakkutsu_<号数3桁>`、`utm_content=footer_sponsor`を付ける

## `Genba発掘`共通デザイン

Kitの共通テンプレートは、信頼感を基調に発見のリズムだけを加える。メール本文は最大幅600pxの1カラムとし、デスクトップとスマートフォンの両方でテストする。

- 最上部は濃紺背景・白文字のヘッダーとし、`Genba発掘 #NNN`、`今日の5社｜読了3分`を表示する
- 本文は白背景を基本とし、5社を`01`から`05`の番号付きカードとして縦に並べる
- 各カードは大きな画像や企業ロゴを使わず、薄いグレーの区切り線、十分な余白、会社名、領域、状態ラベル、`その会社ならではの魅力`、太字の`仕事として見ると：`、CTAの固定順で構成する。日本未進出企業は後段を`日本進出を先回りすると：`とする
- 状態ラベルの色は、`積極採用`を緑、`採用中`を青、`継続観測`をグレー、`日本未進出`を薄い紫、`広告`を黄またはオレンジとする。色は状態識別だけに使い、評価・推薦順位を示さない
- 各社のCTAは太字または下線付きのテキストリンクとし、大きなボタンを5つ並べない
- メール末尾の`Genbaで外資企業をもっと探す`だけを濃紺の主ボタンにする
- スポンサー相談導線は本文より小さい文字のテキストリンクとし、主ボタンより目立たせない
- 企業ごとの異なる背景色、グラデーション、大きなhero画像、ランキング・星・当たり表示、過剰な絵文字を使わない
- スポンサーを含む場合は3番目のカードを薄い黄色背景とし、冒頭に`広告｜SPONSORED DISCOVERY`を表示する
