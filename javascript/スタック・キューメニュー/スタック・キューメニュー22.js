/*
カードゲームにはよくキーカードと呼ばれる、引けるかどうかで試合を大きく左右するカードが存在します。
どうしてもゲームに勝ちたい paiza 君は、40 枚のデッキの中に入っている
 1 枚のキーカードを引きたいと考えていました。
そこで paiza 君は、山札の並びといくつかの発動する効果を入力した時にキーカードを引くことが
できるかを判定するプログラムを作成することにしました。
「キーカードが山札の上から何枚目にあるか」と発動する効果が時系列順に与えられるので、
paiza 君がキーカードを引くことができるかを判定してください。
また、キーカードを引くことができる場合は、それが何回目の効果発動後になるかを答えてください。


なお、発動する効果は次のいずれかです。
・game_start
山札の上から 5 枚引く。

・draw X
山札の上から X 枚引く。

・discard X
山札の上から X 枚を、一番上のカードから順番に墓地へ送る。

・return_from_the_graveyard X
墓地の上から X 枚を、一番上のカードから順番に山札の一番下に加える。

・exclude X
山札の上から X 枚を、一番上のカードから順番に除外する。

・return_from_the_exclusion X
除外されているカードの上から X 枚を、一番上のカードから順番に山札の一番下に加える。


入力される値
N K
event_1
...
event_K
・1 行目ではキーカードが山札の上から何枚目にあるかを表す N と効果を発動する回数 K が
半角スペース区切りで与えられます。
・2 行目からの K 行では、発動した効果の内容が時系列順に与えられます。
入力値最終行の末尾に改行が１つ入ります。



期待する出力
・paiza 君がキーカードを引くことができる場合は、それが何回目の効果発動後になるかを出力してください。
（game_start も効果に含まれることに注意してください。）
・キーカードを引くことができない場合は "Lose" と出力してください。


条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ N ≦ 40
・event_1 は game_start であり、以後 game_start は登場しない。
・event_i (2 ≦ i) は次のいずれかの形式
「discard X」
「draw X」
「return_from_the_graveyard X 」
「exclude X」
「return_from_the_exclusion X」
・効果発動後に山札・墓地・除外のカードの枚数が負になるような入力は与えられないことが保証されている。

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
  const [key, steps] = lines[0].split(" ").map(Number);
  const effectList = lines.slice(1).map((e) => e.split(" "));
  // -- 入力 → 変数end --

  // -- デッキを作成する --
  const sheets = 40;
  const deck = Array(sheets).fill(false); // キュー方式で管理。山札の上 = インデックス番号0
  deck[key - 1] = true; // キーカードの場所

  const pool = []; // 一時的な保管
  const cemetery = []; // 墓地
  const hand = []; // 手札
  // -- デッキを作成する --

  // -- 処理を実施する --
  let found = false; // 見つかったか？
  let index = 0; // デッキのスタート位置
  let count = 0; // 効果回数

  for (const [command, numberStr] of effectList) {
    if (found) break;
    count++;
    const number = Number(numberStr);

    // -- 処理スイッチ設置 --
    switch (command) {
      case "game_start":
        gameStart();
        break;

      case "draw":
        draw(number);
        break;

      case "discard":
        discard(number);
        break;

      case "return_from_the_graveyard":
        returnCemetery(number);
        break;

      case "exclude":
        exclude(number);
        break;

      case "return_from_the_exclusion":
        returnPool(number);
        break;

      default:
        console.error(`不正なコマンド${command}があります。`);
        return;
    }
  }

  //  -- 引いたカードのチェック --
  function cardCheck(card) {
    // 発見できたら、回数を出力し、処理を終了。
    if (card) {
      console.log(count);
      found = true;
      return;
    }
  }

  // -- 処理場所 --

  // ゲーム開始
  function gameStart() {
    for (let i = 0; i < 5; i++) {
      if (found) break;
      cardCheck(deck[i]);
      hand.push(deck[i]);
      index++;
    }
  }

  // ドローする
  function draw(number) {
    const indexEnd = index + number;
    for (let draw = index; draw < indexEnd; draw++) {
      cardCheck(deck[draw]);
      hand.push(deck[draw]);
      index++;
    }
  }

  // 墓地に送る
  function discard(number) {
    const indexEnd = index + number;
    for (let dis = index; dis < indexEnd; dis++) {
      cemetery.push(deck[dis]);
      index++;
    }
  }

  // 墓地から戻す
  function returnCemetery(number) {
    while (number > 0) {
      const v = cemetery.pop();
      deck.push(v);
      number--;
    }
  }

  // 別の場所にプールする
  function exclude(number) {
    const indexEnd = index + number;
    for (let exc = index; exc < indexEnd; exc++) {
      pool.push(deck[exc]);
      index++;
    }
  }

  // 別の場所から戻す
  function returnPool(number) {
    while (number > 0) {
      const v = pool.pop();
      deck.push(v);
      number--;
    }
  }

  // -- 最後まで発見できないと、負け --
  if (!found) console.log("Lose");
});
