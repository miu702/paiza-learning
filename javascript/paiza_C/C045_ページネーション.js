/*
あなたは検索サイトを作成するエンジニアです。
この検索サイトでは便宜上、検索結果の件数を n 件としたとき、各検索結果は表示順に 1 から n まで番号付けられているとします。

今日のあなたの仕事はページネーションを実装することです。
ページネーションとは、大量に得られた検索結果を「ページサイズ」と呼ばれるサイズ毎に区切ることで、
検索結果を複数のページに分割して表示する機能です。

例えば、検索結果が 34 件であり、ページサイズが 10 件/ページとすると
これらの検索結果はページ 1 からページ 4 までの 4 枚のページに分割され、
各ページに表示される検索結果の番号は以下のようになります。

・ページ 1: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
・ページ 2: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
・ページ 3: 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
・ページ 4: 31, 32, 33, 34

検索結果の件数 n、ページサイズ s および表示したいページ番号 p が入力されるので、
ページ p に表示される検索結果の番号を昇順に全て出力するプログラムを作成してください。
ただし、ページ p に表示される検索結果が 1 つも存在しない場合は "none" と出力してください。


入力される値
入力は以下のフォーマットで与えられます。

n s p
・1 行目には、検索結果の件数を表す整数 n、ページサイズを表す整数 s および表示したいページ番号を表す整数 p が
この順で半角スペース区切りで入力されます。
・入力は 1 行となり、末尾に改行が 1 つ入ります。


期待する出力
ページ p に表示される検索結果の番号を、昇順に全て半角スペース区切りで出力してください。
出力の最後に改行を入れ、余計な文字、空行を含んではいけません。

*/
process.stdin.resume();
process.stdin.setEncoding("utf8");

const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const [total_pages, page_size, display] = lines[0].split(" ").map(Number);

  // 表示したい最初のページ = 1ページの数 × (表示したいページ番号 - 1) + 1
  const left = page_size * (display - 1) + 1;

  // 表示したい最後のページ = 表示したい最初のページ - 1 + 1ページの数
  const right = left - 1 + page_size;

  const output = [];
  for (let i = left; i <= right; i++) {
    if (i > total_pages) break;
    output.push(i);
  }

  if (output.length > 0) {
    console.log(output.join(" "));
  } else if (output.length === 0) {
    console.log("none");
  }
});
