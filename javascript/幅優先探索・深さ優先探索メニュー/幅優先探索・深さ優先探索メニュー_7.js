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
  // -- 入力値を変数に変換 --
  const [vertex, target] = lines[0].split(" ").map(Number);
  const inputLine = lines.slice(1, lines.length);
  const lineSegment = [];
  for (let i = 0; i < inputLine.length; i++) {
    const segment = inputLine[i].split(" ").map(Number);
    lineSegment.push(segment);
  }
  // -- 入力値を変数に変換end --

  // -- 辺の端に目的の頂点が含まれているかをチェックする --
  const passing = [];
  for (const [verA, verB] of lineSegment) {
    if (verA === target) {
      passing.push(verB);
    } else if (verB === target) {
      passing.push(verA);
    }
  }
  // -- 辺の端に目的の頂点が含まれているかをチェックするend --

  // -- 結果を破壊せずにsortする --
  const passingSort = Array.from(passing).sort((a, b) => a - b);
  // -- 結果を破壊せずにsortするend --

  console.log(passingSort.join("\n"));
});
