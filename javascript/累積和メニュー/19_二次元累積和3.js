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
  const [A, B] = lines[0].split(" ").map(Number);
  const numbers = lines.slice(1).map((n) => n.split(" ").map(Number));

  // -- 累積和配列を作成する。長さは元の数列の長さ + 1。 --
  const perfix = Array.from({ length: numbers.length + 1 }, () => Array(numbers.length + 1).fill(0));

  for (let i = 1; i <= numbers.length; i++) {
    for (let j = 1; j <= numbers.length; j++) {
      /*
        累積和配列(ここまでの合計 = 杭を打つ)
        perfix[i][j](ここまでの合計) = 
        perfix[i - 1][j](1つ上までの合計) + perfix[i][j - 1](1つ左までの合計) - perfix[i - 1][j](1つ左上までの合計) + numbers[i - 1][j - 1](次に足す数)
      */
      perfix[i][j] = perfix[i - 1][j] + perfix[i][j - 1] - perfix[i - 1][j - 1] + numbers[i - 1][j - 1];
    }
  }

  // -- 区間内の合計値を求める --
  const others = 3;
  // 区間内の合計値 = 累積和配列(合計) - 累積和配列(不要1) - 累積和配列(不要2) + 累積和配列(消しすぎを補正)
  const output = perfix[B + 1][others + 1] - perfix[A][others + 1] - perfix[B + 1][others] + perfix[A][others];
  console.log(output);
});
