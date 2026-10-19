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
  // -- 入力 → 変数 --
  const [height, width] = lines[0].split(" ").map(Number);
  const sprinkler = Number(lines[1]);
  const sprinklerCoordinate = lines.slice(2).map((s) => s.split(" ").map(Number));
  // -- 入力 → 変数end --

  // -- 8マスの移動状態を作成する --
  const direction = {
    C: [0, 0],
    N: [-1, 0],
    NE: [-1, 1],
    E: [0, 1],
    SE: [1, 1],
    S: [1, 0],
    SW: [1, -1],
    W: [0, -1],
    NW: [-1, -1],
  };
  // -- 8マスの移動状態を作成するend --

  // -- 訪問済みかチェックする --
  const check = Array.from({ length: height }, () => Array(width).fill(false));
  // -- 訪問済みかチェックするend --

  // -- for-ofを使用してマスをチェックする --
  const top = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;

  let waterCount = 0;
  for (const [sy, sx] of sprinklerCoordinate) {
    for (const [dirY, dirX] of Object.values(direction)) {
      // -- -1することでインデックスに合わせる --
      const ny = sy - 1 + dirY;
      const nx = sx - 1 + dirX;

      // -- 条件に合致しない要素をスキップする --
      if (ny < top || ny > buttom || nx < left || nx > right) continue;
      if (check[ny][nx]) continue;

      // -- 要素を追加する --
      check[ny][nx] = true;
      waterCount++;
    }
  }
  // -- for-ofを使用してマスをチェックする --

  // -- 結果を出力する --
  console.log(waterCount);
});
