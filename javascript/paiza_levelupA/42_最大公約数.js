/*
整数 A , B が与えられるので、 A と B の最大公約数を出力してください。

入力される値
A B


・ 最大公約数を求める 2 つの整数 A , B が 1 行で与えられます。

期待する出力
1 行の出力

・ A と B の最大公約数 g を 1 行で出力してください。
g
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
  const [n1, n2] = lines[0].split(" ").map(Number);
  if (isNaN(n1) || isNaN(n2)) {
    console.error("2つの入力値は両方数値である必要があります。");
    return;
  }

  if (n1 < 1 || n1 > 10000000000 || n2 < 1 || n2 > 10000000000) {
    console.error("判断できる値は、1~100億です。");
    return;
  }
  const A = Math.max(n1, n2);
  const B = Math.min(n1, n2);

  // -- ユークリッドの互除法を実施する。 --
  let current = A; // 現在の数値
  let divisor = B; // 割る数
  let quotient; // 商
  let rest; // あまり

  let move = true;
  while (move) {
    // -- 計算を実施 --
    quotient = Math.floor(current / divisor);
    rest = Math.floor(current % divisor);

    // -- 余りが0の時、処理を停止 --
    if (rest === 0) {
      move = false;
    } else {
      current = divisor;
      divisor = rest;
    }
  }
  console.log(divisor);
});
