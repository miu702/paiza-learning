/*
数列 A についての情報と、整数 K が与えられます。
次の条件を満たす A の部分列の最短の長さを答えてください。

・ 数列に含まれる全ての要素の積が K 以上である。

なお、数列の部分列とは、数列の連続した 1 つ以上の要素を取り出して作ることができる数列のことです。



入力される値
N K            
A_1 A_2 ... A_N


・ 1 行目には、数列 A の要素数 N と、条件に使う整数 K が与えられます。
・ 2 行目には、数列 A の各要素 A_1, A_2 ... A_N が与えられます。


期待する出力
1 行の出力

・ 条件を満たす A の部分列の最短の長さ l を 1 行で出力してください。
l

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
  const [numberLength, referenceValue] = lines[0].split(" ").map(Number);
  const numbers = lines[1].split(" ").map(Number);
  // -- 入力 → 変数 --

  // -- 特別処理 --
  if (referenceValue === 1) {
    console.log(1);
    return;
  }

  // 初期値
  let left = 0;
  let sum = 1;
  let minLength = Infinity;

  // -- 最短の長さをチェックする(尺取り法) --
  for (let right = 0; right < numbers.length; right++) {
    if (numbers[right] === 0) {
      // リセット
      sum = 1;
      left = right + 1;
      continue;
    } else if (numbers[right] === 1 || numbers[right] === 2) {
      sum *= numbers[right];

      while (sum >= referenceValue) {
        minLength = Math.min(minLength, right - left + 1);
        sum /= numbers[left];
        left++;
      }
    }
  }

  // 出力する
  console.log(minLength === Infinity ? -1 : minLength);
});
