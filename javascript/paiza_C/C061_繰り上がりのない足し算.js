/*
あなたは子どもたちの算数の勉強を見ています。 子どもたちは足し算をするとき、
指で数えて足し算するので繰り上がりの計算ができません。 
しかし、あなたは子どもたちに甘いので、その計算結果でも正解にすることにしました。

整数が 2 つ与えられるので子どもたちの計算方法で計算した結果を出力するプログラムを作成してください。
ただし、入力例 2 のように先頭の数が 0 となった場合でも省略せずに 0 を出力してください。


入力される値
入力は以下のフォーマットで与えられます。

A B
・足し算に用いる整数 A, B がこの順に半角スペース区切りで与えられます。
入力は 1 行となり、末尾に改行が 1 つ入ります。


期待する出力
繰り上がりを無視して A と B を足した結果を出力してください。
出力は A と B の大きい方の桁数に合わせてください。

末尾に改行を入れ、余計な文字、空行を含んではいけません。


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
  // 入力→変数に変換する
  const numbers = lines[0].split(" ");
  let A = numbers[0];
  let B = numbers[1];

  // 後で桁数がずれることを防ぐために、元々桁数が違うときは、0で埋める。
  if (A.length !== B.length) {
    const max_length = Math.max(A.length, B.length);
    A = A.padStart(max_length, "0");
    B = B.padStart(max_length, "0");
  }

  // 計算を行う。%10することで、10の位を無視できる。
  const result = [];
  for (let i = 0; i < A.length; i++) {
    const total = Number(A[i]) + Number(B[i]);

    const add_number = total % 10;
    result.push(add_number);
  }

  // くっつけて出力する。
  const output = result.join("");
  console.log(output);
});
