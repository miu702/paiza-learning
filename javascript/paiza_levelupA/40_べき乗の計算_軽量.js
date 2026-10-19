/*
整数 N が与えられるので、2 の N 乗を 1000003 で割った余り を求めてください。

入力される値
N


期待する出力
1 行の出力
・ 2 の N 乗を 1000003 で割った余り M を出力してください。
M

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
  const base = 2n;
  const exponent = BigInt(lines[0]);
  const mod = 1000003n;
  // -- 入力 → 変数 --

  // -- 素数チェック --
  function isPrime(n) {
    if (n < 2) return false;
    const sqrt = Math.floor(Math.sqrt(`${n}`));
    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) return false;
    }

    return true;
  }

  const check1 = isPrime(`${base}`);
  const check2 = isPrime(`${mod}`);
  if (!check1 || !check2) {
    console.error("計算できません。");
    return;
  }

  // -- まず、べき乗に使用する数を小さくする。この方法はbase、modが素数であることが前提 --
  const referenceValue = 1000002n;
  const rest = exponent % referenceValue;

  // -- あまりを求める --
  function modPow(base, rest, mod) {
    let result = 1n;

    // -- 数値を小さくする --
    while (rest > 0n) {
      // -- 奇数の時、現在の数値×現在のベースの数 ÷ 基準値(大きくなることを防ぐ) --
      if (rest % 2n === 1n) result = (result * base) % mod;
      // ベース値を上昇
      base = (base * base) % mod;
      // ビットをずらす
      rest >>= 1n;
    }

    return result;
  }

  const answer = modPow(base, rest, mod);
  console.log(`${answer}`);
});
