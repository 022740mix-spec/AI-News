/**
 * 記事本文データ（2026-10 掲載分）
 * ── 自動生成: node scripts/split-articles.mjs ──
 * id → { body, tables, figures, charts, primarySources }
 */
const ARTICLES_BODY_2026_10 = {
  "claude-code-wrap-up-allowance-5-hour-limit-2026": {
    "body": [
      "2026年9月25日、Anthropic の開発者向け公式アカウント @ClaudeDevs は、Claude Code が5時間の利用上限に達したときの挙動を変えたと発表した。投稿は、これまでのように編集の途中で打ち切るのではなく、区切りのよい停止点を探すようになる、と書いている。そのために「週次の上限から引かれる、小さな固定の割り当て」を使い、仕上げられるところまで仕上げる。国内報道（PC Watch）はこの仕組みを「残業」と呼び、週次制限から差し引かれると伝えた。「残業」は報道の言い方で、Anthropic の投稿にこの語はない。",
      "同じアカウントの続きの投稿は、ロールアウトの途中であるとして、使える頻度をプラン別に書いている。Pro プランは週に1回、Max と Team Premium プランは5時間のセッション上限に達するたびに使える。この仕上げのあとも作業を続けたい場合は、追加利用（extra usage）で続けられるとも書かれている。Team Standard や Enterprise など、ここに挙がっていないプランについては、投稿は触れていない。",
      "公式の投稿に書かれていないことも多い。割り当ての大きさは「小さな固定」とあるだけで、数字は示されていない。Pro が週1回使い切ったあと、同じ週に再び上限に達した場合の挙動も書かれていない。対象のバージョンや、ターミナル、IDE、デスクトップのどれで使えるかも、投稿には書かれていない。X の自動要約や一部の報道には「2.1.277 以降」とあるが、code.claude.com の changelog を確認したところ、2.1.277（9月18日）にこの機能の記載はなく、2.1.285（9月29日）までの各版にも見当たらない。サーバー側の展開なのか、版の条件があるのかは、当サイトでは確認できていない。",
      "同じ changelog には、上限に達したあとリセットまで待って自動で続ける設定（Continue automatically at usage limit）の記載がある。今回の仕組みは、待機して再開するものではなく、上限に達した時点で週次枠から小さな割り当てを取り、区切りまで進めるものだと公式の投稿は説明している。両者の関係や、同時に設定しているときにどちらが先に働くかは、公式の資料からは分からない。",
      "この記事の根拠の数え方を書いておく。主張の根は、@ClaudeDevs の投稿2件（頻度の説明を含む）という当事者の発表1本で、当サイトは投稿の本文を X のページ上で読んだ。PC Watch、techno-edge など国内外の報道は、この投稿を引いた派生であり、根は増えない。製品の仕様に関する主張なので、当事者の発表1本で足りるが、割り当ての量や実際の挙動については、当サイトは試しておらず、独立した検証も確認できていない。Pro を使っている人は、週に1回という条件と、その後も続けるには追加利用が要ることを、自分のプランの利用状況（/usage）とあわせて確認するとよい。",
      "【追記 2026-10-21】出典の削除。掲載していた PC Watch 報道（Yahoo!ニュース配信）の URL が現在 404 で、正しい URL を確認できなかったため外した。主張の根拠は、本文に挙げた ClaudeDevs の投稿と Claude Code の公式 changelog のまま。",
      "【追記 2026-10-23】出典の補足。以前に出典から外した PC Watch の報道（2026年9月28日）を、同じ主張の報道として再び追加した。報道は、Anthropic が9月25日に @ClaudeDevs で発表した内容を伝えるもので、本記事の一次資料（ClaudeDevs の投稿と Claude Code の changelog）の代わりにはならない。"
    ],
    "primarySources": [
      {
        "title": "ClaudeDevs（Anthropic の開発者向け公式アカウント）の2026年9月25日の投稿",
        "site": "X",
        "url": "https://x.com/ClaudeDevs"
      },
      {
        "title": "Claude Code changelog（公式ドキュメント）",
        "site": "Claude Code Docs",
        "url": "https://code.claude.com/docs/en/changelog"
      },
      {
        "title": "Claude Code、「残業」が可能に。週次制限から差し引き（PC Watch、2026-09-28）",
        "site": "PC Watch（報道、2026-09-28 に直接確認）",
        "url": "https://pc.watch.impress.co.jp/docs/news/2143606.html"
      }
    ]
  },
  "gemini-4-argon-fairwind-trusted-testers-2026": {
    "body": [
      "Google DeepMind は2026年9月30日付の発表で、新しいフロンティアモデル「Gemini 4 Argon」を公開した。Google の説明では、実際のソフトウェア開発、法務や財務といった企業の知的作業、サイバーセキュリティの防御という、複雑で長く続く作業に向けたモデルである。ただし、誰でも使える状態ではない。発表の時点で提供されるのは、Fairwind プログラムを通じた「信頼できるサイバー防衛者」などの限られた利用者だけで、公式の X の投稿は「信頼できるテスター」と書いている。",
      "一般向けの提供時期は示されていない。Google は、段階的な提供が必要だとして、米国政府の任意の公開前モデルアクセスの手続きに参加しながら、アクセスを少しずつ広げていると書く。初期の利用者から得た意見でガードレールを改良したうえで、開発者、企業、一般の利用者に向けて「できるだけ早く」提供し、その最初は有料 API の顧客と Google AI Ultra の加入者だという。日付は書かれていない。サイバー防衛の信頼できる利用者と Google 社内のチームには、サイバー面のガードレールを外した状態で提供する、とも書かれている。",
      "仕様と価格では、出力トークンの上限が従来の64Kから1Mに拡大された。Google は、モデルが数十万トークンを1回の試行で生成できる余裕があると、難しい問題を一度に解くための推論に深みが加わると説明している。価格は導入価格として入力100万トークンあたり2ドル、出力100万トークンあたり10ドルで、キャッシュされた入力は入力価格の95%引きである。脚注には、導入期間が終わると入力4ドル、出力20ドルが適用されるとある。導入期間の長さは書かれていない。なお、この価格は「提供開始時の価格」として示されたもので、現時点で一般に購入できるという意味ではない。",
      "Google は、GPT-6 Astra、Claude Fable 5.1、Claude Opus 5.5 と並べた比較表を公表している。表は19項目（GraphWalks は2つの区間を別に数える）で、Gemini 4 Argon が最高値または同値になったのは14項目である。DeepSWE v1.1 が77.9%、Vals Index が68.9%、AutomationBench が51.3%、LVBench が91.7%などで、CWE-bench v1 は GPT-6 Astra と同じ68.0%である。一方、FrontierSWE v2（55.0%）と Terminal-Bench 4.0（57.4%）では、Argon が表の4つのモデルの中で最も低い。Terminal-Bench Science 0.1 と OSWorld-2.0 では GPT-6 Astra が、PostTrainBench では Claude Opus 5.5 が、Argon を上回る。項目ごとの数値は下の表のとおりで、これは Google の公表値であり、独立した検証は確認できていない。",
      "この比較には、条件の違いがある。Google の評価資料によると、Argon の数値は原則 pass@1 で、Gemini API の最高の思考設定で測っている。他社モデルの数値は、各社の自己申告、または公開リーダーボードの値である。DeepSWE v1.1、Terminal-Bench 4.0、Terminal-Bench Science 0.1、Agent's Last Exam、OSWorld-2.0、LVBench の Argon の値は自社で計測し、PostTrainBench、LABBench2、GraphWalks は全モデルを自社で計測している。LVBench は Argon が1秒1フレーム、GPT-6 Astra が800フレーム、Claude Fable 5.1 が300フレーム、Claude Opus 5.5 が600フレームと、API の制約で入力条件が揃っていない。Agent's Last Exam は、公開リーダーボードに Claude Fable 5.1 の値がないため表に含まれず、OSWorld-2.0 は Anthropic がオンラインとオフラインを合算した値しか公表していないため、Claude の2モデルの欄が空いている。",
      "Google は社内での利用例も挙げている。量子計算の研究では、重要な応用のボトルネックになるサブルーチンの時空間リソース（量子ビット数とゲート数の積）の最適化で、公表されている基準値を数分で40%上回ったという。データセンターでは、Argon のエージェント群が全体のプロファイル情報から、メモリ最適化を自律的に見つけて適用し、展開後に300TiB 超を空け、合計で500TiB から1PiB の節約を見込むとしている。libgav1（動画デコーダ）では、Rust 版の32K行の SIMD コードを置き換え、出力が同一のまま Rust 版より2.7倍速いメモリ安全なデコーダになったという。これらは Google の説明である。C/C++ から Rust への大規模な移行は、本番に出す前に自動と手動の監査、エミュレーションテスト、レビューを受けているところだと、同じ発表が書いている。",
      "サイバー防衛については、Argon がソフトウェアの重大な脆弱性を自律的に見つけ、検証し、修正できるよう訓練したと書かれている。セキュリティ企業 Wiz は、無償で重要インフラを守る取り組み Scan for Good で Argon を使い、世界中の病院が使う医療ソフトウェアで個人情報が露出する重大な脆弱性を見つけたという。Google は、それが従来のフロンティアモデルでは見逃されたリスクだったと説明している。公開前の安全対策として、悪用の防止、間接プロンプトインジェクションへの耐性、思考過程と行動を監視する不整合の検知、サンドボックス環境の強化の4つを挙げる。プロンプトインジェクションについては Gray Swan のベンチマークで首位だと書くが、数値は示していない。",
      "開発者や管理者にとっては、まず提供範囲の確認が先になる。現時点で API や Google AI Ultra から使えるとは書かれておらず、導入価格の期間も示されていない。比較表は Google が選んだ項目と条件の組み合わせで、Argon が上回る項目と下回る項目の両方がある。自分の用途で評価するには、提供が始まってから、同じ条件で他のモデルと並べて試すことになる。この記事の根は Google の発表とその評価資料で、当事者の発表である。社内の成果や各ベンチマークの値について、独立した第三者による検証は、当サイトでは確認できていない。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "Google DeepMind が公表した比較表（Gemini 4 Argon と GPT-6 Astra・Claude Fable 5.1・Claude Opus 5.5。各社の自己申告・公開リーダーボードの値と Google の自社計測を含む。単位は %、空欄は値なし）",
        "headers": [
          "ベンチマーク",
          "Gemini 4 Argon",
          "GPT-6 Astra",
          "Claude Fable 5.1",
          "Claude Opus 5.5"
        ],
        "rows": [
          [
            "Vals Index",
            "68.9",
            "63.1",
            "65.8",
            "67.0"
          ],
          [
            "AutomationBench",
            "51.3",
            "41.4",
            "31.4",
            "42.5"
          ],
          [
            "Vals Finance Agent v2",
            "65.4",
            "53.5",
            "58.9",
            "58.6"
          ],
          [
            "Harvey's Legal Agent Benchmark",
            "19.6",
            "5.4",
            "6.7",
            "3.8"
          ],
          [
            "DeepSWE v1.1",
            "77.9",
            "74.1",
            "67.4",
            "74.2"
          ],
          [
            "FrontierSWE v2",
            "55.0",
            "65.5",
            "56.3",
            "62.3"
          ],
          [
            "Vibe Code Bench",
            "91.9",
            "89.6",
            "90.3",
            "90.3"
          ],
          [
            "Terminal-Bench 4.0",
            "57.4",
            "58.2",
            "57.9",
            "66.4"
          ],
          [
            "PostTrainBench",
            "45.3",
            "44.3",
            "40.2",
            "49.3"
          ],
          [
            "Terminal-Bench Science 0.1",
            "57.6",
            "68.1",
            "52.6",
            "63.3"
          ],
          [
            "LABBench2",
            "88.8",
            "85.4",
            "68.6",
            "73.1"
          ],
          [
            "RiemannBench",
            "76.0",
            "72.0",
            "65.6",
            "69.6"
          ],
          [
            "GraphWalks（128k まで）",
            "99.7",
            "98.7",
            "91.4",
            "90.6"
          ],
          [
            "GraphWalks（256k〜1M）",
            "84.2",
            "71.8",
            "65.0",
            "66.8"
          ],
          [
            "Agent's Last Exam（合格率）",
            "39.5",
            "34.2",
            "",
            "38.2"
          ],
          [
            "OSWorld-2.0（オフライン部分の部分点）",
            "69.2",
            "72.6",
            "",
            ""
          ],
          [
            "Chartography",
            "71.6",
            "71.0",
            "46.2",
            "66.3"
          ],
          [
            "LVBench",
            "91.7",
            "87.5",
            "79.7",
            "83.7"
          ],
          [
            "CWE-bench v1",
            "68.0",
            "68.0",
            "58.0",
            "67.0"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Gemini 4 Argon: our next era of frontier intelligence（Google）",
        "site": "Google",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/"
      },
      {
        "title": "Gemini 4 Argon Model evaluation — Approach, methodology & results（Google DeepMind）",
        "site": "Google DeepMind",
        "url": "https://storage.googleapis.com/deepmind-media/gemini/gemini_4_argon_model_evaluation.pdf"
      },
      {
        "title": "Google DeepMind の公式 X アカウント（2026年9月30日付の発表の投稿と比較表）",
        "site": "X",
        "url": "https://x.com/GoogleDeepMind"
      }
    ]
  },
  "anthropic-cli-1-37-admin-api-spend-limits-rbac-plugins-2026": {
    "body": [
      "Anthropic が Claude Platform 向けに公開している公式 CLI「`ant`」（[anthropics/anthropic-cli](https://github.com/anthropics/anthropic-cli)、MIT ライセンス）が、9月30日に **v1.37.0** と **v1.38.0** を相次いで公開した。GitHub のリリースノートによると、v1.37.0 の機能追加は次の5件である。Claude Enterprise の分析・支出上限（spend limits）・RBAC のグループとロールを Admin API に追加、Admin API の分析に**ユーザー単位の利用量・コストレポート**を追加、Admin API に**プラグインとプラグインマーケットプレイス**を追加、プラグインの組織全体へのインストール設定を**削除できる**ようにした、そして **Organization API エンドポイントが GA になった**。",
      "v1.38.0 は小さな更新で、**支出上限の一覧エンドポイント**の追加と、`ant apply` が GitHub URL で参照したスキルのキャッシュを**コミットの完全な SHA で区別する**ようにした修正が入っている。",
      "`ant` 自体は新しくない。同じリリースページで確認できる最も古い版は9月1日の v1.29.0 で、`ant apply` は [v1.30.0 で入っている](?a=claude-platform-ant-apply-devtools-2026)。今回の変更は、エージェントや環境をコードで管理する側ではなく、**組織の管理者が使う側**（メンバー・支出・権限・プラグイン）に寄っている。",
      "公式ドキュメントの Admin API のページによると、Admin API が受け付ける認証情報は3種類ある。`sk-ant-admin` で始まる Admin API キー、`org:admin` スコープの OAuth ベアラートークン、ワークスペースに限定されない個人キーまたはサービスアカウントキーである。`ant` からは `ant beta:organization` 以下のコマンドで呼び出す。なおリリースノートは Organization API の GA を述べているが、ドキュメントの URL とコマンド名には、2026年10月1日の確認時点で `beta` が残っている。",
      "管理者権限の取り方について、認証のドキュメントは次のように書いている。`ant auth login` は既定ではワークスペースに限定したトークンを要求する。Admin API のリソースを扱うには、専用のプロファイルで `ant auth login --profile admin --scope \"org:admin\"` のように `org:admin` スコープを要求する。このスコープは admin、owner、primary owner のロールの組織メンバーにだけ付与され、発行されたトークンは**組織全体にアクセスでき、プロファイルのワークスペース指定では制限されない**。公式は、日常のコマンドが昇格した権限で動かないよう、管理者用のプロファイルを日常用と分けておくよう求めている。",
      "Claude Enterprise（claude.ai）の組織については、同ページに別の注記がある。claude.ai で作成したスコープ付き API キーで Admin API を呼び、このページのエンドポイントのうちメンバーと招待だけが当てはまる。Enterprise 専用として、グループとカスタムロールの読み取りと支出上限が加わる、という書き分けである。したがって、v1.37.0 で入った支出上限や RBAC は、Console の組織と Enterprise の組織とで使える範囲が違う可能性がある。リリースノートとドキュメントからは、各エンドポイントがどちらの組織で使えるかまでは確認できていない。",
      "運用の観点では、スクリプトから `curl` で API を呼ぶ場合に、`ant auth print-credentials --access-token` が保存済みの OAuth アクセストークンを（期限が近ければ更新して）出力する、という記述がある。このとき `ANTHROPIC_API_KEY` や `ANTHROPIC_AUTH_TOKEN` が環境変数に残っていると `ant` のログインより優先され、意図しない組織やワークスペースに向かうことがあるため、公式は CLI のログインで作業するときはそれらを外すよう注意している。`ant auth status` で、どの認証情報とワークスペースが選ばれているかを確認できる。",
      "この記事の根は、GitHub のリリースノート（v1.37.0、v1.38.0）と Anthropic 公式ドキュメント（CLI クイックスタート、認証、Admin API、`ant apply`）の2系統で、いずれも Anthropic 自身の発表である。実際の挙動を第三者が検証した資料は確認できていない。各エンドポイントの引数や応答の詳細、プラグイン管理で何ができるかの全体像は、この記事では確認していない。"
    ],
    "primarySources": [
      {
        "title": "anthropics/anthropic-cli Release v1.37.0",
        "url": "https://github.com/anthropics/anthropic-cli/releases/tag/v1.37.0"
      },
      {
        "title": "anthropics/anthropic-cli Release v1.38.0",
        "url": "https://github.com/anthropics/anthropic-cli/releases/tag/v1.38.0"
      },
      {
        "title": "CLI authentication options（Claude Platform ドキュメント）",
        "url": "https://platform.claude.com/docs/en/cli-sdks-libraries/cli/authentication"
      },
      {
        "title": "Admin API（Claude Platform ドキュメント）",
        "url": "https://platform.claude.com/docs/en/manage-claude/admin-api"
      },
      {
        "title": "CLI scripting and automation（Claude Platform ドキュメント）",
        "url": "https://platform.claude.com/docs/en/cli-sdks-libraries/cli/scripting"
      }
    ]
  },
  "openai-cli-1-31-readable-output-subgroups-2026": {
    "body": [
      "OpenAI の GitHub 公式 org にある `openai/openai-cli` は、OpenAI の REST API を端末から呼ぶための公式 CLI である。README の冒頭は「The official CLI for the OpenAI REST API」で、Go で書かれ、著作権表記は OpenAI（2026年）になっている。CHANGELOG によれば 10月1日に v1.31.0 が公開され、機能追加は「browsable command subgroups（辿れるコマンドのサブグループ）」の1件である。直前の v1.30.7 までは 9月30日付で、API リファレンスの更新やデバッグログの出力制限などの小さな変更が並ぶ。",
      "CHANGELOG に残っているのは v1.7.1（2026年8月5日）から v1.31.0 までの59版である。この記事では、いつ最初に公開されたかは確認できていない。以下は README と CHANGELOG の記載に基づく整理で、実際に動かして検証したものではない。",
      "インストール方法は README に2通り書かれている。Homebrew では `brew install openai/tools/openai`、Go では `go install 'github.com/openai/openai-cli/cmd/openai@latest'` で、Go はバージョン 1.26 以上が必要とされる。コマンドの形は `openai <resource> [subresource...] <command> [flags...]` で、README の例は `openai responses create --input \"Say this is a test\" --model ...` である。標準の API には API キー（`OPENAI_API_KEY`）、管理系のエンドポイントには別の管理者キー（`OPENAI_ADMIN_KEY`）が要る。`openai admin organization usage completions` のように、使用量の取得は admin 配下に置かれている。v1.31.0 のサブグループは、`openai admin --help` や `openai admin organization --help` のようにグループごとに一覧を辿れるようにするもので、README によれば従来のコロン形式（`openai admin:organization:usage completions`）も引き続き使える。",
      "出力の既定は、README の記述では「読みやすいテキスト」である。成功した JSON レスポンスは、パイプに流した場合も含めて既定で読みやすい文章として表示される。スクリプトで解析する場合は `--format json` や `--format jsonl` を指定する。`--transform` には GJSON 構文で値を抜き出す機能があり、エラー側にも `--format-error` と `--transform-error` が別に用意されている。エラーは既定で要約が stderr に出力され、README は、要約には拒否された値やリクエスト URL を含めないと書いている。",
      "画像生成は、このツールの特徴的な部分である。`openai images generate --prompt \"A tiny orange robot\"` は画像を `~/Downloads/gpt-images/` に保存し、保存したパスを表示する。モデルを指定せず保存する場合の既定は `gpt-image-2.5-sunburst` で、docs の記述では「プリセットであり、アクセスや利用枠を保証するものではない」。生成には API クレジットを使い、選んだモデルへのアクセスが必要とされる。`--format json` などデータ形式を明示した場合は、画像を保存せず API のデータをそのまま返す。URL 形式のレスポンスはダウンロードされない。",
      "認証情報とデータの扱いについて、README には具体的な記述がある。デバッグ（`--debug`）のログには HTTP のリクエストとレスポンスの本文が含まれうるため、機密が入りうる場合は共有しないよう書かれている。`--header` で渡した値はヘルプでは隠され、デバッグログでは伏せ字になる。認証情報を含むヘッダは、コマンド引数ではなく環境変数 `OPENAI_CUSTOM_HEADERS` で渡すよう勧めている（引数に書くとシェルの履歴に残るため）。相互 TLS（mTLS）は beta で、クライアント証明書と秘密鍵を別々の PEM ファイルで渡す。秘密鍵の中身を引数や環境変数に直接入れないよう明記されている。",
      "ファイルを引数に渡す `@myfile.ext` 構文にも注意書きがある。`@` で始まる値はローカルファイルを読む指示として扱われるため、信頼できない出力をパイプで渡す場合は `OPENAI_UNTRUSTED_STDIN=1` を設定する。このモードでは、標準入力から来た値の `@` 参照はファイルを読まず、そのままの文字列になる。ファイルのアップロードは明示的なコマンドラインフラグでのみ行われる。",
      "リポジトリの運営方針も README に書かれている。バグ報告と機能要望は GitHub Issues で受け付けるが、Pull Request はリポジトリのコラボレーターに限られ、外部からの PR は受け付けない。脆弱性の報告は SECURITY.md の手順に従う。",
      "同じ週には、Anthropic の公式 CLI「ant」の v1.37 / v1.38 も公開されている。どちらも、各社の API を端末から使うための公式ツールである。この記事では両者の機能の優劣を比べていない。それぞれの README と CHANGELOG を一次資料として読む場合、公開された版や更新日が違うので、使う前に自分が使う版の記載を確認する必要がある。",
      "導入にあたっては、`go install ...@latest` が常に最新版を取得する点に注意したい。バージョンを固定したい場合は `@v1.31.0` のようにタグを指定する。Homebrew の tap（`openai/tools`）も含め、実行前に公式リポジトリの README と一致していることを確かめてから入れること。管理者キーは通常の API キーと権限が違うため、共有のシェルや CI に置く前に、必要な範囲だけに絞ることを勧める。",
      "根拠の数え方: この記事の主張はすべて、公式リポジトリ `openai/openai-cli` の README・docs・CHANGELOG（当事者自身の記録）に基づく。一次資料1本で、独立した第三者による検証や動作確認は確認できていない。"
    ],
    "primarySources": [
      {
        "title": "openai/openai-cli（README）",
        "url": "https://github.com/openai/openai-cli"
      },
      {
        "title": "openai/openai-cli CHANGELOG",
        "url": "https://github.com/openai/openai-cli/blob/main/CHANGELOG.md"
      },
      {
        "title": "openai/openai-cli docs: image generation and saving",
        "url": "https://github.com/openai/openai-cli/blob/main/docs/image-generation-saving.md"
      }
    ]
  },
  "alibaba-qwen-intelligence-honor-magic9-2026": {
    "body": [
      "Alibabaは2026年9月22日、杭州で開催したApsara Conferenceで「Qwen Intelligence」を発表した。Alibaba公式ニュースルームのAlizilaによると、スマートフォンメーカーが自社端末にエージェント型のAI機能を載せられるようにするフルスタック型のソリューションである。モバイル向けに最適化した基盤モデルから、すぐ使えるエージェントまでを一式で提供する。",
      "第1弾のパートナーはHONORで、Alizilaは、同社の新しいMagic9シリーズ（Alizilaの発表時点では9月28日に発売予定とされていた）とHONOR Robot Phoneが、Qwen Intelligenceを組み込む最初の端末になると書いている。HONOR公式サイトには、2026年9月28日に北京でMagic9シリーズの新製品発表会を開くと案内するページがあり（本記事の掲載日の時点で、その日付はすでに過ぎている）、HONOR Robot Phoneも製品として掲載されている。なおAlizilaの原文は「launch」と書くだけで、発売と発表会を区別していない。実際の搭載状況や発売の状況は、本記事では公式資料で確認していない。",
      "Alizilaによると、第1フェーズは3種類のエージェントで構成される。中核の「Mobile Planner Agent」は、計画の立案、タスクの分解、ツール呼び出しの調整、状況に応じた調整を担う。原文は例として、出張の手配という依頼を、航空券の予約、ホテルの確保、カレンダーへの登録、行程の計画に分解する流れを挙げている。「Mobile-Use Agent」は、アプリをまたぐ操作を、APIを優先しGUI操作を代替手段とする方式で実行する。Alibabaは、厳格なセキュリティ境界とプライバシー保護を課すと説明している。「Mobile Creative Agent」は、スマートフォン上での画像の生成・編集に向けた軽量モデルである。個人向けの記憶サービス、マルチモーダル対話、パートナーが提供する業種別エージェントは、今後の提供予定として挙げられている。",
      "構成は3層とされる。最下層はモバイル向けに最適化したQwen系の基盤モデル、中間はモデルの個別デプロイ、ハーネスのカスタマイズ、ツールの統一管理、自動評価に対応するモジュール式のプラットフォーム、最上層は業種別のエージェントである。端末メーカーは一式を採用することも、基盤モデルや個別のエージェントなどモジュール単位で選んで自社システムに組み込むこともできる、とAlizilaは書く。Qwen Intelligenceは公式サイトとAlibaba Cloudのサービスを通じて提供されると記されているが、料金や具体的な提供条件は、参照した公式資料には書かれていない。",
      "HONORとの協業について、Alizilaは、Qwen IntelligenceとHONORのMagicOSを土台に、スマートフォンを受動的な応答者から、先回りして動くサービス提供者へ変えると説明する。性能については、HONORのAIスマートフォンがタスク精度で最大91.8%に達し、100ステップを超える複雑な一連の操作を扱えると書かれている。この数値はAlibabaが公式ニュースルームで示した自社発表値であり、独立した第三者による検証は確認できていない。",
      "評価系についてAlibabaは、実際のモバイル環境でエージェントを測る体系的な方法がないとして、Qwen Intelligenceのチームが4本のベンチマークからなる公開の評価系を作ったと説明している。MobilePA-Benchは、1,000件を超える実シナリオのタスクと200種類を超える一般的なモバイルツールを対象に、計画から完了までの遂行力を測るという。残る3本は、クラウドフォン環境での長い一連のアプリ横断タスクや、日常の利用分布に合わせた実機でのタスクを対象にする。ただし、91.8%がこのうちどの評価系の値かは、発表文に明記されていない。読者が自社や自分の用途に当てはめて判断するには、評価の条件が公開されるかどうかが確認点になる。",
      "端末メーカーや開発者にとっての確認点は、採用単位（一式かモジュールか）、端末とクラウドの役割分担（発表文は、性能・遅延・コストのバランスを取るデバイス・クラウド連携に触れている）、そしてセキュリティ境界の具体的な中身である。これらの詳細は、今回参照した発表文には記載がない。"
    ],
    "primarySources": [
      {
        "title": "Alibaba Launches Qwen Intelligence to Power Next-Generation Agentic Smartphones（Alizila、Alibaba公式ニュースルーム）",
        "site": "Alizila",
        "url": "https://www.alizila.com/alibaba-launches-qwen-intelligence-to-power-next-generation-agentic-smartphones/"
      },
      {
        "title": "荣耀Magic9系列新品发布会（HONOR公式サイト）",
        "site": "HONOR",
        "url": "https://www.honor.com/cn/activity/honor-magic9-series-launch/"
      }
    ]
  },
  "alibaba-zhenwu-v900-ai-chip-2026": {
    "body": [
      "Alibaba傘下のチップ設計会社T-Head（平頭哥）が、2026年9月22日にApsara Conference 2026で、AIの学習・推論向けプロセッサ「Zhenwu V900」を発表した。Alibaba Cloudの公式ブログに掲載された発表まとめによる。同社の別の公式ブログ（基調講演の報告）は、会議が杭州で9月22日に開幕したと書いている。",
      "公式ブログによると、Zhenwu V900は216GBのGPUメモリと1,200GB/sのチップ間帯域幅を備え、FP8・FP4を含む複数のデータ精度にネイティブ対応する。高精度のモデル学習と超低精度の推論の両方を扱えるとされる。量産・商用リリースは2027年第1四半期の予定である。性能については、5月に発表された前世代「Zhenwu M890」の3倍とAlibabaは説明している。ただし絶対的な性能値（FLOPS等）は、公式の発表には書かれていない。",
      "V900は、ICN Switch、Panmai SmartNIC、Zhenyue SSDコントローラチップと組み合わせた「スーパーノード」サーバに搭載される。公式ブログは、このサーバが最大50万枚のカードからなるスーパーノードクラスタに対応すると説明している。同ブログによれば、T-HeadのZhenwuシリーズは既に自動車・金融・大規模言語モデル・エンボディドAI・エネルギー・製造などの650社超の顧客に提供されているという（Alibabaの説明）。CPUについては、2027年にYitian 720と730を投入するロードマップも示された。730はT-Head独自のマイクロアーキテクチャを採用した最初のCPUで、Yitian 710比でSPECint2017/GHzが最大40%向上するとされる。",
      "同じ発表でAlibabaは、Qwen 4.5・Qwen 5シリーズが5〜10兆パラメータ規模を目指すロードマップも示した（詳しくは「[Alibabaが次世代「Qwen4」は学習中と発表](?a=alibaba-qwen4-apsara-unveil-2026)」を参照）。V900は「フロンティアモデルの学習と推論」向けと位置づけられ、V900ベースのクラスタが最大50万枚に対応するとも説明されている。一方、公式ブログはV900がそれらのモデルのために設計されたとまでは書いていない。両者の結び付けは、AP通信の報道を引いたTom's Hardwareの記事にある。",
      "Alibabaグループ CEOのEddie Wu（呉泳銘）氏は基調講演で、V900を「現時点で中国最強のAIチップ」と述べた。3倍という性能倍率とあわせて、いずれも当事者であるAlibabaの説明である。独立した性能検証は確認できていない。",
      "このうち、V900の仕様と時期は、Alibaba Cloud公式ブログの発表まとめ（9月22日）とCEO基調講演を伝える公式ページ（9月23日）で確認した。Tom's Hardware（9月23日付）とTechNode（9月22日付）も同じ発表を報じているが、前者はAP通信の報道を引いており、後者はT-Headの発表を直接引用している。いずれも元は同じ発表であり、独立した検証が加わったものではない。",
      "公式発表は米国の対中輸出規制に触れていない。Tom's Hardwareは、この発表を米中の首脳会談・AI協議の文脈で報じている（同記事は、輸出規制は協議の議題になかったとも書く）。公式ブログはV900に加えて、Zhenwu（GPU）、Yitian（CPU）、Panmai（SmartNIC）、ICN（インターコネクト）、Zhenyue（SSDコントローラ）と、コンピューティング・ストレージ・ネットワークにわたる自社設計のチップ群を挙げている。",
      "開発者・管理者が確認すべき点は次のとおり。量産・商用リリースは2027年第1四半期の予定で、現時点では発表済みの計画である。価格、提供形態、FLOPSなどの絶対性能値は、公式の発表には書かれていない。M890については、Eddie Wu氏が基調講演で、M890ベースのスーパーノードが今四半期から商用規模で稼働し、2兆パラメータ超のモデルの推論に対応すると述べている。"
    ],
    "primarySources": [
      {
        "title": "Alibaba Unveils Roadmap on Full-Stack AI Strategy（Alibaba Cloud公式ブログ、2026-09-22）",
        "site": "Alibaba Cloud",
        "url": "https://www.alibabacloud.com/blog/alibaba-unveils-roadmap-on-full-stack-ai-strategy-from-chips-cloud-infrastructure-models-to-agents_603589"
      },
      {
        "title": "AliViews: Eddie Wu Shares Alibaba's Strategic Full-Stack AI Roadmap at the 2026 Apsara Conference（CEO基調講演全文、2026-09-23）",
        "site": "Alibaba Cloud",
        "url": "https://www.alibabacloud.com/blog/aliviews-eddie-wu-shares-alibabas-strategic-full-stack-ai-roadmap-at-the-2026-apsara-conference_603595"
      },
      {
        "title": "Alibaba unveils Zhenwu V900 AI accelerator（Tom's Hardware、2026-09-23、AP通信の報道を引用）",
        "site": "Tom's Hardware",
        "url": "https://www.tomshardware.com/tech-industry/artificial-intelligence/alibaba-unveils-zhenwu-v900-ai-accelerator-claims-its-the-most-powerful-ai-chip-in-china-accelerator-supports-500-000-chip-supercluster-with-a-10t-parameter-qwen-model-on-the-roadmap"
      },
      {
        "title": "T-Head unveils Zhenwu V900 AI chip（TechNode、2026-09-22）",
        "site": "TechNode",
        "url": "https://technode.com/2026/09/22/t-head-unveils-zhenwu-v900-ai-chip-in-alibabas-push-to-expand-its-ai-infrastructure-stack/"
      }
    ]
  },
  "magnitude-local-inference-server-coding-agents-2026": {
    "body": [
      "OSS の推論サーバ「Magnitude」(magnitudedev/magnitude)が、2026年9月上旬に GitHub トレンドに入った。当初の調査時の星数の記録は、いま再確認できなかったため載せない。第三者のトレンド記録サービス trendshift には、9月3日に GitHub Trending で1位に達した記録がある。ライセンスは Apache 2.0。以下の仕様は、9月1日から5日時点の公式 README に基づく。この時点の README は、対応 OS を macOS と Linux とし、Windows は WSL 経由での対応と書いていた。",
      "特徴は、モデル選定からライフサイクル管理までを引き受ける設計にある。README は、手元のチップ・メモリ・帯域幅をプロファイリングし、動かせるモデルを推薦したうえで、ダウンロード・チューニング・起動まで行うと説明している。モデルごとの推定トークン毎秒(tok/s)も提示される。モデルは使用要求があった時にロードされ、アイドル時またはメモリが逼迫した時に自動的にアンロードされる。",
      "接続先として明記されているエージェントは、Pi・OpenCode・Hermes・OpenClaw・Codex・Claude Code・Oh My Pi・Cline の8種で、公式ドキュメントにはそれぞれ個別の接続ページがある。9月5日時点の README には、これらに加えて Magnitude 自身のビルトインのハーネスからも使えるとも書かれていた。既存のエージェントツールはそのままに、バックエンドだけをローカルモデルに差し替える使い方が想定されている。",
      "README が掲げる利点は2点ある。1つは「トークン課金・APIキー・レート制限なし」であること。もう1つは、モデル・プロンプト・ファイルが手元のマシンから外に出ないことである。FAQ は、Magnitude とモデルをダウンロードした後はインターネット接続が不要と述べている。いずれも開発元の説明であり、挙動を第三者が検証した資料は確認できていない。クラウドに送りたくないコードを扱う場合は、ネットワークの利用状況を自分の環境で確かめるのが確実である。",
      "ローカルLLM運用の一般論としては、[7B〜70Bクラスのモデルに必要なスペックやAPIとの損益分岐点](?a=local-llm-vs-api-reality-2026)を既に AI News で整理している。Magnitude は、動かせるかどうかの判断と、動かすための設定をツール側に委ねる方向の実装である。一方で、ローカルで動かせるモデルの性能はクラウドの最上位モデルとは異なるため、どの規模のタスクをローカルに任せるかは利用者が見極める必要がある。",
      "9月中旬の変化。上記は9月5日時点の README に基づく。その後、コミット履歴では9月11日に「デスクトップを推論中心に作り直し、CLI をヘッドレスにする」という趣旨の変更が入り、9月16日から17日にかけて README とドキュメントがデスクトップアプリ向けに刷新された。現行の公式ドキュメントでは、`magnitude` CLI はデスクトップアプリに同梱され、Windows はネイティブ(x64、CUDA / Vulkan)に対応している(インストール手順のページによる)。9月5日時点の「WSL 経由」や「ビルトインのハーネス」という記述は、現行の README には見当たらない。9月30日の README は、llama.cpp 比で最大2倍の速度を掲げ、その自社ベンチマーク図を載せている。これは開発元の計測であり、独立した検証は確認できていない。利用を検討する場合は、公式ドキュメントで現行の構成と対応環境を確認してほしい。"
    ],
    "primarySources": [
      {
        "title": "magnitudedev/magnitude (GitHub)",
        "site": "GitHub",
        "url": "https://github.com/magnitudedev/magnitude"
      },
      {
        "title": "Magnitude ドキュメント FAQ",
        "site": "docs.magnitude.dev",
        "url": "https://docs.magnitude.dev/faq.md"
      },
      {
        "title": "Magnitude ドキュメント 目次",
        "site": "docs.magnitude.dev",
        "url": "https://docs.magnitude.dev/llms.txt"
      },
      {
        "title": "Trendshift: magnitudedev/magnitude",
        "site": "Trendshift",
        "url": "https://trendshift.io/repositories/79752"
      },
      {
        "title": "Magnitude ドキュメント Windows インストール",
        "site": "docs.magnitude.dev",
        "url": "https://docs.magnitude.dev/installation/windows.md"
      }
    ]
  },
  "nvidia-open-agent-safety-platform-2026": {
    "body": [
      "NVIDIA は2026年9月28日、AIエージェントが許可された範囲の外に出ることを防ぐ「Open Agent Safety Platform」を公式に発表した（NVIDIA ニュースルーム）。TechCrunch なども同日に報じている。構成は2つある。1つは実行時の境界を作るオープンソースソフトウェア「OpenShell」、もう1つは NVIDIA BlueField-4 の DPU（データ処理ユニット）上で動き、エージェントの挙動を外側から独立して監視する「Sentry」である。NVIDIA は、Sentry が境界を越えようとするエージェントをミリ秒単位で隔離・停止するとしている。これは NVIDIA 自身の説明で、独立した検証は確認できていない。",
      "OpenShell は今回が初出ではない。NVIDIA は2026年3月のプレスリリース（GTC）で NemoClaw とともに公開しており、今回新しいのは Sentry と、両者を一体のプラットフォームとして示した点である。9月28日には OpenShell 0.1.2 も出ている。NVIDIA の発表では、OpenShell は「Now broadly available」（広く提供中）とされ、ソフトウェアは GitHub と開発者向けページから入手できる。一方 Sentry は「リファレンスシステム設計」と位置づけられており、提供時期と価格は公式の資料に書かれていない。NVIDIA の開発者ブログによれば、OpenShell は BlueField-4 が無くても動き、BlueField-4 を備えた構成で Sentry が加わるため、二層は別々に導入できる。",
      "OpenShell の GitHub リポジトリの README は、ファイル・システムコール・ネットワーク接続のすべてでカーネルがポリシーを強制し、ポリシー変更が何を許すかを形式検証で確かめる、と説明している。ライセンスは Apache License 2.0 である。一方、リポジトリの README には Sentry や BlueField への言及は無かった。Sentry のハードウェア側の仕様は、NVIDIA の発表と開発者ブログに書かれた範囲でしか確認できていない。",
      "NVIDIA の説明（公式発表）によれば、OpenShell は NVIDIA の Vera CPU 上での実行を想定しつつ、Arm や Intel など他社の計算基盤にも拡張できる。発表は Open Secure AI Alliance にも触れている。この団体は2026年7月に NVIDIA 主導で設立され、9月に Linux Foundation 傘下に移ったもので、9月28日に新設されたものではない。NVIDIA は同団体を「120超の組織とともに発足させ、Linux Foundation が運営する」と説明している。連携先として、NVIDIA は Anthropic、Cisco、CrowdStrike、Palo Alto Networks、Microsoft、Salesforce、SAP などを挙げた。Anthropic については、Claude Managed Agents が OpenShell と BlueField の統合を通じてサンドボックスへのアクセスを制御できるとしている。Yahoo Finance の見出しは、この発表がジェンスン・フアン氏による Anthropic・OpenAI の警告への「odd（奇妙だ）」という発言の後だったと伝えている。この発言は、ニューヨーク・タイムズの Ezra Klein 氏との対談でのものである。",
      "当サイトはこれまでに、エージェントの隔離をめぐる公開として、Anthropic の Sandbox Runtime（OSレイヤー）と Microsoft の agent-governance-toolkit（アプリケーション層）を取り上げた。それらがソフトウェア側の制御であるのに対し、今回の Sentry は「エージェントが動くソフトウェアの外側」に監視を置く点が構成として異なる。どの層の制御がどの種類の逸脱に効くかは、独立した評価がまだ出ておらず、本稿では優劣を判断しない。",
      "本稿の確認範囲について。NVIDIA のニュースルーム、開発者ブログ、製品ページ、Linux Foundation のブログ、OpenShell のリポジトリ（README とライセンス）を直接確認した。数値（ミリ秒、製品ページにある「Vera 上でサンドボックス性能が従来の CPU 基盤より最大80%速い」という記述）は、いずれも NVIDIA 自身の主張である。TechCrunch と Yahoo Finance も読んだ。"
    ],
    "primarySources": [
      {
        "title": "NVIDIA Newsroom: NVIDIA Launches Open Agent Safety Platform",
        "site": "NVIDIA",
        "url": "https://nvidianews.nvidia.com/news/open-agent-safety-platform"
      },
      {
        "title": "NVIDIA Open Agent Safety Platform: A Reference for Continuous In-Silicon Agent Monitoring",
        "site": "NVIDIA Technical Blog",
        "url": "https://developer.nvidia.com/blog/nvidia-open-agent-safety-platform-a-reference-for-continuous-in-silicon-agent-monitoring/"
      },
      {
        "title": "NVIDIA Agent Safety（製品ページ）",
        "site": "NVIDIA",
        "url": "https://www.nvidia.com/en-us/solutions/ai/agent-safety/"
      },
      {
        "title": "NVIDIA/OpenShell（README・LICENSE）",
        "site": "GitHub",
        "url": "https://github.com/NVIDIA/OpenShell"
      },
      {
        "title": "Open Secure AI Alliance Joins the Linux Foundation",
        "site": "Linux Foundation",
        "url": "https://www.linuxfoundation.org/blog/open-secure-ai-alliance-joins-the-linux-foundation-to-build-a-shared-open-defense-stack-for-the-ai-era"
      },
      {
        "title": "TechCrunch: Nvidia launches new platform for reining in rogue AI agents",
        "site": "TechCrunch",
        "url": "https://techcrunch.com/2026/09/28/nvidia-launches-new-platform-for-reining-in-rogue-ai-agents/"
      },
      {
        "title": "Yahoo Finance: Nvidia launches AI safety platform after Jensen Huang calls Anthropic, OpenAI warnings 'odd'",
        "site": "Yahoo Finance",
        "url": "https://finance.yahoo.com/technology/article/nvidia-launches-ai-safety-platform-after-jensen-huang-calls-anthropic-openai-warnings-odd-103135599.html"
      },
      {
        "title": "NVIDIA Open Secure AI Alliance",
        "site": "NVIDIA Blog",
        "url": "https://blogs.nvidia.com/blog/open-secure-ai-alliance/"
      }
    ]
  },
  "anthropic-pentagon-dc-circuit-appeal-2026": {
    "body": [
      "ワシントンD.C.巡回区控訴裁判所は2026年9月25日、Anthropic PBCが国防総省（判決文での名称はDepartment of War）とHegseth長官を相手取って起こした請願（No. 26-1049、No. 26-1162と併合）について、「petitionsを棄却する（we deny the petitions for review）」と判断した。審理したのはHenderson、Katsas、Raoの3判事で、Katsas判事が多数意見を書き、Rao判事が加わった。Henderson判事は反対意見を書いた。2対1の判断である。以下は、裁判所の公式サイトに掲載された判決文を根拠にしている。",
      "この記事は、当サイトが9月16日に報じた記事（北カリフォルニア連邦地裁のRita Lin判事が、国防総省によるAnthropicの「サプライチェーンリスク」指定を違法と判断した件）の続報だが、別の出来事である。裁判所も、根拠法も、審理の対象も異なる。判決文と地裁の意見書によれば、2026年3月3日にHegseth長官が行った措置は2つの法令にまたがる。1つは10 U.S.C. §3252に基づく「サプライチェーンリスク」指定で、北カリフォルニア地裁が審理した。もう1つは41 U.S.C. §4713（2018年のSupply Chain Security Act）に基づく「covered procurement action」の決定で、同法の審査規定（41 U.S.C. §1327）により、請願はD.C.巡回区控訴裁判所に出すことになっている。Anthropicは通知を受けた3月4日の5日後、3月9日にD.C.巡回区控訴裁判所へ請願を出した。",
      "経過を日付で並べると次のとおりである。判決文によれば、D.C.巡回区控訴裁判所は4月8日に執行停止を認めない一方で審理を迅速化した。5月19日に口頭弁論が開かれた。6月3日に長官が再考の求めを退け、Anthropicは6月17日にその決定についても請願を出し、裁判所は6月24日に2件を併合した。そして9月25日に本案の判断が出た。つまりこれは新しい訴訟ではなく、3月から続く同じ訴訟（4月8日に当サイトが報じた執行停止の却下と同じ事件）の本案判断にあたる。一方、北カリフォルニア地裁は3月26日に暫定的な差止めを出したあと、8月27日に§3252の指定を取り消し（vacated）、修正第一条と第五条に違反すると宣言した（地裁の意見書と最終救済命令）。",
      "多数意見は、地裁の判断そのものを覆してはいない。判決文は、§3252の「supply chain risk」の定義が「adversary（敵対者）が妨害し、悪意をもって機能を持ち込み、あるいは破壊する」危険を指している点を挙げ、悪意（bad motive）が要件だとした北カリフォルニア地裁の結論に「異論はない（We have no quarrel）」と書いた。そのうえで、§4713の定義は「any person（あらゆる者）が妨害し、悪意をもって機能を持ち込み、データを抽出し、あるいはその他の方法で設計などを操作する危険」とされており、§3252より広いとして、悪意を要件としない読み方を採った。判決文は、国防総省が「Anthropicが、国防総省が契約上認められ、かつ必要と考える国家安全保障上の機能をClaudeが果たせないよう、設計を操作するかもしれないと懸念したことには合理性があった」と結論づけている。",
      "反対意見のHenderson判事は、条文の文脈から§4713の定義も狭く読むべきだとし、多数意見の読み方では、政府が好まない用途制限を契約者が正直かつ率直に（honest and upfront）執行することまでサプライチェーンリスクに当たることになる、と指摘した。2つの法廷が、似た文言を持つ2つの条文について、それぞれの定義を読んで結論を分けた形である。両判断は現時点で並存している。第9巡回区控訴裁判所には政府側が暫定差止めに対して出した控訴（No. 26-2011）があるが、地裁の意見書によれば、当事者の求めにより、D.C.巡回区控訴裁判所の判断を待って停止されていた。この停止がその後どうなったかは、確認できていない。",
      "背景として、判決文と地裁の意見書の事実認定は次のとおりである。Anthropicは2025年7月、国防総省のChief Digital and Artificial Intelligence Officeから、2年間で最大2億ドルの合意を受けた。2025年秋、国防総省とAnthropicは、直接の契約関係の構築とClaudeの利用拡大（地裁の意見書は、GenAI.milプラットフォームへの展開と記している）について交渉を始め、国防総省は「all lawful uses（あらゆる適法な用途）」で展開することへの契約上の許可を求めた。Anthropicは従来の利用制限を大幅に緩めることに同意したが、「lethal autonomous warfare（致死的な自律型戦闘）」と「mass surveillance of Americans（米国人の大量監視）」への利用禁止は維持するよう求めた。交渉は数か月続いたのち行き詰まり、2026年2月24日に長官がAmodei氏と会って2月27日までに条項を受け入れるよう求め、2月26日にAnthropicが公に拒否した。2月27日に長官がAnthropicを国防総省のサプライチェーンから排除する意向を示し、3月3日に決定が出た。3月6日には国防総省のChief Information Officerが、Anthropic製品を「可能な限り速やかに、遅くとも180日以内に」国防総省のシステムから撤去し、契約者が国防総省向けの業務でAnthropic製品を使うことを禁じる覚書を出した。",
      "Anthropicの反応は、報道機関に出した広報の声明として伝えられている。ABC Newsの独自記事とAP通信の配信は、同じ声明を引用している。声明は、この判断に同意しないという趣旨で（AP通信は「respectfully disagrees」と引用している）、ABC Newsによれば「Another federal court has already held the government's parallel designation unlawful（別の連邦裁判所が、政府の並行する指定を既に違法と判断している）」「We remain confident in our position and are considering all options, including further review（我々は自らの立場に確信を持っており、さらなる審査を含むあらゆる選択肢を検討している）」と続ける。これは当事者自身の説明であり、独立した検証は確認できていない。また、同社のニュース欄（anthropic.com/news）には、2026年10月1日時点で本件の投稿を確認できなかった。声明が言及する「further review」の具体的な手続は示されていない。一般論としては、同じ3判事による再審理、D.C.巡回区控訴裁判所の全員による審理（en banc）、連邦最高裁への上告の申立てといった手続がありうるが、これらはAnthropicの発言ではない。",
      "開発者や管理者が確認すべき点として、判決文が扱ったのは、§4713に基づく決定とその再考の拒否であり、この判断は、Claudeを国防総省のシステムや国防総省向けの業務で使う契約者の立場に関わる。自社の契約や再委託がこの決定の対象になるかどうかは、決定の範囲と契約の内容による。この記事は個別の契約者への当てはめを扱っておらず、判断することはできない。所属先に調達や法務の担当がいる場合は、その指示が優先される。",
      "根拠について。D.C.巡回区控訴裁判所の判断（判決日、判事、多数意見と反対意見、事件番号、§4713と§3252の解釈、各日付）は、判決文という一次資料1本に拠る。北カリフォルニア地裁の判断は、意見書と最終救済命令の一次資料2本に拠る。いずれも当事者が提出した記録に基づく裁判所の事実認定であり、Anthropicの声明の部分だけが当事者の説明にとどまる。判決の報道は多数あるが、AP通信の配信を転載したものは根として数えていない。"
    ],
    "tables": [
      {
        "caption": "同じ3月3日の措置を、2つの法令・2つの法廷が審理した（判決文・地裁の意見書による）",
        "afterParagraph": 2,
        "headers": [
          "",
          "10 U.S.C. §3252の指定",
          "41 U.S.C. §4713の決定"
        ],
        "rows": [
          [
            "審理した法廷",
            "北カリフォルニア連邦地裁（Lin判事）",
            "D.C.巡回区控訴裁判所（請願。No. 26-1049、26-1162と併合）"
          ],
          [
            "結果",
            "2026年8月27日に取り消し（vacated）。修正第一条・第五条違反を宣言",
            "2026年9月25日に請願を棄却（2対1）"
          ],
          [
            "定義の主語",
            "adversary（敵対者）",
            "any person（あらゆる者）"
          ],
          [
            "現状",
            "多数意見は地裁の判断を覆していない。政府の暫定差止めへの控訴（第9巡回区、No. 26-2011）は、地裁の意見書によれば停止中",
            "Anthropicは声明で「さらなる審査を含むあらゆる選択肢を検討」としている"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Anthropic PBC v. United States Department of War, No. 26-1049（D.C.巡回区控訴裁判所の判決文、2026年9月25日）",
        "site": "D.C.巡回区控訴裁判所",
        "url": "https://media.cadc.uscourts.gov/opinions/docs/2026/09/26-1049-2194984.pdf"
      },
      {
        "title": "Anthropic, PBC v. U.S. Department of War（北カリフォルニア連邦地裁の意見書、Dkt. 250、2026年8月27日）",
        "site": "CourtListener（裁判所記録）",
        "url": "https://storage.courtlistener.com/recap/gov.uscourts.cand.465515/gov.uscourts.cand.465515.250.0.pdf"
      },
      {
        "title": "Anthropic, PBC v. U.S. Department of War（北カリフォルニア連邦地裁の最終救済命令、Dkt. 251）",
        "site": "CourtListener（裁判所記録）",
        "url": "https://storage.courtlistener.com/recap/gov.uscourts.cand.465515/gov.uscourts.cand.465515.251.0.pdf"
      },
      {
        "title": "Federal appeals court declines to block Pentagon's blacklisting of Anthropic（ABC News、独自記事。Anthropicの声明の引用元）",
        "site": "ABC News",
        "url": "https://abcnews.com/Business/anthropic-appeals-court-declines-block-pentagon-blacklisting/story?id=136755690"
      }
    ]
  },
  "mai-voice-2-1-transcribe-2-streaming-2026": {
    "body": [
      "Microsoft の AI 部門 Microsoft AI（MAI）は2026年10月1日、公式ブログで3つの音声モデルを発表した。同社として初めてのストリーミング型音声認識モデル MAI-Transcribe-2-Streaming と、音声合成（テキスト読み上げ）の MAI-Voice-2.1、その高速版の MAI-Voice-2.1-Flash である。ブログは3つを「会話型の音声エージェントを作るための部品」として並べており、聞き取りと発話の両端を自社モデルでそろえた形になる。",
      "MAI の音声モデルは、4月の MAI-Transcribe-1 / MAI-Voice-1（[4月の発表](?a=microsoft-mai-transcribe-voice-image-foundry-2026)）、6月の Build で出た MAI-Transcribe-1.5 / MAI-Voice-2 / MAI-Voice-2-Flash（[Build 2026 のまとめ](?a=microsoft-build-2026-mai-7models-solara-majorana-2026)）、9月3日の一括処理向け MAI-Transcribe-2 と、ほぼ月単位で更新されてきた。9月の MAI-Transcribe-2 は録音済みファイルの文字起こし向けで、公式ブログによれば価格は音声1時間あたり0.10ドルである。今回の Streaming 版は、話している最中の音声を受け取りながら文字にする用途を受け持つ。",
      "MAI-Transcribe-2-Streaming は、話し終わりを待たずに暫定の認識結果（パーシャル）を返し、文脈が増えるにつれて修正し、確定した文字列を順に返す。公式ブログは、音声を受け取ってから最初のパーシャルが出るまで「100ミリ秒強」とし、音声エージェントが発話の途中から推論やツール呼び出しを始められると説明する。リアルタイムの口述筆記や字幕では「最も近い競合より2倍速く文字が出る」とも書くが、これは Microsoft の社内評価であり、比較相手の名前と測定条件はブログに書かれていない。",
      "対応言語は60で、言語の自動検出と、会話の途中で言語が切り替わる場合の継続的な検出に対応する。Microsoft Learn の言語表には日本語（ja）が含まれている。価格は公式ブログに「年末まで導入価格として音声1時間あたり0.54ドル」とあり、年明け以降の価格は公式の資料には書かれていない。",
      "精度については、第三者の評価サイト Artificial Analysis の音声認識（ストリーミング）部門が数値を公開している。2026年10月1日時点の同サイトのデータでは、MAI-Transcribe-2-Streaming の単語誤り率の指標（AA-WER Streaming）は2.51%で、掲載モデルの中で最も低い。話し終わりから確定結果までの時間は約0.13秒、同サイトが載せる価格は1,000分あたり9ドル（1時間0.54ドルに相当）である。遅延も短い部類に入る（さらに短いモデルもある）一方、価格は表の上位に並ぶ他社モデルより高い。Microsoft のブログが引用する数値（2.50%、9月28日時点）とは日付の違いによる小さな差がある。",
      "MAI-Voice-2.1 は、対応を23言語・26ロケールに広げた音声合成モデルである。6月の MAI-Voice-2 は15言語だった。公式ブログは、1つの声のまま英語・中国語・ドイツ語と話す言語を切り替えても、話者が同じに聞こえ、各言語のネイティブのアクセントで話せる点を前面に出している。価格は100万文字あたり22ドルで、4月の MAI-Voice-1 と同じ水準である。",
      "注意したいのは日本語の扱いである。Microsoft Learn の MAI-Voice のページに載っているプリビルト音声の表には、チェコ語、ドイツ語、英語、スペイン語、フランス語、ヒンディー語、韓国語、中国語（簡体字）、タイ語、ベトナム語などが並ぶ一方、日本語（ja-JP）の音声は無い。聞き取り側の Transcribe-2-Streaming は日本語に対応するが、読み上げ側の Voice-2.1 は、公式ドキュメントの範囲では日本語の既製音声を提供していない。日本語の音声エージェントを両端 MAI で組む前提の場合、ここが最初の確認点になる。",
      "MAI-Voice-2.1-Flash は、同じ言語と話者の切り替えに対応したまま、量が多く遅延に敏感な用途に寄せた版である。公式ブログは「45秒の音声を、エンドツーエンドで150ミリ秒の遅延で生成できる」「同等のモデルより推論が55%速く、約60%安い」とし、価格を100万文字あたり15ドルとしている。比較対象の「同等のモデル」が何かはブログに書かれていない。Microsoft Learn の説明では、Flash は音声エージェントやコールセンターの自動応答向け、無印の 2.1 は長尺のナレーションやオーディオブック向けと役割が分かれている。",
      "音声の自然さについて、ブログは4,000人の聴取者によるチューリングテストで、50.3%が MAI-Voice の音声を人間の録音と同等以上に人間らしいと評価したとする。結果は 2.1 と 2.1-Flash を合わせたもので、試験の設計や聴取者の条件は公表されていない。これらの遅延・速度・自然さの数値は当事者の説明であり、独立した検証は確認できていない。",
      "両モデルとも、数秒の参照音声から声を複製する機能（ボイスクローン）を全対応言語で持つ。Microsoft Learn によると、この機能は申請制（gated）で、Azure の Custom Neural Voice の限定アクセス審査を通る必要があり、本人の音声による同意を登録してから使う。参照音声は5〜60秒が推奨されている。ブログは「誤用を防ぐ同意のガードレール」を組み込んだとしている。",
      "提供経路は、3モデルとも Microsoft Foundry、MAI Playground、Vercel、Azure Voice Live で、Voice-2.1 / 2.1-Flash は OpenRouter からも使える。LiveKit は「近日対応」とされている。MAI Playground には、3モデルを組み合わせた音声対話のデモ「Chatter」が置かれた。",
      "導入を検討する側が確認すべき点は、公式ブログより Microsoft Learn の方に多く書かれている。まず、Azure のドキュメントでは Transcribe-2-Streaming も Voice-2.1 / 2.1-Flash も公開プレビューで、SLA が無く、本番用途は推奨されていない。発表ブログにはこの区分が書かれていない。次に、Transcribe-2-Streaming の配信リージョンは限られており、Sweden Central と Central US が利用可能、East US 2 は近日対応で、残る1つは Realtime API のページでは South India、Speech SDK のページでは Southeast Asia と、ページによって記載が異なる。どのリージョンからも呼び出せて、これらのリージョンに転送される仕組みだが、日本のリージョンは配信元に含まれていない。音声データの処理場所に要件がある組織は、この点を契約前に確かめる必要がある。Voice-2.1 / 2.1-Flash は Japan East を含む14リージョンから配信される。",
      "実装面では、Transcribe-2-Streaming は OpenAI の Realtime API に近い WebSocket のプロトコルと、Azure Speech SDK の2通りで使える。Realtime API 側では1セッションの上限が1時間で、サーバー側の発話区間検出は無く、確定のタイミングはクライアントが commit で指示する。Speech SDK 側の結果には、検出した言語、信頼度、単語単位のタイムスタンプが含まれない。会議の議事録のように話者や単語の時刻が要る用途では、一括処理の MAI-Transcribe-2 と使い分けることになる。"
    ],
    "tables": [
      {
        "afterParagraph": 0,
        "caption": "今回発表された3モデル（公式ブログと Microsoft Learn の記載）",
        "headers": [
          "モデル",
          "種類",
          "言語",
          "価格（公式ブログ）",
          "Azure での区分"
        ],
        "rows": [
          [
            "MAI-Transcribe-2-Streaming",
            "ストリーミング音声認識",
            "60言語（日本語を含む）",
            "音声1時間 0.54ドル（年末までの導入価格）",
            "公開プレビュー"
          ],
          [
            "MAI-Voice-2.1",
            "音声合成（高品質・長尺向け）",
            "23言語・26ロケール（日本語の既製音声は無い）",
            "100万文字 22ドル",
            "公開プレビュー"
          ],
          [
            "MAI-Voice-2.1-Flash",
            "音声合成（低遅延・大量処理向け）",
            "同上",
            "100万文字 15ドル",
            "公開プレビュー"
          ]
        ]
      },
      {
        "afterParagraph": 4,
        "caption": "Artificial Analysis 音声認識（ストリーミング）部門の上位と主な他社モデル（2026年10月1日時点の同サイトのデータ）",
        "headers": [
          "モデル",
          "AA-WER Streaming（低いほど良い）",
          "話し終わりから確定まで",
          "価格（1,000分あたり）"
        ],
        "rows": [
          [
            "MAI-Transcribe-2-Streaming",
            "2.51%",
            "約0.13秒",
            "9ドル"
          ],
          [
            "Grok Voice Transcribe 2.0 (Streaming)",
            "2.73%",
            "約0.49秒",
            "3.33ドル"
          ],
          [
            "Muse Voice Transcribe",
            "3.06%",
            "約0.16秒",
            "3ドル"
          ],
          [
            "ElevenLabs Scribe v2 Realtime",
            "3.59%",
            "約0.14秒",
            "6.5ドル"
          ],
          [
            "GPT Live Transcribe",
            "3.92%",
            "約0.81秒",
            "17ドル"
          ]
        ]
      },
      {
        "afterParagraph": 11,
        "caption": "MAI-Transcribe-2-Streaming の配信リージョン（Microsoft Learn、2026年10月1日更新のページ）",
        "headers": [
          "リージョン",
          "Realtime API のページ",
          "Speech SDK のページ"
        ],
        "rows": [
          [
            "Sweden Central",
            "利用可能",
            "利用可能"
          ],
          [
            "Central US",
            "利用可能",
            "利用可能"
          ],
          [
            "East US 2",
            "近日対応",
            "近日対応"
          ],
          [
            "South India",
            "利用可能",
            "記載なし"
          ],
          [
            "Southeast Asia",
            "記載なし",
            "利用可能"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Our first streaming transcription model debuts at no. 1 on Artificial Analysis",
        "site": "Microsoft AI",
        "url": "https://microsoft.ai/news/our-first-streaming-transcription-model/"
      },
      {
        "title": "MAI-Transcribe-2-Streaming overview",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/mai-transcribe-2-streaming"
      },
      {
        "title": "Use MAI-Transcribe-2-Streaming with the Realtime API",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/mai-transcribe-2-streaming-realtime"
      },
      {
        "title": "Use MAI-Transcribe-2-Streaming with Azure Speech SDK",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/mai-transcribe-2-streaming-speech-sdk"
      },
      {
        "title": "MAI-Voice in Azure Speech",
        "site": "Microsoft Learn",
        "url": "https://learn.microsoft.com/en-us/azure/ai-services/speech-service/mai-voices"
      },
      {
        "title": "Speech to Text Providers Leaderboard (Streaming)",
        "site": "Artificial Analysis",
        "url": "https://artificialanalysis.ai/speech-to-text/streaming"
      },
      {
        "title": "MAI-Transcribe-2 is the fastest, most accurate and cheapest speech recognition model in the world",
        "site": "Microsoft AI",
        "url": "https://microsoft.ai/news/mai-transcribe-2-is-the-fastest-most-accurate-and-cheapest-speech-recognition-model-in-the-world/"
      },
      {
        "title": "MAI-Voice-2",
        "site": "Microsoft AI",
        "url": "https://microsoft.ai/news/mai-voice-2/"
      },
      {
        "title": "Today we're announcing 3 new world class MAI models, available in Foundry",
        "site": "Microsoft AI",
        "url": "https://microsoft.ai/news/today-were-announcing-3-new-world-class-mai-models-available-in-foundry/"
      }
    ]
  },
  "ibm-bob-self-hosted-ga-2026": {
    "body": [
      "IBM は2026年9月30日、AI開発パートナー「IBM Bob」のセルフホスト版の一般提供（GA）を発表した（IBM の製品発表ページ。IBM ニュースルームのプレスリリースは10月1日付である）。IBM Bob は、計画・実装・テスト・モダナイゼーションまでソフトウェア開発の工程全体を支援するエージェント型の開発ツールで、2026年4月28日に SaaS として世界で一般提供が始まっている。今回の発表は、その実行基盤を顧客自身が管理する環境に置けるようにするものである。",
      "IBM が挙げる狙いは、機密性の高いコードや基幹システムを AI の開発支援の対象に入れることにある。発表は、セキュリティやデータ主権、運用上の要件によって、ソースコード・アプリケーションの文脈・ビルド成果物を承認された環境の外に出せない組織があり、その結果として重要なアプリケーションが AI を使った開発の流れから外れてしまう、と説明している。想定する業種として、金融、政府、医療、重要インフラを挙げている。",
      "公式ドキュメントによると、セルフホスト版は Red Hat OpenShift Container Platform（OCP）上に構築する。顧客はバックエンドの基盤・サービス・連携を自分の環境で管理し、開発者は SaaS 版と同じ IDE 拡張と CLI の BobShell をそのまま使う。導入は Bob の Kubernetes Operator と Helm チャートで行い、専用クラスタは必須ではなく、ほかのワークロードと同じクラスタに同居できる。",
      "発表が GA 時点で使えるとしているのは、IDE での利用、BobShell、並列ツール呼び出し、エージェントハーネス、スキルとモードといった中核機能である。Java モダナイゼーション、IBM i、IBM Z 向けの有償の追加パッケージ（Premium Package）も、ライセンスと導入要件を満たせばセルフホスト版に追加できる。",
      "モデルの置き場所は3通りから選ぶ。自社の基盤にモデルを入れるセルフホスト、ネットワークを外部から切り離したエアギャップ、外部のモデルサービスに承認済みの経路でつなぐハイブリッドである。IBM は、自社内でモデルを動かす構成なら、コード・開発の文脈・ビルド成果物を顧客が管理する環境の中に留められるとしている。逆に言えば、外部のモデルサービスにつなぐ構成では、推論がその外部サービスで行われる。どこで推論が行われ、コードがどう処理されるかは、選んだモデルと構成で決まる、と発表自体が書いている。",
      "GA 時点では、モデルは顧客が自分で用意する。IBM がモデルを提供するのではなく、対応表に載ったモデルを顧客が調達して Bob に接続する形である。既に持っているモデルのライセンスを持ち込む BYOL（Bring Your Own License）にも対応する。対応モデルは次のとおり。",
      "発表と公式ドキュメントで、自社運用モデルの記載が1点食い違う。発表は NVIDIA Nemotron と Poolside Laguna の2つを挙げているが、ドキュメントの「Required and supported models」のページはそれに Mistral 3.5 を加えた3つを載せている。導入を検討する場合は、IBM に最新の対応表を確認したい。",
      "対応表に載っている外部モデルは、Claude Sonnet 5、Claude Opus 4.8、GPT-5.6 Sol、Gemini 3.7 Flash である。当サイトで扱った後継世代の [Claude Sonnet 5.5](?a=claude-sonnet-5-5-review)、[Claude Opus 5.5](?a=claude-opus-5-5-review)、[GPT-6](?a=gpt-6-review)、[Gemini 3.8 Flash](?a=gemini-3-8-flash-review) は、2026年10月1日に確認した対応表には載っていない。今後の対応予定は公式の資料には書かれていない。",
      "SaaS 版との違いで、導入担当者が先に知っておくべき点がいくつかある。1つ目はモデルの切り替えである。4月の SaaS 版の発表は、作業ごとに適したモデルへ自動で振り分ける「マルチモデル・オーケストレーション」を中核の機能として打ち出していた。一方、セルフホスト版のドキュメントは、コア推論モデルは一度に1つだけを設定でき、複数を同時に動かすことはできないと明記している。IBM は今後の版でマルチモデルのルーティングを導入する計画だとしているが、時期は示していない。発表には、将来の計画は予告なく変更・撤回されうるという IBM の但し書きが付いている。",
      "2つ目は運用の責任分担である。ドキュメントの比較表では、SaaS 版は基盤・更新・拡張・可用性を IBM が担うのに対し、セルフホスト版はこれらを顧客が担う。セキュリティイベントのログと監視も Bob ではなく OpenShift の基盤側の機能で、その設定・運用・保管は顧客の責任とされている。",
      "3つ目は現行版の既知の制限である。公式ドキュメントの「Known limitations」は、管理画面に操作ログ（Activity Logs）が無いこと、版を上げる際のインプレース更新に対応しておらず新規インストールが推奨されること（ホットフィックスは同じインスタンスへの再インストールで適用）、SaaS 版の分析機能 Bobalytics が使えないことを挙げている。エアギャップ環境では、Bobalytics へのリンクが到達できないページを指すとも書かれている。",
      "安全面では、入出力を検査するガードレール用のモデルを置くことが強く推奨されている。エアギャップ環境では openai/gpt-oss-20b を使い、クラウドのモデルを使う場合は AWS Bedrock・Google Vertex AI・Azure OpenAI 側のガードレール機能で代えられる。Bob 自身はモデルの配信基盤を用意しないため、vLLM や Red Hat OpenShift AI などで、OpenShift のクラスタから到達できる OpenAI 互換の API を別途用意する必要がある。",
      "必要な資源も公表されている。システム要件のページでは、追加パッケージなしの最小構成（Bob Core）の本番向けの目安として、余裕込みで約36.5 vCPU・約53.4 GiB のメモリ・約50 GiB のストレージを示し、x86_64（amd64）の OCP 4.20〜4.22 に対応するとしている。IBM Z 向けの解析機能を加える構成は、ベンチマークがまだ進行中で、値は暫定とされている。これらは IBM の示す目安であり、独立した検証は確認できていない。",
      "料金について、公開の料金ページは Pro（1インスタンスあたり20ドルから、月額または年額）、Pro+、Ultra の価格を載せているが、セルフホスト版を含む Enterprise の導入形態は「Contact sales」（営業に問い合わせ）となっており、価格は公表されていない。",
      "なお、4月の SaaS 版の発表で IBM は、社員8万人以上が Bob を使い、調査に回答した利用者が平均45%の生産性向上を報告したとしている。これは IBM 自身の社内調査に基づく当事者の説明で、独立した検証は確認できていない。セルフホスト版での効果を示す数字は、今回の発表には含まれていない。"
    ],
    "tables": [
      {
        "afterParagraph": 5,
        "caption": "IBM Bob セルフホスト版の対応モデル（2026年9月30日の発表と公式ドキュメント）",
        "headers": [
          "区分",
          "モデルの置き場所",
          "対応モデル"
        ],
        "rows": [
          [
            "自社運用（エアギャップ可）",
            "顧客が自社の基盤に導入・管理",
            "NVIDIA Nemotron（ドキュメントでは Nemotron 3）、Poolside Laguna（同 Laguna S2.1）。ドキュメントのみ Mistral 3.5 も掲載"
          ],
          [
            "ハイブリッド／プライベート SaaS",
            "外部のモデルサービスに承認済みの経路で接続（AWS Bedrock、Google Vertex AI、Azure OpenAI 等）",
            "Claude Sonnet 5、Claude Opus 4.8、Gemini 3.7 Flash、GPT-5.6 Sol"
          ],
          [
            "ガードレール（推奨）",
            "エアギャップでは自社運用",
            "openai/gpt-oss-20b（クラウド利用時は各社のガードレール機能で代替可）"
          ]
        ]
      },
      {
        "afterParagraph": 10,
        "caption": "SaaS 版とセルフホスト版の違い（公式ドキュメントより）",
        "headers": [
          "項目",
          "SaaS 版",
          "セルフホスト版"
        ],
        "rows": [
          [
            "基盤",
            "IBM が運用・管理",
            "顧客の OpenShift クラスタで顧客が管理"
          ],
          [
            "更新・拡張・可用性",
            "IBM が担う",
            "顧客が担う（インプレース更新は現行版で非対応）"
          ],
          [
            "データの所在",
            "IBM が管理する地域",
            "顧客の環境の中で管理"
          ],
          [
            "モデル",
            "作業ごとに複数モデルへ振り分け（4月の発表）",
            "コア推論モデルは同時に1つ。ルーティングは今後の計画"
          ],
          [
            "Bobalytics",
            "利用可",
            "利用不可"
          ],
          [
            "開発者の道具",
            "IDE 拡張と BobShell",
            "同じ IDE 拡張と BobShell"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "IBM Bob expands to self-hosted environments for sensitive and mission-critical enterprise software",
        "site": "IBM",
        "url": "https://www.ibm.com/new/announcements/ibm-bob-expands-to-self-hosted-environments-for-sensitive-and-mission-critical-enterprise-software"
      },
      {
        "title": "IBM Bob Docs: Self-hosted Overview",
        "site": "IBM Bob",
        "url": "https://bob.ibm.com/docs/ide/enterprise/on-premises/overview"
      },
      {
        "title": "IBM Bob Docs: Required and supported models",
        "site": "IBM Bob",
        "url": "https://bob.ibm.com/docs/ide/enterprise/on-premises/model-gateway/supported-models"
      },
      {
        "title": "IBM Bob Docs: System requirements",
        "site": "IBM Bob",
        "url": "https://bob.ibm.com/docs/ide/enterprise/on-premises/system-requirements"
      },
      {
        "title": "IBM Bob Docs: Known limitations",
        "site": "IBM Bob",
        "url": "https://bob.ibm.com/docs/ide/enterprise/on-premises/known-limitations"
      },
      {
        "title": "IBM Bob Enterprise Pricing",
        "site": "IBM",
        "url": "https://www.ibm.com/products/ai-coding-agent/pricing"
      },
      {
        "title": "Introducing IBM Bob: AI Development Partner that Takes Enterprises from AI-Assisted Coding to Production-Ready Software",
        "site": "IBM Newsroom",
        "url": "https://newsroom.ibm.com/2026-04-28-introducing-ibm-bob-ai-development-partner-that-takes-enterprises-from-ai-assisted-coding-to-production-ready-software"
      }
    ]
  },
  "servicenow-flow-ai-service-desk-2026": {
    "body": [
      "ServiceNow は2026年10月1日（米国時間）、会話型の AI サービスデスク「Flow by ServiceNow」を発表した。プレスリリースは Flow を「ServiceNow 社内のスタートアップ」と位置づけ、ITSM（IT サービス管理）を AI 時代向けに導入し直すチームのための、AI ネイティブな会話型サービスデスクだと説明している。対象は小さなチームから大企業までとされる。",
      "仕組みの中心は、チャットの会話そのものを窓口にすることである。リリースによると、従業員は Slack や Microsoft Teams など、普段使っているチャットの中で依頼や質問を出し、Flow が答えを返す。ポータルやチケットシステムへ画面を切り替える必要がない、というのが ServiceNow の説明である。Flow は依頼に答えるだけでなく、対応を完了させるか、必要に応じて自動でエスカレーションするとしている。",
      "もう1つの特徴として挙げられているのが、繰り返しの依頼の自動化である。リリースは、パスワードのリセット、アクセス申請、規程に関する質問、インフラのプロビジョニングを例に挙げ、利用者が依頼を正しく解決したら、その手順をワンクリックで自動化に登録でき、次に同じ依頼が来たときは Flow が自動で処理すると書いている。ナレッジベースの記事は不要だとも述べている。",
      "導入の手軽さについて、ServiceNow は「即座に導入でき、1日で稼働する」「導入プロジェクトもインフラも不要」「従業員のトレーニングも不要」と説明している。これらは当事者の説明であり、導入にかかる期間や自動化の精度について、独立した検証は確認できていない。リリースには IDC のアナリストのコメントと4つの組織の利用者の声が載っているが、いずれも ServiceNow が自社の発表に掲載したものである。そのうち米海軍の FNMOC（艦隊数値気象海洋センター）のコメントは「Flow could help」と、効果を見込みとして述べている。",
      "購入の経路は2つある。新規の顧客は、既存の ServiceNow との契約やプラットフォームを前提とせずに Flow を直接購入して有効化できる。既存の顧客については、リリースは「AI-native SKU」の顧客が追加の調達費用なしに、消費量ベースの利用で Flow をすぐに導入できると書き、別の段落では、AI 機能を含む ServiceNow の料金プランの既存顧客にも提供すると書いている。本格的な ITSM を運用している組織が、特定の部門、リモートのチーム、買収した事業部門だけに Flow を使う形も想定されている。",
      "既存の仕組みとの関係について、リリースは Flow が既存のナレッジ、資産、チケット管理、AI の利用と統合でき、必要なときに監査とガバナンスのため ServiceNow AI Platform と結び付いていると説明している。ただし、どのナレッジ源やチケットシステムと接続できるのか、監査ログに何が残るのか、どの言語モデルを使うのか、データをどこで処理するのかといった具体的な仕様は、公式の資料には書かれていない。",
      "提供時期は次のとおりである。リリースによると、現在は限定提供（controlled availability）の段階で、関心のある人は letsflow.ai で登録すると、更新情報と無料トライアルの早期アクセスを受けられる。最初の数週間は北米の顧客を優先し、北米と EMEA の一般提供は2026年第4四半期の予定とされる。日本を含むアジア太平洋での提供時期、日本語への対応、新規顧客向けの料金は、公式の資料には書かれていない。リリースは、これらが将来の見通しに関する記述であり、実際の結果と異なりうるとも明記している。",
      "名前の似た既存機能にも注意したい。ServiceNow のプラットフォームには以前から「Flow Designer」という、承認・タスク・通知・レコード操作などの処理をノーコードで自動化する機能がある。今回の Flow はリリースで「新しい単体の製品」とされており、Flow Designer との関係はリリースには書かれていない。情報を探すときに混同しないようにしたい。",
      "Slack や Teams の会話の中で業務を処理する仕組みは、他社も出している。OpenAI の Enterprise 向け機能については[ChatGPT Enterprise の Slack・Teams 連携と管理者の設定項目](?a=chatgpt-enterprise-team-tasks-slack-teams-shared-connections-2026)で整理した。導入を検討する担当者は、一般提供の時点で、対応する地域と言語、新規顧客の料金、接続できるシステム、権限と監査の仕組みが公式に示されるかを確認するとよい。"
    ],
    "tables": [
      {
        "afterParagraph": 6,
        "caption": "Flow by ServiceNow の提供条件（2026年10月1日のプレスリリースより）",
        "headers": [
          "項目",
          "リリースの記載"
        ],
        "rows": [
          [
            "製品の位置づけ",
            "会話型の AI ネイティブなサービスデスク。新しい単体の製品"
          ],
          [
            "使う場所",
            "Slack や Microsoft Teams などのチャット"
          ],
          [
            "新規の顧客",
            "既存の ServiceNow 契約なしで直接購入・有効化できる"
          ],
          [
            "既存の顧客",
            "AI-native SKU の顧客は追加の調達費用なし、消費量ベースの利用。AI 機能を含む料金プランの顧客にも提供"
          ],
          [
            "現在の段階",
            "限定提供。letsflow.ai で登録すると無料トライアルの早期アクセス"
          ],
          [
            "一般提供",
            "北米と EMEA で2026年第4四半期の予定（最初の数週間は北米を優先）"
          ],
          [
            "日本・新規顧客の料金",
            "公式の資料には書かれていない"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Introducing Flow by ServiceNow: a new AI-native service desk that deploys instantly",
        "site": "ServiceNow Newsroom",
        "url": "https://newsroom.servicenow.com/press-releases/details/2026/Introducing-Flow-by-ServiceNow-a-new-AI-service-desk-that-deploys-instantly/default.aspx"
      },
      {
        "title": "Flow Designer",
        "site": "ServiceNow Docs",
        "url": "https://www.servicenow.com/docs/r/xanadu/application-development/flow-designer.html"
      }
    ]
  },
  "optical-memory-volantis-funding-2026": {
    "body": [
      "米サンフランシスコの半導体スタートアップ Volantis は2026年10月1日、PR Newswire を通じて8,800万ドルのシリーズAを発表した。円換算では約138億円（為替により変動）にあたる。同社の公式サイトにも、CEO で共同創業者の Tapa Ghosh 氏の名前で同じ調達を伝える投稿があり、こちらの日付は9月29日になっている。",
      "発表によると、ラウンドは投資家の Lachy Groom 氏と Abstract Ventures が共同で主導し、John Doerr 氏、VXI Capital、Triatomic、Susa Ventures が参加した。エンジェル投資家として Dwarkesh Patel 氏、Naveen Rao 氏、Sholto Douglas 氏も加わったとしている。公式サイトの投稿は、これまでの累計調達額を9,700万ドルとし、出資者として Sam Altman 氏、Jeff Dean 氏、Dylan Patel 氏、John Doerr 氏らの名前を挙げている。調達額・投資家の構成は、いずれも当事者の発表による。英語圏の報道も同じリリースを引いたもので、調達額と主導投資家を独立して確認した報道や届出は見つかっていない。累計の出資者に挙がる人物は、このシリーズAの参加者とは別に書かれている。",
      "同社が取り組むのは、AI 推論でいう「メモリの壁」である。大きなモデルを速く動かすには、モデルを載せておく大きなメモリ容量と、演算器へデータを送り続ける広い帯域幅の両方が要る。発表は、チップ内の SRAM は帯域幅が広い一方で容量が小さく、HBM を使う GPU などは容量が大きいものの帯域幅が速度を制約し、新しい3次元 DRAM でも同じトレードオフの上にある、と説明している。",
      "その解決策として同社が掲げるのが、演算チップとメモリをつなぐことに特化した光インターコネクトである。同社が「光ファブリック」と呼ぶ構成で多数のメモリチップを1つのプールとしてつなぎ、メモリを足すほど帯域幅も積み上がるようにする。これにより、より安価なチップ外のメモリを使いながら、容量と帯域幅を同時に増やせるとしている。",
      "技術面では、外付けのレーザーではなく独自の micro-VCSEL（面発光レーザー）を使い、既存のガリウムヒ素系 VCSEL のサプライチェーンを活用することで、インジウムリン系の供給制約を避けるとしている。発表は、リンク全体の消費電力を1ビットあたり1ピコジュール未満と説明している。公式サイトの投稿は、従来の光ファイバーも使わない構成にしたと書いている。発表は、データセンター内の光通信はこれまで主にチップ間の接続に使われてきたが、チップとメモリの接続ではより短い距離で100倍以上のデータを運ぶ必要があり、エネルギーとコストの要件が異なる、と位置づけている。追加の技術は A-1 の商用化に合わせて公開するとしている。",
      "最初の製品となる推論システム A-1 は、20兆パラメータを超えるモデルをユーザー1人あたり毎秒最大1万トークンで動かし、トークンあたりの推論コストも下げることを目指して「設計中」とされている。メモリ容量と帯域幅は、ともに約2桁（100倍近く）引き上げる計画だという。これらはいずれも設計目標であり、実機の測定値や第三者による評価は、公式の資料には書かれていない。",
      "数字の言い回しは、同社自身の資料の間でも一致していない。下の表は、確認できた3つの公式資料での記述を並べたものである。どの数字が A-1 の最終的な仕様になるのかは、公式の資料からは判断できない。",
      "創業チームについて発表は、NVIDIA、AMD、Broadcom、Ayar Labs の出身者で構成され、初の CoWoS 製品、初の量産された波長可変 VCSEL、初期のシリコンフォトニクスによる CPO（Co-Packaged Optics）システムなどに携わってきたと説明している。Ghosh 氏は発表の中で「AI エージェントが担う仕事が増えるほど、その仕事を終える速さが企業の動く速さを左右するようになる」と述べ、最大級のモデルを動かすことと速く動かすことのトレードオフをなくすために会社を始めたとしている。",
      "同社は、推論が速くなる効果の例として、コーディングエージェントの作業が30分から2分に縮まれば、開発者は試行やリリースをより多く回せると説明している（公式サイトの投稿では「30分ではなく30秒」という例になっている）。調達資金は A-1 と光メモリ技術の開発・商用化、エンジニアチームの拡大、顧客への導入準備に充て、2027年に最初の統合推論エンジンを顧客に届ける予定としている。",
      "読者が確認しておきたい点は次のとおりである。第一に、性能・消費電力・容量の数字はすべて当事者の説明であり、独立した検証は確認できていない。第二に、出荷は2027年の予定で、提供形態（システム販売か、クラウド経由の提供か）、価格、対応するモデルやソフトウェアスタックは、公式の資料には書かれていない。第三に、どのメモリ（DRAM の種類など）をプールに使うのかも、公式の資料からは読み取れない。導入を検討する場合は、これらが公表されてから判断材料にするのが現実的である。"
    ],
    "tables": [
      {
        "afterParagraph": 6,
        "caption": "Volantis の公式資料ごとの記述（いずれも当事者の説明・設計目標）",
        "headers": [
          "項目",
          "PR Newswire の発表（2026-10-01）",
          "公式サイトの投稿（2026-09-29）",
          "公式サイトのトップページ"
        ],
        "rows": [
          [
            "対応するモデルの規模",
            "20兆パラメータ超",
            "10兆パラメータ超",
            "10兆パラメータ超"
          ],
          [
            "速度",
            "ユーザーあたり毎秒最大1万トークン",
            "ユーザーあたり毎秒最大1万トークン",
            "ユーザーあたり毎秒1万トークン"
          ],
          [
            "容量・帯域幅の引き上げ幅",
            "ともに約2桁（nearly two orders of magnitude）",
            "ともに1桁超（over an order of magnitude）",
            "帯域幅30倍超、メモリプール50倍超"
          ],
          [
            "コーディングエージェントの例",
            "30分 → 2分",
            "30分 → 30秒",
            "記載なし"
          ],
          [
            "累計調達額",
            "記載なし",
            "9,700万ドル",
            "記載なし"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Volantis Raises $88M Series A to Demolish the AI Memory Wall With Photonics",
        "site": "PR Newswire（Volantis の発表）",
        "url": "https://www.prnewswire.com/news-releases/volantis-raises-88m-series-a-to-demolish-the-ai-memory-wall-with-photonics-302895940.html"
      },
      {
        "title": "Our $88M Series A: Demolishing the Memory Wall With Photonics",
        "site": "Volantis 公式サイト",
        "url": "https://volantissemi.ai/news-insights/our-88m-series-a-demolishing-the-memory-wall-with-photonics-post"
      },
      {
        "title": "Volantis | Photonic AI Infrastructure for 10T+ Model Inference",
        "site": "Volantis 公式サイト",
        "url": "https://volantissemi.ai/"
      }
    ]
  },
  "claude-code-2-1-287-mods-you-should-know-2026": {
    "body": [
      "Anthropic の Claude Code リポジトリの CHANGELOG によると、v2.1.287 は「Claude Mods」を追加した。記載は「プラグインがより深い挙動を変更できるようになった」の1行で、何を変更できるのかの詳細は、今回確認した CHANGELOG には書かれていない。この記事は CHANGELOG の記載をもとに、自分の版にその機能があるかを判断できるよう整理する。GitHub のリリース一覧では v2.1.287 が10月1日付、v2.1.286 が9月30日付で並んでいる。",
      "最初の同梱 mod が「You should know」である。CHANGELOG は「副エージェントが見張り役となり、あなたや Claude が見落としているかもしれない点を指摘する」と説明している。有効化するコマンドは /plugin enable cc-plugin-you-should-know@builtin で、対象は「テレメトリが有効な first-party セッション」とされている。つまりテレメトリを切っている環境や、サードパーティのプロバイダー経由では、この記載の範囲に入らない。実際の指摘の質や消費トークンについては、今回確認した文書に記載がなく、確認できていない。",
      "v2.1.287 のその他の追加は次のとおりである。agents ビューに n:<text> フィルタが入り、セッション名とタスクに一致させられる。OpenTelemetry の user_prompt イベントに prompt_text が加わった。これは prompt のコピーで、ドット区切りのキーを入れ子にするバックエンド向けである。CHANGELOG は、prompt を落とす・マスクする場所では prompt_text も同じ扱いにするよう注記している。",
      "MCP まわりでは、2025-11-25 プロトコルの MCP サーバーからの URL プロンプト（サインインなど）に対応した。この更新後にサーバーに接続できなくなった場合は、その MCP 設定項目に bareElicitationCapability: true を追加するよう CHANGELOG が書いている。また、MCP サーバーの alwaysLoad: false の意味が変わり、そのサーバーの全ツールをツール検索の背後に遅延させるようになった。",
      "既定値の変更もある。Opus 4.7 以降と Fable は、Bedrock、Vertex、Foundry、Claude apps gateway で、[1m] の接尾辞なしに既定で 1M コンテキストウィンドウを使う（CLAUDE_CODE_DISABLE_1M_CONTEXT=1 で 200K を維持できる）。Bash の許可ルールや許可フックは、Claude Code のファイルツールが拒否するファイルへのシェル書き込み（Anthropic のプロファイルストア、ホストの資格情報ファイル）に対して、実行ではなく確認を出すようになった。待機中の権限プロンプトは古い順に表示され、新しいプロンプトが読んでいるものを覆わなくなった。ただしカウントダウン付きのものは従来どおり上に開く。",
      "安全面の修正として、ルートやホームディレクトリへの危険な rm が、同じコマンドで ~ やワイルドカードへの出力リダイレクトも伴うと、常に確認するという保護が外れていた問題が直った。組織のツール別権限の上限が、__proto__ という名前の MCP ツールで黙って落ちていた問題も修正されている。モデルまわりでは、/model で Fable を選ぶと現行版の ID が保存されていた問題が直り、保存される既定が Opus や Sonnet と同様に最新の Fable に追従するようになった。",
      "v2.1.286 は前日の版で、権限リクエストが複数たまったときに「2 of 5」のような件数が出るようになった。Anthropic の API が、既定やエイリアスが解決するモデルを拒否した場合は、同じ階層の前のモデルで1回だけ再試行する。失敗した API リクエストの再試行は、1回のモデル呼び出しにつき1つの上限が全体にかかり、既定の設定では、失敗する呼び出しが送るリクエストは最大14回になった。--bare は、コマンドラインで指定した MCP サーバーだけに接続し、モデルにシステムリマインダーを送らず、バックグラウンドのタスクも始めないようになった。これらは既定や挙動の変更なので、該当する使い方をしている場合は確認したい。",
      "v2.1.286 には、リモートと秘密情報のマスクに関する修正も多い。組織のポリシーで Remote Control が無効になったあともつながり続けていたセッション（claude remote-control を含む）は、通知つきで切断されるようになった。MCP のエラーメッセージで、Bearer や Basic が鍵名の前に付いた資格情報の値が見えていた問題と、パーセントエンコードされた Bearer トークンが一部しかマスクされなかった問題が直った。ログやトランスクリプトでは、鍵名に見えない文字（ゼロ幅スペースなど）を含む秘密と、句読点などを含む URL パスワードの一部が見えていた問題も直っている。",
      "プラグインについては、v2.1.286 で、プラグインのインストールが、git リポジトリやフォルダである npm ソースを拒否し、依存パッケージをレジストリのものからだけ入れるようになった。claude.ai で有効にしたプラグインが、一時的なサーバーエラーの後に Claude Code から消えることがある問題も直り、マーケットプレイスの読み込み拒否のエラーは、理由と直し方を示すようになった。Mods もプラグインの仕組みに関わる変更だが、この2つの版のプラグイン関連の変更との関係は、CHANGELOG には書かれていない。",
      "なお、この記事の内容はすべて公式 CHANGELOG の記載に基づく。実際の挙動は検証しておらず、Mods の詳細仕様（何を変更できるか、どう書くか）を説明する公式ドキュメントは、今回の調査では確認できていない。"
    ],
    "primarySources": [
      {
        "title": "Claude Code CHANGELOG（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      },
      {
        "title": "Claude Code リリース一覧（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/releases"
      }
    ]
  },
  "codex-cli-0-160-release-notes-2026": {
    "body": [
      "OpenAI の Codex リポジトリのリリースノートによると、Codex CLI 0.160.0 は2026年10月1日（UTC。日本時間では10月2日の早朝）に公開された。この記事は公式のリリースノートをもとに、自分の版にその機能があるかを判断できるよう整理する。PR 番号はリリースノートの表記のままである。前回の 0.159 系については別記事で扱っている。",
      "新機能は4点ある。第一に、エージェントのコマンドセンターで、古いタスクをキーボード操作で辿れる「Show more」が入った（#49106）。第二に、Linux の X11 ターミナルのローカル環境で、フルスクリーンモードのトランスクリプトを選択し、中クリックで貼り付けられる（#49112）。第三に、ポリシーが許す場合に、プロジェクトの外でワークスペース既定の設定でセッションを開始でき、再開時には保存済みの権限が復元される（#49160）。",
      "第四が、opt-in の Guardian レビューの拡張である。過去のユーザー指示を取得できるようになり、エージェントの引き継ぎ（handoff）から文脈を取り込める（#49036、#49057）。opt-in なので、有効にしなければ従来のままである。Guardian が何を審査する仕組みかについての詳しい説明は、今回確認したリリースノートには書かれていない。",
      "バグ修正では、再接続後に未送信のキュー済みメッセージが、送信状態が不明なものの解決を待ってから再開し、二重送信を避けるようになった（#49105）。TUI はサーバーが返すプロバイダー、推論サマリー、verbosity の設定を保持し、再開とフォークの履歴に正しいセッションを表示する（#49144、#49161、#49171）。サブエージェントは、まだ起動中の環境を保持し、構成や準備の失敗を受け取る（#49075）。",
      "Windows では、サンドボックスの PowerShell フォールバックと長いパスの権限修復が直り、バックグラウンドのヘルパーが不要なコンソール窓を出さなくなった（#49019、#49058、#49098、#49164、#49386）。SQLite については、接続セットアップとログ書き込みで停止しないようにし、初期化エラーをタイムアウトとして隠さずに表示するようになった（#49032、#49102）。明示したプロバイダーのモデルカタログは、未対応の同梱モデルを含まず、更新に失敗したときに古い項目を再利用しない（#49135）。",
      "ドキュメントでは、プロバイダーの資格情報が設定されたストレージバックエンドをどう使うか、env_key が API キーの環境変数をどう指すかが明確化された（#49118）。保守面では、解析済みマニフェストのキャッシュとリモートプラグイン要求の HTTP 接続の再利用でプラグイン読み込みの重複作業を減らし（#49099、#49100）、使われていないログデータベースの領域をバックグラウンドで回収するようになった（#49069）。",
      "同じ日（UTC）に 0.161.0 のアルファ版の続きと 0.162.0 のアルファ版も公開されているが、この記事の対象は安定版の 0.160.0 のみである。内容はリリースノートの記載に基づき、実際の挙動は検証していない。"
    ],
    "primarySources": [
      {
        "title": "Codex CLI 0.160.0 リリースノート（openai/codex）",
        "url": "https://github.com/openai/codex/releases/tag/rust-v0.160.0"
      },
      {
        "title": "Codex リリース一覧（openai/codex）",
        "url": "https://github.com/openai/codex/releases"
      }
    ]
  },
  "claude-code-2-1-288-resume-fixes-code-review-max-findings-2026": {
    "body": [
      "Anthropic の Claude Code リポジトリの CHANGELOG の先頭に v2.1.288 が加わった。npm レジストリの公開記録では、@anthropic-ai/claude-code 2.1.288 の公開時刻は 2026年10月2日 18:30 UTC（日本時間では10月3日の早朝）で、前日の 2.1.287 は10月1日 16:59 UTC である。この記事の事実は CHANGELOG と npm の公開記録だけに基づき、実際の挙動は検証していない。",
      "最初に、会話の再開と自動圧縮に関する修正が目立つ。CHANGELOG には次の記載がある。(1) 最後の返信がトークン使用量ゼロと報告されると、長い会話が自動圧縮されずに「Prompt is too long」で失敗していた問題を修正。(2) --resume が、直前の圧縮で復元されたファイルなどの文脈を落とすことがあった問題を修正。(3) 再開したセッションがターン最後の応答を保存せず、次の --resume でプロンプトが未回答に見えることがあった問題を修正。(4) 同じセッションが読み込み中にファイルを書き直すと、途中で切れたトランスクリプトを読み込むことがあった問題を修正。(5) 2.1.286 以前で始めた会話を再開すると、モデルのそれまでの思考が落ちていた問題を修正。長いセッションを再開して使う場合、自分の版にこれらが入っているかは確認の材料になる。",
      "API のタイムアウトに関する修正もある。応答の途中で API がタイムアウトすると、そのターンが失敗していた。非対話セッションとサブエージェントは、途中までの応答から続行するようになり、思考だけの応答は再試行される。無人運用向けの CLAUDE_CODE_RETRY_WATCHDOG を使うセッションでは、非常に長い応答のストリームが失敗したあと数時間再試行し続けていた問題が直り、再びストリームを試み、3回タイムアウトしたら諦める挙動になった。",
      "追加された機能は次のとおりである。/code-review に --max-findings <n>|all が入り、通常の上限より多く、または少ない指摘を報告させられる。選択は --max-findings default を渡すまで再利用される。Ctrl+C で消したプロンプトは、空のプロンプトで ↑ を押すと、貼り付けたテキストや画像を含めて下書きが戻る。MCP サーバーがツール呼び出しの途中で追加の OAuth スコープを求めた場合は、再認証のプロンプトが出る。agents ビューでは、Ctrl+F でセッション名を検索でき、Alt+↑/↓ でグループ間を移動できる。これらとリネームは keybindings.json で割り当てを変えられる。スクリーンリーダーモードでは、プランを承認したときに新しい権限モードが読み上げられる（Shift+Tab を含む）。",
      "クラウドセッションには、GitHub CLI が入っていないイメージ向けに組み込みの gh api が加わった。同時に、この組み込みが、ファイル名・jq フィルタ・GitHub のエラーに含まれる制御文字をそのままターミナルへ送っていた問題が直っている。mods 向けには $.ui.selection() が加わり、全画面モードで最後に選択したテキストを返す。選択が1つのトランスクリプト行に収まる場合は、その行も返る。前日の 2.1.287 で入った Mods の詳細は、当サイトの別記事で整理している。",
      "プロバイダーまわりでは、Mantle やゲートウェイ越しの環境で、構造化出力を拒否されるとセッションタイトル・メモリ呼び出し・プロンプトフックが失敗していた問題が直り、構造化出力を切る環境変数 CLAUDE_CODE_DISABLE_STRUCTURED_OUTPUTS が追加された。Bedrock と Mantle の自動モードが、古いモデルへのリクエスト（WebFetch の要約や sonnet のサブエージェントなど）の後、残りのセッションでローカル分類器に切り替わってしまう問題も修正されている。Bedrock の資格情報の確認中に Stop を押すと、リクエストを終えずにフォールバックのモデルへ移ることがあった問題も直った。",
      "権限とサンドボックスの修正は次のとおりである。自動モードの拒否が、止められたツールが Bash でないのに Bash の許可ルールを案内していた問題を修正した。サンドボックスの自動許可では、引用符なしの区切り文字を使うヒアドキュメント（python3 <<EOF など）が、本文が単純なテキストと単純な $VAR の参照だけでも毎回承認を求めていたが、これが解消された。一方、BASHPID への代入は、シェルが値を算術式として評価しうるため、黙って許可せず確認を出すようになった。",
      "プラグインでは、${user_config.*} や ${CLAUDE_PLUGIN_ROOT} のプレースホルダーが、LSP サーバーの initializationOptions と settings に文字列のまま渡されていた問題が直った。ワークツリーで動くサブエージェントで、プラグインの tool.call フックが Bash を失敗させ、ファイル検索が別のフォルダを読む問題も修正されている。古い git（2.39 より前。CHANGELOG は Ubuntu 22.04 の 2.34 を例に挙げている）では、git-subdir 形式のプラグインのインストールが失敗するか、不完全なまま保存されていたが、これも直った。--plugin-dir で読み込んだプラグインが /plugin に「Configure options」を出さない問題、プラグインの再読み込みや無効化の際にバックグラウンドセッションが終了する問題も、修正の対象に含まれる。",
      "ログインと可観測性の修正もある。/login が、資格情報を安全なストレージに保存できなかったのに「Login successful」と表示していた問題が直り、失敗が表示され、新しいログインが反映されなかった場合は再試行が提案される（CHANGELOG は anthropics/claude-code#73861 を参照している）。OpenTelemetry の claude_code.tool.blocked_on_user スパンが、-p と SDK のセッションや PreToolUse フックの承認で、承認元と判断を unknown と報告していた問題が直り、-p や中断されたターンで回答なしに終わった権限の確認が tool_decision イベントを出さない問題も修正されている。別のセッションに送ったメッセージが、相手が保留していたのに「届いた」と報告される問題は、届かなかったことと相手のセッション名が表示されるようになった。",
      "Cowork のクラウドセッションにも修正がある。WebFetch の権限プロンプトに5分間答えないと「入力待ち」のままになる問題、/compact の前に送ったメッセージの Edit と Retry が、履歴が保存されていても拒否される問題、別のデバイスで始めたセッションに参加した携帯でプロンプトの提案が出ない問題、新しく選んだモデルで再起動したセッションが、サーバーに拒否されたあともそのモデルとして返信する問題である。なお、この記事で扱うのは CHANGELOG の記載であり、各修正が実際に直っているかの検証は行っていない。Mods の公式な詳細仕様の文書も、今回の調査では確認できていない。"
    ],
    "primarySources": [
      {
        "title": "Claude Code CHANGELOG（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリ、公開時刻の記録）",
        "url": "https://www.npmjs.com/package/@anthropic-ai/claude-code"
      }
    ]
  },
  "claude-code-2-1-289-290-291-deny-rules-regressions-2026": {
    "body": [
      "Anthropic の Claude Code リポジトリの CHANGELOG に、v2.1.289・v2.1.290・v2.1.291 が加わった。npm レジストリの公開記録では、@anthropic-ai/claude-code の 2.1.289 は 2026年10月3日 20:12 UTC、2.1.290 は 10月5日 18:12 UTC、2.1.291 は 10月6日 03:32 UTC である。直前の 2.1.288（10月2日 18:30 UTC）は当サイトの別記事で扱った。この記事の事実は CHANGELOG と npm の公開記録だけに基づき、各修正が実際に直っているかの検証は行っていない。",
      "最初に、権限ルールに関する修正を並べる。CHANGELOG には次の記載がある。2.1.289: (1) 複合シェルコマンドの入れ子の部分にある deny / ask ルールが、管理対象のマシンで、ユーザーがインストールした mod の承認の上でも保たれなかった問題を修正。(2) IDE で @ メンションされた、変更された、または選択されたファイルが、シンボリックリンク経由だと Read の deny ルールが適用されなかった問題を修正。(3) サンドボックスがコマンドを自動許可しているとき、展開される値を持つ環境変数の接頭辞の後ろにあるコマンド（例として TZ=\"$HOME\" rm -rf build が挙がっている）を、Bash の deny / ask ルールが見逃していた問題を修正。(4) 同じく自動許可の下で、コマンドの前に単独の変数代入があると deny / ask ルールが飛ばされる問題を修正。",
      "2.1.290 にも同じ系統の修正がある。プランモードで、サーバー側から ask ポリシーが押し込まれた読み取り専用でないコネクタのツールを、自動モードの分類器が承認できてしまう問題。プロジェクトの CLAUDE.md・ルール・AGENTS.md が作業ディレクトリの外へのシンボリックリンクである場合に、permissions.blockReadsOutsideWorkingDirectories や Read の deny ルールの下でも読み込まれる問題。URL の許可・拒否パターンのうち xn-- ホストラベル内にワイルドカードがあるものが、プロセスごとに異なる一致をする問題。disableClaudeAiConnectors と allowedMcpServers の URL ルールが、.mcp.json・プラグイン・エージェントで宣言された一部の MCP エントリに適用されない問題。@ メンションが、読み取りブロックまたは --restricted の下で、読み取り中に差し替えられたリンクを通じて作業ディレクトリ外のファイルを読める問題。画像の読み取りが、macOS と Windows で、読み取り中に差し替えられたリンクを通じて承認された範囲外のファイルを返しうる問題。これらはいずれも CHANGELOG に「Fixed」として書かれたものである。",
      "管理者向けの追加もある。2.1.290 では、管理対象の設定ファイルが管理設定フォルダの外のファイルへのリンクである場合に警告が出るようになり、/status と doctor には、管理設定がユーザー設定のサンドボックスの allowRead パスや許可ドメインを無視しているときの警告が加わった。mod のフック向けには、tool.check が読む質問と判定に、組織が要求する承認を示す ceiling が加わり、プラグインフックの tool.check イベントには agentId が加わった（サブエージェントの権限確認とメインセッションのものを区別できる）。ユーザーがインストールしたプラグインが、組織管理の MCP サーバーのサインイン用ツールの説明を書き換えられる問題（2.1.289）と、ユーザーがインストールした mod が組織のプラグインをアンロードさせうる問題（2.1.290）も直った。",
      "次に、退行の修正である。2.1.291 の CHANGELOG は2件だけで、(1) 2.1.290 で入った退行として、クラウドセッションが権限プロンプトへの回答を落とすことがあった問題と、(2) 2.1.288 で入った退行として、終了するときにセッションの最後のメッセージが失われることがあった問題を修正している。VS Code では、2.1.289 が 2.1.288 の claude auth status の変更（サインアウトが増えた可能性がある）を元に戻している。2.1.288 を入れている場合、その版固有のこの2件が該当しうる点は、自分の版を判断する材料になる。",
      "2.1.290 で追加された機能は次のとおりである。claude attach <name> と claude logs <name> は、セッション名の一部をIDの代わりに使える。/claude-api managed-agents-onboard <url> は、ページが説明する Managed Agents のパターンを ant apply 用のファイルとして用意し、/claude-api managed-agents-onboard <quickstart-name> は、deep-researcher などの Console のクイックスタートのテンプレートを ant CLI で組み立てる。Claude apps ゲートウェイのサインイン承認ページには、保留中のサインインを終わらせる Deny ボタンが加わった。2.1.289 では、チームメイト向けの agent.spawn、プラグインフックのイベント全体で共通になる1つの agent id、$.agent.list() に出る待機・待ち受け状態が加わっている。",
      "プラグインと mods の修正が件数としては最も多い。2.1.289 は、プラグインのペインが localhost アドレス・パスに @ を含むリンク・大文字のホスト・file: パスのリンクで何も描画しない問題、端末が知らない罫線スタイルの Box を描いたときに起動時にフリーズ／強制終了する問題、高さのないプラグイン領域が伸び続けるとセッションがインターフェースエラーで終わる問題、アップグレード後の最初のセッションでインストール済みの mod が読み込まれない問題などを直した。2.1.290 は、mod が描画する行が例外を出したときにエンジンが自前の行を描く挙動、失敗した mod の Client が周囲の描画を巻き込まず単独で失敗して ui.fault を上げる挙動、prompt.submit フックが next(e) を呼んだあとプロンプトを捨てた場合に黙って無視されず名前付きで失敗として報告される挙動を含む。mods は 2.1.287 で入った仕組みで、その詳細は当サイトの別記事にある。Mods の公式な詳細仕様の文書は、今回の調査では確認できていない。",
      "日常の使い方に近い修正は次のとおりである。2.1.290: 数百枚の画像を含む長いセッションが「Request rejected as unprocessable by the model」で止まる問題。出力コンテンツフィルターが思考中の返信を止めたときにターンが即座に終わっていた問題（今はエラーを出す前に1回再試行する）。WebFetch が 100,000 文字を超えるページ本文を黙って捨てていた問題（今は未読の量を表示し、offset で続きを読める）。会話の圧縮後に /loop や リマインダーが再開時に戻らない問題。応答が数千階層の入れ子の箇条書きや引用を含むときの「Maximum call stack size exceeded」によるクラッシュ。/rewind が、Claude の作業中に送ったプロンプトを一覧に出さない問題。2.1.289 では、短いコードブロックに閉じていない <script> タグが多数あるとき、または ${ の置換が深く入れ子になっているときに端末が固まる問題が直り、同じ原因で公開済みのアーティファクトのページがリーダーのブラウザタブを固まらせる／クラッシュさせる問題も直ったと書かれている。",
      "整理すると、3版のうち件数が多いのは権限ルールとプラグイン・mods まわりで、いずれも「ルールを設定しているのに、特定の書き方・経路では効かなかった」という種類の修正が含まれる。該当しうるのは、sandbox の自動許可を使う場合、シンボリックリンクを含むリポジトリや IDE 連携を使う場合、管理対象のマシンで mod を入れている場合である。ただし CHANGELOG には、各問題が実際に悪用された事例や影響範囲の記載はなく、この記事もそれを確認していない。自分の環境が該当するかは、使っている設定と版を見て判断する必要がある。最新版は 2.1.291 である。"
    ],
    "primarySources": [
      {
        "title": "Claude Code CHANGELOG（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリ、公開時刻の記録）",
        "url": "https://www.npmjs.com/package/@anthropic-ai/claude-code"
      }
    ]
  },
  "gemini-cli-0-63-release-notes-2026": {
    "body": [
      "Gemini CLI のリリースページ（google-gemini/gemini-cli、GitHub）によると、安定版の 0.63.0 は2026年10月6日に公開された。この記事は公式のリリースノートをもとに、自分の版にその機能があるかを判断できるよう整理する。内容はリリースノートの記載に基づき、実際の挙動は検証していない。",
      "新機能と挙動の変更は主に3点ある。第一に、接続の回復中に再試行の進み具合を示す表示が出る。第二に、長時間動くエージェントループで、ツールの出力サイズに上限を設け、メモリの扱いを整理した。あわせて、truncation（出力の切り詰め）は maxChars が 0 以下のときに無効になる。第三に、非対話モードで、計画（plan）を自律的に実行できるようになった。",
      "不具合の修正では、ファイルの競合、ヘッドレス環境のキーリング、スーパーバイザー状態の欠落が原因で認証が無限に繰り返される問題が直った。MCP については、有効化の設定が無い場合と JSON が壊れている場合を区別して扱うようになった。",
      "そのほか、端末の機能検出（capability detection）の後に一時停止していた stdin を元に戻す、無効な diff.external の上書きを取り除く、バックグラウンドのシェル実行が終わったときに一時ディレクトリを片付ける、セッションを設定の初期化より先に解決し同じ分に作られるファイル名の衝突を避ける、といった修正が入っている。ポリシーのリダイレクト判定、パス検証、ワークフロー解析の整合も取られた。",
      "直前の安定版 0.62.0 は9月29日に公開されている。リリースノートによると、Gemini 3.8 Flash と 3.5 Flash Lite のモデル対応、OAuth の更新トークンを保持する処理、ACP モードでの権限要求前のツール呼び出し更新などが入っていた。0.62.0 でモデル対応が入り、0.63.0 は主に長時間運用と非対話での安定性を扱う、という構成である。",
      "次の版として 0.64.0 のプレビュー版（0.64.0-preview.0）が出ている。リリースノートには、設定の V1 から V2 への移行、@ を含むコードでの CPU 停止の防止、ファイル操作の逐次化とアトミックな書き込み、チャット履歴の差分記録と履歴窓の上限、Ctrl+C の緊急中断が処理中でも届くようにする修正などが並ぶ。プレビュー版なので、内容は変わりうる。",
      "確認できていないこと。リリースノートには各項目の PR 番号や詳しい仕様の説明が十分に載っておらず、たとえば非対話モードの plan 実行がどの承認設定で動くのかは、今回確認した範囲では分からない。導入の判断では、自分の環境で版を指定して試すのが確実である。"
    ],
    "primarySources": [
      {
        "title": "Gemini CLI v0.63.0 リリースノート（google-gemini/gemini-cli）",
        "url": "https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0"
      },
      {
        "title": "Gemini CLI v0.62.0 リリースノート（google-gemini/gemini-cli）",
        "url": "https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0"
      },
      {
        "title": "Gemini CLI v0.64.0-preview.0 リリースノート（google-gemini/gemini-cli）",
        "url": "https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-preview.0"
      }
    ]
  },
  "claude-code-2-1-292-mcp-protocol-default-effort-agent-2026": {
    "body": [
      "Anthropic の Claude Code リポジトリの CHANGELOG に、v2.1.292 が加わった。npm レジストリの公開記録では、@anthropic-ai/claude-code の 2.1.292 は 2026年10月6日 17:10 UTC で、直前の 2.1.291（10月6日 03:32 UTC）の約14時間後にあたる。2.1.289〜2.1.291 は当サイトの別記事で扱った。この記事の事実は CHANGELOG と npm の公開記録だけに基づき、各修正が実際に直っているかの検証は行っていない。独立した検証は確認できていない。",
      "最初に、挙動が変わる点を挙げる。CHANGELOG の「Changed」には、ローカル（stdio）MCP サーバーとの接続が、Bedrock・Vertex・Foundry を含むすべてのインストールで、既定でプロトコル版 2026-07-28 を交渉するようになった、とある。従来の挙動に戻す環境変数は MCP_PROTOCOL_NEGOTIATION=legacy と書かれている。関連して「Improved」には、新しいプロトコルの確認に応じない stdio サーバーについて、1回遅い接続を経験したあと 7日間その情報を覚え、待たずに従来の方式で接続する、という記載がある。自作や古い stdio MCP サーバーを使っている場合は、起動の遅れや接続の失敗がないかを見る材料になる。",
      "同じ Changed には、スケジュール実行と Run now のルーティン実行が、承認を求めずに「自分だけが見られる」新しい Artifact を公開するようになった、という記載もある。ただし、コネクタやその他のアクセスを求める Artifact は引き続き承認を求める、と明記されている。また、エージェント名は最大256文字になり、それより長い名前は拒否され、スキルやプラグインのファイルの name が256文字を超えると無視される。claude plugin test は、テストが登録したフックの内部で expect が失敗した場合や、エンジンが拒否するスタブ回答があった場合に、黙って通らず失敗になる。",
      "機能の追加は次のとおりである。claude plugin install に --marketplace <source> が加わり、必要ならマーケットプレイスを追加したうえでプラグインを入れる（追加は claude plugin marketplace add と同じポリシー検査の下で行われる）。Agent ツールには effort 引数が加わり、サブエージェントを指定した effort で動かせる。CLAUDE_CODE_OVERLOADED_RETRY_BASE_DELAY_MS は、過負荷（529）の再試行の待ち時間の基準を長くする環境変数である。mods 向けには、プロンプトの補完候補に行を足す prompt.autocomplete イベント、$.model.complete のプロンプトキャッシュ（prompt と system をブロックで渡し、cache: true を付けたブロックまでをキャッシュする）、agent.spawn フックに workflow エージェントとその run・index が渡される変更が入った。",
      "セキュリティと権限に関する修正は、CHANGELOG の記載では次のとおりである。「Security」として、PreToolUse フックの承認と自動モードが、ネットワーク（UNC）パスのファイル読み取りで権限プロンプトを迂回していた問題を修正。そのほか、/ultrareview のアップロード用にステージされたファイルのコピー（~/.claude/seed-admin）を、サンドボックス内のコマンドが読める問題。管理対象のサンドボックスの読み取り拒否パスが、セッション中に現れる、または指す先が変わったときに、その内側のプロジェクトの許可が外れず、ファイルからの資格情報の注入も止まらない問題。macOS と Windows で、ノートブックや PDF の読み取りが、読み取り中に差し替えられたリンクを通じて承認範囲外のファイルを返しうる問題。サーバー管理の設定の取得に失敗している間に、ディスク上のキャッシュが改ざんされていると、組み込みのポリシープラグインを無効にできる問題。Windows で、ホームフォルダやドライブの 8.3 形式の短い名前など別の綴りに対する rm -rf を、削除として扱っていなかった問題。",
      "自動許可とサンドボックスの扱いにも変更がある。スキルやスラッシュコマンドの allowed-tools ルールが、自動モードやプランモードを途中で抜けたとき、後のターンで復活する問題が直った。「圧縮の要約が /name を繰り返したとき、ユーザー専用のスキルを Claude が呼べてしまう」問題も直っている。厳格サンドボックスモードがユーザー・管理・--settings のいずれかで設定されている場合は、FOO=bar python3 app.py のような環境変数の接頭辞付きのインタープリタコマンドが、確認なしで実行されるようになった。この記述は2.1.289 で直った「環境変数の接頭辞の後ろにあるコマンドを deny / ask ルールが見逃す」問題とは別の項目であり、どちらの条件でどの規則が適用されるかは、自分の設定で確かめる必要がある。",
      "フック出力の扱いも変わった。フックの出力に書かれた <system-reminder> タグは、Claude に渡る前にエスケープされる。mods とプラグインの修正も多く、プラグインの tool.check フックが allow を返したとき、質問やプランの承認のようにユーザーの回答が必要なツールが、ダイアログなしで実行される問題。mod の config.set・state.set・env.set・agent.spawn フックが next(e) を呼んだあとに拒否した場合、拒否として扱われず、名前付きで失敗として報告される挙動。next(e) を呼んだあとに失敗し、そのターンが中断されていた mod のフックが、呼び出しを通してしまう問題。プラグインのフックワーカーの再起動中に行われたツール呼び出しが、プラグインの権限フックなしで応答される問題。ユーザーがインストールした mod が追加した $ 名のせいで、組織のプラグインが自身の再読み込みや他のプラグインのクラッシュのあとにアンロードされる問題。mods は 2.1.287 で入った仕組みで、公式な詳細仕様の文書は、今回の調査では確認できていない。",
      "日常の使い方に近い修正と改善は次のとおりである。Read ツールが、PDF の pages に「6,9,15」のような一覧を渡されたとき、最初の1件だけを返してエラーを出さなかった問題が、各ページまたは範囲を別々に読むよう促すエラーになった。256KB を超える @ メンションのテキストファイルが黙って除かれていた問題は、ファイルの大きさと分割して読む旨が Claude に伝えられるようになった。Grep と Glob は、渡されたファイルやフォルダが読めないとき「一致なし」と報告していたが、1回再試行するか読めないことを伝える。claude --resume の選択画面や /resume で再開したとき、プランモードが戻らない問題。/resume・/branch・/clear のあとに作ったスケジュールタスクが発火しない問題。バックグラウンドセッションの /loop が、プロセスの再起動で保留中の起床予定を失い、止まる問題。claude -p と SDK の起動は、最初のターンが HTTP と SSE の MCP サーバーの resources/list の応答を待たなくなった。長い箇条書きや番号付きの返信の描画も速くなったと書かれている。",
      "クラウドセッション向けには、[Cloud sessions] として、ルーティンの実行が終わったあとも何時間も「実行中」と表示される問題と、ルーティンを編集・複製するとプッシュ通知がオフになる問題が直った。そのほか、大きな文字起こしを持つクラウドセッションが、承認済みの権限を再び求めることがある問題、コンテナの再起動後に思考設定を忘れる問題、再試行や編集の最中にスケジュールタスクなどの通知が失われる問題も修正されている。再起動後は、再開できる停止済みのバックグラウンドエージェントが ID で Claude に伝えられるようになった。",
      "整理すると、2.1.292 は機能追加より修正が大半を占める版である。CHANGELOG の同じ版には、MCP の接続方式の既定の変更（オプトアウトの環境変数つき）、UNC パスや自動許可に関する権限の修正、mods とプラグインのフックの保証の補強が並ぶ。Anthropic は 2.1.289〜2.1.291 でも Bash の deny/ask ルールがすり抜ける経路の修正を続けていた。同じ領域の修正が複数版にわたって入っている事実は、CHANGELOG から読み取れる範囲で書いたもので、個々の修正の影響範囲や悪用の有無は公式の記載に含まれていない。"
    ],
    "primarySources": [
      {
        "title": "Claude Code CHANGELOG（v2.1.292）",
        "url": "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリの公開記録）",
        "url": "https://registry.npmjs.org/@anthropic-ai/claude-code"
      }
    ]
  },
  "anthropic-claude-haiku-5-5-release-2026": {
    "body": [
      "Anthropic は10月7日、Claude Haiku 5.5（API ID は `claude-haiku-5-5`）を公開した。API ドキュメントのリリースノートは「高頻度・低遅延の作業向けに調整した、同社で最も高性能なモデル」と説明し、1M トークンのコンテキストウィンドウ、最大 128K トークンの出力、effort パラメータを伴う adaptive thinking を備えるとしている。提供先は Claude API、Amazon Bedrock、Claude Platform on AWS、Google Cloud、Microsoft Foundry。モデル概要ページは用途として分類・抽出・ルーティングを挙げ、ドキュメントの別ページはサブエージェント用途にも触れている。",
      "価格は、他の現行モデルと違ってプロンプトの長さで二段になる。公式の料金表では、100,000 トークンまでのプロンプトは入力 $0.10 / 出力 $0.50（100万トークンあたり）、100,000 トークンを超えると入力 $0.50 / 出力 $2.50 になる。Fable 5.1・Opus 5.5・Sonnet 5.5 は 1M 全体を同一単価で扱うが、料金ページは Haiku 5.5 だけをこの例外として明記している。概要ページの「From $0.10 / From $0.50」という表記は、この下限を指す。",
      "料金表の他の項目は次のとおり。5分キャッシュ書き込みは $0.125（長文側 $0.625）、1時間キャッシュ書き込みは $0.20（同 $1）、キャッシュ読み取りは $0.01（同 $0.05）。Batch API は50%引きで、100,000 トークンまでが入力 $0.05 / 出力 $0.25、超えると $0.25 / $1.25。比較対象の Haiku 4.5 は $1 / $5（Batch は $0.50 / $2.50）のまま掲載されている。",
      "単価の比較には注意が要る。ドキュメントによれば Haiku 5.5 は Claude 4.7 以降と同じ新しいトークナイザを使い、同じ文章が Haiku 4.5 より約30%多いトークンになる（増え方は内容による）。このため、請求額の比較は単価の比ではなく、同じ入力を新旧それぞれで数えたトークン数で行う必要がある。移行ガイドも、`max_tokens` やコスト見積もりを Haiku 5.5 で数え直すよう求めている。",
      "Haiku 4.5 のコードからの移行では、ドキュメントが「Breaking（破壊的）」に分類する変更が複数ある。手動の extended thinking（`thinking: {type: enabled, budget_tokens}`）は 400 エラーになり、adaptive thinking へ置き換える。`temperature`・`top_p`・`top_k` は省略が前提で、`temperature` は 1、`top_p` は 0.99 以外を指定すると 400 になる（`top_k` は値を問わずエラー）。assistant メッセージの prefill（最後の assistant ターンを続きとして書かせる手法）も、thinking を切っていても 400 になる。",
      "残りの破壊的変更は次の3件。Claude API と Google Cloud の computer use は、従来の `computer_20250124` ではなく `computer_toolset_20260801` を使う必要がある（旧ツールの宣言は 400）。thinking ブロックを送り返す場合、その前の `system`・`tools`・過去の `messages` を変更すると 400 になるため、会話は追記のみで保つ。さらに、`stop_reason: \"refusal\"` を扱う必要がある。Haiku 5.5 には安全分類器が付き、リクエストを拒否することがあり、サーバー側のフォールバックは用意されていない。",
      "挙動の変更もある。adaptive thinking が既定で有効なため、リクエストで thinking に触れていなくても、レスポンスの先頭が `thinking` ブロックになりうる。最初の content ブロックを答えとして読むコードは、`type` で選ぶ必要がある。thinking のテキストは既定で空になり（署名だけが返る）、要約を受け取るには `thinking.display` を `summarized` にする。thinking のトークンは `max_tokens` に含まれるため、小さな上限だと thinking ブロックの後、本文の前で止まる。また、Haiku 5.5 の thinking ブロックは、生成したアカウント（またはリンクされたアカウント）でしか有効でない。",
      "移行ガイドには、Priority Tier が Haiku 5.5 では対象外であることも書かれている。Haiku 4.5 で Priority Tier の契約がある組織は、容量を別に計画する必要がある。一方、Claude Managed Agents を使う場合は、モデル名の更新以外の変更は不要とされている。コンテキストと出力の上限は、Haiku 4.5 の 200K / 64K から 1M / 128K に広がった。モデル概要ページによれば、知識カットオフは Haiku 5.5 が2026年6月、リタイアは2027年10月7日より前にはならない（Anthropic 運営の基盤に対する約束）。",
      "同じ日のリリースノートには、他にも2件が載っている。Sonnet 5.5 のキャッシュ読み取りが 100万トークンあたり $0.10 になった（料金ページの表は、Sonnet 5.5 のキャッシュ読み取りを基本入力の0.05倍としている）。また Managed Agents では、`limited` ネットワーク設定のときに `web_fetch` と `web_search` が `allowed_hosts` を尊重するようになり、`allowed_domains` に `allowed_hosts` の外のエントリがあるセッション作成は 400 になる。Claude Code 2.1.293 の変更履歴にも、Haiku 5.5 が利用可能で Anthropic API の既定の Haiku になったとの記載がある。",
      "確認できていないこと。今回読んだ公式ドキュメント（モデル概要、What's new、移行ガイド、料金、リリースノート）の範囲では、Haiku 5.5 の性能値（ベンチマーク）は見当たらなかった。そのため本記事は性能の優劣や Haiku 4.5・Sonnet 5.5 との品質差には踏み込まない。ここまでの内容はすべて Anthropic 自身のドキュメントに基づく（一次資料のみ）。独立した第三者による検証は確認できていない。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "Haiku 5.5 と Haiku 4.5 の公式仕様（platform.claude.com の公式ドキュメント、2026年10月7日時点）",
        "headers": [
          "項目",
          "Haiku 5.5",
          "Haiku 4.5"
        ],
        "rows": [
          [
            "API ID",
            "`claude-haiku-5-5`",
            "`claude-haiku-4-5`"
          ],
          [
            "入力 / 出力（100万トークンあたり）",
            "$0.10 / $0.50（プロンプト 100K まで）、$0.50 / $2.50（100K 超）",
            "$1 / $5"
          ],
          [
            "Batch API（入力 / 出力）",
            "$0.05 / $0.25（100K まで）、$0.25 / $1.25（100K 超）",
            "$0.50 / $2.50"
          ],
          [
            "コンテキスト / 最大出力",
            "1M / 128K",
            "200K / 64K"
          ],
          [
            "thinking",
            "adaptive（既定で有効）。手動の `budget_tokens` は 400",
            "手動の extended thinking"
          ],
          [
            "`temperature` / `top_p` / `top_k`",
            "省略が前提。他の値は 400",
            "指定可"
          ],
          [
            "assistant prefill",
            "400（thinking 無効でも）",
            "thinking 無効なら可"
          ],
          [
            "同じ文章のトークン数",
            "約30%増（新トークナイザ）",
            "基準"
          ],
          [
            "Priority Tier",
            "対象外",
            "対象"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Developer Platform release notes",
        "site": "Anthropic（platform.claude.com・直接到達・確認済み）",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      },
      {
        "title": "Models overview",
        "site": "Anthropic（platform.claude.com・直接到達・確認済み）",
        "url": "https://platform.claude.com/docs/en/about-claude/models/overview"
      },
      {
        "title": "What's new in Claude Haiku 5.5",
        "site": "Anthropic（platform.claude.com・直接到達・確認済み）",
        "url": "https://platform.claude.com/docs/en/models/haiku-5-5/whats-new-haiku-5-5"
      },
      {
        "title": "Claude Haiku 5.5 migration guide",
        "site": "Anthropic（platform.claude.com・直接到達・確認済み）",
        "url": "https://platform.claude.com/docs/en/models/haiku-5-5/migration-guide"
      },
      {
        "title": "Pricing",
        "site": "Anthropic（platform.claude.com・直接到達・確認済み）",
        "url": "https://platform.claude.com/docs/en/about-claude/pricing"
      }
    ]
  },
  "claude-code-2-1-293-294-hook-instructions-compaction-reverts-2026": {
    "body": [
      "Anthropic の Claude Code リポジトリの CHANGELOG に、v2.1.293 と v2.1.294 が加わった。npm レジストリの公開記録では、2.1.293 は 2026年10月7日 17:18 UTC、2.1.294 は 10月8日 03:42 UTC で、2 つの間は約 10 時間半である。直前の 2.1.292 は別記事で扱った。この記事の事実は CHANGELOG と npm の公開記録だけに基づき、各修正が実際に直っているかの検証は行っていない。独立した検証は確認できていない。",
      "最初に、既存の設定の読み方に関わる 2 点を挙げる。2.1.294 の CHANGELOG は、「Block commands that...」のように指示文として書いた prompt フックと agent フックが、本来止めるべきものを通してしまう問題を修正した、と記している。同じ版で、Stop と SubagentStop の prompt フックが「ビルドが壊れていれば続行」のように指示文で書かれている場合の判定も改善され、Claude が早く止まりにくくなった。フックを自然文で書いている場合は、自分の版にこの修正が入っているかを見る材料になる。この記述から分かるのは修正の存在までで、どの程度の頻度で通っていたかは CHANGELOG に書かれていない。",
      "2.1.293 には、取り消された変更が 2 件ある。1 つは 2.1.281 で入った自動モードの拒否メッセージの変更（拒否は正確なコマンドだけでなく結果にも及ぶ、と Claude に伝える内容）で、元に戻された。もう 1 つは 2.1.290 の修正（コンテナの再起動で保留中の /loop の起床やスケジュールタスクが失われたクラウドセッションが眠ったままになる問題）で、これも元に戻された。CHANGELOG は後者について、Claude にはもう伝えられず、セッションは眠ったままになる、と書いている。理由は CHANGELOG にない。",
      "モデルに関しては、Claude Haiku 5.5（claude-haiku-5-5）が Anthropic API の既定の Haiku モデルになった。CHANGELOG の記載は、1M コンテキスト、100万トークンあたり入力 $0.10 / 出力 $0.50、100K を超えるプロンプトでは $0.50 / $2.50、である。モデル自体と破壊的変更は別記事で扱っている。mods 向けには、サブエージェント状態行のペイロードに agentType が加わり、カスタムのサブエージェントの種類を区別できる。$.tool.register には isDeferred が加わり、false を指定するとツールのスキーマをツール検索の後ろに置かず最初からプロンプトに載せる。",
      "コンテキストの圧縮と書き込みに関する修正もある。圧縮の前に Claude 自身が行った直近の操作を、圧縮の後に完了済みと見なし、終わった作業を取り消したりやり直したりすることがある問題が直った。HTTP の MCP 接続が、閉じるまで送信した全リクエストを保持するメモリリークも直っている。Bash ツールで単一ファイルを cat・head・tail・sed -n・grep で見たときに、パス限定ルールや入れ子の CLAUDE.md が読み込まれない問題も修正された。作業中に送ったメッセージが ← でセッションをバックグラウンドに移したときに失われる問題、/model の effort 選択が最高から最低へ回り込み、Low を既定として保存してしまう問題も、同じ版で直っている。",
      "運用・管理側では、Team と Enterprise の組織で起動時にポリシーと管理設定を早く取得し、止まったリクエストは 3 秒後に再試行する改善が入った。claude.ai と同期したスキルの変更確認は、セッションが使われていないとき 10 分ごとから約 40 分ごとに変わった。/ultrareview のアップロードが、サンドボックス内のコマンドの実行中に、設定ファイルを解析できないという理由で一部のリポジトリを拒否する問題も修正されている。claude purge は削除できないファイルがあっても黙って止まらず、残りを消して一覧を出し、終了コード 1 を返す。Windows では、状態行・フック・シェルコマンドを止めたときに、同じプロセス ID を与えられた無関係のプロセスを終了させることがある問題が直った。",
      "mods とプラグインの開発者向けには、claude plugin test が $.session.append を呼ぶ mod で失敗する問題が直り、追記された行はテストで新しい mock.session から読み戻せる。claude plugin eval は、Docker Desktop を使う Mac（~/.docker/bin のリンク）で、Bash を許可した実行をすべて拒否していた問題が直り、拒否の際は資格情報ストアのどの部分がリンクだったかを示す。Claude apps gateway が、desktop ポリシーに Claude Desktop の組み込みブラウザのキー（builtinBrowserEnabled など）が設定されていると起動しない問題も直った。2.1.293 では、アーティファクトに関して、Claude がライブラリのバージョンを 2 週間以上前のものに固定する、という改善も記載されている。",
      "整理すると、2.1.293 は修正の件数が多い版で、2.1.294 は prompt フックと agent フックの判定に絞った 2 項目の版である。2.1.292 の修正が MCP の既定プロトコルや UNC パスの権限にあったのに対し、この 2 版は圧縮後の挙動、フックの判定、Bash 経由のファイル参照とルールの読み込みに寄っている。取り消された 2 項目を含め、すべて CHANGELOG の記載の範囲で書いた。個々の修正の影響範囲や、取り消しの理由は、公式の記載に含まれていない。"
    ],
    "primarySources": [
      {
        "title": "Claude Code CHANGELOG（v2.1.293 / v2.1.294）",
        "url": "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリの公開記録）",
        "url": "https://registry.npmjs.org/@anthropic-ai/claude-code"
      }
    ]
  },
  "codex-cli-0-161-0-162-release-notes-2026": {
    "body": [
      "OpenAI の Codex リポジトリのリリースページによると、Codex CLI 0.161.0 は2026年10月7日、0.162.0 は10月8日（UTC）に公開された。前回の 0.160.0 は別記事で扱っている。この記事は公式のリリースノートをもとに、自分の版にその機能があるかを判断できるよう整理する。内容はリリースノートの記載に基づき、実際の挙動は検証していない。",
      "0.161.0 の新機能は5点ある。第一に、同梱のモデルカタログと Amazon Bedrock のカタログで、GPT-6.1 Sol が既定のモデルになった。第二に、Amazon Bedrock で multi-agent V2 と Ultra の推論に対応し、Bedrock Mantle が AWS GovCloud のリージョンを受け付けるようになった。第三に、アクティブな端末セッションの中から `/mcp login` で MCP サーバーにサインインできる。第四に、音声会話でマイク、スピーカー、入力チャンネルを選べる。第五に、Daybreak は機能フラグによる opt-in で、`codex exec` は 1 ターンごとに Cyber のアクセスプログラムを選べる。",
      "0.161.0 のバグ修正では、承認されたファイルシステムの権限昇格が、拒否済みの読み取りとネットワーク制限を保ったまま、より広い書き込みを許せるようになった。明示した起動時の権限は、再接続や新しいセッションでも保たれる。昇格した Windows 端末セッションと、サンドボックス内 PowerShell のパス処理が直り、貼り付け検出の期限が切れた後に Enter でバッファ済み入力が正しく送信される。スレッドの再開は最新のコミット済み履歴を読み込み、SQLite の破損をより早く検出する。過負荷時の再試行はサーバーの指示に従う。ドキュメントでは、認証の説明がキーリングへの資格情報の保存を考慮した内容になった。",
      "0.162.0 の新機能は6点ある。第一に、worktrees 機能を有効にした場合、信頼されたローカルプロジェクトから、管理された Git worktree を作成して一覧できる。第二に、エージェントのコマンドセンターでタスクをピン留めでき、サーバーが対応していればまとめて表示される。第三に、`/copy` でトランスクリプトのブロックを、Ctrl+Insert で選択範囲をコピーでき、マウスホイールのスクロール速度も調整できる。第四に、プロンプト、警告、折り返された行など、TUI の多くの場所で URL がクリックできる。",
      "第五に、Responses 互換のカスタムモデルプロバイダーで、ライブの Web アクセスとリモート圧縮の設定ができる。第六に、Code Mode に、約束（promise）の結果をストリームで受け取る JavaScript のヘルパーと、opt-in で順位付けされたツール検索が加わった。",
      "0.162.0 のバグ修正は主に4系統である。新しい TUI のスレッドはサーバー側のモデルと推論サマリーの既定を尊重し、起動時に明示した指定は引き続き優先される。`apply_patch` は既存の CRLF 改行を保つ。Linux のサンドボックスでは、拒否ファイルが複数あるときの起動、書き込み可能なサンドボックス実行ファイル、ripgrep の設定が拒否マスクを弱める問題が直った。Windows では、Windows 10 のドライブレター付きファイルアクセスが復旧し、サンドボックスの一時ディレクトリの権限が子プロセスの環境と揃った。Responses と WebSocket の再試行可能な失敗では、サーバーが返す Retry-After の指示に従う。PowerShell 7 のモジュールパスがある環境でも、PowerShell 経由のインストール時にアーカイブのチェックサム検証が通る。",
      "保守面では、Windows 向けのリリースに署名付きの PowerShell インストーラーが含まれ、古い安定版やプレリリースが、新しい安定版のダウンロード先やインストーラーの別名を置き換えられなくなった。0.162.0 には約180件のプルリクエストと約60人の貢献者が記載されている。0.162.0 の公開と同じ日には 0.163.0 のアルファ版も出ているが、リリースノートは付いておらず、この記事の対象は安定版の 0.161.0 と 0.162.0 のみである。",
      "GPT-6.1 Sol を既定にする変更の対象は、リリースノートでは「同梱と Amazon Bedrock のカタログ」と書かれている。ChatGPT のサインインで使う場合など、他の経路での既定がどうなるかは、今回確認したリリースノートには書かれていない。"
    ],
    "primarySources": [
      {
        "title": "Codex CLI 0.161.0 リリースノート（openai/codex）",
        "url": "https://github.com/openai/codex/releases/tag/rust-v0.161.0"
      },
      {
        "title": "Codex CLI 0.162.0 リリースノート（openai/codex）",
        "url": "https://github.com/openai/codex/releases/tag/rust-v0.162.0"
      },
      {
        "title": "Codex リリース一覧（openai/codex）",
        "url": "https://github.com/openai/codex/releases"
      }
    ]
  },
  "claude-code-2-1-295-hook-onfailure-block-osc-7501-2026": {
    "body": [
      "anthropics/claude-code のリリースページによると、Claude Code 2.1.295 は2026年10月8日に公開された。直前の 2.1.293〜2.1.294 は別記事で扱っている。この記事は公式のリリースノートをもとに、自分の版にその機能があるかを判断できるよう整理する。内容はリリースノートの記載に基づき、実際の挙動は検証していない。",
      "最も運用に関わるのは、フックの `onFailure: \"block\"` である。コマンドフックと HTTP フックがこの指定を受け付け、フックが起動できない、タイムアウトする、または想定外の終了をした場合に、その操作を通さずに止める。指定しない場合の挙動や、従来の挙動が具体的に何だったかは、今回確認したリリースノートには書かれていない。フックを安全装置として使っている場合に、フック自体が動かなかったときの扱いを選べるようになった、という変更である。",
      "端末まわりでは、Program Status Protocol（OSC 7501）に対応した。対応する端末は、Claude Code が作業中か、ユーザーの入力待ちか、完了したかを表示できる。対応端末の一覧は、今回確認したリリースノートには書かれていない。",
      "ゲートウェイ関連では、クラウドの上流（Bedrock、Vertex、Foundry）向けに `timeouts.upstream_ttfb_ms` が加わった。上流ごとの `models` リストも任意で指定でき、推論が成功した応答には `request-id` ヘッダーが付く。再試行では、無人の再試行モードが 429 と 529 を待つ時間の上限を、環境変数 `CLAUDE_CODE_RETRY_WATCHDOG_MAX_WAIT_MS` で決められる。",
      "修正は4点ある。`[1m]` のモデルが、ゲートウェイやクラウドプロバイダーに context-1m のベータを拒否されたときに失敗しなくなった。`claude -p` のテキスト出力が、先行する応答を落とさなくなった。リモート MCP の再接続は最大30秒まで間隔を空ける。モデルが `command_description` を渡しても Bash の呼び出しが動く。",
      "なお同じ週には、Bash の deny/ask ルールがすり抜ける経路の修正や、UNC パスの読み取り承認の抜けの修正など、権限まわりの更新が続いている。それぞれの版の内容は、前の記事を参照してほしい。"
    ],
    "primarySources": [
      {
        "title": "Claude Code リリース一覧（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/releases"
      }
    ]
  },
  "github-copilot-cli-1-0-89-to-1-0-94-sandbox-managed-policy-2026": {
    "body": [
      "github/copilot-cli の変更履歴（changelog）によると、GitHub Copilot CLI は 2026年9月28日の 1.0.89 から10月8日の 1.0.94 までに、1.0.89・1.0.90・1.0.91・1.0.92・1.0.93・1.0.94 の6版が出た。この記事は変更履歴の記載をもとに、自分の版にその機能があるかを判断できるよう整理する。内容は記載に基づくもので、実際の挙動は検証していない。",
      "最も運用に関わるのは、1.0.93 の「Command sandboxing is available to all users via /sandbox and --sandbox」である。コマンドのサンドボックスが /sandbox と --sandbox から全ユーザーに使えるようになった。サンドボックス周りは続く版でも手が入っている。1.0.91 は proxy CA の信頼を扱う `copilot sandbox ca` コマンド（確認・作成・信頼・更新・削除）を加えた。1.0.92 は、サンドボックス内のシェルが環境の GITHUB_TOKEN を、明示的に設定しない限り渡さないようにし、Git を使うスクリプトにはマスクした資格情報で認証させる。プロキシが宛先をブロックしたときは、ネットワークの許可を求める確認が毎回出る。",
      "組織の管理者向けの項目もある。1.0.93 は、ネットワーク要求のドメインの境界を強制する enterprise の `permissions.limitTo` を加えた。1.0.94 では、管理ポリシーで Assisted Permissions を無効にし、セッションを手動承認のままにできる。管理設定のせいで起動時の権限バイパスのフラグが効かないときは、警告が出る。管理設定がより新しい CLI の版を求める場合は、プロンプトを止めずに更新の案内を出す。Assisted Permissions については、見えているシェルコードを権限の判定側に渡すことで、不要な手動承認を減らす修正も 1.0.94 に入った。",
      "モデルの選択肢も増えた。1.0.89 で claude-opus-5.5 と、GPT-6 Sol・GPT-6 Luna（利用可能な場合）がモデルピッカーに加わり、1.0.90 で GPT-6.1 Sol、1.0.94 で Claude Haiku 5.5 が加わった。1.0.93 ではおすすめの並びが GPT-6.1 Sol、GPT-6 Astra/Luna、Claude 5.5 系を優先する形に変わった。1.0.92 は、退役したモデルをモデルピッカーと CLI で選べるモデルから外している。各モデルの料金や提供条件はこの変更履歴には書かれていないため、ここでは扱わない。",
      "設定と他ツールとの連携では、1.0.89 が .claude/rules にある Claude Code のルールファイルをカスタム指示として読むようになった。1.0.92 は `copilot config` のサブコマンドで設定の一覧・読み取り・設定・削除ができる。1.0.93 はユーザー設定を ~/.copilot/settings.json からだけ読み、~/.copilot/config.json にあるユーザー設定のキーは無視する。旧ファイルに設定を書いている場合は、移行が必要になりうる点に注意したい。",
      "MCP 関連の更新も続いた。1.0.90 は `--mcp-github-auth` を加え、GitHub アカウントの認証を承認した MCP サーバーの origin に限れるようにした。1.0.93 は MCP サーバーの設定変更をセッションを再起動せずにターンの間で反映し、1.0.94 は MCP の有効化・無効化をサーバー探索の前でも、サーバーを起動せずにできる。1.0.92 は Entra で保護された MCP サーバーの、アクセストークンのみの資格情報の自動更新に対応した。",
      "このほか 1.0.92 には、実行環境をローカルとクラウドで切り替える Ctrl+E の環境ピッカー、エージェントが大きなファイルを一度に書いたあとセッションが数分遅くなる問題の修正、コンテキスト上限を超えた圧縮で最新のプロンプトを残す修正などがある。ここに挙げたのは変更履歴の一部で、全項目は公式の changelog を参照してほしい。なお同じ変更履歴のうち、10月9日付の 1.0.95 系は pre-release として公開されており、この記事の対象に含めていない。"
    ],
    "primarySources": [
      {
        "title": "GitHub Copilot CLI リリース一覧（github/copilot-cli）",
        "url": "https://github.com/github/copilot-cli/releases"
      },
      {
        "title": "GitHub Copilot CLI changelog（github/copilot-cli）",
        "url": "https://github.com/github/copilot-cli/blob/main/changelog.md"
      }
    ]
  },
  "claude-code-2-1-296-subagent-autocompact-read-allow-large-2026": {
    "body": [
      "anthropics/claude-code のリリースページによると、Claude Code 2.1.296 は2026年10月9日に公開された（ページに年の表示は無く、フッターの表記から2026年と判断した）。直前の 2.1.295 は別記事で扱っている。この記事は公式のリリースノートをもとに、自分の版にその機能があるかを判断できるよう整理する。内容はリリースノートの記載に基づき、実際の挙動は検証していない。",
      "追加された機能で、日々の使い方に関わるものは3つある。1つ目は、サブエージェントの frontmatter と `--agents` の定義に置ける `autoCompactWindow` で、サブエージェントが親の会話より早く自動圧縮できる。2つ目は環境変数 `CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL` で、ワークフローのエージェントをすべて1つのモデルで動かし、ほかのサブエージェントは各自のモデルのままにできる。3つ目は Read ツールの `allow_large` で、全文が必要でコンテキストに余裕があるときに、通常のサイズ上限を超えるテキストファイルを1回の呼び出しで読める。",
      "運用面では、`CLAUDE_CODE_OVERLOADED_RETRY_MAX_DELAY_MS` が加わり、過負荷（529）の再試行で待ち時間の上限を長くできる。MCP のツール説明とサーバー指示を最初に送る既定の上限は、2,048 文字から 4,096 文字に変わった。`/plugin` には、同名の別プラグインが有効なためフックが除外されているプラグインへの注記が出る。",
      "権限とフックの修正が目立つ。managed 設定の `PreToolUse` フックが `\"continue\": false` で拒否した場合と、managed の `prompt` フックが止めた場合に、呼び出しは拒否されるがターンは終わらなくなった。Bash の権限確認では、`BASH_ARGV0` を代入してから使うコマンドが自動承認されていた経路が修正され、承認を求めるようになった。Windows では、Git Bash の `rm -rf /c/Users/<name>` がバイパス権限モードで確認を求めなかった問題が直った。なお 2.1.295 で入った Claude apps gateway の保存済みサインインが `forceLoginMethod` が `gateway` で `forceLoginGatewayUrl` が無い環境で無視される問題は、この版で修正されたと書かれている。",
      "ファイル編集では、Edit と NotebookEdit が UTF-8 でないファイル（Windows-1252、Shift-JIS、GBK）の非 ASCII 文字をすべて置き換えてしまう問題が直り、そのような編集は拒否されるようになった。日本語環境で Shift-JIS のファイルを扱う場合は、拒否される側の挙動に変わる点を知っておくとよい。そのほか、共有トランスクリプトとデバッグログの秘密情報のマスキングが、値の無いキーに続く値などに広がった。",
      "Windows では、1 KB を超える PowerShell コマンドが常に承認を求めていた問題が直り、allow ルールと読み取り専用の判定が 32 KB まで効く。stdio の MCP サーバーは終了時に強制終了されず、標準入力を閉じてから、300ms 後も動いていればプロセスツリーを終了する。",
      "費用の表示も変わった。`/cost`、ステータスライン、`--max-budget-usd`、SDK の費用の数値で、Sonnet 5.5 のキャッシュ読み取りを100万トークンあたり $0.10（従来は $0.20）として計算する。これは Claude Code 側の計算の更新として書かれたもので、今回は API の公式料金表そのものは確認していない。料金の判断には公式の料金表を見てほしい。",
      "VS Code 拡張では、Claude in Chrome が `@browser` で接続したセッションを含め、すべてのセッションでブラウザ操作の前に確認を求めるようになった。許可したサイトはセッション中は再確認されない。Claude Tag（Slack）と Code Review、クラウドセッションにも修正と改善が入っているが、ここでは詳細を省く。完全な一覧は公式のリリースページにある。"
    ],
    "primarySources": [
      {
        "title": "Claude Code v2.1.296 リリースノート（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/releases/tag/v2.1.296"
      }
    ]
  },
  "anthropic-managed-agents-dynamic-workflows-beta-2026": {
    "body": [
      "Anthropic の API ドキュメントのリリースノートによると、2026年10月9日、Claude Managed Agents に動的ワークフロー（dynamic workflows）が加わった。ベータ機能で、ベータヘッダーは managed-agents-2026-04-01。この記事は、platform.claude.com の公式ドキュメント（リリースノート、Multiagent orchestration、Workflow runs）を直接読んで書いている。",
      "仕組みはこうだ。ワークフローとは、エージェントが書く「多数のエージェントを走らせて結果を束ねるプログラム」である。1回の実行がワークフロー実行（workflow run）で、サーバーがバックグラウンドで動かす。実行中、セッションを担当するエージェントは作業を続けてもよいし、ターンを終えてもよく、進み具合を確認することもできる。実行が終わると、そのエージェントが結果を読む番が回ってくる。文書数百件の審査や、多数の出典の突き合わせのように、1回の会話に収まらない仕事が想定されている。",
      "プログラムは、複数のエージェントを同時に動かす（ファンアウト）、ある結果を次のエージェントに渡す、結果を見て繰り返す、失敗したエージェントを処理する、といったことができる。作業は名前の付いたフェーズに分けられ、実行は workflow_run.created、workflow_run.phase_started、workflow_run.phase_ended、workflow_run.status_ended などのイベントでセッションのイベントストリームに流れる。実行内の各エージェントは個別のセッションスレッドで動き、一覧・読み取り・ストリームができる。なお、これらの実行イベントは webhook は発火しないと書かれている。",
      "有効にするには、エージェント定義の multiagent.type を multiagent_20261001 にして workflows を有効にする。このタイプでは、従来の委任（subagents）と動的ワークフローの両方が既定で有効になる。動的ワークフローだけにしたい場合は subagents を disabled にする。実行を始めるかどうかはエージェントが判断し、追加の API 呼び出しは無い。利用者は user.message やシステムプロンプトで、いつ実行を使うかを指示して誘導する。権限ポリシーは、実行の中のエージェントが呼ぶツールに適用され、実行を始める操作そのものには適用されない。",
      "ワークフロー内のエージェントは、ワークフローが自前で定義するインラインのエージェントか、workflows.predefined_agents に列挙した既存のエージェント（最大20）を使う。インラインのエージェントはセッションを担当するエージェントと同じモデルを使う。一部のエージェントだけ別のモデルで動かしたい場合は、それらをエージェントとして作り、predefined_agents に載せる。",
      "上限は公式ドキュメントの表に次のとおり載っている。1回の実行で同時に動くスレッドは64（ただし API が保証する数ではなく変わりうる）。ワークフローが実行の全期間で起動できるエージェントは1,000で、超えると thread_limit_error で実行が終わる。実行の寿命は既定24時間（エージェントがより短く設定できる）で、超えると timeout_error。1セッションで同時に開ける実行は既定10で、待機中のものも数に入る。実行のスレッドは、セッション自身の子スレッド上限の対象外とされている。",
      "費用について、ドキュメントは「実行そのものに価格は無く、エージェントが使ったトークンは各モデルの料金で、セッションのほかのトークンと同じように課金される」と書いている。実行のモデル呼び出しはセッションの予算にも数えられ、予算に達するとすべての開いた実行が一時停止してセッションは budget_reached で待機になる。各スレッドは進行中のリクエストを終えるので、働いているスレッド1つにつきリクエスト1回ぶん予算を超えうる。予算を上げるか外すと再開する。ドキュメントは、実行内の全エージェントがトークンを使うため、セッション予算を設定するよう勧めている。",
      "運用上の注意も、ドキュメントに書かれている。実行が開いている間は、セッションの agent を更新しようとすると workflow_run_open で400になる（一時停止中の実行も同じ）。一時停止した実行も寿命は進むので、止めたままにすると timeout_error で終わりうる。実行内のモデル呼び出しは、組織の Messages API のレート制限を既存のトラフィックと共有する。仕事の完了は『実行が1つも開いていない』ことで判断し、待機（idle）になったセッションだけを見ると、一時停止中の実行を見落とす。",
      "リリースノートには、その2日前（10月7日）にも Managed Agents の項目がある。Managed Agents の web ツールが allowed_hosts を尊重するようになり、web_fetch はセッション内にすでに現れた URL しか取得しない、というものだ。ワークフローを使う場合は、この制約と合わせて確認するとよい。",
      "確認できていないこと。ここに書いたのは Anthropic 自身の公式ドキュメントの記述であり、挙動や性能について第三者による検証は確認できていない。たとえば『長いタスクが速く終わる』というドキュメントの説明は、並列に動かせる仕事を前提にした一般的な記述で、具体的な所要時間や成果の数値は示されていない。ベータ機能なので、仕様や上限は変わりうる。64 という同時スレッド数についても、公式が『保証しない』と書いている。"
    ],
    "primarySources": [
      {
        "title": "Workflow runs（Managed Agents）",
        "url": "https://platform.claude.com/docs/en/managed-agents/workflow-runs"
      },
      {
        "title": "Multiagent orchestration（Managed Agents）",
        "url": "https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration"
      },
      {
        "title": "Claude Developer Platform リリースノート",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      }
    ]
  },
  "weekly-metrics-2026-week-oct05": {
    "body": [
      "この記事はニュースのまとめではなく、サイト自身の公開データから計算した「計器」である。1週間を見渡して初めて出る数字を、解釈を添えて示す。数字は `node scripts/weekly-metrics.mjs` の出力（集計日2026年10月12日）に基づく。外部サイトの情報は使っていない。",
      "## 公開本数 — 10本、前週の41本から急減",
      "10月5日〜11日の公開は**10本**（前週41本）。種別は news 10 のみで、feature（特集・分析）とレビューは0本だった。分野は cli 8 / model 1 / product 1。出来事から掲載までの中央値は1日である。",
      "前週の41本は、9月30日に21本が一度に載った日を含んでいる（新世代モデルのレビュー5本など）。前週が突出していた面もあるため、**41本からの減り方をそのまま落ち込みと読むのは正確ではない。** 9月21日〜27日の36本と比べても、この週は3割弱にあたる。日別では10月5日と10日が0本、最多の日でも4本だった。",
      "## 3軸のバランス — 速報に寄り、発掘と分析が0本",
      "このサイトは速報（主要プレイヤー）・発掘（新興・OSS・個人開発）・分析（社会的インパクト・規制・倫理）の3軸で書く方針を取っている。この週は10本すべてが主要ベンダーの更新で、**発掘と分析は0本**だった。内訳は Claude Code が5本（[2.1.289〜2.1.291](?a=claude-code-2-1-289-290-291-deny-rules-regressions-2026)、[2.1.292](?a=claude-code-2-1-292-mcp-protocol-default-effort-agent-2026)、[2.1.293〜2.1.294](?a=claude-code-2-1-293-294-hook-instructions-compaction-reverts-2026)、[2.1.295](?a=claude-code-2-1-295-hook-onfailure-block-osc-7501-2026)、[2.1.296](?a=claude-code-2-1-296-subagent-autocompact-read-allow-large-2026)）、[Codex CLI](?a=codex-cli-0-161-0-162-release-notes-2026)・[Gemini CLI](?a=gemini-cli-0-63-release-notes-2026)・[GitHub Copilot CLI](?a=github-copilot-cli-1-0-89-to-1-0-94-sandbox-managed-policy-2026)が各1本、残りが[Claude Haiku 5.5](?a=anthropic-claude-haiku-5-5-release-2026)と[Managed Agents の動的ワークフロー](?a=anthropic-managed-agents-dynamic-workflows-beta-2026)である。",
      "**リリースノートは版が出るたびに記事にできるため、書く材料が最も安定して手に入る。** その分、材料の少ない週ほど CLI が占める割合が高くなる、という構造がデータに出ている。この週の CLI の比率は10本中8本。一方、前週までの「AI安全性」や規制の記事は、事案の報告や当局の発表といった個別の出来事から生まれており、材料がなければ書けない。",
      "## 「AI安全性」「中国AI」の記事が、この週は0件",
      "タグの動きを見ると、直近の週で増え続けてきた「AI安全性」はこの週に付いた記事が**0件**だった（前週2件）。「中国AI」「エッジAI」「透明性」も同じく0件である。90日累計の件数は、集計の窓が動くため減っていないが、新規の積み上がりは止まっている。",
      "**これが話題そのものが減ったことを示すのか、拾えていないだけなのかは、このデータでは切り分けられない。** 判断に使える材料は2つある。1つは、この週に「セキュリティ」タグが付いた3本がいずれも Claude Code の版の記録で、中身はコマンドの許可・拒否ルールをすり抜ける経路の修正だったこと。エージェントの不正利用や規制を扱った9月下旬の記事群とは性質が違う。もう1つは、この週の調査で新しい分析記事に足る一次資料を見つけられなかった、という運営側の事情である。後者は調査の到達範囲に依存するため、「出来事が無かった」とは言えない。",
      "## いちばん大きな数字 — ガイドの空白は4週連続で0のまま",
      "週次の計器が出す「記事で頻出するのにガイドに説明が無い概念」は、今週も変わらなかった。「AI安全性」33件、「中国AI」20件、「エッジAI」11件、「透明性」7件のいずれも、ガイド本文での言及は**0回**である。「AI安全性」は9月14日の計器から数えて4回連続での指摘になる。",
      "ガイド（`vibeCodingGuide.js`）への書き込みは、自律実行の Routine には禁じられており、対話セッションでの設計判断を要する。**計器が鳴る仕組みはあるが、鳴ったあとに空白を埋めるかどうかを決める場は、まだ動いていない。** 今週は記事そのものが少なかったため目立たないが、空白の大きさは記事の本数に関係なく残っている。",
      "## 今週はじめて出たタグ — フックとサンドボックス",
      "今週はじめて出たタグは Haiku 5・フック・サンドボックス・サブエージェントの4つである。フックは Claude Code の [2.1.295](?a=claude-code-2-1-295-hook-onfailure-block-osc-7501-2026) と [2.1.296](?a=claude-code-2-1-296-subagent-autocompact-read-allow-large-2026) の記事で2件、サンドボックスは [GitHub Copilot CLI](?a=github-copilot-cli-1-0-89-to-1-0-94-sandbox-managed-policy-2026) の記事で1件付いた。**フックとサンドボックスはいずれも、エージェントの動作を外から縛る仕組み**であり、「AI安全性」の語彙でなく開発ツールの機能として出てきている点が、この週の特徴である。",
      "## ツール別ページとの比",
      "直近90日の記事数とツール別ページの解説項目数の比は、Codex 0.30（14件 / 47項目）、Claude Code 0.27（25件 / 93項目）、VS Code + Copilot 0.14（5件 / 35項目）、Cursor 0.14（6件 / 44項目）、Gemini CLI 0.02（1件 / 43項目）、Power Apps 0（0件 / 20項目）だった。比が大きいほど、話題の割に解説が薄い。**Cursor はこの週の記事が0本**で、Claude Code は5本と偏っている。Gemini CLI は9月28日の計器で直近90日の記事0件だったが、今週の 0.63.0 で1件になった。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "この週の公開の内訳（10月5日〜11日）と前週との比較",
        "headers": [
          "項目",
          "10月5日〜11日",
          "前週（9月28日〜10月4日）"
        ],
        "rows": [
          [
            "公開本数",
            "10本",
            "41本"
          ],
          [
            "種別",
            "news 10",
            "（週次の計器を除く）news・feature・review が混在"
          ],
          [
            "分野",
            "cli 8 / model 1 / product 1",
            "—"
          ],
          [
            "発掘・分析",
            "0本",
            "—"
          ],
          [
            "出来事から掲載までの中央値",
            "1日",
            "—"
          ]
        ]
      },
      {
        "afterParagraph": 12,
        "caption": "記事で頻出するのにガイドに説明が無い概念（直近90日、週次の計器の出力）",
        "headers": [
          "概念",
          "記事の件数",
          "この週に付いた記事",
          "ガイド本文の言及"
        ],
        "rows": [
          [
            "AI安全性",
            "33件",
            "0件",
            "0回"
          ],
          [
            "中国AI",
            "20件",
            "0件",
            "0回"
          ],
          [
            "エッジAI",
            "11件",
            "0件",
            "0回"
          ],
          [
            "透明性",
            "7件",
            "0件",
            "0回"
          ]
        ]
      }
    ]
  },
  "anthropic-max-team-api-credits-2026": {
    "body": [
      "Anthropic の API ドキュメントのリリースノートは、10月7日の項目として「Claude Max と Team プランに、月次の API クレジットが含まれるようになった」と記している。クレジットを受け取る手順は、専用ページ「API credits for Max and Team plans」に書かれている。リリースノート自体には金額も条件もなく、中身はこの専用ページ（platform.claude.com）にある。以下は、2026年10月12日に読んだそのページの内容である。",
      "対象プランは Max 5x、Max 20x、Team（非営利・研究者向けの割引 Team を含む）。Free、Pro、Enterprise は対象外と明記されている。月額は Max 5x が $100、Max 20x が $200、Team は Standard 席が1席あたり $20、Premium 席が1席あたり $100。Team では全席ぶんが1つの月次残高にまとめられ、上限は $500。席数は毎月の請求期間の開始時点で数える。ページの例では、Standard 3席と Premium 2席のチームは月 $260 になる。",
      "使い道は Claude API、Claude Managed Agents、Claude Agent SDK、プレイグラウンドで、Claude Code と、Claude アプリでの追加利用（extra usage）は含まれない。Amazon Bedrock、Google Cloud、Microsoft Foundry、Claude Platform on AWS でも使えず、Claude Console の Claude API だけが対象である。このクレジットは Claude や Claude Code の利用上限も変えない、とページは書いている。",
      "受け取りには、Claude Console の組織を自分のプランに紐づける。claude.ai の設定（Max は Settings > Billing、Team は Organization settings > Billing）の「API credits」欄で組織を選び、プログラム規約に同意する。必要な権限は、Max ではサブスクライバー本人、Team では Primary Owner か Owner、Console 側では Owner・Admin・Billing のいずれか。新規の契約者は、対象プランになってから7日後に受け取れる。Claude Platform に支払い方法を登録する必要はない。",
      "ページが強調している注意点は紐づけの固定である。1つのプランが紐づけられる Console 組織は1つ、1つの組織が受け取れるプランも1つで、利用者自身は後から変更できず、変更にはサポートへの連絡が要る。クレジットは Console の Settings > Billing にある「Promotional credits」欄に、金額と期限つきで表示される。",
      "クレジットは請求サイクルごと（年払いは毎月）に届き、使い切らなかった分はそのサイクルの終わりに失効して繰り越されない。使う順は、付与クレジットが先で、購入済みのクレジットは後。自動リロードは購入済みの残高だけを基準に動く。紐づけた組織内のすべての API キーとワークスペースが同じ残高から引かれるため、案件ごとに上限を設けたい場合は、ワークスペースを分けて支出上限を設定するよう案内されている。",
      "残高が尽きたときの挙動も書かれている。購入済みクレジットがあればそちらで続き、何も無ければ次の月次クレジットが届くまで API リクエストは止まる。使った分が Claude のプランに請求されることはない。この付与クレジットしか持たない組織で Claude Code のセッションを動かすと、Claude Code は「Credit balance too low」を表示する、とも書かれている。クレジットで Claude Code は動かせない。",
      "レート制限との関係では、対象プランに紐づいた組織は少なくとも Start ティア、月次クレジットが $200 を超える場合は少なくとも Build ティアに引き上げられる。ただし、クレジットを受け取ること自体は他のティア条件を変えず、このクレジットは上位ティアへの昇格の実績にも数えられない。月次の支出上限（毎月1日にリセット）と、クレジットの更新（請求サイクル）は別の暦で動く点も明記されている。",
      "プラン変更時の扱いは次のとおり。解約、対象外プランへのダウングレード、返金の場合、新しいクレジットは止まるが、すでに受け取った分は期限まで使える。Max 5x から Max 20x への変更では、日割りのクレジットがすぐに付き、その後は毎サイクル $200 になる。Max から Team への変更では Max の紐づけが終わり、Team の Owner が Team プラン開始の7日後から受け取れる。Team の席の追加は次の月から反映され、席を外しても更新日までは席が残るため、減額は更新後になる。",
      "同じ日のリリースノートには、Sonnet 5.5 のプロンプトキャッシュ読み取りの値下げ（100万トークンあたり $0.20 から $0.10）も載っている。付与クレジットで Sonnet 5.5 を使うとき、同じ入力の繰り返しが多い用途では、この値下げでクレジットの持ちが変わる。",
      "確認できていないこと。「Max 5x」「Max 20x」と、サブスクリプションの月額そのものの料金は、このページではなく別のページの話で、本記事では扱わない。プログラム規約（anthropic.com 側の credit-terms）は読んでいないため、規約上の条件は確認できていない。また、日本の請求通貨や税の扱い、プランをアプリ内課金で買った場合の細かい挙動は、ページの記載以上のことは分からない。本記事の内容はすべて Anthropic 自身のドキュメントに基づく（一次資料のみ）。独立した第三者による検証は確認できていない。"
    ],
    "tables": [
      {
        "afterParagraph": 1,
        "caption": "月次 API クレジットの額（Anthropic 公式ドキュメントの値）",
        "headers": [
          "プラン",
          "月次クレジット",
          "備考"
        ],
        "rows": [
          [
            "Max 5x",
            "$100",
            "—"
          ],
          [
            "Max 20x",
            "$200",
            "—"
          ],
          [
            "Team（Standard 席）",
            "席ごとに $20",
            "全席ぶんを合算、上限 $500"
          ],
          [
            "Team（Premium 席）",
            "席ごとに $100",
            "全席ぶんを合算、上限 $500"
          ],
          [
            "Free / Pro / Enterprise",
            "対象外",
            "—"
          ]
        ]
      },
      {
        "afterParagraph": 2,
        "caption": "クレジットで使えるもの・使えないもの（同ドキュメント）",
        "headers": [
          "プロダクト",
          "対象"
        ],
        "rows": [
          [
            "Claude API",
            "対象"
          ],
          [
            "Claude Managed Agents",
            "対象"
          ],
          [
            "Claude Agent SDK",
            "対象"
          ],
          [
            "プレイグラウンド",
            "対象"
          ],
          [
            "Claude Code",
            "対象外"
          ],
          [
            "Claude アプリの追加利用（extra usage）",
            "対象外"
          ],
          [
            "Amazon Bedrock / Google Cloud / Microsoft Foundry / Claude Platform on AWS",
            "対象外"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "API credits for Max and Team plans（Anthropic 公式ドキュメント）",
        "url": "https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers"
      },
      {
        "title": "Claude Developer Platform release notes（2026年10月7日の項目）",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      }
    ]
  },
  "anthropic-models-api-capabilities-fields-2026": {
    "body": [
      "Anthropic の API ドキュメントのリリースノートには、10月1日、5日、6日の3日分の項目が、いずれも Models API（GET /v1/models と GET /v1/models/{model_id}）へのフィールド追加として並んでいる。10月1日が line、10月5日が capabilities.thinking.types.disabled、10月6日が capabilities.server_tools である。以下は、2026年10月13日に読んだ platform.claude.com のリリースノートと List Models のリファレンスに基づく。",
      "line は、そのモデルが属する系列を返す。リファレンスの値は haiku、sonnet、opus、fable、mythos の5つで、「今後増える可能性がある」と書かれている。Claude Opus 4.5 と Opus 4.6 はどちらも opus を返す、というのが公式の例である。系列を持たないモデルは null になり、リファレンスは「ID から系列を推測しないこと」と明記している。モデル ID の文字列から世代や系列を切り出す処理は、この項目で置き換えられる対象になる。",
      "capabilities.thinking.types.disabled は、thinking: {type: \"disabled\"} を受け付けるかを示す。リファレンスの定義では、この値は「このモデルに disabled を送ると 400 が返る場合にちょうど false になる」もので、thinking に対応していないモデルでは true になる。同じ thinking.types には adaptive（モデルが考えるかどうかと量を決める）と enabled（budget_tokens を呼び出し側が指定する拡張思考）があり、3つの受け付け可否を横並びで読める。",
      "capabilities.server_tools は、ウェブ検索ツールとコード実行ツールをそのモデルが受け付けるかを示す。supported は、2つのうち少なくとも1つに対応していれば true で、個別の可否は web_search と code_execution に入る。それぞれ「少なくとも1つの版に対応している」という意味で、すべての版に対応するとは限らない。また、対応していても組織の管理者がウェブ検索を無効にしている場合などには、リクエストが拒否されうるとリファレンスは注意している。つまりこの値はモデル側の対応を示すもので、組織の設定は反映しない。",
      "混同しやすい点がリリースノートにも書かれている。トップレベルの capabilities.code_execution は、コード実行ツールの中で動くコードが、同じリクエストの他のツールを呼べるか（プログラムによるツール呼び出し、ウェブ検索・ウェブ取得の動的フィルタリング）を表す。コード実行ツールそのものに対応するかは、capabilities.server_tools.code_execution を読む。名前が似た2つの項目が別の意味を持つ。",
      "Models API のレスポンスには、これらのほかに batch、citations、context_management、effort（low・medium・high・xhigh・max の各水準）、image_input、pdf_input、structured_outputs などの能力が、既知の能力はすべてキーが存在する形で入る。加えて lifecycle（active・deprecated・retired）、deprecated_at、retires_at、max_input_tokens、max_tokens もある。一覧は lifecycle で絞り込め、既定では active と deprecated が返り、retired は明示的に指定したときだけ現れる。",
      "確認できていないこと。リファレンスのレスポンス例は説明用で、値が実際のモデルと一致しているとは限らない（たとえば例では Opus 5.5 の line が haiku になっている）。このため、各モデルが実際にどの値を返すかは、本記事では確認していない。また、これらのフィールドを使った移行の手順や、既存コードへの影響の大小は公式の記述を超えるため扱わない。本記事の内容はすべて Anthropic 自身のドキュメントに基づく（一次資料のみ）。独立した第三者による検証は確認できていない。"
    ],
    "tables": [
      {
        "afterParagraph": 4,
        "caption": "Models API に追加されたフィールド（Anthropic 公式リリースノートとリファレンス）",
        "headers": [
          "追加日",
          "フィールド",
          "返す内容"
        ],
        "rows": [
          [
            "10月1日",
            "line",
            "モデル系列（haiku / sonnet / opus / fable / mythos）。属さなければ null"
          ],
          [
            "10月5日",
            "capabilities.thinking.types.disabled",
            "thinking の type が disabled を受け付けるか。false は送ると 400 になる場合"
          ],
          [
            "10月6日",
            "capabilities.server_tools",
            "ウェブ検索・コード実行ツールに対応するか（supported / web_search / code_execution）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Developer Platform release notes（2026年10月1日・5日・6日の項目）",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      },
      {
        "title": "List Models（Anthropic API リファレンス）",
        "url": "https://platform.claude.com/docs/en/api/models/list"
      }
    ]
  },
  "anthropic-sdk-browser-computer-toolsets-beta-2026": {
    "body": [
      "Anthropic の API ドキュメントのリリースノートによると、2026年10月7日、Python と TypeScript の SDK に、browser use tool と computer use tool 用のクラスがベータで加わった。利用者はクラスを継承し、ツールごとに1つのメソッドを、自分のブラウザやデスクトップの自動化に対して書く。SDK がツールのループ、利用者が設定した URL とファイルのポリシー、承認のコールバックを実行する。この記事は、platform.claude.com のリリースノートと、そこからリンクされた公式ガイド「Browser and computer use with the SDK toolsets」を直接読んで書いている。",
      "役割の分担は公式ガイドに明記されている。SDK は、設定された検査（navigate の URL ポリシーや承認コールバックなど）を通った呼び出しを利用者の「ドライバ」に渡し、ドライバが返したものから tool_result を組み立てる。ドライバはブラウザやデスクトップを実際に動かす部分で、利用者が用意する。ガイドの「Limitations」には、SDK にはブラウザも、デスクトップも、既製のドライバも、URL ポリシーも含まれず、利用者が用意すると書かれている。",
      "ドライバの用意には3つの道がある。1つ目はプロバイダのドライバを使う道で、ガイドは Browser Use、Browserbase、Daytona、E2B が自社のドライバを公開していると書いている（ブラウザ用は Browser Use と Browserbase、デスクトップ用は Daytona、両方は E2B）。この場合、ツールランナー（client.beta.messages.tool_runner）に、ドライバのインスタンスを tools の要素としてそのまま渡す。ガイド内のコード例のプロバイダは架空のもので、実在のプロバイダに置き換えて使う前提になっている。2つ目は自作で、ブラウザ用は BetaAbstractBrowserToolset20260801、デスクトップ用は BetaAbstractComputerToolset20260801 を継承し、対応するメンバーだけをオーバーライドする。実装しないメンバーは無効として API に送られる。3つ目として、claude-quickstarts リポジトリに、Chrome DevTools Protocol 経由で Chromium を動かすブラウザ用のサンプルと、VNC のデスクトップ用サンプルがあると書かれている。",
      "ガイドは、本番に近い環境でドライバを動かす前に、次の6つを行うよう求めている。SDK が代行するのは1、4、5で、2、3、6はドライバと配備の側の仕事だと明記されている。",
      "URL ポリシーについて、ガイドは強い警告を置いている。ポリシーを渡さなければ SDK は URL を一切検査せず、API も Claude が開く URL を絞らない。ポリシーを渡しても、SDK が呼ぶのは navigate のときだけで、back、forward、reload や、Claude がクリックしたリンク、リダイレクトは対象にならない。それらは loopback（localhost）、クラウドのメタデータアドレス 169.254.169.254 のようなリンクローカル、プライベートネットワークに到達しうる。SDK は URL のスキームも検査しないので、javascript:、view-source:、data:、file: をドライバ側で拒否する必要がある。file: は Claude にブラウザのホストのファイルを読ませ、javascript: は javascript_exec を切っていても現在のページでスクリプトを走らせる。ガイドの例示ポリシーは「本番用ではない」と注記されており、http と https、および about:blank だけを許可する。url_policy に None（TypeScript では null）を渡すと、SDK はすべての navigate を拒否する。設定値の読み込み失敗で検査なしになるのを防ぐための挙動だと説明されている。",
      "承認とファイルについての既定は次のとおり。javascript_exec と file_upload は既定で無効で、どちらかを有効にして confirm コールバックを渡さないと、コンストラクタが設定エラーを出す。confirm はその呼び出しが実行される直前に毎回呼ばれ、True で実行、False で拒否になる。人に尋ねる場合は、メンバー名、ページの URL、呼び出しの入力を見せ、URL と入力は印字可能な ASCII の外を全部エスケープするよう書かれている。どちらもページ由来のテキストを含みうるためである。アップロードは file_policy を渡さなければ、パスまたはドキュメント ID を指定するものがすべて拒否される。有効にするには、タスクのファイルだけが入った1つのアップロード用ディレクトリを持つポリシーを渡す。",
      "リモートやホスト型のブラウザには追加の注意がある。ガイドによると、SDK はブラウザがリモートかどうかを判別できない。付属のローカルファイルポリシーは、SDK を動かすプロセスのファイルシステム上のパスを検査するもので、リモートのブラウザが自分のファイルシステムを読み書きすることは守らない。そのためリモートブラウザでは、ドライバがブラウザの動く場所でアップロードのパスを検査する自前のポリシーを持たない限り、file_upload を切るよう書かれている。ホスト型ブラウザではプロバイダが egress とホストの隔離を管理するので、利用者側の egress ポリシーは効かず、ドライバのリクエストフックが唯一の検査になる。また、ブラウザのプロファイルは、Claude に渡したくないデータや操作を持つアカウントにログインしていてはならない。javascript_exec はページ自身の権限（Cookie、ストレージ、ログイン済みセッション）で動く。",
      "デスクトップ側の違いも書かれている。computer のクラスには URL ポリシーもファイルポリシーも状態報告も無い。type、key、hold_key のいずれかを実装すると、confirm を渡すか configs でそれらを無効にしない限り、コンストラクタが設定エラーを出す。confirm が受け取るのはツール名と入力で、画面ではない。そのため、ある座標へのクリックが何を押すのかは、承認の時点では判別できないと Limitations に書かれている。承認は最後の状態報告に基づくので、報告のあとにページが変わっても SDK は呼び出し前に再確認しない。1つの toolset の呼び出しは1つずつ順に実行され、これは無効にできない。",
      "このほか、ツールランナーに stream と run_tools_eagerly を渡すと、応答がストリーミング中のうちにブラウザやデスクトップの呼び出しを始められる。ガイドによれば、検査は先に走り、confirm もストリーミング中に呼ばれうる。始まった呼び出しは取り消せず、応答が max_tokens で切れても動作は実行されるが、Claude はその結果を読めない。SDK はローカルパスをエラー文に出る場合も隠さないので、ドライバで例外を捕まえ、ToolError に自前の文面を載せるよう勧められている。また、Amazon Bedrock 経由のブラウザ toolset のリクエストには、Anthropic のプロンプトインジェクション分類器が現時点では動かないという注記もある。",
      "確認できていない点を分けておく。この記事の根拠は Anthropic 自身の公式ドキュメントと、同社のリリースノートだけであり、実装の動作を第三者が再現した記録は確認していない。ガイドが示すコードは筆者が実行しておらず、SDK のバージョン番号やパッケージ側のリリースノートは今回読んでいない。ベータ機能のため、クラス名の日付（20260801）を含めて仕様が変わる可能性がある。パートナー各社のドライバの中身は、各社のドキュメントにあたっていない。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "公式ガイドの「Run the toolset safely」6つの手順と、誰が担うか",
        "headers": [
          "手順",
          "内容",
          "担当"
        ],
        "rows": [
          [
            "1. URL ポリシー",
            "タスクに不要な navigate の URL をすべて拒否する関数を渡す",
            "SDK が呼ぶ（中身は利用者が書く）"
          ],
          [
            "2. リクエストの傍受",
            "リンク、フォーム、リダイレクト、ページ自身のリクエストを同じ規則で検査する",
            "ドライバ"
          ],
          [
            "3. コンテナの egress 規則",
            "リンクローカルとプライベートのアドレスを遮断し、必要なホストだけに出口を絞る",
            "配備"
          ],
          [
            "4. アップロードとダウンロードの制限",
            "file_upload は既定で無効。有効にするなら専用ディレクトリ1つ",
            "SDK が適用"
          ],
          [
            "5. 影響の大きいメンバーの承認",
            "javascript_exec と file_upload は confirm コールバックが必須",
            "SDK が適用"
          ],
          [
            "6. ブラウザホストの隔離",
            "セッションごとに専用のコンテナか VM。ログイン済みでないプロファイルを使う",
            "配備"
          ]
        ]
      },
      {
        "afterParagraph": 7,
        "caption": "browser のクラスと computer のクラスの違い（公式ガイドより）",
        "headers": [
          "項目",
          "browser",
          "computer"
        ],
        "rows": [
          [
            "継承元のクラス",
            "BetaAbstractBrowserToolset20260801",
            "BetaAbstractComputerToolset20260801"
          ],
          [
            "コンストラクタの主な引数",
            "configs / confirm / url_policy / file_policy / tool_configs",
            "configs / confirm / tool_configs"
          ],
          [
            "URL ポリシー・ファイルポリシー・状態報告",
            "あり",
            "なし"
          ],
          [
            "confirm が必須になる条件",
            "javascript_exec または file_upload を有効にしたとき",
            "type / key / hold_key を実装したとき（無効にする場合を除く）"
          ],
          [
            "confirm が受け取るもの",
            "メンバー名、ページの URL、入力",
            "ツール名と入力（画面は渡らない）"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Platform リリースノート（2026年10月7日の項）",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      },
      {
        "title": "Browser and computer use with the SDK toolsets（公式ガイド）",
        "url": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-sdk"
      },
      {
        "title": "Browser use tool（公式ドキュメント）",
        "url": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-tool"
      }
    ]
  },
  "claude-code-2-1-299-idle-compaction-file-mentions-mcp-allow-rule-2026": {
    "body": [
      "anthropics/claude-code のリリースページによると、Claude Code 2.1.299 は2026年10月14日に公開された（ページに年の表示は無く、フッターの表記から2026年と判断した）。直前の記事で扱った 2.1.296 の次の版にあたる。リポジトリの CHANGELOG.md では 2.1.299 の次の項目が 2.1.296 で、2.1.297 と 2.1.298 の項目は見当たらない。2.1.298 のリリースページは 404 だった。この記事は公式のリリースノートをもとに、自分の版にその機能があるかを判断できるよう整理する。内容はリリースノートの記載に基づき、実際の挙動は検証していない。",
      "日々の使い方に関わるのは idle compaction である。端末版で、200K トークンを超える会話を約54分放置すると、1時間のプロンプトキャッシュが切れる前に圧縮される。次のメッセージで会話全体をキャッシュなしで処理し直さずに済む、という説明がリリースノートにある。最小トークン数は環境変数 `CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS` で変えられ、settings.json の `\"idleCompaction\": false` で無効にできる。どちらも v2.1.290 以降が必要と書かれている。圧縮は会話の内容を要約に置き換えるため、放置後に詳細な文脈が必要な作業では、無効にするかどうかを自分で判断することになる。",
      "`CLAUDE_CODE_DISABLE_FILE_MENTIONS` も加わった。設定すると、`@` でファイルを指定したときに、Claude にはファイルの内容ではなくパスが渡され、Claude が自分のファイルツールで読む。エージェント表示では、`/effort` と `/fast` が新しいセッションの初期値を設定し、引数なしの `/model`、`/effort`、`/fast` は選択画面を開く。",
      "MCP まわりでは、Cloud と Remote Control のコネクタが、既定で MCP プロトコル版 2026-07-28 を交渉する。以前の挙動にしたい場合は `MCP_PROTOCOL_NEGOTIATION=legacy` を設定する。また、allow ルールは指定したサーバーだけに一致するようになり、名前に `__` を含むサーバーには `mcp__<server>__*` と書く必要がある。同じ版で、名前に二重アンダースコアを含むサーバーに対する `mcp__<server>` の deny / ask ルールが効かなかった問題も修正された。名前の規則が変わるため、既存の権限設定にそのようなサーバーがある場合は見直す価値がある。",
      "スキルとフックでは、名前に非表示文字、向きを変える文字、`<` や `>` を含むスキルやコマンドは、名前を直すまで提示されなくなった。`UserPromptSubmit` フックは、スキルやカスタムコマンドが展開される前に実行される。管理者向けには、`claude self-hosted-runner orchestrator` に `--shutdown-drain-sec` が入り、SIGTERM を受けた後、実行中の処理に指定秒数まで猶予を与える。",
      "Mods（2.1.287 で導入）に関する追加も多い。managed 設定で入れた Mod は、`$.prompt.media` で添付された画像や文書のバイト列を、`$.session.identity()` でサインイン状態を読める。`Text` に `size`・`weight`・`mono`・`tabular` が加わり、`bold` は `weight` に置き換えられる予定で非推奨になった。`claude plugin eval` には `--disallow-tools` が加わった。",
      "修正は131件と書かれており、ここでは安全性に関わるものに絞る。サンドボックス内のシェルコマンドが `--plugin-dir` のフォルダに書き込めてしまう問題（その中のコードはサンドボックス外で再読み込み・実行される）、チームメイトのエージェントのタスク説明に認証情報の一部が残る問題、サードパーティのゲートウェイ用の API キーが Anthropic 宛ての各種リクエストに付く問題が直った。`/usage`、上限接近の警告、ステータスラインが100%を超えて表示されることがある問題も直っている（anthropics/claude-code#92238）。2.1.296 で入った退行として、クラウドとヘッドレスのセッションで、再開時に新しいメッセージが届くと承認済みのツール呼び出しが2回走りうる問題と、Cowork と claude.ai のクラウドセッションで編集と再試行が失敗する問題も直ったと書かれている。完全な一覧は公式のリリースページにある。"
    ],
    "primarySources": [
      {
        "title": "Claude Code v2.1.299 リリースノート（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/releases/tag/v2.1.299"
      },
      {
        "title": "CHANGELOG.md（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      }
    ]
  },
  "anthropic-claude-api-opentelemetry-export-beta-2026": {
    "body": [
      "Claude Platform のリリースノートによると、Anthropic は2026年10月14日、OpenTelemetry 出力をベータで公開した。Messages API のリクエストと Claude Managed Agents のセッションを、利用者がすでに使っている監視基盤（オブザーバビリティ基盤）でトレースできる。この記事は公式ドキュメントの記載をもとに整理したもので、実際の挙動は検証していない。",
      "仕組みは2通りある。1つは SDK 側のトレースで、Python・TypeScript・C#・Go・Java・PHP・Ruby の SDK がスパンを出す。必要な権限は無い。もう1つは API 側のトレースで、Claude Console に「送信先（destination）」を登録すると、API が自分でスパンを作って送る。こちらは Claude Console の Admin ロールが必要で、アプリのコードを変えずに使える。両方を有効にすると、1つのリクエストの SDK スパンと API スパンを1本のトレースにまとめて見られる。",
      "何が見えるかは、経路で違う。公式の比較表では、Messages API と Sessions API のリクエスト、トークン使用量は SDK・API のどちらでも取れる。一方、リクエスト内の各モデル実行、Managed Agents のターン、API が実行するサーバーツールは API 側のトレースだけで、tool runner が実行するクライアントツールやセルフホストのサンドボックス内のツールは SDK 側のトレースだけで取れる。",
      "送信先の登録には、HTTPS・ポート443の OTLP/HTTP エンドポイント（protobuf 形式、ホスト名指定）とその認証情報が要る。自前の OpenTelemetry Collector は既定でポート4318を待ち受けるため、443で受けるか手前にロードバランサやリバースプロキシを置く必要がある。対象のワークスペースは「すべて」「選択」「選択を除く」から選べる。Admin API と CLI（ant）からも登録でき、curl の例では anthropic-beta ヘッダに telemetry-destinations-2026-08-11 が使われている。公式が連携先として挙げているのは Arize AI、Braintrust、Databricks、Datadog、Grafana Cloud、Honeycomb、Langfuse、LangSmith、New Relic、PostHog、Sentry、Splunk で、OTLP を受けるサービスなら使える。",
      "内容モードは、データの扱いを決める設定である。既定の「メタデータのみ」では、識別子・時間・状態・トークン数のほか、利用者が付けたエージェントやツールの名前・説明、MCP サーバー名が入る。「全内容」を選ぶと、モデルへのプロンプトと応答も入る。プロンプトと応答は gen_ai.input.messages と gen_ai.output.messages などの属性に入り、公式のスパン一覧では Content のバッジが付く。公式は、全内容は監視基盤側のアクセス権と保持期間のもとで保管されるため、組織の要件に合うか確認するよう注記している。",
      "データ保持に関する条件も公式に書かれている。HIPAA・FERPA・K-12 のデータ取り扱い制限が Anthropic との間にある組織では、送信先の設定が全内容でもメタデータしか出ない（SDK のスパンは影響を受けない）。ゼロデータリテンション（ZDR）の下でも全内容は使え、Messages API のリクエストでは、API は配信するまで内容をメモリ上にだけ保持する。ただし Managed Agents は ZDR の対象外で、OpenTelemetry を使ってもデータ保持は変わらない。配信後のデータは、利用者が選んだサービスが自らの保持・アクセス制御のもとで保持し、Anthropic の外にある。",
      "全内容のスパン1つあたりの内容量は、既定で0.75MBまでである。公式は、英語テキストの200kトークンの文脈に収まり、多くの監視基盤やプロキシの1MBというリクエスト上限を下回る大きさだと説明している。超えると切り詰められ、anthropic.content.truncated が true になる。1Mトークンの文脈を丸ごと残すには約4MBが要る。",
      "配信の性質は、集計に使うときの注意点になる。配信は「少なくとも1回」なので同じスパンが複数回届きうる。一方で「ベストエフォート」なので、配信前に失われたスパンは再送されない。公式は、エクスポートされたスパンは API 利用量の完全な記録を保証しない、と明記している。また呼び出し側が traceparent ヘッダのサンプリングフラグを切れば、そのリクエストのスパンは出ない。API キーごとの利用量、たとえば漏洩したキーの検知には、スパンのない利用も数える Usage API を使うよう案内されている。トークンを二重に数えないための合算の規則（SDK と API のどちらか一方のスパンを使う、など）も公式に書かれている。",
      "運用面の制約もある。送信先は組織あたり10件（無効なものを含む）までで、リクエストヘッダは1送信先あたり20個まで。エンドポイントはTLSハンドシェイクと応答ヘッダをそれぞれ5秒以内、配信全体は10秒以内に完了する必要がある。リダイレクト（3xx）を返す、非公開のIPに解決される、24時間すべての配信が失敗する、のいずれかで API は送信先を無効にする。対応するプラットフォームは Claude API と Claude Platform on AWS（どちらもベータ）で、AWS 側は traceparent ヘッダにまだ対応しておらず、スパンは常に独立したトレースになる。",
      "確認できていないこと。この記事は公式ドキュメントとリリースノートの記載に基づく。スパンの属性の全体（スパン一覧のページ）、各連携先での表示、実際の遅延やオーバーヘッドは確認していない。独立した検証や第三者の評価も確認していない。導入する場合は、内容モードをメタデータのみから始め、全内容へ広げる前に監視基盤側の保持期間とアクセス権を見直すのが、公式の注記に沿った進め方になる。なお Claude Code・Agent SDK・Cowork の監視は別の文書（Claude Code monitoring など）が扱っており、今回の対象外である。"
    ],
    "tables": [
      {
        "caption": "SDK 側と API 側のトレースで取れるもの（公式の比較表をもとに整理）",
        "afterParagraph": 2,
        "headers": [
          "項目",
          "SDK トレース",
          "API トレース"
        ],
        "rows": [
          [
            "Messages API・Sessions API のリクエスト、トークン使用量",
            "取れる",
            "取れる"
          ],
          [
            "リクエスト内の各モデル実行",
            "取れない",
            "取れる"
          ],
          [
            "Managed Agents のターン",
            "取れない",
            "取れる"
          ],
          [
            "API が実行するサーバーツール",
            "取れない",
            "取れる"
          ],
          [
            "tool runner が実行するクライアントツール",
            "取れる",
            "取れない"
          ],
          [
            "セルフホストのサンドボックス内のツール",
            "取れる",
            "取れない"
          ],
          [
            "ファイルのアップロードなど他の API リクエスト",
            "取れる",
            "取れない"
          ],
          [
            "設定方法・必要な権限",
            "コード・権限なし",
            "Console・Admin ロール"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Platform リリースノート（2026年10月14日の項）",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      },
      {
        "title": "OpenTelemetry for the Claude API（Claude Platform ドキュメント）",
        "url": "https://platform.claude.com/docs/en/manage-claude/opentelemetry"
      },
      {
        "title": "Use OpenTelemetry with the Claude API（送信先の登録・配信・制限）",
        "url": "https://platform.claude.com/docs/en/manage-claude/opentelemetry/api"
      }
    ]
  },
  "claude-code-2-1-300-hook-updatedinput-validation-transcript-requests-2026": {
    "body": [
      "anthropics/claude-code の CHANGELOG.md の先頭には 2.1.300 の項目があり、npm レジストリの記録では @anthropic-ai/claude-code の 2.1.300 は2026年10月14日（UTC 14:27）に公開されている。直前に扱った 2.1.299 の次の版にあたる。ここでは、自分の版にその挙動があるかを判断できるよう、権限・記録・終了処理に関わる変更を中心に整理する。内容は CHANGELOG の記載に基づき、実際の挙動は検証していない。",
      "権限まわりで目立つのはフックの変更である。PreToolUse と PermissionRequest フックが返す `updatedInput` は、Claude 自身が作る入力と同じ基準で検証されるようになった。未知のキーは捨てられ、ツールが受け付けない入力になった場合は、その呼び出しが拒否される。フックで入力を書き換えている構成では、書き換え後の形がツールの仕様に合っているかを確かめる必要がある。同じ版では、エージェントフックが `model` を無視していた問題も直り、`haiku` のようなエイリアスが解決される。指定したモデルが使えないときは、許可を出すのではなく呼び出し元のモデルに切り替わる、と書かれている。",
      "ローカルのセッション記録も変わった。各 API リクエストのシステムプロンプト・ツール・パラメータが記録に残り、共有した記録からリクエストを正確に再現できるとされている。デバッグには役立つ一方、記録を他者に渡す場合は、そこにシステムプロンプトやツール定義が含まれることを前提に扱うことになる。また、api.anthropic.com への大きなリクエストは、テレメトリを無効にしていても gzip 圧縮で送られる。無効にするには `CLAUDE_CODE_GZIP_REQUEST_BODIES=0` を設定する。",
      "終了時の挙動では、終了を指示してから1.5秒たっても動いている背景コマンドが強制終了される。全画面モードでは、これまで背景コマンドが残りうるとされていた。`claude daemon stop --any` は、止まらないバックグラウンドサービスがある場合に「stopped」と表示するだけで済ませず、待機して強制終了し、それでも残っていれば終了コード1で知らせる。`claude remote-control` から `--sandbox` と `--no-sandbox` が削除された。どちらも効果が無かったとされ、渡すとエラーで終了する。サンドボックスは settings の `sandbox.enabled` で設定する。",
      "ホスト管理の環境向けには、`CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST` のセッションが、settings に書かれた `SSL_CERT_FILE` のような CA バンドル・ツールプロキシ・git の TLS や設定に関する変数を無視するようになった。Claude Desktop の下では、プロジェクト設定のものだけが対象である。`claude gateway` は、Claude Desktop が gateway から使えない `desktop:` ポリシーのキーがあると、警告で続行せず、キー名を示して起動を止める。",
      "Mods（2.1.287 で導入）には、プロンプトボックスに描画されるが入力にも送信にも入らない `virtualText`、エージェントの会話記録を主画面に出す `$.ui.view({ agentId })`、右から左へ書く文字向けの `dir`、`prompt.change` フック、ワークフローのエージェントの `prompt` と `model` を `agent.spawn` フックで書き換える機能が加わった。OpenTelemetry では、`api_request` イベントにキャッシュ書き込みを寿命別に分ける `cache_creation_5m_tokens` と `cache_creation_1h_tokens` が入り、トレースのスパンに `gen_ai.provider.name` や `gen_ai.conversation.id` などの GenAI セマンティック規約の属性が付く。",
      "ほかに、MCP ツールの入力スキーマが API に拒否されて毎ターン 400 エラーになる問題が直り、該当ツールだけがパラメータなしで送られる。`--worktree` の起動位置が誤る問題や、reftable を使うリポジトリでの不具合も複数直った。VS Code 拡張には、エディタで選択したテキストをメッセージに加えない `claudeCode.attachSelection` 設定が入った。Claude Tag には Slack Connect チャンネルへの対応（既定は無効）と、コネクタ操作の承認を求める Allow once / Deny カードが入っている。全項目は公式の CHANGELOG にある。"
    ],
    "primarySources": [
      {
        "title": "CHANGELOG.md（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリ）",
        "url": "https://www.npmjs.com/package/@anthropic-ai/claude-code"
      }
    ]
  },
  "gemini-cli-0-64-atomic-writes-state-recovery-release-notes-2026": {
    "body": [
      "google-gemini/gemini-cli の docs/changelogs/latest.md は、最新の安定版を v0.64.0（2026年10月13日公開）としている。npm レジストリでは `latest` タグが 0.64.0 を指し、公開時刻は同日 UTC 20:48 だった。直前に扱った 0.63.0 の次の安定版にあたる。以下は公式の変更履歴の記載に基づく整理で、実際の挙動は検証していない。",
      "今回の中心は、途中で止まっても壊れにくくすることである。ファイルツールの操作が直列化され、書き込みは原子的に行われる。CLI の状態は原子的に保存され、破損を検知するとバックアップから自動で復旧する。変更履歴の項目名で見る限り、長時間のエージェント実行や複数の操作が重なる場面で、ファイルや状態が中途半端な内容になる事態を避ける狙いと読める（狙いの説明は変更履歴に無く、項目名からの読み取りである）。",
      "長い会話に関わる変更もある。会話記録を扱う ChatRecordingService が、追記型の差分で保存するようになり、履歴の窓の大きさにも上限が設けられた。変更履歴は、メモリとディスクの効率を上げるためと説明している。具体的な数値は変更履歴に書かれていない。",
      "入力まわりでは、`@file:line` 形式の参照が解決される。コードブロック内の `@` で CPU が張り付く問題と引用符が消える問題、ゴーストテキストの折り返しで固まる問題も直った。Ctrl+C の緊急中断が、実行中の処理のキャンセル処理に確実に届くようになり、選択リストを Enter とスペースで確定する動作も安定した。Windows では、ConPTY が IME のカーソル位置を転送するようになり、拡張機能の更新中にディレクトリ削除がロックで失敗したときの再試行も入った。",
      "ヘッドレスでは、解決済みのフォルダ信頼の状態が伝わるようになった。ACP（Agent Client Protocol）まわりでは、PromptResponse の利用量を橋渡しして usage_update 通知を出す変更と、セッションを正確な ID で解決する変更が入っている。a2a-server の設定を V1 から V2 へ移行する処理も加わった。全項目は公式の変更履歴にある。"
    ],
    "primarySources": [
      {
        "title": "Gemini CLI 変更履歴（latest, v0.64.0）",
        "url": "https://github.com/google-gemini/gemini-cli/blob/main/docs/changelogs/latest.md"
      },
      {
        "title": "@google/gemini-cli（npm レジストリ）",
        "url": "https://www.npmjs.com/package/@google/gemini-cli"
      }
    ]
  },
  "claude-code-2-1-301-retry-watchdog-fable-alias-fallback-classifier-otel-2026": {
    "body": [
      "anthropics/claude-code の CHANGELOG.md の先頭には 2.1.301 の項目があり、npm レジストリの記録では @anthropic-ai/claude-code の 2.1.301 は2026年10月15日（UTC 14:34）に公開されている。直前に扱った 2.1.300 の次の版にあたる。ここでは、自分の版にその挙動があるかを判断できるよう、運用・権限・観測に関わる変更を中心に整理する。内容は CHANGELOG の記載に基づき、実際の挙動は検証していない。",
      "無人で動かす構成に関わるのは、新しい環境変数 `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS` である。`CLAUDE_CODE_RETRY_WATCHDOG` を使った無人のリトライモードは、使用量の上限に当たると回復まで待つが、この値を設定すると、上限が解除されるまでの時間が長すぎるリクエストは待たずに終了する。CHANGELOG には「どのくらい先なら打ち切るか」の既定値は書かれていないため、設定する値は利用者が決めることになる。",
      "モデル指定では、`fable`（および `best`）のエイリアスが、最新の Fable モデルをその組織が使えないときに Anthropic API でエラーになる問題が直った。Claude Code は一度だけ、ひとつ前の Fable モデルで再試行する。また、コンテキストウィンドウの小さいモデルに切り替えるとき、会話が長すぎて収まらない場合は、切り替え前のモデルが先に要約するようになった。同じ版では、小さいウィンドウのモデルへ切り替えた際に、確認なしに使用量クレジットを使って前のモデルによる要約が行われる場合があった点も修正されている。LLM ゲートウェイが要求と別のモデル名を返す環境で、選んでいないモデルで何度も圧縮される問題も直った。",
      "権限と観測の面では、OpenTelemetry の `tool_decision` イベントに `classifier_verdict` と `permission_mode` が加わり、自動モードの分類器による判定と、権限ルールによる判定を区別できる。`OTEL_LOG_TOOL_DETAILS=1` を設定している場合は、分類器がブロックしたときに一致した組み込みルールの名前を示す `classifier_category` も出る。CHANGELOG は、これにより自動モードの分類器による判定と権限ルールによる判定を見分けられるようになる、と説明している。同梱の `claude-api` スキルには、`ant` CLI でトレースの送信先を設定する手順を含む OpenTelemetry の案内も追加された。",
      "ツールの失敗の見え方も変わった。Grep と Glob は、検索プログラムが結果を返す前に予期せず失敗したとき、これまでは「一致なし」と報告していたが、検索に失敗したというエラーを返すようになった。Read ツールは .xlsm・.parquet・.epub・.heic などのバイナリファイルをテキストとして読んでいた問題が直った。ワークフローのエージェントについては、タスクの文面にユーザーの権限が無いというハーネスの注記を読んだあと、手順を飛ばしたのに実行が成功と報告されることがある問題が修正された。",
      "Mods には、複数行のテキスト入力を端末に出す `rows`（Enter で送信、Shift+Enter かバックスラッシュ付き Enter で改行）が入り、`$.ui` の木表示は VS Code とデスクトップ・モバイルアプリで Markdown と最大48行まで持てるようになった（端末は従来どおり12行の平文）。フックの `.catch` は、フック自身が例外を投げるかタイムアウトしたときだけ動くように変わった。`WorktreeCreate` フックが作ったワークツリーが、未プッシュのコミットを含みうるのに、終了時に確認なしで削除される問題も修正された。",
      "ほかに、vim モードに `%`（対応する括弧へ移動）が加わり、Escape のあとも INSERT のままになる場合があった問題や、AskUserQuestion の自由入力で Esc が入力を捨てる問題が直った。ログインの更新がディスク満杯で失敗したときの誤解を招く「/login を実行してください」というエラーは、ディスクが原因であることを示すように変わった。VS Code 拡張には LaTeX の数式表示が入っている。全項目は公式の CHANGELOG にある。"
    ],
    "primarySources": [
      {
        "title": "CHANGELOG.md（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリ）",
        "url": "https://www.npmjs.com/package/@anthropic-ai/claude-code"
      }
    ]
  },
  "github-copilot-cli-1-0-95-to-1-0-98-agent-hooks-gemini-4-argon-2026": {
    "body": [
      "github/copilot-cli の変更履歴（changelog）によると、GitHub Copilot CLI は 2026年10月9日の 1.0.95 から10月14日の 1.0.98 までに、1.0.95・1.0.96・1.0.97・1.0.98 の4版が出た。直前の 1.0.89〜1.0.94 は別の記事で扱っている。この記事は changelog の記載をもとに、自分の版にその機能があるかを判断できるよう整理する。内容は記載に基づくもので、実際の挙動は検証していない。",
      "フックまわりでは、1.0.97 の「Add agent-scoped declarative hooks for custom agents」が目立つ。カスタムエージェントごとに、宣言的なフックを定義できるようになった。同じ版には、無人で動く Autopilot が preToolUse フックの「ask」の判断を、誰も見ていない権限ダイアログで止まる代わりに拒否として扱う変更がある。1.0.98 では、子プロセスの終了シグナルが失われても、コマンドフックが確実に完了するよう直された。また 1.0.97 は、--resume で再開したセッションがプラグインのフックを誤ったプラグイン一覧から組み立て直す問題を直している。リポジトリ内の marketplace プラグインのフックが再開後も動き続け、設定で無効にしたプラグインのフックは戻らない。",
      "権限の扱いも更新された。1.0.96 では、timeline に、あなた自身・Assisted Permissions・ポリシー・無人時のフォールバックのどれが各権限判断を下したかが表示される。/add-dir で追加したディレクトリは、そのセッションの間サンドボックスのアクセス対象になる。サンドボックスの対話設定では、環境変数に含まれる秘密の候補が提案され、保存前にマスクするホストを足せる。1.0.95 では、`copilot config` がサンドボックスの資格情報の injectHosts キーに対応し、Bash・Zsh・Fish でキーの補完が効く。1.0.97 は、/config で組織が設定した管理対象の権限ルールを読み取り専用にした。",
      "モデルでは、1.0.98 が「Add support for Gemini 4 Argon」と記している。Gemini 4 Argon は Google が9月30日に、まず信頼できるサイバー防衛者向けの Fairwind プログラムで提供すると発表したモデルで、一般提供は未定とされていた（本サイトの記事「Google が Gemini 4 Argon を発表」を参照）。Copilot CLI の changelog には、このモデルを誰が使えるか、料金がどうなるかは書かれていないため、ここでは扱わない。1.0.96 では /model と /config の model でモデル ID の大文字小文字を区別せず、正式な ID で保存する。",
      "認証と設定の項目もある。1.0.95 は macOS で利用できる場合に、ネイティブの Microsoft Entra ブローカー認証を使い、使えなければブラウザにフォールバックする。1.0.97 では、config.json の1項目が不正でも、閉じたプロンプト・信頼したフォルダ・サインインといった保存済みの設定を毎回リセットせずに保つ。/usage は、トークン課金のセッションで請求された AI Credits を表示する。再開したあとの表示にも出る。1.0.97 は --output-format json の出力で、有効な変数参照を保ったまま秘密情報を伏せる。",
      "MCP とセッションの再開に関する修正も続いた。1.0.97 は、GitHub MCP のツールやツールセットを明示的に選んだときに正しいエンドポイントを使い、書き込み系ツールが使えるまま残るようにした。キャッシュした MCP ツール呼び出しは、並行したツール一覧の更新でカタログが変わると定義を確かめ直す。中断したセッションを再開したときは、中断されたツール呼び出しが報告され、取り消された書き込みは再実行されない。長いセッションでは、JavaScript のヒープ不足で落ちる前に履歴を圧縮して生き残れる場合がある。1.0.98 では /ask の回答を Ctrl+E で展開し、Ctrl+Y で全文をコピーでき、/ask または /btw で直近の回答を開き直せる。",
      "なお、npm の公開記録には 10月15日以降に 1.0.99 の pre-release（1.0.99-0 など）が並んでいるが、changelog には正式な 1.0.99 の項目がまだ無く、この記事の対象に含めていない。ここに挙げたのは changelog の一部で、全項目は公式の changelog を参照してほしい。"
    ],
    "primarySources": [
      {
        "title": "GitHub Copilot CLI changelog（github/copilot-cli）",
        "url": "https://github.com/github/copilot-cli/blob/main/changelog.md"
      },
      {
        "title": "@github/copilot（npm）の公開記録",
        "url": "https://www.npmjs.com/package/@github/copilot"
      }
    ]
  },
  "claude-code-2-1-302-auto-mode-model-subagent-defaults-hooks-cap-2026": {
    "body": [
      "Claude Code 2.1.302 の変更履歴が公式リポジトリの CHANGELOG に載った。このサイトは直前の 2.1.301 までを記事にしている。本記事は 2.1.302 の中から、設定や運用に影響しうる項目を選んで整理する。出典は公式 CHANGELOG の1本のみで、各項目の挙動をこちらで実機確認したものではない。",
      "追加の1つ目は、環境変数 CLAUDE_CODE_AUTO_MODE_MODEL である。クライアント側の自動モード分類器が使うモデルを選べる。CHANGELOG には、サーバー側の自動モードのモデルは変えない、と明記されている。2つ目は /config の「Idle compaction」行で、放置した会話を自動で圧縮する idle compaction を切ったり戻したりできる。圧縮後に出る通知にも、止め方が書かれるようになった。",
      "既定動作の変更が3つある。第一に、claude -p と Agent SDK で権限モードを指定していないセッションは、サードパーティのプロバイダー上、テレメトリーが無効、または新規インストールのときに default モードで始まる。--permission-mode auto を指定した場合は auto のままである。第二に、fork サブエージェント（subagent_type が fork のもの）が、claude -p、Agent SDK、デスクトップアプリ、VS Code でも既定でオンになった。ターミナルでは以前からオンだった。環境変数 CLAUDE_CODE_FORK_SUBAGENT=0 で切れる。claude mcp serve は fork を提供しない。第三に、デスクトップアプリと VS Code は、メイン会話のサブエージェントを常にバックグラウンドで動かす。サブエージェント自身が呼ぶ Agent は、これらの環境と claude -p、Agent SDK では既定でフォアグラウンドになる。",
      "フックについては、プロンプトフックとエージェントフックは同一イベントにつき同時に12件までしか走らず、残りは順番待ちになる。多数のフックを同じイベントに登録している構成では、実行の順序と所要時間が変わりうる。",
      "自動モードの周辺では、サーバー側分類器で会話が安全確認には長すぎる場合に、すべてのツール呼び出しを拒否する代わりに会話を圧縮するようになった。OpenTelemetry の tool_decision イベントでは、自動モードの分類器による多くのブロックで classifier_category が欠けていた問題が直った。また、tool_decision に新しい属性が増えたとき、OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT が低いと tool_use_id・tool_source・tool_parameters が押し出される問題も直った。",
      "修正の中には、データを失いうるものが含まれる。claude plugin などのサブコマンドが、設定の書き込みが終わる前に終了し、変更が失われたり .tmp ファイルが残ったりすることがあった。Read ツールは、画像として扱うファイルやその名前のパイプ、デバイスを、大きさに関係なく丸ごとメモリに読んでいた。128 MB を超える画像は拒否されるようになった。stdio MCP まわりでは、プロトコル版 2026-07-28 を使うサーバーが resultType・ttlMs・cacheScope を省くと、ツールが空に見えたり呼び出しがすべて失敗したりする問題が直った。ほかに、会話の圧縮中に中断すると出る「Prompt is too long」、Vertex や Bedrock へ途中で切り替えた後の diagnostics の入力エラー、ツールを途中で追加した後のプロンプトキャッシュ不一致、git 2.56 以降でのワークツリー作成の拒否、reftable 形式の git での marketplace 再クローンなども修正された。",
      "クラウドセッションとルーティンの項目もある。ルーティンのページに、直近の実行が始まらなかった理由（組織の同時クラウドセッション数の上限など）を示す帯が出る。ルーティンの実行が、クラウドセッションの予期しない停止後も「完了」と表示される問題、実行前にアーカイブされると「キャンセル」と表示される問題は、失敗として扱われるように直った。途中で失敗した定期実行が1時間以上あとに最初からやり直され、同じレポートを二重に投稿しうる問題も直った。",
      "利用者に直接関わる告知が1つある。/design-sync と /design-login に、スタンドアロン版の Claude Design（claude.ai/design）が 2026年12月14日に終了するという案内が入った。終了後の移行先は、この CHANGELOG の記述からは分からない。",
      "このほかに、Windows で exFAT や FAT32 のドライブ上のプロジェクトにおいてファイル書き込みがすべて拒否される問題、PowerShell ツールがプラグインの bin/ フォルダのコマンドを見つけられない問題、多数のプラグイン有効時の起動時間の改善などが載っている。Claude Tag（Slack）、VS Code、Remote Control 向けの修正も多数ある。全項目は出典の CHANGELOG を参照してほしい。"
    ],
    "primarySources": [
      {
        "title": "anthropics/claude-code CHANGELOG.md（2.1.302）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      }
    ]
  },
  "anthropic-fast-mode-opus-5-5-no-waitlist-2026": {
    "body": [
      "Claude Platform のリリースノートによると、Anthropic は2026年10月15日、Claude Opus 5.5 の fast mode をリサーチプレビューから出した。これまでは利用に申請（ウェイトリスト）が必要で、リクエストにベータヘッダ `fast-mode-2026-02-01` を付ける必要があった。Opus 5.5 ではどちらも要らない。ヘッダを付け続けているリクエストも引き続き動く。この記事は公式ドキュメントの記載をもとに整理したもので、速度や挙動は検証していない。",
      "fast mode は、同じモデルを速い推論構成で動かす機能である。公式は「同じ重み、同じ挙動で、知能や能力は変わらない」と説明している。速くなるのは出力トークンの毎秒数（OTPS）で、最初のトークンが出るまでの時間（TTFT）ではない。「最大2.5倍」という数字は Anthropic の記述で、独立した計測は確認できていない。使い方は、リクエストに `speed: \"fast\"` を指定するだけである。レスポンスの `usage.speed` に、実際に使われた速度が `\"fast\"` か `\"standard\"` で返る。",
      "価格は、標準の単価に倍率をかけた形で、200k 入力トークンを超える長い文脈にも同じ倍率がかかる。Opus 5.5 は入力 $8 / 出力 $40（100万トークンあたり）で、標準の $4 / $20 の2倍にあたる。Opus 5 と Opus 4.8 は入力 $10 / 出力 $50 である。プロンプトキャッシュとデータレジデンシーの倍率は、fast mode の価格の上にさらに重なる。なお、Opus 5.5 の fast mode の単価はリサーチプレビュー中に公開されていた値から変わっていない（本サイトの9月22日の記事を参照）。",
      "レート制限は、通常の Opus とは別枠の専用枠である。Opus 5.5 には Start・Build・Scale の各利用ティアで既定の fast mode 枠が付くため、枠の申請は要らない。Evaluation ティアの組織は、Start・Build・Scale のいずれかに上がれば使える。上限を超えると 429 が返り、`retry-after` ヘッダで待ち時間が示される。SDK は既定で2回まで自動再試行する。標準速度に切り替えて続けたい場合は、最初のリクエストで `max_retries` を 0 にして 429 を捕まえ、`speed` を外して出し直す例が公式に載っている。この切り替えではプロンプトキャッシュが効かなくなる。速度が違うリクエストはキャッシュされた接頭辞を共有しないためである。",
      "提供範囲には制限がある。Opus 5.5 は Claude API（Claude Managed Agents を含む）と、Azure 上でホストされる Claude in Microsoft Foundry で使える。同じ Foundry でも Anthropic がホストするデプロイでは使えない。公式の考慮事項には、Batch API では使えないこと、Priority Tier の契約とは併用できないこと、Claude Platform on AWS では現時点で使えないことも書かれている。Opus 5 と Opus 4.8 の fast mode は、これまでどおりリサーチプレビューで、アカウント担当への連絡かウェイトリストへの登録と、ベータヘッダが必要である。以前の別のモデルで fast mode を使っていた場合は、対応モデルへの移行が案内されている。",
      "確認できていないこと。この記事は公式ドキュメントとリリースノートの記載だけに基づく。「最大2.5倍」の実測、レート制限の具体的な数値（Console の画面で確認する形式で、ドキュメントには載っていない）、Claude Code など他の製品での fast mode の扱いは確認していない。同じ出来事を報じた独立した情報源も確認できていない。"
    ],
    "tables": [
      {
        "caption": "fast mode の対応モデルと条件（公式ドキュメントをもとに整理、2026年10月17日時点）",
        "afterParagraph": 4,
        "headers": [
          "項目",
          "Opus 5.5",
          "Opus 5 / Opus 4.8"
        ],
        "rows": [
          [
            "状態",
            "リサーチプレビューを終了",
            "リサーチプレビュー"
          ],
          [
            "利用の申請",
            "不要",
            "アカウント担当への連絡またはウェイトリスト"
          ],
          [
            "ベータヘッダ `fast-mode-2026-02-01`",
            "不要（付けても動く）",
            "必要"
          ],
          [
            "fast mode の単価（入力 / 出力、100万トークンあたり）",
            "$8 / $40",
            "$10 / $50"
          ],
          [
            "既定のレート制限枠",
            "Start・Build・Scale の各ティアにあり",
            "記載なし"
          ],
          [
            "Azure 上の Microsoft Foundry",
            "対応",
            "記載なし"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Platform リリースノート（2026年10月15日の項）",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      },
      {
        "title": "Fast mode（Claude Platform ドキュメント）",
        "url": "https://platform.claude.com/docs/en/build-with-claude/fast-mode"
      }
    ]
  },
  "codex-cli-0-163-config-panel-steer-leader-key-2026": {
    "body": [
      "OpenAI の Codex リポジトリのリリースページによると、Codex CLI 0.163.0 は2026年10月15日（UTC）に公開され、執筆時点で最新の安定版として表示されている。前回扱った 0.161.0〜0.162.0 は別記事にある。この記事は公式のリリースノートをもとに、自分の版にその機能があるかを判断できるよう整理する。内容はリリースノートの記載に基づき、実際の挙動は検証していない。",
      "新機能は6点ある。第一に、`/config` が検索できるパネルになり、設定をその場で変えられる。再起動が必要な変更はパネル上で区別される。第二に、応答の途中で送った追加のメッセージが、応答を止めずに進行中の作業を方向づける（steer）。割り込んだときには、動いている Code Mode のセルも止まる。第三に、`/keymap` でリーダーキーを設定できる（既定は Ctrl+X）。音声のミュートは F9 に移った。",
      "第四に、`/daemon` で管理されたバックグラウンドサーバーを再起動でき、中断されうる作業があれば警告が出る。第五に、互いに独立した読み取り専用のツールを並列に実行できる。第六に、Daybreak が対象アカウントで既定でオンになり、`codex exec` では API キーで Daybreak を選べる。Daybreak が何を指すかは、今回確認したリリースノートの文面からは分からない。",
      "バグ修正は主に5系統である。保存したスレッドを再開すると、権限とネットワークの承認が復元される。ネットワークプロキシは DNS の名前解決より前に権限を確認し、重複した Host ヘッダーを拒否し、資格情報の別名による検査の回避を防ぐ。`/side` は既存のサイド会話に戻れるようになり、プロンプトへの回答は元のスレッドに返る。",
      "Windows では Ctrl+V と Shift+Insert でテキストを貼り付けられる。WSL ではクリップボードの読み取りを使い回し、コピーの試行にタイムアウトが付いた。ローカルのコマンドは、子プロセスが出力パイプを開いたままでも速やかに終わり、リモートの出力が遅れて届いても保たれる。`codex exec` は、無関係なコマンドの後に同じファイルの差分を繰り返さなくなった。",
      "ドキュメントでは、同梱の OpenAI Docs の案内が GPT-6 系への移行を扱うようになり、Linux のサンドボックスの説明に bubblewrap によるファイルシステムの分離と seccomp による syscall の絞り込みが加わった。",
      "既存の設定に影響しうる変更は、パッチ済み `zsh` の同梱が終わったことである。Codex は標準のシェル実行を使い、廃止されたシェル関連のフラグを含む設定には移行の通知が出るとされる。どのフラグが該当するかは、確認したリリースノートの要約には書かれていないため、該当しそうな設定を使っている場合は原文で確かめたい。このほか、Linux と macOS のパッケージは、バイナリのシンボルを取り除いて小さくなった。",
      "0.163.0 の公開後も、10月16日と17日に 0.164.0 のアルファ版が出ているが、リリースノートは付いておらず、この記事の対象は安定版の 0.163.0 のみである。"
    ],
    "primarySources": [
      {
        "title": "Codex CLI 0.163.0 リリースノート（openai/codex）",
        "url": "https://github.com/openai/codex/releases/tag/rust-v0.163.0"
      },
      {
        "title": "Codex リリース一覧（openai/codex）",
        "url": "https://github.com/openai/codex/releases"
      }
    ]
  },
  "anthropic-sonnet-5-5-cache-read-price-cut-2026": {
    "body": [
      "Claude Platform のリリースノートによると、Anthropic は2026年10月7日、Claude Sonnet 5.5 のプロンプトキャッシュ読み取りの単価を、100万トークンあたり $0.20 から $0.10 に下げた。基本の入力単価に対する倍率でいえば、0.1 倍から 0.05 倍である。リリースノートは「キャッシュ書き込みとそのほかの価格は変わらない」と明記している。同じ日に Claude Haiku 5.5 も公開されていて、リリースノートでは同じ日付の項に並んでいる。この記事は公式ドキュメントの記載を整理したもので、請求額の実測はしていない。",
      "いまの Sonnet 5.5 の単価は、公式の料金ページでは次のとおりである（100万トークンあたり）。入力 $2、出力 $10、5分キャッシュ書き込み $2.50、1時間キャッシュ書き込み $4、キャッシュ読み取り $0.10。書き込みの倍率は、プロンプトキャッシュのドキュメントにある 5分で 1.25 倍、1時間で 2 倍と一致する。",
      "読み取りの倍率はモデルによって違う。プロンプトキャッシュのドキュメントは、読み取り（ヒット）を「基本の入力単価の 0.1 倍」としたうえで、Claude Fable 5.1 と Claude Mythos 5.1 は 0.025 倍、Claude Opus 5.5 と Claude Sonnet 5.5 は 0.05 倍と書いている。料金ページの Opus 5.5 の行は、入力 $4、キャッシュ読み取り $0.20 である。この記事では、Opus 5.5 の倍率がいつから 0.05 倍になったかは確認していない。リリースノートで日付が付いた変更として確認できたのは Sonnet 5.5 の件だけである。",
      "単純な例で、差を見る。10万トークンの共通部分（システムプロンプトや参照資料）をキャッシュして、1リクエストごとに読み取る場合、読み取り分の料金は変更前が $0.02、変更後が $0.01 になる。ここに、キャッシュされていない入力と出力の料金が別に加わる。何回読み取るか、キャッシュの有効期間内に収まるかで、全体の差は変わる。",
      "確認できていないこと。この記事はリリースノートと料金ページ、プロンプトキャッシュのドキュメントの記載だけに基づく。Amazon Bedrock や Google Cloud、Microsoft Foundry など、ほかの提供経路の料金が同じ扱いかどうかはドキュメントを読んでいない。同じ出来事を報じた独立した情報源も確認できていない。契約や割引の条件によって実際の請求は変わりうるため、採用判断では自分の利用状況で試算する必要がある。"
    ],
    "tables": [
      {
        "caption": "Claude Sonnet 5.5 の単価（公式の料金ページをもとに整理、100万トークンあたり、2026年10月18日時点）",
        "afterParagraph": 1,
        "headers": [
          "項目",
          "単価",
          "備考"
        ],
        "rows": [
          [
            "入力",
            "$2",
            "変更なし"
          ],
          [
            "出力",
            "$10",
            "変更なし"
          ],
          [
            "5分キャッシュ書き込み",
            "$2.50",
            "基本の入力単価の 1.25 倍。変更なし"
          ],
          [
            "1時間キャッシュ書き込み",
            "$4",
            "基本の入力単価の 2 倍。変更なし"
          ],
          [
            "キャッシュ読み取り",
            "$0.10",
            "10月7日に $0.20 から変更。0.05 倍"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Platform リリースノート（2026年10月7日の項）",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      },
      {
        "title": "Claude Platform ドキュメント: 料金",
        "url": "https://platform.claude.com/docs/en/about-claude/pricing"
      },
      {
        "title": "Claude Platform ドキュメント: プロンプトキャッシュ",
        "url": "https://platform.claude.com/docs/en/build-with-claude/prompt-caching"
      }
    ]
  },
  "weekly-metrics-2026-week-oct12": {
    "body": [
      "この記事はニュースのまとめではなく、サイト自身の公開データから計算した「計器」である。1週間を見渡して初めて出る数字を、解釈を添えて示す。数字は `node scripts/weekly-metrics.mjs` の出力（集計日2026年10月19日）に基づく。記事の件数・タグ・日付はサイト内のデータで、外部サイトの情報は使っていない（最後の節だけ例外で、そこに断り書きがある）。",
      "## 公開本数 — 13本、前週の10本から微増",
      "10月12日〜18日の公開は**13本**（前週10本）。種別は news 13 のみで、feature（特集・分析）とレビューは0本だった。分野は cli 7 / product 4 / model 2。出来事から掲載までの中央値は2日である（前週は1日）。日別では10月14日と15日が各3本、16日と17日が各2本、12日・13日・18日が各1本だった。",
      "前週の10本は、その前の週の41本から大きく減った数字だった。今週はそこから少し戻したが、**9月21日〜27日の36本の3分の1ほど**で、材料が少ない状態は続いている。出来事の日と掲載日がずれた記事が10本あり、最大は[Sonnet 5.5 のキャッシュ読み取り半額](?a=anthropic-sonnet-5-5-cache-read-price-cut-2026)の11日（出来事は10月7日、掲載は18日）だった。",
      "## 3軸のバランス — 発掘と分析は2週続けて0本",
      "このサイトは速報（主要プレイヤー）・発掘（新興・OSS・個人開発）・分析（社会的インパクト・規制・倫理）の3軸で書く方針を取っている。この週の13本はすべて主要ベンダーの更新で、**発掘と分析は前週に続いて0本**だった。2週連続で、型は news だけである。",
      "偏りの中身は Anthropic である。題材で数えると、13本のうち10本が Anthropic 関連だった（Claude Code の版が[2.1.299](?a=claude-code-2-1-299-idle-compaction-file-mentions-mcp-allow-rule-2026)・[2.1.300](?a=claude-code-2-1-300-hook-updatedinput-validation-transcript-requests-2026)・[2.1.301](?a=claude-code-2-1-301-retry-watchdog-fable-alias-fallback-classifier-otel-2026)・[2.1.302](?a=claude-code-2-1-302-auto-mode-model-subagent-defaults-hooks-cap-2026)の4本、API・SDK・プラン関連が[Max・Team の API クレジット](?a=anthropic-max-team-api-credits-2026)・[Models API の能力フィールド](?a=anthropic-models-api-capabilities-fields-2026)・[SDK のブラウザ操作 toolset](?a=anthropic-sdk-browser-computer-toolsets-beta-2026)・[OpenTelemetry 出力](?a=anthropic-claude-api-opentelemetry-export-beta-2026)の4本、価格が[Opus 5.5 の fast mode](?a=anthropic-fast-mode-opus-5-5-no-waitlist-2026)と Sonnet 5.5 の2本）。残る3本は [Gemini CLI 0.64.0](?a=gemini-cli-0-64-atomic-writes-state-recovery-release-notes-2026)、[GitHub Copilot CLI 1.0.95〜1.0.98](?a=github-copilot-cli-1-0-95-to-1-0-98-agent-hooks-gemini-4-argon-2026)、[Codex CLI 0.163.0](?a=codex-cli-0-163-config-panel-steer-leader-key-2026) である。タグの「Anthropic」は8件（前週5件）で、題材の数え方とずれるのは、タグが付いていない記事があるためである。",
      "**公式の変更履歴や API ドキュメントは、読みに行けば材料が必ず見つかる。** 今週の Anthropic の記事のうち4本は、出来事から掲載まで5日以上かかっており、日々の速報というより、ドキュメントの更新をあとから拾った形になっている。材料の取りやすさが、記事の偏りと一致している。これは原因の推定であり、このデータだけでは確かめられない。",
      "## 「AI安全性」の記事は、2週続けて0件",
      "タグの動きを見ると、「AI安全性」は今週も**0件**だった（前週も0件）。「中国AI」「エッジAI」「透明性」も0件である。一方、「セキュリティ」は2件（前週3件）付いた。ただし該当は、[SDK のブラウザ操作 toolset](?a=anthropic-sdk-browser-computer-toolsets-beta-2026)と[Claude Code 2.1.300](?a=claude-code-2-1-300-hook-updatedinput-validation-transcript-requests-2026)の2本で、いずれも製品機能の記事であり、エージェントの不正利用や規制を扱う記事とは性質が違う。",
      "**話題が減ったのか、拾えていないのかは、このデータでは切り分けられない。** 材料の面では、今週の調査で一次資料に届き、記事にできる規制・倫理の出来事を見つけられなかった。これは調査の到達範囲に依存するため、「出来事が無かった」とは言えない。",
      "## ガイドの空白は変わらない",
      "週次の計器が出す「記事で頻出するのに、ガイドに説明が無い概念」は、今週も同じ顔ぶれだった。直近90日の記事数は、「AI安全性」32件、「中国AI」18件、「エッジAI」11件、「個人開発」10件、「透明性」7件である（「Alibaba」8件は固有名詞のため、補強の対象としては数えていない）。「AI安全性」は9月14日の計器から、毎週この一覧に載っている。",
      "ガイド（`vibeCodingGuide.js`）への書き込みは、自律実行の Routine には禁じられており、対話セッションでの設計判断を要する。**計器が鳴る仕組みはあるが、鳴ったあとに空白を埋めるかどうかを決める場は、まだ動いていない。** 記事の本数が増減しても、この空白の大きさは変わっていない。",
      "## ツール別ページとの比",
      "直近90日の記事数とツール別ページの解説項目数の比は、Claude Code 0.31（29件 / 93項目）、Codex 0.30（14件 / 47項目）、VS Code + Copilot 0.17（6件 / 35項目）、Cursor 0.14（6件 / 44項目）、Gemini CLI 0.05（2件 / 43項目）、Power Apps 0（0件 / 20項目）だった。比が大きいほど、話題の割に解説が薄い。**Cursor は今週も記事が0本**で、2週続けて動きが無い。Claude Code は今週4本で、比が前週の0.27から上がった。",
      "## 取りこぼしの可能性 — 一次資料に届かなかった候補",
      "今週の調査では、二次報道（モデル公開の一覧をまとめたサイト）に、サイトがまだ記事にしていないモデルの名前が複数見つかった（xAI の音声モデル、NVIDIA のマルチモーダルモデルなど）。**これらは未確認情報であり、公開日・数値・性能の主張を、このサイトでは確かめていない。** 該当企業の公式ページ（x.ai など）に今回の環境から到達できなかったため、記事にしていない。確かめられるまで書かない、という判断である。取りこぼしかどうかは、次回以降の調査で一次資料に届いた時点で決まる。"
    ],
    "tables": [
      {
        "afterParagraph": 3,
        "caption": "この週の公開の内訳（10月12日〜18日）と前週との比較",
        "headers": [
          "項目",
          "10月12日〜18日",
          "前週（10月5日〜11日）"
        ],
        "rows": [
          [
            "公開本数",
            "13本",
            "10本"
          ],
          [
            "種別",
            "news 13",
            "news 10"
          ],
          [
            "分野",
            "cli 7 / product 4 / model 2",
            "cli 8 / model 1 / product 1"
          ],
          [
            "発掘・分析",
            "0本",
            "0本"
          ],
          [
            "出来事から掲載までの中央値",
            "2日",
            "1日"
          ]
        ]
      },
      {
        "afterParagraph": 11,
        "caption": "記事で頻出するのにガイドに説明が無い概念（直近90日、週次の計器の出力）",
        "headers": [
          "概念",
          "記事の件数",
          "この週に付いた記事"
        ],
        "rows": [
          [
            "AI安全性",
            "32件",
            "0件"
          ],
          [
            "中国AI",
            "18件",
            "0件"
          ],
          [
            "エッジAI",
            "11件",
            "0件"
          ],
          [
            "個人開発",
            "10件",
            "0件"
          ],
          [
            "透明性",
            "7件",
            "0件"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "AI News リポジトリ（週次の計器の算出元データ）",
        "url": "https://github.com/022740mix-spec/AI-News"
      }
    ]
  },
  "claude-code-2-1-303-304-auto-mode-setup-resume-warning-worktree-2026": {
    "body": [
      "Claude Code 2.1.303 と 2.1.304 の変更履歴が公式リポジトリの CHANGELOG に載った。このサイトは直前の 2.1.302 までを記事にしている。2.1.303 の記載は「Bug fixes and reliability improvements」の1行だけで、個別の項目は無い。2.1.304 は項目が多く、本記事は設定や運用に影響しうるものを選んで整理する。出典は公式 CHANGELOG の1本のみで、各項目の挙動をこちらで実機確認したものではない。",
      "追加の1つ目は /auto-mode-setup である。プロジェクトと直近のセッションを読み、自動モードに利用者の環境を教える案内付きの設定で、Bedrock、Vertex、Foundry、Claude apps gateway、テレメトリーを無効にしたセッションでも使えるようになった。2つ目は /claude-api managed-agents-secure で、Managed Agents のエージェント設定を Anthropic が公開しているセキュリティガイドと突き合わせる。CHANGELOG には、設定を変更しない、と書かれている。",
      "3つ目は使用量に関する警告である。Pro と Max のプランで、放置した会話を再開すると 5 時間の使用上限のうち目立つ割合を消費する場合に、警告が出る。そのまま再開するか、新しい会話を始めるかを選べる。新しい会話では、前の会話を参照すれば Claude が探せる、と説明されている。",
      "mod（プラグインが挙動の深部を変える仕組み）まわりでは、tool.check の応答に decider: \"person\" を指定できるようになった。この場合は権限ダイアログまたはホストのコールバックだけが承認でき、誰にも尋ねられない環境では mod の理由を付けて拒否される。tool.check のイベントには、ツール呼び出しが読み取り専用のときに立つ e.isReadOnly も加わった。先に動くプラグインが mod のフックを飛ばしたときは、イベント名とプラグイン名を示す行が記録に出る。settings.read フックは設定の各層を受け取り、統合後の設定を書き換えられるようになった。CHANGELOG は、管理された mod が組織の設定を上限にでき、保持期間の掃除が使う cleanupPeriodDays も対象になる、と述べている。",
      "データや安全確認に関わる修正がいくつかある。claude --worktree は、HEAD が切り離されているか別のブランチにあるとき、終了時にワークツリーとそのブランチを確認なしで削除し、コミットを失いうる状態だった。rm -r で、マウントしたドライブや最上位のフォルダ（/Volumes、/media、WSL の /mnt/c）を消す場合に、rm -rf /Applications では出る安全確認が出なかった問題も直った。CLAUDE_CODE_TRANSCRIPT_LOCAL_GC は、ディスクが満杯のときに保存済みの記録からメッセージを落とすことがあった。Linux のサンドボックスは、sandbox.filesystem.denyRead の glob に [user-id] のような角括弧が含まれると起動しなかった。",
      "環境変数 CLAUDE_CODE_AUTO_COMPACT_WINDOW=200k は、実際には 100K の窓として扱われていた。k と M の接尾辞を --autocompact と同じように受け付け、範囲外や無視される値には警告が出る。LLM ゲートウェイ越しでは、context_management の余分な入力を拒否されたときにそのフィールドを外して再送する。カスタムの ANTHROPIC_BASE_URL の背後では、ツール検索が既定でオンになり、ゲートウェイが 400 または 422 を返したらツール検索なしで再試行する。",
      "既定動作の変更もある。圧縮のあとにスキル一覧を Claude に再送するようになり、/reload-skills は新規または変更のあったスキルだけを送る。1つの出どころ（リポジトリ、自分のフォルダ、プラグイン）のスキルが登録できるフックは、セッションあたり最大 1,024 件、マッチャーの文字数は合計 16,384 文字までになった。プラグインのフックだけを許可するポリシーの下では、フックを締め出されたスキルはメイン会話で使っても allowed-tools を得られない。",
      "Code Review では、組織の所有者が Quick、Standard（既定）、Deep のレビュー水準を組織全体と個々のリポジトリに設定できる。GitHub 組織の全リポジトリ（のちに追加されたものを含む）を一括で対象にする設定も入った。Code Review を有効にした直後の 1〜2 分以内に開かれたプルリクエストが黙ってスキップされる問題は、再試行して審査するように直った。ほかに /effort の表示、Remote Control、Claude Tag、VS Code、Windows に関する修正が多数ある。全項目は出典の CHANGELOG を参照してほしい。"
    ],
    "primarySources": [
      {
        "title": "anthropics/claude-code CHANGELOG.md（2.1.303、2.1.304）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      }
    ]
  },
  "claude-code-2-1-305-nested-user-namespaces-tool-search-retry-allowedmcpservers-2026": {
    "body": [
      "Claude Code 2.1.305 の変更履歴が、公式リポジトリの CHANGELOG の先頭に載っている（2026年10月20日に確認）。このサイトは直前の 2.1.304 までを記事にしている。本記事は設定や運用に影響しうる項目を選んで整理する。出典は公式 CHANGELOG の1本のみで、各項目の挙動をこちらで実機確認したものではない。リリース日は CHANGELOG に書かれていないため、確認日を見出しの日付としている。",
      "追加の1つ目は sandbox.allowNestedUserNamespaces である。Linux でサンドボックス内のコマンドがユーザー名前空間を作れるようになり、Chromium や rootless podman が動かせる。CHANGELOG は同じ項目で、これによりサンドボックスのファイル保護を回避しうる、とも書いている。つまり実行できるものが増える代わりに、サンドボックスの保証が弱まる設定である。既定値や有効にした場合の具体的な回避経路は CHANGELOG に書かれていないため、ここでは確認できていない。",
      "2つ目は環境変数 CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS である。無人のリトライモード（CLAUDE_CODE_RETRY_WATCHDOG）が、使用上限のリセット前に解除された上限に気づけるようになる。2.1.301 で入った、無人リトライの待ち時間に上限を設ける変更と同じ系統の調整にあたる。",
      "最も影響が大きそうな修正は、2.1.304 の退行である。Vertex、Bedrock などのプロバイダーで、エンドポイントやゲートウェイがツール検索を拒否すると、すべてのリクエストが失敗していた。ToolSearch を許可していないゲートウェイや、--tools から ToolSearch を外した構成でも同じだった。2.1.305 ではツール検索なしで再試行する。該当する構成で 2.1.304 を使っている場合は、版の確認が要る。",
      "設定の扱いが変わった項目が3つある。1つ目は allowedMcpServers で、env にだけ ${VAR} を使う managed-mcp.json の stdio サーバーを、フィルタしなくなった。許可リストに入っていなかったサーバーは、アップグレード後に読み込まれる。読み込ませたくない場合は deniedMcpServers を使う、と CHANGELOG は述べている。2つ目は、Claude Desktop がパスでマウントするプラグインが、組織の管理設定で allowManagedPermissionRulesOnly が設定されているとき、allowed-tools を保持しなくなったこと。3つ目は /artifacts の削除確認で、1 または Enter で残す、2 で削除、Esc で取り消しになり、y と n では答えられなくなった。",
      "worktree と設定まわりの修正もある。bare リポジトリで新しい worktree が、既定ブランチではなくローカルの HEAD から始まることがあった問題と、変更のないサブエージェントの worktree が片付かないことがあった問題が直った。/effort と /autocompact の設定は、モデル名が modelOverrides の値と大文字小文字または [1m] の有無だけ違うと反映されなかった。ディスクが満杯のときの Bash は、生の ENOSPC のファイルパスではなく、ディスクが満杯で何も実行されなかったことを伝える。",
      "クラウドセッションとワークフローでは、SDK の setMcpServers やクラウドセッションが渡した MCP サーバーが、同名の自分の設定のサーバーに途中で置き換えられる問題が直った。圧縮で最も古いメッセージを要約から外さざるをえなかったときに、クラウドセッションとチームメイトがそれを Claude に伝えるようになった。承認する人がいない予約実行の Cowork クラウドセッションで、WebFetch の URL 承認が必要なサブエージェントごとに5分待つ問題の、残っていたケースも直った。Workflow の再開は、完了済みの pipeline() と parallel() のエージェントを再実行せず、実行記録から返す。",
      "改善としては、/usage の警告が出どころを示す1行の修正案になり、f キーで適用できる。同じ修正案が VS Code と /doctor にも出る。MCP の同意ダイアログは、プロンプト宛ての Enter が Accept と取られにくくなった。ほかに Self-hosted runner、Remote Control、スクリーンリーダー、VS Code、Claude Tag、Code Review に関する修正が多数ある。Code Review では、再レビューが、以前のブロッキング指摘が未解決のまま LGTM で始まらなくなった。全項目は出典の CHANGELOG を参照してほしい。"
    ],
    "primarySources": [
      {
        "title": "anthropics/claude-code CHANGELOG.md（2.1.305）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      }
    ]
  },
  "php-critical-security-release-2026-10-21": {
    "body": [
      "PHP セキュリティチームは2026年10月20日、**10月21日（水）14:00 UTC（日本時間 23:00）にセキュリティリリースを公開する**と告知した。対象は**重大な脆弱性2件**で、どちらも CVSS v4.0 の基本値は **9.2**。告知は、すべての PHP 利用者に対して、リリースをすぐに適用できるよう今のうちに準備することを求めている。",
      "**公式告知に書かれていること。** 公開日時、2件の脆弱性（CVSS v4.0 9.2）、そして、詳細・影響を受けるバージョン・修正版はリリース時に公開されることの3点である。CVE 番号、攻撃の経路、コード実行の可否は、この告知には含まれていない。",
      "**早まる可能性について。** PHP セキュリティチームは、脆弱性の詳細が公になった場合、または悪用の証拠が現れた場合には、予定より早くリリースする権利を留保している。",
      "**未確認情報について。** 告知の前後に、非公式の情報源から、脆弱性の識別子や、より高いスコアを示す報告が出回っているという話がある。これらは PHP 公式の発表ではなく、本記事では事実としては扱わない。公式のリリースと ChangeLog で確認されるまで、番号やスコアを鵜呑みにしないこと。",
      "**今やること。** 公式の情報が揃うのを待たずに、次の3つを進められる。",
      "1. 自分の環境で PHP が動いているサーバーとコンテナを一覧にする。PHP が直接動いていないサーバーでも、PHP の実行環境を含むイメージや、Web アプリのフレームワーク経由で使っている場合がある。",
      "2. 利用している PHP のバージョンを確認する（`php -v`、またはサーバーの管理画面）。サポートが終わったブランチは、修正版が出ない可能性がある。",
      "3. リリース後は、php.net の告知と ChangeLog で、影響を受けるバージョンと修正版を確認してから更新する。確認前に、影響の有無を推測で判断しないこと。",
      "**このサイトについて。** AI News は PHP を使っていない静的サイトで、サーバー側で PHP は動いていない。この告知による直接の影響はない。",
      "**公開後の追記予定。** リリースの後に、公式の告知から、影響バージョン・修正版・CVE 番号を確認して追記する。",
      "【追記 2026-10-21】セキュリティ企業 GMO Flatt Security が技術ブログで、今回の脆弱性を「php2shell」と呼び、CVE-2026-109618 と CVE-2026-109619 を挙げている（CVSS v4.0 は 9.2）。ただし、同社はこれを研究者の投稿などをもとに整理した情報だとしており、PHP 公式の告知にはまだ載っていない。同社も「一部に不正確な点がある可能性」と断っている。同社は、攻撃コードがすでにインターネット上に出回り始めていると述べているが、当サイトではこの点を確認できていない。同社は設定の変更による緩和策にも触れているが、それで攻撃を防げるわけではなく、リスクを下げるだけだとしている。根本の対策は、リリースされる修正版の適用である。",
      "【追記 2026-10-21】PHP 公式は、告知どおり 10月21日（水）14:00 UTC に修正版を公開した。修正版は PHP 8.5.12、8.4.27、8.3.36、8.2.35 で、公式は「すべての PHP 利用者に直ちに更新するよう強く勧める」としている。",
      "【追記 2026-10-21】公式の勧告による2件の内容は次のとおり。CVE-2026-109618（メモリ不足時の処理による RCE、GHSA-w8hw-w9fx-j79w）と、CVE-2026-109619（解放されたメモリに関わる内部状態が残ることによる RCE、GHSA-6wmf-4rv5-p3rp）。どちらも、認証なしで攻撃され得るとされる。影響を受けるのは、Web リクエストを処理するすべての PHP（PHP-FPM、Apache の mod_php、php-cgi、FrankenPHP、LiteSpeed など）。公式は、特に mod_php で危険度が高いとしている。",
      "【追記 2026-10-21】すぐに更新できない場合について、公式は設定の変更による一時的な対策を挙げている（メモリ上限の扱い、投稿サイズの上限、アップロード進捗の機能の無効化など）。ただし公式は、これらは攻撃の経路を減らすだけで、安全にはならないと明記している。更新こそが完全な対策である。設定の詳細は、公式の勧告を確認すること。",
      "【追記 2026-10-21】PHP 8.1 以前は、PHP 本体からの更新は提供されていない。Linux のディストリビューションや LTS のベンダーは、事前に修正を受け取っているとされるため、ベンダーの更新を確認する。公式は、ソースからビルドする人向けに、PHP 7.4、8.0、8.1 向けの最小限の修正パッチも提供している。",
      "【追記 2026-10-21】公開前に出回っていた情報との関係: 公式の勧告で、CVE 番号（CVE-2026-109618、CVE-2026-109619）と CVSS v4.0 9.2 が確認された。また、GMO Flatt Security の技術ブログが挙げた CVE 番号と CVSS の記述も、公式の内容と一致した。一方、10月22日に公開されるとする投稿は、公式の日程（10月21日）と一致しなかった。野外での悪用の有無は、この勧告からは確認できない。",
      "【追記 2026-10-23】PHP 公式は10月23日、別の情報（CVE-2026-115560）についての Informational advisory を公開した。session のアップロード進捗の機能に関わるもので、公式は、次の定期のバグ修正リリースまで、session.upload_progress.enabled=0 にすることを勧めている。10月21日の GHSA-6wmf-4rv5-p3rp の勧告で、この設定をすでに適用していれば、追加の対応は不要とされる。",
      "【追記 2026-10-23】公式の説明によると、この問題は、設定とアプリケーションのコードの特殊な組み合わせでのみ起きる。session.serialize_handler を php_binary か php_serialize に設定し、session_start() の前に ini_set() で php に切り替えている場合で、かつアップロード進捗が有効な場合に限られる。公式は、この組み合わせは現実的には稀だとしている。告知は、影響を受ける版や修正版を示していない。完全な勧告は、次のリリースで公開するとしている。",
      "【追記 2026-10-23】Cloudflare は10月21日の公式ブログで、既定の WAF の保護（無料プランと有料プランの両方）を、現地時間の 3:02 UTC から入れたと説明した。また、リリースの前に脆弱性が漏れていたこと、攻撃の試みを観測したことを書いている。ただし、攻撃の件数は示していない。これは同社の説明であり、独立した検証ではない。WAF は補助の層であり、PHP 本体の更新の代わりにはならないと、同社も明記している。"
    ],
    "primarySources": [
      {
        "title": "Upcoming Critical PHP Security Release（PHP: News Archive 2026、2026-10-20）",
        "site": "php.net（PHP 公式）",
        "url": "https://www.php.net/archive/2026.php#2026-10-20-1"
      },
      {
        "title": "A critical PHP security release is coming today, so get ready to update!",
        "site": "Help Net Security（派生・告知の報道）",
        "url": "https://www.helpnetsecurity.com/2026/10/21/php-security-release-announcement-october-2026/"
      },
      {
        "title": "PHPの重大な脆弱性「php2shell」（CVE-2026-109618、CVE-2026-109619）の概要と対応指針（2026-10-21 11:12 JST）",
        "site": "GMO Flatt Security 技術ブログ（調査途中の速報、一部に誤りの可能性を明記）",
        "url": "https://blog.flatt.tech/entry/php2shell"
      },
      {
        "title": "Security advisory: Critical remote code execution vulnerabilities, update now（PHP 8.5.12 / 8.4.27 / 8.3.36 / 8.2.35 リリース、2026-10-21）",
        "site": "php.net（PHP 公式）",
        "url": "https://www.php.net/archive/2026.php"
      },
      {
        "title": "Informational advisory: Session upload progress（php.net、2026-10-23）",
        "site": "php.net（PHP 公式）",
        "url": "https://www.php.net/archive/2026.php#2026-10-23-1"
      },
      {
        "title": "Cloudflare deploys protections against php2shell vulnerability（2026-10-21）",
        "site": "Cloudflare 公式ブログ（当事者の対応の説明）",
        "url": "https://blog.cloudflare.com/php-vulnerabilities-waf-protection/"
      }
    ]
  },
  "java-cve-2026-91403-compromised-ca-certificates-2026-10-21": {
    "body": [
      "Oracle は2026年10月21日、Java SE に関する緊急セキュリティアラート **CVE-2026-91403** を公開した。定例の Critical Patch Update（10月分）とは別に出された、臨時の告知である。",
      "**何が問題か。** OpenJDK の勧告によると、CVE-2026-91403 は **侵害された中間 CA 証明書8件** に関わる問題である。影響するコンポーネントは javax.net.ssl（Java の TLS 実装）で、CVSS v3.1 の基本値は **9.1** とされている。CVSS の表記（OpenJDK の勧告の risk matrix のベクトル NLNNUHHN）は、攻撃経路がネットワーク、権限の要求なし、ユーザー操作なしであることを示す。",
      "**影響を受けるバージョン。** Oracle のアラートでは、Java SE の 8u511、8u511-perf、11.0.33、17.0.21、21.0.13、25.0.5、27.0.1 と、GraalVM の一部のバージョンが挙げられている。Oracle は、このアラートで扱うパッチが提供されるのは、Premier Support または Extended Support の期間にあるバージョンだけだとしている。",
      "**推奨される対応（OpenJDK の勧告）。** 独立した OpenJDK ランタイム（アプリケーションに同梱して配布しているものを含む）は、侵害された証明書を含んでいる可能性が高いので、できるだけ早く更新する。すぐに更新できない場合は、次のいずれかを行う。1つ目は、blocked.certs ファイルで該当する証明書をブロックすること。2つ目は、失効確認を有効にすること（例: -Dcom.sun.net.ssl.checkRevocation=true）。",
      "**Linux ディストリビューションの Java。** OpenJDK の勧告では、OS の証明書ストアを使う場合は、OS の証明書を更新すれば十分だとしている。対象は Arch Linux、Debian、Fedora、Red Hat Enterprise Linux、Ubuntu などである。FreeBSD と Homebrew のパッケージは、直接更新する必要がある。",
      "**確認できていないこと。** 証明書を発行した事業者、証明書が侵害された経緯、野外での悪用の有無は、今回確認した公式の資料には書かれていない。OpenJDK の勧告の周辺には事業者の名前を示すリンクがあるが、本文では事業者は特定されておらず、本記事でも特定しない。",
      "**このサイトへの影響。** AI News は React と Vite で作られた静的サイトで、Java は使っていない。ビルドには Node.js を使う。Java を業務で使っている場合は、使っているランタイムの配布元と版を確認し、上記の対応を行うこと。",
      "【追記 2026-10-22】事業者の発表が確認できた。インドの認証局 eMudhra は、自社の公式発表（2026年10月20日初版、10月22日更新）で、グローバル TLS 事業の中間 CA 証明書8件を10月18日に失効させ、鍵が弱かったためだと説明している。発表では、独立の研究者が10月17日に報告したという。この件の詳細は、別記事（emudhra-intermediate-ca-weak-keys-revoked-2026-10-18）にまとめた。OpenJDK の勧告が挙げる「侵害された中間 CA 証明書8件」と、eMudhra の8件は、件数と時期が一致している。ただし、勧告の本文では事業者名は示されていないため、両者が同一のものだと断定はしていない。"
    ],
    "primarySources": [
      {
        "title": "Security Alert Advisory - CVE-2026-91403（Oracle）",
        "site": "Oracle（公式のセキュリティアラート）",
        "url": "https://www.oracle.com/security-alerts/alert-cve-2026-91403.html"
      },
      {
        "title": "OpenJDK Vulnerability Advisory: 2026/10/21",
        "site": "OpenJDK（公式の勧告）",
        "url": "https://openjdk.org/groups/vulnerability/advisories/2026-10-21"
      }
    ]
  },
  "anthropic-api-version-2026-10-21-breaking-changes-2026": {
    "body": [
      "Claude Platform のドキュメントによると、Anthropic の API にバージョン 2026-10-21 が加わった。リクエストの anthropic-version ヘッダに指定する日付で、それまでの記載は 2023-06-01 だった。公式のバージョン履歴は、可能な限り最新版を使うよう勧めている。この記事は公式のバージョン履歴と移行ガイドの記載を整理したもので、実際のリクエストでの挙動は検証していない。",
      "Messages API の変更は3つある。1つ目は sampling パラメータの削除で、temperature・top_p・top_k のどれかを送ると、既定値であっても全モデルで 400 エラーを返す。2つ目は、assistant メッセージに document ブロックを直接置くと 400 になること（Claude が返したウェブ取得ツールの結果の中に入れ子になった document は引き続き受け付ける）。3つ目は、user メッセージの text ブロック（search_result の中も含む）に空でない citations 配列を付けると 400 になることである。assistant メッセージ内の citations と、document や search result の \"citations\": {\"enabled\": true} の設定は引き続き使える。これらは token counting と、2026-10-21 で作る Message Batch の各リクエストにも当てはまる。",
      "sampling パラメータの削除について、移行ガイドは影響の出方を分けて書いている。パラメータを送らないリクエストは temperature 1.0 を含む既定値で動き、2023-06-01 で同じ省略をしたときと同じになる。Claude 4.7 以降のように既定値しか受け付けないモデルでは、挙動は変わらない。一方、Claude Sonnet 4.6 のように他の値を受け付けるモデルで、出力を安定させるために temperature を下げていたリクエストは、その効果を失う。ガイドは、代わりになる設定は無いと書き、非既定値に頼るリクエストは 2023-06-01 に留めるよう案内している。",
      "SDK を使っている場合、送るバージョンは SDK のメジャー版で決まる。公式が示す、2026-10-21 を送る最初の版は表のとおりで、Go と Java はモジュールやアーティファクトの扱いも変わる。Go はモジュールのパスが v2 付きになり、import の書き換えが要る。古いパスは何の警告も出さずに v1 の最新版を入れ続ける、とガイドは注記している。TypeScript では、bedrock-sdk・vertex-sdk・foundry-sdk・aws-sdk・google-cloud-sdk の各パッケージも同時に v1 に上げないと、古い @anthropic-ai/sdk が二重に入る。",
      "SDK と CLI には、API バージョンとは別の変更も入っている。MessageParam は user・assistant・system ごとの型の union になり、SDK が送る JSON は変わらない。API キーは X-Api-Key ではなく Authorization: Bearer で送られるため、X-Api-Key を読む・設定するプロキシやゲートウェイは直す必要がある（API 自体はどちらのヘッダも受け付けるので、SDK を介さず直接呼ぶプログラムは変更不要）。Text Completions は TypeScript・Go・Java・Ruby の SDK と CLI から削除された。TypeScript と Ruby の tool runner からはクライアント側のコンパクションが削除され、サーバー側のコンパクションに置き換わった。ant CLI は 2.0.0 になり、--api-key と --auth-token のフラグが無くなった（コマンドラインの値はシェル履歴やプロセス一覧に見えるため、とされている）。SDK と CLI は新しい版から Apache License 2.0 で提供され、以前の版は MIT のまま残る。",
      "Amazon Bedrock では、2026-10-21 は Claude 4.7 以降のモデルでのみ使える。Opus 4.6 以前を Bedrock で呼ぶ場合は、今使っている SDK の版に留めるか、自分でバージョンを指定しているなら今送っている値を送り続ける。そのモデル群を 2026-10-21 に移すには、先に 4.7 以降のモデルへ切り替える必要がある。Claude API のほか、Claude Platform on AWS、Microsoft Foundry、Google Cloud でも使える。",
      "管理系の API にも名前の変更がある。Admin API では、RBAC グループの roles が role_ids に、グループメンバーの group_id が rbac_group_id に、ロールの name が display_name に、レート制限の group_type が group.type に、API キーの workspace_id が scope.workspace_id になった。Claude Enterprise Analytics API では、利用量・コストのレポートの actor.email が actor.email_address に、活動サマリーの summaries が data になった。API キーの workspace_id は、旧版では Default Workspace に紐づくキーと全ワークスペース用のキーのどちらも null だったが、新しい scope.workspace_id は Default Workspace の実際の ID を返す。",
      "同じ日付は、Claude Code の変更履歴にも出ている。2.1.307 に、Claude API のコードを API バージョン 2026-10-21 へ移す /claude-api api-version コマンドが加わった。この記事では、このコマンドの実際の動作は確認していない。",
      "確認できていないこと。この記事は公式ドキュメントの記載に基づき、旧版 2023-06-01 の提供終了日や非推奨の扱いは、読んだページには書かれていなかった。移行ガイドは旧版に留める選択肢を挙げており、少なくとも現時点で旧版が使えない、とは書かれていない。公開日は、バージョン履歴に日付が付いていないため、バージョン名の日付を出来事の日として使っている。SDK の各版の実際の挙動や、第三者による検証も確認していない。移行する場合は、ガイドの順序（SDK を上げ、破壊的変更を直し、2026-10-21 に対してテストしてから出す）に沿うことになる。"
    ],
    "tables": [
      {
        "caption": "2026-10-21 を送る最初の SDK・CLI の版（公式の移行ガイドをもとに整理）",
        "afterParagraph": 3,
        "headers": [
          "対象",
          "版",
          "備考"
        ],
        "rows": [
          [
            "Python（anthropic）",
            "2.0.0",
            ""
          ],
          [
            "TypeScript（@anthropic-ai/sdk）",
            "1.0.0",
            "bedrock・vertex・foundry・aws・google-cloud の各 SDK も v1 へ"
          ],
          [
            "C#（Anthropic）",
            "13.0.0",
            ""
          ],
          [
            "Go",
            "2.0.0",
            "モジュールパスが …/anthropic-sdk-go/v2 に。import の書き換えが必要"
          ],
          [
            "Java（com.anthropic:anthropic-java）",
            "3.0.0",
            ""
          ],
          [
            "PHP（anthropic-ai/sdk）",
            "1.0.0",
            "composer require で指定しないと現在の制約内に留まる"
          ],
          [
            "Ruby（anthropic）",
            "2.0.0",
            ""
          ],
          [
            "ant CLI",
            "2.0.0",
            "Go の module パスは …/anthropic-cli/v2"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Versions — Claude API ドキュメント",
        "url": "https://platform.claude.com/docs/en/api/versioning"
      },
      {
        "title": "Migrating to API version 2026-10-21 — Claude API ドキュメント",
        "url": "https://platform.claude.com/docs/en/api/migration-2026-10-21"
      },
      {
        "title": "Claude Code changelog",
        "url": "https://code.claude.com/docs/en/changelog"
      }
    ]
  },
  "nextjs-security-update-2026-10-14": {
    "body": [
      "Next.js は2026年10月14日、上流の依存関係の脆弱性に対応するアウトオブバンドのセキュリティ更新を公開した。事前告知は10月8日に出ていた。修正版は **16.4.1（Active LTS）** と **15.5.28（Maintenance LTS）** で、どちらも公式は直ちの更新を勧めている。",
      "**1件目（重大）: `use cache` 関数の RCE（GHSA-673q-mjm6-r5xr）。** App Router と Cache Components を使うアプリで、`use cache` 関数が複数の typed array を返すと、認証なしでリモートコード実行につながる恐れがある。公式は、この件に既知の回避策はないとし、同様の関数を使っていなくても直ちに更新するよう求めている。関連して、React 側の GHSA-xqc2-xf4c-x3h3 も挙がっている。",
      "**2件目（重大）: 画像最適化 API の RCE（CVE-2026-96889、GHSA-2464-fhr4-w9xw）。** SVG を扱う画像最適化で、上流のライブラリのメモリ関連の脆弱性が、glibc ベースの Linux 上で RCE につながる恐れがある。公式の回避策は、Next.js が使う sharp を 0.35.5 以上にすることだが、Next.js を修正版へ更新すれば、パッケージマネージャーが修正版の sharp を自動で入れるとしている。",
      "**3件目（高）: Server Actions を使う App Router の DoS（GHSA-p3m5-59mp-jv5r）。** 特定のリクエストで CPU 使用率が上がり、同じプロセスの後続の処理が止まる。Server Actions を1つでも持つ App Router のアプリが対象で、Pages Router や Server Actions を使わないアプリは影響を受けない。関連して、React 側の GHSA-h3gv-c5rc-p453 も挙がっている。",
      "**更新の方法（公式の案内）。** 15.x 系は `npm install next@15.5.28`、16.x 系は `npm install next@16.4.1` を実行する。",
      "**確認できていないこと。** 野外での悪用の有無は、公式の告知からは確認できない。二次情報の Netlify の変更履歴は、プレビューやブランチのデプロイが削除されるまでは、脆弱なままになる可能性があると注意している。これは Netlify の説明であり、公式の告知には書かれていない。",
      "**このサイトへの影響。** AI News は React と Vite で作られた静的サイトで、Next.js は使っていない。Next.js を使っているプロジェクトは、上記の版に更新すること。"
    ],
    "primarySources": [
      {
        "title": "Next.js Security Update for Upstream Vulnerabilities（2026-10-14、公式）",
        "site": "Next.js 公式ブログ",
        "url": "https://nextjs.org/blog/nextjs-security-update-october-14-2026"
      },
      {
        "title": "Upcoming Next.js Security Update for Upstream Vulnerabilities（2026-10-08、事前告知、公式）",
        "site": "Next.js 公式ブログ",
        "url": "https://nextjs.org/blog/upcoming-nextjs-security-update-october-2026"
      },
      {
        "title": "Security Update: Next.js and React vulnerabilities（2026-10-14）",
        "site": "Netlify 変更履歴（派生・補足）",
        "url": "https://netlify.com/changelog/2026-10-14-nextjs-react-security-vulnerabilities"
      }
    ]
  },
  "nodejs-security-release-2026-10-21": {
    "body": [
      "Node.js の公式発表によると、2026年10月21日（水）ごろに、22.x、24.x、26.x の3つのラインでセキュリティリリースが出た。公式のダウンロードページでは、最新版として 26.12.1（Latest Release）と 24.22.1（Latest LTS）が示されている。22.x の修正版の番号は、告知ページでは明記されていない。",
      "**含まれる10件。** 公式の告知によると、重大度が HIGH のものが4件、MEDIUM が3件、LOW が3件ある。",
      "**HIGH（4件）**",
      "・dns.resolve が NUL 文字を含む名前を切り詰める（CVE-2026-105482）。影響は 26.x、24.x、22.x。",
      "・16進数ではない全角数字で書かれた IP アドレスによる、TLS 証明書のホスト名の検証の回避（CVE-2026-105483）。影響は 26.x と 24.x。",
      "・ホストがゆるく IP アドレスに解決される場合の、TLS 証明書のホスト名の検証の回避（CVE-2026-106069）。",
      "・Brotli デコーダーの範囲外書き込みによる、リモートコード実行（CVE-2026-111497）。",
      "**MEDIUM（3件）**",
      "・書き込まれる前に送られた要求の応答を、keep-alive のソケットが処理してしまう問題（CVE-2026-105481）。",
      "・正規形でない IPv4 のホスト名で、DNS の SAN が IP のエンドポイントの認証に使われてしまう証明書検証の不備（CVE-2026-106072）。",
      "・crypto.randomUUID() と randomInt() のエントロピーのキャッシュが、スタートアップのスナップショットや SEA に保存され、すべてのプロセスで同じ値が繰り返される問題（CVE-2026-106074）。",
      "**LOW（3件）**",
      "・ZipFile が、ZIP のヘッダーの検証に失敗した後も、攻撃者が制御するプレフィックスのバイトを返す問題（CVE-2026-106070）。",
      "・Permission Model で、ワイルドカードの基数ルックアップによりファイルシステムの権限が広く付与される問題（CVE-2026-106071）。",
      "・Permission Model を fs.realpathSync で回避できる問題（CVE-2026-106073）。",
      "**確認できていないこと。** 今回の公式の告知は、各項目の CVSS の値や、野外での悪用の有無を示していない。影響する版の範囲は、項目ごとの詳細を見る必要がある。",
      "**対応。** 公式は、サポートが終わった版（EOL）は、セキュリティリリースの対象外として影響を受け続けると明記している。使っている版が最新の LTS か、サポートの範囲内にあるかを、Node.js の公式のリリース予定で確認し、公式のダウンロードページの最新版へ更新する。",
      "**このサイトへの影響。** AI News は React と Vite で作られた静的サイトで、公開されたサイトのサーバーでは Node.js は動いていない。ビルドと開発の環境で Node.js を使っている。このため、ビルドに使う環境の Node.js は、更新の対象になる。"
    ],
    "primarySources": [
      {
        "title": "Security Releases: Wednesday, October 21, 2026（Node.js 公式）",
        "site": "Node.js 公式ブログ（脆弱性）",
        "url": "https://nodejs.org/en/blog/vulnerability/october-2026-security-releases"
      },
      {
        "title": "Node.js 公式のリリース一覧（版番号と日付の確認用）",
        "site": "nodejs.org/dist",
        "url": "https://nodejs.org/dist/index.json"
      }
    ]
  },
  "emudhra-intermediate-ca-weak-keys-revoked-2026-10-18": {
    "body": [
      "インドの認証局 eMudhra は、自社の公式発表（2026年10月20日に初版、10月22日に更新）で、**グローバル TLS 事業の中間 CA 証明書8件を2026年10月18日に失効（revoke）させた**と説明した。理由は、公開されていた鍵が弱かったためである。",
      "**報告の経緯。** eMudhra の発表によると、独立したセキュリティ研究者が10月17日に、8件の中間 CA の鍵が弱いことを報告した。研究者は、Apple、Google、Microsoft、Mozilla にも同時に通知したという。",
      "**原因（eMudhra の説明）。** 鍵のラップとアンラップの工程で、本来の強い鍵の組と並んで、弱い第2の鍵の組が作られたと説明している。ただし、発表は「根本原因はまだ確定していない」とし、調査は継続中だと明記している。",
      "**影響範囲（eMudhra の説明）。** 影響は、失効した中間 CA から発行された、ECC ルートにつながる TLS 証明書に限られるとしている。不信頼化の影響を受けるのは、米国の1つの顧客の範囲だという。一方で、デジタル署名、eSign、emSigner、CertiNext、emCA、Privatrust、SecurePass などのサービスは影響を受けず、利用者は対応の必要がないと説明している。",
      "**外部のセキュリティ企業の説明（Cloudflare）。** Cloudflare は10月20日の公式ブログで、eMudhra の8件の中間証明書の秘密鍵が侵害されたと述べた。鍵が弱いと、攻撃者が任意のドメインの証明書を偽造できる恐れがあると説明している。Cloudflare は、自社のサービスで悪用が確認されていないとしている。また、オリジンサーバーを持つ顧客など、一部の顧客は対応が必要だとしている。",
      "**確認できていないこと。** 本記事の公開時点で、第三者による悪用が実際に起きたかどうかは、一次資料からは確認できない。どのブラウザや OS が、いつ信頼を止めるかは、各社の発表を個別に確認する必要がある。本記事では、各社の対応の詳細は書いていない。",
      "**関連する対応。** Docker は、公式のセキュリティ発表で、同じ eMudhra の CA の侵害への対応として、サンドボックスのテンプレートの画像を、更新した CA 証明書で作り直したと説明している。既存のサンドボックスは、作り直すか、ca-certificates を更新する必要がある。Java の CVE-2026-91403 の記事も、同じ時期の中間 CA 証明書8件に関わる問題を扱っている。両者が同じ件かどうかは、本記事では断定していない。",
      "**このサイトへの影響。** AI News は静的サイトで、証明書の信頼の問題の影響は、利用者のブラウザや、サイトに接続する環境に限られる。この件で、サイトの運用に直接の影響はない。"
    ],
    "primarySources": [
      {
        "title": "eMudhra Statement on Recent Certificate Security Incident（2026-10-20 初版、10-22 更新）",
        "site": "eMudhra 公式（当事者の発表）",
        "url": "https://emudhra.com/en/post/certificate-security-incident"
      },
      {
        "title": "8 eMudhra certificates are compromised. Here's what you need to know（2026-10-20）",
        "site": "Cloudflare 公式ブログ",
        "url": "https://blog.cloudflare.com/emudhra-certificate-compromise/"
      },
      {
        "title": "Docker security announcements（eMudhra の CA への対応、2026-10-21 更新）",
        "site": "Docker 公式",
        "url": "https://docs.docker.com/security/security-announcements/"
      }
    ]
  },
  "railway-environment-variables-incident-2026-10-21": {
    "body": [
      "クラウド基盤の Railway は2026年10月21日、公式ブログで、顧客の環境変数を保存しているシステムで異常な活動を検知したと公表した。同社によると、**第三者が暗号化された環境変数にアクセスし、一部については復号された内容を得た可能性がある**。環境変数には、API キー、データベースや、レジストリの認証情報などのシークレットが含まれ得る。",
      "**公式の説明（確認できた範囲）。** 「影響は一部の利用者に限られるかもしれない」としているが、件数は示していない。アクセスは「可能性がある（may have accessed）」という表現で、確定はしていない。攻撃の時間帯も示されていない。Railway は、異常を検知したのは「その日の早い時間」だったと書いている。",
      "**攻撃者の見方。** Railway は、AI の推論プロバイダーを狙う、プラットフォーム企業への一連の攻撃の一部だと考えていると述べている。これは同社の見方であり、攻撃者の特定や、その証拠は示されていない。",
      "**Railway の対応。** 調査が終わるまで、すべてのデプロイを停止した。上流のプロバイダーに通知し、鍵を先回りして失効させるよう依頼したという。影響を受けたと確認されたアカウントには、メールで連絡するとしている。顧客自身の鍵を、Railway が再発行したかどうかは書かれていない。",
      "**顧客に勧めていること。** 公式は、Railway に保存している環境変数（API キーを含む）をすべて直ちに再発行し、プライベートレジストリの認証情報も再発行するよう勧めている。また、対象のサービスのログで、不審な活動がないか確認するよう勧めている。ビルドが停止しているため、新しい版をデプロイできない状態になっている。最新の状況は status.railway.com で確認するよう案内している。",
      "**10月22日の追加の案内（MySQL テンプレート）。** Railway は翌10月22日、MySQL テンプレートを使っている利用者向けに、パスワードの再生成、不要な公開アクセスの停止、接続文字列の参照への置き換え、不審なセッションの確認を案内する記事を公開した。この記事も、被害の範囲や、データが実際に読まれたかどうかは書いていない。",
      "**確認できていないこと。** 影響を受けた顧客の数、攻撃の始まりと終わり、侵害の経路、データが実際に読まれたかどうかは、公式の発表からは確認できない。この記事は、Railway の発表の内容だけを書いている。",
      "**このサイトへの影響。** AI News は静的サイトで、Railway の基盤は使っていない。ただし、Railway で環境変数を管理しているプロジェクトは、上記の再発行を検討すること。"
    ],
    "primarySources": [
      {
        "title": "Security Disclosure: Wednesday October 21st（2026-10-21）",
        "site": "Railway 公式ブログ",
        "url": "https://blog.railway.com/p/security-disclosure-wednesday-october-21st"
      },
      {
        "title": "Security Disclosure Recommendation: Rotate MySQL Database Credentials（2026-10-22）",
        "site": "Railway 公式ブログ",
        "url": "https://blog.railway.com/p/security-disclosure-recommendation-rotate-mysql-database-credentials"
      }
    ]
  },
  "litellm-1-107-0-quarantined-pypi-2026-10-21": {
    "body": [
      "Python のパッケージ LiteLLM について、PyPI の公式ページで、バージョン **1.107.0** が2026年10月21日に公開され、その後「Release quarantined on Oct 21, 2026（リリースを隔離）」と表示されていることを確認した。同じ日に、1.106.2 も公開されている。",
      "**確認できたこと。** PyPI のページ上で、1.107.0 が履歴に残ったまま隔離の状態にあることを確認した。隔離（quarantine）は、PyPI の運営が、配布中のリリースを一時的に扱いにくくする措置である。隔離の理由は、PyPI のページには書かれていない。",
      "**確認できていないこと。** 二次情報では、LiteLLM のリリースの仕組みが侵害され、1.107.0 が Docker Hub と PyPI に送られ、認証情報を盗む機能やバックドアが含まれていたという報道がある。ただし、本記事の作成時点では、LiteLLM 側の公式の告知や、悪意のあるコードの分析は確認できていない。このため、それらの内容は事実として書かない。",
      "**利用者が確認すること。** 1.107.0 を、自分の環境に入れていないかを確認する。入れていた場合は、その環境で使っていた認証情報（API キーなど）を、念のため再発行することを検討する。対応の詳細は、LiteLLM の公式の告知が出るまで、判断を保留する。",
      "**このサイトへの影響。** AI News は、Python のパッケージを公開の仕組みに使っていない。ビルドの依存関係に LiteLLM が含まれていないことを確認してから、次の作業に進むこと。"
    ],
    "primarySources": [
      {
        "title": "litellm（PyPI）— リリース履歴（1.107.0 が quarantined と表示）",
        "site": "PyPI（公式のパッケージレジストリ）",
        "url": "https://pypi.org/project/litellm/"
      }
    ]
  },
  "claude-code-2-1-306-to-309-sandbox-startup-files-safety-event-api-version-2026": {
    "body": [
      "Claude Code の 2.1.306 から 2.1.309 までの変更履歴が、公式リポジトリの CHANGELOG に載っている（2026年10月23日に確認）。このサイトは直前の 2.1.305 までを記事にしている。npm レジストリの公開時刻は、2.1.306 が10月21日 02:28 UTC、2.1.307 が同日 20:47 UTC、2.1.308 が10月22日 04:19 UTC、2.1.309 が同日 20:34 UTC である。出典は CHANGELOG と npm レジストリの記録で、各項目の挙動をこちらで実機確認したものではない。",
      "2.1.309 の先頭に並ぶのは、サンドボックスと権限判定の修正である。macOS と Linux で、サンドボックス内のコマンドを実行する前に、シェルの起動ファイルがサンドボックスの外で走っていた問題が直った。macOS では、サンドボックスの denyWrite の glob パターンが、フォルダがシンボリックリンク越しに到達される場合に実際のパスへ適用されない問題も直っている。--mcp-config で渡した MCP 設定ファイルを、サンドボックス内のコマンドや自動承認された編集が書き換えられる問題もある。Linux では、背景で動くコマンドがセッションより長く生きたときにサンドボックスの書き込み拒否が外れる問題が直った。",
      "Bash の権限判定の修正も多い。リダイレクトが開けずに失敗しうるコマンドが設定した変数を、権限確認が信用していた問題。git の前に cd を挟む複合コマンドで、cd が包まれていたり接頭辞が付いていたりすると確認が出なかった問題。サブシェルを含むコマンドで、Edit(path) の拒否ルールが Bash のリダイレクトを止めなかった問題。worktree 分離のセッションで、ロケール接頭辞付きのコマンドや zsh の算術コマンドを、分離の守りが拒否すべきところで受け入れていた問題。Windows では、PowerShell の権限確認が、現在のディレクトリを指す Set-Location や cd に引数が付くと自動承認する問題が直り、承認を求めるようになった。CHANGELOG はこれらを修正として列挙しており、実際に悪用された事例や深刻度の評価は書いていない。",
      "挙動が変わる項目もある。sed -i は、ファイル編集の模擬プレビューではなく通常の Bash の確認を経て、書かれたとおりに実行されるようになった。ほかの Bash による編集と同じく、/rewind では元に戻らない。claude ultrareview はワークスペースの信頼を要求する。端末では確認を出し、そうでなければ拒否する。スクリプトからは --trust-workspace を渡すか、CLAUDE_CODE_DISABLE_ULTRAREVIEW_TRUST_CHECK=1 を設定する。Desktop アプリと VS Code の bypass permissions モードでは、危険な rm と rmdir の確認が、書き換えの案を添えた即時拒否になり、無人のセッションが止まらない。設定でサンドボックスから除外したコマンドは、サンドボックスが有効なのに動かせないとき、書き込み許可リストのパスへの書き込み前に確認を出し、サンドボックス外での代替実行は拒否される。",
      "2.1.307 の追加は2つある。1つ目は /claude-api api-version で、Claude API を使うコードを API バージョン 2026-10-21 へ移すコマンドである。このバージョンは10月21日に出ており、サイトの別記事で破壊的変更を整理している。2つ目は OpenTelemetry のイベント claude_code.safety_event で、権限ルール、自動モード、安全確認、フック、サンドボックスのいずれかが止めた、確認を求めた、差し戻したツール呼び出しごとに出る。何が拒否されたかを自社の監視基盤で追いたい運用に関わる。イベントの属性の一覧は CHANGELOG に書かれていないため、ここでは確認できていない。",
      "2.1.307 の修正では、CLAUDE_CODE_DISABLE_1M_CONTEXT を設定したとき、opus[1m] のような [1m] 付きエイリアスが model-not-found で失敗する問題、独自の ANTHROPIC_BASE_URL のゲートウェイや Foundry に prompt-caching-scope のベータヘッダが送られていた問題が直った。MCP では、macOS のログインキーチェーンがロック中の claude -p で「認証が必要」と出る問題に理由が表示されるようになり、接続中にコンピュータがスリープすると失敗扱いのままになる問題も直った。接続が途中で切れたときに HTTP の MCP ツール呼び出しが二重に送られる問題には、再送を読み取り専用または冪等なツールに限る対応が入った。解釈できないツール呼び出しは、最大2回再試行してからターンをエラーで終える。",
      "2.1.306 は2件で、クラウドセッション内の claude -p が、セッションの環境変数なしで起動されると「Not logged in」と出る問題と、MCP ツールが多いセッションで API エラーが「prompt is too long」に置き換わり不要な圧縮が走る問題の修正である。2.1.308 の記載は「Bug fixes and reliability improvements」の1行のみで、具体的な変更は CHANGELOG からは分からない。",
      "2.1.309 にはほかにも、ネストした CLAUDE.md が大きすぎるときにセッションが繰り返し圧縮される問題（上限を超えた場合は先頭だけを読む）、Amazon Bedrock でベースURLを既定のエンドポイントに設定すると細粒度のツールストリーミングが無効のままだった問題、ゲートウェイ越しで keepalive だけが届く場合の「Waiting for API response」表示のちらつき（Anthropic のバックエンド外では45秒待つ）、Claude が PR や Issue に役割名やプレースホルダを @ 付きで書いて無関係な GitHub ユーザーに通知を送る問題の修正が入っている。Self-hosted runner、VS Code、クラウドセッション、Code Review（@claude review stop で always の購読を終える）に関する項目も多い。全項目は出典の CHANGELOG を参照してほしい。"
    ],
    "primarySources": [
      {
        "title": "anthropics/claude-code CHANGELOG.md（2.1.306〜2.1.309）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリ、公開時刻）",
        "url": "https://registry.npmjs.org/@anthropic-ai/claude-code"
      }
    ]
  },
  "ruby-4-0-9-3-4-12-3-3-13-regexp-fixes-2026-10-23": {
    "body": [
      "Ruby 公式は2026年10月23日、Ruby 4.0.9、3.4.12、3.3.13 を公開した。Ruby 4.0.8 は10月22日に公開されている。公式の告知によると、今回の修正は、GitLab が報告し、GitLab と協調して修正された、正規表現のコンパイルに関する脆弱性4件を対象とする。",
      "**対象の4件（GitLab の CVE に対応）。** CVE-2026-89078（正規表現パーサーの二重解放）、CVE-2026-93577（正規表現コンパイラーの整数オーバーフロー）、CVE-2026-97229（CI/CD の正規表現コンパイラーの整数オーバーフロー）、CVE-2026-110264（正規表現コンパイラーの整数オーバーフロー。内部 ID の溢れ）。CVE-2026-93577 と CVE-2026-97229 は、Ruby 側では同じ修正（#19020）に対応する。",
      "**GitLab の説明。** 告知によると、GitLab は「細工されたパターンが、Ruby のコンパイル中にメモリを壊し得る」ことを見つけ、それが GitLab のサーバーでのリモートコード実行につながり得るとしている。",
      "**修正版。** Ruby 4.0.9、3.4.12、3.3.13 に、4件の修正がすべて含まれる。3.3.13 は、通常はセキュリティ修正のみの方針の版だが、今回は例外として新しい版が出された。",
      "**確認できていないこと。** 告知は、影響を受ける版を、CVE ごとに示していない。また、野外での悪用の有無も書かれていない。Ruby は、今回の修正について CVE 番号の申請を行っていないとし、「当面は」行わないと述べている。ただし、この判断は見直すかもしれないとしている。",
      "**回避策（公式の案内）。** 直ちに更新できない場合は、信頼できない入力から正規表現をコンパイルしないこと。公式は、Regexp.timeout ではこれらのバグを防げないと明記している。また、パターンの長さを制限する方法も、確実な防御にはならないとしている。",
      "**確認の方法。** 利用している Ruby の版を確認し、4.0.9、3.4.12、3.3.13 のいずれかに更新する。Ruby を組み込んだ製品（GitLab など）の場合は、それぞれの製品の更新情報を確認する。",
      "**このサイトへの影響。** AI News は、Ruby を使っていない。ビルドと開発の環境は Node.js を使っている。"
    ],
    "primarySources": [
      {
        "title": "Regexp compilation fixes related to GitLab's CVE-2026-89078, CVE-2026-93577, CVE-2026-97229 and CVE-2026-110264（2026-10-23）",
        "site": "Ruby 公式（ruby-lang.org）",
        "url": "https://www.ruby-lang.org/en/news/2026/10/23/regexp-fixes-for-gitlab-cves/"
      },
      {
        "title": "Ruby 4.0.9 Released（2026-10-23）",
        "site": "Ruby 公式（ruby-lang.org）",
        "url": "https://www.ruby-lang.org/en/news/2026/10/23/ruby-4-0-9-released/"
      }
    ]
  },
  "rubygems-org-advisories-2026-10-07-10-21": {
    "body": [
      "RubyGems.org は、Ruby のパッケージを公開する基盤である。運営側の GitHub のセキュリティ勧告で、2件の脆弱性が公表されている。どちらも重大度は High で、CVE 番号は付いていない。",
      "**1件目（10月7日）: gem 単位の API キーの権限のすり抜け（GHSA-xx8r-939r-j6hf）。** API キーは特定の gem に限定できる。その gem の所有権を削除したとき、ActiveRecord の破棄のコールバックを経由しなかったため、キーの gem の範囲の記録が、削除された所有権を指したままになった。その結果、認可の処理がそのキーを制限のないものとして扱ってしまう。勧告は、キーに付与されたアクションの権限や、所有者の本来の権限は広がらないとしている。CVSS v4 の基本値は 7.1。",
      "**2件目（10月21日）: 管理画面の制限付き操作の権限チェックの欠落（GHSA-4p4h-cc5h-844x）。** 管理画面の制限付き操作（27件）で、表示の制限だけがあり、対応する権限チェックがない。rubygems GitHub 組織のメンバーのうち、rubygems-org チームに属さない人が、表示の制限をすり抜けて、操作のエンドポイントに直接リクエストできるという。勧告は、影響として、所有者の追加による gem の乗っ取りと、2要素認証の無効化やメールの変更による、アカウントの乗っ取りを挙げている。CVSS v4 の基本値は 8.6。勧告によると、報告者は本番ではなく、ローカルで再現を確認した。",
      "**修正版。** 1件目は、所有権の削除の経路で、破棄のコールバックを使うように修正した。勧告には、修正の commit（f9a2a39）が示されているが、修正版のバージョン番号は明記されていない。また、影響を受けたキーに対する、データの修復の作業も別に必要だとしている。2件目は、修正の commit（501ef6a994785a3f5115f7b85061821abcfe1166）が示されているが、バージョン番号は書かれていない。",
      "**確認できていないこと。** 1件目について、回避策は「影響を受けるキーを完全に保ったまま使える回避策はない」とされている。勧告は、削除された gem の同じ名前で再公開した後は、その gem 単位のキーを失効させるか、ローテーションするよう勧めている。2件目について、回避策は書かれていない。どちらも、野外での悪用の有無は、勧告からは確認できない。",
      "**確認の方法。** RubyGems.org を使って gem を公開している場合は、その gem 単位の API キーの一覧を確認し、不要なキーを失効させる。管理権限を持つアカウントは、2要素認証の設定とメールアドレスを確認する。勧告の修正版が反映されたかどうかは、RubyGems.org の運営側の告知で確認する。",
      "**このサイトへの影響。** AI News は、RubyGems を使っていない。"
    ],
    "primarySources": [
      {
        "title": "Gem-scoped API key authorization bypass when republishing fully yanked gems（GHSA-xx8r-939r-j6hf、2026-10-07）",
        "site": "GitHub（rubygems/rubygems.org の勧告）",
        "url": "https://github.com/rubygems/rubygems.org/security/advisories/GHSA-xx8r-939r-j6hf"
      },
      {
        "title": "Missing authorisation checks in restricted rubygems.org admin actions（GHSA-4p4h-cc5h-844x、2026-10-21）",
        "site": "GitHub（rubygems/rubygems.org の勧告）",
        "url": "https://github.com/rubygems/rubygems.org/security/advisories/GHSA-4p4h-cc5h-844x"
      }
    ]
  },
  "qwen-code-0-25-0-late-agent-results-2026-10-05": {
    "body": [
      "Qwen Code の CLI v0.25.0 が2026年10月5日に公開された。リリースノートの Bug Fixes には、「fix(agents): distinguish accepted Host results from terminal runs」（PR #13241）が含まれる。このPRは10月4日にマージされている。",
      "**何が変わったか（PR の説明による）。** 遠隔の Agent Host が仕事を届けるとき、調整役（coordinator）が、通信の断や、リースの期限切れ、キャンセルなどで、その実行を終了させる場合がある。その後、元の Host が遅れて結果を送ることがある。修正前は、同じリースと試行の番号に一致する遅れた結果に、「受理済み（alreadyApplied: true）」を返す場合があった。実際には復旧処理で終了させただけで、その結果は受理していなかったケースがあるという。",
      "**修正後の扱い。** 復旧やキャンセルで終了した試行に遅れて届いた結果は、stale_lease として拒否され、終了の状態は変わらない。同じ結果の再送は、保存された受理の記録（receipt）が一致する場合だけ受理済みとみなされる。最初の受理は alreadyApplied: false、同じ内容の再送は true を返す。",
      "**設計の出どころ（PR の説明による）。** 終了済みの試行の予算を変更できないようにする案（option A）は、外部の寄稿者 @Nakagawa-master の技術的助言によるものだと、PR の説明に書かれている。同じ説明は、それが「リポジトリのメンテナの判断ではない」とも明記している。また、予算の台帳の扱いを変えることについては、メンテナによる承認がまだ保留されていると書かれている。",
      "**範囲外とされていること。** PR は、後から届く結果の物理的な消費量の会計を範囲外としている。遅れた結果の実際の消費は、実行の予算とは別の場所で扱う必要があるとしている。",
      "**確認できていないこと。** 影響を受けた利用者の数、実際の環境での再現、外部サービスを含む「一度だけ実行される」保証は、PR やリリースノートからは確認できない。本記事は、リリースノートと PR の説明の範囲で書いている。",
      "**このサイトへの影響。** AI News は Qwen Code を使った自動化の仕組みを持っていない。"
    ],
    "primarySources": [
      {
        "title": "Qwen Code v0.25.0 リリースノート（2026-10-05）",
        "site": "GitHub（QwenLM/qwen-code、公式リリース）",
        "url": "https://github.com/QwenLM/qwen-code/releases/tag/v0.25.0"
      },
      {
        "title": "fix(agents): distinguish accepted Host results from terminal runs（PR #13241、2026-10-04 マージ）",
        "site": "GitHub（QwenLM/qwen-code の PR 説明）",
        "url": "https://github.com/QwenLM/qwen-code/pull/13241"
      }
    ]
  },
  "anthropic-claude-duet-research-preview-2026": {
    "body": [
      "Anthropic の製品ページ（claude.com/product/claude-duet）に、Claude Duet が研究プレビューとして載っている。以下は2026年10月24日にそのページを読んだ内容である。ページに発表日の記載は無く、同じ日に Anthropic のニュース一覧（anthropic.com/news）を確認したが、Duet の発表記事の URL は特定できなかった。そのため、この記事の日付は「公式ページが公開されているのを確認した日」である。",
      "ページの説明では、Claude Duet は「メッセージで仕事を預ける、先回りして動くエージェント」である。クラウド上の自分専用のコンピュータで動き、利用者がつないだアプリを使い、終わったときや判断が要るときにメッセージで知らせる。常時動いているが、いつ連絡するかは判断し、待てるものは待たせる、と書かれている。モデルは Opus 5.5 である。",
      "Claude のアプリとの違いについて、ページは次のように説明している。Claude アプリは利用者がチャットを開くのを待ち、一緒に作業する。Duet は利用者の Claude アカウント（メモリ、スキル、コネクタ）をそのまま使い、毎朝その日に注意が要ることを伝え、メッセージで渡された作業を引き受け、終わったか承認が要るときに連絡してくる。履歴は1本のスレッドにまとまる。",
      "できることとして、ページは朝のブリーフ、受信箱とカレンダーから対応が要るものの抽出、返信案の作成（承認待ち）を挙げている。事業の運営まわりでは、未払い請求書の洗い出しと督促文の下書き、給与計算の準備（確認用）、契約書の送付準備がある。ブリーフ、スライド、ダッシュボードも作れる。ページに載っている画面例は、カフェチェーンの経営者を想定した架空のデモである。",
      "安全面の説明は3点ある。第1に、メッセージの送信や支払いのような機微な操作の前に承認を求める。ページの例では、保健所の許可手数料 $640 の支払いに「Approve / Not now」の承認が出る。第2に、承認、ログイン、安全確認は利用者専用のクラウド上のコンピュータの中で行われ、機微な情報はそこにとどまると書かれている。第3に、Duet が何をしたか、いま何をしているかを見て、途中で方向を変えられる。",
      "提供条件は次のとおり。研究プレビューで、米国の Claude Pro と Max の利用者を対象にウェイトリスト方式で受け付けている。Team と Enterprise はまだ含まれない。iOS と Android には単体のアプリがあり、パソコンでは claude.ai のウェブから開く。利用量は Claude の他の機能と同じ枠を共有し、バックグラウンドの確認も枠に数えられる。ブリーフのような常時の確認や、財務モデルやスライドの作成のような大きな作業は、通常の会話より多くのモデル呼び出しと裏の作業を要する、とページは説明している。料金の追加は、ページには書かれていない。",
      "ページは、まだできていないことも明記している。研究プレビューであり、スレッドを読み違えたり、緊急度を見誤ったりすることがある。確認と確認の合間に届いたものを見落とすこともある、という。承認の仕組みがあっても、緊急度の判断が外れる余地は残る、と製品側が認めている形である。",
      "確認できていないこと。発表日と、ページが案内する「発表記事」の中身は読めていない（ニュース一覧から該当記事の URL を特定できなかった）。ページの「6,000以上のコネクタとプラグインに対応」という数字は製品ページの記載で、独立した検証は確認できていない。画面例の数字（売上、残高など）は製品デモのもので、実際の利用結果ではない。ウェイトリストの順番や開始時期、米国以外への展開についての記載は無い。",
      "【追記 2026-11-28】Anthropic は11月25日（米国太平洋時間）、Claude Duet の研究プレビューを米国以外へ初めて広げ、インド、インドネシア、ブラジル、日本で利用できるようにした。対象は Pro、Max、Ultra の利用者で、ウェイトリストへの登録が必要である。プレビュー期間中の特典として、利用枠の全量リセットが Pro には3回、Max と Ultra には1回与えられる。使わなかったリセットは 2026年12月15日に失効する。リセットの回数と失効日は二次報道によるもので、Anthropic の公式ページでの確認はできていない。"
    ],
    "primarySources": [
      {
        "title": "Claude Duet（Anthropic 製品ページ）",
        "url": "https://claude.com/product/claude-duet"
      },
      {
        "title": "Claude Duet AI Assistant Now Available in India in Research Preview; Standalone App Now Listed on Marketplaces",
        "site": "Gadgets 360",
        "url": "https://www.gadgets360.com/ai/news/claude-duet-ai-assistant-india-app-available-research-preview-12380234"
      }
    ]
  },
  "gitlab-critical-patch-release-2026-10-21": {
    "body": [
      "GitLab は2026年10月21日、Critical のパッチリリースを公開した。対象は 19.5.1、19.4.3、19.3.6、19.2.9、19.1.9、19.0.10、18.11.13 で、含まれる脆弱性は12件。公式の告知ページには、12件の一覧と重大度が書かれている。",
      "**最も重大なもの（CVE-2026-110264、Critical）。** CVSS v3.1 の基本値は 10.0（攻撃経路はネットワーク、権限もユーザー操作も不要、影響はスコープが変わる、機密性・完全性・可用性のすべてが高）。告知によると、特に細工された正規表現をコンパイルする際の整数オーバーフローにより、認証のないユーザーが GitLab サーバー上で任意のコードを実行し得る。",
      "**影響を受ける版。** 告知は、7.0 から、それぞれの修正版より前のすべての版が影響を受けるとしている。修正版は、18.11.13、19.0.10、19.1.9、19.2.9、19.3.6、19.4.3、19.5.1。18.11.13、19.0.10、19.1.9、19.2.9 は、定期のリリース日程の外で、修正の逆移植が行われた。",
      "**同じ週の Ruby の修正との関係。** 同じ正規表現の問題の系統は、10月23日に公開された Ruby 4.0.9・3.4.12・3.3.13 の修正にも含まれる。Ruby の告知は、GitLab が報告したもので、CVE-2026-110264 に関わる Ruby 側の修正だと書いている。当サイトの Ruby の記事（10月23日）も参照のこと。",
      "**残りの11件。** 高（High）が2件、中（Medium）が5件、低（Low）が4件。個々の内容は、告知の各項目で確認する。",
      "**回避策。** 告知には回避策が書かれていない。公式は、修正版への更新を勧めている。",
      "**悪用の状況。** 告知は、悪用が起きたとは書いていない。GitLab は、自己ホスト型の利用者向けに、2種類の脅威検知（「Onigmo native worker crash」と「Org mode render error burst」）を公開したとしている。GitLab.com と GitLab Dedicated は、GitLab が管理しているため修正済みだと説明している。",
      "**確認できていないこと。** 攻撃の経路（どの機能から、どのように到達できるか）は、告知からは確認できない。野外での悪用の有無も、告知からは確認できない。",
      "**対応。** 自己ホスト型の GitLab を使っている場合は、使っている版を確認し、上記の修正版へ直ちに更新する。修正版に上げられない間は、脅威検知の結果を確認する。",
      "**このサイトへの影響。** AI News は GitLab を使っていない。"
    ],
    "primarySources": [
      {
        "title": "GitLab Critical Patch Release: 19.5.1, 19.4.3, 19.3.6, 19.2.9, 19.1.9, 19.0.10, 18.11.13（2026-10-21）",
        "site": "GitLab 公式ドキュメント（リリース）",
        "url": "https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-5-1-released/"
      },
      {
        "title": "Regexp compilation fixes related to GitLab's CVE-2026-89078, CVE-2026-93577, CVE-2026-97229 and CVE-2026-110264（2026-10-23）",
        "site": "Ruby 公式（ruby-lang.org）",
        "url": "https://www.ruby-lang.org/en/news/2026/10/23/regexp-fixes-for-gitlab-cves/"
      }
    ]
  },
  "apache-httpd-2-4-69-release-2026-10-01": {
    "body": [
      "Apache HTTP Server は2026年10月1日、バージョン 2.4.69 を公開した。公式のセキュリティ情報のページには、この版で修正された脆弱性が20件（中程度5件、低15件）と書かれている。",
      "**中程度の脆弱性の例（公式の記述）。** CVE-2026-42528 は、mod_dav の共有ロックに関わる計算のバグで、WebDAV のロックを作る権限を持つ攻撃者が、サーバーの子プロセスをクラッシュさせ得る。この問題は、2.4.67 以前に影響する。CVE-2026-57941 は、mod_http2 の解放後使用（use-after-free）で、2.4.17 から 2.4.68 の版に影響する。",
      "**対応。** 公式は、2.4.69 への更新を勧めている。上記の版を使っている場合は、影響を受けるモジュール（mod_dav、mod_http2）を使っているかを確認する。",
      "**確認できていないこと。** 公式の告知からは、悪用の有無は確認できない。残りの18件の内容は、公式の一覧で確認する。",
      "**このサイトへの影響。** AI News は Apache HTTP Server を使っていない。GitHub Pages で配信している。"
    ],
    "primarySources": [
      {
        "title": "Apache HTTP Server 2.4 Vulnerabilities（2.4.69、2026-10-01）",
        "site": "Apache HTTP Server 公式（httpd.apache.org）",
        "url": "https://httpd.apache.org/security/vulnerabilities_24.html"
      }
    ]
  },
  "claude-code-2-1-310-monitor-tool-bedrock-vertex-gateway-retry-2026": {
    "body": [
      "anthropics/claude-code の CHANGELOG.md は、最新版を 2.1.310 としている。npm レジストリでは `latest` と `next` が 2.1.310 を指し、公開時刻は 2026年10月23日 21:20 UTC だった（`stable` は 2.1.308 のまま）。直前の 2.1.306〜2.1.309 の次にあたる。以下は変更履歴の記載に基づく整理で、実際の挙動は検証していない。",
      "最初の変更は Monitor ツールとプラグインの monitors の提供範囲である。変更履歴によると、Bedrock・Vertex・Foundry 経由の利用に加え、テレメトリや非必須通信を無効にしたセッションでも使えるようになった。これまで使えなかった条件が何だったかは、変更履歴の記載からは分からない。",
      "ゲートウェイ経由の利用では、一部のゲートウェイが beta の値や会話の途中のシステムメッセージを拒否してリクエストが失敗する問題が直った。Claude Code はそれらを外して再試行する。社内プロキシや LLM ゲートウェイを挟んでいる環境が対象で、直接 API に接続している環境には関係しない。",
      "そのほか、保持期間を非常に大きく設定したときにクリーンアップが最近のファイルまで削除する問題、「Prompt is too long」のあとの圧縮が密度の高いテキストを残しすぎる問題、読み取りの確認画面でシンボリックリンクの参照先が表示されない問題が修正された。保持期間の設定でファイルが消える問題は、該当する設定を使っている場合に確認する価値がある。",
      "クラウドセッションでは、Enterprise のカスタムロール、セットアップスクリプト用のファイルピッカー、保存時とエラー時のメッセージの分かりやすい表示が加わった。全項目は公式の変更履歴にある。"
    ],
    "primarySources": [
      {
        "title": "Claude Code CHANGELOG.md（2.1.310）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリ）",
        "url": "https://www.npmjs.com/package/@anthropic-ai/claude-code"
      }
    ]
  },
  "gemini-cli-0-65-otlp-headers-untrusted-folders-session-fixes-2026": {
    "body": [
      "google-gemini/gemini-cli の docs/changelogs/latest.md は、最新の安定版を v0.65.0（2026年10月20日公開）としている。npm レジストリでは `latest` タグが 0.65.0 を指し、公開時刻は同日 UTC 21:26 だった。直前に扱った 0.64.0 の次の安定版にあたる。以下は公式の変更履歴の記載に基づく整理で、実際の挙動は検証していない。",
      "テレメトリでは、OTLP ヘッダーを設定で指定できるようになった。変更履歴は、OpenTelemetry のコレクターへの認証やヘッダーの調整に使えるとしている。",
      "セキュリティと認証では、信頼していないフォルダでワークスペース設定が読み取り専用に制限される。OAuth のコールバック検証は RFC 9207 に沿う形になり、認証のやり直しが無限に続く問題も直った。",
      "セッションまわりでは、Ctrl+C を素早く連打したときにセッションが壊れる問題、すぐ終了したときに再開した履歴が失われる問題、再開時にツール応答のターンが重複する問題が修正された。長時間のセッションを中断・再開しながら使う場合に関わる。",
      "ファイルまわりでは、無視パターンによるフィルタリングがディレクトリごと読み飛ばすようになり、走査が速くなった。`@<ディレクトリ>` の参照は再帰的な読み込みを先送りする。端末表示では、Enter で固まる問題と、Ctrl+O の展開時に画面が不要にクリアされる問題が直った。約27件のプルリクエストが含まれ、全項目は公式の変更履歴にある。"
    ],
    "primarySources": [
      {
        "title": "Gemini CLI 変更履歴（latest, v0.65.0）",
        "url": "https://github.com/google-gemini/gemini-cli/blob/main/docs/changelogs/latest.md"
      },
      {
        "title": "@google/gemini-cli（npm レジストリ）",
        "url": "https://www.npmjs.com/package/@google/gemini-cli"
      }
    ]
  },
  "codex-cli-0-164-presets-inline-args-enterprise-mcp-2026": {
    "body": [
      "OpenAI の Codex リポジトリのリリースページによると、Codex CLI 0.164.0 は2026年10月23日（UTC）に公開された。前回扱った 0.163.0 は別記事にある。この記事は公式のリリースノートをもとに、自分の版にその機能があるかを判断できるよう整理する。内容はリリースノートの記載に基づき、実際の挙動は検証していない。リリースノートに破壊的変更の記載は無い。",
      "新機能は6点ある。第一に、プリセットである。繰り返し使うプロンプトやスラッシュコマンドを番号付きの10枠に保存でき、キーボードのメニューから呼び出せる。第二に、スラッシュコマンドへの引数指定である。`/model` はモデル、推論の強さ、速度を引数で受け取り、`/permissions` は権限プロファイルを受け取る。",
      "第三に、画像のプレビューである。Kitty または Sixel に対応した端末では、表示した画像や生成した画像が全画面のトランスクリプトに出る。第四に、企業向けの MCP 認証である。MCP への接続に、資格のある Codex アカウントの権限付与、または専用のサインインを使える。シークレットを要求する OAuth クライアントも対象に含まれる。",
      "第五に、資格情報のマスキングである。対応するリモートの Bash コマンドと Zsh のスナップショットセッションが対象で、カスタムプロバイダーの資格情報も含まれる。第六に、Bedrock のセットアップウィザードが既定でオンになった。AWS の資格情報が検出されたときは、API キーの入力が他の AWS サインイン方法と同じ場所に並ぶ。",
      "バグ修正は6点ある。圧縮（コンパクション）に失敗しても、不完全な要約が会話履歴に残らなくなり、バックグラウンドの圧縮が失敗した場合はパニックせずに代替の処理へ戻る。セッションの再開では、圧縮された履歴を見つけ、保存されたスレッドの設定をグローバルの既定値ではなく復元する。",
      "Windows では、HTTPS と WebSocket の接続がプロキシの認証要求に対し、サインイン中のユーザーの Negotiate または NTLM の資格情報で応答する。サブコマンドの複数の階層に `-c` / `--config` の上書きが現れても保持される。権限の選択が未解決の間は、キューに入れたプロンプトが待機する。",
      "サンドボックスの検査も強化された。macOS では大文字小文字だけが違うメタデータのパスに対する検査が、また実行ファイルの場所を探すときに差し替えられうるシンボリックリンクに対する検査が、それぞれ強化されたと記載されている。リリースノートの要約からは、これらが実際に悪用された事例かどうかは分からない。",
      "雑務の項目では、使われていないインストールの整理、放置されたマーケットプレイスのチェックアウトの掃除、デーモンのログの上限設定でディスク使用量を減らしたとされる。組み込みの JavaScript ランタイムも更新され、最適化された `Array.sort` に安全確認が加わった。",
      "ほかに、リリースノートは多数のプルリクエストを列挙しており、主題として Guardian のレビュー改善、ロールアウトの圧縮とセッション再開、デーモンのインストールと更新、MCP の OAuth と企業向けの MCP 認可、TUI のキーマップと Markdown 表示、SQLite の信頼性、Responses API プロキシの認証などが挙がる。個別の中身は今回の確認範囲外で、気になる項目は原文で確かめたい。"
    ],
    "primarySources": [
      {
        "title": "Codex CLI 0.164.0 リリースノート（openai/codex）",
        "url": "https://github.com/openai/codex/releases/tag/rust-v0.164.0"
      },
      {
        "title": "Codex リリース一覧（openai/codex）",
        "url": "https://github.com/openai/codex/releases"
      }
    ]
  },
  "weekly-metrics-2026-week-oct19": {
    "body": [
      "この記事はニュースのまとめではなく、サイト自身の公開データから計算した「計器」である。1週間を見渡して初めて出る数字を、解釈を添えて示す。数字は `node scripts/weekly-metrics.mjs` の出力（集計日2026年10月26日）と、サイトの記事データの集計に基づく。外部サイトの情報は使っていない。前週分の計器記事そのものは、集計の対象から除いている。",
      "## 公開本数 — 20本、前週の13本から増",
      "10月19日〜25日の公開は**20本**（前週13本）。種別は news 20 のみで、feature（特集・分析）とレビューは0本だった。分野は product 13 / cli 7。出来事から掲載までの中央値は1日である（前週は2日）。日別では10月22日が7本と突出し、23日が4本、24日が5本、20日が2本、21日と25日が各1本だった。19日は0本である。",
      "出来事の日と掲載日が3日以上ずれた記事は6本あった。最大は[Qwen Code v0.25.0](?a=qwen-code-0-25-0-late-agent-results-2026-10-05)（出来事は10月5日、掲載は23日）と[Apache HTTP Server 2.4.69](?a=apache-httpd-2-4-69-release-2026-10-01)（出来事は10月1日、掲載は24日）で、いずれも18日以上あとに拾っている。本数が前週より増えた一部は、過去の公開をあとから記事にした分である。",
      "## 題材の内訳 — 11本が AI 以外のソフトウェアのセキュリティ情報",
      "題材で数えると、20本の内訳は次のとおりである。Anthropic 関連が6本（Claude Code の版が[2.1.303〜2.1.304](?a=claude-code-2-1-303-304-auto-mode-setup-resume-warning-worktree-2026)・[2.1.305](?a=claude-code-2-1-305-nested-user-namespaces-tool-search-retry-allowedmcpservers-2026)・[2.1.306〜2.1.309](?a=claude-code-2-1-306-to-309-sandbox-startup-files-safety-event-api-version-2026)・[2.1.310](?a=claude-code-2-1-310-monitor-tool-bedrock-vertex-gateway-retry-2026)の4本、[Claude API の新バージョン 2026-10-21](?a=anthropic-api-version-2026-10-21-breaking-changes-2026)と[Claude Duet](?a=anthropic-claude-duet-research-preview-2026)が各1本）。他社の CLI が3本（[Gemini CLI 0.65.0](?a=gemini-cli-0-65-otlp-headers-untrusted-folders-session-fixes-2026)、[Codex CLI 0.164.0](?a=codex-cli-0-164-presets-inline-args-enterprise-mcp-2026)、Qwen Code）。残る**11本が、AI を主題にしないソフトウェアの脆弱性や事故の記事**だった。",
      "その11本は、[PHP](?a=php-critical-security-release-2026-10-21)、[Java](?a=java-cve-2026-91403-compromised-ca-certificates-2026-10-21)、[Next.js](?a=nextjs-security-update-2026-10-14)、[Node.js](?a=nodejs-security-release-2026-10-21)、[eMudhra の中間 CA](?a=emudhra-intermediate-ca-weak-keys-revoked-2026-10-18)、[Railway](?a=railway-environment-variables-incident-2026-10-21)、[LiteLLM](?a=litellm-1-107-0-quarantined-pypi-2026-10-21)、[Ruby](?a=ruby-4-0-9-3-4-12-3-3-13-regexp-fixes-2026-10-23)、[RubyGems](?a=rubygems-org-advisories-2026-10-07-10-21)、[GitLab](?a=gitlab-critical-patch-release-2026-10-21)、Apache である。このうち LiteLLM は AI 関連のパッケージだが、記事の主題は PyPI での隔離である。PHP・Node.js・Java・GitLab の公開が10月21日前後に重なったことも、件数に出ている。",
      "このサイトの3軸（速報・発掘・分析）は、いずれも AI の話題を前提にしている。この11本はどの軸にも収まりにくく、**軸の外にある記事が週の過半を占めた**ことになる。開発者が使う基盤の更新は、AI ツールを動かす環境に直結するという見方はできる。一方で、読者がこの量を期待しているかは、このデータからは判定できない。解釈を決めるのは、サイトの方針を見直す場である。",
      "## 3軸のバランス — 発掘と分析は3週続けて0本",
      "20本はすべて news で、feature の最後の記事は[10月2日](?a=anthropic-pentagon-dc-circuit-appeal-2026)だった（この週の集計日から24日前）。型で見ると、**発掘（新興・OSS・個人開発）と分析（社会的インパクト・規制・倫理）は3週続けて0本**である。Qwen Code は中国発の OSS だが、記事は終了済みの実行に遅れて届く結果の扱いを直す変更の紹介で、新興プロジェクトの発掘とは性質が違うため、発掘には数えていない。",
      "## 「AI安全性」の記事は0件、「セキュリティ」は10件",
      "タグの動きを見ると、「セキュリティ」は10件（前週2件、前々週3件）と急に増えた。**ただし増えた分は、上の11本の脆弱性・事故の記事である。** 「AI安全性」は、前週の計器記事自身に付いた1件を除くと0件（その前の週も0件）、「エッジAI」「個人開発」「透明性」「ローカルLLM」「半導体」も0件だった。セキュリティのタグが増えても、AI に固有のリスクや規制を扱う記事が増えたわけではない。",
      "## ガイドの空白は変わらない",
      "週次の計器が出す「記事で頻出するのに、ガイドに説明が無い概念」は、今週も同じ顔ぶれだった。直近90日の記事数は、「AI安全性」32件、「中国AI」16件、「エッジAI」11件、「個人開発」10件、「透明性」7件、「半導体」5件、「ローカルLLM」4件である（「Alibaba」7件と「リリースノート」5件は、固有名詞と記事の型のため補強の対象としては数えていない）。「中国AI」が前週の18件から16件に減ったのは、90日の窓から古い記事が外れたためで、新しい記事が減ったわけではない。ガイドの書き込みは Routine には禁じられており、対話セッションでの判断を待っている。",
      "## ツール別ページとの比",
      "直近90日の記事数とツール別ページの解説項目数の比は、Claude Code 0.35（33件 / 93項目）、Codex 0.32（15件 / 47項目）、VS Code + Copilot 0.17（6件 / 35項目）、Cursor 0.14（6件 / 44項目）、Gemini CLI 0.07（3件 / 43項目）、Power Apps 0（0件 / 20項目）だった。比が大きいほど、話題の割に解説が薄い。**Cursor の記事は[9月20日](?a=cursor-projects-coordinator-agent-2026)を最後に出ておらず**、Cursor と VS Code + Copilot は今週も0本だった。",
      "## 確認できなかったこと",
      "今週の調査では、OpenAI・Google・DeepSeek などの新モデルについて、一次資料に届く情報を見つけられなかった。検索で出てきたのは予測市場や集約サイトの記述で、数値や公開日が互いに食い違っていたため、記事にしていない。**これは「出来事が無かった」という意味ではなく、確かめられる材料が手元に無かったという意味である。** 取りこぼしかどうかは、公式ドキュメントや GitHub のリリースに届いた時点で決まる。"
    ],
    "tables": [
      {
        "afterParagraph": 5,
        "caption": "この週の公開の内訳（10月19日〜25日）",
        "headers": [
          "区分",
          "本数",
          "例"
        ],
        "rows": [
          [
            "Anthropic 関連",
            "6本",
            "Claude Code 2.1.303〜2.1.310、Claude API 2026-10-21、Claude Duet"
          ],
          [
            "他社の AI CLI",
            "3本",
            "Gemini CLI 0.65.0、Codex CLI 0.164.0、Qwen Code v0.25.0"
          ],
          [
            "AI 以外のソフトウェアのセキュリティ",
            "11本",
            "PHP、Node.js、Java、Next.js、GitLab、Railway など"
          ],
          [
            "発掘・分析",
            "0本",
            "—"
          ]
        ]
      },
      {
        "afterParagraph": 13,
        "caption": "記事で頻出するのにガイドに説明が無い概念（直近90日、週次の計器の出力）",
        "headers": [
          "概念",
          "記事の件数",
          "この週に付いた記事"
        ],
        "rows": [
          [
            "AI安全性",
            "32件",
            "0件（前週の計器記事を除く）"
          ],
          [
            "中国AI",
            "16件",
            "0件（同上）"
          ],
          [
            "エッジAI",
            "11件",
            "0件"
          ],
          [
            "個人開発",
            "10件",
            "0件"
          ],
          [
            "透明性",
            "7件",
            "0件"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "AI News リポジトリ（週次の計器の算出元データ）",
        "url": "https://github.com/022740mix-spec/AI-News"
      }
    ]
  },
  "github-copilot-cli-1-0-100-to-1-0-103-sandbox-local-network-proxy-2026": {
    "body": [
      "github/copilot-cli の変更履歴（changelog）によると、GitHub Copilot CLI は 2026年10月19日の 1.0.100 から10月22日の 1.0.103 までに、1.0.100・1.0.101・1.0.102・1.0.103 の4版が出た。changelog に 1.0.99 の項目は無く、npm の公開記録でも 1.0.98 の次の正式版は 1.0.100 だった。直前の 1.0.95〜1.0.98 は別の記事で扱っている。この記事は changelog の記載をもとに、自分の版にその機能があるかを判断できるよう整理する。内容は記載に基づくもので、実際の挙動は検証していない。",
      "最も影響が大きそうなのはサンドボックスの既定値である。1.0.100 の「Sandbox allows local network access by default so commands can reach localhost and private-network services」により、サンドボックス内のコマンドが localhost や私設ネットワークのサービスへ届くようになった。1.0.101 には、ローカルアクセスが有効でホストのフィルタが無いとき、macOS のサンドボックス内のコマンドが localhost の TCP サービスへ直接つなげるという項目がある。いずれも changelog は理由を書いていない。接続先を絞りたい環境では、この既定値が自分の運用と合っているかを確かめる材料になる。",
      "サンドボックスまわりでは、ほかにも項目が続く。1.0.100 では、サンドボックス用のプロキシが設定されていないとき、ホスト規則の通信が HTTPS_PROXY と HTTP_PROXY を使う。1.0.102 では、ホストのプロキシ設定を引き継ぐ場合に NO_PROXY と ALL_PROXY も尊重する。開発ツール向けのアクセスが有効なとき、パッケージやビルドのキャッシュへ書けるようになり（1.0.100）、dnx コマンドは既存の .NET と NuGet の許可を使い、Windows の npm.cmd のようなシムも npm と同じ許可を受ける（1.0.103）。github.com への sandboxed な git は、credentials.envVars に設定した GITHUB_TOKEN を使える。/sandbox は、全体では有効にせず現在のセッションだけサンドボックスを保てる。1.0.102 では、10秒を超えて走るサンドボックス内コマンドが安定して動き続けるよう直された。",
      "1.0.100 で新しいフラグが2つ入った。--disable-client-telemetry は、CLI からのクライアントテレメトリのアップロードを止める。--trust-folder は、-p またはパイプ入力で始める単発のプロンプトモードのセッションで、フォルダを一度だけ信頼するために使う。同じ版では、ghapp://air/install?... 形式の GitHub のインストールリンクから、検証済みのスキルとプラグインを `copilot plugin install` で入れられるようになった。組み込みブラウザのプラグインは browser-use に改名され、既存の設定は引き継がれる。.github/instructions に置いたパス指定の指示ファイルは、エージェントが一致するファイルを読むか編集するときに自動で適用される。",
      "権限の扱いでは、1.0.100 で、Assisted モードにおける組織管理の ask 権限が、安全な操作では余計な確認なしに通るようになった。入れ子の PowerShell や bash -c のうち、単純なデータの環境変数の展開だけを行うものは、手動承認を求めずに権限の判定役へ送られる。1.0.101 には assistedApprovalInstructions 設定が加わり、Assisted Permissions が確認を判断するときの指示を書ける。承認プロンプトは、昇格が必要な理由と、要求ごとの診断コマンドを示す。拡張機能が能力を求める場合は、判定役ではなく明示的な承認を使う。1.0.102 では、サブエージェントがカスタムや MCP ツールの承認を引き継ぎ、重複した許可プロンプトが出ない。",
      "MCP とセッションの項目もある。1.0.100 は、MCP サーバーがツールの読み込みで固まっても、セッションが数分止まらないようにした。1.0.101 は、動的ワークフローのサブエージェントで、対応するモデルのネイティブな構造化出力を追加した。保存済みトークンがサインインを要する場合、OAuth の処理を持たないヘッドレスと SDK のセッションは MCP 接続を飛ばす。1.0.102 は複数の Git worktree で、同じリポジトリのローカル MCP ツールのスナップショットを使い回す。1.0.103 では、リモート起動のフラグが整理され、従来の --remote と --no-remote が廃止された。",
      "モデルごとの修正は、Gemini と Google のモデルに集中している。1.0.100 は配列パラメータに enum があるときの Gemini のツール呼び出しの失敗と、ツール結果に読み取れる内容が無いときのチャットの失敗を直した。1.0.101 は GPT から Gemini へ切り替えたとき、前の会話にカスタムツール呼び出しが含まれていても失敗しないようにし、Google モデルへの画像数の上限もレジストリに合わせた。1.0.103 は nullable と enum のフィールドによる 400 エラーを避ける。GPT-5 系では、モデルごとの既定の Responses verbosity が、セッションで明示しない限り正しく適用される。1.0.102 では、プロバイダーの過負荷で応答が途切れたとき、バックオフ付きで再試行し、プロバイダーのメッセージとリクエスト ID を表示する。",
      "ここに挙げたのは changelog の一部で、HydraFusion や Entra のサインイン、Windows 固有の修正など、触れていない項目も多い。全項目は公式の changelog を参照してほしい。"
    ],
    "primarySources": [
      {
        "title": "GitHub Copilot CLI changelog（github/copilot-cli）",
        "url": "https://github.com/github/copilot-cli/blob/main/changelog.md"
      },
      {
        "title": "@github/copilot（npm）の公開記録",
        "url": "https://www.npmjs.com/package/@github/copilot"
      }
    ]
  },
  "claude-code-2-1-311-ultrathink-xhigh-model-catalog-signed-file-2026": {
    "body": [
      "anthropics/claude-code の CHANGELOG.md は、最新版を 2.1.311 としている。npm レジストリでは `latest` と `next` が 2.1.311 を指し、公開時刻は 2026年10月26日 19:47 UTC だった（`stable` は 2.1.308 のまま）。直前の 2.1.310 は 10月23日の公開である。以下は変更履歴の記載に基づく整理で、実際の挙動は検証していない。",
      "挙動が変わる項目から見る。`ultrathink` は、対話型ターミナルで Opus 5.5・Sonnet 5.5・Haiku 5.5・Fable 5.1 に対し、Anthropic の API 経由なら xhigh の effort でそのターンを走らせるようになった。Claude が作業中に入力した場合は、そのターンの残りの effort が上がる。虹色の表示は、キーワードが effort を上げうる場所だけに出る。語を引用符で囲んだ場合やファイルパスの一部の場合には出ない。",
      "Bedrock・Mantle・Vertex・Foundry で Claude Code を使う場合、モデル設定を downloads.claude.ai の署名付きファイルから読み込む仕様に変わった。無効にするには `CLAUDE_CODE_MODEL_CATALOG=off` を設定する。通信先が増えるため、外向きの通信を許可リストで管理している環境では、この宛先の扱いを確認する価値がある。変更履歴には、署名の検証方法や取得の頻度までは書かれていない。",
      "`DISABLE_COMPACT` は、設定ファイルと mod の `$.env.set` のどちらでも、圧縮を無効にする方向にだけ効くようになった。設定で圧縮を戻すことはできない。同じ設定に関連して、エージェントのチームメイトが `DISABLE_COMPACT` を設定していても履歴を圧縮してしまう問題と、巻き戻しのメニューが要約の項目を出してしまう問題が直った。",
      "出力まわりでは、`--output-format json` と `stream-json` が、文字列の中の DEL・C1 制御文字・Unicode の書式文字を `\\uXXXX` のエスケープで書くようになった。変更履歴は、パースした値は変わらないとしている。出力を文字列として直接比較したり、行単位で加工したりしているスクリプトは、差分が出る可能性がある。",
      "不具合の修正では、標準コンテキストのセッションで、リクエストが 200K トークンを超えたときに「Usage credits required for 1M context」で止まる問題が直り、Claude Code は会話を圧縮して続行するようになった。API が再試行しないよう示したリクエストを再試行して、ターンが数分、無人の再試行モード（`CLAUDE_CODE_RETRY_WATCHDOG`）では無期限に止まりうる問題も直った。サブエージェントについては、接続の完了が遅い MCP サーバーのツールを使えない問題、`SubagentStop` フックが終了時に1回ではなく1分に約2回走る問題、隔離された worktree がバックグラウンドのサブエージェントの作業中に削除される問題が修正された。",
      "ファイル操作と記憶まわりでは、数千行を変更する Write と Edit が最大5秒止まり「0行変更」と報告する問題、CLAUDE.md に非常に長いリスト項目があると起動後やファイルの読み書きの後に長く固まる問題、自動圧縮の直後に古い MEMORY.md と CLAUDE.md の内容が見える問題が修正された。`claude -p` と SDK のセッションが、取り消したメッセージを残したり順序を入れ替えて保存したりする問題も直った。",
      "Linux のサンドボックスでは、`--plugin-dir` のフォルダが追加ディレクトリでもあり、`permissions.blockReadsOutsideWorkingDirectories` が有効なとき、サンドボックス内の Bash コマンドが `bwrap: Can't create file` で失敗する問題が直った。",
      "追加された機能は小さい。`self-hosted-runner` に、ホストが残したプロセスを報告している間はセッションを保持する `--hold-idle-file` と `--max-hold-min` が加わった。VS Code の拡張では、Claude の返信のコードブロックに構文の色が付き、遅い `UserPromptSubmit` フックにスピナー表示が出る。シェルコマンドがタイムアウトに達したときは、ここまでの出力を表示し、コマンドはバックグラウンドで動き続けていると伝える。圧縮の返信に要約が含まれていなければ、会話を置き換える前にもう一度要約を求める。",
      "そのほか、`/rewind` の確認文、`/mcp` の認証状態の表示、`/ide` のインストール完了の表示、Pro・Max 契約者向けのエラー文言など、表示の誤りが多数直っている。全項目は公式の変更履歴にある。"
    ],
    "primarySources": [
      {
        "title": "Claude Code CHANGELOG.md（2.1.311）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリ）",
        "url": "https://www.npmjs.com/package/@anthropic-ai/claude-code"
      }
    ]
  },
  "codex-cli-0-165-vertex-provider-terra-memory-v2-2026": {
    "body": [
      "OpenAI の Codex リポジトリのリリースページによると、Codex CLI 0.165.0 は2026年10月27日に公開された（ページには年の表記が無く、一覧の並びと日付から読んだ）。前回扱った 0.164.0 は別記事にある。この記事はリリースノートの記載を整理したもので、実際の挙動は検証していない。リリースノートに破壊的変更の明記は見当たらない。",
      "新機能は6点ある。第一に、Google Cloud の Vertex AI を組み込みプロバイダーとして使える。設定で `model_provider = \"gcp\"` を指定する。第二に、モデルカタログに GPT-6.1 Terra が加わった。ただしリリースノートが述べているのはカタログへの追加までで、Terra の提供条件や価格は今回の確認範囲に無い。",
      "第三に、セッション選択に、リポジトリで絞り込むフィルターが入った。エージェントのコマンドセンターは、リンクされた worktree をまたいで探しやすいよう、ディレクトリごとにまとめて表示される。第四に、app-server API に、実験的な「接続されたスレッドのフォーク」が加わった。実験段階であり、仕様は変わりうる。",
      "第五に、対応するモデルでは、会話の途中で推論の強さを変えられる設定が既定でオンになった。第六に、memory v2 が新規プロファイルで既定になり、他のエージェントの記憶を memory v2 に取り込む機能も加わった。既存のプロファイルでの扱いはリリースノートの要約からは分からない。",
      "バグ修正は6点ある。新しい TUI セッションでは、上書きが無いときサーバー側の既定の承認レビュアーが使われる。実行設定が不正でも TUI の設定を編集でき、すぐ反映される。リモート MCP のツール要求は、ローカル側の応答が破棄されたときに取り消される。",
      "割り込みや Plan モードへの切り替えのあとで、キューに入れたエージェントのメッセージが作業を再開させる問題が直った。プロバイダーの「モデルが見つからない」エラーは再試行されなくなり、メッセージも保たれる。マーケットプレイスの URL の検証に抜けがあり、確認したホストと別のホストに Git が接続しうる状態だったものが塞がれた。リリースノートからは、これが実際に悪用された事例かどうかは分からない。",
      "この版に関連して、サイトにある既存の記事では、Codex の既定モデルが GPT-6.1 Sol になったことを扱っている。Vertex AI の組み込みプロバイダーは、Codex を Google Cloud の契約・認証の枠内で使いたい利用者向けの選択肢にあたる。使えるモデルや課金は、Google Cloud 側の提供条件に依存する。",
      "ほかに、リリースノートは約60件のマージ済みプルリクエストを列挙しており、大半は内部の変更、CI の更新、テストである。個別の中身は今回の確認範囲外で、気になる項目は原文で確かめたい。"
    ],
    "primarySources": [
      {
        "title": "Codex CLI 0.165.0 リリースノート（openai/codex）",
        "url": "https://github.com/openai/codex/releases/tag/rust-v0.165.0"
      },
      {
        "title": "Codex リリース一覧（openai/codex）",
        "url": "https://github.com/openai/codex/releases"
      }
    ]
  },
  "anthropic-claude-models-google-cloud-anthropic-managed-2026": {
    "body": [
      "Anthropic の API リリースノートによると、2026年10月22日に「Claude Models on Google Cloud（Anthropic managed）」が提供開始となり、同日、Claude Opus 5.5 の fast mode がこの提供形態でも使えるようになった。この記事は、Anthropic の公式ドキュメントのセットアップと機能対応の記述をもとに整理する。実際の導入や課金の挙動は検証していない。",
      "Google Cloud 上の Claude には、もともと Google が運用する「Google managed」（Vertex AI 系）がある。今回の Anthropic managed は、ドキュメントの説明では Claude API を Anthropic が運用し、Google Cloud のプロジェクトを通じて到達する形である。Anthropic の新機能やリサーチプレビューを、公開と同じ日に使えることが利点として示されている。",
      "セットアップは Google Cloud Marketplace で Claude Models on Google Cloud（Anthropic managed）を購読するところから始まる。この手順で、Google Cloud のプロジェクトごとに新しい Anthropic 組織が作られる。既存の Anthropic 組織や Claude Enterprise の組織とは別で、API キー、ワークスペース、Console の設定は引き継がれない。既存の割引がある場合は、手順の前に担当者へ連絡するよう書かれている。",
      "認証は Google Cloud の資格情報だけである。ドキュメントは、この提供形態では API キーを使わず、Console でもキーを作れないと述べている。Workload Identity Federation やサービスアカウントの権限借用は、他の Google Cloud API と同じように使える。アクセス制御は IAM のロールで行う。",
      "課金は Google Cloud Marketplace を通る。Anthropic が使用量を計測し、Claude Consumption Unit（1 unit = 0.01 米ドル）で Google Cloud に報告する。請求は Google Cloud の請求書に載り、Anthropic からの別の請求書は出ない。Google Cloud の支出コミットメントがある場合、他の Marketplace 購入と同じように使用量が充当される。",
      "機能は Claude API とほぼ同じ範囲で使えると書かれている。fast mode（Opus 5.5）、ウェブ検索、ウェブ取得、コード実行、メモリツール、MCP コネクタ、Agent Skills、Files API、プロンプトキャッシュ、構造化出力、Message Batches API、Claude Managed Agents が挙がる。顧客管理の暗号鍵（CMEK）は Google Cloud KMS の鍵で使える。ドキュメントは、これが全機能の一覧ではなく、載っていない機能の可否は示していないとも断っている。",
      "使えないものも明記されている。API キー、MCP トンネル、自己ホスト環境でのメモリストア、`ant` CLI や各 SDK に入っている事前構築の自己ホスト型サンドボックスワーカー（Environments の Work エンドポイントを直接呼ぶ自前のワーカーが必要）である。Anthropic 向けの SDK クライアントは、この提供形態についてはベータと記載されている。",
      "データの扱いは、Anthropic がデータ処理者であり、保持方針は Claude API と同じ。Anthropic の信頼性・安全性のシステムなど、一部の支援サービスは Google Cloud の外で処理するとされる。Zero Data Retention は要望に応じて提供され、他の Anthropic 組織で結んだ ZDR は引き継がれない。リージョンについては、ロケーションは `global` のままにし、米国内に限る推論は各リクエストで `inference_geo: \"us\"` を指定する。",
      "Google managed との違いを事実として並べると次のようになる。Google managed は Google が運用し、Google Cloud の Agent Platform の一部として提供される。Anthropic managed は Anthropic が運用し、Anthropic の組織・Console・レート制限の枠組みを使う。どちらが適するかは、契約、データの扱い、必要な機能で決まる。この記事は優劣を述べない。既存の Google managed からの移行手順もドキュメントにあり、2つの組織は並行して稼働でき、段階的に移せるとされる。",
      "なお、Claude Code の Vertex 対応や Monitor ツールの変更は、サイトの既存の記事が扱っている。本記事が見たのは Anthropic の公式ドキュメントとリリースノートで、Google Cloud 側の発表文には到達して確認していない。独立した検証や利用者の報告も確認できていないため、記述はすべて Anthropic 自身の説明に基づく。"
    ],
    "primarySources": [
      {
        "title": "Claude Models on Google Cloud (Anthropic managed) — Claude Platform Docs",
        "url": "https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/anthropic-managed"
      },
      {
        "title": "Claude API リリースノート（2026年10月）",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      }
    ]
  },
  "claude-code-2-1-312-simple-prompt-custom-model-names-hooks-limit-2026": {
    "body": [
      "anthropics/claude-code の CHANGELOG.md は、最新版を 2.1.312 としている。npm レジストリ上の公開時刻は 2026年10月27日 18:36 UTC だった。直前の 2.1.311 は 10月26日の公開である。以下は変更履歴の記載に基づく整理で、実際の挙動は検証していない。",
      "最も影響範囲が広いのは、Bedrock・Vertex・Foundry・Mantle を使う環境での2件の変更である。1つ目は、Claude Code が認識できないモデル名（独自のデプロイ名や推論プロファイル ARN など）に対して、短い方のシステムプロンプトを使うようになったこと。背後が Sonnet や Haiku であっても同様で、完全版のプロンプトを使い続けたい場合は `CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT=0` を設定する。2つ目は、フラグが付いたメッセージのあとに行われる自動のモデル切替が、認識できないモデル名にも及ぶようになったこと。止めるには `CLAUDE_CODE_DISABLE_REFUSAL_FALLBACK=1` を設定する。変更履歴には、短いプロンプトと完全版で具体的に何が違うのかは書かれていない。",
      "フックには上限が入った。prompt フックと agent フックは、サブエージェントを含めて1セッションあたり同時に24件まで動く。加えて、そのイベントのタイムアウトより長く待たされているものは12件までとされた。`timeout` に1秒未満の値を書いた場合は1秒として扱う。直近の 2.1.302 でも、フックの同時実行は12件までという制限が話題になっており、フックを多用する設定では、自分の構成が上限に当たらないかを確認する材料になる。",
      "サブエージェントの `autoCompactWindow` は、`CLAUDE_CODE_AUTO_COMPACT_WINDOW` で設定した窓を下げる方向に効くようになった。これまでは効果がなかったと書かれている。窓を広げる方向には、引き続き効かない。",
      "管理者向けには、Claude apps gateway に `oidc.user_id_claim` が加わった。ユーザーの識別に `sub` 以外の id_token クレームを使う設定で、変更履歴は Microsoft Entra ID の `oid` を例に挙げている。OpenTelemetry では、公式 Anthropic マーケットプレイスのプラグインが宣言した固定 URL のリモート MCP サーバーについて、`mcp_server.name` が `custom` ではなく実際の名前で出る。一方、`claude_code.safety_event` イベントの送信は止まった。2.1.306〜2.1.309 で加わった同名のイベントを集計している場合は、データが出なくなる。",
      "表示の変更として、usage 上限のメッセージが 5 時間の窓を「session limit」ではなく「5-hour limit」と呼ぶようになった。VS Code の拡張でも同じ表記になり、リセット時刻は「Resets at 3:10 PM」のような時刻で出る。`/model` と `/effort` のキャッシュ警告、入力欄の effort 表示も整理された。作業中に変更した effort は、モデルが適用するまでは実際の値として表示されず、次のメッセージまで反映されない場合があることを入力欄が示す。",
      "不具合の修正では、非常に大きい CLAUDE.md・rules ファイル・@ で取り込んだファイルの冒頭だけを読んだ Claude が、そのファイルを上書きしてしまう問題が直った。Write は、全体を読むか、その場で編集するよう Claude に求める。Bash で git リポジトリの深い階層へ `cd` したあと、ディレクトリ単位の skills や `paths:` を持つ skills が見つからなくなる問題も直った。",
      "そのほか、無効な名前のコマンドが1つあると全コマンドの読み込みが止まり、`claude -p` の出力が空になりうる問題、ターミナルで再開したセッションの最初の返信が次の再開で欠ける問題、PDF の読み取りが古いセッションファイルの掃除と重なって失敗する問題、Vim モードで行数を超える `gj` / `gk` の個数指定が `d`・`c`・`y` で文字を削除・コピーしてしまう問題が修正された。VS Code では、組織の設定を取得できなかった場合に終了コードだけが出る代わりに理由と再試行の案内が出る。",
      "クラウドセッション向けには、ルーティンの作成・編集画面のモデル選択に effort の項目が加わった。環境設定のセットアップスクリプト欄には、色・行番号・コピーボタン付きの Bash エディタが入った。Claude Tag では、Slack の再試行通知が使用中のモデル名またはレート制限を示すようになり、ネットワークアクセスが None の環境のチャンネルで返信しない問題と、別スレッドにファイルを投稿する問題が直った。Code Review は、GitHub の push イベントが遅れて届いたときに古いコミットを見る問題が直り、プルリクエストの現在のコミットを対象にする。",
      "全項目は公式の変更履歴にある。この記事は変更履歴の文言に基づく整理であり、各項目の挙動の再現は行っていない。"
    ],
    "primarySources": [
      {
        "title": "Claude Code CHANGELOG.md（2.1.312）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリ）",
        "url": "https://www.npmjs.com/package/@anthropic-ai/claude-code"
      }
    ]
  },
  "cloudflare-security-audit-skill-six-phase-verified-findings-2026": {
    "body": [
      "Cloudflare の GitHub 組織に、cloudflare/security-audit-skill というリポジトリがある。README は、コーディングエージェントを「セキュリティ監査役」に変えるスキルだと説明している。ライセンスは MIT。本記事は、README と、リポジトリの skills/security-audit/SKILL.md を読んだ範囲での整理である。公開日はページから確認できず、リリースも切られていない（取得時点で Releases は空、main のコミットは14件）。GitHub の週間トレンドにこの週の上位として並んでいたため取り上げる。星の数は取得時点でそれぞれ約5.2万、今週の増加分は約1.6万と表示されていたが、日々変わる値である。",
      "README によれば、このスキルは Cloudflare の脆弱性発見ハーネスの出発点にあたる。ハーネスは Cloudflare のブログ記事「Build your own vulnerability harness」で解説されていて、README は「ハーネスは複数段階の、組織全体を対象とする仕組みに育った。このスキルは、そこから派生した単一リポジトリ向けの出発点」と書く。ブログ記事は、本記事の作成環境からは到達できず、読めていない。ハーネス全体の実績や数字には触れない。",
      "工程は6段階である。(1) 偵察: アーキテクチャ、信頼境界、入力の入り口を architecture.md と coverage-ledger.json にまとめる。(2) 網羅を軸にした探索: 台帳の単位ごとに隔離された探索役を割り当て、網羅の漏れを探す批評役を置く。(3) 候補の検証: 重複を除いた候補ごとに、新しいエージェントが反証を試みる。(4) 構造化出力: 結果を findings.json に書き、report-schema.json で検査する。(5) 記録の独立検証: 最終的な根拠を、別の新しいエージェントが確かめる。(6) 報告: REPORT.md、FINDINGS-DETAIL.md、NEEDS-VALIDATION.md を、検証済みの記録から作る。台帳と findings.json の検査には、依存パッケージの無い Node.js のスクリプト（validate-coverage-ledger.cjs と validate-findings.cjs）が使われる。",
      "判定は3種類に分かれる。confirmed は、ソースをたどった完全な経路と、範囲を限った観測結果があるもの。needs_validation は、まだ確かめられていない事実が具体的に1つ残っているもので、深刻度は付けない。rejected は、反証された候補である。README の設計原則には「確認するのは、成立した境界の破れだけ」「見つけたエージェントが、それを検証することはない」「深刻度には影響が要る」「多層防御の欠落は脆弱性ではなく、補強の注記にとどめる」が並ぶ。たとえば層Aが攻撃を防いでいるなら、層Bが無いことは脆弱性として扱わない、という書き方である。",
      "実行の安全に関する条件も、SKILL.md の先頭近くに書かれている。対象の側が制御するビルド、テスト、プロセス、ブラウザ、ファイルの処理は、OS が強制するサンドボックスの中でだけ行う。条件は、外部ネットワークが無いこと（必要なときはループバックのみ）、環境変数を許可リストで空から組み立てること、対象とツールチェーンは読み取り専用で書き込みは割り当てられた scratch ディレクトリだけであること、CPU・メモリ・時間などに上限があること、の4つである。これらを満たせないときは対象のコードを実行せず、その手がかりは needs_validation のまま、足りないサンドボックスの機能を妨げとして報告する。依存パッケージの導入やビルド中の取得も禁じている。本番や共有のサービスへの探査、有料 API の消費も禁止されている。",
      "使い方は、監査したいコードベースでエージェントを起動し、「security audit this codebase」のように頼む形である。スキルには2つのモードがある。セキュリティの質問や限定したレビューは「ガイダンスモード」で、6段階の全体も出力ディレクトリの作成も自動では行わない。コードベースの監査やペンテストを明示して頼んだとき、または網羅的なレビューやレポートの成果物を求めたときに、「フル監査モード」で6段階をすべて実行する。出力先を指定しなければ、既定は ~/security-audit-skill/<リポジトリ名>/run-<N> で、リポジトリの中に書くのは、利用者がバージョン管理の対象外のディレクトリを明示した場合に限る。複数回の実行は累積し、前回の台帳と結果を使って、足りない部分を狙う。",
      "導入は、README のとおりなら Skills CLI の npx コマンドである（npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit。--global でユーザー全体）。ここで注意がある。npx は外部のパッケージをその場で取得して実行する。本サイトの作成環境では、このコマンドを実行していない。スキルは、エージェントが従う指示書であり、エージェントは利用者の権限でファイルを読み、コマンドを走らせうる。導入の前に、リポジトリの SKILL.md と、使われるスクリプトの中身を自分で読むのが順序として正しい。SKILL.md は約22KB あり、サンドボックスの条件や書き込みの範囲を具体的に書いているが、本記事の作成では SKILL.md、README、VALIDATION-AND-REPORTING.md の取得までで、ハンティング用の各ガイド（メモリ安全性、AI/LLM、サプライチェーンなど10本）の全文は読めていない。Skills CLI 自体（skills.sh）の中身も確認していない。",
      "README が示す効果の数字は1つで、「私たちの試行では、1回の実行で見つかったのは、繰り返し実行で見つかった脆弱性全体の約半分だった」。これは Cloudflare 自身の報告であり、独立した検証は確認できていない。また、README は必要なものとして「ツール利用と並列のサブエージェントに対応するモデルを持つコーディングエージェント」を挙げるだけで、特定のエージェント製品の名前も、実行にかかる時間や費用の目安も書いていない。フル監査は多数のエージェントを走らせる設計なので、費用は利用するエージェントの契約や API の課金に従う。SKILL.md の run-metadata.json には budget の項目があり、未設定なら null になる。",
      "事実を並べる。このスキルは、最終的に人が読む判定を3種類に分け、証拠の無い疑いを confirmed にしない設計である。一方で、出力は言語モデルの推論に基づき、README は「脆弱性が無いこと」の保証を謳ってはいない。対象コードの実行にはサンドボックスが要り、用意できない環境では、裏づけの取れない手がかりが needs_validation に多く残ることになる。自分のコードに使うかどうかは、これらの条件と、導入前に読める範囲の中身を見て判断することになる。"
    ],
    "primarySources": [
      {
        "title": "cloudflare/security-audit-skill（README）",
        "url": "https://github.com/cloudflare/security-audit-skill"
      },
      {
        "title": "security-audit の SKILL.md",
        "url": "https://github.com/cloudflare/security-audit-skill/blob/main/skills/security-audit/SKILL.md"
      },
      {
        "title": "VALIDATION-AND-REPORTING.md（工程3〜6）",
        "url": "https://github.com/cloudflare/security-audit-skill/blob/main/skills/security-audit/VALIDATION-AND-REPORTING.md"
      }
    ]
  },
  "anthropic-usage-cost-analytics-api-beta-request-limit-128mb-2026": {
    "body": [
      "Anthropic の Claude Platform リリースノート（platform.claude.com）には、2026年10月28日と29日付で2件の更新がある。ひとつは使用量と費用の取得 API の入れ替え、もうひとつはリクエストサイズ上限の引き上げである。以下は公式ドキュメントの記載に基づく整理で、実際の挙動は検証していない。",
      "10月29日付の更新では、Usage and Cost Analytics API がベータで始まった。エンドポイントは2つあり、`GET /v1/organizations/analytics/usage` がトークン数とリクエスト数を、`GET /v1/organizations/analytics/cost` が米ドルの費用を返す。対象は Claude Console と Claude Enterprise の組織で、リクエストには `anthropic-beta: analytics-usage-cost-2026-08-24` と `anthropic-version` のヘッダーが必要になる。公式は、SDK と `ant` CLI は両方のヘッダーを自動で付け、続きのページも取得するため、`limit` はページの大きさだけを決めると説明している。",
      "認証について、ドキュメントは Claude Console の組織では Admin API キー、または `org:admin` スコープの OAuth トークンなどの Admin API の資格情報を使うとしている。個人アカウントでは Admin API は使えない。Admin API キーで呼ぶ場合は、集計を担うサービス専用のキーを作り、シークレットマネージャーに置いて定期的に更新すること、可能なら Workload Identity Federation で短命のトークンを使うことが勧められている。AWS 上の Claude Platform と Google Cloud 上の Claude Models（Anthropic managed）でも両エンドポイントが使える。それぞれ、AWS では `ListAccountUsage` / `ListAccountCost`、Google Cloud では `usageAnalytics.list` / `costAnalytics.list` の権限で認可される。",
      "集計の切り方は、`group_by[]` で指定する。モデル、ワークスペース、API キー、サービスティア、リクエストの背後にあるユーザーまたはサービスアカウント（`actor`）などで分けられ、1回の問い合わせで指定できる次元は最大5つである。`time_bucket_width` に `1m`・`1h`・`1d` を指定すると UTC の時間帯ごとに分割され、指定しなければ範囲全体の合計が1行で返る。絞り込みは `models[]` のように次元ごとの配列で行い、同じ絞り込みの複数値は OR、異なる絞り込みどうしは AND で結ばれる。費用のエンドポイントには、`cost_type` と `token_type` という追加の次元があり、これらは5つの上限にも `limit` にも数えられない。",
      "同じ10月29日付で、従来の Usage and Cost API と、Claude Enterprise Analytics API の `usage_report`・`cost_report`・`user_usage_report`・`user_cost_report` エンドポイントが legacy になった。リリースノートは、いずれも引き続きサポートされると書いている。既存の連携を移す手順は、Analytics API のドキュメントに「Usage and Cost API から」と「Claude Enterprise の使用量・費用レポートから」の2つの節として用意されている。legacy になっただけで廃止日は示されていないため、いつまで使えるかは公式の記載からは分からない。",
      "10月28日付の更新は、第一者の Claude API での Messages API と Token Counting API の最大リクエストサイズが、32 MB から 128 MB に上がったというものである。リリースノートは、この引き上げが第一者の Claude API に限られると明記している。Amazon Bedrock や Google Cloud など他の経路の上限については、この記載からは分からない。ほかの上限（コンテキスト長など）に変更があるかは、この記載からは分からない。"
    ],
    "primarySources": [
      {
        "title": "Claude Platform リリースノート",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      },
      {
        "title": "Usage and Cost Analytics API（公式ドキュメント）",
        "url": "https://platform.claude.com/docs/en/manage-claude/usage-cost-analytics-api"
      }
    ]
  },
  "gemini-cli-0-66-terminal-sync-output-mcp-oauth-private-network-2026": {
    "body": [
      "google-gemini/gemini-cli の docs/changelogs/latest.md は、最新の安定版を v0.66.0（2026年10月27日公開）としている。npm レジストリでも `latest` タグが 0.66.0 を指し、公開時刻は同日 UTC 20:30 だった。直前に扱った 0.65.0 の次の安定版にあたる。以下は公式の変更履歴の記載に基づく整理で、実際の挙動は検証していない。",
      "端末表示では、同期出力（synchronized output）への対応とスピナー描画の分離が入った。スクロールできるツール出力の枠でのちらつきと罫線のはみ出しが減り、表示を更新してもスクロールバックが保たれる。",
      "実行まわりでは、コアのスケジューラーがツール呼び出しのグループを直接発行するようになり、UI 側の先読みが無くなった。ブートストラップのラッパーに届いた終了シグナルは、子プロセスへ転送される。",
      "Git とシェルの環境では、ユーザーレベルの `~/.gitconfig` の設定が保たれ、対話的な SSH と認証情報のプロンプトは抑止されてハングを防ぐ。Windows での diff 引数の引用符の扱いも改善された。",
      "セキュリティと設定では、MCP の OAuth フローでプライベートネットワークのエンドポイントを使えるオプトインの設定が加わった。認証エラーの検出での誤検知が減り、設定内のプレースホルダーは `.env` の読み込み後に解決される。カスタムキーバインドでは `keys` 配列を指定できる。変更履歴にはほかに Gemini 4 への対応を知らせるバナーなども載っており、全項目と各プルリクエストは公式の変更履歴にある。"
    ],
    "primarySources": [
      {
        "title": "Gemini CLI 変更履歴（latest, v0.66.0）",
        "url": "https://github.com/google-gemini/gemini-cli/blob/main/docs/changelogs/latest.md"
      },
      {
        "title": "@google/gemini-cli（npm レジストリ）",
        "url": "https://www.npmjs.com/package/@google/gemini-cli"
      }
    ]
  },
  "codex-cli-0-166-transcript-selection-queue-resume-doctor-network-2026": {
    "body": [
      "OpenAI の Codex リポジトリのリリースページによると、Codex CLI 0.166.0 は10月29日に公開された（ページには年の表記が無く、一覧の並びから2026年と読んだ）。前回扱った 0.165.0 は別記事にある。この記事はリリースノートの記載を整理したもので、実際の挙動は検証していない。リリースノートに破壊的変更の明記は見当たらない。",
      "新機能は6点ある。第一に、トランスクリプトをキーボードで選択できる。単語・行・ページ単位の移動と検索が組み込まれ、ショートカットは設定で変えられる。第二に、非同期の質問・選択肢・回答・トランスクリプト上の返信で、Markdown の描画が揃えられた。",
      "第三に、モデルカタログの扱いである。GPT-6.1 Terra が、同梱カタログに加えて Vertex AI と Amazon Bedrock のカタログにも入った。0.165.0 では Terra がカタログに加わったと記録されており、今回はその対象が広がった形にあたる。リリースノートが述べているのはカタログへの追加までで、提供条件や価格は今回の確認範囲に無い。",
      "第四に、`codex queue --resume` は、メッセージをキューに入れたあと、読み込まれていないスレッドを再開する。第五に、安全のためのブロックについて、理由の説明が分かりやすくなり、TUI では選べる「より安全な続きのプロンプト」が表示される。第六に、`codex doctor --network-only` が追加され、設定・接続・WebSocket の診断だけを取り出して実行できる。",
      "バグ修正は7点ある。再開・フォークしたスレッドで、承認と権限の確認済み設定が保たれるようになった。消されたコンポーザーの文字列を戻すとき、ローカルの画像添付が残る。アーカイブを解除した親スレッドの下で、生成済みの子孫スレッドが復元される。",
      "このほか、app-server のスレッド開始・終了での競合状態が直り、完了した実行環境が速やかに解放される。TUI の再接続からの回復が改善され、オフラインでの `/quit` と `/exit` の扱いも直った。再開・フォークをまたいで推論トークンの計上が保たれ、早すぎる圧縮を避ける。macOS のスタンドアロン版の後片付けは、使用中の場合や、パスに非 ASCII 文字を含む場合でも動く。",
      "ビルド面では、Bazel がソースからビルドする V8 に切り替わり、Windows の MSVC アーカイブにも対応した。スタンドアロンの executor が CLI と app-server のリリースパッケージに同梱される。開発・リリースのビルドは Node.js 24.22.1 と Rust 1.95.0 に揃えられた。",
      "リリースノートは、このほか多数のプルリクエストを列挙している。主な題材は、Guardian レビュアーの整理、トレースとテレメトリ（OpenTelemetry の要件を含む）、モデルカタログとプロバイダー設定、MCP 接続とプラグイン管理、unified exec と code mode、TUI の細部、テストの安定化である。個別の中身は今回の確認範囲外で、気になる項目は原文で確かめたい。"
    ],
    "primarySources": [
      {
        "title": "Codex CLI 0.166.0 リリースノート（openai/codex）",
        "url": "https://github.com/openai/codex/releases/tag/rust-v0.166.0"
      },
      {
        "title": "Codex リリース一覧（openai/codex）",
        "url": "https://github.com/openai/codex/releases"
      }
    ]
  },
  "claude-code-2-1-314-block-writes-outside-dirs-pcompact-cap-monitor-hooks-2026": {
    "body": [
      "Claude Code の公式 CHANGELOG によると、2.1.314 は npm レジストリ上で2026年10月30日 00:12（UTC）に公開された。前回扱った 2.1.312 の記事の次の版にあたる。今回確認できた CHANGELOG の本文には 2.1.313 の項目が見つからなかったため、この記事は 2.1.314 の記載だけを整理する。実際の挙動は検証していない。CHANGELOG は非常に長く、確認できたのは先頭部分だけである。",
      "セキュリティと権限では、新しい設定 `permissions.blockWritesOutsideWorkingDirectories` が加わった。Write・Edit・NotebookEdit が作業ディレクトリの外のパスに触れるのを、すべての権限モードで止める。そのほか、Claude apps gateway の上流を特定の ID プロバイダーのグループに属する開発者に限れる（フェイルオーバー中も含む）。Bedrock の上流では、どのガードレールのフィルターが働いたかを、一致した文字列を記録せずにログに残せる。",
      "管理設定まわりでは、TLS の信頼設定が Desktop セッションにも適用されるようになり、`forceRemoteSettingsRefresh` は保存された写しの有効期限が切れたあとも機能する。",
      "モデルとコンテキストでは、管理者がモデルの effort に上限を設けていてもセッションが失敗しなくなった。Claude Code が水準を下げて再試行し、使った水準を報告する。長く放置された会話の idle compaction が、VS Code と Desktop の Code タブでも動く。画像が多い Bedrock セッションは、失敗せずに古い画像を落として圧縮する。",
      "Microsoft Foundry では、既定のモデルにデプロイが無いとき、同じファミリーの古いモデルにフォールバックする。ゲートウェイ越しの `claude-opus-4.8` のようにドットで書いたモデル ID も正しく解釈される。ゲートウェイ固有の理由で拒否された要求（ツール検索ブロックや beta ヘッダーの拒否など）は、その機能を外して再試行される。",
      "認証と MCP では、クロス署名された更新済みルート証明書での TLS エラーが直った。サインイン無しでも使える MCP サーバーは、保存されたサインインが効かなくなったあと、サインアウトの状態で使われる。`claude mcp logout` は、サインインが実際には消えていないのに成功と報告することがなくなった。",
      "CLI とフックでは、`claude -p` が起動時のエラーを出力し、黙って終了コード 0 で終わらず終了コード 1 になる。`CI` が設定されているとき、`claude ultrareview` と `claude remote-control` は、確認を求めずに信頼されていないフォルダを拒否する。PreCompact フックの出力は1フックあたり10,000文字に制限される。Bash に一致するフックは、Monitor ツールが始めたコマンドにも適用される。ただし、そのコマンドの承認や書き換えはできない。",
      "インターフェースとツールでは、ストリーミング中の markdown 表の描画、`/resume` のタイトル表示、サブエージェントのトランスクリプトからの `/btw`、vim モードの移動、権限プロンプトのレイアウトに修正が入った。バックグラウンドの git 更新が、リポジトリの index ロックを保持し続けない。",
      "他の提供面にも修正がある。VS Code では Ctrl+D の音声入力ショートカット、プランのプレビュー内の検索、MCP の「認証をクリア」の結果が直った。クラウドセッションでは環境とスケジュールタスクの修正があり、セットアップスクリプトが失敗してもセッションが始まる。Remote Control ではセッションの登録とモデルの切り替えが安定した。Claude Tag では Slack のコマンド・スレッド・チャンネル設定の修正が入った。",
      "なお `blockWritesOutsideWorkingDirectories` の説明は CHANGELOG の1行で、既存のサンドボックスや権限ルールとの優先関係までは今回の確認範囲に無い。導入前に公式ドキュメントで挙動を確かめたい。"
    ],
    "primarySources": [
      {
        "title": "Claude Code CHANGELOG（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリ）",
        "url": "https://www.npmjs.com/package/@anthropic-ai/claude-code"
      }
    ]
  },
  "anthropic-s1-nasdaq-ant-filing-2026": {
    "body": [
      "Anthropic は2026年10月26日、同社のニュースページで、Anthropic, PBC が新規株式公開（IPO）に関する登録届出書（Form S-1）を米国証券取引委員会（SEC）に提出したと発表した。本記事は、その発表文（anthropic.com/news/s1-sec）を2026年10月30日に読んだ範囲での整理である。S-1 の本文そのものは、本記事の作成環境から SEC のサイトに到達できず、読めていない。",
      "発表文が述べている事実は次のとおり。同社は Class A 普通株の上場を、Nasdaq Global Select Market で、銘柄コード「ANT」として行う意向である。募集する株数と価格帯は「まだ決まっていない」。募集は目論見書によってのみ行われ、届出書はまだ効力を生じていないため、効力発生前に株式を売ったり買付けを受け付けたりすることはできない、とも書かれている。",
      "予備目論見書の入手先として、発表文は Goldman Sachs & Co. LLC と Morgan Stanley & Co. LLC の2社を挙げている。引受を担う証券会社の役割や、各社の位置づけ（主幹事かどうか等）は発表文に書かれていない。",
      "発表文に書かれていないことも多い。評価額、調達額、上場の時期、募集株式に占める既存株主の売出しの有無は、いずれも触れられていない。S-1 の本文に事業の数字（売上、損失、顧客構成など）が含まれている可能性があるが、本記事では確認していないため扱わない。",
      "当サイトは過去に、この件に関して複数の記事を出している。2026年3月には「早ければ10月の IPO を検討」との報道、6月には機密提出（confidential filing）に関する記事、9月14日には「11月にも Nasdaq 上場、評価額2兆ドル規模」との報道に基づく分析記事である。報道ベースの評価額や時期は、今回の発表文には現れていない。今回確認できたのは、S-1 を提出したこと、上場先と銘柄コード、株数と価格が未定であること、の3点である。",
      "なお、今回の発表がこれまでの機密提出と同じ届出書の続きなのか、公開された提出なのかは、発表文の記載だけでは判断できない。この点は S-1 の公開版を SEC の EDGAR で確認できた時点で追記する。",
      "【編集履歴】2026-10-30 新規公開。一次資料は Anthropic の発表文1本のみで、SEC の提出書類には到達できていない。",
      "【追記 2026-11-12】Anthropic は11月10日、IPO のロードショーを開始したと発表し、本記事の時点で未定だった募集株数（Class A 普通株 825,000,000 株）と想定価格帯（1株 70.00〜78.00 ドル）を示した。内訳と、発表文に書かれていない点は[続報の記事](?a=anthropic-ipo-roadshow-launch-price-range-2026)にまとめた。SEC の提出書類には、引き続き到達できていない。"
    ],
    "primarySources": [
      {
        "title": "Anthropic files S-1 with the SEC for proposed initial public offering（Anthropic、2026-10-26）",
        "url": "https://www.anthropic.com/news/s1-sec"
      },
      {
        "title": "Anthropic launches roadshow for proposed initial public offering（Anthropic、2026-11-10）",
        "url": "https://www.anthropic.com/news/roadshow-launch"
      }
    ]
  },
  "agent-skills-donated-to-aaif-linux-foundation-2026": {
    "body": [
      "Anthropic は2026年10月22日、ニュースページで、エージェントに専門知識とワークフローを与えるオープン標準 Agent Skills を、Agentic AI Foundation（AAIF）に寄贈すると発表した。本記事は、その発表文（anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation）を2026年10月30日に読んだ範囲での整理である。仕様サイト（agentskills.io）と AAIF のサイトには、本記事の作成環境から到達できず、読めていない。",
      "発表文によれば、スキルとは SKILL.md というファイルを含むフォルダで、特定の作業や領域をエージェントに教える。必要ならスクリプトや参考資料も同梱できる。Anthropic は Claude Code の開発中にこれを作った。汎用の知識作業には強かったが、実際の業務に要る手続きの知識が足りなかったため、と説明している。2025年10月の公開から数週間で、開発者が数千のスキルを GitHub に公開し、Codex・Cursor・OpenCode 向けの読み込み処理も書いた。その後、独自の GitHub 組織とドメインのもとでオープン標準として公開した、とある。",
      "発表文が挙げる数字は次のとおり。ChatGPT、Cursor、GitHub Copilot、VS Code を含む70以上のエージェントのプラットフォームが、2025年12月の標準公開以降に Agent Skills を取り込んだ。これまでに100万件のスキルが公開され、インストールはおよそ2.8億回に達した。いずれも Anthropic の発表文による数字で、公開件数やインストール数の集計方法は書かれておらず、独立した検証は確認できていない。",
      "寄贈の中身は、Agent Skills の名称とロゴ、GitHub 組織、agentskills.io のドメインである。寄贈先の AAIF は Linux Foundation の傘下にあり、発表文によれば Anthropic が Block と OpenAI とともに昨年共同で設立し、Anthropic は Model Context Protocol（MCP）もここに寄贈している。標準を使う、または貢献するために AAIF へ加入する必要はない、とも書かれている。",
      "保守体制について、発表文は次のように書く。Anthropic、Google、OpenAI などの技術者が個人としてこの標準を保守し、リードメンテナーは David Soria Parra 氏と Mahesh Murag 氏である。最初の提案として、バージョン付きのリリース、正式な提案手続き、スキルを書く人とインストールする人向けのセキュリティ指針を含むロードマップが挙げられている。仕様変更への意見は、プロジェクトの Discord で受け付けるという。",
      "読者の実務への含意は限られる。発表文は標準の中身（SKILL.md の形式など）が変わるとは書いておらず、現時点で確認できるのは、管理主体が1社から財団に移ることと、ロードマップの方向である。セキュリティ指針が提案に入っている点は、スキルが外部から取り込める実行可能なコードや手順を含みうることと関係するが、具体的な内容は発表文に無い。",
      "【編集履歴】2026-10-30 新規公開。一次資料は Anthropic の発表文1本のみ。AAIF 側の発表と仕様サイトには到達できていない。"
    ],
    "primarySources": [
      {
        "title": "Donating Agent Skills to the Agentic AI Foundation（Anthropic、2026-10-22）",
        "url": "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation"
      }
    ]
  },
  "anthropic-usage-policy-2026-update-deceptive-campaigns-hardware-2026": {
    "body": [
      "Anthropic は2026年10月8日、毎年行っている利用方針（Usage Policy）の更新を公表した。本記事は、その発表文（anthropic.com/news/2026-usage-policy-update）を2026年10月30日に読んだ範囲での整理である。方針の全文（Usage Policy と Supported Regions Policy）は読めておらず、以下は発表文が要約している変更点に限る。新しい版は11月12日に施行される。",
      "発表文は改定の性格について、変更の大半は既存の規則を明確にするためのもので、この1年で Claude がより長く独立した作業をするようになったことを受け、新しい例を加えたと説明している。誤用の新しい傾向として、影響工作、武器開発、監視の3つを挙げ、9月の脅威インテリジェンス報告に記録した内容に基づくとしている。",
      "1つ目は、欺瞞的な活動の新セクションである。発表文によれば、国営メディア、政府の宣伝部門、営利企業が Claude を使って偽アカウントのネットワークや捏造ニュースサイトを運営していた例が確認された。従来の方針でも禁止していたが、規定が選挙、詐欺、プライバシー、偽情報の各節に分散していたため、「Do Not Engage in Deceptive Campaigns or Artificial Activity」として1つにまとめた。政治的か商業的かを問わず、発信元を隠すことや偽アカウントで内容を増幅すること、影響工作のためのツールや基盤の構築を対象とする。",
      "選挙の節は「Do Not Undermine Democratic Processes」に改名され、有権者を欺くことや選挙を妨害することの禁止に絞られた。同時に、個別化された投票・選挙運動のターゲティングの一律禁止は外された。理由として発表文は、この禁止が、非営利団体が他言語の有権者向け情報を作る、選挙管理担当者が投票用紙の修正通知を送る、といった正当な市民活動も含んでいたことを挙げる。当初の規則が想定していた行為（欺瞞に頼る有権者のターゲティングや個人データの悪用）は、欺瞞的キャンペーン、監視、プライバシーの各節で引き続き禁止されると書かれている。",
      "2つ目は武器の節である。発表文は、武器の誘導・制御ソフトを作る目的で Claude を使おうとする試みが最近見られたとして、禁止の対象に武器を動作させるソフトウェアと部品、ドローンなど自律的な車両に武装させる行為が含まれると明記したと述べる。これは従来の運用を反映した変更で、実際の執行方針の変更ではないとしている。",
      "3つ目は監視と法執行である。9月の報告が、政治的な反対者を特定して追跡する監視システムを AI で作る動きの広がりを記録したことを受け、節を書き直した。同意のない人物の追跡は、リアルタイムでも過去に集めたデータの分析でも禁止され、法執行や刑事司法の手続きで誰を捜査・逮捕・起訴するかを Claude に決めさせたり推薦させたりすることも禁止される。監視を目的としたツールの構築や改良も禁止である。許可される用途として、本人が同意した追跡（不正検知など）、コンテンツのモデレーション、報道、法律調査が明記された。",
      "4つ目は高リスク用途の要件である。健康、法的権利、資産、生計、不可欠なサービスへのアクセスに影響する使い方では、Claude の推奨を確認し必要なら変更できる権限を持つ担当者を置くことと、影響を受ける本人に AI が使われたことを伝えることを求めている。これらの要件自体は変わらないが、どの用途が対象でどれが対象外かを具体的に書き直した。さらに、Model Hardware Standard の公表を受けて、傷害を起こしうる機器に Claude をつないで自律的に物理動作をさせる場合の要件が加わった。資格のある運用者が機器を観察して必要なときに止められること、Claude との接続が切れたときに機器が安全な状態を保てることである。",
      "5つ目は、モデルに対する虐待行為の禁止である。持続的で不必要な、虐待的または残酷な振る舞いを禁止するもので、発表文は、利用者が目的もなく繰り返し残酷に接する極端な場合にのみ適用し、通常の苛立ち、反論、暗いテーマの創作、モデルのテストや研究には適用しないと書く。すでに Claude.ai と Claude Code で、持続的に虐待的な利用者との会話を Claude が終了できるようにしており、その機能が主な執行手段であり続けるという。",
      "最後に Supported Regions Policy の説明の明確化がある。発表文によれば、昨年、非対応地域に本社を置く主体が過半を所有する企業へのアクセスを制限した。今回は、その執行の仕方を対応地域のページで説明し直した。禁止の対象は、非対応地域に物理的にいる人、そこで設立または本社を置く主体、そこの個人や主体に過半を所有または支配される主体である。",
      "この記事で確認できていないことを記す。方針の全文と旧版の差分は読めておらず、改定の要約が実際の条文とどう対応するかは確認していない。「実際の運用は変わらない」という説明は Anthropic 自身のもので、独立した検証は確認できていない。他社（OpenAI、Google など）の利用方針との比較も、本記事では行っていない。",
      "【編集履歴】2026-10-30 新規公開。一次資料は Anthropic の発表文1本のみで、方針の全文には到達できていない。"
    ],
    "primarySources": [
      {
        "title": "2026 Usage Policy update（Anthropic、2026-10-08）",
        "url": "https://www.anthropic.com/news/2026-usage-policy-update"
      }
    ]
  },
  "claude-code-2-1-316-opus-4-8-fast-mode-deprecated-subagent-effort-2026": {
    "body": [
      "Claude Code の公式 CHANGELOG によると、2.1.316 は npm レジストリ上で2026年10月31日 00:42（UTC）に公開された。前回扱った 2.1.314 の次の版にあたる。npm には 2.1.315 が10月30日 21:05（UTC）に載っているが、確認できた CHANGELOG の先頭は 2.1.316 で、2.1.315 の項目は見つからなかった。この記事は 2.1.316 の記載だけを整理する。実際の挙動は検証していない。",
      "最初に確認したいのは fast mode の扱いである。CHANGELOG は「Opus 4.8 の fast mode を2026年10月30日付で非推奨とし、2026年11月30日に削除する」と記す。削除後、Opus 4.8 での fast mode の要求はエラーを返し、通常の Opus 4.8 にはフォールバックしない。CHANGELOG は、速さを維持するには Opus 5.5 へ移るよう書いている。同じ日に確認した公式の fast mode ドキュメントには、この非推奨の記述はまだ無く、Opus 5 と Opus 4.8 は research preview、Opus 5.5 は提供中とされていた。また同ドキュメントによると fast mode の1MTokあたりの価格は Opus 5.5 が入力8ドル・出力40ドル、Opus 5 と Opus 4.8 が入力10ドル・出力50ドルである。Opus 4.8 を明示的に指定して fast mode を使っているスクリプトや設定がある場合は、`/fast` の対象モデルを見直す材料になる。",
      "モデルと effort まわりでは、`CLAUDE_CODE_SUBAGENT_EFFORT` が加わった。ほかに effort を指定する手段が無いとき、サブエージェントが走る effort を、セッションの値の継承ではなくこの変数で決められる。`CLAUDE_CODE_DISABLE_ULTRATHINK` は `ultrathink` キーワードを無効にする。2.1.311 で `ultrathink` が xhigh の effort で動くようになったことに続き、VS Code でも `ultrathink` のターンが xhigh で動き、チャット欄で虹色に表示される。",
      "Claude apps gateway には、管理者向けの項目が増えた。支出上限の管理 API に `pooled_budget` を指定すると、グループの全員が共有する月次予算を、各人の上限に加えて設けられる。`managed.policy_mode: layered` では、最初に一致したポリシーだけでなく、一致したすべてのポリシーが下位のものに重ねて適用される。Bedrock の上流では `guardrail.input_tagging` が加わり、Amazon Bedrock のガードレールの prompt attacks フィルターが必要とする入力タグでプロンプトを包む。`all_messages_and_system` を選ぶとシステムプロンプトにも付く。また、リクエストが名指しするすべてのモデルを `availableModels`・`deniedModels`・`models` と照合するようになり、禁止されたモデルには、該当する項目名を挙げた 400 が返る。",
      "セキュリティと権限では、`--restricted` のセッションが、Read の許可ルールが覆っていれば作業ディレクトリの外のファイルをアップロードしてしまう問題が直った。Team と Enterprise のログインでは、Anthropic の API から取得したサーバー管理設定が承認のプロンプトなしで適用される。保存された写しが検証に通らない場合は拒否される。管理された `autoMode.allow` の一覧が `\"$defaults\"` を含まないとき、ホストアプリの `--settings`、`/permissions` での最初のルール追加、`/auto-mode-setup` によって組み込みの例外が戻る問題も修正された。ただし、スケジュールタスクのプロンプトに対する組み込みルールは、`\"$defaults\"` の無い一覧でも消えなくなった。",
      "証明書とネットワークでは、`CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP` が加わった。互いに認証し合って輪になっているシステムのクロス証明書を残す設定で、社内の CA がそれを必要とするサーバー向けである。SSL 証明書のエラーは、中間証明書が抜けているサーバーなど考えられる原因と、それぞれの対処を示すようになった。圧縮された応答が途中で切れたり壊れたりしたとき、ネットワーク要求がハングする問題も直った。",
      "Bash ツールとフックでは、Claude Code が自分で終了したときに macOS と Linux でシェルのコマンドが動いたまま残る問題、値に改行を含むエイリアスや先頭がダッシュの関数名が壊れる問題、`SHELLOPTS` をエクスポートしているときスクリプトが最初のコマンドで止まる問題が修正された。PowerShell のフックは、コマンドが型キャスト・`param`・`using`・属性で始まる場合でも、終了コード 2 でブロックできる。",
      "Bedrock と Vertex AI では、`sonnet`・`opus`・`haiku` の別名で最新のモデルがアカウントやリージョンでまだ使えないとき、途中でエラーを出さず古いモデルに切り替わる。そのほか、`/model <id>` が、この版で認識できないモデルのとき、自動圧縮が200Kのコンテキストを前提にすると警告する。Windows では Grep と Glob が、タイムアウトで検索プロセスを止めても終了しないときに戻らなくなる問題が直った。",
      "VS Code では Claude apps gateway へのサインインがチャットパネルからできる。クラウドセッションでは、MCP サーバーが求めたフォームを埋めるか辞退するカードが加わり、Enterprise のメンバーは自分のクラウド環境のネットワーク用シークレットを追加・削除できる。Claude Tag では Slack のチャンネル設定が「Respond automatically」のスイッチから「How Claude participates」の選択に変わった。Code Review の分析ページには、重大度ごとの指摘数のカードが加わった。",
      "なお CHANGELOG は非常に長く、確認できたのは 2.1.316 の項目と 2.1.314 の先頭部分である。fast mode の削除日は CHANGELOG の1行が根拠で、公式ドキュメントでの確認には至っていない。"
    ],
    "primarySources": [
      {
        "title": "Claude Code CHANGELOG（anthropics/claude-code）",
        "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md"
      },
      {
        "title": "Speed up responses with fast mode（Claude Code ドキュメント）",
        "url": "https://code.claude.com/docs/en/fast-mode"
      },
      {
        "title": "@anthropic-ai/claude-code（npm レジストリ）",
        "url": "https://www.npmjs.com/package/@anthropic-ai/claude-code"
      }
    ]
  },
  "anthropic-opus-4-8-fast-mode-deprecated-api-2026": {
    "body": [
      "Claude Platform のリリースノートによると、Anthropic は2026年10月30日、Claude Opus 4.8 の fast mode を非推奨にした。削除日は2026年11月30日で、削除後に `claude-opus-4-8` へ `speed: \"fast\"` を付けて送ると、リクエストはエラーになる。fast mode を使い続けるには Claude Opus 5.5 へ移るよう案内されている。標準速度の Opus 4.8 そのものの扱いは、今回のリリースノートの項には書かれていない。この記事は公式ドキュメントの記載だけに基づく。",
      "fast mode は、同じモデルを速い推論構成で動かす機能で、公式は出力トークンの毎秒数が最大2.5倍になると説明している。ドキュメントの現行の記述では、fast mode は Claude Opus 5.5 で利用でき、Opus 5 と Opus 4.8 ではリサーチプレビューとされている。今回の非推奨は、そのうち Opus 4.8 だけが対象である。Opus 5 について削除の告知は、確認した範囲のリリースノートにもドキュメントにも載っていない。",
      "単価は、ドキュメントの価格表では Opus 5.5 が入力 $8 / 出力 $40、Opus 5 と Opus 4.8 が入力 $10 / 出力 $50（いずれも100万トークンあたり）である。fast mode の単価は標準単価に倍率をかけた形で、プロンプトキャッシュやデータレジデンシーの倍率はその上に重なる。つまり Opus 4.8 から Opus 5.5 へ移ると、fast mode の単価表は下がる。ただし、モデルが変わるので、標準速度の単価・出力の質・プロンプトの挙動が同じとは限らない。これらは本記事では検証していない。",
      "移行する側が確認することは、公式の記述から次のように整理できる。1つ目はモデル ID の差し替えである。コードやエージェント設定に `claude-opus-4-8` と `speed: \"fast\"` の組み合わせが残っていると、11月30日以降にエラーで落ちる。2つ目は、Managed Agents では `speed` をエージェントのモデル指定（`{\"id\": ..., \"speed\": \"fast\"}`）に書く形なので、リクエスト側だけでなくエージェント定義も探す必要がある。3つ目は、速度が違うリクエストはプロンプトキャッシュの接頭辞を共有しないことである。モデルを変えると別途キャッシュが温まり直す。",
      "確認できていないこと。Opus 5.5 への移行ガイドの該当部分は、今回アクセスした範囲では fast mode に関する記述を取り出せなかった。非推奨の理由、Opus 5 の fast mode の今後、速度や品質の実測は公式に書かれておらず、独立した情報源も確認していない。Claude Code 側の関連する変更は、本サイトの Claude Code 2.1.316 の記事で扱っている。"
    ],
    "tables": [
      {
        "caption": "fast mode の対応状況と単価（公式ドキュメントをもとに整理、2026年10月31日時点）",
        "afterParagraph": 3,
        "headers": [
          "モデル",
          "fast mode の状態",
          "fast mode の単価（入力 / 出力、100万トークンあたり）"
        ],
        "rows": [
          [
            "Claude Opus 5.5",
            "利用可",
            "$8 / $40"
          ],
          [
            "Claude Opus 5",
            "リサーチプレビュー",
            "$10 / $50"
          ],
          [
            "Claude Opus 4.8",
            "非推奨、2026年11月30日に削除",
            "$10 / $50"
          ]
        ]
      }
    ],
    "primarySources": [
      {
        "title": "Claude Platform リリースノート（2026年10月30日の項）",
        "url": "https://platform.claude.com/docs/en/release-notes/overview"
      },
      {
        "title": "Fast mode（Claude Platform ドキュメント）",
        "url": "https://platform.claude.com/docs/en/build-with-claude/fast-mode"
      }
    ]
  },
  "gemini-cli-0-65-untrusted-folder-readonly-otlp-headers-release-notes-2026": {
    "body": [
      "google-gemini/gemini-cli の docs/changelogs/latest.md は、最新の安定版を v0.65.0（2026年10月20日公開）としている。npm レジストリでも `latest` タグが 0.65.0 を指し、公開時刻は同日 UTC 21:26 だった。同じレジストリの `preview` タグは 0.66.0-preview.0 である。直前に扱った 0.64.0 の次の安定版にあたる。以下は公式の変更履歴の記載に基づく整理で、実際の挙動は検証していない。",
      "安全まわりでは、信頼していないフォルダでワークスペースの設定を読み取り専用にする修正が入った。変更履歴の項目名は「enforce read-only workspace settings in untrusted folders」である。あわせて、信頼していないコマンドのフラグや複合ループを誤って検出する問題が減らされた。OAuth のコールバックでは、iss パラメーターの検証が RFC 9207 のメタデータに揃えられた。具体的にどの設定が対象か、どんな経路を塞ぐ修正かは、変更履歴の項目名からは読み取れない。",
      "運用面では、テレメトリの設定にカスタムの OTLP ヘッダーを指定できるようになった。変更履歴は、OpenTelemetry のコレクターに対する認証やヘッダーの調整のためと説明している。設定のキー名や書式は変更履歴に載っておらず、ここでは確認していない。",
      "認証と再開まわりの修正が目立つ。認証の検証と OAuth の再試行が無限に続く問題が直り、Google ログインを選び直したときにキャッシュ済みの資格情報を消すようになった。セッションでは、Ctrl+C を素早く連打した際にセッションが壊れる問題、すばやく終了したときに再開したセッションの履歴が消える問題、再開時にツール応答のターンが重複する問題が修正された。",
      "動作面の変更もある。無視パターンの絞り込みでサブツリーを枝刈りし、ディレクトリの走査を速くした。`@<ディレクトリ>` の参照では再帰的な読み込みを先走って行わなくなった。空ファイルの扱いでは、空白だけの UTF-16・UTF-32 ファイルを空として扱う。端末では、対話モードで Enter を押すと固まる問題、Ctrl+O で出力を展開すると端末がクリアされスクロールが戻る問題、端末幅を変えたときの再描画が直った。拡張機能は、1つが許可リストの検査に失敗しても残りを読み込む。全項目は公式の変更履歴にある。"
    ],
    "primarySources": [
      {
        "title": "Gemini CLI 変更履歴（latest, v0.65.0）",
        "url": "https://github.com/google-gemini/gemini-cli/blob/main/docs/changelogs/latest.md"
      },
      {
        "title": "@google/gemini-cli（npm レジストリ）",
        "url": "https://www.npmjs.com/package/@google/gemini-cli"
      }
    ]
  }
};

export default ARTICLES_BODY_2026_10;
