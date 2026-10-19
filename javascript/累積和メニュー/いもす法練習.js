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
  const [N, K] = lines[0].split(" ").map(Number);
  if (isNaN(N) || isNaN(K)) {
    console.error("2次元配列の大きさと、処理回数が数値で入力されていません。");
    return;
  }
  if (N < 2 || N > 100000) {
    console.error("2次元配列の大きさが不正です。※大きさは2~10万の間である必要があります。");
    return;
  }

  if (K < 1 || K > 100000) {
    console.error("2次元配列上の数値を増減できる回数が不正です。※指定できる回数は、1~10万の間である必要があります。");
    return;
  }

  const coordinate = lines.slice(1, K + 1).map((c) => c.split(" ").map(Number));
  if (K !== coordinate.length) {
    console.error("指定された入力回数と実際に入力された回数が一致しません。");
    return;
  }
  // -- 入力 → 変数end --

  // -- 累積和配列を作成する --
  const perfix = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
  for (const [a, b, c, d, change] of coordinate) {
    // -- 処理可能な数値かチェック --
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(change)) {
      console.error("増減させるエリアの指定と、増減値の入力は数値である必要があります。");
      return;
    }

    if (a < 1 || a > N) {
      console.error("左上を指定するY座標が不正です。");
      return;
    }

    if (b < 1 || b > N) {
      console.error("左上を指定するX座標が不正です。");
      return;
    }

    if (c < 1 || c > N) {
      console.error("右下を指定するY座標が不正です。");
      return;
    }

    if (d < 1 || d > N) {
      console.error("右下を指定するX座標が不正です。");
      return;
    }

    if (a > c || b > d) {
      console.error("入力が不正なため、エリアが四角形になっていません。");
      return;
    }

    // indexに対応
    const aIndex = a - 1;
    const bIndex = b - 1;
    const cIndex = c - 1;
    const dIndex = d - 1;

    //  4か所のマッピング座標を作成
    perfix[aIndex][bIndex] += change; // 左上
    perfix[aIndex][dIndex + 1] -= change; // 右上
    perfix[cIndex + 1][dIndex + 1] += change; // 右下
    perfix[cIndex + 1][bIndex] -= change; // 左下
  }

  // -- マッピングを広げる --
  // 左を参考に塗る
  for (let i = 0; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      perfix[i][j] += perfix[i][j - 1];
    }
  }

  // 上を参考に塗る
  for (let j = 0; j <= N; j++) {
    for (let i = 1; i <= N; i++) {
      perfix[i][j] += perfix[i - 1][j];
    }
  }

  // -- 最大値をチェックする --
  let max = -Infinity;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (max < perfix[i][j]) max = perfix[i][j];
    }
  }
  console.log(max);
});
