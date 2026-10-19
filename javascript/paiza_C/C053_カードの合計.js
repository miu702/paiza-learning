/*
あなたは N 人でカードゲームをしています。
このカードゲームは N 人のプレイヤーに 1 枚づつカードを配ります。
プレイヤー全員に配られたカードの総合点を当てたプレイヤーが勝利します。
一番早く答えた人が勝つため、その答えが合っているか検算しなくてはなりません。

カードは 1 ～ 100 の数字が書かれた「点数カード」、0 の数字が書かれた「点数 0 カード」、
"x10" と書かれた「点数 10 倍カード」の 3 種類に分かれており、総合点は以下のように計算されます。

・点数 0 カードが ある場合、点数カードの中で最大の点を持つカードを 1 つ 0 点にする。
・点数カードの合計点を計算する。
・点数 10 倍カードがある場合、総合点は上記の合計点の 10 倍とする。
　点数 10 倍カードがない場合、総合点は上記の合計点とする。

答えた総合点が合っているかどうか判定するため、実際に総合点を計算するプログラムを書いてください。
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
  // デッキの枚数とデッキを定義する
  const number = Number(lines[0]);
  const numbersStr = lines[1].split(" ");

  // 特殊カード2種があるかチェックする
  const zero = "0";
  const tem_times = "x10";
  const check_zero = numbersStr.includes(zero);
  const check_tem_times = numbersStr.includes(tem_times);

  // 特殊カードを除いたデッキを作成する
  const numbers = [];
  for (const N of numbersStr) {
    if (N !== zero && N !== tem_times) numbers.push(Number(N));
  }

  // 計算手順1、0カードの処理をする
  sorted_numbers = [...numbers].sort((a, b) => a - b);
  if (check_zero) sorted_numbers.pop();

  // 計算手順2、点数カードの処理をする
  let sum_number = 0;
  for (const S of sorted_numbers) sum_number += S;

  // 計算手順3、×10カードの処理をする
  console.log(check_tem_times ? sum_number * 10 : sum_number);
});
