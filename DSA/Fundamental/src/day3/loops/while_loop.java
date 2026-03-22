package day3.loops;
import java.util.Scanner;
public class while_loop {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 5) {
            System.out.println(i);
            i++;
        }

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int sum = 0;
        int j = 1;
        while (j <= n) {
            sum = sum + i;
            j++;
        }
        System.out.println("Sum = " + sum);
    }
}
