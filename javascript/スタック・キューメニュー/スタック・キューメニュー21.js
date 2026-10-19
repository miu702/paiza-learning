/*
ついに、paiza 君の経営する会社は長年の工事の末、
大阪から東京へ移動することができる一方通行の上京エスカレーターを完成させました。
しかし、このエスカレーターには体重の合計が X kg を超えると故障してしまうという問題点がありました。
そこで、故障を防ぐために乗り降りの様子を管理することにしました。


エスカレーターの乗り降りの内容が与えられるので、
全ての乗り降りが終わった時点でエスカレーターに乗っている人数と乗っている人の体重の総和を求めてください。
なお、エスカレーターの乗り降りの内容は以下のいずれかの形式で与えられます。

・ride K w_1 w_2 ... w_K
体重が w_1 kg の人から順に合計 K 人の人がエスカレーターに乗る。
体重が w_i kg の人が乗ることで、エスカレーターに乗っている人の体重の総和が X kg を超えてしまう場合、
体重が w_i の人はエスカレーターに乗らない。

・get_off K
エスカレーターの先頭から K 人が降りる。
エスカレーターの乗員が K 人未満の場合、全員降りる。



入力される値
N X
Q_1
Q_2
...
Q_N
・1 行目では与えられるエスカレーターの乗り降りの回数 N とエスカレーターの耐荷重 X(kg) が
半角スペース区切りで与えられます。
・2 行目からの N 行では、エスカレーターの乗り降りの内容が時系列順に与えられます。
入力値最終行の末尾に改行が１つ入ります。



期待する出力
・全ての乗り降りが終わった時点でエスカレーターに乗っている人数 num と乗っている人の体重の総和 sum を
改行区切りで出力してください。
num
sum



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ N ≦ 10,000
・1 ≦ X ≦ 100,000
・Q_i は次のいずれかの形式
「ride K w_1 w_2 ... w_K (1 ≦ K ≦ 30, 1 ≦ w_i ≦ 150, 1 ≦ i ≦ K)」
「get_off K (1 ≦ K ≦ 30)」
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
  const [times, maxWeight] = lines[0].split(" ").map(Number);
  const passengerData = lines.slice(1).map((p) => p.split(" "));
  // -- 入力 → 変数 --

  // -- キューを使用してエスカレーターをシュミレーションする --
  const queue = [];
  let totalWeight = 0;
  let currentPassenger = 0;
  let getOffIndex = 0;

  for (const [command, peopleStr, ...weights] of passengerData) {
    if (!(command === "ride" || command === "get_off")) {
      console.error(`不正なコマンド${command}が含まれています。`);
      return;
    }

    const people = Number(peopleStr);
    // -- 処理を行うスイッチを設置 --
    command === "ride" ? ridePassenger(people, weights) : getOffPassenger(people);
  }

  // -- 乗る処理をする --
  function ridePassenger(people, weights) {
    for (const personStr of weights) {
      const person = Number(personStr);

      // -- 重量チェック --
      const checkWeight = totalWeight + person;
      if (checkWeight <= maxWeight) {
        totalWeight += person;
        queue.push(person);
        currentPassenger++;
      }
    }
  }

  // -- 降りる処理をする --
  function getOffPassenger(people) {
    const maxGetOff = Math.min(people, queue.length - getOffIndex);

    for (let i = getOffIndex; i < getOffIndex + maxGetOff; i++) totalWeight -= queue[i];
    getOffIndex += maxGetOff;
    currentPassenger -= maxGetOff;
  }

  // -- キューを使用してエスカレーターをシュミレーションするend --

  // -- 出力する --
  const output = queue.slice(getOffIndex);
  console.log(output.length);
  console.log(totalWeight);
});
