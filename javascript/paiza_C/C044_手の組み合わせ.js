/*
じゃんけんは、2 人以上の参加者により行われるゲームです。 
各参加者は、3 種類の手(グー・チョキ・パー) のいずれかを出します。 この手 の組み合わせにより勝者が決まります。

勝敗の決定は以下の通りです。

・グーは、チョキに勝ち、パーに敗れる
・チョキは、パーに勝ち、グーに敗れる
・パーは、グーに勝ち、チョキに敗れる
・グー・チョキ・パーの 3 種類が出されている場合は引き分け
・グー・チョキ・パーのいずれか 1 種類のみが出されている場合も引き分け


勝者の手を出力してください。引き分けの場合は、"draw" と出力してください。
出力の最後に改行を入れ、余計な文字、空行を含んではいけません。


入力される値
入力は以下のフォーマットで与えられます。

N
a_1
a_2
...
a_N
・入力は合計で N + 1 行となり、入力値最終行の末尾に改行が１つ入ります。
・1 行目には、じゃんけんへの参加者の数を表します。
・続く N 行のうち i 行目 (1 ≦ i ≦ N) に i 番目の参加者の出した手を表す文字列 a_i が与えられます。


期待する出力
勝者の手を出力してください。引き分けの場合は、"draw" と出力してください。

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
  const number = Number(lines[0]);

  const hands = [];
  for (let i = 1; i <= number; i++) {
    const hand = lines[i];
    if (!hands.includes(hand)) hands.push(hand);
  }

  if (hands.length === 1 || hands.length === 3) {
    console.log("draw");
  } else if (hands.length === 2) {
    if ((hands[0] == "rock" && hands[1] == "scissors") || (hands[0] == "scissors" && hands[1] == "rock")) {
      console.log("rock");
    } else if ((hands[0] == "rock" && hands[1] == "paper") || (hands[0] == "paper" && hands[1] == "rock")) {
      console.log("paper");
    } else if ((hands[0] == "scissors" && hands[1] == "paper") || (hands[0] == "paper" && hands[1] == "scissors")) {
      console.log("scissors");
    }
  }
});
