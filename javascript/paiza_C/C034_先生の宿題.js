/*
あなたは小学校一年生の先生です。今週の授業で、足し算と引き算を教えます。あなたは、足し算と引き算を用いた宿題を作る必要があり、そのためのプログラムを書くことにしました。

以下の手順で問題をランダム生成するプログラムはもうできているのですが、その答えを求めるプログラムはまだできていません。答えを求めるプログラムを書いてください。

[問題生成の手順]

1. 正しい式 a + b = c, あるいは a - b = c (a, b, c, は整数) を生成する
2. a, b, c のうちいずれか 1 つを空欄にする

この空欄に入れるべき整数が「答え」となります。
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
  const [aStr, op, bStr, equal, cStr] = lines[0].split(" ");
  const allNumbers = [aStr, bStr, cStr];
  const variable = allNumbers.findIndex((n) => n === "x");
  const numbers = allNumbers.filter((n) => n !== "x").map((n) => Number(n));

  let answer = 0;
  switch (variable) {
    case 0:
      if (op === "+") {
        answer = numbers[1] - numbers[0];
      } else if (op === "-") {
        answer = numbers[1] + numbers[0];
      }
      break;

    case 1:
      if (op === "+") {
        answer = numbers[1] - numbers[0];
      } else if (op === "-") {
        answer = -numbers[1] + numbers[0];
      }
      break;

    case 2:
      if (op === "+") {
        answer = numbers[0] + numbers[1];
      } else if (op === "-") {
        answer = numbers[0] - numbers[1];
      }
      break;

    default:
      console.error("xの位置が不正です。");
  }
  console.log(answer);
});
