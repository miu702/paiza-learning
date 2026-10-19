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
  const [N, M] = lines[0].split(" ").map(Number);
  const [a, b, c, d] = lines[1].split(" ").map(Number);
  const numbers = lines.slice(2).map((n) => n.split(" ").map(Number));
  // -- 入力 → 変数end --

  // -- 累積和配列を作成(元の数列の長さ + 1) -- //
  const prefix = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      // -- 位置を指定 --
      const upper = prefix[i - 1][j];
      const left = prefix[i][j - 1];
      const leftUpper = prefix[i - 1][j - 1];
      const add = numbers[i - 1][j - 1];

      // -- 現在までの累積和 = 1つ上までの合計 + 1つ左までの合計 - 左上までの合計 + 現在追加する数 --
      prefix[i][j] = upper + left - leftUpper + add;
    }
  }
  // -- 累積和配列を作成end --

  // -- 累積和配列を使用して、エリアの合計値を検索 --
  const Northwest = prefix[a][b];
  const Northeast = prefix[a][d + 1];
  const Southeast = prefix[c + 1][d + 1];
  const Southwest = prefix[c + 1][b];

  // -- 全体の合計 - エリア外(左) - エリア外(上) + 消しすぎを補正 --
  const total = Southeast - Southwest - Northeast + Northwest;
  console.log(total);
});
