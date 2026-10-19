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
  const lineSegment = [];
  for (let i = 0; i < inputNumbers.length; i++) {
    const seg = inputNumbers[i].split(" ").map(Number);
    lineSegment.push(seg);
  }
  // -- 入力値を変数に変換end --

  // -- 隣接リストを作成する --
  const graph = Array.from({ length: vertex + 1 }, () => []);
  for (const [verA, verB] of lineSegment) {
    graph[verA].push(verB);
    graph[verB].push(verA);
  }

  for (let j = 1; j < graph.length; j++) {
    graph[j].sort((a, b) => a - b);
  }
  // -- 隣接リストを作成する --

  // -- BFS --
  // -- 訪問管理と、処理待ち配列の作成 --
  const visited_bfs = Array(vertex + 1).fill(false);
  visited_bfs[start] = true;

  const queue = [];
  queue.push(start);

  // -- 必要な変数など --
  let dx = 0; // インデックス番号管理
  let bfs_count = 0; // 訪問カウント
  let stopper_bfs = false; // ストップ用変数

  // -- 本体 --
  while (dx < queue.length) {
    if (stopper_bfs) break;
    const current_bfs = queue[dx++];

    // -- 次の頂点に繋がる頂点を小さい方からチェックする --
    for (const next_bfs of graph[current_bfs]) {
      if (stopper_bfs) break;

      // -- 調査中の頂点が、訪問済みならスキップ、未訪問なら、訪問回数を+1、訪問済みにする --
      if (visited_bfs[next_bfs]) continue;
      bfs_count++;
      visited_bfs[next_bfs] = true;

      // -- 調査中の頂点が目的地に着くなら、処理を停止。つかない時は、処理待ちの後ろに追加 --
      if (next_bfs === goal) {
        stopper_bfs = true;
        break;
      } else {
        queue.push(next_bfs);
      }
    }
  }
  // -- BFSend --

  // -- DFS --
  // -- 訪問管理と、処理待ち配列の作成 --
  const visited_dfs = Array(vertex + 1).fill(false);
  visited_dfs[start] = true;

  const stack = [];
  stack.push(start);

  // -- 必要な変数など --
  let dfs_count = 0; // 訪問回数管理
  let stopper_dfs = false; // ストップ用変数

  // -- 本体 --
  while (stack.length > 0) {
    if (stopper_dfs) break;

    // -- 現在の検査対象をみつける --
    let found = false;
    // -- 次の頂点を調査するときは、popすると今後使えなくなってしまうので、length -1 にすることで、要素を削除せずに一番後ろを保証する --
    const current_dfs = stack[stack.length - 1];

    // -- 次の頂点を見つける --
    for (const next of graph[current_dfs]) {
      if (stopper_dfs) break;
      // -- 次の頂点が到達済みの時、スキップする --
      if (visited_dfs[next]) continue;

      // -- 次の頂点に行けるとき、カウントを増加し、訪問済みにする --
      dfs_count++; // 未訪問頂点に注目
      visited_dfs[next] = true;

      // -- 次の頂点がゴールの時、処理を停止 --
      if (next === goal) {
        stopper_dfs = true;
        break;
      } else {
        // -- 次の頂点を処理候補に追加し、見つけた判定にする --
        stack.push(next);
        found = true;
        break;
      }
    }
    // -- 見つからない時、1つ要素を削除し、再調査する --
    if (!found) {
      stack.pop(); // popは今後要素を使わないことが保証されたときのみ、使用する。
    }
  }
  // -- DFSend --

  // -- 結果を出力する --
  if (bfs_count === dfs_count) {
    console.log("same");
  } else if (bfs_count < dfs_count) {
    console.log("bfs");
  } else if (bfs_count > dfs_count) {
    console.log("dfs");
  }
  // -- 結果を出力するend --
});
