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
  // -- 入力値を変換 --
  const [height, width] = lines[0].split(" ").map(Number);
  const [startY, startX] = lines[1].split(" ").map(Number);
  const [goalY, goalX] = lines[2].split(" ").map(Number);
  const inputMap = lines.slice(3, height + 3);
  const board = [];
  for (let i = 0; i < inputMap.length; i++) {
    const boa = inputMap[i].split("");
    board.push(boa);
  }
  // -- 入力値を変換end --

  // -- 移動ルールを作成 --
  const direction = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };
  // -- 移動ルールを作成end --

  // -- 処理に必要な初期値を作成する --
  const top = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;
  const wall = "#";
  // -- 処理に必要な初期値を作成するend --

  // -- スタートから何マス目なのかを管理する --
  const dist = Array.from({ length: height }, () => Array(width).fill(-1)); // ここを変更することで、スタートからのステップを管理する。
  dist[startY][startX] = 0;

  const queue = []; // -- 残りの処理をするべき候補
  queue.push([startY, startX, 0]);
  // -- スタートから何マス目なのかを管理するend --

  // -- 処理が出来なくなるまで、処理する。(処理可能な要素を入れた配列の長さを処理の最大値にする) --
  const goalList = [];
  let dx = 0;
  while (queue.length > dx) {
    // -- shiftを使わずに処理を軽くする --
    const [sy, sx, d] = queue[dx++];

    // -- 取り出した数値に対して、オブジェクト形式で、順番に処理する --
    for (const [dirY, dirX] of Object.values(direction)) {
      const ny = sy + dirY;
      const nx = sx + dirX;

      // -- エリア外、壁、-1ではない(既に陣地はスキップ)、--
      if (ny < top || ny > buttom || nx < left || nx > right) continue;
      if (board[ny][nx] === wall) continue;
      if (dist[ny][nx] !== -1) continue;

      // -- ゴールに到達できるとき、ゴールリストに入れる --
      if (ny === goalY && nx === goalX) {
        goalList.push(d + 1);
      } else {
        // -- ゴールではないとき、queue(処理候補)と、dist(今後の処理に必要な情報)に投入する --
        queue.push([ny, nx, d + 1]);
        dist[ny][nx] = d + 1;
      }
    }
  }
  // -- 処理が出来なくなるまで、処理する。(処理可能な要素を入れた配列の長さを処理の最大値にする) --

  // -- 内容を出力する --
  console.log(goalList.length === 0 ? "No" : Math.min(...goalList));
  // -- 内容を出力するend --
});
