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
  const [vertex, start] = lines[0].split(" ").map(Number);
  const inputLine = lines.slice(1, lines.length);
  const lineSegment = [];
  for (let i = 0; i < inputLine.length; i++) {
    const segment = inputLine[i].split(" ").map(Number);
    lineSegment.push(segment);
  }
  // -- 入力値を変数に変換end --

  // 頂点番号が1〜Nなので、その番号をそのままインデックスとして使うために+1している。(最大値 + 1)
  const graph = Array.from({ length: vertex + 1 }, () => []);

  // -- 辺の端に目的の頂点が含まれているかをチェックする --
  for (const [verA, verB] of lineSegment) {
    // 変数名[インデックス番号]の形になり、push(追加)されている。なので、頂点番号に繋がっているリストを作ることができる。
    graph[verA].push(verB);
    graph[verB].push(verA);
  }
  // -- 辺の端に目的の頂点が含まれているかをチェックするend --

  // -- それぞれの頂点に到達した距離をチェックする --
  const dist = Array(vertex + 1).fill(-1);
  dist[start] = 0;
  // -- それぞれの頂点に到達した距離をチェックするend --

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

  const just = [];
  const target = 3;
  for (let j = 0; j < dist.length; j++) {
    if (dist[j] === target) just.push(j);
  }

  just.sort((a, b) => a - b);
  console.log(just.join("\n"));
});
