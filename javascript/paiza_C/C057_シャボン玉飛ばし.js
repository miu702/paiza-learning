/*
あなたは友達とシャボン玉を飛ばして遊んでいました。
ふと、あなたは、自分が作ったシャボン玉がどこまで飛んで行くのかが気になりました。

あなたは、時刻 0 のときに座標 (x, y) にシャボン玉を作ります。
このシャボン玉は、時刻 i - 1 と時刻 i の間 (1 ≦ i ≦ T) に風を受けます。こ
の風により、まずシャボン玉の x 座標が a_i 増えます。その次に、シャボン玉の y 座標が b_i 増えます。

シャボン玉は、y 座標が 0 以下になると、地面に接触し割れてなくなってしまいます。
時刻 T までに吹く風の情報が与えられるので、シャボン玉が通った x 座標の最大値を求めるプログラムを作成してください。

入力される値
入力は以下のフォーマットで与えられます。

T x y
a_1 b_1
a_2 b_2
...
a_T b_T
・1 行目に、風が吹く時刻の長さを表す整数 T、シャボン玉の最初の x 座標を表す整数 x、
シャボン玉の最初の y 座標を表す整数 y がこの順で半角スペース区切りで与えられます。
・続く T 行のうちの i 行目 (1 ≦ i ≦ T) には、時刻 i - 1 と時刻 i の間に吹
く風の情報を表す整数 a_i, b_i がこの順で半角スペース区切りで与えられます。
・入力は合計で T + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。


期待する出力
シャボン玉が通った x 座標の最大値を整数で出力してください。
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
  // 入力 → 変数に変換する
  const [T, start_X, start_Y] = lines[0].split(" ").map(Number);

  // 初期値
  let current_X = start_X;
  let current_Y = start_Y;
  let max_X = start_X;
  const limit_Y = 0;

  // 処理順はX軸→Y軸。Y軸が0以下になったら強制終了する。
  for (let i = 1; i <= T; i++) {
    const [change_X, change_Y] = lines[i].split(" ").map(Number);
    current_X += change_X;
    current_Y += change_Y;
    if (current_X > max_X) max_X = current_X;

    if (current_Y <= limit_Y) {
      if (current_X > max_X) max_X = current_X;
      break;
    }
  }

  console.log(max_X);
});
