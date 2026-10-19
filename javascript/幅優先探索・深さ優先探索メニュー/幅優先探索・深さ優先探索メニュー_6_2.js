/*
グリッドとスタート地点のマス (sy,sx), ゴール地点のマス (gy,gx) が与えられるので、
スタート地点から次の操作を繰り返してゴール地点に到達することができるかを判定してください。
また、ゴールできる場合は最短何マスの移動でゴールすることができるかを出力してください。
・現在いるマスを (y,x) としたとき、(y+1,x), (y-1,x), (y,x+1), (y,x-1) のいずれかのマスに移動する。


ただし、グリッドの外へは移動することができず、また、グリッド上の '#' のマスは壁であり、
移動できないことに注意してください。
なお、グリッドの左上・右上・左下・右下のマスをそれぞれ (0,0), (0,W-1), (H-1,0), (H-1,W-1) とします。



入力される値
H W
sy sx
gy gx
S_1
...
S_H
・1 行目では、グリッドの行数 H , 列数 W が半角スペース区切りで与えられます。
・2 行目では、スタート地点のマスの座標を表す sy, sx が半角スペース区切りで与えられます。
・3 行目では、ゴール地点のマスの座標を表す gy, gx が半角スペース区切りで与えられます。
・続く H 行のうち i 行目 (1 ≦ i < H) には、グリッドの i-1 行目の文字をまとめた文字列 S_i が与えられ、
S_i の j 文字目は、グリッドの i 行目の j-1 列目に書かれている文字を表します。(1 ≦ j < W)
入力値最終行の末尾に改行が１つ入ります。


期待する出力
・(sy,sx) から移動をして (gy,gx) に到達することができる場合はゴールするまでの最短の移動マス数を、
到達できない場合は "No" を 1 行で出力してください。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ H, W ≦ 100
・0 ≦ sy < H
・0 ≦ sx < W
・0 ≦ gy < H
・0 ≦ gx < W
・マス(sy,sx), (gy,gx) は '.' である
・ S_i は W 文字の文字列(1 ≦ i ≦ H)
・ S_i の各文字は '.' または '#'(1 ≦ i ≦ H)
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
  let dx = 0;
  while (queue.length > dx) {
    // -- shiftを使わずに処理を軽くする --
    const [sy, sx, d] = queue[dx++];

    // -- 取り出した数値に対して、オブジェクト形式で、順番に処理する --
    for (const [dirY, dirX] of Object.values(direction)) {
      const ny = sy + dirY;
      const nx = sx + dirX;

      // -- エリア外、壁、-1ではない(既に陣地)はスキップ --
      if (ny < top || ny > buttom || nx < left || nx > right) continue;
      if (board[ny][nx] === wall) continue;
      if (dist[ny][nx] !== -1) continue;

      // -- ゴールに到達できるとき、出力し、以下の処理を停止する。 --
      if (ny === goalY && nx === goalX) {
        console.log(d + 1);
        return;
      } else {
        // -- ゴールではないとき、queue(処理候補)と、dist(今後の処理に必要な情報)に投入する --
        queue.push([ny, nx, d + 1]);
        dist[ny][nx] = d + 1;
      }
    }
  }
  // -- 処理が出来なくなるまで、処理する。(処理可能な要素を入れた配列の長さを処理の最大値にする) --

  // -- 最後まで、ゴールに到達できない時は、No(到達不可)を出力する。 --
  console.log("No");
});
