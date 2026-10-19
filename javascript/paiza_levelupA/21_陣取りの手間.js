/*
盤面の情報が与えられます。
現在プレイヤーのいるマスは '*' になっており、そのマスはプレイヤーの陣地です。

プレイヤーは次の操作をできなくなるまで続けます。

・ プレイヤーは現在の陣地から上下左右に 1 マス移動することで到達できるマスをプレイヤーの陣地にする。ただし障害物( '#' )のマスは陣地にできない。

操作を終えた後のプレイヤーの陣地を '*' にした盤面を出力してください。


入力される値
H W     
S_0     
...     
S_(H-1)


・ 1行目では、盤面の行数 H , 列数 W が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、盤面の i 行目の文字をまとめた文字列 S_i が与えられ、S_i の j 文字目は、盤面の i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)


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
  // --  入力処理end --

  // --  自分の位置を見つける --
  let py;
  let px;
  const order = [];
  let search = true;
  for (let j = 0; j < board.length; j++) {
    if (!search) break;
    for (let k = 0; k < board[j].length; k++) {
      if (!search) break;
      if (board[j][k] === "*") {
        order.push([[j, k]]);
        py = j;
        px = k;
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
  processingBoard[py][px] = 0; // 初期位置は0(移動なし)

  const upper = 0;
  const buttom = height - 1;
  const left = 0;
  const right = width - 1;
  const wall = "#";
  // -- 処理に必要な初期値 --

  // -- 処理欄 --
  // -- 今回は移動が可能である配列を作成し、最大値をそこの長さにすることで膨大な処理になることを防ぐ --
  for (let x = 0; x < order.length; x++) {
    // -- 2次元配列を利用することで、同じ距離のものを同じ階層に配置することができる --
    const row = [];

    // for-ofを使用することで複雑な形のデータの数の量だけ処理ができる。lengthも便利だが、1セット2つのデータなので、計算が面倒。
    for (const [sy, sx] of order[x]) {
      // 現在地からの移動先の安全を確認し、エリア拡大する
      for (const [dirY, dirX] of Object.values(direction)) {
        // Object.values(オブジェクト名)とすることで、インデックス番号のようにバリューのみを使用する
        const ny = sy + dirY;
        const nx = sx + dirX;
        // -- 今回はvisited(訪問済み)ではなく、何回の操作でいけるのか？なので、条件は数値が入っていますか？に変更 --
        if (ny < upper || ny > buttom || nx < left || nx > right || processingBoard[ny][nx] === wall || typeof processingBoard[ny][nx] === "number") continue;
        row.push([ny, nx]);
        processingBoard[ny][nx] = x + 1;
      }
      // 現在地からの移動先の安全を確認し、エリア拡大するend
    }

    // 次の距離で到達できるマスが存在する場合のみ追加する。
    // 空配列を追加すると、後続処理で構造が壊れるため。
    if (row.length > 0) order.push(row);
  }

  // -- 今回は移動が可能である配列を作成し、最大値をそこの長さにすることで膨大な処理になることを防ぐend --
  // -- 処理欄end --

  // -- 出力する --
  processingBoard.forEach((processing) => {
    console.log(processing.join(""));
  });
});
