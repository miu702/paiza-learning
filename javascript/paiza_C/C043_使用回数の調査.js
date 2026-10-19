/*
あなたはとあるゲームのプレイヤーです。このゲームでは課金アイテムの使用者の ID が公開されるため、
個人的な興味から課金アイテムの使用回数が一番多い人を調べようとしています。

プレイヤー ID が整数で与えられるので、一番多く出現するプレイヤー ID を出力して下さい。
一番多く出現するプレイヤー ID が複数ある場合は昇順に全て出力して下さい。

入力例 1 の場合、1 が 2 個, 2 が 2個, 3 が 1個 であり、一番多く出現する ID が
1, 2 の二つであるため、"1 2" と出力してください。

入力例 2 の場合、1 が 3 個, 2 が 1個, 3 が 1個 であり、一番多く出現する ID が
1 のみであるため、"1" を出力してください。
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
  const times = Number(lines[0]);
  const items = lines[1].split(" ").map(Number);

  // mapを使用する。
  const counts = new Map();
  for (const item of items) {
    counts.set(item, (counts.get(item) || 0) + 1);
  }

  // 最大のカウント数を見つける。
  let max_count = -Infinity;
  for (const [key, value] of counts) {
    if (max_count < value) max_count = value;
  }

  // 最大のカウントはいくつあるか調査する。
  const max_item = [];
  for (const [key, value] of counts) {
    if (max_count === value) max_item.push(key);
  }

  // 配列をソートする。
  const sorted_max_item = [...max_item].sort((a, b) => a - b);
  console.log(sorted_max_item.join(" "));
});
