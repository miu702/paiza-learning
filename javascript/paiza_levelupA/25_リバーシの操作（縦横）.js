/*
盤面の行数 H , 列数 W と盤面の情報 S_i , 石を置くマスの座標 Y , X が与えられます。
現在プレイヤーの石が置かれているマスは '*' になっており、何も置かれていないマスは '.' になっています。

プレイヤーは次の操作を 1 回だけおこないます。

・ 盤面の ( Y , X ) に石を置き、縦横に自分の石ではさんだマスの間に自分の石をおく。
・ 新たに置いた石によってさらに石が置けるようになった場合でもその時点で操作を終える。

この操作を終えた後の盤面を出力してください。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。


入力される値
H W Y X     
S_0         
...     
S_(H-1)


・ １行目では、盤面の行数 H , 列数 W , 石を置くマスの y , x 座標 である Y , X が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。


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
  const [height, width, sy, sx] = lines[0].split(" ").map(Number);
  const board = lines.slice(1, height + 1).map((b) => b.split(""));
  // -- 入力 → 変数end --

  // -- 石を置く --
  const disc = "*";
  const none = ".";
  const processBoard = board.map((row) => [...row]);
  processBoard[sy][sx] = disc;
  // -- 石を置くend --

  // -- 進む方向を定義する --
  const directions = [
    [-1, 0], // N
    [0, 1], // E
    [1, 0], // S
    [0, -1], // W
  ];
  // -- 進む方向を定義するend --

  // -- 調査する --
  function reverseDirection(dy, dx) {
    const cell = []; // 後で処理するかも？
    let y = sy + dy;
    let x = sx + dx;

    while (0 <= y && y < height && 0 <= x && x < width) {
      // エリア内に限定する
      if (processBoard[y][x] === none) {
        // 石なし
        cell.push([y, x]);
      } else if (processBoard[y][x] === disc) {
        // 石あり
        if (cell.length > 0) {
          for (const [cy, cx] of cell) {
            processBoard[cy][cx] = disc;
          }
        }

        break; // 1回見つけたら、処理停止。これをしないとリバーシのルールが崩壊する。
      }

      y += dy;
      x += dx;
    }
  }

  // directionsの長さが4なので、4方向調査できる。
  for (const [dy, dx] of directions) {
    reverseDirection(dy, dx);
  }

  // -- 調査するend --

  // -- 最終的な盤面を出力する --
  processBoard.forEach((p) => {
    console.log(p.join(""));
  });
});
