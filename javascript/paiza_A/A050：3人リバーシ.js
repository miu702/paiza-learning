/*
あなたは友人と 3 人で特殊なリバーシをで遊んでいます。

リバーシは通常、 2 人で遊ぶボードゲームで、 8 × 8 のマス目がある盤面に白黒の石を置いていくゲームです。

今回は、盤面の大きさや初期配置がランダムな状態のスタートから、
プレイヤーのターン数と、各ターンどこに石を置くかを指定されるので、
最終的な盤面と、誰が勝ったかをシミュレーションしてください。


3 人リバーシのルールは以下のようになります。
・2 人用のリバーシと違い、 3 色の石があります。
・N × N のマス目の盤に、初期配置はランダムで石が置かれます。
・赤(R) -> 緑(G) -> 青(B) -> 赤(R) -> ...の順に石を置いていきます。
・石を打つとき、縦・横・斜め方向に自分以外の色を自分の色で挟み、挟まれた石を自分の色の石に置き換えます。
なお、置き換えられる石が存在しない場所にも石を置くことができます。
・全てのプレイヤーのターンが終了した時、石が多いプレイヤーが勝ちになります。
・引き分けの場合は、最後の石をより遅いターンで石を置いた人が勝ちます。


入力される値
入力は次のフォーマットで与えられます。
N M
s_1
s_2
...
s_N
x_1 y_1
x_2 y_2
...
x_M y_M
・ 1 行目に盤面の大きさを表す整数 N , ゲームのターン数を表す整数 M が半角スペース区切りで与えられます。
　・M はゲームのターン数なので、全員のターン数が同じとは限らないことに注意してください。
・続く N 行のうちの i 行目 (1 ≦ i ≦ N) には半角記号 "R", "G", "B" および "." からなる
長さ N の文字列 s_i が与えられます。

s_i の j 番目 (1 ≦ j ≦ N) の文字は盤面における i 行 j 列目のマスの初期状態を表し、
"." は石が置かれていない状態を、それ以外は該当する色の石が置かれている状態を表します。

・続く M 行のうち i 行目 (1 ≦ i ≦ M) にはプレイヤーがコマを置く位置を表す整数 x_i, y_i が
半角スペース区切りで与えられます。
このとき、i ターン目に行動するプレイヤーは、盤面の y_i 行 x_i 列目のマスに石を置いたものとします。

・ゲームのターン数なので、全員が同じターン数回ってくるとは限らないことに注意してください。
・入力は合計で N + M + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。
文字列は標準入力から渡されます。


期待する出力
終了後の盤面と勝ったプレイヤーの石の色を以下の形式で出力してください。
a_1
a_2
...
a_N
C
・期待する出力は N + 1 行からなります。
・i 行目 (1 ≦ i ≦ N) には M ターン経過後の盤面の i 行目を表す文字列 a_i 出力して下さい。
・N + 1 行目には、終了後に勝った人の石の色を表す文字 C を出力してください。
・出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。


条件
すべてのテストケースにおいて、以下の条件をみたします。
・3 ≦ N ≦ 10
・1 ≦ M ≦ 10
・s_{i, j} は"R","G","B","."で構成される文字列 (1 ≦ i ≦ N)
・(s_i の長さ) = N
・1 ≦ x_i, y_i ≦ N (1 ≦ i ≦ M)
・s_{x_i, y_i} = "." (1 ≦ i ≦ M)


入力例1
6 2
......
..B...
.GBB..
.GGR..
..RB..
...R..
4 2
5 1


出力例1
....G.
..BG..
.GGR..
.GGR..
..RB..
...R..
G


入力例2
5 3
.....
.....
.GRB.
...GG
.....
5 5
3 4
4 5


出力例2
.....
.....
.GRB.
..GBG
...BR
B
G と B は石の数が同じですが、 B の方が遅い順番なので、 B の勝ちになります。

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
  const [size, games] = lines[0].split(" ").map(Number);
  const board = lines.slice(1, size + 1).map((b) => b.split(""));
  const coordinates = lines.slice(size + 1).map((c) => c.split(" ").map(Number));
  // -- 入力 → 変数end --

  // -- 進む方向を定義する --
  const directions = {
    NW: [-1, -1],
    N: [0, -1],
    NE: [1, -1],
    E: [1, 0],
    SE: [1, 1],
    S: [0, 1],
    SW: [-1, 1],
    W: [-1, 0],
  };
  // -- 進む方向を定義するend --

  // -- 指定したターンゲームをする --
  const none = ".";
  const players = ["R", "G", "B"];

  const processBoard = board.map((row) => [...row]);
  for (const [turn, [x, y]] of coordinates.entries()) {
    // -- インデックス番号に対応 --
    const sx = x - 1;
    const sy = y - 1;

    // -- プレイヤーを特定 --
    const number = turn % 3;
    const player = players[number];

    // -- 希望した場所に石を置く。--
    processBoard[sy][sx] = player;

    // -- 石を置いた後、ひっくり返すことが出来るか調査する --
    for (const [dy, dx] of Object.values(directions)) {
      reverseDirection(player, sy, sx, dy, dx);
    }
  }

  // -- ひっくり返すことが出来るか調査する(関数) --
  function reverseDirection(player, sy, sx, dy, dx) {
    const cell = [];
    let ay = sy + dy;
    let ax = sx + dx;

    while (0 <= ay && ay < size && 0 <= ax && ax < size) {
      // 調査先に何もない時、その方向は終了。
      if (processBoard[ay][ax] === none) break;

      // 調査先が相手の石の時、配列にキープする。
      if (processBoard[ay][ax] !== player) {
        cell.push([ay, ax]);
      } else if (processBoard[ay][ax] === player) {
        // 石あり。キープしていた個所をひっくり返す。
        if (cell.length > 0) {
          for (const [cy, cx] of cell) {
            processBoard[cy][cx] = player;
          }
        }

        break; // 石を1回見つけたら、処理停止。これをしないとリバーシのルールが崩壊する。
      }

      // -- 次のマスに移動する --
      ay += dy;
      ax += dx;
    }
  }
  // -- ひっくり返すことが出来るか調査する(関数)end --

  // -- 指定したターンゲームをするend --

  // -- 結果を出力する --
  processBoard.forEach((p) => {
    console.log(p.join(""));
  });

  let count_R = 0;
  let count_G = 0;
  let count_B = 0;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (processBoard[i][j] === "R") {
        count_R++;
      } else if (processBoard[i][j] === "G") {
        count_G++;
      } else if (processBoard[i][j] === "B") {
        count_B++;
      }
    }
  }
  const max = Math.max(count_R, count_G, count_B);
  const winner = [];

  if (count_R === max) winner.push("R");
  if (count_G === max) winner.push("G");
  if (count_B === max) winner.push("B");

  if (winner.length >= 2) {
    const last = players[(games - 1) % 3];
    console.log(last);
  } else {
    console.log(winner[0]);
  }
  // -- 結果を出力するend --
});
