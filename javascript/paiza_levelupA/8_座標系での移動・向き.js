/*
開始時点の y , x 座標 と向いている方角 D が与えられます。
続く 1 行で移動の向き d が与えられるので、その向きに移動した後の y , x 座標 を答えてください。
移動前に向いている方角によって同じ移動の向きでも座標の変化が違うことに気をつけてください。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。
以下の図を参考にしてみてください。


入力される値
Y X D       
d


・ 1 行目には、開始時点の y , x 座標を表す Y , X,　現在の向いている方角を表す文字 D が与えられます。
・ 2 行目には、移動の向きを表す文字 d が与えられます。


期待する出力
1 行での出力

・ 移動した後の y , x 座標を出力してください。


y x


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
  const [syStr, sxStr, line] = lines[0].split(" ");
  const sy = Number(syStr);
  const sx = Number(sxStr);
  const walking = lines[1];

  // -- 4方向で左右が違うので、それぞれ定義 --
  const direction_N = {
    L: [0, -1],
    R: [0, 1],
  };

  const direction_E = {
    L: [-1, 0],
    R: [1, 0],
  };

  const direction_S = {
    L: [0, 1],
    R: [0, -1],
  };

  const direction_W = {
    L: [1, 0],
    R: [-1, 0],
  };
  // -- 4方向で左右が違うので、それぞれ定義end --

  // -- 4方向それぞれを判断し、if文で分岐させることで、それぞれのオブジェクトに対応させる。 --
  let [dy, dx] = [sy, sx];
  if (line === "N") {
    const [dirY, dirX] = direction_N[walking];
    dy += dirY;
    dx += dirX;
  } else if (line === "E") {
    const [dirY, dirX] = direction_E[walking];
    dy += dirY;
    dx += dirX;
  } else if (line === "S") {
    const [dirY, dirX] = direction_S[walking];
    dy += dirY;
    dx += dirX;
  } else if (line === "W") {
    const [dirY, dirX] = direction_W[walking];
    dy += dirY;
    dx += dirX;
  } else {
    console.error("向いている方角が不正です。");
    return;
  }
  // -- 4方向それぞれを判断し、if文で分岐させることで、それぞれのオブジェクトに対応させる。 --

  // -- 移動結果を出力する --
  console.log(dy, dx);
});
