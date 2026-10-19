/*
洗濯した靴下のペアを見つけるのは非常に面倒な作業ですね。
そこで、靴下のペアを数えるプログラムを書いてみましょう。

入力として、洗濯を終えた N 枚の靴下が与えられます。
各靴下について、種類と左右のどちらであるかがわかっています。
同じ種類の靴下で左右が揃っているペアが何組あるか出力してください。


入力される値
入力は以下のフォーマットで与えられます。
N
t_1 d_1
t_2 d_2
...
t_N d_N
・1 行目には、与えられる靴下の数を表す整数 N が与えられます。
・続く N 行目のうち i 行目 (1 ≦ i ≦ N) には、i 番目の靴下の種類を表す文字 t_i, お
よび左右を表す文字 d_i が与えられます。
・入力は合計で N + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。


期待する出力
同じ種類の靴下で左右が揃っているペアが何組あるか出力してください。
末尾に改行を入れ、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ N ≦ 100
・各 i (1 ≦ i ≦ N) について
　・t_i は英字大文字
　・d_i は "L", "R" のいずれか
　
　
入力例1
8
A R
A L
B R
A L
A R
B L
A L
C L

出力例1
3

入力例2
6
R R
T R
R L
T R
T L
T L

出力例2
3

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
  const socks_int = Number(lines[0]);
  const socks = lines.slice(1);

  // 左右ごとにカウントする。
  const countLeft = new Map();
  const countRight = new Map();
  for (const sock of socks) {
    const [color, which] = sock.split(" ");
    if (which === "L") {
      countLeft.set(color, (countLeft.get(color) || 0) + 1);
    } else if (which === "R") {
      countRight.set(color, (countRight.get(color) || 0) + 1);
    }
  }

  // 種類は多さを基準、数は少ない方が基準にして、カウントする。
  let total_pairs = 0;
  if (countLeft.size === countRight.size) {
    for (const [key, value] of countLeft) {
      total_pairs += Math.min(countRight.get(key), countLeft.get(key));
    }
  } else if (countLeft.size > countRight.size) {
    for (const [key, value] of countLeft) {
      if (countRight.get(key) === undefined) continue;
      total_pairs += Math.min(countRight.get(key), countLeft.get(key));
    }
  } else if (countLeft.size < countRight.size) {
    for (const [key, value] of countRight) {
      if (countLeft.get(key) === undefined) continue;
      total_pairs += Math.min(countRight.get(key), countLeft.get(key));
    }
  }

  // 結果を出力する
  console.log(total_pairs);
});
