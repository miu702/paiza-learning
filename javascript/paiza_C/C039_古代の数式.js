/*
古学者兼ITエンジニアであるあなたはパイザ遺跡の発掘に成功し、そこに数式のようなものが刻まれていることに気づきました。
あなたはこの数式の記法をパイザ記法と命名し、解読を試みたところ、以下のルールを見つけ出しました。


・数式はすべて 2 個以上の整数の足し算となっている
・使用する整数は 1 から 99 までで、10 進法を用いる
・連続する "<" の数が整数の 10 の位を表し、それに続く連続する "/" (スラッシュ) の数が整数の 1 の位を表す
・"+" が足し算の記号を表す


このルールをもとに、パイザ記法で書かれた数式を解釈し、その結果を返すプログラムを作成してください。
なお、上記のルールで解釈不能な入力は与えられません。
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
  // 入力を記号で分割する。
  const words = lines[0].split("+");

  // 1文字ずつ分割し、足す。
  let total = 0;
  for (let i = 0; i < words.length; i++) {
    const W = words[i].split("");
    for (const X of W) {
      if (X === "<") {
        total += 10;
      } else if (X === "/") {
        total++;
      }
    }
  }

  // 結果を出力する
  console.log(total);
});
