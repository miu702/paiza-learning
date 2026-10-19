/*
一直線であるグラフの頂点の数 N , 辺の両端の頂点 a_i , b_i が与えられます。

あなたは、頂点 1 から出発して、後戻りせずに移動できなくなるまで辺をたどります。
訪れた頂点の番号を順に出力してください。

なお、このグラフには、多重辺や自己ループはないものとします。


入力される値
N           
a_1 b_1         
...                 
a_(N-1) b_(N-1)


・ 1 行目には、グラフの頂点の数 N が与えられます。
・ 続く N-1 行では、各辺の両端の頂点 a_i , b_i が与えられます。(1 ≦ i ≦ N - 1)

期待する出力
N 行の出力
・ 訪れた頂点の番号を順に N 行で出力してください。
・ 出発地点の 1 を出力することを忘れないでください。


v_1
...
v_N

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
  const N = Number(lines[0]);
  if (isNaN(N)) {
    console.error("頂点の数Nが数値で指定されていません。");
    return;
  }

  if (N < 1 || N > 100) {
    console.error("頂点の数は1~100で指定してください。");
    return;
  }

  // -- 隣接リストを作成する(インデックス番号に対応するため、頂点数 + 1) --
  const adjacentList = Array.from({ length: N + 1 }, () => []);

  const vertices = lines.slice(1).map((v) => v.split(" ").map(Number));
  for (const [start, goal] of vertices) {
    if (isNaN(start) || isNaN(goal)) {
      console.error("頂点番号が数値で指定されていません。");
      return;
    }

    if (start < 1 || start > N || goal < 1 || goal > N) {
      console.error("頂点番号の指定は1~頂点の数Nで指定してください。");
      return;
    }

    adjacentList[start].push(goal);
    adjacentList[goal].push(start);
  }
  // -- 隣接リストを作成する(インデックス番号に対応するため、頂点数 + 1)end --

  // -- 入力 → 変数 --

  // -- 移動できるか調査する --

  // -- 移動したかを記録する --
  const moved = Array(N + 1).fill(false);

  // -- 移動候補を記録する --
  const queue = [];

  // -- 道順を記録する --
  const visited = [];

  // -- 初期状態を記録する --
  let current = 1;
  moved[current] = true;
  queue.push(current);
  visited.push(current);

  // -- 調査本番 --
  let dx = 0;
  while (queue.length > dx) {
    for (const step of adjacentList[current]) {
      // -- 移動先の調査 --
      if (moved[step]) continue;

      // -- 移動できる時、移動し、履歴に記録 --
      current = step;
      moved[step] = true;
      queue.push(step);
      visited.push(step);
    }
    dx++;
  }
  // -- 移動できるか調査するend --

  // -- 道順を出力する --
  visited.forEach((visit) => {
    console.log(visit);
  });
});
