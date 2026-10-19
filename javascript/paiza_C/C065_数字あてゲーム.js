/*
「数字を使ったゲームを考える」というグループ課題で、次のようなゲームを考えました。

プレイヤーには、ある正整数 a に関する N 個のヒントが与えられます。
あなたはプレイヤーとして、そのヒントに基づいた正整数 a を推定し、出力してください。

ヒントには、以下の 3 種類があります。
x を変数として、

・"> x" は、a が x よりも大きいことを示します。
・"< x" は、a が x よりも小さいことを示します。
・"/ x" は、a が x でちょうど割り切れることを示します。

例えば、入力例 1 では以下のヒント 3 つが与えられます。
> 30
< 40
/ 5

このヒントを読み替えると、正整数 a は 30 より大きく 40 より小さい 5 で割り切れるものだとわかります。
すなわち、入力例 1 では a = 35 とわかるので 35 を出力してください。
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
  // 入力をカットする
  const times = Number(lines[0]);
  const operation = lines.slice(1);

  // あり得る数値の上と下を作成する。割り算は後でするので、キープする。
  let min = 1;
  let max = Infinity;
  const queue = [];

  for (const o of operation) {
    const [symbol, numberStr] = o.split(" ");
    const number = Number(numberStr);

    switch (symbol) {
      case ">":
        if (number > min) min = number + 1;
        break;

      case "<":
        if (number < max) max = number - 1;
        break;

      case "/":
        queue.push(number);
        break;

      default:
        console.error("不正な操作があります。");
    }
  }

  // キープした数値で全て割れたら、終了。
  for (let start = min; start <= max; start++) {
    const crack = new Array(queue.length).fill(false);
    for (let i = 0; i < queue.length; i++) {
      if (start % queue[i] === 0) crack[i] = true;
    }

    const check = crack.every((c) => c === true);
    if (check) {
      console.log(start);
      break;
    }
  }
});
