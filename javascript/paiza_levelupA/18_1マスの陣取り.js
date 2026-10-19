/*
盤面の情報が与えられます。現在プレイヤーのいるマスは '*' になっており、そのマスはプレイヤーの陣地です。
プレイヤーは現在の陣地から上下左右に 1 マス移動することで到達できるマスをプレイヤーの陣地にします。
プレイヤーの陣地を '*' にした盤面を出力してください。


入力される値
H W     
S_0     
...     
S_(H-1)


・ 1 行目では、盤面の行数 H , 列数 W が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、
S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)


期待する出力
H 行の出力

・ 操作後の盤面を H 行で出力してください。


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
  // --  入力処理 --
  const [height, width] = lines[0].split(" ").map(Number);
  const inputMap = lines.slice(1, height + 1);
  const board = [];
  for (let i = 0; i < inputMap.length; i++) {
    const boa = inputMap[i].split("");
    board.push(boa);
  }
  // --  入力処理end --

  // --  自分の位置を見つける --
  const myPlace = [];
  let search = true;
  for (let j = 0; j < board.length; j++) {
    if (!search) break;
    for (let k = 0; k < board[j].length; k++) {
      if (!search) break;
      if (board[j][k] === "*") {
        myPlace.push(j, k);
        search = false;
      }
    }
  }
  // --  自分の位置を見つけるend --

  // --  移動方法をオブジェクト形式で書くことでif文を最小化する --
  const direction = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
  };
  // --  移動方法をオブジェクト形式で書くことでif文を最小化するend --

  // -- 処理に必要な初期値 --
  let processingBoard = board.map((row) => [...row]); // mapを使用することで、コピーする。(mapは配列を作り直すことができる。)
  let [sy, sx] = myPlace;
  const upper = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;
  // -- 処理に必要な初期値 --

  // -- for-ofを使用することで配列の長さ分処理を実施することができる --
  for (const [dirY, dirX] of Object.values(direction)) {
    // Object.values(オブジェクト名)とすることで、インデックス番号のようにバリューのみを使用する
    const ny = sy + dirY;
    const nx = sx + dirX;
    if (ny < upper || ny > buttom || nx < left || nx > right) {
      continue;
    } else {
      processingBoard[ny][nx] = "*";
    }
  }
  // -- for-ofを使用することで配列の長さ分処理を実施することができるend --

  // -- 出力する --
  processingBoard.forEach((processing) => {
    console.log(processing.join(""));
  });
});
