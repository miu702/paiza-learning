/*
開始時点の x , y 座標と移動の歩数 N が与えられます。
以下の図のように時計回りに渦を巻くように移動を N 歩行った後の x , y 座標 を答えてください。

なお、マスの座標系は下方向が y 座標の正の向き、右方向が x 座標の正の向きとします。


入力される値
X Y N


・ 1 行で、開始時点の x , y 座標を表す X , Y, 移動の歩数 N が与えられます。


期待する出力
1行での出力

・ 移動を N 歩行った後の x , y 座標を出力してください。


x y

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
  // -- 入力を変数に変換 --
  const [sx, sy, limit] = lines[0].split(" ").map(Number);
  // -- 入力を変数に変換end --

  // -- 4方向で左右が違うので、それぞれ定義 --
  const direction = {
    // 今回右周り
    N: [1, 0],
    E: [0, 1],
    S: [-1, 0],
    W: [0, -1],
  };
  const order = ["N", "E", "S", "W"]; // 向き順は、N → E → S → W

  // -- 4方向で左右が違うので、それぞれ定義end --

  // -- 初期値群 --
  let dx = sx;
  let dy = sy;

  let step = 0; // 規定の方向に歩いた回数
  let stepLimit = 1; // その方向に動ける距離

  let repeat = 0; // 同じ距離を使った回数（0 or 1）
  let dirIdx = 0; // 今の向きを管理するインデックス

  // if文で数値を使わないようにする。
  const repeatLImit = 2;
  const dirIdxLImit = 4;

  // -- 規定回数分動く。 --
  for (let i = 0; i < limit; i++) {
    // -- 移動する --
    const [dirX, dirY] = direction[order[dirIdx]];
    dx += dirX;
    dy += dirY;
    step++; // -- 規定の方向に歩いた回数 --

    // 端までいったら、歩いた回数、方向を変換する
    if (step === stepLimit) {
      step = 0; // -- ステップ数を0にする --
      dirIdx++; // -- 方向を変換する --
      repeat++; // -- 同じ距離を使った回数 --
    }

    // -- 2回同じ距離を端まで行くと上限が増える --
    if (repeat === repeatLImit) {
      stepLimit++; // -- ステップの上限を増やす。 --
      repeat = 0; // -- 同じ距離をリセット --
    }

    // -- 方向をリセットして、初期の方向に戻す
    if (dirIdx === dirIdxLImit) {
      dirIdx = 0; // -- 方向リセット --
    }
  }
  // -- 規定回数分動く。end --

  // -- 結果を出力する --
  console.log(dx, dy);
});
