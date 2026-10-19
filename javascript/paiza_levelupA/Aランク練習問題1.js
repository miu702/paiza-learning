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
  // -- 入力値を変数に変換 --
  const [height, width] = lines[0].split(" ").map(Number);
  const inputMap = lines.slice(1, height + 1);
  const board = [];
  for (let i = 0; i < inputMap.length; i++) {
    const boa = inputMap[i].split("");
    board.push(boa);
  }
  // -- 入力値を変数に変換 --

  // -- 自分の位置を見つける --
  let sx;
  let sy;
  let isfind = false;
  const order = []; // 最終的な座標を管理する箱(今後出てきた移動候補も入れる) --

  for (let x = 0; x < inputMap.length; x++) {
    if (isfind) break;
    for (let y = 0; y < inputMap[x].length; y++) {
      if (isfind) break;
      if (board[x][y] === "*") {
        sx = x;
        sy = y;
        order.push([[x, y]]);
        isfind = true;
      }
    }
  }
  // -- 自分の位置を見つける --

  // -- 移動の仕方をオブジェクトで管理し、if文を削減する --
  const dirction = {
    // -- 移動の優先は、 N → S → W → E --
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };
  // -- 移動の仕方をオブジェクトで管理し、if文を削減する --

  // -- フィールドの捜索を実施して、条件に合致するとき、処理をする --
  let processingBoard = board.map((row) => [...row]); // mapを使用することで、コピーする。(mapは配列を作り直すことができる。)
  processingBoard[sy][sx] = 0;
  const upper = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;
  const wall = "#";

  // 最終的な座標を管理する箱(今後出てきた移動候補も入れる)の長さが処理の最大回数 --
  for (let i = 0; i < order.length; i++) {
    const row = [];
    // まず、要素を1つずつ取り出す。
    for (const [sy, sx] of order[i]) {
      for (const [dirY, dirX] of Object.values(dirction)) {
        const ny = sy + dirY;
        const nx = sx + dirX;
        if (ny < 0 || ny > buttom || nx < left || nx > right || processingBoard[ny][nx] === wall || typeof processingBoard[ny][nx] === "number") continue;
        row.push([ny, nx]);
        processingBoard[ny][nx] = i + 1;
      }
    }
    // -- 要素が存在するときのみ、配列に追加する。これをしないと、for-of文の形が崩れ、エラーにつながる
    if (row.length > 0) order.push(row);
  }
  // -- フィールドの捜索を実施して、条件に合致するとき、処理をする --

  // -- 結果を出力する --
  processingBoard.forEach((processing) => {
    console.log(processing.join(" "));
  });
});
