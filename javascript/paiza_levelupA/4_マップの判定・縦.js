/*
マップの行数 H と列数 W とマップを表す H 行 W 列の文字列 S_1 ... S_H が与えられるので、
上下のマスがどちらも '#' であるようなマスの y , x 座標 を答えてください。

ただし、上端のマスの場合は「下のマスが '#'」であれば、下端のマスの場合は「上のマスが '#'」であれば条件を満たすものとします。

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
N (1 ≦ N ≦ H×W) 行の出力

・ 条件を満たすマスの y , x 座標を出力してください。
・ 左上 (y = 0, x = 0) のマスから順に、x 座標 , y 座標の順で増加するように出力してください。詳しくは入出力例を参考にしてください。


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
  // -- 入力値をそれぞれの変数に変換する --
  const [height, width] = lines[0].split(" ").map(Number);
  const sheet = lines.slice(1, height + 1);

  const board = [];
  for (let i = 0; i < sheet.length; i++) {
    const sh = sheet[i].split("");
    board.push(sh);
  }
  // -- 入力値をそれぞれの変数に変換するend --

  // -- 範囲内を全捜索して、条件に合致する要素を出力する --
  const numbers = [];
  for (let j = 0; j < height; j++) {
    for (let k = 0; k < width; k++) {
      let check = true;
      if (j === 0) {
        const upperEdge = board[j + 1][k];
        if (upperEdge !== "#") check = false;
      } else if (j === height - 1) {
        const bottomEdge = board[j - 1][k];
        if (bottomEdge !== "#") check = false;
      } else {
        const upper = board[j + 1][k];
        const bottom = board[j - 1][k];
        if (upper !== "#" || bottom !== "#") check = false;
      }

      if (check) numbers.push([j, k]);
    }
  }
  // -- 範囲内を全捜索して、条件に合致する要素を出力するend --

  // --  出力する --
  numbers.forEach((number) => {
    console.log(number.join(" "));
  });
});
