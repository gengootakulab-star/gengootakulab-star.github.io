# 言語オタクの多言語学習ラボ

**MY LANGUAGE PLAYGROUND** ― 気になる言葉を、とことん。

語学を学ぶのが好きな個人が運営する、言語学習のサイトです。学習中の発見を「NOTES」(ブログ)に記録し、AIを活用して作った学習ツールを公開しています。

🌐 **https://gengootakulab-star.github.io/**

---

## ツール

| ツール | 内容 | リンク |
| --- | --- | --- |
| ミャンマー語 単語分解 | ミャンマー語の単語を、子音・介子音・母音などに分解して解説します。発音記号(IPA)つき。ブロックをタップすると詳しい説明が出ます。 | [開く](https://gengootakulab-star.github.io/myanmar-words/) |
| クメール語 単語分解 | クメール語の単語を、子音・足(コーン)・母音記号・末子音に分解します。読みの目安(IPA)と、辞書の意味つき。 | [開く](https://gengootakulab-star.github.io/khmer-words/) |
| インドネシア語 単語クイズ | カテゴリーや場面ごとの例文で単語を学び、ストックした単語からクイズを出します。日→インドネシア語、インドネシア語→日を選べます。 | [開く](https://gengootakulab-star.github.io/indonesian-quiz/) |
| スワヒリ語 動詞の分解・組み立て | スワヒリ語の動詞を、主語・時制・目的語・語根などに色分けして分解します。「だれが」「いつ」「だれを」を選んで、動詞を組み立てることもできます。 | [開く](https://gengootakulab-star.github.io/swahili-words/) |
| モンゴル文字 縦書き単語帳 | キリル文字・日本語・英語・ローマ字で検索して、モンゴルの伝統文字を縦書きで表示します。1文字ずつに分けて、語頭・語中・語末で変わる形も確かめられます。 | [開く](https://gengootakulab-star.github.io/mongol-bichig/) |

ツールごとのソースは、それぞれ別のリポジトリにあります(`myanmar-words`、`khmer-words`、`indonesian-quiz`、`swahili-words`、`mongol-bichig`)。

## NOTES(記事)

[記事一覧](https://gengootakulab-star.github.io/notes.html)から読めます。東南アジアの文字(ミャンマー文字・クメール文字・ブラーフミー系の文字)、スワヒリ語の動詞、モンゴル文字と遊牧の詩、発音記号(IPA)など、言語と文字、その背景にある歴史や文化の話題を取り上げています。

---

## 注意事項

- ツールが示す内容(読み・意味・例文など)は、学習の補助を目的としたものです。誤りが含まれる可能性があります。
- 読み(IPA・ローマ字)は、規則から作った目安です。実際の発音と一致しないことがあります。
- 単語や例文の誤りを見つけたときは、次のどちらかで教えてください。
  - 各ツールのページ下部にある「報告」リンク(GitHub Issue、またはフォーム)
  - サイト下部の「誤りの報告・ご意見(フォーム)」(アカウント不要)

## データの出典

- 辞書データ: [Wiktionary](https://www.wiktionary.org/) (CC BY-SA 4.0 / GFDL)。[kaikki.org](https://kaikki.org/) が公開する抽出データを、加工して利用しています。
- 日本語の意味や例文は、運営者がAIの助けを借りて作成したものです。

## アクセス解析

閲覧数の把握のため、Cookieを使わない解析ツール [GoatCounter](https://www.goatcounter.com/) を使っています。個人を特定する情報は集めていません。

---

## このリポジトリの構成

GitHub Pagesで公開する、ビルド不要の静的サイトです。

```
index.html        トップページ
tools.html        ツール一覧
notes.html        記事一覧
about.html        運営者について
note-*.html       各記事のページ
note-template.html 記事ページの雛形(検索に出ないよう noindex 付き)
data.js           ツール(TOOLS)と記事(NOTES)の一覧データ
site.js           共通のヘッダー・フッター、一覧の描画、アクセス解析
style.css         共通のスタイル
sitemap.xml       検索エンジン向けのサイトマップ
robots.txt        クローラー向けの設定
icon*.png         アイコン
```

> ⚠️ `data.js` と `sitemap.xml` を書き換えるときは、**必ずリポジトリにある最新版を元にしてください。** 古い版を元にすると、一覧から記事やツールが消えてしまいます。

### 記事を追加する手順

1. `note-template.html` をコピーして、`note-xxxx.html` として保存します。
2. `<meta name="robots" content="noindex">` を削除し、タイトル・説明文・canonicalのURLを書き換えます。
3. 本文を `<article class="wrap page prose">` の中に書きます。
4. 最新の `data.js` の `NOTES` の先頭に、記事の情報を1件追加します。

   ```js
   {lang:["KHMER"],theme:"TOOLS",title:"タイトル",desc:"説明文",date:"2026-01-01",href:"note-xxxx.html"},
   ```

5. 最新の `sitemap.xml` に、新しいページのURLを追加します。
6. ファイルをリポジトリのトップにアップロードします。

### ツールを追加する手順

1. ツール用の新しいリポジトリを作り、`index.html` を置いてGitHub Pagesを有効にします(`/リポジトリ名/` で公開されます)。リポジトリ名はそのままURLになるので、`data.js` のリンクと一字一句そろえます。
2. 最新の `data.js` の `TOOLS` に、ツールの情報とリンク(`href:"/リポジトリ名/"`)を追加します。
3. 最新の `sitemap.xml` に、ツールのURLを追加します。
4. 誤り報告のGoogleフォームの「対象」に、新しいツールを追加します。

---

© 言語オタクの多言語学習ラボ ・ 個人が運営するサイトです
