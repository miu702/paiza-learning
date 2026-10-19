/*
マップの行数 H と列数 W とマップを表す H 行 W 列の文字列 S_1 ...S_H が与えられます。
要素が '#' になっているマスが 1 つあるので、その y , x 座標 を答えてください。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。


入力される値
H W     
S_0     
...     
S_(H-1)


・ 1 行目には盤面の行数を表す整数 H , 盤面の列数を表す整数 W が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、
S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)


期待する出力
1行の出力

・ 要素が '#' になっているマスの y , x 座標を 1 行で出力してください。


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
