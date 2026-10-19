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
  const inputNumbers = lines.slice(1, lines.length);
  const lineSegment = [];
  for (let i = 0; i < inputNumbers.length; i++) {
    const seg = inputNumbers[i].split(" ").map(Number);
    lineSegment.push(seg);
  }
  // -- 入力値を変数に変換 --

  // -- DFSを効率的にするために隣接リストを作成する --
  const graph = Array.from({ length: vertex + 1 }, () => []);
  for (const [verA, verB] of lineSegment) {
    graph[verA].push(verB);
    graph[verB].push(verA);
  }

  for (let j = 0; j < graph.length; j++) {
    graph[j].sort((a, b) => a - b);
  }
  // -- DFSを効率的にするために隣接リストを作成するend --

  // -- マスが訪問済みかチェックする --
  const visited = Array(vertex + 1).fill(false);
  // -- マスが訪問済みかチェックするend --

  // -- DFSをする --
  const stack = [];
  stack.push(start);

  while (stack.length > 0) {
    // -- 候補から出すときは、後ろから --
    const v = stack.pop();

    // -- 訪問済みならスキップ、未訪問なら、出力し、訪問済みにする --
    if (visited[v]) continue;
    console.log(v);
    visited[v] = true;

    // -- 処理候補の投入方法は、後ろから投入 --
    for (let index = graph[v].length - 1; index >= 0; index--) {
      // -- 処理候補の投入は後ろから --
      stack.push(graph[v][index]);
    }
  }
  // -- DFSをするend --
});
