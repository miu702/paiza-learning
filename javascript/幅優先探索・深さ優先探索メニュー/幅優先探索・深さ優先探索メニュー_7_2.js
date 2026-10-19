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
  const [vertex, target] = lines[0].split(" ").map(Number);
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

  // -- 結果を破壊せずにsortする --
  const graphSort = Array.from(graph[target]).sort((a, b) => a - b);
  // -- 結果を破壊せずにsortするend --

  console.log(graphSort.join("\n"));
});
