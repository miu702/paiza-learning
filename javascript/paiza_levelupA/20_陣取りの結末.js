/*
盤面の情報が与えられます。
現在プレイヤーのいるマスは '*' になっており、そのマスはプレイヤーの陣地です。

プレイヤーは次の操作をできなくなるまで続けます。

・ プレイヤーは現在の陣地から上下左右に 1 マス移動することで到達できるマスをプレイヤーの陣地にする。ただし障害物( '#' )のマスは陣地にできない。

操作を終えた後のプレイヤーの陣地を '*' にした盤面を出力してください。

入力される値
H W     
S_0     
...     
S_(H-1)


・ 1行目では、盤面の行数 H , 列数 W が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)


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
  const order = [];
  let search = true;
  for (let j = 0; j < board.length; j++) {
    if (!search) break;
    for (let k = 0; k < board[j].length; k++) {
      if (!search) break;
      if (board[j][k] === "*") {
        order.push([j, k]);
        search = false;
      }
    }
  }
  // --  自分の位置を見つけるend --

  // --  移動方法をオブジェクト形式で書くことでif文を最小化する --
  const direction = {
    // -- 移動の順番は、N → S → W → E
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };
  // --  移動方法をオブジェクト形式で書くことでif文を最小化するend --

  // -- 処理に必要な初期値 --
  let processingBoard = board.map((row) => [...row]); // mapを使用することで、コピーする。(mapは配列を作り直すことができる。)
  let [sy, sx] = order[0];

  const upper = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;
  const wall = "#";
  const visited = "*";
  // -- 処理に必要な初期値 --

  // -- 処理欄 --
  // -- 今回は移動が可能である配列を作成し、最大値をそこの長さにすることで膨大な処理になることを防ぐ --
  let isMoveCount = 0;
  for (let l = 0; l < order.length; l++) {
    if (isMoveCount === 4) break; // -- 移動できないまたは、移動済みのときカウント増加し、4方向無理な時処理を強制終了する。

    // 現在地からの移動先の安全を確認し、エリア拡大する
    const [sy, sx] = order[l];
    for (const [dirY, dirX] of Object.values(direction)) {
      if (isMoveCount === 4) break; // -- 移動できないまたは、移動済みのときカウント増加し、4方向無理な時処理を強制終了する。
      // Object.values(オブジェクト名)とすることで、インデックス番号のようにバリューのみを使用する
      const ny = sy + dirY;
      const nx = sx + dirX;
      if (ny < upper || ny > buttom || nx < left || nx > right || processingBoard[ny][nx] === wall || processingBoard[ny][nx] === visited) {
        isMoveCount++;
      } else {
        order.push([ny, nx]);
        processingBoard[ny][nx] = visited;
      }
    }
    // カウントを0に戻す。
    isMoveCount = 0;
    // 現在地からの移動先の安全を確認し、エリア拡大するend
  }
  // -- for-ofを使用することで配列の長さ分処理を実施することができるend --
  // -- 今回は移動が可能である配列を作成し、最大値をそこの長さにすることで膨大な処理になることを防ぐend --
  // -- 処理欄end --

  // -- 出力する --
  processingBoard.forEach((processing) => {
    console.log(processing.join(""));
  });
});
