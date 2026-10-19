/*
あなたは霧島京子たちが通うパイザ女学院の用務員として、校舎に備え付けのエレベーターを管理しています。
エレベーターが一定の距離を動くと、定期点検をしなければなりません。
エレベーターの動きのログをもとに、エレベーターが何階分の距離を動いたか計算するプログラムを完成させてください。
ただし、エレベーターは最初は必ず 1 階にいるものとします。
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
  // 1.配列を1列にする
  const words = lines.join(" ").split(/\s+/);
  const times = parseInt(words[0]);
  const moves = words.slice(1, times + 1).map(Number); // 数値配列に変換

  let total = 0;
  let before_floor = 1; // 初期位置1階

  for (let move of moves) {
    total += Math.abs(move - before_floor); // 移動距離の合計
    before_floor = move; // 現在の階を更新
  }

  console.log(total);
});
