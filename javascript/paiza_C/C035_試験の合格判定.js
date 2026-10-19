/*
総合力を重視する paiza 大学の入試では 1 次試験 (英語、数学、理科、国語、地理歴史の 5 科目で各 100 点満点) の成績で
2段階選抜を行います。2段階選抜を通過する条件は以下のようになっています。

全科目の合計得点が 350 点以上
理系の受験者の場合は理系 2 科目 (数学、理科) の合計得点が 160 点以上
文系の受験者の場合は文系 2 科目 (国語、地理歴史) の合計得点が 160 点以上
受験者それぞれの各科目の点数が入力されるので、何人2段階選抜を通過できるかを求めてください。
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
  const points = [];
  for (let i = 0; i < people; i++) {
    points.push(lines[i + 1].split(" "));
  }
  let passing = 0;
  for (let j = 0; j < people; j++) {
    const total = Number(points[j][1]) + Number(points[j][2]) + Number(points[j][3]) + Number(points[j][4]) + Number(points[j][5]);
    if (total < 350) continue;
    if (points[j][0] === "s") {
      const Sciences = Number(points[j][2]) + Number(points[j][3]);
      if (Sciences >= 160) {
        passing++;
      }
    } else if (points[j][0] === "l") {
      const Humanities = Number(points[j][4]) + Number(points[j][5]);
      if (Humanities >= 160) {
        passing++;
      }
    }
  }

  console.log(passing);
});
