/*
練習問題：銀行口座を作ろう

あなたは銀行の口座管理プログラムを作っています。1つの口座には、以下の情報があります。

name：口座名義人の名前
balance：残高

口座に対して、以下の操作を行えるようにしてください。
ルール
1、入金
残高に price 円を加算する。

2、出金
残高から price 円を減らす。
ただし、残高より多く出金しようとした場合は出金しない。

その場合は、残高不足ですと表示する。

3、残高確認
現在の残高を返す。
*/

import java.util.*;

// クラス
class BankAccount {
    // メンバ変数
    String name;
    Integer balance;

    // コンストラクター
    public BankAccount(String userName, Integer userBalance) {
        this.name = userName;
        this.balance = userBalance;
    }

    // 操作が正しいかチェックする
    public void operation(Integer kind, Integer price) {
        switch (kind) {
            case 1:
                this.payment(price);
                break;

            case 2:
                this.withdrawal(price);
                break;

            default:
                System.out.println("不正な操作があります。");
                return;
        }
    }

    // 入金
    public void payment(Integer price) {
        this.balance += price;
    }

    // 出金
    public void withdrawal(Integer price) {
        if (this.balance >= price) {
            this.balance -= price;
        } else {
            System.out.println("残高不足です");
        }
    }

    // 最終残高の出力
    public Integer outputBalance() {
        return this.balance;
    }

}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] userData = sc.nextLine().split(" ");
        final String userName = userData[0];
        final int userBalance = Integer.parseInt(userData[1]);
        final String numberStr = sc.nextLine();

        // ここでインスタンス化。以降インスタンスを操作する
        BankAccount B = new BankAccount(userName, userBalance);

        // 指定した回数講座を操作する
        for (int i = 0; i < Integer.parseInt(numberStr); i++) {
            final String[] operationData = sc.nextLine().split(" ");
            final int kind = Integer.parseInt(operationData[0]);
            final int price = Integer.parseInt(operationData[1]);
            B.operation(kind, price);
        }

        // 最終残高を出力する
        System.out.println(B.outputBalance());

    }
}