/*
オリンピックの国別メダル獲得数ランキングを作成しましょう。

ランキングは以下のルールで決定されます。

・金メダルの獲得数が多いほうが上位となる
・金メダルの獲得数が同じ場合、銀メダルの獲得数が多いほうが上位となる
・金メダル、銀メダルの獲得数ともに同じ場合、銅メダルの獲得数が多いほうが上位となる

メダル獲得数のリストが与えられるので、それを上記のルールにそってランキング上位から順に並び替えてください。
同着もありえますが、単純に獲得数のリストを並び替えるのでその両者を区別する必要はありません
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
  // 国の数を定義する
  const country = Number(lines[0]);

  // メダルの情報をオブジェクト形式で管理することで、複数の情報を意味を持ちながら管理する
  const medals = [];
  for (let i = 1; i <= country; i++) {
    const medal = {};
    const [gold, silver, bronze] = lines[i].split(" ").map(Number);
    medal["gold"] = gold;
    medal["silver"] = silver;
    medal["bronze"] = bronze;

    medals.push(medal);
  }

  // 条件に沿ってソートをする。
  /*
        新しい配列名 = ソートしたい配列名.sort((a, b) => {
            優先度1
            return 左が上位、右が下位。b - aにすると、降順。a - bにすると昇順になる。
            優先度2
            優先度3
        })
    */
  const sorted_medals = medals.sort((a, b) => {
    if (a.gold !== b.gold) {
      return b.gold - a.gold;
    }

    if (a.silver !== b.silver) {
      return b.silver - a.silver;
    }

    return b.bronze - a.bronze;
  });

  // 結果を出力する
  for (const M of sorted_medals) {
    console.log(M.gold, M.silver, M.bronze);
  }
});
