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
  const [vertex, start, goal] = lines[0].split(" ").map(Number);
  const inputNumbers = lines.slice(1, lines.length);
  const lineSegments = [];
  for (let i = 0; i < inputNumbers.length; i++) {
    const seg = inputNumbers[i].split(" ").map(Number);
    lineSegments.push(seg);
  }
  // -- 入力値を変数に変換 --

  // -- 幅優先探索をするために、データ形式を隣接リストに変換する --
  const graph = Array.from({ length: vertex + 1 }, () => []);
  for (const [verA, verB] of lineSegments) {
    graph[verA].push(verB);
    graph[verB].push(verA);
  }
  // -- 幅優先探索をするために、データ形式を隣接リストに変換するend --

  // -- マスの状態を管理する --
  const parent = Array(vertex + 1).fill(-1);
  const dist = Array(vertex + 1).fill(-1);
  dist[start] = 0;
  // -- マスの状態を管理するend --

  // -- 幅優先探索をする --
  const queue = [];
  queue.push(start);

  let dx = 0;
  while (dx < queue.length) {
    const v = queue[dx++];
    for (const next of graph[v]) {
      if (dist[next] === -1) {
        dist[next] = dist[v] + 1;
        parent[next] = v;
        queue.push(next);
      }
    }
  }
  // -- 幅優先探索をするend --

  // -- ゴールに行けるときは経路を出力する --
  const dirction = [];
  if (dist[goal] !== -1) {
    let number = goal;
    while (number !== -1) {
      dirction.push(number);
      number = parent[number];
    }
  }
  dirction.reverse();

  console.log(dirction.length > 0 ? dirction.join("\n") : -1);
  // -- ゴールに行けるときは経路を出力するend --
});
