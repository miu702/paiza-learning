/*
開始時点の y , x 座標 と移動の回数 N が与えられます。
続く N 行で移動の方角 d_1 ... d_N が与えられるので、与えられた順に移動をしたときの各移動後の y , x 座標 を答えてください。

ただし、図の通り、上側（ y 軸の負の向き）を北とします。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。

入力される値
Y X N       
d_1     
...     
d_N


・ 1 行目には、開始時点の y , x 座標を表す Y , X, 移動の回数 N が与えられます。
・ 続く N 行 (1 ≦ i ≦ N) には、盤面の i 回目の移動の方角を表す文字 d_i が与えられます。


期待する出力
N 行での出力

・ 各移動後の y , x 座標を出力してください。


y_1 x_1
...
y_N x_N


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
  // -- 初期値を出力する --
  const [y, x, N] = lines[0].split(" ").map(Number);
  const instructions = lines.slice(1, N + 1);

  // -- 変換する4箇所の指定を行う --
  const direction = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
  };

  // -- 指定回数動く --
  let [sy, sx] = [y, x]; // 初期値

  for (let i = 0; i < instructions.length; i++) {
    // オブジェクトの検索方法はオブジェクト名[キー名]になるので、ここでは、direction[instructions[i]]になる。
    const [dirY, dirX] = direction[instructions[i]];

    // 要素を足して変更する。
    sy = sy + dirY;
    sx = sx + dirX;

    // -- 出力する --

    console.log(sy, sx);
  }
});
