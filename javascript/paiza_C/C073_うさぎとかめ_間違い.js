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
  const total_distance = Number(lines[0]);
  const [per_usagi, section, break_time] = lines[1].split(" ").map(Number);
  const per_kame = Number(lines[2]);

  /*
    【最初の考え方】
    時間を1分ずつwhileループして、
    うさぎとかめの距離をシミュレーションする方法で考えた。

    【問題点】
    1分に進む距離が割り切れない小数になる場合があり、
    浮動小数点の誤差によって正しくゴール判定できない可能性がある。

    【最終的な考え方】
    1分ごとのシミュレーションではなく、
    「走る時間」と「休憩回数 × 休憩時間」から
    ゴールまでの時間を直接計算する。
   */

  // usagiの情報
  const per_minute_usagi = 1 / per_usagi;
  let distance_usagi = 0;
  let rest_usagi = false;
  let distance_section = 0;
  let rest_time = 0;

  // kameの情報
  const per_minute_kame = 1 / per_kame;
  let distance_kame = 0;

  // 全体の情報
  let minutes = 0;
  let goal_check = false;
  let winner = [];
  while (!goal_check) {
    // 1、時間を追加する。
    minutes++;

    // 2、usagiが移動可能が検査
    if (rest_usagi) {
      rest_time++;
      // 2、休憩が終わっているか検査
      if (rest_time === break_time) {
        rest_time = 0;
        rest_usagi = false;
      }
    } else {
      distance_section += per_minute_usagi;
      distance_usagi += per_minute_usagi;
    }

    // 3、kameが移動する。
    distance_kame += per_minute_kame;

    // 4-1、ゴールしているか調査する。
    if (distance_kame >= total_distance) winner.push("KAME");
    if (distance_usagi >= total_distance) winner.push("USAGI");

    // 4-2、ゴールしている動物がいるとき、終了する。
    if (winner.length > 0) goal_check = true;

    // 5、現在の距離でusagiが休むか判断する。
    if (!rest_usagi && distance_section >= section) {
      distance_section = 0;
      rest_usagi = true;
    }
  }

  if (winner.length === 2) {
    console.log("DRAW");
  } else {
    console.log(winner[0]);
  }
});
