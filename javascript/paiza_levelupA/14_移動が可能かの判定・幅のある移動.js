/*
マップの行数 H と列数 W , 障害物を '#' で移動可能な場所を '.' で表した H 行 W 列のマップ S_1 ... S_H , 現在の座標 sy, sx, 移動の回数 N が与えられます。
続けて、 N 回の移動の向き d_1 ... d_N と移動するマス数 l_1 ... l_N が与えられます。

プレイヤーははじめ北を向いています。

各移動が可能である場合、移動後の y , x 座標 を出力してください。
移動が可能でない場合(移動しきれない場合)、移動できるところまで移動した後の座標を出力した後に "Stop" を出力して、以降の移動を打ち切ってください。

各移動が可能であるということは、以下の図の通り
「今いるマスから移動先のマスまでに障害物がない　かつ　移動先がマップの範囲外でない」
ということを意味します。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。


入力される値
H W sy sx N        
S_0         
...     
S_(H-1)     
d_1 l_1     
...     
d_N l_N


・ 1 行目にはマップの行数を表す整数 H , マップの列数を表す整数 W , 現在の y, x 座標を表す sy sx , 移動する回数 N が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、マップの i 行目の文字をまとめた文字列 S_i が与えられ、 S_i の j 文字目は、マップの i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)
・ 続く N 行のうち i 行目 (1 ≦ i ≦ N) には、i 回目の移動の向き d_i と移動するマス数 l_i が与えられます。



期待する出力
M (1 ≦ M ≦ N+1) 行の出力

・ k (1 ≦ k ≦ M) 回目の移動後の y , x 座標、y_k, x_k を出力してください。
・ M 回目で移動しきれない場合、移動できるところまで移動した後の y , x 座標、y_M, x_M を出力した後に "Stop" を出力してください。


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
y_M x_M
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
  // -- 入力処理end --

  // -- 入力チェック --
  if (isNaN(height) || isNaN(width) || isNaN(sy) || isNaN(sx) || isNaN(move)) {
    console.error("移動するマップの大きさ(y, x)、初期の座標(y, x)、移動回数が数値で入力されていません。");
    return;
  }

  if (height < 1 || height > 20 || width < 1 || width > 20) {
    console.error("移動するマップの大きさは1~20マスで指定ください。");
    return;
  }

  if (move < 1 || move > 100) {
    console.error("移動する回数は1~100で指定してください。");
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

  let [dy, dx] = [sy, sx];
  let currentDirection = "N";
  let isMove = true;

  // -- 入力された回数分順番に処理を実施する --
  for (const inputDir of inputMoves) {
    // -- 移動できない時、強制停止 --
    if (!isMove) break;

    // -- 入力値を使えるように分割し、入力チェックを実施する --
    const [dir, steps] = inputDir.split(" ");
    if (!(dir === "L" || dir === "R")) {
      console.error("移動できる方向はL(左)、R(右)のみです。");
      return;
    }

    if (steps < 1 || steps > 20) {
      console.error("移動できる距離は1~20マスです。");
      return;
    }

    // -- 移動位置の検索 --
    const [dirY, dirX] = directionList[currentDirection][dir];

    // -- 指定回数移動してみる --
    for (let step = 0; step < steps; step++) {
      // -- ステップごとに掛け算し、移動後の調査 --
      const ny = dy + dirY * step;
      const nx = dx + dirX * step;

      // -- 移動先が範囲外または壁にアクセスする可能性があるので、予めチェックする --
      if (ny < upper || ny > bottom || nx < left || nx > right || board[ny][nx] === "#") {
        dy += dirY * (step - 1);
        dx += dirX * (step - 1);
        console.log(dy, dx);
        console.log("Stop");
        isMove = false;
        break;
      }
    }

    // -- 最後まで移動できるとき、移動して、移動先を出力する --
    if (isMove) {
      dy += dirY * steps;
      dx += dirX * steps;
      console.log(dy, dx);
    }

    // -- 方向を変換する --
    currentDirection = moveList[currentDirection][dir];
  }

  // -- 処理end --
});
