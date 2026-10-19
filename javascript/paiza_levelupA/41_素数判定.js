/*
整数 N が与えられるので、N が素数の場合は "YES" , そうでない場合は "NO" を出力してください。

入力される値
N
・ 整数 N が 1 行で与えられます。

期待する出力
・ N が素数である場合には "YES" そうでない場合は "NO" を出力してください。
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
  const number = Number(lines[0]);

  // -- 数値チェック --
  if (isNaN(number)) {
    console.error("入力値は数値ではありません。");
    return;
  }

  // -- 素数判定法 --
  function isPrime(n) {
    if (n < 2) return false;

    const sqrt = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) return false;
    }

    return true;
  }

  // -- 出力する --
  const check = isPrime(number);
  console.log(check ? "YES" : "NO");
});
