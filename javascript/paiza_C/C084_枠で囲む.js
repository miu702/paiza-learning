/*
あなたは友人に向けてメールを送ろうとしています。
ただメールを送るだけではつまらないので、文字列を装飾して送ることにしました。
送りたい文字列の周囲を "+" で枠のように囲んで装飾します。

このような処理を手作業で行いたくないため、プログラムで装飾しようとしています。
この "+" の枠で囲む装飾をするプログラムを書いてください。


入力される値
入力は以下のフォーマットで与えられます。
S
・枠で囲んで装飾したい文字列 S が与えられます。
・入力は 1 行となり、末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。


期待する出力
送りたい文字列を枠で囲んだ結果を出力してください。
出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。


条件
すべてのテストケースにおいて、以下の条件をみたします。
・S は英字のみで構成される文字列である。
・1 ≦ (S の長さ) ≦ 100


入力例1
Paiza

出力例1
+++++++
+Paiza+
+++++++

入力例2
TicTacToe

出力例2
+++++++++++
+TicTacToe+
+++++++++++

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
  // 入力 → 変数に変換する
  const word = lines[0];

  // 文字の長さを計測する
  const length = word.split("").length;
  const size = length + 2;

  // 文字列を作成する。
  const upper_under = new Array(size).fill("+").join("");
  const add = "+";

  // 決まりにしたがって、出力する
  for (let i = 0; i < 3; i++) {
    if (i === 0 || i === 2) {
      console.log(upper_under);
    } else {
      console.log(`${add}${word}${add}`);
    }
  }
});
