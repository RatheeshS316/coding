package day3.loops;
import java.util.Scanner;
public class for_loops {
    public static void main(String[] args) {
//
//        A loop is used to repeat a block of code multiple times until a condition becomes false.
//     👉 Example:
//        Print numbers from 1 to 5 without loop → many println()
//        With loop → only one block of code


      // print 1 - 5 numbers
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }

      // print even numbers in 1 - 10 numbers
        for (int i = 2; i <= 10; i += 2) {
            System.out.println(i);
        }


      // give input numbers print 1 - 10 numbers
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
    }
}
