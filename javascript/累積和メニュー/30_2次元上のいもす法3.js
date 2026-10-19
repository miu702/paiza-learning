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
  const coordinate = lines.slice(0).map((c) => c.split(" ").map(Number));
  // -- 入力 → 変数end --

  // -- 累積和配列を作成する --
  const height = 5;
  const width = 5;
  const perfix = Array.from({ length: height + 1 }, () => Array(width + 1).fill(0));
  for (const [a, b, c, d] of coordinate) {
    // indexに対応
    const aIndex = a - 1;
    const bIndex = b - 1;
    const cIndex = c - 1;
    const dIndex = d - 1;

    //  4か所のマッピング座標を作成
    perfix[aIndex][bIndex]++; // 左上
    perfix[aIndex][dIndex + 1]--; // 右上
    perfix[cIndex + 1][dIndex + 1]++; // 右下
    perfix[cIndex + 1][bIndex]--; // 左下
  }

  // -- マッピングを広げる --
  // 左を参考に塗る
  for (let i = 0; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      perfix[i][j] += perfix[i][j - 1];
    }
  }

  // 上を参考に塗る
  for (let j = 0; j <= width; j++) {
    for (let i = 1; i <= height; i++) {
      perfix[i][j] += perfix[i - 1][j];
    }
  }

  // -- 最大値をチェックする --
  let max = -Infinity;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (max < perfix[i][j]) max = perfix[i][j];
    }
  }
  console.log(max);
});
