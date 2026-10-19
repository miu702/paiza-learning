/*
マップ上をへびが移動していきます。
マップの行数 H と列数 W ,障害物を '#' で移動可能な場所を '.' で表した H 行 W 列のマップ S_1 ... S_H , 現在の座標 sy , sx , 方向転換の回数 N が与えられます。
続けて N 回の方向転換をおこなう時刻 t_1 ... t_N, 転換する向き d_1 ... d_N が与えられます。

へびははじめは北を向いています。

へびは進む先のマスに自分の身体や障害物がない時に移動ができます。
時刻 0 から 99 までの間、へびは各時刻に次の行動を最大 100 回繰り返します。

・ 方向転換をおこなう時刻の場合、指定の向きに方向転換したのち １ マス身体を伸ばす。そうでない時は、今向いている方向に １ マス身体を伸ばす。

時刻が 99 の時の行動を終えるか、移動できなくなった時、移動を終了します。
移動終了時にへびの体のあるマスを '*' にしたマップを出力してください。

移動が可能であるということは、
「移動先のマスに自分の身体や障害物がない かつ 移動先がマップの範囲外でない」
ということを意味します。

なお、マスの座標系は左上端のマスの座標を ( y , x ) = ( 0 , 0 ) とし、
下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。


入力される値
H W sy sx N        
S_0     
...     
S_(H-1)     
t_1 d_1     
...     
t_N d_N


・ 1 行目にはマップの行数を表す整数 H , マップの列数を表す整数 W , 現在の y, x 座標を表す sy sx , 移動する回数 N が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、マップの i 行目の文字をまとめた文字列 S_i が与えられ、 S_i の j 文字目は、マップの i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)
・ 続く N 行のうち i 行目 (1 ≦ i ≦ N) には、i 回目の方向転換をおこなう時刻 t_i と方向転換の向き d_i が与えられます。


期待する出力
H 行の出力(マップの出力)

・ へびの移動終了時にへびの身体があるマスを '*' にしたマップを H 行で出力してください。


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
  // -- 入力処理 --
  const [height, width, sy, sx, move] = lines[0].split(" ").map(Number);
  const inputMap = lines.slice(1, height + 1);
  const board = [];
  for (let i = 0; i < inputMap.length; i++) {
    const boa = inputMap[i].split("");
    board.push(boa);
  }
  const inputMoves = lines.slice(height + 1, lines.length);
  // -- 入力処理end --

  // -- 入力チェック --
  if (isNaN(height) || isNaN(width) || isNaN(sy) || isNaN(sx) || isNaN(move)) {
    console.error("移動するマップの大きさ(y, x)、初期の座標(y, x)、移動回数が数値で入力されていません。");
    return;
  }

  if (height < 1 || height > 50 || width < 1 || width > 50) {
    console.error("移動するマップの大きさは1~50マスで指定ください。");
    return;
  }

  if (move < 1 || move > 100) {
    console.error("移動する回数は1~100で指定してください。");
    return;
  }

  if (height !== board.length) {
    console.error("指定された列数と入力された列数が一致しません。");
    return;
  }

  for (let i = 0; i < height; i++) {
    if (width !== board[i].length) {
      console.error(`指定された行数と${i + 1}列目の行数が一致しません。`);
      return;
    }
    for (let j = 0; j < width; j++) {
      if (!(board[i][j] === "." || board[i][j] === "#")) {
        console.error("入力されるマップデータは、.または#のみにしてください。：違反座標${i + 1}, ${j + 1}");
        return;
      }
    }
  }

  if (move !== inputMoves.length) {
    console.error("指定された移動回数と入力された移動回数が一致しません。");
    return;
  }

  // -- 入力チェックend --

  // -- 移動ルール　--
  const directionList = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
  };

  const moveList = {
    N: { L: "W", R: "E" },
    E: { L: "N", R: "S" },
    S: { L: "E", R: "W" },
    W: { L: "S", R: "N" },
  };
  // -- 移動ルールend　--

  // -- 処理 --
  // -- 初期値群 --

  // -- エリアを指定する --
  const upper = 0;
  const bottom = height - 1;
  const left = 0;
  const right = width - 1;

  // -- 移動回数を管理する --
  const timeLimit = 99;
  let idx = 0;

  // mapを使用することで、コピーする。(mapは配列を作り直すことができる。)
  let processingBoard = board.map((row) => [...row]);
  processingBoard[sy][sx] = "*";

  // -- 自分の状態を管理する(座標、向いている方向、移動できるか？) --
  let [dy, dx] = [sy, sx];
  let currentDirection = "N";
  let isMove = true;
  // -- 初期値群end --

  // -- 本番の処理を実施する --
  for (let currentTime = 0; currentTime <= timeLimit; currentTime++) {
    // -- 移動できない時、強制停止する --
    if (!isMove) break;

    // -- 入力されたデータを使えるように分割する。チェックを実施する --
    if (idx < inputMoves.length) {
      // -- 移動できない時、強制停止する --
      if (!isMove) break;

      const [timeStr, dir] = inputMoves[idx].split(" ");
      const time = Number(timeStr);
      if (time < 1 || time > 99) {
        // 条件：1 ≦ t_i ≦ 99
        console.error("時間の指定は1~99で指定してください。");
        return;
      }

      if (!(dir === "L" || dir === "R")) {
        console.error("移動できる方向はL(左)、R(右)のみです。");
        return;
      }

      // -- 移動リスト内と現在時刻が一致しているとき、方向転換し、次のリストに変更する。--
      if (time === currentTime) {
        currentDirection = moveList[currentDirection][dir];
        idx++;
      }
      // -- 移動リスト内と現在時刻が一致しているとき、方向転換し、次のリストに変更する。end　--
    }
    // -- 入力されたデータを使えるように分割する。チェックを実施するend --

    // -- 通常時は1step移動用関数を適用 --
    moreOneStep(currentTime);
  }

  // -- 移動用の関数を定義する。移動は毎回実施する --
  function moreOneStep(currentTime) {
    // -- 移動位置の検索 --
    const [dirY, dirX] = directionList[currentDirection];

    // -- 移動先の安全確認をし、移動できるとき移動する --
    const ny = dy + dirY;
    const nx = dx + dirX;
    if (ny < upper || ny > bottom || nx < left || nx > right || processingBoard[ny][nx] === "#" || processingBoard[ny][nx] === "*") {
      // -- 移動できない時、移動できるか？の変数をfalseに変更する --
      isMove = false;
    } else {
      // -- 移動できる時はそのまま移動し、移動した場所を変化させる --
      dy += dirY;
      dx += dirX;
      processingBoard[dy][dx] = "*";
    }
  }
  // -- 移動先の安全確認をし、移動できるとき移動するend --

  // -- 処理end --

  // -- 結果を出力する --
  processingBoard.forEach((processing) => {
    console.log(processing.join(""));
  });
});
