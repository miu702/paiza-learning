/*
あなたの所属している会社は、勉強熱心なエンジニアを表彰するため
書籍購入費の高い人を上から順に並べて可視化する事にしました。
この会社は勉強熱心なエンジニアばかりなので、書籍購入費が同じ社員は存在しません。

例えば、入力例 2 では A さん、 B さん、 C さん という名前の 3 人のエンジニアがおり
それぞれ 1000円, 3000円, 2000円 の書籍購入費を消費しています。

それぞれの社員の名前と、書籍の購入情報が与えられます。この情報から書籍購入費ランキングを作成してください。



入力される値
入力は以下のフォーマットで与えられます。

N
s_1 s_2 ... s_N
M
o_1 p_1
o_2 p_2
...
o_M p_M
・1 行目に、エンジニアの人数 N が整数で与えられます。
・2 行目に、半角英小文字で構成される文字列が N 個スペース区切りで与えられます。
・i 番目 (1 ≦ i ≦ N) の文字列 s_i は、i 番目のエンジニアの名前です。
・3 行目に、エンジニアたちが購入した本の数 M が整数で与えられます。
・4 行目から続く M 行には、購入した人の名前を表す半角英小文字で構成される文字列 oj と
　その本の金額を表す整数 pj がこの順にスペース区切りで与えられます。
・入力は合計で M + 3 行となり、入力値最終行の末尾に改行が１つ入ります。


期待する出力
書籍購入費でエンジニアをランキングした際の並び順を以下のフォーマットで出力してください。

t_1
t_2
...
t_N
・1 行目からつづく N 行に、書籍購入費が高い人順に並べた時の i 番目の人の名前 t_i を出力して下さい。
・N 行目の出力の最後に改行を入れ、余計な文字、空行を含んではいけません。


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
  // 入力 → 変数に変換する
  const member = Number(lines[0]);
  const names = lines[1].split(" ");
  const log = Number(lines[2]);
  const log_data = lines.slice(3);

  // 名前を登録する
  const ranking = {};
  for (let i = 0; i < member; i++) {
    const player = {};

    const name = names[i];
    player["name"] = name;
    player["price"] = 0;

    ranking[name] = player;
  }

  // ランキングを更新する
  for (let j = 0; j < log; j++) {
    const [name, add_price] = log_data[j].split(" ");

    // 変数 in オブジェクト名でオブジェクトに変数が存在するか調査できる。
    if (name in ranking) {
      ranking[name]["price"] += Number(add_price);
    }
  }

  // オブジェクトのバリューを参考にソートするには、配列にする必要がある。Object.values(配列名)でオブジェクトを配列にすることができる。
  const sorted_ranking = Object.values(ranking).sort((a, b) => {
    if (a.price !== b.price) {
      return b.price - a.price;
    }
  });

  // 結果を出力する
  for (const S of sorted_ranking) {
    console.log(S.name);
  }
});
