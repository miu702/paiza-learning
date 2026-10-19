/*
数列 A の要素数 N と値 M , 数列 A の要素 A_1, A_2, ..., A_N が与えられます。

要素の和が M 以上となるような A の部分列の最短の長さを求めてください。
そのような部分列が存在しない場合は -1 を出力してください。

なお、数列の部分列とは、数列の連続した 1 つ以上の要素を取り出して作ることができる数列のことです。


入力される値
N M        
A_1 A_2 ... A_N
・ 1 行目には、数列 A の要素数 N と、条件に使う整数 M が与えられます。
・ 2 行目には、数列 A の各要素 A_1, A_2 ... A_N が与えられます。


期待する出力
1 行の出力

・ 条件を満たす最短の区間の長さ(要素数) l を 1 行で出力してください。
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
  const [number, target, ...numbers] = lines.join(" ").split(/\s+/).map(Number);

  // -- 最短を求める(数値がtarget以上になるまで右に伸ばし、target以上になったら、左を縮める)--
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  // -- これを尺取り法という。--

  // -- まずは、合計が基準値以上になるまで右へ行く。--
  for (let right = 0; right < numbers.length; right++) {
    sum += numbers[right];

    // -- もし、合計が基準値以上になったら、もっと少なく出来ないか確かめる --
    while (sum >= target) {
      // 1. 見つかった要素と記録している要素を比べる
      minLength = Math.min(minLength, right - left + 1);

      // 2. 見つかった要素の左から1つを削除してみる。
      sum -= numbers[left];
      left++;

      // 3.whileの先頭に戻り、まだ、基準値を超えれるなら、繰り返す。
    }
  }

  // -- 指定された出力をする --
  console.log(minLength === Infinity ? -1 : minLength);
});
