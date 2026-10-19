/*
あなたは世界展開を目指す SNS "paizabook" を開発しているエンジニアです。
paizabook では友達が投稿した日記などを見ることが出来ますが、
ユーザの住んでいる場所によって表示される投稿時刻を修正する必要があります。

例えば、ロンドンに住んでいるユーザが現地時刻 8:30 に投稿した日記の時刻は、
日本に住んでいるユーザの画面では 17:30 と表示されなければなりません。
これは、日本の時刻がロンドンの時刻よりもちょうど 9 時間進んでいるためです。
なお、時間は 00:00 から 23:59 までの 24 時間制で表すものとします。

N 個の都市の時差を表す情報と、その中のある都市に住むユーザの日記の投稿時刻 (現地時間) が入力されるので
それぞれの都市に住むユーザの画面に表示される投稿時刻を出力するプログラムを作成して下さい。
"""
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
  // 都市の数を定義する
  const citys = Number(lines[0]);

  // 都市の数を定義する
  const city_datas = {};
  for (let i = 0; i < citys; i++) {
    const city_data = lines[i + 1].split(" ");
    const city = city_data[0];
    const difference = Number(city_data[1]);
    city_datas[city] = difference;
  }

  // ポストした情報を定義する
  const post_data = lines[lines.length - 1].split(" ");
  const post_city = post_data[0];
  const post_time = post_data[1].split(":");
  const post_hour = Number(post_time[0]);
  const post_minutes = Number(post_time[1]);

  // オブジェクトの定義した都市をループしつつ、時間を作成する

  /*
    オブジェクトをループするには、
    Object.entries(オブジェクト名).forEach(([key, value]) => で定義できる。
  */
  Object.entries(city_datas).forEach(([key, value]) => {
    // 出力する時間の計算をする。(投稿時間 + 別の都市の0からの時間 - 投稿場所の0からの時間 + 24) %  24で計算できる。
    const new_hour = (post_hour + value - city_datas[post_city] + 24) % 24;

    // 別の都市の時間を作成する。テンプレートリテラルを使用するときに文字列に変更し、padStart(桁数, 埋める文字)で定義
    const full_time = `${String(new_hour).padStart(2, "0")}:${String(post_minutes).padStart(2, "0")}`;
    console.log(full_time);
  });
});
