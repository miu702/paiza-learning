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
  const [vertex, start, distance] = lines[0].split(" ").map(Number);
  const inputNumbers = lines.slice(1, lines.length);
  const vertexs = [];
  for (let i = 0; i < inputNumbers.length; i++) {
    const ver = inputNumbers[i].split(" ").map(Number);
    vertexs.push(ver);
  }
  // -- 入力値を変数に変換end --

  // -- データ構造を隣接リストに変換する --
  const graph = Array.from({ length: vertex + 1 }, () => []);
  for (const [verA, verB] of vertexs) {
    graph[verA].push(verB);
    graph[verB].push(verA);
  }
  // -- データ構造を隣接リストに変換するend --

  // -- スタートからの距離を管理する配列を作成する --
  const dist = Array(vertex + 1).fill(-1);
  dist[start] = 0;
  // -- スタートからの距離を管理する配列を作成するend --

  // -- 幅優先探索を行う --
  const queue = [];
  queue.push(start);

  let dx = 0;
  while (dx < queue.length) {
    const v = queue[dx++];
    for (const next of graph[v]) {
      // -- graph[v]とは、隣接リストのv番のこと。for-ofで1つずつ分解する --
      if (dist[next] === -1) {
        dist[next] = dist[v] + 1; // -- 現在の位置 + 1する。次の探索候補 --
        queue.push(next);
      }
    }
  }
  // -- 幅優先探索を行うend --

  // -- 目標の距離の要素を出力する --
  for (let j = 0; j < dist.length; j++) {
    if (dist[j] === distance) console.log(j);
  }
  // -- 目標の距離の要素を出力するend --
});
