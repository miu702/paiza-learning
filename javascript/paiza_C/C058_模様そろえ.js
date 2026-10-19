/*
あなたの会社では、お菓子を工場で製造しており、N 角柱の箱に入れ販売しています。
箱の各側面には半角英字が 1 文字書かれており、これにより箱の向きが決まります。


工場では、出荷前に箱の向きを一通りにそろえる必要があります。
そろえる向きは一通りに定められており、この向きにそろうように箱を右回りに回転させます。
向きをそろえる機械の特性上、右回りにしか回転させることができません。
あなたのタスクは、1 側面分の回転を 1 回として、箱の向きがそろう最小回転数を計算することです。



入力される値
入力は以下のフォーマットで与えられます。

N t s
・1 行目には箱の側面の数を表す N、そろえる向きを表す文字列 t、
最初の箱の向きを表す文字列 s がこの順に半角スペース区切りで与えられます。
・入力は 1 行となり、末尾に改行が 1 つ入ります。


期待する出力
箱の向きがそろう最小回転数を整数で出力してください。
末尾に改行を入れ、余計な文字、空行を含んではいけません。


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
  // 箱の面の数、目標の向き、現在の向きを定義する。
  const [number, target, box] = lines[0].split(" ");

  // 箱を回転させる。
  let dx = 0; // 切り取り位置
  let rotate = 0; // 回転数
  let processing = [...box];
  for (let i = 0; i < number; i++) {
    const current = processing.slice(dx);

    // ここで一致するか調査する。
    if (target === current.join("")) {
      console.log(rotate);
      break;
    }

    // ここで回転する。
    processing.push(processing[dx]);
    dx++;
    rotate++;
  }
});
