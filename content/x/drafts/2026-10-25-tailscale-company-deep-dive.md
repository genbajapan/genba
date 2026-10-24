# X下書き: Tailscale 1社深掘り

カナダ発。Tailscaleを取り上げる理由は、VPNを「守るために我慢する道具」から、利用者と端末の本人性を基点に必要なものだけをつなぐ日常の基盤へ変えた会社だからです。

始まりは2019年。共同創業者Avery Pennarunが子どもの頃、姉と一つのモデムを同時に使うためLinuxで経路制御を工夫した原体験にさかのぼります。後にGoogle等で大規模基盤を見た後も、本当に解きたかったのは「多くの人が抱える小さな接続の苦労」でした。

現在はWireGuardを基盤に、端末同士を暗号化して直接接続し、既存の本人確認と権限ポリシーで制御。公開規模はLinkedInで201〜500人。レンジ上限500人で見ると、2024年末のDropbox 2,204人の最大約4分の1、2025年6月末のAtlassian 13,813人の最大約28分の1です。雇用区分と時点が異なる概算で、製品力や売上の比較ではありません。

「大手のZero Trust製品やクラウド標準機能で十分では？」は強い反論です。Tailscaleの勝ち筋は、新たな中継網を中心に据えるのではなく、利用者、端末、業務システム、AIエージェントまでを同じ本人性と権限でつなぐ導線。基盤モデルはコードを書けても、顧客の既存端末、秘密情報、監査、緊急停止を安全に運用する配布基盤は自動では手に入りません。一方、Cloudflare、Zscaler、各クラウド、自社WireGuardとの統合比較は反証です。

公式事例では、米国のAwesomeが利用者のアクセス管理時間を90%削減。日本企業ではMercariが従来VPNの利用者問題を1日1〜2件からほぼ0件にしたと、会社公式資料が紹介しています。

今日時点での日本向け公式求人は0件。公式求人の対象国は米国、カナダ、英国、シンガポールで、日本法人・国内拠点・雇用主体も未確認です。日本進出を先回りすると、国内顧客の定量実績を、日本語の契約・支援・監査の責任主体へつなげられるかが成立条件です。

▪️Tailscaleの日本進出の成立条件、国内事例、未確認点

https://genbajapan.com/companies/tailscale?utm_source=x&utm_medium=organic_social&utm_campaign=20261025_tailscale&utm_content=post_02

「小中規模外資ITを知る機会」を頑張って提供していきたいと思います！週3回・3分で5社ずつ紹介しています。無料ニュースレター「Genba発掘」↓

https://genbajapan.com/newsletter?utm_source=x&utm_medium=organic_social&utm_campaign=20260819_profi

シリーズ: 1社深掘り
確認日: 2026-10-25
ステータス: ローカル確定稿・X保存不能（Macロック）・未投稿・未予約

## 事実確認メモ

- 創業地・始まり: カナダ発。2019年創業。Avery Pennarunのモデム共有、Linux、Google基盤の経験は会社公式の創業ストーリー
  - https://tailscale.com/blog/stratechery-origin-story
- 現在の事業・規模: WireGuard基盤のidentity-first networking。LinkedIn公開レンジは201〜500人。会社公式は2025年にSeries C 1.6億ドル、毎日数百万人、数千社の利用を掲載
  - https://tailscale.com/blog/series-c
  - https://www.linkedin.com/company/tailscale
- 規模比較: Tailscaleは2026-10-25確認のLinkedIn公開レンジ201〜500人、Dropboxは2024-12-31時点2,204人、Atlassianは2025-06-30時点13,813人。本文はレンジ上限500人で概算し、雇用区分、時点、売上、製品力、日本人数は比較していない
  - https://www.linkedin.com/company/tailscale
  - https://www.sec.gov/Archives/edgar/data/1467623/000146762325000011/dbx-20241231.htm
  - https://www.sec.gov/Archives/edgar/data/1650372/000165037225000036/team-20250630.htm
- AI時代の勝ち筋は、既存端末、秘密情報、監査、緊急停止、利用者とAIエージェントの権限を、同じ配布・運用基盤で管理できる点から読んだ編集解釈
  - https://tailscale.com/blog/series-c
  - https://tailscale.com/blog/adult-in-the-room
- 導入事例: Awesomeの90%削減は会社公式。MercariはTailscaleの会社公式資料が紹介する数値で、Mercari自身の一次公表は今回未確認
  - https://tailscale.com/customers/awesome
  - https://info.tailscale.com/hubfs/1Password%20%2B%20Tailscale.pdf
- 日本求人: 2026-10-25に公式Greenhouseの全件を確認し、日本向けは0件。会社説明の対象国は米国、カナダ、英国、シンガポール
  - https://job-boards.greenhouse.io/tailscale
- Genba掲載確認: 本番公開工程で主要URLを確認
  - https://genbajapan.com/companies/tailscale
