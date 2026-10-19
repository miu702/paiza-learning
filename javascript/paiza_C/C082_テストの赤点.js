/*
Paiza 高校で英語、国語、数学の 3 科目のテストがありました。

Paiza 高校ではテストを受けた X 人に対して、科目ごとに、下から Y 位までの生徒を赤点としています。
ただし、下から Y 位の生徒が複数いた場合、その全員が赤点となります
(全員が同じ点数だった場合は全員が下から 1 位なので赤点となります)。
また、下から i 位 (1 ≦ i ≦ X-1) の生徒が複数いた場合、次の順位はその人数分飛ばされます 


テストを受けた生徒の人数 X、赤点となってしまう下からの順位 Y、各生徒の科目ごとの点数が与えられるので、
それぞれの生徒がいくつ赤点を取ったか出力してください。


入力される値
入力は以下のフォーマットで与えられます。

X Y
E_1 J_1 M_1
E_2 J_2 M_2
...
E_X J_X M_X
・1 行目にはテストを受けた生徒の人数を表す整数 X と赤点となってしまう下からの順位を表す整数 Y がこの順で
半角スペース区切りで与えられます。
・続く X 行のうち、i 行目(1 ≦ i ≦ X)には i 番目の生徒の英語、国語、数学の点数を表す整数 
E_i, J_i, M_i がこの順で半角スペース区切りで与えられます。
・入力は合計で X + 1 行となり、末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。



期待する出力
各生徒の赤点の数を以下の形式で出力してください。
a_1
a_2
...
a_X
・期待する出力は X 行からなります。
・i 行目 (1 ≦ i ≦ X) には i 番目の生徒の赤点科目の数を出力してください。
・出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。


条件
すべてのテストケースにおいて、以下の条件をみたします。
・2 ≦ X ≦ 100
・1 ≦ Y ≦ X
・0 ≦ E_i, J_i, M_i ≦ 100 (1 ≦ i ≦ X)



入力例1
4 2
80 60 40
50 50 40
80 50 40
40 80 80


出力例1
1
3
2
1


入力例2
3 1
100 50 50
100 50 50
100 50 50


出力例2
3
3
3
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
  const [examinee, limit] = lines[0].split(" ").map(Number);
  const points = lines.slice(1, examinee + 1);

  // 得点を配列にする。
  const english = [];
  const japanese = [];
  const math = [];
  for (const p of points) {
    const [E, J, M] = p.split(" ").map(Number);
    english.push(E);
    japanese.push(J);
    math.push(M);
  }

  // 小さい順に並べる
  english.sort((a, b) => a - b);
  japanese.sort((a, b) => a - b);
  math.sort((a, b) => a - b);

  // 赤点の基準値
  const cut_english = english[limit - 1];
  const cut_japanese = japanese[limit - 1];
  const cut_math = math[limit - 1];

  // 人ごとに赤点の数を決める
  const counts = [];
  for (const p of points) {
    let count = 0;
    const [E, J, M] = p.split(" ").map(Number);

    // 英語
    if (E <= cut_english) count++;
    // 国語
    if (J <= cut_japanese) count++;
    // 数学
    if (M <= cut_math) count++;

    counts.push(count);
  }

  console.log(counts.join("\n"));
});
