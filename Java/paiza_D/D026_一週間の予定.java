
/*
あなたは1週間を全て休みにするために有給を申請することにしました。もともと決まっている休みもあります。

改行区切りで7日間のもともと決まった休みが、休みならば「yes」、休みでなければ「no」と入力されます。
有給申請しなくては行けない日数を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<String> checkList = new ArrayList<>();
        for (int i = 0; i < 7; i++) {
            String day = sc.next();
            checkList.add(day);
        }

        int count = 0;
        for (int j = 0; j < checkList.size(); j++) {
            if (checkList.get(j).equals("no"))
                count++;
        }

        System.out.println(count);
    }
}