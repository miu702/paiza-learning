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
  const divisor = 1000003n;
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
  const check2 = isPrime(`${divisor}`);
  if (!check1 || !check2) {
    console.error("計算できません。");
    return;
  }

  // -- まず、べき乗に使用する数を小さくする。この方法はbase、divisorが素数であることが前提 --
  const referenceValue = 1000002n;
  const rest = exponent % referenceValue;

  // -- あまりを求める --
  function modPow(base, rest, divisor) {
    let result = 1n;
    result = base ** rest % divisor;
    return result;
  }

  const answer = modPow(base, rest, divisor);
  console.log(`${answer}`);
});
