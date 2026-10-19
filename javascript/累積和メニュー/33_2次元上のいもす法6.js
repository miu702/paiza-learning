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
  const [N, M, K] = lines[0].split(" ").map(Number);
  const coordinate = lines.slice(1, K + 1).map((c) => c.split(" ").map(Number));
  // -- 入力 → 変数end --

  // -- 累積和配列を作成する --
  const perfix = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
  //   console.log(perfix);
  for (const [a, b, c, d] of coordinate) {
    // indexに対応
    const x1 = a - 1;
    const y1 = b - 1;
    const x2 = c - 1;
    const y2 = d - 1;

    //  4か所のマッピング座標を作成
    perfix[y1][x1]++; // 左上
    perfix[y1][x2 + 1]--; // 右上
    perfix[y2 + 1][x2 + 1]++; // 右下
    perfix[y2 + 1][x1]--; // 左下
  }

  // -- マッピングを広げる --
  // 左を参考に塗る
  for (let i = 0; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      perfix[i][j] += perfix[i][j - 1];
    }
  }

  // 上を参考に塗る
  for (let j = 0; j <= M; j++) {
    for (let i = 1; i <= N; i++) {
      perfix[i][j] += perfix[i - 1][j];
    }
  }

  // -- 最大値をチェックする --
  let max = -Infinity;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (max < perfix[i][j]) max = perfix[i][j];
    }
  }
  console.log(max);
});
