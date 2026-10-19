/*
就活サイト paiza では、就活生の食生活を応援するために、レストラン paiza の経営を始めました。 
このレストランでは、バイキング形式となっており、就活生の健康管理のために、
各料理には 100 g あたりのカロリーが書かれています。


料理の品数と各料理の 100 g あたりのカロリー、また、就活生の人数と、
それぞれの食べた量 ( g ) のリストが与えられるので、あなたは各就活生が摂取したカロリーの合計を
計算してください。

また、食べた各料理のカロリーが小数になる場合、小数点以下を切り捨ててから和を計算してください。


入力される値
入力は以下のフォーマットで与えられます。

M N  
c_1  
c_2  
...  
c_M
a_{1,1} a_{1,2}  ... a_{1,M}  
a_{2,1} a_{2,2}  ... a_{2,M}  
...  
a_{N,1} a_{N,2}  ... a_{N,M}
・1 行目にそれぞれ料理の品数、就活生の人数を表す整数 M , N がこの順で半角スペース区切りで与えられます。

・続く M 行のうちの i 行目 (1 ≦ i ≦ M) には、100 g あたりのカロリーを表す整数 c_i がこ
の順で半角スペース区切りで与えられます。
・さらに続く N 行のうちの i 行目 (1 ≦ i ≦ N) には M 個の整数が半角スペース区切りで与えられます。
i 行目の j 番目 (1 ≦ j ≦ M) の整数 a_{i, j} は i 番目の就活生が食べた、j 番目の料理の量を表します。
・入力は合計で M + N + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。



期待する出力
各就活生の摂取したカロリーの合計 s_i を以下の形式で出力してください。
s_1  
s_2  
...
s_N

・期待する出力は N 行からなります。
・i 行目 (1 ≦ i ≦ N) にはそれぞれ i 番目の就活生が摂取したカロリーの合計を表す整数 s_i を出力して下さい。
・出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。


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
  // 入力から切り取る
  const [dish_int, people] = lines[0].split(" ").map(Number);
  const dishes = lines.slice(1, dish_int + 1);
  const eat_data = lines.slice(dish_int + 1);

  // メニューのカロリーを記録する。
  const calories = [];
  for (let i = 0; i < dishes.length; i++) {
    calories.push(dishes[i]);
  }

  // 人数分計算をする。
  for (const eat of eat_data) {
    let total_calories = 0;
    const details = eat.split(" ");

    for (let D = 0; D < details.length; D++) {
      const gram = details[D];
      const calorie = calories[D];

      // 100gあたりのカロリーなので、100で割る。
      total_calories += Math.floor((calorie * gram) / 100);
    }

    // 1人の合計カロリーを出力する。
    console.log(total_calories);
  }
});
