/*
お菓子製造工場で働いている Bob は、小分け販売のためにお菓子を分配する作業を行っています。


作業には、 M 種類の機械が用いられます。

i 種類目の機械は、積み込まれたお菓子を m_i 個の容器に均等に分配し、余りを排出します。


Bob は、作業効率を上げるために、排出される余りが最も少なくなるようなお菓子の分配方法を知りたいと思っています。 
ただし、このような分配方法が複数あった場合には、可能な限り小分け販売できるように、
分配される容器の総数が最も多くなる方法を優先したいと考えています。

N 個のお菓子を分配するとき、 Bob の考えに沿う機械はどれでしょうか？
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
  // 機械の数とお菓子の数を定義する
  const [machine, sweets] = lines[0].split(" ").map(Number);

  // 機械の情報を調査する
  const machine_info = [];
  for (let i = 1; i <= machine; i++) {
    const box = Number(lines[i]);
    const row = {};
    row.id = i;
    row.box = box;
    row.rest = sweets % box;

    machine_info.push(row);
  }

  // 全ての機械に対して、余りの最小値を見つける。
  let min_rest = Infinity;
  for (const M of machine_info) if (min_rest > M.rest) min_rest = M.rest;

  //　全ての機械に対して、余りの最小値を満たす機械をピックアップする
  const excellent = [];
  for (const A of machine_info) if (min_rest === A.rest) excellent.push(A);

  // 条件に沿って出力する
  if (excellent.length > 1) {
    // 優秀な機械が1つ以上なら、最も優秀な機械を出力する。

    // 完成する箱が最も多い機械を調査する
    let max_box = -Infinity;
    for (const E of excellent) if (max_box < E.box) max_box = E.box;

    // 完成する箱が最も多い機械のidを出力する
    for (const X of excellent) if (X.box === max_box) console.log(X.id);
  } else {
    // 優秀な機械が1つなら、そのまま出力する
    console.log(excellent[0].id);
  }
});
