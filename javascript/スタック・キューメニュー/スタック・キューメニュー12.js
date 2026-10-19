/*
幅 1 の筒状の箱に数値の書かれた直径 1 のボールを入れます。
各ボールは同じ数値のボールが隣合ったときに結合し、数値が 2 倍になります。

それぞれ A_i と書かれた N 個のボールがあり、順番に箱の底へ入れていきます。
最終的な箱の中のようすを、箱の天井から順に出力してください。


入力される値
N
A_0 A_1 ... A_N
入力値最終行の末尾に改行が１つ入ります。

期待する出力
最終的な箱の中のようすを、箱の天井から順に出力してください。
末尾には改行を入れ、余計な文字、空行を含んではいけません。

条件
すべてのテストケースにおいて、以下の条件をみたします。
・ N は 1 以上 50,000 未満
・ 0 ≦ A_i < 50,000

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
  const [number, ...balls] = lines.join(" ").split(/\s+/).map(Number);

  // -- スタックを使ってシュミレーションする --
  const stack = [];
  for (const ball of balls) {
    // -- まず、ボールを入れる--
    stack.push(ball);

    // -- ボールの数が2以上かつ、1つ前のボールと今入ったボールが同じなら合体する --
    while (stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]) fusionBalls();
  }

  function fusionBalls() {
    const x = stack.pop();
    stack.pop();
    stack.push(x * 2);
  }

  // -- 結果を出力する --
  while (stack.length > 0) {
    console.log(stack[stack.length - 1]);
    stack.pop();
  }
});
