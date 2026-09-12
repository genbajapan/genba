# X下書き: PagerDuty 1社深掘り

カナダ発。PagerDutyを取り上げる理由は、AIがシステム変更の量と速度を上げるほど、障害時に「誰が、何を、どの順で直すか」を自動で動かす基盤が重要になるからです。

始まりは2009年。Amazonの技術者だったAlex Solomon、Andrew Miklas、Baskar Puvanathasanが、深夜の障害対応で使っていた大企業向けの当番・通知の仕組みを、どの会社でも使える製品にしようとトロントで創業しました。社名のDutyは、文字どおり携帯していたpagerの当番から来ています。

現在は通知だけでなく、警告の集約、当番招集、対応手順の自動化、顧客や社内への連絡、事後分析をOperations Cloudでつなぎます。2026年4月末のARRは4.96億ドル。1Passwordの4億ドルより大きく、Clouderaの10億ドル超の約半分です。3万5,000超の無料・有料顧客、750超の連携先を持ちます。

「Datadogやクラウド各社の監視・AI機能で十分では？」という反論はもっともです。PagerDutyの勝ち筋は、特定の監視製品に閉じず、警告から担当者、承認、対応手順、顧客影響、事後学習までを既存の運用導線でつなぐこと。基盤モデル単体は、本番権限を安全に使い、組織固有の当番と監査履歴を背負って復旧を実行しにくい。逆に監視基盤が同じ運用を低い追加コストで統合できれば、単独製品は不利です。

国内ではココナラが、障害を認知して担当者が対応を始めるまでの時間を15分から1分未満へ短縮した事例を公開。今日時点での日本向け公式求人は6件。企業営業、営業責任者、事業開発、技術営業、導入コンサルタント2件で、日本の販売から実装までを同時に強化しています。

PagerDutyの事業構造、日本求人6件、AI時代の障害対応の売り方はこちら↓
https://genbajapan.com/companies/pagerduty?utm_source=x&utm_medium=organic_social&utm_campaign=20260913_pagerduty&utm_content=post_01

「小中規模外資ITを知る機会」を頑張って提供していきたいと思います！週3回・3分で5社ずつ紹介しています。無料ニュースレター「Genba発掘」↓

https://genbajapan.com/newsletter?utm_source=x&utm_medium=organic_social&utm_campaign=20260819_profi

シリーズ: 1社深掘り
確認日: 2026-09-13
ステータス: ローカル確定稿・X未投稿ドラフト保存未実施（ブラウザ操作の直前確認が必要）・未投稿・未予約

## 事実確認メモ

- 創業地・始まり: カナダ発。2009年に元Amazon技術者3人がトロントで創業。Amazonの当番・通知用社内ツールを一般企業向けにする発想は会社公式
  - https://www.pagerduty.com/blog/company/decade-of-duty/
  - https://www.pagerduty.com/startups/
- 現在の事業・規模: 2026年4月末ARR 4.96億ドル、FY2026売上4.925億ドル、2026年1月末時点の無料・有料顧客3.5万超は会社IR。750超の連携先は会社公式
  - https://investor.pagerduty.com/news/news-details/2026/PagerDuty-Announces-First-Quarter-Fiscal-2027-Financial-Results/default.aspx
  - https://www.pagerduty.com/company/
- 規模比較: PagerDuty ARR 4.96億ドル、1Password ARR 4億ドル、Cloudera ARR 10億ドル超。各社の公表時点は異なり、製品優劣の比較ではない
  - https://1password.com/press
  - https://www.cloudera.com/about.html
- AI時代の勝ち筋は、750超の連携、当番・権限・対応手順・顧客影響・事後履歴をまたぐ既存導線から読んだ編集解釈。監視基盤側の統合で追加価値が弱まる反証を残した
- 国内導入事例: ココナラは障害認知から対応開始までを15分から1分未満へ短縮と公式事例で紹介
  - https://www.pagerduty.com/customer/coconala/
- 日本求人: 2026-09-13にJapan Cloud公式募集一覧でPagerDuty 6件を確認。職種はStrategic Alliance Sr. Manager、Sr. Sales Manager、Enterprise Account Executive、Business Development Representative、Solutions Consultant、Professional Services Consultant系2件（同系統2IDを含む）
  - https://japancloud.jp/career/jobs/
