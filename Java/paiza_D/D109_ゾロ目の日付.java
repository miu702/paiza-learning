import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");

        ArrayList<String> review = new ArrayList<>();
        for (String N : numberStr) {
            final String[] num = N.split("");
            review.addAll(Arrays.asList(num));
        }

        final String sample = review.get(0);
        boolean check = true;
        for (int i = 0; i < review.size(); i++) {
            if (!review.get(i).equals(sample)) {
                check = false;
                break;
            }
        }

        System.out.println(check ? "Yes" : "No");
    }
}