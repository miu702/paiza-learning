/*
整数 N ,K が与えられるので、規則的な無限数列 A = [1 , 0 , -1 , 1 , 0 , -1 , ... ] の 
N 要素目から K 要素目までの和を求めてください。　

入力される値
N K
・ 2 つの整数 N , K が半角スペース区切りで 1 行で入力されます。


期待する出力
1 行の出力

・ A の N 要素目から K 要素目までの和 S を 1 行で出力してください。
S
*/
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
  const [left, right] = lines[0].split(" ").map(Number);
  const leftIndex = left - 1;
  const rightIndex = right - 1;
  // -- 入力 → 変数end --

  // -- 力技(3つでワンセットなので、左右がどこに位置しているかで操作する) --
  const p1 = leftIndex % 3 === 0 ? 0 : -1;
  const p2 = rightIndex % 3 === 2 ? 0 : 1;
  // -- 力技end --

  // -- 出力 --
  const output = p1 + p2;
  console.log(output);
});
