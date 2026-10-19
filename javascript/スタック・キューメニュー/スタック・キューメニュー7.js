/*
Q 個のクエリが与えられます。 2 つのキューを用意したあと、 Q 個のクエリを順に処理してください。
各クエリは、以下の 5 つのいずれかです。

・ PUSH 1 X: 1 つ目のキューに数値 X を追加
・ PUSH 2 X: 2 つ目のキューに数値 X を追加
・ POP 1: 1 つ目のキューの先頭の要素を削除し、その値を出力
・ POP 2: 2 つ目のキューの先頭の要素を削除し、その値を出力
・ SIZE: 1 つ目のキュー、 2 つ目のキューに含まれる要素数をそれぞれ出力


入力される値
Q
query_1
query_2
...
query_Q


1 行目に Q が与えられます。続く Q 行にクエリが与えられます。 各クエリは
1 K X

または
2 K

または
3

の形式で与えられ、最初の数値が 1 のとき PUSH 、 2 のとき POP 、 3 のとき SIZE を表します。 
PUSH または POP のときは続いて数値 K が与えられます。 K が 1 のとき 1 つ目のキューに対して、
 2 のとき 2 つ目のキューに対して操作が行われます。 PUSH のときはさらに数値 X が与えられます。


期待する出力
各クエリに応じて、以下の形式で値を出力してください。
・ PUSH の場合
改行を含めて何も出力する必要はありません。
・ POP の場合
クエリ処理を行う直前に、キューの先頭にある要素 F を出力してください。
F
・ SIZE の場合
1 つ目のキューに含まれる要素数 S_1 と 2 つ目のキューに含まれる要素数 S_2 をそれぞれ、半角スペース区切りで出力してください。
S_1 S_2
値を出力した各行の末尾には改行を入れ、余計な文字、空行を含んではいけません。

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
  // -- 入力 --
  const inputNumbers = lines.slice(1, lines.length);

  // -- 処理用配列 --
  const queue_1 = [];
  const queue_2 = [];

  // -- 要素を処理する(起動場所) --
  for (let i = 0; i < inputNumbers.length; i++) {
    const [command, kinds, number] = inputNumbers[i].split(" ").map(Number);

    if (command === 1) {
      kinds === 1 ? addNum(queue_1, number) : addNum(queue_2, number);
    } else if (command === 2) {
      kinds === 1 ? outputNum(queue_1) : outputNum(queue_2);
      kinds === 1 ? shiftNum(queue_1, number) : shiftNum(queue_2, number);
    } else if (command === 3) {
      outputLength();
    }
  }

  // -- 要素を処理する(処理場所) --
  function addNum(q, num) {
    q.push(num);
  }

  function outputNum(q) {
    console.log(q[0]);
  }

  function shiftNum(q, num) {
    q.shift(num);
  }

  function outputLength() {
    console.log(queue_1.length, queue_2.length);
  }
});
