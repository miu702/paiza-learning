/*
行数 H , 列数 W の盤面があり、各マスには文字が 1 つだけ書かれています。
盤面と N 個の y , x 座標 が与えられるので、与えられた座標の文字を順に出力してください。

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


・ 1 行目には盤面の行数を表す整数 H , 盤面の列数を表す整数 W , 
与えられる座標の数を表す整数 N が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、
S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。
・ 続く N 行 には、文字を答えるための y_i , x_i 座標が与えられます。(1 ≦ i ≦ N)


期待する出力
N 行の出力

・ i 行目 (1 ≦ i ≦ N) には、i 番目の座標 y_i, x_i の盤面の文字 A_i を出力してください。
A_1
...
A_N
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
    const coor = numbers[j].split(" ").map(Number);
    coordinate.push(coor);
  }
  // -- 入力値をそれぞれの変数に変換するend --

  // -- 操作回数分検索を実施し、配列に投入する --
  const words = [];
  for (const [coordY, coordX] of coordinate) {
    words.push(board[coordY][coordX]);
  }
  // -- 操作回数分検索を実施し、配列に投入するend --

  // -- 出力する --
  console.log(words.join("\n"));
});
