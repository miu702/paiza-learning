/*
paiza 市に住んでいるあなたは、普段の移動手段は全て paiza バスを使います。
paiza バスでは paica という IC カードを乗車券として使うことができます。事前に paica にチャージをすることで利用できます。
バスの運賃支払に paica のカード残額を使うと、運賃の 10 % が paica ポイントとしてたまります。

バスを降車する時に、支払う運賃以上のポイントがある場合は、ポイントが優先的に運賃の支払いに使われます。
ただし、1 ポイントは 1 円になります。ただし、ポイントで運賃を支払った場合、新たなポイントは発生しません。


あなたは、カード残金とポイントをどれくらい使ったか知るためのプログラムを書くことにしました。
あなたには、最初にチャージする現金と、バスを利用した時にかかった料金のリストが与えられるので、
毎回の降車時に残っているお金とポイントを出力してください。
ただし、途中でカード残高とポイントの両方が運賃を下回ることはありません。


入力される値
入力は以下のフォーマットで与えられます。

N M
f_1
f_2
...
f_M
・1 行目にはそれぞれ、はじめにチャージされている金額、バスの乗車回数を表す整数 N, M がこの順で半角スペース区切りで与えられます。
・続く M 行のうちの i 行目 (1 ≦ i ≦ M) には、i 回目の降車時にかかった運賃を表す整数 f_i がこの順で半角スペース区切りで与えられます。
・入力は合計で M + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。



期待する出力
c_1 p_1
c_2 p_2
...
c_M p_M
・出力は M 行からなります。
・i 行目 (1 ≦ i ≦ M) には、 i 回目の降車時のカード残高とポイントを表す整数 c_i, p_i を出力してください。
・0 ≦ c_i, p_i ≦ N (1 ≦ i ≦ M)
・末尾に改行を入れ、余計な文字、空行を含んではいけません。


条件
すべてのテストケースにおいて、以下の条件をみたします。

・1 ≦ N ≦ 10,000
・1 ≦ M ≦ 100
・0 ≦ f_i ≦ 10,000 (1 ≦ i ≦ M)
・また、 f_i は必ず 10 の倍数になります。



入力例1
2000 5
300
500
300
100
100


出力例1
1700 30
1200 80
900 110
900 10
800 20


入力例2
3000 3
1000
1000
1000


出力例2
2000 100
1000 200
0 300
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
  // クラス設計
  class Boarding {
    constructor(initial_amount) {
      this.amount = initial_amount;
      this.points = 0;
    }

    pay(amount) {
      this.points >= amount ? this.use_points(amount) : this.use_amount(amount);
    }

    use_amount(amount) {
      this.amount -= amount;
      this.points += amount / 10;
    }

    use_points(amount) {
      this.points -= amount;
    }

    output() {
      return [this.amount, this.points];
    }
  }

  // 入力 → 変数に変換する
  const [initial_amount, rides] = lines[0].split(" ").map(Number);
  const amounts = lines.slice(1);

  // インスタンス化する。ここからの処理はインスタンスを変更する。
  const boarding = new Boarding(initial_amount);

  // ループ処理でクラスを操作する。
  for (const amountStr of amounts) {
    // 1、金額を払う
    const amount = Number(amountStr);
    boarding.pay(amount);

    // 2、払った後の残金とポイントを毎回出力する。
    const [balance, points] = boarding.output();
    console.log(balance, points);
  }
});
