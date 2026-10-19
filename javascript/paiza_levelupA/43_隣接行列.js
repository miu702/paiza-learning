/*
ノード（頂点）と向きの無いエッジ（辺）の集合を無向グラフといいます。

頂点の数が N であるような無向グラフにおいて、N × N の配列 g を考えます。
i 番目の頂点と j 番目の頂点が辺で結ばれているとき、 g[i-1][j-1] = 1
結ばれていないとき、g[i-1][j-1] = 0 であるような配列をそのグラフの隣接行列といいます。

グラフの頂点・辺についての情報が与えられるので、このグラフの隣接行列を出力してください。

なお、このグラフには、多重辺や自己ループはないものとします。
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
  const vertexs = lines.slice(1).map((v) => v.split(" ").map(Number));
  // -- 入力 → 変数end --

  // -- 隣接行列を作成する --
  const matrix = Array.from({ length: N }, () => Array(N).fill(0));
  // -- 隣接行列を作成するend --

  // -- 辺の情報を反映する --
  for (const [a, b] of vertexs) {
    matrix[a - 1][b - 1] = 1;
    matrix[b - 1][a - 1] = 1;
  }
  // -- 辺の情報を反映するend --

  // -- 出力する --
  matrix.forEach((m) => {
    console.log(m.join(""));
  });
  // -- 出力するend --
});
