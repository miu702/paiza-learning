/*
paiza 君は 1 〜 N の番号がつけられた N マスを移動します。
移動のルールは次の通りです。

・i 回目の移動をマス x からおこなう場合、その移動先はマス to[x][i] となる。
to[x][i] が -1 の場合、現在のマスに移動してくる 1 つ前のマスが次の移動先となる。
paiza 君はマス 1 から移動を始めます。
マス 1 から K 回移動をしたとき、paiza 君が止まったマスの番号を止まった順に出力してください。


入力される値
N K
to[1][1] ... to[1][K]
...
to[N][1] ... to[N][K]
・1 行目ではマスの個数 N と移動する回数 K が半角スペース区切りで与えられます。
・2 行目からの N 行のうち i 行目では、to[i] の各要素が半角スペース区切りで与えられます。
入力値最終行の末尾に改行が１つ入ります。



期待する出力
・プレイヤーが止まるマスを順に改行区切りで出力してください。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ N ≦ 100
・1 ≦ K ≦ N
・to[i][j] = -1 または 1 ≦ to[i][j] ≦ N (1 ≦ i ≦ N, 1 ≦ j ≦ K)
・to[i][1] ≠ -1 (1 ≦ i ≦ N)
・移動先がなくなるような入力は与えられないことが保証されている


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
  const [massNum, move] = lines[0].split(" ").map(Number);
  const board = lines.slice(1).map((b) => b.split(" ").map(Number));
  // -- 入力 → 変数end --

  // -- 移動した状態を管理する --
  const stack = []; // 移動ストック
  stack.push(1); // スタート地点
  const visited = []; // 履歴
  // -- 移動した状態を管理するend --

  // -- 移動をシュミレーションする --
  for (let sx = 0; sx < move; sx++) {
    // -- 移動先の座標を定義 --
    const sy = stack.at(-1) - 1;
    const next = board[sy][sx];

    // -- 移動先のマスの数値が-1かで動作を変更する。起動用スイッチを設置 --
    next === -1 ? returnMass() : moveMass(next);
  }

  // -- 処理を実施する。スイッチと処理関数を分割することで後でも見やすくする --
  function returnMass() {
    stack.pop();
    const back = stack.at(-1);
    visited.push(back);
  }

  function moveMass(next) {
    visited.push(next);
    stack.push(next);
  }
  // -- 移動をシュミレーションするend --

  // -- 履歴を出力する --
  console.log(visited.join("\n"));
});
