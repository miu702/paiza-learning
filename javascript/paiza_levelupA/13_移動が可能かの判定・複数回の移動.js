/*
マップの行数 H と列数 W , 現在の座標 sy , sx , 移動の回数 N が与えられます。
続けて、障害物を '#' で、移動可能な場所を '.' で表した H 行 W 列 のマップ S_1 ... S_H と N 回の移動の向き d_1 ... d_N が与えられます。

移動者ははじめ北を向いています。移動者は、1 回の移動で次の行動を行います。

「移動の向きに方向転換したのち、1 マス進む。」

各移動が可能である場合、移動後の y , x 座標を出力してください。
移動が可能でない場合、移動後の座標を出力する代わりに "Stop" を出力して、以降の移動を打ち切ってください。

各移動が可能であるということは、以下の図の通り
「移動先が障害物でない　かつ　移動先がマップの範囲外でない」
ということを意味します。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。


入力される値
H W sy sx N     
S_0     
...     
S_(H-1)     
d_1     
...     
d_N


・ 1 行目にはマップの行数を表す整数 H , マップの列数を表す整数 W , 現在の y, x 座標を表す sy sx , 移動する回数 N が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、マップの i 行目の文字をまとめた文字列 S_i が与えられ、 S_i の j 文字目は、マップの i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)
・ 続く N 行のうち i 行目 (1 ≦ i ≦ N) には、i 回目の移動の向き d_i が与えられます。


期待する出力
M (1 ≦ M ≦ N) 行の出力

・ k (1 ≦ k ≦ M) 回目の移動後の y , x 座標、y_k, x_k を出力してください。
・ ただし、M 回目で移動しきれない場合、"Stop" を出力してください。


y_1 x_1
...
y_k x_k
...
y_M x_M


または

y_1 x_1
...
y_k x_k
...
y_(M-1) x_(M-1)
Stop


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
  // -- 入力処理 --
  const [height, width, sy, sx, move] = lines[0].split(" ").map(Number);
  const inputMap = lines.slice(1, height + 1);
  const board = [];
  for (let i = 0; i < inputMap.length; i++) {
    const boa = inputMap[i].split("");
    board.push(boa);
  }
  const inputMoves = lines.slice(height + 1, lines.length);
  console.log(inputMoves);
  // -- 入力処理end --

  // -- 入力チェック --
  if (isNaN(height) || isNaN(width) || isNaN(sy) || isNaN(sx) || isNaN(move)) {
    console.error("移動するマップの大きさ(y, x)、初期の座標(y, x)、移動回数が数値で入力されていません。");
    return;
  }

  if (height !== board.length) {
    console.error("指定された列数と入力された列数が一致しません。");
    return;
  }

  for (let i = 0; i < height; i++) {
    if (width !== board[i].length) {
      console.error(`指定された行数と${i + 1}列目の行数が一致しません。`);
      return;
    }
    for (let j = 0; j < width; j++) {
      if (!(board[i][j] === "." || board[i][j] === "#")) {
        console.error(`入力されるマップデータは、.または#のみにしてください。：違反座標${i + 1}, ${j + 1}`);
        return;
      }
    }
  }

  if (move !== inputMoves.length) {
    console.error("指定された移動回数と入力された移動回数が一致しません。");
    return;
  }

  //     const allow = ["L","R"];
  //     const checkDirection = inputDirections.every((input) => allow.includes(input));

  //     if(!checkDirection) {
  //         console.error("入力された移動方向は左(L)、右(R)のみにしてください。");
  //         return;
  //     }

  // -- 入力チェックend --

  // -- 移動ルール　--
  const directionList = {
    N: { L: [0, -1], R: [0, 1] },
    E: { L: [-1, 0], R: [1, 0] },
    S: { L: [0, 1], R: [0, -1] },
    W: { L: [1, 0], R: [-1, 0] },
  };

  const moveList = {
    N: { L: "W", R: "E" },
    E: { L: "N", R: "S" },
    S: { L: "E", R: "W" },
    W: { L: "S", R: "N" },
  };
  // -- 移動ルールend　--

  // -- 処理 --
  // -- 初期値--
  const upper = 0;
  const bottom = height - 1;
  const left = 0;
  const right = width - 1;

  let [dy, dx] = [sy - 1, sx - 1];
  let currentDirection = "N";
  let isMove = true;

  // -- 入力された回数分順番に処理を実施する --
  for (const inputDir of inputMoves) {
    const [dir, steps] = inputDir.split(" ");

    // -- 移動位置の検索 --
    const [dirY, dirX] = directionList[currentDirection][dir];

    // -- 指定回数移動してみる --
    for (let step = 1; step <= steps; step++) {
      const ny = dy + dirY * step;
      const nx = dx + dirX * step;

      // -- 移動先が範囲外または壁にアクセスする可能性があるので、予めチェックする --
      if (ny < upper || ny > bottom || nx < left || nx > right || board[ny][nx] === "#") {
        console.log(dy, dx);
        console.log("Stop");
        isMove = false;
        break;
      } else {
        dy += dirY;
        dx += dirX;
      }
      console.log(dy, dx);
    }

    // -- 方向を変換する --
    currentDirection = moveList[currentDirection][dir];
  }

  // -- 処理end --
});
