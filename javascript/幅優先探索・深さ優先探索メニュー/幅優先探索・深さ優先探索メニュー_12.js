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
  // -- 入力値を変数に変換 --
  const [vertex, lineSegment, start] = lines[0].split(" ").map(Number);
  const inputNumbers = lines.slice(1, lines.length);
  const lineSegments = [];
  for (let i = 0; i < inputNumbers.length; i++) {
    const seg = inputNumbers[i].split(" ").map(Number);
    lineSegments.push(seg);
  }
  // -- 入力値を変数に変換end --

  // -- 隣接リストを作成する --
  const graph = Array.from({ length: vertex + 1 }, () => []);
  for (const [verA, verB] of lineSegments) {
    graph[verA].push(verB);
    graph[verB].push(verA);
  }
  // -- 頂点番号の小さい順に処理するため、ソートする --
  for (let j = 1; j < graph.length; j++) {
    graph[j].sort((a, b) => a - b);
  }
  // -- 頂点番号の小さい順に処理するため、ソートする --
  // -- 隣接リストを作成する --

  // -- マスの到達状態を管理する --

  // -- スタートからの距離 --
  const dist = Array(vertex + 1).fill(-1);
  dist[start] = 0;
  // -- マスの到達状態を管理する --

  // -- 幅優先探索をする --
  const queue = [];
  queue.push(start);

  let dx = 0;
  while (dx < queue.length) {
    const v = queue[dx++];
    for (const next of graph[v]) {
      if (dist[next] === -1) {
        dist[next] = dist[v] + 1;
        queue.push(next);
      }
    }
  }
  // -- 幅優先探索をするend --

  // -- 出力する --
  console.log(queue.join("\n"));
});
