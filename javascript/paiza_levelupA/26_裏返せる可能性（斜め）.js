/*
盤面についての情報と石を置くマスの座標についての情報が与えられます。
石を置いたマスを '!' に、石を置いたマスとそのマスを通る斜め方向のマスを '*' に、それ以外のマスを '.' にした盤面を出力してください。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。



入力される値
H W Y X
・ 出力する盤面の行数 H , 列数 W と石を置くマスの y , x 座標である Y , X が 1 行で与えられます。


期待する出力
H 行での出力
・ 操作後の盤面を H 行で出力してください。
S_0
...
S_(H-1)


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
  // -- 入力 → 変数 --

  // -- 初期盤面を作る --
  const center = "!";
  const side = "*";
  const none = ".";

  const board = Array.from({ length: height }, () => Array(width).fill(none));
  // -- 初期盤面を作るend --

  // -- 情報を変更する --
  const processBoard = board.map((row) => [...row]);
  processBoard[sy][sx] = center; // 中心

  function reverseDirection(dy, dx) {
    let y = sy + dy;
    let x = sx + dx;
    while (0 <= y && y < height && 0 <= x && x < width) {
      if (processBoard[y][x] === center) continue; // 保険
      processBoard[y][x] = side;
      y += dy;
      x += dx;
    }
  }

  // -- 動き方を作成する --
  const direction = {
    NW: [-1, -1],
    NE: [-1, 1],
    SW: [1, -1],
    SE: [1, 1],
  };
  for (const [dy, dx] of Object.values(direction)) {
    reverseDirection(dy, dx);
  }
  // -- 動き方を作成するend --

  // -- 情報を変更するend --

  // -- 結果を出力する --
  processBoard.forEach((b) => {
    console.log(b.join(""));
  });
  // -- 結果を出力するend --
});
