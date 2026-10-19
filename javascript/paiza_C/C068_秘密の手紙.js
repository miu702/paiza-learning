/*
あなたは友達と秘密を共有するために暗号文を作り、その暗号文を元に戻すプログラムを作成することになりました。
暗号文を元に戻す際のルールは以下の通りです。


・全ての文は大文字アルファベットのみを使う。
・文字の番号は左から順番に 1 番目から数え始めるものとする。
・暗号文の元に戻す操作として、暗号文の奇数番目の文字に対しては、
各文字をアルファベットの逆方向に N 文字ずらし、偶数番目の文字に対しては、
各文字を順方向に N 文字ずらしたものとする。
・ずらした文字数 N は互いに知っている。


暗号化された文字列と元の文をずらした文字数 N が与えられるので、
元に戻された文字列を出力するプログラムを作成してください。
ただし、文字をずらした時、アルファベットの先頭、及び末尾をはみ出してしまった場合、
それぞれ、アルファベットの末尾、アルファベットの先頭から続きを数えるものとします。


入力される値
入力は以下のフォーマットで与えられます。

N
S
・1 行目には、ずらした文字数を表す整数 N が与えられます。
・続く 1 行には、暗号文字列を表す文字列 S が与えられます。入力は 2 行となり、末尾に改行が 1 つ入ります。
・S は暗号化文字された文字列を表す 英字大文字 からなる文字列
それぞれの値は文字列で標準入力から渡されます。


期待する出力
元に戻された文字列を出力してください。
出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。

・1 ≦ N ≦ 25
・S は 英字大文字 で構成される文字列。
・1 ≦ (S の長さ) ≦ 500



入力例1
4
QEPG

出力例1
MILK

入力例2
19
KXKPMQVI

出力例2
RQRITJCB

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
  // 入力→変数に変換する
  const shifted = Number(lines[0]);
  const cipher = lines[1].split("");

  // 大文字アルファベットの配列を作成する。
  const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode("A".charCodeAt(0) + i));

  // アルファベットを3回繋げ、前後の文字への折り返しを扱いやすくする。
  const conversion = alphabets.concat(alphabets, alphabets);

  // 暗号分の長さだけ、繰り返し処理をする。
  const output = [];
  for (let i = 0; i < cipher.length; i++) {
    // 暗号の文字の位置を見つける。
    const index = alphabets.indexOf(cipher[i]);

    // 条件に沿ってずらす。+26は3つの配列の真ん中にするための補正。
    if (i % 2 === 0) {
      const shift = index - shifted + 26;
      output.push(conversion[shift]);
    } else {
      const shift = index + shifted + 26;
      output.push(conversion[shift]);
    }
  }

  // 結果を出力する
  console.log(output.join(""));
});
