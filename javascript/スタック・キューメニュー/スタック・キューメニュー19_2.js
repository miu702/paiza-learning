/*
スーパーで働いている paiza 君は、お店に並んでいる商品一つひとつにつけられている識別番号の管理を任されました。
こちらのスーパーでは、棚に商品を補充する際はお客さんから最も遠い側（棚の末尾）に
新しい商品を入れることになっています。
また、お客さんは棚の先頭の商品しか購入することができないようになっています。

商品の補充と購入に関する情報が時系列順に与えられるので、全ての補充と購入が終わった後に棚に残っている
商品の識別番号を棚の先頭から順に答えてください。

なお、初め棚は空であるものとし、商品の補充と購入の情報は以下の形式で与えられるとします。
・add num
棚の末尾に識別番号が num の商品を 1 つ追加する。
・buy X
お客さんが棚の先頭から数えて X 個購入する。



入力される値
N
Q_1
Q_2
...
Q_N
・1 行目では与えられる商品の補充と購入の情報の個数 N が与えられます。
・2 行目からの N 行では、商品の補充と購入の内容が時系列順に与えられます。
入力値最終行の末尾に改行が１つ入ります。



期待する出力
・全ての補充と購入が終わった後に棚に残っている商品の識別番号を棚の先頭から順に答えてください。
棚の先頭の商品の識別番号
...
棚の末尾の商品の識別番号


条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ N ≦ 10000
・Q_i は次のいずれかの形式
「add num (1 ≦ num ≦ 100000)」
「buy X(1 ≦ X ≦ 棚の商品の個数)」

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
  const N = Number(lines[0]);
  const merchandises = lines.slice(1).map((m) => m.split(" "));
  // -- 入力 → 変数end --

  // -- 棚の様子をシュミレーションする --
  const queue = [];
  let dx = 0;

  for (const [type, numberStr] of merchandises) {
    if (!(type === "add" || type === "buy")) {
      console.error(`不正なコマンド${type}が含まれています。`);
      return;
    }
    const number = Number(numberStr);
    type === "add" ? addMerchandises(number) : buyMerchandises(number);
  }

  function addMerchandises(number) {
    queue.push(number);
  }

  function buyMerchandises(number) {
    // -- (取りたい数、商品の最大数 - 現在取っている数) の小さい方が現在取れる数である --
    const maxPickup = Math.min(number, queue.length - dx);
    dx += maxPickup;
    number -= maxPickup;
  }
  // -- 棚の様子をシュミレーションするend --

  // -- 棚の最終形を出力する --
  const outputMerchandises = queue.slice(dx, queue.length);
  console.log(outputMerchandises.join("\n"));
});
