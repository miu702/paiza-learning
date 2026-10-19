/*
盤面・石を置く回数・各操作で石を置くマスについての情報が与えられます。
はじめ、プレイヤーの石が置かれているマスは '*' になっており、穴の空いているマスは '#' , 
何も置かれていないマスは '.' になっています。

プレイヤーは次の操作を N 回繰り返します。

・ 盤面のマス ( Y_i, X_i ) に石を置き、縦横斜めに自分の石ではさんだ連続した穴の空いていないマスの間に自分の石を置く。
・ 新たに置いた石によってさらに石が置けるようになった場合でもその時点で操作を終える。

操作を終えた後の盤面を出力してください。


入力される値
H W N       
S_0     
...     
S_(H-1)     
Y_1 X_1     
...     
Y_N X_N


・ 1 行目では、盤面の行数 H , 列数 W , 石を置く回数 N が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。
・ 続く N 行のうち i 行目 (0 ≦ i ≦ N) には、i 回目の操作で石を置く座標 Y_i X_i が与えられます。



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
  const [height, width, game] = lines[0].split(" ").map(Number);
  const board = lines.slice(1, height + 1).map((b) => b.split(""));
  const coordinates = lines.slice(height + 1).map((c) => c.split(" ").map(Number));
  // -- 入力 → 変数end --

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

  // -- 指定したターン操作を実施する --
  for (const [sy, sx] of coordinates) {
    // -- 希望した場所に石を置く。--
    processBoard[sy][sx] = disc;

    // -- ひっくり返すことが出来るか調査する --
    for (const [dy, dx] of Object.values(directions)) {
      reverseDirection(sy, sx, dy, dx);
    }
    // -- ひっくり返すことが出来るか調査するend --
  }
  // -- 指定したターン操作を実施するend --

  // -- ひっくり返すことが出来るか調査する(関数) --
  function reverseDirection(sy, sx, dy, dx) {
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
  // -- ひっくり返すことが出来るか調査する(関数)end --

  // -- 調査するend --

  // -- 結果を出力する --
  processBoard.forEach((p) => {
    console.log(p.join(""));
  });
  // -- 結果を出力するend --
});
