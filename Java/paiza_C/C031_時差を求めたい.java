
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
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 都市の数を定義する
    Scanner sc = new Scanner(System.in);
    final String numberStr = sc.nextLine();

    // 都市のデータをオブジェクトに投入する。
    // 入力された都市の順番で出力する必要があるため、
    // LinkedHashMapで順番を保持する。
    Map<String, Integer> cityData = new LinkedHashMap<>();
    for (int i = 0; i < Integer.parseInt(numberStr); i++) {
      final String[] fullTime = sc.nextLine().split(" ");
      final String city = fullTime[0];
      final int difference = Integer.parseInt(fullTime[1]);
      cityData.put(city, difference);
    }

    // ポストの時間を定義する
    final String[] posts = sc.nextLine().split(" ");
    final String[] postTime = posts[1].split(":");
    final String postCity = posts[0];
    final int postHour = Integer.parseInt(postTime[0]);
    final int postMinutes = Integer.parseInt(postTime[1]);

    // 都市の数だけ時間を計算する
    for (Map.Entry<String, Integer> entry : cityData.entrySet()) {
      // 出力する時間の計算をする。(投稿時間 + 別の都市の0からの時間 - 投稿場所の0からの時間 + 24) % 24で計算できる。
      final int newHour = ((postHour + entry.getValue() - cityData.get(postCity)) + 24) % 24;

      // 時間を作成し、出力する。埋める数 桁数 データ型で定義できる。
      final String Time = String.format("%02d:%02d", newHour, postMinutes);
      System.out.println(Time);
    }
  }
}