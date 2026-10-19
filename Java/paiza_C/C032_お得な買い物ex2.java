import java.util.*;

// Weaponクラス
class Weapon {
    String weaponName;
    int weaponAttack;

    public Weapon(String name, int attack) {
        this.weaponName = name;
        this.weaponAttack = attack;
    }

    public void output() {
        System.out.println(this.weaponName + " " + this.weaponAttack);
    }

}

// Userクラス
class User {
    String UserName;
    int UserHp;
    String UserWeapon;

    public User(String name, int hp, String weaponName) {
        this.UserName = name;
        this.UserHp = hp;
        this.UserWeapon = weaponName;
    }

    public void output() {
        System.out.println(this.UserName + " " + this.UserHp + " " + this.UserWeapon);
    }
}

// // 呼び出される側のクラス
// class Calculator {
// public int add(int a, int b) {
// return a + b;
// }
// }

// // 呼び出し元のクラス
// public class Main {
// public static void main(String[] args) {
// // 1. 別のクラスをインスタンス化する
// Calculator calc = new Calculator();

// // 2. インスタンス名.メソッド名() で呼び出す
// int result = calc.add(5, 3);
// System.out.println(result); // 8
// }
// }

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] playerData = sc.nextLine().split(" ");
        final String[] EmemyData = sc.nextLine().split(" ");
        final int attackTimes = sc.nextInt();

        Weapon playerWeapon = new Weapon(playerData[2], Integer.parseInt(playerData[3]));
        Weapon ememyWeapon = new Weapon(EmemyData[2], Integer.parseInt(EmemyData[3]));
        playerWeapon.output();
        ememyWeapon.output();

        // インスタンス化する。以降はインスタンスを操作。
        User player = new User(playerData[0], Integer.parseInt(playerData[1]), playerData[2]);
        User ememy = new User(EmemyData[0], Integer.parseInt(EmemyData[1]), EmemyData[2]);
        player.output();
        ememy.output();

        System.out.println(Arrays.toString(EmemyData));
        System.out.println(attackTimes);
    }
}