/*
あなたは今辞書作成の業務に取り組んでいます。

辞書に載る各単語は小文字のアルファベット("a", "b", ..., "z")のみで構成されており、
また、辞書 1 ページにつき K 個の単語が掲載されます。
また、普通の辞書と同じように、単語は辞書順で小さいほうから掲載されていきます。

単語 S が単語 T より辞書順で小さいとは、ある整数 i について、
S と T の i 番目までの文字がすべて等しく、かつ S に i+1 番目の文字がないか、
S の i+1 番目の文字より T の i+1 番目の文字のほうがアルファベット順で後ろにあることを言います。
例えば、"a" よりも "aa" のほうが辞書順で後ろであり、"abc" よりも "z" のほうが辞書順で後ろであり、
"def" よりも "det" のほうが辞書順で後ろです。

あなたは、この辞書の P ページ目にどの単語が載るのか気になりました。
辞書に掲載する N 個の単語および 1 ページに載る単語の数 K および整数 P が与えられるので、
P ページ目に載る単語のリストを求めてください。

1 ページに K 個の単語が載らない場合があることに注意してください。

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
  const [word_int, one_page, pages] = lines[0].split(" ").map(Number);
  const words = lines[1].split(" ");

  // 文字列の配列に対してソートすると、辞書と同じ順になる。
  const sorted_words = words.sort();

  // 開くページの最初と最後を調べる。
  const start = one_page * (pages - 1);
  const end = start + one_page;

  // 単語が存在するとき、出力する
  for (let i = start; i < end; i++) {
    if (i < word_int) console.log(sorted_words[i]);
  }
});
