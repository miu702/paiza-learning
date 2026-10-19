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
  const [height, width, moveLimit] = lines[0].split(" ").map(Number);
  const inputNumbers = lines.slice(1);
  const board = [];
  for (let i = 0; i < inputNumbers.length; i++) {
    const boa = inputNumbers[i].split(" ").map(Number);
    board.push(boa);
  }
  // -- 入力値を変数に変換end --

  // -- マス上での移動方法を記述 --
  const dirction = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
  };
  // -- マス上での移動方法を記述end --

  // -- マスの移動履歴を管理する --
  let visited = Array.from({ length: height }, () => Array(width).fill(false));
  // -- マスの移動履歴を管理するend --

  // -- スタートから順番に調査し、最大値を検索する --
  const top = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;

  let max = 0;
  let sum = 0;

  for (let sy = 0; sy < height; sy++) {
    for (let sx = 0; sx < width; sx++) {
      // -- 探索の初期地点を作成する --

      visited[sy][sx] = true;
      dfs(sy, sx, 0, board[sy][sx]);
      visited[sy][sx] = false;
    }
  }

  function dfs(y, x, step, coins) {
    max = Math.max(max, coins);

    if (step === moveLimit) return;

    // -- 指定された回数探索する --
    for (const [dirY, dirX] of Object.values(dirction)) {
      const ny = y + dirY;
      const nx = x + dirX;

      if (ny < top || ny > buttom || nx < left || nx > right) continue;
      if (visited[ny][nx]) continue;

      visited[ny][nx] = true;
      dfs(ny, nx, step + 1, coins + board[ny][nx]);
      visited[ny][nx] = false;
    }
  }
  console.log(max);
  // -- スタートから順番に調査し、最大値を検索するend --
});
