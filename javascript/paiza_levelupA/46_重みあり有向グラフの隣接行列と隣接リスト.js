/*
ノード（頂点）と向きと重みを持つエッジ（辺）の集合を有向グラフといいます。

頂点の数が N であるような有向グラフにおいて、N × N の配列 g を考えます。
i 番目の頂点から j 番目の頂点に向かう重み k の辺があるとき、 g[i - 1][j - 1] = k, 
辺がないとき、 g[i - 1][j - 1] = 0
であるような配列をそのグラフの隣接行列といいます。

頂点の数が N であるような有向グラフにおいて、 N 個の配列を持つ２次元配列 g を考えます。
i 番目の頂点から j 番目の頂点に向かう重み k の辺があるとき、 g の i - 1 番目の配列に構造体などを用いて j - 1 と k を追加します。
この操作を繰り返してできる 2 次元配列 g を隣接リストといいます。

グラフの頂点・辺についての情報が与えられるので、このグラフの隣接行列と隣接リストを出力してください。

なお、このグラフには、多重辺や自己ループはないものとします。


入力される値
N M            
a_1 b_1 k_1         
...             
a_M b_M k_M
・ 1 行目には、頂点の数 N と、辺の数 M が与えられます。
・ 続く M 行では、各辺の両端の頂点 a_i , b_i と、その辺の重み k_i が与えられます。(1 ≦ i ≦ M)


期待する出力
2×N 行の出力

・ まず、隣接行列 g を N 行で出力してください。
・ 次に、隣接リスト h を N 行で出力してください。

・ 隣接リストは以下の形式で出力してください。
　・ 各行の頂点番号は昇順にソートして出力
　・ 頂点 i (1 ≦ i ≦ N) から頂点 j (1 ≦ j ≦ N, j ≠ i) に向かう辺の重みが m_ij のとき、
i(m_ij) の形式で出力
　・ 頂点 i に隣接している頂点がない場合は改行のみ出力
g[0][0]...g[0][N-1]            
...
g[N-1][0]...g[N-1][N-1]
h[0][0](m_0h[0][0])h[0][1](m_0h[0][1])...
...
h[N-1][0](m_(N-1)h[N-1][0])h[N-1][1](m_(N-1)h[N-1][1])...


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
  const vertices = lines.slice(1, M + 1).map((v) => v.split(" ").map(Number));
  // -- 入力 → 変数end --

  // -- 2つの配列を作成する --
  const adjacencyMatrix = Array.from({ length: N }, () => Array(N).fill(0));
  const adjacentList = Array.from({ length: N }, () => []);
  // -- 2つの配列を作成するend --

  // -- 要素の更新を行う --
  for (const [s, g, weight] of vertices) {
    const start = s - 1;
    const goal = g - 1;
    adjacencyMatrix[start][goal] = weight;
    adjacentList[start].push({ goal, weight });
  }
  // -- 要素の更新を行うend --

  // -- ルールに従って出力 --

  // 隣接行列はそのまま出力
  adjacencyMatrix.forEach((matrix) => {
    console.log(matrix.join(""));
  });

  // 隣接リストはゴールの昇順にソートして出力
  for (const arr of adjacentList) {
    if (arr.length === 0) {
      console.log("");
      continue;
    }
    const sorted = [...arr].sort((a, b) => a.goal - b.goal);

    const output = sorted.map((s) => `${s.goal}(${s.weight})`).join("");
    console.log(output);
  }
});
