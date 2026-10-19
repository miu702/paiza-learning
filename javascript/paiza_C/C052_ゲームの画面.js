/*
あなたはあるゲームのプログラムを書いています。
このゲームでは主人公の移動に応じて、 画面を左下原点でスクロールさせます。
一度に背景の全ての要素を描画すると処理が追いつかなくなってしまいました。

このため、スクロールする際に、前回の背景の描画結果をコピーし、前回の背景に無い画素のみを描画する事にしました。
画面の解像度と y 軸方向、 x 軸方向のスクロール距離が与えられます。
この時、コピーして描画量を減らした結果、どれほどの画素を描画するかを出力して下さい。
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
  const [H, W, dy, dx] = lines.join(" ").split(/\s+/).map(Number);
  const abs_dy = Math.abs(dy);
  const abs_dx = Math.abs(dx);

  const widthPart = abs_dx * H; // 横スクロール分
  const heightPart = abs_dy * W; // 縦スクロール分
  const duplication = abs_dx * abs_dy; // 重複部分

  const total = widthPart + heightPart - duplication;
  console.log(total);
});
