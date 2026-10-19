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
  for (let l = 0; l < order.length; l++) {
    // 現在地からの移動先の安全を確認し、エリア拡大する
    const [sy, sx] = order[l];
    for (const [dirY, dirX] of Object.values(direction)) {
      // Object.values(オブジェクト名)とすることで、インデックス番号のようにバリューのみを使用する
      const ny = sy + dirY;
      const nx = sx + dirX;
      if (ny < upper || ny > buttom || nx < left || nx > right || processingBoard[ny][nx] === wall || processingBoard[ny][nx] === visited) continue;
      order.push([ny, nx]);
      processingBoard[ny][nx] = visited;
    }

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
