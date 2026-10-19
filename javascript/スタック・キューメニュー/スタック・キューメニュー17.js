/*
paiza デパートには、各階を行き来する合計 X kg までの人を運ぶことができるエレベーターがありました。
店長はお客さんの流れを知るために、たくさんの乗り降りが行われるこのエレベーターの乗客の入れ替わりを
調べることにしました。
エレベーターの乗り降りに関するデータが以下のいずれかの形式で時系列順に与えられるので、
全ての乗り降りが終わった後のエレベーター内の人数と合計体重を求めてください。
なお、初めエレベーターには誰も乗っていないものとします。


・ride N w_1 w_2 ... w_N
体重が w_1 kg の人から順に合計 N 人の人がエレベーターに乗る。
体重が w_i kg の人が乗ることで、エレベーターに乗っている人の体重の総和が X kg を超えてしまう場合、
体重が w_i の人はエレベーターに乗らない。

・get_off K
エレベーターに最後に乗った人から順に K 人が降りる。
具体的には、最後にエレベーターに乗った人, 最後から 2 番目にエレベーターに乗った人, ..., 
最後から K 番目にエレベーターに乗った人といった順番で降りる。


入力される値
N X
Q_1
Q_2
...
Q_N
・1 行目では与えられる乗り降りの回数 N とエレベーターの重量制限についての値 X が
半角スペース区切りで与えられます。
・2 行目からの N 行では、エレベーターの乗り降りの内容が時系列順に与えられます。
入力値最終行の末尾に改行が１つ入ります。


期待する出力
・全ての乗り降りが終わった時点でエレベーターに乗っている人数 num と乗っている人の体重の総和 sum を
改行区切りで出力してください。
num
sum


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
  // -- 入力値から変数に変換する --
  const [number, maxWeight] = lines[0].split(" ").map(Number);
  const passengersData = lines.slice(1).map((pass) => pass.split(" "));
  // -- 入力値から変数に変換するend --

  // -- エレベーターの様子をシュミレーションする --
  const stack = [];
  let currentWeight = 0;
  let currentPeople = 0;

  for (const [command, people, ...weights] of passengersData) {
    if (!(command === "ride" || command === "get_off")) {
      console.error(`不正な操作${command}が含まれています。`);
      return;
    }
    // -- 三項演算子で分岐。スイッチを起動する --
    command === "ride" ? ridePassenger(weights) : getOffPassenger(people);
  }

  // -- 処理用変数を設置する --
  function ridePassenger(weights) {
    for (const weightStr of weights) {
      // -- 乗れるか調査する。いきなり乗ると制限オーバーする危険性がある。 --
      const weight = Number(weightStr);
      const inspection = currentWeight + weight;
      if (inspection > maxWeight) continue;

      // -- 乗れるとき、要素を追加する --
      stack.push(weight);
      currentWeight += weight;
      currentPeople++;
    }
  }

  function getOffPassenger(people) {
    // -- 降りることができる条件は降りる人がいるかつ、エレベーターの中に人がいること --
    while (currentPeople > 0 && people > 0) {
      const getOffWeight = stack.pop();
      currentWeight -= getOffWeight;
      currentPeople--;
      people--;
    }
  }
  // -- エレベーターの様子をシュミレーションするend --

  // -- 処理終了後の様子を出力する --
  const totalWeight = stack.reduce((a, b) => a + b, 0);
  console.log(stack.length);
  console.log(totalWeight);
  // -- 処理終了後の様子を出力するend --
});
