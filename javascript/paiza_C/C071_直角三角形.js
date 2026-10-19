/*
あなたは、全ての辺の長さが整数である直角三角形を数えることになりました。

しかし、この条件を満たす三角形全てを数えるときりがないので、以下の条件を満たす三角形だけを数えることにしました。

・調べる直角三角形は直角が右下にある。
・全ての辺は整数である。
・ある与えられた二つの整数 M, N が与えられ、M より長さが小さい底辺、N より長さが小さい高さをもつ。


入力される値
入力は以下のフォーマットで与えられます。

M N
・2 つの整数 M, N がこの中に半角スペース区切りで与えられます。
・入力は 1 行となり、末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。



期待する出力
斜辺も整数である直角三角形の個数を整数で出力してください。
出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。




条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ M ≦ 30
・1 ≦ N ≦ 30


入力例1
10 10

出力例1
4

入力例2
20 20

出力例2
12

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
  const [M, N] = lines[0].split(" ").map(Number);

  // 条件に沿った辺を全て調査し、直角三角形の数をカウントする。
  let count = 0;
  for (let x = 1; x < M; x++) {
    for (let y = 1; y < N; y++) {
      // 三平方の定理より斜辺を求める。
      const A = x * x;
      const B = y * y;
      const C = Math.sqrt(A + B);

      // 斜辺が整数なら、直角三角形である。
      const check = Number.isInteger(C);
      if (check) count++;
    }
  }

  // 結果を出力する
  console.log(count);
});
