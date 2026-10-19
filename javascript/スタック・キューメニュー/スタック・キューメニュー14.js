/*
レンタルビデオ店を経営している paiza 君は、スタックを利用することで、
レンタルビデオの貸し借りをした後の棚の状態を管理することができると考えました。
レンタルビデオ店では、貸出時は棚の先頭のビデオを取り出し、返却時は返されたビデオを棚の先頭に置きます。

paiza 君は店のある 1 つの棚について棚の状態を管理してみることにしました。
開店時に棚にあるビデオの管理番号と、営業中の貸出・返却の内容が与えられるので、
閉店時に棚に残っているビデオの管理番号を求めましょう。

・rent
棚の先頭のビデオを貸し出す。
・return X
管理番号 X のビデオが返却される。

入力される値
N
X_1
...
X_N
K
Q_1
...
Q_K
・1 行目では開店時に棚にあるビデオの個数 N が与えられます。
・2 行目からの N 行では、開店時に棚にあるビデオの管理番号が末尾から順に与えられます。
・N + 2 行目では、与えられる貸出・返却の回数 K が与えられます。
・N + 3 行目からの K 行では、貸出・返却の内容が時系列順に与えられます。
入力値最終行の末尾に改行が１つ入ります。


期待する出力
・閉店時に棚に残っているビデオの管理番号を、棚の先頭から順に改行区切りで出力してください。


条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ N ≦ 10,000
・1 ≦ X_i ≦ 100,000(1 ≦ i ≦ N)
・1 ≦ K ≦ 10000
・棚が空の状態で rent は与えられないことが保証されている
・Q_i は次のいずれかの形式
「rent」
「return X(1 ≦ X ≦ 100,000)」
・管理番号は重複することがないことが保証されている。


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
  // -- 入力 → 変数 --
  const videoNum = Number(lines[0]);
  const videos = lines.slice(1, videoNum + 1).map(Number);
  const recordNum = Number(lines[videoNum + 1]);
  const records = lines.slice(videoNum + 2).map((r) => r.split(" "));
  // -- 入力 → 変数end --

  // -- スタックを操作し、シュミレーションする --
  const stack = [...videos];

  for (const [command, number] of records) {
    if (!(command === "return" || command === "rent")) {
      console.error(`不正な操作${command}があります。`);
      return;
    }

    command === "rent" ? rentVideo() : returnVideo(number);
  }
  // -- スタックを操作し、シュミレーションするend --

  // -- 貸出処理 --
  function rentVideo() {
    stack.pop();
  }

  // -- 返却処理 --
  function returnVideo(N) {
    stack.push(N);
  }

  // -- 在庫を出力する --
  while (stack.length > 0) {
    console.log(stack[stack.length - 1]);
    stack.pop();
  }
});
