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
  // -- 数列を作成 --
  const numbers = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
    [5, 6, 7, 8, 9],
  ];

  // -- 合計用配列を作成 --
  const totals = Array.from({ length: 5 + 1 }, () => Array(5 + 1).fill(0));

  // スタート値は1、最終値は、数列の長さ。
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      // 例えば、2×2の合計は、1つ上の合計値 + 1つ左の合計値 - 1つ左上の合計値 + 現在の数値で求めることができる。
      totals[i][j] = totals[i - 1][j] + totals[i][j - 1] - totals[i - 1][j - 1] + numbers[i - 1][j - 1];
    }
  }

  // -- エリアを確定し、求める --
  const left = 1;
  const right = 3;

  // 累積和配列でここからここまでを求めるときは、ここからはそのまま使用し、ここまでは + 1する。

  // 右下 - 上 - 左 + 左上
  const output = totals[right + 1][right + 1] - totals[left][right + 1] - totals[right + 1][left] + totals[left][left];
  console.log(output);
});
