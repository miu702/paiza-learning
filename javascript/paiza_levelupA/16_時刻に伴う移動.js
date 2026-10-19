/*
へびがマップ上を移動していきます。
マップの行数 H と列数 W , 障害物を '#' で移動可能な場所を '.' で表した H 行 W 列のマップ S_1 ... S_H , 
現在の座標 sy , sx , 方向転換の回数 N が与えられます。
続けて N 回の方向転換する時刻 t_1 ... t_N , 転換する向き d_1 ... d_N が与えられます。

へびははじめ、北を向いています。

時刻 0 から 99 までの間、へびは各時刻に次の行動を最大 100 回とります。

・ 方向転換をおこなう時刻の場合、指定の向きに方向転換したのち 1 マス身体を伸ばす。
・ そうでない時は移動が可能な場合に限り、今向いている方向に 1 マス身体を伸ばす。

各移動が可能であるということは、
「移動先のマスに障害物がない かつ 移動先がマップの範囲外でない」
ということを意味します。

各移動が可能である場合、各移動が終了した時の y , x 座標を出力してください。
移動が可能でない場合、"Stop" を出力して以降の移動を打ち切ってください。


入力される値
H W sy sx N        
S_0     
...     
S_(H-1)     
t_1 d_1     
...     
t_N d_N


・ 1 行目にはマップの行数を表す整数 H , マップの列数を表す整数 W , 現在の y, x 座標を表す sy sx , 方向転換する回数 N が与えられます。
・ 続く H 行のうち i 行目 (0 ≦ i < H) には、マップの i 行目の文字をまとめた文字列 S_i が与えられ、 S_i の j 文字目は、マップの i 行目の j 列目に書かれている文字を表します。(0 ≦ j < W)
・ 続く N 行のうち i 行目 (1 ≦ i ≦ N) には、i 回目の方向転換をおこなう時刻 t_i と方向転換の向き d_i が与えられます。


期待する出力
M (1 ≦ M ≦ 100) 行の出力

・ 時刻 k (1 ≦ k ≦ M) の移動後の y , x 座標、y_k, x_k を出力してください。
・ ただし、時刻 M で移動が可能でない場合、"Stop" を出力してください。


y_1 x_1
...
y_k x_k
...
y_M x_M


または

y_1 x_1
...
y_k x_k
...
y_(M-1) x_(M-1)
Stop
条件


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

  if (height < 1 || height > 20 || width < 1 || width > 20) {
    console.error("移動するマップの大きさは1~20マスで指定ください。");
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
    const [timeStr, dir] = inputMoves[idx].split(" ");
    const time = Number(timeStr);
    if (time < 0 || time > 99) {
      console.error("時間の指定は0~99で指定してください。");
      return;
    }

    if (!(dir === "L" || dir === "R")) {
      console.error("移動できる方向はL(左)、R(右)のみです。");
      return;
    }
    // -- 入力されたデータを使えるように分割する。チェックを実施するend --

    // -- 移動リスト内と現在時刻が一致しているとき、方向転換し、次のリストに変更する。--
    if (time === currentTime) {
      currentDirection = moveList[currentDirection][dir];
      idx++;
    }
    // -- 移動リスト内と現在時刻が一致しているとき、方向転換し、次のリストに変更する。end　--

    // -- 通常時は1step移動用関数を適用 --
    moreOneStep();
  }

  // -- 移動用の関数を定義する。移動は毎回実施する --
  function moreOneStep() {
    // -- 移動位置の検索 --
    const [dirY, dirX] = directionList[currentDirection];
    // -- 移動先の安全確認をする --
    const ny = dy + dirY;
    const nx = dx + dirX;

    // -- 移動先が範囲外または壁にアクセスする可能性があるので、予めチェックする --
    if (ny < upper || ny > bottom || nx < left || nx > right || board[ny][nx] === "#") {
      // -- 移動できない時、移動できるか？の変数をfalseに変更する --
      console.log("Stop");
      isMove = false;
      return; // -- returnで以下の処理をしない。 --
    }

    // -- 移動できる時はそのまま移動し、移動先を出力 --
    dy += dirY;
    dx += dirX;
    console.log(dy, dx);
  }
  // -- 移動用の関数を定義する。移動は毎回実施するend --
  // -- 処理end --
});
