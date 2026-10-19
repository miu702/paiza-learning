/*
あなたはデータ入力の作業を行っています。
この入力するデータは "0000" から "1111" までの 2 進数です。

このデータ入力の作業は単調でミスを起こしやすく困っています。
このため、入力するデータに対してある計算をし検証をすることにしました。

ここでは排他的論理和(xor) と呼ばれる計算を使って入力データのミスを検出しようとしました。
排他的論理和(xor) は各桁において、1 が奇数個あれば 1、そうでないならば 0 を出力します。

入力する N 個のデータに対して、排他的論理和(xor) を取って出力をしてください。


入力される値
入力は以下のフォーマットで与えられます。

N
b_1
b_2
...
b_N
・1 行目には、与えられる 2 進数の数 N が整数で与えられます。
・続く N 行の i 行目 (1 ≦ i ≦ N) には、4 桁の 2 進数を示す文字列 b_i が与えられます。
・入力は合計で N + 1 行となり、入力値最終行の末尾に改行が１つ入ります。



期待する出力
N 個の 2 進数のデータに対して排他的論理和(xor) を取った結果を 4 桁の 2 進数で出力してください。
2 進数にした時に 4 桁未満になる場合は、0 を先頭に付け 4 桁にして出力してください。

出力の最後に改行を入れ、余計な文字、空行を含んではいけません。
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
  const N = Number(lines[0]);
  const words = lines.slice(1, N + 1);
  const numbers = [];
  for (let i = 0; i < words.length; i++) {
    const number = words[i].split("").map(Number);
    numbers.push(number);
  }

  const parity = [];
  const colCount = numbers[0].length; // 列数（例: 4）

  // 外のループを1行の長さ、中のループを1列の長さとすることで、縦読みすることができる。
  for (let k = 0; k < colCount; k++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
      sum += numbers[j][k];
    }
    // 1 の数が奇数 → 1、偶数 → 0
    const p = sum % 2 === 1 ? 1 : 0;
    parity.push(p);
  }

  console.log(parity.join(""));
});
