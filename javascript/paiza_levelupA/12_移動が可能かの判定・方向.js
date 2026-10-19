/*
マップの行数 H と列数 W , 障害物を '#' , 移動可能な場所を '.' で表した H 行 W 列のマップ S_1 ... S_H が与えられます。
続けて現在の座標 sy , sx , 現在向いている方角 d , １マス移動する方向 m が与えられるので、移動が可能かどうかを判定してください。

移動が可能であるということは、以下の図の通り
「移動先が障害物でない　かつ　移動先がマップの範囲外でない」
ということを意味します。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。


入力される値
H W sy sx d m      
S_0     
...     
S_(H-1)


・ 1 行目にはマップの行数を表す整数 H , マップの列数を表す整数 W , 現在の y, x 座標を表す sy sx , 現在向いている方角 d , 1 マス移動する方向 m が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、マップの i 行目の文字をまとめた文字列 S_i が与えられ、 S_i の j 文字目は、マップの i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)


期待する出力
移動が可能である場合 "Yes" を、不可能である場合 "No" を出力してください。

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
  const [heightStr, widthStr, syStr, sxStr, direction, move] = lines[0].split(" ");
  const height = Number(heightStr);
  const width = Number(widthStr);
  const sy = Number(syStr);
  const sx = Number(sxStr);

  const inputMap = lines.slice(1, height + 1);
  const board = [];
  for (let i = 0; i < inputMap.length; i++) {
    const boa = inputMap[i].split("");
    board.push(boa);
  }
  // -- 入力処理end --

  // -- 入力チェック --
  if (isNaN(height) || isNaN(width) || isNaN(sy) || isNaN(sx)) {
    console.error("移動するマップの大きさ(y, x)、初期の座標(y, x)が数値で入力されていません。");
    return;
  }

  if (!(direction === "N" || direction === "E" || direction === "S" || direction === "W")) {
    console.error("移動先の方位は、北(N)、東(E)、南(S)、西(W)で指定してください。");
    return;
  }

  if (!(move === "L" || move === "R")) {
    console.error("移動する方向は、左(L)、右(R)で指定してください。");
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
  // -- 入力チェックend --

  // -- 移動ルール　--
  const directionList = {
    N: { L: [0, -1], R: [0, 1] },
    E: { L: [-1, 0], R: [1, 0] },
    S: { L: [0, 1], R: [0, -1] },
    W: { L: [1, 0], R: [-1, 0] },
  };
  // -- 移動ルールend　--

  // -- 処理 --
  // -- 初期値--
  const upper = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;
  let [dy, dx] = [sy, sx];
  let isMove = true;

  // -- 変更処理 --
  const [dirY, dirX] = directionList[direction][move];
  // -- 範囲外にアクセスする可能性があるので、予めチェックする --
  const ny = dy + dirY;
  const nx = dx + dirX;

  if (ny < upper || ny > buttom || nx < left || nx > right) {
    isMove = false;
  } else {
    // -- 移動先が範囲外でない時、足す--
    dy += dirY;
    dx += dirX;
    if (board[dy][dx] === "#") isMove = false;
  }

  // -- 処理end --

  // -- 出力する --
  console.log(isMove ? "Yes" : "No");
});
