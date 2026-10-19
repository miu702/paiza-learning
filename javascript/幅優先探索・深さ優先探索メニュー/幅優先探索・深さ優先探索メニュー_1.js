/*
グリッドの行数 H と列数 W が与えられるので、マス (y,x) から次の移動を
 1 回おこなった時に到達することができるマスを '*' , それ以外のマスを '.' にしたグリッドを出力してください。

・現在いるマスを (y,x) としたとき、(y+1,x), (y-1,x), (y,x+1), (y,x-1) のいずれかのマスに移動する。


ただし、グリッドの外へは移動することができません。
なお、グリッドの左上・右上・左下・右下のマスをそれぞれ (0,0), (0,W-1), (H-1,0), (H-1,W-1) とします。
到達できるマスに (y,x) が含まれることに気をつけてください。


入力される値
H W
y x
・ 1 行目では、グリッドの行数 H , 列数 W が半角スペース区切りで与えられます。
・ 2 行目では、移動を開始するマスの座標を表す y, x が半角スペース区切りで与えられます。
入力値最終行の末尾に改行が１つ入ります。



期待する出力
H 行の出力
・マス (y,x) から前後左右に 1 マス移動して到達することができるマスを '*' , 
それ以外のマスを '.' にしたグリッドを出力してください。
・グリッドの行ごとに改行区切りで出力してください。
・詳しくは入力例を参考にしてください。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ H, W ≦ 10
・0 ≦ y < H
・0 ≦ x < W
*/
rocess.stdin.resume();
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
  const [height, width] = lines[0].split(" ").map(Number);
  const [sy, sx] = lines[1].split(" ").map(Number);

  const direction = {
    C: [0, 0],
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  const top = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;
  const board = Array.from({ length: height }, () => Array(width).fill("."));
  for (const [dirY, dirX] of Object.values(direction)) {
    const ny = sy + dirY;
    const nx = sx + dirX;
    if (ny < top || ny > buttom || nx < left || nx > right) continue;
    board[ny][nx] = "*";
  }

  board.forEach((b) => {
    console.log(b.join(""));
  });
});
