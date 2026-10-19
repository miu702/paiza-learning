/*
A さんと B さんの 2 人でいびつなリバーシの対戦をします。
盤面・ターン数・各行動で石を置く座標についての情報が与えられます。
盤面に穴の空いているマスは '#' , 何も置かれていないマスは '.' になっています。

プレイヤーは次の操作を 1 回ずつ交互に合計 N 回繰り返します。なお、先攻は A さんです。

・ A さんは盤面のマス(Ya_i, Xa_i)に、Bさんは盤面のマス(Yb_i, Xb_i)に石を置きます。
すでに相手の石が置かれている場合は相手の石を自分の石に置き換える。
・ 次に、縦横斜めに自分の石ではさんだ連続した穴の空いていないマスに自分の石をおきます。
この時、既に相手の石が置かれている場合は相手の石を自分の石に置き換える。
・ 新たに置いた石によってさらに石が置けるようになった場合でもその時点で操作を終える。

操作を終えた後の盤面を出力してください。
ただし、A さんの石が置かれているマスを 'A' , B さんの石が置かれているマスを 'B' として出力してください。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、下方向が y 座標の正の向き、
右方向が x 座標の正の向きとします。


入力される値
H W N       
S_0     
...     
S_(H-1)     
Ya_1 Xa_1       
Yb_1 Xb_1       
...     
Ya_N Xa_N       
Yb_N Xb_N


・ 1 行目では、盤面の行数 H , 列数 W , 各プレイヤーのターン数 N が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、
S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。
・ 続く 2 * N 行のうち 2 * i + 1 行目 (0 ≦ i ≦ N - 1) には、i 回目の操作で A さんが
石を置く座標 Y_i X_i が与えられます。
2 * i 行目 (1 ≦ i ≦ N) には、i 回目の操作で B さんが石を置く座標 Y_i X_i が与えられます。


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
  const hole = "#";
  const none = ".";

  // -- 指定したターンゲームをする --
  for (const [turn, [sy, sx]] of coordinates.entries()) {
    // -- プレイヤーを決める --
    const player = turn % 2 === 0 ? "A" : "B";
    const notPlayer = turn % 2 !== 0 ? "A" : "B";

    // -- 希望した場所に石を置く。--
    processBoard[sy][sx] = player;

    // -- 石を置いた後、ひっくり返すことが出来るか調査する --
    for (const [dy, dx] of Object.values(directions)) {
      reverseDirection(player, notPlayer, sy, sx, dy, dx);
    }
  }
  // -- 指定したターン操作を実施するend --

  // -- ひっくり返すことが出来るか調査する(関数) --
  function reverseDirection(player, notPlayer, sy, sx, dy, dx) {
    const cell = [];
    let y = sy + dy;
    let x = sx + dx;

    while (0 <= y && y < height && 0 <= x && x < width) {
      // -- 盤面に穴が有ったら、終了 --
      if (processBoard[y][x] === hole) break;

      if (processBoard[y][x] === none || processBoard[y][x] === notPlayer) {
        // 盤面に石なし、相手の石はキープする。
        cell.push([y, x]);
      } else if (processBoard[y][x] === player) {
        // 石あり。キープしていた個所をひっくり返す。
        if (cell.length > 0) {
          for (const [cy, cx] of cell) {
            processBoard[cy][cx] = player;
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

  // -- 指定したターンゲームをするend --

  // -- 結果を出力する --
  processBoard.forEach((p) => {
    console.log(p.join(""));
  });
  // -- 結果を出力するend --
});
