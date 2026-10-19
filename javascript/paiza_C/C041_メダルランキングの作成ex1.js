/*
あなたはゲーム大会のランキングシステムを作っています。

参加者ごとに以下の3つのデータが与えられます。

・score：獲得したスコア
・win：勝利数
・time：クリアまでにかかった時間（秒）

ランキングは以下のルールで決定されます。

・score が高いほうが上位
・score が同じ場合、win が多いほうが上位
・score と win がともに同じ場合、time が短いほうが上位

参加者の情報が与えられるので、
ランキング上位から順番に並べ替えて出力してください。

同着もありえますが、
単純に参加者の情報を並び替えるだけなので区別する必要はありません。
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
  const people = Number(lines[0]);

  const user_data = [];
  for (let i = 1; i <= people; i++) {
    const user = {};
    const [name, score, win, time] = lines[i].split(" ");
    user["name"] = name;
    user["score"] = Number(score);
    user["win"] = Number(win);
    user["time"] = Number(time);

    user_data.push(user);
  }

  sorted_user_data = user_data.sort((a, b) => {
    // JavaScriptでは、b - aとすると降順(大 → 小)。 a - bとすると昇順になる(小 → 大)。
    if (a.score !== b.score) {
      return b.score - a.score;
    }

    if (a.win !== b.win) {
      return b.win - a.win;
    }

    return a.time - b.time;
  });

  // 結果を出力する
  for (const S of sorted_user_data) {
    console.log(S.name, S.score, S.win, S.time);
  }
});
