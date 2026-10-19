/*
paiza 君と kyoko さんは、キューの勉強の一環としてキューを使ったキューじゃんけんをすることにしました。
キューじゃんけんのルールは次の通りです。

・各プレイヤーはゲーム開始前に、じゃんけん N 回分の手が書かれたブロック（グー・チョキ・パーのいずれか）が
入ったキューを作っておく。
・ゲームが始まったら、次の 3 つの手順をじゃんけん 1 回として、合計 K 回じゃんけんを行い、
勝った回数が多い方が勝利となる。

1. 各プレイヤーは自分のキューの先頭に入っているブロックを取り出す。
2. お互いのブロックに書かれている手を確認し、通常のじゃんけんの通り勝敗を決定する。
（ただし、あいこの場合であっても再度手を出さない）
3. 各プレイヤーは、出したブロックを「キューの末尾に挿入する」か、「追加せずに破棄する」かを決めて、
その操作を行う。

各プレイヤーのはじめのキューの中身と、K 回のじゃんけんの 3. における選択が与えられるので、
キューじゃんけんの勝敗を判定してください。
なお、K 回のじゃんけんの途中でキューが空になるような入力は与えられないことが保証されています。


入力される値
N K
Q_1_1 Q_2_1
Q_1_2 Q_2_2
...
Q_1_N Q_2_N
C_1_1 C_2_1
...
C_1_K C_2_K
・1 行目では、最初にキューに入れるブロックの数 N, じゃんけんの回数 K が半角スペース区切りで与えられます。
・2 行目から N 行にかけて、paiza 君のキューの先頭から i 番目に入っているブロックに書かれている手 Q_1_i と
 kyoko さんのキューの先頭から i 番目に入っているブロックに書かれている手 Q_2_i が半角スペース区切りで
 与えられます。
R はグー、S はチョキ、P はパーを表します。

・N + 2 行目から N + K + 1 行にかけて、paiza 君の i 回目のじゃんけんの 3. における選択 
C_1_i と kyoko さんの i 回目のじゃんけんの 3. における選択 C_2_i が半角スペース区切りで与えられます。
push はブロックをキューの末尾に追加したことを、discard はブロックを破棄したことを表します。
入力値最終行の末尾に改行が１つ入ります。


期待する出力
・勝者の名前を 1 行で出力してください。
・ただし、引き分けの場合は "draw" と出力してください。


条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ N ≦ 10000
・N ≦ K ≦ 10000
・Q_1_i, Q_2_i は 'R' 'S' 'P' のいずれか(1 ≦ i ≦ N)
・C_1_i, C_2_i は次のいずれかの形式(1 ≦ i ≦ K)
「push」
「discard」

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
  // -- 入力 → 変数--
  const [blocks, games] = lines[0].split(" ").map(Number);
  const startingHands = lines.slice(1, blocks + 1).map((s) => s.split(" "));
  const choice = lines.slice(blocks + 1, blocks + games + 1).map((c) => c.split(" "));

  // -- hands = 手札(queue形式) --
  const hands_A = [];
  const hands_B = [];
  for (const [ha, hb] of startingHands) {
    hands_A.push(ha);
    hands_B.push(hb);
  }

  // -- choice = 対戦後の選択 --
  const choice_A = [];
  const choice_B = [];
  for (const [ca, cb] of choice) {
    choice_A.push(ca);
    choice_B.push(cb);
  }
  // -- 入力 → 変数--

  // -- 処理前に配列の状態を調査する --
  const handsAllow = ["R", "S", "P"];
  const handsCheck_A = hands_A.every((h) => handsAllow.includes(h));
  const handsCheck_B = hands_B.every((h) => handsAllow.includes(h));
  if (!handsCheck_A || !handsCheck_B) {
    console.error("手札に使用できるのは、R(グー)、R(チョキ)、P(パー)のみです。");
    return;
  }

  const choiceAllow = ["push", "discard"];
  const choiceCheck_A = choice_A.every((c) => choiceAllow.includes(c));
  const choiceCheck_B = choice_B.every((c) => choiceAllow.includes(c));
  if (!choiceCheck_A || !choiceCheck_B) {
    console.error("勝負後のカードの扱いについて選択できるのは、push(手札の最後尾に戻す)、discard(捨てる)のみです。");
    return;
  }
  // -- 処理前に配列の状態を調査するend --

  // -- 対戦のシュミレーションをする --
  // 勝利カウント(多い方を出力)
  let winCount_A = 0;
  let winCount_B = 0;

  // キューのカウント
  let index_A = 0;
  let index_B = 0;

  // -- 勝負の回数処理を繰り返す。--
  for (let g = 0; g < games; g++) {
    /*
    現在の手を決定する。今回は毎回手を交換するので、勝負の回数を管理する変数と同じ動きをするが、
    勝ちだと交換なしなどの場合ずれるので、別の変数で管理する。
    */
    const A = hands_A[index_A++];
    const B = hands_B[index_B++];

    if ((A === "R" && B === "S") || (A === "S" && B === "P") || (A === "P" && B === "R")) {
      // -- Aが勝ちパターン --
      winCount_A++;
    } else if ((A === "R" && B === "P") || (A === "P" && B === "S") || (A === "S" && B === "R")) {
      // -- Bが勝ちパターン --
      winCount_B++;
    }

    // -- 加えるとき、配列の最後に入れる --
    if (choice_A[g] === "push") hands_A.push(A);
    if (choice_B[g] === "push") hands_B.push(B);
  }
  // -- 対戦のシュミレーションをするend --

  // -- 勝者を出力する --
  if (winCount_A === winCount_B) {
    console.log("draw");
    return;
  }

  winCount_A > winCount_B ? console.log("paiza") : console.log("kyoko");
});
