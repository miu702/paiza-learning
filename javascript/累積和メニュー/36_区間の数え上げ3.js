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
  let left = 0;
  let sum = 0;
  let count = 0;
  for (let right = 0; right < numbers.length; right++) {
    // -- 右側に広げる --
    sum += numbers[right];

    // -- 基準値を超えたら、左側を縮める --
    while (sum > limit) {
      sum -= numbers[left];
      left++;
    }

    // -- 現在の部分列を記録する --
    count += right - left + 1;
  }
  console.log(count);
});
