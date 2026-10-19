
/*
あなたはレストランで何を注文しようか迷っています。しかしあまり時間がないので「どれにしようかな天の神様の言うとおり」で决めてしまいましょう。
選ばれるメニューはこの文字数 21 を迷っているメニューの数で割れば求められます。ただし余りが 0 となるときはそのメニューの中で最後のものが選ばれることに注意しましょう。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();
        final int standard = 21;

        final int menu = standard % number;

        if (menu == 0) {
            System.out.println(number);
        } else {
            System.out.println(menu);
        }

    }
}