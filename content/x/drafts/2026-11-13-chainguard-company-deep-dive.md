# X下書き: Chainguard 1社深掘り

米国発。Chainguardを取り上げる理由は、脆弱性を「見つける」製品が増える中、安全なオープンソースを最初から作り直して供給する側へ回った会社だからです。

創業陣はGoogleでKubernetes、Distroless、Knativeなどを作り、SigstoreやSLSAにも関わりました。転機はSolarWindsのSUNBURST攻撃。ソフトウェア供給網への関心が一気に高まった2021年、検査後の修正ではなく、出所を証明できる安全な部品を継続供給する会社を始めました。

現在はコンテナ、言語ライブラリ、仮想マシン、OS部品をソースから継続再構築し、署名、SBOM、来歴を付けて提供します。会社公式Careerの約500人という規模感は、GitLabの2,500人超、Cloudflareの5,156人の約5分の1、10分の1。ただし前者は概数、比較2社は2026年・2025年時点で定義も異なります。

「既存の脆弱性検査やDocker、クラウドの標準イメージで十分では？」という反論は自然です。Chainguardの勝ち筋は、警告を増やすのではなく、3,000超のコンテナイメージを継続して作り直し、修正済み部品を開発導線へ直接戻すこと。互換性と費用は反証です。

AI時代の優位も、基盤モデルを持つことではありません。AIがコードと依存部品を増やすほど、どのソースから何を作り、誰が承認し、いつ直したかを企業の権限と監査へ結ぶ供給基盤が効きます。モデル単体では、顧客ごとの部品表、署名、例外、更新責任を代替しにくいからです。

海外事例のHapag-Lloydでは、4イメージの検証後、2週間で25イメージを本番へ移行。約60イメージで数百件あったCVEがゼロになり、増員なしで週数百回の更新を処理したとChainguardが公表しています。販売元事例で、日本企業の同等成果は未確認です。

今日時点での日本向け公式求人は0件。公式Greenhouseの110件にJapan・Tokyo勤務はなく、Singaporeの営業・営業技術、AustraliaのAPJ顧客成功などを確認しました。日本法人、国内拠点、契約・支援体制は未確認です。

▪️Chainguardの事業構造、日本進出の成立条件、応募前の確認点
https://genbajapan.com/companies/chainguard?utm_source=x&utm_medium=organic_social&utm_campaign=20261113_chainguard&utm_content=post_01

「小中規模外資ITを知る機会」を頑張って提供していきたいと思います！週3回・3分で5社ずつ紹介しています。無料ニュースレター「Genba発掘」↓

https://genbajapan.com/newsletter?utm_source=x&utm_medium=organic_social&utm_campaign=20260819_profi

シリーズ: 1社深掘り
確認日: 2026-11-13
ステータス: ローカル下書き・X未投稿ドラフト保存済み・未投稿・未予約

## 事実確認メモ

- 冒頭表記: `米国発`。2021年に米国で創業し、公式掲載本社はワシントン州カークランド。創業陣はGoogleでKubernetes、Distroless、Knative等に関わり、SigstoreとSLSAにも関与した。
  - https://www.chainguard.dev/unchained/chainguard-raises-50m-in-series-a-to-make-software-supply-chain-secure-by-default-introduces-secure-container-base-images
  - https://www.chainguard.dev/unchained/what-five-years-of-chainguard-have-taught-us
- 創業背景: 創業者Dan Lorencの5周年記事が、SUNBURST前後でソフトウェア供給網への関心が変わった経緯を説明。検査後の修正ではなく、安全な供給元を作るという編集要約にした。
  - https://www.chainguard.dev/unchained/what-five-years-of-chainguard-have-taught-us
- 規模比較: Chainguard Careerの「500 people」、GitLabの2026年6月時点2,500人超、Cloudflareの2025年末5,156人を方向比較した。Chainguardは概数、比較2社は公式会社情報・10-Kで、雇用区分と時点が異なる。
  - https://www.chainguard.dev/careers
  - https://about.gitlab.com/jobs/
  - https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm
- 製品・AI時代の勝ち筋: Chainguard Factoryが継続監視・再構築・再試験し、署名、SBOM、SLSA来歴を付ける事実を根拠に、顧客の権限・監査・更新導線へ入る点を編集解釈した。3,000超のイメージは2026年9月の会社公式。互換性、費用、既存供給元を反証として残した。
  - https://www.chainguard.dev/docs/get-started/what-is-chainguard
  - https://www.chainguard.dev/unchained/what-it-took-to-reach-1-billion-build-manifests
- 顧客事例: Hapag-Lloydの4イメージ検証、2週間で25イメージ移行、約60イメージで数百CVEからゼロ、増員なしで週数百更新はChainguard公式事例の要約。販売元公表の海外事例で、日本の再現性は未確認。
  - https://www.chainguard.dev/customers/hapag-lloyd-trusts-chainguard-to-secure-its-global-shipping-platform-at-scale
- 求人・日本進出: 2026-11-13に公式Greenhouse APIの110件を確認し、Japan・Tokyo勤務地は0件。SingaporeのBusiness Development Representative、Enterprise Account Executive、Sales Engineer、AustraliaのAPJ職を確認。日本法人・国内拠点・契約・支援体制は未確認。
  - https://job-boards.greenhouse.io/chainguard
- 外部操作: 2026-11-13 10:42 JSTに`@chosenshi08`のX未投稿ドラフトへ保存し、`Your draft was saved.`を確認。投稿・予約・返信・引用・再投稿は行っていない。
