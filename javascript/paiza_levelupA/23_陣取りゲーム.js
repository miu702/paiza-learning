/*
A さんと B さんは次の操作を交互に繰り返すことで陣取りゲームをしようと考えました。 2 人の操作によって盤面が変化しなくなったらゲームを終了します。

・ 現在の陣地から上下左右に 1 マス移動することで到達できる、まだ誰の陣地でもない全てのマスを新たに陣地にする。ただし、障害物( '#' )のマスは陣地にできない。
・ 新たに陣地にできるマスが無い場合、何もしない。

盤面の情報と、先攻のプレイヤーの名前が与えられます。
盤面では、はじめに A さんのいるマスが 'A' , B さんのいるマスが 'B' で表されています。
ゲーム終了時に A さん、B さん、それぞれの陣地のマス数と勝った人の名前を出力してください。

なお、引き分けにはならないことが保証されています。


入力される値
H W     
N       
S_0     
...     
S_(H-1)


・ 1 行目では、マップの行数 H , 列数 W が与えられます。
・ 2 行目では、先攻のプレイヤーの名前 N が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)


期待する出力
2 行の出力

・ A さんの陣地のマス数 T_A と B さんの陣地のマス数 T_B を 1 行目に、勝者の名前 W_N を 2 行目に出力してください。
・ 2 人のマス数の間には半角スペースを 1 つ入れてください。


T_A T_B
W_N

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
  // -- 入力処理 --
  const [height, width] = lines[0].split(" ").map(Number);
  const leading = lines[1];
  const inputMap = lines.slice(2, height + 2);
  const board = [];
  for (let i = 0; i < inputMap.length; i++) {
    const boa = inputMap[i].split("");
    board.push(boa);
  }
  // -- 入力処理end --

  // -- スタート地点を特定する --
  let startA_Y;
  let startA_X;
  let searchA = true;

  let startB_Y;
  let startB_X;
  let searchB = true;
  for (let j = 0; j < board.length; j++) {
    if (!searchA && !searchB) break;
    for (let k = 0; k < board[j].length; k++) {
      if (!searchA && !searchB) break;
      if (board[j][k] === "A") {
        startA_Y = j;
        startA_X = k;
        searchA = false;
      } else if (board[j][k] === "B") {
        startB_Y = j;
        startB_X = k;
        searchB = false;
      }
    }
  }
  // -- スタート地点を特定するend --

  // -- どっちが先行に応じて調査変数の初期状態を変化させる --
  const order = [];
  // -- ここで先にpushした方が先に処理されるので、先行になる --
  if (leading === "A") {
    order.push([startA_Y, startA_X, "A", 0]);
    order.push([startB_Y, startB_X, "B", 0]);
  } else if (leading === "B") {
    order.push([startB_Y, startB_X, "B", 0]);
    order.push([startA_Y, startA_X, "A", 0]);
  }
  // -- どっちが先行に応じて調査変数の初期状態を変化させるend --

  // -- 自分のマスからの移動方法を定義する --
  const direction = {
    // -- 移動の優先度はN → S → W → E --
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };
  // -- 自分のマスからの移動方法を定義するend --

  // -- 処理に必要な変数を定義する --

  // -- 移動マスの必要なステップ数 --
  const dist = Array.from({ length: height }, () => Array(width).fill(-1));
  // -- スタート地点のマスを変更 --
  dist[startA_Y][startA_X] = 0;
  dist[startB_Y][startB_X] = 0;

  // -- 盤面を変化させることで、出力結果を作成する --
  const processingBoard = board.map((row) => [...row]);

  const upper = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;
  const wall = "#";
  // -- 処理に必要な変数を定義するend --

  // -- 処理欄 --
  let index = 0;
  while (index < order.length) {
    const [sy, sx, player, d] = order[index];
    for (const [dirY, dirX] of Object.values(direction)) {
      // -- 範囲外にアクセスする可能性があるので、チェックする --
      const ny = sy + dirY;
      const nx = sx + dirX;
      // -- 条件に合致しないものはスキップする --
      if (ny < upper || ny > buttom || nx < left || nx > right) continue;
      if (processingBoard[ny][nx] === wall) continue;
      if (dist[ny][nx] !== -1) continue;

      // -- 通過するものは処理を実施する --
      order.push([ny, nx, player, d + 1]); // --order(次の処理候補)に追加
      dist[ny][nx] = d + 1; // -- dist(処理しているか、しているときはスタートから何回で行けるか)に追加
      processingBoard[ny][nx] = player; // -- 対戦なので、盤面にプレイヤー名を追加。
    }
    index++;
  }
  // -- 処理欄end --

  // -- 処理結果を出力する --
  let countA = 0;
  let countB = 0;
  for (let x = 0; x < processingBoard.length; x++) {
    for (let y = 0; y < processingBoard[x].length; y++) {
      if (processingBoard[x][y] === "A") {
        countA++;
      } else if (processingBoard[x][y] === "B") {
        countB++;
      }
    }
  }

  // -- 今回の入力では、引き分けがないことが保証されている --
  console.log(countA, countB);
  console.log(countA > countB ? "A" : "B");
  // -- 処理結果を出力するend --
});
