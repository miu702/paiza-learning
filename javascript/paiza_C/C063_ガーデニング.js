/*
あなたはガーデニングを始めることにしました。
始めるにさしあたり、N 種類の花の種を買いました。
i 種類目の花の種 (1 ≦ i ≦ N) は、種を蒔いてから a_i 日後に花を咲かせ、a
_i + 1 日後に枯れてしまいます。


あなたは、ガーデニング開始日を 1 日目として、i 種類目の花の種を b_i 日目に庭にまくことに
しました。このとき、あなたは最も多くの花が咲くのは何日目なのかが気になりました。

そこで、何日目に最も多くの花が咲くのかを求めるプログラムを作成してください。
そのような日が複数ある場合は、最も多くの花が咲く日のうち、最も早い日を求めてください。


入力される値
入力は以下のフォーマットで与えられます。
N
a_1 b_1
a_2 b_2
...
a_N b_N
・1 行目に、花の種類数を表す整数 N が与えられます。
・続く N 行のうちの i 行目 (1 ≦ i ≦ N) には、i 番目の花の種が花を咲かせるまでの日数を表す整数 a_i、i 番目の花の種を庭にまく日を表す整数 b_i がこの順で半角スペース区切りで与えられます。
・入力は合計で N + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。



期待する出力
ガーデニングを始めた日を 1 日目として、最も多くの花が咲く日が何日目かを整数で出力してください。そのような日が複数ある場合は、最も多くの花が咲く日のうち、最も早い日を出力してください。

最後は改行し、余計な文字、空行を含んではいけません。
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
  // 花の量を定義する
  const number = Number(lines[0]);

  // 差分配列を作成する。
  /*
        配列の長さは、種をまく最終日(30) + 花を咲くのにかかる日(30) + 
        花が咲く期間(1) + インデックス調整(1)とする
    */
  const max = 62;
  const days = new Array(max + 1).fill(0);

  for (let i = 1; i <= number; i++) {
    const [elapsed, scatter] = lines[i].split(" ").map(Number);
    // 花が咲く日 = 撒く日 + 花が咲く日のかかる日
    const start = scatter + elapsed;
    // 花が枯れる日 = 花が咲く日 + 1
    const end = start + 1;

    // 花の量を変化させる。
    days[start]++;
    days[end]--;
  }

  // 差分配列を元に数値を変化させる。
  let max_day = 0; // 最大の日を記録する
  let max_flower = 0; // 最大の花を記録する
  let current = 0; // 現在の花の合計数

  for (let day = 1; day < days.length; day++) {
    // 本日の花の量を変化させる。
    current += days[day];

    // 花の量が最大を超えるときは、更新する。
    if (current > max_flower) {
      max_flower = current;
      max_day = day;
    }
  }

  // 花の咲いている量が最も多い早い日を出力する
  console.log(max_day);
});
