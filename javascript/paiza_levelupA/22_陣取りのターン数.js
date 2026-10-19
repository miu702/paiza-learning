/*
盤面の情報とマスを '?' にする距離の個数 N, マスを '?' にするときの距離 l_i が与えられます。

現在プレイヤーのいるマスは '*' になっており、そのマスはプレイヤーの陣地です。

プレイヤーは次の操作をできなくなるまで続けます。

・ 現在の陣地から 1 マス移動することで到達できるマスをプレイヤーの陣地にして、'*' にする。
ただし、障害物( '#' )のマスは陣地にできない。また、プレイヤーの開始時の位置からの距離が l_i であるとき、'*' の代わりに '?' にする。

なお、はじめにプレイヤーのいるマスの開始時の位置からの距離は 0 とします。


入力される値
H W N       
S_0     
...     
S_(H-1)     
l_1     
...     
l_N


・ 1 行目では、盤面の行数 H , 列数 W , l の入力の回数 N が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)
・ 続く N 行では、マスを '?' にするときの開始時の位置からの距離 l_i が与えられます。(1 ≦ i ≦ N)



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
  const allow = lines.slice(height + 1, lines.length);
  const allowNumbers = allow.map(Number);
  // --  入力処理end --

  // --  自分の位置を見つける --
  let startY;
  let startX;
  const order = [];
  let search = true;
  for (let j = 0; j < board.length; j++) {
    if (!search) break;
    for (let k = 0; k < board[j].length; k++) {
      if (!search) break;
      if (board[j][k] === "*") {
        order.push([[j, k]]);
        startY = j;
        startX = k;
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
  // mapを使用することで、コピーする。(mapは配列を作り直すことができる。)
  let processingBoard = board.map((row) => [...row]); // -- スタート地点からの距離を管理する
  processingBoard[startY][startX] = 0; // 初期位置は0(移動なし)
  let processingMap = board.map((row) => [...row]); // -- 配列名processingBoardの数値を使用して、出力する文字を変更する。

  const upper = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;
  const road = ".";
  const wall = "#";
  const visited = "*";
  const special = "?";
  // -- 処理に必要な初期値 --

  // -- スタート地点からの距離を計算する --
  // -- 移動が可能なら、配列に追加し、最大値は配列の長さにすることで膨大な処理になることを防ぐ --
  for (let x = 0; x < order.length; x++) {
    // -- 2次元配列を利用することで、同じ距離のものを同じ階層に配置することができる --
    const row = [];

    // -- for-ofを使用することで複雑な形のデータの数の量だけ処理ができる。lengthも便利だが、1セット2つのデータなので、計算が面倒。 --
    for (const [sy, sx] of order[x]) {
      // -- 現在地からの移動先の安全を確認し、エリア拡大する --
      for (const [dirY, dirX] of Object.values(direction)) {
        const ny = sy + dirY;
        const nx = sx + dirX;
        // -- 移動先がエリア外、移動不可、移動済みの時に処理をスキップする。 --
        if (ny < upper || ny > buttom || nx < left || nx > right || processingBoard[ny][nx] === wall || typeof processingBoard[ny][nx] === "number") continue;

        // -- 移動先が移動可能な時、配列に追加し、マスに処理を追記する。 --
        row.push([ny, nx]);
        processingBoard[ny][nx] = x + 1;
      }
      // -- 現在地からの移動先の安全を確認し、エリア拡大するend --
    }

    // -- 空配列を追加すると、後続処理で構造が壊れるため、到達できるマスが存在する場合のみ追加する。 --
    if (row.length > 0) order.push(row);
  }

  // -- 移動が可能なら、配列に追加し、最大値は配列の長さにすることで膨大な処理になることを防ぐend --
  // -- スタート地点からの距離を計算する --

  // -- 数値を参考に、盤面を変換する --
  for (let cy = 0; cy < processingBoard.length; cy++) {
    for (let cx = 0; cx < processingBoard[cy].length; cx++) {
      // -- スタート地点からの距離をチェックして、移動しなかった、壁の時にスキップ --
      const currentNumber = processingBoard[cy][cx];
      if (currentNumber === road || currentNumber === wall) continue;

      // -- スタート地点からの距離をチェックして、三項演算子で処理を分割する。 --
      processingMap[cy][cx] = allowNumbers.includes(currentNumber) ? special : visited;
    }
  }
  // -- 数値を参考に、盤面を変換する --

  // -- 出力する --
  processingMap.forEach((processing) => {
    console.log(processing.join(""));
  });
  // -- 出力する --
});
