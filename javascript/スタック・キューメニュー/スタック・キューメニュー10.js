/*
N 文字の 括弧列 S が与えられます。与えられた 括弧列 が 正しい括弧列 かどうか判定してください。

ここで、 括弧列 とは以下のように定義します。

* ( または ) または空文字のみで構成される文字列

また、 正しい括弧列 とは以下のように定義します。

1. 空文字列は正しい括弧列である。
2. 文字列 s が正しい括弧列であるとき、 ( + s + ) は正しい括弧列である。
3. 文字列 s , t が正しい括弧列であるとき、 s + t は正しい括弧列である。

たとえば、以下の文字列はすべて 正しい 括弧列です。


()
(())
()()
(()())
((((())())()))


また、以下の文字列はすべて 正しくない 括弧列です。

)(
(
())
((())
(()()))((()())()
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
  const number = Number(lines[0]);
  const parentheses = lines[1].split("");
  // -- 入力 → 変数end --

  // -- 列が正しいか判断する --
  const left = "(";
  const right = ")";

  const stack = [];
  for (const parts of parentheses) {
    // -- この条件がないとright始まりの時、Yesになってしまう --
    if (stack.length === 0 && parts === right) {
      console.log("No");
      return;
    }
    parts === left ? stack.push(parts) : stack.pop();
  }

  stack.length === 0 ? console.log("Yes") : console.log("No");
});
