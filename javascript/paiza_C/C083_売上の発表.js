/*
あなたは PAIZA 社のエンジニアです。あなたはこれまでの売上のデータを横向きの棒グラフにする仕事を振られました。

与えられたデータは N 期分のデータで、第 i 期 (1 ≦ i ≦ N) の売上は a_i です。

これをそのまま棒グラフにするととても長いグラフになります。ところが、幸いすべての期の売上が R の倍数になっていることに気づきました。

そこで、売上のデータの単位を R として棒グラフを表示するプログラムを作成しましょう。


入力される値
入力は以下のフォーマットで与えられます。

N R
a_1
a_2
...
a_N
・1 行目に売上データの個数を表す整数 N と、データの表示単位を表す整数 R が
この順で半角スペース区切りで与えられます。
・続く N 行のうちの i 行目 (1 ≦ i ≦ N) には、第 i 期の売上を表す整数 a_i がこの順で与えられます。
・入力は合計で N + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。標準入力からの値取得方法はこちらをご確認ください



期待する出力
売上の棒グラフを以下の形式で出力してください。
1:s_i
...
N:s_N
・期待する出力は N 行からなります。
・i 行目 (1 ≦ i ≦ N) には "i:" という表示のあと、第 i 期の棒グラフを表す文字列 s_i を出力して下さい。
・売上データの最大値が M であるとき、s_i は M / R 文字からなり、
第 j 文字 (1 ≦ j ≦ M / R) は j × R ≦ a_i を満たすとき "*"、そうでないとき "." としてください。
・N 行目の出力の最後に改行を入れ、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・2 ≦ N ≦ 9
・1 ≦ R ≦ 1,000
・0 ≦ a_i ≦ 1,000 (1 ≦ i ≦ N)
・各 a_i は R の倍数


入力例1
3 5
5
15
10

出力例1
1:*..
2:***
3:**.

入力例2
4 2
12
8
16
10

出力例2
1:******..
2:****....
3:********
4:*****...

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
  const [graph_int, unit] = lines[0].split(" ").map(Number);
  const graphs = lines.slice(1);

  // グラフの横の値を決める。
  const change = [];
  let max = 0;
  for (const G of graphs) {
    const divide = Number(G) / unit;
    change.push(divide);
    if (divide > max) max = divide;
  }

  // 出力用のグラフを描画する。
  const graph = Array.from({ length: graphs.length }, () => Array(max).fill("."));

  // グラフを変更する。
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < change[i]; j++) {
      graph[i][j] = "*";
    }
    console.log(`${i + 1}:${graph[i].join("")}`);
  }
});
