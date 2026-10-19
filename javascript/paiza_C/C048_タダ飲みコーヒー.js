/*
あなたがよく利用しているコーヒーショップは本日限定であるサービスを行っています。
・コーヒーをお買い上げした際に、次のお買い上げの値段を更に P% off!
・毎回の値下げにおいて小数点以下切り捨て


あなたは値下げが累積する事に目をつけました。
コーヒーを何回も飲んでいれば、タダでコーヒーを飲めるようになるのです。

タダで頼みたいあなたは、何円払えば以後タダで注文できるのか計算したくなりました。
実際にプログラムを書いて計算してみましょう。
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
  // 最初の価格、割引率を定義する
  let [price, discountRate] = lines[0].split(" ").map(Number);

  // 価格が0になるまで、処理を行う。
  let totalPrice = 0;
  while (price > 0) {
    totalPrice += price;
    price = Math.floor(price * (1 - discountRate / 100));
  }

  // 合計金額を出力する
  console.log(totalPrice);
});
