/*
数列 A の要素数 N と値 M、数列 A の要素 A_1, A_2 ... A_N が与えられます。
要素の和が M を超えないような A の部分列の最大の長さを求めてください。
なお、数列の部分列とは、数列の連続した 1 つ以上の要素を取り出して作ることができる数列のことです。


入力される値
N M            
A_0 A_1 ... A_(N-1)


・ 1 行目には、数列 A の要素数 N と、条件に使う整数 M が与えられます。
・ 2 行目には、数列 A の各要素 A_1, A_2 ... A_N が与えられます。


期待する出力
1 行の出力

・ 条件を満たす最大の区間の長さ(要素数) l を 1 行で出力してください。
l

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
  // -- 入力 → 変数 --
  const [N, referenceValue, ...numbers] = lines.join(" ").split(/\s+/).map(Number);
  // -- 入力 → 変数end --

  // -- 動かしながら検査する
  let right = 0;
  let sum = 0;
  let maxLength = -Infinity;

  // -- 左端の数値をループの基本とする --
  for (let left = 0; left < numbers.length; left++) {
    // -- まず、基準値より小さい時、一つずつ足す。--
    while (right <= numbers.length && sum <= referenceValue) {
      /* 
        現在の最高と、今の長さの長い方を記録。
        インデックス番号0を足して基準値以上になるときでも足しているので、
        ここでは + 1せずに比べる
        */
      maxLength = Math.max(maxLength, right - left);
      sum += numbers[right];
      right++;
    }

    // -- 基準値より大きくなったら、一番左 = 最初に足したものを削除してみる。 --
    sum -= numbers[left];
  }

  console.log(maxLength === -Infinity ? 0 : maxLength);
});
