/*
逆ポーランド記法 で書かれた数式が与えられます。この数式を計算した結果を出力してください。
この問題は少し難しいですが、スタックを用いて解いてみましょう。


逆ポーランド記法とは
私たちがよく用いる数式の記法は中置記法と呼ばれています。
たとえば以下の数式のように、数値と数値の 間 に演算子が置かれます。
1 + 2

逆ポーランド記法では以下の数式のように、数値と数値の 後 に演算子が置かれます。
1 2 +
逆ポーランド記法の長所として、計算順序を決定する括弧を必要としません。
たとえば中置記法で書かれた以下の数式について考えます。
(1 + 2) - (3 + 4)

これを逆ポーランド記法に変換すると以下のようになります。
1 2 + 3 4 + -

入力される値
1 行目に逆ポーランド記法で書かれた数式の文字数 N が与えられます。 2 行目には逆ポーランド記法の数式 A の各文字が半角スペース区切りで与えられます。


N
A_1 A_2 ... A_N

入力値最終行の末尾に改行が１つ入ります。


期待する出力
逆ポーランド記法で計算した結果 R を出力してください。末尾には改行を入れ、余計な文字、空行を含んではいけません。
R
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
  const [size, ...parts] = lines.join(" ").split(/\s+/);

  // -- スタックを利用して計算する --
  const stack = [];
  let total = 0;
  for (const p of parts) {
    // -- 数値の時、pashする --
    if (p.match(/\d/)) {
      stack.push(p);
    } else {
      // -- 演算子の時、popする --
      const num_1 = stack.pop();
      const num_2 = stack.pop();
      p === "+" ? sum(num_1, num_2) : sub(num_1, num_2);
      stack.push(total);

      // -- 計算用の箱をリセットする --
      total = 0;
    }
  }

  // -- 計算本体(取り出すときも後ろからになるので、計算を逆にする必要がある) --
  function sum(n1, n2) {
    total = Number(n2) + Number(n1);
  }

  function sub(n1, n2) {
    total = Number(n2) - Number(n1);
  }

  // -- 結果を出力する --
  console.log(stack.join(""));
});
