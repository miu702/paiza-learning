/*
行数 H , 列数 W の盤面があり、各マスには文字が 1 つだけ書かれています。
盤面と N 個 の y , x 座標 が与えられるので、盤面の与えられた座標の文字を "#" に書き換えた後の盤面を
出力してください。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。

入力される値
H W N   
S_0       
...     
S_(H-1)     
y_1 x_1     
...     
y_N x_N


・ 1 行目には盤面の行数を表す整数 H , 盤面の列数を表す整数 W , 与えられる座標の数を表す整数 N が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、 S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)
・ 続く N 行 には、 文字を書き換えるマスの y , x 座標が与えられます。(1 ≦ i ≦ N)

期待する出力
H 行での出力

・ 書き換えた後の盤面を H 行で出力してください。
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
  // -- 入力値をそれぞれの変数に変換する --
  const [height, width, num] = lines[0].split(" ").map(Number);
  const sheet = lines.slice(1, height + 1);

  const board = [];
  for (let i = 0; i < sheet.length; i++) {
    const sh = sheet[i].split("");
    board.push(sh);
  }

  const numbers = lines.slice(height + 1);
  const coordinate = [];
  for (let j = 0; j < numbers.length; j++) {
    const coord = numbers[j].split(" ").map(Number);
    coordinate.push(coord);
  }

  // -- 入力値をそれぞれの変数に変換するend --

  // -- 要素を変更する --
  for (const [coordY, coordX] of coordinate) {
    board[coordY][coordX] = "#";
  }
  // -- 要素を変更するend --

  // -- 出力する --
  board.forEach((b) => {
    console.log(b.join(""));
  });
  // -- 出力するend --
});
