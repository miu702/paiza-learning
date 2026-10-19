/*
ここから先は幅優先探索の問題を扱います。
幅優先探索とは、「現在いるマスから 1 回移動した先の頂点を訪問する」操作を未訪問の頂点が無くなる、
もしくは移動できなくなるまで繰り返す探索のことです。

グリッドの行数 H と列数 W が与えられるので、マス (y,x) から次の操作を 1 回としたとき、
 3 回以内に到達することができるマスを '*' , それ以外のマスを '.' にしたグリッドを出力してください。
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
・マス (y,x) から前後左右に 3 マス移動して到達することができるマスを '*' , 
それ以外のマスを '.' にしたグリッドを出力してください。
・各行の要素を繋げて文字列としたものを改行区切りで出力してください。
・詳しくは入力例を参考にしてください。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ H, W ≦ 10
・0 ≦ y < H
・0 ≦ x < W
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
  const [height, width] = lines[0].split(" ").map(Number);
  const [startY, startX] = lines[1].split(" ").map(Number);
  // -- 入力値を変換end --

  // -- 移動ルールを作成 --
  const direction = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };
  // -- 移動ルールを作成end --

  // -- スタートから何マス目なのかを管理する --
  const dist = Array.from({ length: height }, () => Array(width).fill(-1)); // ここを変更することで、スタートからのステップを管理する。
  dist[startY][startX] = 0;

  const queue = []; // -- 残りの処理をするべき候補
  queue.push([startY, startX, 0]);
  // -- スタートから何マス目なのかを管理するend --

  // -- 処理に必要な初期値を作成する --
  const top = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;
  // -- 処理に必要な初期値を作成するend --

  // -- 処理が出来なくなるまで、処理する。(処理可能な要素を入れた配列の長さを処理の最大値にする) --
  while (queue.length > 0) {
    const [sy, sx, d] = queue.shift();

    // -- 取り出した数値に対して、オブジェクト形式で、順番に処理する --
    for (const [dirY, dirX] of Object.values(direction)) {
      const ny = sy + dirY;
      const nx = sx + dirX;

      // -- エリア外、-1ではない(既に陣地はスキップ)、--
      if (ny < top || ny > buttom || nx < left || nx > right) continue;
      if (dist[ny][nx] !== -1) continue;

      // -- 移動できるとき、queue(処理候補)と、dist(今後の処理に必要な情報)に投入する --
      queue.push([ny, nx, d + 1]);
      dist[ny][nx] = d + 1;
    }
  }
  // -- 処理が出来なくなるまで、処理する。(処理可能な要素を入れた配列の長さを処理の最大値にする) --

  // -- スタートからのステップ数において、内容を変更する --
  const reachable = 3;
  const visited = "*";
  const board = Array.from({ length: height }, () => Array(width).fill("."));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (dist[i][j] <= reachable) board[i][j] = visited;
    }
  }
  // -- スタートからのステップ数において、内容を変更するend --

  // -- 内容を出力する --
  board.forEach((b) => {
    console.log(b.join(""));
  });
  // -- 内容を出力するend --
});
