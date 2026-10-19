/*
まずはキューを扱う練習として 3 つのキューを用意して、それらに基本操作を行いましょう。
はじめ 3 つのキューは空です。
次のいずれかの指示が N 回与えられるので、入力された順番に指示通りの操作をしてください。
全ての指示が終わった後、各キューに含まれる要素を先頭から順に出力してください。

・push S X
S 番目のキューの末尾に X を追加する。
・pop S
S 番目のキューの先頭の要素を取り出す。


入力される値
N
Q_1
Q_2
...
Q_N
・1 行目では与えられる指示の回数 N が与えられます。
・2 行目からの N 行では、キューの操作の指示が与えられます。
入力値最終行の末尾に改行が１つ入ります。



期待する出力
・3 つのキューの要素を次の順番で改行区切りで出力してください。
1 つ目のキューの先頭の要素
→...
→1 つ目のキューの末尾の要素
→2 つ目のキューの先頭の要素
→...
→2 つ目のキューの末尾の要素
→3 つ目のキューの先頭の要素
→...
→3 つ目のキューの末尾の要素

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
  const operation = lines.slice(1).map((o) => o.split(" "));
  // -- 入力 → 変数end --

  // -- 操作用の配列を定義 --
  const queue_1 = [];
  const queue_2 = [];
  const queue_3 = [];
  let index_1 = 0;
  let index_2 = 0;
  let index_3 = 0;
  // -- 操作用の配列を定義end --

  // -- シュミレーションする --
  for (const [command, type, number] of operation) {
    if (!(command === "push" || command === "pop")) {
      console.error(`不正なコマンド${command}が含まれています。`);
      return;
    }

    command === "push" ? addNumber(type, number) : deleteNumber(type);
  }

  function addNumber(type, number) {
    switch (type) {
      case "1":
        queue_1.push(number);
        break;

      case "2":
        queue_2.push(number);
        break;

      case "3":
        queue_3.push(number);
        break;

      default:
        console.error(`不正な配列名${type}が含まれています。`);
        return;
    }
  }

  function deleteNumber(type) {
    switch (type) {
      case "1":
        index_1++;
        break;

      case "2":
        index_2++;
        break;

      case "3":
        index_3++;
        break;

      default:
        console.error(`不正な配列名${type}が含まれています。`);
        return;
    }
  }

  const output_1 = queue_1.slice(index_1, queue_1.length);
  const output_2 = queue_2.slice(index_2, queue_2.length);
  const output_3 = queue_3.slice(index_3, queue_3.length);
  // -- シュミレーションする --

  // -- 出力する --
  if (output_1.length > 0) console.log(output_1.join("\n"));
  if (output_2.length > 0) console.log(output_2.join("\n"));
  if (output_3.length > 0) console.log(output_3.join("\n"));
});
