/*
グリッドが与えられるので、マス (y,x) から次の操作を 1 回としたとき、
N 回以内に到達することができるマスを '*' , それ以外のマスを '.' にしたグリッドを出力してください。
・現在いるマスを (y,x) としたとき、(y+1,x), (y-1,x), (y,x+1), (y,x-1) のいずれかのマスに移動する。


ただし、グリッドの外へは移動することができず、また、グリッド上の '#' のマスは壁であり、
移動できないことに注意してください。
なお、グリッドの左上・右上・左下・右下のマスをそれぞれ (0,0), (0,W-1), (H-1,0), (H-1,W-1) とします。

--- ヒント ---
基本的な移動の仕組みは 1 つ前の問題の「N マスの移動」で扱った幅優先探索と同じなので、そのコードに
「移動先が壁でない場合にのみ移動を行う」という条件判定を加えましょう。


入力される値
H W N
y x
S_1
...
S_H
・1 行目では、グリッドの行数 H , 列数 W, 移動する回数 N が半角スペース区切りで与えられます。
・2 行目では、移動を開始するマスの座標を表す y, x が半角スペース区切りで与えられます。
・続く H 行のうち i 行目 (1 ≦ i ≦ H) には、グリッドの i-1 行目の文字をまとめた文字列 S_i が与えられ、
S_i の j 文字目は、グリッドの i-1 行目の j-1 列目に書かれている文字を表します。(1 ≦ j ≦ W)
入力値最終行の末尾に改行が１つ入ります。



期待する出力
H 行の出力
・マス (y,x) から前後左右に N マス移動して到達することができるマスを '*' , 
それ以外のマスを '.' にしたグリッドを出力してください。
・各行の要素を繋げて文字列としたものを改行区切りで出力してください。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ H, W ≦ 10
・0 ≦ N ≦ 10
・0 ≦ y < H
・0 ≦ x < W
・ S_i は W 文字の文字列(1 ≦ i ≦ H)
・ S_i の各文字は '.' または '#'(1 ≦ i ≦ H)
・マス (y,x) の文字は '.'
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
  // -- 入力値を変換 --
  const [height, width, reachable] = lines[0].split(" ").map(Number);
  const [startY, startX] = lines[1].split(" ").map(Number);
  const inputMap = lines.slice(2, height + 2);
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
  const processingBoard = board.map((row) => [...row]);
  let dx = 0;
  while (queue.length > dx) {
    // -- shiftを使わずに処理を軽くする --
    const [sy, sx, d] = queue[dx++];

    // -- 取り出した数値に対して、オブジェクト形式で、順番に処理する --
    for (const [dirY, dirX] of Object.values(direction)) {
      const ny = sy + dirY;
      const nx = sx + dirX;

      // -- エリア外、-1ではない(既に陣地はスキップ)、--
      if (ny < top || ny > buttom || nx < left || nx > right) continue;
      if (processingBoard[ny][nx] === wall) continue;
      if (dist[ny][nx] !== -1) continue;

      // -- 移動できるとき、queue(処理候補)と、dist(今後の処理に必要な情報)に投入する --
      queue.push([ny, nx, d + 1]);
      dist[ny][nx] = d + 1;
    }
  }
  // -- 処理が出来なくなるまで、処理する。(処理可能な要素を入れた配列の長さを処理の最大値にする) --

  // -- スタートからのステップ数において、内容を変更する --
  const visited = "*";
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (processingBoard[x][y] === wall) continue;
      if (dist[x][y] >= 0 && dist[x][y] <= reachable) processingBoard[x][y] = visited;
    }
  }
  // -- スタートからのステップ数において、内容を変更するend --

  // -- 内容を出力する --
  processingBoard.forEach((processing) => {
    console.log(processing.join(""));
  });
  // -- 内容を出力するend --
});
