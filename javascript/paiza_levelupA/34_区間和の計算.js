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
  const N = Number(lines[0]);
  const numbers = lines[1].split(" ").map(Number);
  const query = Number(lines[2]);
  const queries = lines.slice(3).map((q) => q.split(" ").map(Number));
  // -- 入力 → 変数 --

  // -- 区間和の計算をする(先述した、start、endの考えかたが使えるかも) --
  for (const [start, end] of queries) {
    // 区間和を計算するための初期値を作成
    let total = 0;

    // -- start → goalで足し算をする --
    for (let i = start; i <= end; i++) {
      total += numbers[i];
    }

    // 結果を出力する
    console.log(total);
  }
  // -- 区間和の計算をする(先述した、start、endの考えかたが使えるかも)end --
});
