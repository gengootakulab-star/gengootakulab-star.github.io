/* ツールと記事の一覧はここに追加します */
const TOOLS=[
{name:"単語分解ツール(ミャンマー語)",sub:"言葉の構造を調べてみる",desc:"ミャンマー語の単語を、音節・子音・母音・声調に分けて、発音記号と意味を調べます。",tags:["ミャンマー語","分解"],href:"/myanmar-words/"},
{name:"クメール語 単語分解",sub:"文字の仕組みを調べてみる",desc:"クメール語の単語を、子音・足・母音記号に分けて、a系列・o系列と読みの目安を調べます。",tags:["クメール語","分解"],href:"/khmer-words/"},
{name:"インドネシア語 単語クイズ",sub:"覚えた語彙を試してみる",desc:"カテゴリーや場面ごとのフレーズで単語を学び、ストックした単語からクイズを出します。日→インドネシア語、インドネシア語→日も選べます。",tags:["インドネシア語","クイズ"],href:"/indonesian-quiz/"}
];
const NOTES=[
{lang:["IPA"],theme:"PHONETICS",title:"ハテナみたいな発音記号が好きなので、IPAを読めるようになりたい",desc:"カタカナで書けないクメール語の音がきっかけで、発音記号IPAの読み方を調べてみました。推しの記号は、喉を閉める音を表すハテナのような形の記号です。",date:"2026-11-09",href:"note-ipa.html"},
{lang:["MYANMAR"],theme:"WRITING",title:"ミャンマー文字の記号はどこに付く?",desc:"子音の上下左右に付く記号を図で整理。文字を1つずつ足しながら、記号の動きを観察してみました。",date:"2026-11-09",href:"note-myanmar-marks.html"},
{lang:["KHMER","THAI","LAO"],theme:"WRITING",title:"クメール語・タイ語・ラオス語——似ているけれど何が違う？",desc:"似た文字を持つ3言語を、文字・発音・文法から比べてみる。ラオス語の「ぱにゃにゃん」も。",date:"2026-11-06",href:"note-khmer-thai-lao.html"},
{lang:["INDONESIAN"],theme:"GRAMMAR",title:"インドネシア語の「-nya」って何者？4つの用法を整理してみた",desc:"インドネシア語でよく見かける「-nya」を、所有・目的語・特定・性質や程度の4つの使い方に分けて整理してみました。",date:"2026-11-05",href:"note-indonesian-nya.html"},
{lang:["ASSAMESE"],theme:"WRITING",title:"紅茶の産地アッサムには、独自の言語と文字がある",desc:"紅茶の産地として有名なインド北東部のアッサム州について、独自の言語・アッサム語と文字、多様な民族の言語を調べてみました。",date:"2026-11-05",href:"note-assam.html"},
{lang:["KHMER","MYANMAR","THAI"],theme:"WRITING",title:"クメール文字もタイ文字も？ブラーフミー文字の子孫たち",desc:"クメール文字、ミャンマー文字、タイ文字などの共通の祖先「ブラーフミー文字」と、そこから広がった文字たちについて調べてみました。",date:"2026-11-05",href:"note-brahmi-scripts.html"},
{lang:["KHMER"],theme:"TOOLS",title:"クメール語の文字を分解してみたい！単語分解ツールを作ってみた",desc:"クメール語の文字の仕組みが分かりづらくて、単語を入力すると構成を分解して表示するツールをAIで作ってみました。",date:"2026-11-05",href:"note-khmer-word-tool.html"},
{lang:["MYANMAR"],theme:"TOOLS",title:"ミャンマー語の単語分解ツールを作ってみた！文字の組み合わせと発音の仕組みを理解する",desc:"文字の組み合わせが分かりづらくて、単語を分解して役割を確認できるツールをAIで作ってみました。",date:"2026-11-04",href:"note-myanmar-word-tool.html"},
{lang:["KHMER","MYANMAR"],theme:"WRITING",title:"ミャンマー文字とクメール文字は似ている？実は共通のルーツがあった！",desc:"クメール語を先に学んでいて気づいた、ミャンマー文字との意外な共通点。",date:"2026-11-02",href:"note-khmer-myanmar-script.html"}
/* 記事を足す例: {lang:"KHMER",theme:"WRITING",title:"…",desc:"…",date:"2026-11-01",href:"note-xxxx.html"} */
];
