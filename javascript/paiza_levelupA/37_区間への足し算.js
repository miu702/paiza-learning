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
  // -- 入力 → 変数をする --
  const [N, M] = lines[0].split(" ").map(Number);
  const numbers = lines[1].split(" ").map(Number);
  const queries = lines.slice(2).map((q) => q.split(" ").map(Number));
  // -- 入力 → 変数をする --

  // -- 変化させる用の配列を作成する --
  const calculation = new Array(N).fill(0);
  // -- 変化させる用の配列を作成する --

  // -- 計算する --
  for (const [start, goal, change] of queries) {
    // -- インデックス番号用に数値調整 --
    const startIndex = start - 1;
    const goalIndex = goal - 1;

    // -- 変化用配列を変化させる --
    for (let i = startIndex; i <= goalIndex; i++) {
      calculation[i] += change;
    }
  }
  // -- 計算する --

  // -- 計算結果を作成する --
  const output = [];
  for (let j = 0; j < N; j++) {
    const total = numbers[j] + calculation[j];
    output.push(total);
  }

  console.log(output.join("\n"));
});
