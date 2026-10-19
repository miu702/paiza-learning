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
  const [N, left, right, ...numbers] = lines.join(" ").split(/\s+/).map(Number);

  // -- 偶奇で数値変更 --
  const switchArray = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] % 2 === 0 ? switchArray.push(1) : switchArray.push(0);
  }

  // -- 累積和配列を作成する --
  const perfix = new Array(numbers.length + 1).fill(0);
  for (let j = 0; j < numbers.length; j++) {
    perfix[j + 1] = perfix[j] + switchArray[j];
  }

  // -- 結果を出力する --
  const output = perfix[right + 1] - perfix[left];
  console.log(output);
});
