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
  const [vertex, lineSegment] = lines[0].split(" ").map(Number);
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
  // -- 隣接リストを作成するend --

  // -- マスの状態を管理する --
  const visited = Array(vertex + 1).fill(false); // true = 移動済み、false = 未訪問
  // -- マスの状態を管理するend --

  // -- 今回は深さ幅探索をする --
  const stack = [];

  // -- スキップされない = カウントされていない数値の塊の1つなので、スキップを通過したものをカウントする --
  let group = 0;
  // -- 頂点番号1からスタートする --
  for (let start = 1; start <= vertex; start++) {
    if (visited[start]) continue;
    stack.push(start);
    visited[start] = true;

    // -- カウント先 --
    group++;

    while (stack.length > 0) {
      let found = false;
      const v = stack[stack.length - 1];

      // -- 次の移動候補に対して、処理する --
      for (const next of graph[v]) {
        if (visited[next]) continue;
        // -- 未訪問なら、訪問済みにする、次の探索候補に入れる --
        visited[next] = true;
        stack.push(next);
        found = true;
        break;
      }

      if (!found) stack.pop();
    }
  }
  // -- 今回は深さ優先探索をするend --

  // -- グループの数を出力する --
  console.log(group);
});
