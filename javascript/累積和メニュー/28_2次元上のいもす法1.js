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
  const height = 5;
  const width = 5;
  const coordinate = [
    [1, 1, 3, 3],
    [2, 2, 4, 4],
    [3, 3, 5, 5],
    [1, 3, 3, 5],
    [3, 1, 5, 3],
  ];
  // -- 入力 → 変数end --

  // -- 累積和配列を作成する --
  const perfix = Array.from({ length: height + 1 }, () => Array(width + 1).fill(0));

  // -- 増減の仕方をマッピングする --
  for (const [a, b, c, d] of coordinate) {
    // -- インデックスに対応 --
    const aDx = a - 1;
    const bDx = b - 1;
    const cDx = c - 1;
    const dDx = d - 1;

    // -- 累積和配列を変更 --
    perfix[aDx][bDx]++;
    perfix[aDx][dDx + 1]--;
    perfix[cDx + 1][bDx]--;
    perfix[cDx + 1][dDx + 1]++;
  }

  // -- 計算を実施する --

  // -- 横方向に塗る。メモで確認すると、1列状に数値が並ぶ。 --
  for (let i = 0; i <= height; i++) {
    /*
            1からスタートするのは、forの動き方とマッピングの仕様。
            1は0の数値を塗るので、1 += 0になる。 0が3、1が0だと、0、1も3になる。
            仮に0からスタートすると、0 += 1になる。0が3、1が0だと、0、1も0になる。
        */
    // -1を使用するから、1からスタートする。
    for (let j = 1; j <= width; j++) {
      // 今のマスは1つ前のマスに参考に広げる。
      perfix[i][j] += perfix[i][j - 1];
    }
  }

  // -- 縦方向に塗る。メモで確認すると、1列状に数値が並んだ物を広げる。 --
  for (let j = 0; j <= width; j++) {
    for (let i = 1; i <= height; i++) {
      perfix[i][j] += perfix[i - 1][j];
    }
  }

  // -- 最大値を検索する --
  let max = -Infinity;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (max < perfix[i][j]) max = perfix[i][j];
    }
  }
  console.log(max);
});
