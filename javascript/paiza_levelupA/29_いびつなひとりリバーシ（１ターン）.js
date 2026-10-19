/*
盤面についての情報が与えられます。
はじめ、プレイヤーの石が置かれているマスは '*' になっており、穴の空いているマスは '#' , 
何も置かれていないマスは '.' になっています。

プレイヤーは盤面の '!' のマスに石を置き、
縦横斜めに自分の石ではさんだ連続した穴の空いていないマスの間に自分の石を置く。
新たに置いた石によってさらに石が置けるようになった場合でもその時点で操作を終える。

この操作を終えた後の盤面を出力してください。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。



入力される値
H W     
S_0     
...     
S_(H-1)


・ 1 行目では、盤面の行数 H , 列数 W が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、
S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。


期待する出力
H 行での出力

・ 操作後の盤面を H 行で出力してください。


T_0
...
T_(H-1)


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
  const [height, width] = lines[0].split(" ").map(Number);
  const board = lines.slice(1, height + 1).map((b) => b.split(""));
  // -- 入力 → 変数end --

  // -- 始めに置く場所を見つける --
  const put = "!";
  let found = false;
  let sy;
  let sx;

  for (let i = 0; i < height; i++) {
    if (found) break;
    for (let j = 0; j < width; j++) {
      if (found) break;
      if (board[i][j] === put) {
        sy = i;
        sx = j;
        found = true;
      }
    }
  }
  // -- 始めに置く場所を見つけるend --

  // -- 進む方向を定義する --
  const directions = {
    NW: [-1, -1],
    N: [-1, 0],
    NE: [-1, 1],
    E: [0, 1],
    SE: [1, 1],
    S: [1, 0],
    SW: [1, -1],
    W: [0, -1],
  };
  // -- 進む方向を定義するend --

  // -- 調査する --
  const processBoard = board.map((row) => [...row]);

  const disc = "*";
  const hole = "#";
  const none = ".";

  // -- 希望した場所に石を置く。--
  processBoard[sy][sx] = disc;

  // -- ひっくり返すことが出来るか調査する --
  for (const [dy, dx] of Object.values(directions)) {
    reverseDirection(dy, dx);
  }

  function reverseDirection(dy, dx) {
    const cell = [];
    let y = sy + dy;
    let x = sx + dx;

    while (0 <= y && y < height && 0 <= x && x < width) {
      // -- 盤面に穴が有ったら、その方向はひっくり返すことが出来ないので、終了 --
      if (processBoard[y][x] === hole) break;

      if (processBoard[y][x] === none) {
        // 盤面に石なし。キープする。
        cell.push([y, x]);
      } else if (processBoard[y][x] === disc) {
        // 石あり。キープしていた個所をひっくり返す。
        if (cell.length > 0) {
          for (const [cy, cx] of cell) {
            processBoard[cy][cx] = disc;
          }
        }

        break; // 石を1回見つけたら、処理停止。これをしないとリバーシのルールが崩壊する。
      }

      // -- 次のマスに移動する --
      y += dy;
      x += dx;
    }
  }
  // -- 調査するend --

  // -- 結果を出力する --
  processBoard.forEach((p) => {
    console.log(p.join(""));
  });
  // -- 結果を出力するend --
});
