import java.util.*;

// クラスの中では、メソッドでないと使えない。
class PointCalculation {
    // クラスの中で使う変数もデータ型を定義する
    Integer points;
    Integer groceries;
    Integer books;
    Integer clothing;
    Integer others;

    Integer groceries_point;
    Integer books_point;
    Integer clothing_point;
    Integer others_point;

    Integer addPoint;

    public PointCalculation() {
        this.points = 0;
        this.groceries = 0;
        this.books = 0;
        this.clothing = 0;
        this.others = 0;
    }

    public void buy(Integer command, Integer price) {
        if (command == 0) {
            this.groceries += price;

        } else if (command == 1) {
            this.books += price;

        } else if (command == 2) {
            this.clothing += price;

        } else if (command == 3) {
            this.others += price;

        } else {
            // void の場合は値を返せないので、エラーメッセージを表示して return; で処理を抜ける
            System.out.println("指定した商品はないです");
            return;
        }
    }

    public void sum_point() {
        groceries_point = this.groceries / 100 * 5;
        books_point = this.books / 100 * 3;
        clothing_point = this.clothing / 100 * 2;
        others_point = this.others / 100 * 1;

        // this.メソッド名(引数)でメソッド→他のメソッドにデータを渡せる。
        addPoint = groceries_point + books_point + clothing_point + others_point;
        this.add_point(addPoint);

    }

    // 受け取るときもデータ型 引数名とする
    public void add_point(Integer addPoint) {
        this.points += addPoint;

    }

    // メソッドの書き方
    // public returnのデータ型：returnしない時はvoid メソッド名() {処理}
    public Integer output() {
        return this.points;
    }

}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String numberStr = sc.nextLine();

        // インスタンス化する
        PointCalculation c = new PointCalculation();

        // 商品を買う
        for (int i = 0; i < Integer.parseInt(numberStr); i++) {
            final String[] numbers = sc.nextLine().split(" ");
            final Integer type = Integer.parseInt(numbers[0]);
            final Integer price = Integer.parseInt(numbers[1]);

            // クラスに投入する
            c.buy(type, price);
        }
        // ポイントの計算をする。
        c.sum_point();

        // 結果を出力する。
        System.out.println(c.output());
    }
}