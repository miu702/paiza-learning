/*
グラフの任意の頂点 i , j について、 i から j に辺を通ってたどり着けるとき、
そのグラフは連結であるといいます。


グラフの頂点と辺についての情報が与えられるので、このグラフが連結であるかどうかを判別してください。

連結である場合には "YES" , そうでない場合は "NO" を出力してください。

なお、このグラフには、多重辺や自己ループはないものとします。

入力される値
N M    
a_1 b_1     
...         
a_M b_M


・ 1 行目には頂点の数を表す整数 N , 辺の数を表す整数 M が与えられます。
・ 続く M 行では、辺の両端の頂点 a_i , b_i が与えられます。 (1 ≦ i ≦ M)

期待する出力
1 行の出力

・ 連結である場合には "YES" そうでない場合は "NO" を出力してください。
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

  // -- M(辺の数)が頂点の数(N) -1以上でないと全ての頂点にいけないので、予め外す --
  if (N - 1 > M) {
    console.log("NO");
    return;
  }

  // -- 隣接リストを作成する --
  const adjacentList = Array.from({ length: N + 1 }, () => []);
  for (const [a, b] of vertices) {
    adjacentList[a].push(b);
    adjacentList[b].push(a);
  }

  // -- 移動できるか調査する --
  const moved = Array(N + 1).fill(false);

  // -- 任意の頂点番号から調査する --
  const stack = [];
  stack.push(1);
  moved[1] = true;
  while (stack.length > 0) {
    // -- 配列の一番後ろを調査 --
    let found = false;
    const current = stack[stack.length - 1];

    for (const next of adjacentList[current]) {
      // -- 訪問済みならスキップ --
      if (moved[next]) continue;

      // -- 未訪問なら、処理待ち列へ追加、訪問済みに変更、移動できるに変更 --
      stack.push(next);
      moved[next] = true;
      found = true;
      break;
    }

    // -- 現在地から移動できない時、処理待ち列の一番後ろを削除する --
    if (!found) stack.pop();
  }

  // -- 頂点の情報が全てtrueなら、YES --
  const checkMoved = moved.slice(1).every((c) => c === true);
  console.log(checkMoved ? "YES" : "NO");
});
