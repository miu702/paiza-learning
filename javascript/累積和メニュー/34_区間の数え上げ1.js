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
  const limit = 15;
  // -- 入力 → 変数end --

  // -- 尺取り法を実施する --
  let total = 0;
  let left = 0;
  let count = 0;

  for (let right = 0; right < numbers.length; right++) {
    // -- 右の要素を合計値に増加 --
    total += numbers[right];

    while (total > limit) {
      // -- 左から要素を減少させる --
      total -= numbers[left];
      left++;
    }

    // -- right - left + 1で区間の長さを知ることができる --
    count += right - left + 1;
  }
  console.log(count);
});
