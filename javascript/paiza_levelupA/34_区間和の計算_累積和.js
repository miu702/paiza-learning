/*
数列 A とクエリの数について情報が与えられるので、各クエリに答えてください。

・ クエリ
整数 l , u が与えられるので、A_l から A_u までの総和 S_i を出力してください。


入力される値
N        
A_0 A_1 ... A_(N-1)     
n       
l_1 u_1     
...     
l_n u_n


・ 1 行目には、数列 A の要素数 N と、条件に使う整数 K が与えられます。
・ 2 行目には、数列 A の各要素 A_1, A_2 ... A_N が与えられます。
・ 3 行目には、クエリの数 n が与えられます。
・ 続く n 行には、各クエリに用いる整数 l_i u_i (1 ≦ i ≦ n) が与えられます。


期待する出力
n 行の出力

・ 各クエリの答えを順に出力してください。


S_1     
...     
S_n


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
  const N = Number(lines[0]);
  const numbers = lines[1].split(" ").map(Number);
  const query = Number(lines[2]);
  const queries = lines.slice(3).map((q) => q.split(" ").map(Number));
  // -- 入力 → 変数 --

  // -- 累積和配列を作成する --
  const prefix = new Array(numbers.length + 1).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    prefix[i + 1] = prefix[i] + numbers[i];
  }
  // -- 累積和配列を作成するend --

  // -- 区間和の計算をする(先述した、start、endの考えかたが使えるかも) --
  const totalList = [];
  for (const [left, right] of queries) {
    // -- 累積和配列のright + 1 - leftすることで、left ~ right の足し算の答えが出せる --
    const total = prefix[right + 1] - prefix[left];
    totalList.push(total);
  }
  // -- 区間和の計算をする(先述した、start、endの考えかたが使えるかも)end --

  // -- まとめて出力 --
  console.log(totalList.join("\n"));
});
