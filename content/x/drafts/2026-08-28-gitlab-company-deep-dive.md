# X下書き: GitLabはGitHubに勝てるのか

ウクライナ発。「GitLabってGitHubの偽物？ CI/CDって何？」を整理。

Gitは会社ではなく、コードの変更履歴を共同管理する基礎技術。GitHubとGitLabは、その上に作られた別会社のサービス。Git＋人が集うHub、Git＋開発するLabなので似ています。

GitLabは2011年、勤務先が共同開発ツールを買わず、開発者が自宅で作ったのが原点です。

CI/CDは、コード変更を自動で組み立て・テストするCIと、合格後に本番反映するCD。工場の検品と出荷。GitLabは計画、セキュリティ、承認、監査、AIまで一つにします。

直近通期売上は9.552億ドル（約1,500億円）、前年比26%増。直近四半期は2.642億ドル（約415億円）、23%増。Figmaの約9割、Dropboxの約4割の売上規模です。

「GitHubの方が有名。負けるのでは？」が核心。GitHubは開発者1.8億人超、GitLabは登録利用者5,000万人超。知名度、公開コードの集積、Microsoftとの販売力はGitHub優位。GitHubにもActions、セキュリティ、Copilotがあります。

GitLabの勝ち筋は知名度勝負をしないこと。AIでコードが増えるほど、詰まりは「書く」から「テスト、脆弱性、権限、承認、監査」へ移ります。GitLabは一つの権限体系・データ・監査記録で扱い、自社運用や閉域環境も選べる。GitHubにコードを残し、GitLabのCI/CDだけ使う共存も可能です。

ただし、Microsoft製品との一体販売と移行負担を超え、道具の削減、統制、総費用で差を示せなければ負けます。「コード置き場」でなく「安全に本番へ出す工場」になれるかが勝負です。

国内では富士通クラウドテクノロジーズが、最長6カ月の開発を最短数日へ、約1日の本番反映を約5分へ短縮したと公式事例で説明しています。

今日時点での日本向け公式求人は4件。Senior Commercial Legal Counsel, APAC、Senior Ecosystem Sales Manager, Japan、Senior Professional Services Engineer - Japan、Territory Sales Managerです。

▪️GitLabの企業研究と4求人
https://genbajapan.com/companies/gitlab?utm_source=x&utm_medium=organic_social&utm_campaign=20260828_gitlab&utm_content=post_01

#外資IT #転職 #Genba企業研究

「小中規模外資ITを知る機会」を頑張って提供していきたいと思います！週3回・3分で5社ずつ紹介しています。無料ニュースレター「Genba発掘」↓

https://genbajapan.com/newsletter?utm_source=x&utm_medium=organic_social&utm_campaign=20260819_profi

シリーズ: 1社深掘り
確認日: 2026-08-28
ステータス: ローカル下書き・X未保存・未投稿・未予約

## 事実確認メモ

- 取り上げる理由: Git・GitHub・GitLabの違い、CI/CD、GitHub優位への反論、現在の売上、AI時代の勝ち筋まで初見の読者が判断できるよう再構成。創業者の原体験、国内定量事例、日本向け現行求人4件を公式確認。
- 冒頭表記: `ウクライナ発`。GitLab公式は2011年にウクライナで始まったと説明。現在の法人本社は米国。創業地の国表記に留める。
  - https://about.gitlab.com/blog/letter-from-shareholders/
  - https://about.gitlab.com/blog/gitlab-inc-takes-the-devops-platform-public/
- 創業背景: 公式記事は、勤務先が欲しい道具を買わなかったため自宅で作り始めたこと、別のCIサーバー管理に疲れてGitLab CIを統合したことを説明。本文は要約。
  - https://about.gitlab.com/blog/origin-of-devsecops-platform-category/
  - https://about.gitlab.com/blog/gitlab-15-the-retrospective/
- Git・名称の関係: Gitは無料・open sourceの分散version control system。GitHubとGitLabはGitを中核にする別会社のserviceであり、資本関係を示す名称ではない。GitHubは2008年、GitLabは2011年に開始。GitLab公式footerは`Git`がSoftware Freedom Conservancyの商標で、名称利用はlicense下と明記。`Hub`と`Lab`の意味づけは一般語としての名称を分かりやすく説明する編集表現。
  - https://git-scm.com/
  - https://github.com/about/press
  - https://about.gitlab.com/blog/letter-from-shareholders/
  - https://about.gitlab.com/compare/gitlab-vs-github/
- CI/CD: CIは変更を頻繁に共有repositoryへ統合し、自動build・testで早期に問題を見つけるpractice。CDは合格した変更を継続的にrelease可能な状態へ運び、設定に応じて本番反映まで自動化する。本文の「検品と出荷」は初心者向けの比喩で、厳密にはContinuous DeliveryとContinuous Deploymentの両用がある。
  - https://docs.github.com/en/actions/get-started/continuous-integration
  - https://docs.github.com/en/actions/get-started/understand-github-actions
- 現在の売上: FY2026（2026-01-31終了）の売上は9.552億米ドル、前年比26%増。ARRは10億米ドル超、調整後free cash flowは2.196億米ドル。直近Q1 FY2027（2026-04-30終了）は売上2.642億米ドル、前年比23%増。FY2027売上guidance 11.12億〜11.18億米ドルは予想であり、実績と混同しない。円換算はサイト標準の1米ドル=157円による概算で、通期約1,500億円、四半期約415億円。
  - https://ir.gitlab.com/news/news-details/2026/GitLab-Reports-Fourth-Quarter-and-Full-Year-Fiscal-Year-2026-Financial-Results-Board-of-Directors-Authorizes-400-million-for-Share-Repurchase-Program/default.aspx
  - https://ir.gitlab.com/news/news-details/2026/GitLab-Reports-First-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx
- 売上規模比較: GitLab FY2026売上9.552億米ドル（2026-01-31終了）、Figma FY2025売上10.558億米ドル、Dropbox FY2025売上25.21億米ドル（後2社は2025-12-31終了）。GitLab÷Figmaは約90%、GitLab÷Dropboxは約38%。決算期が1カ月異なり、製品構成・会計範囲も異なるため規模感の比較に限る。
  - https://investor.figma.com/news-events/news/news-details/2026/Figma-Announces-Fourth-Quarter-and-Fiscal-Year-2025-Financial-Results/default.aspx
  - https://investors.dropbox.com/news-releases/news-release-details/dropbox-announces-fourth-quarter-and-fiscal-2025-results
- GitHubとの規模差: GitHub公式は開発者1.8億人超、組織400万超、repository 4.2億超。GitLab公式は登録利用者5,000万人超。両社の`developers`と`registered users`は定義が同一と確認できないため、単純なmarket share比較ではなく知名度・community規模の方向感として使用。
  - https://github.com/about/
  - https://about.gitlab.com/company/
- GitHubとの違い・AI時代の勝ち筋: GitHubもActions、Advanced Security、Copilotを持つため、GitLabだけがCI/CD・security・AIを提供するとは書かない。GitLabの差は、planning、source code、CI/CD、security、deploymentを一つのpermission model、audit trail、shared analyticsで扱うこと、SaaS・Dedicated・self-managed・air-gappedを選べること。GitHub repositoryを維持してGitLab CI/CDを使える点も公式比較pageで確認。GitHubのdeveloper network、Microsoft bundle、migration costを反証とし、tool削減・統制・TCOを証明できるかは編集上の分析。
  - https://about.gitlab.com/compare/gitlab-vs-github/
  - https://docs.github.com/en/actions/get-started/understand-github-actions
- 国内事例: Fujitsu Cloud Technologiesの公式事例は、開発サイクルが最長6カ月から最短数日、デプロイが約1日から約5分になったと説明。GitLab選定事例で、単独因果と全案件への再現を保証しない。
  - https://about.gitlab.com/customers/fujitsu/
- 日本求人: 2026-08-28にGitLab公式Greenhouseで日本を対象に含む4件をactive確認。各求人の対象国・職務は異なる。日本向け給与、OTE、株式、担当範囲、評価指標は確認できない。
  - https://job-boards.greenhouse.io/gitlab/jobs/8500014002
  - https://job-boards.greenhouse.io/gitlab/jobs/8640173002
  - https://job-boards.greenhouse.io/gitlab/jobs/8623542002
  - https://job-boards.greenhouse.io/gitlab/jobs/8591223002-0
- 外部操作: `@chosenshi08`の未投稿ドラフトへ本文部分だけを1本として保存する。投稿・予約・返信・引用・再投稿は行わない。
