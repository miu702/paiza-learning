/*
開始時点の x , y 座標、移動の回数 N が与えられます。
続くN行で移動の向き d1 ... dN が与えられるので、与えられた順に移動をしたときの各移動後の x , y 座標 を答えてください。
移動者ははじめ北を向いています。

なお、マスの座標系は下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。

・ 移動をするごとに向く方角が変わること
・ 移動前に向いている方角によって同じ移動の向きでも座標の変化が違うこと
の 2 点に気をつけてください。
例えば、上の図の状態から右に移動を行った場合、下の図のような状態になります。


入力される値
X Y N       
d1      
...     
dN


・ 1 行目には、開始時点の x , y 座標を表す X , Y, 移動の回数 N が与えられます。
・ 続く N 行 (1 ≦ i ≦ N) には、盤面の i 回目の移動の向きを表す文字 d_i が与えられます。


期待する出力
N 行での出力

・ 各移動後の x , y 座標を出力してください。


x_1 y_1
...
x_N y_N


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
  // -- 入力を変数に変換 --
  const [sx, sy, times] = lines[0].split(" ").map(Number);
  const influences = lines.slice(1, times + 1);
  // -- 入力を変数に変換end --

  // -- 入力を確認する --
  if (isNaN(sx) || isNaN(sy) || isNaN(times)) {
    console.error("入力の1行目の初期の座標(x, y)、移動回数は数値で入力してください。");
    return;
  }

  if (times !== influences.length) {
    console.error("指定した移動回数と入力されている方向の数が一致しません。");
    return;
  }

  const allow = ["L", "R"];
  const checkInfluences = influences.every((inf) => allow.includes(inf));
  if (!checkInfluences) {
    console.error("方向の指定はL(左)か、R(右)で指定してください。");
    return;
  }
  // -- 入力を確認するend --

  // -- 4方向で左右が違うので、それぞれ定義 --
  const direction = {
    N: { L: [-1, 0], R: [1, 0] },
    E: { L: [0, -1], R: [0, 1] },
    S: { L: [1, 0], R: [-1, 0] },
    W: { L: [0, 1], R: [0, -1] },
  };
  // -- 4方向で左右が違うので、それぞれ定義end --

  // -- 初期値群 --
  let [dx, dy] = [sx, sy];
  let currentDirection = "N"; // -- 初期状態は北(N)を必ず向いている --
  // -- 初期値群end --

  // -- 移動回数分動く。 --
  for (const influence of influences) {
    // -- 移動距離を取得、移動 --
    const [dirX, dirY] = direction[currentDirection][influence];
    dx += dirX;
    dy += dirY;

    // -- 向きを変更する --
    if (currentDirection === "N") {
      // -- 北(N)から、左に行くと西(W)、右に行くと東(E) --
      currentDirection = influence === "L" ? (currentDirection = "W") : (currentDirection = "E");
    } else if (currentDirection === "E") {
      // -- 東(E)から、左に行くと北(N)、右に行くと南(S) --
      currentDirection = influence === "L" ? (currentDirection = "N") : (currentDirection = "S");
    } else if (currentDirection === "S") {
      // -- 南(S)から、左に行くと東(E)、右に行くと西(W) --
      currentDirection = influence === "L" ? (currentDirection = "E") : (currentDirection = "W");
    } else if (currentDirection === "W") {
      // -- 西(W)から、左に行くと南(S)、右に行くと北(N) --
      currentDirection = influence === "L" ? (currentDirection = "S") : (currentDirection = "N");
    }
    // -- 向きを変更するend --

    // -- 移動結果を出力する --
    console.log(dx, dy);
  }
  // -- 移動回数分動く。end --
});
