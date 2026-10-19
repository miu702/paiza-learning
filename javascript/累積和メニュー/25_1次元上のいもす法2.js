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
  // -- 範囲 --
  const range = lines.slice(0).map((r) => r.split(" ").map(Number));

  // -- 数値の変化表(杭のイメージなので、数列の要素数 + 1) --
  const numbers = Array(10 + 1).fill(0);
  for (const [left, right] of range) {
    // -- インデックス番号に対応 --
    const leftIndex = left - 1;
    const rightIndex = right - 1;

    // -- 左右の数値を変化 --
    numbers[leftIndex]++;
    numbers[rightIndex + 1]--;
  }

  // -- 変化の結果を作る --
  let count = 0;
  const output = [];
  for (const number of numbers) {
    count += number;
    output.push(count);
  }
  console.log(Math.max(...output));
});
