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
  // -- 入力 → 変数 --
  const [height, width, processingLimit] = lines[0].split(" ").map(Number);
  const inputNumbers = lines.slice(1, height + 1);
  const procedure = lines[height + 1];
  const board = [];
  for (let i = 0; i < inputNumbers.length; i++) {
    const boa = inputNumbers[i].split("");
    board.push(boa);
  }
  // console.log(height, width, processingLimit);
  // console.log(procedure);
  // console.log(board);
  // -- 入力 → 変数end --

  // -- マスからの移動方法を管理する --
  const dirction = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
  };
  // -- マスからの移動方法を管理するend --

  // -- 処理回数を管理する --
  let processingBoard = board.map((row) => [...row]);

  const top = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;

  const black = "#";
  const white = ".";

  let step = 0;
  while (step < procedure.length) {
    procedure[step] === "D" ? Dilation(top, buttom, left, right) : Erosion();
    step++;
  }
  // -- 処理回数を管理するend --

  // -- 処理本体 --

  function Dilation() {
    const next = processingBoard.map((row) => [...row]);

    for (let dy = 0; dy < height; dy++) {
      for (let dx = 0; dx < width; dx++) {
        for (const [dirY, dirX] of Object.values(dirction)) {
          const ny = dy + dirY;
          const nx = dx + dirX;
          if (ny < top || ny > buttom || nx < left || nx > right) continue;
          if (processingBoard[ny][nx] === black) next[dy][dx] = black;
        }
      }
    }

    processingBoard = next;
  }

  function Erosion() {
    const next = processingBoard.map((row) => [...row]);

    for (let dy = 0; dy < height; dy++) {
      for (let dx = 0; dx < width; dx++) {
        for (const [dirY, dirX] of Object.values(dirction)) {
          const ny = dy + dirY;
          const nx = dx + dirX;
          if (ny < top || ny > buttom || nx < left || nx > right) continue;
          if (processingBoard[ny][nx] === white) next[dy][dx] = white;
        }
      }
    }

    processingBoard = next;
  }
  // -- 処理本体end --

  // -- 結果を出力する --
  processingBoard.forEach((processing) => {
    console.log(processing.join(""));
  });
});
