/*
1 から N のプレイヤー番号が与えられた N 人でいびつなオセロの対戦をします。
盤面・ゲームをする人数・合計のターン数・各行動についての情報が与えられます。
盤面に穴の空いているマスは '#' , 何も置かれていないマスは '.' になっています。

プレイヤー達は、各行動ごとに次の操作をおこないます。

・ 盤面のマス(Y_i, X_i)に石を置く。既に相手の石が置かれている場合は相手の石を自分の石に置き換える。
・ 次に、今置いた自分の石と、既存の自分の石で縦横斜めにはさんだ連続した穴の空いていないマスに自分の石を置く。
相手の石が置かれている場合は相手の石を自分の石に置き換えて、操作を終了する。

操作を終えた後の盤面を出力してください。
ただし、番号 i のプレイヤーの石のあるマスを i として出力してください。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。

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
  // -- 入力 → 変数 --
  const [height, width, players, game] = lines[0].split(" ").map(Number);
  if (isNaN(height) || isNaN(width)) {
    console.error("盤面の大きさ指定が数値でされていません。");
    return;
  }

  const minSize = 1;
  const maxSize = 20;
  if (height < minSize || height > maxSize || width < minSize || width > maxSize) {
    console.error("盤面の大きさ指定は1~20で指定してください。");
    return;
  }

  if (isNaN(players)) {
    console.error("プレイヤー人数の指定が数値でされていません。");
    return;
  }

  const minPlayer = 1;
  const maxPlayer = 9;
  if (players < minPlayer || players > maxPlayer) {
    console.error("プレイヤー人数の指定は1人~9人で指定してください。");
    return;
  }

  if (isNaN(game)) {
    console.error("ゲームのターン指定が数値でされていません。");
    return;
  }

  const minGame = 1;
  const maxGame = 100;
  if (game < minGame || game > maxGame) {
    console.error("ゲームのターン数は1~100ターンで指定してください。");
    return;
  }

  const board = lines.slice(1, height + 1).map((b) => b.split(""));
  const hole = "#";
  const none = ".";
  if (board.length !== height) {
    console.error("盤面の指定した縦の大きさと入力された大きさが一致しません。");
    return;
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i].length !== width) {
      console.error("盤面の指定した横の大きさと入力された大きさが一致しません。");
      return;
    }
    for (let j = 0; j < board[i].length; j++) {
      if (!(board[i][j] === hole || board[i][j] === none)) {
        console.error("初期盤面で不正があります。");
        return;
      }
    }
  }

  const coordinates = lines.slice(height + 1).map((c) => c.split(" ").map(Number));
  if (coordinates.length !== game) {
    console.error("指定したゲームのターンと入力したゲームのターンが一致しません。");
    return;
  }
  // -- 入力 → 変数end --

  // -- 進む方向を定義する --
  const directions = {
    NW: [-1, -1],
    N: [-1, 0],
    NE: [-1, 1],
    E: [0, 1],
    SE: [1, 1],
    S: [1, 0],
    SW: [1, -1],
    W: [0, -1],
  };
  // -- 進む方向を定義するend --

  // -- 指定したターンゲームをする --
  const processBoard = board.map((row) => [...row]);
  for (const [player, sy, sx] of coordinates) {
    // -- 処理前にエラーハンドリングする --
    if (isNaN(player) || isNaN(sy) || isNaN(sx)) {
      console.error("プレイヤー名、座標が数値で入力されていません。");
      return;
    }

    if (player < minPlayer || player > maxPlayer) {
      console.error("ゲームの操作するプレイヤーが不正です。");
      return;
    }

    if (sy < 0 || sy >= height || sx < 0 || sx >= width) {
      console.error("指定した場所がエリア外を指定しています。");
      return;
    }

    // -- 希望した場所に石を置く。--
    processBoard[sy][sx] = player;

    // -- 石を置いた後、ひっくり返すことが出来るか調査する --
    for (const [dy, dx] of Object.values(directions)) {
      reverseDirection(player, sy, sx, dy, dx);
    }
  }

  // -- ひっくり返すことが出来るか調査する(関数) --
  function reverseDirection(player, sy, sx, dy, dx) {
    const cell = [];
    let y = sy + dy;
    let x = sx + dx;

    while (0 <= y && y < height && 0 <= x && x < width) {
      // -- 盤面に穴が有ったら、終了 --
      if (processBoard[y][x] === hole) break;

      if (processBoard[y][x] === none || processBoard[y][x] !== player) {
        // 盤面に石なし、相手の石はキープする。
        cell.push([y, x]);
      } else if (processBoard[y][x] === player) {
        // 石あり。キープしていた個所をひっくり返す。
        if (cell.length > 0) {
          for (const [cy, cx] of cell) {
            processBoard[cy][cx] = player;
          }
        }

        break; // 石を1回見つけたら、処理停止。これをしないとリバーシのルールが崩壊する。
      }

      // -- 次のマスに移動する --
      y += dy;
      x += dx;
    }
  }
  // -- ひっくり返すことが出来るか調査する(関数)end --

  // -- 指定したターンゲームをするend --

  // -- 結果を出力する --
  processBoard.forEach((p) => {
    console.log(p.join(""));
  });
  // -- 結果を出力するend --
});
