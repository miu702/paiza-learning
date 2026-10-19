/*
paiza カードは毎日のお買い物でポイントがたまるお得なポイントカードです。
ポイントの付与基準は商品の種類によって以下のように異なります。

食料品：100円で5pts
書籍：100円で3pts
衣類：100円で2pts
その他：100円で1pt

ポイントは以下の手順で計算されます。

1. 商品の種類ごとの合計購入金額を計算する。
2. それぞれのポイント付与基準に基づき商品の種類ごとの付与ポイントを計算する。
3. 商品の種類ごとの付与ポイントを合計する。(100円未満は切り捨て)

買い物内訳と合計ポイントの例を見てみましょう。

商品 1: 食料品 200 円
商品 2: 書籍 240 円
商品 3: 食料品 120 円
商品 4: その他 460 円
商品 5: 書籍 240 円
商品 6: 衣類 3200 円

食料品合計 320 円 → 15 ポイント
書籍合計 480 円 → 12 ポイント
衣類合計 3200 円 → 64 ポイント
その他合計 460 円 → 4 ポイント => 合計ポイント → 95 ポイント
このように購入した商品の種類と金額のリストが与えられるので、その買い物で付与されるポイントの合計を求めてください。

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
  class PointCalculation {
    constructor() {
      this.point = 0;
      this.groceries = 0;
      this.books = 0;
      this.clothing = 0;
      this.other = 0;
    }

    buy(command, price) {
      switch (command) {
        case "0":
          this.groceries += price;
          break;

        case "1":
          this.books += price;
          break;

        case "2":
          this.clothing += price;
          break;

        case "3":
          this.other += price;
          break;

        default:
          console.error(`指定した${command}は存在しません。`);
      }
    }

    accrual() {
      const groceriesPoint = Math.floor(this.groceries / 100) * 100 * 0.05;
      const booksPoint = Math.floor(this.books / 100) * 100 * 0.03;
      const clothingPoint = Math.floor(this.clothing / 100) * 100 * 0.02;
      const otherPoint = Math.floor(this.other / 100) * 100 * 0.01;
      this.point = Math.floor(groceriesPoint + booksPoint + clothingPoint + otherPoint);
    }
  }

  const items = Number(lines[0]);
  const data = lines.slice(1, items + 1);
  const user = new PointCalculation();

  for (let i = 0; i < data.length; i++) {
    const [command, price] = data[i].split(" ");
    // console.log(price);
    user.buy(command, Number(price));
  }
  user.accrual();

  console.log(user.point);
});
