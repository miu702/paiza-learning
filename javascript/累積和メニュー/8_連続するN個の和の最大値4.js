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
  // -- 数列を定義 --
  const [N, quantity, ...numbers] = lines.join(" ").split(/\s+/).map(Number);

  // -- 累積和配列を作成 --
  const perfix = new Array(numbers.length + 1).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    perfix[i + 1] = perfix[i] + numbers[i];
  }

  // -- 部分列の塊を作る。(処理回数の最大は累積和配列 - 部分列の長さ) --
  const candidate = [];
  for (let s = 0; s < perfix.length - quantity; s++) {
    const g = s + quantity;
    const portion = perfix[g] - perfix[s];
    candidate.push(portion);
  }

  // -- 部分列の最大を出力する --
  let max = -Infinity;
  for (const parts of candidate) {
    max = Math.max(max, parts);
  }
  console.log(max);
});
