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
  const [limit, ...numbers] = lines.join(" ").split(/\s+/).map(Number);
  // -- 入力 → 変数end --

  // -- 尺取り法を実施する --
  let sum = 0;
  let max = -Infinity;
  let right = 0;
  for (let left = 0; left < numbers.length; left++) {
    while (sum <= limit && right <= numbers.length) {
      max = Math.max(max, right - left);
      sum += numbers[right];
      right++;
    }

    sum -= numbers[left];
  }
  // -- 尺取り法を実施するend --

  // -- 出力する --
  console.log(max === -Infinity ? -1 : max);
});
