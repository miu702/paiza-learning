/*
数列 A についての情報が与えられるので、 1 ~ N の各 i について、和 S_i = A_1 + ... + A_i を求めてください。


入力される値
N       
A_1 A_2 ... A_N


・ 1 行目には、数列 A の要素数 N が与えられます。
・ 2 行目には、数列 A の各要素 A_1, A_2 ... A_N が与えられます。


期待する出力
N 行の出力

・S_i(1 ≦ i ≦ N) を出力してください。


S_1     
...     
S_N

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
  const [N, ...numbers] = lines.join(" ").split(/\s+/).map(Number);

  // -- 累積和を計算する --
  let total = 0;
  for (const number of numbers) {
    total += number;
    console.log(total);
  }
});
