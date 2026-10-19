/*
paiza ビルにあるエスカレーターは全長 K メートルあり、 1 秒で 1 メートル進みます。
また paiza ビルに勤める社員が N 人おり、 i 番目の社員は時刻 A_i にエスカレーターに乗ります。
各社員がエスカレーターに乗った直後に、エスカレーター上にいる人数をそれぞれ答えてください。
ただしある時刻にエスカレーターに乗る社員と降りる社員がいた場合、これは同時におこなわれます。

この問題は少し難しいですが、キューを用いて実装してみましょう。



入力される値
N K
A_1 ... A_N
入力値最終行の末尾に改行が１つ入ります。


期待する出力
社員 i がエスカレーターに乗った直後に、エスカレーター上にいる人数 E_i を改行区切りで出力してください。
末尾には改行を入れ、余計な文字、空行を含んではいけません。
E_1
...
E_N


条件
すべてのテストケースにおいて、以下の条件をみたします。
・ N, A_i は 1 以上 50,000 未満
・ 1 ≦ A_1 < ... < A_N < 50,000
・ K は 1 以上 100 未満

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
  // -- 入力→変数 --
  const [ridersNum, span, ...riders] = lines.join(" ").split(/\s+/).map(Number);

  // -- 保険で昇順に --
  const processingRiders = riders.sort((a, b) => a - b);
  let index = 0;
  // -- 入力→変数 --

  // -- シュミレーションする --
  const maxTime = processingRiders[processingRiders.length - 1];

  const queue = [];
  let dx = 0;
  for (let current = 0; current <= maxTime; current++) {
    // -- 降りると乗るが同時に起きるとき --
    if (current === processingRiders[index] && current === queue[dx]) {
      ride();
      getOff();
      currentRide();
    }

    // -- 乗車する --
    if (current === processingRiders[index]) {
      ride();
      currentRide();
    }

    // -- 降車する --
    if (current === queue[dx]) getOff();
  }
  // -- シュミレーションするend --

  // -- 動かす場所 --
  function ride() {
    const getOff = processingRiders[index] + span;
    queue.push(getOff);
    index++;
  }

  function getOff() {
    // -- shift()すると負担が大きいので、nullで居ないことにする --
    queue[dx] = null;
    dx++;
  }

  function currentRide() {
    const currentRider = queue.filter((q) => q !== null);
    console.log(currentRider.length);
  }
  // -- 動かす場所end --
});
