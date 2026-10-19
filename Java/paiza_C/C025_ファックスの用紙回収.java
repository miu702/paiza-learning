/*
あなたは届いたファックスをファックス機まで取りに行く仕事を担当しています。
しかし、 あなたのデスクからファックス機までは遠いので、 あなたはいつも取りに行く回数を最小にしています。 
今日は何回紙を取りに行く必要があるのでしょうか。

理想的には、 1 日の最後に 1 度だけ取りに行くことが理想ですが、 実際には 2つの問題があります。

1つ目は、 届いた紙の数が多すぎて1度に全て運べないことです。
例えば、 紙が100 枚届いているとき、 あなたが 1 回につき 30 枚まで運べる場合は 4 回、 
50 枚まで運べる場合は 2 回取りに行く必要があります。
2 つ目は、 あまりに長い時間ファックス機に届いた紙を取りに行かないと、 上司に怒られてしまうことです。
具体的には、 x 時 y 分に届いた紙は、 x 時 59 分までに取りに行かないと怒られてしまいます。

例えば、

・3 時 20 分に 70 枚
・3 時 40 分に 170 枚
・3 時 59 分に 90 枚
・4 時 05 分に 55 枚
・4 時 25 分に 40 枚

届くとし、あなたは 1 度につき 50 枚運べるとします。 この時、 3 時 59 分までに取りに行く必要のある紙の枚数は、
70 + 170 + 90 = 330 枚です。 あなたは 1 回につき 50 枚しか運べないので、 最低 7 回取りに行く必要が有ります。 
4 時 59 分までに取りに行く必要のある紙の枚数は、 55 + 40 = 95 枚で、 最低 2 回取りに行く必要があります。
よって、この場合は、 7 + 2 = 9 回は紙を取りに行く必要があります。

あなたが 1 回で運べる紙の最大枚数 M、 今日 1 日にファックスが届く回数 N、 
また、その N 回それぞれについて、いつ何枚の紙が届くのかという情報が与えられます。 
この情報を使って、 今日、ファックス機に何回紙を取りに行く必要があるのかを求めて下さい。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 持てる最大数と、ファックスの回数を定義する
        Scanner sc = new Scanner(System.in);
        final String maxCarryStr = sc.nextLine();
        final String timesStr = sc.nextLine();

        
        // 処理に必要な変数を定義
        int total = 0;// 移動回数
        int current = 0;// 溜まっている紙
        int previous = 0;// 前の時間
        
        
        // ファックスの回数分ループする
        for (int i = 0; i < Integer.parseInt(timesStr); i++) {
            final String[] data = sc.nextLine().split(" ");
            final int hour = Integer.parseInt(data[0]);
            final int minutes = Integer.parseInt(data[1]);
            final int papers = Integer.parseInt(data[2]);

            // 1、時間が変わったとわかった時に紙を貯める前に回収する
            if (current != 0 && previous != hour) {
                final int add = addMoves(maxCarryStr, current);
                total += add;
                current = 0;
            }

            // 時間を変更し、紙を貯める
            previous = hour;
            current += papers;

            // 2、最後に取りにいく。
            if (i == Integer.parseInt(timesStr) - 1) {
                final int add = addMoves(maxCarryStr, current);
                total += add;
                current = 0;
            }

        }


        // 結果を出力する
        System.out.println(total);

    }

    
    // ここで1回で必要な移動回数を計算する
    static Integer addMoves(String maxCarryStr, int current) {
        int number = current / Integer.parseInt(maxCarryStr);
        int rest = current % Integer.parseInt(maxCarryStr);

        if (rest > 0) {
            return number + 1;
        } else {
            return number;
        }

    }

}