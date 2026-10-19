/*
あなたはとあるゲーム大会の事務係になりました。
あなたの仕事は各試合の結果報告をまとめ、勝敗の結果がひと目で分かる表をつくることです。
これを自動化するプログラムをつくりましょう。

この大会は総当りのリーグ戦なのですべての参加者どうしが試合を行います。
なお、このゲームに引き分けは存在しません。

例)

参加者数: 3 (参加者 1 ~ 3)
結果報告:
参加者 1 と 3 が試合を行い、参加者 1 の勝利
参加者 1 と 2 が試合を行い、参加者 2 の勝利
参加者 2 と 3 が試合を行い、参加者 2 の勝利

これをまとめると以下のような表にすることができます。
ここで、i 行 j 列目 (i ≠ j) は参加者 i から見た参加者 j との試合の結果を表し、
勝利なら "W"、敗北なら "L" となります。i 行 i 列目は「参加者 i と参加者 i の試合」という存在しない試合に
対応するので半角ハイフン ("-") で埋めます。
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
  // チームの数を定義する
  const team = Number(lines[0]);

  // 出力用の初期データを作成する
  const sheet = Array.from({ length: team }, () => Array(team).fill("-"));

  // 試合の数を計算し、使用する
  const match = (team * (team - 1)) / 2;
  for (let i = 1; i <= match; i++) {
    // インデックス番号に対応しながら、勝敗結果を更新する
    const [win, lose] = lines[i].split(" ");
    sheet[win - 1][lose - 1] = "W";
    sheet[lose - 1][win - 1] = "L";
  }

  // 最終結果を出力する
  for (const S of sheet) console.log(S.join(" "));
});
