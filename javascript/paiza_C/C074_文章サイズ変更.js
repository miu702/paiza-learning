/*
Paiza 君はデスクトップアプリケーションを開発しています。
Paiza 君は、そのアプリケーションに、ウィンドウのサイズを変更すると文章表示部分の大きさも同様に変更され、
文章表示部分の幅に合わせて自然に改行されるという機能をつけようと考えています。


Paiza 君の代わりに、現在の文章表示部分の高さと幅、及び変更後の幅を元に、
新しく表示される文章を表示するプログラムを作成してください。


力される値
入力は以下のフォーマットで与えられます。

H W X
s_1
s_2
...
s_H
・1 行目にそれぞれ変更前の文章表示部分の高さ、横幅を表す整数 H, W と、
変更後の文章表示部分の横幅を表す整数 X がこの順で半角スペース区切りで与えられます。
・続く H 行のうちの i 行目 (1 ≦ i ≦ H) には 小文字英字、大文字英字、及び "#", "." からなる長さ W の文字列 s_i が与えられます。
・入力は合計で H + 1 行となり、入力値最終行の末尾に改行が １ つ入ります。
それぞれの値は文字列で標準入力から渡されます。標準入力からの値取得方法はこちらをご確認ください


期待する出力
a_1
a_2
...
a_Y
・期待される出力は Y 行 (1 ≦ Y ≦ 500) になります。
・i 行目 (1 ≦ i ≦ Y) には i 行目に表示される文字列を表す a_i を出力してください。
・出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ H ≦ 100
・1 ≦ W ≦ 100
・1 ≦ X ≦ 150
・各 i (1 ≦ i ≦ H) について
　・s_i は英字小文字、英字大文字、"." 及び "#" で構成される長さ W の文字列
・1 ≦ (変更後の高さ) ≦ 500


入力例1
6 8 6
My#name#
is#paiza
.#I#like
#program
ming#ver
y#much.#


出力例1
My#nam
e#is#p
aiza.#
I#like
#progr
amming
#very#
much.#


入力例2
3 4 7
wdip
#dig
et#k


出力例2
wdip#di
get#k
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
  const [height, width, new_width] = lines[0].split(" ").map(Number);
  const words = [];
  for (let i = 1; i <= height; i++) {
    const word = lines[i].split("");
    words.push(word);
  }
  // 配列の次元を下げる。
  const wordList = words.flat();

  // 新しい盤面の大きさを調査する。
  const rest = wordList.length % new_width;
  const new_height = rest === 0 ? wordList.length / new_width : Math.floor(wordList.length / new_width) + 1;

  // 新しい盤面を出力する
  for (let x = 0; x < new_height; x++) {
    // 左と右を調査する。
    const left = new_width * x;
    const right = Math.min(left + new_width - 1, wordList.length - 1);

    // sliceはここから~ここまで + 1とすることでここから~ここまでを変数にできる。
    const row = wordList.slice(left, right + 1);
    console.log(row.join(""));
  }
});
