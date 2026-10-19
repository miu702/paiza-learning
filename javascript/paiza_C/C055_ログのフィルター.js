/*
あなたはサーバ管理者です。 日々洪水のように流れるログを追っています。
とうとう自分の目と頭では処理しきれない量になってしまったため、プログラムを作って、
重要な文字列を含むログだけ抽出する事にしました。

例えば、入力例 2 では、ログは上から順に "pizza"、 "paiza"、 "aizu"、 "ai"、 "sai" の 5 つです。
この 5 つのログに対して、重要な文字列 "ai" が含まれているのは "pizza" 以外の 4 つです。
結果として "pizza" だけが除かれ、 "paiza"、 "aizu"、 "ai"、 "sai" がこの順に抽出されます。


このように、ログと重要な文字列が与えられたとき、重要な文字列が含まれているログを抽出して出力するプログラムを作成してください。
重要な文字列が含まれていない場合は "None" と出力してください。


入力される値
入力は以下のフォーマットで与えられます。

N
G
S_1
...
S_N
・1 行目には、文字列の数 N が整数で与えられます。
・2 行目には、抽出する対象の重要な文字列 G が与えられます。
・3 行目から続く N 行のうち i 行目 (1 ≦ i ≦ N)には、ログの内容である文字列 S_i が与えられます。
・入力は合計 N + 2 行であり、最終行の末尾に改行が 1 つ入ります。



期待する出力
与えられたログに対して、上から順に重要な文字列が含まれているログを出力してください。
重要な文字列が含まれていない場合は "None" と出力してください。

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
  // 入力→変数に変換する
  const words = lines.join(" ").split(/\s+/).filter(Boolean);
  const times = Number(words[0]);
  const target = words[1];
  const word = words.slice(2);

  // 入力をチェックし、基準が含まれるとき出力する。
  let numbers = 0;
  for (let i = 0; i < times; i++) {
    if (word[i].includes(target)) {
      console.log(word[i]);
      numbers++;
    }
  }

  // 1つもない時、Noneを出力する
  if (numbers === 0) {
    console.log("None");
  }
});
