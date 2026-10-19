/*
ある日、うさぎとかめがかけっこの勝負をすることになりました。

ただ走るのでは自分の勝ちは目に見えているだろう、と思ったうさぎは、
とある昔話にならって次のようなハンデをつけてあげることにしました。

・うさぎは 1 km を u 分、という一定の速さで走るが、a km 走るごとに b 分の休憩を取らなければならない
・かめは 1 km を v 分、という一定の速さで走り続ける

以下の図は、入力例 1 の入力をダイヤグラムで表したものです。

うさぎは 1 km を 2 分のペースで走りますが、2 km 走るごとに 5 分の休憩を取るので、6 km を走りきるのに 22 分かかります。

かめは 1 km を 4 分のペースで走り、休憩もしないので、6 km を走りきるのに 24 分かかります。

よって、うさぎが先にゴールするので、 `USAGI` と出力すると正答となります。
この 2 匹で L km の距離を競走するとき、どちらが先にゴールするでしょうか？
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
  // 入力 → 変数に変換する
  const total_distance = Number(lines[0]);
  const [per_usagi, section, break_time] = lines[1].split(" ").map(Number);
  const per_kame = Number(lines[2]);

  // usagiの情報(走る時間、休憩回数、休憩時間を足すことで合計時間になる)
  const run_usagi = total_distance * per_usagi;
  const rest_count = Math.ceil(total_distance / section) - 1;
  const total_usagi_time = run_usagi + rest_count * break_time;

  // kameの情報(休憩時間なしなので、合計距離 * 1㎞の距離で合計時間になる)
  const total_kame_time = total_distance * per_kame;

  // どっちが勝ったか？
  if (total_usagi_time === total_kame_time) {
    console.log("DRAW");
  } else if (total_usagi_time > total_kame_time) {
    console.log("KAME");
  } else if (total_usagi_time < total_kame_time) {
    console.log("USAGI");
  }
});
