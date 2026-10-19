/*
フライト中に退屈してしまったあなたは、持っているトランプを使用した簡単な遊びを考えました。

この遊びでは 1 から 9 までの数字のカードのみを 4 枚使用します。
ただし、この 4 枚の中で同じ数値のカードが重複する事もあります。
ルールは以下の通りです。

4 枚のカードを横に並べます。
左から 2 枚のカード、右から 2 枚のカードをそれぞれ 2 ケタの整数とみなし、和を計算します。
あらゆる並べ方を試し、和の最大値（最大スコア）を求めます。

カード 4 枚に書かれた数が与えられるので、最大スコアを出力してください。
入力例 1 の 2, 9, 3, 8 の 4 枚を使う場合、以下の 12 通りの和の最大値 175 が最大スコアとなります。

カードの 4 枚の並べ方は 4! = 24 通り存在しますが、足し算は順序に依存しないため、12 通りのみ考慮すればよいことに注意してください。
たとえば、9, 2, 3, 8 の順で並べた場合のスコアは 92 + 38 = 130 となります。
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
  // 入力を数値配列に変換する。
  const numbers = lines[0].split(" ").map(Number);

  // 配列を降順に変換する
  const sortrd_numbers = [...numbers].sort((a, b) => b - a);

  // 数値を大きくするには、元々の数値が大きいものを10倍するのが、良い。これで、全パターンを調べなくていい。
  const A = sortrd_numbers[0] * 10 + sortrd_numbers[2];
  const B = sortrd_numbers[1] * 10 + sortrd_numbers[3];

  // 合計を求める。
  const total = A + B;
  console.log(total);
});
