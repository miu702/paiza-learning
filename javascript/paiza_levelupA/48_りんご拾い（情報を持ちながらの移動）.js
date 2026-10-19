/*
頂点 1 からスタートし、あなたは一直線であるグラフを後戻りせずに、
各頂点に置かれたりんごを拾いながらたどります。

グラフの頂点・辺・各頂点のりんごの数についての情報が与えられるので、
あなたが頂点 1 から i 頂点分進んだ時に持っているりんごの数 S_i を求めてください。
なお、このグラフには、多重辺や自己ループはないものとします。


入力される値
N   
a_1 b_1  
...     
a_(N-1) b_(N-1)     
A_1     
...     
A_N


・ 1 行目には、グラフの頂点の数 N が与えられます。
・ 続く N-1 行では、各辺の両端の頂点 a_i , b_i が与えられます。(1 ≦ i ≦ N-1)
・ 続く N 行では、各頂点にあるりんごの数 A_j が与えられます。 (1 ≦ j ≦ N)

入力値最終行の末尾に改行が１つ入ります。
文字列は標準入力から渡されます。 標準入力からの値取得方法はこちらをご確認ください
期待する出力
N 行の出力

・ 頂点 1 から k 頂点分進んだ時に持っているりんごの数 S_k を出力してください。(0 ≦ k ≦ N-1)


S_0
...
S_(N-1)
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
  const vertices = lines.slice(1, N).map((v) => v.split(" ").map(Number));
  const apples = lines.slice(N).map(Number);
  // -- 入力 → 変数end --

  // -- 隣接リスト、りんごの数リストを作成 --
  const adjacentList = Array.from({ length: N + 1 }, () => []);
  for (const [a, b] of vertices) {
    adjacentList[a].push(b);
    adjacentList[b].push(a);
  }

  const appleList = Array(N + 1).fill(0);
  for (let i = 0; i < apples.length; i++) {
    appleList[i + 1] = apples[i];
  }
  // -- 隣接リスト、りんごの数リストを作成end --

  // -- 調査をするための準備をする --
  const moved = Array(N + 1).fill(false);
  const queue = [];
  let appleCount = 0;
  const output_apple = []; // -- 最終的に出力する配列 --

  // -- 初期状態 --
  let current = 1;
  moved[current] = true;
  queue.push(current);
  appleCount += appleList[current];
  output_apple.push(appleCount);
  // -- 調査をするための準備をするend --

  // -- 移動しつつ、調査する --
  let dx = 0;
  while (queue.length > dx) {
    for (const step of adjacentList[current]) {
      // -- 移動できるか判断する --
      if (moved[step]) continue;

      // -- 移動できる時移動し、りんご拾う、移動済みにする、現在地を変更する --
      appleCount += appleList[step];
      output_apple.push(appleCount);

      moved[step] = true;
      current = step;
      queue.push(step);
    }
    dx++;
  }
  // -- 移動しつつ、調査するend --

  // -- 出力形式に従って出力する --
  console.log(output_apple.join("\n"));
});
