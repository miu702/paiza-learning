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

  // -- 探索条件に昇順に調査するとあるので、処理前に昇順にする --
  for (let j = 1; j < graph.length; j++) {
    graph[j].sort((a, b) => a - b);
  }
  // -- 隣接リストを作成するend --

  // -- それぞれの頂点に対して、訪問確認をする --
  const visited = Array(vertex + 1).fill(false);
  visited[start] = true;
  // -- それぞれの頂点に対して、訪問確認をするend --

  // -- DFSする --
  // -- 処理の候補 --
  const stack = [];
  stack.push(start);

  // -- 道順をまとめて管理 --
  const route = [];
  route.push(start);

  // -- 処理候補がなくなる = 処理できなくなるまで、処理する --
  while (stack.length > 0) {
    // -- DFSは現在のマスから処理できない時popするので、見つかったか？の変数を準備する --
    let found = false;
    // -- 検索候補を調べるときは、pop(削除)せずに、要素数-1で一番最後の要素を確定させる --
    const v = stack[stack.length - 1];

    // -- graph[v]とは、隣接リストの次の移動候補。それをfor-ofで前から検索する --
    for (const next of graph[v]) {
      // -- もし、移動候補が移動済みの時、スキップする--
      if (visited[next]) continue;

      // -- 移動候補に移動できるときは移動して、移動済みにする。--
      route.push(next);
      stack.push(next);
      visited[next] = true;

      // -- 移動できる = 見つかったか？の変数をtrueにして、以降の処理を打ち切る --
      found = true;
      break;
    }

    // -- もし、現在のマスから移動できない時、現在の要素を削除する --
    if (!found) stack.pop();
  }
  // -- DFSするend --

  // -- 道順を出力する --
  console.log(route.join("\n"));
  // -- 道順を出力するend --
});
