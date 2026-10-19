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
  const [N, left, right] = lines[0].split(" ").map(Number);
  const words = lines[1].split("");

  // -- 対象の数を数える --
  const switchArray = [];
  for (const w of words) {
    w === "b" ? switchArray.push(1) : switchArray.push(0);
  }

  // -- 累積和配列を作成する --
  const perfix = new Array(words.length + 1).fill(0);
  for (let i = 0; i < words.length; i++) {
    perfix[i + 1] = perfix[i] + switchArray[i];
  }

  // -- 出力をする(今回はleft~rightなので、インデックス番号の関係でleft - 1とする) --
  const output = perfix[right] - perfix[left - 1];
  console.log(output);
});
