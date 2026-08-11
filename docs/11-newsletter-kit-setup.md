# Genba Signal Brief / Kit接続手順

最終更新: 2026-08-11

## 方針

- 配信頻度: 週3回
- 送信者名: `Genba`
- 送信元: `js@genbajapan.com`
- 登録項目: メールアドレスのみ
- 登録方式: ダブルオプトイン
- 配信停止: 全メール末尾に表示
- 配信基盤: Kit Newsletter Plan

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

`.env.example`の3項目をCloudflareの本番ビルド環境へ設定する。

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

## 週3回の運用

- 1通1テーマを基本とし、同じ内容を分割して水増ししない
- 曜日・時刻は初期配信の反応を見て固定し、週3回を超える臨時配信は原則行わない
- 公式情報とGenba分析を分ける
- X投稿と同様に、メール配信はJioが内容を確認して明示承認した場合だけ実行する
- スポンサーを含む場合は広告・PR・スポンサー表記を付ける
