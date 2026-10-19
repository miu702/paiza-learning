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
  const merchandises = lines.slice(1).map((m) => m.split(" "));
  // -- 入力 → 変数end --

  // -- 棚の様子をシュミレーションする --
  const queue = [];
  let dx = 0;

  for (const [type, numberStr] of merchandises) {
    if (!(type === "add" || type === "buy")) {
      console.error(`不正なコマンド${type}が含まれています。`);
      return;
    }
    const number = Number(numberStr);
    type === "add" ? addMerchandises(number) : buyMerchandises(number);
  }

  function addMerchandises(number) {
    queue.push(number);
  }

  function buyMerchandises(number) {
    while (number > 0) {
      dx++;
      number--;
    }
  }
  // -- 棚の様子をシュミレーションするend --

  // -- 棚の最終形を出力する --
  const outputMerchandises = queue.slice(dx, queue.length);
  console.log(outputMerchandises.join("\n"));
});
