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
  const numbers = lines[0].split(" ").map(Number);

  // -- 累積和配列を作成 --
  const perfix = new Array(numbers.length + 1).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    perfix[i + 1] = perfix[i] + numbers[i];
  }

  // -- 要素を出力 --
  const left = 2;
  const right = 7;
  // -- 部分列の和の出し方は、累積和配列の右の要素 + 1 - 左の要素 --
  const total = perfix[right + 1] - perfix[left];
  console.log(total);
});
