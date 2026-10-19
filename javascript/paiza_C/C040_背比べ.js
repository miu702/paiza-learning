/*
何やら子供たちが集まって背比べをしています。
話を聞いてみると、一人の子供をのぞいて他の子供の身長は正確にわかっており、
その一人の子供の身長を他の子どもと比べることで測ろうとしているようです。
手助けをしてあげましょう。

ここでは 6 人の子供の身長がわかっており、
この子供たちともう一人の子供の身長を比較すると上のようになりました。
これらの結果をまとめると身長のわかっていない子供の身長は 116.9cm 以上 117.6cm 以下
であることがわかります。

他の同じような状況の子供たちのためにもこれを自動化するプログラムをつくりましょう
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
  // 子供の人数を定義する
  number = Number(lines[0]);

  // 処理に必要な初期値を定義する
  let possibility_min = 100;
  let possibility_max = 200;

  for (let i = 1; i <= number; i++) {
    [comparison, height] = lines[i].split(" ");

    if (comparison === "ge") {
      // h_i以上のとき"ge"なので、変換する変数より大きい時に変換する。
      if (possibility_min <= Number(height)) possibility_min = Number(height);
    } else if (comparison === "le") {
      // h_i以下のとき"le"なので、変換する変数より小さい時に変換する。
      if (possibility_max >= Number(height)) possibility_max = Number(height);
    }
  }

  // JavaScriptで、125.0などをそのまま表示する。数値.toFixed(1)
  console.log(possibility_min.toFixed(1), possibility_max.toFixed(1));
});
