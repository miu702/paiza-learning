/*
深夜アニメの放送開始時刻は、しばしば "時" を表す部分の数字が24以上になることを許容し次のように表記することがあります。

01/27 24:30

この日付を "時" の部分が0以上23以下になるような表記で、

01/28 00:30

と表すことができます。


前者の表記方法は時として便利ではありますが、実際に放送される "日" が知りたい場合は後者のほうが便利です。
そこで、日時が与えられるので、"時" の部分が 0 以上 23 以下になるように修正した日時を出力するプログラムを作成してください。

ただし、"時" を修正した結果、日がその月に存在しない日になった場合でも月を調整することなくそのまま出力してください。
もしかすると、このプログラムが使われる世界ではそのような日付が存在するかもしれないからです。
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
  // 入力に従って、数値を1つずつ取り出す。
  const fullDate = lines[0].split(" ");
  const date = fullDate[0].split("/");
  const time = fullDate[1].split(":");

  // 数値に名前を付ける
  const month = Number(date[0]);
  const day = Number(date[1]);
  const hour = Number(time[0]);
  const minutes = Number(time[1]);

  // 追加する日にちと残りを計算する
  const addDay = Math.floor(hour / 24);
  const rest = hour % 24;

  // 新しい日付を作成し、出力する。JavaScriptでは、文字列.padStart(桁数, 埋める数)で、作成できる。
  const newDay = day + Number(addDay);
  newDate = `${String(month).padStart(2, "0")}/${String(newDay).padStart(2, "0")} ${String(rest).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  console.log(newDate);
});
