/*
マップの行数 H と列数 W とマップを表す H 行 W 列の文字列 S_1 ... S_H が与えられるので、
隣接する上下左右のマスが全て '#' であるマスの y , x 座標 を答えてください。

ただし、左端のマスの場合は「右のマスが '#' 」であれば、右端のマスの場合は「左のマスが '#' 」であれば隣接する左右のマスが全て '#' であるものとします。
また、上端のマスの場合は「下のマスが '#' 」であれば、下端のマスの場合は「上のマスが '#' 」であれば隣接する上下のマスが全て "#" であるものとします。

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

  // -- 変換する4箇所の指定を行う --
  const direction = {
    top: [-1, 0],
    right: [0, 1],
    bottom: [1, 0],
    left: [0, -1],
  };
  // -- 変換する4箇所の指定を行うend --

  // -- 範囲内を全捜索して、条件に合致する要素を出力する -
  const numbers = []; // 最終的に条件に合致する要素を入れる

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const components = []; // -- 現在の状態を入れる箱

      // -- 指定した要素をチェックし、要素を投入 --
      for (const [dirY, dirX] of Object.values(direction)) {
        // for-of文は配列の中の要素数回ループする事ができるので、方向の指定にピッタリ！
        // dy, dxで新しい座標を指定
        const dy = y + dirY;
        const dx = x + dirX;
        if (dy < 0 || dy >= height || dx < 0 || dx >= width) {
          // 範囲外はnullを投入し、それ以外はそれぞれの要素を投入
          components.push(null);
        } else {
          components.push(board[dy][dx]);
        }
      }
      // -- 指定した要素をチェックし、要素を投入end --

      // -- 配列をチェックし、条件に合致する要素を記録する --
      const allow = [null, "#"];
      const checkComponents = components.every((c) => allow.includes(c));
      if (checkComponents) numbers.push([y, x]);
      // -- 配列をチェックし、条件に合致する要素を記録するend --
    }
  }
  // -- 範囲内を全捜索して、条件に合致する要素を出力するend --

  // -- 出力する --
  numbers.forEach((number) => {
    console.log(number.join(" "));
  });
  // -- 出力するend --
});
