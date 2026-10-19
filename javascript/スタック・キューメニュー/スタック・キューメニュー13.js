/*
まずはスタックを扱う練習として 3 つのスタックを用意して、それらに基本操作を行いましょう。
はじめ 3 つのスタックは空です。
次のいずれかの指示が N 回与えられるので、入力された順番に指示通りの操作をしてください。
全ての指示が終わった後、各スタックに含まれる要素を上から順に出力してください。

・push S X
S 番目のスタックに X を追加する。
・pop S
S 番目のスタックの一番上の要素を取り出す。
スタックの要素が存在しない場合は何もしない。

入力される値
N
Q_1
Q_2
...
Q_N
・1 行目では与えられる指示の回数 N が与えられます。
・2 行目からの N 行では、スタックの操作の指示が与えられます。
入力値最終行の末尾に改行が１つ入ります。


期待する出力
・3 つのスタックの要素を次の順番で改行区切りで出力してください。
・スタックが空の場合は何も出力しないでください。
1 つ目のスタックの一番上の要素
→...
→1 つ目のスタックの一番下の要素
→2 つ目のスタックの一番上の要素
→...
→2 つ目のスタックの一番下の要素
→3 つ目のスタックの一番上の要素
→...
→3 つ目のスタックの一番下の要素


条件
すべてのテストケースにおいて、以下の条件をみたします。

・1 ≦ N ≦ 10000
・Q_i は次のいずれかの形式（1 ≦ i ≦ N）
「push S X (1 ≦ S ≦ 3, 1 ≦ X ≦ 10000)」
「pop S(1 ≦ S ≦ 3)」
・空のスタックから要素を取り出すような pop は与えられないことが保証されている。
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
  const number = Number(lines[0]);
  const iuputNumbers = lines.slice(1);
  const data = [];
  for (let i = 0; i < iuputNumbers.length; i++) {
    const d = iuputNumbers[i].split(" ");
    data.push(d);
  }

  // -- 操作するスタックを作成する --
  const stack_A = [];
  const stack_B = [];
  const stack_C = [];

  // -- シュミレーションする --
  for (const [command, type, number] of data) {
    if (!(command === "push" || command === "pop")) {
      console.error("指定した操作はできません。");
      return;
    }

    command === "push" ? addNumber(type, number) : popNumber(type);
  }

  function addNumber(type, number) {
    switch (type) {
      case "1":
        stack_A.push(number);
        break;

      case "2":
        stack_B.push(number);
        break;

      case "3":
        stack_C.push(number);
        break;

      default:
        console.error("指定した配列は存在しません。");
        return;
    }
  }

  function popNumber(type) {
    if (type === "1" && stack_A.length !== 0) {
      stack_A.pop();
    } else if (type === "2" && stack_B.length !== 0) {
      stack_B.pop();
    } else if (type === "3" && stack_C.length !== 0) {
      stack_C.pop();
    }
  }

  // -- 結果を出力する --
  while (stack_A.length > 0) {
    console.log(stack_A[stack_A.length - 1]);
    stack_A.pop();
  }

  while (stack_B.length > 0) {
    console.log(stack_B[stack_B.length - 1]);
    stack_B.pop();
  }

  while (stack_C.length > 0) {
    console.log(stack_C[stack_C.length - 1]);
    stack_C.pop();
  }
});
