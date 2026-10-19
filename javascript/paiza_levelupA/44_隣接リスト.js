/*
ノード（頂点）と向きの無いエッジ（辺）の集合を無向グラフといいます。

頂点の数が N であるような無向グラフにおいて、N 個の配列を持つ 2 次元配列 g を考えます。
i 番目の頂点と j 番目の頂点が辺で結ばれているとき、
g の i-1 番目の配列に j-1 , g の j-1 番目の配列に i-1 を追加します。
この操作を繰り返してできる 2 次元配列 g を隣接リストといいます。

グラフの頂点・辺についての情報が与えられるので、このグラフの隣接リストを出力してください。

なお、このグラフには、多重辺や自己ループはないものとします。


入力される値
N M        
a_1 b_1     
...         
a_M b_M


・ 1 行目には、頂点の数 N と、辺の数 M が与えられます。
・ 続く M 行では、各辺の両端の頂点 a_i , b_i が与えられます。(1 ≦ i ≦ M)
入力値最終行の末尾に改行が１つ入ります。


期待する出力
N 行の出力
・ 隣接リスト g を N 行で出力してください。

・ 各行の頂点番号は昇順にソートしてください。
・ 頂点 i (1 ≦ i ≦ N) に隣接している頂点がない場合は改行のみ出力してください。


g[0][0]g[0][1]...
...
g[N-1][0]g[N-1][1]...

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
  const [N, M] = lines[0].split(" ").map(Number);
  const vertexs = lines.slice(1, M + 1).map((v) => v.split(" ").map(Number));
  // -- 入力 → 変数end --

  // -- 隣接リストを作成する --
  const matrix = Array.from({ length: N }, () => []);

  // -- 更新する --
  for (const [a, b] of vertexs) {
    matrix[a - 1].push(b - 1);
    matrix[b - 1].push(a - 1);
  }
  // -- 隣接リストを作成するend --

  // -- 出力する --
  matrix.forEach((m) => {
    m.sort((a, b) => a - b);
    console.log(m.join(""));
  });
  // -- 出力するend --
});
