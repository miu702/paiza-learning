/*
paiza 君は、最近新たなプログラミング言語を習得するために学習本を買い漁って読んでいました。
整理整頓が苦手な paiza 君は買った本を 1 箇所にどんどん積み重ねてしまいます。
また、本を読むときは間から本を取るのが面倒なので、一番上に置かれている本の読んでいないページから読書を再開し、
全てのページを読み終わった本は山から取り除くことにしています。

どの本をどこまで読んだか忘れてしまった paiza 君は積まれている本のうち、
まだ読んでいないページ数を数えたいと思いました。

paiza 君の行動の履歴が時系列順に以下のいずれかの形式で与えられるので、
全ての行動が終わった後に残っている本の冊数と未読の合計ページ数を求めてください。
なお、はじめ paiza 君は 1 冊も本を持っていないものとします。


・buy_book X
X ページの本を購入し、現在の本の山の一番上に置く。

・read Y
一番上の本の未読のページから数えて合計 Y ページ読む。
一番上の本が読み終わったら、その本を取り除き、一つ下の本の未読のページから読書を再開する。


入力される値
N
Q_1
Q_2
...
Q_N
・1 行目では与えられる paiza 君の行動の回数 N が与えられます。
・2 行目からの N 行では、paiza 君の行動の記録が時系列順に与えられます。
入力値最終行の末尾に改行が１つ入ります。



期待する出力
・山に残っている本の冊数 B と未読のページ数 P を改行区切りで出力してください。
B
P


条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ N ≦ 10000
・Q_i は次のいずれかの形式
「buy_book X (1 ≦ X ≦ 10000)」
「read Y　(1 ≦ Y ≦ 積み上げられた本のページ数の総和)」
・読む本がなくなることがないことが保証されています。

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
  const actionList = lines.slice(1).map((act) => act.split(" "));
  // -- 入力 → 変数end --

  // -- スタックを活用して、処理を実施する --
  const stack = [];
  for (const [command, pagesStr] of actionList) {
    // -- 指定された行動以外を無くす --
    if (!(command === "buy_book" || command === "read")) {
      console.error(`不正な行動${command}があります。`);
      return;
    }

    const pages = Number(pagesStr);
    // -- 三項演算子で行動を2分化する --
    command === "buy_book" ? buyBook(pages) : readBook(pages);
  }

  function buyBook(pages) {
    stack.push(pages);
  }

  function readBook(pages) {
    while (pages > 0) {
      const current = stack.pop();

      if (current < pages) {
        pages -= current;
      } else if (current >= pages) {
        const rest = current - pages;
        pages = 0;
        if (rest > 0) stack.push(rest);
      }
    }
  }
  // -- スタックを活用して、処理を実施するend --

  // -- 結果を出力する --
  const restTotal = stack.reduce((a, b) => a + b, 0);
  console.log(stack.length);
  console.log(restTotal);
});
