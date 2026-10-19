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
  // -- 入力 → 変数--
  const numbers = lines.slice(0).map((n) => n.split(" ").map(Number));

  // -- 累積和配列を作成する --

  // 1、今回は数列が正方形であることが保証されているので、同じ大きさでOK。数列 + 1の正方形を作成。
  const perfix = Array.from({ length: numbers.length + 1 }, () => Array(numbers.length + 1).fill(0));

  // 2、初期値は1、最終値は数列の長さまで、0は初期値を保証するためそのままにする。
  for (let i = 1; i <= numbers.length; i++) {
    for (let j = 1; j <= numbers[i - 1].length; j++) {
      // 現在までの合計は、上の要素 + 左の要素 - 左上の要素 + 現在の増加値
      perfix[i][j] = perfix[i - 1][j] + perfix[i][j - 1] - perfix[i - 1][j - 1] + numbers[i - 1][j - 1];
    }
  }

  // -- 四角形を配置し、中身の合計を調べる --
  const left = 1;
  const right = 3;

  // 出し方は、右下 - 上 - 左 + 左上
  const output = perfix[right + 1][right + 1] - perfix[left][right + 1] - perfix[right + 1][left] + perfix[left][left];
  console.log(output);
});
