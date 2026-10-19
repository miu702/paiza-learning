/*
数列 A の要素数 N とクエリの数 M , 数列 A の要素 A_1, A_2 ... A_N が与えられます。
続けて、クエリに用いる数 l_i, u_i, a_i が与えられます。

各クエリについて次の処理を行ってください。

・ 要素番号が、l_i 以上、u_i 以下の全ての A の要素に、a_i を足す。

全てのクエリについて処理を終えた後の A の各要素を出力してください。


入力される値
N M                
A_1 A_2 ... A_N         
l_1 u_1 a_1         
...         
l_M u_M a_M


・ 1 行目には、数列 A の要素数 N と、条件に使う整数 M が与えられます。
・ 2 行目には、数列 A の各要素 A_1, A_2 ... A_N が与えられます。
・ 続く M 行には、各クエリの処理に用いる整数 l_i, u_i, a_i (1 ≦ i ≦ M) が与えられます。


期待する出力
N 行の出力

・ 処理を終えた後の数列 A の要素を N 行で出力してください。


A_1    
...     
A_N


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
  // -- 入力 → 変数をする --
  const [N, M] = lines[0].split(" ").map(Number);
  const numbers = lines[1].split(" ").map(Number);
  const queries = lines.slice(2).map((q) => q.split(" ").map(Number));
  // -- 入力 → 変数をする --

  // -- 変化させる用の配列を作成する --
  const diff = new Array(N + 1).fill(0);
  // -- 変化させる用の配列を作成する --

  // -- 計算する --

  // 20万→0.22s
  for (const [start, goal, change] of queries) {
    // -- インデックス番号用に数値調整 --
    const startIndex = start - 1;
    const goalIndex = goal - 1;

    // 差分配列を変化させる。startIndexはそのまま投入。goalIndexはインデックス番号 + 1して投入。
    diff[startIndex] += change;
    diff[goalIndex + 1] -= change;
    // -- 変化用配列を変化させる --
  }
  // diff = 等差数列の公差と同じ考え。

  // -- 計算する --

  // -- 計算結果を作成する --
  // 20万
  const output = [];
  let current = 0;
  for (let k = 0; k < N; k++) {
    current += diff[k];
    const total = numbers[k] + current;
    output.push(total);
    // current = 変化量。元の数列と足すことで計算している。
  }
  console.log(output.join("\n"));
});
