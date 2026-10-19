/*
paiza 王国では 4 で割って余りが 1 になる年に開催されるパイーザ祭があります。
paiza 王国では暦が独特であり、以下のような暦になっています。

・1 年には 1 月から 13 月までの 13 ヶ月がある。
・偶数月の日数は 15 日である。
・奇数月の日数は 13 日である。

paiza 王国の国民たちはこのパイーザ祭が大好きでいつも、次に開催される日を楽しみにしています。
あなたも、パイーザ祭を楽しみにしているので、次の開催日まであと何日あるのか早く知りたいです。

そこで、あなたには、現在の日付と次のパイーザ祭の開催日が与えられるので、
次のパイーザ祭までの日数を計算するプログラムを作ってもらいます。
ただし、今年パイーザ祭は開催されないことはわかっており、今日の日付はカウントされません。


入力される値
入力は以下のフォーマットで与えられます。
y m d  
a b
・1 行目には計算を始める基準日の年を表す整数 y, 月を表す整数 m, 
日を表す整数 d がこの順に半角スペース区切りで与えられます。
・2 行目には次の開催日の月を表す整数 a, 日を表す整数 b がこの順に半角スペース区切りで与えられます。
・入力は合計で 2 行となり、入力値最終行の末尾に改行が一つ入ります。



期待する出力
次の開催日までの日数を整数で出力してください。また、基準日も開催日までの日数に含みます。
出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ y ≦ 10000
・1 ≦ m ≦ 13
・1 ≦ d ≦ (m 月の最終日)
・1 ≦ a ≦ 13
・1 ≦ b ≦ (a 月の最終日)
・ただし、 y を 4 で割った余りは 1 であることはありません。

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
  const [year, month, day] = lines[0].split(" ").map(Number);
  const [next_month, next_day] = lines[1].split(" ").map(Number);
  const year_day = 181;

  // 現在の日を通算にする。
  let add_monthday_c = 0;
  // 偶数月の日数は15日、奇数月の日数は13日である。
  for (let i = 1; i < month; i++) i % 2 === 0 ? (add_monthday_c += 15) : (add_monthday_c += 13);
  // 通算の日 = 今年 * 1年の合計日 + まるまる1ヵ月ある月の合計 + 今月の経過日
  const current_day = year * year_day + add_monthday_c + day;

  // 次の年を求める。
  const unit = Math.floor(year / 4) * 4 + 1;
  const next_year = unit <= year ? unit + 4 : unit;

  // 次の年を通算にする。
  let add_monthday_n = 0;
  // 偶数月の日数は15日、奇数月の日数は13日である。
  for (let j = 1; j < next_month; j++) j % 2 === 0 ? (add_monthday_n += 15) : (add_monthday_n += 13);
  // 通算の日 = 次の年 * 1年の合計日 + 前月までの合計日数 + 開催日の「日」
  const next = next_year * year_day + add_monthday_n + next_day;

  // 次の日までの日にちを計算する
  const answer = next - current_day;
  console.log(answer);
});
