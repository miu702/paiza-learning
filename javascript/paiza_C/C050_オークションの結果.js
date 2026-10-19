/*
A さんと B さんがそれぞれ作成した自動取引プログラムが、ある商品を買うためにオークションに参加しています。
商品の値段は S 円から始まります。 A さんと B さんが、この順で交互に値段を上げていきます。


・A さんの作成した自動取引プログラムは今の商品の価格に 10 円を足した価格で交渉します。
・B さんの作成した自動取引プログラムは今の商品の価格に 1,000 円を足した価格で交渉します。
A さんの予算は a 円、 B さんの予算は b 円です。
自動取引プログラムは予算を超える価格で交渉をしようとすると停止します。


A さんと B さんのどちらが、いくらで商品を落札したかを出力してください。


例1
S = 1, a = 1500, b = 2050 のとき
商品は 1 円から取引が行われます。
1. まず、 A さんのプログラムが 11 円で交渉をします。
2. つぎに、 B さんのプログラムが 1,011 円で交渉をします。
3. つぎに、 A さんのプログラムが 1,021 円で交渉をします。
4. つぎに、 B さんのプログラムが 2,021 円で交渉をします。
5. A さんの予算は 1,500 円なので、 2,021 円から 10 円上げた 2,031 円では交渉できません。
そこで、 A さんの自動取引プログラムは停止します。

よって、 B さんが 2,021 円で商品を落札します。


入力される値
入力は以下のフォーマットで与えられます。

S a b
・商品の最初の時点での値段を表す整数 S、 A さんの予算を表す整数 a、 
B さんの予算を表す整数 b がこの順に半角スペース区切りで与えられます。
・入力は 1 行となり、末尾に改行が 1 つ入ります。



期待する出力
オークションでの落札結果を以下の形式で出力してください。
P v


1 行目に、オークションで商品を落札した人を表す英大文字 P、
落札価格を表す整数 v をこの順で半角スペース区切りで出力してください。

英大文字 P は、商品を落札した人物が A さんであれば "A"、
商品を落札した人物が B さんであれば "B" としてください。

1 行目の出力の最後に改行を入れ、余計な文字、空行を含んではいけません。
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
  // スタート金額、Aさんの予算、Bさんの予算の定義する
  const [start, A_limit, B_limit] = lines[0].split(" ").map(Number);

  // 自動取引プログラム：追加金額を現在の金額に足して、上限値を超えるときは、停止する = while文終了させる。
  function Machine_A(current, A_limit) {
    const add_price = 10;
    if (current + add_price > A_limit) {
      return "NG";
    } else {
      return current + add_price;
    }
  }

  function Machine_B(current, B_limit) {
    const add_price = 1000;
    if (current + add_price > B_limit) {
      return "NG";
    } else {
      return current + add_price;
    }
  }
  // 自動取引プログラム：追加金額を現在の金額に足して、上限値を超えるときは、停止する = while文終了させる。 end

  // 現在の落札金額を記録する
  const log = {};
  log["A"] = 0;
  log["B"] = 0;

  // 現在の金額と、終了条件を定義する
  let current = start;
  let check = true;

  // while文で終了条件を満たすまで、繰り返す。
  while (check) {
    // Aさんが先行。関数の結果で条件分岐する。
    const next_A = Machine_A(current, A_limit);
    if (next_A == "NG") {
      check = false;
      break;
    } else {
      log["A"] = next_A;
      current = next_A;
    }

    // Bさんが後行。関数の結果で条件分岐する。
    const next_B = Machine_B(current, B_limit);
    if (next_B == "NG") {
      check = false;
      break;
    } else {
      log["B"] = next_B;
      current = next_B;
    }
  }

  // Object.keys(log).reduce((a, b) => log[a] > log[b] ? a : b);で、logのバリューを取り出して、max(最大値を求める)
  const maxKey = Object.keys(log).reduce((a, b) => (log[a] > log[b] ? a : b));
  console.log(maxKey, log[maxKey]);
});
