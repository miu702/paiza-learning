/*
あなたは拾った古いパソコンで画像を表示するため、
グレースケールの画像を白黒の二値画像に変換する事にしました。

グレースケールの画像では 255 (白) から 0 (黒) の 256 階調で画像を表現します。
0 に近いほど黒色に, 255 に近いほど白色に近い色になります。
二値画像では単純に 1 (白) から 0 (黒) の 2 階調で表現します。
このため、グレーな画素値を白か黒にする必要があります。 (画素とは画像の最小単位の点を表します)

今回は単に表示するだけなので、単純に以下の条件を用いて二値画像に変換します。

・画素値が 128 以上 : 1 (白)
・画素値が 127 以下 : 0 (黒)

入力で画像のサイズとそれぞれの画素値が渡されるので、
与えられた条件で二値化した結果を出力して下さい。
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
  // 縦、横、残りに分割する
  const [height, width, ...rest] = lines.join(" ").split(/\s+/).map(Number);

  // 元画像を作成する
  const numbers = [];
  for (let i = 0; i < height; i++) {
    const number = rest.slice(i * width, i * width + width);
    numbers.push(number);
  }

  // 条件に沿って出力する
  const newNumbers = [];
  for (let j = 0; j < height; j++) {
    const row = [];
    for (let k = 0; k < width; k++) {
      if (numbers[j][k] >= 0 && numbers[j][k] <= 127) {
        row.push(0);
      } else if (numbers[j][k] >= 128 && numbers[j][k] <= 255) {
        row.push(1);
      }
    }
    newNumbers.push(row);
  }

  // 結果を出力する
  newNumbers.forEach((num) => {
    console.log(num.join(" "));
  });
});
